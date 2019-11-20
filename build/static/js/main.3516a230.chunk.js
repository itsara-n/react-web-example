(this["webpackJsonpreact-ecommerce"]=this["webpackJsonpreact-ecommerce"]||[]).push([[0],{34:function(e,t,n){e.exports=n(50)},44:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),l=n(8),s=n(18),i=n(11),u=(n(44),n(20)),m=n(21),d=n(32),p=n(23),h=n(31),E=n(56),g=n(54),w=n(52),f=n(25),L=n(57),v=n(55),k=n(53),y=n(9),P=n.n(y),b=n(16),S=function(e){return fetch("https://cors-anywhere.herokuapp.com/https://nodejs-api-example.herokuapp.com/login",{credentials:"same-origin",method:"POST",body:e,headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.text().then((function(e){return"Wrong username and password"===e?{error:e}:{token:e}}))}))},C=function(){return fetch("https://cors-anywhere.herokuapp.com/https://nodejs-api-example.herokuapp.com/products",{credentials:"same-origin",method:"GET",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json().then((function(e){return e}))}))},O=(n(46),n(47),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).onShowLoginForm=function(){n.setState((function(e){return{showLoginForm:!e.showLoginForm,username:"",password:""}}))},n.onSubmitLogin=function(){var e=n.state,t=e.username,r=e.password;n.props.adminLogin(t,r),n.setState({username:"",password:""})},n.onLogout=function(){n.setState({showLoginForm:!1,username:"",password:"",showNewProductForm:!1}),n.props.adminLogout()},n.onChangeUsername=function(e){n.setState({username:e.target.value})},n.onChangePassword=function(e){n.setState({password:e.target.value})},n.onShowNewProduct=function(){n.setState((function(e){return{showNewProductForm:!e.showNewProductForm}}))},n.renderNewProduct=function(){return a.a.createElement("div",{className:"NewProductForm"},a.a.createElement(E.a,null,a.a.createElement(E.a.Header,null,"Administrator Login"),a.a.createElement(g.a,null,a.a.createElement(g.a.Group,{as:w.a,controlId:"formPlaintextEmail"},a.a.createElement(g.a.Label,{column:!0,sm:"3"},"Name"),a.a.createElement(f.a,{sm:"9"},a.a.createElement(g.a.Control,{type:"text",placeholder:""}))),a.a.createElement(g.a.Group,{as:w.a,controlId:"formPlaintextPassword"},a.a.createElement(g.a.Label,{column:!0,sm:"3"},"Description"),a.a.createElement(f.a,{sm:"9"},a.a.createElement(g.a.Control,{as:"textarea",rows:"3"}))),a.a.createElement(g.a.Group,{as:w.a,controlId:"formPlaintextEmail"},a.a.createElement(g.a.Label,{column:!0,sm:"3"},"Price"),a.a.createElement(f.a,{sm:"9"},a.a.createElement(g.a.Control,{type:"text",placeholder:""}))),a.a.createElement(g.a.Group,{as:w.a,controlId:"formPlaintextEmail"},a.a.createElement(g.a.Label,{column:!0,sm:"3"},"Image url"),a.a.createElement(f.a,{sm:"9"},a.a.createElement(g.a.Control,{type:"text",placeholder:""}))),a.a.createElement(g.a.Group,{as:w.a,controlId:"formPlaintextEmail"},a.a.createElement(g.a.Label,{column:!0,sm:"3"},"Status"),a.a.createElement(f.a,{sm:"9"},a.a.createElement(g.a.Check,{type:"checkbox",label:"Available"}))),a.a.createElement(L.a,{variant:"success",onClick:function(){},style:{margin:20}},"Save"),a.a.createElement(L.a,{variant:"primary",onClick:n.onShowNewProduct,style:{margin:20}},"Cancel"))))},n.renderLogin=function(){return a.a.createElement("div",{className:"LoginForm"},a.a.createElement(E.a,null,a.a.createElement(E.a.Header,null,"Administrator Login"),a.a.createElement(v.a,{variant:"flush",style:{padding:10}},a.a.createElement(g.a,null,a.a.createElement(g.a.Group,{controlId:"formBasicUsername"},a.a.createElement(g.a.Control,{placeholder:"Username",value:n.state.username,onChange:n.onChangeUsername})),a.a.createElement(g.a.Group,{controlId:"formBasicPassword"},a.a.createElement(g.a.Control,{type:"password",placeholder:"Password",value:n.state.password,onChange:n.onChangePassword})),n.props.error&&a.a.createElement("p",{id:"errorMessage"},n.props.error),a.a.createElement(L.a,{variant:"success",onClick:n.onSubmitLogin,style:{margin:20}},"Login"),a.a.createElement(L.a,{variant:"primary",onClick:n.onShowLoginForm,style:{margin:20}},"Close")))))},n.renderProductsList=function(){return a.a.createElement("div",null,a.a.createElement(k.a,{responsive:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"#"),a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Available"),n.props.token&&a.a.createElement("th",null,"Edit"),n.props.token&&a.a.createElement("th",null,"Delete"))),a.a.createElement("tbody",null,n.props.productsList.map((function(e,t){return a.a.createElement("tr",null,a.a.createElement("td",null,t+1),a.a.createElement("td",null,e.name),a.a.createElement("td",null,"Table cell"),a.a.createElement("td",null,"Table cell"),n.props.token&&a.a.createElement("td",null,"Table cell"),n.props.token&&a.a.createElement("td",null,"Table cell"))})))))},n.renderAdminButton=function(){var e,t;return n.state.showLoginForm||n.state.showNewProductForm||(e=null===n.props.token?a.a.createElement(L.a,{id:"loginBtn",variant:"primary",onClick:n.onShowLoginForm},"Admin Login"):a.a.createElement(L.a,{id:"loginBtn",variant:"danger",onClick:n.onLogout},"Logout")),n.state.showNewProductForm||null===n.props.token||(t=a.a.createElement(L.a,{id:"createBtn",variant:"success",onClick:n.onShowNewProduct},"New Product")),a.a.createElement("div",null,t,e)},n.renderLoading=function(){return a.a.createElement("div",{className:"Loading"},a.a.createElement("h2",null,"Loading..."))},n.state={showLoginForm:!1,username:"",password:"",showNewProductForm:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getProductsList()}},{key:"componentDidUpdate",value:function(e,t){null!==this.props.token&&this.props.token!==e.token&&this.setState({showLoginForm:!1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App",scroll:"no"},a.a.createElement("div",{className:"Header"},a.a.createElement("h1",null,"Simple eCommerce")),a.a.createElement("div",{className:"Content"},this.renderAdminButton(),this.state.showLoginForm&&this.renderLogin(),this.state.showNewProductForm&&this.renderNewProduct(),!this.state.showLoginForm&&!this.state.showNewProductForm&&this.renderProductsList()),this.props.loading&&this.renderLoading())}}]),t}(r.Component)),N={adminLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(b.a)(P.a.mark((function n(r){var a,o,c,l;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"LOGIN_REQUEST"}),a=JSON.stringify({username:e,password:t}),n.next=4,S(a);case 4:o=n.sent,c=o.error?o.error:"",l=o.token?o.token:"",r(""!==l?{type:"LOGIN_SUCCESS",token:l}:{type:"LOGIN_FAILURE",error:c});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},adminLogout:function(){return function(e){e({type:"LOGIN_CLEAR"})}},getProductsList:function(){return function(){var e=Object(b.a)(P.a.mark((function e(t,n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_PRODUCTS_REQUEST"}),e.next=3,C();case 3:r=e.sent,t({type:"GET_PRODUCTS_SUCCESS",list:r});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},j=Object(i.b)((function(e,t){return{loading:e.loading,productsList:e.products,error:e.error,token:e.token}}),N)(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(29);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(F.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={loading:!1,products:[],error:null,token:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_REQUEST":return T({},e,{loading:!0,error:I.error,token:I.token});case"LOGIN_SUCCESS":return T({},e,{loading:!1,token:t.token,error:I.error});case"LOGIN_FAILURE":return T({},e,{loading:!1,token:I.token,error:t.error});case"LOGIN_CLEAR":return T({},e,{loading:I.loading,token:I.token,error:t.error});case"GET_PRODUCTS_REQUEST":return T({},e,{loadin:!0});case"GET_PRODUCTS_SUCCESS":return T({},e,{loading:!1,products:t.list});default:return e}},x=Object(l.c)(U,Object(l.a)(s.a)),_=a.a.createElement(i.a,{store:x},a.a.createElement(j,null));c.a.render(_,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.3516a230.chunk.js.map