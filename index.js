'use strict';var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a},_createClass=function(){function a(b,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_reactDom=require('react-dom'),_reactDom2=_interopRequireDefault(_reactDom);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}exports.default=function(a,b){var c,d,f;return d=c=function(){function g(h){_classCallCheck(this,g),f.call(this),this.props=h,this.id=Math.random(),this.options=_extends({clickModalClose:!1,alpha:0.45},b)}return _createClass(g,[{key:'renderNode',value:function renderNode(h){this.component=h||_react2.default.createElement('div'),this.el=document.createElement('div'),this.el.id=this.id,document.body.appendChild(this.el),_reactDom2.default.render(this.component,this.el)}},{key:'unmount',value:function unmount(){var h=document.getElementById(this.id);h&&(_reactDom2.default.render(null,this.el),document.body.removeChild(this.el))}}]),g}(),f=function _initialiseProps(){var g=this;this.onClick=function(h){h.target===h.currentTarget&&g.options.clickModalClose&&g.close()},this.renderModal=function(h){var j=_extends({},h,g.props);return Object.keys(j).forEach(function(k){'function'==typeof j[k]&&(j[k]=j[k].bind(g))}),_react2.default.createElement(a,_extends({},j,{modal:_extends({},g)}))},this.open=function(h){var j=document.getElementById(g.id);j||(document.body.style='overflow: hidden',h===void 0?g.renderNode(g.renderModal()):g.renderNode(g.renderModal({data:h})))},this.close=function(){document.body.style='',g.unmount()}},d};