import React from 'react';
//引入水平导航栏antd组件
import { Card} from 'antd';

import {Link} from 'react-router-dom';




/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_ServeAllList
* 方案页图文混排组件组件 antd 选项卡哦 公共的喔  方案页用了 服务页用了
* ---------------------------------------------------------------------------------------------------------------------
* */

export class M_ServeAllListPub extends React.Component{

    render(){
        let sdata = this.props.sdata;
        let sFlag = this.props.sFlag;
        //模拟数据
       /* sdata={
            link:"/scheme/1/2",
            linkTrue:true,
            title:"混合云",
            titleBot:"提供先进的大数据、云服务、安全可靠的互联网新技术",
            icon:"iconfont icon-ziyuan-xianxing"
        };*/
        // sFlag = 1;
        // console.log(this.props);
        const { Meta } = Card;
        if(sFlag==1){
            if(sdata.linkTrue){
                return(
                    <Link to={sdata.link}>
                        <div  className={"m_scheme_main_alllist m__left"}>
                            <Card
                                hoverable
                                style={{ width: 284,height:228 }}
                                cover={<div className={"M_SchemeAllList_icon"}><i className={`${sdata.icon}`}></i></div>}
                            >
                                <Meta
                                    title={sdata.title}
                                    description={sdata.titleBot}
                                />
                            </Card>
                        </div>
                    </Link>
                )
            }else{
                return(
                    <div  className={"m_scheme_main_alllist m__left"}>
                        <Card
                            hoverable
                            style={{ width: 284,height:228 }}
                            cover={<div className={"M_SchemeAllList_icon"}><i className={`${sdata.icon}`}></i></div>}
                        >
                            <Meta
                                title={sdata.title}
                                description={sdata.titleBot}
                            />
                        </Card>
                    </div>
                )
            }
            /*---------------------------------------------------*/
        }else if(sFlag==2){

       sdata={
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
       };

        // console.log("这里加载的是服务页的组件");
            if(sdata.linkTrue){
                return(
                    <div className={"m_scheme_main_alllist m__left"}>
                        <div  className={"m_scheme_main_alllist m__left"}>
                            <Card
                                hoverable
                                style={{ width: 284,height:228 }}
                                cover={<div className={"M_SchemeAllList_icon"}><i className={`${sdata.icon}`}></i></div>}
                            >
                                <Meta
                                    title={sdata.title}
                                    description={
                                        sdata.list.map((data,key)=>{
                                            return(
                                                <div key={key}>{data.title}</div>
                                            )
                                        })
                                    }
                                />
                            </Card>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div id={"m_user_guide_alllist"}  className={"m_scheme_main_alllist m__left  m_user_guide_alllist"}>
                        <Card
                            className={"m_user_guide_left"}
                            hoverable={false}
                            style={{ width: 284,height:228 }}
                            cover={<div className={"M_SchemeAllList_icon"}><i className={`${sdata.icon}`}></i></div>}
                        >
                            <Meta
                                className={"m_user_guide_right"}
                                title={sdata.title}
                                description={
                                    sdata.list.map((data,key)=>{
                                        return(
                                            <div key={key}><Link to={data.link}>{data.title}</Link></div>
                                        )
                                    })
                                }
                            />
                        </Card>
                    </div>
                )
            }
            /*---------------------------------------------------*/
        }else{
            return null
        }






    }
}