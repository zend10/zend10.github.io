(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ccdc4eb"],{"0d77":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"gallery"}},[t("Loading",{attrs:{isLoading:a.data.isLoading}}),t("div",{attrs:{id:"image-container"}},a._l(a.data.gallery,(function(e){return t("GalleryItem",{key:e.id,attrs:{data:e},nativeOn:{click:function(t){return a.openModal(e)}}})})),1),a.data.selectedImage?t("div",{staticClass:"modal",on:{click:function(e){return a.closeModal()}}},[t("span",{staticClass:"close",on:{click:function(e){return a.closeModal()}}},[a._v("×")]),t("img",{staticClass:"modal-image",attrs:{src:a.data.selectedImage.imagePath}}),t("div",{staticClass:"modal-name"},[a._v(a._s(a.data.selectedImage.name)+" ("+a._s(a.data.selectedImage.country)+")")]),t("div",{staticClass:"modal-date"},[a._v(a._s(a.data.selectedImage.date))]),t("div",{staticClass:"modal-caption"},[a._v(a._s(a.data.selectedImage.caption))])]):a._e()],1)},l=[],c=(t("4160"),t("159b"),t("1db8")),s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"gallery-item"},[t("img",{attrs:{src:a.data.imagePath,loading:"lazy"}})])},i=[],d={name:"HomeMenu",props:["data"]},o=d,r=(t("270c"),t("2877")),u=Object(r["a"])(o,s,i,!1,null,"689454e9",null),m=u.exports,g=t("dc59"),f={gallery:[],isLoading:!0,selectedImage:null},v={name:"Gallery",components:{Loading:c["a"],GalleryItem:m},data:function(){return{data:f}},methods:{openModal:function(a){f.selectedImage=a},closeModal:function(){f.selectedImage=null}}};g["a"].database().ref("gallery").once("value").then((function(a){a.forEach((function(a){f.gallery.unshift(a.val()),f.isLoading=!1}))}));var p=v,_=(t("ca26"),Object(r["a"])(p,n,l,!1,null,"60a23bf7",null));e["default"]=_.exports},"270c":function(a,e,t){"use strict";var n=t("df67"),l=t.n(n);l.a},"2e07":function(a,e,t){},ca26:function(a,e,t){"use strict";var n=t("2e07"),l=t.n(n);l.a},df67:function(a,e,t){}}]);
//# sourceMappingURL=chunk-7ccdc4eb.c48e788f.js.map