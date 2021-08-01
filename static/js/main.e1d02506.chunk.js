(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{177:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),a=c(61),s=c.n(a),r=(c(69),c(4)),o=c(3),d=c(1),l=function(e){var t=e.city,c=e.handleChange,i=e.matches,a=e.handleClick,s=e.handleBlur,l=e.data,j=Object(n.useState)("zero"),h=Object(r.a)(j,2),b=h[0],u=h[1];return Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsx)("button",{className:"search-button",onClick:function(){u("full"===b?"zero":"full")},children:Object(d.jsx)(o.e,{className:"icon"})}),Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("input",{type:"text",value:t,placeholder:"".concat(l.location.name,", ").concat(l.location.country),className:b,onChange:function(e){return c(e.target.value)},onBlur:function(){return s()}}),Object(d.jsx)("button",{className:"clear-button",onClick:function(){return s()},children:Object(d.jsx)(o.g,{})}),i&&Object(d.jsx)("div",{className:"matches-container",children:i.map((function(e,t){return Object(d.jsx)("div",{onClick:function(e){return a(e)},children:e.name},t)}))})]})]})},j=function(e){var t=e.data,c=e.tempUnit,n=t.forecast.forecastday[0].hour,i=t.forecast.forecastday[1].hour,a=new Date(t.location.localtime).getHours();return Object(d.jsxs)("div",{className:"hourly-container",children:[Object(d.jsx)("h2",{children:"Hourly"}),Object(d.jsxs)("div",{className:"scroll-container",children:[Object(d.jsx)("button",{children:Object(d.jsx)(o.c,{})}),Object(d.jsxs)("div",{className:"hourly",children:[n.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"condition",src:e.condition.icon})}),Object(d.jsxs)("div",{children:[Math.round(e["temp_".concat(c)]),"\xb0"]}),Object(d.jsx)("div",{children:t===a?"Now":12===t?"12PM":t<12?t+"AM":t-12+"PM"})]},t)})).filter((function(e,t){return t>=a})),i.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{alt:"condition",src:e.condition.icon})}),Object(d.jsxs)("div",{children:[Math.round(e["temp_".concat(c)]),"\xb0"]}),Object(d.jsx)("div",{children:12===t?"12PM":0===t?"12AM":t<12?t+"AM":t-12+"PM"})]},t)})).filter((function(e,t){return t<a}))]}),Object(d.jsx)("button",{children:Object(d.jsx)(o.d,{})})]})]})},h=function(e){var t=e.data,c=e.tempUnit,n=t.forecast.forecastday.slice(1);n.push(t.forecast.forecastday[1]),n.push(t.forecast.forecastday[0]),n.push(t.forecast.forecastday[2]);var i=new Date(t.location.localtime).getDay(),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"].slice(i+1,i+6);return Object(d.jsxs)("div",{className:"daily-container",children:[Object(d.jsx)("h2",{children:"Daily"}),Object(d.jsx)("div",{className:"daily",children:n.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("img",{alt:"condition",src:e.day.condition.icon})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:a[t]}),Object(d.jsx)("div",{className:"condition",children:e.day.condition.text})]}),Object(d.jsxs)("div",{style:{visibility:e.day.daily_chance_of_rain>0?"visible":"hidden"},children:[Object(d.jsx)(o.h,{className:"rain"}),e.day.daily_chance_of_rain,"%"]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{className:"transparent",children:[Math.round(e.day["mintemp_".concat(c)]),"\xb0"]}),"/",Math.round(e.day["maxtemp_".concat(c)]),"\xb0"]})]},t)}))})]})},b=function(e){var t=e.icon,c=e.data,n=e.text,i=e.bgColor;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"icon-wrapper",style:{backgroundColor:i},children:t}),Object(d.jsxs)("div",{className:"condition-data",children:[Object(d.jsx)("div",{children:c}),Object(d.jsx)("div",{children:n})]})]})},u=c(39),x=c(40),f=c(64),O=function(e){var t=e.city,c="https://api.weatherbit.io/v2.0/current/airquality?city=".concat(t,"&key=5f590d6bda074732b090b04560e647c1"),i=Object(n.useState)(""),a=Object(r.a)(i,2),s=a[0],o=a[1],l=function(e){return e<51?["Good","Air quality is satisfactory, and air pollution poses little or no risk."]:e<101?["Moderate","Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."]:e<151?["Unhealthy for sensitive groups","Members of sensitive groups may experience health effects. The general public is less likely to be affected."]:e<201?["Unhealthy","Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."]:e<301?["Very Unhealthy","Health alert: The risk of health effects is increased for everyone."]:void 0};Object(n.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){return o(e.data[0].aqi)}))}),[t]);var j={datasets:[{data:[1,1,1,1,1,1],backgroundColor:["white","Good"===l(s)[0]?"#1cb422":"#f3f3f3","Moderate"===l(s)[0]?"rgb(254,254,0)":"#f3f3f3","Unhealthy for sensitive groups"===l(s)[0]?"rgb(255,126,0)":"#f3f3f3","Unhealthy"===l(s)[0]?"rgb(255,21,21)":"#f3f3f3","Very Unhealthy"===l(s)[0]?"rgb(176,58,117)":"#f3f3f3"],borderWidth:0,rotation:150}]};return Object(d.jsxs)("div",{className:"air-quality-container",children:[Object(d.jsx)("h2",{children:"Air Quality"}),Object(d.jsxs)("div",{className:"air-quality",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"icon-wrapper",children:[Object(d.jsx)(f.a,{data:j,options:{cutout:"75%",events:[],plugins:{tooltip:{enabled:!1}}}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontWeight:"600",fontSize:"1.2em"},children:s}),Object(d.jsx)("div",{style:{fontSize:".7em",fontWeight:"600",opacity:".5"},children:"AQI"})]})]}),Object(d.jsxs)("div",{className:"condition-data",children:[Object(d.jsx)("div",{children:l(s)[0]}),Object(d.jsx)("div",{children:l(s)[1]})]})]}),Object(d.jsxs)("div",{style:{width:"100%"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"1.4em",borderBottom:"2px solid rgba(0,0,0,.4)"},children:"-"}),Object(d.jsx)("div",{children:"PM2"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"1.4em",borderBottom:"2px solid #1cb422"},children:"9"}),Object(d.jsx)("div",{children:"PM"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"1.4em",borderBottom:"2px solid rgba(0,0,0,.4)"},children:"-"}),Object(d.jsx)("div",{children:"SO2"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"1.4em",borderBottom:"2px solid rgba(0,0,0,.4)"},children:"-"}),Object(d.jsx)("div",{children:"NO2"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"1.4em",borderBottom:"2px solid rgba(0,0,0,.4)"},children:"-"}),Object(d.jsx)("div",{children:"O3"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{fontSize:"1.4em",borderBottom:"2px solid rgba(0,0,0,.4)"},children:"-"}),Object(d.jsx)("div",{children:"CO"})]})]})]})]})},m=function(e){var t=e.data,c=t.forecast.forecastday[0],i=Object(n.useState)("Tehran, Iran"),a=Object(r.a)(i,2),s=a[0],l=a[1];return Object(n.useEffect)((function(){l(t.location.name)}),[t]),Object(d.jsxs)("div",{className:"conditions-container",children:[Object(d.jsx)("h2",{children:"Conditions"}),Object(d.jsxs)("div",{className:"conditions",children:[Object(d.jsx)(b,{icon:Object(d.jsx)(o.i,{size:18,style:{color:"#42cc6a"}}),data:"".concat(Math.round(t.current.wind_kph)," km/h"),text:"Wind",bgColor:"#aff5b1"}),Object(d.jsx)(b,{icon:Object(d.jsx)(u.b,{size:30,style:{color:"#43a4e4"}}),data:"".concat(c.day.daily_chance_of_rain,"%"),text:"Rain",bgColor:"#add6f5"}),Object(d.jsx)(b,{icon:Object(d.jsx)(u.a,{size:30,color:"#adafb6"}),data:"".concat(t.current.humidity,"%"),text:"Humidity",bgColor:"#eeeeee"}),Object(d.jsx)(b,{icon:Object(d.jsx)(o.f,{size:20,color:"#ddb458"}),data:t.current.uv,text:"UV Index",bgColor:"#f7ddac"}),Object(d.jsx)(b,{icon:Object(d.jsx)(x.a,{size:30,color:"#E68319"}),data:c.astro.sunrise.slice(0,5),text:"Sunrise"}),Object(d.jsx)(b,{icon:Object(d.jsx)(x.b,{size:30,color:"#F2A807"}),data:c.astro.sunset.slice(0,5),text:"Sunset"}),Object(d.jsx)(O,{city:s})]})]})},p=function(e){var t=e.data,c=e.tempUnit;return Object(d.jsxs)("div",{className:"data",children:[Object(d.jsx)(j,{data:t,tempUnit:c}),Object(d.jsxs)("div",{className:"flex-wrapper",children:[Object(d.jsx)(h,{data:t,tempUnit:c}),Object(d.jsx)(m,{data:t,tempUnit:c})]})]})},v=function(e){var t=e.data,c=e.tempUnit,n=t.forecast.forecastday[0],i=new Date(t.location.localtime);return Object(d.jsxs)("div",{className:"current",children:[Object(d.jsxs)("div",{className:"current-temp",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:t.current.condition.icon,alt:"icon"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("h1",{children:[Math.round(t.current["temp_".concat(c)]),"\xb0",c.toUpperCase()]})})]}),Object(d.jsx)("div",{className:"condition",children:t.current.condition.text}),Object(d.jsx)("div",{children:i.toDateString().split(" ").join(", ")}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(o.b,{})," ",Math.round(n.day["maxtemp_".concat(c)]),"\xb0"]}),"\xa0\xa0\xa0",Object(d.jsxs)("span",{children:[Object(d.jsx)(o.a,{})," ",Math.round(n.day["mintemp_".concat(c)]),"\xb0"]})]})]})};var y=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),s=Object(r.a)(a,2),o=s[0],j=s[1],h=Object(n.useState)([]),b=Object(r.a)(h,2),u=b[0],x=b[1],f=Object(n.useState)("c"),O=Object(r.a)(f,2),m=O[0],y=O[1];Object(n.useEffect)((function(){var e=function(){g("tehran")};navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){N(e.coords.latitude,e.coords.longitude)}),(function(t){console.error(t),e()}),{enableHighAccuracy:!0}):e()}),[]);var g=function(e){fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(e,"&days=3"),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){j(e)})).catch((function(e){console.error(e)}))},N=function(e,t){fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(e,"%2C").concat(t,"&days=3"),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){j(e)}))};return o?Object(d.jsxs)("div",{className:"app",onClick:function(e){return console.log(e)},children:[Object(d.jsxs)("div",{className:"background",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)(l,{data:o,city:c,matches:u,handleBlur:function(e){i(""),setTimeout((function(){x([])}),200)},handleChange:function(e){e.length>3?fetch("https://weatherapi-com.p.rapidapi.com/search.json?q=".concat(e),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){x(e)})):x([]),i(e)},handleClick:function(e){i(e.target.textContent),g(e.target.textContent),x([]),setTimeout((function(){i("")}),2e3)}}),Object(d.jsxs)("div",{className:"temp-unit",children:[Object(d.jsx)("button",{className:"f"===m?"active":"",onClick:function(){return y("f")},children:"F"}),Object(d.jsx)("button",{className:"c"===m?"active":"",onClick:function(){return y("c")},children:"C"})]})]}),Object(d.jsx)(v,{data:o,tempUnit:m})]}),Object(d.jsx)(p,{data:o,tempUnit:m})]}):Object(d.jsx)("div",{children:"loading..."})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,178)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),g()},69:function(e,t,c){}},[[177,1,2]]]);
//# sourceMappingURL=main.e1d02506.chunk.js.map