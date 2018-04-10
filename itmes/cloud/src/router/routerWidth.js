import React from 'react';
//介入组件库
//介入组件产品页三级组件库
import {M_cloud_clouds_Ssl,M_cloud_clouds_cpt} from '../js/component-library/product/product-modules';
//介入组件方案页三级组件
import {M_SchemeAll,M_SchemeMixedCloud} from '../js/component-library/scheme/scheme-modules';
//介入组件服务页三级组件
import {M_ServeAPIAll,M_ServeUserAll,M_ServeUser} from '../js/component-library/serve/serve-modules';
//介入关于我们页面三级组件
import {M_RegardCompanyProfile, M_RegardContact} from '../js/component-library/regard/regard-modules';



//介入登录以后的计算页三级组件
import {M_LeecrsCloudDrive, M_LeecrsCloudHost} from '../js/component-library/leecrs/leecrs-index/leecrs-index-modules';

export let M_IsRouter = (son,sub,keys)=>{

    switch(son){
        case ("clouds"):
            if(sub==1&&keys==1){
                console.log("加载产品页下的云主机");
                return M_cloud_clouds_Ssl;
            }else if(sub==1&&keys==2){
                return M_cloud_clouds_cpt;
            }else{
                return null
            }
        case ("scheme"):
            if(sub==1&&keys==1){
                console.log("加载方案页下的所有页面");
                return M_SchemeAll;
            }else if(sub==1&&keys==2){
                return M_SchemeMixedCloud;
            }else{
                return null
            }
        case ("serve"):
            if(sub==11&&keys==1){
                console.log("加载服务页下的所有页面");
                return M_ServeUserAll;
            }else if(sub==11&&keys==2){
                return M_ServeUser
            } else if(sub==22&&keys==1){
                return M_ServeAPIAll;
            }else{
                return null
            }
        case ("regard"):
            if(sub==11&&keys==1){
                return M_RegardCompanyProfile;
            }else if(sub==11&&keys==2){
                return null
            } else if(sub==22&&keys==1){
                return M_RegardContact;
            }else{
                return null
            }
        case ("leecrs-count"):
            if(sub==1&&keys==1){
                return M_LeecrsCloudHost;
            }else if(sub==1&&keys==2){
                return null
            } else if(sub==2&&keys==3){
                return M_LeecrsCloudDrive;
            }else{
                return null
            }
        default:
            return null;
    }
};