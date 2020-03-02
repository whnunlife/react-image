(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("@babel/runtime/helpers/extends"),require("@babel/runtime/helpers/objectWithoutProperties"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/assertThisInitialized"),require("@babel/runtime/helpers/inherits"),require("@babel/runtime/helpers/defineProperty"),require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["@babel/runtime/helpers/extends","@babel/runtime/helpers/objectWithoutProperties","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/assertThisInitialized","@babel/runtime/helpers/inherits","@babel/runtime/helpers/defineProperty","react","prop-types"],b):(a=a||self,a.Img=b(a._extends,a._objectWithoutProperties,a._classCallCheck,a._createClass,a._possibleConstructorReturn,a._getPrototypeOf,a._assertThisInitialized,a._inherits,a._defineProperty,a.React,a.propTypes))})(this,function(a,b,c,d,e,f,g,h,j,k,l){'use strict';function m(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function n(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?m(Object(b),!0).forEach(function(c){j(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):m(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}a=a&&a.hasOwnProperty("default")?a["default"]:a,b=b&&b.hasOwnProperty("default")?b["default"]:b,c=c&&c.hasOwnProperty("default")?c["default"]:c,d=d&&d.hasOwnProperty("default")?d["default"]:d,e=e&&e.hasOwnProperty("default")?e["default"]:e,f=f&&f.hasOwnProperty("default")?f["default"]:f,g=g&&g.hasOwnProperty("default")?g["default"]:g,h=h&&h.hasOwnProperty("default")?h["default"]:h,j=j&&j.hasOwnProperty("default")?j["default"]:j;var o="default"in k?k["default"]:k,p={},q={imageRef:l.any,loader:l.node,unloader:l.node,decode:l.bool,crossorigin:l.string,src:l.oneOfType([l.string,l.array]),container:l.func,loaderContainer:l.func,unloaderContainer:l.func},r=function(i){function k(a){var b;c(this,k),b=e(this,f(k).call(this,a)),j(g(b),"srcToArray",function(a){return(Array.isArray(a)?a:[a]).filter(function(a){return a})}),j(g(b),"onLoad",function(){p[b.sourceList[b.state.currentIndex]]=!0,b.i&&b.setState({isLoaded:!0})}),j(g(b),"onError",function(){if(p[b.sourceList[b.state.currentIndex]]=!1,!b.i)return!1;for(var a,c=b.state.currentIndex+1;c<b.sourceList.length;c++){if(a=b.sourceList[c],!(a in p)){b.setState({currentIndex:c});break}if(!0===p[a])return b.setState({currentIndex:c,isLoading:!1,isLoaded:!0}),!0;!1===p[a]}return c===b.sourceList.length?b.setState({isLoading:!1}):void b.loadImg()}),j(g(b),"loadImg",function(){b.i=new Image,b.i.src=b.sourceList[b.state.currentIndex],b.props.crossorigin&&(b.i.crossOrigin=b.props.crossorigin),b.props.decode&&b.i.decode?b.i.decode().then(b.onLoad)["catch"](b.onError):(b.i.onload=b.onLoad,b.i.onerror=b.onError)}),j(g(b),"unloadImg",function(){b.i.onerror=null,b.i.onload=null,b.i.src="";try{delete b.i.src}catch(a){}delete b.i}),b.loaderContainer=a.loaderContainer||a.container,b.unloaderContainer=a.unloaderContainer||a.container,b.sourceList=b.srcToArray(b.props.src);for(var d=0;d<b.sourceList.length&&!!(b.sourceList[d]in p);d++)if(!0===p[b.sourceList[d]])return b.state={currentIndex:d,isLoading:!1,isLoaded:!0},e(b);return b.state=b.sourceList.length?{currentIndex:0,isLoading:!0,isLoaded:!1}:{isLoading:!1,isLoaded:!1},b}return h(k,i),d(k,[{key:"componentDidMount",value:function(){this.state.isLoading&&this.loadImg()}},{key:"componentWillUnmount",value:function(){this.i&&this.unloadImg()}},{key:"UNSAFE_componentWillReceiveProps",value:function(a){var b=this;this.loaderContainer=a.loaderContainer||a.container,this.unloaderContainer=a.unloaderContainer||a.container;var c=this.srcToArray(a.src),d=c.filter(function(a){return-1===b.sourceList.indexOf(a)}),e=this.sourceList.filter(function(a){return-1===c.indexOf(a)});if(d.length||e.length){if(this.sourceList=c,!c.length)return this.setState({isLoading:!1,isLoaded:!1});this.setState({currentIndex:0,isLoading:!0,isLoaded:!1},this.loadImg)}}},{key:"render",value:function(){var c=this.props,d=c.container,e=c.loader,f=c.unloader,g=c.src,h=c.decode,i=c.loaderContainer,j=c.unloaderContainer,k=c.mockImage,l=c.imageRef,m=b(c,["container","loader","unloader","src","decode","loaderContainer","unloaderContainer","mockImage","imageRef"]);if(this.state.isLoaded){var p=n({},{src:this.sourceList[this.state.currentIndex]},{},m);return d(o.createElement("img",a({ref:l},p)))}return!this.state.isLoaded&&this.state.isLoading?e?this.loaderContainer(e):null:this.state.isLoaded||this.state.isLoading?void 0:f?this.unloaderContainer(f):null}}]),k}(k.Component);return j(r,"defaultProps",{loader:!1,unloader:!1,decode:!0,src:[],container:function(a){return a}}),r.propTypes={},r});
//# sourceMappingURL=index.js.map