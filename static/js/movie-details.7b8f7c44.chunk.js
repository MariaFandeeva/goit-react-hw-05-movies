"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[321],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,a,o,i,c,s,u,p,f,d,l,x,h=t(885),v=t(791),g=t(689),m=t(409),Z=t(168),b=t(731),w=t(444),j=w.ZP.section(r||(r=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),y=w.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 30px;\n"]))),k=w.ZP.button(o||(o=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  padding: 8px 10px 8px 10px;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 18px;\n  text-decoration: none;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n"]))),_=w.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  align-items: flex-start;\n"]))),P=w.ZP.img(c||(c=(0,Z.Z)(["\n  width: 400px;\n  height: 600px;\n"]))),z=w.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 80px 0 60px;\n"]))),C=w.ZP.h3(u||(u=(0,Z.Z)(["\n  margin-bottom: 100px;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n"]))),U=w.ZP.p(p||(p=(0,Z.Z)(["\n  margin-bottom: 20px;\n  color: #fff;\n  font-size: 16px;\n"]))),O=w.ZP.div(f||(f=(0,Z.Z)(["\n  margin-top: 100px;\n"]))),R=w.ZP.ul(d||(d=(0,Z.Z)(["\n  display: flex;\n"]))),G=w.ZP.li(l||(l=(0,Z.Z)(["\n  //   &:not(: last-of-type) {\n  margin-right: 10px;\n  //   }\n  //\n"]))),H=(0,w.ZP)(b.rU)(x||(x=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 8px 18px;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 18px;\n  text-decoration: none;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: rgba(255, 255, 255, 0.2);\n  }\n"]))),I=t(184),L=[{text:"Cast",href:"cast"},{text:"Reviews",href:"reviews"}],M=function(){var n,e,t=(0,v.useState)({}),r=(0,h.Z)(t,2),a=r[0],o=r[1],i=(0,g.s0)(),c=(0,g.UO)().movieId,s=null!==(n=null===(e=(0,g.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,v.useEffect)((function(){(0,m.Mc)(c).then((function(n){o(n)}))}),[c]);var u=a.overview,p=a.title,f=a.genres,d=void 0===f?[]:f,l=a.vote_average,x=a.poster_path,Z=d.map((function(n){return n.name})).join(" ");return(0,I.jsx)(j,{children:(0,I.jsxs)(y,{children:[(0,I.jsx)(k,{onClick:function(){return i(s)},children:"Go back"}),(0,I.jsxs)(_,{children:[(0,I.jsx)(P,{src:x?"".concat("https://image.tmdb.org/t/p/w500/").concat(a.poster_path):"/public/images/film_poster_not_found.jpg",alt:p}),(0,I.jsxs)(z,{children:[(0,I.jsx)(C,{children:p}),(0,I.jsxs)(U,{children:[(0,I.jsx)("b",{children:"Rating:"}),l]}),(0,I.jsxs)(U,{children:[(0,I.jsx)("b",{children:"Overview:"}),u]}),(0,I.jsxs)(U,{children:[(0,I.jsx)("b",{children:"Genres:"}),Z]}),(0,I.jsxs)(O,{children:[(0,I.jsx)(U,{children:(0,I.jsx)("b",{children:"Additional Information"})}),(0,I.jsx)(R,{children:L.map((function(n){var e=n.text,t=n.href;return(0,I.jsx)(G,{children:(0,I.jsx)(H,{state:{from:s},to:t,children:e})},e)}))})]})]})]}),(0,I.jsx)(g.j3,{})]})})}},409:function(n,e,t){t.d(e,{Hx:function(){return d},LP:function(){return s},Mc:function(){return p},OQ:function(){return u},uV:function(){return f}});var r=t(861),a=t(757),o=t.n(a),i=t(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="894a5fcb5eb3af426933275e70f0cd83",s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c,"&page=1"));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a,s=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movie-details.7b8f7c44.chunk.js.map