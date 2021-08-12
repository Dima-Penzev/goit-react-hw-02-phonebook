(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={forms:"App_forms__3H8Sk",contacts:"App_contacts__2Fgkg"}},12:function(t,e,n){t.exports={label:"Filter_label__2Yk7G",input:"Filter_input__3ZFVx"}},20:function(t,e,n){},3:function(t,e,n){t.exports={label:"ContactForm_label__1VDfl",input:"ContactForm_input__2R8sW",addBtn:"ContactForm_addBtn__ithwA"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),s=n.n(r),i=(n(20),n(15)),o=n(5),l=n(6),u=n(8),d=n(7),b=n(14),m=n(2),h=n.n(m),j=n(3),p=n.n(j),f=n(0),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){t.setState(Object(b.a)({},e.currentTarget.name,e.currentTarget.value)),t.handleAddId()},t.handleAddId=function(){t.setState({id:"id-".concat(h.a.generate())})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(l.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{className:p.a.label,htmlFor:this.nameInputId,children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,required:!0,onChange:this.handleChange,id:this.nameInputId,className:p.a.input}),Object(f.jsx)("label",{className:p.a.label,htmlFor:this.numberInputId,children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,required:!0,onChange:this.handleChange,id:this.numberInputId,className:p.a.input}),Object(f.jsx)("button",{type:"submit",className:p.a.addBtn,children:"Add contact"})]})}}]),n}(a.Component);var v=function(t){var e=t.name,n=t.number;return Object(f.jsxs)("p",{children:[e,": ",n]})},x=n(9),_=n.n(x);var g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("div",{children:Object(f.jsx)("ul",{className:_.a.list,children:e.map((function(t){return Object(f.jsxs)("li",{className:_.a.item,children:[Object(f.jsx)(v,{name:t.name,number:t.number}),Object(f.jsx)("button",{type:"button",className:_.a.deleteBtn,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})})},C=n(12),I=n.n(C);var y=function(t){var e=t.value,n=t.onChange,a=h.a.generate();return Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{className:I.a.label,htmlFor:a,children:"Find contacts by name"}),Object(f.jsx)("input",{type:"text",className:I.a.input,id:a,value:e,onChange:n})]})},N=n(10),S=n.n(N),k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){var n=t.state.contacts;console.log(e),n.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getProperContact=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:S.a.container,children:[Object(f.jsxs)("div",{className:S.a.forms,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.formSubmitHandler})]}),Object(f.jsxs)("div",{className:S.a.contacts,children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(y,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(g,{contacts:this.getProperContact(),onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactsList_list__3IXee",item:"ContactsList_item__g89-5",deleteBtn:"ContactsList_deleteBtn__1IktQ"}}},[[30,1,2]]]);
//# sourceMappingURL=main.7394907d.chunk.js.map