import{a as e}from"./_tslib-158249d5.js";import{L as t}from"./lit-element-base-f94f8541.js";import{E as a}from"./elementobserver-5f004683.js";import{$ as n}from"./lit-element-ee330000.js";import{e as c}from"./property-d3853089.js";import{n as h}from"./custom-element-bd7061f2.js";import"./data-qa-utils-8be7c726.js";var s;!function(e){e[e.Indeterminate=0]="Indeterminate",e[e.Checked=1]="Checked",e[e.Unchecked=2]="Unchecked"}(s||(s={}));let i=class extends t{constructor(){super(...arguments),this.slotChangedHandler=this.handleSlotChange.bind(this),this.check=null,this.observersStack=[],this.checkState=s.Unchecked,this.allowIndeterminateStateByClick=!1,this.actualCheckState=s.Unchecked,this.boundOnInputChangeHandler=this.onInputChange.bind(this)}get value(){return this.actualCheckState===s.Indeterminate?"":Boolean(this.actualCheckState===s.Checked).toString()}createObserver(e){return new a("input",this.inputCallback.bind(this))}getNextCheckState(){let e=this.checkState+1;return e>s.Unchecked&&(e=this.allowIndeterminateStateByClick?s.Indeterminate:s.Checked),e}onInputChange(e){this.actualCheckState=this.getNextCheckState(),this.dispatchEvent(new Event("change",{bubbles:!0}))}applyCheckStateToElements(){this.check&&(this.check.indeterminate=this.actualCheckState===s.Indeterminate,this.check.checked=this.actualCheckState===s.Checked)}render(){return n`
            <slot @slotchange=${this.slotChangedHandler}></slot>
        `}handleSlotChange(e){for(const e of this.observersStack)e.disconnect();this.observersStack=[];const t=e.target;for(const e of t.assignedNodes())if(e instanceof HTMLElement){const t=this.createObserver("input");t.observe(e),this.observersStack.push(t)}}updateCheck(e){this.check&&this.check.removeEventListener("change",this.boundOnInputChangeHandler),this.check=e,this.applyCheckStateToElements(),this.check&&this.check.addEventListener("change",this.boundOnInputChangeHandler)}inputCallback(e,t){this.updateCheck(e.element)}willUpdate(e){e.has("checkState")&&(this.actualCheckState=this.checkState)}updated(e){(e.has("actualCheckState")||e.has("allowIndeterminateStateByClick"))&&this.applyCheckStateToElements()}};e([c({type:Number,attribute:"check-state"})],i.prototype,"checkState",void 0),e([c({type:Boolean,attribute:"allow-indeterminate-state-by-click"})],i.prototype,"allowIndeterminateStateByClick",void 0),e([c({type:Boolean,reflect:!1})],i.prototype,"actualCheckState",void 0),i=e([h("dxbl-check")],i);const o={loadModule:function(){}};export{i as DxCheckInternal,o as default};
