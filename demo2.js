webpackJsonp([1],{41:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=n(a(0)),l=a(6);a(7);var u=n(a(42));document.title="flipping-pages - Demo 2",(0,l.render)(r.default.createElement(u.default,null),document.querySelector("#root"))},42:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_flippingPages=__webpack_require__(8),_flippingPages2=_interopRequireDefault(_flippingPages),App=function(_Component){function App(e){_classCallCheck(this,App);var t=_possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).call(this,e));return t.state=Object.assign({},_flippingPages2.default.defaultProps,{height:"400px",width:"200px",perspective:"800px",selected:0,onChange:"function(dir) {\n  this.setState({selected: this.state.selected + dir})\n}",onOverScroll:"function(overscroll) {\n  return overscroll / 4\n}"}),t.handleEval=t.handleEval.bind(t),t}return _inherits(App,_Component),_createClass(App,[{key:"handleEval",value:function handleEval(str){try{return eval("("+str+")").bind(this)}catch(e){}}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<5;a++)t.push(_react2.default.createElement("div",{key:a,className:"page page"+a}));return _react2.default.createElement("div",null,"Height ",_react2.default.createElement("input",{value:this.state.height,onChange:function(t){return e.setState({height:t.target.value})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Width ",_react2.default.createElement("input",{value:this.state.width,onChange:function(t){return e.setState({width:t.target.value})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Perspective ",_react2.default.createElement("input",{value:this.state.perspective,onChange:function(t){return e.setState({perspective:t.target.value})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Animation duration ",_react2.default.createElement("input",{type:"number",min:"0",value:this.state.animationDuration,onChange:function(t){return e.setState({animationDuration:Number(t.target.value)})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Disabled ",_react2.default.createElement("input",{type:"checkbox",checked:this.state.disabled,onChange:function(t){return e.setState({disabled:t.target.checked})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"No animation ",_react2.default.createElement("input",{type:"checkbox",checked:this.state.noAnimation,onChange:function(t){return e.setState({noAnimation:t.target.checked})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"On change ",_react2.default.createElement("textarea",{rows:"5",cols:"60",value:this.state.onChange,onChange:function(t){return e.setState({onChange:t.target.value})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"On overScroll ",_react2.default.createElement("textarea",{rows:"5",cols:"60",value:this.state.onOverScroll,onChange:function(t){return e.setState({onOverScroll:t.target.value})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Selected ",_react2.default.createElement("input",{type:"number",min:"0",max:"4",value:this.state.selected,onChange:function(t){return e.setState({selected:Number(t.target.value)})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Shadow background ",_react2.default.createElement("input",{value:this.state.shadowBackground,onChange:function(t){return e.setState({shadowBackground:t.target.value})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Swipe length ",_react2.default.createElement("input",{type:"number",value:this.state.swipeLength,onChange:function(t){return e.setState({swipeLength:Number(t.target.value)})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Threshold speed ",_react2.default.createElement("input",{type:"number",value:this.state.thresholdSpeed,onChange:function(t){return e.setState({thresholdSpeed:Number(t.target.value)})}}),_react2.default.createElement("br",null),_react2.default.createElement("br",null),"Demo:",_react2.default.createElement("br",null),_react2.default.createElement(_flippingPages2.default,{className:"pages",style:{height:this.state.height,width:this.state.width,perspective:this.state.perspective},animationDuration:this.state.animationDuration,disabled:this.state.disabled,noAnimation:this.state.noAnimation,onChange:this.handleEval(this.state.onChange),onOverScroll:this.handleEval(this.state.onOverScroll),selected:this.state.selected,shadowBackground:this.state.shadowBackground,swipeLength:this.state.swipeLength,thresholdSpeed:this.state.thresholdSpeed},t))}}]),App}(_react.Component);exports.default=App}},[41]);
//# sourceMappingURL=demo2.js.map