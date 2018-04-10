// import ajax from '../services/ajax'; //经过封装的加强型 ajax 函数
import $ from 'jquery';
//这是命名空间，对普通action做划分
const prefix = 'apple/';
//修改属性命名空间
const sNameActionName = 'sName/';
let Actions = {

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: function() {
        //getState 可以获取到当前活动组件的props
        return function(dispatch, getState) {
            /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
            //getState() 获取到当前state树
            if (getState().appleData.isPicking){
                return;
            }
            /** 通知开始摘苹果 */
            dispatch(Actions.beginPickApple());
            $.ajax({
                url:"http://localhost:4000/apple.json",
                type:"get",
                data:{},
                dataType:"json",
                success:function (_sdata) {
                    // that.sAddApples(_sdata);
                    // console.log(_sdata);
                    dispatch(Actions.donePickApple(_sdata));
                },
                error:function(){
                    alert("网络请求故障");
                }
            });
        }
    },

    beginPickApple: () => ({
        type: 'apple/BEGIN_PICK_APPLE'
    }),

    donePickApple: appleWeight => ({
        type: 'apple/DONE_PICK_APPLE',
        payload: appleWeight
    }),

    failPickApple: errMsg => ({
        type: 'apple/FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),

    eatApple: appleId => {
        return {
            type: 'apple/EAT_APPLE',
            payload: appleId
        }
    }


};
//修改属性的action
let ActionName = {
    sOperation: function() {
        //getState 可以获取到当前活动组件的props
        return function(dispatch, getState) {
            /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
            //getState() 获取到当前state树
           /* if (getState().appleData.isPicking){
                return;
            }*/
            /** 通知开始摘苹果 */
           /* dispatch(Actions.beginPickApple());
            $.ajax({
                url:"./apple.json",
                type:"get",
                data:{},
                dataType:"json",
                success:function (_sdata) {
                    // that.sAddApples(_sdata);
                    // console.log(_sdata);
                    dispatch(Actions.donePickApple(_sdata));
                },
                error:function(){
                    alert("网络请求故障");
                }
            });*/
        }
    },
    //修改姓名
    sAmendName:data=>{
        return{
            type:sNameActionName+'SAMEND_ACTION_NAME',
            content:data
        }
    },
    //修改年龄
    sAmendAge:data=>{
        return({
            type:sNameActionName+'SAMEND_ACTION_AGE',
            content:data
        })
    },
    //修改电话
    sAmendTel:data=>{
        return({
            type:sNameActionName+'SAMEND_ACTION_TEL',
            content:data
        })
    },
    //修改备注
    sAmendRemarks:data=>{
        return({
            type:sNameActionName+'SAMEND_ACTION_REMARKS',
            content:data
        })
    }
};
let sActionS={
    Actions:Actions,
    ActionName:ActionName
};
export default sActionS;