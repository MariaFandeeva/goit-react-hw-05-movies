"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{247:function(t,n,r){r.r(n);var e=r(885),a=r(791),c=r(739),u=r(409),i=r(184);n.default=function(){var t=(0,a.useState)([]),n=(0,e.Z)(t,2),r=n[0],o=n[1],s=(0,c.UO)().movieId;(0,a.useEffect)((function(){(0,u.uV)(s).then((function(t){o(t.cast)}))}),[s]);var p=r.map((function(t){var n=t.id,r=t.character,e=t.name,a=t.profile_path;return(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:a?"".concat("https://image.tmdb.org/t/p/w185").concat(a):"/public/images/film_poster_not_found.jpg",alt:e}),(0,i.jsx)("p",{children:e}),(0,i.jsxs)("p",{children:["Character: ",r]})]},n)})}));return r.length>0?(0,i.jsx)("ul",{children:p}):(0,i.jsx)("h3",{children:"No information about actors"})}},409:function(t,n,r){r.d(n,{Hx:function(){return h},LP:function(){return o},Mc:function(){return p},OQ:function(){return s},uV:function(){return f}});var e=r(861),a=r(757),c=r.n(a),u=r(388);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="894a5fcb5eb3af426933275e70f0cd83",o=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return n=t.sent,r=n.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&page=1"));case 2:return r=t.sent,e=r.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=cast.8c980e2e.chunk.js.map