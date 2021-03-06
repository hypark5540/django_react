import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Layouts from './containers/Layouts';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';
import { Layout, Content } from 'antd';


class App extends Component {
    render() {
        return (
            <Layout>

                <Provider store={store}>
                    <Fragment>
                        <Header />
                        {/* <Layouts /> */}

                        <div className="container">
                            <Dashboard />
                        </div>



                    </Fragment>
                </Provider>

            </Layout>


        );

    }
}

ReactDOM.render(<App />, document.getElementById("app"));