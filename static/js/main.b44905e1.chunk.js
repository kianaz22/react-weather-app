(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{200:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(74),o=c.n(i),s=(c(91),c(86)),r=c(10),d=c(8),l=c(7),j=function(e,t){switch(t.type){case"SET_TEMP_UNIT":return Object(l.a)(Object(l.a)({},e),{},{tempUnit:t.payload});case"SET_CITY":return Object(l.a)(Object(l.a)({},e),{},{city:t.payload});case"SET_DATA":return Object(l.a)(Object(l.a)({},e),{},{data:t.payload});case"CHANGE_STATUS":return Object(l.a)(Object(l.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.payload.id&&(e.status=t.payload.newStatus),e}))});default:return e}},u=c(1),h={data:"",city:"",tempUnit:"c"},b=Object(n.createContext)(h),f=function(e){var t=e.children,c=Object(n.useReducer)(j,h),a=Object(r.a)(c,2),i=a[0],o=a[1];return Object(u.jsx)(b.Provider,{value:{tempUnit:i.tempUnit,city:i.city,data:i.data,setCity:function(e){o({type:"SET_CITY",payload:e})},setData:function(e){o({type:"SET_DATA",payload:e})},changeStatus:function(e,t){o({type:"CHANGE_STATUS",payload:{id:e,newStatus:t}})},setTempUnit:function(e){o({type:"SET_TEMP_UNIT",payload:e})}},children:t})},m=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),s=o[0],l=o[1],j=Object(n.useState)(!1),h=Object(r.a)(j,2),f=h[0],m=h[1],x=Object(n.useContext)(b),p=x.setCity,O=x.data,v=function(e){a(""),setTimeout((function(){l([])}),200)};return Object(u.jsxs)("div",{className:"search-container",children:[Object(u.jsx)("button",{className:"search-button",onClick:function(){return m((function(e){return!e}))},children:Object(u.jsx)(d.e,{className:"icon",size:15})}),Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("input",{type:"text",value:c,placeholder:"".concat(O.location.name,", ").concat(O.location.country),className:f?"border":"no-border",onChange:function(e){return function(e){e.length>3?fetch("https://weatherapi-com.p.rapidapi.com/search.json?q=".concat(e),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){l(e)})):l([]),a(e)}(e.target.value)},onBlur:function(){return v()}}),Object(u.jsx)("button",{className:"clear-button",onClick:function(){return v()},children:Object(u.jsx)(d.g,{size:13})}),s&&Object(u.jsx)("div",{className:"matches-container",children:s.map((function(e,t){return Object(u.jsx)("div",{onClick:function(e){return function(e){p(e.target.textContent),l([]),a("")}(e)},children:e.name},t)}))})]})]})},x=c(18),p=c.n(x),O=function(){var e=Object(n.useContext)(b),t=e.tempUnit,c=e.data,a=c.forecast.forecastday[0],i=p()(c.location.localtime,"YYYY-MM-DD HH:mm").format("dddd, MMM DD, YYYY");return Object(u.jsxs)("div",{className:"current",children:[Object(u.jsxs)("div",{className:"temp",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{src:c.current.condition.icon,alt:"icon"})}),Object(u.jsx)("div",{children:Object(u.jsxs)("h1",{children:[Math.round(c.current["temp_".concat(t)]),"\xb0",t.toUpperCase()]})})]}),Object(u.jsx)("div",{className:"condition",children:c.current.condition.text}),Object(u.jsx)("div",{className:"date",children:i}),Object(u.jsxs)("div",{className:"min-max",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)(d.b,{})," ",Math.round(a.day["maxtemp_".concat(t)]),"\xb0"]}),"\xa0\xa0\xa0",Object(u.jsxs)("span",{children:[Object(u.jsx)(d.a,{})," ",Math.round(a.day["mintemp_".concat(t)]),"\xb0"]})]})]})},v=c(6),y=function(){var e=Object(n.useContext)(b),t=e.tempUnit,c=e.data,a=function(e){return parseInt(p()(e,"YYYY-MM-DD HH:mm").format("HH"))},i=function(e){return e===o?"Now":0===e?"12AM":12===e?"12PM":e<12?e+"AM":e>12?e-12+"PM":void 0},o=a(c.location.localtime),s=c.forecast.forecastday[0].hour.slice(o),r=c.forecast.forecastday[1].hour.slice(0,o),l=[].concat(Object(v.a)(s),Object(v.a)(r));return Object(u.jsx)("div",{className:"hourly-container",children:Object(u.jsxs)("div",{className:"scroll-container",children:[Object(u.jsx)("button",{onClick:function(){document.querySelector(".hourly")&&(document.querySelector(".hourly").scrollLeft-=450)},children:Object(u.jsx)(d.c,{})}),Object(u.jsx)("div",{className:"hourly",children:l.map((function(e,c){return Object(u.jsxs)("div",{className:"hour",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{alt:"condition",src:e.condition.icon})}),Object(u.jsxs)("div",{className:"temp",children:[Math.round(e["temp_".concat(t)]),"\xb0"]}),Object(u.jsx)("div",{className:"time",children:i(a(e.time))})]},c)}))}),Object(u.jsx)("button",{onClick:function(){document.querySelector(".hourly")&&(document.querySelector(".hourly").scrollLeft+=450)},children:Object(u.jsx)(d.d,{})})]})})},g=function(){var e=Object(n.useContext)(b),t=e.tempUnit,c=e.data,a=[c.forecast.forecastday[1],c.forecast.forecastday[2],c.forecast.forecastday[0],c.forecast.forecastday[1],c.forecast.forecastday[2]],i=p()(c.location.localtime,"YYYY-MM-DD HH:mm");return Object(u.jsxs)("div",{className:"daily-container",children:[Object(u.jsx)("h2",{children:"Daily"}),Object(u.jsx)("div",{className:"daily",children:a.map((function(e,c){return Object(u.jsxs)("div",{className:"day",children:[Object(u.jsx)("div",{className:"icon",children:Object(u.jsx)("img",{alt:"condition",src:e.day.condition.icon})}),Object(u.jsxs)("div",{className:"date-and-condition",children:[Object(u.jsx)("div",{className:"date",children:i.clone().add(c+1,"d").format("dddd")}),Object(u.jsx)("div",{className:"condition",children:e.day.condition.text})]}),Object(u.jsxs)("div",{className:"rain",style:{visibility:e.day.daily_chance_of_rain>0?"visible":"hidden"},children:[Object(u.jsx)(d.h,{className:"rain"}),e.day.daily_chance_of_rain,"%"]}),Object(u.jsxs)("div",{className:"min-max",children:[Object(u.jsxs)("span",{children:[Math.round(e.day["mintemp_".concat(t)]),"\xb0"]}),"\xa0",Math.round(e.day["maxtemp_".concat(t)]),"\xb0"]})]},c)}))})]})},N=function(e){var t=e.icon,c=e.data,n=e.text,a=e.bgColor;return Object(u.jsxs)("div",{className:"condition",children:[Object(u.jsx)("div",{className:"icon-wrapper",style:{backgroundColor:a},children:t}),Object(u.jsxs)("div",{className:"condition-data",children:[Object(u.jsx)("div",{children:c}),Object(u.jsx)("div",{className:"label",children:n})]})]})},w=c(5),C=c(50),k=c.n(C),S=c(82),T=c(85),M=function(e){var t=e.color,c=e.value,n=e.Particle;return Object(u.jsxs)("div",{className:"particle",children:[Object(u.jsx)("div",{style:{fontSize:"1.2em",borderBottom:"2px solid ".concat(t)},children:c}),Object(u.jsx)("div",{children:n})]})},_=function(){var e=Object(n.useContext)(b).data,t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],i=c[1];Object(n.useEffect)((function(){function t(){return(t=Object(S.a)(k.a.mark((function t(){var c,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.waqi.info/feed/".concat(e.location.name,"/?token=59279c91ec4c2ff95a7957e57269b2540e194f9a")).then((function(e){return e.json()}));case 2:return c=t.sent,t.next=5,fetch("https://api.waqi.info/feed/".concat(e.location.region,"/?token=59279c91ec4c2ff95a7957e57269b2540e194f9a")).then((function(e){return e.json()}));case 5:n=t.sent,i("ok"===c.status&&c.data||"ok"===n.status&&n.data);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var o,s,d=a.aqi||"-",j="#1cb422",h="rgb(254,254,0)",f="rgb(255,126,0)",m="rgb(255,21,21)",x="rgb(176,58,117)",p="rgba(0,0,0,.4)",O="#f3f3f3",v=["pm25","pm10","co","no2","o3"].reduce((function(e,t){var c;return Object(l.a)(Object(l.a)({},e),{},Object(w.a)({},t,(null===(c=a.iaqi)||void 0===c?void 0:c[t])?a.iaqi[t].v:"-"))}),{}),y=function(e){return e<51&&["Good","Air quality is satisfactory, and air pollution poses little or no risk."]||e<101&&["Moderate","Air quality is acceptable, there may be a risk for  those who are sensitive to air pollution."]||e<151&&["Unhealthy for sensitive groups","Members of sensitive groups may experience health effects."]||e<201&&["Unhealthy for sensitive groups","Members of sensitive groups may experience health effects."]||e<301&&["Very Unhealthy","Health alert: The risk of health effects is increased for everyone."]||["Air quality index for this city is not available right now","Data not available"]},g=function(e){return e<51&&j||e<101&&h||e<151&&f||e<201&&m||e<301&&x||p},N={datasets:[{data:[1,1,1,1,1,1],backgroundColor:["white","Good"===y(d)[0]?j:O,"Moderate"===y(d)[0]?h:O,"Unhealthy for sensitive groups"===y(d)[0]?f:O,"Unhealthy"===y(d)[0]?m:O,"Very Unhealthy"===y(d)[0]?x:O],borderWidth:0,rotation:150}]};return Object(u.jsxs)("div",{className:"air-quality-container",children:[Object(u.jsx)("h2",{children:"Air Quality"}),Object(u.jsxs)("div",{className:"air-quality",children:[Object(u.jsxs)("div",{className:"quality-index",children:[Object(u.jsxs)("div",{className:"icon-wrapper",children:[Object(u.jsx)(T.a,{data:N,options:{cutout:"85%",events:[],plugins:{tooltip:{enabled:!1}}}}),Object(u.jsxs)("div",{className:"donut-overlay",children:[Object(u.jsx)("div",{className:"index",children:d}),Object(u.jsx)("div",{className:"label",children:"AQI"})]})]}),Object(u.jsxs)("div",{className:"index-data",children:[Object(u.jsx)("div",{className:"index-label",children:y(d)[0]}),Object(u.jsx)("div",{className:"index-text",children:y(d)[1]})]})]}),Object(u.jsxs)("div",{className:"particles",children:[Object(u.jsx)(M,{Particle:"pm25",value:v.pm25,color:g(v.pm25)}),Object(u.jsx)(M,{Particle:"pm10",value:v.pm10,color:(s=v.pm10,s<40&&j||s<80&&h||s<120&&f||s<300&&m||s>=300&&x||p)}),Object(u.jsx)(M,{Particle:"no2",value:v.no2,color:g(v.no2)}),Object(u.jsx)(M,{Particle:"O3",value:v.o3,color:g(v.o3)}),Object(u.jsx)(M,{Particle:"CO",value:v.co,color:(o=v.co,o<9&&j||o<10&&h||o>=10&&f||p)})]})]})]})},U=c(52),A=c(53),E=function(){var e=Object(n.useContext)(b).data,t=e.forecast.forecastday[0];return Object(u.jsxs)("div",{className:"conditions-container",children:[Object(u.jsx)("h2",{children:"Conditions"}),Object(u.jsxs)("div",{className:"conditions",children:[Object(u.jsx)(N,{icon:Object(u.jsx)(d.i,{size:18,style:{color:"#42cc6a"}}),data:"".concat(Math.round(e.current.wind_kph)," km/h"),text:"Wind",bgColor:"#aff5b1"}),Object(u.jsx)(N,{icon:Object(u.jsx)(U.b,{size:30,style:{color:"#43a4e4"}}),data:"".concat(t.day.daily_chance_of_rain,"%"),text:"Rain",bgColor:"#add6f5"}),Object(u.jsx)(N,{icon:Object(u.jsx)(U.a,{size:30,color:"#adafb6"}),data:"".concat(e.current.humidity,"%"),text:"Humidity",bgColor:"#eeeeee"}),Object(u.jsx)(N,{icon:Object(u.jsx)(d.f,{size:20,color:"#ddb458"}),data:e.current.uv,text:"UV Index",bgColor:"#f7ddac"}),Object(u.jsx)(N,{icon:Object(u.jsx)(A.a,{size:30,color:"#E68319"}),data:t.astro.sunrise.slice(0,5),text:"Sunrise"}),Object(u.jsx)(N,{icon:Object(u.jsx)(A.b,{size:30,color:"#F2A807"}),data:t.astro.sunset.slice(0,5),text:"Sunset"}),Object(u.jsx)(_,{})]})]})},q=function(){var e=Object(n.useContext)(b),t=e.tempUnit,c=e.setTempUnit;return Object(u.jsxs)("div",{className:"temp-unit",children:[Object(u.jsx)("button",{className:"f"===t?"active":"",onClick:function(){return c("f")},children:"F"}),Object(u.jsx)("button",{className:"c"===t?"active":"",onClick:function(){return c("c")},children:"C"})]})};var Y=function(){var e=Object(n.useContext)(b),t=e.data,c=e.setData,a=e.city,i=e.setCity;Object(n.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){r(e.coords.latitude,e.coords.longitude)}),(function(e){console.error(e),i("tehran")}),{enableHighAccuracy:!0}):i("tehran")}),[]),Object(n.useEffect)((function(){console.log("3",a),a&&o(a)}),[a]);var o=function(e){fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(e,"&days=3"),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.error(e)}))},r=function(e,t){fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(e,"%2C").concat(t,"&days=3"),{method:"GET",headers:{"x-rapidapi-key":"3927819375mshd44cfb360819a63p12aeabjsn863dc422f8df","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){c(e)}))};return t?Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("header",{children:[Object(u.jsx)(m,{fetchData:o}),Object(u.jsx)(q,{})]}),Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"data",children:[Object(u.jsx)(y,{}),Object(u.jsxs)("div",{className:"flex-wrapper",children:[Object(u.jsx)(g,{}),Object(u.jsx)(E,{})]})]})]}):Object(u.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsx)(s.a,{size:100})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,201)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{children:Object(u.jsx)(Y,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):H(t,e)}))}}(),D()},91:function(e,t,c){}},[[200,1,2]]]);
//# sourceMappingURL=main.b44905e1.chunk.js.map