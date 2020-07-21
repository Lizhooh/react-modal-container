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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
function default_1(Component, id) {
    return (function () {
        function NodeRender(props) {
            var _this = this;
            this.getElement = function () {
                return document.getElementById(String(_this.id));
            };
            this.renderModal = function (props) {
                var p = __assign(__assign({}, props), _this.props);
                Object.keys(p).forEach(function (i) {
                    typeof p[i] === 'function' && (p[i] = p[i].bind(_this));
                });
                return react_1.createElement(Component, __assign(__assign({}, p), { id: _this.id + "-view", modal: {
                        open: _this.open,
                        close: _this.close,
                    } }));
            };
            this.open = function (props) {
                var el = _this.getElement();
                if (el)
                    return;
                _this.renderNode(_this.renderModal(props));
            };
            this.close = function () {
                _this.unmount();
            };
            this.update = function (props) {
                _this.props = props;
                var el = document.getElementById(id + "-view");
                if (el) {
                    _this.renderNode(_this.renderModal(props));
                }
            };
            this.props = props;
            this.id = id || Math.random().toString(32).slice(2);
        }
        NodeRender.prototype.renderNode = function (component) {
            this.component = component || react_1.createElement('div');
            if (this.getElement()) {
                react_dom_1.default.render(this.component, this.el);
            }
            else {
                this.el = document.createElement('div');
                this.el.id = String(this.id);
                this.el.className = String(this.id + '-view');
                document.body.appendChild(this.el);
                react_dom_1.default.render(this.component, this.el);
            }
        };
        NodeRender.prototype.unmount = function () {
            var el = this.getElement();
            if (!el)
                return;
            react_dom_1.default.render(null, this.el);
            document.body.removeChild(this.el);
        };
        return NodeRender;
    }());
}
exports.default = default_1;
