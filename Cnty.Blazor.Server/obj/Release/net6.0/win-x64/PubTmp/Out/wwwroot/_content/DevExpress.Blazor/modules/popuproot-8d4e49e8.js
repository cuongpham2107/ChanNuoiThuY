import{a as e}from"./_tslib-158249d5.js";import{BranchCreatedEvent as t,BranchUpdatedEvent as s,BranchRemovedEvent as n,BranchActivatedEvent as i,BranchRefreshedEvent as r}from"./branch-9dee15d3.js";import{D as d}from"./data-qa-utils-8be7c726.js";import{c as a}from"./capturemanager-c7d5aef8.js";import{L as o}from"./locker-c40478e6.js";import{E as h}from"./eventhelper-8570b930.js";import{R as l}from"./rafaction-bba7928b.js";import{s as c,$ as p}from"./lit-element-ee330000.js";import{e as u}from"./property-d3853089.js";import{n as m}from"./custom-element-bd7061f2.js";var b;!function(e){e.Modal="modal",e.DropDown="dropdown",e.Flyout="flyout",e.Window="window",e.Root="root"}(b||(b={}));class g{constructor(e,t,s){this._children=new Set,this._id=e,this._parentId=t,this._type=s}get type(){return this._type}get children(){return Array.from(this._children)}get hasChildren(){return this._children.size>0}get id(){return this._id}add(e){this._children.add(e)}remove(e){this._children.delete(e)}}class v{constructor(){this.idToNode=new Map,this.idToParentId=new Map,this._roots=[],this.idToNode.set(v.root,new g(v.root,v.root,b.Root))}get roots(){return this._roots}add(e,t,s){const n=new g(e,t=null!=t?t:v.root,s);this.idToParentId.set(e,t),this.idToNode.set(e,n);this.idToNode.get(t).add(n),t===v.root&&this._roots.push(e)}remove(e){if(!this.idToNode.has(e))return;const t=this.idToParentId.get(e),s=this.idToNode.get(t),n=this.idToNode.get(e);this.idToParentId.delete(e),this.idToNode.delete(e),s.remove(n),t===v.root&&(this._roots=this._roots.splice(this.roots.indexOf(e),1))}inTree(e){return this.idToNode.has(e)}getBranch(e){const t=[e];let s=this.idToParentId.get(e);for(;s&&s!==v.root;)t.push(s),s=this.idToParentId.get(s);return t}getParentId(e){return this.idToParentId.get(e)}getBranchNode(e){var t;return null!==(t=this.idToNode.get(e))&&void 0!==t?t:null}findRoot(e){let t=e;for(;;){const e=this.idToParentId.get(t);if(e===v.root)return t;t=e}}}v.baseIndex=1050,v.root="";class f{constructor(e){this._children=new Array,this._index=0,this.branchNode=e}get type(){return this.branchNode.type}get index(){return this._index}set index(e){this._index=e}get children(){return this._children}get hasChildren(){return this._children.length>0}get id(){return this.branchNode.id}add(e){this._children.push(e)}remove(e){this._children=this._children.filter((t=>t!==e))}peek(){return this._children[this._children.length-1]}activate(e){return this.peek()!==e&&(this.remove(e),this.add(e),!0)}}const N=new v,I=new class{constructor(){this.idToNode=new Map,this.rootNode=new f(N.getBranchNode("")),this.idToNode.set("",this.rootNode)}getIndex(e){const t=this.idToNode.get(e);return t?t.index:0}register(e){const t=N.findRoot(e),s=N.getBranchNode(e),n=new f(s);if(this.idToNode.set(e,n),e===t)this.rootNode.add(n);else{const t=N.getParentId(e);this.idToNode.get(t).add(n)}this.refresh()}unregister(e){var t;const s=null!==(t=this.idToNode.get(e))&&void 0!==t?t:null;if(!s)return;const n=N.getParentId(s.id);this.idToNode.get(n).remove(s);for(const t of this.iterateBranch(e))this.idToNode.delete(t);this.idToNode.delete(e),this.refresh()}activate(e){var t,s,n;let i=null!==(t=this.idToNode.get(e))&&void 0!==t?t:null;if(!i)return!1;let r=!1;for(;i;){const e=N.getParentId(i.id),t=null!==(s=this.idToNode.get(e))&&void 0!==s?s:null;r=r||null!==(n=null==t?void 0:t.activate(i))&&void 0!==n&&n,i=t}return r}iterateBranch(e){let t=new Array;const s=this.idToNode.get(e);if(!(null==s?void 0:s.hasChildren))return t;for(const e of s.children)t.push(e.id),t=t.concat(this.iterateBranch(e.id));return t.sort(((e,t)=>this.idToNode.get(t).index-this.idToNode.get(e).index))}refresh(){let e=!1,t=v.baseIndex;for(const s in this.rootNode.children){const n=this.rootNode.children[s];e?t+=this.incrementByType(n.type):e=!0,t=this.calculateZIndices(n,t)}}calculateZIndices(e,t){if(e.index=t,e.hasChildren)for(const s of e.children)t+=this.incrementByType(s.type),t=this.calculateZIndices(s,t);return t}incrementByType(e){switch(e){case b.Flyout:case b.DropDown:return 10;case b.Modal:return 100}return 10}},x="dxbl-portal";class T{constructor(e){this.elements=e}}class _ extends CustomEvent{constructor(e){super(_.eventName,{detail:e,bubbles:!0})}}_.eventName="dxbl-portable-elements-changed";let C=class extends c{constructor(){super(...arguments),this._portable=null,this._elementsPorted=!1,this.slotChangedHandler=this.handleSlotChange.bind(this)}get portable(){return this._portable}render(){return p`
            <slot @slotchange=${this.slotChangedHandler}></slot>
        `}handleSlotChange(e){const t=e.target.assignedNodes();this._elementsPorted&&0===t.length||(this.assignElements(t),this._elementsPorted=!0)}assignElements(e){this._portable=e,this.raiseElementsChanged(e)}connectedCallback(){super.connectedCallback(),d.setLoaded(this),k.assign(this)}disconnectedCallback(){super.disconnectedCallback(),k.release(this),d.removeLoaded(this)}raiseElementsChanged(e){const t=new _(new T(e));this.dispatchEvent(t)}updated(e){if(!this.branchId)throw new Error("branch-id must be specified")}};function E(){}e([u({type:String,attribute:"branch-id"})],C.prototype,"branchId",void 0),C=e([m("dxbl-portal")],C);const y=Object.freeze({__proto__:null,dxPortalTagName:"dxbl-portal",PortableElementsChangedEvent:_,get DxPortal(){return C},init:E,default:{init:E,DxPortal:C,dxPortalTagName:"dxbl-portal"}});let w=class extends c{constructor(){super(...arguments),this._portal=null,this.elements=null,this.elementsChangedHandler=this.handleElementsChanged.bind(this),this.zIndex=0}createRenderRoot(){return this}get portal(){return this._portal}setPortal(e){this.unsubscribe(),this._portal=e,this.subscribe(),this.updateElements(this.elements,e.portable)}connectedCallback(){super.connectedCallback(),this.subscribe()}subscribe(){this.portal&&this.portal.addEventListener(_.eventName,this.elementsChangedHandler)}unsubscribe(){this.portal&&this.portal.removeEventListener(_.eventName,this.elementsChangedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe()}handleElementsChanged(e){this.updateElements(this.elements,e.detail.elements)}updateElements(e,t){e&&e.forEach((e=>this.removeChild(e))),this.elements=t,t&&this.append(...t)}updated(e){e.has("zIndex")&&(this.style.zIndex=String(this.zIndex))}};e([u({type:Number,reflect:!1})],w.prototype,"zIndex",void 0),w=e([m("dxbl-popup-cell")],w);const B="dxbl-popup-root",H=document.createElement("template");H.innerHTML="<dxbl-popup-cell/>";let P=class extends c{constructor(){super(...arguments),this.activateLocker=new o,this.portalsMapping=new Map,this.portals=new Map,this.rafAction=new l,this.focusInHandler=this.handleFocusIn.bind(this),this.branchCreatedHandler=this.handleBranchCreated.bind(this),this.branchUpdatedHandler=this.handleBranchUpdated.bind(this),this.branchRemovedHandler=this.handleBranchRemoved.bind(this),this.branchActivatedHandler=this.handleBranchActivated.bind(this),this.branchRefreshedHandler=this.handleBranchRefreshed.bind(this)}createRenderRoot(){return this}assign(e){if(this.portals.has(e))return;const t=this.selectTemplate(e);this.appendChild(t);const s=this.children[this.children.length-1];s.setPortal(e),this.portalsMapping.set(e.branchId,e),this.portals.set(e,s)}release(e){const t=this.portals.get(e);this.portalsMapping.delete(e.branchId),this.portals.delete(e),this.removeChild(t)}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener("focusin",this.focusInHandler,{capture:!0}),this.addEventListener(t.eventName,this.branchCreatedHandler),this.addEventListener(s.eventName,this.branchUpdatedHandler),this.addEventListener(n.eventName,this.branchRemovedHandler),this.addEventListener(i.eventName,this.branchActivatedHandler),this.addEventListener(r.eventName,this.branchRefreshedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this.focusInHandler),this.removeEventListener(t.eventName,this.branchCreatedHandler),this.removeEventListener(s.eventName,this.branchUpdatedHandler),this.removeEventListener(n.eventName,this.branchRemovedHandler),this.removeEventListener(i.eventName,this.branchActivatedHandler),this.removeEventListener(r.eventName,this.branchRefreshedHandler)}handleFocusIn(e){this.rafAction.cancel();e.target===this&&(h.markHandled(e),this.rafAction.execute((()=>this.blur())))}handleBranchCreated(e){N.add(e.detail.id,e.detail.parentId,e.detail.type),this.assignZIndices()}handleBranchUpdated(e){N.remove(e.detail.id),N.add(e.detail.id,e.detail.parentId,e.detail.type),this.assignZIndices()}handleBranchRemoved(e){N.remove(e.detail.id),this.assignZIndices()}handleBranchActivated(e){const t=e.detail.id;if(!I.activate(t)){const e=this.portalsMapping.get(t);return a.capture(e.popupBase),void this.assignZIndices()}const s=[];for(const e of I.iterateBranch(t)){const n=this.portalsMapping.get(e);if(s.push(n.popup),e===t)break}if(s.length>0)s.forEach((e=>a.releaseCapture(e))),s.forEach((e=>a.capture(e)));else{const e=this.portalsMapping.get(t);a.capture(e.popupBase)}this.assignZIndices()}handleBranchRefreshed(e){this.assignZIndices()}assignZIndices(){I.refresh();for(const e of this.portals.keys()){const t=e.branchId;this.portals.get(e).zIndex=I.getIndex(t)}}getPopup(e){const t=this.portalsMapping.get(e);return null==t?void 0:t.popupBase}selectTemplate(e){return H.content.cloneNode(!0)}};P=e([m("dxbl-popup-root")],P);const k=document.createElement("dxbl-popup-root");document.body.appendChild(k);export{b as B,C as D,_ as P,x as a,N as b,y as c,B as d,k as p,I as v};
