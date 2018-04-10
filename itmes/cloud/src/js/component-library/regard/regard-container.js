import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import {M_IsRouter} from '../../../router/routerWidth';
import M$ from '../../../static/introduce-js/m-$';
import {M_cloudRegardNavTab, M_RegardBanner} from './regard-modules';
//解决方案页面
export class M_RegardBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        // let sdata =
        return(
            <div className={"m_scheme_box m_reaard_box"}>
                <div className={"m_reaard_banner"}>
                    <M_RegardBanner></M_RegardBanner>
                    <M_cloudRegardNavTab></M_cloudRegardNavTab>
                </div>
                <div className={"m_scheme_main_box  m_reaard_main_box"}>
                    <div className={"m_scheme_main"}>
                        <Route path={`${this.props.match.path}`} component={M_ServeSubpage} />
                    </div>
                </div>
            </div>
        )
    }
}
//服务页面子页面 （三级页面）
export class M_ServeSubpage extends React.Component{
    render(){
        console.log(this.props);
        let Homes = null;
        Homes = M_IsRouter(this.props.match.url.split('/')[1].split('/')[0],this.props.match.params.sub,this.props.match.params.keys);
        if(Homes!=null){
            return(<Homes ></Homes>)
        }else{
            return null
        }
    }
}