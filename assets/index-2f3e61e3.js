import{af as e}from"./index-1ce8ae2d.js";import{O as s}from"./OptionsColor-43857a1f.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-399c20c1.js"),["assets/Grabber-399c20c1.js","assets/CanvasUtils-b548ea90.js","assets/index-1ce8ae2d.js","assets/index-27f4df30.css","assets/ExternalInteractorBase-029fb1b6.js","assets/OptionsColor-43857a1f.js"]);return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
