(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),i=a.n(l),s=(a(29),a(30),a(1)),o=a(15),c=a(16),u=a(22),p=a(17),m=a(23),d=Object(s.a)("div",{target:"e1b6osy0"})((function(e){return{position:"relative",overflow:"hidden",height:e.showingRequirements?"179px":"0",transition:"height 0.5s ease"}}),""),f=Object(s.a)("div",{target:"e1b6osy1"})({position:"absolute",top:"10px",left:"0",height:"calc(".concat("179px"," - 20px)"),width:"100%",border:"1px solid #A9E5BB",borderRadius:"10px"},""),b=Object(s.a)("div",{target:"e1b6osy2"})({name:"xflcn1",styles:"height:100%;padding:11px 15px;"}),g=Object(s.a)("label",{target:"e1b6osy3"})({name:"r7q7qr",styles:"margin-bottom:5px;"}),h=Object(s.a)("ul",{target:"e1b6osy4"})({name:"1uk1gs8",styles:"margin:0;"}),y=Object(s.a)("li",{target:"e1b6osy5"})((function(e){return{position:"relative",listStyleType:"none",paddingLeft:"20px",lineHeight:"1.3em","&::after":{content:'""',position:"absolute",top:"50%",left:"0%",transform:"translateY(-50%)",height:"10px",width:"10px",borderRadius:"50%",backgroundColor:e.success?"#A9E5BB":"red"}}}),""),E=Object(s.a)("span",{target:"e1b6osy6"})({name:"1oc0d0",styles:"font-size:14px;letter-spacing:0.5px;"}),w=function(e){var t=e.state,a=t.showingRequirements,r=t.password,l={};l.minCharacter=r.length>=8,l.upperCase=/^(?=.*[A-Z]).+$/.test(r),l.lowerCase=/^(?=.*[a-z]).+$/.test(r),l.special=/[-#?!@$%^&*-]/.test(r),l.number=r.match(/\d+/g)&&r.match(/\d+/g).length>0;var i=l.minCharacter,s=l.upperCase,o=l.lowerCase,c=l.special,u=l.number;return n.a.createElement(d,{showingRequirements:a},n.a.createElement(f,null,n.a.createElement(b,null,n.a.createElement(g,null,"The following must contain the following:"),n.a.createElement(h,null,n.a.createElement(y,{success:i},n.a.createElement(E,null,"atleast 8 characters")),n.a.createElement(y,{success:s},n.a.createElement(E,null,"atleast 1 uppercase")),n.a.createElement(y,{success:o},n.a.createElement(E,null,"atleast 1 lowercase")),n.a.createElement(y,{success:u},n.a.createElement(E,null,"atleast 1 number")),n.a.createElement(y,{success:c},n.a.createElement(E,null,"atleast 1 special character"))))))},v=Object(s.a)("div",{target:"e1jnhfdy0"})({name:"12jhpwb",styles:"display:inline-block;vertical-align:top;margin-top:15px;padding:15px;"}),x=Object(s.a)("div",{target:"e1jnhfdy1"})({name:"19dyein",styles:"position:relative;display:inline-block;width:100%;border:2px solid #A9E5BB;border-radius:10px;padding:15px 20px;background-color:white;box-shadow:0 0 13px #9ffffc;"}),O=Object(s.a)("h1",{target:"e1jnhfdy2"})({name:"1uk1gs8",styles:"margin:0;"}),j=Object(s.a)("div",{target:"e1jnhfdy3"})({name:"16b2ug3",styles:"margin:15px 0;"}),N=function(e){return n.a.createElement(v,{className:"col-md-6"},n.a.createElement(x,null,n.a.createElement(O,null,e.label),n.a.createElement(j,null,e.children)))},I=a(4),S="ADD_ENTRY",R="ADD_ENTRY_MIDDLE",k="FAILED_ENTRY",F="INIT_ENTRIES",A="REMOVE_ENTRY",C="REMOVE_ALL_ENTRIES";var D=a(19),T=a.n(D),q={display:"inline-block"},_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={showingRequirements:!1,password:""},a.firstNameInput=n.a.createRef(),a.lastNameInput=n.a.createRef(),a.emailInput=n.a.createRef(),a.passwordInput=n.a.createRef(),a.FormWrapper=Object(s.a)("form",{target:"e10sy1xu0"})({name:"1b1zfbw",styles:"display:flex;flex-wrap:wrap;justify-content:space-between;"}),a.Label=Object(s.a)("label",{target:"e10sy1xu1"})("margin:0;font-weight:600;letter-spacing:0.5px;",q,""),a.Input=Object(s.a)("input",{target:"e10sy1xu2"})("display:block;background-color:#e1fffe;border:1px solid #A9E5BB;border-radius:5px;padding:10px;width:100%;",(function(e){return e.error&&{borderColor:"red","&:focus":{outlineColor:"red"}}}),""),a.Field=Object(s.a)("div",{target:"e10sy1xu3"})((function(e){return{display:"inline-block",verticalAlign:"top",marginTop:e.TopChild?"0":"20px",flexBasis:e.Half?"calc(50% - 10px)":"100%"}}),""),a.Submit=Object(s.a)("button",{target:"e10sy1xu4"})({name:"ubd7xe",styles:"margin-top:30px;border:1px solid #1cc950;background-color:#1cc950;border-radius:10px;padding:10px 20px;color:white;letter-spacing:0.5px;font-weight:600;"}),a.ShowRequirements=Object(s.a)("p",{target:"e10sy1xu5"})("margin:0;float:right;font-size:12px;font-weight:600;letter-spacing:0.5px;margin-top:6px;cursor:pointer;text-decoration:underline;user-select:none;",q,""),a.handleSubmit=function(e){e.preventDefault();var t=a.firstNameInput.current.value,r=a.lastNameInput.current.value,n=a.emailInput.current.value,l=a.passwordInput.current.value,i=T()();a.props.addEntry({id:i,firstName:t,lastName:r,email:n,password:l})},a.handleShowRequirement=function(){var e=a.state.showingRequirements;e=!e,a.setState({showingRequirements:e})},a.passwordOnChange=function(){a.setState({password:a.passwordInput.current.value})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.firstNameInput.current.focus();var e=localStorage.getItem("entries");(e=JSON.parse(e))&&0!==e.length&&this.props.initEntries(e.entries)}},{key:"render",value:function(){var e=this.state,t=this.FormWrapper,a=this.Label,r=this.Input,l=this.Field,i=this.Submit,s=this.ShowRequirements,o=this.passwordOnChange,c=this.state.showingRequirements,u=this.props.errorFields;return void 0===u.failedForm||u.failedForm||(this.firstNameInput.current.value="",this.lastNameInput.current.value="",this.emailInput.current.value="",this.passwordInput.current.value="",this.firstNameInput.current.focus(),u.failedForm=void 0),n.a.createElement(N,{label:"Form Section"},n.a.createElement(t,{onSubmit:this.handleSubmit},n.a.createElement(l,{TopChild:!0,Half:!0},n.a.createElement(a,null,"First Name"),n.a.createElement(r,{type:"text",ref:this.firstNameInput,error:u.firstName})),n.a.createElement(l,{TopChild:!0,Half:!0},n.a.createElement(a,null,"Last Name"),n.a.createElement(r,{type:"text",ref:this.lastNameInput,error:u.lastName})),n.a.createElement(l,null,n.a.createElement(a,null,"Email Adress"),n.a.createElement(r,{type:"email",ref:this.emailInput,error:u.email})),n.a.createElement(l,null,n.a.createElement(a,null,"Password"),n.a.createElement(s,{onClick:this.handleShowRequirement},c?"Hide Requirements":"Show Requirements"),n.a.createElement(w,{state:e}),n.a.createElement(r,{type:"password",ref:this.passwordInput,error:u.password,onChange:o})),n.a.createElement(i,{type:"submit"},"Submit")))}}]),t}(n.a.Component),z=Object(I.b)((function(e){return{errorFields:e.errorFields}}),(function(e){return{addEntry:function(t){return e({type:R,payload:t})},initEntries:function(t){return e({type:F,payload:t})}}}))(_),P={fontSize:"14px",display:"inline-block",verticalAlign:"top"},B=Object(s.a)("hr",{target:"e5ubaft0"})({name:"0",styles:""}),L=Object(s.a)("div",{target:"e5ubaft1"})({name:"0",styles:""}),$=Object(s.a)("label",{target:"e5ubaft2"})("font-weight:600;width:85px;margin:0;",P,""),H=Object(s.a)("span",{target:"e5ubaft3"})("display:inline-block;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 85px);overflow:hidden;",P,""),J=Object(s.a)("button",{target:"e5ubaft4"})({name:"krai3x",styles:"position:absolute;top:23px;right:20px;background-color:orange;border:1px solid orange;color:white;padding:5px 15px;border-radius:10px;font-size:13px;font-weight:600;letter-spacing:0.5px;"}),M=Object(s.a)("p",{target:"e5ubaft5"})({name:"sxybbl",styles:"color:#818181;"}),W=Object(I.b)((function(e){return{entries:e.entries}}),(function(e){return{removeEntry:function(t){return e({type:A,payload:t})},removeAllEntries:function(){return e({type:C})}}}))((function(e){var t=e.entries,a=e.removeAllEntries;e.removeEntry;return n.a.createElement(N,{className:"col-6-md",label:"Display Section"},t&&0!==t.length?n.a.createElement(J,{onClick:function(){!function(e){e()}(a)}},"Remove All!"):n.a.createElement(M,null,"There are no current entries.",n.a.createElement("br",null),"Fill out and submit the form."),t.map((function(e,t){var a=e.id,r=e.firstName,l=e.lastName,i=e.email,s=e.password;return n.a.createElement("div",{className:"fields",key:a},t>0&&n.a.createElement(B,null),n.a.createElement(L,null,n.a.createElement($,null,"UUID:"),n.a.createElement(H,null,a)),n.a.createElement(L,null,n.a.createElement($,null,"First Name:"),n.a.createElement(H,null,r)),n.a.createElement(L,null,n.a.createElement($,null,"Last Name:"),n.a.createElement(H,null,l)),n.a.createElement(L,null,n.a.createElement($,null,"Email:"),n.a.createElement(H,null,i)),n.a.createElement(L,null,n.a.createElement($,null,"Password:"),n.a.createElement(H,null,s)))})))})),Y=a(5),Z=a(20),U=a(21);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(U.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var G={entries:[],errorFields:{}};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,a=t.type;if(a===S){var r=e.entries.concat(t.payload.entries);return localStorage.setItem("entries",JSON.stringify({entries:r})),Object.assign({},e,{entries:r,errorFields:X({},e.errorFields,{},t.payload.errorFields)})}if(a===k)return Object.assign({},e,{errorFields:X({},t.payload.errorFields)});if(a===F)return Object.assign({},e,{entries:e.entries.concat(t.payload)});if(a===A);else if(a===C){var n=[];return localStorage.setItem("entries",JSON.stringify(n)),Object.assign({},e,{entries:n})}return e},Q={firstName:!0,lastName:!0,email:!0,password:!0,failedForm:!1};var ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.c,te=Object(Y.d)(K,ee(Object(Y.a)((function(e){var t=e.dispatch;return function(e){return function(a){if(a.type===R){var r=a.payload,n=r.firstName,l=r.lastName,i=r.email,s=r.password;return Q.firstName=n.length<2,Q.lastName=l.length<2,Q.email=!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i),Q.password=!(s.length>=8&&/^(?=.*[A-Z]).+$/.test(s)&&/^(?=.*[a-z]).+$/.test(s)&&/[-#?!@$%^&*-]/.test(s)&&s.match(/\d+/g)&&s.match(/\d+/g).length>0),Q.failedForm=!1,Object.keys(Q).map((function(e){Q[e]&&(Q.failedForm=!0)})),Q.failedForm?t({type:k,payload:{entries:a.payload,errorFields:Q}}):t({type:S,payload:{entries:a.payload,errorFields:Q}})}return e(a)}}}),Z.a))),ae=Object(s.a)("div",{target:"e1l0z2uz0"})({name:"z80jug",styles:"text-align:center;margin-top:30px;"}),re=Object(s.a)("p",{target:"e1l0z2uz1"})({name:"10v01ns",styles:"display:inline-block;margin:0;color:orange;&+p{text-decoration:underline;}"});var ne=function(){return n.a.createElement(I.a,{store:te},n.a.createElement("div",{className:"container"},n.a.createElement(ae,null,n.a.createElement(re,null,"Warning, your password will be displayed in the Display Section.\xa0"),n.a.createElement(re,null,"Do not use any personal Passwords.")),n.a.createElement(z,null),n.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4020d828.chunk.js.map