(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=a(21),l=a.n(i),u=a(28),s=a(16),m=a(17),d=a(20),p=a(18),f=a(6),h=a(119),E=a(67),g=a(68),b=a(69),v=a(70),y=a(71),w=a(72),j=a(73),k=(a(74),a(75),a(76),a(77),a(78)),x=(a(79),function(e){var t={color:Object(f.c)((function(e){return e.theme.color}))};return r.a.createElement("div",{className:"navbar-container",style:t},r.a.createElement("div",{id:"brand"},r.a.createElement("div",null,r.a.createElement("img",{src:k,alt:"icon",width:"100%"})),r.a.createElement("h1",null,"Weather")),r.a.createElement("div",{id:"media-social"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/alee0510",style:t},"alee0510")),r.a.createElement("li",null,r.a.createElement("svg",{"enable-background":"new 0 0 24 24",height:"32",viewBox:"0 0 24 24",width:"32",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z",fill:t.color}))))))}),O=a(120),T=a(42),N=a.n(T),_="http://openweathermap.org/img/wn/",C=(a(80),function(e){return Math.round(1.8*e+32)}),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleToFahrenheit=function(e){var t=n.state.temp,a=n.props.current,r=t||Math.round(a.temp-273.15);n.setState({temp:C(r),active:1})},n.handleToCelcius=function(e){n.setState((function(e){return{temp:(t=e.temp,Math.round(5/9*(t-32))),active:0};var t}))},n.state={temp:"",active:0},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.weather,a=e.current,n=e.location,c=e.color,o=this.state,i=o.temp,l=o.active;return r.a.createElement("div",{className:"weather",style:{color:c}},r.a.createElement("div",{className:"temp-icon"},r.a.createElement("img",{src:_+(t&&t.icon)+"@4x.png",alt:"weather-icon"}),r.a.createElement("div",{className:"temp-info"},r.a.createElement("div",{className:"location"},r.a.createElement(N.a,{fontSize:"small"}),r.a.createElement("h3",null,n)),r.a.createElement("div",{className:"temp"},r.a.createElement("h1",null,i||a&&Math.round(a.temp-273.15)),r.a.createElement("div",{id:"button-container"},r.a.createElement(O.a,{id:"button",disabled:!l,style:{fontSize:l?"20px":"32px",color:c},onClick:this.handleToCelcius},"C"),r.a.createElement(O.a,{id:"button",disabled:!!l,style:{fontSize:l?"32px":"20px",color:c},onClick:this.handleToFahrenheit},"F"))))),r.a.createElement("h1",null,t&&"".concat(t.main,", ").concat(t.description),"."))}}]),a}(r.a.Component),M=Object(f.b)((function(e){var t=e.weather,a=e.theme;return{weather:t.weather,current:t.current,location:t.location,color:a.color}}))(S);a(82);var D=function(e){return r.a.createElement("div",{className:"acrylic ".concat(e.color," ").concat(e.opacity," ").concat(e.radius," ").concat(e.shadow),style:e.style},e.children)},H=(a(83),{margin:"1% 1%"}),W=function(e){var t=Object(f.c)((function(e){return e.weather.current})),a=Object(f.c)((function(e){return e.theme.main}));return r.a.createElement("div",{className:"mini-card"},r.a.createElement(D,{color:a,radius:"r10",opacity:"o60",style:H},"Feel like ",t&&Math.round(t.feels_like-273.15)," ",r.a.createElement("sup",null,"o")," C"),r.a.createElement(D,{color:a,radius:"r10",opacity:"o60",style:H},"Pressure ",t&&t.pressure/1e3," bar"),r.a.createElement(D,{color:a,radius:"r10",opacity:"o60",style:H},"Humidity ",t&&t.humidity," %"),r.a.createElement(D,{color:a,radius:"r10",opacity:"o60",style:H},"Visibility ",t&&t.visibility/1e3," km"),r.a.createElement(D,{color:a,radius:"r10",opacity:"o60",style:H},"Wind ",t&&t.wind_speed," m/s"),r.a.createElement(D,{color:a,radius:"r10",opacity:"o60",style:H},"Clouds ",t&&t.clouds," %"))},z=(a(84),function(e){var t=new Date(1e3*e).toDateString().split(" ");return"".concat(t[0]," ").concat(t[2])}),A=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).miniCard=function(t){return(e.props.daily||[]).map((function(t,a){return r.a.createElement(D,{key:a,color:e.props.main,radius:"r15",opacity:"o70",style:F},r.a.createElement("h2",null,z(t.dt)),r.a.createElement("img",{src:_+(t.weather&&t.weather[0].icon)+"@2x.png",alt:"daily-icon-".concat(a)}),r.a.createElement("div",{className:"temp"},r.a.createElement("h4",{id:"max"},t.temp&&Math.round(t.temp.max-273.15)," ",r.a.createElement("sup",null,"o")),r.a.createElement("h4",null,t.temp&&Math.round(t.temp.min-273.15)," ",r.a.createElement("sup",null,"o"))),r.a.createElement("h3",null,t.weather&&t.weather[0].description))}))},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"forecast"},this.miniCard())}}]),a}(r.a.Component),F={width:150,padding:"10px 16px"},R=Object(f.b)((function(e){var t=e.weather,a=e.theme;return{daily:t.daily,main:a.main}}))(A),G=(a(85),a(46)),I=a.n(G),B=a(47),J=a.n(B),L=a(48),P=a.n(L),V=a(49),q=a.n(V),K=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(I.a,{id:"icon"}),r.a.createElement("a",{href:"https://twitter.com/a_lee0510"},"Twitter"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(J.a,{id:"icon"}),r.a.createElement("a",{href:"https://www.instagram.com/a_lee0510/"},"Instagram"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(P.a,{id:"icon"}),r.a.createElement("a",{href:"https://web.facebook.com/alee0510/"},"Facebook"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement(q.a,{id:"icon"}),r.a.createElement("a",{href:"https://github.com/alee0510"},"GitHub")))))},Q=a(50),U=a.n(Q),X=(a(103),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getLocation=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,r=t.longitude;n.props.getWeather("lat=".concat(a,"&lon=").concat(r))})):console.log("navigation doesn't supported")},n.state={styles:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLocation();case 2:return e.next=4,this.props.setTheme();case 4:return e.next=6,this.setState({styles:{backgroundImage:"url(".concat(this.props.background,")")}});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.location,n=e.color;return t&&!a?r.a.createElement("div",{className:"loading"},r.a.createElement(h.a,null)):r.a.createElement("div",{className:"main-container",style:this.state.styles},r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement(W,null),r.a.createElement("div",{className:"daily-forecast"},r.a.createElement("h1",{style:{color:n}},"Daily"),r.a.createElement(R,null)),r.a.createElement(K,null))}}]),a}(r.a.Component)),Y=Object(f.b)((function(e){var t=e.theme,a=e.weather;return{background:t.background,color:t.color,loading:a.loading,loacation:a.loacation}}),{getWeather:function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a){var n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START"}),n="https://api.openweathermap.org/data/2.5/onecall?"+e+"&exclude=hourly&appid=fd2395620d3afcb1f6d8ac8b16d8b34a",t.next=5,U.a.get(n);case 5:r=t.sent,c=r.data,a({type:"GET_WEATHER",payload:c}),a({type:"END"}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),a({type:"END"});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},setTheme:function(){var e=(new Date).getHours(),t={main:"",background:"",color:""};return e>1&&e<=4?(t.main="dark",t.background=j,t.color="#ffffff"):e>4&&e<=6.5?(t.main="dark",t.background=E,t.color="#ffffff"):e>6.5&&t<=10?(t.main="light",t.background=g,t.color="#2d3436"):e>10&&e<=15?(t.main="light",t.background=b,t.color="#2d3436"):e>15&&e<=17.5?(t.main="dark",t.background=v,t.color="#ffffff"):e>17.5&&e<=22?(t.main="dark",t.background=y,t.color="#ffffff"):(t.mian="dark",t.background=w,t.color="#ffffff"),{type:"SET_THEME",payload:t}}})(X),Z=(a(104),a(13)),$=a(51),ee=a(52),te=a(14),ae={location:"",current:{},weather:{},daily:[],loading:!0},ne={},re=Object(Z.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WEATHER":return Object(te.a)(Object(te.a)({},e),{},{location:t.payload.timezone,current:t.payload.current,weather:t.payload.current&&t.payload.current.weather[0],daily:t.payload.daily});case"START":return Object(te.a)(Object(te.a)({},e),{},{loading:!0});case"END":return Object(te.a)(Object(te.a)({},e),{},{loading:!1});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME":return Object(te.a)({},t.payload);default:return e}}}),ce=Object(Z.createStore)(re,{},Object($.composeWithDevTools)(Object(Z.applyMiddleware)(ee.a)));o.a.render(r.a.createElement(f.a,{store:ce},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null))),document.getElementById("root"))},56:function(e,t,a){e.exports=a(105)},67:function(e,t,a){e.exports=a.p+"static/media/early_morning.c0f9ea1a.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/morning.e9ae2b80.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/day.00091c43.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/afternoon_1.7258456b.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/early_night.9e481140.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/mid_night.f311badb.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/after_mid_night_2.3e6ac49d.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/noise.84b285bf.png"},75:function(e,t,a){e.exports=a.p+"static/media/github.c4cfcd0f.svg"},76:function(e,t,a){e.exports=a.p+"static/media/instagram.d9704a04.svg"},77:function(e,t,a){e.exports=a.p+"static/media/twitter.a6190964.svg"},78:function(e,t,a){e.exports=a.p+"static/media/weather_icon.2816e1b9.svg"},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.f420790d.chunk.js.map