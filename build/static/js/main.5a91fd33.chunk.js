(this["webpackJsonpprototype-sashimi"]=this["webpackJsonpprototype-sashimi"]||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var c=n(40),r=n(0),a=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"hero is-success",children:Object(r.jsxs)("div",{className:"hero-body",children:[Object(r.jsx)("p",{className:"title",children:"furu-vis"}),Object(r.jsx)("p",{className:"subtitle",children:"furu-vis"})]})})})},s=n(3),i=n(13),l=n(2),j=n.n(l),o=n(41),u=n(4),d=n(1),b=function(e){var t=e.currentArea,n=Object(d.useState)([]),c=Object(s.a)(n,2),a=c[0],l=c[1],b=Object(d.useState)(null),x=Object(s.a)(b,2),h=x[0],O=x[1];return Object(d.useEffect)((function(){Object(i.a)(j.a.mark((function e(){var t,n,c,r,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/japan_simplify.topojson");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,o.a(n,n.objects["N03-21_210101-N03-21_210101"]);case 8:c=e.sent,630,250,1890,138.915833,139.796111,35.672778,35.128889,r=u.b().center([139.355972,35.39083350000001]).translate([315,190]).scale(1890),a=u.c().projection(r),s=[],c.features.map((function(e){s.push({path:a(e),area_code:e.properties.N03_007})})),l(s);case 18:case"end":return e.stop()}}),e)})))()}),[]),Object(d.useEffect)((function(){O(t)}),[t]),a.length?Object(r.jsx)("div",{className:"column is-5",children:Object(r.jsx)("div",{className:"box",children:Object(r.jsx)("svg",{viewBox:"-50 0 770 325",width:"500",height:"550",children:Object(r.jsx)("g",{children:a.map((function(e,t){return Object(r.jsx)("path",{d:e.path,stroke:"black",strokeWidth:"0.4",strokeOpacity:"0.5",style:{fill:h>=e.area_code&&h<e.area_code+20?"red":"white"}},t)}))})})})}):Object(r.jsx)("div",{className:"column is-5",children:Object(r.jsx)("div",{className:"box",children:Object(r.jsx)("p",{children:"loading"})})})},x=function(e){var t=e.scale,n=e.graphHeight,c=e.label,a="#888",i=t.range(),l=Object(s.a)(i,2),j=l[0],o=l[1],u=window.innerWidth;return Object(r.jsxs)("g",{children:[Object(r.jsx)("line",{x1:0,y1:j,x2:0,y2:o+2,stroke:a,strokeWidth:"2"}),Object(r.jsxs)("g",{children:[Object(r.jsx)("g",{transform:"translate(-80, ".concat(n/2,") rotate(-90)"),children:Object(r.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:u>768?"15":"12",children:c})}),t.ticks().map((function(e,n){return Object(r.jsxs)("g",{transform:"translate(0, ".concat(t(e),")"),children:[Object(r.jsx)("line",{x1:"0",y1:"0",x2:"5",y2:"0",stroke:a}),Object(r.jsx)("text",{x:"-8",y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:u>768?"12":"10",children:e})]},n)}))]})]})},h=function(e){var t=e.scale,n=e.graphWidth,c=e.graphHeight,a=e.label,i="#888",l=c,j=window.innerWidth,o=t.range(),u=Object(s.a)(o,2),d=u[0],b=u[1];return Object(r.jsxs)("g",{children:[Object(r.jsx)("line",{x1:d,y1:l,x2:b+5,y2:l,stroke:i}),Object(r.jsxs)("g",{children:[Object(r.jsx)("g",{transform:"translate(".concat(n/2,", ").concat(l+40,")"),children:Object(r.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:a})}),t.ticks(5).map((function(e,n){return Object(r.jsxs)("g",{transform:"translate(".concat(t(e),", 0)"),children:[Object(r.jsx)("line",{x1:"0",y1:c,x2:"0",y2:c-10,stroke:i}),Object(r.jsx)("text",{x:"0",y:l+15,textAnchor:"middle",dominantBaseline:"central",fontSize:j>768?"12":"10",children:e})]},n)}))]})]})},O=function(e){var t=e.effect,n=Object(d.useState)([]),c=Object(s.a)(n,2),a=c[0],l=c[1],o=Object(d.useState)([]),b=Object(s.a)(o,2),O=b[0],p=b[1],f=Object(d.useState)("price"),g=Object(s.a)(f,2),m=g[0],v=g[1],y=Object(d.useState)(null),k=Object(s.a)(y,2),N=k[0],w=k[1],S=Object(d.useState)([]),_=Object(s.a)(S,2),W=_[0],A=_[1],B=Object(d.useState)(null),H=Object(s.a)(B,2);H[0],H[1];if(Object(d.useEffect)((function(){Object(i.a)(j.a.mark((function e(){var t,n,c,r,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/population_test.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,l(n),e.next=9,fetch("./data/price_test.json");case 9:return c=e.sent,e.next=12,c.json();case 12:return r=e.sent,p(r),e.next=16,fetch("./data/2019_test.json");case 16:return a=e.sent,e.next=19,a.json();case 19:s=e.sent,A(s);case 21:case"end":return e.stop()}}),e)})))()}),[]),0===a.length)return Object(r.jsx)("div",{className:"column is-5",children:"Loading..."});var z=50,C=200,E=500,J=500,T=50+C+E,q=z+50+J,F=u.d().domain(u.a(O,(function(e){return e.year}))).range([0,E]).nice(),L=u.d().domain(u.a(W,(function(e){return e.rank}))).range([0,E]).nice(),V=function(e){t(e.currentTarget.dataset.id),console.log(e.currentTarget.dataset.id)},D=u.d().domain([0,u.a(a,(function(e){return e.population}))[1]]).range([J,0]),G=u.d().domain([0,u.a(O,(function(e){return e.price}))[1]]).range([J,0]),I=u.d().domain([0,u.a(W,(function(e){return e.price}))[1]]).range([J,0]);return Object(r.jsx)("div",{className:"column is-5",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsxs)("svg",{viewBox:"".concat(-C," ").concat(-z," ").concat(T," ").concat(q),width:T,height:q,children:[null===N&&m&&Object(r.jsx)(h,{scale:F,graphWidth:E,graphHeight:J,label:"\u5e74"}),null===N&&m&&Object(r.jsx)(x,{scale:"price"===m?G:D,graphHeight:J,label:"price"===m?"\u53d7\u3051\u5165\u308c\u984d":"\u4eba\u53e3"}),null===N&&"price"===m&&Object(r.jsx)("g",{children:O.map((function(e,t){var n=t>0?O[t-1]:null;if(t>0)return Object(r.jsx)("line",{x1:F(n.year),y1:G(n.price),x2:F(e.year),y2:G(e.price),stroke:"black"},e.id)}))}),null===N&&"population"===m&&Object(r.jsx)("g",{children:a.map((function(e,t){var n=t>0?a[t-1]:null;if(t>0)return Object(r.jsx)("line",{x1:F(n.year),y1:D(n.population),x2:F(e.year),y2:D(e.population),stroke:"black"},e.id)}))}),2019===N&&W.length>0&&Object(r.jsx)(x,{scale:I,graphHeight:J,label:"\u53d7\u3051\u5165\u308c\u91d1\u984d"}),2019===N&&W.length>0&&Object(r.jsx)(h,{scale:L,graphWidth:E,graphHeight:J,label:"\u5e02\u533a\u753a\u6751\uff08\u9806\u4f4d\uff09"}),2019===N&&W.length>0&&Object(r.jsx)("g",{children:W.map((function(e,t){var n=t>0?W[t-1]:null;if(t>0)return Object(r.jsx)("line",{x1:L(n.rank),y1:I(n.price),x2:L(e.rank),y2:I(e.price),stroke:"black"},e.id)}))}),")"]}),Object(r.jsxs)("div",{children:[2019===N&&W.length>0&&Object(r.jsx)("ul",{children:W.map((function(e,t){return Object(r.jsx)("li",{"data-id":e.id,onClick:V,children:e.name},t)}))}),Object(r.jsx)("span",{children:"\u7279\u5fb4\u3092\u9078\u629e"}),Object(r.jsx)("button",{onClick:function(e){w(null),v("population")},children:"\u4eba\u53e3"}),")"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"\u5e74\u5ea6\u3092\u9078\u629e"}),Object(r.jsx)("button",{onClick:function(e){v(null),w(2019)},children:"2019"})]})]})})},p=function(){var e=Object(d.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{className:"columns",children:[Object(r.jsx)(b,{currentArea:n}),Object(r.jsx)(O,{effect:c})]})},f=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsx)("div",{className:"content has-text-centered",children:Object(r.jsx)("p",{children:"Furu-Vis"})})})},g=(n(130),function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(a,{}),Object(r.jsx)(p,{}),Object(r.jsx)(f,{})]})});Object(c.render)(Object(r.jsx)(g,{}),document.querySelector("#content"))}},[[131,1,2]]]);
//# sourceMappingURL=main.5a91fd33.chunk.js.map