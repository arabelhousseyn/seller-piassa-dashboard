"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Order_UserOrderComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data'],
  data: function data() {
    return {
      user_id: window.location.pathname.split('/').pop(),
      data2: undefined,
      search: null,
      headers: [{
        text: 'Ref',
        align: 'start',
        sortable: true,
        value: 'ref'
      }, {
        text: 'Livraison',
        value: 'type_delivery'
      }, {
        text: 'Livreur',
        value: 'shipper_user_order.shipper.phone'
      }, {
        text: 'Sous Total',
        value: 'amount'
      }, {
        text: 'Facture',
        value: 'invoice.path'
      }, {
        text: 'Créé à',
        value: 'created_at'
      }, {
        text: 'Mise à jour à',
        value: 'updated_at'
      }, {
        text: 'Confirmation',
        value: 'confirmed_by_administrator_at'
      }, {
        text: 'Statu',
        value: 'deleted_at'
      }]
    };
  },
  methods: {
    init: function init() {
      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.get("/api/users/orders/".concat(_this.user_id)).then(function (e) {
          _this.data2 = e.data.data;
        })["catch"](function (err) {
          if (err.response.status == 404) {
            _this.$router.push('/home/users');
          }

          console.log(err);
        });
      });
    }
  },
  mounted: function mounted() {
    if (this.data == undefined) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/User/Order/UserOrderComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/User/Order/UserOrderComponent.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserOrderComponent_vue_vue_type_template_id_46f8c2f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserOrderComponent.vue?vue&type=template&id=46f8c2f8& */ "./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=template&id=46f8c2f8&");
/* harmony import */ var _UserOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserOrderComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserOrderComponent_vue_vue_type_template_id_46f8c2f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserOrderComponent_vue_vue_type_template_id_46f8c2f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Order/UserOrderComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserOrderComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrderComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=template&id=46f8c2f8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=template&id=46f8c2f8& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrderComponent_vue_vue_type_template_id_46f8c2f8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrderComponent_vue_vue_type_template_id_46f8c2f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserOrderComponent_vue_vue_type_template_id_46f8c2f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserOrderComponent.vue?vue&type=template&id=46f8c2f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=template&id=46f8c2f8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=template&id=46f8c2f8&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Order/UserOrderComponent.vue?vue&type=template&id=46f8c2f8& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-order" }, [
    _vm.data2 !== undefined || _vm.data !== undefined
      ? _c(
          "div",
          [
            _c(
              "v-container",
              { attrs: { fluid: "" } },
              [
                _c(
                  "v-btn",
                  { attrs: { color: "primary" } },
                  [
                    _c(
                      "router-link",
                      {
                        staticStyle: {
                          "text-decoration": "none",
                          color: "white",
                        },
                        attrs: { to: "/home/users" },
                      },
                      [
                        _c("v-icon", [_vm._v("mdi-subdirectory-arrow-left")]),
                        _vm._v(" Retour "),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-data-table", {
                  staticClass: "elevation-1 mt-3",
                  attrs: {
                    headers: _vm.headers,
                    items: _vm.data == undefined ? _vm.data2 : _vm.data,
                    search: _vm.search,
                    "sort-by": "[created_at]",
                    "sort-desc": [true],
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "top",
                        fn: function () {
                          return [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "" } },
                              [_c("v-toolbar-title", [_vm._v("Commandes")])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "" } },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    "append-icon": "mdi-magnify",
                                    label: "Recherche",
                                    "single-line": "",
                                    "hide-details": "",
                                  },
                                  model: {
                                    value: _vm.search,
                                    callback: function ($$v) {
                                      _vm.search = $$v
                                    },
                                    expression: "search",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        },
                        proxy: true,
                      },
                      {
                        key: "item.invoice.path",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            item.invoice !== null
                              ? _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: item.invoice.path,
                                      target: "_blank",
                                    },
                                  },
                                  [
                                    _c("v-icon", { attrs: { large: "" } }, [
                                      _vm._v("mdi-file-pdf-box"),
                                    ]),
                                  ],
                                  1
                                )
                              : _vm._e(),
                          ]
                        },
                      },
                      {
                        key: "item.confirmed_by_administrator_at",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            item.confirmed_by_administrator_at == null
                              ? _c(
                                  "v-chip",
                                  { attrs: { dark: "", color: "yellow" } },
                                  [
                                    _vm._v(
                                      "\n                        En attente\n                    "
                                    ),
                                  ]
                                )
                              : _c(
                                  "v-chip",
                                  { attrs: { dark: "", color: "green" } },
                                  [
                                    _vm._v(
                                      "\n                        Confirmé\n                    "
                                    ),
                                  ]
                                ),
                          ]
                        },
                      },
                      {
                        key: "item.deleted_at",
                        fn: function (ref) {
                          var item = ref.item
                          return [
                            item.deleted_at == null
                              ? _c(
                                  "v-chip",
                                  { attrs: { dark: "", color: "green" } },
                                  [
                                    _vm._v(
                                      "\n                        Active\n                    "
                                    ),
                                  ]
                                )
                              : _c(
                                  "v-chip",
                                  { attrs: { dark: "", color: "red" } },
                                  [
                                    _vm._v(
                                      "\n                        Supprimé\n                    "
                                    ),
                                  ]
                                ),
                          ]
                        },
                      },
                      {
                        key: "no-data",
                        fn: function () {
                          return [
                            _c("v-btn", { attrs: { color: "primary" } }, [
                              _vm._v(
                                "\n                        Reset\n                    "
                              ),
                            ]),
                          ]
                        },
                        proxy: true,
                      },
                    ],
                    null,
                    false,
                    4190562951
                  ),
                }),
              ],
              1
            ),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);