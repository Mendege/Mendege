import React from "react";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import {M_IsRouter} from '../../../router/routerWidth';
import {M_ProductSidebarRadux} from './product-modules'
import M$ from '../../../static/introduce-js/m-$';
//产品页面
export class M_CloudProductS extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mainRightLeft:0
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(this.props.location);
        console.log(nextProps.location);
        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }
    }
    componentDidMount(){
        window.scrollTo(0,0);
        //获取当前可视窗口的高度


        let that =this;
        window.onscroll = function(){
            let t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
            /*   // var uptop = document.getElementById( "uptop" ); //获取div元素
              /!* if( t >= 300 ) { //当距离顶部超过300px时
                   uptop.style.bottom=30+'px';//使div距离底部30px，也就是向上出现
               } else { //如果距离顶部小于300px
                   uptop.style.bottom=-50+'px';//使div向下隐藏
               }*!/
              // console.log(t);
              //  console.log(that.refs.m_clod_product_main.offsetLeft);*/
            //产品页菜单栏top位置
            if(that.refs.m_clod_product_slidebox){
                that.refs.m_clod_product_slidebox.style.top= (t +80)+"px";
            }
            // that.refs.m_clod_product_slidebox.style.top= (t +80)+"px";
            console.log("[[[[[[");
            console.log(t);
            console.log(M$().M_NoThisHeight())
            if(t>500&&M$("#m_mainframe_tab_title_sco").M_ele()[0]!=null){
                // console.log();
                M$("#m_mainframe_tab_title_sco").M_css({"position":"fixed","top":"0px","z-index":10});
            }else if(t<500&&M$("#m_mainframe_tab_title_sco").M_ele()[0]!=null){
                // console.log(M$("#m_mainframe_tab_title_sco").M_ele()[0]!=null);
                M$("#m_mainframe_tab_title_sco").M_css({"position":"static"})
            }
            //控制产品页回到顶部按钮的显示隐藏
            if(t>M$().M_NoThisHeight()){
                if(M$(".m_scoll_top_product").M_ele()[0]!=null){
                    M$(".m_scoll_top_product").M_css({"height":"60px","width":"60px"})
                }
            }else{
                if(M$(".m_scoll_top_product").M_ele()[0]!=null){
                    M$(".m_scoll_top_product").M_css({"height":"0px","width":"0px"})
                }
            }


            //窗口滚动事件底部
        };
        //产品页菜单栏left页
        if(M$(".m_clod_product_main").M_ele()[0]!=null){
            that.refs.m_clod_product_slidebox.style.left=M$(".m_clod_product_main").M_get(0).offsetLeft+"px";
            that.refs.m_clod_product_slidebox.style.marginLeft=-that.refs.m_clod_product_slide.clientWidth+"px";
        }
        window.onresize = function(){
            //产品页菜单栏left页
            if(M$(".m_clod_product_main").M_ele()[0]!=null){
                that.refs.m_clod_product_slidebox.style.left=M$(".m_clod_product_main").M_get(0).offsetLeft+"px";
                that.refs.m_clod_product_slidebox.style.marginLeft=-that.refs.m_clod_product_slide.clientWidth+"px";
            }
            // that.refs.m_clod_product_slide.style.left=that.refs.m_clod_product_main.offsetLeft+"px";
        }

    }
    sFmainRightLeft(data){
        this.setState({mainRightLeft:data})
    }
    render(){
        //首页接收该方法
        return(
            <div className={"m_clod_product_box"}>
                <div ref={"m_clod_product_slidebox"}  className={"m_clod_product_slidebox"}>
                    <div ref={"m_clod_product_slide"} className={"m_clod_product_slide m__left"}>
                        <M_ProductSidebarRadux {...this.props}></M_ProductSidebarRadux>
                    </div>
                </div>
                <Route path={`${this.props.match.path}`} component={M_CloudProduct} />
                {/*<div className={"m_clod_product_content"}>
                        <div className={"m_clod_product_main_box"}>
                            <div  ref={"m_clod_product_main"}  className={"m_clod_product_main"}>

                            </div>
                        </div>
                    </div>*/}


            </div>
        )
    }
}
//产品页面子页面 （三级页面）
export class M_CloudProduct extends React.Component{
    render(){
        console.log(this.props);
        let Homes = null;
        Homes = M_IsRouter(this.props.match.url.split('/')[1].split('/')[0],this.props.match.params.sub,this.props.match.params.keys);
        if(Homes!=null){
            return(<Homes sFmainRightLeft={this.props.sFmainRightLeft} ></Homes>)
        }else{
            return null
        }
    }
}