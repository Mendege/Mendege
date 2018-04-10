import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect,Switch} from "react-router-dom";
// import {M_ProductSidebarRadux} from './cloud-product/cloud-product-mainframe'
// import {M_IsRouter} from '../../router/routerWidth';
//引入公共头部导航以及底部导航
import {M_cloud,M_Footer,M_SubMenuLandings} from '../component-library/public-footheader/footheader-container'
//引入首页容器组件
import { M_cloud_index} from '../component-library/index/index-container';
/*// 引入产品页面
import {M_CloudProductS} from '../component-library/product/product-container';
//引入解决方案页面
import {M_SchemeBox} from '../component-library/scheme/scheme-container';
//引入服务与支持页面
import {M_ServeBox} from '../component-library/serve/serve-container';
//引入关于我们页面
import {M_RegardBox} from '../component-library/regard/regard-container'*/
//引入登录以后的首页组件
import {M_leecrsIndexBox, M_leecrs_Calculation} from '../component-library/leecrs/leecrs-index/leecrs-index-container'
// M$
import M$ from "../../static/introduce-js/m-$";
// 引入按需加载
import Bundle from '../../router/bundle.js';

//引入异步加载的路由容器
const M_Async_Router = (props) => (
    <Bundle load={() => import('./m_rganizations_async')}>
        {(M_Async_Router) => <M_Async_Router {...props}/>}
    </Bundle>
);
//登录前的路由容器
export class BasicExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isIndex:<Redirect path="/" to={{pathname: '/'}} />
        }
    }
    componentDidMount(){

    }

    render(){
        console.log(this.props);
        return(
            <Switch>
                <div>
                    <M_cloud></M_cloud>
                     <Route exact={true} path="/" component={M_cloud_index} />
                    <M_Async_Router></M_Async_Router>
                    <M_Footer></M_Footer>
                </div>
            </Switch>
        )
    }
}
//登录后的路由容器
export class BasicExampleLoginAfter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isIndex:<Redirect path="/" to={{pathname: '/'}} />
        }
    }
    componentDidMount(){
        M$('.m_leecrs_main_all_box').M_css({"height":(M$().M_NoThisHeight()-50)+"px"});
    }

    render(){
        return(
            <Switch>
                <div>
                    <div className={"m_leecrs_header_all_box"}>
                        <M_SubMenuLandings></M_SubMenuLandings>
                    </div>
                    <div className={"m_leecrs_main_all_box"}>
                        <Route exact={true} path="/" component={M_leecrsIndexBox} />
                        {/*<Route path="/index.html" component={M_leecrsIndexBox} />*/}
                        <Route path="/leecrs-count/:second/:three" component={M_leecrsIndexBox} />
                    </div>
                </div>
            </Switch>
        )
    }
}



