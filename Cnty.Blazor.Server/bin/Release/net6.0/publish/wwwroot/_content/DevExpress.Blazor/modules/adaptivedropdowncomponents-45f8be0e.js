import{registeredComponents as e}from"./dropdowncomponents-c109fb4b.js";import{registeredComponents as t}from"./modalcomponents-f2305cca.js";import{a as i}from"./_tslib-158249d5.js";import{i as o}from"./logicaltreehelper-15991dcb.js";import{s as r,$ as s}from"./lit-element-ee330000.js";import{e as a}from"./property-d3853089.js";import{n as p}from"./custom-element-bd7061f2.js";import{d as n}from"./events-interseptor-90b4f6d7.js";import"./popup-1e273e52.js";import"./rect-7fc5c2ef.js";import"./point-9c6ab88a.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./layouthelper-4b19d191.js";import"./positiontracker-dba18a16.js";import"./elementobserver-5f004683.js";import"./supportcaptureelement-9559d03a.js";import"./popuproot-8d4e49e8.js";import"./branch-9dee15d3.js";import"./data-qa-utils-8be7c726.js";import"./capturemanager-c7d5aef8.js";import"./simpleevent-84045703.js";import"./locker-c40478e6.js";import"./eventhelper-8570b930.js";import"./dx-ui-element-c4622983.js";import"./lit-element-base-f94f8541.js";import"./nameof-factory-64d95f5b.js";import"./custom-events-helper-18f7786a.js";import"./thumb-b78dcc42.js";import"./query-44b9267f.js";import"./popupbasedialog-81a89101.js";import"./popupportal-58b89dfc.js";import"./browser-d96520d8.js";import"./dom-39effdbe.js";var d;let l=d=class extends r{constructor(){super(...arguments),this.slotChangedHandler=this.handleSlotChanged.bind(this),this.interceptorSlotChangedHandler=this.handleInterceptorSlotChange.bind(this),this.interceptor=null,this.resizeHandler=this.handleResize.bind(this),this._adaptivityEnabled=!1,this._popupAccessor=null,this.adaptiveWidth=576}get popup(){var e;return(null===(e=this._popupAccessor)||void 0===e?void 0:e.popup)||null}get adaptivityEnabled(){return this._adaptivityEnabled}set adaptivityEnabled(e){this._adaptivityEnabled!==e&&(this._adaptivityEnabled=e,this.raiseEnableAdaptivity(e))}render(){return s`
            <slot @slotchange=${this.slotChangedHandler}></slot>
            <slot name="interceptor" @slotchange=${this.interceptorSlotChangedHandler}></slot>
        `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.resizeHandler,{passive:!0}),setTimeout((()=>this.updateAdaptivity()))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.resizeHandler)}handleResize(e){this.updateAdaptivity()}updateAdaptivity(){this.adaptivityEnabled=window.innerWidth<=this.adaptiveWidth}handleSlotChanged(e){const t=e.target.assignedNodes();this._popupAccessor=d.findPopupAccessor(t)}handleInterceptorSlotChange(e){const t=e.target.assignedNodes();this.interceptor=t[0]}raiseEvent(e,t){var i;null===(i=this.interceptor)||void 0===i||i.raise(e,t)}raiseEnableAdaptivity(e){this.raiseEvent("adaptivityChanged",{enabled:e})}static findPopupAccessor(e){const t=e.find((e=>o(e,(()=>["popup","addEventListener","removeEventListener"]))));return t||null}};function m(){}i([a({type:Number,attribute:"adaptive-width"})],l.prototype,"adaptiveWidth",void 0),l=d=i([p("dxbl-adaptive-dropdown")],l);const c={dropDownRegisteredComponents:e,modalRegisteredComponents:t,init:m,dxAdaptiveDropDownTagName:"dxbl-adaptive-dropdown",dxEventsInterceptorTagName:n};export{c as default,m as init};