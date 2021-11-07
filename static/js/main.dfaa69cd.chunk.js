(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{199:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),i=c(73),s=c.n(i),o=(c(90),c(7)),r=c(85),d=c(6),l=c(1),j=function(e){var t=e.city,c=e.handleChange,n=e.matches,i=e.handleClick,s=e.handleBlur,r=e.data,j=Object(a.useState)("no-border"),h=Object(o.a)(j,2),u=h[0],b=h[1];return Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsx)("button",{className:"search-button",onClick:function(){b("border"===u?"no-border":"border")},children:Object(l.jsx)(d.e,{className:"icon",size:15})}),Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{type:"text",value:t,placeholder:"".concat(r.location.name,", ").concat(r.location.country),className:u,onChange:function(e){return c(e.target.value)},onBlur:function(){return s()}}),Object(l.jsx)("button",{className:"clear-button",onClick:function(){return s()},children:Object(l.jsx)(d.g,{size:13})}),n&&Object(l.jsx)("div",{className:"matches-container",children:n.map((function(e,t){return Object(l.jsx)("div",{onClick:function(e){return i(e)},children:e.name},t)}))})]})]})},h=c(17),u=c.n(h),b=function(e){var t=e.data,c=e.tempUnit,a=t.forecast.forecastday[0],n=u()(t.location.localtime,"YYYY-MM-DD HH:mm").format("dddd, MMM DD, YYYY");return Object(l.jsxs)("div",{className:"current",children:[Object(l.jsxs)("div",{className:"temp",children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)("img",{src:t.current.condition.icon,alt:"icon"})}),Object(l.jsx)("div",{children:Object(l.jsxs)("h1",{children:[Math.round(t.current["temp_".concat(c)]),"\xb0",c.toUpperCase()]})})]}),Object(l.jsx)("div",{className:"condition",children:t.current.condition.text}),Object(l.jsx)("div",{className:"date",children:n}),Object(l.jsxs)("div",{className:"min-max",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)(d.b,{})," ",Math.round(a.day["maxtemp_".concat(c)]),"\xb0"]}),"\xa0\xa0\xa0",Object(l.jsxs)("span",{children:[Object(l.jsx)(d.a,{})," ",Math.round(a.day["mintemp_".concat(c)]),"\xb0"]})]})]})},m=function(e){var t=e.data,c=e.tempUnit,a=t.forecast.forecastday[0].hour,n=t.forecast.forecastday[1].hour,i=u()(t.location.localtime,"YYYY-MM-DD HH:mm").format("HH");return Object(l.jsxs)("div",{className:"hourly-container",children:[Object(l.jsx)("h2",{children:"Hourly"}),Object(l.jsxs)("div",{className:"scroll-container",children:[Object(l.jsx)("button",{onClick:function(){document.querySelector(".hourly")&&(document.querySelector(".hourly").scrollLeft-=450)},children:Object(l.jsx)(d.c,{})}),Object(l.jsxs)("div",{className:"hourly",children:[a.map((function(e,t){return Object(l.jsxs)("div",{className:"hour",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:"condition",src:e.condition.icon})}),Object(l.jsxs)("div",{className:"temp",children:[Math.round(e["temp_".concat(c)]),"\xb0"]}),Object(l.jsx)("div",{className:"time",children:t===i?"Now":12===t?"12PM":t<12?t+"AM":t-12+"PM"})]},t)})).filter((function(e,t){return t>=i})),n.map((function(e,t){return Object(l.jsxs)("div",{className:"hour",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{alt:"condition",src:e.condition.icon})}),Object(l.jsxs)("div",{className:"temp",children:[Math.round(e["temp_".concat(c)]),"\xb0"]}),Object(l.jsx)("div",{className:"time",children:12===t?"12PM":0===t?"12AM":t<12?t+"AM":t-12+"PM"})]},t)})).filter((function(e,t){return t<i}))]}),Object(l.jsx)("button",{onClick:function(){document.querySelector(".hourly")&&(document.querySelector(".hourly").scrollLeft+=450)},children:Object(l.jsx)(d.d,{})})]})]})},x=function(e){var t=e.data,c=e.tempUnit,a=t.forecast.forecastday.slice(1);a.push(t.forecast.forecastday[1]),a.push(t.forecast.forecastday[0]),a.push(t.forecast.forecastday[2]);var n=u()(t.location.localtime,"YYYY-MM-DD HH:mm");return Object(l.jsxs)("div",{className:"daily-container",children:[Object(l.jsx)("h2",{children:"Daily"}),Object(l.jsx)("div",{className:"daily",children:a.map((function(e,t){return Object(l.jsxs)("div",{className:"day",children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)("img",{alt:"condition",src:e.day.condition.icon})}),Object(l.jsxs)("div",{className:"date-and-condition",children:[Object(l.jsx)("div",{className:"date",children:n.clone().add(t+1,"d").format("dddd")}),Object(l.jsx)("div",{className:"condition",children:e.day.condition.text})]}),Object(l.jsxs)("div",{className:"rain",style:{visibility:e.day.daily_chance_of_rain>0?"visible":"hidden"},children:[Object(l.jsx)(d.h,{className:"rain"}),e.day.daily_chance_of_rain,"%"]}),Object(l.jsxs)("div",{className:"min-max",children:[Object(l.jsxs)("span",{children:[Math.round(e.day["mintemp_".concat(c)]),"\xb0"]}),"\xa0",Math.round(e.day["maxtemp_".concat(c)]),"\xb0"]})]},t)}))})]})},f=c(49),O=c.n(f),p=c(81),v=function(e){var t=e.icon,c=e.data,a=e.text,n=e.bgColor;return Object(l.jsxs)("div",{className:"condition",children:[Object(l.jsx)("div",{className:"icon-wrapper",style:{backgroundColor:n},children:t}),Object(l.jsxs)("div",{className:"condition-data",children:[Object(l.jsx)("div",{children:c}),Object(l.jsx)("div",{className:"label",children:a})]})]})},y=c(5),N=c(11),g=c(84),C=function(e){var t=e.color,c=e.value,a=e.Particle;return Object(l.jsxs)("div",{className:"particle",children:[Object(l.jsx)("div",{style:{fontSize:"1.2em",borderBottom:"2px solid ".concat(t)},children:c}),Object(l.jsx)("div",{children:a})]})},M=function(e){var t,c,a=e.quality,n=a.aqi||"-",i="#1cb422",s="rgb(254,254,0)",o="rgb(255,126,0)",r="rgb(255,21,21)",d="rgb(176,58,117)",j="rgba(0,0,0,.4)",h="#f3f3f3",u=["pm25","pm10","co","no2","o3"].reduce((function(e,t){var c;return Object(N.a)(Object(N.a)({},e),{},Object(y.a)({},t,(null===(c=a.iaqi)||void 0===c?void 0:c[t])?a.iaqi[t].v:"-"))}),{}),b=function(e){return e<51&&["Good","Air quality is satisfactory, and air pollution poses little or no risk."]||e<101&&["Moderate","Air quality is acceptable, there may be a risk for  those who are sensitive to air pollution."]||e<151&&["Unhealthy for sensitive groups","Members of sensitive groups may experience health effects."]||e<201&&["Unhealthy for sensitive groups","Members of sensitive groups may experience health effects."]||e<301&&["Very Unhealthy","Health alert: The risk of health effects is increased for everyone."]||["Air quality index for this city is not available right now","Data not available"]},m=function(e){return e<51&&i||e<101&&s||e<151&&o||e<201&&r||e<301&&d||j},x={datasets:[{data:[1,1,1,1,1,1],backgroundColor:["white","Good"===b(n)[0]?i:h,"Moderate"===b(n)[0]?s:h,"Unhealthy for sensitive groups"===b(n)[0]?o:h,"Unhealthy"===b(n)[0]?r:h,"Very Unhealthy"===b(n)[0]?d:h],borderWidth:0,rotation:150}]};return Object(l.jsxs)("div",{className:"air-quality-container",children:[Object(l.jsx)("h2",{children:"Air Quality"}),Object(l.jsxs)("div",{className:"air-quality",children:[Object(l.jsxs)("div",{className:"quality-index",children:[Object(l.jsxs)("div",{className:"icon-wrapper",children:[Object(l.jsx)(g.a,{data:x,options:{cutout:"85%",events:[],plugins:{tooltip:{enabled:!1}}}}),Object(l.jsxs)("div",{className:"donut-overlay",children:[Object(l.jsx)("div",{className:"index",children:n}),Object(l.jsx)("div",{className:"label",children:"AQI"})]})]}),Object(l.jsxs)("div",{className:"index-data",children:[Object(l.jsx)("div",{className:"index-label",children:b(n)[0]}),Object(l.jsx)("div",{className:"index-text",children:b(n)[1]})]})]}),Object(l.jsxs)("div",{className:"particles",children:[Object(l.jsx)(C,{Particle:"pm25",value:u.pm25,color:m(u.pm25)}),Object(l.jsx)(C,{Particle:"pm10",value:u.pm10,color:(c=u.pm10,c<40&&i||c<80&&s||c<120&&o||c<300&&r||c>=300&&d||j)}),Object(l.jsx)(C,{Particle:"no2",value:u.no2,color:m(u.no2)}),Object(l.jsx)(C,{Particle:"O3",value:u.o3,color:m(u.o3)}),Object(l.jsx)(C,{Particle:"CO",value:u.co,color:(t=u.co,t<9&&i||t<10&&s||t>=10&&o||j)})]})]})]})},k=c(51),w=c(52),q=function(e){var t=e.data,c=t.forecast.forecastday[0],n=Object(a.useState)(""),i=Object(o.a)(n,2),s=i[0],r=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(O.a.mark((function e(){var c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.waqi.info/feed/".concat(t.location.name,"/?token=59279c91ec4c2ff95a7957e57269b2540e194f9a")).then((function(e){return e.json()}));case 2:return c=e.sent,e.next=5,fetch("https://api.waqi.info/feed/".concat(t.location.region,"/?token=59279c91ec4c2ff95a7957e57269b2540e194f9a")).then((function(e){return e.json()}));case 5:a=e.sent,r("ok"===c.status&&c.data||"ok"===a.status&&a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(l.jsxs)("div",{className:"conditions-container",children:[Object(l.jsx)("h2",{children:"Conditions"}),Object(l.jsxs)("div",{className:"conditions",children:[Object(l.jsx)(v,{icon:Object(l.jsx)(d.i,{size:18,style:{color:"#42cc6a"}}),data:"".concat(Math.round(t.current.wind_kph)," km/h"),text:"Wind",bgColor:"#aff5b1"}),Object(l.jsx)(v,{icon:Object(l.jsx)(k.b,{size:30,style:{color:"#43a4e4"}}),data:"".concat(c.day.daily_chance_of_rain,"%"),text:"Rain",bgColor:"#add6f5"}),Object(l.jsx)(v,{icon:Object(l.jsx)(k.a,{size:30,color:"#adafb6"}),data:"".concat(t.current.humidity,"%"),text:"Humidity",bgColor:"#eeeeee"}),Object(l.jsx)(v,{icon:Object(l.jsx)(d.f,{size:20,color:"#ddb458"}),data:t.current.uv,text:"UV Index",bgColor:"#f7ddac"}),Object(l.jsx)(v,{icon:Object(l.jsx)(w.a,{size:30,color:"#E68319"}),data:c.astro.sunrise.slice(0,5),text:"Sunrise"}),Object(l.jsx)(v,{icon:Object(l.jsx)(w.b,{size:30,color:"#F2A807"}),data:c.astro.sunset.slice(0,5),text:"Sunset"}),Object(l.jsx)(M,{quality:s})]})]})};var _=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),d=s[0],h=s[1],u=Object(a.useState)([]),f=Object(o.a)(u,2),O=f[0],p=f[1],v=Object(a.useState)("c"),y=Object(o.a)(v,2),N=y[0],g=y[1];Object(a.useEffect)((function(){var e=function(){C("tehran")};navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){M(e.coords.latitude,e.coords.longitude)}),(function(t){console.error(t),e()}),{enableHighAccuracy:!0}):e()}),[]);var C=function(e){fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(e,"&days=3"),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){h(e)})).catch((function(e){console.error(e)}))},M=function(e,t){fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(e,"%2C").concat(t,"&days=3"),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){h(e)}))};return d?Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("div",{className:"background",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(j,{data:d,city:c,matches:O,handleBlur:function(e){n(""),setTimeout((function(){p([])}),200)},handleChange:function(e){e.length>3?fetch("https://weatherapi-com.p.rapidapi.com/search.json?q=".concat(e),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){p(e)})):p([]),n(e)},handleClick:function(e){n(e.target.textContent),C(e.target.textContent),p([]),setTimeout((function(){n("")}),2e3)}}),Object(l.jsxs)("div",{className:"temp-unit",children:[Object(l.jsx)("button",{className:"f"===N?"active":"",onClick:function(){return g("f")},children:"F"}),Object(l.jsx)("button",{className:"c"===N?"active":"",onClick:function(){return g("c")},children:"C"})]})]}),Object(l.jsx)(b,{data:d,tempUnit:N})]}),Object(l.jsxs)("div",{className:"data",children:[Object(l.jsx)(m,{data:d,tempUnit:N}),Object(l.jsxs)("div",{className:"flex-wrapper",children:[Object(l.jsx)(x,{data:d,tempUnit:N}),Object(l.jsx)(q,{data:d,tempUnit:N})]})]})]}):Object(l.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)(r.a,{size:100})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,200)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),Y()},90:function(e,t,c){}},[[199,1,2]]]);
//# sourceMappingURL=main.dfaa69cd.chunk.js.map