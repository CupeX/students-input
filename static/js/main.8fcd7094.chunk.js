(this["webpackJsonpstudents-input"]=this["webpackJsonpstudents-input"]||[]).push([[0],{21:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},41:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(22),a=n.n(r),i=n(6),j=(n(30),n(3)),d=(n(31),n(0)),u=function(){var t=Object(j.f)();return Object(d.jsxs)("header",{children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(i.b,{to:"/students-input",children:"CupeX first app"})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/students-input/all-students",children:"Students"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/students-input/all-subjects",children:"Subjects"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/students-input/all-professors",children:"Professors"})}),Object(d.jsx)("li",{children:Object(d.jsxs)("select",{className:"sort-btn",onChange:function(e){return function(e){t.push("/students-input/".concat(e))}(e.target.value)},children:[Object(d.jsx)("option",{value:"add",children:"Add new?"}),Object(d.jsx)("option",{value:"add-new-student",children:"Add new student"}),Object(d.jsx)("option",{value:"add-new-professor",children:"Add new profesor"}),Object(d.jsx)("option",{value:"add-new-subject",children:"Add new subject"})]})})]})})]})},o=(n(41),function(t){return Object(d.jsx)("div",{className:"card",children:t.children})}),l=function(){return Object(d.jsx)(o,{children:Object(d.jsx)("h1",{children:"Home Page"})})},b=n(4),h=n.n(b),O=n(7),f=n(2),x=n(25),p=n(14),m=function(){return fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student.json").then((function(t){return t.json()})).then((function(t){var e=[];for(var n in t){var c=Object(p.a)({id:n},t[n]);e.push(c)}return e}))},v=function(){var t=Object(c.useState)([]),e=Object(f.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)({}),a=Object(f.a)(r,2),i=a[0],u=a[1],l=Object(c.useState)(!0),b=Object(f.a)(l,2),p=b[0],v=b[1],N=Object(c.useState)([]),g=Object(f.a)(N,2),S=g[0],y=g[1],w=Object(j.g)().id;m(),Object(c.useEffect)((function(){v(!0),C()}),[]);var C=function(){var t=Object(O.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,s(e),v(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){if(n.length){var t=n.find((function(t){return t.id===w}));if(u(t),console.log("filteredStudent",t),t.hasOwnProperty("subjects")){var e=Object.values(t.subjects);y(e)}}}),[n,w]),p?Object(d.jsx)(o,{children:Object(d.jsx)("h2",{children:"Loading students list..."})}):Object(d.jsxs)(o,{children:[Object(d.jsxs)("h2",{children:[i.fName," ",i.lName," info:"]}),Object(d.jsxs)("table",{id:"details-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"first name"}),Object(d.jsx)("th",{children:"last name"}),Object(d.jsx)("th",{children:"subject/s"}),Object(d.jsx)("th",{children:"professor/s"}),Object(d.jsx)("th",{children:"birth"}),Object(d.jsx)("th",{children:"password"}),Object(d.jsx)("th",{children:"unique id"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[i.fName," "]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[i.lName," "]})}),Object(d.jsx)("td",{children:S.map((function(t){return Object(d.jsx)("li",{children:t.subject},Object(x.a)())}))}),Object(d.jsx)("td",{children:S.map((function(t){return Object(d.jsx)("li",{children:t.professor},t.id)}))}),Object(d.jsx)("td",{children:i.year}),Object(d.jsx)("td",{children:i.password}),Object(d.jsx)("td",{children:w})]})})]})]})},N=function(t){return Object(d.jsx)(v,{})},g=n(24),S=(n(43),function(t){var e=Object(j.h)();return Object(d.jsx)("section",{children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"info"}),Object(d.jsx)("th",{children:"first name"}),Object(d.jsx)("th",{children:"last name"}),Object(d.jsx)("th",{children:"birth"})]})}),Object(d.jsx)("tbody",{children:t.students.map((function(n){return Object(d.jsxs)("tr",{id:n.id,children:[Object(d.jsx)("td",{className:"btn-td",children:Object(d.jsx)(i.b,{to:"".concat(e.url,"/").concat(n.id),children:Object(d.jsx)("button",{className:"info-btn",children:"\u2139"})})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[n.fName," "]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[n.lName," "]})}),Object(d.jsx)("td",{children:n.year}),Object(d.jsx)("td",{className:"btn-td change-td",children:Object(d.jsx)("button",{className:"change-btn",onClick:function(){return t.onChangeInput(n.id)},children:"change"})}),Object(d.jsx)("td",{className:"btn-td delete-td",children:Object(d.jsx)("button",{className:"delete-btn",onClick:function(){return t.onRemoveStudent(n.id)},children:"delete student"})})]},n.id)}))})]})})}),y=function(){var t=Object(c.useState)([]),e=Object(f.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(!0),a=Object(f.a)(r,2),i=a[0],j=a[1],u=function(){var t=Object(O.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,j(!1),s(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){j(!0),m(),u()}),[]);var l=Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:" All Students"}),Object(d.jsxs)("select",{className:"sort-btn",onChange:function(t){!function(t){var e=t;n.sort((function(t,n){return t[e]>n[e]?1:-1}));var c=JSON.parse(JSON.stringify(n));s(c)}(t.target.value)},children:[Object(d.jsx)("option",{value:"order",children:"sort by:"}),Object(d.jsx)("option",{value:"fName",children:"First Name"}),Object(d.jsx)("option",{value:"lName",children:"Last name"}),Object(d.jsx)("option",{value:"year",children:"Date of Birth"})]})]});return i?Object(d.jsx)(o,{children:Object(d.jsx)("h2",{children:"Loading..."})}):Object(d.jsxs)(o,{children:[l,Object(d.jsx)(S,{students:n,onRemoveStudent:function(t){+prompt("enter password")===+n.filter((function(e){return e.id===t})).map((function(t){return t.password}))?function(t){fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/".concat(t,".json"),{method:"DELETE"});var e=n.filter((function(e){return e.id!==t}));s(e)}(t):alert("wrong password!")},onChangeInput:function(t){var e=prompt("enter new first name"),c=prompt("enter new last name");n.filter((function(e){return e.id===t})).map((function(t){t.fName=e,t.lName=c}));var r=JSON.parse(JSON.stringify(n));s(r);var a=n.filter((function(e){return e.id===t}));fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/".concat(t,".json"),{method:"PUT",body:JSON.stringify.apply(JSON,Object(g.a)(a)),headers:{"Content-Type":"application/json"}})}})]})},w=function(){return Object(d.jsx)(y,{})},C=s.a.memo((function(t){var e=Object(c.useState)(""),n=Object(f.a)(e,2),s=n[0],r=n[1],a=Object(c.useState)(""),i=Object(f.a)(a,2),j=i[0],u=i[1],l=Object(c.useState)(""),b=Object(f.a)(l,2),h=b[0],O=b[1],x=Object(c.useState)(""),p=Object(f.a)(x,2),m=p[0],v=p[1],N=Object(c.useState)(!1),g=Object(f.a)(N,2),S=(g[0],g[1]);return Object(d.jsx)("section",{children:Object(d.jsxs)(o,{children:[Object(d.jsx)("h2",{children:"Students input form"}),Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===s||""===j||""===h||""===m)return S(!1),void alert("pls fill all fields");S(!0);var n={fName:s,lName:j,year:h,password:m};console.log("student form submit",t),t.onAddStudent(n),r(""),u(""),O(""),v("")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"fName",children:"First Name:"}),Object(d.jsx)("input",{type:"text",id:"fName",value:s,onChange:function(t){r(t.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"lName",children:"Last Name:"}),Object(d.jsx)("input",{type:"text",id:"lName",value:j,onChange:function(t){u(t.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"year",children:"date of birth:"}),Object(d.jsx)("input",{type:"date",min:"1111-01-01",id:"year",value:h,onChange:function(t){O(t.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"pass",children:"Password:"}),Object(d.jsx)("input",{type:"number",id:"pass",value:m,onChange:function(t){v(t.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",className:"add-btn",children:"Add student"})})]})]})})})),A=function(){return Object(d.jsx)(C,{onAddStudent:function(t){fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}})},T=function(){return Object(d.jsx)(A,{})},P=function(){return fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors.json").then((function(t){return t.json()})).then((function(t){var e=[];for(var n in t){var c={id:n,title:t[n]};e.push(c)}return e}))},k=function(t){return t.loading?Object(d.jsx)("h2",{children:"Loading students list..."}):Object(d.jsxs)("section",{children:[!t.loading&&Object(d.jsx)("h2",{children:"all students list"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"first name"}),Object(d.jsx)("th",{children:"last name"}),Object(d.jsx)("th",{style:{textAlign:"end"},children:"add to subject"})]})}),Object(d.jsx)("tbody",{children:t.professors.map((function(e){return Object(d.jsxs)("tr",{id:e.id,children:[Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[e.title.fName," "]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[e.title.lName," "]})}),Object(d.jsx)("td",{className:"btn-td delete-td",children:Object(d.jsx)("button",{className:"add-btn",onClick:function(){return t.onAddProfessorToSubject(e.id)},children:"add"})})]},e.id)}))})]})]})},E=(n(21),function(t){var e=Object(c.useState)([]),n=Object(f.a)(e,2),s=n[0],r=n[1],a=Object(c.useState)(!0),i=Object(f.a)(a,2),j=i[0],u=i[1],o=t.subjectId,l=t.subjects.find((function(t){return t.id===o}));P();var b=function(){var t=Object(O.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,u(!1),r(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){u(!0),b()}),[]);return Object(d.jsxs)("div",{className:"Modal",children:[Object(d.jsx)("button",{onClick:function(){return t.onCloseModal()},children:"close modal"}),Object(d.jsx)(k,{loading:j,professors:s,onAddProfessorToSubject:function(t){var e=s.find((function(e){return e.id===t}));e.hasOwnProperty("subject")||(e.subject="");var n=l.title.title;e.subject.hasOwnProperty(o)?console.log("allready have this subject"):(console.log("not attending this subject, i will add!"),fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors/".concat(t,"/subject.json"),{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(){b()})))}})]})}),J=n(16),F=function(t){return t.loading?Object(d.jsx)("h2",{children:"Loading students list..."}):Object(d.jsxs)("section",{children:[!t.loading&&Object(d.jsx)("h2",{children:"all students list"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"first name"}),Object(d.jsx)("th",{children:"last name"}),Object(d.jsx)("th",{style:{textAlign:"end"},children:"add to subject"})]})}),Object(d.jsx)("tbody",{children:t.students.map((function(e){return Object(d.jsxs)("tr",{id:e.id,children:[Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[e.fName," "]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[e.lName," "]})}),Object(d.jsx)("td",{className:"btn-td delete-td",children:Object(d.jsx)("button",{className:"add-btn",onClick:function(){return t.onAddStudentToSubject(e.id)},children:"add"})})]},e.id)}))})]})]})},L=function(t){var e=Object(c.useState)([]),n=Object(f.a)(e,2),s=n[0],r=n[1],a=Object(c.useState)(!0),i=Object(f.a)(a,2),j=i[0],u=i[1],o=t.subjectId,l=t.subjects.find((function(t){return t.id===o}));m();var b=function(){var t=Object(O.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,u(!1),r(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){u(!0),b()}),[]);return Object(d.jsxs)("div",{className:"Modal",children:[Object(d.jsx)("button",{onClick:function(){return t.onCloseModal()},children:"close modal"}),Object(d.jsx)(F,{loading:j,students:s,onAddStudentToSubject:function(t){var e=s.find((function(e){return e.id===t}));e.hasOwnProperty("subjects")||(e.subjects={});var n=l.title,c=Object(p.a)(Object(p.a)({},e.subjects),{},Object(J.a)({},o,n));e.subjects.hasOwnProperty(o)?console.log("allready have this subject"):(console.log("not attending this subject, i will add!"),fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/".concat(t,"/subjects.json"),{method:"PUT",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(){b()})))}})]})},I=function(t){var e=Object(j.h)();return Object(d.jsx)("section",{children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"more info"}),Object(d.jsx)("th",{children:"subject name"}),Object(d.jsx)("th",{children:"change sbject title"}),Object(d.jsx)("th",{children:"add student"}),Object(d.jsx)("th",{children:"add professor"})]})}),Object(d.jsx)("tbody",{children:t.subjects.map((function(n){return Object(d.jsxs)("tr",{id:n.id,children:[Object(d.jsx)("td",{className:"btn-td",children:Object(d.jsx)(i.b,{to:"".concat(e.url,"/").concat(n.id),children:Object(d.jsx)("button",{className:"info-btn",children:"\u2139"})})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[n.title.title," "]})}),Object(d.jsx)("td",{className:"btn-td change-td",children:Object(d.jsx)("button",{className:"change-btn",onClick:function(){return t.onChangeInput(n.id)},children:"change"})}),Object(d.jsx)("td",{className:"btn-td change-td",children:Object(d.jsx)("button",{className:"change-btn",onClick:function(){return t.onAddStudentToSubject(n.id)},children:"add"})}),Object(d.jsx)("td",{className:"btn-td change-td",children:Object(d.jsx)("button",{className:"change-btn",onClick:function(){return t.onAddProfToSubject(n.id)},children:"add"})}),Object(d.jsx)("td",{className:"btn-td delete-td",children:Object(d.jsx)("button",{className:"delete-btn",onClick:function(){return t.onRemoveSubject(n.id)},children:"delete subject"})})]},n.id)}))})]})})},D=function(){var t=Object(c.useState)([]),e=Object(f.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)([]),a=Object(f.a)(r,2),i=a[0],j=a[1],u=Object(c.useState)([]),l=Object(f.a)(u,2),b=(l[0],l[1]),x=Object(c.useState)(!0),p=Object(f.a)(x,2),v=p[0],N=p[1],g=Object(c.useState)(!1),S=Object(f.a)(g,2),y=S[0],w=S[1],C=Object(c.useState)(!1),A=Object(f.a)(C,2),T=A[0],k=A[1],J=Object(c.useState)(""),F=Object(f.a)(J,2),D=F[0],M=F[1],R=function(){var t=Object(O.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,j(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){m(),R()}),[]);var U=function(){var t=Object(O.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){P(),U()}),[]),Object(c.useEffect)((function(){N(!0),fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects.json").then((function(t){return t.json()})).then((function(t){var e=[];for(var n in t){var c={id:n,title:t[n]};e.push(c)}N(!1),s(e)}))}),[]);var B=Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:" All Subjects"}),Object(d.jsxs)("select",{className:"sort-btn",onChange:function(t){!function(t){var e=t;n.sort((function(t,n){return t[e]>n[e]?1:-1}));var c=JSON.parse(JSON.stringify(n));s(c)}(t.target.value)},children:[Object(d.jsx)("option",{value:"order",children:"sort by:"}),Object(d.jsx)("option",{value:"fName",children:"First Name"}),Object(d.jsx)("option",{value:"lName",children:"Last name"}),Object(d.jsx)("option",{value:"year",children:"Date of Birth"})]})]});return v?Object(d.jsx)(o,{children:Object(d.jsx)("h2",{children:"Loading..."})}):Object(d.jsxs)(o,{children:[B,y&&Object(d.jsx)(L,{onCloseModal:function(){w(!1)},subjects:n,subjectId:D}),T&&Object(d.jsx)(E,{onCloseModal:function(){k(!1)},subjects:n,subjectId:D}),Object(d.jsx)(I,{subjects:n,onRemoveSubject:function(t){fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/student/".concat(t,".json"),{method:"DELETE"});var e=n.filter((function(e){return e.id!==t}));s(e)},onChangeInput:function(t){var e=prompt("enter new subjects title");n.find((function(e){return e.id===t})).title.title=e;var c=n.find((function(e){return e.id===t})).title,r=JSON.parse(JSON.stringify(n));s(r),fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects/".concat(t,".json"),{method:"PUT",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});var a=i.map((function(n){return n.subjects&&Object.keys(n.subjects).includes(t)&&(n.subjects[t].title=e),n}));j(a),console.log("updatedSubjectInAllStudents",a);var d=a.forEach((function(t){return console.log(t)}));console.log("test",d)},onAddStudentToSubject:function(t){w(!0),M(t)},onAddProfToSubject:function(t){k(!0),M(t)}})]})},M=function(){return Object(d.jsx)(D,{})},R=s.a.memo((function(t){var e=Object(c.useState)(""),n=Object(f.a)(e,2),s=n[0],r=n[1],a=Object(c.useState)(!1),i=Object(f.a)(a,2),j=(i[0],i[1]);return Object(d.jsxs)(o,{children:[Object(d.jsx)("h2",{children:"Students input form"}),Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===s)return j(!1),void alert("pls enter subject name");j(!0);var n={subject:s};t.onAddSubject(n),r("")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"subject",children:"subject name"}),Object(d.jsx)("input",{type:"text",id:"subject",value:s,onChange:function(t){r(t.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",className:"add-btn",children:"Add subject"})})]})]})})),U=function(){return Object(d.jsx)(R,{onAddSubject:function(t){var e={title:t.subject,professor:""};fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/subjects.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}})},B=function(){return Object(d.jsx)(U,{})},q=function(t){var e=Object(j.h)();return Object(d.jsx)("section",{children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"more info"}),Object(d.jsx)("th",{children:"title"}),Object(d.jsx)("th",{children:"first name"}),Object(d.jsx)("th",{children:"last name"}),Object(d.jsx)("th",{children:"subject"})]})}),Object(d.jsx)("tbody",{children:t.professors.map((function(n){return Object(d.jsxs)("tr",{id:n.id,children:[Object(d.jsx)("td",{className:"btn-td",children:Object(d.jsx)(i.b,{to:"".concat(e.url,"/").concat(n.id),children:Object(d.jsx)("button",{className:"info-btn",children:"\u2139"})})}),Object(d.jsx)("td",{children:Object(d.jsx)("span",{children:"prof: "})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[n.title.fName," "]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[n.title.lName," "]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("span",{children:[n.title.subject," "]})}),Object(d.jsx)("td",{className:"btn-td delete-td",children:Object(d.jsx)("button",{className:"delete-btn",onClick:function(){return t.onRemoveSubject(n.id)},children:"delete subject"})})]},n.id)}))})]})})},H=function(){var t=Object(c.useState)([]),e=Object(f.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(!1),a=Object(f.a)(r,2),i=a[0],j=a[1],u=function(){var t=Object(O.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,j(!1),s(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){j(!1),P(),u()}),[]);var l=Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:" All Subjects"}),Object(d.jsxs)("select",{className:"sort-btn",onChange:function(t){!function(t){var e=t;n.sort((function(t,n){return t[e]>n[e]?1:-1}));var c=JSON.parse(JSON.stringify(n));s(c)}(t.target.value)},children:[Object(d.jsx)("option",{value:"order",children:"sort by:"}),Object(d.jsx)("option",{value:"fName",children:"First Name"}),Object(d.jsx)("option",{value:"lName",children:"Last name"})]})]});return i?Object(d.jsx)(o,{children:Object(d.jsx)("h2",{children:"Loading..."})}):Object(d.jsxs)(o,{children:[l,Object(d.jsx)(q,{professors:n,onRemoveSubject:function(t){fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors/".concat(t,".json"),{method:"DELETE"});var e=n.filter((function(e){return e.id!==t}));s(e)}})]})},X=function(){return Object(d.jsx)(H,{})},z=(n(44),s.a.memo((function(t){console.log("prof form props",t);var e=Object(c.useState)(""),n=Object(f.a)(e,2),s=n[0],r=n[1],a=Object(c.useState)(""),i=Object(f.a)(a,2),j=i[0],u=i[1],l=Object(c.useState)(!1),b=Object(f.a)(l,2),h=(b[0],b[1]);return Object(d.jsxs)(o,{children:[Object(d.jsx)("h2",{children:"Professor input form"}),Object(d.jsxs)("form",{onSubmit:function(e){if(console.log(e),e.preventDefault(),""===s||""===j)return h(!1),void alert("pls fill all fields");h(!0);var n={fName:s,lName:j};t.onAddProfessor(n),r(""),u("")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"fName",children:"first name"}),Object(d.jsx)("input",{type:"text",id:"fName",value:s,onChange:function(t){r(t.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"lName",children:"last name"}),Object(d.jsx)("input",{type:"text",id:"lName",value:j,onChange:function(t){u(t.target.value)}})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",className:"add-btn",children:"Add student"})})]})]})}))),G=function(){return Object(d.jsx)(z,{onAddProfessor:function(t){fetch("https://students-input-default-rtdb.europe-west1.firebasedatabase.app/professors.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}})},K=function(){return Object(d.jsx)(G,{})},Q=(n(45),function(){return Object(d.jsxs)(o,{children:[Object(d.jsx)("h2",{children:"Add new:"}),Object(d.jsxs)("ul",{className:"addNewUl",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/students-input/add-new-student",children:Object(d.jsx)("button",{className:"change-btn",children:"student"})})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/students-input/add-new-subject",children:Object(d.jsx)("button",{className:"change-btn",children:"subject"})})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/students-input/add-new-professor",children:Object(d.jsx)("button",{className:"change-btn",children:"professor"})})})]})]})}),V=function(){return Object(d.jsx)(Q,{})};var W=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/students-input",exact:!0,children:Object(d.jsx)(l,{})}),Object(d.jsx)(j.a,{path:"/students-input/all-students",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(j.a,{path:"/students-input/all-subjects",exact:!0,children:Object(d.jsx)(M,{})}),Object(d.jsx)(j.a,{path:"/students-input/all-professors",exact:!0,children:Object(d.jsx)(X,{})}),Object(d.jsx)(j.a,{path:"/students-input/all-students/:id",exact:!0,children:Object(d.jsx)(N,{})}),Object(d.jsx)(j.a,{path:"/students-input/add-new-student",exact:!0,children:Object(d.jsx)(T,{})}),Object(d.jsx)(j.a,{path:"/students-input/add-new-subject",exact:!0,children:Object(d.jsx)(B,{})}),Object(d.jsx)(j.a,{path:"/students-input/add-new-professor",exact:!0,children:Object(d.jsx)(K,{})}),Object(d.jsx)(j.a,{path:"/students-input/add",exact:!0,children:Object(d.jsx)(V,{})})]})]})},Y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(W,{})})}),document.getElementById("root")),Y()}},[[46,1,2]]]);
//# sourceMappingURL=main.8fcd7094.chunk.js.map