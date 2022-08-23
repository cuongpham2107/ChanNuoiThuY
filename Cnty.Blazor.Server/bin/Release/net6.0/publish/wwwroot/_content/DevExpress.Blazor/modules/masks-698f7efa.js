import{b as e}from"./browser-d96520d8.js";import{k as t}from"./key-ddab4692.js";import{d as n,r as i}from"./disposable-d2c2d283.js";import{u as s,B as o,e as r,l as a}from"./dom-utils-259d2ab3.js";class l{constructor(e,t){this.preloader=e,this.parent=t,this._initialPaddingRight=0,this._initialPaddingLeft=0,this._contentWidth=0,this._internalWidthChanging=!1,this._unsubscriber=()=>!1,this._onHide=new Array,this.preloaderElement=e,this._preloaderWidth=e.offsetWidth,this.parentElement=t}static get(e){return l.preloaderMap.get(e)}static create(e,t){let n=l.get(e);return n||(n=new l(e,t),l.preloaderMap.set(e,n)),n}static remove(e){const t=l.preloaderMap.get(e);t&&(t.hide(),l.preloaderMap.delete(e))}display(e){this.init(e),this.preloaderElement.style.top=(this.parentElement.offsetHeight-this.preloaderElement.offsetHeight)/2+"px",this.calculateHorizontalPosition(this.parentElement.clientWidth-this._initialPaddingLeft-this._initialPaddingRight),this._internalWidthChanging=!0,this._unsubscriber=this.subscribeOnParentWidthChange(),this.preloaderElement.classList.remove("dxbs-preloader-initial")}hide(){this.preloaderElement.onanimationend=()=>{this.preloaderElement.style.display="none",s(this._unsubscriber),this.parentElement.style.paddingRight=this._initialPaddingRight+"px",this._onHide.forEach((e=>{e()})),this._onHide=[]},this.preloaderElement.classList.add("dxbs-preloader-success")}registerOnHideAction(e){this._onHide.push(e)}changeInitialPaddingRight(e){this._initialPaddingRight=e}init(e){this._contentWidth=e;const t=getComputedStyle(this.parentElement);this._initialPaddingRight=parseFloat(t.paddingRight),this._initialPaddingLeft=parseFloat(t.paddingLeft)}subscribeOnParentWidthChange(){return o(this.parentElement,(e=>{this._internalWidthChanging?this._internalWidthChanging=!1:this.calculateHorizontalPosition(e)}))}calculateHorizontalPosition(e){const t=parseFloat(this.parentElement.style.paddingRight);if(0===e||t===this._initialPaddingRight&&e-this._preloaderWidth<0)return this.preloaderElement.style.visibility="hidden",void(t!==this._initialPaddingRight&&(this._internalWidthChanging=!0,this.parentElement.style.paddingRight=this._initialPaddingRight+"px"));if(this.preloaderElement.style.visibility="visible",e<this._preloaderWidth+this._contentWidth)this.preloaderElement.style.left="auto",this.preloaderElement.style.right=this._initialPaddingRight+"px",t!==this._initialPaddingRight+this._preloaderWidth&&(this.parentElement.style.paddingRight=this._initialPaddingRight+this._preloaderWidth+"px",this._internalWidthChanging=!0);else{this.preloaderElement.style.left="calc("+(this._contentWidth+this._initialPaddingLeft)+"px + "+(0===this._contentWidth?"0":"0.5")+"em)",t!==this._initialPaddingRight&&(this._internalWidthChanging=!0,this.parentElement.style.paddingRight=this._initialPaddingRight+"px")}}}let d;l.preloaderMap=new Map;class h{constructor(){this.init_new_manager=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:GetNewManager"),this.keyPress=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:KeyPress"),this.clear=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:Clear"),this.paste=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:Paste"),this.getValue=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:GetValue"),this.setValue=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:SetValue"),this.setSelection=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:SetSelection"),this.disposeMaskManager=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:DisposeMaskManager"),this.updateProperties=window.Module.mono_bind_static_method("[DevExpress.Blazor.WebAssembly.Masks] MaskWrapper.MasksCollection:UpdateProperties")}}class p{constructor(e){e.includes("\\")&&(e=e.split("\\").join("\\\\")),this.info=JSON.parse(e)}get selectionStart(){return this.info.selectionStart}get selectionEnd(){return this.info.selectionEnd}get value(){return this.info.value}get displayText(){return this.info.displayText}}class u{constructor(e,t){this.onDisposeActions=new Array,this.customWheelProcessing=!1,this.suppressFocusEvents=!1,this.focusByMouse=!1,this.internalButtonsFocusEventsBlocked=!1,this.inputElement=e,this.dotnetHelper=t}initializeEvents(e){const t=t=>{e.onKeyDown(t)},n=t=>{e.onKeyUp(t)},s=t=>{e.onClick(t)},o=t=>{e.onPointerDown(t)},r=t=>{e.onCut(t)},l=t=>{e.onPaste(t)},d=t=>{e.onDrop(t)},h=t=>{e.shouldProcessOnFocus()&&e.onFocusByTab(e.inputElement.value?e.inputElement.value.length:0),e.focusByMouse=!1},p=t=>{e.focusByMouse=!1,e.onFocusOut(t)},u=t=>{e.onWheel(t,e)},c=t=>{e.checkValidInput()&&(e.focusByMouse=!0)};this.inputElement.addEventListener("keydown",t),this.inputElement.addEventListener("keyup",n),this.inputElement.addEventListener("click",s),this.inputElement.addEventListener("pointerdown",o),this.inputElement.addEventListener("cut",r),this.inputElement.addEventListener("paste",l),this.inputElement.addEventListener("drop",d),this.inputElement.addEventListener("focus",h),this.inputElement.addEventListener("focusout",p),this.inputElement.addEventListener("wheel",u,{passive:!1}),this.inputElement.addEventListener("mousedown",c);const m=a(this.inputElement,".dxbs-input-group");m&&this.blockButtonsFocusEvents(m,this),i(this.inputElement,(()=>{e.inputElement.removeEventListener("keydown",t),e.inputElement.removeEventListener("keyup",n),e.inputElement.removeEventListener("click",s),e.inputElement.removeEventListener("pointerdown",o),e.inputElement.removeEventListener("cut",r),e.inputElement.removeEventListener("paste",l),e.inputElement.removeEventListener("drop",d),e.inputElement.removeEventListener("focus",h),e.inputElement.removeEventListener("focusout",p),e.inputElement.removeEventListener("wheel",u),e.inputElement.removeEventListener("mousedown",c),e.dispose()}))}blockButtonsFocusEvents(t,n){if(e.Browser.MobileUI||this.internalButtonsFocusEventsBlocked)return;const i=t.querySelectorAll(".dxbs-btn-group button");if(i&&i.length>0){const e=()=>{n.setSuppressFocusEvents(!0)},t=()=>{n.setSuppressFocusEvents(!1),n.focusByMouse=!0};i.forEach((n=>{n.addEventListener("mousedown",e),n.addEventListener("focusout",t),this.onDisposeActions.push((()=>{n.removeEventListener("mousedown",e),n.removeEventListener("focusout",t)}))})),this.internalButtonsFocusEventsBlocked=!0}}setSuppressFocusEvents(e){this.suppressFocusEvents=e,this.inputElement&&(this.inputElement.suppressFocusEvents=e)}dispose(){for(;this.onDisposeActions.length>0;){const e=this.onDisposeActions.pop();e&&e()}}disposeMaskManagerCore(){}checkValidInsertion(e,n){return e.keyCode===t.KeyCode.Backspace||e.keyCode===t.KeyCode.Delete||e.keyCode===t.KeyCode.Home||e.keyCode===t.KeyCode.Enter||e.keyCode===t.KeyCode.End||(e.keyCode===t.KeyCode.Up||e.keyCode===t.KeyCode.Down)&&!n||e.keyCode===t.KeyCode.Left||e.keyCode===t.KeyCode.Right||e.ctrlKey&&(e.keyCode===t.KeyCode.Key_a||e.keyCode===t.KeyCode.Key_z)||!e.ctrlKey&&1===e.key.length}shouldProcessOnFocus(){return!this.suppressFocusEvents&&!e.Browser.MobileUI&&!this.focusByMouse&&this.checkValidInput()}checkValidInput(){return!this.inputElement.disabled&&!this.inputElement.readOnly}canHandleMouseWheel(){return this.checkValidInput()&&document.activeElement===this.inputElement&&!this.customWheelProcessing}}class c extends u{constructor(e,t,n,i){super(e,t),this.managerId=-1,this.isWheelScrolling={timer:0},this.boundOnPointerUpHandler=this.onPointerUp.bind(this),this.maskProperties=n,this.onInputMode=i,this.customWheelProcessing=n.customWheelProcessing}initializeMonoMasks(e,t){return new Promise(((n,i)=>{this.maskProperties&&this.maskProperties.editMask&&0!==this.maskProperties.maskMode?(this.inputElement.value=e,this.displayPreloader(),void 0!==d?(this.initializeInternal(t),n()):(c.maskLoadingPromise||this.loadMasks(),c.maskLoadingPromise.then((()=>{this.initializeInternal(t),n()})))):i()}))}initializeInternal(e){n(this.inputElement),this.managerId=d.init_new_manager(this.maskProperties.maskMode,this.maskProperties.editMask,this.maskProperties.placeholder,this.maskProperties.lcid,this.maskProperties.numberFormatSerialized,this.maskProperties.flags,this.maskProperties.valueString,this.maskProperties.valueType,e),this.initializeEvents(this),this.fadeOutPreloader(),this.inputElement.setAttribute("data-dx-client-mask-initialized","true")}loadMasks(){c.maskLoadingPromise||(c.maskLoadingPromise=new Promise(((e,t)=>{const n=document.createElement("script");n.src="_content/DevExpress.Blazor.Server.WebAssembly/dotnet.js",n.onload=function(){!function t(){window.MONO.mono_wasm_runtime_is_ready?(document.head.removeChild(n),d=new h,e(!0)):window.setTimeout(t,100)}()},document.head.appendChild(n)})))}displayPreloader(){const e=a(this.inputElement,".dxbs-input-group");if(!e)return;const t=e.querySelector(".dxbs-preloader-container"),n=l.create(t,this.inputElement);if(n){this.blockEvents(this.inputElement,n);let t=0;if(this.inputElement.value){const n=document.createElement("span");n.style.visibility="hidden",n.style.width="auto",n.style.position="fixed",n.innerHTML=this.inputElement.value,n.style.fontSize=getComputedStyle(this.inputElement).fontSize,e.append(n),t=n.clientWidth,n.remove()}n.display(t)}}blockEvents(e,t){function n(e){e.preventDefault(),e.stopPropagation()}const i=a(e,".dxbs-input-group");let s=[];i&&(s=i.querySelectorAll("button"),s&&s.forEach((e=>{e.addEventListener("click",n),e.addEventListener("mousedown",n),e.addEventListener("mouseup",n)}))),e.addEventListener("keydown",n),e.addEventListener("click",n),e.addEventListener("cut",n),e.addEventListener("paste",n),t.registerOnHideAction((function(){e.removeEventListener("keydown",n),e.removeEventListener("click",n),e.removeEventListener("cut",n),e.removeEventListener("paste",n),s&&s.forEach((e=>{e.removeEventListener("click",n),e.removeEventListener("mousedown",n),e.removeEventListener("mouseup",n)}))}))}fadeOutPreloader(){const e=a(this.inputElement,".dxbs-input-group");if(!e)return;const t=e.querySelector(".dxbs-preloader-container");l.remove(t)}applyMaskInfo(e,t,n=""){this.checkValidInput()&&(this.inputElement.value=n||e.displayText,t&&this.dotnetHelper&&this.dotnetHelper.invokeMethodAsync("SetValue",e.value)),this.inputElement.setAttribute("dx-mask-value",e.value),document.activeElement===this.inputElement&&this.inputElement.setSelectionRange(e.selectionStart,e.selectionEnd)}onKeyDown(n){if(e.Browser.AndroidMobilePlatform&&n.preventDefault(),!this.checkValidInsertion(n,this.maskProperties.customArrowsUpDownProcessing)||!this.checkValidInput()||e.Browser.AndroidMobilePlatform)return;n.preventDefault();const i=new p(d.keyPress(this.managerId,n.key,n.shiftKey,n.ctrlKey));this.applyMaskInfo(i,this.onInputMode||n.keyCode===t.KeyCode.Enter),n.keyCode!==t.KeyCode.Left&&n.keyCode!==t.KeyCode.Right&&n.keyCode!==t.KeyCode.Home&&n.keyCode!==t.KeyCode.End||(this.setSuppressFocusEvents(!0),this.inputElement.blur(),this.inputElement.focus(),this.setSuppressFocusEvents(!1))}onKeyUp(n){if(this.checkValidInput())if(e.Browser.AndroidMobilePlatform){let e=n.key;229===n.keyCode&&(e=this.inputElement.value.substring(this.inputElement.selectionStart-1,this.inputElement.selectionStart));const i=new p(d.keyPress(this.managerId,e,!1,!1));this.applyMaskInfo(i,this.onInputMode||n.keyCode===t.KeyCode.Enter)}else n.keyCode!==t.KeyCode.Up&&n.keyCode!==t.KeyCode.Down||this.dotnetHelper.invokeMethodAsync("SetValue",this.inputElement.getAttribute("dx-mask-value"))}onClick(e){if(!this.checkValidInput())return;const t=new p(d.setSelection(this.managerId,this.inputElement.selectionStart,this.inputElement.selectionEnd));this.inputElement.selectionStart===this.inputElement.selectionEnd&&this.applyMaskInfo(t,!1)}onPointerDown(e){this.checkValidInput()&&document.addEventListener("pointerup",this.boundOnPointerUpHandler)}onPointerUp(e){if(!this.checkValidInput())return;const t=new p(d.setSelection(this.managerId,this.inputElement.selectionStart,this.inputElement.selectionEnd));this.inputElement.selectionStart!==this.inputElement.selectionEnd&&this.applyMaskInfo(t,!1),document.removeEventListener("pointerup",this.onPointerUp)}onCut(e){if(!this.checkValidInput())return;e.preventDefault(),document.execCommand("copy");const t=new p(d.clear(this.managerId,this.inputElement.selectionStart,this.inputElement.selectionEnd));this.applyMaskInfo(t,this.onInputMode)}onPaste(e){if(!this.checkValidInput())return;e.preventDefault();const t=e.clipboardData,n=null==t?void 0:t.getData("Text"),i=new p(d.paste(this.managerId,n));this.applyMaskInfo(i,this.onInputMode)}onDrop(e){e.preventDefault()}onFocusByTab(e){const t=new p(d.setSelection(this.managerId,0,e));this.applyMaskInfo(t,!1)}onFocusOut(e){if(!this.checkValidInput()||this.suppressFocusEvents)return;e.preventDefault();const t=new p(d.getValue(this.managerId));this.dotnetHelper.invokeMethodAsync("OnFocusLost",t.value),this.applyMaskInfo(t,!1)}onWheel(e,t){if(!this.canHandleMouseWheel())return;e.preventDefault(),window.clearTimeout(this.isWheelScrolling.timer);const n=new p(d.keyPress(this.managerId,e.deltaY<0?"ArrowUp":"ArrowDown",!1,!1));this.applyMaskInfo(n,!1),this.isWheelScrolling.timer=setTimeout((function(){t.dotnetHelper.invokeMethodAsync("SetValue",t.inputElement.getAttribute("dx-mask-value"))}),500)}disposeMaskManagerCore(){const e=a(this.inputElement,".dxbs-input-group");if(e){const t=e.querySelector(".dxbs-preloader-container");l.remove(t)}void 0!==d&&d.disposeMaskManager(this.managerId)}setValue(e,t,n){const i=new p(d.setValue(this.managerId,e,t));this.applyMaskInfo(i,!1,n)}updateMask(e,t){this.maskProperties=e;const n=new p(d.updateProperties(this.managerId,e.maskMode,e.editMask,e.placeholder,e.lcid,e.numberFormatSerialized,e.flags,e.valueString,e.valueType));this.applyMaskInfo(n,!1,t)}}c.maskLoadingPromise=null;class m extends u{constructor(e,t,n,i){super(e,t),this.boundOnPointerUpHandler=this.onPointerUp.bind(this),this.customArrowsProcessing=n,this.customWheelProcessing=i}initialize(e){this.inputElement.value=e,this.initializeEvents(this)}onKeyDown(n){this.checkValidInsertion(n,this.customArrowsProcessing)&&this.checkValidInput()&&!e.Browser.AndroidMobilePlatform&&(n.preventDefault(),this.dotnetHelper.invokeMethodAsync("KeyDown",n.key,n.keyCode,n.shiftKey,n.ctrlKey),n.keyCode!==t.KeyCode.Left&&n.keyCode!==t.KeyCode.Right&&n.keyCode!==t.KeyCode.Home&&n.keyCode!==t.KeyCode.End||(this.setSuppressFocusEvents(!0),this.inputElement.blur(),this.inputElement.focus(),this.setSuppressFocusEvents(!1)))}onKeyUp(n){if(e.Browser.AndroidMobilePlatform){let e=n.key;229===n.keyCode&&(e=this.inputElement.value.substring(this.inputElement.selectionStart-1,this.inputElement.selectionStart)),229===n.keyCode&&""===e||this.dotnetHelper.invokeMethodAsync("KeyDown",e,n.keyCode,!1,!1)}else n.keyCode!==t.KeyCode.Up&&n.keyCode!==t.KeyCode.Down||this.customArrowsProcessing||(n.preventDefault(),this.dotnetHelper.invokeMethodAsync("KeyUp",n.keyCode))}onClick(e){this.checkValidInput()&&this.dotnetHelper.invokeMethodAsync("SetSelection",this.inputElement.selectionStart,this.inputElement.selectionEnd)}onPointerDown(e){this.checkValidInput()&&document.addEventListener("pointerup",this.boundOnPointerUpHandler)}onPointerUp(e){this.checkValidInput()&&(this.inputElement.selectionStart!==this.inputElement.selectionEnd&&this.dotnetHelper.invokeMethodAsync("SetSelection",this.inputElement.selectionStart,this.inputElement.selectionEnd),document.removeEventListener("pointerup",this.onPointerUp))}onCut(e){this.checkValidInput()&&(e.preventDefault(),document.execCommand("copy"),this.dotnetHelper.invokeMethodAsync("Clear",this.inputElement.selectionStart,this.inputElement.selectionEnd))}onPaste(e){if(!this.checkValidInput())return;e.preventDefault();const t=e.clipboardData,n=null==t?void 0:t.getData("Text");this.dotnetHelper.invokeMethodAsync("Paste",n)}onDrop(e){e.preventDefault()}onFocusByTab(e){this.dotnetHelper.invokeMethodAsync("SetSelection",0,e)}onFocusOut(e){this.checkValidInput()&&!this.suppressFocusEvents&&(this.inputElement.hasAttribute("date-process-focusout-via-component")||(e.preventDefault(),this.dotnetHelper.invokeMethodAsync("OnFocusLost",null).catch((e=>console.log(e)))))}onWheel(e,t){this.canHandleMouseWheel()&&(e.preventDefault(),this.dotnetHelper.invokeMethodAsync("OnMouseWheel",e.deltaY<0))}}const E=new Map;function k(e,t,n,i,s,o){return new Promise(((r,a)=>{let l=E.get(e);l||(l=new c(e,n,t,i),l.initializeMonoMasks(s,o).then((()=>{E.set(e,l),r()})).catch((()=>a())))}))}function y(e,t,n,i,s){if(!(e=r(e)))return;let o=E.get(e);o||(o=new m(e,t,i,s),o.initialize(n),E.set(e,o))}function v(e,t,n,i){const s=E.get(e);s&&s.setValue(t,n,i)}function g(e,t,n){const i=E.get(t);i&&i.updateMask(e,n)}function M(e,t,n,i){e&&(e.value=t,document.activeElement===e&&e.setSelectionRange(n,i))}function f(e,t){const n=E.get(e);n&&n.blockButtonsFocusEvents(t,n)}function b(e){if(e=r(e)){n(e);E.get(e)&&E.delete(e)}return Promise.resolve("ok")}const P={initMonoMasks:k,setValueToMonoMaskManager:v,initServerMasks:y,applyMaskParameters:M,updateRemoteMask:g,dispose:b},w=Object.freeze({__proto__:null,initMonoMasks:k,initServerMasks:y,setValueToMonoMaskManager:v,updateRemoteMask:g,applyMaskParameters:M,blockFocusEventsForButtons:f,dispose:b,default:P});export{l as P,w as a,f as b,P as m};