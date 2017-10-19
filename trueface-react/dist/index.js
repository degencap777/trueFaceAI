module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.Enroll=r.Enroll;var o=n(3);e.Match=o.Match,n(4)},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={height:"640",src:"",stream:new MediaStream,width:"480"},e.streaming=!1,e.photos=[],e}return r(e,t),e.prototype.render=function(){var t=this,e="host "+(this.props.className||"");return o.createElement("div",{className:e},o.createElement("section",{className:"photos"},this.photos.map(function(t,e){return o.createElement("img",{key:e,alt:"img"+e,src:"data:image/png;base64,"+t})})),o.createElement("video",{autoPlay:!0,ref:function(e){return t.video=e},width:this.state.width,height:this.state.height,src:this.state.src},"Video stream not available."),o.createElement("section",{className:"toolbar"},o.createElement("button",{onClick:function(e){return t.takePhoto()}},"Take photos")),o.createElement("canvas",{ref:function(e){return t.canvas=e}}))},e.prototype.componentDidMount=function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(e){var n=window.URL.createObjectURL(e);t.setState({stream:e,src:n})}).catch(function(t){throw new Error(t.name)}),null!==this.video&&this.video.addEventListener("canplay",this.videoCanPlay.bind(this),!1)},e.prototype.componentWillUnmount=function(){this.state.stream&&(this.state.stream.stop?this.state.stream.stop():(this.state.stream.getVideoTracks&&this.state.stream.getVideoTracks().map(function(t){return t.stop()}),this.state.stream.getAudioTracks&&this.state.stream.getAudioTracks().map(function(t){return t.stop()}))),this.state.src&&window.URL.revokeObjectURL(this.state.src)},e.prototype.videoCanPlay=function(t){if(!this.streaming){if(!this.video||!this.canvas)return;var e=""+this.video.videoHeight/(this.video.videoWidth/+this.state.width);this.video.setAttribute("width",this.state.width),this.canvas.setAttribute("width",this.state.width),this.video.setAttribute("height",""+e),this.canvas.setAttribute("height",""+e),this.setState({height:e}),this.streaming=!0}},e.prototype.takePhoto=function(){if(this.canvas&&this.video){var t=this.canvas.getContext("2d");if(t){t.drawImage(this.video,0,0,+this.state.width,+this.state.height);var e=this.canvas.toDataURL("image/jpeg"),n=e.replace("data:image/jpeg;base64,","");this.photos.push(n),this.forceUpdate(),this.props.onPhotoTaken&&this.props.onPhotoTaken(n)}}},e}(o.Component);e.Enroll=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={height:"640",src:"",stream:new MediaStream,width:"480"},e.streaming=!1,e}return r(e,t),e.prototype.render=function(){var t=this,e="host "+(this.props.className||"");return o.createElement("div",{className:e},o.createElement("video",{autoPlay:!0,ref:function(e){return t.video=e},width:this.state.width,height:this.state.height,src:this.state.src},"Video stream not available."),o.createElement("section",{className:"toolbar"},o.createElement("button",{onClick:function(e){return t.takePhoto()}},"Take photo")),o.createElement("canvas",{ref:function(e){return t.canvas=e}}))},e.prototype.componentDidMount=function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(e){var n=window.URL.createObjectURL(e);t.setState({stream:e,src:n})}).catch(function(t){throw new Error(t.name)}),null!==this.video&&this.video.addEventListener("canplay",this.videoCanPlay.bind(this),!1)},e.prototype.componentWillUnmount=function(){this.state.stream&&(this.state.stream.stop?this.state.stream.stop():(this.state.stream.getVideoTracks&&this.state.stream.getVideoTracks().map(function(t){return t.stop()}),this.state.stream.getAudioTracks&&this.state.stream.getAudioTracks().map(function(t){return t.stop()}))),this.state.src&&window.URL.revokeObjectURL(this.state.src)},e.prototype.videoCanPlay=function(t){if(!this.streaming){if(!this.video||!this.canvas)return;var e=""+this.video.videoHeight/(this.video.videoWidth/+this.state.width);this.video.setAttribute("width",this.state.width),this.canvas.setAttribute("width",this.state.width),this.video.setAttribute("height",""+e),this.canvas.setAttribute("height",""+e),this.setState({height:e}),this.streaming=!0}},e.prototype.takePhoto=function(){if(this.canvas&&this.video){var t=this.canvas.getContext("2d");if(t){t.drawImage(this.video,0,0,+this.state.width,+this.state.height);var e=this.canvas.toDataURL("image/jpeg"),n=e.replace("data:image/jpeg;base64,","");this.props.onPhotoTaken&&this.props.onPhotoTaken(n)}}},e}(o.Component);e.Match=i},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(7)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(6)(void 0),e.push([t.i,".host {\n    position: relative;\n        max-width: 640px;\n}\n.host canvas {\n    display: none;\n}\n.host .toolbar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n}\n.host video {\n    display: block;\n    width: 640px;\n    height: 480px;\n    object-fit: cover;\n}\n.host button {\n    padding: 8px;\n    margin: 8px;\n}\n.host .photos {\n    overflow-y: scroll;\n    opacity: .3;\n    background-color: #ddd;\n    border: 1px solid #333;\n    position: absolute;\n    width: 100px;\n    height: 450px;\n    display: block;\n    z-index: 10;\n\n}\n.host .photos img {\n    width: 100%;\n}",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=l[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(h(r.parts[i],e))}else{for(var s=[],i=0;i<r.parts.length;i++)s.push(h(r.parts[i],e));l[r.id]={id:r.id,refs:1,parts:s}}}}function o(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a=i[1],c=i[2],u=i[3],h={css:a,media:c,sourceMap:u};r[s]?r[s].parts.push(h):n.push(r[s]={id:s,parts:[h]})}return n}function i(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),i(t,e),e}function u(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function h(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=g++;n=b||(b=a(e)),r=p.bind(null,n,u,!1),o=p.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=d.bind(null,n,e),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=f.bind(null,n),o=function(){s(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function p(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function f(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var l={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){if(void 0===e[n]){var r=t.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[n]=r}return e[n]}}(function(t){return document.querySelector(t)}),b=null,g=0,y=[],w=n(8);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=o(t,e);return r(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var a=n[s],c=l[a.id];c.refs--,i.push(c)}if(t){r(o(t,e),e)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete l[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return t;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);