"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(t,n,e){e.r(n);var r=e(885),a=e(791),u=e(739),c=e(409),i=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],o=(0,u.UO)().id;(0,a.useEffect)((function(){(0,c.Hx)(o).then((function(t){s(t.results)}))}),[o]);var f=e.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"Author:"}),e]}),r]},n)}));return e.length>0?(0,i.jsxs)("ul",{children:[" ",f]}):(0,i.jsx)("h3",{children:"There are no reviews for this movie"})}},409:function(t,n,e){e.d(n,{Hx:function(){return v},LP:function(){return s},Mc:function(){return f},OQ:function(){return o},uV:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="894a5fcb5eb3af426933275e70f0cd83",s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return n=t.sent,e=n.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,r=e.data.results,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.9f221f10.chunk.js.map