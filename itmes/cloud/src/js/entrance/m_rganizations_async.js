import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect,Switch} from "react-router-dom";
// import {M_ProductSidebarRadux} from './cloud-product/cloud-product-mainframe'
// import {M_IsRouter} from '../../router/routerWidth';
// 引入产品页面
import {M_CloudProductS} from '../component-library/product/product-container';
//引入解决方案页面
import {M_SchemeBox} from '../component-library/scheme/scheme-container';
//引入服务与支持页面
import {M_ServeBox} from '../component-library/serve/serve-container';
//引入关于我们页面
import {M_RegardBox} from '../component-library/regard/regard-container'
// M$
import M$ from "../../static/introduce-js/m-$";
import {M_cloud_index} from "../component-library/index/index-container";

class M_Async_Router extends React.Component{

    render(){
        return(
            <div>
                <Route path="/index.html" component={M_cloud_index} />
                {/*//产品*/}
                <Route path="/clouds/:sub/:keys" component={M_CloudProductS} />
                <Route path="/scheme/:sub/:keys" component={M_SchemeBox} />
                <Route path="/serve/:sub/:keys" component={M_ServeBox} />
                <Route path="/regard/:sub/:keys" component={M_RegardBox} />
            </div>
        )
    }
}
export default  M_Async_Router;