(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(148),i=n(146),l=n(169),u=n.n(l),s=function(){return a.a.createElement("section",{id:"banner"},a.a.createElement("div",{className:"content"},a.a.createElement("header",null,a.a.createElement("h1",null,"Current Weather")),a.a.createElement(u.a,{lat:33.77377,lng:-84.36314,zoom:11,mapField:"precip"})))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,null),a.a.createElement(s,null))}},142:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(144)),o=r(n(145)),i=r(n(7)),l=r(n(51)),u=r(n(52)),s=r(n(4)),c=r(n(0)),p=n(16),f=n(143);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,l=t.onClick,u=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=d(n);return c.default.createElement(p.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(n,{state:s,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=h;t.default=v;var b=function(e,t){window.___navigate(d(e),t)};t.navigate=b;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},144:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},145:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},146:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(0),i=n.n(o),l=function(e){e.siteTitle;return i.a.createElement("header",{id:"header"},i.a.createElement("a",{href:"index.html",className:"logo"},i.a.createElement("strong",null,"Ponce News Network")," - A Name In News"),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-twitter"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-facebook"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-instagram"},i.a.createElement("span",{className:"label"},"Instagram")))))};l.propTypes={siteTitle:a.a.string},l.defaultProps={siteTitle:""},t.a=l},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=(r=n(4))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=s(t).call(this,e))||"object"!==i(a)&&"function"!=typeof a?p(r):a).availableFields={temp:"temperature",precip:"precipitation_rate",precipRadar:"radar",feelsLike:"apparent_temperature",cloudCover:"cloud_cover",wind:"wind_speed",gust:"wind_gust",dewPoint:"dew_point",uvIndex:"uv_index",pressure:"sea_level_pressure",ozone:"ozone",emoji:"emoji"},n.url=n.url.bind(p(p(n))),n.uom=n.uom.bind(p(p(n))),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,a.Component),n=t,(r=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"url",value:function(){var e=this.props,t=e.lat,n=e.lng,r=e.zoom,a=e.units,o=e.fieldControl,i=e.timeControl,l=e.mapField,u=this.availableFields[l];if(!u)throw new Error("Invalid mapField.");var s=encodeURIComponent(window.location.href),c="https://maps.darksky.net/@".concat(u,",").concat(t,",").concat(n,",").concat(r,"\n            ?domain=").concat(s,"\n            &auth=1527719406_d7fc33ad02f802febbb1fdba99657748\n            &embed=true\n            &fieldControl=").concat(o.toString(),"\n            &timeControl=").concat(i.toString(),"\n            &defaultField=").concat(u),p=this.uom(a);return p&&(c+="&defaultUnits=".concat(p)),c.replace(/\s/g,"")}},{key:"uom",value:function(e){switch(this.props.mapField){case"temp":case"feelsLike":case"dewPoint":return"metric"===e?"_c":"_f";case"precip":return"metric"===e?"_mmph":"_inph";case"wind":case"gust":return"metric"===e?"_kmph":"_mph";case"pressure":return"metric"===e?"_hpa":"_inhg";case"ozone":return"_du";default:return""}}},{key:"render",value:function(){var e=this.props,t=(e.lat,e.lng,e.zoom,e.units,e.fieldControl,e.timeControl,e.mapField,e.onLoad),n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["lat","lng","zoom","units","fieldControl","timeControl","mapField","onLoad"]);return a.default.createElement("iframe",l({frameBorder:"0",src:this.url(),onLoad:t},n))}}])&&u(n.prototype,r),o&&u(n,o),t}();f.propTypes={lat:o.default.number.isRequired,lng:o.default.number.isRequired,zoom:o.default.number,mapField:o.default.string,timeControl:o.default.bool,fieldControl:o.default.bool,units:o.default.oneOf(["metric","imperial"]),onLoad:o.default.func},f.defaultProps={zoom:4,mapField:"temp",timeControl:!0,fieldControl:!0,units:"metric",width:"100%",height:"500px"};var d=f;t.default=d}}]);
//# sourceMappingURL=component---src-pages-weather-js-b809b9406137da7fb7fa.js.map