<<<<<<< HEAD
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var shared_1 = require("../picker/shared");
var COLUMNSPLACEHOLDERCODE = '000000';
component_1.VantComponent({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: __assign(__assign({}, shared_1.pickerProps), { value: {
            type: String,
            observer: function (value) {
                this.code = value;
                this.setValues();
            },
        }, areaList: {
            type: Object,
            value: {},
            observer: 'setValues'
        }, columnsNum: {
            type: null,
            value: 3,
            observer: function (value) {
                this.setData({
                    displayColumns: this.data.columns.slice(0, +value)
                });
            }
        }, columnsPlaceholder: {
            type: Array,
            observer: function (val) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: val[0] || '',
                        city: val[1] || '',
                        county: val[2] || '',
                    }
                });
            }
        } }),
    data: {
        columns: [{ values: [] }, { values: [] }, { values: [] }],
        displayColumns: [{ values: [] }, { values: [] }, { values: [] }],
        typeToColumnsPlaceholder: {}
    },
    mounted: function () {
        var _this = this;
        setTimeout(function () {
            _this.setValues();
        }, 0);
    },
    methods: {
        getPicker: function () {
=======
import { VantComponent } from '../common/component';
import { pickerProps } from '../picker/shared';
VantComponent({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: Object.assign(Object.assign({}, pickerProps), { value: String, areaList: {
            type: Object,
            value: {}
        }, columnsNum: {
            type: null,
            value: 3
        } }),
    data: {
        columns: [{ values: [] }, { values: [] }, { values: [] }],
        displayColumns: [{ values: [] }, { values: [] }, { values: [] }]
    },
    watch: {
        value(value) {
            this.code = value;
            this.setValues();
        },
        areaList: 'setValues',
        columnsNum(value) {
            this.setData({
                displayColumns: this.data.columns.slice(0, +value)
            });
        }
    },
    mounted() {
        setTimeout(() => {
            this.setValues();
        }, 0);
    },
    methods: {
        getPicker() {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-area__picker');
            }
            return this.picker;
        },
<<<<<<< HEAD
        onCancel: function (event) {
            this.emit('cancel', event.detail);
        },
        onConfirm: function (event) {
            var index = event.detail.index;
            var value = event.detail.value;
            value = this.parseOutputValues(value);
            this.emit('confirm', { value: value, index: index });
        },
        emit: function (type, detail) {
=======
        onCancel(event) {
            this.emit('cancel', event.detail);
        },
        onConfirm(event) {
            this.emit('confirm', event.detail);
        },
        emit(type, detail) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            detail.values = detail.value;
            delete detail.value;
            this.$emit(type, detail);
        },
<<<<<<< HEAD
        // parse output columns data
        parseOutputValues: function (values) {
            var columnsPlaceholder = this.data.columnsPlaceholder;
            return values.map(function (value, index) {
                // save undefined value
                if (!value)
                    return value;
                value = JSON.parse(JSON.stringify(value));
                if (!value.code || value.name === columnsPlaceholder[index]) {
                    value.code = '';
                    value.name = '';
                }
                return value;
            });
        },
        onChange: function (event) {
            var _this = this;
            var _a = event.detail, index = _a.index, picker = _a.picker, value = _a.value;
            this.code = value[index].code;
            this.setValues().then(function () {
                _this.$emit('change', {
                    picker: picker,
                    values: _this.parseOutputValues(picker.getValues()),
                    index: index
                });
            });
        },
        getConfig: function (type) {
            var areaList = this.data.areaList;
            return (areaList && areaList[type + "_list"]) || {};
        },
        getList: function (type, code) {
            var typeToColumnsPlaceholder = this.data.typeToColumnsPlaceholder;
            var result = [];
            if (type !== 'province' && !code) {
                return result;
            }
            var list = this.getConfig(type);
            result = Object.keys(list).map(function (code) { return ({
                code: code,
                name: list[code]
            }); });
=======
        onChange(event) {
            const { index, picker, value } = event.detail;
            this.code = value[index].code;
            this.setValues().then(() => {
                this.$emit('change', {
                    picker,
                    values: picker.getValues(),
                    index
                });
            });
        },
        getConfig(type) {
            const { areaList } = this.data;
            return (areaList && areaList[`${type}_list`]) || {};
        },
        getList(type, code) {
            let result = [];
            if (type !== 'province' && !code) {
                return result;
            }
            const list = this.getConfig(type);
            result = Object.keys(list).map(code => ({
                code,
                name: list[code]
            }));
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            if (code) {
                // oversea code
                if (code[0] === '9' && type === 'city') {
                    code = '9';
                }
<<<<<<< HEAD
                result = result.filter(function (item) { return item.code.indexOf(code) === 0; });
            }
            if (typeToColumnsPlaceholder[type] && result.length) {
                // set columns placeholder
                var codeFill = type === 'province' ? '' : type === 'city' ? COLUMNSPLACEHOLDERCODE.slice(2, 4) : COLUMNSPLACEHOLDERCODE.slice(4, 6);
                result.unshift({
                    code: "" + code + codeFill,
                    name: typeToColumnsPlaceholder[type]
                });
            }
            return result;
        },
        getIndex: function (type, code) {
            var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
            var list = this.getList(type, code.slice(0, compareNum - 2));
=======
                result = result.filter(item => item.code.indexOf(code) === 0);
            }
            return result;
        },
        getIndex(type, code) {
            let compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
            const list = this.getList(type, code.slice(0, compareNum - 2));
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            // oversea code
            if (code[0] === '9' && type === 'province') {
                compareNum = 1;
            }
            code = code.slice(0, compareNum);
<<<<<<< HEAD
            for (var i = 0; i < list.length; i++) {
=======
            for (let i = 0; i < list.length; i++) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                if (list[i].code.slice(0, compareNum) === code) {
                    return i;
                }
            }
            return 0;
        },
<<<<<<< HEAD
        setValues: function () {
            var _this = this;
            var county = this.getConfig('county');
            var code = this.code;
            if (!code) {
                if (this.data.columnsPlaceholder.length) {
                    code = COLUMNSPLACEHOLDERCODE;
                }
                else if (Object.keys(county)[0]) {
                    code = Object.keys(county)[0];
                }
                else {
                    code = '';
                }
            }
            var province = this.getList('province');
            var city = this.getList('city', code.slice(0, 2));
            var picker = this.getPicker();
            if (!picker) {
                return;
            }
            var stack = [];
            stack.push(picker.setColumnValues(0, province, false));
            stack.push(picker.setColumnValues(1, city, false));
            if (city.length && code.slice(2, 4) === '00') {
                code = city[0].code;
            }
            stack.push(picker.setColumnValues(2, this.getList('county', code.slice(0, 4)), false));
            return Promise.all(stack)
                .catch(function () { })
                .then(function () {
                return picker.setIndexes([
                    _this.getIndex('province', code),
                    _this.getIndex('city', code),
                    _this.getIndex('county', code)
                ]);
            })
                .catch(function () { });
        },
        getValues: function () {
            var picker = this.getPicker();
            return picker ? picker.getValues().filter(function (value) { return !!value; }) : [];
        },
        getDetail: function () {
            var values = this.getValues();
            var area = {
=======
        setValues() {
            const county = this.getConfig('county');
            let code = this.code || Object.keys(county)[0] || '';
            const province = this.getList('province');
            const city = this.getList('city', code.slice(0, 2));
            const picker = this.getPicker();
            if (!picker) {
                return;
            }
            const stack = [];
            stack.push(picker.setColumnValues(0, province, false));
            stack.push(picker.setColumnValues(1, city, false));
            if (city.length && code.slice(2, 4) === '00') {
                [{ code }] = city;
            }
            stack.push(picker.setColumnValues(2, this.getList('county', code.slice(0, 4)), false));
            return Promise.all(stack)
                .catch(() => { })
                .then(() => picker.setIndexes([
                this.getIndex('province', code),
                this.getIndex('city', code),
                this.getIndex('county', code)
            ]))
                .catch(() => { });
        },
        getValues() {
            const picker = this.getPicker();
            return picker ? picker.getValues().filter(value => !!value) : [];
        },
        getDetail() {
            const values = this.getValues();
            const area = {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
                code: '',
                country: '',
                province: '',
                city: '',
                county: ''
            };
            if (!values.length) {
                return area;
            }
<<<<<<< HEAD
            var names = values.map(function (item) { return item.name; });
=======
            const names = values.map((item) => item.name);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            area.code = values[values.length - 1].code;
            if (area.code[0] === '9') {
                area.country = names[1] || '';
                area.province = names[2] || '';
            }
            else {
                area.province = names[0] || '';
                area.city = names[1] || '';
                area.county = names[2] || '';
            }
            return area;
        },
<<<<<<< HEAD
        reset: function (code) {
=======
        reset(code) {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
            this.code = code || '';
            return this.setValues();
        }
    }
});
