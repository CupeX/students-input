(this["webpackJsonpstudents-input"]=this["webpackJsonpstudents-input"]||[]).push([[0],{42:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),j=c(28),r=c.n(j),i=c(15),d=c(9),a=(c(49),c(8)),u=c(75),l=c(76),b=c(77),o=c(87),O=c(78),h=c(79),f=(c(50),c(2)),x=function(){var e=Object(d.f)(),t=Object(n.useState)(!1),c=Object(a.a)(t,2),s=c[0],j=c[1];return Object(f.jsx)("header",{children:Object(f.jsxs)(u.a,{className:"px-5 py-3 justify-content-between",expand:"md",children:[Object(f.jsx)(l.a,{className:"logo",children:Object(f.jsx)(i.b,{to:"/students-input",children:"CupeX first app"})}),Object(f.jsx)(b.a,{onClick:function(){return j(!s)}}),Object(f.jsx)(o.a,{className:"flex-grow-0",isOpen:s,navbar:!0,children:Object(f.jsxs)(O.a,{className:"mr-auto",navbar:!0,children:[Object(f.jsx)(h.a,{className:"px-2",children:Object(f.jsx)(i.b,{to:"/students-input/all-students",children:"Students"})}),Object(f.jsx)(h.a,{className:"px-2",children:Object(f.jsx)(i.b,{to:"/students-input/all-subjects",children:"Subjects"})}),Object(f.jsx)(h.a,{className:"px-2",children:Object(f.jsx)(i.b,{to:"/students-input/all-professors",children:"Professors"})}),Object(f.jsx)("li",{children:Object(f.jsxs)("select",{className:"sort-btn",onChange:function(t){return function(t){e.push("/students-input/".concat(t))}(t.target.value)},children:[Object(f.jsx)("option",{value:"add",children:"Add new?"}),Object(f.jsx)("option",{value:"add-new-student",children:"Add new student"}),Object(f.jsx)("option",{value:"add-new-professor",children:"Add new profesor"}),Object(f.jsx)("option",{value:"add-new-subject",children:"Add new subject"})]})})]})})]})})},p=(c(66),function(e){return Object(f.jsx)("div",{className:"card",children:e.children})}),m=function(){return Object(f.jsx)(p,{children:Object(f.jsx)("h1",{children:"Home Page"})})},v=(c(67),function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)("h2",{children:"Add new:"}),Object(f.jsxs)("ul",{className:"addNewUl",children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/students-input/add-new-student",children:Object(f.jsx)("button",{className:"change-btn",children:"student"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/students-input/add-new-subject",children:Object(f.jsx)("button",{className:"change-btn",children:"subject"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/students-input/add-new-professor",children:Object(f.jsx)("button",{className:"change-btn",children:"professor"})})})]})]})}),N=function(){return Object(f.jsx)(v,{})},S=c(21),g=c(18),y=c(25);c(72);y.a.initializeApp({apiKey:"AIzaSyAmiHfPoCndQtpGB3sdhvNAnzER_NYqRq0",authDomain:"students-input.firebaseapp.com",databaseURL:"https://students-input-default-rtdb.europe-west1.firebasedatabase.app",projectId:"students-input",storageBucket:"students-input.appspot.com",messagingSenderId:"1037427824217",appId:"1:1037427824217:web:edad276ef09ea0b4688348",measurementId:"G-459YJZBEBM"}),y.a.analytics();var w=y.a.firestore(),C=(y.a.firestore,w),A=c(80),E=c(81),P=c(82),k=function(){var e=Object(d.h)(),t=Object(n.useState)([]),c=Object(a.a)(t,2),s=c[0],j=c[1],r=Object(n.useState)(!0),u=Object(a.a)(r,2),l=u[0],b=u[1],o=C.collection("students");Object(n.useEffect)((function(){o.get().then((function(e){return e.forEach((function(e){var t=e.data(),c=e.id,n=Object(g.a)({id:c},t);s.find((function(e){return e.id=c}))||(j((function(e){return[].concat(Object(S.a)(e),[n])})),b(!1))}))}))}),[]);var O=function(e){+prompt("enter password")===+s.filter((function(t){return t.id===e})).map((function(e){return e.password}))?(!function(e){o.doc(e).delete().then((function(){console.log("Student successfully deleted!")}))}(e),console.log("student deleted")):alert("wrong password!")},h=Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:" All Students"}),Object(f.jsxs)("select",{className:"sort-btn",onChange:function(e){!function(e){var t=e;s.sort((function(e,c){return e[t]>c[t]?1:-1}));var c=JSON.parse(JSON.stringify(s));j(c)}(e.target.value)},children:[Object(f.jsx)("option",{value:"order",children:"sort by:"}),Object(f.jsx)("option",{value:"fName",children:"First Name"}),Object(f.jsx)("option",{value:"lName",children:"Last name"}),Object(f.jsx)("option",{value:"year",children:"Date of Birth"})]})]});return Object(f.jsxs)(p,{children:[h,l&&Object(f.jsx)("h2",{children:"Loading..."}),Object(f.jsx)(A.a,{className:"mt-5",children:s.map((function(t){return Object(f.jsxs)(E.a,{className:"my-3",id:t.id,children:[Object(f.jsxs)("div",{className:"text-start",children:[Object(f.jsx)("span",{children:"student: "}),Object(f.jsxs)("span",{children:[t.fName," "]}),Object(f.jsxs)("span",{children:[t.lName,", "]}),Object(f.jsxs)("span",{children:["born: ",t.year]})]}),Object(f.jsxs)("div",{className:"text-end",children:[Object(f.jsx)(i.b,{to:"".concat(e.url,"/details/").concat(t.id),children:Object(f.jsx)(P.a,{color:"info",children:"info"})}),Object(f.jsx)(i.b,{to:"".concat(e.url,"/edit/").concat(t.id),children:Object(f.jsx)(P.a,{color:"success",children:"edit"})}),Object(f.jsx)(P.a,{color:"danger",onClick:function(){return O(t.id)},children:"delete"})]})]},t.id)}))})]})},I=function(){return Object(f.jsx)(k,{})},L=c(83),F=c(84),J=c(44),B=c(85),D=function(e){return Object(f.jsxs)(L.a,{className:"py-1",children:[Object(f.jsx)(F.a,{addonType:"prepend",children:Object(f.jsx)(J.a,{children:e.label})}),Object(f.jsx)(B.a,{placeholder:e.placeholder,type:e.type,id:e.fName,value:e.value,onChange:e.onChange})]})},M=s.a.memo((function(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),s=c[0],j=c[1],r=Object(n.useState)(""),i=Object(a.a)(r,2),u=i[0],l=i[1],b=Object(n.useState)(""),o=Object(a.a)(b,2),O=o[0],h=o[1],x=Object(n.useState)(""),m=Object(a.a)(x,2),v=m[0],N=m[1],S=Object(n.useState)(!1),g=Object(a.a)(S,2),y=(g[0],g[1]),w=Object(n.useState)({}),C=Object(a.a)(w,2),A=(C[0],C[1]),E=Object(d.f)();return Object(f.jsx)("section",{children:Object(f.jsxs)(p,{children:[Object(f.jsx)("h2",{children:"Students input form"}),Object(f.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===s||""===u||""===O||""===v)return y(!1),void alert("pls fill all fields");y(!0);var c={fName:s,lName:u,year:O,password:v,subjects:{}};A(c),e.onAddStudent(c),j(""),l(""),h(""),N(""),E.replace("/students-input/all-students")},children:[Object(f.jsx)(D,{type:"text",id:"fName",onChange:function(e){j(e.target.value)},placeholder:e.student?"".concat(e.student.fName):"",value:s,label:"First name:"}),Object(f.jsx)(D,{type:"text",id:"lName",onChange:function(e){l(e.target.value)},placeholder:e.student?"".concat(e.student.lName):"",value:u,label:"Last name:"}),Object(f.jsx)(D,{type:"date",min:"1111-01-01",id:"year",onChange:function(e){h(e.target.value)},placeholder:e.student?"".concat(e.student.year):"",value:O,label:"Birth:"}),Object(f.jsx)(D,{placeholder:e.student?"".concat(e.student.password):"",type:"number",id:"pass",value:v,onChange:function(e){N(e.target.value)},label:"Password:"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",className:"add-btn",children:e.student?"save changes":"add student"})})]})]})})})),T=function(){return Object(f.jsx)(M,{onAddStudent:function(e){C.collection("students").add(e).then((function(e){}))}})},q=function(){return Object(f.jsx)(T,{})},z=function(){var e=Object(d.g)(),t=Object(n.useState)({}),c=Object(a.a)(t,2),s=c[0],j=c[1],r=C.collection("students").doc(e.id);Object(n.useEffect)((function(){r.get().then((function(e){var t=e.data();j(t)}))}),[]);return Object(f.jsx)(M,{onAddStudent:function(e){r.update(e).then((function(){console.log("Document edited")}))},student:s})},R=function(){return Object(f.jsx)(z,{})},G=function(e){var t=Object(d.h)(),c=Object(n.useState)([]),s=Object(a.a)(c,2),j=s[0],r=s[1],u=Object(n.useState)(!0),l=Object(a.a)(u,2),b=l[0],o=l[1],O=C.collection("professors");Object(n.useEffect)((function(){O.get().then((function(e){return e.forEach((function(e){var t=e.data(),c=e.id,n=Object(g.a)({id:c},t);j.find((function(e){return e.id=c}))||(r((function(e){return[].concat(Object(S.a)(e),[n])})),o(!1))}))}))}),[]);return b?Object(f.jsx)("h2",{children:"Loading..."}):Object(f.jsx)("section",{children:j.map((function(e){return Object(f.jsxs)("div",{className:"item-wrapper",id:e.id,children:[Object(f.jsxs)("div",{className:"info-wrapper",children:[Object(f.jsx)("span",{children:"professor: "}),Object(f.jsxs)("span",{children:[e.fName," "]}),Object(f.jsxs)("span",{children:[e.lName," "]})]}),Object(f.jsxs)("div",{className:"btn-wrapper",children:[Object(f.jsx)(i.b,{to:"".concat(t.url,"/details/").concat(e.id),children:Object(f.jsx)("button",{className:"info-btn",children:"\u2139"})}),Object(f.jsx)(i.b,{to:"".concat(t.url,"/edit/").concat(e.id),children:Object(f.jsx)("button",{className:"change-btn",children:"edit"})}),Object(f.jsx)("button",{className:"delete-btn",onClick:function(){return t=e.id,void O.doc(t).delete().then((function(){console.log("professor successfully deleted!")}));var t},children:"delete"})]})]},e.id)}))})},H=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],j=Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:" All Professors"}),Object(f.jsxs)("select",{className:"sort-btn",onChange:function(e){!function(e){var t=e;c.sort((function(e,c){return e[t]>c[t]?1:-1}));var n=JSON.parse(JSON.stringify(c));s(n)}(e.target.value)},children:[Object(f.jsx)("option",{value:"order",children:"sort by:"}),Object(f.jsx)("option",{value:"fName",children:"First Name"}),Object(f.jsx)("option",{value:"lName",children:"Last name"})]})]});return Object(f.jsxs)(p,{children:[j,Object(f.jsx)(G,{})]})},U=function(){return Object(f.jsx)(H,{})},Y=s.a.memo((function(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),s=c[0],j=c[1],r=Object(n.useState)(""),i=Object(a.a)(r,2),u=i[0],l=i[1],b=Object(n.useState)(!1),o=Object(a.a)(b,2),O=(o[0],o[1]),h=Object(d.f)();return Object(f.jsxs)(p,{children:[Object(f.jsx)("h2",{children:"Professor input form"}),Object(f.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===s||""===u)return O(!1),void alert("pls fill all fields");O(!0);var c={fName:s,lName:u,subject:""};e.onAddProfessor(c),j(""),l(""),h.replace("/students-input/all-professors")},children:[Object(f.jsx)(D,{placeholder:e.professor?"".concat(e.professor.fName):"",type:"text",id:"fName",value:s,onChange:function(e){j(e.target.value)},label:"First name:"}),Object(f.jsx)(D,{placeholder:e.professor?"".concat(e.professor.lName):"",type:"text",id:"lName",value:u,onChange:function(e){l(e.target.value)},label:"Last name:"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",className:"add-btn",children:"Add professor"})})]})]})})),K=function(){return Object(f.jsx)(Y,{onAddProfessor:function(e){C.collection("professors").add(e).then((function(e){}))}})},Q=function(){return Object(f.jsx)(K,{})},X=function(){var e=Object(d.g)(),t=Object(n.useState)({}),c=Object(a.a)(t,2),s=c[0],j=c[1],r=C.collection("professors").doc(e.id);Object(n.useEffect)((function(){r.get().then((function(e){var t=e.data();j(t)}))}),[]);return Object(f.jsx)(Y,{onAddProfessor:function(e){r.update(e).then((function(){console.log("Document edited")}))},professor:s})},Z=function(){return Object(f.jsx)(X,{})},_=function(e){return Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:"all professors list"}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"first name"}),Object(f.jsx)("th",{children:"last name"}),Object(f.jsx)("th",{children:"teaching"}),Object(f.jsx)("th",{style:{textAlign:"end"},children:"add to subject"})]})}),Object(f.jsx)("tbody",{children:e.professors.map((function(t){return Object(f.jsxs)("tr",{id:t.id,children:[Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[t.fName," "]})}),Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[t.lName," "]})}),Object(f.jsx)("td",{children:t.subject===e.subjectId?"yes":"x"}),Object(f.jsx)("td",{className:"btn-td delete-td",children:Object(f.jsx)("button",{className:"add-btn",onClick:function(){return e.onAddProfessorToSubject(t.id)},children:"add"})})]},t.id)}))})]})]})},V=(c(42),function(e){var t=e.subjectId,c=(e.userSubjects.find((function(e){return e.id===t})).subject,Object(n.useState)([])),s=Object(a.a)(c,2),j=s[0],r=s[1],i=C.collection("professors"),d=C.collection("subjects");Object(n.useEffect)((function(){i.get().then((function(e){return e.forEach((function(e){var t=e.data(),c=e.id,n=Object(g.a)({id:c},t);j.find((function(e){return e.id=c}))||r((function(e){return[].concat(Object(S.a)(e),[n])}))}))}))}),[]);return Object(f.jsxs)("div",{className:"Modal",children:[Object(f.jsx)("button",{className:"add-btn",onClick:function(){return e.onCloseModal()},children:"close list"}),Object(f.jsx)(_,{subjectId:t,professors:j,onAddProfessorToSubject:function(e){i.doc(e).update({subject:t}),d.doc(t).update({professor:e})}})]})}),W=c(30),$=function(e){var t=e.students.filter((function(t){return!Object.keys(t.subjects).includes(e.subjectId)}));return Object(f.jsx)("section",{children:Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"first name"}),Object(f.jsx)("th",{children:"last name"}),Object(f.jsx)("th",{style:{textAlign:"end"},children:"add to subject"})]})}),Object(f.jsx)("tbody",{children:t.map((function(t){return Object(f.jsxs)("tr",{id:t.id,children:[Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[t.fName," "]})}),Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[t.lName," "]})}),Object(f.jsx)("td",{className:"btn-td delete-td",children:Object(f.jsx)("button",{className:"add-btn",onClick:function(){return e.onAddStudentToSubject(t.id)},children:"add"})})]},t.id)}))})]})})},ee=function(e){var t=e.subjectId,c=e.userSubjects.find((function(e){return e.id===t})),s=(c.subject,c.professor),j=Object(n.useState)([]),r=Object(a.a)(j,2),i=r[0],d=r[1],u=C.collection("students");Object(n.useEffect)((function(){u.get().then((function(e){return e.forEach((function(e){var t=e.data(),c=e.id,n=Object(g.a)({id:c},t);i.find((function(e){return e.id=c}))||d((function(e){return[].concat(Object(S.a)(e),[n])}))}))}))}),[]);return Object(f.jsxs)("div",{className:"Modal",children:[Object(f.jsx)("button",{className:"add-btn",onClick:function(){return e.onCloseModal()},children:"close list"}),Object(f.jsx)($,{subjectId:t,students:i,onAddStudentToSubject:function(e){void 0===s?s="":u.doc(e).set({subjects:Object(W.a)({},t,"")},{merge:!0});var c=i.filter((function(t){return t.id!==e}));d(c)}})]})},te=function(e){var t=Object(d.h)(),c=Object(n.useState)([]),s=Object(a.a)(c,2),j=s[0],r=s[1],u=Object(n.useState)(!0),l=Object(a.a)(u,2),b=l[0],o=l[1],O=Object(n.useState)(""),h=Object(a.a)(O,2),x=h[0],m=h[1],v=Object(n.useState)(!1),N=Object(a.a)(v,2),y=N[0],w=N[1],A=Object(n.useState)(!1),E=Object(a.a)(A,2),P=E[0],k=E[1];Object(n.useEffect)((function(){C.collection("subjects").get().then((function(e){return e.forEach((function(e){var t=e.data(),c=e.id,n=Object(g.a)({id:c},t);j.find((function(e){return e.id=c}))||(r((function(e){return[].concat(Object(S.a)(e),[n])})),o(!1))}))}))}),[]);var I=Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:" All Subjects"}),Object(f.jsxs)("select",{className:"sort-btn",onChange:function(e){!function(e){var t=e;j.sort((function(e,c){return e[t]>c[t]?1:-1}));var c=JSON.parse(JSON.stringify(j));r(c)}(e.target.value)},children:[Object(f.jsx)("option",{value:"order",children:"sort by:"}),Object(f.jsx)("option",{value:"fName",children:"First Name"}),Object(f.jsx)("option",{value:"lName",children:"Last name"})]})]});return Object(f.jsxs)(p,{children:[I,b&&Object(f.jsx)("h2",{children:"Loading..."}),y&&Object(f.jsx)(ee,{onCloseModal:function(){w(!1)},subjectId:x,userSubjects:j}),P&&Object(f.jsx)(V,{onCloseModal:function(){k(!1)},subjectId:x,userSubjects:j}),j.map((function(e){return Object(f.jsxs)("div",{className:"item-wrapper",id:e.id,children:[Object(f.jsx)("div",{className:"info-wrapper",children:Object(f.jsxs)("span",{children:["subject: ",e.subject]})}),Object(f.jsxs)("div",{className:"btn-wrapper",children:[Object(f.jsx)(i.b,{to:"".concat(t.url,"/details/").concat(e.id),children:Object(f.jsx)("button",{className:"info-btn",children:"\u2139"})}),Object(f.jsx)(i.b,{to:"".concat(t.url,"/edit/").concat(e.id),children:Object(f.jsx)("button",{className:"change-btn",children:"edit"})}),Object(f.jsx)("button",{className:"change-btn",onClick:function(){return function(e){m(e),w(!0)}(e.id)},children:"add student"}),Object(f.jsx)("button",{className:"change-btn",onClick:function(){return function(e){m(e),k(!0)}(e.id)},children:"add professor"}),Object(f.jsx)("button",{className:"delete-btn",onClick:function(){return function(e){C.collection("subjects").doc(e).delete().then((function(){console.log("Subject successfully deleted!")}))}(e.id)},children:"delete"})]})]},e.id)}))]})},ce=function(){return Object(f.jsx)(te,{})},ne=s.a.memo((function(e){var t=Object(n.useState)(""),c=Object(a.a)(t,2),s=c[0],j=c[1],r=Object(n.useState)(!1),i=Object(a.a)(r,2),u=(i[0],i[1]),l=Object(d.f)();return Object(f.jsxs)(p,{children:[Object(f.jsx)("h2",{children:"Subject input form"}),Object(f.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""===s)return u(!1),void alert("pls enter subject name");u(!0);var c={subject:s};e.onAddSubject(c),j(""),l.replace("/students-input/all-subjects")},children:[Object(f.jsx)(D,{placeholder:e.subject?"".concat(e.subject.subject):"",type:"text",id:"subject",value:s,onChange:function(e){j(e.target.value)},label:"Subject title:"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",className:"add-btn",children:e.subject?"save changes":"add subject"})})]})]})})),se=function(){return Object(f.jsx)(ne,{onAddSubject:function(e){C.collection("subjects").add(e).then((function(e){}))}})},je=function(){return Object(f.jsx)(se,{})},re=function(){var e=Object(d.g)(),t=Object(n.useState)({}),c=Object(a.a)(t,2),s=c[0],j=c[1],r=C.collection("subjects").doc(e.id);C.collection("profesors");Object(n.useEffect)((function(){r.get().then((function(e){var t=e.data();j(t)}))}),[]);return Object(f.jsx)(ne,{onAddSubject:function(e){r.update({subject:e.subject})},subject:s})},ie=function(){return Object(f.jsx)(re,{})},de=function(e){var t=Object(d.g)().id,c=e.userProfessors.find((function(e){return e.id===t}));return Object(f.jsxs)(p,{children:[Object(f.jsxs)("h2",{children:[c.fName," info:"]}),Object(f.jsxs)("table",{id:"details-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"first name"}),Object(f.jsx)("th",{children:"last name"}),Object(f.jsx)("th",{children:"subject"}),Object(f.jsx)("th",{children:"unique id"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[c.fName," "]})}),Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[c.lName," "]})}),""===c.subject?Object(f.jsx)("td",{children:"not teaching yet"}):Object(f.jsx)("td",{children:e.userSubjects.find((function(e){return e.id===c.subject})).subject}),Object(f.jsx)("td",{children:t})]})})]})]})},ae=c(86),ue=function(e){var t=Object(d.g)().id,c=e.userStudents.find((function(e){return e.id===t}));return Object(f.jsxs)(p,{children:[Object(f.jsxs)("h2",{children:[c.fName," ",c.lName," info:"]}),Object(f.jsxs)(ae.a,{className:"mt-3 mb-5",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"first name"}),Object(f.jsx)("th",{children:"last name"}),Object(f.jsx)("th",{children:"date of birth"}),Object(f.jsx)("th",{children:"password"}),Object(f.jsx)("th",{children:"unique id"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:c.fName}),Object(f.jsx)("td",{children:c.lName}),Object(f.jsx)("td",{children:c.year}),Object(f.jsx)("td",{children:c.password}),Object(f.jsx)("td",{children:t})]})})]}),Object(f.jsxs)("h4",{children:["Subjects that ",c.fName," attend:"]}),Object(f.jsxs)(ae.a,{striped:!0,className:"student-details-dable",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"subject"}),Object(f.jsx)("th",{children:"professor"})]})}),Object(f.jsx)("tbody",{children:e.userSubjects.map((function(t){var n=e.userProfessors.find((function(e){return e.id===t.professor}));if(Object.keys(c.subjects).includes(t.id))return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"w50-td",children:t.subject}),Object(f.jsxs)("td",{className:"w50-td",children:[n.fName," ",n.lName]})]},t.id)}))})]})]})},le=function(e){var t=Object(d.g)().id,c=e.userSubjects.find((function(e){return e.id===t})),n=e.userProfessors.find((function(e){return e.id===c.professor})),s=e.userStudents.filter((function(e){return Object.keys(e.subjects).includes(t)}));return Object(f.jsxs)(p,{children:[Object(f.jsxs)("h2",{children:[c.subject," info:"]}),Object(f.jsxs)("table",{id:"details-table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"title"}),Object(f.jsx)("th",{children:"professor"}),Object(f.jsx)("th",{children:"unique id"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[c.subject," "]})}),Object(f.jsx)("td",{children:Object(f.jsxs)("span",{children:[n.fName," ",n.lName]})}),Object(f.jsx)("td",{children:t})]})})]}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsx)("tr",{children:Object(f.jsx)("th",{children:"Student that attend this subject:"})})}),Object(f.jsx)("tbody",{children:s.map((function(e){return Object(f.jsx)("tr",{children:Object(f.jsxs)("td",{children:[e.fName," ",e.lName]})},e.id)}))})]})]})},be=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2),c=t[0],s=t[1],j=Object(n.useState)([]),r=Object(a.a)(j,2),i=r[0],u=r[1],l=Object(n.useState)([]),b=Object(a.a)(l,2),o=b[0],O=b[1],h=Object(n.useState)(!1),x=Object(a.a)(h,2),m=x[0],v=x[1],N=Object(n.useState)(!1),S=Object(a.a)(N,2),y=S[0],w=S[1],A=Object(n.useState)(!1),E=Object(a.a)(A,2),P=E[0],k=E[1],I=Object(n.useState)(!1),L=Object(a.a)(I,2),F=L[0],J=L[1],B=Object(d.g)();return Object(n.useEffect)((function(){m&&y&&J(!0)}),[m,y,P,F]),Object(n.useEffect)((function(){C.collection("subjects").get().then((function(e){var t=[];e.forEach((function(e){var c=e.data(),n=e.id,s=Object(g.a)({id:n},c);t.push(s)})),s(t)})).finally((function(){w(!0)}))}),[]),Object(n.useEffect)((function(){C.collection("students").get().then((function(e){var t=[];e.forEach((function(e){var c=e.data(),n=e.id,s=Object(g.a)({id:n},c);t.push(s)})),u(t)})).finally((function(){v(!0)}))}),[]),Object(n.useEffect)((function(){C.collection("professors").get().then((function(e){var t=[];e.forEach((function(e){var c=e.data(),n=e.id,s=Object(g.a)({id:n},c);t.push(s)})),O(t)})).finally((function(){k(!0)}))}),[]),F?c.find((function(e){return e.id===B.id}))?Object(f.jsx)(le,{userSubjects:c,userStudents:i,userProfessors:o}):i.find((function(e){return e.id===B.id}))?Object(f.jsx)(ue,{userSubjects:c,userStudents:i,userProfessors:o}):o.find((function(e){return e.id===B.id}))?Object(f.jsx)(de,{userSubjects:c,userStudents:i,userProfessors:o}):void 0:Object(f.jsx)(p,{children:Object(f.jsx)("h2",{children:"Loading..."})})};var oe=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(x,{}),Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{path:"/students-input",exact:!0,children:Object(f.jsx)(m,{})}),Object(f.jsx)(d.a,{path:"/students-input/add",exact:!0,children:Object(f.jsx)(N,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-students",exact:!0,children:Object(f.jsx)(I,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-subjects",exact:!0,children:Object(f.jsx)(ce,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-professors",exact:!0,children:Object(f.jsx)(U,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-students/details/:id",exact:!0,children:Object(f.jsx)(be,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-students/edit/:id",exact:!0,children:Object(f.jsx)(R,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-subjects/details/:id",exact:!0,children:Object(f.jsx)(be,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-subjects/edit/:id",exact:!0,children:Object(f.jsx)(ie,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-professors/details/:id",exact:!0,children:Object(f.jsx)(be,{})}),Object(f.jsx)(d.a,{path:"/students-input/all-professors/edit/:id",exact:!0,children:Object(f.jsx)(Z,{})}),Object(f.jsx)(d.a,{path:"/students-input/add-new-student",exact:!0,children:Object(f.jsx)(q,{})}),Object(f.jsx)(d.a,{path:"/students-input/add-new-subject",exact:!0,children:Object(f.jsx)(je,{})}),Object(f.jsx)(d.a,{path:"/students-input/add-new-professor",exact:!0,children:Object(f.jsx)(Q,{})})]})]})},Oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,88)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,j=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),j(e),r(e)}))};c(73);r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(oe,{})})}),document.getElementById("root")),Oe()}},[[74,1,2]]]);
//# sourceMappingURL=main.591b93d9.chunk.js.map