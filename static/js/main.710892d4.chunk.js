(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{31:function(e,a,t){e.exports=t(46)},36:function(e,a,t){},37:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),m=(t(36),t(1)),o=t(2),i=(t(37),t(8)),s=t(3),u=t(12),d=(t(25),u.initializeApp({apiKey:"AIzaSyDLgD__tGJTwnG8XMr_22x8xYILpc2j1l0",authDomain:"arlequin-my-app.firebaseapp.com",databaseURL:"https://arlequin-my-app.firebaseio.com",projectId:"arlequin-my-app",storageBucket:"arlequin-my-app.appspot.com",messagingSenderId:"933168345307",appId:"1:933168345307:web:d0cce8ae39e4c6f4fd9cfe"}));function p(){return u.firestore(d)}var E=function(){return r.a.createElement("footer",{className:"footer text-center bg-dark pt-2"},r.a.createElement("small",{className:"text-center"},"\xa9 2020 Arlequin. Desarrollado en Buenos Aires, Argentina por Carmen Mindeguia"))};var b=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),u=o[0],d=o[1];return Object(n.useEffect)((function(){p().collection("productos").where("price",">",2e3).limit(6).get().then((function(e){0===e.size&&console.log("No existen items de mas de 2000 pesos"),l(e.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id})})))})).catch((function(e){console.log("Error buscando productos",e)})).finally((function(){d(!1)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"})),u&&r.a.createElement("p",{className:"text-center my-5"},"Cargando nuestros productos mas vendidos..."),!u&&r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"row"},t.map((function(e){return r.a.createElement("li",{id:e.id,className:"col-md-2 text-center mt-4",key:e.id},r.a.createElement(m.b,{to:"/detalle/".concat(e.id),className:"dark"},e.name),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/detalle/".concat(e.id)},r.a.createElement("img",{className:"img-fluid imgs mt-3 mb-1",src:"/Arlequin"+e.img,alt:"product"}),r.a.createElement("br",null)),r.a.createElement(m.b,{to:"/detalle/".concat(e.id),className:"btn btn-outline-danger mt-3 mb-1"},r.a.createElement("strong",null,"Ver detalle")))})))),r.a.createElement(E,null))},g=function(){return r.a.createElement(m.b,{to:"/",className:"navbar-brand"},r.a.createElement("div",{className:"divLogo"}))},f=t(30),v=r.a.createContext([]),N=function(){return Object(n.useContext)(v)};function h(e){var a=e.value,t=e.initial,l=e.min,c=e.max,m=e.children,o=Object(n.useState)(a||[]),i=Object(s.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(t),E=Object(s.a)(p,2),b=E[0],g=E[1];return r.a.createElement(v.Provider,{value:{list:u,add:function(){b<c&&g(b+1)},subtract:function(){b>l&&g(b-1)},count:b,onCountChange:function(e){g(e.target.value)},addItem:function(e){var a=[].concat(Object(f.a)(u),[e]);d(a),g(t)},quantity:function(e){var a=0;return e.map((function(e){return a+=e.count})),a}(u),clean:function(){d([])},total:function(e){var a=0;return e.map((function(e){return a+=e.price*e.count})),a}(u)}},m)}var y=function(){var e=N().quantity;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item iconCart"},r.a.createElement(m.b,{to:"/cart",className:"nav-link"},r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}),r.a.createElement("span",{className:"badge badge-dark badge-pill"},e))))},j=function(){return r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Nuestros Dise\xf1os"),r.a.createElement("div",{className:"dropdown-menu py-0","aria-labelledby":"navbarDropdown"},r.a.createElement(m.b,{to:"/category/m\xe1scaras",className:"dropdown-item"},"M\xe1scaras"),r.a.createElement(m.b,{to:"/category/disfraces",className:"dropdown-item"},"Disfraces"))),r.a.createElement(y,null))},x=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},r.a.createElement(g,null),r.a.createElement("h1",{className:"mr-5 mb-0 title d-md-block d-sm-none",style:{fontSize:"16px"}},"Tienda de disfraces"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement(j,null)))};var O=function(e){var a=e.onAdd,t=N(),n=t.add,l=t.subtract,c=t.count,o=t.onCountChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card bg-dark"},r.a.createElement("div",{className:"card-body bg-dark"},r.a.createElement("p",{className:"dark pl-3"},"Cantidad"),r.a.createElement("h3",{className:"text-center dark",value:c,onChange:o},c),r.a.createElement("button",{id:"restar",className:"ml-2 mr-2",onClick:l},"-"),"\xa0",r.a.createElement("button",{id:"sumar",onClick:n},"+"),r.a.createElement("br",null))),r.a.createElement("div",null,r.a.createElement(m.b,{to:"/cart",className:"btn btn-outline-danger mt-3 mb-2",onClick:a},r.a.createElement("strong",null,"Comprar ",c)),r.a.createElement("br",null),r.a.createElement(m.b,{className:"btn btn-outline-danger m-3",to:"/"},r.a.createElement("strong",null,"Volver a Home"))))};var k=function(e){var a=e.id,t=e.img,n=e.name,l=e.description,c=e.price,m=N(),o=m.addItem,i=m.count;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container product mt-5 pt-5"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",null,r.a.createElement("li",{key:a},r.a.createElement("p",{className:"p-0",key:a},r.a.createElement("strong",null,n),r.a.createElement("br",null),r.a.createElement("span",null,l),r.a.createElement("br",null),r.a.createElement("span",null,"Valor= $ ",c)),r.a.createElement("img",{className:"img-fluid img_1 mb-1",src:t,alt:"product"}),r.a.createElement("br",null)))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(O,{onAdd:function(){return o({id:a,name:n,price:c,count:i})}})))))};var C=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),u=Object(s.a)(c,2),d=u[0],E=u[1],b=Object(n.useState)(!1),g=Object(s.a)(b,2),f=g[0],v=g[1],N=Object(o.f)().id,h=void 0===N?void 0:N;return Object(n.useEffect)((function(){p().collection("productos").doc(h).get().then((function(e){e.exists?l(Object(i.a)({id:e.id},e.data())):v(!0)})).catch((function(e){console.log("Error buscando producto",e)})).finally((function(){E(!1)}))}),[h]),r.a.createElement(r.a.Fragment,null,"  ",d&&r.a.createElement("p",null,"Cargando detalle..."),f&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-5 text-center mt-5"},r.a.createElement("h4",{className:"mt-5"},"El producto no existe en nuestra Tienda de E-commerce."),r.a.createElement(m.b,{className:"btn btn-outline-danger m-3",to:"/"},r.a.createElement("strong",null,"Volver a Home")))),!d&&!f&&r.a.createElement(k,{key:t.id,id:t.id,category:t.category,name:t.name,img:"/Arlequin"+t.img,description:t.description,price:t.price}))};var w=function(){var e=Object(o.f)().id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{id:e}))};var S=function(e){var a=e.products,t=a.map((function(e){return e.category})).find((function(e){return e.length>5}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"p-3 danger mt-5 text-center dangerTitle"},t),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"row"},a.map((function(e){return r.a.createElement("li",{id:e.id,className:"col-md-4",key:e.id},r.a.createElement(m.b,{to:"/detalle/".concat(e.id),className:"dark"},e.name),r.a.createElement(m.b,{to:"/detalle/".concat(e.id)},r.a.createElement("img",{className:"img-fluid imgs mt-3 mb-1",src:"/Arlequin"+e.img,alt:"product"}),r.a.createElement("br",null)),r.a.createElement(m.b,{to:"/detalle/".concat(e.id),className:"btn btn-outline-danger mt-4 mb-5"},r.a.createElement("strong",null,"Ver detalle")))})))))};var F=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),m=Object(s.a)(c,2),u=m[0],d=m[1],b=Object(o.f)().categoryId,g=void 0===b?void 0:b;return Object(n.useEffect)((function(){p().collection("productos").where("category","==",g).get().then((function(e){0===e.size&&console.log("Error, no hay resultados"),l(e.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id})})))})).catch((function(e){console.log("No existen productos con esta categoria",e)})).finally((function(){d(!1)}))}),[g]),r.a.createElement(r.a.Fragment,null,u&&r.a.createElement("p",null,"Cargando productos..."),r.a.createElement(S,{products:t}),r.a.createElement(E,null))};var I=function(){var e=Object(o.f)().categoryId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{category:e}))};function q(){var e=N(),a=e.quantity,t=e.list,n=e.total,l=e.clean;return 0===a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{height:500}},r.a.createElement("div",{className:"py-5 text-center mt-5"},r.a.createElement("h2",null,"Tu carrito de compras ",r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})," est\xe1 vac\xedo."),r.a.createElement(m.b,{className:"btn btn-outline-danger m-3",to:"/"},"Volver a Home")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container product mt-5 pt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",null,"Su compra"),r.a.createElement("ul",{className:"card-md-8 mb-3"},t.map((function(e){return r.a.createElement("li",{className:"p-0",key:e.id},r.a.createElement("strong",{className:"d-sm-block"},e.name),r.a.createElement("span",{className:"ml-3"},"Valor por unidad = $ ",e.price),r.a.createElement("strong",{className:"text-dark m-3"},"Cantidad: ",e.count),r.a.createElement("span",{className:"text-danger"},"Subtotal: $ ",e.price*e.count))}))),r.a.createElement("p",{className:"text-danger text-right mr-5 pr-5"},r.a.createElement("strong",null,"Total: $ ",n))),r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement(m.b,{to:"/form",className:"btn btn-outline-danger m-3",style:{minWidth:180}},r.a.createElement("strong",null,"Confirmar compra")),r.a.createElement(m.b,{to:"/category/m\xe1scaras",className:"btn btn-dark m-3",style:{minWidth:180}},"Ver + M\xe1scaras")),r.a.createElement("div",{className:"col-md-6 text-center"},r.a.createElement("button",{className:"btn btn-outline-danger m-3",style:{minWidth:180},onClick:l},r.a.createElement("strong",null,"Eliminar pedido")),r.a.createElement(m.b,{to:"/category/disfraces",className:"btn btn-dark m-3",style:{minWidth:180}},"Ver + Disfraces")))))}var A=t(20),T=t.n(A),D=t(29);function L(e){var a=e.name,t=e.inputLabel,n=e.nameField,l=e.style,c=e.type,m=e.id,o=e.placeholder,i=e.valueInput,s=e.onChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",{htmlFor:t,name:a,className:"form-label",style:l},n),r.a.createElement("input",{type:c,value:i,className:"form-control",id:m,placeholder:o,required:!0,onChange:s})))}var V=function(){var e=N(),a=e.quantity,t=e.list,l=e.clean,c=e.total,o=Object(n.useState)(""),i=Object(s.a)(o,2),d=i[0],E=i[1],b=Object(n.useState)(""),g=Object(s.a)(b,2),f=g[0],v=g[1],h=Object(n.useState)(""),y=Object(s.a)(h,2),j=y[0],x=y[1],O=Object(n.useState)(""),k=Object(s.a)(O,2),C=k[0],w=k[1],S=Object(n.useState)(null),F=Object(s.a)(S,2),I=F[0],q=F[1],A=Object(n.useState)(!1),V=Object(s.a)(A,2),z=V[0],W=V[1];function B(){return(B=Object(D.a)(T.a.mark((function e(){var n,r,m,o,i,s,E;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),n={name:d,phone:f,email:j},r=t.map((function(e){return{id:e.id,name:e.name,quantity:a,subtotal:e.price*e.count}})),m=p(),o=m.collection("ordenes"),i={object:n,items:r,date:u.firestore.Timestamp.fromDate(new Date),total:c},e.prev=6,e.next=9,o.add(i);case 9:s=e.sent,E=s.id,q(E),l(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.log("Ha ocurrido un error creando la orden de compra");case 18:case"end":return e.stop()}}),e,null,[[6,15]])})))).apply(this,arguments)}return I?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-5 text-center mt-5"},r.a.createElement("h2",{className:"mt-5"},"\xa1Gracias por elegirnos!"),r.a.createElement("h4",{className:"my-5"},"La compra se ha realizado exitosamente."),r.a.createElement("strong",null,"El ID de tu compra es ",I),r.a.createElement("p",{className:"danger"},"Obtenga un descuento de 15% en su pr\xf3xima compra con este id"),r.a.createElement(m.b,{className:"btn btn-outline-danger m-3",to:"/"},r.a.createElement("strong",null,"Volver a Home"))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center py-5 mt-5"},r.a.createElement("h4",{className:"mt-5"},"Completa el formulario con tus datos para confirmar la compra.")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",null,r.a.createElement("div",{className:"row g-3"},r.a.createElement(L,{inputLabel:"inputName",name:"name",nameField:"Nombre y Apellido",valueInput:d,style:{paddingTop:"5px"},type:"text",id:"inputName",placeholder:"Nombre y Apellido",onChange:function(e){E(e.target.value)}}),r.a.createElement(L,{inputLabel:"inputPhone",name:"phone",nameField:"Tel\xe9fono",valueInput:f,style:{paddingTop:"10px"},type:"number",id:"inputPhone",placeholder:"1133768450",onChange:function(e){v(e.target.value)}}),r.a.createElement(L,{inputLabel:"inputEmail",name:"email",nameField:"Email",valueInput:j,style:{paddingTop:"10px"},type:"email",id:"inputEmail",placeholder:"mail@ejemplo.com",onChange:function(e){x(e.target.value)}}),r.a.createElement(L,{inputLabel:"inputConfirmEmail",name:"email",nameField:"Confirmar Email",valueInput:C,style:{paddingTop:"10px"},type:"email",id:"inputConfirmEmail",placeholder:"mail@ejemplo.com",onChange:function(e){w(e.target.value)}})),r.a.createElement("button",{className:"btn btn-outline-danger btn-lg btn-block mt-5",type:"submit",disabled:!d||!f||!j||C!==j||z,onClick:function(){return B.apply(this,arguments)},style:{marginBottom:"30px"}},r.a.createElement("strong",null,"Confirmar")))))))};var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{value:[],initial:1,min:1,max:12},r.a.createElement(m.a,null,r.a.createElement(x,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:b}),r.a.createElement(o.a,{exact:!0,path:"/Arlequin",component:b}),r.a.createElement(o.a,{path:"/form",component:V}),r.a.createElement(o.a,{path:"/category/:categoryId",component:I}),r.a.createElement(o.a,{path:"/detalle/:id",component:w}),r.a.createElement(o.a,{path:"/cart",component:q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.710892d4.chunk.js.map