import React from 'react';
//登录注册页面容器组件
import {BasicExampleLogin} from '../component-library/login/login-container';
//引入css
import 'antd/dist/antd.css';
import '../../css/index.css';
// import '../../static/icon/m_icon/iconfont.css'
//设置全局语言
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
class NewApp extends React.Component{

    render(){
        console.log("这里是登录页面");
        //设置路由路径
        return(
            <div>
                    <div className={"m_login_box"}>
                        <BasicExampleLogin></BasicExampleLogin>
                    </div>
            </div>


        )
    }
};
export default NewApp;