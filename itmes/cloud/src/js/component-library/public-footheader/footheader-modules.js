import React from 'react';
//引入水平导航栏antd组件
import { Menu,Card,Icon } from 'antd';
import {Link} from 'react-router-dom';
import M$ from '../../../static/introduce-js/m-$'
//redux相关
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {M_ImageTextCard1Box4} from "../index/index-modules";
/*
import  Slick from 'react-slick';*/
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
    constructor(props){
        super(props);
        this.state={
            state:this.props.state,
            current: 'setting:0',
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    onOpenChangeClick (e){
        // console.log(M$(e.target).M_attr("data-key"));
        this.setState({
            current: "setting:"+M$(e.target).M_attr("data-key"),
        });
    }
    componentWillMount(){
        let url = window.location.href;
        let arrs = ["index","clouds","scheme","serve","regard"];
        function stringReverse(str) {
            let str2 = "";
            for (let i = 0; i < str.length; i++) {
                str2 += str.charAt(str.length - i - 1);
            }
            return str2
        }
        url = stringReverse(url);
        if(url.split('/').length>6){
            url = url.split('/')[2];
            url = stringReverse(url);
            for(let i =0;i<this.state.state.length;i++){
                if(this.state.state[i].keyOnes==url){
                    this.setState({
                        current: "setting:"+this.state.state[i].key
                    });
                }
            }
        }else{
            this.setState({
                current: "setting:0",
            });
        }
    }
    render() {
            // console.log(this.state.current);
             let state = this.state.state;
             let that = this;
            //模拟数据
            /*state = [
                {
                    title:"首页",
                    link:"/",
                    keyOnes:"index",
                    key:0,
                },
                {
                    title:"产品",
                    link:"/clouds/1/1",
                    keyOnes:"clouds",
                    list:[
                        {
                            title:"计算",
                            list:[
                                {
                                    title:"云主机",
                                    link:"/clouds/1/1",
                                },
                                {
                                    title:"镜像",
                                    link:"/clouds/1/2",
                                }
                            ]
                        },
                        {
                            title:"存储",
                            list:[
                                {
                                    title:"云硬盘",
                                    link:"/clouds/2/1",
                                },
                                {
                                    title:"对象存储",
                                    link:"/clouds/2/2",
                                }
                            ]
                        },
                        {
                            title:"网络",
                            list:[
                                {
                                    title:"私有网络",
                                    link:"/clouds/3/1",
                                },
                                {
                                    title:"端口映射",
                                    link:"/clouds/3/2",
                                },
                                {
                                    title:"弹性公网IP",
                                    link:"/clouds/3/3",
                                },
                                {
                                    title:"负载均衡",
                                    link:"/clouds/3/4",
                                }
                            ]
                        }
                    ]
                },
                {
                    title:"解决方案",
                    link:"/scheme/1/1",
                    keyOnes:"scheme",
                    list:[
                        {
                            title:"计算",
                            list:[
                                {
                                    title:"云主机",
                                    link:"/scheme/1/1",
                                },
                                {
                                    title:"镜像",
                                    link:"/scheme/1/2",
                                }
                            ]
                        },
                        {
                            title:"存储",
                            list:[
                                {
                                    title:"云硬盘",
                                    link:"/scheme/2/1",
                                },
                                {
                                    title:"对象存储",
                                    link:"/scheme/2/2",
                                }
                            ]
                        },
                        {
                            title:"网络",
                            list:[
                                {
                                    title:"私有网络",
                                    link:"/scheme/3/1",
                                },
                                {
                                    title:"端口映射",
                                    link:"/scheme/3/2",
                                },
                                {
                                    title:"弹性公网IP",
                                    link:"/scheme/3/3",
                                },
                                {
                                    title:"负载均衡",
                                    link:"/scheme/3/4",
                                }
                            ]
                        }
                    ]
                },
                {
                    title:"服务与支持",
                    link:"/serve/1/1",
                    keyOnes:"serve",
                    list:[
                        {
                            title:"计算",
                            list:[
                                {
                                    title:"云主机",
                                    link:"/clouds/1/1",
                                },
                                {
                                    title:"镜像",
                                    link:"/clouds/1/2",
                                }
                            ]
                        },
                        {
                            title:"存储",
                            list:[
                                {
                                    title:"云硬盘",
                                    link:"/clouds/2/1",
                                },
                                {
                                    title:"对象存储",
                                    link:"/clouds/2/2",
                                }
                            ]
                        },
                        {
                            title:"网络",
                            list:[
                                {
                                    title:"私有网络",
                                    link:"/clouds/3/1",
                                },
                                {
                                    title:"端口映射",
                                    link:"/clouds/3/2",
                                },
                                {
                                    title:"弹性公网IP",
                                    link:"/clouds/3/3",
                                },
                                {
                                    title:"负载均衡",
                                    link:"/clouds/3/4",
                                }
                            ]
                        }
                    ]
                },
                {
                    title:"关于我们",
                    link:"/regard/1/1",
                    keyOnes:"regard",
                }
            ]*/
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                {
                    state.map((data,key)=>{
                        if(data.list&&data.list instanceof Array&&data.list.length>0){
                            // console.log();
                            return(
                                <SubMenu  key={data.keyOnes}  className={"m_clound_onea"} title={<Link data-key={data.key}  onClick={that.onOpenChangeClick.bind(this)}  className={"m_clound_onelink"}  to={data.link}>{data.title}</Link>}>
                                    {
                                        data.list.map((datas,keys)=>{
                                            return (
                                                <MenuItemGroup key={keys+"-group"} title={datas.title}>
                                                    {
                                                        datas.list.map((datass,keyss)=>{
                                                            return(
                                                                <Menu.Item key={"setting:"+datass.key}><Link to={datass.link}>{datass.title}</Link></Menu.Item>
                                                            )
                                                        })
                                                    }
                                                </MenuItemGroup>
                                            );
                                        })
                                    }
                                </SubMenu>
                            )

                        }else{
                            return(
                                <Menu.Item key={"setting:"+data.key}   className={"m_clound_onea"} ><Link data-key={data.keyOnes} onClick={that.onOpenChangeClick.bind(this)} className={"m_clound_onelink"} to={data.link}>{data.title}</Link></Menu.Item>
                            )
                        }

                    })
                }
            </Menu>
        );
    }
};

/* 使用redux连接器封装容器组件*/
function selectStateExerciseSubMenu(state) {
    return {
        state: state.initNavData
    }
};
/*function buildActionDispatcherExerciseCarousel(dispatch) {
    return {
        dispatchName: bindActionCreators(ActionName, dispatch)
    }
};*/
export const M_SubMenuRedux = connect(selectStateExerciseSubMenu)(M_SubMenu);

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* //底部组件
* ---------------------------------------------------------------------------------------------------------------------
* */

export class M_Footer extends React.Component{
    render() {
        let state = this.props.state;
        let isFlag = this.props.isFlag;
        //模拟数据
        let {Meta} = Card;
        return (
            <div className={"m_index_footer_box"}>
                <div className="m_index_footer_content">
                    <div className={"m_index_footer_content_top"}>
                        <div className={"m_inex_footer_erwei_box m__left"}>
                            <Card
                                style={{ width: 280,height:330}}
                                cover={<img alt="example" src={require('../../../static/images/clound/erwei.jpg')} />}
                            >
                                <Meta
                                    title={<div className={"m_inex_footer_erwei_title"}>
                                        <div>客服热线： 400-007-1234</div>
                                        <div style={{"marginTop":"16px"}}>联系地址： 北京市海淀区上地三街<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金隅嘉华大厦A-1112</div>
                                    </div>}
                                />
                            </Card>
                        </div>
                        <div className={"m_inex_footer_product_box m__left"}>
                            <div style={{ background: '#ECECEC' }}>
                                <Card title="产品" bordered={false} style={{ width: 230 }}>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>存储</a><br/>
                                    <a>数据库</a><br/>
                                    <a>云监控</a><br/>
                                    <a>服务与支持</a><br/>
                                </Card>
                            </div>
                        </div>
                        <div className={"m_inex_footer_scheme_box m__left"}>
                            <div style={{ background: '#ECECEC' }}>
                                <Card title="产品" bordered={false} style={{ width: 230 }}>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>存储</a><br/>
                                    <a>数据库</a><br/>
                                    <a>云监控</a><br/>
                                    <a>服务与支持</a><br/>
                                </Card>
                            </div>
                        </div>
                        <div className={"m_inex_footer_serve_box m__left"}>
                            <div style={{ background: '#ECECEC' }}>
                                <Card title="产品" bordered={false} style={{ width: 230 }}>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>存储</a><br/>
                                    <a>数据库</a><br/>
                                    <a>云监控</a><br/>
                                    <a>服务与支持</a><br/>
                                </Card>
                            </div>
                        </div>
                        <div className={"m_inex_footer_we_box m__left"}>
                            <div style={{ background: '#ECECEC' }}>
                                <Card title="产品" bordered={false} style={{ width: 230 }}>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>计算</a><br/>
                                    <a>存储</a><br/>
                                    <a>数据库</a><br/>
                                    <a>云监控</a><br/>
                                    <a>服务与支持</a><br/>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"m_index_footer_bottom"}>
                    <div className="m_index_footer_bottom_top">新商界网络科技有限公司</div>
                    <div className="m_index_footer_bottom_bottom">公安机关备案号 10090129010192</div>
                </div>
            </div>
        );



    }
};
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01
* //登录以后的公共头部组件 left
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_SubMenuLandings extends React.Component {
    constructor(props){
        super(props);
        this.state={
            state:this.props.state,
            current: 'setting:0',
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    onOpenChangeClick (e){
        // console.log(M$(e.target).M_attr("data-key"));
        this.setState({
            current: "setting:"+M$(e.target).M_attr("data-key"),
        });
    }
    componentWillMount(){
        let url = window.location.href;
        let arrs = ["index","clouds","scheme","serve","regard"];
        function stringReverse(str) {
            let str2 = "";
            for (let i = 0; i < str.length; i++) {
                str2 += str.charAt(str.length - i - 1);
            }
            return str2
        }
        url = stringReverse(url);
       /* if(url.split('/').length>6){
            url = url.split('/')[2];
            url = stringReverse(url);
            for(let i =0;i<this.state.state.length;i++){
                if(this.state.state[i].keyOnes==url){
                    this.setState({
                        current: "setting:"+this.state.state[i].key
                    });
                }
            }
        }else{
            this.setState({
                current: "setting:0",
            });
        }*/
    }
    render() {
        // console.log(this.state.current);
        let state = this.state.state;
        let that = this;
        //模拟数据
        state = [
            {
                title:"Mendege",
                link:"/",
                keyOnes:"index",
                key:0,
                list:[
                    {
                        title:"云主机",
                        link:"/clouds/1/1",
                        key:0,
                    },
                    {
                        title:"云主机",
                        link:"/clouds/1/1",
                        key:1,
                    },
                    {
                        title:"云主机",
                        link:"/clouds/1/1",
                        key:2,
                    }
                ],
                icon:"setting"
            },
            {
                title:"解决方案",
                link:"/scheme/1/1",
                keyOnes:"scheme",
                icon:"setting",
                key:3,

            },
            {
                title:"服务与支持",
                link:"/serve/1/1",
                keyOnes:"serve",
                icon:"setting",
                key:4,

            },
            {
                title:"关于我们",
                link:"/regard/1/1",
                keyOnes:"regard",
                icon:"setting",
                key:5,
            }
        ];
        const urlImg = require('../../../static/images/logins/logo.png');
        return (
            <div className={"m_leecr_header_public_box"}>
                <div  className={"m_leecr_header_logo m__left"}>
                    <img src={urlImg} alt="加载失败"/>
                </div>
                <div  className={"m_leecr_header_nav"}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        {
                            state.map((data,key)=>{
                                // console.log("keyOnes");
                                // console.log(data.keyOnes);
                                if(data.list&&data.list instanceof Array&&data.list.length>0){
                                    // console.log();
                                    return(
                                        <SubMenu  key={data.keyOnes}  className={"m_clound_onea"} title={<span><Icon type={data.icon} /><Link data-key={data.key}  onClick={that.onOpenChangeClick.bind(this)}  className={"m_clound_onelink"}  to={data.link}>{data.title}</Link><Icon style={{marginLeft:5}} type={"down"} /></span>}>
                                            {
                                                data.list.map((datas,keys)=>{
                                                    // console.log("keys");
                                                    // console.log(datas.key);
                                                    return (
                                                        <Menu.Item key={"setting:"+datas.key}><Link to={datas.link}>{datas.title}</Link></Menu.Item>
                                                    );
                                                })
                                            }
                                        </SubMenu>
                                    )

                                }else{
                                    return(
                                        <Menu.Item key={"setting:"+data.key}   className={"m_clound_onea"} ><Link data-key={data.keyOnes} onClick={that.onOpenChangeClick.bind(this)} className={"m_clound_onelink"} to={data.link}><Icon type={data.icon} /></Link></Menu.Item>
                                    )
                                }

                            })
                        }
                    </Menu>
                    <M_SubMenuLandingsRight></M_SubMenuLandingsRight>
                </div>
            </div>

        );
    }
};
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01
* //登录以后的公共头部导航组件 右部组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_SubMenuLandingsRight extends React.Component {
    constructor(props){
        super(props);
        this.state={
            state:this.props.state,
            current: null,
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    onOpenChangeClick (e){
        // console.log(M$(e.target).M_attr("data-key"));
        this.setState({
            current: "setting:"+M$(e.target).M_attr("data-key"),
        });
    }
    componentWillMount(){
        let url = window.location.href;
        let arrs = ["index","clouds","scheme","serve","regard"];
        function stringReverse(str) {
            let str2 = "";
            for (let i = 0; i < str.length; i++) {
                str2 += str.charAt(str.length - i - 1);
            }
            return str2
        }
        url = stringReverse(url);
    }
    render() {
        // console.log(this.state.current);
        let state = this.state.state;
        let that = this;
        //模拟数据
        state = [
            {
                title:"Mendege",
                link:"/",
                keyOnes:"index",
                key:0,
                icon:"setting"
            },
            {
                title:"解决方案",
                link:"/scheme/1/1",
                keyOnes:"scheme",
                icon:"question-circle-o",
                key:1,

            },
            {
                title:"服务与支持",
                link:"/serve/1/1",
                keyOnes:"serve",
                icon:"logout",
                key:2,

            }
        ];
        return (
            <div className={"m__right"}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    {
                        state.map((data,key)=>{
                            if(data.list&&data.list instanceof Array&&data.list.length>0){
                                return(
                                    <SubMenu  key={data.keyOnes}  className={"m_clound_onea"} title={<span><Icon type={data.icon} /><Link data-key={data.key}  onClick={that.onOpenChangeClick.bind(this)}  className={"m_clound_onelink"}  to={data.link}>{data.title}</Link><Icon style={{marginLeft:5}} type={"down"} /></span>}>
                                        {
                                            data.list.map((datas,keys)=>{
                                                return (
                                                    <Menu.Item key={"setting:"+datas.key}><Link to={datas.link}>{datas.title}</Link></Menu.Item>
                                                );
                                            })
                                        }
                                    </SubMenu>
                                )

                            }else{
                                return(
                                    <Menu.Item key={"setting:"+data.key}   className={"m_clound_onea"} ><Link data-key={data.keyOnes} onClick={that.onOpenChangeClick.bind(this)} className={"m_clound_onelink"} to={data.link}><Icon type={data.icon} /></Link></Menu.Item>
                                )
                            }

                        })
                    }
                </Menu>
            </div>
        );
    }
};