# Generated by Django 2.2.5 on 2019-09-05 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='title',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
