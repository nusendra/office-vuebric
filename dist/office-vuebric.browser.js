!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.OfficeVuebric=factory():root.OfficeVuebric=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=6)}([function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){var g,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};g=function(){return this}();try{g=g||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(g=window)}module.exports=g},function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(__webpack_require__(7),__webpack_require__(11),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(__webpack_require__(8),__webpack_require__(12),null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){__webpack_require__(10);var Component=__webpack_require__(0)(null,null,null,null);module.exports=Component.exports},function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(__webpack_require__(9),__webpack_require__(13),null,null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(global){function install(Vue){Vue.use(__WEBPACK_IMPORTED_MODULE_0__components_Style_vue___default.a),Vue.component("ov-button",__WEBPACK_IMPORTED_MODULE_2__components_Button_vue___default.a),Vue.component("ov-breadcrumb",__WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb_vue___default.a),Vue.component("ov-textfield",__WEBPACK_IMPORTED_MODULE_3__components_TextField_vue___default.a)}__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_Style_vue__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_0__components_Style_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Style_vue__),__WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb_vue__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb_vue__),__WEBPACK_IMPORTED_MODULE_2__components_Button_vue__=__webpack_require__(3),__WEBPACK_IMPORTED_MODULE_2__components_Button_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Button_vue__),__WEBPACK_IMPORTED_MODULE_3__components_TextField_vue__=__webpack_require__(5),__WEBPACK_IMPORTED_MODULE_3__components_TextField_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_TextField_vue__);__webpack_require__.d(__webpack_exports__,"Button",function(){return __WEBPACK_IMPORTED_MODULE_2__components_Button_vue___default.a}),__webpack_require__.d(__webpack_exports__,"Breadcrumb",function(){return __WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb_vue___default.a}),__webpack_require__.d(__webpack_exports__,"TextField",function(){return __WEBPACK_IMPORTED_MODULE_3__components_TextField_vue___default.a});var plugin={version:"0.0.2",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:void 0!==global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)}.call(__webpack_exports__,__webpack_require__(1))},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={props:{items:{type:Array,default:function(){return[]}}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={props:{title:{type:String,default:""},type:{type:String,default:null},description:{type:String,default:null}}}},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={props:{placeholder:{type:String,default:""},value:{type:String,default:""}},data:function(){return{text:this.value}},watch:{text:function(val){this.$emit("input",val)}}}},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"ms-Breadcrumb"},[_c("ul",{staticClass:"ms-Breadcrumb-list"},_vm._l(_vm.items,function(data,index){return _c("li",{key:index,staticClass:"ms-Breadcrumb-listItem"},[_c("a",{staticClass:"ms-Breadcrumb-itemLink"},[_vm._v(_vm._s(data))]),_vm._v(" "),_c("i",{staticClass:"ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight"})])}))])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("button",{class:_vm.type?"ms-Button ms-Button--"+_vm.type:"ms-Button"},[_c("span",{staticClass:"ms-Button-label"},[_vm._t("default")],2),_vm._v(" "),_vm.description?_c("span",{staticClass:"ms-Button-description"},[_vm._v(_vm._s(_vm.description))]):_vm._e()])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"ms-TextField ms-TextField--placeholder"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.text,expression:"text"}],staticClass:"ms-TextField-field",attrs:{type:"text",placeholder:_vm.placeholder},domProps:{value:_vm.text},on:{input:function($event){$event.target.composing||(_vm.text=$event.target.value)}}})])},staticRenderFns:[]}}])});