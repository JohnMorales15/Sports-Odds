(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[545],{2091:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MLB",function(){return a(3659)}])},3659:function(e,s,a){"use strict";a.r(s);var n=a(5893),l=a(6154),i=a(7294),r=a(239),o=a.n(r),t=a(183),d=a(1298),m=a(4566),c=a(6806);s.default=function(){let[e,s]=(0,i.useState)(!0),[a,r]=(0,i.useState)([]),[h,p]=(0,i.useState)([]),[j,x]=(0,i.useState)([]),[g,_]=(0,i.useState)([]),[N,y]=(0,i.useState)([]),[v,u]=(0,i.useState)(!1),[w,f]=(0,i.useState)([]),[b,S]=(0,i.useState)([]),[W,C]=(0,i.useState)([]),[F,P]=(0,i.useState)(!1),{setBetInfo:k,betInfo:O}=(0,m.b)();(0,i.useEffect)(()=>{l.Z.get("https://statmilk.bleacherreport.com/api/scores/carousel?league=MLB&team=none&carousel_context=league&tz=-25200&appversion=500.0").then(e=>{void 0===e.data.game_groups[0]?u(!0):"In Progress"===e.data.game_groups[0].name&&"Completed"===e.data.game_groups[1].name?(p(e.data.game_groups[0]),r(e.data.game_groups[1]),x(e.data.game_groups[2])):"Completed"===e.data.game_groups[0].name?(r(e.data.game_groups[0]),x(e.data.game_groups[1])):"In Progress"===e.data.game_groups[0].name&&"Upcoming"===e.data.game_groups[1].name?(p(e.data.game_groups[0]),x(e.data.game_groups[1])):x(e.data.game_groups[0])}).then(()=>{l.Z.get("https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news").then(e=>{_(e.data.articles)})}).then(()=>{l.Z.get("https://sports-odds.herokuapp.com/Odds/mlb").then(e=>{f(e.data[0].Upcoming),C(e.data[1].Inprogress),S(e.data[2].Final)}).then(()=>{l.Z.get("https://sports-odds.herokuapp.com/Sport_News/mlb").then(e=>{y(e.data),s(!1)})})})},[]);let T={},D={};return(0,n.jsxs)("div",{children:[(0,n.jsx)(t.Z,{}),e?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{children:"Data is loading..."})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:o().scoreboard,style:v?{justifyContent:"center"}:null,children:v?(0,n.jsx)("div",{className:o().offseason,children:(0,n.jsx)("p",{children:"It is currently the offseason."})}):(0,n.jsxs)(n.Fragment,{children:[void 0!==h.game_groups?(0,n.jsx)(n.Fragment,{children:h.games.map(e=>(0,n.jsxs)("div",{className:o().games,children:[(0,n.jsx)("div",{className:o().date,children:e.game_progress.primary}),(0,n.jsx)("div",{className:o().time,children:e.game_progress.header}),(0,n.jsxs)("div",{className:o().teamContainer,children:[(0,n.jsx)("div",{className:o().logoDiv,children:(0,n.jsx)("img",{alt:"",className:o().logo,src:e.team_one.logo})}),(0,n.jsx)("div",{className:o().teamName,children:e.team_one.abbrev}),(0,n.jsx)("div",{className:o().record,children:e.team_one.record}),(0,n.jsx)("span",{children:e.team_one.score})]}),(0,n.jsxs)("div",{className:o().teamContainer,children:[(0,n.jsx)("div",{className:o().logoDiv,children:(0,n.jsx)("img",{alt:"",className:o().logo,src:e.team_two.logo})}),(0,n.jsx)("div",{className:o().teamName,children:e.team_two.abbrev}),(0,n.jsx)("div",{className:o().record,children:e.team_two.record}),(0,n.jsx)("span",{children:e.team_two.score})]})]},e.id))}):null,void 0!==a.games?(0,n.jsx)(n.Fragment,{children:a.games.map(e=>{let s=[e.team_one.name,e.team_two.name];return D[e.id]=s,(0,n.jsxs)("div",{className:o().games,children:[(0,n.jsx)("div",{className:o().date,children:e.game_progress.primary}),(0,n.jsx)("div",{className:o().time,children:e.game_progress.header}),(0,n.jsxs)("div",{className:o().teamContainer,children:[(0,n.jsx)("div",{className:o().logoDiv,children:(0,n.jsx)("img",{alt:"",className:o().logo,src:e.team_one.logo})}),(0,n.jsx)("div",{className:o().teamName,children:e.team_one.abbrev}),(0,n.jsx)("div",{className:o().record,children:e.team_one.record}),(0,n.jsx)("span",{children:e.team_one.score})]}),(0,n.jsxs)("div",{className:o().teamContainer,children:[(0,n.jsx)("div",{className:o().logoDiv,children:(0,n.jsx)("img",{alt:"",className:o().logo,src:e.team_two.logo})}),(0,n.jsx)("div",{className:o().teamName,children:e.team_two.abbrev}),(0,n.jsx)("div",{className:o().record,children:e.team_two.record}),(0,n.jsx)("span",{children:e.team_two.score})]})]},e.id)})}):null,j.games.map(e=>{let s=[e.team_one.name,e.team_two.name];return T[e.id]=s,(0,n.jsxs)("div",{className:o().games,children:[(0,n.jsx)("div",{className:o().date,children:e.game_progress.primary}),(0,n.jsx)("div",{className:o().time,children:e.game_progress.header}),(0,n.jsxs)("div",{className:o().teamContainer,children:[(0,n.jsx)("div",{className:o().logoDiv,children:(0,n.jsx)("img",{alt:"",className:o().logo,src:e.team_one.logo})}),(0,n.jsx)("div",{className:o().teamName,children:e.team_one.abbrev}),(0,n.jsx)("div",{className:o().record,children:e.team_one.record}),(0,n.jsx)("span",{children:e.team_one.score})]}),(0,n.jsxs)("div",{className:o().teamContainer,children:[(0,n.jsx)("div",{className:o().logoDiv,children:(0,n.jsx)("img",{alt:"",className:o().logo,src:e.team_two.logo})}),(0,n.jsx)("div",{className:o().teamName,children:e.team_two.abbrev}),(0,n.jsx)("div",{className:o().record,children:e.team_two.record}),(0,n.jsx)("span",{children:e.team_two.score})]})]},e.id)})]})}),(0,n.jsx)("div",{style:{width:v?"100%":"60%",float:v?"none":"left"},children:(0,n.jsxs)("div",{className:o().news,children:[(0,n.jsx)("h1",{className:o().upcoming,children:"MLB News"}),g.map(e=>(0,n.jsxs)("div",{className:o().newInfo,children:[(0,n.jsx)("header",{children:e.headline}),(0,n.jsx)("a",{href:e.links.web.href,children:(0,n.jsx)("img",{className:o().Pic,height:325,width:575,alt:"",src:e.images[0].url})}),(0,n.jsx)("p",{children:e.description})]},e.headline)),N.map(e=>(0,n.jsxs)("div",{className:o().newInfo,children:[(0,n.jsx)("header",{children:e.headline}),(0,n.jsx)("a",{href:e.links,children:(0,n.jsx)("img",{className:o().Pic,height:325,width:575,alt:"",src:e.image})}),(0,n.jsx)("p",{children:e.description})]},e.headline))]})}),v?null:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{width:"40%",float:"right"},children:(0,n.jsx)("div",{style:{marginRight:"20%"},className:o().odds_div,children:(0,n.jsxs)("div",{className:o().odds,children:[W.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:o().upcoming,children:"Live Game Odds"}),W.map(e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:o().team_info,children:[(0,n.jsxs)("div",{className:o().team_header,children:[(0,n.jsx)("div",{style:{minWidth:60,cursor:"pointer"},children:(0,n.jsx)(d.OzW,{onClick:()=>{k([e.away.logo,e.away.team,e.away.score,e.away.moneyline,e.away.point_spread,e.away.total_points,e.home.logo,e.home.team,e.home.score,e.home.moneyline,e.home.point_spread,e.home.total_points,"mlb","baseball"]),P(!F)},color:"green"})}),(0,n.jsx)("p",{style:{minWidth:100}}),(0,n.jsx)("p",{style:{minWidth:72},children:"Money Line"}),(0,n.jsx)("p",{style:{minWidth:120},children:"Point Spread"}),(0,n.jsx)("p",{style:{minWidth:120},children:"Total Points"})]}),(0,n.jsxs)("div",{className:o().team_format,children:[(0,n.jsxs)("div",{className:o().name_logo,children:[(0,n.jsx)("img",{alt:"",className:o().odds_logo,src:e.away.logo}),(0,n.jsxs)("div",{className:o().name_record,children:[(0,n.jsx)("h4",{children:e.away.team}),(0,n.jsxs)("span",{children:["Current Score: ",e.away.score]}),(0,n.jsx)("span",{style:{paddingTop:5},children:"@"})]})]}),(0,n.jsx)("p",{children:e.away.moneyline}),(0,n.jsx)("p",{children:e.away.point_spread}),(0,n.jsx)("p",{children:e.away.total_points})]}),(0,n.jsxs)("div",{className:o().team_format,children:[(0,n.jsxs)("div",{className:o().name_logo,children:[(0,n.jsx)("img",{alt:"",className:o().odds_logo,src:e.home.logo}),(0,n.jsxs)("div",{className:o().name_record,children:[(0,n.jsx)("h4",{children:e.home.team}),(0,n.jsxs)("span",{children:["Current Score: ",e.home.score]})]})]}),(0,n.jsx)("p",{children:e.home.moneyline}),(0,n.jsx)("p",{children:e.home.point_spread}),(0,n.jsx)("p",{children:e.home.total_points})]})]})}))]}):null,w.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:o().upcoming,children:"Upcoming Game Odds"}),w.map(e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:o().team_info,children:[(0,n.jsxs)("div",{className:o().team_header,children:[(0,n.jsx)("div",{style:{minWidth:60,cursor:"pointer"},children:(0,n.jsx)(d.OzW,{onClick:()=>{k([e.away.logo,e.away.team,e.away.record,e.away.moneyline,e.away.point_spread,e.away.total_points,e.home.logo,e.home.team,e.home.record,e.home.moneyline,e.home.point_spread,e.home.total_points]),P(!F)},color:"green"})}),(0,n.jsx)("p",{style:{minWidth:100}}),(0,n.jsx)("p",{style:{minWidth:72},children:"Money Line"}),(0,n.jsx)("p",{style:{minWidth:120},children:"Point Spread"}),(0,n.jsx)("p",{style:{minWidth:120},children:"Total Points"})]}),(0,n.jsxs)("div",{className:o().team_format,children:[(0,n.jsxs)("div",{className:o().name_logo,children:[(0,n.jsx)("img",{alt:"",className:o().odds_logo,src:e.away.logo}),(0,n.jsxs)("div",{className:o().name_record,children:[(0,n.jsx)("h4",{children:e.away.team}),(0,n.jsx)("span",{children:e.away.record}),(0,n.jsx)("span",{style:{paddingTop:5},children:"@"})]})]}),(0,n.jsx)("p",{children:e.away.moneyline}),(0,n.jsx)("p",{children:e.away.point_spread}),(0,n.jsx)("p",{children:e.away.total_points})]}),(0,n.jsxs)("div",{className:o().team_format,children:[(0,n.jsxs)("div",{className:o().name_logo,children:[(0,n.jsx)("img",{alt:"",className:o().odds_logo,src:e.home.logo}),(0,n.jsxs)("div",{className:o().name_record,children:[(0,n.jsx)("h4",{children:e.home.team}),(0,n.jsx)("span",{children:e.home.record})]})]}),(0,n.jsx)("p",{children:e.home.moneyline}),(0,n.jsx)("p",{children:e.home.point_spread}),(0,n.jsx)("p",{children:e.home.total_points})]})]})}))]}):null,b.length>0?(0,n.jsx)("h1",{className:o().upcoming,children:"Game Final Odds"}):null,b.map(e=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:o().team_info,children:[(0,n.jsxs)("div",{className:o().team_header,children:[(0,n.jsx)("p",{style:{minWidth:180}}),(0,n.jsx)("p",{style:{minWidth:72},children:"Money Line"}),(0,n.jsx)("p",{style:{minWidth:120},children:"Point Spread"}),(0,n.jsx)("p",{style:{minWidth:120},children:"Total Points"})]}),(0,n.jsxs)("div",{className:o().team_format,children:[(0,n.jsxs)("div",{className:o().name_logo,children:[(0,n.jsx)("img",{alt:"",className:o().odds_logo,src:e.away.logo}),(0,n.jsxs)("div",{className:o().name_record,children:[(0,n.jsx)("h4",{children:e.away.team}),(0,n.jsxs)("span",{children:["Final Score: ",e.away.score]}),(0,n.jsx)("span",{style:{paddingTop:5},children:"@"})]})]}),e.away.moneyline.length>5?(0,n.jsxs)("p",{children:[(0,n.jsx)(d.mny,{style:{marginRight:10},color:"green"}),e.away.moneyline.slice(5)]}):(0,n.jsx)("p",{children:e.away.moneyline}),e.away.point_spread.length>5?(0,n.jsxs)("p",{children:[(0,n.jsx)(d.mny,{style:{marginRight:10},color:"green"}),e.away.point_spread.slice(5)]}):(0,n.jsx)("p",{children:e.away.point_spread}),e.away.total_points.length>5?(0,n.jsxs)("p",{children:[(0,n.jsx)(d.mny,{style:{marginRight:10},color:"green"}),e.away.total_points.slice(5)]}):(0,n.jsx)("p",{children:e.away.total_points})]}),(0,n.jsxs)("div",{className:o().team_format,children:[(0,n.jsxs)("div",{className:o().name_logo,children:[(0,n.jsx)("img",{alt:"",className:o().odds_logo,src:e.home.logo}),(0,n.jsxs)("div",{className:o().name_record,children:[(0,n.jsx)("h4",{children:e.home.team}),(0,n.jsxs)("span",{children:["Final Score: ",e.home.score]})]})]}),e.home.moneyline.length>5?(0,n.jsxs)("p",{children:[(0,n.jsx)(d.mny,{style:{marginRight:10},color:"green"}),e.home.moneyline.slice(5)]}):(0,n.jsx)("p",{children:e.home.moneyline}),e.home.point_spread.length>5?(0,n.jsxs)("p",{children:[(0,n.jsx)(d.mny,{style:{marginRight:10},color:"green"}),e.home.point_spread.slice(5)]}):(0,n.jsx)("p",{children:e.home.point_spread}),e.home.total_points.length>5?(0,n.jsxs)("p",{children:[(0,n.jsx)(d.mny,{style:{marginRight:10},color:"green"}),e.home.total_points.slice(5)]}):(0,n.jsx)("p",{children:e.home.total_points})]})]})})),F?(0,n.jsx)(c.Z,{openBet:F,setOpenBet:P,game_ids:T,game_over_ids:D,completed:a}):null]})})})})]})]})}}},function(e){e.O(0,[423,470,139,774,888,179],function(){return e(e.s=2091)}),_N_E=e.O()}]);