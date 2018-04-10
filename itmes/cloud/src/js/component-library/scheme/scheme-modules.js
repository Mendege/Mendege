import React from 'react';
//引入水平导航栏antd组件
import { Card} from 'antd';

import {Link} from 'react-router-dom';
//redux相关
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//引入m_$
import M$ from '../../../static/introduce-js/m-$';
import {M_ServeAllListPub} from "../commonality/public-library";

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 方案页下的banner组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_SchemeBanner extends React.Component{
    render(){
        let sUrl = require('../../../static/images/scheme/banner1.png');
        return(
            <div className={"m_scheme_banner_box"}>
                <img src={sUrl} alt="加载失败"/>
            </div>
        )
    }
}


/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 方案页下预览所有项组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_SchemeAll extends React.Component{
    render(){
        let sdata = this.props.state;
        sdata = [
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            },
            {
                link:"/scheme/1/2",
                linkTrue:true,
                title:"混合云",
                titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
                icon:"iconfont icon-ziyuan-xianxing"
            }
        ]
        return(
            <div className={"m_scheme_main_alllist_box"}>
                {
                    sdata.map((data,key)=>{
                        return(
                            <M_ServeAllListPub sFlag={1} sdata={data} key={key}></M_ServeAllListPub>
                        )
                    })
                }

            </div>
        )
    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 方案页下混合云页面组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_SchemeMixedCloud extends React.Component{
    render(){
        return(
            <div className={"m_scheme_mixed_cloud"}>
                方案页下混合云页面
            </div>
        )
    }
}

