import React from 'react';
import {M_SubMenuRedux,M_Footer,M_SubMenuLandings} from './footheader-modules'
//云公共页面 未登录前
 class M_cloud extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const logoImg = require('../../../static/images/clound/logo.jpg');
        return(
            <div id={"m_clound_index_headerbox"}>
                <div className={"m_clound_index_header"}>
                    <div className={"m_clound_index_header_content"}>
                        <div className={"m_clound_logo m__left"}>
                            <img src={logoImg} alt="加载失败"/>
                        </div>
                        <div  className={"m_clound_nav m__left"}>
                            <M_SubMenuRedux></M_SubMenuRedux>
                        </div>
                        <div className={"m_clound_login m__right"}>
                            <a href={"http://localhost:3000/login.html"}>登录</a>
                            <span className={"m_login_line"}>|</span>
                            <a href={"http://localhost:7070/login.html"}>注册</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};










//底部
export {M_Footer,M_cloud,M_SubMenuLandings}
