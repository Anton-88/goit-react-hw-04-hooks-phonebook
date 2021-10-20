(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(t,e,n){t.exports={contact_form_container:"ContactForm_contact_form_container__32Bez",contact_form_item:"ContactForm_contact_form_item__JpIzR",contact_form_label:"ContactForm_contact_form_label__1FltL",contact_add_btn:"ContactForm_contact_add_btn__1ZWER"}},,,function(t,e,n){t.exports={contact_list:"ContactList_contact_list__1R5Vw",contact_list_item:"ContactList_contact_list_item__1BNdE",contact_list_button:"ContactList_contact_list_button__dzkzU"}},,function(t,e,n){},,function(t,e,n){t.exports={filter_container:"Filter_filter_container__24r7X"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(9),r=n.n(o),i=(n(17),n(11)),s=n(2),l=(n(8),n(3)),u=n.n(l),d=n(20),m=n(0);function b(t){var e=t.addContact,n=Object(d.a)(),a=Object(d.a)(),o=Object(c.useState)(""),r=Object(s.a)(o,2),i=r[0],l=r[1],b=Object(c.useState)(""),_=Object(s.a)(b,2),j=_[0],f=_[1],h=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":l(c);break;case"number":f(c);break;default:return}},O=function(){l(""),f("")};return Object(m.jsx)("form",{onSubmit:function(t){t.preventDefault();var n={id:Object(d.a)(),name:i,number:j};e(n),O()},children:Object(m.jsxs)("div",{className:u.a.contact_form_container,children:[Object(m.jsxs)("div",{className:u.a.contact_form_item,children:[Object(m.jsx)("label",{className:u.a.contact_form_label,htmlFor:n,children:"Contact name:"}),Object(m.jsx)("input",{id:n,type:"text",name:"name",placeholder:"Enter contact name ...",onChange:h,value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("div",{className:u.a.contact_form_item,children:[Object(m.jsx)("label",{className:u.a.contact_form_label,htmlFor:a,children:"Contact number:"}),Object(m.jsx)("input",{id:a,type:"tel",name:"number",placeholder:"Enter contact number ...",onChange:h,value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:u.a.contact_add_btn,disabled:!i||j.length<5,children:"Add contact"})]})})}var _=n(10),j=n.n(_);function f(t){var e=t.value,n=t.onFilterChange;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:j.a.filter_container,children:[Object(m.jsx)("p",{children:"Find contact by name"}),Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})})}var h=n(6),O=n.n(h);function p(t){var e=t.filteredContacts,n=t.onListChange;return Object(m.jsx)("ul",{className:O.a.contact_list,children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(m.jsxs)("li",{className:O.a.contact_list_item,children:[Object(m.jsxs)("p",{children:[e,": ",c]}),Object(m.jsx)("button",{className:O.a.contact_list_button,type:"button",onClick:function(){return n(a)},children:"Delete number"})]},Object(d.a)())}))})}function x(){var t=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),e=Object(s.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),l=r[0],u=r[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"PhoneBook"}),Object(m.jsx)(b,{addContact:function(t){n.map((function(t){return t.name})).includes(t.name)?alert("".concat(t.name," is in your contacts list already")):a((function(e){return[].concat(Object(i.a)(e),[t])}))},contacts:n}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{value:l,onFilterChange:function(t){u(t.target.value)}}),Object(m.jsx)(p,{filteredContacts:function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onListChange:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})]})}r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.75548431.chunk.js.map