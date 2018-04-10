import React from "react";
// import Bundle from '../../router/bundle.js';
import { BrowserRouter as Router, Route, Link ,Redirect,Switch} from "react-router-dom";
//引入登录注册组件
import {M_LeecrsIndex, M_LeecrsLider} from './leecrs-index-modules'
import M$ from "../../../../static/introduce-js/m-$";
import {M_IsRouter} from "../../../../router/routerWidth";
import {M_CloudProduct} from "../../product/product-container";
//首页logo
const sLoginLoGo = require('../../../../static/images/clound/login_logo.png');


const screen= (data)=>{
    // console.log(data);
    if(data==undefined){
        return "0";
    }else{
        return data
    }
};

//登录以后首页容器
export class M_leecrsIndexBox extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }

    render(){
        /*console.log("登陆以后的的总览页面");
        console.log(this.props);
        console.log(this.props.match.params.second);*/
        console.log(screen(this.props.match.params.second));
        let Coment = M_LeecrsIndex;
        if(this.props.match.params.second!=undefined){
                Coment = M_leecrs_Calculation;
        }
        return(
            <div>
                <div className={"m_leecrs_lider_box"} style={{height:(M$().M_NoThisHeight()-50)}}>
                    <M_LeecrsLider keys = {{secound:screen(this.props.match.params.second),three:screen(this.props.match.params.three)}}></M_LeecrsLider>
                </div>
                <div className={"m_leecrs_main_box"}>
                    <Coment {...this.props}></Coment>
                </div>
            </div>
        )
    }
}
//计算容器
export class M_leecrs_Calculation  extends React.Component{
    render(){
       /* console.log("二级被重载");
        console.log(this.props);*/
        return(
            <Route path={`${this.props.match.path}`} component={M_leecrs_threeLevel} />
        )
    }
}
export class M_leecrs_threeLevel extends React.Component{
    render(){
      /*  console.log("登录以后的三级路由");
        console.log(this.props);
        console.log(this.props.match.url.split('/')[1].split('/')[0]);*/
        // console.log(this.props.match.url.split('/')[1].split('/')[0]);
        // console.log(this.props.match.url.split('/')[1].split('/')[0]);
        let Homes = null;
        Homes = M_IsRouter(this.props.match.url.split('/')[1].split('/')[0],this.props.match.params.second,this.props.match.params.three);
        if(Homes!=null){
            return(<Homes sFmainRightLeft={this.props.sFmainRightLeft} ></Homes>)
        }else{
            return null
        }
    }
}