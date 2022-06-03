"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Seller_MainSellerComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadCrumbsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadCrumbsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['title1', 'icon', 'link']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seller/MainSellerComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seller/MainSellerComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BreadCrumbsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BreadCrumbsComponent */ "./resources/js/components/BreadCrumbsComponent.vue");
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
  components: {
    BreadCrumbsComponent: _BreadCrumbsComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      sellers: [],
      loading: true,
      search: null,
      headers: [{
        text: 'Nom complete',
        align: 'start',
        sortable: true,
        value: 'request.vehicle.user.profile.full_name'
      }, {
        text: 'Telephone',
        value: 'request.vehicle.user.phone'
      }, {
        text: 'Type',
        value: 'request.type.name'
      }, {
        text: 'Type',
        value: 'request.type.name'
      }, {
        text: 'Details',
        value: 'request.informations'
      }, {
        text: 'Créé à',
        value: 'request.created_at'
      }, {
        text: 'actions',
        value: 'actions',
        sortable: false
      }],
      suggestions: [],
      seller_request_id: null,
      dialog: false,
      dialog1: false
    };
  },
  methods: {
    reset: function reset() {
      this.init();
    },
    fetchSuggestions: function fetchSuggestions(data) {
      this.suggestions = data;
      this.dialog = true;
    },
    destroy: function destroy(id) {
      this.seller_request_id = id;
      this.dialog1 = true;
    },
    close1: function close1() {
      this.suggestions = [];
      this.dialog = false;
    },
    close2: function close2() {
      this.seller_request_id = null;
      this.dialog1 = false;
    },
    init: function init() {
      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.get('/api/sellers/requests').then(function (e) {
          _this.loading = false;
          _this.sellers = e.data.data;
        })["catch"](function (err) {
          _this.$toast.open({
            message: 'Erreur dans serveur veuillez réessayer',
            type: 'error'
          });
        });
      });
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ "./resources/js/components/BreadCrumbsComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/BreadCrumbsComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BreadCrumbsComponent_vue_vue_type_template_id_068ac058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadCrumbsComponent.vue?vue&type=template&id=068ac058& */ "./resources/js/components/BreadCrumbsComponent.vue?vue&type=template&id=068ac058&");
/* harmony import */ var _BreadCrumbsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadCrumbsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/BreadCrumbsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BreadCrumbsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BreadCrumbsComponent_vue_vue_type_template_id_068ac058___WEBPACK_IMPORTED_MODULE_0__.render,
  _BreadCrumbsComponent_vue_vue_type_template_id_068ac058___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BreadCrumbsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Seller/MainSellerComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Seller/MainSellerComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainSellerComponent_vue_vue_type_template_id_0a91e6c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainSellerComponent.vue?vue&type=template&id=0a91e6c0& */ "./resources/js/components/Seller/MainSellerComponent.vue?vue&type=template&id=0a91e6c0&");
/* harmony import */ var _MainSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainSellerComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Seller/MainSellerComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainSellerComponent_vue_vue_type_template_id_0a91e6c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _MainSellerComponent_vue_vue_type_template_id_0a91e6c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Seller/MainSellerComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BreadCrumbsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/BreadCrumbsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadCrumbsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadCrumbsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Seller/MainSellerComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Seller/MainSellerComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainSellerComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seller/MainSellerComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSellerComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BreadCrumbsComponent.vue?vue&type=template&id=068ac058&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/BreadCrumbsComponent.vue?vue&type=template&id=068ac058& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbsComponent_vue_vue_type_template_id_068ac058___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbsComponent_vue_vue_type_template_id_068ac058___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BreadCrumbsComponent_vue_vue_type_template_id_068ac058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BreadCrumbsComponent.vue?vue&type=template&id=068ac058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadCrumbsComponent.vue?vue&type=template&id=068ac058&");


/***/ }),

/***/ "./resources/js/components/Seller/MainSellerComponent.vue?vue&type=template&id=0a91e6c0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Seller/MainSellerComponent.vue?vue&type=template&id=0a91e6c0& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSellerComponent_vue_vue_type_template_id_0a91e6c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSellerComponent_vue_vue_type_template_id_0a91e6c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainSellerComponent_vue_vue_type_template_id_0a91e6c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainSellerComponent.vue?vue&type=template&id=0a91e6c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seller/MainSellerComponent.vue?vue&type=template&id=0a91e6c0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadCrumbsComponent.vue?vue&type=template&id=068ac058&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BreadCrumbsComponent.vue?vue&type=template&id=068ac058& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-card",
    { staticClass: "mb-5 elevation-1" },
    [
      _c(
        "v-breadcrumbs",
        [
          _c("v-breadcrumbs-item", { attrs: { href: "/home" } }, [
            _vm._v("Acceuil"),
          ]),
          _vm._v(" "),
          _c(
            "v-breadcrumbs-divider",
            [_c("v-icon", [_vm._v(_vm._s(_vm.icon))])],
            1
          ),
          _vm._v(" "),
          _c("v-breadcrumbs-item", { attrs: { href: _vm.link } }, [
            _vm._v(_vm._s(_vm.title1)),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seller/MainSellerComponent.vue?vue&type=template&id=0a91e6c0&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Seller/MainSellerComponent.vue?vue&type=template&id=0a91e6c0& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "sellers-data-table" },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c("bread-crumbs-component", {
            attrs: {
              title1: "Demandes",
              link: "/home/requests",
              icon: "mdi mdi-chevron-right",
            },
          }),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              loading: _vm.loading,
              "loading-text": "Chargement... veuillez patienter",
              headers: _vm.headers,
              items: _vm.sellers,
              search: _vm.search,
              "disable-sort": "",
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function () {
                  return [
                    _c(
                      "v-toolbar",
                      { attrs: { flat: "" } },
                      [
                        _c("v-toolbar-title", [_vm._v("Demandes")]),
                        _vm._v(" "),
                        _c("v-divider", {
                          staticClass: "mx-4",
                          attrs: { inset: "", vertical: "" },
                        }),
                      ],
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
                key: "item.actions",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-menu",
                      {
                        attrs: { bottom: "", "min-width": "200" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function (ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            dark: "",
                                            color: "primary",
                                            fab: "",
                                            small: "",
                                            text: "",
                                          },
                                        },
                                        "v-btn",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _c("v-icon", [
                                        _vm._v("mdi-dots-horizontal"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ]
                              },
                            },
                          ],
                          null,
                          true
                        ),
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-list",
                          [
                            _c(
                              "v-list-item-group",
                              [
                                _c(
                                  "v-list-item",
                                  {
                                    attrs: { link: "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.fetchSuggestions(
                                          item.request.suggestions
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "v-list-item-icon",
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "primary" } },
                                          [_vm._v("mdi-chart-box")]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v("Les suggestion"),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-list-item",
                                  {
                                    attrs: { link: "" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.destroy(item.id)
                                      },
                                    },
                                  },
                                  [
                                    _c(
                                      "v-list-item-icon",
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "primary" } },
                                          [_vm._v("mdi-chart-box")]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v("Supprimer"),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
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
                      ? _c("v-chip", { attrs: { dark: "", color: "green" } }, [
                          _vm._v(
                            "\n                    Active\n                "
                          ),
                        ])
                      : _c("v-chip", { attrs: { dark: "", color: "red" } }, [
                          _vm._v(
                            "\n                    Supprimé\n                "
                          ),
                        ]),
                  ]
                },
              },
              {
                key: "no-data",
                fn: function () {
                  return [
                    _c("v-btn", { attrs: { color: "primary" } }, [
                      _vm._v("\n                    Reset\n                "),
                    ]),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);