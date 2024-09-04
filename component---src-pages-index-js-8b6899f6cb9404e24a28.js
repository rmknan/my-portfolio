"use strict";(self.webpackChunkelegant_portfolio=self.webpackChunkelegant_portfolio||[]).push([[293],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),l=new RegExp(i.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,n,r)=>{let i=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,i=!0):(i=n(c)===c&&r(c)!==c,l=s,s=r(c)===c&&n(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,i):i(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return w},S:function(){return H},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return m},h:function(){return o}});var n=a(6540),r=(a(2729),a(5556)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,i,l,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,u);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:o}=e,c=l(e,f);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=l(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,s({},i,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var E;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},b.displayName="Picture",b.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=l(e,v);return t?n.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:i().object.isRequired,alt:C},M=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],A=new Set;let T,j;const R=function(e){let{as:t="div",image:r,style:i,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,M);const{width:y,height:b,layout:E}=r,v=c(y,b,E),{style:w,className:x}=v,N=l(v,I),k=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(m=u);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(E,y,b);return(0,n.useEffect)((()=>{T||(T=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(j&&A.has(S))return;let t,n;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(s({isLoading:!0,isLoaded:A.has(S),image:r},h)),A.has(S)||(t=requestAnimationFrame((()=>{k.current&&(n=l(k.current,S,A,i,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{A.has(S)&&j&&(k.current.innerHTML=j(s({isLoading:A.has(S),isLoaded:A.has(S),image:r},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},N,{style:s({},w,i,{backgroundColor:d}),className:`${x}${m?` ${m}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));_.propTypes=L,_.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function $(e){return function(t){let{src:a,__imageData:r,__error:i}=t,o=l(t,D);return i&&console.warn(i),r?n.createElement(e,s({image:r},o)):(console.warn("Image not loaded",a),null)}}const O=$((function(e){let{as:t="div",className:a,class:r,style:i,image:o,loading:u="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,E=l(e,N);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:C,layout:L,images:M,placeholder:I,backgroundColor:A}=o,T=c(v,C,L),{style:j,className:R}=T,_=l(T,k),D={fallback:void 0,sources:[]};return M.fallback&&(D.fallback=s({},M.fallback,{srcSet:M.fallback.srcSet?S(M.fallback.srcSet):void 0})),M.sources&&(D.sources=M.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,s({},_,{style:s({},j,i,{backgroundColor:h}),className:`${R}${a?` ${a}`:""}`}),n.createElement(g,{layout:L,width:v,height:C},n.createElement(w,s({},m(I,!1,L,v,C,A,y,b))),n.createElement(x,s({"data-gatsby-image-ssr":"",className:p},E,d("eager"===u,!1,D,u,f)))))})),P=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:C,width:P,height:P,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};O.displayName="StaticImage",O.propTypes=q;const H=$(_);H.displayName="StaticImage",H.propTypes=q},9285:function(e,t){t.A=void 0;var a=function(e,t){void 0===t&&(t="start");var a=document.querySelector(e);return!!a&&(a.scrollIntoView({behavior:"smooth",block:t}),!0)};t.A=a},6314:function(e,t,a){a.d(t,{A:function(){return i}});var n=a(6540),r=a(4810);var i=e=>{let{title:t,description:a,pathname:i,children:s}=e;const{title:l,description:o,siteUrl:c}=(0,r.GR)("3764592887").site.siteMetadata,d={title:t,description:a||o,url:`${c}${i||""}`};return n.createElement(n.Fragment,null,n.createElement("title",null,d.title," | ",l),n.createElement("meta",{name:"description",content:d.description}),s)}},6833:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return p}});var n=a(6540),r=a(2532),i=a(6314);const s=e=>{let{date:t,title:a,company:r,description:i,tags:s}=e;return n.createElement("div",{className:"flex mx-auto"},n.createElement("div",{className:"flex place-items-start justify-center text-sm p-4 pt-5 w-1/4"},t),n.createElement("div",{className:"flex flex-col place-items-start p-4 w-3/4"},n.createElement("h2",{className:"text-xl font-medium"},a),n.createElement("h3",{class:"text-lg"},r),n.createElement("p",{className:"mt-1"},i),n.createElement("div",{className:"mt-2 flex flex-wrap gap-x-4"},s.map(((e,t)=>n.createElement("span",{key:t,className:"inline-flex items-center gap-1 rounded-full py-1 text-xs font-semibold"},e))))))},l=e=>{let{date:t,university:a,degree:r,description:i,tags:s}=e;return n.createElement("div",{className:"flex mx-auto"},n.createElement("div",{className:"flex place-items-start justify-center text-sm p-4 pt-5 w-1/4"},t),n.createElement("div",{className:"flex flex-col place-items-start p-4 w-3/4"},n.createElement("h2",{className:"text-xl font-medium"},a),n.createElement("h3",{class:"text-lg italic"},r),n.createElement("p",{className:"mt-1"},i),n.createElement("div",{className:"mt-2 flex flex-wrap gap-x-4"},s.map(((e,t)=>n.createElement("span",{key:t,className:"inline-flex items-center gap-1 rounded-full py-1 text-xs font-semibold"},e))))))},o=e=>{let{date:t,title:a,authors:r,journal:i,description:s,tags:l}=e;return n.createElement("div",{className:"flex mx-auto"},n.createElement("div",{className:"flex place-items-start justify-center text-sm p-4 pt-5 w-1/4"},t),n.createElement("div",{className:"flex flex-col place-items-start p-4 w-3/4"},n.createElement("h2",{className:"text-xl font-medium"},a),n.createElement("p",null,r),n.createElement("p",{className:"italic"},i),n.createElement("p",{className:"mt-1"},s),n.createElement("div",{className:"mt-2 flex flex-wrap gap-x-4"},l.map(((e,t)=>n.createElement("span",{key:t,className:"inline-flex items-center gap-1 rounded-full py-1 text-xs font-semibold"},e))))))};var c=a(4810),d=a(9584),m=a(9285);const u=()=>n.createElement(i.A,{title:"Home"});var p=()=>n.createElement("div",{className:"mx-auto"},n.createElement("div",{className:"flex flex-col lg:flex-row place-items-center lg:place-items-start space-y-12 lg:space-x-12"},n.createElement("div",{className:"flex flex-col lg:px-6 lg:sticky top-24 place-items-center space-y-6 lg:mb-24"},n.createElement(r.S,{src:"../images/Mohan.png",alt:"Me",className:"rounded-full h-64 w-64 object-position mt-4",__imageData:a(7743)}),n.createElement("div",{className:"flex flex-row mx-auto place-items-center space-x-8 overflow-visible"},n.createElement(c.N_,{href:"https://www.linkedin.com/in/mohanakrishnan02",target:"_blank",className:"hover:scale-125 cursor-pointer transition ease-in-out duration-300","aria-label":"LinkedIn"},n.createElement(d.ijb,{size:32})),n.createElement(c.N_,{href:"https://github.com/rmknan",target:"_blank",className:"hover:scale-125 cursor-pointer transition ease-in-out duration-300","aria-label":"Github"},n.createElement(d.sAW,{size:32})),n.createElement(c.N_,{href:"mailto:mr5910@nyu.edu",target:"_blank",className:"hover:scale-125 cursor-pointer transition ease-in-out duration-300","aria-label":"Email"},n.createElement(d.q9x,{size:31})),n.createElement(c.N_,{href:"https://drive.google.com/file/d/1WAtR4RVJdw6YGqs-hVygANPnVq4QtfnG/view?usp=drive_link",target:"_blank",className:"hover:scale-125 cursor-pointer transition ease-in-out duration-300","aria-label":"CV"},n.createElement("i",{className:"fas fa-file-pdf fa-2x"}))),n.createElement("div",{className:"hidden lg:flex flex-col w-1/3 items-start"},n.createElement("div",{className:"flex flex-row place-items-center group"},n.createElement("hr",{className:"w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300"}),n.createElement("button",{onClick:()=>(0,m.A)("#experience"),className:"peer group-hover:underline"},"Experience")),n.createElement("div",{className:"flex flex-row place-items-center group"},n.createElement("hr",{className:"w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300"}),n.createElement("button",{onClick:()=>(0,m.A)("#education"),className:"peer group-hover:underline"},"Education")),n.createElement("div",{className:"flex flex-row items-center group"},n.createElement("hr",{className:"w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300"}),n.createElement("button",{onClick:()=>(0,m.A)("#Open-Source"),className:"peer hover:underline whitespace-nowrap"},"Open-Source")),n.createElement("div",{className:"flex flex-row items-center group"},n.createElement("hr",{className:"w-6 group-hover:w-8 mr-2 border-1 border-slate-800 dark:border-white group-transition ease-in-out duration-300"}),n.createElement("button",{onClick:()=>(0,m.A)("#contact"),className:"peer hover:underline"},"Contact")))),n.createElement("div",{className:"container flex flex-col"},n.createElement("h1",{className:"text-3xl font-bold mb-4"},"Hi, I'm Mohan!"),n.createElement("p",{className:"mb-4 text-justify"},"Mohanakrishnan is a dedicated Embedded Engineer at Medsix, a pioneering medical device startup, where he contributes to developing innovative, life-saving technologies. He earned his Master’s in Electrical Engineering from New York University, specializing in Embedded Systems and Robotics, solidifying his expertise in these dynamic fields."),n.createElement("p",{className:"mb-4 text-justify"},"His work is marked by a commitment to advancing embedded systems technology. His journey is driven by a deep curiosity and a passion for exploring the intersections of embedded systems, robotics, and machine learning, with the goal of making a significant impact in these areas."),n.createElement("p",{className:"mb-4 text-justify"},"Mohanakrishnan balances his professional life with personal interests that keep him sharp and inspired. He is an avid reader, continually expanding his knowledge in emerging technologies, particularly AI and robotics. In his downtime, he enjoys video gaming, which fuels his creativity. Additionally, he finds refreshment in outdoor activities like hiking, where the natural world offers new perspectives and inspiration for his work."),n.createElement("section",null,n.createElement("div",{id:"experience",className:"-translate-y-16"}),n.createElement("h1",{className:"text-2xl py-4 font-medium"},"Experience"),n.createElement(s,{date:"Feb 2023 -  ",title:"Embedded Engineer",company:"Medsix",description:"Configured and calibrated MCP9600, DFRobot Gravity Conductivity Sensor, and Adafruit TCS34725 RGB Sensor on the WHISPER prototype. Collaborated on feature design, implementation, and bug resolution. Supported the final design phase for medical trials.",tags:["Embedded Systems Design","Debugging","Sensor Configuration and Calibration"]}),n.createElement(s,{date:"June 2022 - Aug 2022",title:"Embedded Engineer Intern",company:"Pangolin Laser Systems",description:"Configured TMP112 Temperature Sensor with MACH DSP 21489 using I2C communication. Set up ADC/DAC parameters on STM32H735 and STM32H753 and conducted low-level debugging to resolve firmware issues. Contributed to successful operation of Laser Scanners on STM MCUs.",tags:["Firmware Development and Testing","Low-Level Debugging","ADC/DAC Configuration"]}),n.createElement(s,{date:"June 2018 - July 2018",title:"Electrical Engineer Intern",company:"Reliance Industries LTD",description:"Conducted in-depth analyses to select and calculate ratings for transformers, batteries, and cables, optimizing performance for industrial applications. Collaborated with a mentor to present and refine equipment selection decisions, ensuring technical accuracy and efficiency.",tags:["AutoCAD","Equipment Selection and Sizing","MS Excel"]})),n.createElement("section",null,n.createElement("div",{id:"education",className:"-translate-y-16"}),n.createElement("h1",{className:"text-2xl py-4 font-medium"},"Education"),n.createElement(l,{date:"2021 - 2022",university:"New York University",degree:"MS in Electrical Engineering",description:"Specialized in Embedded System and Robotics. Coursework includes: Machine Learning, Electronic Power Supplies, Linear Systems, Digital Signal Processing, Robot Localization and Navigation, Embedded Systems, Interactive Medical Robotics, Reinforcement Learning and Optimal Control for Robots. ",tags:["Embedded Systems","Machine Learning","Robotics"]}),n.createElement(l,{date:"2016 - 2020",university:"SRM Institute of Science and Technology",degree:"B.Tech in Electronics and Communication Engineering",description:"Coursework includes: Adhoc and Sensor Networks, Embedded System Design, VLSI Design, Digital Image Processing and Machine Vision, Wireless Communication, Communication Systems and Communication Network Protocols.",tags:["Embedded Systems","VLSI","Wireless Communication"]})),n.createElement("section",null,n.createElement("div",{id:"Open-Source",className:"-translate-y-16"}),n.createElement("h1",{className:"text-2xl py-4 font-medium"},"Open-Source"),n.createElement(o,{date:"2023 -",title:"Stumpless: C Logging Library",description:"Enhanced the C logging library by implementing new features and resolving issues, ensuring adherence to coding standards. Utilized Valgrind for memory debugging and leak detection, and GDB for debugging multiple files to maintain system reliability.",tags:["Git","GDB","Memory Debugging"]})),n.createElement("section",{id:"contact"},n.createElement("div",{id:"contact",className:"-translate-y-16"}),n.createElement("h1",{className:"text-2xl py-4 font-medium"},"Contact"),n.createElement("p",null,"If you are interested in discussing, please feel free to reach out through E-mail or LinkedIn !")))))},7743:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8f8","images":{"fallback":{"src":"/static/08df8b4dcc51d36f4cae8d35fbed1a10/4aacd/Mohan.jpg","srcSet":"/static/08df8b4dcc51d36f4cae8d35fbed1a10/23910/Mohan.jpg 361w,\\n/static/08df8b4dcc51d36f4cae8d35fbed1a10/aa896/Mohan.jpg 722w,\\n/static/08df8b4dcc51d36f4cae8d35fbed1a10/4aacd/Mohan.jpg 1443w","sizes":"(min-width: 1443px) 1443px, 100vw"},"sources":[{"srcSet":"/static/08df8b4dcc51d36f4cae8d35fbed1a10/8fee6/Mohan.webp 361w,\\n/static/08df8b4dcc51d36f4cae8d35fbed1a10/bbe84/Mohan.webp 722w,\\n/static/08df8b4dcc51d36f4cae8d35fbed1a10/c5dd6/Mohan.webp 1443w","type":"image/webp","sizes":"(min-width: 1443px) 1443px, 100vw"}]},"width":1443,"height":1427}')}}]);
//# sourceMappingURL=component---src-pages-index-js-8b6899f6cb9404e24a28.js.map