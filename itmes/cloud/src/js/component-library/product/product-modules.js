import React from 'react';
//引入水平导航栏antd组件
import { Menu, Icon, Button } from 'antd';
import {Link} from 'react-router-dom';
//redux相关
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//引入m_$
import M$ from '../../../static/introduce-js/m-$';

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 产品页下的各分页
* ---------------------------------------------------------------------------------------------------------------------
* */

//云主机 归属在云产品页之下
export class M_cloud_clouds_Ssl extends React.Component{
    componentDidMount(){
        // this.props.sFmainRightLeft(this.refs.m_clod_product_main.offsetLeft)
        // console.log(M$(".m_clod_product_main"));
    }
    render(){
        return(
            <div className={"m_clod_product_content"}>
                <div className={"m_clod_product_main_box"}>
                    <div  ref={"m_clod_product_main"}  className={"m_clod_product_main"}>
                        <div className={"m_clod_product_header"}>
                            <M_cloudMainframe></M_cloudMainframe>
                        </div>
                    </div>
                </div>
                <div className={"m_clod_product_mainframe_tabbox"}>
                    <div className="m_clod_product_mainframe_tab">
                        <M_cloudMainframeTab></M_cloudMainframeTab>
                    </div>

                </div>
            </div>

        )
    }
}
//云计算页 归属在云产品页之下
export class M_cloud_clouds_cpt extends React.Component{
    render(){
        console.log("这里是云计算页面");
        return(
            <div className={"m_clod_product_content"}>
                <div className={"m_clod_product_main_box"}>
                    <div  ref={"m_clod_product_main"}  className={"m_clod_product_main"}>
                        <div>
                            云计算页
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 产品页侧边栏组件
* ---------------------------------------------------------------------------------------------------------------------
* */
const SubMenuSidebar = Menu.SubMenu;
export class M_ProductSidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: this.props.state.collapsed,
            keys:this.props.keys,
            sub:this.props.match.params.sub,
            openKeys:[('sub'+this.props.match.params.sub)]
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    //组件将被卸载
    componentWillUnmount(){
        // console.log("我被卸载了");
        //重写组件的setState方法，直接返回空

    }
    //接收到新的props时调用
    componentWillReceiveProps(nextProps) {
        let sArr = this.state.openKeys;
        let sFlag = true;
        let sub = "sub"+nextProps.match.params.sub;
        for(let i=0;i<sArr.length;i++){
            if(sArr[i]==sub){
                sFlag=false;
            }
        }
        if(sFlag){
            sArr.push(('sub'+nextProps.match.params.sub));
            this.setState({openKeys:sArr})
            this.setState({sub:nextProps.match.params.sub})
        }
    }
    componentWillMount(){


    }
    //展开关闭的回调
    onOpenChange(data){
        this.setState({openKeys:data});

    }
    render() {
        let {isFold,list} = this.props.state;
        let collapsed = this.state.collapsed;
        let openKeys = this.state.openKeys;
        let sFlag = 0;
        if(!isFold){
            collapsed = false;
        }
        return (
            <div>
                {
                    isFold?<Button type="primary" onClick={this.toggleCollapsed}>
                        <Icon type={collapsed? 'menu-unfold' : 'menu-fold'} />收起菜单
                    </Button>:null
                }

                <Menu
                    defaultSelectedKeys={[`${this.props.match.params.keys}`]}
                    defaultOpenKeys={['sub'+this.props.match.params.sub]}
                    selectedKeys={[`${this.props.match.params.keys}`]}
                    openKeys={openKeys}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={collapsed}
                    onOpenChange={this.onOpenChange.bind(this)}
                >
                    {
                        list.map((data,key)=>{
                            let isIcon = "mail";
                            data.icon?isIcon=data.icon:null;

                            return(<SubMenuSidebar key={"sub"+(key+1)} title={<span><Icon type={isIcon} /><span>{data.title}</span></span>}>
                                {data.list.map((datas,keys)=>{
                                    sFlag++;
                                    let url = this.props.match.path.split("/:")[0];
                                    return(<Menu.Item key={sFlag}><Link to={url+datas.link}>{datas.title}</Link></Menu.Item>)
                                })}
                            </SubMenuSidebar>)
                        })
                    }
                    {/*
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>标题一</span></span>}>
                        <Menu.Item key="1">Option 5</Menu.Item>
                        <Menu.Item key="2">Option 6</Menu.Item>
                        <Menu.Item key="3">Option 7</Menu.Item>
                        <Menu.Item key="4">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="mail" /><span>标题一</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="mail" /><span>标题一</span></span>}>
                        <Menu.Item key="9">Option 5</Menu.Item>
                        <Menu.Item key="10">Option 6</Menu.Item>
                        <Menu.Item key="11">Option 7</Menu.Item>
                        <Menu.Item key="12">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="13">Option 5</Menu.Item>
                        <Menu.Item key="14">Option 6</Menu.Item>
                        <Menu.Item key="15">Option 7</Menu.Item>
                        <Menu.Item key="16">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="17">Option 9</Menu.Item>
                        <Menu.Item key="18">Option 10</Menu.Item>
                        <SubMenu key="sub6" title="Submenu">
                            <Menu.Item key="19">Option 11</Menu.Item>
                            <Menu.Item key="20">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>*/}
                </Menu>
            </div>
        );
    }
};
/* 使用redux连接器封装容器组件*/
function selectStateExerciseProductSidebar(state) {
    return {
        state: state.initProductSidebarData
    }
};
export const M_ProductSidebarRadux = connect(selectStateExerciseProductSidebar)(M_ProductSidebar);

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 云主机页面组件库
* ---------------------------------------------------------------------------------------------------------------------
* */
//页头图文展示，图标展示
export class M_cloudMainframe extends React.Component{
    render (){
        const sImg = require('../../../static/images/clound/mainframe_butt.png');
        return(
            <div className={"m_cloud_mainframe_title_box"}>
                <div className="m_cloud_mainframe_title_left m__left">
                    <h2>云主机</h2>
                    <p>
                        云主机（简称ECH）是基于新商界云自主研发的分布式计算系统，通过虚拟化技术整合IT资源，为各行业提供互联网基础设施服务。
                        云主机具有自助管理、数据安全保障等高级功能，能够简化开发部署过程，降低运维成本，构建按需扩展的网站架构，从而更适应互联网应用快速多变的特性。
                    </p>
                    <div>
                        <span className={"_public_button"}>立即购买</span>
                        <span className={"_public_button"}>价格计算器</span>
                    </div>
                </div>
                <div className="m_cloud_mainframe_title_right m__left">
                    <img src={sImg} alt="加载失败"/>
                </div>
            </div>
        )
    }
}

//下部table切换导航组件
// const SubMenuMainframeTab = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
export class M_cloudMainframeTab extends React.Component {
    state = {
        current: 'feature',
        current0:"feature"
    }
    sFhandeScrollTop(data,isFlag){
        /*  console.log("将要滚动到的位置");
          console.log("data"+data);
          console.log("当前滚动条位置");
          console.log("isFlag"+isFlag);
          console.log(data<=isFlag);*/
        let _height = 0;
        let _data = Number(isFlag);
        // console.log(Number(data)>=Number(isFlag));
        if(Number(data)>=Number(isFlag)){
            _height = 20;
            let timer = setInterval(function(){
                _data+=_height
                if(((Number(data)-_data)/20)>0){
                    window.scrollTo(0,_data);
                }
                if(_data>=Number(data)){
                    clearInterval(timer)
                }

            },0.1);
            return;
        }else if(Number(data)<=Number(isFlag)){
            _height = -20;
            let timer = setInterval(function(){
                _data+=_height;
                if(((_data-Number(data))/20)>0){
                    window.scrollTo(0,_data);
                }
                if(_data<=Number(data)){
                    clearInterval(timer)
                }

            },1);

            return;
        }
    }
    handleClick = (e) => {
        let t = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeights=[];
        let heights = 445;
        let kes =[];
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
        console.log(M$(".m_mainframe_tab_content").M_ele());
        if(M$(".m_mainframe_tab_content").M_ele()[0]!=null){
            M$(".m_mainframe_tab_content").M_ele().map((data)=>{
                // console.log(data.clientHeight)
                clientHeights.push({
                    height:data.clientHeight,
                    key:M$(data).M_attr("data-key")
                })
            });
        }
        console.log(clientHeights);
        if(e.key=="feature"){
            this.sFhandeScrollTop(460,t)
        }else{
            for(let i=0;i<clientHeights.length; i++){
                if(i>0){
                    heights+=Number(clientHeights[i-1].height);
                }

                // console.log(heights);
                if(e.key==clientHeights[i].key){
                    console.log("你的我的你的到我的无");
                    console.log(clientHeights[i]);
                    console.log(heights);
                    this.sFhandeScrollTop(heights,t);
                    break;
                }
            }
        }
    }
    componentDidMount(){
        /*   // window.scrollTo(0,0);
           let that =this;
           window.onscroll = function(){
               var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
               // var uptop = document.getElementById( "uptop" ); //获取div元素
               /!* if( t >= 300 ) { //当距离顶部超过300px时
                    uptop.style.bottom=30+'px';//使div距离底部30px，也就是向上出现
                } else { //如果距离顶部小于300px
                    uptop.style.bottom=-50+'px';//使div向下隐藏
                }*!/
               // console.log(t);
               console.log(t);
               if(t>490){
                   console.log(M$(".m_mainframe_tab_title"));
               }
           };
           if(M$(".m_clod_product_main").M_ele().length>0){

           }
           console.log(M$(".m_mainframe_tab_title"));

           window.onresize = function(){




           }*/
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
                    key:"feature",
                    title:"功能",
                    icon:"mail",
                    list:{
                        title:"功能",
                        icon:"mail",
                        key:"feature",
                        list:[
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            }
                        ]
                    }
                },
                {
                    key:"advantage",
                    title:"优势",
                    icon:"mail",
                    list:{
                        title:"优势",
                        icon:"mail",
                        key:"advantage",
                        list:[
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            }
                        ]
                    }

                },
                {
                    key:"appstore",
                    title:"机型",
                    icon:"mail",
                    list:{
                        title:"机型",
                        icon:"mail",
                        key:"appstore",
                        list:[
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            }
                        ]
                    }
                },
                {
                    key:"configure",
                    title:"推荐配置",
                    icon:"mail",
                    list:{
                        title:"推荐配置",
                        icon:"mail",
                        key:"configure",
                        list:[
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            }
                        ]
                    }
                },
                {
                    key:"price",
                    title:"价格",
                    icon:"mail",
                    list:{
                        title:"价格",
                        icon:"mail",
                        key:"price",
                        list:[
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            }
                        ]
                    }
                },
                {
                    key:"docs",
                    title:"文档与更新",
                    icon:"mail",
                    list:{
                        title:"文档与更新",
                        icon:"mail",
                        key:"docs",
                        list:[
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            },
                            {
                                title:"完全管理权限",
                                content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                            }
                        ]
                    }
                }
            ]

        };
        let sonList = [];
        state.titleList.map((data)=>{
            sonList.push(data.list)
        })
        console.log(sonList);
        return (
            <div>
                <div id={"m_mainframe_tab_title_sco"} className={"m_mainframe_tab_title"}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        {
                            state.titleList.map((data,key)=>{
                                return(
                                    <Menu.Item key={key} key={data.key}>
                                        <Icon type={data.icon} />{data.title}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </div>
                <div className={"m_mainframe_tab_contentbox"}>
                    {
                        sonList.map((data,key)=>{
                            return(
                                <M_cloudMainframeTabContent state={data} key={key}></M_cloudMainframeTabContent>
                            )
                        })
                    }

                </div>
                <div className={"m_scoll_top_product"} onClick={this.sFscollTop.bind(this)}>

                </div>
            </div>


        );
    }
};
//下部table切换导航详情组件
export class M_cloudMainframeTabContent extends React.Component {
    /*   state = {
           current: 'feature',
       }
       handleClick = (e) => {
           console.log('click ', e);
           this.setState({
               current: e.key,
           });
       }*/
    render() {
        let state = this.props.state;
        //模拟数据
        /*state = {
            title:"功能",
            key:"feature",
            list:[
                {
                    title:"完全管理权限",
                    content:"用户对云服务器的操作系统有完全控制权，可以通过管理控制台自助解决系统问题，进行各项操作。"
                }
            ]
        }*/
        if(!state.title){
            return null;
        }
        return (
            <div className={"m_mainframe_tab_content"} data-key={state.key}>
                <div className={"m_mainframe_tab_content_title"}>
                    <Menu
                    >
                        <Menu.Item key="feature" disabled>
                            <Icon type={state.icon} />{state.title}
                        </Menu.Item>
                    </Menu>
                </div>
                {
                    (state.list&&state.list instanceof Array)?state.list.map((data,key)=>{
                        return(
                            <div key={key} className={"m_mainframe_tab_content_txt"}>
                                <h4>{data.title}</h4>
                                <span>{data.content}</span>
                            </div>
                        )
                    }):null
                }

            </div>
        );
    }
};