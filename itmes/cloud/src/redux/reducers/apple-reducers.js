import { fromJS } from 'immutable';
// import {M_ImageTextCard1, M_ImageTextSslBox} from "../../comments/mendeg_componts/cloud-index/component-gallery";  //为什么immutable 没写入package.json 好奇怪
//修改属性命名空间
const sNameActionName = 'sName/';
//苹果数据以及苹果的reducers
const initialState = {
    isPicking: false,
    newAppleId: 3,
    apples: [
        {
            id: 0,
            weight: 233,
            isEaten: false,
            name:"红苹果-11号"
        },
        {
            id: 1,
            weight: 235,
            isEaten: true,
            name:"红苹果-11号"
        },
        {
            id: 2,
            weight: 256,
            isEaten: false,
            name:"红苹果-11号"
        }
    ]
};
//轮播图的默认数据

let initCarouselData = {
    isLink:false,
    list:[
        {
            _url:require('../../static/images/clound/banner1.jpg'),
            _link:""
        },
        {
            _url:"https://www.qingcloud.com/files/uploads/2018/01/home_banner_live.png",
            _link:""
        },
        {
            _url:"https://www.qingcloud.com/files/uploads/2018/01/home_banner_PCDN.png",
            _link:""
        },
        {
            _url:"https://www.qingcloud.com/files/uploads/2018/01/home_banner_Deep-Learning-1.png",
            _link:""
        }
    ]
};
setTimeout(()=>{
    initCarouselData={
        isLink:false,
        list:[
            {
                _url:"http://01.imgmini.eastday.com/mobile/20180315/20180315052446_7f5169bfa348520b9e5e7ee6846b574e_1.jpeg",
                _link:""
            },
            {
                _url:"http://seopic.699pic.com/photo/50047/8124.jpg_wh1200.jpg",
                _link:""
            },
            {
                _url:"http://imgsrc.baidu.com/imgad/pic/item/d000baa1cd11728bdf999dd4c2fcc3cec2fd2c8b.jpg",
                _link:""
            },
            {
                _url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521205991337&di=21ae3025971c8f23642d450f75436306&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F12%2F03%2F16pic_1203603_b.jpg",
                _link:""
            }
        ]
    }
},10000);
//轮播图下方展示组件默认数据
const initImageTextSslBoxData = {
    isLink:false,
    list:[
        {
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可",
            link:"/clouds/1/1",
            isLink:true

        },
        {
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可",
            link:"/clouds/1/2",
            isLink:true


        },
        {
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可",
            link:"/clouds/2/3",
            isLink:true

        },
        {
            icon:"icon-xunjianjianyan",
            title:"What's News",
            content:"这是一个证书，拥有该证书代表国际认可",
            link:"/clouds/2/4",
            isLink:true

        }
    ]
};
//修改姓名等  默认数据
const initialsNameData = {
    name:"王维焱",
    age:27,
    tel:"17708526400",
    remark:"年轻好男人，哈哈，哈哈，哈哈，哈哈"
};
//计算---默认数据
const initImageTextCard1Box1Data = {
    isLink:false,
    list:[
        {
            title:"计算",
            link:"/clouds/ssl/mendege.html",
            isLink:true,
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            title:"存储",
            link:"",
            isLink:false,
            url:require('../../static/images/clound/listshili.jpg')


        },
        {
            title:"网络",
            link:"",
            isLink:false,
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            title:"数据库",
            link:"",
            isLink:false,
            url:require('../../static/images/clound/listshili.jpg')

        }
    ]
};
//物理主机默认数据
const initImageTextCard1Box2Data = {
    isLink:false,
    list:[
        {
            icon:"iconfont icon-gengduo",
            title:"计算",
            isLink:false,
            link:"",
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            icon:"iconfont icon-gengduo",
            title:"计算",
            isLink:false,
            link:"",
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            icon:"iconfont icon-gengduo",
            title:"计算",
            isLink:false,
            link:"",
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            icon:"iconfont icon-gengduo",
            title:"计算",
            isLink:false,
            link:"",
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            icon:"iconfont icon-gengduo",
            title:"计算",
            isLink:false,
            link:"",
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            icon:"iconfont icon-gengduo",
            title:"计算",
            isLink:false,
            link:"",
            url:require('../../static/images/clound/listshili.jpg')

        }
    ]
};
//云通信--默认数据
const initImageTextCard1Box3Data = {
    isLink:false,
    list:[
        {
            title:"云通信",
            link:"/clouds/ssl/mendege.html",
            isLink:true,
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            title:"云通信",
            link:"",
            isLink:false,
            url:require('../../static/images/clound/listshili.jpg')


        },
        {
            title:"云通信",
            link:"",
            isLink:false,
            url:require('../../static/images/clound/listshili.jpg')

        },
        {
            title:"云通信",
            link:"",
            isLink:false,
            url:require('../../static/images/clound/listshili.jpg')

        }
    ]
};
//为何选择我们之下展示框----默认数据
const initImageTextCard1Box4Data = {
    isLink:false,
    list:[
        {
            icon:"icon-ziliaoku",
            title:"综合一体化通讯",
            content:"一站解决所有通信问题，更方便企业协同操作",
            link:"/clouds/ssl/mendege.html",
            isLink:true

        },
        {
            icon:"icon-ziliaoku",
            title:"综合一体化通讯",
            content:"一站解决所有通信问题，更方便企业协同操作",
            link:"",
            isLink:false


        },
        {
            icon:"icon-ziliaoku",
            title:"综合一体化通讯",
            content:"一站解决所有通信问题，更方便企业协同操作",
            link:"",
            isLink:false

        },
        {
            icon:"icon-ziliaoku",
            title:"综合一体化通讯",
            content:"一站解决所有通信问题，更方便企业协同操作",
            link:"",
            isLink:false

        }
    ]
};
//云产品页面列表菜单 默认数据
const initProductSidebarData = {
    isFold:false,//是否开放折叠按钮
    collapsed:false,//是否默认是折叠按钮
    list:[
        {
            title:"计算",
            icon:"",
            list:[
                {
                    title:"云主机",
                    link:"/1/1",
                },
                {
                    title:"镜像",
                    link:"/1/2",
                }
            ]
        },
        {
            title:"存储",
            icon:"",
            list:[
                {
                    title:"云硬盘",
                    link:"/2/3",
                },
                {
                    title:"对象存储",
                    link:"/2/4",
                }
            ]
        },
        {
            title:"网络",
            icon:"",
            list:[
                {
                    title:"私有网络",
                    link:"/3/5",
                },
                {
                    title:"端口映射",
                    link:"/3/6",
                },
                {
                    title:"弹性公网IP",
                    link:"/3/7",
                },
                {
                    title:"负载均衡",
                    link:"/3/8",
                }
            ]
        },
        {
            title:"计算",
            icon:"",
            list:[
                {
                    title:"云主机",
                    link:"/1/1",
                },
                {
                    title:"镜像",
                    link:"/1/2",
                }
            ]
        },
        {
            title:"存储",
            icon:"",
            list:[
                {
                    title:"云硬盘",
                    link:"/2/3",
                },
                {
                    title:"对象存储",
                    link:"/2/4",
                }
            ]
        },
        {
            title:"网络",
            icon:"",
            list:[
                {
                    title:"私有网络",
                    link:"/3/5",
                },
                {
                    title:"端口映射",
                    link:"/3/6",
                },
                {
                    title:"弹性公网IP",
                    link:"/3/7",
                },
                {
                    title:"负载均衡",
                    link:"/3/8",
                }
            ]
        }
    ]
};
//页头导航 默认数据
let initNavData =  [
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
        link:"/serve/11/1",
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
        link:"/regard/11/1",
        keyOnes:"regard",
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
    }
];
//
let appleBasketReducer = (state = initialState, action) => {
    let newState ;
    switch (action.type) {

        case 'apple/BEGIN_PICK_APPLE':

            /** 将isPicking设置true */
            return fromJS(state).set('isPicking', true).toJS();

        case 'apple/DONE_PICK_APPLE':
            let newApple = action.payload;
            return fromJS(state).update('apples', list => list.push(newApple))
                .set('newAppleId', state.newAppleId + 1)
                .set('isPicking', false)
                .toJS();
        case 'apple/FAIL_PICK_APPLE':

            /** 将isPicking设置false */
            return fromJS(state).set('isPicking', false).toJS();
        case 'apple/EAT_APPLE':
            let lengthId = ((data,appleId)=>{
                let lengthId = -1;
                data.apples.map((apple,index)=>{
                    if(apple.id==appleId)lengthId=index;
                });
                return lengthId;
            })(state,action.payload);
            if(lengthId==-1)return;
            /** 将id对应索引值的数组的isEaten设为true,表示已吃*/
            // let lengthId =
            return fromJS(state).setIn(['apples', lengthId, 'isEaten'], true).toJS();

        default:
            return state;
    }

};
//
let sNameReducer = (state=initialsNameData,action)=>{
    switch (action.type){
        case sNameActionName+ 'SAMEND_ACTION_NAME':
            return fromJS(state).set("name",action.content).toJS();
        case sNameActionName+'SAMEND_ACTION_AGE':
            return fromJS(state).set("age",action.content).toJS();
        case sNameActionName+'SAMEND_ACTION_TEL':
            return fromJS(state).set("tel",action.content).toJS();
        case sNameActionName+'SAMEND_ACTION_REMARKS':
            return fromJS(state).set("remark",action.content).toJS();
        default:
            return state;
    }
};
//轮播图reducer
let initCarouselReducer = (state=initCarouselData,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//轮播图下方展示组件reducer
let initImageTextSslBoxReducer = (state=initImageTextSslBoxData,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//计算组件reducer
let initImageTextCard1Box1Reducer = (state=initImageTextCard1Box1Data,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//物理主机reducer
let initImageTextCard1Box2Reducer = (state=initImageTextCard1Box2Data,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//云通信reducer
let initImageTextCard1Box3Reducer = (state=initImageTextCard1Box3Data,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//云通信reducer
let initImageTextCard1Box4Reducer = (state=initImageTextCard1Box4Data,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//云云产品页面列表菜单reducer
let initProductSidebarReducer = (state=initProductSidebarData,action)=>{
    switch (action.type){
        default:
            return state;
    }
};
//页头导航reducer
let initNavReducer = (state=initNavData,action)=>{
    let sData = state;
    let isIkey = 0;
    for(let i=0;i<sData.length;i++){
        if(sData[i].list&&sData[i].list instanceof Array&&sData[i].list.length>0){
            /*sData[i].key = sData[0]*/
            for(let j=0;j<sData[i].list.length;j++){
                if(sData[i].list[j].list&&sData[i].list[j].list instanceof Array&&sData[i].list[j].list.length>0){
                    for(let k=0;k<sData[i].list[j].list.length;k++){
                        sData[i].list[j].list[k].key=isIkey;
                        isIkey++;
                    }
                }
            }
            sData[i].key = sData[i].list[0].list[0].key;

        }else{
            sData[i].key = isIkey;
            isIkey++;
        }
    }
    state = sData;

    switch (action.type){
        default:
            return state;
    }
};
let sData = {
    appleBasketReducer:appleBasketReducer,
    sNameData:sNameReducer,
    initCarouselData:initCarouselReducer,
    initImageTextSslBoxData:initImageTextSslBoxReducer,
    initImageTextCard1Box1Data:initImageTextCard1Box1Reducer,
    initImageTextCard1Box2Data:initImageTextCard1Box2Reducer,
    initImageTextCard1Box3Data:initImageTextCard1Box3Reducer,
    initImageTextCard1Box4Data:initImageTextCard1Box4Reducer,
    initProductSidebarData:initProductSidebarReducer,
    initNavData:initNavReducer,
};

export default sData;


