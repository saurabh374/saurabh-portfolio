import{c as Z,j as a,r as d,u as V,g as ee,a as le,s as ce,b as we,d as Ce,T as Se,_ as te,e as y,f as de,h as je,i as me,k as ge,l as be,m as ne,n as Q,o as Ee,t as O,v as oe,w as ue,x as pe,y as Ie,z as fe,R as G,q as T,W as Me}from"./index-B4eIy5HO.js";function Ne(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Le=Z(a.jsx("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),$e=Z(a.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"}),"Code"),Fe=Z(a.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"Launch");function Be(e){return typeof e=="function"?e():e}const Ae=d.forwardRef(function(t,n){const{children:o,container:i,disablePortal:r=!1}=t,[s,l]=d.useState(null),u=V(d.isValidElement(o)?ee(o):null,n);if(le(()=>{r||l(Be(i)||document.body)},[i,r]),le(()=>{if(s&&!r)return ce(n,s),()=>{ce(n,null)}},[n,s,r]),r){if(d.isValidElement(o)){const h={ref:u};return d.cloneElement(o,h)}return a.jsx(d.Fragment,{children:o})}return a.jsx(d.Fragment,{children:s&&we.createPortal(o,s)})}),De=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Oe={entering:{opacity:1},entered:{opacity:1}},_e=d.forwardRef(function(t,n){const o=Ce(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:l,easing:u,in:h,onEnter:g,onEntered:b,onEntering:P,onExit:k,onExited:p,onExiting:L,style:C,timeout:S=i,TransitionComponent:j=Se}=t,c=te(t,De),E=d.useRef(null),v=V(E,ee(l),n),w=x=>N=>{if(x){const f=E.current;N===void 0?x(f):x(f,N)}},R=w(P),I=w((x,N)=>{je(x);const f=de({style:C,timeout:S,easing:u},{mode:"enter"});x.style.webkitTransition=o.transitions.create("opacity",f),x.style.transition=o.transitions.create("opacity",f),g&&g(x,N)}),B=w(b),M=w(L),D=w(x=>{const N=de({style:C,timeout:S,easing:u},{mode:"exit"});x.style.webkitTransition=o.transitions.create("opacity",N),x.style.transition=o.transitions.create("opacity",N),k&&k(x)}),A=w(p),$=x=>{r&&r(E.current,x)};return a.jsx(j,y({appear:s,in:h,nodeRef:E,onEnter:I,onEntered:B,onEntering:R,onExit:D,onExited:A,onExiting:M,addEndListener:$,timeout:S},c,{children:(x,N)=>d.cloneElement(l,y({style:y({opacity:0,visibility:x==="exited"&&!h?"hidden":void 0},Oe[x],C,l.props.style),ref:v},N))}))});function ze(e){return me("MuiBackdrop",e)}ge("MuiBackdrop",["root","invisible"]);const He=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],We=e=>{const{classes:t,invisible:n}=e;return Ee({root:["root",n&&"invisible"]},ze,t)},Ue=ne("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>y({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Ke=d.forwardRef(function(t,n){var o,i,r;const s=be({props:t,name:"MuiBackdrop"}),{children:l,className:u,component:h="div",components:g={},componentsProps:b={},invisible:P=!1,open:k,slotProps:p={},slots:L={},TransitionComponent:C=_e,transitionDuration:S}=s,j=te(s,He),c=y({},s,{component:h,invisible:P}),E=We(c),v=(o=p.root)!=null?o:b.root;return a.jsx(C,y({in:k,timeout:S},j,{children:a.jsx(Ue,y({"aria-hidden":!0},v,{as:(i=(r=L.root)!=null?r:g.Root)!=null?i:h,className:Q(E.root,u,v?.className),ownerState:y({},c,v?.ownerState),classes:E,ref:n,children:l}))}))});function Ve(e){const t=O(e);return t.body===e?oe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function W(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function xe(e){return parseInt(oe(e).getComputedStyle(e).paddingRight,10)||0}function Ye(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function he(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,s=>{const l=r.indexOf(s)===-1,u=!Ye(s);l&&u&&W(s,i)})}function X(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function qe(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Ve(o)){const s=Ne(O(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${xe(o)+s}px`;const l=O(o).querySelectorAll(".mui-fixed");[].forEach.call(l,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${xe(u)+s}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=O(o).body;else{const s=o.parentElement,l=oe(o);r=s?.nodeName==="HTML"&&l.getComputedStyle(s).overflowY==="scroll"?s:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:s,property:l})=>{r?s.style.setProperty(l,r):s.style.removeProperty(l)})}}function Ge(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Xe{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&W(t.modalRef,!1);const i=Ge(n);he(n,t.mount,t.modalRef,i,!0);const r=X(this.containers,s=>s.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=X(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=qe(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=X(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&W(t.modalRef,n),he(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&W(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Je=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Qe(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ze(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function et(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ze(e))}function tt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Je)).forEach((o,i)=>{const r=Qe(o);r===-1||!et(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function nt(){return!0}function ot(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=tt,isEnabled:s=nt,open:l}=e,u=d.useRef(!1),h=d.useRef(null),g=d.useRef(null),b=d.useRef(null),P=d.useRef(null),k=d.useRef(!1),p=d.useRef(null),L=V(ee(t),p),C=d.useRef(null);d.useEffect(()=>{!l||!p.current||(k.current=!n)},[n,l]),d.useEffect(()=>{if(!l||!p.current)return;const c=O(p.current);return p.current.contains(c.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),k.current&&p.current.focus()),()=>{i||(b.current&&b.current.focus&&(u.current=!0,b.current.focus()),b.current=null)}},[l]),d.useEffect(()=>{if(!l||!p.current)return;const c=O(p.current),E=R=>{C.current=R,!(o||!s()||R.key!=="Tab")&&c.activeElement===p.current&&R.shiftKey&&(u.current=!0,g.current&&g.current.focus())},v=()=>{const R=p.current;if(R===null)return;if(!c.hasFocus()||!s()||u.current){u.current=!1;return}if(R.contains(c.activeElement)||o&&c.activeElement!==h.current&&c.activeElement!==g.current)return;if(c.activeElement!==P.current)P.current=null;else if(P.current!==null)return;if(!k.current)return;let I=[];if((c.activeElement===h.current||c.activeElement===g.current)&&(I=r(p.current)),I.length>0){var B,M;const D=!!((B=C.current)!=null&&B.shiftKey&&((M=C.current)==null?void 0:M.key)==="Tab"),A=I[0],$=I[I.length-1];typeof A!="string"&&typeof $!="string"&&(D?$.focus():A.focus())}else R.focus()};c.addEventListener("focusin",v),c.addEventListener("keydown",E,!0);const w=setInterval(()=>{c.activeElement&&c.activeElement.tagName==="BODY"&&v()},50);return()=>{clearInterval(w),c.removeEventListener("focusin",v),c.removeEventListener("keydown",E,!0)}},[n,o,i,s,l,r]);const S=c=>{b.current===null&&(b.current=c.relatedTarget),k.current=!0,P.current=c.target;const E=t.props.onFocus;E&&E(c)},j=c=>{b.current===null&&(b.current=c.relatedTarget),k.current=!0};return a.jsxs(d.Fragment,{children:[a.jsx("div",{tabIndex:l?0:-1,onFocus:j,ref:h,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:L,onFocus:S}),a.jsx("div",{tabIndex:l?0:-1,onFocus:j,ref:g,"data-testid":"sentinelEnd"})]})}function rt(e){return typeof e=="function"?e():e}function st(e){return e?e.props.hasOwnProperty("in"):!1}const it=new Xe;function at(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=it,closeAfterTransition:r=!1,onTransitionEnter:s,onTransitionExited:l,children:u,onClose:h,open:g,rootRef:b}=e,P=d.useRef({}),k=d.useRef(null),p=d.useRef(null),L=V(p,b),[C,S]=d.useState(!g),j=st(u);let c=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(c=!1);const E=()=>O(k.current),v=()=>(P.current.modalRef=p.current,P.current.mount=k.current,P.current),w=()=>{i.mount(v(),{disableScrollLock:o}),p.current&&(p.current.scrollTop=0)},R=ue(()=>{const f=rt(t)||E().body;i.add(v(),f),p.current&&w()}),I=d.useCallback(()=>i.isTopModal(v()),[i]),B=ue(f=>{k.current=f,f&&(g&&I()?w():p.current&&W(p.current,c))}),M=d.useCallback(()=>{i.remove(v(),c)},[c,i]);d.useEffect(()=>()=>{M()},[M]),d.useEffect(()=>{g?R():(!j||!r)&&M()},[g,M,j,r,R]);const D=f=>m=>{var F;(F=f.onKeyDown)==null||F.call(f,m),!(m.key!=="Escape"||m.which===229||!I())&&(n||(m.stopPropagation(),h&&h(m,"escapeKeyDown")))},A=f=>m=>{var F;(F=f.onClick)==null||F.call(f,m),m.target===m.currentTarget&&h&&h(m,"backdropClick")};return{getRootProps:(f={})=>{const m=Ie(e);delete m.onTransitionEnter,delete m.onTransitionExited;const F=y({},m,f);return y({role:"presentation"},F,{onKeyDown:D(F),ref:L})},getBackdropProps:(f={})=>{const m=f;return y({"aria-hidden":!0},m,{onClick:A(m),open:g})},getTransitionProps:()=>{const f=()=>{S(!1),s&&s()},m=()=>{S(!0),l&&l(),r&&M()};return{onEnter:pe(f,u?.props.onEnter),onExited:pe(m,u?.props.onExited)}},rootRef:L,portalRef:B,isTopModal:I,exited:C,hasTransition:j}}function lt(e){return me("MuiModal",e)}ge("MuiModal",["root","hidden","backdrop"]);const ct=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],dt=e=>{const{open:t,exited:n,classes:o}=e;return Ee({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},lt,o)},ut=ne("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>y({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),pt=ne(Ke,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ft=d.forwardRef(function(t,n){var o,i,r,s,l,u;const h=be({name:"MuiModal",props:t}),{BackdropComponent:g=pt,BackdropProps:b,className:P,closeAfterTransition:k=!1,children:p,container:L,component:C,components:S={},componentsProps:j={},disableAutoFocus:c=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:v=!1,disablePortal:w=!1,disableRestoreFocus:R=!1,disableScrollLock:I=!1,hideBackdrop:B=!1,keepMounted:M=!1,onBackdropClick:D,open:A,slotProps:$,slots:x}=h,N=te(h,ct),f=y({},h,{closeAfterTransition:k,disableAutoFocus:c,disableEnforceFocus:E,disableEscapeKeyDown:v,disablePortal:w,disableRestoreFocus:R,disableScrollLock:I,hideBackdrop:B,keepMounted:M}),{getRootProps:m,getBackdropProps:F,getTransitionProps:ye,portalRef:ke,isTopModal:Re,exited:re,hasTransition:se}=at(y({},f,{rootRef:n})),H=y({},f,{exited:re}),_=dt(H),U={};if(p.props.tabIndex===void 0&&(U.tabIndex="-1"),se){const{onEnter:z,onExited:K}=ye();U.onEnter=z,U.onExited=K}const ie=(o=(i=x?.root)!=null?i:S.Root)!=null?o:ut,ae=(r=(s=x?.backdrop)!=null?s:S.Backdrop)!=null?r:g,Y=(l=$?.root)!=null?l:j.root,q=(u=$?.backdrop)!=null?u:j.backdrop,Te=fe({elementType:ie,externalSlotProps:Y,externalForwardedProps:N,getSlotProps:m,additionalProps:{ref:n,as:C},ownerState:H,className:Q(P,Y?.className,_?.root,!H.open&&H.exited&&_?.hidden)}),Pe=fe({elementType:ae,externalSlotProps:q,additionalProps:b,getSlotProps:z=>F(y({},z,{onClick:K=>{D&&D(K),z!=null&&z.onClick&&z.onClick(K)}})),className:Q(q?.className,b?.className,_?.backdrop),ownerState:H});return!M&&!A&&(!se||re)?null:a.jsx(Ae,{ref:ke,container:L,disablePortal:w,children:a.jsxs(ie,y({},Te,{children:[!B&&g?a.jsx(ae,y({},Pe)):null,a.jsx(ot,{disableEnforceFocus:E,disableAutoFocus:c,disableRestoreFocus:R,isEnabled:Re,open:A,children:d.cloneElement(p,U)})]}))})}),xt=T.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  background-color: #000000a7;
  display: flex;
  align-items: flex-start; /* fix: 'top' isn't valid */
  justify-content: center;
  overflow-y: auto;
  transition: all 0.5s ease;
  padding: 32px 12px;
`,ht=T.div`
  max-width: 860px;
  width: 100%;
  border-radius: 16px;
  margin: 18px 0;
  background-color: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 12px 28px rgba(0,0,0,.35);
`,mt=T.h3`
  font-size: 28px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin: 14px 6px 0 6px;
  @media (max-width: 600px) { font-size: 24px; }
`,gt=T.div`
  font-size: 14px;
  margin: 2px 6px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px){ font-size: 12px; }
`,bt=T.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary};
  margin: 8px 6px 0;
  line-height: 1.6;
  @media (max-width: 600px) { font-size: 14px; }
`,Et=Me`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,vt=T.div`
  position: relative;
  width: 100%;
  margin-top: 6px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(0,0,0,0.25);
`,yt=T.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.06) 0%,
    rgba(255,255,255,0.18) 20%,
    rgba(255,255,255,0.06) 40%
  );
  background-size: 200% 100%;
  animation: ${Et} 1.2s linear infinite;
`,kt=T.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`,J=T.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin: 14px 6px 6px;
  text-transform: uppercase;
  letter-spacing: .08em;
  opacity: .9;
`,Rt=T.div`
  display: flex;
  flex-wrap: wrap;
  margin: 6px 0 0;
`,Tt=T.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.primary};
  margin: 4px;
  padding: 6px 10px;
  border-radius: 999px;
  background-color: ${({theme:e})=>e.primary+"20"};
  border: 1px solid ${({theme:e})=>e.primary+"55"};
`,Pt=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 6px 0;
`,ve=T.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid ${({theme:e})=>e.primary};
  color: ${({theme:e})=>e.white};
  background: ${({theme:e})=>e.primary};
  box-shadow: 0 6px 16px rgba(0,0,0,.18);
  transition: transform .12s ease, box-shadow .2s ease, opacity .2s ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 8px 18px rgba(0,0,0,.24); }
  &:active { transform: translateY(0); opacity: .95; }
`,wt=T(ve)`
  background: transparent;
  color: ${({theme:e})=>e.text_primary};
  border-color: ${({theme:e})=>e.text_secondary+"66"};
`,Ct=T.button`
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.text_primary};
  padding: 6px;
  border-radius: 10px;
  line-height: 0;

  &:hover { background: ${({theme:e})=>e.card_light+"44"}; }
  &:focus-visible { outline: 2px solid ${({theme:e})=>e.primary}; outline-offset: 2px; }
`,jt=({openModal:e,setOpenModal:t})=>{const n=e?.project,[o,i]=G.useState(!1),[r,s]=G.useState(n?.image||"");G.useEffect(()=>{i(!1),s(n?.image||"")},[n]);const l=()=>t({state:!1,project:null});return a.jsx(ft,{open:!!e?.state,onClose:l,"aria-labelledby":"project-title","aria-describedby":"project-desc",children:a.jsx(xt,{onClick:u=>{u.target===u.currentTarget&&l()},children:a.jsxs(ht,{role:"dialog",children:[a.jsx(Ct,{onClick:l,"aria-label":"Close project details",children:a.jsx(Le,{})}),r?a.jsxs(vt,{children:[!o&&a.jsx(yt,{"aria-hidden":"true"}),a.jsx(kt,{src:r,alt:n?.title?`${n.title} preview`:"Project preview",loading:"lazy",onLoad:()=>i(!0),onError:()=>{i(!0),s("")},style:{opacity:o?1:0,transition:"opacity .3s ease"}})]}):null,a.jsx(mt,{id:"project-title",children:n?.title}),n?.date&&a.jsx(gt,{children:n.date}),n?.tags?.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(J,{children:"Tech"}),a.jsx(Rt,{children:n.tags.map((u,h)=>a.jsx(Tt,{children:u},`${u}-${h}`))})]}),n?.description&&a.jsxs(a.Fragment,{children:[a.jsx(J,{children:"Description"}),a.jsx(bt,{id:"project-desc",children:n.description})]}),(n?.demo||n?.code)&&a.jsxs(a.Fragment,{children:[a.jsx(J,{children:"Links"}),a.jsxs(Pt,{children:[n.demo&&a.jsxs(ve,{href:n.demo,target:"_blank",rel:"noreferrer noopener","aria-label":"Open live demo",children:[a.jsx(Fe,{fontSize:"small"})," Live Demo"]}),n.code&&a.jsxs(wt,{href:n.code,target:"_blank",rel:"noreferrer noopener","aria-label":"Open source code",children:[a.jsx($e,{fontSize:"small"})," Source Code"]})]})]})]})})})};export{jt as default};
