(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{25:function(e,t,r){e.exports=r(39)},30:function(e,t,r){},31:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(7),i=r.n(l),o=(r(30),r(31),r(1)),s=r(16),c=r(17),u=r(23),p=r(18),d=r(24),m=Object(o.a)("div",{target:"e1b6osy0"})((function(e){return{position:"relative",overflow:"hidden",height:e.showingRequirements?"179px":"0",transition:"height 0.5s ease"}}),""),b=Object(o.a)("div",{target:"e1b6osy1"})({position:"absolute",top:"10px",left:"0",height:"calc(".concat("179px"," - 20px)"),width:"100%",border:"1px solid #A9E5BB",borderRadius:"10px"},""),f=Object(o.a)("div",{target:"e1b6osy2"})({name:"xflcn1",styles:"height:100%;padding:11px 15px;"}),g=Object(o.a)("label",{target:"e1b6osy3"})({name:"r7q7qr",styles:"margin-bottom:5px;"}),h=Object(o.a)("ul",{target:"e1b6osy4"})({name:"1uk1gs8",styles:"margin:0;"}),y=Object(o.a)("li",{target:"e1b6osy5"})((function(e){return{position:"relative",listStyleType:"none",paddingLeft:"20px",lineHeight:"1.3em","&::after":{content:'""',position:"absolute",top:"50%",left:"0%",transform:"translateY(-50%)",height:"10px",width:"10px",borderRadius:"50%",backgroundColor:e.success?"#A9E5BB":"red"}}}),""),E=Object(o.a)("span",{target:"e1b6osy6"})({name:"1oc0d0",styles:"font-size:14px;letter-spacing:0.5px;"}),O=function(e){var t=e.state,r=t.showingRequirements,n=t.password,l={};l.minCharacter=n.length>=8,l.upperCase=/^(?=.*[A-Z]).+$/.test(n),l.lowerCase=/^(?=.*[a-z]).+$/.test(n),l.special=/[-#?!@$%^&*-]/.test(n),l.number=n.match(/\d+/g)&&n.match(/\d+/g).length>0;var i=l.minCharacter,o=l.upperCase,s=l.lowerCase,c=l.special,u=l.number;return a.a.createElement(m,{showingRequirements:r},a.a.createElement(b,null,a.a.createElement(f,null,a.a.createElement(g,null,"The following must contain the following:"),a.a.createElement(h,null,a.a.createElement(y,{success:i},a.a.createElement(E,null,"atleast 8 characters")),a.a.createElement(y,{success:o},a.a.createElement(E,null,"atleast 1 uppercase")),a.a.createElement(y,{success:s},a.a.createElement(E,null,"atleast 1 lowercase")),a.a.createElement(y,{success:u},a.a.createElement(E,null,"atleast 1 number")),a.a.createElement(y,{success:c},a.a.createElement(E,null,"atleast 1 special character"))))))},w=Object(o.a)("div",{target:"e1jnhfdy0"})({name:"12jhpwb",styles:"display:inline-block;vertical-align:top;margin-top:15px;padding:15px;"}),v=Object(o.a)("div",{target:"e1jnhfdy1"})({name:"19dyein",styles:"position:relative;display:inline-block;width:100%;border:2px solid #A9E5BB;border-radius:10px;padding:15px 20px;background-color:white;box-shadow:0 0 13px #9ffffc;"}),j=Object(o.a)("h1",{target:"e1jnhfdy2"})({name:"1uk1gs8",styles:"margin:0;"}),x=Object(o.a)("div",{target:"e1jnhfdy3"})({name:"16b2ug3",styles:"margin:15px 0;"}),S=function(e){return a.a.createElement(w,{className:"col-md-6"},a.a.createElement(v,null,a.a.createElement(j,null,e.label),a.a.createElement(x,null,e.children)))},N=r(5),k="ADD_ENTRY",I="ADD_ENTRY_MIDDLE",C="FAILED_ENTRY",R="INIT_ENTRIES",F="REMOVE_ENTRY",D="REMOVE_ALL_ENTRIES";var P=r(20),z=r.n(P),A=r(4);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var T=Object(o.a)("button",{target:"exqtdar0"})((function(e){var t,r,n,a,l,i=e.color,o=e.size;return"green"===i?(t="white",r="#1cc950",n="#15933B"):"orange"===i?(t="white",r="#F18F01",n="#B06901"):"red"===i&&(t="white",r="#C1292E",n="#8D1E22"),"lg"===o?(a="10px 20px",l="16px"):"sm"===o&&(a="5px 15px",l="13px"),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach((function(t){Object(A.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{borderWidth:"1px",borderStyle:"solid",borderRadius:"10px",letterSpacing:"0.5px",fontWeight:"600",padding:a,fontSize:l,color:t,borderColor:r,backgroundColor:r,"&:hover":{backgroundColor:n,borderColor:n}},{},e.addedStyles)}),""),q=function(e){var t=e.type,r=e.color,n=e.size,l=e.children,i=e.addedStyles,o=e.handleClick,s=void 0===o?null:o;return a.a.createElement(T,{type:t,color:r,size:n,addedStyles:i,onClick:s},l)},_={display:"inline-block"},L=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={showingRequirements:!1,password:""},r.firstNameInput=a.a.createRef(),r.lastNameInput=a.a.createRef(),r.emailInput=a.a.createRef(),r.passwordInput=a.a.createRef(),r.FormWrapper=Object(o.a)("form",{target:"e10sy1xu0"})({name:"1b1zfbw",styles:"display:flex;flex-wrap:wrap;justify-content:space-between;"}),r.Label=Object(o.a)("label",{target:"e10sy1xu1"})("margin:0;font-weight:600;letter-spacing:0.5px;",_,""),r.Input=Object(o.a)("input",{target:"e10sy1xu2"})("display:block;background-color:#e1fffe;border:1px solid #A9E5BB;border-radius:5px;padding:10px;width:100%;",(function(e){return e.error&&{borderColor:"red","&:focus":{outlineColor:"red"}}}),""),r.Field=Object(o.a)("div",{target:"e10sy1xu3"})((function(e){return{display:"inline-block",verticalAlign:"top",marginTop:e.TopChild?"0":"20px",flexBasis:e.Half?"calc(50% - 10px)":"100%"}}),""),r.submitButton={marginTop:"30px"},r.ShowRequirements=Object(o.a)("p",{target:"e10sy1xu4"})("margin:0;float:right;font-size:12px;font-weight:600;letter-spacing:0.5px;margin-top:6px;cursor:pointer;text-decoration:underline;user-select:none;",_,""),r.handleSubmit=function(e){e.preventDefault();var t=r.firstNameInput.current.value,n=r.lastNameInput.current.value,a=r.emailInput.current.value,l=r.passwordInput.current.value,i=z()();r.props.addEntry({id:i,firstName:t,lastName:n,email:a,password:l})},r.handleShowRequirement=function(){var e=r.state.showingRequirements;e=!e,r.setState({showingRequirements:e})},r.passwordOnChange=function(){r.setState({password:r.passwordInput.current.value})},r}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.firstNameInput.current.focus();var e=localStorage.getItem("entries");(e=JSON.parse(e))&&0!==e.length&&this.props.initEntries(e.entries)}},{key:"render",value:function(){var e=this.state,t=this.FormWrapper,r=this.Label,n=this.Input,l=this.Field,i=this.ShowRequirements,o=this.passwordOnChange,s=this.state.showingRequirements,c=this.props.errorFields;return void 0===c.failedForm||c.failedForm||(this.firstNameInput.current.value="",this.lastNameInput.current.value="",this.emailInput.current.value="",this.passwordInput.current.value="",this.firstNameInput.current.focus(),c.failedForm=void 0),a.a.createElement(S,{label:"Form Section"},a.a.createElement(t,{onSubmit:this.handleSubmit},a.a.createElement(l,{TopChild:!0,Half:!0},a.a.createElement(r,null,"First Name"),a.a.createElement(n,{type:"text",ref:this.firstNameInput,error:c.firstName})),a.a.createElement(l,{TopChild:!0,Half:!0},a.a.createElement(r,null,"Last Name"),a.a.createElement(n,{type:"text",ref:this.lastNameInput,error:c.lastName})),a.a.createElement(l,null,a.a.createElement(r,null,"Email Adress"),a.a.createElement(n,{type:"email",ref:this.emailInput,error:c.email})),a.a.createElement(l,null,a.a.createElement(r,null,"Password"),a.a.createElement(i,{onClick:this.handleShowRequirement},s?"Hide Requirements":"Show Requirements"),a.a.createElement(O,{state:e}),a.a.createElement(n,{type:"password",ref:this.passwordInput,error:c.password,onChange:o})),a.a.createElement(q,{type:"submit",color:"green",size:"lg",addedStyles:this.submitButton},"Submit")))}}]),t}(a.a.Component),W=Object(N.b)((function(e){return{errorFields:e.errorFields}}),(function(e){return{addEntry:function(t){return e({type:I,payload:t})},initEntries:function(t){return e({type:R,payload:t})}}}))(L);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var J=Object(o.a)("button",{target:"e10xdn3p0"})((function(e){var t,r,n,a,l,i,o=e.color,s=e.size,c=e.addedStyles;return"green"===o?(t="white",r="#1cc950",n="#15933B"):"orange"===o?(t="white",r="#F18F01",n="#B06901"):"red"===o&&(t="white",r="#C1292E",n="#8D1E22"),"lg"===s?(a="10px",l="8px"):"sm"===s&&(a="5px",l="4px"),"minus"===e.icon&&(i='url("/images/minus.svg")'),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach((function(t){Object(A.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{borderStyle:"solid",borderRadius:"50%",backgroundSize:"contain",backgroundRepeat:"no-repeat",padding:a,borderWidth:l,color:t,borderColor:r,backgroundColor:r,"&:hover":{backgroundColor:n,borderColor:n},backgroundImage:i},{},c)}),""),H=function(e){var t=e.type,r=e.color,n=e.size,l=e.addedStyles,i=e.handleClick,o=void 0===i?null:i,s=e.icon;return a.a.createElement(J,{type:t,color:r,size:n,addedStyles:l,onClick:o,icon:s})},M={fontSize:"14px",display:"inline-block",verticalAlign:"top"},Y=Object(o.a)("hr",{target:"e5ubaft0"})({name:"0",styles:""}),Z=Object(o.a)("div",{target:"e5ubaft1"})({name:"0",styles:""}),U=Object(o.a)("label",{target:"e5ubaft2"})("font-weight:600;width:85px;margin:0;",M,""),V=Object(o.a)("span",{target:"e5ubaft3"})("display:inline-block;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 85px);overflow:hidden;",M,""),X={position:"absolute",top:"23px",right:"20px"},G={position:"absolute",top:"0",right:"0"},K=Object(o.a)("p",{target:"e5ubaft4"})({name:"sxybbl",styles:"color:#818181;"}),Q=Object(o.a)("div",{target:"e5ubaft5"})({name:"79elbk",styles:"position:relative;"}),ee=Object(N.b)((function(e){return{entries:e.entries}}),(function(e){return{removeEntry:function(t){return e({type:F,payload:t})},removeAllEntries:function(){return e({type:D})}}}))((function(e){var t=e.entries,r=e.removeAllEntries,n=e.removeEntry;return a.a.createElement(S,{className:"col-6-md",label:"Display Section"},t&&0!==t.length?a.a.createElement(q,{type:"button",color:"orange",size:"sm",addedStyles:X,handleClick:function(){!function(e){e()}(r)}},"Remove All!"):a.a.createElement(K,null,"There are no current entries.",a.a.createElement("br",null),"Fill out and submit the form."),t.map((function(e,t){var r=e.id,l=e.firstName,i=e.lastName,o=e.email,s=e.password;return a.a.createElement(Q,{key:r},t>0&&a.a.createElement(Y,null),a.a.createElement(H,{type:"button",color:"red",size:"sm",icon:"minus",addedStyles:G,handleClick:function(){!function(e,t){e(t)}(n,r)}}),a.a.createElement(Z,null,a.a.createElement(U,null,"UUID:"),a.a.createElement(V,null,r)),a.a.createElement(Z,null,a.a.createElement(U,null,"First Name:"),a.a.createElement(V,null,l)),a.a.createElement(Z,null,a.a.createElement(U,null,"Last Name:"),a.a.createElement(V,null,i)),a.a.createElement(Z,null,a.a.createElement(U,null,"Email:"),a.a.createElement(V,null,o)),a.a.createElement(Z,null,a.a.createElement(U,null,"Password:"),a.a.createElement(V,null,s)))})))})),te=r(6),re=r(21),ne=r(22);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(r,!0).forEach((function(t){Object(A.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie={entries:[],errorFields:{}};var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;if(r===k){var a=e.entries.concat(n.entries);return localStorage.setItem("entries",JSON.stringify({entries:a})),Object.assign({},e,{entries:a,errorFields:le({},e.errorFields,{},n.errorFields)})}if(r===C)return Object.assign({},e,{errorFields:le({},n.errorFields)});if(r===R)return Object.assign({},e,{entries:e.entries.concat(n)});if(r===F){for(var l,i=Object(ne.a)(e.entries),o=0;o<i.length;o++){if(n===i[o].id){l=o;break}}return i.splice(l,1),localStorage.setItem("entries",JSON.stringify({entries:i})),Object.assign({},e,{entries:i})}if(r===D){var s=[];return localStorage.setItem("entries",JSON.stringify(s)),Object.assign({},e,{entries:s})}return e},se={firstName:!0,lastName:!0,email:!0,password:!0,failedForm:!1};var ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.c,ue=Object(te.d)(oe,ce(Object(te.a)((function(e){var t=e.dispatch;return function(e){return function(r){if(r.type===I){var n=r.payload,a=n.firstName,l=n.lastName,i=n.email,o=n.password;return se.firstName=a.length<2,se.lastName=l.length<2,se.email=!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i),se.password=!(o.length>=8&&/^(?=.*[A-Z]).+$/.test(o)&&/^(?=.*[a-z]).+$/.test(o)&&/[-#?!@$%^&*-]/.test(o)&&o.match(/\d+/g)&&o.match(/\d+/g).length>0),se.failedForm=!1,Object.keys(se).map((function(e){se[e]&&(se.failedForm=!0)})),se.failedForm?t({type:C,payload:{entries:r.payload,errorFields:se}}):t({type:k,payload:{entries:r.payload,errorFields:se}})}return e(r)}}}),re.a))),pe=Object(o.a)("div",{target:"e1l0z2uz0"})({name:"z80jug",styles:"text-align:center;margin-top:30px;"}),de=Object(o.a)("p",{target:"e1l0z2uz1"})({name:"10v01ns",styles:"display:inline-block;margin:0;color:orange;&+p{text-decoration:underline;}"});var me=function(){return a.a.createElement(N.a,{store:ue},a.a.createElement("div",{className:"container"},a.a.createElement(pe,null,a.a.createElement(de,null,"Warning, your password will be displayed in the Display Section.\xa0"),a.a.createElement(de,null,"Do not use any personal Passwords.")),a.a.createElement(W,null),a.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.4bd5b17a.chunk.js.map