import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect,Switch} from "react-router-dom";
// import {M_ProductSidebarRadux} from './cloud-product/cloud-product-mainframe'
// import {M_IsRouter} from '../../router/routerWidth';
//引入登录以后的首页组件
import {M_leecrsIndexBox} from '../component-library/leecrs/leecrs-index/leecrs-index-container'
// M$
import M$ from "../../static/introduce-js/m-$";

class M_Async_Router_Leecrs extends React.Component{

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
export default  M_Async_Router_Leecrs;