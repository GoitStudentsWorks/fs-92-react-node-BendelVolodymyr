import{af as n}from"./index-b5014c37.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-5328d481.js"),["assets/PolygonDrawer-5328d481.js","assets/PolygonDrawerBase-b4e8c9ae.js","assets/index-b5014c37.js","assets/index-27f4df30.css"]);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-c5715907.js"),["assets/TriangleDrawer-c5715907.js","assets/PolygonDrawerBase-b4e8c9ae.js","assets/index-b5014c37.js","assets/index-27f4df30.css"]);await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};