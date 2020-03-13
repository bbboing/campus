<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = require("../mixins/basic");
var relationFunctions = {
    ancestor: {
        linked: function (parent) {
            this.parent = parent;
        },
        unlinked: function () {
            this.parent = null;
        },
    },
    descendant: {
        linked: function (child) {
            this.children = this.children || [];
            this.children.push(child);
        },
        unlinked: function (child) {
            this.children = (this.children || []).filter(function (it) { return it !== child; });
        },
    },
};
function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
=======
import { basic } from '../mixins/basic';
import { observe } from '../mixins/observer/index';
function mapKeys(source, target, map) {
    Object.keys(map).forEach(key => {
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
<<<<<<< HEAD
function makeRelation(options, vantOptions, relation) {
    var _a;
    var type = relation.type, name = relation.name, linked = relation.linked, unlinked = relation.unlinked, linkChanged = relation.linkChanged;
    var beforeCreate = vantOptions.beforeCreate, destroyed = vantOptions.destroyed;
    if (type === 'descendant') {
        options.created = function () {
            beforeCreate && beforeCreate.bind(this)();
            this.children = this.children || [];
        };
        options.detached = function () {
            this.children = [];
            destroyed && destroyed.bind(this)();
        };
    }
    options.relations = Object.assign(options.relations || {}, (_a = {},
        _a["../" + name + "/index"] = {
            type: type,
            linked: function (node) {
                relationFunctions[type].linked.bind(this)(node);
                linked && linked.bind(this)(node);
            },
            linkChanged: function (node) {
                linkChanged && linkChanged.bind(this)(node);
            },
            unlinked: function (node) {
                relationFunctions[type].unlinked.bind(this)(node);
                unlinked && unlinked.bind(this)(node);
            },
        },
        _a));
}
function VantComponent(vantOptions) {
    if (vantOptions === void 0) { vantOptions = {}; }
    var options = {};
=======
function VantComponent(vantOptions = {}) {
    const options = {};
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    mapKeys(vantOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        relations: 'relations',
        destroyed: 'detached',
        classes: 'externalClasses'
    });
<<<<<<< HEAD
    var relation = vantOptions.relation;
    if (relation) {
        makeRelation(options, vantOptions, relation);
=======
    const { relation } = vantOptions;
    if (relation) {
        options.relations = Object.assign(options.relations || {}, {
            [`../${relation.name}/index`]: relation
        });
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    }
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
<<<<<<< HEAD
    options.behaviors.push(basic_1.basic);
=======
    options.behaviors.push(basic);
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
    // map field to form-field behavior
    if (vantOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
<<<<<<< HEAD
    Component(options);
}
exports.VantComponent = VantComponent;
=======
    observe(vantOptions, options);
    Component(options);
}
export { VantComponent };
>>>>>>> 336dbefd48c7371c730c2bc3d82d4e4e1ee6a9b2
