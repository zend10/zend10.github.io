(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dc33eec"],{"5fbd":function(t,a,e){},"64d5":function(t,a,e){},"836a":function(t,a,e){"use strict";var n=e("64d5"),r=e.n(n);r.a},"8b24":function(t,a,e){"use strict";var n=e("5fbd"),r=e.n(n);r.a},acca:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"projects"}},[e("Loading",{attrs:{isLoading:t.data.isLoading}}),t._l(t.data.projects,(function(t){return e("ProjectItem",{key:t.id,attrs:{data:t}})}))],2)},r=[],o=(e("4160"),e("159b"),e("1db8")),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"project-item"},[e("div",{staticClass:"project-logo"},[e("a",{attrs:{href:t.data.otherLink?t.data.otherLink:t.data.githubLink,rel:"noopener",target:"_blank"}},[e("img",{attrs:{src:t.data.logo,loading:"lazy"}})])]),e("div",{staticClass:"project-info"},[e("div",[e("h2",[e("a",{attrs:{href:t.data.otherLink?t.data.otherLink:t.data.githubLink,rel:"noopener",target:"_blank"}},[t._v(t._s(t.data.name))])])]),e("span",[t._v(t._s(t.data.description))]),t.data.githubLink?e("div",{staticClass:"project-github"},[e("a",{attrs:{href:t.data.githubLink,rel:"noopener",target:"_blank"}},[t._v("Source Code")])]):t._e()])])},s=[],c={name:"HomeMenu",props:["data"]},d=c,u=(e("8b24"),e("2877")),l=Object(u["a"])(d,i,s,!1,null,"360c0312",null),p=l.exports,f=e("dc59"),h={projects:[],isLoading:!0},b={name:"Projects",components:{Loading:o["a"],ProjectItem:p},data:function(){return{data:h}}};f["a"].database().ref("projects").once("value").then((function(t){t.forEach((function(t){h.projects.push(t.val()),h.isLoading=!1}))}));var g=b,v=(e("836a"),Object(u["a"])(g,n,r,!1,null,"02f40e90",null));a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-0dc33eec.e1d9d720.js.map