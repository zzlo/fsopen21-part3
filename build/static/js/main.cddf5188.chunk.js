(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(14),a=t.n(r),u=t(3),i=t(0),o=function(e){return Object(i.jsxs)("form",{onSubmit:e.addContact,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{onChange:e.handleNameChange,value:e.newName})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{onChange:e.handleNumberChange,value:e.newNumber})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.persons,t=e.filter,c=e.handleClick;return Object(i.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(i.jsxs)("div",{children:[e.name," ",e.number," ",Object(i.jsx)("button",{value:e.id,onClick:c,children:"delete"})]},e.name)}))})},d=function(e){return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{onChange:e.handleFilterChange,value:e.filter})]})},s=t(4),h=t.n(s),f="/api/persons",j=function(){return h.a.get(f).then((function(e){return e.data}))},b=function(e){return h.a.post(f,e).then((function(e){return e.data}))},m=function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{style:{color:"green",fontStyle:"helvetica",fontSize:16,padding:10,marginBottom:5,background:"lightgrey",borderRadius:5},children:n})},p=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),h=s[0],f=s[1],p=Object(c.useState)(""),g=Object(u.a)(p,2),x=g[0],w=g[1],C=Object(c.useState)(""),N=Object(u.a)(C,2),k=N[0],S=N[1],y=Object(c.useState)(null),D=Object(u.a)(y,2),T=D[0],B=D[1];Object(c.useEffect)((function(){j().then((function(e){r(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(v,{message:T}),Object(i.jsx)(d,{handleFilterChange:function(e){return S(e.target.value)},filter:k}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(o,{addContact:function(e){e.preventDefault();var n=-1,c=t.filter((function(e){return e.name===h})),a={name:h,number:x};1===c.length?(n=c[0].id,window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))&&(m(n,a).then((function(e){r(t.map((function(t){return t.id!==n?t:e})))})).catch((function(e){B("Information of ".concat(h," has already been deleted from server")),setTimeout((function(){B(null)}),5e3)})),B("Updated ".concat(h,"'s number")),setTimeout((function(){B(null)}),5e3))):(b(a).then((function(e){return r(t.concat(e))})),B("Added ".concat(h)),setTimeout((function(){B(null)}),5e3),f(""),w(""))},handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){return w(e.target.value)},newName:h,newNumber:x}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(l,{persons:t,filter:k,handleClick:function(e){e.preventDefault();var n=e.target.value,c=t.find((function(e){return e.id==n})).name;window.confirm("Delete ".concat(c))&&(O(n),r(t.filter((function(e){return e.id!=n}))),B("Deleted ".concat(c)),setTimeout((function(){B(null)}),5e3))}})]})};a.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.cddf5188.chunk.js.map