(()=>{function c(){if(this.color="#ccc",!(this instanceof c))return new c}c.prototype.setColor=function(e){return this.color=e,this};function l(e){if(e instanceof a){let i=document.createElement("div");i.classList.add("cursor_wrapper");let r=document.createElement("style");r.id="cursoreffect_stylesheet",r.append(".cursor, .cursor_wrapper { pointer-events: none; }"),r.append(`
.cursor_wrapper {
    position: fixed;
    left: 0;
    top: 0;
    right: auto;
    bottom: auto;
    z-index: 998;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent
}

.cursor {
    position: fixed;
    left: 0;
    top: 0;
    right: auto;
    bottom: auto;
    z-index: 998;
    width: ${e.size}px;
    height: ${e.size}px;
    margin-top: ${(-e.size/2).toFixed(2)}px;
    margin-left: ${(-e.size/2).toFixed(2)}px;
    border-radius: 50%;
    background-color: #000
}`);for(let t=0;t<e.elements.length;t++)if(e.elements[t]instanceof c){r.append(`.cursor${String(t+1)} { transition: transform ${String(t*e.spread)}s, height 0.4s ease-in-out, width 0.4s ease-in-out, margin 0.4s ease-in-out; }`),r.append(`.cursor${String(t+1)} { background-color: ${e.elements[t].color}; color: ${e.elements[t].color}; }`);let n=(e.size+2-6)/(e.elements.length-1)*t+6,o=(-n/2).toFixed(2);n+="px",o+="px",r.append(`.cursor${String(t+1)}.hover { width: ${n}; height: ${n}; margin-top: ${o}; margin-left: ${o} }`);let s=document.createElement("div");s.classList.add("cursor"),t>0&&s.classList.add("subcursor"),s.classList.add("cursor"+String(t+1)),i.prepend(s)}return{wrapper:i,stylesheet:r}}}function a(e,i){if(!(this instanceof a)){Trail=new a,Trail.elements=[],Trail.size=i,Trail.spread=.2,Trail.delay=.4;for(let r in e)Object.hasOwnProperty.call(e,r)&e[r]instanceof c&&Trail.elements.push(e[r]);return Trail}}a.prototype.setSpread=function(e){return this.spread=e,this};a.prototype.activate=function(){html=l(this),document.addEventListener("DOMContentLoaded",function(){document.body.prepend(html.wrapper),document.body.append(html.stylesheet);let e=document.querySelectorAll(".cursor"),i=document.querySelectorAll("a");i.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();var o=t.getAttribute("href");setTimeout(function(){window.location=o},710)})}),window.addEventListener("mousemove",t=>{var n=t.clientY,o=t.clientX;e.forEach(s=>{s.style.transform=`translate3d(${o}px,${n}px,0)`})});let r=Array.prototype.slice.call(i).concat(Array.prototype.slice.call(document.querySelectorAll(".cursor_hover")));r.forEach(t=>{t.addEventListener("mouseenter",n=>{e.forEach(o=>{o.classList.add("hover")})})}),r.forEach(t=>{t.addEventListener("mouseleave",n=>{e.forEach(o=>{o.classList.remove("hover")})})})})};window.MouseCursorTrail=a;window.TrailElement=c;})();
