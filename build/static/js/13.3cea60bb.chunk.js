(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{672:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return x}));var c=n(4),r=n.n(c),a=n(15),i=n(20),u=n(0),o=n(13),s=n.n(o),j=n(66),b=n(183),l=n(80),f=n(673),O=n(37),d=n(131),p=function(){var e=Object(d.a)().slowRefresh,t=Object(u.useState)(),n=Object(i.a)(t,2),c=n[0],o=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(b,Object(O.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,o(new s.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},x=function(e){var t=Object(u.useState)(new s.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],j=Object(d.a)().slowRefresh;return Object(u.useEffect)((function(){(function(){var e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(b,Object(O.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,o(new s.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e,j]),c};t.a=function(e){var t=Object(u.useState)(new s.a(0)),n=Object(i.a)(t,2),c=n[0],o=n[1],b=Object(j.m)(),l=b.account,O=b.ethereum,p=Object(d.a)().fastRefresh;return Object(u.useEffect)((function(){l&&O&&function(){var t=Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.c)(O,e,l);case 2:n=t.sent,o(new s.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,O,e,p]),c}},675:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return O}));var c=n(51),r=n(4),a=n.n(r),i=n(15),u=n(0),o=n(66),s=n(56),j=n(129),b=n(665),l=n(664),f=function(e){var t=Object(s.b)(),n=Object(o.m)().account,c=Object(l.d)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(b.b)(c,e,n);case 2:return i=r.sent,t(Object(j.a)(n)),r.abrupt("return",i);case 5:case"end":return r.stop()}}),r)}))),[n,t,e,c])}},O=function(e){var t=Object(o.m)().account,n=Object(l.d)();return{onReward:Object(u.useCallback)(Object(i.a)(a.a.mark((function r(){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(b.b)(n,r,t)])}),[]),r.abrupt("return",Promise.all(i));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}}},777:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return se}));var c=n(12),r=n(50),a=n(0),i=n(3),u=n(34),o=n(171),s=n(177),j=n(4),b=n.n(j),l=n(15),f=n(20),O=n(66),d=n(13),p=n.n(d),x=n(675),h=n(16),m=n(29),g=n(37),v=n(73),w=n(681),k=n(131),S=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(k.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(l.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.a.map((function(e){return{address:Object(g.d)(),name:"pendingFishz",params:[e.pid,r]}})),e.next=3,Object(m.a)(v,t);case 3:n=e.sent,a=w.a.map((function(e,t){return Object(h.a)(Object(h.a)({},e),{},{balance:new p.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},z=n(671),y=n(696),F=function(e){var t=e.value,n=e.decimals,r=e.fontSize,i=void 0===r?"40px":r,o=e.prefix,s=Object(y.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),j=s.countUp,b=s.update,l=Object(a.useRef)(b);return Object(a.useEffect)((function(){l.current(t)}),[t,l]),Object(c.jsxs)(u.F,{bold:!0,fontSize:i,children:[o,j]})},E=function(e){var t=e.earningsSum,n=Object(o.a)();return Object(O.m)().account?Object(c.jsx)(F,{value:t}):Object(c.jsx)(u.F,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},C=function(e){var t=e.cakeBalance,n=Object(o.a)();return Object(O.m)().account?Object(c.jsx)(F,{value:t,fontSize:"24px"}):Object(c.jsx)(u.F,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},R=n(110),G=n(672),N=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(k.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(l.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.a.map((function(e){return{address:Object(g.d)(),name:"pendingFishz",params:[e.pid,r]}})),e.next=3,Object(m.a)(v,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},B=n(663);function T(){var e=Object(r.a)(["\n  margin-top: 24px;\n"]);return T=function(){return e},e}function D(){var e=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return D=function(){return e},e}function H(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return H=function(){return e},e}function L(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return L=function(){return e},e}function P(){var e=Object(r.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]);return P=function(){return e},e}var $=Object(i.e)(u.h)(P()),Q=i.e.div(L()),W=i.e.img(H()),A=i.e.div(D(),(function(e){return e.theme.colors.textSubtle})),J=i.e.div(T()),M=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],i=Object(O.m)().account,s=Object(o.a)(),j=S(),d=Object(B.a)(Object(G.a)(Object(g.a)())),h=Object(R.f)().toNumber(),m=N().reduce((function(e,t){return e+new p.a(t).div(new p.a(10).pow(18)).toNumber()}),0),v=j.filter((function(e){return e.balance.toNumber()>0})),w=Object(x.a)(v.map((function(e){return e.pid}))).onReward,k=Object(a.useCallback)(Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,w();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[w]);return Object(c.jsx)($,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.o,{size:"xl",mb:"24px",children:s(542,"Farms & Staking")}),Object(c.jsx)(W,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(c.jsxs)(Q,{children:[Object(c.jsx)(A,{children:s(544,"EGG to Harvest")}),Object(c.jsx)(E,{earningsSum:m}),Object(c.jsxs)(A,{children:["~$",(h*m).toFixed(2)]})]}),Object(c.jsxs)(Q,{children:[Object(c.jsx)(A,{children:s(546,"EGG in Wallet")}),Object(c.jsx)(C,{cakeBalance:d}),Object(c.jsxs)(A,{children:["~$",(h*d).toFixed(2)]})]}),Object(c.jsx)(J,{children:i?Object(c.jsx)(u.d,{id:"harvest-all",disabled:v.length<=0||n,onClick:k,fullWidth:!0,children:n?s(548,"Collecting EGG"):s(999,"Harvest all (".concat(v.length,")"))}):Object(c.jsx)(z.a,{fullWidth:!0})})]})})},U=n(676);function V(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return V=function(){return e},e}function I(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return I=function(){return e},e}var q=Object(i.e)(u.h)(I()),K=i.e.div(V()),X=function(){var e=Object(o.a)(),t=Object(G.c)(),n=Object(G.b)(Object(g.a)()),r=Object(R.c)(),a=Object(R.f)(),i=t?t.minus(n):new U.a(0),s=Object(B.a)(i),j=a.times(i),b=0;return r&&r[0]&&r[0].eggPerBlock&&(b=new U.a(r[0].eggPerBlock).div(new U.a(10).pow(18)).toNumber()),Object(c.jsx)(q,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.o,{size:"xl",mb:"24px",children:e(534,"Egg Stats")}),Object(c.jsxs)(K,{children:[Object(c.jsx)(u.F,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(c.jsx)(F,{fontSize:"14px",value:Object(B.a)(j),decimals:0,prefix:"$"})]}),Object(c.jsxs)(K,{children:[Object(c.jsx)(u.F,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(c.jsx)(F,{fontSize:"14px",value:Object(B.a)(t),decimals:0})]}),Object(c.jsxs)(K,{children:[Object(c.jsx)(u.F,{fontSize:"14px",children:e(538,"Total Burned")}),Object(c.jsx)(F,{fontSize:"14px",value:Object(B.a)(n),decimals:0})]}),Object(c.jsxs)(K,{children:[Object(c.jsx)(u.F,{fontSize:"14px",children:e(10004,"Circulating Supply")}),s&&Object(c.jsx)(F,{fontSize:"14px",value:s,decimals:0})]}),Object(c.jsxs)(K,{children:[Object(c.jsx)(u.F,{fontSize:"14px",children:e(540,"New EGG/block")}),Object(c.jsx)(u.F,{bold:!0,fontSize:"14px",children:b})]})]})})};function Y(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);return Y=function(){return e},e}var Z=Object(i.e)(u.h)(Y()),_=function(){var e=Object(o.a)(),t=Object(R.g)();return Object(c.jsx)(Z,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.o,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(F,{value:t.toNumber(),prefix:"$",decimals:2}),Object(c.jsx)(u.F,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},ee=n(772);function te(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return te=function(){return e},e}function ne(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return ne=function(){return e},e}var ce=Object(i.e)(u.h)(ne()),re=(i.e.div(te()),function(){var e=Object(o.a)();return Object(c.jsx)(ce,{children:Object(c.jsxs)(u.i,{children:[Object(c.jsx)(u.o,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(c.jsx)(ee.a,{dataSource:{sourceType:"profile",screenName:"CatzCoin"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})});function ae(){var e=Object(r.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(r.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3b.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  // background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png');\n    // background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n    background-size: contain;\n  }\n"]);return ie=function(){return e},e}var ue=i.e.div(ie(),(function(e){return e.theme.mediaQueries.lg})),oe=Object(i.e)(u.b)(ae(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),se=function(){var e=Object(o.a)();return Object(c.jsxs)(s.a,{children:[Object(c.jsxs)(ue,{children:[Object(c.jsx)(u.o,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(999,"")}),Object(c.jsx)(u.F,{children:e(578,"Excellent DEFI app on Binance Smart Chain.")})]}),Object(c.jsx)("div",{children:Object(c.jsxs)(oe,{children:[Object(c.jsx)(M,{}),Object(c.jsx)(re,{}),Object(c.jsx)(X,{}),Object(c.jsx)(_,{})]})})]})}}}]);
//# sourceMappingURL=13.3cea60bb.chunk.js.map