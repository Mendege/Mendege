import React from 'react';

//redux相关
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { HashRouter  as Router,Link,Redirect,Route,BrowserRouter,HashRouter} from 'react-router-dom';
import reducer from "../../redux/reducers/index";


//路由容器
import {BasicExample,BasicExampleLoginAfter} from './m_rganizations'
//引入css
import 'antd/dist/antd.css';
import '../../css/index.css';
import '../../static/icon/m_icon/iconfont.css'
//设置全局语言
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
class M_CheckoutLogin extends React.Component{
        render(){
            return(
                <div>
                    正在检验当前环境安全状况以及登录状态
                </div>
            )
        }
}
class NewApp extends React.Component{
        constructor(props){
            super(props);
            this.state={
                sHtml:null
            }
        }
    componentDidMount(){


    }
    componentWillUnmount(){
            //暂时没有被使用
        window.onbeforeunload=function (event){
            alert("===onbeforeunload===");
            if(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey){
                alert("你关闭了浏览器");
            }else{
                alert("你正在刷新页面");
            }
        }
            //判断本地存储的登录参数判断是否已经登录中的参数，选择加载哪个路由容器




    }
    //首次加载前调用
    componentWillMount(){
        if(sessionStorage.logins==1){
            this.setState({sHtml:<BasicExampleLoginAfter></BasicExampleLoginAfter>});
        }else{
            this.setState({sHtml:<BasicExample></BasicExample>});
        }
    }
    render(){
            let sHtml = this.state.sHtml;
            // sHtml = <BasicExample></BasicExample>;
        console.log(sHtml);
        console.log(this.state.sHtml);


        //设置路由路径
        return(
            <div>
                <HashRouter>
                    <div>
                        {sHtml}
                    </div>
                </HashRouter>

            </div>


        )
    }
};
//将根组件用 Provider包裹起来
const store = createStore(reducer, applyMiddleware(thunk));
class NewAppRedux extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <NewApp></NewApp>
            </Provider>
        )
    }
};
export default NewAppRedux;