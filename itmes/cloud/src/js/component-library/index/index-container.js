import React from 'react';
import {Button} from 'antd';
import {M_SubMenu, M_CarouselRadux, M_ImageTextSslBoxRadux, M_ImageTextCard1Box1Radux,M_IndexFooter
    , M_ImageTextCard1,M_ImageTextCard1Box2Radux,M_ImageTextCard1Box3Radux,M_ImageTextCard1Box4Radux} from './index-modules';
import {Link,Route} from 'react-router-dom';

//云首页
export class M_cloud_index extends React.Component{
    render(){
        return(
            <div>
                <M_CarouselRadux></M_CarouselRadux>
                <M_ImageTextSslBoxRadux></M_ImageTextSslBoxRadux>
                <div className={"m_index_global_title_box"}>
                    <div className={"m_index_global_title_content"}>
                        <div className={"m_index_global_title_content_top"}>全球领先、安全、稳定的云计算产品</div>
                        <div className={"m_index_global_title_content_bottom"}>计算、存储、网络、数据库、云联络、云监控、大数据平台助您飞跃发展</div>
                    </div>
                </div>
                <M_ImageTextCard1Box1Radux></M_ImageTextCard1Box1Radux>
                <M_ImageTextCard1Box2Radux></M_ImageTextCard1Box2Radux>
                <M_ImageTextCard1Box3Radux></M_ImageTextCard1Box3Radux>
                <div className={"m_index_select_mes_box"} >
                    <div className={"m_index_select_mes_content"}>
                        <div className={"m_index_global_title_content"}>
                            <div className={"m_index_global_title_content_top"}>为何选择我们</div>
                            <div className={"m_index_global_title_content_bottom"}>我们为您选择更多--------阿萨德-----敖德萨所----奥术大师多--</div>
                        </div>
                        <div className={"m_index_select_mes_list"}>
                            <M_ImageTextCard1Box4Radux></M_ImageTextCard1Box4Radux>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}