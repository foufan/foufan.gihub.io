import{o as r,a as i}from"./color-lib.BEm3y1oj.js";import{s as c}from"./store.BlYhg_et.js";class n extends HTMLElement{#t=c[this.dataset.key];#e=this.querySelector('input[type="color"]');constructor(){super(),this.#t.subscribe(({chroma:t,hue:e})=>{this.#e.value=r(52,t,e)}),this.#e.addEventListener("input",t=>{if(!(t.target instanceof HTMLInputElement))return;const e=this.#t.get(),{c:o,h:s}={...i(t.target.value)};this.#t.set({hue:s??e.hue,chroma:o??e.chroma})})}}customElements.define("color-editor",n);export{n as ColorEditor};
