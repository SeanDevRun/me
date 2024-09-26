(function(){"use strict";var e={5476:function(e,t,n){var o=n(5130),r=n(6768);function a(e,t,n,o,a,i){const l=(0,r.g2)("SplashView"),c=(0,r.g2)("router-view"),u=(0,r.g2)("v-app");return(0,r.uX)(),(0,r.Wv)(u,null,{default:(0,r.k6)((()=>[a.loading?((0,r.uX)(),(0,r.Wv)(l,{key:0})):((0,r.uX)(),(0,r.Wv)(c,{key:1}))])),_:1})}function i(e,t,n,o,a,i){const l=(0,r.g2)("ProgressCircle"),c=(0,r.g2)("v-col"),u=(0,r.g2)("v-row"),s=(0,r.g2)("v-container"),d=(0,r.g2)("v-main");return(0,r.uX)(),(0,r.Wv)(d,{class:"d-flex bg-primary text-center align-center justify-center",style:{"min-height":"300px"}},{default:(0,r.k6)((()=>[(0,r.bF)(s,{class:"bg-primary","fill-height":"",fluid:""},{default:(0,r.k6)((()=>[(0,r.bF)(u,{justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(c,{cols:"6"},{default:(0,r.k6)((()=>[(0,r.bF)(l)])),_:1})])),_:1})])),_:1})])),_:1})}var l={name:"SplashScreen",data:()=>({})},c=n(1241);const u=(0,c.A)(l,[["render",i]]);var s=u,d={name:"App",components:{SplashView:s},data(){return{loading:!0}},mounted(){this.loading=!0,this.$nextTick((()=>{setTimeout((()=>{this.loading=!1}),1e3)}))}};const f=(0,c.A)(d,[["render",a]]);var g=f,p=n(1387);function b(e,t,n,o,a,i){const l=(0,r.g2)("HeaderPane");return(0,r.uX)(),(0,r.Wv)(l)}const v={class:"hero-section"};function k(e,t,n,o,a,i){const l=(0,r.g2)("v-col"),c=(0,r.g2)("v-row"),u=(0,r.g2)("v-divider"),s=(0,r.g2)("v-spacer"),d=(0,r.g2)("IconBtn"),f=(0,r.g2)("v-container");return(0,r.uX)(),(0,r.CE)("section",v,[(0,r.bF)(f,{"fill-height":""},{default:(0,r.k6)((()=>[(0,r.bF)(c,{align:"center",justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(l,{class:"text-center"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.Lk)("p",{class:"text-h1 font-weight-black text-accent"},"Sean Harding",-1)]))),_:1})])),_:1}),(0,r.bF)(c,{align:"center",justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(l,null,{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.Lk)("p",{class:"text-h4 font-weight-black text-white"},"Senior Software Engineer",-1)]))),_:1})])),_:1}),(0,r.bF)(c,{align:"center",justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(l,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{class:"my-2"})])),_:1})])),_:1}),(0,r.bF)(c,{align:"center",justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(s),(0,r.bF)(l,null,{default:(0,r.k6)((()=>[(0,r.bF)(d,{icon:"mdi-linkedin"})])),_:1}),(0,r.bF)(l,null,{default:(0,r.k6)((()=>[(0,r.bF)(d,{icon:"mdi-github"})])),_:1}),(0,r.bF)(l,null,{default:(0,r.k6)((()=>[(0,r.bF)(d,{icon:"mdi-email-outline"})])),_:1}),(0,r.bF)(s)])),_:1})])),_:1})])}var h={name:"HeaderPane",components:{},data:()=>({}),methods:{}};const m=(0,c.A)(h,[["render",k]]);var F=m,_={name:"HomeView",components:{HeaderPane:F},data(){return{}}};const w=(0,c.A)(_,[["render",b]]);var y=w,j=n(4232);const x={id:"about"},S={id:"projects",class:"mt-12"};function P(e,t,n,a,i,l){const c=(0,r.g2)("v-toolbar-title"),u=(0,r.g2)("v-spacer"),s=(0,r.g2)("v-btn"),d=(0,r.g2)("v-app-bar"),f=(0,r.g2)("about-pane"),g=(0,r.g2)("v-col"),p=(0,r.g2)("v-img"),b=(0,r.g2)("v-row"),v=(0,r.g2)("v-card-title"),k=(0,r.g2)("v-card-text"),h=(0,r.g2)("v-card-actions"),m=(0,r.g2)("v-card"),F=(0,r.g2)("v-container"),_=(0,r.g2)("v-main"),w=(0,r.g2)("v-app");return(0,r.uX)(),(0,r.Wv)(w,null,{default:(0,r.k6)((()=>[(0,r.bo)((0,r.bF)(d,{app:"",color:"primary",dark:"",elevation:"2",fixed:""},{default:(0,r.k6)((()=>[(0,r.bF)(c,null,{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("My Portfolio")]))),_:1}),(0,r.bF)(u),(0,r.bF)(s,{text:"",onClick:t[0]||(t[0]=t=>e.scrollTo("about"))},{default:(0,r.k6)((()=>t[4]||(t[4]=[(0,r.eW)("About")]))),_:1}),(0,r.bF)(s,{text:"",onClick:t[1]||(t[1]=t=>e.scrollTo("projects"))},{default:(0,r.k6)((()=>t[5]||(t[5]=[(0,r.eW)("Projects")]))),_:1}),(0,r.bF)(s,{text:"",onClick:t[2]||(t[2]=t=>e.scrollTo("contact"))},{default:(0,r.k6)((()=>t[6]||(t[6]=[(0,r.eW)("Contact")]))),_:1})])),_:1},512),[[o.aG,e.isStickyNavVisible]]),(0,r.bF)(_,null,{default:(0,r.k6)((()=>[(0,r.bF)(F,null,{default:(0,r.k6)((()=>[(0,r.bF)(f),(0,r.Lk)("section",x,[(0,r.bF)(b,{class:"mt-12"},{default:(0,r.k6)((()=>[(0,r.bF)(g,null,{default:(0,r.k6)((()=>t[7]||(t[7]=[(0,r.Lk)("h1",null,"About Me",-1),(0,r.Lk)("p",null," I'm a web developer with a passion for creating interactive and dynamic websites. I have experience with Vue.js, React, and backend technologies. ",-1)]))),_:1}),(0,r.bF)(g,null,{default:(0,r.k6)((()=>[(0,r.bF)(p,{src:"path/to/your-image.jpg",alt:"Profile Image"})])),_:1})])),_:1})]),(0,r.Lk)("section",S,[t[9]||(t[9]=(0,r.Lk)("h1",null,"Projects",-1)),(0,r.bF)(b,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.projects,(n=>((0,r.uX)(),(0,r.Wv)(g,{cols:"12",md:"4",key:n.id},{default:(0,r.k6)((()=>[(0,r.bF)(m,null,{default:(0,r.k6)((()=>[(0,r.bF)(p,{src:n.image,height:"200px"},null,8,["src"]),(0,r.bF)(v,null,{default:(0,r.k6)((()=>[(0,r.eW)((0,j.v_)(n.title),1)])),_:2},1024),(0,r.bF)(k,null,{default:(0,r.k6)((()=>[(0,r.eW)((0,j.v_)(n.description),1)])),_:2},1024),(0,r.bF)(h,null,{default:(0,r.k6)((()=>[(0,r.bF)(s,{text:"",onClick:t=>e.goToProject(n.link)},{default:(0,r.k6)((()=>t[8]||(t[8]=[(0,r.eW)("View Project")]))),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1})])),_:1})])),_:1})}const C={class:"profile-section bg-red"};function A(e,t,n,o,a,i){const l=(0,r.g2)("v-col"),c=(0,r.g2)("v-row"),u=(0,r.g2)("v-container"),s=(0,r.g2)("v-sheet");return(0,r.uX)(),(0,r.CE)("section",C,[(0,r.bF)(s,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{"fill-height":""},{default:(0,r.k6)((()=>[(0,r.bF)(c,{align:"center",justify:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(l,{class:"text-center"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.Lk)("p",{class:"text-h1 font-weight-black text-accent"},"SECTION",-1)]))),_:1})])),_:1})])),_:1})])),_:1})])}var O={name:"AboutPane",components:{},data:()=>({}),methods:{}};const W=(0,c.A)(O,[["render",A]]);var E=W,T={components:{AboutPane:E},data:()=>({isStickyNavVisible:!1,projects:[{id:1,title:"Project One",description:"A short description of project one.",image:"path/to/project-one-image.jpg",link:"https://link-to-project-one.com"},{id:2,title:"Project Two",description:"A short description of project two.",image:"path/to/project-two-image.jpg",link:"https://link-to-project-two.com"}]}),methods:{handleScroll(){this.isStickyNavVisible=window.scrollY>window.innerHeight-64}},mounted(){window.addEventListener("scroll",this.handleScroll)}};const H=(0,c.A)(T,[["render",P]]);var L=H;const X="SeanHarding.me",I=[{path:"/",name:"Home",component:y,meta:{title:`${X} Home`}},{path:"/dev",name:"Software",component:L,meta:{title:`${X} Home`}},{path:"/:pathMatch(.*)*",name:"Error",component:Error,meta:{title:`${X} Error`}}],V=(0,p.aE)({history:(0,p.LA)(),routes:I});var M=V,N=(n(5524),n(7768)),$=n(8893),B=n(3892),D=n(6106),z=n(1146),G=n(7524),K=n(431),R=n(5741),Y=n(1790);const q={dark:!0,colors:{primary:"#242726",secondary:"#424242",accent:"#EC7A1C",error:"#FF5252",danger:"#F44336",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",anchor:"#84bd00",font:"#000000"}},J=(0,N.$N)({blueprint:$.r,aliases:{IconBtn:B.D,ProgressCircle:D.x,SheetPanel:z.i,SkillChip:G.x},ssr:!0,icons:{defaultSet:"mdi",iconfont:"fa"},components:{...K,...Y},directives:R,theme:{dark:!0,defaultTheme:"Dark",themes:{Dark:q}},defaults:{global:{ripple:!1},IconBtn:{variant:"text",color:"accent",class:"text-h3"},ProgressCircle:{color:"accent",indeterminate:!0,size:"200"},SheetPanel:{color:"accent",elevation:4,rounded:"lg"},SkillChip:{size:"small",variant:"outlined"}}});var Q=J;const U=(0,o.Ef)(g);U.use(Q),U.use(M),U.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var l=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var s=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkSeanHarding_me"]=self["webpackChunkSeanHarding_me"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5476)}));o=n.O(o)})();
//# sourceMappingURL=app.a50f9372.js.map