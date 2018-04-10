import { combineReducers } from 'redux';
import sData from './apple-reducers';

/**
 * 此处合并Reducer，这步在本项目中意义不大，因为只有一个appleBasketReducer，完全可以不合并
 * 但是如果是为了扩展的话，比如不止一个AppleBasket组件，还有别的reducer就有意义了
 * 这步操作之后可以在容器组件传入数据的时候指定需要传入的数据
 * 比如在AppleBasket的mapStateToProp中传入state.appleBasket
 */
const rootReducer = combineReducers({
    appleData: sData.appleBasketReducer,
    sNameData:sData.sNameData,
    initCarouselData:sData.initCarouselData,
    initImageTextSslBoxData:sData.initImageTextSslBoxData,
    initImageTextCard1Box1Data:sData.initImageTextCard1Box1Data,
    initImageTextCard1Box2Data:sData.initImageTextCard1Box2Data,
    initImageTextCard1Box3Data:sData.initImageTextCard1Box3Data,
    initImageTextCard1Box4Data:sData.initImageTextCard1Box4Data,
    initProductSidebarData:sData.initProductSidebarData,
    initNavData:sData.initNavData
});
// console.log(appleBasketReducer);
export default rootReducer;
