(this["webpackJsonpstudents-input"]=this["webpackJsonpstudents-input"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(6),a=n.n(r),i=(n(13),n(14),n(8)),o=n(7),j=n(2),u=(n(15),n(0)),d=function(e){return Object(u.jsx)("div",{className:"card",children:e.children})},l=s.a.memo((function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],l=i[1],b=Object(c.useState)(""),O=Object(j.a)(b,2),h=O[0],m=O[1],f=Object(c.useState)(""),x=Object(j.a)(f,2),p=x[0],v=x[1];return Object(u.jsx)("section",{children:Object(u.jsxs)(d,{children:[Object(u.jsx)("h2",{children:"Students input form"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onAddStudent({fName:s,lName:o,year:h,password:p}),r(""),l(""),m(""),v("")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"fName",children:"First Name:"}),Object(u.jsx)("input",{type:"text",id:"fName",value:s,onChange:function(e){r(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"lName",children:"Last Name:"}),Object(u.jsx)("input",{type:"text",id:"lName",value:o,onChange:function(e){l(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"year",children:"Date of birth:"}),Object(u.jsx)("input",{type:"number",id:"year",value:h,onChange:function(e){m(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{htmlFor:"pass",children:"Password:"}),Object(u.jsx)("input",{type:"number",id:"pass",value:p,onChange:function(e){v(e.target.value)}})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",className:" add-btn",children:"Add Ingredient"})})]})]})})})),b=(n(17),function(e){return Object(u.jsx)("section",{children:Object(u.jsxs)(d,{children:[Object(u.jsx)("h2",{children:"All students"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"sort-btn",onClick:e.onSortByFName,children:"sort by first name"})}),Object(u.jsx)("ul",{children:e.students.map((function(t){return Object(u.jsxs)("li",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[t.fName," "]}),Object(u.jsxs)("span",{children:[t.lName," "]}),Object(u.jsx)("span",{children:t.year})]}),Object(u.jsx)("button",{className:"delete-btn",onClick:function(){return e.onRemoveStudent(t.id)},children:"delete student"})]},t.id)}))})]})})}),O=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(l,{onAddStudent:function(e){s((function(t){return[].concat(Object(o.a)(t),[Object(i.a)({id:Math.random().toString()},e)])}))}}),Object(u.jsx)("section",{children:Object(u.jsx)(b,{students:n,onRemoveStudent:function(e){+prompt("enter password")===+n.map((function(e){return e.password}))?function(e){var t=n.filter((function(t){return t.id!==e}));s(t)}(e):alert("wrong password!")},onSortByFName:function(){n.sort((function(e,t){var n=e.fName.toUpperCase(),c=t.fName.toUpperCase();return n<c?-1:n>c?1:0}));var e=JSON.parse(JSON.stringify(n));s(e)}})})]})};var h=function(){return Object(u.jsx)(O,{})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.a0699580.chunk.js.map