(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025e":function(e,t,n){n("99af"),n("ac1f"),n("5319"),n("1276"),t.srcToFilename=function(e){var t=e.url,n=e.file,r=e.start,a=e.duration;if(n)return n;var o=t.split("/"),i=o[o.length-1],s="".concat(i,"-").concat(r,"-").concat(a,".mp3").replace(/:/g,"_");return s}},"21bb":function(e,t,n){"use strict";var r=n("2dad"),a=n.n(r);a.a},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,a,o,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"bd dashed pd-1 radius-4"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button button-red",on:{click:e.pauseAll}},[e._v("全部停止")])]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.repeat,expression:"repeat"}],attrs:{type:"checkbox",id:"repeat"},domProps:{checked:Array.isArray(e.repeat)?e._i(e.repeat,null)>-1:e.repeat},on:{change:function(t){var n=e.repeat,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.repeat=n.concat([o])):i>-1&&(e.repeat=n.slice(0,i).concat(n.slice(i+1)))}else e.repeat=a}}}),n("label",{attrs:{for:"repeat"}},[e._v("洗脑循环")])]),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.multi,expression:"multi"}],attrs:{type:"checkbox",id:"multi"},domProps:{checked:Array.isArray(e.multi)?e._i(e.multi,null)>-1:e.multi},on:{change:function(t){var n=e.multi,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.multi=n.concat([o])):i>-1&&(e.multi=n.slice(0,i).concat(n.slice(i+1)))}else e.multi=a}}}),n("label",{attrs:{for:"repeat"}},[e._v("同时播放")])])]),e._m(0),n("div",{attrs:{id:"buttons"}},e._l(e.audioItems,(function(t,r){return n("div",{key:r,staticClass:"audio-btn-wrapper"},[n("button",{staticClass:"button",on:{click:function(n){return e.play(t)}}},[e._v(e._s(t.label))])])})),0),null!==e.lastPlayed?n("div",{staticClass:"card-box pd-1"},[n("h3",{staticClass:"pb-1"},[e._v(e._s(e.lastPlayed.label))]),e.lastPlayed.src.url?n("div",[n("p",[e._v(" 来源："),n("a",{attrs:{href:e.lastPlayed.src.url}},[e._v(e._s(e.lastPlayed.src.url))])]),n("p",[e._v("时间："+e._s(e.lastPlayed.src.start))])]):n("div",[n("p",[e._v("来源："+e._s(e.lastPlayed.src.comment))])])]):e._e()])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pd-1 pl-0"},[n("h2",{staticClass:"pd-1 pl-0"},[e._v("Sorabuttons")]),n("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=chengyuhui&repo=sorabuttons&type=star&count=true",frameborder:"0",scrolling:"0",width:"100",height:"20",title:"GitHub"}}),n("a",{attrs:{href:"https://space.bilibili.com/402401719"}},[n("img",{attrs:{src:"https://img.shields.io/badge/Bilibili-402401719-blue"}})])])}],v=(n("d3b7"),n("38cf"),n("96cf"),n("1da1")),h=n("025e"),b=(n("07ac"),{}),m=0,y=!1,g=!1;function _(e){if(y||!(m>0)){if(!b[e]){var t=new Audio;return t.preload="auto",b[e]=t,t.addEventListener("play",(function(){m+=1})),t.addEventListener("pause",(function(){m-=1})),t.addEventListener("ended",(function(){g&&t.play()})),t.src=e,t.play(),t}b[e].play()}}function w(){for(var e=0,t=Object.values(b);e<t.length;e++){var n=t[e];try{n.pause()}catch(r){}}}function k(e,t){g=e,y=t}var j={name:"Home",data:function(){return{audioItems:[],multi:!1,repeat:!1,lastPlayed:null}},mounted:function(){this.loadList()},methods:{loadList:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/audio.json");case 2:return n=t.sent,t.next=5,n.json();case 5:e.audioItems=t.sent;case 6:case"end":return t.stop()}}),t)})))()},play:function(e){var t="/audio/"+Object(h["srcToFilename"])(e.src);_(t),this.lastPlayed=e},updateConfig:function(){k(this.repeat,this.multi)},pauseAll:function(){w()}},watch:{multi:function(){this.updateConfig()},repeat:function(){this.updateConfig()}}},P=j,O=(n("21bb"),Object(i["a"])(P,p,f,!1,null,null,null)),x=O.exports;r["a"].use(d["a"]);var C=[{path:"/",name:"Home",component:x}],A=new d["a"]({mode:"history",base:"/",routes:C}),S=A,E=n("2f62");r["a"].use(E["a"]);var L=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:S,store:L,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.aa76e5ba.js.map