(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(4759)}])},4759:function(e,s,r){"use strict";r.r(s);var l=r(5893),n=r(7294),a=r(1163),t=r(6154),i=r(8529),o=r.n(i),c=r(183),d=r(4566);s.default=function(){let e=(0,a.useRouter)(),[s,r]=(0,n.useState)(""),[i,h]=(0,n.useState)(""),[u,m]=(0,n.useState)(""),[p,_]=(0,n.useState)(""),[x,j]=(0,n.useState)(""),[N,f]=(0,n.useState)(!1),{user:g,setUser:k,setAllBets:v,setAllBetsOutcome:M}=(0,d.b)(),b=async r=>{if(r.preventDefault(),N)try{let r=await t.Z.post("https://sports-odds.herokuapp.com/create_user",{username:s,password:i,f_name:u,l_name:p});200===r.status&&(k(r.data),e.push("/"))}catch(e){console.error(e)}else try{let r=await t.Z.post("https://sports-odds.herokuapp.com/login_to_db",{username:s,password:i}),l=await t.Z.get("https://sports-odds.herokuapp.com/seeBets"),n=await t.Z.get("https://sports-odds.herokuapp.com/seeBetsOutcome");200===r.status&&k(r.data),200===l.status&&v(l.data),200===n.status&&(M(n.data),e.push("/"))}catch(e){console.error(e),j("Invalid username or password!")}};return(0,l.jsxs)("div",{className:o().login_container,children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)("h1",{children:N?"Create Account":"Login"}),(0,l.jsxs)("form",{onSubmit:b,children:[x&&(0,l.jsx)("p",{className:o().error,children:x}),(0,l.jsxs)("div",{className:o().form_control,children:[(0,l.jsx)("label",{htmlFor:"username",children:"Username"}),(0,l.jsx)("input",{type:"text",id:"username",placeholder:"Username",value:s,onChange:e=>{r(e.target.value),j("")},required:!0})]}),(0,l.jsxs)("div",{className:o().form_control,children:[(0,l.jsx)("label",{htmlFor:"password",children:"Password"}),(0,l.jsx)("input",{type:"password",id:"password",placeholder:"Password",value:i,onChange:e=>{h(e.target.value),j("")},required:!0})]}),N&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:o().form_control,children:[(0,l.jsx)("label",{htmlFor:"first-name",children:"First Name"}),(0,l.jsx)("input",{type:"text",id:"first-name",placeholder:"First Name",value:u,onChange:e=>{m(e.target.value),j("")},required:!0})]}),(0,l.jsxs)("div",{className:o().form_control,children:[(0,l.jsx)("label",{htmlFor:"last-name",children:"Last Name"}),(0,l.jsx)("input",{type:"text",id:"last-name",placeholder:"Last Name",value:p,onChange:e=>{_(e.target.value),j("")},required:!0})]})]}),(0,l.jsx)("button",{type:"submit",children:N?"Create Account":"Login"}),(0,l.jsx)("div",{style:{paddingTop:30},children:(0,l.jsxs)("p",{children:[N?"Already have an account?":"Don't have an account?"," ",(0,l.jsx)("button",{type:"button",onClick:()=>f(!N),style:{background:"none",border:"none",margin:0,padding:0,fontWeight:"normal",cursor:"pointer"},children:N?"Login":"Create Account"})]})})]})]})}},183:function(e,s,r){"use strict";var l=r(5893),n=r(7294),a=r(6154),t=r(7355),i=r.n(t),o=r(1664),c=r.n(o),d=r(4566);s.Z=function(){let[e,s]=(0,n.useState)(!1),{user:r,setUser:t}=(0,d.b)(),o=()=>{try{a.Z.post("https://sports-odds.herokuapp.com/logout").then(e=>{200===e.status?t(null):console.log(e)})}catch(e){console.log(e)}};return(0,l.jsxs)("div",{className:i().navbar,children:[(0,l.jsx)("div",{style:{marginLeft:10},children:(0,l.jsx)(c(),{href:"/",children:(0,l.jsx)("img",{alt:"",style:{left:10,position:"absolute"},src:"/out/Sports Odds-1.png"})})}),(0,l.jsx)("li",{className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/NFL",children:"NFL"})}),(0,l.jsx)("li",{className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/NBA",children:"NBA"})}),(0,l.jsx)("li",{className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/WNBA",children:"WNBA"})}),(0,l.jsx)("li",{className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/MLB",children:"MLB"})}),(0,l.jsx)("li",{className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/NHL",children:"NHL"})}),(0,l.jsxs)("li",{className:i().li,children:[(0,l.jsx)("div",{onMouseEnter:()=>{s(!0)},className:i().link,children:"NCAA"}),e?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:i().seeMore,onMouseLeave:()=>{s(!1)},children:[(0,l.jsx)("li",{className:i().seeMoreli,children:(0,l.jsx)(c(),{className:i().seeMoreLink,href:"/MCBB",children:"MCBB"})}),(0,l.jsx)("li",{className:i().seeMoreli,children:(0,l.jsx)(c(),{className:i().seeMoreLink,href:"/WCBB",children:"WCBB"})}),(0,l.jsx)("li",{className:i().seeMoreli,children:(0,l.jsx)(c(),{className:i().seeMoreLink,href:"/CFB",children:"CFB"})})]})}):null]}),r?(0,l.jsxs)("div",{className:i().login_or_profile,children:[(0,l.jsx)("li",{onMouseEnter:()=>{s(!1)},className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/profile",children:"Profile"})}),(0,l.jsx)("li",{onMouseEnter:()=>{s(!1)},onClick:()=>{o()},className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/",children:"Logout"})})]}):(0,l.jsx)("div",{className:i().login_or_profile,children:(0,l.jsx)("li",{onMouseEnter:()=>{s(!1)},className:i().li,children:(0,l.jsx)(c(),{className:i().link,href:"/login",children:"Login / Create Account"})})})]})}},7355:function(e){e.exports={li:"Header_li__hAG_C",link:"Header_link__nMT9k",navbar:"Header_navbar__7ndZO",seeMore:"Header_seeMore__QBAN3",seeMoreli:"Header_seeMoreli__aOKUk",seeMoreLink:"Header_seeMoreLink__HxtEr",login_or_profile:"Header_login_or_profile__Alwf4"}},8529:function(e){e.exports={login_container:"login_login_container__NCGmR",form_control:"login_form_control__ZV7hp",error:"login_error__mBEbE"}},1163:function(e,s,r){e.exports=r(6885)}},function(e){e.O(0,[470,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);