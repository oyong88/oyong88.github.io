webpackJsonp([2,5],{1503:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),f=o(c),s=n(11),p=n(69),d=n(73),m=r(d),b=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"componentWillUnmount",value:function(){this.props.clearError()}},{key:"onSubmit",value:function(e){this.props.createArtist(e)}},{key:"render",value:function(){var e=this.props.handleSubmit;return f.default.createElement("form",{onSubmit:e(this.onSubmit.bind(this))},f.default.createElement("div",{className:"input-field"},f.default.createElement(p.Field,{name:"name",component:"input",placeholder:"Name"})),f.default.createElement("div",{className:"input-field"},f.default.createElement(p.Field,{name:"age",component:"input",placeholder:"Age"})),f.default.createElement("div",{className:"input-field"},f.default.createElement(p.Field,{name:"yearsActive",component:"input",placeholder:"Years Active"})),f.default.createElement("div",{className:"input-field"},f.default.createElement(p.Field,{name:"genre",component:"input",placeholder:"Genre"})),f.default.createElement("div",{className:"has-error"},this.props.errorMessage),f.default.createElement("button",{className:"btn"},"Submit"))}}]),t}(c.Component),h=function(e){return{errorMessage:e.errors}};t.default=(0,s.connect)(h,m)((0,p.reduxForm)({form:"create"})(b))}});