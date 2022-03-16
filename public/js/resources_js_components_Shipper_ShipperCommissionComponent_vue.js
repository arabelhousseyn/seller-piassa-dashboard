"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Shipper_ShipperCommissionComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data'],
  data: function data() {
    return {
      data1: undefined,
      search: null,
      shipper_id: window.location.pathname.split('/').pop(),
      headers: [{
        text: 'Ref commande',
        value: 'commission.user_order.order.ref',
        align: 'start',
        sortable: true
      }, {
        text: 'Commission',
        value: 'commission.amount'
      }, {
        text: 'Date de l\'opération',
        value: 'commission.updated_at'
      }, {
        text: 'Map',
        value: 'actions',
        sortable: false
      }]
    };
  },
  methods: {
    init: function init() {
      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.get("/api/shippers/comissions/".concat(_this.shipper_id)).then(function (e) {
          _this.data1 = e.data.data;
        })["catch"](function (err) {
          if (err.response.status == 404) {
            _this.$router.push('/home/shippers');
          }

          console.log(err);
        });
      });
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ "./resources/js/components/Shipper/ShipperCommissionComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Shipper/ShipperCommissionComponent.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShipperCommissionComponent_vue_vue_type_template_id_187c86ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipperCommissionComponent.vue?vue&type=template&id=187c86ea& */ "./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=template&id=187c86ea&");
/* harmony import */ var _ShipperCommissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipperCommissionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShipperCommissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShipperCommissionComponent_vue_vue_type_template_id_187c86ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShipperCommissionComponent_vue_vue_type_template_id_187c86ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shipper/ShipperCommissionComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperCommissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShipperCommissionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperCommissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=template&id=187c86ea&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=template&id=187c86ea& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperCommissionComponent_vue_vue_type_template_id_187c86ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperCommissionComponent_vue_vue_type_template_id_187c86ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperCommissionComponent_vue_vue_type_template_id_187c86ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShipperCommissionComponent.vue?vue&type=template&id=187c86ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=template&id=187c86ea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=template&id=187c86ea&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/ShipperCommissionComponent.vue?vue&type=template&id=187c86ea& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return this.data !== undefined || this.data1 !== undefined
    ? _c(
        "div",
        { staticClass: "shipper-commissions" },
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
                      attrs: { to: "/home/shippers" },
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
                  items: _vm.data == undefined ? _vm.data1 : _vm.data,
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
                            [
                              _c("v-toolbar-title", [_vm._v("Commissions")]),
                              _vm._v(" "),
                              _c("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              _vm._v(" "),
                              _c("v-spacer"),
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
                            "v-btn",
                            { attrs: { text: "", color: "primary" } },
                            [_c("v-icon", [_vm._v("mdi-map-marker")])],
                            1
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
                              "\n                    Reset\n                "
                            ),
                          ]),
                        ]
                      },
                      proxy: true,
                    },
                  ],
                  null,
                  false,
                  764671230
                ),
              }),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);