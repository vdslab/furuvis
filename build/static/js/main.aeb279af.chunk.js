(this["webpackJsonpprototype-sashimi"]=this["webpackJsonpprototype-sashimi"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var c=a(66),n=a(0),r=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"hero is-small is-success",children:Object(n.jsxs)("div",{className:"hero-body",children:[Object(n.jsx)("p",{className:"title",children:"Furu-vis"}),Object(n.jsx)("p",{className:"subtitle",children:"~\u3075\u308b\u3055\u3068\u7d0d\u7a0e\u3069\u3053\u304c\u591a\u3044\u306e\uff1f~"})]})})})},i=a(3),s=a(7),o=a(4),l=a.n(o),j=a(68),h=a(2),d=a(1);var u=function(e){var t=e.children,a=(e.width,e.height,Object(d.useRef)()),c=Object(d.useState)(1),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(d.useState)(0),j=Object(i.a)(l,2),u=j[0],x=j[1],b=Object(d.useState)(0),p=Object(i.a)(b,2),O=p[0],f=p[1];return Object(d.useEffect)((function(){var e=h.i().on("zoom",(function(e){var t=e.transform,a=t.x,c=t.y,n=t.k;o(n),x(a),f(c)}));e.scaleExtent([.5,2]),h.h(a.current).call(e)}),[]),Object(n.jsx)("svg",{ref:a,viewBox:"-50 0 770 325",width:"500",height:"600",children:Object(n.jsx)("g",{transform:"translate(".concat(u,", ").concat(O,")scale(").concat(s,")"),children:t})})},x=function(e){var t=e.currentArea,a=Object(d.useState)([]),c=Object(i.a)(a,2),r=c[0],o=c[1],x=Object(d.useState)(null),b=Object(i.a)(x,2),p=(b[0],b[1]),O=Object(d.useState)(null),f=Object(i.a)(O,2),g=f[0],m=f[1],v=Object(d.useState)([]),y=Object(i.a)(v,2),k=y[0],N=y[1],S=h.c().center([138.855972,37.2008335]).translate([315,190]).scale(2100);return Object(d.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/japan_simplify.topojson");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,j.a(a,a.objects["N03-21_210101-N03-21_210101"]);case 8:c=e.sent,n=h.d().projection(S),r=[],c.features.map((function(e){r.push({path:n(e),areaCode:e.properties.N03_007})})),o(r),m(c);case 14:case"end":return e.stop()}}),e)})))()}),[]),Object(d.useEffect)((function(){if(g){var e=JSON.parse(JSON.stringify(g)),a=String(t.id).slice(0,-1);e.features.length=0,e.features=g.features.filter((function(e){return t.area===e.properties.N03_003||String(e.properties.N03_007)===a}));var c=S(h.b(e));N(c),p(a)}}),[t]),r.length?Object(n.jsx)("div",{className:"column is-5",children:Object(n.jsx)("div",{className:"box",style:{marginLeft:"20px",marginRight:"0"},children:Object(n.jsxs)(u,{width:200,height:500,children:[Object(n.jsx)("g",{children:r.map((function(e,t){return Object(n.jsx)("path",{d:e.path,stroke:"black",strokeWidth:"0.8",strokeOpacity:"0.5",style:{fill:"white"}},t)}))}),k.length>0?Object(n.jsx)("g",{children:Object(n.jsx)("circle",{cx:k[0],cy:k[1],r:"15",strokeWidth:"4",fill:"rgba(255,0,0,0)",stroke:"red"})}):""]})})}):Object(n.jsx)("div",{className:"column is-5",children:Object(n.jsx)("div",{className:"box",style:{height:"500px"},children:Object(n.jsx)("p",{children:"\u65e5\u672c\u5730\u56f3\u3092\u63cf\u753b\u4e2d..."})})})},b=function(e){var t=e.scale,a=e.graphWidth,c=e.graphHeight,r=e.location,s=e.graphName,o=e.label,l="#888",j="left"===r?0:a+40,h=t.range(),d=Object(i.a)(h,2),u=d[0],x=d[1],b=window.innerWidth,p=0,O=0;return p="left"===r?-8:50,O="left"===r?"overall"===s?-80:-50:a+105,Object(n.jsxs)("g",{children:[Object(n.jsx)("line",{x1:j,y1:u,x2:j,y2:x+2,stroke:l,strokeWidth:"2"}),Object(n.jsxs)("g",{children:[Object(n.jsx)("g",{transform:"translate(".concat(O,", ").concat(c/2,") rotate(").concat("left"===r?-90:90,")"),children:Object(n.jsx)("text",{x:"0",y:"0",dominantBaseline:"central",fontSize:b>768?"15":"12",textAnchor:"middle",children:o})}),Object(n.jsx)("g",{children:Object(n.jsx)("text",{transform:"translate(".concat("individual"===s?-40:-60,",20)"),x:"0",y:"0",textAnchor:"start",fontSize:"10",children:"\u4e07"})}),t.ticks().map((function(e,a){return Object(n.jsxs)("g",{transform:"translate(".concat(j,", ").concat(t(e),")"),children:[Object(n.jsx)("line",{x1:"0",y1:"0",x2:"left"===r?5:-5,y2:"0",stroke:l}),Object(n.jsx)("text",{x:p,y:"0",textAnchor:"end",dominantBaseline:"central",fill:"black",fontSize:b>768?"12":"10",children:e})]},a)}))]})]})},p=function(e){var t=e.scale,a=e.graphWidth,c=e.graphHeight,r=e.label,s=e.setData,o=e.graphType,l=e.optionData,j=c,h="year"===o?10:20,u=t.range(),x=Object(i.a)(u,2),b=x[0],p=x[1],O=Object(d.useState)(null),f=Object(i.a)(O,2),g=f[0],m=f[1],v=function(e){s("year"===o?e.currentTarget.dataset.id:{id:e.currentTarget.dataset.id,area:e.currentTarget.dataset.name})},y=function(e){m(Number(e.currentTarget.dataset.id))};return Object(n.jsxs)("g",{children:[Object(n.jsx)("line",{x1:b,y1:j,x2:p+40,y2:j,stroke:"#888"}),Object(n.jsxs)("g",{children:[Object(n.jsx)("g",{transform:"translate(".concat(a/2,", ").concat(j+("area"===o?48:40),")"),children:Object(n.jsx)("text",{x:"0",y:"0",textAnchor:"end",dominantBaseline:"central",fontSize:"15",children:r})}),t.ticks(h).map((function(e,a){var c="area"!==o?e:l[a].id;return Object(n.jsx)("g",{transform:"translate(".concat(t(e)+20,", ").concat(j+("area"===o?7:15),")"),children:Object(n.jsx)("text",{x:"0",y:"0",dominantBaseline:"central",fontSize:"area"!==o?"12":"10",transform:"area"===o?"rotate(45)":"",textAnchor:"area"===o?"start":"middle",style:{cursor:"pointer",textDecorationLine:c==g?"overline":"none"},"data-id":c,"data-name":"area"===o?l[a].area:"",onClick:v,onMouseOver:y,children:"area"!==o?e:l[a].area})},a)}))]})]})};var O=function(e){var t=e.scale,a=e.graphWidth;return Object(n.jsx)("g",{transform:"translate(200,0)",children:t.domain().map((function(e,c){return Object(n.jsxs)("g",{transform:"translate(".concat(a-80,", ").concat(20+15*c,")"),children:[Object(n.jsx)("circle",{r:"5",fill:t(e)}),Object(n.jsx)("text",{x:"10",fontSize:"11",dominantBaseline:"central",children:e})]},c)}))})},f=function(e){var t=e.setYear,a=e.colorScale,c=Object(d.useState)([]),r=Object(i.a)(c,2),o=r[0],j=r[1],u=Object(d.useState)([]),x=Object(i.a)(u,2),f=x[0],g=x[1],m=10,v=100,y=400,k=300,N=200+v+y,S=m+50+k;if(Object(d.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/population.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,j(a),e.next=9,fetch("./data/price_all.json");case 9:return c=e.sent,e.next=12,c.json();case 12:n=e.sent,g(n);case 14:case"end":return e.stop()}}),e)})))()}),[]),0===f.length)return Object(n.jsx)("div",{className:"box",style:{width:N,height:"200px"},children:"\u8aad\u307f\u8fbc\u307f\u4e2d..."});var w=h.e().domain(h.a(f,(function(e){return e.year}))).range([0,y]),W=h.e().domain([0,h.a(o,(function(e){return e.population}))[1]]).range([k,0]),H=h.e().domain([0,h.a(f,(function(e){return e.price/1e4}))[1]]).range([k,0]);return Object(n.jsx)("div",{className:"box",style:{marginRight:"20px",marginBottom:"5px",paddingBottom:"0"},children:Object(n.jsx)("div",{children:Object(n.jsxs)("svg",{viewBox:"".concat(-v," ").concat(-m," ").concat(N," ").concat(S),width:N,height:S,children:[Object(n.jsx)(p,{scale:w,graphWidth:y,graphHeight:k,label:"\u5e74",setData:t,graphType:"year"}),Object(n.jsx)(b,{scale:H,graphWidth:y,graphHeight:k,graphName:"overall",location:"left",label:"\u53d7\u3051\u5165\u308c\u984d"}),Object(n.jsx)(b,{scale:W,graphWidth:y,graphHeight:k,graphName:"overall",location:"right",label:"\u4eba\u53e3"}),Object(n.jsx)(O,{scale:a,graphWidth:y}),Object(n.jsx)("g",{children:f.map((function(e,t){var c=w(e.year)+20,r=H(e.price/1e4);return Object(n.jsx)("path",{d:"M ".concat(c-10," ").concat(r,"\n                       H ").concat(c+10," V ").concat(k," H ").concat(c-10," \n                      V ").concat(r,"\n                      "),stroke:a("\u53d7\u3051\u5165\u308c\u984d"),fill:a("\u53d7\u3051\u5165\u308c\u984d")},e.id)}))}),Object(n.jsx)("g",{children:o.map((function(e,t){var c=t>0?o[t-1]:null;return Object(n.jsxs)("g",{children:[t>0&&Object(n.jsx)("line",{x1:w(c.year)+20,y1:W(c.population),x2:w(e.year)+20,y2:W(e.population),stroke:a("\u4eba\u53e3"),strokeWidth:"3"},10*e.id),Object(n.jsx)("circle",{cx:w(e.year)+20,cy:W(e.population),r:"4",fill:a("\u4eba\u53e3")},e.id)]},100*e.id)}))})]})})})},g=function(e){var t=e.setArea,a=e.year,c=e.colorScale,r=Object(d.useState)([]),o=Object(i.a)(r,2),j=o[0],u=o[1],x=20,f=60,g=500,m=250,v=200+f+g,y=x+55+m;if(Object(d.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a,c,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},a=2008,c=20;case 3:if(!(c<33)){e.next=16;break}return n=c<=30?"H"+c:"R"+(c-30),e.next=7,fetch("./data/".concat(n,".json"));case 7:return r=e.sent,e.next=10,r.json();case 10:i=e.sent,t[a]=i,a++;case 13:c++,e.next=3;break;case 16:u(t);case 17:case"end":return e.stop()}}),e)})))()}),[]),0===j.length)return Object(n.jsx)("div",{className:"box",style:{width:v,height:"100px"},children:"\u8aad\u307f\u8fbc\u307f\u4e2d..."});if(!a)return Object(n.jsx)("div",{className:"box",style:{width:v},children:"\u4e0a\u306e\u30b0\u30e9\u30d5\u304b\u3089\u5e74\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"});var k=j[a].map((function(e){return{id:e.id,area:e.area}})),N=h.e().domain(h.a([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).range([0,g]),S=h.e().domain([0,h.a(j[a],(function(e){return e.price/1e4}))[1]]).range([m,0]),w=h.e().domain([0,h.a(j[a],(function(e){return e.population}))[1]]).range([m,0]);return Object.keys(j).length?Object(n.jsx)("div",{className:"box",style:{marginRight:"20px",marginTop:"5px",paddingLeft:"5px",paddingTop:"5px"},children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{style:{paddingLeft:"20px",paddingBottom:"10px"},children:[null!==a?a:"","\u5e74"]}),Object(n.jsxs)("svg",{viewBox:"".concat(-f," ").concat(-x," ").concat(v," ").concat(y),width:v,height:y,children:[Object(n.jsx)(b,{scale:S,graphWidth:g,graphHeight:m,graphName:"individual",location:"left",label:"\u53d7\u3051\u5165\u308c\u91d1\u984d"}),Object(n.jsx)(b,{scale:w,graphWidth:g,graphHeight:m,graphName:"individual",location:"right",label:"\u4eba\u53e3"}),Object(n.jsx)(p,{scale:N,graphWidth:g,graphHeight:m,label:"\u5e02\u533a\u753a\u6751",setData:t,graphType:"area",optionData:k}),Object(n.jsx)(O,{scale:c,graphWidth:g}),Object(n.jsx)("g",{children:j[a].map((function(e,t){var a=N(t+1)+20,r=S(e.price/1e4);return Object(n.jsx)("path",{d:"M ".concat(a-10," ").concat(r,"\n                   H ").concat(a+10," V ").concat(m," H ").concat(a-10," \n                  V ").concat(r,"\n                  "),fill:c("\u53d7\u3051\u5165\u308c\u984d")},e.id)}))}),Object(n.jsx)("g",{children:j[a].map((function(e,t){var r=t>0?j[a][t-1]:null;if(t>0)return Object(n.jsxs)("g",{children:[Object(n.jsx)("line",{x1:N(t)+20,y1:w(r.population),x2:N(t+1)+20,y2:w(e.population),stroke:c("\u4eba\u53e3"),strokeWidth:"3"},10*e.id),Object(n.jsx)("circle",{cx:N(t+1)+20,cy:w(e.population),r:"4",fill:c("\u4eba\u53e3")},e.id)]},100*e.id)}))})]})]})}):void 0},m=function(){var e=h.f(h.g),t=Object(d.useState)(null),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(d.useState)(2008),o=Object(i.a)(s,2),l=o[0],j=o[1];return Object(n.jsxs)("div",{className:"columns is-multiline",style:{marginTop:"10px"},children:[Object(n.jsx)(x,{currentArea:c}),Object(n.jsxs)("div",{className:"column is-7",children:[Object(n.jsx)(f,{setYear:j,colorScale:e}),Object(n.jsx)(g,{setArea:r,year:l,colorScale:e})]})]})},v=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("div",{className:"content has-text-centered",children:Object(n.jsxs)("p",{children:["\u3053\u306e\u30b5\u30a4\u30c8\u306f",Object(n.jsx)("a",{href:"https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/080430_2_kojin.html",target:"_blank",children:"\u7dcf\u52d9\u7701"}),"\u304b\u3089\u30c7\u30fc\u30bf\u3092\u6301\u3063\u3066\u304d\u3066\u3044\u307e\u3059",Object(n.jsx)("br",{}),"-team-Sashimi-"]})})})},y=(a(172),function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(r,{}),Object(n.jsx)(m,{}),Object(n.jsx)(v,{})]})});Object(c.render)(Object(n.jsx)(y,{}),document.querySelector("#content"))}},[[173,1,2]]]);
//# sourceMappingURL=main.aeb279af.chunk.js.map