(this.webpackJsonprobodex=this.webpackJsonprobodex||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(3),l=(n(26),function(e){var t=e.email,n=e.name;return r.a.createElement("div",{className:"tc bg-light-blue ma2 dib br3 grow shadow-5 w-80 w-30-ns pa2 w-80-m"},r.a.createElement("img",{className:"br-100 pa1 ba b--black-10 h4 w4",src:"https://robohash.org/".concat(t,"?bgset=any"),alt:"".concat(n)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))}),i=function(e){var t=e.users;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(l,{key:e.id,email:e.email,name:e.name})})))},u="CHANGE_SEARCH_FIELD",h=Object(s.b)(null,(function(e){return{setText:function(t){return e((n=t.target.value,{type:u,payload:n}));var n}}}))((function(e){var t=e.setText;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 ba b--light-blue bg-lightest-blue br2 mb3",type:"search",placeholder:"Search Robodex",onChange:t}))})),m=function(e){var t=e.children;return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"75vh"}},t)},d=n(11),b=n(12),p=n(15),f=n(14),g=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops! Something went wrong!"):this.props.children}}]),n}(a.Component),E="GET_ROBOTS_PENDING",v="GET_ROBOTS_SUCCESS",y="GET_ROBOTS_FAILED",O=(n(27),Object(s.b)((function(e){return{text:e.search.text,users:e.getRobots.users,isPending:e.getRobots.isPending,error:e.getRobots.error}}),(function(e){return{getRobotUsers:function(){return e((function(e){return e({type:E}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:v,payload:t})})).catch((function(t){return e({type:y,payload:t})}))}))}}}))((function(e){var t=e.text,n=e.users,o=e.isPending,c=e.getRobotUsers;Object(a.useEffect)((function(){c()}),[c]);var s=t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n;return o?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Loading Robots...")):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robodex"),r.a.createElement(h,null),r.a.createElement(m,null,r.a.createElement(g,null,r.a.createElement(i,{users:s}))),r.a.createElement("h4",{className:"f5"},"\xa9 2020 heplayskeys"))})));n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(2),j=(n(29),n(13)),x=n(1),R={text:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(x.a)(Object(x.a)({},e),{},{text:t.payload});default:return e}},k={users:[],error:"",isPending:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(x.a)(Object(x.a)({},e),{},{isPending:!0});case v:return Object(x.a)(Object(x.a)({},e),{},{users:t.payload,isPending:!1});case y:return Object(x.a)(Object(x.a)({},e),{},{error:t.payload,isPending:!1});default:return e}},C=Object(w.c)({search:N,getRobots:S}),P=[j.a];var T=Object(w.d)(C,w.a.apply(void 0,P));c.a.render(r.a.createElement(s.a,{store:T},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0253e1e6.chunk.js.map