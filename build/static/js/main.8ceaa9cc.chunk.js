(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),a=t(6),u=t(3),o=t(1),l=t(4),s=t.n(l),i=t(0),d=function(e){var n=e.currName,t=e.currPhone,c=e.handlePersonChange,r=e.handlenumberChange,a=e.addPerson;return Object(i.jsxs)("form",{onSubmit:a,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:n,onChange:c})]}),Object(i.jsxs)("div",{children:["Phone#: ",Object(i.jsx)("input",{type:"text",pattern:"[\\d -]+",value:t,onChange:r})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add Person"})})]})},h=function(e){var n=e.addresses,t=e.searchText,c=e.deleteHandler;if(console.log("crash"),t.length>0&&n.length>0){var r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.length>0?Object(i.jsxs)(i.Fragment,{children:["   ",r.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete "})]},e.name)}))]}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("p",{children:"Sorry no match found!"})})}return n.length>0&&0===t.length?Object(i.jsx)(i.Fragment,{children:n.map((function(e){return Object(i.jsxs)("p",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{onClick:function(){return c(e.id)},children:"Delete "})]},e.name)}))}):0===n.length?Object(i.jsx)(i.Fragment,{children:"Data Retrieving not complete or no contacts available"}):Object(i.jsx)(i.Fragment,{})},f=function(e){var n=e.searchText,t=e.handleSearch;return Object(i.jsxs)("div",{children:["Search Name ",Object(i.jsx)("input",{value:n,onChange:t})]})},j=function(e){return console.log("fetching Initial data"),s.a.get(e).then((function(e){return e.data}))},b=function(e,n){return s.a.post(e,n).then((function(e){return e.data}))},m=function(e,n){return s.a.delete("".concat(e,"/").concat(n)).then((function(e){return e.data}))},O=function(e,n){return console.log(n.id,e),s.a.put("".concat(e,"/").concat(n.id),n).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.notifType;return console.log(n,t),Object(i.jsxs)("div",{className:t,children:[" ",n," "]})},p=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),l=Object(u.a)(r,2),s=l[0],p=l[1],x=Object(o.useState)(""),v=Object(u.a)(x,2),C=v[0],T=v[1],w=Object(o.useState)(""),P=Object(u.a)(w,2),y=P[0],S=P[1],N=Object(o.useState)(""),k=Object(u.a)(N,2),D=k[0],L=k[1],F=Object(o.useState)(""),I=Object(u.a)(F,2),E=I[0],H=I[1],J="https://paranijs.herokuapp.com/api/persons";Object(o.useEffect)((function(){console.log("effect"),j(J).then((function(e){return c(e)}))}),[]);var A=function(e){S(e.target.value)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(g,{message:D,notifType:E}),Object(i.jsx)("h3",{children:"Add a new Contact"}),Object(i.jsx)(d,{currPhone:C,currName:s,handlePersonChange:function(e){p(e.target.value)},handlenumberChange:function(e){e.target.validity.valid&&T(e.target.value)},addPerson:function(e){if(e.preventDefault(),s.length>0&&C.length>0){if(0===t.filter((function(e){return s.toLowerCase()===e.name.toLowerCase()})).length){var n={name:s,number:C};b(J,n).then((function(e){return c(t.concat(e))})).catch((function(e){H("error"),L("".concat(n.name," could not be added successfully")),setTimeout((function(){H(null),L(null)}),5e3)})),H("success"),L("".concat(n.name," added successfully")),setTimeout((function(){H(null),L(null)}),5e3)}else if(0===t.filter((function(e){return C===e.number})).length&&window.confirm("confirm update","".concat(s," is already there on the list, want to update with new phone no."),[{text:"Cancel"}])){var r=t.filter((function(e){return s.toLowerCase()===e.name.toLowerCase()}))[0];O(J,Object(a.a)(Object(a.a)({},r),{},{number:C})).then((function(e){c(t.map((function(n){return n.id===e.id?e:n}))),H("success"),L("".concat(r.name," updated successfully")),setTimeout((function(){H(null),L(null)}),5e3)})).catch((function(e){H("error"),L("".concat(r.name," could not be updated successfully")),setTimeout((function(){H(null),L(null)}),5e3)}))}p(""),T("")}else 0===s.length&&0===C.length?(H("error"),L("Please fill Name and Phone number"),setTimeout((function(){H(null),L(null)}),5e3)):0===s.length&&C.length>0?(H("error"),L("Please fill Name"),setTimeout((function(){H(null),L(null)}),5e3)):(H("error"),L("Please fill Phone number"),setTimeout((function(){H(null),L(null)}),5e3))}}),Object(i.jsx)("h3",{children:"Search in Contacts"}),Object(i.jsx)(f,{searchText:y,handleSearch:A}),Object(i.jsx)("h3",{children:"Contact Numbers"}),Object(i.jsx)(h,{addresses:t,searchText:y,handleSearch:A,deleteHandler:function(e){m(J,e).then((function(n){c(t.filter((function(n){return n.id!==e}))),S(""),H("success"),L("ID: ".concat(e," deleted successfully")),setTimeout((function(){H(null),L(null)}),5e3)})).catch((function(n){H("error"),L("ID: ".concat(e," could not be deleted")),console.log(n),setTimeout((function(){H(null),L(null)}),5e3)}))}})]})};t(39);r.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8ceaa9cc.chunk.js.map