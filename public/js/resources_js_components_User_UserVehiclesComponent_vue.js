"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_UserVehiclesComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/UserVehiclesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/UserVehiclesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        text: 'Modèle',
        align: 'start',
        sortable: true,
        value: 'model'
      }, {
        text: 'Année',
        value: 'year'
      }, {
        text: 'Motorisation',
        value: 'motorization'
      }, {
        text: 'Numéro de châssis',
        value: 'chassis_number'
      }, {
        text: 'Créé à',
        value: 'created_at'
      }, {
        text: 'actions',
        value: 'actions',
        sortable: false
      }]
    };
  },
  methods: {
    reset: function reset() {
      this.init();
    },
    init: function init() {
      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.get("/api/users/vehicles/".concat(_this.user_id)).then(function (e) {
          _this.data2 = e.data.data;
        })["catch"](function (err) {
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

/***/ "./resources/js/components/User/UserVehiclesComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/User/UserVehiclesComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserVehiclesComponent_vue_vue_type_template_id_70362932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserVehiclesComponent.vue?vue&type=template&id=70362932& */ "./resources/js/components/User/UserVehiclesComponent.vue?vue&type=template&id=70362932&");
/* harmony import */ var _UserVehiclesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserVehiclesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/User/UserVehiclesComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserVehiclesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserVehiclesComponent_vue_vue_type_template_id_70362932___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserVehiclesComponent_vue_vue_type_template_id_70362932___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/UserVehiclesComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/UserVehiclesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/User/UserVehiclesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVehiclesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserVehiclesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/UserVehiclesComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVehiclesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/UserVehiclesComponent.vue?vue&type=template&id=70362932&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/User/UserVehiclesComponent.vue?vue&type=template&id=70362932& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVehiclesComponent_vue_vue_type_template_id_70362932___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVehiclesComponent_vue_vue_type_template_id_70362932___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVehiclesComponent_vue_vue_type_template_id_70362932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserVehiclesComponent.vue?vue&type=template&id=70362932& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/UserVehiclesComponent.vue?vue&type=template&id=70362932&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/UserVehiclesComponent.vue?vue&type=template&id=70362932&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/UserVehiclesComponent.vue?vue&type=template&id=70362932& ***!
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
  return _c("div", { staticClass: "user-vehicles-component" }, [
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
                    "sort-by": "created_at",
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
                                _c("v-toolbar-title", [_vm._v("Vehicles")]),
                                _vm._v(" "),
                                _c("v-divider", {
                                  staticClass: "mx-4",
                                  attrs: { inset: "", vertical: "" },
                                }),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { color: "primary" } },
                                  [
                                    _c("v-icon", [_vm._v("mdi-plus")]),
                                    _vm._v(
                                      " Ajouter\n                            "
                                    ),
                                  ],
                                  1
                                ),
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
                                _c("v-list", [_c("v-list-item-group")], 1),
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
                              ? _c(
                                  "v-chip",
                                  { attrs: { dark: "", color: "green" } },
                                  [
                                    _vm._v(
                                      "\n                            Active\n                        "
                                    ),
                                  ]
                                )
                              : _c(
                                  "v-chip",
                                  { attrs: { dark: "", color: "red" } },
                                  [
                                    _vm._v(
                                      "\n                            Supprimé\n                        "
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
                                "\n                            Reset\n                        "
                              ),
                            ]),
                          ]
                        },
                        proxy: true,
                      },
                    ],
                    null,
                    false,
                    136173544
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