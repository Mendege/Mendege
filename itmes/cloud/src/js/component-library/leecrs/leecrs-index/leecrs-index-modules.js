import React from "react";
import {Link} from 'react-router-dom';
// import Bundle from '../../router/bundle.js';
//antd相关
import { Menu, Icon, Button,Tabs,Table,Input,Select } from 'antd';
import M$ from '../../../../static/introduce-js/m-$'
//引入登录注册组件
// import {} from './login-modules'
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 登录成功以后侧边栏菜单组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_LeecrsLider extends React.Component {
    /*state = {
        collapsed: false,
    }*/
    constructor(props){
        super(props);
        this.state={
            collapsed: false,
            key:this.props.keys.secound,
            sub:this.props.keys.three
        }
    }
    render() {
        const SubMenu = Menu.SubMenu;
        return (
            <div style={{ width: 200 }}>
                <Menu
                    defaultSelectedKeys={[this.state.key]}
                    defaultOpenKeys={[`sub${this.state.sub}`]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="0"><Link to={"/"}>概况</Link></Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>计算</span></span>}>
                        <Menu.Item key="1"><Link to={"/leecrs-count/1/1"}>云主机</Link></Menu.Item>
                        <Menu.Item key="2">镜像</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>存储</span></span>}>
                        <Menu.Item key="3"><Link to={"/leecrs-count/2/3"}>云硬盘</Link></Menu.Item>
                        <Menu.Item key="4">对象存储</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege
* 2018-03-01 M_timer
* 登录成功以后初始化显示页面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_LeecrsIndex extends React.Component {
    state = {
        collapsed: false,
    }
    render() {
        let flag = 0;
        return (
            <div className={"m_leecrs_index_box"}>
                <div className={"m_leecrs_index_Alltitle_box"}>
                    <M_LeecrsIndexTitle key ={1}></M_LeecrsIndexTitle>
                    <M_LeecrsIndexTitle key ={2}></M_LeecrsIndexTitle>
                    <M_LeecrsIndexTitle key ={3}></M_LeecrsIndexTitle>
                </div>
                <div className={"m_leecrs_index_h3"}>我的产品与服务</div>
                <div className={"m_leecrs_index_content"} style={{"height":(M$().M_NoThisHeight()-282)}}>

                    <M_LeecrsProductANDservice flag = {flag} ></M_LeecrsProductANDservice>
                </div>
            </div>

        );
    }
}

/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege resource
* 2018-03-01 M_timer
* 登录成功以后初始化显示页面  --->提示组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_LeecrsIndexTitle extends React.Component {
    render() {
        return (
            <div className={"m_leecrs_index_title_box"}>
                <div className={"m_leecrs_index_title_list"}>
                    <Icon type="appstore" style={{float:"right"}} />
                </div>
                <div className={"m_leecrs_index_title_center"}>
                    <Icon style={{"marginRight":10}} type="pay-circle-o" />
                    <span>￥ 2,700.00</span><br/>
                </div>
                <div className={"m_leecrs_index_title_bootom"}>可用余额</div>
            </div>
        );
    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege resource
* 2018-03-01 M_timer
* 我的产品与服务组件
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_LeecrsProductANDservice extends React.Component {
    render() {
        let flag = this.props.flag;
        const urlImg = require('../../../../static/images/logins/no-resource.png');
        //模拟
            flag = 0;
            if(flag==0){
                return (
                    <div className={"m_leecrs_index_no_resource"}>
                        <img className={"m_imgbox"} src={urlImg} alt="暂时没有产品存在"/>
                    </div>
                );
            }else{
                return (
                    <div className={"m_leecrs_index_title_box"}>
                        <div className={"m_leecrs_index_title_list"}>
                            <Icon type="appstore" style={{float:"right"}} />
                        </div>
                        <div className={"m_leecrs_index_title_center"}>
                            <Icon style={{"marginRight":10}} type="pay-circle-o" />
                            <span>￥ 2,700.00</span><br/>
                        </div>
                        <div className={"m_leecrs_index_title_bootom"}>可用余额</div>
                    </div>
                );
            }


    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege resource
* 2018-03-01 M_timer
* 登录以后--云主机页面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_LeecrsCloudHost extends React.Component {
    render() {
        //引入antd的tab标签
        const TabPane = Tabs.TabPane;
        return(
            <div>
                <div className={"m_leecrs_cloud_host_tab_box"}>
                    <Tabs>
                        <TabPane tab="主机" key="1">
                            <M_LeecrsCloudHostTab_CloudHost></M_LeecrsCloudHostTab_CloudHost>
                        </TabPane>
                        <TabPane tab="预留合约" key="2">预留合约</TabPane>
                        <TabPane tab="安置策略组" key="3">安置策略组</TabPane>
                    </Tabs>
                </div>
            </div>
        )


    }
}
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege resource
* 2018-03-01 M_timer
* 登录以后--云主机页面--之下tab切换--主机页面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_LeecrsCloudHostTab_CloudHost extends React.Component {
    render() {
        let chirdrenSdata =  [
            {
                //主机ID
                id:1,
                //主机名称
                IDname:"00001",
                //主机状态
                status:1,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"2018年3月9日16时15分42秒",
            },
            {
                //主机ID
                id:2,
                //主机名称
                IDname:"00002",
                //主机状态
                status:2,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"2018年3月9日16时16分11秒",
            },
            {
                //主机ID
                id:3,
                //主机名称
                IDname:"00003",
                //主机状态
                status:3,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"2018年3月9日16时17分01秒",
            },
            {
                //主机ID
                id:4,
                //主机名称
                IDname:"00004",
                //主机状态
                status:4,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"2018年3月9日16时17分30秒",
            },
            {
                //主机ID
                id:5,
                //主机名称
                IDname:"00005",
                //主机状态
                status:3,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"2018年3月9日16时17分42秒",
            }
        ];
        return(
            <div>
                <M_LeecrsCloudHostTab_CloudHostContent state = {chirdrenSdata}></M_LeecrsCloudHostTab_CloudHostContent>
            </div>
        )


    }
}


class M_LeecrsCloudHostTab_CloudHostContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRowKeys: [], // 被选中的默认列
            loading: false,
            sTitle:[],//表头数据
            sData:[],//内容数据
            startingUp:false,//开机按钮是否可点击
            shutdown:false,//关机按钮是否可点击
            status:[
                {
                    id:1,
                    content:"等待中"
                },
                {
                    id:2,
                    content:"运行中"
                },
                {
                    id:3,
                    content:"已关机"
                },
                {
                    id:4,
                    content:"已暂停"
                },
                {
                    id:5,
                    content:"救援中"
                }
            ]
        }
    }
    //此处为点击按钮的回调函数 暂时只有这一个，后面会拓展
    start = () => {
        this.setState({ loading: true });
        // ajax 不成功以后执行
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };
    //点击刷新按钮的回调函数
    renovateFn = () =>{
        // console.log(this.props.state);
        // this.transformData(this.props.state);
        window.location.reload();
    };
    //选中的回调函数
    onSelectChange = (selectedRowKeys) => {
        console.log( selectedRowKeys);
        this.selectiveSwitch(selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    //完成首次加载之前调用
    componentWillMount(){
        let sData = this.props.state;
        //模拟数据
       /* sData =  [
            {
                //主机ID
                id:1,
                //主机名称
                IDname:"00001",
                //主机状态
                status:1,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            },
            {
                //主机ID
                id:2,
                //主机名称
                IDname:"00002",
                //主机状态
                status:2,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            },
            {
                //主机ID
                id:3,
                //主机名称
                IDname:"00003",
                //主机状态
                status:3,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            },
            {
                //主机ID
                id:4,
                //主机名称
                IDname:"00004",
                //主机状态
                status:4,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            }
        ];*/
        this.transformData(sData);
    };
    //接收到新的props时调用，可以更改props和state
    componentWillReceiveProps(nextProps){
        console.log("props更新了");
        console.log(nextProps);
        let sData = nextProps.state;
            //模拟数据
       /* sData =  [
            {
                //主机ID
                id:1,
                //主机名称
                IDname:"00001",
                //主机状态
                status:1,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            },
            {
                //主机ID
                id:2,
                //主机名称
                IDname:"00002",
                //主机状态
                status:2,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            },
            {
                //主机ID
                id:3,
                //主机名称
                IDname:"00003",
                //主机状态
                status:3,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            },
            {
                //主机ID
                id:4,
                //主机名称
                IDname:"00004",
                //主机状态
                status:4,
                //主机类型
                address:"性能型",
                //主机映像 路由导航 此处 为处理数据时配置，需传入参数主机ID

                //配置
                config:"配置",
                // 网络
                network:"(基础网络)100.1.22",
                //IP
                IP:"192.1.101.2",
                //防火墙
                firewall:"防火墙----",
                //副本策略
                transcript:"副本策略----",
                //警告状态
                sarningState:"警告状态----",
                //创建于
                establish:"创建于----",
            }
        ];*/
        this.transformData(sData);
    };
    //转换主机状态  主机状态是数字，需要将他转换成文字
    transformStatus(data) {
        console.log(this.state.status);
        const status = this.state.status;
        for(let i=0;i<status.length;i++){
            if(data==status[i].id){
                return status[i].content
            }
        }
    }
    //转换数据方法
    transformData(data){
        console.log(data);
        let that =this;
        //映射cd图片
        const cdImg = require('../../../../static/images/logins/cd.png');
    //    接到后台数据以后设置表头
        let sTitle = [
            {
                title: 'ID(名称)',
                dataIndex: 'IDname',
            }, {
                title: '状态',
                dataIndex: 'statusTxt',
                filters: [
                        {
                        text: '已关机',
                        value: '已关机',
                        },
                        {
                        text: '已暂停',
                        value: '已暂停',
                        },
                        {
                            text: '运行中',
                            value: '运行中',
                        },
                        {
                            text: '等待中',
                            value: '等待中',
                        }
                ],
                filterMultiple: false,
                onFilter: (value, record) => {
                    return (record.statusTxt.indexOf(value) === 0);
                }
            },{
                title: '类型',
                dataIndex: 'address',
            },{
                title: '映像',
                dataIndex: 'images',
            },{
                title: '配置',
                dataIndex: 'config',
            },{
                title: '网络',
                dataIndex: 'network',
            },{
                title: '外部IP',
                dataIndex: 'IP',
            },{
                title: '防火墙',
                dataIndex: 'firewall',
            },{
                title: '副本策略',
                dataIndex: 'transcript',
            },{
                title: '警告状态',
                dataIndex: 'sarningState',
            },{
                title: '创建于',
                dataIndex: 'establish',
                defaultSortOrder: 'descend',
                sorter: (a, b) => {
                    return (M$().M_timeNo(a.establish,["年","月","日","时","分","秒"]) - M$().M_timeNo(b.establish,["年","月","日","时","分","秒"]));
                },
            }
        ];
        let sData = [];

        data.map((datas,key)=>{
            console.log(that.transformStatus(datas.status));
            sData.push(
                {
                    key:datas.id,
                    IDname:datas.IDname,
                    status:datas.status,
                    statusTxt:that.transformStatus(datas.status),
                    address:datas.address,
                    images:<Link to={"/leecrs-count/1/1"}><img src={cdImg} alt="失败"/></Link>,
                    config:datas.config,
                    network:datas.network,
                    IP:datas.IP,
                    firewall:datas.firewall,
                    transcript:datas.transcript,
                    sarningState:datas.sarningState,
                    establish:datas.establish
                }
            );
        });
        this.setState({
            sTitle:sTitle,
            sData:sData
        });
    };
    //根据选中的主机状态来决定哪个按钮可以被点击
    selectiveSwitch(data){
        //主要有三种区别状态  1是什么都不选  此时  操作 启动 关机 更多操作里部分不可点击   2是选择一部分 当选择全是关机状态时 开机按钮不可点
        //3是选择 全是关机状态时 关机按钮不可点击  4，当混选开关机状态时 开机关机按钮皆不可点击  但是更多按钮可以点击 ，更多之下的部分或者全部按钮也可点击

        /*{

        }*/
        //情况1 一个都没有选择时 全部不可选
        let noneOf = false;
        //情况2 开机按钮可以点击
        let startingUp = false;
        //关机按钮可以点击否
        let shutdown = false;
        //判断是否可以执行开机操作的标记  data 接收当前选中的行（数组，元素为减一则为list的下标）   list 每一行的详细数据  判断其中的状态得到是否可执行开机
        const startingUpFn = (datas,list)=>{
            let flag = true;
            for(let i=0;i<datas.length;i++){
                if(list[datas[i]-1].status!=3){
                    flag=false;
                }
            }
            return flag;
        };
        //判断是否可执行关机操作的标记
        const shutdownFn = (datas,list)=>{
            let flag = true;
            for(let i=0;i<datas.length;i++){
                if(list[datas[i]-1].status!=2){
                    flag=false;
                }
            }
            return flag;
        };
        //情况1 一个都没有选择时 全部不可选
        if(data.length>0){
            console.log(this.state.sData);
            console.log(startingUpFn(data,this.state.sData));
            //判断是否可以点击启动（开机按钮）
            if(startingUpFn(data,this.state.sData)){
                startingUp=true;
            }else{
                startingUp = false;
            }
            //判断是否可以点击关机
            if(shutdownFn(data,this.state.sData)){
                shutdown=true;
            }else{
                shutdown = false;
            }


        }else{
            noneOf = false;
        }

        console.log("开关机状态");
        console.log(startingUp);
        //操控开机按钮
        this.setState({startingUp:startingUp});
        //操控关机按钮
        this.setState({shutdown:shutdown});


    };
    selectHandleChange(value) {
        // console.log(`selected ${value}`);
        //确认选择后的搜索结果的数据下标 根据this.props
        let flagArr = [];
        let sData = this.props.state;
        let sDataNew = [];
        //前端控制的  ---  搜索
        for(let i=0;i<sData.length;i++){

            if(sData[i].IDname.match(value)!=null){
                flagArr.push(i);
            }
        }
       flagArr.map((datas)=>{
           sDataNew.push(sData[datas]);
       });
        this.transformData(sDataNew);



    };
    render() {
        const Search = Input.Search;
        const Option = Select.Option;
        /*******************************************************/
        /*
         状态码  {
            1：等待中，2:运行中，3：已关机，4：已暂停，5，已删除，6：已销毁，救援中,8，删除中，9,创建中，

         }
        */
                //模拟从后台接收到的数据
        /*******************************************************/





        const { loading, selectedRowKeys,sTitle,sData } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={hasSelected}
                        loading={loading}
                    >
                        <span>+ 创建</span>
                    </Button>
                    <span style={{ marginLeft: 8 }}></span>
                    <Button
                    type="primary"
                    onClick={this.start}
                    disabled={!this.state.startingUp}
                    loading={loading}
                >
                    <span>启动</span>
                </Button>
                    <span style={{ marginLeft: 8 }}></span>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!this.state.shutdown}
                        loading={loading}
                    >
                        <span>关机</span>
                    </Button>
                    <span style={{ marginLeft: 8 }}></span>
                    <Select defaultValue="更多" style={{ width: 170 }} dropdownClassName={"m_leecrs_host_content_selectbox"} onChange={this.selectHandleChange}>
                        <Option value="1"><Icon type="question" />绑定标签</Option>
                        <Option value="2"><Icon type="question" />加载硬盘</Option>
                        <Option value="3"><Icon type="question" />加载SSH秘钥</Option>
                        <Option value="4"><Icon type="question" />加载防火墙规则</Option>
                        <Option value="5"><Icon type="question" />加入网络</Option>
                        <Option value="6"><Icon type="question" />加入安置策略组</Option>
                        <Option value="7"><Icon type="question" />更改配置</Option>
                        <Option value="8"><Icon type="question" />创建备份</Option>
                        <Option value="9"><Icon type="question" />迁移到专属主机</Option>
                        <Option value="10"><Icon type="question" />绑定告警策略</Option>
                        <Option value="11"><Icon type="question" />添加到资源组</Option>
                        <Option value="12"><Icon type="question" />修改副本策略</Option>
                        <Option value="13" disabled><Icon type="question" />重置系统</Option>
                    </Select>
                    <span style={{ marginLeft: 8 }}></span>

            {/*{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}*/}
                         <div className={"m__right m_Leecrs_cloudHost_content_header_right"}>
                             <span className={"m_Leecrs_cloudHost_content_search m__left"}>
                                  <Search
                                      placeholder="输入主机名称模糊搜索"
                                      onSearch={this.selectHandleChange.bind(this)}
                                      enterButton
                                  />
                             </span>

                             <span style={{ marginLeft: 8 }}></span>
                             <Button
                                 type="primary"
                                 onClick={this.start}
                                 loading={loading}
                             >
                                 <span>标签</span>
                             </Button>
                             <span style={{ marginLeft: 8 }}></span>
                             <Button
                                 type="primary"
                                 onClick={this.start}
                                 loading={loading}
                             >
                                 <span>变栏</span>
                             </Button>
                             <span style={{ marginLeft: 8 }}></span>
                             <Button
                                 type="primary"
                                 onClick={this.renovateFn.bind(this)}
                                 loading={loading}
                             >
                                 <span>刷新</span>
                             </Button>
                             <span style={{ marginLeft: 8 }}></span>
                        </div>
                </div>
                <Table locale={{filterConfirm:"确定",filterReset:"重置",emptyText:"当前搜索条件下暂无数据！"}} rowSelection={rowSelection} columns={sTitle} dataSource={sData} />
            </div>
        );
    }
}



/* ********************************************************************************************************************/
/* ********************************************************************************************************************/
/* ********************************************************************************************************************/
/*
* ---------------------------------------------------------------------------------------------------------------------
* Mendege resource
* 2018-03-01 M_timer
* 登录以后--云硬盘页面
* ---------------------------------------------------------------------------------------------------------------------
* */
export class M_LeecrsCloudDrive extends React.Component {
    render() {
        return(
            <div>
                云硬盘页面
            </div>
        )


    }
}