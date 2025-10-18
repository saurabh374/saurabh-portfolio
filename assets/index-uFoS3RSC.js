import{c as Z,j as a,r as d,u as V,g as ee,a as le,s as ce,b as Pe,d as Ce,T as Se,_ as te,e as y,f as de,h as je,i as ge,k as me,l as be,m as ne,n as Q,o as Ee,t as D,v as oe,w as ue,x as pe,y as Ie,z as fe,R as G,q as T,W as Me}from"./index-CPXnolcN.js";function Ne(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const $e=Z(a.jsx("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),Le=Z(a.jsx("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"}),"Code"),Fe=Z(a.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"Launch");function Be(e){return typeof e=="function"?e():e}const Ae=d.forwardRef(function(t,n){const{children:o,container:i,disablePortal:r=!1}=t,[s,l]=d.useState(null),u=V(d.isValidElement(o)?ee(o):null,n);if(le(()=>{r||l(Be(i)||document.body)},[i,r]),le(()=>{if(s&&!r)return ce(n,s),()=>{ce(n,null)}},[n,s,r]),r){if(d.isValidElement(o)){const x={ref:u};return d.cloneElement(o,x)}return a.jsx(d.Fragment,{children:o})}return a.jsx(d.Fragment,{children:s&&Pe.createPortal(o,s)})}),_e=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],De={entering:{opacity:1},entered:{opacity:1}},Oe=d.forwardRef(function(t,n){const o=Ce(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:l,easing:u,in:x,onEnter:m,onEntered:b,onEntering:w,onExit:k,onExited:p,onExiting:$,style:C,timeout:S=i,TransitionComponent:j=Se}=t,c=te(t,_e),E=d.useRef(null),v=V(E,ee(l),n),P=h=>N=>{if(h){const f=E.current;N===void 0?h(f):h(f,N)}},R=P(w),I=P((h,N)=>{je(h);const f=de({style:C,timeout:S,easing:u},{mode:"enter"});h.style.webkitTransition=o.transitions.create("opacity",f),h.style.transition=o.transitions.create("opacity",f),m&&m(h,N)}),B=P(b),M=P($),_=P(h=>{const N=de({style:C,timeout:S,easing:u},{mode:"exit"});h.style.webkitTransition=o.transitions.create("opacity",N),h.style.transition=o.transitions.create("opacity",N),k&&k(h)}),A=P(p),L=h=>{r&&r(E.current,h)};return a.jsx(j,y({appear:s,in:x,nodeRef:E,onEnter:I,onEntered:B,onEntering:R,onExit:_,onExited:A,onExiting:M,addEndListener:L,timeout:S},c,{children:(h,N)=>d.cloneElement(l,y({style:y({opacity:0,visibility:h==="exited"&&!x?"hidden":void 0},De[h],C,l.props.style),ref:v},N))}))});function ze(e){return ge("MuiBackdrop",e)}me("MuiBackdrop",["root","invisible"]);const He=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],We=e=>{const{classes:t,invisible:n}=e;return Ee({root:["root",n&&"invisible"]},ze,t)},Ue=ne("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>y({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Ke=d.forwardRef(function(t,n){var o,i,r;const s=be({props:t,name:"MuiBackdrop"}),{children:l,className:u,component:x="div",components:m={},componentsProps:b={},invisible:w=!1,open:k,slotProps:p={},slots:$={},TransitionComponent:C=Oe,transitionDuration:S}=s,j=te(s,He),c=y({},s,{component:x,invisible:w}),E=We(c),v=(o=p.root)!=null?o:b.root;return a.jsx(C,y({in:k,timeout:S},j,{children:a.jsx(Ue,y({"aria-hidden":!0},v,{as:(i=(r=$.root)!=null?r:m.Root)!=null?i:x,className:Q(E.root,u,v?.className),ownerState:y({},c,v?.ownerState),classes:E,ref:n,children:l}))}))});function Ve(e){const t=D(e);return t.body===e?oe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function W(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function he(e){return parseInt(oe(e).getComputedStyle(e).paddingRight,10)||0}function Ye(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function xe(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,s=>{const l=r.indexOf(s)===-1,u=!Ye(s);l&&u&&W(s,i)})}function X(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function qe(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Ve(o)){const s=Ne(D(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${he(o)+s}px`;const l=D(o).querySelectorAll(".mui-fixed");[].forEach.call(l,u=>{n.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${he(u)+s}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=D(o).body;else{const s=o.parentElement,l=oe(o);r=s?.nodeName==="HTML"&&l.getComputedStyle(s).overflowY==="scroll"?s:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:s,property:l})=>{r?s.style.setProperty(l,r):s.style.removeProperty(l)})}}function Ge(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Xe{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&W(t.modalRef,!1);const i=Ge(n);xe(n,t.mount,t.modalRef,i,!0);const r=X(this.containers,s=>s.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=X(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=qe(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=X(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&W(t.modalRef,n),xe(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&W(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Je=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Qe(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ze(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function et(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ze(e))}function tt(e){const t=[],n=[];return Array.from(e.querySelectorAll(Je)).forEach((o,i)=>{const r=Qe(o);r===-1||!et(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function nt(){return!0}function ot(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=tt,isEnabled:s=nt,open:l}=e,u=d.useRef(!1),x=d.useRef(null),m=d.useRef(null),b=d.useRef(null),w=d.useRef(null),k=d.useRef(!1),p=d.useRef(null),$=V(ee(t),p),C=d.useRef(null);d.useEffect(()=>{!l||!p.current||(k.current=!n)},[n,l]),d.useEffect(()=>{if(!l||!p.current)return;const c=D(p.current);return p.current.contains(c.activeElement)||(p.current.hasAttribute("tabIndex")||p.current.setAttribute("tabIndex","-1"),k.current&&p.current.focus()),()=>{i||(b.current&&b.current.focus&&(u.current=!0,b.current.focus()),b.current=null)}},[l]),d.useEffect(()=>{if(!l||!p.current)return;const c=D(p.current),E=R=>{C.current=R,!(o||!s()||R.key!=="Tab")&&c.activeElement===p.current&&R.shiftKey&&(u.current=!0,m.current&&m.current.focus())},v=()=>{const R=p.current;if(R===null)return;if(!c.hasFocus()||!s()||u.current){u.current=!1;return}if(R.contains(c.activeElement)||o&&c.activeElement!==x.current&&c.activeElement!==m.current)return;if(c.activeElement!==w.current)w.current=null;else if(w.current!==null)return;if(!k.current)return;let I=[];if((c.activeElement===x.current||c.activeElement===m.current)&&(I=r(p.current)),I.length>0){var B,M;const _=!!((B=C.current)!=null&&B.shiftKey&&((M=C.current)==null?void 0:M.key)==="Tab"),A=I[0],L=I[I.length-1];typeof A!="string"&&typeof L!="string"&&(_?L.focus():A.focus())}else R.focus()};c.addEventListener("focusin",v),c.addEventListener("keydown",E,!0);const P=setInterval(()=>{c.activeElement&&c.activeElement.tagName==="BODY"&&v()},50);return()=>{clearInterval(P),c.removeEventListener("focusin",v),c.removeEventListener("keydown",E,!0)}},[n,o,i,s,l,r]);const S=c=>{b.current===null&&(b.current=c.relatedTarget),k.current=!0,w.current=c.target;const E=t.props.onFocus;E&&E(c)},j=c=>{b.current===null&&(b.current=c.relatedTarget),k.current=!0};return a.jsxs(d.Fragment,{children:[a.jsx("div",{tabIndex:l?0:-1,onFocus:j,ref:x,"data-testid":"sentinelStart"}),d.cloneElement(t,{ref:$,onFocus:S}),a.jsx("div",{tabIndex:l?0:-1,onFocus:j,ref:m,"data-testid":"sentinelEnd"})]})}function rt(e){return typeof e=="function"?e():e}function st(e){return e?e.props.hasOwnProperty("in"):!1}const it=new Xe;function at(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=it,closeAfterTransition:r=!1,onTransitionEnter:s,onTransitionExited:l,children:u,onClose:x,open:m,rootRef:b}=e,w=d.useRef({}),k=d.useRef(null),p=d.useRef(null),$=V(p,b),[C,S]=d.useState(!m),j=st(u);let c=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(c=!1);const E=()=>D(k.current),v=()=>(w.current.modalRef=p.current,w.current.mount=k.current,w.current),P=()=>{i.mount(v(),{disableScrollLock:o}),p.current&&(p.current.scrollTop=0)},R=ue(()=>{const f=rt(t)||E().body;i.add(v(),f),p.current&&P()}),I=d.useCallback(()=>i.isTopModal(v()),[i]),B=ue(f=>{k.current=f,f&&(m&&I()?P():p.current&&W(p.current,c))}),M=d.useCallback(()=>{i.remove(v(),c)},[c,i]);d.useEffect(()=>()=>{M()},[M]),d.useEffect(()=>{m?R():(!j||!r)&&M()},[m,M,j,r,R]);const _=f=>g=>{var F;(F=f.onKeyDown)==null||F.call(f,g),!(g.key!=="Escape"||g.which===229||!I())&&(n||(g.stopPropagation(),x&&x(g,"escapeKeyDown")))},A=f=>g=>{var F;(F=f.onClick)==null||F.call(f,g),g.target===g.currentTarget&&x&&x(g,"backdropClick")};return{getRootProps:(f={})=>{const g=Ie(e);delete g.onTransitionEnter,delete g.onTransitionExited;const F=y({},g,f);return y({role:"presentation"},F,{onKeyDown:_(F),ref:$})},getBackdropProps:(f={})=>{const g=f;return y({"aria-hidden":!0},g,{onClick:A(g),open:m})},getTransitionProps:()=>{const f=()=>{S(!1),s&&s()},g=()=>{S(!0),l&&l(),r&&M()};return{onEnter:pe(f,u?.props.onEnter),onExited:pe(g,u?.props.onExited)}},rootRef:$,portalRef:B,isTopModal:I,exited:C,hasTransition:j}}function lt(e){return ge("MuiModal",e)}me("MuiModal",["root","hidden","backdrop"]);const ct=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],dt=e=>{const{open:t,exited:n,classes:o}=e;return Ee({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},lt,o)},ut=ne("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>y({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),pt=ne(Ke,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ft=d.forwardRef(function(t,n){var o,i,r,s,l,u;const x=be({name:"MuiModal",props:t}),{BackdropComponent:m=pt,BackdropProps:b,className:w,closeAfterTransition:k=!1,children:p,container:$,component:C,components:S={},componentsProps:j={},disableAutoFocus:c=!1,disableEnforceFocus:E=!1,disableEscapeKeyDown:v=!1,disablePortal:P=!1,disableRestoreFocus:R=!1,disableScrollLock:I=!1,hideBackdrop:B=!1,keepMounted:M=!1,onBackdropClick:_,open:A,slotProps:L,slots:h}=x,N=te(x,ct),f=y({},x,{closeAfterTransition:k,disableAutoFocus:c,disableEnforceFocus:E,disableEscapeKeyDown:v,disablePortal:P,disableRestoreFocus:R,disableScrollLock:I,hideBackdrop:B,keepMounted:M}),{getRootProps:g,getBackdropProps:F,getTransitionProps:ye,portalRef:ke,isTopModal:Re,exited:re,hasTransition:se}=at(y({},f,{rootRef:n})),H=y({},f,{exited:re}),O=dt(H),U={};if(p.props.tabIndex===void 0&&(U.tabIndex="-1"),se){const{onEnter:z,onExited:K}=ye();U.onEnter=z,U.onExited=K}const ie=(o=(i=h?.root)!=null?i:S.Root)!=null?o:ut,ae=(r=(s=h?.backdrop)!=null?s:S.Backdrop)!=null?r:m,Y=(l=L?.root)!=null?l:j.root,q=(u=L?.backdrop)!=null?u:j.backdrop,Te=fe({elementType:ie,externalSlotProps:Y,externalForwardedProps:N,getSlotProps:g,additionalProps:{ref:n,as:C},ownerState:H,className:Q(w,Y?.className,O?.root,!H.open&&H.exited&&O?.hidden)}),we=fe({elementType:ae,externalSlotProps:q,additionalProps:b,getSlotProps:z=>F(y({},z,{onClick:K=>{_&&_(K),z!=null&&z.onClick&&z.onClick(K)}})),className:Q(q?.className,b?.className,O?.backdrop),ownerState:H});return!M&&!A&&(!se||re)?null:a.jsx(Ae,{ref:ke,container:$,disablePortal:P,children:a.jsxs(ie,y({},Te,{children:[!B&&m?a.jsx(ae,y({},we)):null,a.jsx(ot,{disableEnforceFocus:E,disableAutoFocus:c,disableRestoreFocus:R,isEnabled:Re,open:A,children:d.cloneElement(p,U)})]}))})}),ht=T.div`
  width: 100%;
  height: 100%;
  position: fixed;
  inset: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 48px 20px;
  transition: all 0.5s ease;
`,xt=T.div`
  max-width: 860px;
  width: 100%;
  background-color: ${({theme:e})=>e.card};
  color: ${({theme:e})=>e.text_primary};
  border-radius: 20px;
  padding: 28px 32px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 18px;
`,gt=T.h3`
  font-size: 30px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin: 0 0 6px;
  @media (max-width: 600px) {
    font-size: 26px;
  }
`,mt=T.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
  line-height: 1.2;
`,bt=T.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary};
  line-height: 1.7;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`,Et=Me`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,vt=T.div`
  position: relative;
  width: 100%;
  max-width: 860px;      
  height: 360px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
`,yt=T.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.18) 20%,
    rgba(255, 255, 255, 0.06) 40%
  );
  background-size: 200% 100%;
  animation: ${Et} 1.2s linear infinite;
`,kt=T.img`
  width: 100%;
  height: 100%;
  object-fit: contain;   /* fit inside container without cropping */
  display: block;
  transition: opacity 0.4s ease;
  background-color: ${({theme:e})=>e.card_light}; /* optional placeholder bg */
`,J=T.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.9;
`,Rt=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
`,Tt=T.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.primary};
  background-color: ${({theme:e})=>e.primary+"22"};
  border: 1.5px solid ${({theme:e})=>e.primary+"55"};
  padding: 7px 14px;
  border-radius: 9999px;
  cursor: default;
  user-select: none;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background-color: ${({theme:e})=>e.primary+"44"};
  }
`,wt=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 12px;
`,ve=T.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: ${({theme:e})=>e.white};
  background-color: ${({theme:e})=>e.primary};
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid ${({theme:e})=>e.primary};
  transition: transform 0.15s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: translateY(0);
    opacity: 0.9;
  }
`,Pt=T(ve)`
  background-color: transparent;
  color: ${({theme:e})=>e.text_primary};
  border-color: ${({theme:e})=>e.text_secondary+"aa"};
  box-shadow: none;

  &:hover {
    background-color: ${({theme:e})=>e.primary+"15"};
    box-shadow: none;
  }
`,Ct=T.button`
  position: absolute;
  top: 14px;
  right: 18px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.text_primary};
  padding: 8px;
  border-radius: 12px;
  line-height: 0;
  transition: background-color 0.25s ease;

  &:hover {
    background: ${({theme:e})=>e.card_light+"55"};
  }
  &:focus-visible {
    outline: 3px solid ${({theme:e})=>e.primary};
    outline-offset: 3px;
  }
`,jt=({openModal:e,setOpenModal:t})=>{const n=e?.project,[o,i]=G.useState(!1),[r,s]=G.useState(n?.image||"");G.useEffect(()=>{i(!1),s(n?.image||"")},[n]);const l=()=>t({state:!1,project:null});return a.jsx(ft,{open:!!e?.state,onClose:l,"aria-labelledby":"project-title","aria-describedby":"project-desc",children:a.jsx(ht,{onClick:u=>{u.target===u.currentTarget&&l()},children:a.jsxs(xt,{role:"dialog",children:[a.jsx(Ct,{onClick:l,"aria-label":"Close project details",children:a.jsx($e,{})}),r?a.jsxs(vt,{children:[!o&&a.jsx(yt,{"aria-hidden":"true"}),a.jsx(kt,{src:r,alt:n?.title?`${n.title} preview`:"Project preview",loading:"lazy",onLoad:()=>i(!0),onError:()=>{i(!0),s("")},style:{opacity:o?1:0}})]}):null,a.jsx(gt,{id:"project-title",children:n?.title}),n?.date&&a.jsx(mt,{children:n.date}),n?.tags?.length>0&&a.jsxs(a.Fragment,{children:[a.jsx(J,{children:"Tech"}),a.jsx(Rt,{children:n.tags.map((u,x)=>a.jsx(Tt,{children:u},`${u}-${x}`))})]}),n?.description&&a.jsxs(a.Fragment,{children:[a.jsx(J,{children:"Description"}),a.jsx(bt,{id:"project-desc",children:n.description})]}),(n?.demo||n?.code)&&a.jsxs(a.Fragment,{children:[a.jsx(J,{children:"Links"}),a.jsxs(wt,{children:[n.demo&&a.jsxs(ve,{href:n.demo,target:"_blank",rel:"noreferrer noopener","aria-label":"Open live demo",children:[a.jsx(Fe,{fontSize:"small"})," Live Demo"]}),n.code&&a.jsxs(Pt,{href:n.code,target:"_blank",rel:"noreferrer noopener","aria-label":"Open source code",children:[a.jsx(Le,{fontSize:"small"})," Source Code"]})]})]})]})})})};export{jt as default};
