(this["webpackJsonpprototype-sashimi"]=this["webpackJsonpprototype-sashimi"]||[]).push([[0],{174:function(e,t,a){"use strict";a.r(t);var c=a(67),n=a(0),r=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"hero is-small is-success",children:Object(n.jsxs)("div",{className:"hero-body",children:[Object(n.jsx)("p",{className:"title",children:"Furu-vis"}),Object(n.jsx)("p",{className:"subtitle",children:"~\u3075\u308b\u3055\u3068\u7d0d\u7a0e\u3069\u3053\u304c\u591a\u3044\u306e\uff1f~"})]})})})},i=a(3),s=a(8),o=a(4),l=a.n(o),j=a(69),d=a(2),h=a(1);var b=function(e){var t=e.children,a=(e.width,e.height,Object(h.useRef)()),c=Object(h.useState)(1),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(h.useState)(0),j=Object(i.a)(l,2),b=j[0],u=j[1],x=Object(h.useState)(0),O=Object(i.a)(x,2),p=O[0],f=O[1];return Object(h.useEffect)((function(){var e=d.i().on("zoom",(function(e){var t=e.transform,a=t.x,c=t.y,n=t.k;o(n),u(a),f(c)}));e.scaleExtent([.5,2]),d.h(a.current).call(e)}),[]),Object(n.jsx)("svg",{ref:a,viewBox:"-50 0 770 325",width:"500",height:"600",children:Object(n.jsx)("g",{transform:"translate(".concat(b,", ").concat(p,")scale(").concat(s,")"),children:t})})},u=function(e){var t=e.currentArea,a=Object(h.useState)([]),c=Object(i.a)(a,2),r=c[0],o=c[1],u=Object(h.useState)(null),x=Object(i.a)(u,2),O=x[0],p=x[1],f=Object(h.useState)(null),g=Object(i.a)(f,2),m=g[0],v=g[1],y=Object(h.useState)([]),k=Object(i.a)(y,2),N=k[0],S=k[1],w=d.c().center([138.855972,37.2008335]).translate([315,190]).scale(2100);return Object(h.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/japan_simplify.topojson");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,j.a(a,a.objects["N03-21_210101-N03-21_210101"]);case 8:c=e.sent,n=d.d().projection(w),r=[],c.features.map((function(e){r.push({path:n(e),areaCode:e.properties.N03_007})})),o(r),v(c);case 14:case"end":return e.stop()}}),e)})))()}),[]),Object(h.useEffect)((function(){if(m){var e=JSON.parse(JSON.stringify(m)),a=String(t.id).slice(0,-1);e.features.length=0,e.features=m.features.filter((function(e){return t.area===e.properties.N03_003||String(e.properties.N03_007)===a}));var c=w(d.b(e));S(c),p(t)}}),[t]),r.length?Object(n.jsx)("div",{className:"column is-5",children:Object(n.jsx)("div",{className:"box",style:{marginLeft:"20px",marginRight:"0"},children:Object(n.jsxs)(b,{width:200,height:500,children:[Object(n.jsx)("g",{children:r.map((function(e,t){return Object(n.jsx)("path",{d:e.path,stroke:"black",strokeWidth:"0.8",strokeOpacity:"0.5",style:{fill:O==e.areaCode?"red":"white"}},t)}))}),N.length>0?Object(n.jsx)("g",{children:Object(n.jsx)("circle",{cx:N[0],cy:N[1],r:"15",strokeWidth:"4",fill:"rgba(255,0,0,0)",stroke:"red"})}):""]})})}):Object(n.jsx)("div",{className:"column is-5",children:Object(n.jsx)("div",{className:"box",style:{height:"500px"},children:Object(n.jsx)("p",{children:"\u65e5\u672c\u5730\u56f3\u3092\u63cf\u753b\u4e2d..."})})})},x=a(5),O=function(e){var t=e.scale,a=e.graphWidth,c=e.graphHeight,r=e.location,s=e.graphName,o=e.label,l="#888",j="left"===r?0:a+40,d=t.range(),h=Object(i.a)(d,2),b=h[0],u=h[1],x=window.innerWidth,O=0,p=0;return O="left"===r?-8:50,p="left"===r?"overall"===s?-80:-50:a+105,Object(n.jsxs)("g",{children:[Object(n.jsx)("line",{x1:j,y1:b,x2:j,y2:u+2,stroke:l,strokeWidth:"2"}),Object(n.jsxs)("g",{children:[Object(n.jsx)("g",{transform:"translate(".concat(p,", ").concat(c/2,") rotate(").concat("left"===r?-90:90,")"),children:Object(n.jsx)("text",{x:"0",y:"0",dominantBaseline:"central",fontSize:x>768?"15":"12",textAnchor:"middle",children:o})}),Object(n.jsx)("g",{children:Object(n.jsx)("text",{transform:"translate(".concat("individual"===s?-40:-60,",20)"),x:"0",y:"0",textAnchor:"start",fontSize:"10",children:"\u4e07"})}),t.ticks().map((function(e,a){return Object(n.jsxs)("g",{transform:"translate(".concat(j,", ").concat(t(e),")"),children:[Object(n.jsx)("line",{x1:"0",y1:"0",x2:"left"===r?5:-5,y2:"0",stroke:l}),Object(n.jsx)("text",{x:O,y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:x>768?"12":"10",children:e})]},a)}))]})]})},p=function(e){var t=e.scale,a=e.graphWidth,c=e.graphHeight,r=e.label,s=e.setData,o=e.graphType,l=e.optionData,j=c,d="year"===o?10:20,b=t.range(),u=Object(i.a)(b,2),O=u[0],p=u[1],f=Object(h.useState)(null),g=Object(i.a)(f,2),m=g[0],v=g[1],y=function(e){s("year"===o?e.currentTarget.dataset.id:{id:e.currentTarget.dataset.id,area:e.currentTarget.dataset.name})},k=function(e){console.log(e.currentTarget.dataset.id),v(e.currentTarget.dataset.id)};return Object(n.jsxs)("g",{children:[Object(n.jsx)("line",{x1:O,y1:j,x2:p+40,y2:j,stroke:"#888"}),Object(n.jsxs)("g",{children:[Object(n.jsx)("g",{transform:"translate(".concat(a/2,", ").concat(j+("area"===o?48:40),")"),children:Object(n.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:r})}),t.ticks(d).map((function(e,a){var c,r="area"!==o||20===a?e:l[a].id;return Object(n.jsx)("g",{transform:"translate(".concat(t(e)+20,", ").concat(j+("area"===o?7:15),")"),children:Object(n.jsx)("text",(c={x:"0",y:"0",textAnchor:"middle",dominantBaseline:"central",fontSize:"area"!==o?"12":"10",transform:"area"===o?"rotate(45)":""},Object(x.a)(c,"textAnchor","area"===o?"start":"middle"),Object(x.a)(c,"style",{cursor:"pointer",textDecoration:r===m?"underline":"none"}),Object(x.a)(c,"data-id",r),Object(x.a)(c,"data-name","area"===o&&a<20?l[a].area:""),Object(x.a)(c,"onClick",y),Object(x.a)(c,"onMouseOver",k),Object(x.a)(c,"children","area"!==o||20===a?e:l[a].area),c))},a)}))]})]})};var f=function(e){var t=e.scale,a=e.graphWidth;return Object(n.jsx)("g",{transform:"translate(200,0)",children:t.domain().map((function(e,c){return Object(n.jsxs)("g",{transform:"translate(".concat(a-80,", ").concat(20+15*c,")"),children:[Object(n.jsx)("circle",{r:"5",fill:t(e)}),Object(n.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},c)}))})},g=function(e){var t=e.setYear,a=e.colorScale,c=Object(h.useState)([]),r=Object(i.a)(c,2),o=r[0],j=r[1],b=Object(h.useState)([]),u=Object(i.a)(b,2),x=u[0],g=u[1],m=10,v=100,y=400,k=250,N=200+v+y,S=m+50+k;if(Object(h.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/population.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,j(a),e.next=9,fetch("./data/price_all.json");case 9:return c=e.sent,e.next=12,c.json();case 12:n=e.sent,g(n);case 14:case"end":return e.stop()}}),e)})))()}),[]),0===x.length)return Object(n.jsx)("div",{className:"box",style:{width:N,height:"200px"},children:"\u8aad\u307f\u8fbc\u307f\u4e2d..."});var w=d.e().domain(d.a(x,(function(e){return e.year}))).range([0,y]),W=d.e().domain([0,d.a(o,(function(e){return e.population}))[1]]).range([k,0]),H=d.e().domain([0,d.a(x,(function(e){return e.price/1e4}))[1]]).range([k,0]);return Object(n.jsx)("div",{className:"box",style:{marginRight:"20px",marginBottom:"5px",paddingBottom:"0"},children:Object(n.jsx)("div",{children:Object(n.jsxs)("svg",{viewBox:"".concat(-v," ").concat(-m," ").concat(N," ").concat(S),width:N,height:S,children:[Object(n.jsx)(p,{scale:w,graphWidth:y,graphHeight:k,label:"\u5e74",setData:t,graphType:"year"}),Object(n.jsx)(O,{scale:H,graphWidth:y,graphHeight:k,graphName:"overall",location:"left",label:"\u53d7\u3051\u5165\u308c\u984d"}),Object(n.jsx)(O,{scale:W,graphWidth:y,graphHeight:k,graphName:"overall",location:"right",label:"\u4eba\u53e3"}),Object(n.jsx)(f,{scale:a,graphWidth:y}),Object(n.jsx)("g",{children:x.map((function(e,t){var c=w(e.year)+20,r=H(e.price/1e4);return Object(n.jsx)("path",{d:"M ".concat(c-10," ").concat(r,"\n                       H ").concat(c+10," V ").concat(k," H ").concat(c-10," \n                      V ").concat(r,"\n                      "),stroke:a("\u53d7\u3051\u5165\u308c\u984d"),fill:a("\u53d7\u3051\u5165\u308c\u984d")},e.id)}))}),Object(n.jsx)("g",{children:o.map((function(e,t){var c=t>0?o[t-1]:null;return Object(n.jsxs)("g",{children:[t>0&&Object(n.jsx)("line",{x1:w(c.year)+20,y1:W(c.population),x2:w(e.year)+20,y2:W(e.population),stroke:a("\u4eba\u53e3"),strokeWidth:"3"},10*e.id),Object(n.jsx)("circle",{cx:w(e.year)+20,cy:W(e.population),r:"4",fill:a("\u4eba\u53e3")},e.id)]},100*e.id)}))})]})})})},m=function(e){var t=e.setArea,a=e.year,c=e.colorScale,r=Object(h.useState)([]),o=Object(i.a)(r,2),j=o[0],b=o[1],u=0,x=60,g=500,m=250,v=200+x+g,y=u+55+m;if(Object(h.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a,c,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},a=2008,c=20;case 3:if(!(c<33)){e.next=16;break}return n=c<=30?"H"+c:"R"+(c-30),e.next=7,fetch("./data/".concat(n,".json"));case 7:return r=e.sent,e.next=10,r.json();case 10:i=e.sent,t[a]=i,a++;case 13:c++,e.next=3;break;case 16:b(t);case 17:case"end":return e.stop()}}),e)})))()}),[]),0===j.length)return Object(n.jsx)("div",{className:"box",style:{width:v,height:"100px"},children:"\u8aad\u307f\u8fbc\u307f\u4e2d..."});if(!a)return Object(n.jsx)("div",{className:"box",style:{width:v},children:"\u4e0a\u306e\u30b0\u30e9\u30d5\u304b\u3089\u5e74\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"});var k=j[a].map((function(e){return{id:e.id,area:e.area}})),N=d.e().domain(d.a([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).range([0,g]),S=d.e().domain([0,d.a(j[a],(function(e){return e.price/1e4}))[1]]).range([m,0]),w=d.e().domain([0,d.a(j[a],(function(e){return e.population}))[1]]).range([m,0]);return Object.keys(j).length?Object(n.jsx)("div",{className:"box",style:{marginRight:"20px",marginTop:"5px",paddingLeft:"5px",paddingTop:"5px"},children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{style:{paddingLeft:"20px",paddingBottom:"10px"},children:[null!==a?a:"","\u5e74"]}),Object(n.jsxs)("svg",{viewBox:"".concat(-x," ").concat(-u," ").concat(v," ").concat(y),width:v,height:y,children:[Object(n.jsx)(O,{scale:S,graphWidth:g,graphHeight:m,graphName:"individual",location:"left",label:"\u53d7\u3051\u5165\u308c\u91d1\u984d"}),Object(n.jsx)(O,{scale:w,graphWidth:g,graphHeight:m,graphName:"individual",location:"right",label:"\u4eba\u53e3"}),Object(n.jsx)(p,{scale:N,graphWidth:g,graphHeight:m,label:"\u5e02\u533a\u753a\u6751",setData:t,graphType:"area",optionData:k}),Object(n.jsx)(f,{scale:c,graphWidth:g}),Object(n.jsx)("g",{children:j[a].map((function(e,t){var a=N(t+1)+20,r=S(e.price/1e4);return Object(n.jsx)("path",{d:"M ".concat(a-10," ").concat(r,"\n                   H ").concat(a+10," V ").concat(m," H ").concat(a-10," \n                  V ").concat(r,"\n                  "),fill:c("\u53d7\u3051\u5165\u308c\u984d")},e.id)}))}),Object(n.jsx)("g",{children:j[a].map((function(e,t){var r=t>0?j[a][t-1]:null;if(t>0)return Object(n.jsxs)("g",{children:[Object(n.jsx)("line",{x1:N(t)+20,y1:w(r.population),x2:N(t+1)+20,y2:w(e.population),stroke:c("\u4eba\u53e3"),strokeWidth:"3"},10*e.id),Object(n.jsx)("circle",{cx:N(t+1)+20,cy:w(e.population),r:"4",fill:c("\u4eba\u53e3")},e.id)]},100*e.id)}))})]})]})}):void 0},v=function(){var e=d.f(d.g),t=Object(h.useState)(null),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(h.useState)(2008),o=Object(i.a)(s,2),l=o[0],j=o[1];return Object(n.jsxs)("div",{className:"columns is-multiline",style:{marginTop:"10px"},children:[Object(n.jsx)(u,{currentArea:c}),Object(n.jsxs)("div",{className:"column is-7",children:[Object(n.jsx)(g,{setYear:j,colorScale:e}),Object(n.jsx)(m,{setArea:r,year:l,colorScale:e})]})]})},y=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("div",{className:"content has-text-centered",children:Object(n.jsxs)("p",{children:["\u3053\u306e\u30b5\u30a4\u30c8\u306f",Object(n.jsx)("a",{href:"https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/080430_2_kojin.html",target:"_blank",children:"\u7dcf\u52d9\u7701"}),"\u304b\u3089\u30c7\u30fc\u30bf\u3092\u6301\u3063\u3066\u304d\u3066\u3044\u307e\u3059",Object(n.jsx)("br",{}),"-team-Sashimi-"]})})})},k=(a(173),function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(r,{}),Object(n.jsx)(v,{}),Object(n.jsx)(y,{})]})});Object(c.render)(Object(n.jsx)(k,{}),document.querySelector("#content"))}},[[174,1,2]]]);
//# sourceMappingURL=main.8d2ae375.chunk.js.map