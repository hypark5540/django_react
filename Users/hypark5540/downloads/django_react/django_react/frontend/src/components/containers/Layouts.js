import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

export class Layouts extends Component {
    render() {
        // const { location } = props;
        // if (props.menu === '1')
        // {
        return (

            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>


        );
        // }
        // else
        // {
        //     return (<div></div>);
        // }
    }
}


// const CustomLayout = (props) => {
//     return (
//     <Layout className="layout">
//         <HeaderMenu menu={props.menu} location={props.location}/>
//         <Content style={{ padding: '0 0px' }}>
//             <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
//                 {props.children}
//             </div>
//         </Content>
//     </Layout>
//     );
// } 

export default Layouts;