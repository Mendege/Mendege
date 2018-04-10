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
export class M_RegardBanner extends React.Component{
    render(){
        let sUrl = require('../../../static/images/scheme/banner1.png');
        return(
            <div className={"m_regard_banner_bg_box"}>
                <div className={"m_scheme_banner_box  m_regard_banner_box"}>
                    <h1>关于新商界</h1>
                    <p>
                        新商界云隶属于（新商界控股集团有限公司），是一家布局于IaaS、PaaS、SaaS全方位布局云计算的高新互联网企业。基础云（iaaS）主营方向：
                        云服务器、云存储、负载均衡、大数据分析、大数据处理、网路安全、API接口等；通讯接口（PaaS）：
                        通知、验证、网络通讯、云联络、语音通话、流量视频等；软件方向（SaaS）：云联络中心、洪信、短信平台、视频系统、智能办公系统等。
                    </p>
                    <p>
                        商界控股集团有限公司，是一家于2006年在香港由国内外企业家、海外华人华侨和香港部分财团家族成员发起成立的，
                        以互联网、互联网+、新业态、新模式、高新技术项目投资控股为主的新兴产业投资控股集团。
                        过去10年间在包括美国、以色列、中国等国家的186家高科技企业累计投资超过100亿元。集团公司上海机构，拥有高素质风险投资运营团队，
                        有多年的高新 技术项目投资、管理和运营经验， 控股投资涉及生物医药、大型医疗设备、远程医疗服务、高端医疗设备研发制造、工业机器人、智能家居、互联网平台等行业。
                    </p>
                </div>
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
export class M_cloudRegardNavTab extends React.Component {
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
                    title:"公司简介",
                    icon:"mail",
                    link:"/regard/11/1"
                },
                {
                    key:"22",
                    title:"联系我们",
                    icon:"mail",
                    link:"/regard/22/1"

                },
                {
                    key:"33",
                    title:"招贤纳士",
                    icon:"mail",
                    link:"/regard/33/1"
                },
                {
                    key:"44",
                    title:"行业动态",
                    icon:"mail",
                    link:"/regard/44/1"
                },
                {
                    key:"55",
                    title:"服务条款",
                    icon:"mail",
                    link:"/regard/55/1"

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
                                if(key==0){
                                    return(
                                        <Menu.Item key={key} key={data.key}>
                                            <Link className={"m_serve_navtab_link"} to={data.link}>{data.title}</Link>
                                        </Menu.Item>
                                    )
                                }else{
                                    return(
                                        <Menu.Item key={key} key={data.key}>
                                            <span className={"clone"}>|</span>
                                            <Link className={"m_serve_navtab_link"} to={data.link}>{data.title}</Link>
                                        </Menu.Item>
                                    )
                                }

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
* 2018-03-01 M_RegardCompanyProfile
* 关于我们页  公司简介页面 组件  11/1
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_RegardCompanyProfile extends React.Component{
    render(){
        let sdata = this.props.state;

        return(
            <div className={"m_scheme_main_alllist_box m_regard_company_profile"}>
                <div>
                    公司简介页面
                </div>
            </div>
        )
    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_RegardCompanyProfile
* 关于我们页  联系我们页面 组件  11/2
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_RegardContact extends React.Component{
    render(){
        let sdata = this.props.state;
        let mapUrl = require('../../../static/images/scheme/regard_map.png');

       let  sdataone={
            title:"新商界云地址",
            list:[
                {
                    titleKey:"中关村办公室 ：",
                    titleValue:" 北京市海淀区上地三街9号楼嘉华大厦A座612号"
                },
                {
                    titleKey:"电话 ：",
                    titleValue:" +86-010-62530238"
                },
                {
                    titleKey:"邮编 ：",
                    titleValue:" 100176"
                },
                {
                    titleKey:"邮箱 ：",
                    titleValue:" xsjgroup@xinshangjie.hk"
                },
                {
                    titleKey:"新商界云主页 ：",
                    titleValue:" xsjyun.com"
                },
                {
                    titleKey:"官网主页 ：",
                    titleValue:" www.newbusinessholding.com"
                },
                {
                    titleKey:"亦庄地址 ：",
                    titleValue:" 北京经济技术开发区荣华南路2号大族广场·互联网+创新园T5座19层"
                }
            ]
        };
       let  sdatatwo={
            title:"加入新商界",
            list:[
                {
                    titleKey:"新商界人力资源部",
                    titleValue:" "
                },
                {
                    titleKey:"联系人 ：",
                    titleValue:" 郝经理"
                },
                {
                    titleKey:"电话 ：",
                    titleValue:" +86-010-62530238"
                },
                {
                    titleKey:"邮箱 ：",
                    titleValue:" xsjgroup@xinshangjie.hk"
                },
                {
                    titleKey:"简历请写明 ：",
                    titleValue:"投递新商界云"
                }
            ]
        };


        return(
            <div className={"m_scheme_main_alllist_box"}>
                <div className={"m_regard_map_box"}>
                    <img src={mapUrl} alt="加载失败"/>
                </div>
                <div className={"m_regard_title_box"}>
                    <M_RegardSiteMe sdata={sdataone}></M_RegardSiteMe>
                    <M_RegardSiteMe sdata={sdatatwo}></M_RegardSiteMe>
                </div>
            </div>
        )
    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_RegardCompanyProfile
* 关于我们页  联系我们页面 组件  11/2
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_RegardSiteMe extends React.Component{
    render(){
        let sdata = this.props.sdata;
           /* sdata={
                title:"新商界云地址",
                list:[
                    {
                        titleKey:"中关村办公室 ：",
                        titleValue:" 北京市海淀区上地三街9号楼嘉华大厦A座612号"
                    },
                    {
                        titleKey:"电话 ：",
                        titleValue:" +86-010-62530238"
                    },
                    {
                        titleKey:"邮编 ：",
                        titleValue:" 100176"
                    },
                    {
                        titleKey:"邮箱 ：",
                        titleValue:" xsjgroup@xinshangjie.hk"
                    },
                    {
                        titleKey:"新商界云主页 ：",
                        titleValue:" xsjyun.com"
                    },
                    {
                        titleKey:"官网主页 ：",
                        titleValue:" www.newbusinessholding.com"
                    },
                    {
                        titleKey:"亦庄地址 ：",
                        titleValue:" 北京经济技术开发区荣华南路2号大族广场·互联网+创新园T5座19层"
                    }
                ]
            };
            sdata={
            title:"加入新商界",
            list:[
                {
                    titleKey:"新商界人力资源部",
                    titleValue:" "
                },
                {
                    titleKey:"联系人 ：",
                    titleValue:" 郝经理"
                },
                {
                    titleKey:"电话 ：",
                    titleValue:" +86-010-62530238"
                },
                {
                    titleKey:"邮箱 ：",
                    titleValue:" xsjgroup@xinshangjie.hk"
                },
                {
                    titleKey:"简历请写明 ：",
                    titleValue:"投递新商界云"
                }
            ]
        };*/
        return(
            <div className={"m_regard_site_me_box"}>
                <div className={"m_regard_site_me_title"}>{sdata.title}</div>
                {
                    sdata.list.map(
                        (data,key)=>{
                            return (
                                <div  className={"m_regard_site_me_content"}>
                                    <span>{data.titleKey}</span>
                                    <span>{data.titleValue}</span>
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}



