(this.webpackJsonpvalidation=this.webpackJsonpvalidation||[]).push([[0],{25:function(e,t,r){e.exports=r(39)},30:function(e,t,r){},31:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(7),i=r.n(o),l=(r(30),r(31),r(1)),c=r(2),s=r(16),u=r(17),p=r(23),m=r(18),d=r(24),f="#ffffff",g="#818181",b="#4CCD4B",h="#C93238",y="#DD373D",O="#DC8201",w="#F18F01",v={cloud:{progression:"#1cc950",progressionHover:"#1AB749",warning:w,warningHover:O,error:y,errorHover:h,primaryBorder:"#A9E5BB",primaryShadow:"#9ffffc",primaryBackground:"#f5fffa",secondaryBackground:f,thirdaryBackground:"#e1fffe",primaryCopy:"#000000",secondaryCopy:g},nightVision:{progression:b,progressionHover:"#46BB45",warning:w,warningHover:O,error:y,errorHover:h,primaryBorder:b,primaryShadow:b,primaryBackground:"#161925",secondaryBackground:"#DEF5DE",thirdaryBackground:f,primaryCopy:"#235789",secondaryCopy:g}},E="992px",j="768px",x="576px",S="450px",k=(" @media (min-width: ".concat("1200px",")")," @media (min-width: ".concat(E,")")," @media (min-width: ".concat(j,")")," @media (min-width: ".concat(x,")")," @media (min-width: ".concat(S,")")," @media (max-width: calc(".concat(S," - 1px))"),r(3)),P=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},C=function(e){return e.length<2},D=function(e){return e.length>=8},R=function(e){return/^(?=.*[A-Z]).+$/.test(e)},N=function(e){return/^(?=.*[a-z]).+$/.test(e)},I=function(e){return/[-#?!@$%^&*-]/.test(e)},F=function(e){return!!(e.match(/\d+/g)&&e.match(/\d+/g).length>0)};function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T,q,A,H=E,_="@media (min-width: ".concat(j,") and (max-width: calc(").concat(H," - 1px))"),L=Object(l.a)("div",{target:"e1b6osy0"})((function(e){var t,r=e.showingRequirements,n={height:r?"203px":"0"},a={height:r?"223px":"0"};return t={position:"relative",overflow:"hidden",transition:"height 0.5s ease",height:r?"179px":"0"},Object(c.a)(t,_,z({},n)),Object(c.a)(t,"@media (max-width: 430px)",z({},n)),Object(c.a)(t,"@media (max-width: 331px)",z({},a)),t}),""),W=Object(l.a)("div",{target:"e1b6osy1"})((function(){var e,t={height:"calc(".concat("203px"," - 20px)")},r={height:"calc(".concat("223px"," - 20px)")};return e={position:"absolute",top:"10px",left:"0",height:"calc(".concat("179px"," - 20px)"),width:"100%",border:"1px solid ".concat(T.primaryBorder),borderRadius:"10px"},Object(c.a)(e,_,z({},t)),Object(c.a)(e,"@media (max-width: 430px)",z({},t)),Object(c.a)(e,"@media (max-width: 331px)",z({},r)),e}),""),M=Object(l.a)("div",{target:"e1b6osy2"})({name:"xflcn1",styles:"height:100%;padding:11px 15px;"}),$=Object(l.a)("label",{target:"e1b6osy3"})({name:"r7q7qr",styles:"margin-bottom:5px;"}),J=Object(l.a)("ul",{target:"e1b6osy4"})({name:"1uk1gs8",styles:"margin:0;"}),U=Object(l.a)("li",{target:"e1b6osy5"})((function(e){return{position:"relative",listStyleType:"none",paddingLeft:"20px",lineHeight:"1.3em","&::after":{content:'""',position:"absolute",top:"6px",left:"0",height:"10px",width:"10px",borderRadius:"50%",backgroundColor:e.success?T.primaryBorder:T.error}}}),""),V=Object(l.a)("span",{target:"e1b6osy6"})({name:"1oc0d0",styles:"font-size:14px;letter-spacing:0.5px;"}),Y=Object(k.b)((function(e){return{theme:e.theme,password:e.password,showingRequirements:e.showingRequirements}}))((function(e){var t=e.showingRequirements,r=e.password,n=e.theme;T=v[n];var o={minCharacter:D(r),upperCase:R(r),lowerCase:N(r),special:I(r),number:F(r)},i=o.minCharacter,l=o.upperCase,c=o.lowerCase,s=o.special,u=o.number;return a.a.createElement(L,{showingRequirements:t},a.a.createElement(W,null,a.a.createElement(M,null,a.a.createElement($,null,"The following must contain the following:"),a.a.createElement(J,null,a.a.createElement(U,{success:i},a.a.createElement(V,null,"atleast 8 characters")),a.a.createElement(U,{success:l},a.a.createElement(V,null,"atleast 1 uppercase")),a.a.createElement(U,{success:c},a.a.createElement(V,null,"atleast 1 lowercase")),a.a.createElement(U,{success:u},a.a.createElement(V,null,"atleast 1 number")),a.a.createElement(U,{success:s},a.a.createElement(V,null,"atleast 1 special character"))))))})),G=Object(l.a)("div",{target:"e1jnhfdy0"})({name:"12jhpwb",styles:"display:inline-block;vertical-align:top;margin-top:15px;padding:15px;"}),Z=Object(l.a)("div",{target:"e1jnhfdy1"})((function(){return{position:"relative",display:"inline-block",width:"100%",border:"2px solid ".concat(q.primaryBorder),borderRadius:"10px",padding:"15px 20px",backgroundColor:q.secondaryBackground,boxShadow:"0 0 13px ".concat(q.primaryShadow)}}),""),X=Object(l.a)("h1",{target:"e1jnhfdy2"})((function(){return{color:q.primaryCopy,margin:"0"}}),""),Q=Object(l.a)("div",{target:"e1jnhfdy3"})({name:"16b2ug3",styles:"margin:15px 0;"}),K=function(e){var t=e.label,r=e.children,n=e.theme;return q=v[n],a.a.createElement(G,{className:"col-md-6"},a.a.createElement(Z,null,a.a.createElement(X,null,t),a.a.createElement(Q,null,r)))},ee=r(20),te=r.n(ee);function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ne=Object(l.a)("button",{target:"exqtdar0"})((function(e){var t,r,n,a,o,i=e.color,l=e.size,s=e.addedStyles;return"green"===i?(t="white",r=A.progression,n=A.progressionHover):"orange"===i?(t="white",r=A.warning,n=A.warningHover):"red"===i&&(t="white",r=A.error,n=A.errorHover),"lg"===l?(a="10px 20px",o="16px"):"sm"===l&&(a="5px 15px",o="13px"),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{borderWidth:"1px",borderStyle:"solid",borderRadius:"10px",letterSpacing:"0.5px",fontWeight:"600",padding:a,fontSize:o,color:t,borderColor:r,backgroundColor:r,"&:hover":{backgroundColor:n,borderColor:n}},{},s)}),""),ae=function(e){var t=e.theme,r=e.type,n=e.color,o=e.size,i=e.children,l=e.addedStyles,c=void 0===l?null:l,s=e.handleClick,u=void 0===s?null:s;return A=v[t],a.a.createElement(ne,{type:r,color:n,size:o,addedStyles:c,onClick:u},i)},oe="ADD_ENTRY",ie="ADD_ENTRY_MIDDLE",le="FAILED_ENTRY",ce="INIT_ENTRIES",se="REMOVE_ENTRY",ue="REMOVE_ALL_ENTRIES",pe="TOGGLE_THEME",me="UPDATE_PASSWORD",de="TOGGLE_REQUIREMENTS";function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ge,be,he=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).firstNameInput=a.a.createRef(),r.lastNameInput=a.a.createRef(),r.emailInput=a.a.createRef(),r.passwordInput=a.a.createRef(),r.FormWrapper=Object(l.a)("form",{target:"e10sy1xu0"})({name:"1b1zfbw",styles:"display:flex;flex-wrap:wrap;justify-content:space-between;"}),r.Label=Object(l.a)("label",{target:"e10sy1xu1"})((function(){return{color:ge.primaryCopy,margin:"0",fontWeight:"600",letterSpacing:"0.5px",display:"inline-block"}}),""),r.Input=Object(l.a)("input",{target:"e10sy1xu2"})((function(e){var t=e.error?{borderColor:ge.error,"&:focus":{outlineColor:ge.error}}:null;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({color:ge.primaryCopy,display:"block",backgroundColor:ge.thirdaryBackground,border:"1px solid ".concat(ge.primaryBorder),borderRadius:"5px",padding:"10px",width:"100%"},t)}),""),r.Field=Object(l.a)("div",{target:"e10sy1xu3"})((function(e){return{display:"inline-block",verticalAlign:"top",marginTop:e.TopChild?"0":"20px",flexBasis:e.Half?"calc(50% - 10px)":"100%"}}),""),r.submitButton={marginTop:"30px"},r.ShowRequirements=Object(l.a)("p",{target:"e10sy1xu4"})((function(){return{color:ge.primaryCopy,margin:"0",float:"right",fontSize:"12px",fontWeight:"600",letterSpacing:"0.5px",marginTop:"6px",cursor:"pointer",textDecoration:"underline",userSelect:"none",display:"inline-block"}}),""),r.handleSubmit=function(e){e.preventDefault();var t=r.firstNameInput.current.value,n=r.lastNameInput.current.value,a=r.emailInput.current.value,o=r.passwordInput.current.value,i=te()();r.props.addEntry({id:i,firstName:t,lastName:n,email:a,password:o})},r.handleShowRequirement=function(e){e();var t=r.props.showingRequirements;t=!t,r.setState({showingRequirements:t})},r.passwordOnChange=function(e){e(r.passwordInput.current.value)},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.firstNameInput.current.focus();var e=localStorage.getItem("entries");(e=JSON.parse(e))&&0!==e.entries.length&&this.props.initEntries(e.entries)}},{key:"render",value:function(){var e=this.FormWrapper,t=this.Label,r=this.Input,n=this.Field,o=this.ShowRequirements,i=this.passwordOnChange,l=this.props,c=this.handleShowRequirement,s=this.handleSubmit,u=this.firstNameInput,p=this.lastNameInput,m=this.emailInput,d=this.passwordInput,f=this.submitButton,g=l.errorFields,b=l.theme,h=l.updatePassword,y=l.showingRequirements,O=l.toggleRequirements;ge=v[b],void 0===g.failedForm||g.failedForm||(this.firstNameInput.current.value="",this.lastNameInput.current.value="",this.emailInput.current.value="",this.passwordInput.current.value="",this.firstNameInput.current.focus(),g.failedForm=void 0);var w=g.firstName,E=g.lastName,j=g.email,x=g.password;return a.a.createElement(K,{label:"Form Section",theme:b},a.a.createElement(e,{onSubmit:s},a.a.createElement(n,{TopChild:!0,Half:!0},a.a.createElement(t,null,"First Name"),a.a.createElement(r,{type:"text",ref:u,error:w})),a.a.createElement(n,{TopChild:!0,Half:!0},a.a.createElement(t,null,"Last Name"),a.a.createElement(r,{type:"text",ref:p,error:E})),a.a.createElement(n,null,a.a.createElement(t,null,"Email Adress"),a.a.createElement(r,{type:"email",ref:m,error:j})),a.a.createElement(n,null,a.a.createElement(t,null,"Password"),a.a.createElement(o,{onClick:function(){return c(O)}},y?"Hide Requirements":"Show Requirements"),a.a.createElement(Y,null),a.a.createElement(r,{type:"password",ref:d,error:x,onChange:function(){return i(h)}})),a.a.createElement(ae,{type:"submit",color:"green",size:"lg",addedStyles:f,theme:b},"Submit")))}}]),t}(a.a.Component),ye=Object(k.b)((function(e){return{errorFields:e.errorFields,theme:e.theme,password:e.password,showingRequirements:e.showingRequirements}}),(function(e){return{addEntry:function(t){return e({type:ie,payload:t})},initEntries:function(t){return e({type:ce,payload:t})},updatePassword:function(t){return e({type:me,payload:t})},toggleRequirements:function(t){return e({type:de})}}}))(he);function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var we,ve=Object(l.a)("button",{target:"e10xdn3p0"})((function(e){var t,r,n,a,o,i,l=e.color,s=e.size,u=e.addedStyles,p=e.icon;e.theme;return"green"===l?(t="white",r=be.progression,n=be.progressionHover):"orange"===l?(t="white",r=be.warning,n=be.warningHover):"red"===l&&(t="white",r=be.error,n=be.errorHover),"lg"===s?(a="10px",o="8px"):"sm"===s&&(a="5px",o="4px"),"minus"===p&&(i='url("./images/minus.svg")'),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{borderStyle:"solid",borderRadius:"50%",backgroundSize:"contain",backgroundRepeat:"no-repeat",padding:a,borderWidth:o,color:t,borderColor:r,backgroundColor:r,"&:hover":{backgroundColor:n,borderColor:n},backgroundImage:i},{},u)}),""),Ee=function(e){var t=e.type,r=e.color,n=e.size,o=e.addedStyles,i=void 0===o?null:o,l=e.handleClick,c=void 0===l?null:l,s=e.icon,u=e.theme;return be=v[u],a.a.createElement(ve,{type:t,color:r,size:n,addedStyles:i,onClick:c,icon:s,theme:u})};function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se,ke,Pe={fontSize:"14px",display:"inline-block",verticalAlign:"top"},Ce=Object(l.a)("hr",{target:"e5ubaft0"})({name:"0",styles:""}),De=Object(l.a)("div",{target:"e5ubaft1"})({name:"0",styles:""}),Re=Object(l.a)("label",{target:"e5ubaft2"})((function(){return xe({fontWeight:"600",width:"85px",margin:"0"},Pe,{},Se)}),""),Ne=Object(l.a)("span",{target:"e5ubaft3"})((function(){return xe({display:"inline-block",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"calc(100% - 110px)",overflow:"hidden"},Pe,{},Se)}),""),Ie={marginBottom:"20px"},Fe={position:"absolute",top:"0",right:"0"},Be=Object(l.a)("p",{target:"e5ubaft4"})((function(){return{color:we.secondaryCopy}}),""),ze=Object(l.a)("div",{target:"e5ubaft5"})({name:"79elbk",styles:"position:relative;"}),Te=Object(k.b)((function(e){return{entries:e.entries,theme:e.theme}}),(function(e){return{removeEntry:function(t){return e({type:se,payload:t})},removeAllEntries:function(){return e({type:ue})}}}))((function(e){var t=e.theme,r=e.entries,n=e.removeAllEntries,o=e.removeEntry;return Se={color:(we=v[t]).primaryCopy},a.a.createElement(K,{className:"col-6-md",label:"Display Section",theme:t},r&&0!==r.length?a.a.createElement(ae,{type:"button",color:"orange",size:"sm",addedStyles:Ie,handleClick:function(){!function(e){e()}(n)},theme:t},"Remove All!"):a.a.createElement(Be,{theme:t},"There are no current entries.",a.a.createElement("br",null),"Fill out and submit the form."),r.map((function(e,r){var n=e.id,i=e.firstName,l=e.lastName,c=e.email,s=e.password;return a.a.createElement("div",{key:n},r>0&&a.a.createElement(Ce,null),a.a.createElement(ze,null,a.a.createElement(Ee,{type:"button",color:"red",size:"sm",icon:"minus",addedStyles:Fe,handleClick:function(){!function(e,t){e(t)}(o,n)},theme:t}),a.a.createElement(De,null,a.a.createElement(Re,null,"UUID:"),a.a.createElement(Ne,null,n)),a.a.createElement(De,null,a.a.createElement(Re,null,"First Name:"),a.a.createElement(Ne,null,i)),a.a.createElement(De,null,a.a.createElement(Re,null,"Last Name:"),a.a.createElement(Ne,null,l)),a.a.createElement(De,null,a.a.createElement(Re,null,"Email:"),a.a.createElement(Ne,null,c)),a.a.createElement(De,null,a.a.createElement(Re,null,"Password:"),a.a.createElement(Ne,null,s))))})))})),qe=Object(l.a)("div",{target:"e1l0z2uz0"})((function(){return{height:"100%",minHeight:"100vh",backgroundColor:ke.primaryBackground}}),""),Ae=Object(l.a)("div",{target:"e1l0z2uz1"})({name:"h890i5",styles:"text-align:center;margin-top:30px;display:inline-block;width:100%;p{display:inline-block;margin:0;color:orange;& + p{text-decoration:underline;}}"}),He=Object(l.a)("div",{target:"e1l0z2uz2"})((function(){return{textAlign:"center","& > *":{color:"".concat(ke.progression),"&:hover":{color:"".concat(ke.progressionHover)}},"& > p":{display:"block",margin:"30px 0 0"},"span, span p":{display:"inline-block"},"span p":{margin:"0",textDecoration:"underline",cursor:"pointer"}}}),""),_e=Object(k.b)((function(e){return{theme:e.theme}}),(function(e){return{toggleTheme:function(){return e({type:pe})}}}))((function(e){var t=e.theme,r=e.toggleTheme;ke=v[t];var n=t.replace(/([a-z])([A-Z])/g,"$1 $2");return n=n.charAt(0).toUpperCase()+n.slice(1),a.a.createElement(qe,null,a.a.createElement("div",{className:"container"},a.a.createElement(Ae,null,a.a.createElement("p",null,"Warning, your password will be displayed in the Display Section.\xa0"),a.a.createElement("p",null,"Do not use any personal Passwords.")),a.a.createElement(He,null,a.a.createElement("p",null,"You are currently in the ",a.a.createElement("strong",null,n)," theme."),a.a.createElement("span",null,"Click\xa0",a.a.createElement("p",{onClick:function(){return function(e){e()}(r)}},"here")),a.a.createElement("span",null,"\xa0to switch theme.")),a.a.createElement(ye,null),a.a.createElement(Te,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=r(6),We=r(21),Me=r(22);function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$e(r,!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ue={entries:[],theme:"cloud",errorFields:{},password:"",showingRequirements:!1};var Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;if(r===oe){var a=e.entries.concat(n.entries);return localStorage.setItem("entries",JSON.stringify({entries:a})),Object.assign({},e,{entries:a,errorFields:Je({},e.errorFields,{},n.errorFields)})}if(r===le)return Object.assign({},e,{errorFields:Je({},n.errorFields)});if(r===ce)return Object.assign({},e,{entries:e.entries.concat(n)});if(r===se){for(var o,i=Object(Me.a)(e.entries),l=0;l<i.length;l++){if(n===i[l].id){o=l;break}}return i.splice(o,1),localStorage.setItem("entries",JSON.stringify({entries:i})),Object.assign({},e,{entries:i})}if(r===ue){var c=[];return localStorage.setItem("entries",JSON.stringify(c)),Object.assign({},e,{entries:c})}if(r===pe){var s="cloud"===e.theme?"nightVision":"cloud";return Object.assign({},e,{theme:s})}if(r===me)return Object.assign({},e,{password:n});if(r===de){var u=!e.showingRequirements;return Object.assign({},e,{showingRequirements:u})}return e};var Ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Le.c,Ge=Object(Le.d)(Ve,Ye(Object(Le.a)((function(e){var t=e.dispatch;return function(e){return function(r){if(r.type===ie){var n=r.payload,a=n.firstName,o=n.lastName,i=n.email,l=n.password,c={failedForm:!1};return c.firstName=C(a),c.lastName=C(o),c.email=!P(i),c.password=!(D(l)&&R(l)&&N(l)&&I(l)&&F(l)),c.failedForm=!1,Object.keys(c).map((function(e){c[e]&&(c.failedForm=!0)})),c.failedForm?t({type:le,payload:{entries:r.payload,errorFields:c}}):t({type:oe,payload:{entries:r.payload,errorFields:c}})}return e(r)}}}),We.a)));i.a.render(a.a.createElement(k.a,{store:Ge},a.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.b21afdd5.chunk.js.map