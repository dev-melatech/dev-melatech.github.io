(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(module,exports,__webpack_require__){__webpack_require__("487f"),__webpack_require__("48a2"),__webpack_require__("3bba"),__webpack_require__("c2a7"),__webpack_require__("7a08"),__webpack_require__("8a45"),__webpack_require__("b583"),__webpack_require__("b786"),__webpack_require__("23d5"),__webpack_require__("0af4"),module.exports=__webpack_require__("fbde")},"076f":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("6ff5")},"09c7":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Regular",(function(){return Regular}));__webpack_require__("b64b");var objectSpread2=__webpack_require__("5530"),vue_esm=__webpack_require__("a026"),esm=__webpack_require__("5f5b"),_1=(__webpack_require__("f9e3"),__webpack_require__("2dd8"),__webpack_require__("9725")),_1_default=__webpack_require__.n(_1),_2=__webpack_require__("4826"),_2_default=__webpack_require__.n(_2),Landers_Landervue_type_script_lang_js_={name:"Lander",props:{img1:{type:String,default:"",required:!0},img2:{type:String,default:"",required:!0},img3:{type:String,default:"",required:!0},classes:{type:String,default:""}}},componentNormalizer=(__webpack_require__("5f2f"),__webpack_require__("2877"));const __vuedocgen_export_0=Object(componentNormalizer.a)(Landers_Landervue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"lander-1 mb-5 mt-5",class:this.classes},[_c("b-container",[_c("b-row",[_c("b-col",{attrs:{lg:"5",md:"5"}},[_c("div",{staticClass:"lander-section-1"},[_c("img",{staticClass:"w-100 h-100",attrs:{src:this.img1,alt:""}})])]),_c("b-col",{attrs:{lg:"7",md:"7"}},[_c("b-row",[_c("b-col",{attrs:{cols:"12"}},[_c("div",{staticClass:"lander-section-2"},[_c("img",{staticClass:"w-100 h-100",attrs:{src:this.img2,alt:""}})])]),_c("b-col",{attrs:{cols:"12"}},[_c("div",{staticClass:"lander-section-3"},[_c("img",{staticClass:"w-100 h-100",attrs:{src:this.img3,alt:""}})])])],1)],1)],1)],1)],1)}),[],!1,null,"15df864d",null).exports;var Lander=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Lander",exportName:"default",description:"",tags:{},props:[{name:"img1",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}},{name:"img2",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}},{name:"img3",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}}]};vue_esm.default.use(esm.a);__webpack_exports__.default={component:Lander,title:"E-commerce/Landers",argTypes:{img1:{control:"text"},img2:{control:"text"},img3:{control:"text"},classes:{control:"text"}}};var Regular=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{Lander:Lander},props:Object.keys(argTypes),template:'<Lander :img1="img1" :img2="img2" :img3="img3" :classes="classes"/>'}}.bind({});Regular.args={img1:_1_default.a,img2:_2_default.a,img3:_2_default.a,classes:""},Regular.parameters=Object(objectSpread2.a)({storySource:{source:'(args, { argTypes }) => ({\n  components: { Lander },\n  props: Object.keys(argTypes),\n  template:\n    \'<Lander :img1="img1" :img2="img2" :img3="img3" :classes="classes"/>\'\n})'}},Regular.parameters)},1:function(module,exports){},"23ef":function(module,exports,__webpack_require__){},"2a3d":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/2.25959d72.jpg"},"32fc":function(module,exports,__webpack_require__){},"3bba":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("7d14")},"3bd5":function(module,exports,__webpack_require__){},"3d9e":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("3bd5")},"3db6":function(module,__webpack_exports__,__webpack_require__){"use strict";var ProductAction_ProductActionsvue_type_script_lang_js_={name:"ProductActions",props:{product:{type:Object,default:function _default(){return{id:1,title:"Sample Item 1",price:3e3,image_link:"/image-path",discount:40,slug:"sample-item-1"}},required:!0},classes:{type:String,default:""}}},componentNormalizer=(__webpack_require__("472a"),__webpack_require__("2877"));const __vuedocgen_export_0=Object(componentNormalizer.a)(ProductAction_ProductActionsvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("ul",{staticClass:"product-actions-icons",class:this.classes},[_c("li",[_c("button",{staticClass:"btn"},[_c("font-awesome-icon",{attrs:{icon:["fas","shopping-cart"]}})],1),_c("span",{staticClass:"sr-only"},[this._v("Add to cart")])]),_c("li",[_c("button",{staticClass:"btn"},[_c("font-awesome-icon",{attrs:{icon:["fas","heart"]}})],1),_c("span",{staticClass:"sr-only"},[this._v("Add to Wishlist")])]),_c("li",[_c("button",{staticClass:"btn"},[_c("font-awesome-icon",{attrs:{icon:["fas","eye"]}})],1),_c("span",{staticClass:"sr-only"},[this._v("Quick View")])])])}),[],!1,null,"7b1a9123",null).exports;__webpack_exports__.a=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"ProductActions",exportName:"default",description:"",tags:{},props:[{name:"product",type:{name:"object"},required:!0,defaultValue:{func:!1,value:'{\n  id: 1,\n  title: `Sample Item 1`,\n  price: 3000,\n  image_link: "/image-path",\n  discount: 40,\n  slug: "sample-item-1"\n}'}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}}]}},4586:function(module,exports,__webpack_require__){},"472a":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("23ef")},4826:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/2.f4209f00.jpg"},"5f2f":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("db86")},"64e8":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("b64b");var objectSpread2=__webpack_require__("5530"),vue_esm=__webpack_require__("a026"),esm=__webpack_require__("5f5b"),index_es=(__webpack_require__("f9e3"),__webpack_require__("2dd8"),__webpack_require__("ecee")),free_solid_svg_icons_index_es=__webpack_require__("c074"),vue_fontawesome_index_es=__webpack_require__("ad3d"),ScrollToTop_ScrollToTopvue_type_script_lang_js_={name:"ScrollToTop",methods:{scrollToTop:function scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function handleScroll(){window.scrollY>400?(this.$refs.scrollToTop.classList.remove("hidden"),this.$refs.scrollToTop.classList.add("visible")):(this.$refs.scrollToTop.classList.remove("visible"),this.$refs.scrollToTop.classList.add("hidden"))}},created:function created(){window.addEventListener("scroll",this.handleScroll)},destroyed:function destroyed(){window.removeEventListener("scroll",this.handleScroll)}},componentNormalizer=(__webpack_require__("c6c8"),__webpack_require__("2877"));const __vuedocgen_export_0=Object(componentNormalizer.a)(ScrollToTop_ScrollToTopvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",[_c("button",{ref:"scrollToTop",staticClass:"btn scroll-to-top--btn hidden",attrs:{id:"scroll-to-top"},on:{click:this.scrollToTop}},[_c("font-awesome-icon",{attrs:{icon:["fas","long-arrow-alt-up"]}})],1)])}),[],!1,null,"1c13c1ec",null).exports;var ScrollToTop=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"ScrollToTop",exportName:"default",description:"",tags:{}};vue_esm.default.use(esm.a),index_es.c.add(free_solid_svg_icons_index_es.d),vue_esm.default.component("font-awesome-icon",vue_fontawesome_index_es.a);__webpack_exports__.default={component:ScrollToTop,title:"E-commerce/Scroll To Top",argTypes:{}};var Default=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{ScrollToTop:ScrollToTop},props:Object.keys(argTypes),template:"<div style='padding:30px;height: 1500px;background-color: peachpuff;text-align: center'>Scroll Down<ScrollToTop/></div>"}}.bind({});Default.args={},Default.parameters={controls:{hideNoControlsWarning:!0,disabled:!0}},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args, { argTypes }) => ({\n  components: { ScrollToTop },\n  props: Object.keys(argTypes),\n  template:\n    \"<div style='padding:30px;height: 1500px;background-color: peachpuff;text-align: center'>Scroll Down<ScrollToTop/></div>\"\n})"}},Default.parameters)},"6ac5":function(module,exports,__webpack_require__){},"6ff5":function(module,exports,__webpack_require__){},7675:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("4586")},"8bd4":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("b64b");var _Users_anthony_vue_components_library_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5530"),vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("a026"),bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("5f5b"),_components_ProductAction_ProductActions__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("f9e3"),__webpack_require__("2dd8"),__webpack_require__("3db6")),_testData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("ec66");vue__WEBPACK_IMPORTED_MODULE_2__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__.a),__webpack_exports__.default={component:_components_ProductAction_ProductActions__WEBPACK_IMPORTED_MODULE_6__.a,title:"E-commerce/Product Actions",argTypes:{product:{control:"object"},classes:{control:"text"}}};var Default=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{ProductActions:_components_ProductAction_ProductActions__WEBPACK_IMPORTED_MODULE_6__.a},props:Object.keys(argTypes),template:'<ProductActions  :product="product" :classes="classes"/>'}}.bind({});Default.args={product:_testData__WEBPACK_IMPORTED_MODULE_7__.a.setProduct(),classes:""},Default.parameters=Object(_Users_anthony_vue_components_library_vue_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({storySource:{source:'(args, { argTypes }) => ({\n  components: { ProductActions },\n  props: Object.keys(argTypes),\n  template: \'<ProductActions  :product="product" :classes="classes"/>\'\n})'}},Default.parameters)},"961f":function(module,exports){module.exports="data:image/jpeg;base64,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"},9725:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/1.7e086d9c.jpg"},"99fc":function(module,exports,__webpack_require__){},a85e:function(module,exports,__webpack_require__){var map={"./components/Adverts/Advert.stories.js":"aa7b","./components/FooterSocials/FooterSocials.stories.js":"f938","./components/Info/Info.stories.js":"e4e4","./components/Landers/Lander.stories.js":"09c7","./components/ProductAction/ProductAction.stories.js":"8bd4","./components/Products/Product.stories.js":"fa14","./components/ScrollToTop/ScrollToTop.stories.js":"64e8","./components/entry.stories.js":"de1a"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="a85e"},aa7b:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SingleView",(function(){return SingleView})),__webpack_require__.d(__webpack_exports__,"TripleView",(function(){return TripleView}));__webpack_require__("b64b");var objectSpread2=__webpack_require__("5530"),vue_esm=__webpack_require__("a026"),esm=__webpack_require__("5f5b"),Adverts_Advertvue_type_script_lang_js_=(__webpack_require__("f9e3"),__webpack_require__("2dd8"),{name:"Advert",props:{images:{type:Array,default:function _default(){return[]},required:!0},classes:{type:String,default:""},view:{type:String,default:"single",required:!0}}}),componentNormalizer=(__webpack_require__("3d9e"),__webpack_require__("2877"));const __vuedocgen_export_0=Object(componentNormalizer.a)(Adverts_Advertvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"mt-5 mb-5",class:_vm.classes},[_c("b-container",["single"===_vm.view?_c("b-row",[_c("b-col",{attrs:{cols:"12"}},[_c("img",{staticClass:"w-100",attrs:{src:_vm.images[0],alt:""}})])],1):_vm._e(),"triple"===_vm.view?_c("b-row",_vm._l(_vm.images,(function(image,index){return _c("b-col",{key:index,attrs:{lg:"4",md:"4",sm:"12"}},[_c("img",{staticClass:"w-100 mb-4",attrs:{src:image,alt:""}})])})),1):_vm._e()],1)],1)}),[],!1,null,"6e07a00a",null).exports;var Advert=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Advert",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"view",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'"single"'}}]};var _1=__webpack_require__("cea9"),_1_default=__webpack_require__.n(_1),_2=__webpack_require__("2a3d"),_2_default=__webpack_require__.n(_2);vue_esm.default.use(esm.a);__webpack_exports__.default={component:Advert,title:"E-commerce/Adverts",argTypes:{view:{control:{type:"select",options:["single","triple"]}},images:{control:"array"}}};var Advert_stories_Template=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{Advert:Advert},props:Object.keys(argTypes),template:'<Advert :images="images" :view="view"/>'}},SingleView=Advert_stories_Template.bind({});SingleView.args={view:"single",images:[_1_default.a]};var TripleView=Advert_stories_Template.bind({});TripleView.args={view:"triple",images:[_2_default.a,_2_default.a,_2_default.a]},SingleView.parameters=Object(objectSpread2.a)({storySource:{source:'(args, { argTypes }) => ({\n  components: { Advert },\n  props: Object.keys(argTypes),\n  template: \'<Advert :images="images" :view="view"/>\'\n})'}},SingleView.parameters),TripleView.parameters=Object(objectSpread2.a)({storySource:{source:'(args, { argTypes }) => ({\n  components: { Advert },\n  props: Object.keys(argTypes),\n  template: \'<Advert :images="images" :view="view"/>\'\n})'}},TripleView.parameters)},c423:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("f4f6")},c6c8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("6ac5")},cea9:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/1.472d746e.jpg"},d2f1:function(module,exports,__webpack_require__){},d455:function(module,exports,__webpack_require__){},db86:function(module,exports,__webpack_require__){},de1a:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a026"),bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5f5b"),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("f9e3"),__webpack_require__("2dd8"),__webpack_require__("ecee")),_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("f2d1"),_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("ad3d");vue__WEBPACK_IMPORTED_MODULE_0__.default.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__.a),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.c.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.a),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.c.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.e),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.c.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.d),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.c.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.b),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.c.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.c),vue__WEBPACK_IMPORTED_MODULE_0__.default.component("font-awesome-icon",_fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_6__.a)},e435:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("d2f1")},e4e4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("b64b");var objectSpread2=__webpack_require__("5530"),vue_esm=__webpack_require__("a026"),esm=__webpack_require__("5f5b"),index_es=(__webpack_require__("f9e3"),__webpack_require__("2dd8"),__webpack_require__("d455"),__webpack_require__("99fc"),__webpack_require__("32fc"),__webpack_require__("ecee")),vue_fontawesome_index_es=__webpack_require__("ad3d"),free_regular_svg_icons_index_es=__webpack_require__("b702"),free_solid_svg_icons_index_es=__webpack_require__("c074"),Info_Infovue_type_script_lang_js_={name:"Info",props:{data:{type:Array,default:function _default(){return[{title:"Money Back Guarantee",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"far",name:"money-bill-alt"}},{title:"Free Shipping",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"fas",name:"shipping-fast"}},{title:"Secure Payment",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"fas",name:"lock"}},{title:"24/7 Customer Service",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"far",name:"money-bill-alt"}}]},required:!0},backgroundColor:{type:String,default:""},iconColor:{type:String,default:""},classes:{type:String,default:""}}},componentNormalizer=(__webpack_require__("e435"),__webpack_require__("2877"));const __vuedocgen_export_0=Object(componentNormalizer.a)(Info_Infovue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"info mt-5 mb-5 text-center",class:_vm.classes},[_c("b-container",[_c("b-row",_vm._l(_vm.data,(function(info,index){return _c("b-col",{key:index,attrs:{lg:"3",md:"6"}},[_c("div",{staticClass:"info-section mb-3",class:"info-section-"+(index+1)},[_c("div",{staticClass:"info-icon-box",style:{backgroundColor:_vm.backgroundColor,color:_vm.iconColor}},[_c("font-awesome-icon",{attrs:{icon:[info.icon.class,info.icon.name]}})],1),_c("span",{staticClass:"info-title d-block mb-1"},[_vm._v(" "+_vm._s(info.title)+" ")]),_c("span",{staticClass:"info-sub-text d-inline-block"},[_vm._v(" "+_vm._s(info.subText)+" ")])])])})),1)],1)],1)}),[],!1,null,"82a0e600",null).exports;var Info=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Info",exportName:"default",description:"",tags:{},props:[{name:"data",type:{name:"array"},required:!0,defaultValue:{func:!1,value:'[\n  {\n    title: "Money Back Guarantee",\n    subText:\n      "There are many variations of passages of Lorem Ipsum available, but the majority",\n    icon: {\n      class: "far",\n      name: "money-bill-alt"\n    }\n  },\n  {\n    title: "Free Shipping",\n    subText:\n      "There are many variations of passages of Lorem Ipsum available, but the majority",\n    icon: {\n      class: "fas",\n      name: "shipping-fast"\n    }\n  },\n  {\n    title: "Secure Payment",\n    subText:\n      "There are many variations of passages of Lorem Ipsum available, but the majority",\n    icon: {\n      class: "fas",\n      name: "lock"\n    }\n  },\n  {\n    title: "24/7 Customer Service",\n    subText:\n      "There are many variations of passages of Lorem Ipsum available, but the majority",\n    icon: {\n      class: "far",\n      name: "money-bill-alt"\n    }\n  }\n]'}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"iconColor",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}}]};vue_esm.default.use(esm.a),index_es.c.add(free_regular_svg_icons_index_es.a),index_es.c.add(free_solid_svg_icons_index_es.c),index_es.c.add(free_solid_svg_icons_index_es.e),vue_esm.default.component("font-awesome-icon",vue_fontawesome_index_es.a);__webpack_exports__.default={component:Info,title:"E-commerce/Info",argTypes:{data:{table:{defaultValue:{summary:"See default json structure",detail:'[\n    {\n      title: "24/7 Customer Service",\n      subText:\n        "There are many variations of passages of Lorem Ipsum available, but the majority",\n      icon: {\n        class: "far",\n        name: "money-bill-alt"\n      }\n    }\n]'}},control:{type:null}},backgroundColor:{control:"color"},iconColor:{control:"color"}},parameters:{docs:{description:{component:'_```import Info from "melatech_ui"```_'}}}};var Default=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{Info:Info},props:Object.keys(argTypes),template:'<Info  :data="data" :background-color="backgroundColor" :icon-color="iconColor" :classes="classes"/>'}}.bind({});Default.args={data:[{title:"Money Back Guarantee",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"far",name:"money-bill-alt"}},{title:"Free Shipping",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"fas",name:"shipping-fast"}},{title:"Secure Payment",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"fas",name:"lock"}},{title:"24/7 Customer Service",subText:"There are many variations of passages of Lorem Ipsum available, but the majority",icon:{class:"far",name:"money-bill-alt"}}],backgroundColor:"#ece5e5",iconColor:"#333"},Default.parameters=Object(objectSpread2.a)({storySource:{source:'(args, { argTypes }) => ({\n  components: { Info },\n  props: Object.keys(argTypes),\n  template:\n    \'<Info  :data="data" :background-color="backgroundColor" :icon-color="iconColor" :classes="classes"/>\'\n})'}},Default.parameters)},ec66:function(module,__webpack_exports__,__webpack_require__){"use strict";var _static_images_featured_1_jpg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("961f"),_static_images_featured_1_jpg__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_static_images_featured_1_jpg__WEBPACK_IMPORTED_MODULE_0__);function getRandomIntInclusive(min,max){return min=Math.ceil(min),max=Math.floor(max),Math.floor(Math.random()*(max-min+1))+min}var testData={setProduct:function setProduct(){return{id:1,title:"Sample Item 1",price:3e3,image_link:_static_images_featured_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,slug:"sample-item-1",discount:getRandomIntInclusive(0,100)}},setProducts:function setProducts(){for(var arr=[],i=0;i<100;i++)arr.push({id:i+1,title:"Item ".concat(i+1),price:3e3});return arr},setFeaturedProducts:function setFeaturedProducts(){for(var arr=[],i=0;i<8;i++)arr.push({id:i+1,title:"Sample Item ".concat(i+1),price:3e3,image_link:_static_images_featured_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,slug:"item-".concat(i+1),discount:getRandomIntInclusive(0,100)});return arr}};__webpack_exports__.a=testData},f4f6:function(module,exports,__webpack_require__){},f938:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("b64b");var objectSpread2=__webpack_require__("5530"),FooterSocials_FooterSocialsvue_type_script_lang_js_={name:"FooterSocials",props:{data:{type:Array,default:function _default(){return[{social_key:"facebook",link:""},{social_key:"twitter",link:""},{social_key:"linkedin",link:""},{social_key:"google_plus",link:""},{social_key:"instagram",link:""}]},required:!0},backgroundColor:{type:String,default:"#999"},iconColor:{type:String,default:"#fff"},socialText:{type:String,default:""},classes:{type:String,default:""}}},componentNormalizer=(__webpack_require__("7675"),__webpack_require__("2877"));const __vuedocgen_export_0=Object(componentNormalizer.a)(FooterSocials_FooterSocialsvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"footer-widget footer-logo"},[_vm.socialText?_c("p",[_vm._v(" "+_vm._s(_vm.socialText)+" ")]):_vm._e(),_c("ul",{staticClass:"social-icon d-flex"},_vm._l(_vm.data,(function(link,index){return _c("li",{key:index},[_c("a",{style:{backgroundColor:_vm.backgroundColor,color:_vm.iconColor},attrs:{href:link.link,target:"_blank",rel:"noopener"}},["facebook"===link.social_key?_c("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}}):_vm._e(),"twitter"===link.social_key?_c("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}):_vm._e(),"linkedin"===link.social_key?_c("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}}):_vm._e(),"google_plus"===link.social_key?_c("font-awesome-icon",{attrs:{icon:["fab","google-plus-g"]}}):_vm._e(),"instagram"===link.social_key?_c("font-awesome-icon",{attrs:{icon:["fab","instagram"]}}):_vm._e()],1)])})),0)])}),[],!1,null,"2afdbee7",null).exports;var FooterSocials=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"FooterSocials",exportName:"default",description:"",tags:{},props:[{name:"data",type:{name:"array"},required:!0,defaultValue:{func:!1,value:'[\n  {\n    social_key: "facebook",\n    link: ""\n  },\n  {\n    social_key: "twitter",\n    link: ""\n  },\n  {\n    social_key: "linkedin",\n    link: ""\n  },\n  {\n    social_key: "google_plus",\n    link: ""\n  },\n  {\n    social_key: "instagram",\n    link: ""\n  }\n]'}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:'"#999"'}},{name:"iconColor",type:{name:"string"},defaultValue:{func:!1,value:'"#fff"'}},{name:"socialText",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}}]};__webpack_exports__.default={component:FooterSocials,title:"E-commerce/Footer Socials",argTypes:{data:{table:{defaultValue:{summary:"See default json structure",detail:'[\n    {\n      social_key: "social_key",\n      link:\n        "https://social_link.com",\n    }\n]'}},control:null,description:"The following social keys are supported: \n\n 'facebook', 'twitter', 'linkedin', 'google_plus', 'instagram'"},backgroundColor:{control:"color"},iconColor:{control:"color"},socialText:{control:"text"},classes:{control:"text"}},parameters:{docs:{description:{component:'_```import FooterSocials from "melatech_ui"```_'}}}};var Default=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{FooterSocials:FooterSocials},props:Object.keys(argTypes),template:'<FooterSocials :social-text="socialText" :data="data" :background-color="backgroundColor" :icon-color="iconColor" :classes="classes"/>'}}.bind({});Default.args={data:[{social_key:"facebook",link:"https://social_link.com"},{social_key:"twitter",link:"https://social_link.com"},{social_key:"linkedin",link:"https://social_link.com"},{social_key:"google_plus",link:"https://social_link.com"},{social_key:"instagram",link:"https://social_link.com"}],backgroundColor:"#999",iconColor:"#fff",socialText:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from",classes:""},Default.parameters=Object(objectSpread2.a)({storySource:{source:'(args, { argTypes }) => ({\n  components: { FooterSocials },\n  props: Object.keys(argTypes),\n  template:\n    \'<FooterSocials :social-text="socialText" :data="data" :background-color="backgroundColor" :icon-color="iconColor" :classes="classes"/>\'\n})'}},Default.parameters)},fa14:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ProductsList",(function(){return ProductsList}));__webpack_require__("b64b");var objectSpread2=__webpack_require__("5530"),vue_esm=__webpack_require__("a026"),esm=__webpack_require__("5f5b"),index_es=(__webpack_require__("f9e3"),__webpack_require__("2dd8"),__webpack_require__("99fc"),__webpack_require__("32fc"),__webpack_require__("ecee")),free_solid_svg_icons_index_es=__webpack_require__("c074"),vue_fontawesome_index_es=__webpack_require__("ad3d"),testData=__webpack_require__("ec66"),Products_ProductCardvue_type_script_lang_js_={name:"ProductCard",components:{ProductActions:__webpack_require__("3db6").a},props:{product:{type:Object,default:function _default(){},required:!0},classes:{type:String,default:""}}},componentNormalizer=(__webpack_require__("076f"),__webpack_require__("2877"));const __vuedocgen_export_0=Object(componentNormalizer.a)(Products_ProductCardvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"product-wrap",class:_vm.classes},[_c("div",{staticClass:"position-relative product-img"},[_c("img",{staticClass:"w-100",attrs:{src:_vm.product.image_link,alt:""}}),_c("product-actions",{attrs:{product:_vm.product}})],1),_c("div",{staticClass:"product-details mt-2"},[_c("b-row",[_c("b-col",{attrs:{cols:"12"}},[_vm._v(" "+_vm._s(_vm.product.title)+" "),_c("span",{staticClass:"product-price d-block"},[_vm._v("$"+_vm._s(_vm.product.price))])])],1)],1),_vm.product.discount?_c("div",{staticClass:"product-discount"},[_c("span",[_vm._v("%"+_vm._s(_vm.product.discount))])]):_vm._e()])}),[],!1,null,"84c7b7c2",null).exports;var ProductCard=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"ProductCard",exportName:"default",description:"",tags:{},props:[{name:"product",type:{name:"object"},required:!0,defaultValue:{func:!0,value:"() => {}"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}}]};var _1=__webpack_require__("961f"),_1_default=__webpack_require__.n(_1),Products_Productsvue_type_script_lang_js_={name:"Products",components:{ProductCard:ProductCard},props:{label:{type:String,default:"featured",required:!0},products:{type:Array,default:function _default(){return[{id:1,title:"Item 1",price:3e3,image_link:_1_default.a}]},required:!0}},watch:{label:{handler:function handler(val){this.setTitle(val)},deep:!0}},data:function data(){return{title:""}},mounted:function mounted(){this.setTitle(this.label)},methods:{setTitle:function setTitle(key){"featured"===key&&(this.title="Featured Products"),"new_arrivals"===key&&(this.title="New Arrival"),"best_deals"===key&&(this.title="Best Deals")}}};__webpack_require__("c423");const Products_vuedocgen_export_0=Object(componentNormalizer.a)(Products_Productsvue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"mt-5 mb-5"},[_c("b-container",[_c("div",{staticClass:"section-title text-center"},[_c("h3",[this._v(" "+this._s(this.title)+" ")]),_c("hr")]),_c("b-row",[this._l(this.products,(function(product,index){return _c("b-col",{key:index,attrs:{lg:"3",md:"6"}},[_c("div",{staticClass:"featured-products-card mt-3 mb-3"},[_c("product-card",{attrs:{product:product}})],1)])})),_c("b-col",{attrs:{cols:"12 text-center"}},[_c("button",{staticClass:"btn load-more--btn"},[this._v(" View more ")])])],2)],1)],1)}),[],!1,null,"fe42da3e",null).exports;var Products=Products_vuedocgen_export_0;Products_vuedocgen_export_0.__docgenInfo={displayName:"Products",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'"featured"'}},{name:"products",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[\n  { id: 1, title: `Item 1`, price: 3000, image_link: ImageFile }\n]"}}]};vue_esm.default.use(esm.a),index_es.c.add(free_solid_svg_icons_index_es.f),index_es.c.add(free_solid_svg_icons_index_es.a),index_es.c.add(free_solid_svg_icons_index_es.b),vue_esm.default.component("font-awesome-icon",vue_fontawesome_index_es.a);__webpack_exports__.default={component:Products,title:"E-commerce/Products",argTypes:{label:{control:{type:"select",options:["featured","new_arrivals","best_deals"]}},products:{control:"array"}}};var ProductsList=function Template(args,_ref){var argTypes=_ref.argTypes;return{components:{Products:Products},props:Object.keys(argTypes),template:'<Products  :products="products" :label="label" />'}}.bind({});ProductsList.args={label:"featured",products:testData.a.setFeaturedProducts()},ProductsList.parameters=Object(objectSpread2.a)({storySource:{source:'(args, { argTypes }) => ({\n  components: { Products },\n  props: Object.keys(argTypes),\n  template: \'<Products  :products="products" :label="label" />\'\n})'}},ProductsList.parameters)},fbde:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("7d14").configure)([__webpack_require__("a85e")],module,!1)}).call(this,__webpack_require__("62e4")(module))}},[[0,1,2]]]);
//# sourceMappingURL=main.1c14875404a897dcc01e.bundle.js.map