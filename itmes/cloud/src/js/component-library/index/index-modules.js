import React from 'react';
//引入水平导航栏antd组件
import { Menu, Icon ,Carousel,Card } from 'antd';
import {Link} from 'react-router-dom';
//redux相关
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import  Slick from 'react-slick';

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 水平导航栏组件
* ---------------------------------------------------------------------------------------------------------------------
* */
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export class M_SubMenu extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                /*onClick={this.handleClick}*/
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="index" >
                    <Link className={"m_clound_onea"} to={"/"}>首页</Link>
                </Menu.Item>
                {/*<Menu.Item key="clouds">*/}
                {/*<Link className={"m_clound_onea"} to={"/clouds"}>产品</Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="scheme">*/}
                {/*<Link className={"m_clound_onea"} to={"/"}>解决方案</Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="service">*/}
                {/*<Link className={"m_clound_onea"} to={"/"}>服务与支持</Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="regard">*/}
                {/*<Link className={"m_clound_onea"} to={"/"}>关于我们</Link>*/}
                {/*</Menu.Item>*/}
                <SubMenu className={"m_clound_onea"} title={<Link to={"/clouds/1/1"}>产品</Link>}>
                    <MenuItemGroup title="云相关">
                        <Menu.Item key="setting:1"><Link to={"/clouds/1/2"}>云计算</Link></Menu.Item>
                        <Menu.Item key="setting:2">云通信</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="大数据">
                        <Menu.Item key="setting:3">超级采购平台</Menu.Item>
                        <Menu.Item key="setting:4">售后服务支持</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu className={"m_clound_onea"} title={<span>解决方案</span>}>
                    <MenuItemGroup title="云相关">
                        <Menu.Item key="setting:5">云计算方案</Menu.Item>
                        <Menu.Item key="setting:6">云通信方案</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="大数据">
                        <Menu.Item key="setting:7">超级采购平台方案</Menu.Item>
                        <Menu.Item key="setting:8">售后服务支持方案</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu className={"m_clound_onea"} title={<span>服务与支持</span>}>
                    <MenuItemGroup title="云相关">
                        <Menu.Item key="setting:9">云计算服务</Menu.Item>
                        <Menu.Item key="setting:10">云计算支持</Menu.Item>
                        <Menu.Item key="setting:11">云通信服务</Menu.Item>
                        <Menu.Item key="setting:12">云通信支持</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="大数据">
                        <Menu.Item key="setting:13">超级采购平台方案服务</Menu.Item>
                        <Menu.Item key="setting:14">超级采购平台方案支持</Menu.Item>
                        <Menu.Item key="setting:15">售后服务支持方案</Menu.Item>
                        <Menu.Item key="setting:16">售后服务支持支持</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu className={"m_clound_onea"} title={<span>关于我们</span>}>
                    <MenuItemGroup title="简介">
                        <Menu.Item key="setting:17">云计算服务</Menu.Item>
                        <Menu.Item key="setting:18">云计算支持</Menu.Item>
                        <Menu.Item key="setting:19">云通信服务</Menu.Item>
                        <Menu.Item key="setting:20">云通信支持</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="联系我们">
                        <Menu.Item key="setting:21">超级采购平台方案服务</Menu.Item>
                        <Menu.Item key="setting:22">超级采购平台方案支持</Menu.Item>
                        <Menu.Item key="setting:23">售后服务支持方案</Menu.Item>
                        <Menu.Item key="setting:24">售后服务支持支持</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
};
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 轮播组件
* ---------------------------------------------------------------------------------------------------------------------
* */
// slick
export class M_Carousel extends React.Component{
    render(){
        let state =this.props.state;
        // console.log(this.props.sFlag);
        const nextArrow =<div>
            <span className={"m_next m_nextSom iconfont icon-gengduo"}></span>
        </div>;
        /* const prevArrow =<div>
             <span className={"m_prev m_nextSom"}>{"<"}</span>
         </div>;*/
        const prevArrow =null;
        let settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility:false,
            nextArrow:nextArrow,
            prevArrow:prevArrow,
            customPaging: function(i) {
                return <a className={"m_carousel_paging"}>一</a>
            },
            autoplaySpeed:2000,
            beforeChange:function(i){
            },
            initialSlide:0,
            autoplay:true

        };
        if(state.isLink){


        }else{
            return(
                <div className={"m_carousel_box"}>
                    <div className={"m_carousel_content"}>
                        <Slick {...settings}>
                            {
                                state.list.map((data,key)=>{
                                    return(<div key={key}><a><img src={data._url} alt=""/></a></div>);
                                })
                            }
                        </Slick>
                    </div>

                </div>

            );
        }

    }
};
/* 使用redux连接器封装容器组件*/
function selectStateExerciseCarousel(state) {
    return {
        state: state.initCarouselData
    }
};
/*function buildActionDispatcherExerciseCarousel(dispatch) {
    return {
        dispatchName: bindActionCreators(ActionName, dispatch)
    }
};*/
export const M_CarouselRadux = connect(selectStateExerciseCarousel)(M_Carousel);

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //图文展示组件  接收不同的数据渲染不同的样式 组件最外层宽高是百分之百
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ImageText extends React.Component{
    render() {
        let state = this.props.state;
        let isFlag = this.props.isFlag;
        //模拟数据
        /* state = {
             icon:"icon-xunjianjianyan",
             title:"What's News",
             content:"这是一个证书，拥有该证书代表国际认可",
             isLink:false,
             link:""

         };*/
        if(isFlag==1){
            if(state.isLink){
                return (
                    <Link className={"m_img_text_box1"} to={state.link}>
                        <span className={"m_img_text1_icon m__left"}>
                        <span className={"iconfont "+(state.icon)}>
                        </span>
                        </span>
                        <span className={"m_img_text1_text m__left"}>
                            <span className={"m_img_text1_text_title"}>{state.title}</span>
                            <br/>
                            <span className={"m_img_text1_text_content"}>{state.content}</span>
                        </span>
                    </Link>
                )
            }else{
                return (
                    <a className={"m_img_text_box1"}>
                        <span className={"m_img_text1_icon m__left"}>
                        <span className={"iconfont "+(state.icon)}>
                        </span>
                        </span>
                        <span className={"m_img_text1_text m__left"}>
                            <span className={"m_img_text1_text_title"}>{state.title}</span>
                            <br/>
                            <span className={"m_img_text1_text_content"}>{state.content}</span>
                        </span>
                    </a>
                )
            }



        }else if(isFlag==2){

            if(state.isLink){
                return (
                    <Link className={"m_img_text_box1"} to={state.link}>
                        <span className={"m_img_text1_icon m__left"}>
                        <span className={"iconfont "+(state.icon)}>
                        </span>
                        </span>
                        <span className={"m_img_text1_text m__left"}>
                            <span className={"m_img_text1_text_title"}>{state.title}</span>
                            <br/>
                            <span className={"m_img_text1_text_content"}>{state.content}</span>
                        </span>
                    </Link>
                )
            }else{
                return (
                    <a className={"m_img_text_box1"}>
                        <span className={"m_img_text1_icon m__left"}>
                        <span className={"iconfont "+(state.icon)}>
                        </span>
                        </span>
                        <span className={"m_img_text1_text m__left"}>
                            <span className={"m_img_text1_text_title"}>{state.title}</span>
                            <br/>
                            <span className={"m_img_text1_text_content"}>{state.content}</span>
                        </span>
                    </a>
                )
            }
        }else{
            return null;
        }


    }
};

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //图文展示组件容器1  位置在首页banner页下面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ImageTextSslBox extends React.Component{
    render() {
        // console.log(this.props);
        let list = this.props.state.list;
        // let isLink = this.props.state.isLink;
        //模拟数据
        /*list = [{
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可"

        }];*/
        // isLink = false;
        return (
            <div className={"m_ssl_box"}>
                <div className="m_ssl_content">
                    {list.map((data,key)=>{
                        if(key==0){
                            return(
                                <div className={"m_img_text_box1_box boeder_none1"} key={key}>
                                    <M_ImageText isFlag={1} state={data} ></M_ImageText>
                                </div>
                            )
                        }else{
                            return(
                                <div className={"m_img_text_box1_box"} key={key}>
                                    <M_ImageText isFlag={1} state={data} ></M_ImageText>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>
        )
    }
};
/* 使用redux连接器封装容器组件*/
function selectStateExerciseImageTextSslBox(state) {
    return {
        state: state.initImageTextSslBoxData
    }
};
/*function buildActionDispatcherExerciseCarousel(dispatch) {
    return {
        dispatchName: bindActionCreators(ActionName, dispatch)
    }
};*/
export const M_ImageTextSslBoxRadux = connect(selectStateExerciseImageTextSslBox)(M_ImageTextSslBox);
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //图文展示组件2 antd  位置在首页banner页下面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ImageTextCard1 extends React.Component{
    render() {
        let state = this.props.state;
        let isFlag = this.props.isFlag;
        // console.log(isFlag);
        const {Meta} = Card;
        // isFlag = 1;
        if(isFlag==1){
            //模拟数据
            /* state = {
                 icon:"icon-xunjianjianyan",
                 title:"计算",
                 isLink:false,
                 link:"",
                 url:require('../../../images/clound/listshili.jpg')

             };
             //isFlag =1时为渲染1  2时为渲染2
             isFlag = 1;*/
            if(state.isLink){
                let url ="" +state.url;
                // console.log(state.url);
                let urlW = "http://01.imgmini.eastday.com/mobile/20180315/20180315052446_7f5169bfa348520b9e5e7ee6846b574e_1.jpeg";
                return (
                    <Link className={"m_img_text_box1"} to={state.link} >
                        <Card
                            hoverable
                            style={{ width: 300,height:275}}
                            cover={<img alt="example" src={urlW} />}
                        >
                            <Meta
                                title={state.title}
                            />
                        </Card>
                    </Link>
                )
            }else{
                return (
                    <a className={"m_img_text_box1"}>
                        <Card
                            hoverable
                            style={{ width: 300,height:275}}
                            cover={<img alt="example" src={state.url} />}
                        >
                            <Meta
                                title={state.title}
                            />
                        </Card>
                    </a>
                )
            }
        }else if(isFlag==2){
            /* state = {
                 icon:"iconfont icon-gengduo",
                 title:"计算",
                 isLink:false,
                 link:"",
                 url:require('../../../images/clound/listshili.jpg')

             }*/
            if(state.isLink){
                return (
                    <Link className={"m_img_text2_box"} to={state.link} >
                        <Card
                            hoverable
                            style={{ width: 360,height:84}}
                            cover={<div className={"m_img_text2_title"}>
                                <div>虚拟主机</div>
                                <div>安全、稳定、弹性的计算资源</div>
                            </div>}
                        >
                            <Meta
                                title={<span className={state.icon}></span>}
                            />
                        </Card>
                    </Link>
                )
            }else{
                return (
                    <a className={"m_img_text2_box"}>
                        <Card
                            hoverable
                            style={{ width: 360,height:84}}
                            cover={<div className={"m_img_text2_title"}>
                                <div>虚拟主机</div>
                                <div>安全、稳定、弹性的计算资源</div>
                            </div>}
                        >
                            <Meta
                                title={<span className={state.icon}></span>}
                            />
                        </Card>
                    </a>
                )
            }
        }else{
            return null;
        }


    }
};
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //图文展示组件2 BOX 1 antd  位置在首页banner页下面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ImageTextCard1Box1 extends React.Component{
    render() {
        // console.log(this.props);
        let list = this.props.state.list;
        //模拟数据
        /*list = [{
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可"
        }];*/
        // isLink = false;
        return (
            <div className={"m_image_text_card1_box1"}>
                <div className="m_image_text_card1_content">
                    {list.map((data,key)=>{
                        return(
                            <div className={"m_ImageTextCard1_Box m__left"} key={key}>
                                <M_ImageTextCard1 isFlag={1} state={data} ></M_ImageTextCard1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};
/* 使用redux连接器封装容器组件*/
function selectStateExerciseImageTextCard1Box1(state) {
    return {
        state: state.initImageTextCard1Box1Data,
        isFlag:1
    }
};
/*function buildActionDispatcherExerciseCarousel(dispatch) {
    return {
        dispatchName: bindActionCreators(ActionName, dispatch)
    }
};*/
export const M_ImageTextCard1Box1Radux = connect(selectStateExerciseImageTextCard1Box1)(M_ImageTextCard1Box1);
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //图文展示组件2 BOX 2 antd  位置在首页banner页下面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ImageTextCard1Box2 extends React.Component{
    render() {
        // console.log(this.props);
        let list = this.props.state.list;
        //模拟数据
        /*list = [{
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可"
        }];*/
        // isLink = false;
        return (
            <div className={"m_physics_box1"}>
                <div className="m_physics_content1">
                    {list.map((data,key)=>{
                        return(
                            <div className={"m_physics_Box m__left"} key={key}>
                                <M_ImageTextCard1 isFlag={2} state={data} ></M_ImageTextCard1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};
/* 使用redux连接器封装容器组件*/
function selectStateExerciseImageTextCard1Box2(state) {
    return {
        state: state.initImageTextCard1Box2Data,
        isFlag:1
    }
};
/*function buildActionDispatcherExerciseCarousel(dispatch) {
    return {
        dispatchName: bindActionCreators(ActionName, dispatch)
    }
};*/
export const M_ImageTextCard1Box2Radux = connect(selectStateExerciseImageTextCard1Box2)(M_ImageTextCard1Box2);
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //图文展示组件2 BOX 1 antd  位置在首页banner页下面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ImageTextCard1Box3 extends React.Component{
    render() {
        // console.log(this.props);
        let list = this.props.state.list;
        //模拟数据
        /*list = [{
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可"
        }];*/
        // isLink = false;
        return (
            <div className={"m_image_text_card1_box1"}>
                <div className="m_image_text_card1_content">
                    {list.map((data,key)=>{
                        return(
                            <div className={"m_ImageTextCard1_Box m__left"} key={key}>
                                <M_ImageTextCard1 isFlag={1} state={data} ></M_ImageTextCard1>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};
/* 使用redux连接器封装容器组件*/
function selectStateExerciseImageTextCard1Box3(state) {
    return {
        state: state.initImageTextCard1Box3Data,
        isFlag:1
    }
};
/*function buildActionDispatcherExerciseCarousel(dispatch) {
    return {
        dispatchName: bindActionCreators(ActionName, dispatch)
    }
};*/
export const M_ImageTextCard1Box3Radux = connect(selectStateExerciseImageTextCard1Box3)(M_ImageTextCard1Box3);
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //图文展示组件3 BOX 4 antd  位置在首页底部链接栏之上  内部所用组件是 M_ImageText
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_ImageTextCard1Box4 extends React.Component{
    render() {
        // console.log(this.props);
        let list = this.props.state.list;
        //模拟数据
        /*list = [{
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可"
        }];*/
        // isLink = false;
        return (
            <div className={"m_image_text_card1_box1"}>
                <div className="m_image_text_card1_content">
                    {list.map((data,key)=>{
                        return(
                            <div className={"m_ImageTextCard4_Box m__left"} key={key}>
                                <M_ImageText isFlag={2} state={data} ></M_ImageText>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
};
/* 使用redux连接器封装容器组件*/
function selectStateExerciseImageTextCard1Box4(state) {
    return {
        state: state.initImageTextCard1Box4Data,
        isFlag:1
    }
};
/*function buildActionDispatcherExerciseCarousel(dispatch) {
    return {
        dispatchName: bindActionCreators(ActionName, dispatch)
    }
};*/
export const M_ImageTextCard1Box4Radux = connect(selectStateExerciseImageTextCard1Box4)(M_ImageTextCard1Box4);
