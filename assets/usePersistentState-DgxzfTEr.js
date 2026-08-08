import{c as i}from"./index-ClGJZwbe.js";import{j as e,m as h}from"./motion-vendor-CYwxEcwk.js";import{u as p,L as m,r as u}from"./react-vendor-Djiz1au6.js";import{t as f,g as x}from"./tools-Cs8tNl8y.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=i("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=i("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),b=()=>{const s=p();return e.jsxs("nav",{"aria-label":"Tools",className:"flex md:flex-col gap-1.5 overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0 pb-1 md:pb-0 no-scrollbar md:w-56 shrink-0",children:[e.jsxs(m,{to:"/tools",className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors shrink-0 whitespace-nowrap",children:[e.jsx(g,{className:"w-4 h-4"}),"All tools"]}),e.jsx("div",{className:"hidden md:block h-px bg-border my-1.5"}),f.map(t=>{const a=t.icon,r=t.status==="available",o=r&&s.pathname===x(t.slug),n=`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${o?"bg-accent/15 text-accent":r?"text-foreground/70 hover:text-foreground hover:bg-accent/5":"text-muted-foreground/40 cursor-not-allowed"}`;return r?e.jsxs(m,{to:x(t.slug),"aria-current":o?"page":void 0,className:n,children:[e.jsx(a,{className:"w-4 h-4 shrink-0"}),t.title]},t.slug):e.jsxs("div",{className:n,"aria-disabled":"true",children:[e.jsx(a,{className:"w-4 h-4 shrink-0"}),t.title]},t.slug)})]})},L=({title:s,description:t,children:a})=>e.jsx(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pt-24",children:e.jsx("section",{className:"section-container pb-16 md:pb-20",children:e.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-start",children:[e.jsx(b,{}),e.jsxs("div",{className:"flex-1 min-w-0 w-full",children:[e.jsxs("div",{className:"mb-6 md:mb-8",children:[e.jsx("h1",{className:"text-2xl md:text-3xl font-display font-medium mb-2 text-accent",children:s}),e.jsx("p",{className:"text-muted-foreground max-w-2xl text-base md:text-lg font-light leading-relaxed",children:t})]}),a]})]})})}),c=new Map;function C(s,t){const[a,r]=u.useState(()=>c.has(s)?c.get(s):t instanceof Function?t():t);return[a,n=>{r(d=>{const l=n instanceof Function?n(d):n;return c.set(s,l),l})}]}export{N as C,L as T,k as a,C as u};
//# sourceMappingURL=usePersistentState-DgxzfTEr.js.map
