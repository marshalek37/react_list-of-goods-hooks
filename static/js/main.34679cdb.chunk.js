(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n,c=s(7),o=s.n(c),r=s(1),i=s(8),a=s(9),l=(s(14),s(15),s(5)),u=s.n(l),b=s(3),j=s(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(n||(n={}));var p=function(){var e=Object(b.useState)({isReversed:!1,sortType:n.NONE}),t=Object(i.a)(e,2),s=t[0],c=t[1],o=function(e,t){var s=t.sortType,c=t.isReversed,o=Object(a.a)(e);return s===n.ALPHABET?o.sort((function(e,t){return e.localeCompare(t)})):s===n.LENGTH&&o.sort((function(e,t){return e.length-t.length})),c&&o.reverse(),o}(d,s);return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":s.sortType!==n.ALPHABET}),onClick:function(){c(Object(r.a)(Object(r.a)({},s),{},{sortType:n.ALPHABET}))},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":s.sortType!==n.LENGTH}),onClick:function(){c(Object(r.a)(Object(r.a)({},s),{},{sortType:n.LENGTH}))},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!s.isReversed}),onClick:function(){c(Object(r.a)(Object(r.a)({},s),{},{isReversed:!s.isReversed}))},children:"Reverse"}),(s.sortType||s.isReversed)&&Object(j.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){c({sortType:n.NONE,isReversed:!1})},children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:o.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})};o.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.34679cdb.chunk.js.map