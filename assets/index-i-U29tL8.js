import{c as Q,j as a,r as l,u as V,g as Z,a as ae,s as le,b as Te,d as Pe,T as Ce,_ as ee,e as k,f as ce,h as je,i as he,k as me,l as ge,m as te,n as J,o as be,t as z,v as ne,w as de,x as ue,y as Se,z as pe,q as C,W as Ie}from"./index-_6b99Sp3.js";function Me(e){const n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}const Ne=Q(a.jsx("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),$e=Q(a.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"}),"Code"),Le=Q(a.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"Launch");function Fe(e){return typeof e=="function"?e():e}const Be=l.forwardRef(function(n,o){const{children:t,container:s,disablePortal:r=!1}=n,[i,u]=l.useState(null),p=V(l.isValidElement(t)?Z(t):null,o);if(ae(()=>{r||u(Fe(s)||document.body)},[s,r]),ae(()=>{if(i&&!r)return le(o,i),()=>{le(o,null)}},[o,i,r]),r){if(l.isValidElement(t)){const h={ref:p};return l.cloneElement(t,h)}return a.jsx(l.Fragment,{children:t})}return a.jsx(l.Fragment,{children:i&&Te.createPortal(t,i)})}),De=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Ae={entering:{opacity:1},entered:{opacity:1}},ze=l.forwardRef(function(n,o){const t=Pe(),s={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:u,easing:p,in:h,onEnter:m,onEntered:g,onEntering:w,onExit:f,onExited:c,onExiting:R,style:T,timeout:P=s,TransitionComponent:I=Ce}=n,d=ee(n,De),y=l.useRef(null),E=V(y,Z(u),o),S=b=>$=>{if(b){const x=y.current;$===void 0?b(x):b(x,$)}},j=S(w),M=S((b,$)=>{je(b);const x=ce({style:T,timeout:P,easing:p},{mode:"enter"});b.style.webkitTransition=t.transitions.create("opacity",x),b.style.transition=t.transitions.create("opacity",x),m&&m(b,$)}),B=S(g),N=S(R),A=S(b=>{const $=ce({style:T,timeout:P,easing:p},{mode:"exit"});b.style.webkitTransition=t.transitions.create("opacity",$),b.style.transition=t.transitions.create("opacity",$),f&&f(b)}),D=S(c),L=b=>{r&&r(y.current,b)};return a.jsx(I,k({appear:i,in:h,nodeRef:y,onEnter:M,onEntered:B,onEntering:j,onExit:A,onExited:D,onExiting:N,addEndListener:L,timeout:P},d,{children:(b,$)=>l.cloneElement(u,k({style:k({opacity:0,visibility:b==="exited"&&!h?"hidden":void 0},Ae[b],T,u.props.style),ref:E},$))}))});function _e(e){return he("MuiBackdrop",e)}me("MuiBackdrop",["root","invisible"]);const Oe=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],He=e=>{const{classes:n,invisible:o}=e;return be({root:["root",o&&"invisible"]},_e,n)},Ue=te("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.invisible&&n.invisible]}})(({ownerState:e})=>k({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),We=l.forwardRef(function(n,o){var t,s,r;const i=ge({props:n,name:"MuiBackdrop"}),{children:u,className:p,component:h="div",components:m={},componentsProps:g={},invisible:w=!1,open:f,slotProps:c={},slots:R={},TransitionComponent:T=ze,transitionDuration:P}=i,I=ee(i,Oe),d=k({},i,{component:h,invisible:w}),y=He(d),E=(t=c.root)!=null?t:g.root;return a.jsx(T,k({in:f,timeout:P},I,{children:a.jsx(Ue,k({"aria-hidden":!0},E,{as:(s=(r=R.root)!=null?r:m.Root)!=null?s:h,className:J(y.root,p,E?.className),ownerState:k({},d,E?.ownerState),classes:y,ref:o,children:u}))}))});function Ke(e){const n=z(e);return n.body===e?ne(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function U(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function fe(e){return parseInt(ne(e).getComputedStyle(e).paddingRight,10)||0}function Ve(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,t=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||t}function xe(e,n,o,t,s){const r=[n,o,...t];[].forEach.call(e.children,i=>{const u=r.indexOf(i)===-1,p=!Ve(i);u&&p&&U(i,s)})}function G(e,n){let o=-1;return e.some((t,s)=>n(t)?(o=s,!0):!1),o}function qe(e,n){const o=[],t=e.container;if(!n.disableScrollLock){if(Ke(t)){const i=Me(z(t));o.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${fe(t)+i}px`;const u=z(t).querySelectorAll(".mui-fixed");[].forEach.call(u,p=>{o.push({value:p.style.paddingRight,property:"padding-right",el:p}),p.style.paddingRight=`${fe(p)+i}px`})}let r;if(t.parentNode instanceof DocumentFragment)r=z(t).body;else{const i=t.parentElement,u=ne(t);r=i?.nodeName==="HTML"&&u.getComputedStyle(i).overflowY==="scroll"?i:t}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:u})=>{r?i.style.setProperty(u,r):i.style.removeProperty(u)})}}function Ye(e){const n=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&n.push(o)}),n}class Ge{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(n,o){let t=this.modals.indexOf(n);if(t!==-1)return t;t=this.modals.length,this.modals.push(n),n.modalRef&&U(n.modalRef,!1);const s=Ye(o);xe(o,n.mount,n.modalRef,s,!0);const r=G(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(n),t):(this.containers.push({modals:[n],container:o,restore:null,hiddenSiblings:s}),t)}mount(n,o){const t=G(this.containers,r=>r.modals.indexOf(n)!==-1),s=this.containers[t];s.restore||(s.restore=qe(s,o))}remove(n,o=!0){const t=this.modals.indexOf(n);if(t===-1)return t;const s=G(this.containers,i=>i.modals.indexOf(n)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(n),1),this.modals.splice(t,1),r.modals.length===0)r.restore&&r.restore(),n.modalRef&&U(n.modalRef,o),xe(r.container,n.mount,n.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&U(i.modalRef,!1)}return t}isTopModal(n){return this.modals.length>0&&this.modals[this.modals.length-1]===n}}const Xe=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Je(e){const n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:n}function Qe(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const n=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let o=n(`[name="${e.name}"]:checked`);return o||(o=n(`[name="${e.name}"]`)),o!==e}function Ze(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Qe(e))}function et(e){const n=[],o=[];return Array.from(e.querySelectorAll(Xe)).forEach((t,s)=>{const r=Je(t);r===-1||!Ze(t)||(r===0?n.push(t):o.push({documentOrder:s,tabIndex:r,node:t}))}),o.sort((t,s)=>t.tabIndex===s.tabIndex?t.documentOrder-s.documentOrder:t.tabIndex-s.tabIndex).map(t=>t.node).concat(n)}function tt(){return!0}function nt(e){const{children:n,disableAutoFocus:o=!1,disableEnforceFocus:t=!1,disableRestoreFocus:s=!1,getTabbable:r=et,isEnabled:i=tt,open:u}=e,p=l.useRef(!1),h=l.useRef(null),m=l.useRef(null),g=l.useRef(null),w=l.useRef(null),f=l.useRef(!1),c=l.useRef(null),R=V(Z(n),c),T=l.useRef(null);l.useEffect(()=>{!u||!c.current||(f.current=!o)},[o,u]),l.useEffect(()=>{if(!u||!c.current)return;const d=z(c.current);return c.current.contains(d.activeElement)||(c.current.hasAttribute("tabIndex")||c.current.setAttribute("tabIndex","-1"),f.current&&c.current.focus()),()=>{s||(g.current&&g.current.focus&&(p.current=!0,g.current.focus()),g.current=null)}},[u]),l.useEffect(()=>{if(!u||!c.current)return;const d=z(c.current),y=j=>{T.current=j,!(t||!i()||j.key!=="Tab")&&d.activeElement===c.current&&j.shiftKey&&(p.current=!0,m.current&&m.current.focus())},E=()=>{const j=c.current;if(j===null)return;if(!d.hasFocus()||!i()||p.current){p.current=!1;return}if(j.contains(d.activeElement)||t&&d.activeElement!==h.current&&d.activeElement!==m.current)return;if(d.activeElement!==w.current)w.current=null;else if(w.current!==null)return;if(!f.current)return;let M=[];if((d.activeElement===h.current||d.activeElement===m.current)&&(M=r(c.current)),M.length>0){var B,N;const A=!!((B=T.current)!=null&&B.shiftKey&&((N=T.current)==null?void 0:N.key)==="Tab"),D=M[0],L=M[M.length-1];typeof D!="string"&&typeof L!="string"&&(A?L.focus():D.focus())}else j.focus()};d.addEventListener("focusin",E),d.addEventListener("keydown",y,!0);const S=setInterval(()=>{d.activeElement&&d.activeElement.tagName==="BODY"&&E()},50);return()=>{clearInterval(S),d.removeEventListener("focusin",E),d.removeEventListener("keydown",y,!0)}},[o,t,s,i,u,r]);const P=d=>{g.current===null&&(g.current=d.relatedTarget),f.current=!0,w.current=d.target;const y=n.props.onFocus;y&&y(d)},I=d=>{g.current===null&&(g.current=d.relatedTarget),f.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:u?0:-1,onFocus:I,ref:h,"data-testid":"sentinelStart"}),l.cloneElement(n,{ref:R,onFocus:P}),a.jsx("div",{tabIndex:u?0:-1,onFocus:I,ref:m,"data-testid":"sentinelEnd"})]})}function ot(e){return typeof e=="function"?e():e}function rt(e){return e?e.props.hasOwnProperty("in"):!1}const st=new Ge;function it(e){const{container:n,disableEscapeKeyDown:o=!1,disableScrollLock:t=!1,manager:s=st,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:u,children:p,onClose:h,open:m,rootRef:g}=e,w=l.useRef({}),f=l.useRef(null),c=l.useRef(null),R=V(c,g),[T,P]=l.useState(!m),I=rt(p);let d=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(d=!1);const y=()=>z(f.current),E=()=>(w.current.modalRef=c.current,w.current.mount=f.current,w.current),S=()=>{s.mount(E(),{disableScrollLock:t}),c.current&&(c.current.scrollTop=0)},j=de(()=>{const x=ot(n)||y().body;s.add(E(),x),c.current&&S()}),M=l.useCallback(()=>s.isTopModal(E()),[s]),B=de(x=>{f.current=x,x&&(m&&M()?S():c.current&&U(c.current,d))}),N=l.useCallback(()=>{s.remove(E(),d)},[d,s]);l.useEffect(()=>()=>{N()},[N]),l.useEffect(()=>{m?j():(!I||!r)&&N()},[m,N,I,r,j]);const A=x=>v=>{var F;(F=x.onKeyDown)==null||F.call(x,v),!(v.key!=="Escape"||v.which===229||!M())&&(o||(v.stopPropagation(),h&&h(v,"escapeKeyDown")))},D=x=>v=>{var F;(F=x.onClick)==null||F.call(x,v),v.target===v.currentTarget&&h&&h(v,"backdropClick")};return{getRootProps:(x={})=>{const v=Se(e);delete v.onTransitionEnter,delete v.onTransitionExited;const F=k({},v,x);return k({role:"presentation"},F,{onKeyDown:A(F),ref:R})},getBackdropProps:(x={})=>{const v=x;return k({"aria-hidden":!0},v,{onClick:D(v),open:m})},getTransitionProps:()=>{const x=()=>{P(!1),i&&i()},v=()=>{P(!0),u&&u(),r&&N()};return{onEnter:ue(x,p?.props.onEnter),onExited:ue(v,p?.props.onExited)}},rootRef:R,portalRef:B,isTopModal:M,exited:T,hasTransition:I}}function at(e){return he("MuiModal",e)}me("MuiModal",["root","hidden","backdrop"]);const lt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],ct=e=>{const{open:n,exited:o,classes:t}=e;return be({root:["root",!n&&o&&"hidden"],backdrop:["backdrop"]},at,t)},dt=te("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,!o.open&&o.exited&&n.hidden]}})(({theme:e,ownerState:n})=>k({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!n.open&&n.exited&&{visibility:"hidden"})),ut=te(We,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,n)=>n.backdrop})({zIndex:-1}),pt=l.forwardRef(function(n,o){var t,s,r,i,u,p;const h=ge({name:"MuiModal",props:n}),{BackdropComponent:m=ut,BackdropProps:g,className:w,closeAfterTransition:f=!1,children:c,container:R,component:T,components:P={},componentsProps:I={},disableAutoFocus:d=!1,disableEnforceFocus:y=!1,disableEscapeKeyDown:E=!1,disablePortal:S=!1,disableRestoreFocus:j=!1,disableScrollLock:M=!1,hideBackdrop:B=!1,keepMounted:N=!1,onBackdropClick:A,open:D,slotProps:L,slots:b}=h,$=ee(h,lt),x=k({},h,{closeAfterTransition:f,disableAutoFocus:d,disableEnforceFocus:y,disableEscapeKeyDown:E,disablePortal:S,disableRestoreFocus:j,disableScrollLock:M,hideBackdrop:B,keepMounted:N}),{getRootProps:v,getBackdropProps:F,getTransitionProps:ye,portalRef:Ee,isTopModal:ke,exited:oe,hasTransition:re}=it(k({},x,{rootRef:o})),H=k({},x,{exited:oe}),_=ct(H),W={};if(c.props.tabIndex===void 0&&(W.tabIndex="-1"),re){const{onEnter:O,onExited:K}=ye();W.onEnter=O,W.onExited=K}const se=(t=(s=b?.root)!=null?s:P.Root)!=null?t:dt,ie=(r=(i=b?.backdrop)!=null?i:P.Backdrop)!=null?r:m,q=(u=L?.root)!=null?u:I.root,Y=(p=L?.backdrop)!=null?p:I.backdrop,we=pe({elementType:se,externalSlotProps:q,externalForwardedProps:$,getSlotProps:v,additionalProps:{ref:o,as:T},ownerState:H,className:J(w,q?.className,_?.root,!H.open&&H.exited&&_?.hidden)}),Re=pe({elementType:ie,externalSlotProps:Y,additionalProps:g,getSlotProps:O=>F(k({},O,{onClick:K=>{A&&A(K),O!=null&&O.onClick&&O.onClick(K)}})),className:J(Y?.className,g?.className,_?.backdrop),ownerState:H});return!N&&!D&&(!re||oe)?null:a.jsx(Be,{ref:Ee,container:R,disablePortal:S,children:a.jsxs(se,k({},we,{children:[!B&&m?a.jsx(ie,k({},Re)):null,a.jsx(nt,{disableEnforceFocus:y,disableAutoFocus:d,disableRestoreFocus:j,isEnabled:ke,open:D,children:l.cloneElement(c,W)})]}))})}),ft=Ie`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,xt=C.div`
  position: fixed;
  inset: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 24px 12px;
  transition: opacity 0.25s ease;
  -webkit-overflow-scrolling: touch;
  padding-bottom: calc(env(safe-area-inset-bottom) + 12px);

  @media (min-width: 960px) {
    padding: 48px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,ht=C.div`
  width: 100%;
  max-width: 920px;
  background-color: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text_primary};
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 14px;
  max-height: calc(100vh - 48px);
  overflow: hidden;
  z-index: 50; /* ensure predictable stacking context */

  @media (min-width: 960px) {
    padding: 28px 32px;
    border-radius: 20px;
    max-height: calc(100vh - 96px);
  }
`,mt=C.div`
  overflow-y: auto;
  padding-right: 6px;
  -webkit-overflow-scrolling: touch;
`,gt=C.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin: 0 0 6px;

  @media (min-width: 960px) {
    font-size: 30px;
  }
`,bt=C.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
  line-height: 1.2;
`,vt=C.p`
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  color: ${({theme:e})=>e.text_primary};

  @media (min-width: 960px) {
    font-size: 16px;
  }
`,yt=C.div`
  position: relative;
  width: 100%;
  height: clamp(180px, 36vh, 360px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
  margin-top: 8px;
  z-index: 10; /* lower than CloseBtn */

  @media (min-width: 960px) {
    height: 360px;
    border-radius: 16px;
    margin-top: 10px;
  }
`,Et=C.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.12) 20%,
    rgba(255, 255, 255, 0.04) 40%
  );
  background-size: 200% 100%;
  animation: ${ft} 1.2s linear infinite;
  z-index: 5; /* ensure skeleton sits behind CloseBtn */

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,kt=C.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease;
  background-color: ${({theme:e})=>e.card_light};
  z-index: 8;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,X=C.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.95;
`,wt=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Rt=C.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.primary};
  background-color: ${({theme:e})=>e.primary+"18"};
  border: 1px solid ${({theme:e})=>e.primary+"44"};
  padding: 6px 12px;
  border-radius: 9999px;
  user-select: none;
`,Tt=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
`,ve=C.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${({theme:e})=>e.white};
  background-color: ${({theme:e})=>e.primary};
  border: 1px solid ${({theme:e})=>e.primary};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.12s ease, box-shadow 0.2s ease;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    padding: 12px 16px;
  }

  &:hover {
    transform: translateY(-2px);
  }
`,Pt=C(ve)`
  background-color: transparent;
  color: ${({theme:e})=>e.text_primary};
  border-color: ${({theme:e})=>e.text_secondary+"88"};
  box-shadow: none;

  &:hover {
    background-color: ${({theme:e})=>e.primary+"12"};
  }
`,Ct=C.button`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  background: ${({theme:e})=>e.card_light+"88"};
  border: none;
  color: ${({theme:e})=>e.text_primary};
  padding: 10px;
  border-radius: 10px;
  line-height: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 60; /* ensure CloseBtn sits on top of images/skeletons */

  &:hover {
    background: ${({theme:e})=>e.card_light+"aa"};
  }

  &:focus-visible {
    outline: 3px solid ${({theme:e})=>e.primary};
    outline-offset: 3px;
  }

  @media (min-width: 960px) {
    top: 14px;
    right: 18px;
    padding: 8px;
    background: transparent;
  }
`,St=l.memo(function({openModal:n,setOpenModal:o}){const t=n?.project||null,s=!!n?.state,[r,i]=l.useState(!1),[u,p]=l.useState(t?.image||""),h=l.useRef(null),m=l.useRef(null);l.useEffect(()=>{i(!1),p(t?.image||"")},[t]),l.useEffect(()=>(s?(m.current=document.activeElement,document.body.style.overflow="hidden",setTimeout(()=>{h.current?.focus()},0)):(document.body.style.overflow="",m.current&&m.current.focus&&m.current.focus()),()=>{document.body.style.overflow=""}),[s]),l.useEffect(()=>{if(!s)return;const f=c=>{if(c.key==="Escape")c.preventDefault(),g();else if(c.key==="Tab"){const R=h.current.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');if(!R||R.length===0){c.preventDefault();return}const T=R[0],P=R[R.length-1];c.shiftKey?document.activeElement===T&&(c.preventDefault(),P.focus()):document.activeElement===P&&(c.preventDefault(),T.focus())}};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[s]);const g=()=>{o({state:!1,project:null})},w=f=>{f.target===f.currentTarget&&g()};return a.jsx(pt,{open:s,onClose:g,"aria-labelledby":"project-title","aria-describedby":"project-desc","aria-modal":"true",closeAfterTransition:!0,children:a.jsx(xt,{onClick:w,children:a.jsxs(ht,{role:"dialog","aria-modal":"true","aria-labelledby":"project-title","aria-describedby":"project-desc",tabIndex:-1,ref:h,children:[a.jsx(Ct,{onClick:g,"aria-label":"Close project details",children:a.jsx(Ne,{})}),a.jsxs(mt,{children:[u?a.jsxs(yt,{children:[!r&&a.jsx(Et,{"aria-hidden":"true"}),a.jsx(kt,{src:u,alt:t?.title?`${t.title} preview`:"Project preview",loading:"lazy",onLoad:()=>i(!0),onError:()=>{i(!0),p("")},style:{opacity:r?1:0}})]}):null,a.jsx(gt,{id:"project-title",children:t?.title||"Untitled Project"}),t?.date&&a.jsx(bt,{children:t.date}),t?.tags?.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(X,{children:"Tech"}),a.jsx(wt,{children:t.tags.map((f,c)=>a.jsx(Rt,{children:f},`${f}-${c}`))})]}),t?.description&&a.jsxs(a.Fragment,{children:[a.jsx(X,{children:"Description"}),a.jsx(vt,{id:"project-desc",children:t.description})]}),(t?.demo||t?.code)&&a.jsxs(a.Fragment,{children:[a.jsx(X,{children:"Links"}),a.jsxs(Tt,{children:[t.demo&&a.jsxs(ve,{href:t.demo,target:"_blank",rel:"noopener noreferrer","aria-label":"Open live demo",children:[a.jsx(Le,{fontSize:"small"})," Live Demo"]}),t.code&&a.jsxs(Pt,{href:t.code,target:"_blank",rel:"noopener noreferrer","aria-label":"Open source code",children:[a.jsx($e,{fontSize:"small"})," Source Code"]})]})]})]})]})})})});export{St as default};
