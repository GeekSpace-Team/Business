import{X as ze,Y as Ae,r as o,Z as Xe,$ as Ye,h as G,j as I,_ as U,n as y,R as X,p as We,l as oe,a0 as ie,s as ae,m as Ee,k as He,o as Ge,a1 as qe,a2 as Ze,V as Je}from"./index-BB7KoYWS.js";const Qe=["className","component"];function et(e={}){const{themeId:t,defaultTheme:n,defaultClassName:u="MuiBox-root",generateClassName:r}=e,s=ze("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(Ae);return o.forwardRef(function(l,p){const d=Xe(n),m=Ye(l),{className:b,component:R="div"}=m,h=G(m,Qe);return I.jsx(s,U({as:R,ref:p,className:y(b,r?r(u):u),theme:t&&d[t]||d},h))})}const tt=typeof window<"u"?o.useLayoutEffect:o.useEffect;function nt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function H(e){const t=o.useRef(e);return tt(()=>{t.current=e}),o.useRef((...n)=>(0,t.current)(...n)).current}function he(...e){return o.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{nt(n,t)})},e)}const me={};function rt(e,t){const n=o.useRef(me);return n.current===me&&(n.current=e(t)),n}const st=[];function ot(e){o.useEffect(e,st)}class q{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new q}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function it(){const e=rt(q.create).current;return ot(e.disposeEffect),e}let Z=!0,re=!1;const at=new q,ut={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function lt(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&ut[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function ct(e){e.metaKey||e.altKey||e.ctrlKey||(Z=!0)}function ne(){Z=!1}function pt(){this.visibilityState==="hidden"&&re&&(Z=!0)}function ft(e){e.addEventListener("keydown",ct,!0),e.addEventListener("mousedown",ne,!0),e.addEventListener("pointerdown",ne,!0),e.addEventListener("touchstart",ne,!0),e.addEventListener("visibilitychange",pt,!0)}function dt(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Z||lt(t)}function ht(){const e=o.useCallback(r=>{r!=null&&ft(r.ownerDocument)},[]),t=o.useRef(!1);function n(){return t.current?(re=!0,at.start(100,()=>{re=!1}),t.current=!1,!0):!1}function u(r){return dt(r)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:u,onBlur:n,ref:e}}const be=X.createContext(null);function mt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){var n=function(s){return t&&o.isValidElement(s)?t(s):s},u=Object.create(null);return e&&o.Children.map(e,function(r){return r}).forEach(function(r){u[r.key]=n(r)}),u}function bt(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var u=Object.create(null),r=[];for(var s in e)s in t?r.length&&(u[s]=r,r=[]):r.push(s);var i,c={};for(var l in t){if(u[l])for(i=0;i<u[l].length;i++){var p=u[l][i];c[u[l][i]]=n(p)}c[l]=n(l)}for(i=0;i<r.length;i++)c[r[i]]=n(r[i]);return c}function S(e,t,n){return n[t]!=null?n[t]:e.props[t]}function gt(e,t){return ue(e.children,function(n){return o.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:S(n,"appear",e),enter:S(n,"enter",e),exit:S(n,"exit",e)})})}function Rt(e,t,n){var u=ue(e.children),r=bt(t,u);return Object.keys(r).forEach(function(s){var i=r[s];if(o.isValidElement(i)){var c=s in t,l=s in u,p=t[s],d=o.isValidElement(p)&&!p.props.in;l&&(!c||d)?r[s]=o.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:S(i,"exit",e),enter:S(i,"enter",e)}):!l&&c&&!d?r[s]=o.cloneElement(i,{in:!1}):l&&c&&o.isValidElement(p)&&(r[s]=o.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:S(i,"exit",e),enter:S(i,"enter",e)}))}}),r}var yt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},xt={component:"div",childFactory:function(t){return t}},le=function(e){We(t,e);function t(u,r){var s;s=e.call(this,u,r)||this;var i=s.handleExited.bind(mt(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,s){var i=s.children,c=s.handleExited,l=s.firstRender;return{children:l?gt(r,c):Rt(r,i,c),firstRender:!1}},n.handleExited=function(r,s){var i=ue(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(s),this.mounted&&this.setState(function(c){var l=U({},c.children);return delete l[r.key],{children:l}}))},n.render=function(){var r=this.props,s=r.component,i=r.childFactory,c=G(r,["component","childFactory"]),l=this.state.contextValue,p=yt(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,s===null?X.createElement(be.Provider,{value:l},p):X.createElement(be.Provider,{value:l},X.createElement(s,c,p))},t}(X.Component);le.propTypes={};le.defaultProps=xt;const Et=le;function Tt(e){const{className:t,classes:n,pulsate:u=!1,rippleX:r,rippleY:s,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,m]=o.useState(!1),b=y(t,n.ripple,n.rippleVisible,u&&n.ripplePulsate),R={width:i,height:i,top:-(i/2)+s,left:-(i/2)+r},h=y(n.child,d&&n.childLeaving,u&&n.childPulsate);return!c&&!d&&m(!0),o.useEffect(()=>{if(!c&&l!=null){const x=setTimeout(l,p);return()=>{clearTimeout(x)}}},[l,c,p]),I.jsx("span",{className:b,style:R,children:I.jsx("span",{className:h})})}const g=oe("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Mt=["center","classes","className"];let J=e=>e,ge,Re,ye,xe;const se=550,Ct=80,vt=ie(ge||(ge=J`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Bt=ie(Re||(Re=J`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Vt=ie(ye||(ye=J`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),wt=ae("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Pt=ae(Tt,{name:"MuiTouchRipple",slot:"Ripple"})(xe||(xe=J`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),g.rippleVisible,vt,se,({theme:e})=>e.transitions.easing.easeInOut,g.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,g.child,g.childLeaving,Bt,se,({theme:e})=>e.transitions.easing.easeInOut,g.childPulsate,Vt,({theme:e})=>e.transitions.easing.easeInOut),Nt=o.forwardRef(function(t,n){const u=Ee({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:s={},className:i}=u,c=G(u,Mt),[l,p]=o.useState([]),d=o.useRef(0),m=o.useRef(null);o.useEffect(()=>{m.current&&(m.current(),m.current=null)},[l]);const b=o.useRef(!1),R=it(),h=o.useRef(null),x=o.useRef(null),_=o.useCallback(f=>{const{pulsate:E,rippleX:T,rippleY:L,rippleSize:j,cb:O}=f;p(M=>[...M,I.jsx(Pt,{classes:{ripple:y(s.ripple,g.ripple),rippleVisible:y(s.rippleVisible,g.rippleVisible),ripplePulsate:y(s.ripplePulsate,g.ripplePulsate),child:y(s.child,g.child),childLeaving:y(s.childLeaving,g.childLeaving),childPulsate:y(s.childPulsate,g.childPulsate)},timeout:se,pulsate:E,rippleX:T,rippleY:L,rippleSize:j},d.current)]),d.current+=1,m.current=O},[s]),$=o.useCallback((f={},E={},T=()=>{})=>{const{pulsate:L=!1,center:j=r||E.pulsate,fakeElement:O=!1}=E;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=O?null:x.current,w=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,N;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(w.width/2),P=Math.round(w.height/2);else{const{clientX:D,clientY:B}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(D-w.left),P=Math.round(B-w.top)}if(j)N=Math.sqrt((2*w.width**2+w.height**2)/3),N%2===0&&(N+=1);else{const D=Math.max(Math.abs((M?M.clientWidth:0)-v),v)*2+2,B=Math.max(Math.abs((M?M.clientHeight:0)-P),P)*2+2;N=Math.sqrt(D**2+B**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{_({pulsate:L,rippleX:v,rippleY:P,rippleSize:N,cb:T})},R.start(Ct,()=>{h.current&&(h.current(),h.current=null)})):_({pulsate:L,rippleX:v,rippleY:P,rippleSize:N,cb:T})},[r,_,R]),K=o.useCallback(()=>{$({},{pulsate:!0})},[$]),k=o.useCallback((f,E)=>{if(R.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,R.start(0,()=>{k(f,E)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),m.current=E},[R]);return o.useImperativeHandle(n,()=>({pulsate:K,start:$,stop:k}),[K,$,k]),I.jsx(wt,U({className:y(g.root,s.root,i),ref:x},c,{children:I.jsx(Et,{component:null,exit:!0,children:l})}))}),It=Nt;function Lt(e){return He("MuiButtonBase",e)}const Dt=oe("MuiButtonBase",["root","disabled","focusVisible"]),Ft=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],St=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:u,classes:r}=e,i=Ge({root:["root",t&&"disabled",n&&"focusVisible"]},Lt,r);return n&&u&&(i.root+=` ${u}`),i},$t=ae("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Dt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),kt=o.forwardRef(function(t,n){const u=Ee({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:s=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:m=!1,focusRipple:b=!1,LinkComponent:R="a",onBlur:h,onClick:x,onContextMenu:_,onDragLeave:$,onFocus:K,onFocusVisible:k,onKeyDown:f,onKeyUp:E,onMouseDown:T,onMouseLeave:L,onMouseUp:j,onTouchEnd:O,onTouchMove:M,onTouchStart:w,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:N,type:D}=u,B=G(u,Ft),z=o.useRef(null),C=o.useRef(null),Te=he(C,N),{isFocusVisibleRef:ce,onFocus:Me,onBlur:Ce,ref:ve}=ht(),[F,Y]=o.useState(!1);p&&F&&Y(!1),o.useImperativeHandle(r,()=>({focusVisible:()=>{Y(!0),z.current.focus()}}),[]);const[Q,Be]=o.useState(!1);o.useEffect(()=>{Be(!0)},[]);const Ve=Q&&!d&&!p;o.useEffect(()=>{F&&b&&!d&&Q&&C.current.pulsate()},[d,b,F,Q]);function V(a,fe,Oe=m){return H(de=>(fe&&fe(de),!Oe&&C.current&&C.current[a](de),!0))}const we=V("start",T),Pe=V("stop",_),Ne=V("stop",$),Ie=V("stop",j),Le=V("stop",a=>{F&&a.preventDefault(),L&&L(a)}),De=V("start",w),Fe=V("stop",O),Se=V("stop",M),$e=V("stop",a=>{Ce(a),ce.current===!1&&Y(!1),h&&h(a)},!1),ke=H(a=>{z.current||(z.current=a.currentTarget),Me(a),ce.current===!0&&(Y(!0),k&&k(a)),K&&K(a)}),ee=()=>{const a=z.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},te=o.useRef(!1),je=H(a=>{b&&!te.current&&F&&C.current&&a.key===" "&&(te.current=!0,C.current.stop(a,()=>{C.current.start(a)})),a.target===a.currentTarget&&ee()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&ee()&&a.key==="Enter"&&!p&&(a.preventDefault(),x&&x(a))}),Ue=H(a=>{b&&a.key===" "&&C.current&&F&&!a.defaultPrevented&&(te.current=!1,C.current.stop(a,()=>{C.current.pulsate(a)})),E&&E(a),x&&a.target===a.currentTarget&&ee()&&a.key===" "&&!a.defaultPrevented&&x(a)});let W=l;W==="button"&&(B.href||B.to)&&(W=R);const A={};W==="button"?(A.type=D===void 0?"button":D,A.disabled=p):(!B.href&&!B.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const _e=he(n,ve,z),pe=U({},u,{centerRipple:s,component:l,disabled:p,disableRipple:d,disableTouchRipple:m,focusRipple:b,tabIndex:v,focusVisible:F}),Ke=St(pe);return I.jsxs($t,U({as:W,className:y(Ke.root,c),ownerState:pe,onBlur:$e,onClick:x,onContextMenu:Pe,onFocus:ke,onKeyDown:je,onKeyUp:Ue,onMouseDown:we,onMouseLeave:Le,onMouseUp:Ie,onDragLeave:Ne,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:De,ref:_e,tabIndex:p?-1:v,type:D},A,B,{children:[i,Ve?I.jsx(It,U({ref:Te,center:s},P)):null]}))}),At=kt,jt=oe("MuiBox",["root"]),Ut=jt,_t=qe(),Kt=et({themeId:Ze,defaultTheme:_t,defaultClassName:Ut.root,generateClassName:Je.generate}),Xt=Kt;export{Xt as B,be as T,H as a,tt as b,it as c,ht as d,q as e,At as f,nt as s,he as u};
