import React from 'react';
//引入水平导航栏antd组件
import { Card,Menu,Icon} from 'antd';

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
* 服务页下的banner组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ServeBanner extends React.Component{
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
* 2018-03-01 M_cloudserveNavTab
* 服务页下的Nav 导航组件 组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_cloudserveNavTab extends React.Component {
    state = {
        current: '11',
        current0:"11"
    }

    handleClick = (e) => {
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeights=[];
        let heights = 445;
        let kes =[];
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    componentDidMount(){

    }
    //回到顶部
    sFscollTop(){
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        // window.scrollTo(0,0);
        this.setState({
            current: this.state.current0,
        });
        let timer = setInterval(function(){
            t-=70;
            if(t=>0){
                window.scrollTo(0,t);
            }
            if(t<=0){
                clearInterval(timer)
            }

        },1);
    }
    render() {
        let state = this.props.state;
        //模拟数据
        state= {
            titleList:[
                {
                    key:"11",
                    title:"用户指南",
                    icon:"mail",
                    link:"/serve/11/1"
                },
                {
                    key:"22",
                    title:"API手册",
                    icon:"mail",
                    link:"/serve/22/1"

                },
                {
                    key:"33",
                    title:"资料下载",
                    icon:"mail",
                    link:"/serve/33/1"
                },
                {
                    key:"44",
                    title:"技术分享",
                    icon:"mail",
                    link:"/serve/44/1"
                },
                {
                    key:"55",
                    title:"常见问题",
                    icon:"mail",
                    link:"/serve/55/1"

                }
            ]

        };
        return (
            <div className={"m_serve_navtab_box"}>
                <div id={"m_serve_navtab"} className={"m_serve_navtab"}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        {
                            state.titleList.map((data,key)=>{
                                return(
                                    <Menu.Item key={key} key={data.key}>
                                        <Icon type={data.icon} />
                                        <Link className={"m_serve_navtab_link"} to={data.link}>{data.title}</Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </div>
                <div className={"m_scoll_top_product"} onClick={this.sFscollTop.bind(this)}>

                </div>
            </div>


        );
    }
};


/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_ServeAll
* 服务页下预览  用户手册 所有项组件  11/1
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ServeUserAll extends React.Component{
    render(){
        let sdata = this.props.state;
        sdata = [
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            },
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            },
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            },
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            },
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            },
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            },
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            },
            {
                link:"/scheme/11/2",
                linkTrue:false,
                title:"计算",
                icon:"iconfont icon-hezuoguanxi",
                list:[
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"快速上手指南"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"云主机"
                    },
                    {
                        link:"/serve/11/2",
                        isHot:true,
                        title:"镜像"
                    }
                ]
            }
        ]
        return(
            <div className={"m_scheme_main_alllist_box"}>
                {
                    sdata.map((data,key)=>{
                        return(
                            <M_ServeAllListPub sFlag = {2} sdata={data} key={key}></M_ServeAllListPub>
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
* 2018-03-01 M_ServeMixedCloud
* 服务页下用户手册页面组件  11/2
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ServeUser extends React.Component{
    render(){
        return(
            <div className={"m_scheme_mixed_cloud"}>
                服务页下快速上手指南
            </div>
        )
    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_ServeMixedCloud
* 服务页下API预览全部页面组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ServeAPIAll extends React.Component{
    render(){
        return(
            <div className={"m_scheme_mixed_cloud"}>
                API页下预览全部页面组件
            </div>
        )
    }
}


