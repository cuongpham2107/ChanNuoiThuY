import{t as e}from"./dom-utils-259d2ab3.js";import{d as t,o as s,r as i,e as r,a as o,b as n,i as a,C as d,c as m,L as l}from"./baseChart-a474261c.js";import"./dom-39effdbe.js";import"./browser-d96520d8.js";import"./_tslib-158249d5.js";import"./disposable-d2c2d283.js";import"./tooltip-e3b6ded1.js";class p extends d{constructor(e,t,s){super(e,t,s)}get widget(){return super.widget}createWidgetBuilder(e,t,s){const i=this._dxBlazorViz.viz.dxPieChart;return function(t){s(new i(e,t))}}completeChartOptions(t,s,i){let r=!1;const o=this._selectionController;const n=super.completeChartOptions(t,s,i);return n.onDrawn=async function(s){r||(r=!0,m(t,s.component,l.point,o),e(t,"dx-loading",!1))},n.commonSeriesSettings={argumentField:"argument",valueField:"value",type:"donut"},n.diameter=s.diameter,n.minDiameter=s.minDiameter,n.innerRadius=void 0===s.innerRadius?0:s.innerRadius,n}}const c={init:function(e,t,s){return e?a(e,t,s,((e,t,s)=>new p(e,t,s))):Promise.resolve()},dispose:t,onSeriesVisibleChanged:s,render:i,exportToFile:r,exportToBase64Async:o,resetSelection:n};export{c as default};