import{c as e,g as t,a as n,b as r}from"./browser-d96520d8.js";import{_ as o}from"./_tslib-158249d5.js";var i=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.StringUtils=void 0;var n=function(){function e(){}return e.isAlpha=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"},e.isDigit=function(e){return e>="0"&&e<="9"},e.stringHashCode=function(e){var t=0;if(0===e.length)return t;for(var n=e.length,r=0;r<n;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return t},e.endsAt=function(e,t){var n=e.length-1,r=t.length-1,o=n-r;if(o<0)return!1;for(;n>=o;n--,r--)if(e[n]!==t[r])return!1;return!0},e.startsAt=function(e,t){return e.substr(0,t.length)===t},e.stringInLowerCase=function(e){return e.toLowerCase()===e},e.stringInUpperCase=function(e){return e.toUpperCase()===e},e.atLeastOneSymbolInUpperCase=function(t){for(var n=0,r=void 0;r=t[n];n++)if(e.stringInUpperCase(r)&&!e.stringInLowerCase(r))return!0;return!1},e.getSymbolFromEnd=function(e,t){return e[e.length-t]},e.trim=function(t,n){if(void 0===n)return e.trimInternal(t,!0,!0);var r=n.join("");return t.replace(new RegExp("(^["+r+"]*)|(["+r+"]*$)","g"),"")},e.trimStart=function(t,n){if(void 0===n)return e.trimInternal(t,!0,!1);var r=n.join("");return t.replace(new RegExp("^["+r+"]*","g"),"")},e.trimEnd=function(t,n){if(void 0===n)return e.trimInternal(t,!1,!0);var r=n.join("");return t.replace(new RegExp("["+r+"]*$","g"),"")},e.getDecimalSeparator=function(){return 1.1.toLocaleString().substr(1,1)},e.repeat=function(e,t){return new Array(t<=0?0:t+1).join(e)},e.isNullOrEmpty=function(e){return!e||!e.length},e.padLeft=function(t,n,r){return e.repeat(r,Math.max(0,n-t.length))+t},e.trimInternal=function(e,t,n){var r=e.length;if(!r)return e;if(r<764833){var o=e;return t&&(o=o.replace(/^\s+/,"")),n&&(o=o.replace(/\s+$/,"")),o}var i=0;if(n)for(;r>0&&/\s/.test(e[r-1]);)r--;if(t&&r>0)for(;i<r&&/\s/.test(e[i]);)i++;return e.substring(i,r)},e}();t.StringUtils=n}));t(i);const u=i;var l=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.numberToStringHex=t.numberToStringBin=t.isOdd=t.isEven=t.isNonNullString=t.isString=t.isNumber=t.boolToString=t.boolToInt=t.isDefined=void 0,t.isDefined=function(e){return null!=e},t.boolToInt=function(e){return e?1:0},t.boolToString=function(e){return e?"1":"0"},t.isNumber=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isNonNullString=function(e){return!!e},t.isEven=function(e){return e%2!=0},t.isOdd=function(e){return e%2==0},t.numberToStringBin=function(e,t){return void 0===t&&(t=0),u.StringUtils.padLeft(e.toString(2),t,"0")},t.numberToStringHex=function(e,t){return void 0===t&&(t=0),u.StringUtils.padLeft(e.toString(16),t,"0")}}));t(l);const a=n(o);var f=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ExtendedMinMax=t.ExtendedMax=t.ExtendedMin=t.MinMaxNumber=t.MinMax=void 0;var n=function(e,t){this.minElement=e,this.maxElement=t};t.MinMax=n;var r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this.maxElement-this.minElement},enumerable:!1,configurable:!0}),t}(n);t.MinMaxNumber=r,t.ExtendedMin=function(e,t){this.minElement=e,this.minValue=t},t.ExtendedMax=function(e,t){this.maxElement=e,this.maxValue=t};var o=function(e){function t(t,n,r,o){var i=e.call(this,t,r)||this;return i.minValue=n,i.maxValue=o,i}return a.__extends(t,e),t}(n);t.ExtendedMinMax=o}));t(f);var s=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Equals=t.Comparers=void 0;var n=function(){function e(){}return e.number=function(e,t){return e-t},e.string=function(e,t){return e===t?0:e>t?1:-1},e.stringIgnoreCase=function(e,t){return(e=e.toLowerCase())===(t=t.toLowerCase())?0:e>t?1:-1},e}();t.Comparers=n;var r=function(){function e(){}return e.simpleType=function(e,t){return e===t},e.object=function(e,t){return e&&t&&(e===t||e.equals(t))},e}();t.Equals=r}));t(s);const c=f,d=s;var v=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ListUtils=void 0;var n=function(){function e(){}return e.remove=function(e,t){var n=e.indexOf(t,0);n>=0&&e.splice(n,1)},e.removeBy=function(e,t){for(var n=e.length,r=0;r<n;r++)if(t(e[r],r))return e.splice(r,1)[0];return null},e.shallowCopy=function(e){return e.slice()},e.deepCopy=function(t){return e.map(t,(function(e){return e.clone()}))},e.initByValue=function(e,t){for(var n=[];e>0;e--)n.push(t);return n},e.initByCallback=function(e,t){for(var n=[],r=0;r<e;r++)n.push(t(r));return n},e.forEachOnInterval=function(e,t){for(var n=e.end,r=e.start;r<n;r++)t(r)},e.reverseForEachOnInterval=function(e,t){for(var n=e.start,r=e.end-1;r>=n;r--)t(r)},e.reducedMap=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=[],i=n;i<r;i++){var u=t(e[i],i);null!==u&&o.push(u)}return o},e.filter=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=[],i=n;i<r;i++){var u=e[i];t(u,i)&&o.push(u)}return o},e.map=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=[],i=n;i<r;i++)o.push(t(e[i],i));return o},e.indexBy=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=n;o<r;o++)if(t(e[o],o))return o;return-1},e.reverseIndexBy=function(e,t,n,r){void 0===n&&(n=e.length-1),void 0===r&&(r=0);for(var o=n;o>=r;o--)if(t(e[o],o))return o;return-1},e.elementBy=function(t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=t.length);var i=e.indexBy(t,n,r,o);return i<0?null:t[i]},e.reverseElementBy=function(t,n,r,o){void 0===r&&(r=t.length-1),void 0===o&&(o=0);var i=e.reverseIndexBy(t,n,r,o);return i<0?null:t[i]},e.last=function(e){return e[e.length-1]},e.setLast=function(e,t){return e[e.length-1]=t},e.incLast=function(e){return++e[e.length-1]},e.decLast=function(e){return--e[e.length-1]},e.equals=function(t,n){return t.length===n.length&&e.allOf2(t,n,(function(e,t){return e.equals(t)}))},e.equalsByReference=function(e,t){var n=e.length;if(n!==e.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0},e.unique=function(t,n,r,o){void 0===r&&(r=n),void 0===o&&(o=function(){});var i=t.length;if(0===i)return[];var u=(t=t.sort(n))[0],l=e.reducedMap(t,(function(e){return 0!==r(u,e)?(u=e,e):(o(e),null)}),1,i);return l.unshift(t[0]),l},e.uniqueNumber=function(e){e=e.sort(d.Comparers.number);for(var t=Number.NaN,n=e.length-1;n>=0;n--)t===e[n]?e.splice(n,1):t=e[n];return e},e.forEach=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=n;o<r;o++)t(e[o],o)},e.forEach2=function(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=e.length);for(var i=r;i<o;i++)n(e[i],t[i],i)},e.reverseForEach=function(e,t,n,r){void 0===n&&(n=e.length-1),void 0===r&&(r=0);for(var o=n;o>=r;o--)t(e[o],o)},e.reverseIndexOf=function(e,t,n,r){void 0===n&&(n=e.length-1),void 0===r&&(r=0);for(var o=n;o>=r;o--)if(e[o]===t)return o;return-1},e.accumulate=function(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=e.length);for(var i=t,u=r;u<o;u++)i=n(i,e[u],u);return i},e.accumulateNumber=function(e,t,n,r,o){void 0===n&&(n=0),void 0===r&&(r=0),void 0===o&&(o=e.length);for(var i=n,u=r;u<o;u++)i+=t(e[u],u,i);return i},e.anyOf=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=n;o<r;o++)if(t(e[o],o))return!0;return!1},e.unsafeAnyOf=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=n;o<r;o++){var i=t(e[o],o);if(i)return i}return null},e.reverseAnyOf=function(e,t,n,r){void 0===n&&(n=e.length-1),void 0===r&&(r=0);for(var o=n;o>=r;o--)if(t(e[o],o))return!0;return!1},e.unsafeReverseAnyOf=function(e,t,n,r){void 0===n&&(n=e.length-1),void 0===r&&(r=0);for(var o=n;o>=r;o--){var i=t(e[o],o);if(i)return i}return null},e.anyOf2=function(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=e.length);for(var i=r;i<o;i++)if(n(e[i],t[i],i))return!0;return!1},e.allOf=function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);for(var o=n;o<r;o++)if(!t(e[o],o))return!1;return!0},e.allOf2=function(e,t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=e.length);for(var i=r;i<o;i++)if(!n(e[i],t[i],i))return!1;return!0},e.allOfOnInterval=function(e,t){for(var n=e.end,r=e.start;r<n;r++)if(!t(r))return!1;return!0},e.addListOnTail=function(e,t){for(var n=0,r=void 0;r=t[n];n++)e.push(r);return e},e.joinLists=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return e.accumulate(n,[],(function(n,r){return e.addListOnTail(n,t(r)),n}))},e.push=function(e,t){return e.push(t),e},e.countIf=function(t,n){return e.accumulateNumber(t,(function(e,t){return n(e,t)?1:0}))},e.clear=function(e){e.splice(0)},e.merge=function(e,t,n,r,o,i){if(void 0===o&&(o=0),void 0===i&&(i=e.length),e=e.slice(o,i),i-o<2)return e;for(var u=(e=e.sort(t))[o],l=[u],a=o+1;a<i;a++){var f=e[a];n(u,f)?r(u,f):l.push(u=f)}return l},e.min=function(t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=t.length);var i=e.minExtended(t,n,r,o);return i?i.minElement:null},e.max=function(t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=t.length);var i=e.maxExtended(t,n,r,o);return i?i.maxElement:null},e.minMax=function(t,n,r,o){void 0===r&&(r=0),void 0===o&&(o=t.length);var i=e.minMaxExtended(t,n,r,o);return i?new c.MinMax(i.minElement,i.maxElement):null},e.minExtended=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=e.length),0===e.length)return null;for(var o=e[n],i=t(o),u=n+1;u<r;u++){var l=e[u],a=t(l);a<i&&(i=a,o=l)}return new c.ExtendedMin(o,i)},e.maxExtended=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=e.length),0===e.length)return null;for(var o=e[n],i=t(o),u=n+1;u<r;u++){var l=e[u],a=t(l);a>i&&(i=a,o=l)}return new c.ExtendedMax(o,i)},e.minMaxExtended=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=e.length),0===e.length)return null;for(var o=e[n],i=o,u=t(o),l=u,a=n+1;a<r;a++){var f=e[a],s=t(f);s<u?(u=s,o=f):s>l&&(l=s,i=f)}return new c.ExtendedMinMax(o,u,i,l)},e.minByCmp=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=e.length),0===e.length)return null;for(var o=e[n],i=n+1;i<r;i++){var u=e[i];t(u,o)<0&&(o=u)}return o},e.maxByCmp=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=e.length),0===e.length)return null;for(var o=e[n],i=n+1;i<r;i++){var u=e[i];t(u,o)>0&&(o=u)}return o},e.minMaxByCmp=function(e,t,n,r){if(void 0===n&&(n=0),void 0===r&&(r=e.length),0===e.length)return null;for(var o=e[n],i=o,u=n+1;u<r;u++){var l=e[u],a=t(l,o);a>0?i=l:a<0&&(o=l)}return new c.MinMax(o,i)},e}();t.ListUtils=n}));t(v);const m=v;var g=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MathUtils=void 0;var n=function(){function e(){}return e.round=function(t,n){void 0===n&&(n=0);var r=e.powFactor[n];return Math.round(t*r)/r},e.numberCloseTo=function(e,t,n){return void 0===n&&(n=1e-5),Math.abs(e-t)<n},e.restrictValue=function(e,t,n){return n<t&&(n=t),e>n?n:e<t?t:e},e.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},e.powFactor=m.ListUtils.initByCallback(20,(function(e){return Math.pow(10,e)})),e.somePrimes=[1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217,1223,1229,1231,1237,1249,1259,1277,1279,1283,1289,1291,1297,1301,1303,1307,1319,1321,1327,1361,1367,1373,1381,1399,1409,1423,1427,1429,1433,1439,1447,1451,1453,1459,1471,1481,1483,1487,1489,1493,1499,1511,1523,1531,1543,1549,1553,1559,1567,1571,1579,1583,1597,1601,1607,1609,1613,1619,1621,1627,1637,1657,1663,1667,1669,1693,1697,1699,1709,1721,1723,1733,1741,1747,1753,1759,1777,1783,1787,1789,1801,1811,1823,1831,1847,1861,1867,1871,1873,1877,1879,1889,1901,1907,1913,1931,1933,1949,1951,1973,1979,1987,1993,1997,1999,2003],e}();t.MathUtils=n}));t(g);const h=l,p=g;var x=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.DomUtils=void 0;var n=function(){function e(){}return e.clearInnerHtml=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},e.setStylePosition=function(e,t){e.left=p.MathUtils.round(t.x,3)+"px",e.top=p.MathUtils.round(t.y,3)+"px"},e.setStyleSize=function(e,t){e.width=p.MathUtils.round(t.width,3)+"px",e.height=p.MathUtils.round(t.height,3)+"px"},e.setStyleSizeAndPosition=function(t,n){e.setStylePosition(t,n),e.setStyleSize(t,n)},e.hideNode=function(e){if(e){var t=e.parentNode;t&&t.removeChild(e)}},e.isHTMLElementNode=function(e){return e.nodeType===Node.ELEMENT_NODE},e.isTextNode=function(e){return e.nodeType===Node.TEXT_NODE},e.isElementNode=function(e){return e.nodeType===Node.ELEMENT_NODE},e.isHTMLTableRowElement=function(e){return"TR"===e.tagName},e.isItParent=function(e,t){if(!e||!t)return!1;for(;t;){if(t===e)return!0;if("BODY"===t.tagName)return!1;t=t.parentNode}return!1},e.getParentByTagName=function(e,t){for(t=t.toUpperCase();e;){if("BODY"===e.tagName)return null;if(e.tagName===t)return e;e=e.parentNode}return null},e.getDocumentScrollTop=function(){var t=r.Browser.IE&&"hidden"===e.getCurrentStyle(document.body).overflow&&document.body.scrollTop>0;return r.Browser.WebKitFamily||r.Browser.Edge||t?r.Browser.MacOSMobilePlatform?window.pageYOffset:r.Browser.WebKitFamily&&document.documentElement.scrollTop||document.body.scrollTop:document.documentElement.scrollTop},e.getDocumentScrollLeft=function(){var t=r.Browser.IE&&"hidden"===e.getCurrentStyle(document.body).overflow&&document.body.scrollLeft>0;return r.Browser.Edge||t?document.body?document.body.scrollLeft:document.documentElement.scrollLeft:r.Browser.WebKitFamily?document.documentElement.scrollLeft||document.body.scrollLeft:document.documentElement.scrollLeft},e.getCurrentStyle=function(e){if(e.currentStyle)return e.currentStyle;if(document.defaultView&&document.defaultView.getComputedStyle){var t=document.defaultView.getComputedStyle(e,null);if(!t&&r.Browser.Firefox&&window.frameElement){for(var n=[],o=window.frameElement;!(t=document.defaultView.getComputedStyle(e,null));)n.push([o,o.style.display]),o.style.setProperty("display","block","important"),o="BODY"===o.tagName?o.ownerDocument.defaultView.frameElement:o.parentNode;t=function(e){if("object"!=typeof e||!h.isDefined(e))return e;var t={};for(var n in e)t[n]=e[n];return t}(t);for(var i=void 0,u=0;i=n[u];u++)i[0].style.display=i[1]}return t}return window.getComputedStyle(e,null)},e.setFocus=function(e){function t(){try{e.focus(),r.Browser.IE&&document.activeElement!==e&&e.focus()}catch(e){}}r.Browser.MacOSMobilePlatform?t():setTimeout((function(){t()}),100)},e.hasClassName=function(e,t){try{var n=t.split(" "),r=e.classList;if(r){for(var o=n.length-1;o>=0;o--)if(!r.contains(n[o]))return!1}else{var i=e.getAttribute&&e.getAttribute("class");if(!i)return!1;var u=i.split(" ");for(o=n.length-1;o>=0;o--)if(u.indexOf(n[o])<0)return!1}return!0}catch(e){return!1}},e.addClassName=function(t,n){if(!e.hasClassName(t,n)){var r=t.getAttribute&&t.getAttribute("class");t.setAttribute("class",""===r?n:r+" "+n)}},e.removeClassName=function(e,t){var n=" "+(e.getAttribute&&e.getAttribute("class"))+" ",r=n.replace(" "+t+" "," ");n.length!==r.length&&e.setAttribute("class",u.StringUtils.trim(r))},e.toggleClassName=function(t,n,r){void 0===r?e.hasClassName(t,n)?e.removeClassName(t,n):e.addClassName(t,n):r?e.addClassName(t,n):e.removeClassName(t,n)},e.pxToInt=function(e){return o(e,parseInt)},e.pxToFloat=function(e){return o(e,parseFloat)},e.getAbsolutePositionY=function(t){function n(t){return Math.round(t.getBoundingClientRect().top+e.getDocumentScrollTop())}return t?r.Browser.IE?function(t){return r.Browser.IE&&null===t.parentNode?0:t.getBoundingClientRect().top+e.getDocumentScrollTop()}(t):r.Browser.Firefox&&r.Browser.Version>=3?n(t):r.Browser.Opera?function(t){var n=!0;t&&e.isHTMLTableRowElement(t)&&t.cells.length>0&&(t=t.cells[0]);for(var r=i(t,!1);null!=t;)r+=t.offsetTop,n||(r-=t.scrollTop),t=t.offsetParent,n=!1;return r+=document.body.scrollTop}(t):r.Browser.NetscapeFamily&&(!r.Browser.Firefox||r.Browser.Version<3)?function(t){for(var n=i(t,!1),o=!0;null!=t;){if(n+=t.offsetTop,o||null==t.offsetParent||(n-=t.scrollTop),!o&&r.Browser.Firefox){var u=e.getCurrentStyle(t);"DIV"===t.tagName&&"visible"!==u.overflow&&(n+=e.pxToInt(u.borderTopWidth))}o=!1,t=t.offsetParent}return n}(t):r.Browser.WebKitFamily||r.Browser.Edge?n(t):function(e){for(var t=0,n=!0;null!=e;)t+=e.offsetTop,n||null==e.offsetParent||(t-=e.scrollTop),n=!1,e=e.offsetParent;return t}(t):0},e.getAbsolutePositionX=function(t){function n(t){return Math.round(t.getBoundingClientRect().left+e.getDocumentScrollLeft())}return t?r.Browser.IE?function(t){return r.Browser.IE&&null===t.parentNode?0:t.getBoundingClientRect().left+e.getDocumentScrollLeft()}(t):r.Browser.Firefox&&r.Browser.Version>=3?n(t):r.Browser.Opera&&r.Browser.Version<=12?function(e){for(var t=!0,n=i(e,!0);null!=e;)n+=e.offsetLeft,t||(n-=e.scrollLeft),e=e.offsetParent,t=!1;return n+=document.body.scrollLeft}(t):r.Browser.NetscapeFamily&&(!r.Browser.Firefox||r.Browser.Version<3)?function(t){for(var n=i(t,!0),o=!0;null!=t;){if(n+=t.offsetLeft,o||null==t.offsetParent||(n-=t.scrollLeft),!o&&r.Browser.Firefox){var u=e.getCurrentStyle(t);"DIV"===t.tagName&&"visible"!==u.overflow&&(n+=e.pxToInt(u.borderLeftWidth))}o=!1,t=t.offsetParent}return n}(t):r.Browser.WebKitFamily||r.Browser.Edge?n(t):function(e){for(var t=0,n=!0;null!=e;)t+=e.offsetLeft,n||null==e.offsetParent||(t-=e.scrollLeft),n=!1,e=e.offsetParent;return t}(t):0},e.isInteractiveControl=function(e){return["A","INPUT","SELECT","OPTION","TEXTAREA","BUTTON","IFRAME"].indexOf(e.tagName)>-1},e.getClearClientHeight=function(t){return t.offsetHeight-(e.getTopBottomPaddings(t)+e.getVerticalBordersWidth(t))},e.getTopBottomPaddings=function(t,n){var r=n||e.getCurrentStyle(t);return e.pxToInt(r.paddingTop)+e.pxToInt(r.paddingBottom)},e.getVerticalBordersWidth=function(t,n){h.isDefined(n)||(n=r.Browser.IE&&9!==r.Browser.MajorVersion&&window.getComputedStyle?window.getComputedStyle(t):e.getCurrentStyle(t));var o=0;return"none"!==n.borderTopStyle&&(o+=e.pxToFloat(n.borderTopWidth)),"none"!==n.borderBottomStyle&&(o+=e.pxToFloat(n.borderBottomWidth)),o},e.getNodes=function(e,t){for(var n=e.all||e.getElementsByTagName("*"),r=[],o=0;o<n.length;o++){var i=n[o];t(i)&&r.push(i)}return r},e.getChildNodes=function(e,t){for(var n=e.childNodes,r=[],o=0;o<n.length;o++){var i=n[o];t(i)&&r.push(i)}return r},e.getNodesByClassName=function(t,n){if(t.querySelectorAll){var r=t.querySelectorAll("."+n),o=[];return r.forEach((function(e){return o.push(e)})),o}return e.getNodes(t,(function(t){return e.hasClassName(t,n)}))},e.getChildNodesByClassName=function(t,n){return t.querySelectorAll?function(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];t(o)&&n.push(o)}return n}(t.querySelectorAll("."+n),(function(e){return e.parentNode===t})):e.getChildNodes(t,(function(t){return!!e.isElementNode(t)&&(h.isNonNullString(t.className)&&e.hasClassName(t,t.className))}))},e.getVerticalScrollBarWidth=function(){if(void 0===e.verticalScrollBarWidth){var t=document.createElement("DIV");t.style.cssText="position: absolute; top: 0px; left: 0px; visibility: hidden; width: 200px; height: 150px; overflow: hidden; box-sizing: content-box",document.body.appendChild(t);var n=document.createElement("P");t.appendChild(n),n.style.cssText="width: 100%; height: 200px;";var r=n.offsetWidth;t.style.overflow="scroll";var o=n.offsetWidth;r===o&&(o=t.clientWidth),e.verticalScrollBarWidth=r-o,document.body.removeChild(t)}return e.verticalScrollBarWidth},e.getHorizontalBordersWidth=function(t,n){h.isDefined(n)||(n=r.Browser.IE&&window.getComputedStyle?window.getComputedStyle(t):e.getCurrentStyle(t));var o=0;return"none"!==n.borderLeftStyle&&(o+=e.pxToFloat(n.borderLeftWidth)),"none"!==n.borderRightStyle&&(o+=e.pxToFloat(n.borderRightWidth)),o},e.getFontFamiliesFromCssString=function(e){return e.split(",").map((function(e){return u.StringUtils.trim(e.replace(/'|"/gi,""))}))},e.getInnerText=function(t){if(r.Browser.Safari&&r.Browser.MajorVersion<=5){null===e.html2PlainTextFilter&&((e.html2PlainTextFilter=document.createElement("DIV")).style.width="0",e.html2PlainTextFilter.style.height="0",e.html2PlainTextFilter.style.overflow="visible",e.html2PlainTextFilter.style.display="none",document.body.appendChild(e.html2PlainTextFilter));var n=e.html2PlainTextFilter;n.innerHTML=t.innerHTML,n.style.display="";var o=n.innerText;return n.style.display="none",o}return r.Browser.NetscapeFamily||r.Browser.WebKitFamily||r.Browser.IE&&r.Browser.Version>=9||r.Browser.Edge?t.textContent:t.innerText},e.html2PlainTextFilter=null,e.verticalScrollBarWidth=void 0,e}();function o(e,t){var n=0;if(h.isDefined(e)&&""!==e)try{var r=e.indexOf("px");r>-1&&(n=t(e.substr(0,r)))}catch(e){}return n}function i(e,t){for(var r=0,o=!0;null!=e&&"BODY"!==e.tagName;){var i=n.getCurrentStyle(e);if("absolute"===i.position)break;o||"DIV"!==e.tagName||""!==i.position&&"static"!==i.position||(r-=t?e.scrollLeft:e.scrollTop),e=e.parentNode,o=!1}return r}t.DomUtils=n}));t(x);export{h as c,x as d,u as s};
