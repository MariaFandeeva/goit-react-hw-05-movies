"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{368:function(t,n,e){var r=e(739),a=e(731),u=e(184);n.Z=function(t){var n=t.movies,e=t.sectionTitle,c=void 0===e?null:e,i=(0,r.TH)();return(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)("h3",{children:c}),(0,u.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.title,r=t.poster_path;return(0,u.jsx)("li",{children:(0,u.jsxs)(a.rU,{state:{from:i},to:"/movies/".concat(n),children:[(0,u.jsx)("img",{src:r?"".concat("https://image.tmdb.org/t/p/w342/").concat(r):"/public/images/film_poster_not_found.jpg",alt:e}),(0,u.jsx)("p",{children:e})]})},n)}))})]})}},571:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(885),a=e(791),u=e(731),c=e(409),i=e(562),o=e(184),s=function(t){var n=t.onSubmit,e=(0,a.useState)(""),u=(0,r.Z)(e,2),c=u[0],s=u[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===c&&i.Notify.failure("Please enter the film name",{position:"center-top",width:"300px",fontSize:"14px",failure:{background:"#a55555"}}),n(c),s("")},children:[(0,o.jsx)("input",{onChange:function(t){var n=t.target.value;s(n)},type:"text",name:"query",value:c,autoComplete:"off"}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})})},f=e(368),p=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1],p=(0,u.lr)(),l=(0,r.Z)(p,2),v=l[0],d=l[1];(0,a.useEffect)((function(){var t,n=null!==(t=v.get("query"))&&void 0!==t?t:"";null!==n&&void 0!==n&&n.trim()&&(0,c.OQ)(n).then((function(t){0!==t.length?i(t):alert("no movies found")}))}),[v]);return(0,o.jsx)("section",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(s,{onSubmit:function(t){d({query:t})}}),e.length>0&&(0,o.jsx)(f.Z,{movies:e})]})})}},409:function(t,n,e){e.d(n,{Hx:function(){return l},LP:function(){return o},Mc:function(){return f},OQ:function(){return s},uV:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="894a5fcb5eb3af426933275e70f0cd83",o=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=movies.82691125.chunk.js.map