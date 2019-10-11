import pandas as pd
import numpy as np
import sqlite3

from django.shortcuts import render
from demo.models import Dummy
from leads.models import Lead
from django.conf import settings
from sqlalchemy import create_engine
from sqlalchemy import exc, Column, Integer, Float, Date, String, VARCHAR

import logging
logger = logging.getLogger(__name__)


def connDB(df_result):
    print(df_result)

    # database_name = settings.DATABASES['default']['NAME']
    # database_url = 'sqlite:///{}'.format(database_name)
    # engine = create_engine(database_url, echo=True)

    # # Insert data data
    # with engine.connect() as conn, conn.begin():
    #     df_result.to_sql("Dummy", con=engine,
    #                      if_exists="replace", index=False, chunksize=1000)

    conn = sqlite3.connect(settings.DATABASES['default']['NAME'])
    print(settings.DATABASES['default']['NAME'])
    try:
        df_result.to_sql("demo_Dummy", con=conn,
                         if_exists="replace", index=False, chunksize=1000)
        print('ok!')
        print(Dummy.objects.all())
    except exc.OperationalError as e:
        logger.Info('Error occured while executing a query {}'.format(e.args))

    conn.close()


def run_power(a, x, b):
    return a*(x)**(-b)


def makeData():
    df = pd.DataFrame(columns=['id', 'logdate', 'col_a', 'col_b',
                               'ret', 'output', 'total', 'issuccess', 'servicecountry'])

    ARPPU = Lead.objects.latest('id').arppu
    PUR = Lead.objects.latest('id').pur
    NRU = Lead.objects.latest('id').nru
    purpose = Lead.objects.latest('id').goalMoney
    numberOfDate = Lead.objects.latest('id').numberOfDate
    servicecountry = 'KR'

    PU = PUR*NRU

    count = 0
    const_id = 0
    total = 0
    ret = 0

    for a in np.arange(0.1, 1.1, 0.1):
        for b in np.arange(0.1, 1.1, 0.1):
            for y in range(1, 31):
                total = total + (run_power(a, y, b)*PU*ARPPU/30/100)

            for x in range(1, numberOfDate+1):
                logdate = 'D'+str(x)
                ret = run_power(a, x, b)
                output = (run_power(a, x, b)*PU*ARPPU/30/100)

                df.loc[count] = [const_id+1, logdate, 'a='+str(a), 'b='+str(b), ret, output,
                                 total, 1 if total >= purpose else 0, servicecountry]
                count = count + 1
            const_id = const_id + 1
            total = 0

    return df


def index(request):
    if Lead.objects.all().exists():
        df = makeData()

        connDB(df)

        return render(request, 'frontend/index.html')
    else:
        return render(request, 'frontend/index.html')


# Create your views here.
