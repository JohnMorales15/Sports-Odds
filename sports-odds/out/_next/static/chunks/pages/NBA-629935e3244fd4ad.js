(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{5912:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/NBA",function(){return a(6427)}])},6427:function(e,s,a){"use strict";a.r(s);var r=a(5893),i=a(6154),n=a(7294),d=a(239),l=a.n(d),c=a(183);a(1163);var m=a(2963),o=a.n(m);s.default=function(){let[e,s]=(0,n.useState)(!0),[a,d]=(0,n.useState)([]),[m,t]=(0,n.useState)([]),[h,g]=(0,n.useState)([]),[j,x]=(0,n.useState)([]),[_,p]=(0,n.useState)(!1),[N,v]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=[];i.Z.get("https://statmilk.bleacherreport.com/api/scores/carousel?league=NBA&team=none&carousel_context=league&tz=-25200&appversion=500.0").then(e=>{void 0===e.data.game_groups[0]?p(!0):"In Progress"===e.data.game_groups[0].name&&"Completed"===e.data.game_groups[1].name?(t(e.data.game_groups[0]),d(e.data.game_groups[1]),g(e.data.game_groups[2])):"Completed"===e.data.game_groups[0].name?(d(e.data.game_groups[0]),g(e.data.game_groups[1])):"In Progress"===e.data.game_groups[0].name&&"Upcoming"===e.data.game_groups[1].name?(t(e.data.game_groups[0]),g(e.data.game_groups[1])):g(e.data.game_groups[0])}).then(()=>{i.Z.get("http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news").then(e=>{x(e.data.articles),s(!1)})}),i.Z.get("https://sports-odds.herokuapp.com/").then(e=>{console.log(e.data)}),o().forEach(s=>{"NBA"===s.League&&e.push(s)}),v(e)},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Z,{}),(0,r.jsx)("div",{className:l().scoreboard,style:_?{justifyContent:"center"}:null,children:e?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("p",{children:"Data is loading..."})}):(0,r.jsx)(r.Fragment,{children:_?(0,r.jsx)("div",{className:l().offseason,children:(0,r.jsx)("p",{children:"It is currently the offseason."})}):(0,r.jsxs)(r.Fragment,{children:[void 0!==m.games?(0,r.jsx)(r.Fragment,{children:m.games.map(e=>(0,r.jsxs)("div",{className:l().games,children:[(0,r.jsx)("div",{className:l().date,children:e.game_progress.primary}),(0,r.jsx)("div",{className:l().time,children:e.game_progress.header}),(0,r.jsxs)("div",{className:l().teamContainer,children:[(0,r.jsx)("div",{className:l().logoDiv,children:(0,r.jsx)("img",{className:l().logo,src:e.team_one.logo})}),(0,r.jsx)("div",{className:l().teamName,children:e.team_one.abbrev}),(0,r.jsx)("div",{className:l().record,children:e.team_one.record}),(0,r.jsx)("span",{children:e.team_one.score})]}),(0,r.jsxs)("div",{className:l().teamContainer,children:[(0,r.jsx)("div",{className:l().logoDiv,children:(0,r.jsx)("img",{className:l().logo,src:e.team_two.logo})}),(0,r.jsx)("div",{className:l().teamName,children:e.team_two.abbrev}),(0,r.jsx)("div",{className:l().record,children:e.team_two.record}),(0,r.jsx)("span",{children:e.team_one.score})]})]},e.id))}):null,void 0!==a.games?(0,r.jsx)(r.Fragment,{children:a.games.map(e=>(0,r.jsxs)("div",{className:l().games,children:[(0,r.jsx)("div",{className:l().date,children:e.game_progress.primary}),(0,r.jsx)("div",{className:l().time,children:e.game_progress.header}),(0,r.jsxs)("div",{className:l().teamContainer,children:[(0,r.jsx)("div",{className:l().logoDiv,children:(0,r.jsx)("img",{className:l().logo,src:e.team_one.logo})}),(0,r.jsx)("div",{className:l().teamName,children:e.team_one.abbrev}),(0,r.jsx)("div",{className:l().record,children:e.team_one.record}),(0,r.jsx)("span",{children:e.team_one.score})]}),(0,r.jsxs)("div",{className:l().teamContainer,children:[(0,r.jsx)("div",{className:l().logoDiv,children:(0,r.jsx)("img",{className:l().logo,src:e.team_two.logo})}),(0,r.jsx)("div",{className:l().teamName,children:e.team_two.abbrev}),(0,r.jsx)("div",{className:l().record,children:e.team_two.record}),(0,r.jsx)("span",{children:e.team_one.score})]})]},e.id))}):null,void 0!==h.games?(0,r.jsx)(r.Fragment,{children:h.games.map(e=>(0,r.jsxs)("div",{className:l().games,children:[(0,r.jsx)("div",{className:l().date,children:e.game_progress.primary}),(0,r.jsx)("div",{className:l().time,children:e.game_progress.header}),(0,r.jsxs)("div",{className:l().teamContainer,children:[(0,r.jsx)("div",{className:l().logoDiv,children:(0,r.jsx)("img",{className:l().logo,src:e.team_one.logo})}),(0,r.jsx)("div",{className:l().teamName,children:e.team_one.abbrev}),(0,r.jsx)("div",{className:l().record,children:e.team_one.record}),(0,r.jsx)("span",{children:e.team_one.score})]}),(0,r.jsxs)("div",{className:l().teamContainer,children:[(0,r.jsx)("div",{className:l().logoDiv,children:(0,r.jsx)("img",{className:l().logo,src:e.team_two.logo})}),(0,r.jsx)("div",{className:l().teamName,children:e.team_two.abbrev}),(0,r.jsx)("div",{className:l().record,children:e.team_two.record}),(0,r.jsx)("span",{children:e.team_one.score})]})]},e.id))}):null]})})}),(0,r.jsxs)("div",{className:l().news,children:[(0,r.jsx)("header",{className:"newsHeader",children:"NBA News"}),j.map(e=>(0,r.jsxs)("div",{className:l().newInfo,children:[(0,r.jsx)("header",{children:e.headline}),(0,r.jsx)("a",{href:e.links.web.href,children:(0,r.jsx)("img",{className:l().Pic,alt:"randomnews",src:e.images[0].url})}),(0,r.jsx)("p",{children:e.description})]},e.headline))]}),(0,r.jsx)("div",{className:l().odds_div,children:(0,r.jsxs)("div",{className:l().odds,children:[(0,r.jsx)("h1",{className:l().upcoming,children:"Upcoming Game Odds"}),N.map(e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:l().team_info,children:[(0,r.jsxs)("div",{className:l().team_header,children:[(0,r.jsx)("p",{style:{minWidth:180}}),(0,r.jsx)("p",{style:{minWidth:72},children:"Money Line"}),(0,r.jsx)("p",{style:{minWidth:120},children:"Point Spread"}),(0,r.jsx)("p",{style:{minWidth:120},children:"Total Points"})]}),(0,r.jsxs)("div",{className:l().team_format,children:[(0,r.jsxs)("div",{className:l().name_logo,children:[(0,r.jsx)("img",{className:l().odds_logo,src:e.Away_logo}),(0,r.jsxs)("div",{className:l().name_record,children:[(0,r.jsx)("h4",{children:e.Away_Team}),(0,r.jsx)("span",{children:e.Away_Record}),(0,r.jsx)("span",{style:{paddingTop:5},children:"@"})]})]}),(0,r.jsx)("p",{children:e.Away_Money_line}),(0,r.jsx)("p",{children:e.Away_Point_spread}),(0,r.jsx)("p",{children:e.Away_Total_points})]}),(0,r.jsxs)("div",{className:l().team_format,children:[(0,r.jsxs)("div",{className:l().name_logo,children:[(0,r.jsx)("img",{className:l().odds_logo,src:e.Home_logo}),(0,r.jsxs)("div",{className:l().name_record,children:[(0,r.jsx)("h4",{children:e.Home_Team}),(0,r.jsx)("span",{children:e.Home_Record})]})]}),(0,r.jsx)("p",{children:e.Home_Money_line}),(0,r.jsx)("p",{children:e.Home_Point_spread}),(0,r.jsx)("p",{children:e.Home_Total_points})]})]})}))]})})]})}},1163:function(e,s,a){a(6885)}},function(e){e.O(0,[664,154,364,774,888,179],function(){return e(e.s=5912)}),_N_E=e.O()}]);