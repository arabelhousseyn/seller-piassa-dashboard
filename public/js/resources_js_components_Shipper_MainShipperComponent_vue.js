"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Shipper_MainShipperComponent_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BreadCrumbsComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BreadCrumbsComponent */ "./resources/js/components/BreadCrumbsComponent.vue");
/* harmony import */ var _dialog_Shipper_StoreShipperDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/Shipper/StoreShipperDialog */ "./resources/js/components/dialog/Shipper/StoreShipperDialog.vue");
/* harmony import */ var _dialog_Shipper_DeleteShipperDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog/Shipper/DeleteShipperDialog */ "./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue");
/* harmony import */ var _dialog_Shipper_RestoreShipperDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/Shipper/RestoreShipperDialog */ "./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue");
/* harmony import */ var _dialog_Shipper_ShipperProfileDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/Shipper/ShipperProfileDialog */ "./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue");
/* harmony import */ var _dialog_Shipper_UpdateShipperDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/Shipper/UpdateShipperDialog */ "./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    UpdateShipperDialog: _dialog_Shipper_UpdateShipperDialog__WEBPACK_IMPORTED_MODULE_5__["default"],
    ShipperProfileDialog: _dialog_Shipper_ShipperProfileDialog__WEBPACK_IMPORTED_MODULE_4__["default"],
    RestoreShipperDialog: _dialog_Shipper_RestoreShipperDialog__WEBPACK_IMPORTED_MODULE_3__["default"],
    DeleteShipperDialog: _dialog_Shipper_DeleteShipperDialog__WEBPACK_IMPORTED_MODULE_2__["default"],
    StoreShipperDialog: _dialog_Shipper_StoreShipperDialog__WEBPACK_IMPORTED_MODULE_1__["default"],
    BreadCrumbsComponent: _BreadCrumbsComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      id: null,
      shippers: [],
      profile: [],
      data: [],
      loading: true,
      shipper_id: null,
      search: null,
      headers: [{
        text: 'Téléphone',
        align: 'start',
        sortable: true,
        value: 'phone'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Créé à',
        value: 'created_at'
      }, {
        text: 'Statu',
        value: 'deleted_at'
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
    destroy: function destroy(id) {
      this.dialog = true;
      this.shipper_id = id;
    },
    restore: function restore(id) {
      this.dialog1 = true;
      this.shipper_id = id;
    },
    openProfile: function openProfile(data) {
      this.dialog2 = true;
      this.profile = data.profile;
    },
    update: function update(data) {
      this.dialog3 = true;
      this.data = data;
    },
    close: function close() {
      this.dialog = false;
      this.shipper_id = null;
    },
    close1: function close1() {
      this.dialog1 = false;
      this.shipper_id = null;
    },
    close2: function close2() {
      this.dialog2 = false;
      this.profile = [];
    },
    close3: function close3() {
      this.dialog3 = false;
      this.data = [];
    },
    init: function init() {
      var _this = this;

      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.get('/api/shippers').then(function (e) {
          _this.loading = false;
          _this.shippers = e.data.data;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['dialog', 'id'],
  data: function data() {
    return {
      load: false
    };
  },
  methods: {
    destroy: function destroy() {
      var _this = this;

      this.load = true;
      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios["delete"]("/api/shippers/".concat(_this.id)).then(function (e) {
          if (e.status == 204) {
            _this.$toast.open({
              message: 'Opération effectué',
              type: 'success'
            });

            _this.load = false;
            window.location.reload();
          }
        })["catch"](function (err) {
          _this.$toast.open({
            message: 'ERROR',
            type: 'error'
          });
        });
      });
    },
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['dialog', 'id'],
  data: function data() {
    return {
      load: false
    };
  },
  methods: {
    destroy: function destroy() {
      var _this = this;

      this.load = true;
      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.put("/api/shippers/restore/".concat(_this.id)).then(function (e) {
          if (e.status == 204) {
            _this.$toast.open({
              message: 'Opération effectué',
              type: 'success'
            });

            _this.load = false;
            window.location.reload();
          }
        })["catch"](function (err) {
          _this.$toast.open({
            message: 'ERROR',
            type: 'error'
          });
        });
      });
    },
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['dialog', 'profile'],
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      dialog: false,
      selectedProvince: null,
      data: {
        phone: null,
        first_name: null,
        last_name: null,
        province_id: null,
        password: null,
        password_confirmation: null
      },
      provinces: [],
      items: [],
      disable: true,
      hasError: false,
      errors: []
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      this.disabled = true;

      var _iterator = _createForOfIteratorHelper(this.provinces),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var province = _step.value;

          if (province.name == this.selectedProvince) {
            this.data.province_id = province.id;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.post('/api/shippers', _this.data).then(function (e) {
          _this.$toast.open({
            message: "Opération effectué",
            type: 'success'
          });

          window.location.reload();
        })["catch"](function (err) {
          var errors = Object.values(err.response.data.errors);

          for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
            var error = _errors[_i];

            _this.errors.push(error[0]);

            _this.hasError = true;
            _this.disabled = false;
          }
        });
      });
    },
    init: function init() {
      var _this2 = this;

      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.get('/api/provinces').then(function (e) {
          _this2.provinces = e.data;

          var _iterator2 = _createForOfIteratorHelper(e.data),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var province = _step2.value;

              _this2.items.push(province.name);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        })["catch"](function (err) {
          _this2.$toast.open({
            message: "ERROR",
            type: 'error'
          });
        });
      });
    },
    check: function check() {
      this.hasError = false;
      this.errors = [];
      this.disable = this.data.phone == null || this.data.first_name == null || this.data.last_name == null || this.selectedProvince == null || this.data.password == null || this.data.password_confirmation == null ? true : false;
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['data', 'dialog'],
  data: function data() {
    return {
      selectedProvince: null,
      provinces: [],
      data2: {
        phone: null,
        province_id: null,
        first_name: null,
        last_name: null
      },
      items: [],
      hasError: false,
      errors: []
    };
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    update: function update() {
      var _this = this;

      this.data2.phone = this.data.phone;
      this.data2.email = this.data.email;
      this.data2.first_name = this.data.profile.first_name;
      this.data2.last_name = this.data.profile.last_name;

      if (this.selectedProvince !== null) {
        var _iterator = _createForOfIteratorHelper(this.provinces),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var province = _step.value;

            if (province.name == this.selectedProvince) {
              this.data2.province_id = province.id;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        this.data2.province_id = this.data.profile.province.id;
      }

      console.log(this.data2);
      axios.get('/sanctum/csrf-cookie').then(function (res) {
        axios.put("/api/shippers/".concat(_this.data.id), _this.data2).then(function (e) {
          console.log(e);

          if (e.status == 204) {
            _this.$toast.open({
              message: "Opération effectué",
              type: 'success'
            });

            window.location.reload();
          }
        })["catch"](function (err) {
          var errors = Object.values(err.response.data.errors);

          for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
            var error = _errors[_i];

            _this.errors.push(error[0]);

            _this.hasError = true;
          }
        });
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios.get('/sanctum/csrf-cookie').then(function (res) {
      axios.get('/api/provinces').then(function (e) {
        _this2.provinces = e.data;

        var _iterator2 = _createForOfIteratorHelper(e.data),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var province = _step2.value;

            _this2.items.push(province.name);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      })["catch"](function (err) {
        _this2.$toast.open({
          message: "ERROR",
          type: 'error'
        });
      });
    });
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

/***/ "./resources/js/components/Shipper/MainShipperComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Shipper/MainShipperComponent.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainShipperComponent_vue_vue_type_template_id_43056e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainShipperComponent.vue?vue&type=template&id=43056e24& */ "./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=template&id=43056e24&");
/* harmony import */ var _MainShipperComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainShipperComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainShipperComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainShipperComponent_vue_vue_type_template_id_43056e24___WEBPACK_IMPORTED_MODULE_0__.render,
  _MainShipperComponent_vue_vue_type_template_id_43056e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shipper/MainShipperComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteShipperDialog_vue_vue_type_template_id_9d135218___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteShipperDialog.vue?vue&type=template&id=9d135218& */ "./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=template&id=9d135218&");
/* harmony import */ var _DeleteShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteShipperDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteShipperDialog_vue_vue_type_template_id_9d135218___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeleteShipperDialog_vue_vue_type_template_id_9d135218___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialog/Shipper/DeleteShipperDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RestoreShipperDialog_vue_vue_type_template_id_64cb51b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestoreShipperDialog.vue?vue&type=template&id=64cb51b5& */ "./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=template&id=64cb51b5&");
/* harmony import */ var _RestoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestoreShipperDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RestoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RestoreShipperDialog_vue_vue_type_template_id_64cb51b5___WEBPACK_IMPORTED_MODULE_0__.render,
  _RestoreShipperDialog_vue_vue_type_template_id_64cb51b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialog/Shipper/RestoreShipperDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShipperProfileDialog_vue_vue_type_template_id_f7fe4cec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec& */ "./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec&");
/* harmony import */ var _ShipperProfileDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipperProfileDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShipperProfileDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShipperProfileDialog_vue_vue_type_template_id_f7fe4cec___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShipperProfileDialog_vue_vue_type_template_id_f7fe4cec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialog/Shipper/ShipperProfileDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/StoreShipperDialog.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/StoreShipperDialog.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StoreShipperDialog_vue_vue_type_template_id_4207f442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreShipperDialog.vue?vue&type=template&id=4207f442& */ "./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=template&id=4207f442&");
/* harmony import */ var _StoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreShipperDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StoreShipperDialog_vue_vue_type_template_id_4207f442___WEBPACK_IMPORTED_MODULE_0__.render,
  _StoreShipperDialog_vue_vue_type_template_id_4207f442___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialog/Shipper/StoreShipperDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateShipperDialog_vue_vue_type_template_id_63318396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateShipperDialog.vue?vue&type=template&id=63318396& */ "./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=template&id=63318396&");
/* harmony import */ var _UpdateShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateShipperDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateShipperDialog_vue_vue_type_template_id_63318396___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateShipperDialog_vue_vue_type_template_id_63318396___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dialog/Shipper/UpdateShipperDialog.vue"
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

/***/ "./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainShipperComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainShipperComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainShipperComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteShipperDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RestoreShipperDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperProfileDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShipperProfileDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperProfileDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreShipperDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateShipperDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateShipperDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=template&id=43056e24&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=template&id=43056e24& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainShipperComponent_vue_vue_type_template_id_43056e24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainShipperComponent_vue_vue_type_template_id_43056e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainShipperComponent_vue_vue_type_template_id_43056e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainShipperComponent.vue?vue&type=template&id=43056e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=template&id=43056e24&");


/***/ }),

/***/ "./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=template&id=9d135218&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=template&id=9d135218& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteShipperDialog_vue_vue_type_template_id_9d135218___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteShipperDialog_vue_vue_type_template_id_9d135218___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteShipperDialog_vue_vue_type_template_id_9d135218___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteShipperDialog.vue?vue&type=template&id=9d135218& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=template&id=9d135218&");


/***/ }),

/***/ "./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=template&id=64cb51b5&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=template&id=64cb51b5& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreShipperDialog_vue_vue_type_template_id_64cb51b5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreShipperDialog_vue_vue_type_template_id_64cb51b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestoreShipperDialog_vue_vue_type_template_id_64cb51b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RestoreShipperDialog.vue?vue&type=template&id=64cb51b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=template&id=64cb51b5&");


/***/ }),

/***/ "./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperProfileDialog_vue_vue_type_template_id_f7fe4cec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperProfileDialog_vue_vue_type_template_id_f7fe4cec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShipperProfileDialog_vue_vue_type_template_id_f7fe4cec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec&");


/***/ }),

/***/ "./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=template&id=4207f442&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=template&id=4207f442& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreShipperDialog_vue_vue_type_template_id_4207f442___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreShipperDialog_vue_vue_type_template_id_4207f442___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreShipperDialog_vue_vue_type_template_id_4207f442___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StoreShipperDialog.vue?vue&type=template&id=4207f442& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=template&id=4207f442&");


/***/ }),

/***/ "./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=template&id=63318396&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=template&id=63318396& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateShipperDialog_vue_vue_type_template_id_63318396___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateShipperDialog_vue_vue_type_template_id_63318396___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateShipperDialog_vue_vue_type_template_id_63318396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateShipperDialog.vue?vue&type=template&id=63318396& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=template&id=63318396&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=template&id=43056e24&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shipper/MainShipperComponent.vue?vue&type=template&id=43056e24& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "shippers-data-table" },
    [
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c("bread-crumbs-component", {
            attrs: {
              title1: "Livreurs",
              link: "/home/shippers",
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
              items: _vm.shippers,
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
                        _c("v-toolbar-title", [_vm._v("Livreurs")]),
                        _vm._v(" "),
                        _c("v-divider", {
                          staticClass: "mx-4",
                          attrs: { inset: "", vertical: "" },
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("store-shipper-dialog"),
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
                                        return _vm.openProfile(item)
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
                                          [_vm._v("mdi-account")]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v("Compte"),
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
                                        return _vm.update(item)
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
                                          [_vm._v("mdi-pencil")]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v("Modifier"),
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
                                        return _vm.$router.push({
                                          name: "commission",
                                          params: {
                                            id: item.id,
                                            data: item.order_requests,
                                          },
                                        })
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
                                          [_vm._v("mdi-currency-usd")]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v("Commissions"),
                                        ]),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                item.deleted_at == null
                                  ? _c(
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
                                              { attrs: { color: "red" } },
                                              [_vm._v("mdi-delete")]
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
                                    )
                                  : _c(
                                      "v-list-item",
                                      {
                                        attrs: { link: "" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.restore(item.id)
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "v-list-item-icon",
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "green" } },
                                              [_vm._v("mdi-restore")]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v("Restaurer"),
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
      _vm._v(" "),
      _c("delete-shipper-dialog", {
        attrs: { dialog: _vm.dialog, id: _vm.shipper_id },
        on: { close: _vm.close },
      }),
      _vm._v(" "),
      _c("restore-shipper-dialog", {
        attrs: { dialog: _vm.dialog1, id: _vm.shipper_id },
        on: { close: _vm.close1 },
      }),
      _vm._v(" "),
      _vm.dialog2
        ? _c("shipper-profile-dialog", {
            attrs: { dialog: _vm.dialog2, profile: _vm.profile },
            on: { close: _vm.close2 },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.dialog3
        ? _c("update-shipper-dialog", {
            attrs: { dialog: _vm.dialog3, data: _vm.data },
            on: { close: _vm.close3 },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=template&id=9d135218&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/DeleteShipperDialog.vue?vue&type=template&id=9d135218& ***!
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
  return _c(
    "div",
    { staticClass: "delete-shipper-dialog" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v(
                  "\n                Etes-vous sûr que vous voulez supprimer !\n            "
                ),
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "grey darken-1", text: "" },
                      on: { click: _vm.close },
                    },
                    [_c("v-icon", [_vm._v("mdi-cancel")])],
                    1
                  ),
                  _vm._v(" "),
                  !_vm.load
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "red darken-1", text: "" },
                          on: { click: _vm.destroy },
                        },
                        [_c("v-icon", [_vm._v("mdi-delete")])],
                        1
                      )
                    : _c("v-progress-circular", {
                        attrs: { indeterminate: "", color: "primary" },
                      }),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=template&id=64cb51b5&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/RestoreShipperDialog.vue?vue&type=template&id=64cb51b5& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "restore-shipper-dialog" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "290" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "text-h5" }, [
                _vm._v(
                  "\n                Etes-vous sûr que vous voulez restorer !\n            "
                ),
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "grey darken-1", text: "" },
                      on: { click: _vm.close },
                    },
                    [_c("v-icon", [_vm._v("mdi-cancel")])],
                    1
                  ),
                  _vm._v(" "),
                  !_vm.load
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "success darken-1", text: "" },
                          on: { click: _vm.destroy },
                        },
                        [_c("v-icon", [_vm._v("mdi-restore")])],
                        1
                      )
                    : _c("v-progress-circular", {
                        attrs: { indeterminate: "", color: "primary" },
                      }),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/ShipperProfileDialog.vue?vue&type=template&id=f7fe4cec& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "shipper-profile" },
    [
      [
        _c(
          "v-row",
          { attrs: { justify: "center" } },
          [
            _c(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "600px" },
                model: {
                  value: _vm.dialog,
                  callback: function ($$v) {
                    _vm.dialog = $$v
                  },
                  expression: "dialog",
                },
              },
              [
                _c(
                  "v-card",
                  [
                    _c("v-card-title", [
                      _c("span", { staticClass: "text-h5" }, [
                        _vm._v("Profile"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-card-text",
                      [
                        _c(
                          "v-container",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c("p", [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-weight-bold text-h6",
                                        },
                                        [_vm._v("Nom complete : ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.profile.first_name) +
                                            " " +
                                            _vm._s(_vm.profile.last_name)
                                        ),
                                      ]),
                                    ]),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "6", md: "6" } },
                                  [
                                    _c("p", [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "font-weight-bold text-h6",
                                        },
                                        [_vm._v("Willaya : ")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(_vm.profile.province.name)
                                        ),
                                      ]),
                                    ]),
                                  ]
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
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "blue darken-1", text: "" },
                            on: { click: _vm.close },
                          },
                          [
                            _vm._v(
                              "\n                            Fermer\n                        "
                            ),
                          ]
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
      ],
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=template&id=4207f442&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/StoreShipperDialog.vue?vue&type=template&id=4207f442& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "store-shipper-dialog" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          scopedSlots: _vm._u([
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
                        { attrs: { color: "primary", dark: "" } },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [
                      _c("v-icon", [_vm._v("mdi-plus")]),
                      _vm._v(" Ajouter\n            "),
                    ],
                    1
                  ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [_vm._v("Ajouter")]),
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-container", [
                    _c(
                      "form",
                      {
                        attrs: { method: "post" },
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.store.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Nom*", required: "" },
                                  on: { keydown: _vm.check },
                                  model: {
                                    value: _vm.data.first_name,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data, "first_name", $$v)
                                    },
                                    expression: "data.first_name",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Prénom*", required: "" },
                                  on: { keydown: _vm.check },
                                  model: {
                                    value: _vm.data.last_name,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data, "last_name", $$v)
                                    },
                                    expression: "data.last_name",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Téléphone*", required: "" },
                                  on: { keydown: _vm.check },
                                  model: {
                                    value: _vm.data.phone,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data, "phone", $$v)
                                    },
                                    expression: "data.phone",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { type: "email", label: "Email" },
                                  on: { keydown: _vm.check },
                                  model: {
                                    value: _vm.data.email,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data, "email", $$v)
                                    },
                                    expression: "data.email",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    type: "password",
                                    label: "Mote de passe*",
                                    required: "",
                                  },
                                  on: { keydown: _vm.check },
                                  model: {
                                    value: _vm.data.password,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data, "password", $$v)
                                    },
                                    expression: "data.password",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    type: "password",
                                    label: "Confirmation mote de passe*",
                                    required: "",
                                  },
                                  on: { keydown: _vm.check },
                                  model: {
                                    value: _vm.data.password_confirmation,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.data,
                                        "password_confirmation",
                                        $$v
                                      )
                                    },
                                    expression: "data.password_confirmation",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-select", {
                                  attrs: {
                                    items: _vm.items,
                                    placeholder: "Willayas",
                                  },
                                  on: { change: _vm.check },
                                  model: {
                                    value: _vm.selectedProvince,
                                    callback: function ($$v) {
                                      _vm.selectedProvince = $$v
                                    },
                                    expression: "selectedProvince",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.hasError
                              ? _c(
                                  "v-alert",
                                  {
                                    attrs: {
                                      border: "right",
                                      "colored-border": "",
                                      type: "error",
                                      elevation: "2",
                                    },
                                  },
                                  [
                                    _c(
                                      "ul",
                                      _vm._l(
                                        _vm.errors,
                                        function (error, index) {
                                          return _c("li", { key: index }, [
                                            _c("span", [_vm._v(_vm._s(error))]),
                                          ])
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      type: "submit",
                                      disabled: _vm.disable,
                                      color: "primary",
                                    },
                                  },
                                  [_c("v-icon", [_vm._v("mdi-check")])],
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
                  ]),
                  _vm._v(" "),
                  _c("small", [_vm._v("*Indique le champ obligatoire")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.dialog = false
                        },
                      },
                    },
                    [_vm._v("\n                    Fermer\n                ")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=template&id=63318396&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dialog/Shipper/UpdateShipperDialog.vue?vue&type=template&id=63318396& ***!
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
  return _c(
    "div",
    { staticClass: "update-shipper-dialog" },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [
                  _vm._v("Modification"),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-container", [
                    _c(
                      "form",
                      {
                        attrs: { method: "put" },
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.update.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Nom" },
                                  model: {
                                    value: _vm.data.profile.first_name,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.data.profile,
                                        "first_name",
                                        $$v
                                      )
                                    },
                                    expression: "data.profile.first_name",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Prénom" },
                                  model: {
                                    value: _vm.data.profile.last_name,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.data.profile,
                                        "last_name",
                                        $$v
                                      )
                                    },
                                    expression: "data.profile.last_name",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Téléphone" },
                                  model: {
                                    value: _vm.data.phone,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data, "phone", $$v)
                                    },
                                    expression: "data.phone",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-text-field", {
                                  attrs: { label: "Email" },
                                  model: {
                                    value: _vm.data.email,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.data, "email", $$v)
                                    },
                                    expression: "data.email",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12", sm: "6", md: "4" } },
                              [
                                _c("v-select", {
                                  attrs: {
                                    placeholder: "Willayas",
                                    items: _vm.items,
                                  },
                                  model: {
                                    value: _vm.selectedProvince,
                                    callback: function ($$v) {
                                      _vm.selectedProvince = $$v
                                    },
                                    expression: "selectedProvince",
                                  },
                                }),
                                _vm._v(" "),
                                _c("v-chip", { attrs: { color: "primary" } }, [
                                  _vm._v(
                                    _vm._s(_vm.data.profile.province.name)
                                  ),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.hasError
                              ? _c(
                                  "v-alert",
                                  {
                                    attrs: {
                                      border: "right",
                                      "colored-border": "",
                                      type: "error",
                                      elevation: "2",
                                    },
                                  },
                                  [
                                    _c(
                                      "ul",
                                      _vm._l(
                                        _vm.errors,
                                        function (error, index) {
                                          return _c("li", { key: index }, [
                                            _c("span", [_vm._v(_vm._s(error))]),
                                          ])
                                        }
                                      ),
                                      0
                                    ),
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "12" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { type: "submit", color: "success" },
                                  },
                                  [_c("v-icon", [_vm._v("mdi-check")])],
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
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.close },
                    },
                    [_vm._v("\n                    Fermer\n                ")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);