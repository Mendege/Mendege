import React from "react";
// import Bundle from '../../router/bundle.js';
//引入登录注册组件
import {WrappedNormalLoginForm,WrappedRegistrationForm} from './login-modules'
//首页logo
const sLoginLoGo = require('../../../static/images/clound/login_logo.png');
//登录注册页面容器
export class BasicExampleLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:"login"
        }
    }
    componentDidMount(){

    }
    sFhanderIsLogin(data){
        this.setState({"isLogin":data});
    }
    render(){
        // sessionStorage.sLoginFlag = "login";
        const sLoginFlag = this.state.isLogin;
        let Component = null;
        if(sLoginFlag=="login"){
            Component=WrappedNormalLoginForm;
        }else if(sLoginFlag=="regist"){
            Component=WrappedRegistrationForm;
        }
        return(
            <div className={"m_login_content_box"}>
                <div className={"m_login_content_center"}>
                    <Component sFhanderIsLogin = {this.sFhanderIsLogin.bind(this)}></Component>
                </div>
                <div className={"m_login_footer"}>
                    <div className={"m_login_footer_top"}>
                            <span>
                                 <a href={"./index.html"} className={"m_login_footer_top_txt m__left"}>公司简介</a>
                                <span className={"m_login_footer_top_clon m__left"}></span>
                                <a className={"m_login_footer_top_txt m__left"}>联系我们</a>
                                <span className={"m_login_footer_top_clon m__left"}></span>
                                <a className={"m_login_footer_top_txt m__left"}>隐私声明</a>
                                <span className={"m_login_footer_top_clon m__left"}></span>
                                <a className={"m_login_footer_top_txt m__left"}>使用条款</a>
                                <span className={"m_login_footer_top_clon m__left"}></span>
                                <a className={"m_login_footer_top_txt m__left"}>商标</a>
                            </span>
                    </div>
                    <div className={"m_login_footer_bottom"}>
                        <div>公安备份00000000000000000-000000-000000</div>
                        <div>版权所有---北京新商界网络科技有限责任公司</div>
                    </div>
                </div>
            </div>
        )
    }
}