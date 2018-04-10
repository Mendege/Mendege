let M_$ = function(data){
    /*
    *
    * */
    //Mquery 的初始化方法
    /* this.Mquery = function (arg){
         // console.log(arg);
         //用来存选出来的元素
         this.elements=[];
         switch(typeof arg){
             case 'function' :
                 this.domReady(arg);
                 break;
             case 'string' :
                 this.elements = this.getEle(arg);
                 break;
             case 'object' :
                 // console.log(this.elements);
                 //传入document等参数
                 this.elements.push(arg);
                 // console.log(this.elements);
                 break;
         }
         return this;
     };
     //DOM ready onload 如果参数是函数，则进行domReady操作
     this.domReady = function (fn){
         // FF chrome
         // attachEvent——兼容：IE7、IE8；不兼容firefox、chrome、IE9、IE10、IE11、safari、opera
         // addEventListener——兼容：firefox、chrome、IE、safari、opera；不兼容IE7、IE8
         if(document.addEventListener){
             //jquery中已经省略false，false解决低版本火狐兼容性问题
             //DOMContentLoaded 当html页面加载完成以后不用等到样式、js、等加载DOMContentLoaded事件就会加载 不像onload 必须等到页面加载完毕以后才会加载事件
             document.addEventListener('DOMContentLoaded',fn,false);
         }else{
             //IE只支持该事件 onreadystatechange 类似于onload 事件
             //attachEvent IE7、IE8兼容， document.readyState 文档加载程度  uninitialized - 还未开始载入 loading - 载入中 interactive - 已加载，文档与用户可以开始交互 complete - 载入完成
             document.attachEvent('onreadystatechange',function(){
                 if(document.readyState=='complete'){
                     fn();
                 }
             });
         }
     };
     // 根据传入的类名选择到dom
     this.getByClass = function (oParent,sClass){
         //高级浏览器支持getElementsByClassName直接使用
         if(oParent.getElementsByClassName){
             return oParent.getElementsByClassName(sClass);
         }else{
             //不支持需要选中所有标签的类名来选取
             var res=[];
             var aAll=oParent.getElementsByTagName('*');
             for(var i=0;i<aAll.length;i++){
                 //选中标签的全部类名是个str='btn on red'=aAll[i].className   使用正则  reg=/\b sClass \b/g
                 var reg= new RegExp('\\b'+sClass+'\\b','g');
                 // 选择到所有标签 然后匹配正则 选择标签中有该类名的标签
                 if(reg.test(aAll[i].className)){
                     res.push(aAll[i]);
                 }
             }
             return res;
         }
     };
     //选择到dom
     this.getByStr =  function (aParent,str){
         //用来存放选中的元素的数组 这个数组在getEle存在，为了每次执行的时候都需要清空，所以使用局部函数的变量
         var aChild=[];
         // console.log(str.charAt(0));
         //aParent开始是[document],再执行完getByStr的时候getEle将aParent指向了getByStr函数的返回值aChild数组以确保循环父级下面的所有匹配元素
         for(var i=0;i<aParent.length;i++){

             // console.log(i);

             switch(str.charAt(0)){
                 //id选择器  eg: #box  使用document.getElementById选取
                 case '#':
                     var obj=document.getElementById(str.substring(1));
                     aChild.push(obj);
                     break;
                 //类选择器  eg: .box  使用上面封装的getByClass选取
                 case '.':
                     //由于一个标签可以有多个类选择器 所以需要进行循环选取
                     var aRes=this.getByClass(aParent[i],str.substring(1));
                     for(var j=0;j<aRes.length;j++){
                         aChild.push(aRes[j]);
                     }
                     break;
                 //今天先简单的编写选择器  这里我们假设除了id和类选择器，就是标签选择器
                 default:
                     // 如果是li.red  那么用正则来判断
                     if(/\w+\.\w+/g.test(str)){
                         //先选择标签，在选择类选择器  使用类选择器的时候重复选择器函数即可
                         var aStr=str.split('.');
                         var aRes=aParent[i].getElementsByTagName(aStr[0]);
                         var reg=new RegExp('\\b'+aStr[1]+'\\b','g');
                         //循环选取标签，注意外层已经有i的循环
                         for(var j=0;j<aRes.length;j++){
                             if(reg.test(aRes[j].className)){
                                 aChild.push(aRes[j]);
                             }
                         }
                         //如果是li:eq(2) 或者 li:first这样的选择器   书写正则是的时候注意（）可有可以无为？ 有或者没有为* 至少有一个也就是若干个为+   {2,5}这种则为2-5个
                     }else if(/\w+\:\w+(\(\d+\))?/g.test(str)){
                         //讲str进行整理    [li,eq,2]  或者  [li,first]
                         var aStr=str.split(/\:|\(|\)/);
                         //aStr[2]是eq、lt、gt传入的参数，这里使用n来保存
                         var n=aStr[2];
                         //在父级下获取所有匹配aStr[0]项的标签
                         var aRes=aParent[i].getElementsByTagName(aStr[0]);
                         //这时候会循环判断aStr[1]项是的内容，jquery中经常使用的为eq、lt、gt、even、odd、first、last
                         switch(aStr[1]){
                             //如果是eq则把第n项传入aChild数组即可
                             case 'eq':
                                 aChild.push(aRes[n]);
                                 break;
                             //如果是lt需要将aRes数组中获取到的小于n的标签循环推入aChild中
                             case 'lt':
                                 for(var j=0;j<n;j++){
                                     aChild.push(aRes[j]);
                                 }
                                 break;
                             //如果是gt则和lt相反
                             case 'gt':
                                 for(var j=n;j<aRes.legth;j++){
                                     aChild.push(aRes[j]);
                                 }
                                 break;
                             //如果是event的话需要隔数添加，注意jquery中的event是从第0开始循环的
                             case 'event':
                                 for(var j=0;j<aRes.length;j+=2){
                                     aChild.push(aRes[j]);
                                 }
                                 break;
                             //如果是odd的和event不同的只是从第1项开始循环
                             case 'odd':
                                 for(var j=1;j<aRes.length;j+=2){
                                     aChild.push(aRes[j]);
                                 }
                                 break;
                             //如果是first，则将aRes[0]推入aChild
                             case 'first':
                                 aChild.push(aRes[0]);
                                 break;
                             case 'last':
                                 aChild.push(aRes[aRes.length-1]);
                                 break;
                         }
                         //属性选择器  eg：input[type=button] 同样适用正则来判断
                     }else if(/\w+\[\w+\=\w+\]/g.test(str)){
                         //将属性选择器切成数组   [input,type,button]
                         var aStr=str.split(/\[|\=|\]/g);
                         var aRes=aParent[i].getElementsByTagName(aStr[0]);
                         //在选中标签中选出有aRes[1]的属性
                         for(var j=0;j<aRes.length;j++){
                             //把属性值为aRes[2]的标签推入aChild中
                             if(aRes[j].getAttribute(aStr[1])==aStr[2]){
                                 aChild.push(aRes[j]);
                             }
                         }
                         //标签选择器  div、span
                     }else{
                         var aRes=aParent[i].getElementsByTagName(str);
                         for(var j=0;j<aRes.length;j++){
                             aChild.push(aRes[j]);
                         }
                     }
                     break;
             }
         }
         // console.log(aChild);
         return aChild;
     };
     //传入参数是字符串时先去除首尾字符串
     this.getEle = function (str){
         //如果是字符串的话先要去除收尾空格  eg:"   on replace   index  play auto   "
         var arr = str.replace(/^\s+|\s+$/g,'').split(/\s+/g); //将传入的参数按照空格分割成数组
         var aChild = [];
         var aParent = [document];
         for(var i = 0;i<arr.length;i++){
             aChild = this.getByStr(aParent,arr[i]);
             aParent = aChild;
         }
         return aChild;
     };
     return this.elements;*/
    this.Mquery(data);
    return this
    // console.log(this.Mquery);


};
M_$.prototype={
    Mquery:function (arg){
        // console.log(arg);
        //用来存选出来的元素
        this.elements=[];
        switch(typeof arg){
            case 'function' :
                this.domReady(arg);
                break;
            case 'string' :
                this.elements = this.getEle(arg);
                break;
            case 'object' :
                // console.log(this.elements);
                //传入document等参数
                this.elements.push(arg);
                // console.log(this.elements);
                break;
        }
        return this;
    },
    domReady:function (fn){
        // FF chrome
        // attachEvent——兼容：IE7、IE8；不兼容firefox、chrome、IE9、IE10、IE11、safari、opera
        // addEventListener——兼容：firefox、chrome、IE、safari、opera；不兼容IE7、IE8
        if(document.addEventListener){
            //jquery中已经省略false，false解决低版本火狐兼容性问题
            //DOMContentLoaded 当html页面加载完成以后不用等到样式、js、等加载DOMContentLoaded事件就会加载 不像onload 必须等到页面加载完毕以后才会加载事件
            document.addEventListener('DOMContentLoaded',fn,false);
        }else{
            //IE只支持该事件 onreadystatechange 类似于onload 事件
            //attachEvent IE7、IE8兼容， document.readyState 文档加载程度  uninitialized - 还未开始载入 loading - 载入中 interactive - 已加载，文档与用户可以开始交互 complete - 载入完成
            document.attachEvent('onreadystatechange',function(){
                if(document.readyState=='complete'){
                    fn();
                }
            });
        }
    },
    getByClass:function (oParent,sClass){
        //高级浏览器支持getElementsByClassName直接使用
        if(oParent.getElementsByClassName){
            return oParent.getElementsByClassName(sClass);
        }else{
            //不支持需要选中所有标签的类名来选取
            var res=[];
            var aAll=oParent.getElementsByTagName('*');
            for(var i=0;i<aAll.length;i++){
                //选中标签的全部类名是个str='btn on red'=aAll[i].className   使用正则  reg=/\b sClass \b/g
                var reg= new RegExp('\\b'+sClass+'\\b','g');
                // 选择到所有标签 然后匹配正则 选择标签中有该类名的标签
                if(reg.test(aAll[i].className)){
                    res.push(aAll[i]);
                }
            }
            return res;
        }
    },
    getByStr:function (aParent,str){
        //用来存放选中的元素的数组 这个数组在getEle存在，为了每次执行的时候都需要清空，所以使用局部函数的变量
        var aChild=[];
        // console.log(str.charAt(0));
        //aParent开始是[document],再执行完getByStr的时候getEle将aParent指向了getByStr函数的返回值aChild数组以确保循环父级下面的所有匹配元素
        for(var i=0;i<aParent.length;i++){

            // console.log(i);

            switch(str.charAt(0)){
                //id选择器  eg: #box  使用document.getElementById选取
                case '#':
                    var obj=document.getElementById(str.substring(1));
                    aChild.push(obj);
                    break;
                //类选择器  eg: .box  使用上面封装的getByClass选取
                case '.':
                    //由于一个标签可以有多个类选择器 所以需要进行循环选取
                    var aRes=this.getByClass(aParent[i],str.substring(1));
                    for(var j=0;j<aRes.length;j++){
                        aChild.push(aRes[j]);
                    }
                    break;
                //今天先简单的编写选择器  这里我们假设除了id和类选择器，就是标签选择器
                default:
                    // 如果是li.red  那么用正则来判断
                    if(/\w+\.\w+/g.test(str)){
                        //先选择标签，在选择类选择器  使用类选择器的时候重复选择器函数即可
                        var aStr=str.split('.');
                        var aRes=aParent[i].getElementsByTagName(aStr[0]);
                        var reg=new RegExp('\\b'+aStr[1]+'\\b','g');
                        //循环选取标签，注意外层已经有i的循环
                        for(var j=0;j<aRes.length;j++){
                            if(reg.test(aRes[j].className)){
                                aChild.push(aRes[j]);
                            }
                        }
                        //如果是li:eq(2) 或者 li:first这样的选择器   书写正则是的时候注意（）可有可以无为？ 有或者没有为* 至少有一个也就是若干个为+   {2,5}这种则为2-5个
                    }else if(/\w+\:\w+(\(\d+\))?/g.test(str)){
                        //讲str进行整理    [li,eq,2]  或者  [li,first]
                        var aStr=str.split(/\:|\(|\)/);
                        //aStr[2]是eq、lt、gt传入的参数，这里使用n来保存
                        var n=aStr[2];
                        //在父级下获取所有匹配aStr[0]项的标签
                        var aRes=aParent[i].getElementsByTagName(aStr[0]);
                        //这时候会循环判断aStr[1]项是的内容，jquery中经常使用的为eq、lt、gt、even、odd、first、last
                        switch(aStr[1]){
                            //如果是eq则把第n项传入aChild数组即可
                            case 'eq':
                                aChild.push(aRes[n]);
                                break;
                            //如果是lt需要将aRes数组中获取到的小于n的标签循环推入aChild中
                            case 'lt':
                                for(var j=0;j<n;j++){
                                    aChild.push(aRes[j]);
                                }
                                break;
                            //如果是gt则和lt相反
                            case 'gt':
                                for(var j=n;j<aRes.legth;j++){
                                    aChild.push(aRes[j]);
                                }
                                break;
                            //如果是event的话需要隔数添加，注意jquery中的event是从第0开始循环的
                            case 'event':
                                for(var j=0;j<aRes.length;j+=2){
                                    aChild.push(aRes[j]);
                                }
                                break;
                            //如果是odd的和event不同的只是从第1项开始循环
                            case 'odd':
                                for(var j=1;j<aRes.length;j+=2){
                                    aChild.push(aRes[j]);
                                }
                                break;
                            //如果是first，则将aRes[0]推入aChild
                            case 'first':
                                aChild.push(aRes[0]);
                                break;
                            case 'last':
                                aChild.push(aRes[aRes.length-1]);
                                break;
                        }
                        //属性选择器  eg：input[type=button] 同样适用正则来判断
                    }else if(/\w+\[\w+\=\w+\]/g.test(str)){
                        //将属性选择器切成数组   [input,type,button]
                        var aStr=str.split(/\[|\=|\]/g);
                        var aRes=aParent[i].getElementsByTagName(aStr[0]);
                        //在选中标签中选出有aRes[1]的属性
                        for(var j=0;j<aRes.length;j++){
                            //把属性值为aRes[2]的标签推入aChild中
                            if(aRes[j].getAttribute(aStr[1])==aStr[2]){
                                aChild.push(aRes[j]);
                            }
                        }
                        //标签选择器  div、span
                    }else{
                        var aRes=aParent[i].getElementsByTagName(str);
                        for(var j=0;j<aRes.length;j++){
                            aChild.push(aRes[j]);
                        }
                    }
                    break;
            }
        }
        // console.log(aChild);
        return aChild;
    },
    getEle:function (str){
        //如果是字符串的话先要去除收尾空格  eg:"   on replace   index  play auto   "
        var arr = str.replace(/^\s+|\s+$/g,'').split(/\s+/g); //将传入的参数按照空格分割成数组
        var aChild = [];
        var aParent = [document];
        for(var i = 0;i<arr.length;i++){
            aChild = this.getByStr(aParent,arr[i]);
            aParent = aChild;
        }
        return aChild;
    },
    M_attr:function(name,value,isClass){
        /*console.log(arguments.length);
        console.log(name);
        console.log(virtual.elements[0]);*/
        if(arguments.length==2||(arguments.length==3&&value!="iStrue")){
            for(var i=0;i<this.elements.length;i++){
                this.elements[i].setAttribute(name,value);
            }
        }else{
            switch(typeof name){
                case 'string':
                    return this.elements[0].getAttribute(name);
                    break;
                case 'object':
                    for(var i=0;i<this.elements.length;i++){
                        for(var item in name){
                            this.elements[i].setAttribute(item,name[item]);
                        }
                    }
                    break;
            }
        }
        if(isClass!=false){
            return this;
        }
    },
    M_get:function(data){
        return this.elements[data];
    },
    M_ele:function(){
        return this.elements;
    },
    M_css : function(name,value,isClass){
    //设置单个样式的时候使用  oEle.css(name,value); 注意可能是一个元素，也可能是一组元素，需要循环添加
    // console.log(name);
    if(arguments.length==2||(arguments.length==3&&value!="iStrue")){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].style[name]=value;
        }
    }else{
        //当参数为字符串是获取样式  oEle.css(name); 当参数为object的时候是批量添加样式{name1:value1,name2:value2} 这里判断的是参数类型
        switch(typeof name){
            //获取元素的样式只要返回获取的样式的值即可,jqeury中当选中一组元素获取样式的时候是默认返回第一个元素的样式
            case 'string':
                // console.log(virtual.elements[0].style[name]=="");
                //获取到样式以后不再返回virtual；
                if(this.elements[0].style[name]==""){
                    return document.defaultView.getComputedStyle(this.elements[0]);
                }else{
                    return this.elements[0].style[name];
                }
                break;
            //当为参数为json的时候循环json添加样式
            case 'object':
                // console.log(this.elements);
                for(var i=0;i<this.elements.length;i++){
                    for(var item in name){
                        this.elements[i].style[item]=name[item];
                    }
                }
                break;
        }
    }
    // console.log(123123123333333333);
    if(isClass!=false){
        return this;
    }
},
    //获取当前可视窗口的高度
    M_NoThisHeight:function getClientHeight(){
        var clientHeight=0;
        if(document.body.clientHeight&&document.documentElement.clientHeight)
        {
            var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        else
        {
            var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
        }
        return clientHeight;
    },
    //将时间转换成时间戳 参数 data inline  支持格式   MMMM-MM-MM  MMMM/MM/MM/dd/dd（此种格式时不用传入inline）  或 MMMM年MM月MM日  inline需传入["年","月"，"日"]
    M_timeNo:function(data,inline){
        if(inline){
            for(let i=0;i<inline.length;i++){
                if(i==inline.length-1){
                    data = data.replace(inline[i],'');
                }else if(inline[i]=="时"||inline[i]=="分"){
                    data = data.replace(inline[i],':');
                }else if(inline[i]=="日"){
                    data = data.replace(inline[i],' ');
                }else{
                    data = data.replace(inline[i],'-');
                }
            }
            var newstr = data.replace(/-/g,'/');
            var date =  new Date(newstr);
            var time_str = date.getTime().toString();
            return time_str.substr(0, 10);
        }else{
            //待完善----
        }

    }
};
let M$=function(data){
    return new M_$(data);
};
export default M$;