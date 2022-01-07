(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},82373:function(t,e,n){"use strict";n.d(e,{Z:function(){return B}});var r=n(28520),i=n.n(r),o=n(85893),a=n(4604),c=n(71230),u=n(15746),s=n(96486),l=n.n(s),d=n(67294),f=n(42336),v=n(41664),p=n(99490);function h(t){var e,n,r,i=t.note,a=t.noteIndex,c=(0,f.gt)({note:i,noteIndex:a});try{e=l().get(i,"custom.date",!1)?(n=i.custom.date,r=p.DateTime.DATE_SHORT,p.DateTime.fromISO(n).toLocaleString(r)):function(t,e){return p.DateTime.fromMillis(t).toLocaleString(e)}(i.created,p.DateTime.DATE_SHORT)}catch(u){throw Error("no date found for note ".concat(i.id))}return(0,o.jsx)("div",{children:(0,o.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[(0,o.jsx)("h2",{itemProp:"headline",children:(0,o.jsx)(v.default,{href:c,children:i.title})}),!l().isUndefined(e)&&(0,o.jsx)("p",{children:e}),l().has(i,"custom.excerpt")&&(0,o.jsx)("p",{itemProp:"description",children:i.custom.excerpt})]})})}var m=n(9008),x=n(25935);function y(t){var e=t.content,n=(0,x.ZP)(e);return(0,o.jsx)(m.default,{children:n})}var g=n(25903),j=n(2962),b=n(1512),w=function(t){return g.Time.DateTime.fromMillis(l().toInteger(t)).setZone("utc").toLocaleString("yyyy-LL-dd")};function O(t){var e=t.note,n=t.config,r=(0,b.vm)().router.asPath;if(l().some(["403"],(function(t){return r==="/notes/".concat(t,"/")})))return null;var i,a=g.PublishUtils.getSEOPropsFromConfig(n),c=g.PublishUtils.getSEOPropsFromNote(e),u=l().defaults(c,a),s=u.title,d=u.excerpt,v=(null===u||void 0===u?void 0:u.image)?[u.image]:[],p=function(t){var e=t.sitePath,n=t.seoProps,r=t.siteConfig;return n.canonicalBaseUrl?[r.siteUrl,e].join(""):n.canonicalUrl?n.canonicalUrl:[r.canonicalBaseUrl?r.canonicalBaseUrl:(0,f.N0)(r),e].join("")}({sitePath:r,seoProps:u,siteConfig:n.site}),h=u.twitter?{handle:u.twitter,site:u.twitter,cardType:"summary_large_image"}:void 0;return(0,o.jsx)(j.PB,{title:s,description:d,canonical:p,noindex:u.noindex,twitter:h,openGraph:{title:s,description:d,url:p,images:v,type:"article",article:{publishedTime:w(u.created),modifiedTime:w(u.updated),tags:(i=e,i.tags?Array.isArray(i.tags)?i.tags:[i.tags]:[])}}})}var P=n(57450),S=n(37802);function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){E(t,e,n[e])}))}return t}function N(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=S.Z.Link,I=function(t){t=(t=t.replace(/_/g,"-")).replace(/--/g,"-");var e=[];return t.split("-").forEach((function(t){e.push(t.substr(0,1).toUpperCase()+t.substr(1))})),e.join(" ")},U=function(t){var e,n=t.note,r=N(t,["note"]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(S.Z,_({style:{zIndex:1},className:"dendron-toc"},r,{children:Object.entries(null===n||void 0===n?void 0:n.anchors).map((function(t){var n=T(t,2),r=n[0],i=n[1];return"header"===(null===i||void 0===i?void 0:i.type)?(0,o.jsx)(L,{href:"#".concat(r),title:I(null!==(e=null===i||void 0===i?void 0:i.text)&&void 0!==e?e:null===i||void 0===i?void 0:i.value)}):(0,o.jsx)(o.Fragment,{})}))}))})},D=n(54856),Z=n(85416);function A(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=n(45875).b.HEADER;function B(t){var e,n=t.note,r=t.body,s=t.collectionChildren,f=t.noteIndex,v=t.customHeadContent,p=t.config,m=(0,a.createLogger)("Note"),x=(0,b.vm)().getActiveNoteId,g=C(d.useState(void 0),2),j=g[0],w=g[1],S=x();"root"===S&&(S=f.id);var E=(0,D.$s)();(0,D.O5)((function(t){return t.engine}));m.info({ctx:"enter",id:S});(0,b.dD)().isMobile;d.useEffect((function(){if(m.info({ctx:"updateNoteBody:enter",id:S}),l().isUndefined(S))m.info({ctx:"updateNoteBody:exit",id:S,state:"id undefined"});else{if(S===n.id)return E(Z.w.Nw.setLoadingStatus(a.LoadingStatus.FULFILLED)),void m.info({ctx:"updateNoteBody:exit",id:S,state:"id = note.id"});var t;m.info({ctx:"updateNoteBody:fetch:pre",id:S}),fetch("/data/notes/".concat(S,".html")).then((t=i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.info({ctx:"updateNoteBody:fetch:post",id:S}),t.next=3,e.text();case 3:n=t.sent,w(n),E(Z.w.Nw.setLoadingStatus(a.LoadingStatus.FULFILLED));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){A(o,r,i,a,c,"next",t)}function c(t){A(o,r,i,a,c,"throw",t)}a(void 0)}))}))}}),[S]);var _=S===n.id?r:j;if(l().isUndefined(_))return(0,o.jsx)(P.Z,{});var N=(null===(e=n.custom)||void 0===e?void 0:e.has_collection)&&!l().isNull(s)?s.map((function(t){return h({note:t,noteIndex:f})})):null;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O,{note:n,config:p}),v&&(0,o.jsx)(y,{content:v}),(0,o.jsx)(c.Z,{children:(0,o.jsx)(u.Z,{span:24,children:(0,o.jsxs)(c.Z,{gutter:20,children:[(0,o.jsxs)(u.Z,{xs:24,md:18,children:[(0,o.jsx)(a.DendronNote,{noteContent:_,config:p}),N]}),(0,o.jsx)(u.Z,{xs:0,md:6,children:(0,o.jsx)(U,{note:n,offsetTop:k.HEIGHT})})]})})})]})}},5075:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return i}});var r=n(82373),i=!0;e.default=r.Z}},function(t){t.O(0,[155,774,888,179],(function(){return e=45301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);