"use strict";(self.webpackChunkcom_jobara=self.webpackChunkcom_jobara||[]).push([[89],{5089:function(n,i,s){s.r(i),s.d(i,{default:function(){return k}});var e=s(7313),r=s(2135),c=s(6666),a=s.n(c),t=s(8418);s(7983),s(7616);var l=s(5554),o=(s(8625),s(6417));var m=function(n){return n.props,(0,e.useEffect)((function(){a()("#nav").hide()}),[]),a()((function(){a()("#nav1_s").hide(),a()("#nav1").click((function(){a()("#nav1_s").slideToggle(),a()("#nav2_s").slideUp(),a()("#nav3_s").slideUp(),a()("#nav4_s").slideUp(),a()("#nav5_s").slideUp(),a()("#nav6_s").slideUp(),a()("#nav7_s").slideUp()}))})),a()((function(){a()("#nav2_s").hide(),a()("#nav2").click((function(){a()("#nav2_s").slideToggle(),a()("#nav1_s").slideUp(),a()("#nav3_s").slideUp(),a()("#nav4_s").slideUp(),a()("#nav5_s").slideUp(),a()("#nav6_s").slideUp(),a()("#nav7_s").slideUp()}))})),a()((function(){a()("#nav3_s").hide(),a()("#nav3").click((function(){a()("#nav3_s").slideToggle(),a()("#nav1_s").slideUp(),a()("#nav2_s").slideUp(),a()("#nav4_s").slideUp(),a()("#nav5_s").slideUp(),a()("#nav6_s").slideUp(),a()("#nav7_s").slideUp()}))})),a()((function(){a()("#nav4_s").hide(),a()("#nav4").click((function(){a()("#nav4_s").slideToggle(),a()("#nav1_s").slideUp(),a()("#nav2_s").slideUp(),a()("#nav3_s").slideUp(),a()("#nav5_s").slideUp(),a()("#nav6_s").slideUp(),a()("#nav7_s").slideUp()}))})),a()((function(){a()("#nav5_s").hide(),a()("#nav5").click((function(){a()("#nav5_s").slideToggle(),a()("#nav1_s").slideUp(),a()("#nav2_s").slideUp(),a()("#nav3_s").slideUp(),a()("#nav4_s").slideUp(),a()("#nav6_s").slideUp(),a()("#nav7_s").slideUp()}))})),a()((function(){a()("#nav6_s").hide(),a()("#nav6").click((function(){a()("#nav6_s").slideToggle(),a()("#nav1_s").slideUp(),a()("#nav2_s").slideUp(),a()("#nav3_s").slideUp(),a()("#nav4_s").slideUp(),a()("#nav5_s").slideUp(),a()("#nav7_s").slideUp()}))})),a()((function(){a()("#nav7_s").hide(),a()("#nav7").click((function(){a()("#nav7_s").slideToggle(),a()("#nav1_s").slideUp(),a()("#nav2_s").slideUp(),a()("#nav3_s").slideUp(),a()("#nav4_s").slideUp(),a()("#nav5_s").slideUp(),a()("#nav6_s").slideUp()}))})),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{id:"header",children:(0,o.jsxs)("div",{id:"header_content",children:[(0,o.jsx)("h1",{className:"logo",children:(0,o.jsx)("a",{href:"/",children:(0,o.jsx)("img",{src:"img/web/main/logo.png",alt:""})})}),(0,o.jsxs)("div",{id:"top_right",children:[(0,o.jsxs)("div",{id:"menu-icon2",className:"all_menu",onClick:function(n){return a()("#nav").slideToggle(),void a()("#menu-icon2").toggleClass("open")},children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{className:"short"})]}),(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{id:"nav",children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:t.j.web_main_url,id:"nav5",children:"\ud648"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:t.j.web_intro_url,id:"nav1",children:"\ubc15\ub78c\ud68c\uc548\ub0b4"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{href:"",id:"nav2",children:"\ud504\ub85c\uadf8\ub7a8"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:t.j.web_signup_url,id:"nav3",children:"\uc0ac\uc804\ub4f1\ub85d"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:t.j.web_signupchk_url,id:"nav3",children:"\uc0ac\uc804\ub4f1\ub85d \ud655\uc778"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{onClick:function(){return n="https://lincplus.jejunu.ac.kr/programs/notice.htm?act=view&seq=1364",void window.open(n,"_blank","noopener, noreferrer");var n},id:"nav4",children:"\ucc38\uc5ec\uae30\uc5c5"})})]})})]})]})})})},d=s(8559),j=s(9439),p=s(4488),h=function(){var n=(0,l.v9)((function(n){return n.schedule.viewSchedule})),i=(0,e.useState)(""),s=(0,j.Z)(i,2),c=s[0],a=s[1],m=(0,e.useState)(""),d=(0,j.Z)(m,2),h=d[0],g=d[1],u=(0,e.useState)(""),x=(0,j.Z)(u,2),w=x[0],f=x[1],k=(0,e.useState)(""),v=(0,j.Z)(k,2),U=v[0],b=v[1],_=(0,e.useState)(""),C=(0,j.Z)(_,2),N=C[0],y=C[1],S=(0,e.useState)(""),Z=(0,j.Z)(S,2),E=Z[0],T=Z[1],I=(0,e.useState)(""),F=(0,j.Z)(I,2),J=F[0],L=F[1],O=(0,e.useState)(!1),z=(0,j.Z)(O,2),M=z[0],q=z[1];(0,e.useEffect)((function(){if(0!==Object.keys(n).length){var i=n.start_date.split("-");a(i[0]),g(i[1]),f(i[2]),b(n.start_week);var s=n.start_time.split(":");y(s[0]+":"+s[1]);var e=n.end_time.split(":");T(e[0]+":"+e[1]),L(n.spot)}}),[n]);var A=function(n){window.open(n,"_blank","noopener, noreferrer")};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{id:"mainvisual",children:(0,o.jsxs)("div",{className:"main_txt",children:[(0,o.jsx)("h2",{children:(0,o.jsx)("img",{src:"img/web/main/maintxt.png",alt:"\uc7a1\uc544\ub77c \ud398\uc2a4\ud2f0\ubc8c","data-aos":"zoom-in","data-aos-duration":"800",onLoad:function(n){q(!0)}})}),(0,o.jsxs)("p",{className:"txt1",children:[(0,o.jsx)("span",{children:"2023"})," \uccad\ub144\ucde8\uc5c5 \uc77c\uc790\ub9ac\ubc15\ub78c\ud68c"]}),M&&(c?(0,o.jsxs)("p",{className:"date",children:[c&&c,"."," ",(0,o.jsxs)("span",{className:"pink",children:[h&&h,"."," ",w&&w]})," ","(",U,")"," ",(0,o.jsxs)("span",{className:"blue",children:[N," ~ ",E]}),(0,o.jsx)("br",{}),J]}):(0,o.jsx)("div",{className:"date",style:{display:"flex",justifyContent:"center"},children:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(p.Z,{variant:"text",sx:{fontSize:"1.5rem"},width:350})}),(0,o.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(p.Z,{variant:"text",sx:{fontSize:"1rem",textAlign:"center"},width:300})})]})})),M&&(0,o.jsxs)("p",{className:"host",children:[(0,o.jsx)(r.rU,{onClick:function(){return A("https://www.moe.go.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host01.png",alt:"\uad50\uc721\ubd80"})}),(0,o.jsx)(r.rU,{onClick:function(){return A("https://www.nrf.re.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host02.png",alt:"\ud55c\uad6d\uc5f0\uad6c\uc7ac\ub2e8"})}),(0,o.jsx)(r.rU,{onClick:function(){return A("https://www.jeju.go.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host03.png",alt:"\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4"})}),(0,o.jsx)(r.rU,{onClick:function(){return A("https://www.jejunu.ac.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host04.png",alt:"\uc81c\uc8fc\ub300\ud559\uad50"})}),(0,o.jsx)(r.rU,{onClick:function(){return A("https://lincplus.jejunu.ac.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host05.png",alt:"\uc81c\uc8fc\ub300\ud559\uad50LINC\uc0ac\uc5c5\ub2e8"})}),(0,o.jsx)(r.rU,{href:"",children:(0,o.jsx)("img",{src:"img/web/main/host06.png",alt:"\ub300\ud559\uc77c\uc790\ub9ac\uc13c\ud130"})}),(0,o.jsx)(r.rU,{href:"",children:(0,o.jsx)("img",{src:"img/web/main/host07.png",alt:"\uc5b4\uc6b8\ub9bc"})}),(0,o.jsx)(r.rU,{onClick:function(){return A("http://www.jejuiucc.or.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host08.png",alt:"\uc81c\uc8fc\uc0b0\ud559\uc735\ud569\uc6d0"})}),(0,o.jsx)(r.rU,{onClick:function(){return A("https://www.chu.ac.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host09_1.png",alt:"\uc81c\uc8fc\ud55c\ub77c\ub300\ud559\uad50"})}),(0,o.jsx)(r.rU,{onClick:function(){return A("https://www.jtu.ac.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/host11.png",alt:"\uc81c\uc8fc\uad00\uad11\ub300\ud559\uad50"})})]}),(0,o.jsxs)("div",{className:"menu","data-aos":"fade-left","data-aos-auration":"800","data-aos-delay":"500",children:[(0,o.jsx)(r.rU,{to:t.j.web_intro_url,className:"m01",children:"\ubc15\ub78c\ud68c\uc548\ub0b4"}),(0,o.jsx)(r.rU,{to:"",className:"m02",children:"\ud504\ub85c\uadf8\ub7a8"}),(0,o.jsx)(r.rU,{to:t.j.web_signup_url,className:"m03",children:"\uc0ac\uc804\ub4f1\ub85d"}),(0,o.jsx)(r.rU,{onClick:function(){return A("https://lincplus.jejunu.ac.kr/programs/notice.htm?act=view&seq=1364")},className:"m04",children:"\ucc38\uc5ec\uae30\uc5c5"})]})]})})})},g=function(){var n=(0,l.v9)((function(n){return n.schedule.viewSchedule})),i=(0,e.useState)(""),s=(0,j.Z)(i,2),r=s[0],c=s[1],a=(0,e.useState)(""),t=(0,j.Z)(a,2),m=t[0],d=t[1],h=(0,e.useState)(""),g=(0,j.Z)(h,2),u=g[0],x=g[1],w=(0,e.useState)(""),f=(0,j.Z)(w,2),k=f[0],v=f[1],U=(0,e.useState)(""),b=(0,j.Z)(U,2),_=b[0],C=b[1];(0,e.useEffect)((function(){N()}),[n]);var N=function(){if(0!==Object.keys(n).length){c(n.start_date.replace("-",".")),d(n.start_week);var i=n.start_time.split(":");x(i[0]+":"+i[1]);var s=n.end_time.split(":");v(s[0]+":"+s[1]),C(n.spot)}};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"section01",children:[(0,o.jsxs)("h3",{"data-aos":"fade-up",children:[(0,o.jsx)("span",{children:"2023 \uc7a1\uc544\ub77c \ud398\uc2a4\ud2f0\ubc8c"}),"\uc5d0 \ub2f9\uc2e0\uc744 \ucd08\ub300\ud569\ub2c8\ub2e4!"]}),(0,o.jsx)("p",{className:"txt",children:"LINC 3.0 \uc0ac\uc5c5\ub2e8\uc5d0\uc11c \ub3c4\ub0b4 \uccad\ub144 \ubc0f \uc7ac\ud559\uc0dd\uc744 \ub300\uc0c1\uc73c\ub85c \uc591\uc9c8\uc758 \ucde8\uc5c5\ucc98 \ubc0f \uc131\uacf5 \ucde8\uc5c5\uc744 \uc704\ud574 \ub9de\ucda4\ud615 \ucde8\uc5c5 \uc815\ubcf4 \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud55c \ud504\ub85c\uadf8\ub7a8\uc73c\ub85c \uc5ec\ub7ec\ubd84\uc744 \uae30\ub2e4\ub9bd\ub2c8\ub2e4!"}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{className:"c01",children:[(0,o.jsx)("span",{children:"\ud589\uc0ac\uba85"}),"2023 \uc7a1\uc544\ub77c \ud398\uc2a4\ud2f0\ubc8c"]}),(0,o.jsxs)("li",{className:"c02",children:[(0,o.jsx)("span",{children:"\uc7a5 \uc18c"}),_]}),(0,o.jsxs)("li",{className:"c03",children:[(0,o.jsx)("span",{children:"\uc77c \uc2dc"}),r?(0,o.jsxs)(o.Fragment,{children:[r," (",m,") ",u," ~ ",k]}):(0,o.jsx)(p.Z,{variant:"text",sx:{fontSize:"1rem",textAlign:"center"},width:300})]}),(0,o.jsxs)("li",{className:"c04",children:[(0,o.jsx)("span",{children:"\ubb38 \uc758"}),"LINC3.0\uc0ac\uc5c5\ub2e8 \uc774\uc218\ubbfc 064-754-4470"]})]})]})})},u=function(){var n=function(n){window.open(n,"_blank","noopener, noreferrer")};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"section02",children:[(0,o.jsx)("div",{className:"bar01","data-aos":"fade-right","data-aos-delay":"400","data-aos-easing":"linear",children:(0,o.jsx)("img",{src:"img/web/main/bar_green.png",alt:""})}),(0,o.jsx)("div",{className:"bar02","data-aos":"fade-left","data-aos-delay":"800","data-aos-easing":"linear",children:(0,o.jsx)("img",{src:"img/web/main/bar_blue.png",alt:""})}),(0,o.jsx)("div",{className:"cloud",children:(0,o.jsx)("img",{src:"img/web/main/cloud_pink.png",alt:""})}),(0,o.jsxs)("div",{className:"program",children:[(0,o.jsx)("h3",{children:"\ud504\ub85c\uadf8\ub7a8"}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{className:"p01","data-aos":"flip-left",children:[(0,o.jsx)("span",{className:"num",children:"01"}),"\uc9c4\ub85c\ud0d0\uc0c9",(0,o.jsx)("span",{className:"icon",children:(0,o.jsx)("img",{src:"img/web/main/picon01.png",alt:""})})]}),(0,o.jsxs)("li",{className:"p02","data-aos":"flip-left","data-aos-delay":"300",children:[(0,o.jsx)("span",{className:"num",children:"02"}),"\uae30\uc5c5\ud0d0\uc0c9",(0,o.jsx)("span",{className:"icon",children:(0,o.jsx)("img",{src:"img/web/main/picon02.png",alt:""})})]}),(0,o.jsxs)("li",{className:"p03","data-aos":"flip-left","data-aos-delay":"600",children:[(0,o.jsx)("span",{className:"num",children:"03"}),"\uba74\uc811\uccb4\ud5d8",(0,o.jsx)("span",{className:"icon",children:(0,o.jsx)("img",{src:"img/web/main/picon03.png",alt:""})})]}),(0,o.jsxs)("li",{className:"p04","data-aos":"flip-left","data-aos-delay":"900",children:[(0,o.jsx)("span",{className:"num",children:"04"}),"NCS \ubaa8\uc758\uace0\uc0ac",(0,o.jsx)("span",{className:"icon",children:(0,o.jsx)("img",{src:"img/web/main/picon04.png",alt:""})})]}),(0,o.jsxs)("li",{className:"p05","data-aos":"flip-left","data-aos-delay":"1200",children:[(0,o.jsx)("span",{className:"num",children:"05"}),"\ud604\uc9c1\uc790 \ud1a0\ud06c\ucf58\uc11c\ud2b8",(0,o.jsx)("span",{className:"icon",children:(0,o.jsx)("img",{src:"img/web/main/picon05.png",alt:""})})]}),(0,o.jsxs)("li",{className:"p06","data-aos":"flip-left","data-aos-delay":"1500",children:[(0,o.jsx)("span",{className:"num",children:"06"}),"\uae30\ud0c0 \uc774\ubca4\ud2b8",(0,o.jsx)("span",{className:"icon",children:(0,o.jsx)("img",{src:"img/web/main/picon06.png",alt:""})})]})]})]}),(0,o.jsxs)("div",{className:"company",children:[(0,o.jsx)("h3",{children:"\ucc38\uc5ec\uae30\uc5c5"}),(0,o.jsxs)("div",{className:"logobox","data-aos":"fade-up","data-aos-duration":"800",children:[(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.jejuair.net/")},children:(0,o.jsx)("img",{src:"img/web/main/com01.png",alt:"\uc81c\uc8fc\ud56d\uacf5"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://jejusinh.nonghyup.com/user/indexMain.do?siteId=jejusinh")},children:(0,o.jsx)("img",{src:"img/web/main/com02.png",alt:"\ub18d\ud611\uc740\ud589"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.e-jejubank.com/JeJuBankInfo.do")},children:(0,o.jsx)("img",{src:"img/web/main/com03.png",alt:"\uc81c\uc8fc\uc740\ud589"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("")},children:(0,o.jsx)("img",{src:"img/web/main/com04.png",alt:"\uadf8\ub79c\ub4dc\ud558\uc57c\ud2b8 \uc81c\uc8fc"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://www.jwmarriottjeju.co.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com05.png",alt:"jw\uba54\ub9ac\uc5b4\ud2b8 \uc81c\uc8fc"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://kalhotel.co.kr ")},children:(0,o.jsx)("img",{src:"img/web/main/com06.png",alt:"\uce7c\ud638\ud154\uc11c\uadc0\ud3ec"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.shilla.net/jeju")},children:(0,o.jsx)("img",{src:"img/web/main/com07.png",alt:"\ub354\uc2e0\ub77c\uc81c\uc8fc"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.thepinx.co.kr")},children:(0,o.jsx)("img",{src:"img/web/main/com08.png",alt:"skpinx"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.xslab.co.kr/default/")},children:(0,o.jsx)("img",{src:"img/web/main/com09.png",alt:"xslab"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.goorm.io/")},children:(0,o.jsx)("img",{src:"img/web/main/com10.png",alt:"goorm"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://itnewcorp.com")},children:(0,o.jsx)("img",{src:"img/web/main/com11.png",alt:"itnew"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.wayplus.co.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com12.png",alt:"wayplus"})}),(0,o.jsx)(r.rU,{children:(0,o.jsx)("img",{src:"img/web/main/com13.png",alt:"leaflog"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.tilon.com/home")},children:(0,o.jsx)("img",{src:"img/web/main/com14.png",alt:"tilonsoft"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://www.intothecafe.co.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com15.png",alt:"\ub18d\uc5c5\ud68c\uc0ac\ubc95\uc778\uc778\ud22c\uc8fc\uc2dd\ud68c\uc0ac"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://www.hallasan.co.kr/index.php")},children:(0,o.jsx)("img",{src:"img/web/main/com16.png",alt:"\ud55c\ub77c\uc0b0\uc18c\uc8fc"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://www.jejumayu.com/")},children:(0,o.jsx)("img",{src:"img/web/main/com17.png",alt:"\uc81c\uc8fc\ub9c8\uc720\u321c"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://pitterpetter.com/")},children:(0,o.jsx)("img",{src:"img/web/main/com18.png",alt:"pitterpetter"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://kcg.go.kr/jejucgh/main.do")},children:(0,o.jsx)("img",{src:"img/web/main/com19.png",alt:"\ud574\uc591\uacbd\ucc30\uccad"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.kaflix.com/")},children:(0,o.jsx)("img",{src:"img/web/main/com20.png",alt:"kaflix"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.ncf.or.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com21.png",alt:"\ub125\uc2a4\ud2b8\ucc4c\ub9b0\uc9c0"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://jejusquare.kr")},children:(0,o.jsx)("img",{src:"img/web/main/com22.png",alt:"JEJUSQUARE"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.981park.com/")},children:(0,o.jsx)("img",{src:"img/web/main/com23.png",alt:"\ubaa8\ub178\ub9ac\uc2a4\uc81c\uc8fc\ud30c\ud06c(981\ud30c\ud06c)"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://mombly.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com24.png",alt:"MOMBLY"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.deslumieres.co.kr/bunker")},children:(0,o.jsx)("img",{src:"img/web/main/com25.png",alt:"\ube5b\uc758 \ubc99\ucee4/ (\uc8fc)\ud2f0\ubaa8\ub137"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://www.jejuenergy.or.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com26.png",alt:"\uc81c\uc8fc\uc5d0\ub108\uc9c0\uacf5\uc0ac"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.komipo.co.kr/kor/main/main.do")},children:(0,o.jsx)("img",{src:"img/web/main/com27.png",alt:"\ud55c\uad6d\uc911\ubd80\ubc1c\uc804"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://home.kepco.co.kr ")},children:(0,o.jsx)("img",{src:"img/web/main/com28.png",alt:"\ud55c\uad6d\uc804\ub825"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://kcg.go.kr/jejucgh/main.do")},children:(0,o.jsx)("img",{src:"img/web/main/com29.png",alt:"KT"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.kctvjeju.com/")},children:(0,o.jsx)("img",{src:"img/web/main/com30.png",alt:"KCTV"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.neople.co.kr")},children:(0,o.jsx)("img",{src:"img/web/main/com31.png",alt:"NEOPLE"})}),(0,o.jsx)(r.rU,{children:(0,o.jsx)("img",{src:"img/web/main/com32.png",alt:"JEJUINDRONE"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.nanoomenergy.com/")},children:(0,o.jsx)("img",{src:"img/web/main/com33.png",alt:"\ub098\ub214\uc5d0\ub108\uc9c0"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.daeeun.net/")},children:(0,o.jsx)("img",{src:"img/web/main/com34.png",alt:"\ub300\uc740\uacc4\uc804"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.si-imaging.com/kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com35.png",alt:"SIIS"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://www.windetect.co.kr/")},children:(0,o.jsx)("img",{src:"img/web/main/com36.png",alt:"WINDETECT"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.nia.or.kr/site/nia_kor/main.do")},children:(0,o.jsx)("img",{src:"img/web/main/com37.png",alt:"\ud55c\uad6d\uc9c0\ub2a5\uc815\ubcf4\uc0ac\ud68c\uc9c4\ud765\uc6d0"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("ijtohr@ijto.or.kr")},children:(0,o.jsx)("img",{src:"img/web/main/com38.png",alt:"\uc81c\uc8fc\uad00\uad11\uacf5\uc0ac"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.jpdc.co.kr/index.htm")},children:(0,o.jsx)("img",{src:"img/web/main/com39.png",alt:"\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4\uac1c\ubc1c\uacf5\uc0ac"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://www.nps.or.kr")},children:(0,o.jsx)("img",{src:"img/web/main/com40.png",alt:"\uad6d\ubbfc\uc5f0\uae08\uacf5\ub2e8"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("https://www.jdcenter.com/main.cs")},children:(0,o.jsx)("img",{src:"img/web/main/com41.png",alt:"\uc81c\uc8fc\uad6d\uc81c\uc790\uc720\ub3c4\uc2dc\uac1c\ubc1c\uc13c\ud130"})}),(0,o.jsx)(r.rU,{onClick:function(){return n("http://jpmeng.co.kr/index.php")},children:(0,o.jsx)("img",{src:"img/web/main/com42.png",alt:"JPM"})})]})]})]})})},x=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{id:"container",children:[(0,o.jsx)(g,{}),(0,o.jsx)(u,{}),(0,o.jsx)("br",{})]})})},w=s(2789),f=s.n(w);var k=function(){return(0,e.useEffect)((function(){f().init()})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{}),(0,o.jsx)(h,{}),(0,o.jsx)(x,{}),(0,o.jsx)(d.Z,{})]})}}}]);