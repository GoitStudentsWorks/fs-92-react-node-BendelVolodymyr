import{af as i}from"./index-b5014c37.js";async function d(a,t=!0){await a.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-4a681f7f.js"),["assets/LifeUpdater-4a681f7f.js","assets/ValueWithRandom-5c7d942f.js","assets/index-b5014c37.js","assets/index-27f4df30.css"]);return new r(e)},t)}export{d as loadLifeUpdater};
