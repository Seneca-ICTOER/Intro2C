(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"630281fcd432eb29e557873ae79c73e6","url":"404.html"},{"revision":"d24b6780e2761c98855663068a7ed54c","url":"A-Introduction/compilers.html"},{"revision":"c5f692a3aacc611c9c84312a1f4669aa","url":"A-Introduction/computers.html"},{"revision":"c84c0b3f49d2b1db200e86d30c318082","url":"A-Introduction/information.html"},{"revision":"dd3bf88bc0ca3751fdf295854199a535","url":"assets/css/styles.3c742506.css"},{"revision":"1ba9d8d860e0dcc10deb7a0d97507001","url":"assets/js/0cc29fcc.6ecdeffd.js"},{"revision":"8d024e02e06fbafaa7b0af9c67af38ab","url":"assets/js/0e384e19.3fa303e8.js"},{"revision":"f0b4b4e3adde9e17375c8aace6ddd254","url":"assets/js/131.f917de7a.js"},{"revision":"e170c2ddfe716f4f926f83caf5a0f459","url":"assets/js/17896441.1511b1ba.js"},{"revision":"1c0471d016126f19d7c26faa4f61bf8d","url":"assets/js/1be78505.9afcf789.js"},{"revision":"ec3d8a4276703a7a4b30a07bf7bc0626","url":"assets/js/230.0636cfd7.js"},{"revision":"ca19aebc66c9ab5f27b8750e23fb1013","url":"assets/js/283.4aa13286.js"},{"revision":"713464b03b91d8cf273a5986d6d8a022","url":"assets/js/2cf355b8.90212f31.js"},{"revision":"ec42af873d31c5a8e04a812b8c640401","url":"assets/js/3382963c.325ba021.js"},{"revision":"cb90ce4aaf97adbb937663c4f4c015b8","url":"assets/js/33fabada.50a699a3.js"},{"revision":"dba35b92e98d82aa883b84503f4eae81","url":"assets/js/4032b14d.1341059f.js"},{"revision":"145e3c771e04152e18c4576e37add000","url":"assets/js/422db77a.08d73480.js"},{"revision":"df7d50bff09ed8e1631444c3f27cfdba","url":"assets/js/4303f665.2e6c1ace.js"},{"revision":"79956b76669b61b58466b3eec1f7787f","url":"assets/js/56a8551a.4ef0b892.js"},{"revision":"ad0a074749a3d83b90d86313c5443f58","url":"assets/js/5a0316ec.79e89493.js"},{"revision":"c097bd500c34503c52403ef60c7ebb76","url":"assets/js/5a489454.9fcb0462.js"},{"revision":"5163c3bfdb4abab62aef26bdf9af83b7","url":"assets/js/662be6d3.6958239d.js"},{"revision":"554e6eb6414215fdb351f41f275961a6","url":"assets/js/6bc3106f.8e13f261.js"},{"revision":"e7e0bc716245ae35ff86be9b3c3519c1","url":"assets/js/749ee8a4.913726fd.js"},{"revision":"e6590d75687521da79340f792c8deccd","url":"assets/js/7574343a.3108dbff.js"},{"revision":"afc0fd2a6d0a9b97e3410515729fbb41","url":"assets/js/7d53361e.23280e91.js"},{"revision":"296fe4c09416001ba6163963fbd113eb","url":"assets/js/8533e2da.d0d3873a.js"},{"revision":"20e5c4c729f974465ba1a4b602f06210","url":"assets/js/9052a911.69b9918a.js"},{"revision":"88c7350b5597298176aa519cffdf4e61","url":"assets/js/935f2afb.8bc4081a.js"},{"revision":"a56dbf9294ffecd255938e912519f13c","url":"assets/js/937af094.da1c25f0.js"},{"revision":"2b142f5f9153e024b43c509f101744f6","url":"assets/js/972.36858244.js"},{"revision":"7e840bfea0eb82ff2841c7ae47e1e936","url":"assets/js/a4ceae05.d8240fbe.js"},{"revision":"c8dfa197907165e3243c939630dd169f","url":"assets/js/a6fda238.03e2682a.js"},{"revision":"3d06dc972f8da98101e74600c383d6b1","url":"assets/js/b4ee539c.bc281a93.js"},{"revision":"8927b60c1cab1bbc0ec7f961f9a448e9","url":"assets/js/b5beb390.944e47e1.js"},{"revision":"8d674d9b5cf90656f3fab7b074c61d70","url":"assets/js/b5eb431a.e4268e7b.js"},{"revision":"680b4219695d96db1d5596d52aecc8c2","url":"assets/js/c732709b.7d1933a3.js"},{"revision":"afa9dd2e773d22854507ed7b16823abd","url":"assets/js/c87e92e6.0362f12d.js"},{"revision":"de3697466bcd64fb14a718393b589184","url":"assets/js/cee6b58e.d4aa89c7.js"},{"revision":"8714063d7b5ca88454e30a2c07470b46","url":"assets/js/d6ffb831.c65345c8.js"},{"revision":"7ceb3bef66f49b48e70577293c24f023","url":"assets/js/d83e5981.d0a8e631.js"},{"revision":"6c757c134dd536e3df6560897c43388f","url":"assets/js/dc5ffb51.7c755e30.js"},{"revision":"e70ff360ed119a0b31e7bb7ae999a29d","url":"assets/js/dd68b280.17222c61.js"},{"revision":"a40bbc12a0d7bfff0053b04ac7c9c401","url":"assets/js/ef36065f.a11cd639.js"},{"revision":"2b2dede23e9aafa1d52f1aa5fd722125","url":"assets/js/f3dded9d.122663e4.js"},{"revision":"d530022fb6ad33b37f1f8a979931988d","url":"assets/js/main.f8fa45f8.js"},{"revision":"55e6ce1fa91d35f73b03de71c76807a0","url":"assets/js/runtime~main.0bd47699.js"},{"revision":"b1b519b00fba1e7bafb2f16de7166021","url":"B-Computations/a-simple-calculation.html"},{"revision":"001f5edc4a18b9a92892094b12320446","url":"B-Computations/expressions.html"},{"revision":"a2166351827519222d79e90f894a1e58","url":"B-Computations/logic.html"},{"revision":"8f9b08177dfe77b0b3296b58d6739d61","url":"B-Computations/style-guidelines.html"},{"revision":"d2ba9fbdd2e22d0b635222f6e35be072","url":"B-Computations/testing-and-debugging.html"},{"revision":"64eeb17badfac4639f05633d0a20476b","url":"B-Computations/types.html"},{"revision":"e303ca54067c1b67978d273573909b34","url":"C-Data-Structures/arrays.html"},{"revision":"31e3c58bdc3cd4094c73bc23b89add7c","url":"C-Data-Structures/structures.html"},{"revision":"66050a8cbe226dde47e10a76eaf6e915","url":"D-Modularity/functions-arrays-and-structs.html"},{"revision":"9f4ac35888dd74b406beb7eb12ed2a79","url":"D-Modularity/functions.html"},{"revision":"e6d458c214420779b8b522b6bfe89e49","url":"D-Modularity/input-functions.html"},{"revision":"07a5cea8f1fecb9abde6ee6021b8faf0","url":"D-Modularity/library-functions.html"},{"revision":"3a3a0888a7757257664e697665fd9339","url":"D-Modularity/output-functions.html"},{"revision":"4a53fa368a31498df07f5e37e179923a","url":"D-Modularity/pointers.html"},{"revision":"a2177d3489c64fee4438c26df900bfb5","url":"E-Secondary-Storage/records-and-files.html"},{"revision":"36c239660ddd4a3ae032cfa433f70e07","url":"E-Secondary-Storage/text-files.html"},{"revision":"0cb915fb54f683437b45d2a5d064a845","url":"F-Refinements/algorithms.html"},{"revision":"11bcb8e90a7afe19b30a40309bbb96a7","url":"F-Refinements/character-strings.html"},{"revision":"2a00134b0755334d0da0decbe6c823b1","url":"F-Refinements/more-input-and-output.html"},{"revision":"47511baf58e392bd7be7edcbb5730cee","url":"F-Refinements/pointers-arrays-and-structs.html"},{"revision":"0ac0509cf39054e56568cfe3da53e38a","url":"F-Refinements/portability.html"},{"revision":"f1a3a32697db0d2733ce0f063a22cd3f","url":"F-Refinements/string-library.html"},{"revision":"ae682adceff04c5aa786da6aaf6ae093","url":"F-Refinements/two-dimensional-arrays.html"},{"revision":"81f41333e53fe7e57014b2c2970be9f4","url":"index.html"},{"revision":"d5a33d6178fdf9417f9ca5f626c99754","url":"manifest.json"},{"revision":"a9369ecedfb8bff3eb39dbc02afa3800","url":"Resources-Appendices/ascii-collating-sequence.html"},{"revision":"813f8ce6a72ea802019f78fcd1e254cf","url":"Resources-Appendices/data-conversions.html"},{"revision":"a1c79bd9e2ece2fdb8500e18fb43871b","url":"Resources-Appendices/ebcdic-collating-sequence.html"},{"revision":"13f0082c70ee36dba042c69cdc5f6b12","url":"Resources-Appendices/operators.html"},{"revision":"b79ddc5406ae25d58d589fa8bd5534aa","url":"Resources-Appendices/suggested-weekly-schedule.html"},{"revision":"c95838674519b5aa7dd3aa715b02f731","url":"assets/images/2dArray-621013445a0c94ec6880bd2b696d4c3d.png"},{"revision":"6b8b74caffb7b6fc2c83d2a3ad78bbcb","url":"assets/images/alu-48f361e75b0b4d16bb3ac52667de1e9f.png"},{"revision":"12dccaa1311b6b6a6c1fa8436b3af8e9","url":"assets/images/array-with-8-elements-9cc288c9efdd2ba710d56b209d40d1de.png"},{"revision":"ea97382591cec272f870b2c1c1608d7a","url":"assets/images/array-with-values-5c517d30e4e5e9721c10e11709f70ba7.png"},{"revision":"fb464393084cf99f81be403b43ee907c","url":"assets/images/assembler-273240c8881d4d36b768093adab672f6.png"},{"revision":"0b582513eb9d32ce418453e573a2ff3d","url":"assets/images/bytenibbit-07ecd6ebcd709b1c68b3165fc4eb7b70.jpg"},{"revision":"14c3e1effc78a8ba57a0af605cc7aa39","url":"assets/images/calculation-fcff5202ecb8450b556d76c10cbedd24.png"},{"revision":"c225513f559c5247fd6b2c47cd69135e","url":"assets/images/constructs-89cf24b6a624e60d4348b049a41405be.png"},{"revision":"ba2a6b2ac32b999f20f309cb40aaaa40","url":"assets/images/doubleType-6b0f6c2c28a422d95d79b8ee9501ec35.png"},{"revision":"76de21d199665269b07219c5a566c727","url":"assets/images/doubleTypeDetailed-ae7ca7c59b945b8e0fa80c7fd82fc08e.png"},{"revision":"d23914978df6f8c0c67b897c7d2ef3b1","url":"assets/images/example2-memory-occupation-c76980f109d3cf1731f330b8ee546102.png"},{"revision":"dc003223cb402998b3ae62e4a1213a47","url":"assets/images/example3-b9fc1a2c20a2de5c00592e0203b484c4.png"},{"revision":"6dd4f71e7ab9b5c1ee4989c19ca1382c","url":"assets/images/example4-88a54a29ba30552916047f599bc673a0.png"},{"revision":"a5446c79630b20a8944ea9a1a7a52a87","url":"assets/images/flags-95df8c0e2035528abda1ed8b6a3c6a7c.png"},{"revision":"502658bbecf9de9307b9d3227562eeb4","url":"assets/images/floatType-0f9da85937c0562a97d7f3b6b03e8f72.png"},{"revision":"0c6d4ea7015399f0b5e7aab99fe9e254","url":"assets/images/floatTypeDetailed-94b577a4fcc47ffe7711e6078759972c.png"},{"revision":"562c0655f338d4cd7d8ceb6b12204dd1","url":"assets/images/flowChart-325c3bf2a69273f199f55804953e803e.png"},{"revision":"f2f82cc8e4261d2954d12f67726b724a","url":"assets/images/fopen-07bc080993d92c11eeccbe3433a156db.png"},{"revision":"569d376afa7f858b976501b28f3966af","url":"assets/images/function-a5609357ec7a3714a89e6b8a0a2b1c76.png"},{"revision":"7761937e02892e1b0da95ff70dc42694","url":"assets/images/getchar-4bbf6cb17875a6ee991afd2d338997b3.png"},{"revision":"51b73fe8d09077b4bb2235cc04eecf0c","url":"assets/images/hardware-784ff08516ea99c88d31c6aa584fcf8c.png"},{"revision":"eb0d033ef7680c48fa9d042f456177c9","url":"assets/images/image18-74e59c9cc7d90ed0fa02b5202e54ebf7.png"},{"revision":"9564946e4f14735e4dd73b3e0440b3cc","url":"assets/images/image21-c93c5084abf036eda1ad8eb8c2aadadc.png"},{"revision":"3a3505e1e75686eeb7ea7aaddd54e70c","url":"assets/images/image22-370ae9217a1e66a4113df60b3d130760.png"},{"revision":"613bfcdd913759af82ec9e2c8d269085","url":"assets/images/image25-38f7668be78f6c4d46f7a13beda33269.png"},{"revision":"6ef6f40b4dbec1ea55a37ca398d5fd59","url":"assets/images/image26-392914dc0ad33c98f016eea21d8ef845.png"},{"revision":"5b23e56cbef4781c15380c6b075f8585","url":"assets/images/image33-97a20f7670ce93f5d6ebee76821303e8.png"},{"revision":"f82e6853dd0b7131ceb284213b7ee975","url":"assets/images/image34-b8bf0942477cf59e59625ef8331d322f.png"},{"revision":"573b329ad70ee785c3d5800f18c3acdb","url":"assets/images/image35-5827db2e30ddd672401f42ba2755d93e.png"},{"revision":"e850dd3120e0ccd511027cf1db2811c5","url":"assets/images/image36-3127a2d41d51f435d25c95e6c51b453a.png"},{"revision":"bfbebf594bab53bf6cb5ee5fa438258f","url":"assets/images/index-of-null-terminator-ed748f1d391734fd7f1995ddedc3a1fb.png"},{"revision":"571bd677d3828c3f6b7541f96d709b22","url":"assets/images/intType-675bd764f343624601ba9d0686492d4f.png"},{"revision":"c50c527dad4541d6cd7f70ad400ead83","url":"assets/images/iteration-f247c8d36bf77551b27affb900fd0720.png"},{"revision":"fe10e44a6e7e10703e374e8ea7d01dfb","url":"assets/images/longDoubleType-25740460746c02d9bd2fce3be52cc553.png"},{"revision":"f2a1f7601697f819d7c6618298f780bc","url":"assets/images/longIntType-7d5d49c134a72dfd18cb89d77a7305fd.png"},{"revision":"56fc74229e9bb71d75ec9dc3aaaf4708","url":"assets/images/longLongIntType-8cad34a68a734ff81c32de99924074df.png"},{"revision":"c4fc5585862dd0c7eb620cf498116a86","url":"assets/images/modules-5605c76adef45212777be23be7f21b6b.png"},{"revision":"e09f19e76c053134af4a8187d047a45b","url":"assets/images/multiple-b18904b0d3824d17eea24fe466a90d68.png"},{"revision":"12f755e7dcad9655ad6c86656656c5c9","url":"assets/images/printf-af8d47cd68a21dfe9fb9d45283a6c6e5.png"},{"revision":"18c8ed2e1428ad0c524f8189dcbaaade","url":"assets/images/programmer-d2ff9589694dab189661e4b111b2c25e.png"},{"revision":"9480715e0733faf21c97c9c13bdcef12","url":"assets/images/putchar-50b25f417e8f7854d588967db5c46b56.png"},{"revision":"9fe257dbb1424e4dd430b7bc0888dc71","url":"assets/images/ram-b36e26e10295c0a175e7b47c4ed7f8c1.png"},{"revision":"02fe164dcfec1db0a0a63a75793cd8f2","url":"assets/images/scanf-2415be7515c897882039fd6ff30f2c4f.png"},{"revision":"2506aaa68f44e7ce59d09336d79d5173","url":"assets/images/scope-27eaba280229d8c880b6b92f9656f8da.png"},{"revision":"65cc220611c3c6ca9846438cf2a41ee3","url":"assets/images/selection-d79421e9833ccb6a138a4e9000d14874.png"},{"revision":"dbf6e8bf265c2229fead2a8a3635cb81","url":"assets/images/shortIntType-1d852656f06c3c029f9e4232adbc9a9c.png"},{"revision":"1a00eddb9d8c57504356576cc6bf99f8","url":"assets/images/software-fe12acf4a3da1ef1c783958d306f0331.png"},{"revision":"853678c3d94559a0292b2c14d259a0c0","url":"assets/images/structured-8ff802e1942e4d9e1e89b06442387842.png"},{"revision":"44215a7e46dca833eb18cfa4abd91b3e","url":"assets/images/structures-walkthrough-table-ffad408f453d9da10956ff4a932a6c7f.png"},{"revision":"544892ab2001979454cf3267a266818f","url":"assets/images/tables-e8ea532580072d6bab9f5bd3878f4880.png"},{"revision":"bbef83cafcff866385ba50b21bbe7a56","url":"assets/images/walkthrough-09708809c1a32e4de8d9b4ab6181ef50.png"},{"revision":"c95838674519b5aa7dd3aa715b02f731","url":"img/2dArray.png"},{"revision":"6b8b74caffb7b6fc2c83d2a3ad78bbcb","url":"img/alu.png"},{"revision":"12dccaa1311b6b6a6c1fa8436b3af8e9","url":"img/arrays/array-with-8-elements.png"},{"revision":"f799f647053bf7a721669a9bb7396f18","url":"img/arrays/array-with-null-terminator.png"},{"revision":"ea97382591cec272f870b2c1c1608d7a","url":"img/arrays/array-with-values.png"},{"revision":"e9144a1aa2e11318b2c6742833be09b7","url":"img/arrays/array.png"},{"revision":"bfbebf594bab53bf6cb5ee5fa438258f","url":"img/arrays/index-of-null-terminator.png"},{"revision":"fb464393084cf99f81be403b43ee907c","url":"img/assembler.png"},{"revision":"a8e06ef89586592fd5947b9aa2c089d2","url":"img/buffer.png"},{"revision":"d3f84eeb01a9f62ed8cdc354abe2e77d","url":"img/bufferout.png"},{"revision":"0b582513eb9d32ce418453e573a2ff3d","url":"img/bytenibbit.jpg"},{"revision":"14c3e1effc78a8ba57a0af605cc7aa39","url":"img/calculation.png"},{"revision":"ef2ec2ab702629c792fb20605aa8a373","url":"img/calling.png"},{"revision":"f90dec7b70cce0c0e0befd4a02f9c4bd","url":"img/charType.png"},{"revision":"ad1c20b8901d96bb02a09a035b23e0a3","url":"img/cl.png"},{"revision":"e74fccf74795df7bc7c38003ed1b2f36","url":"img/click-to-select-region.png"},{"revision":"4c7e9a076b49212ef015161ba08ed7d0","url":"img/compiler.png"},{"revision":"c225513f559c5247fd6b2c47cd69135e","url":"img/constructs.png"},{"revision":"4eaf0e5dbd15d918833260f3517d7b03","url":"img/cpu.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ba2a6b2ac32b999f20f309cb40aaaa40","url":"img/doubleType.png"},{"revision":"76de21d199665269b07219c5a566c727","url":"img/doubleTypeDetailed.png"},{"revision":"7f0f5c81147ea707d4b4fdca8befb1a7","url":"img/download-selected-region.png"},{"revision":"f5592bf24aa12f517da1fc0a3403df72","url":"img/example1-memory-occupation.png"},{"revision":"d23914978df6f8c0c67b897c7d2ef3b1","url":"img/example2-memory-occupation.png"},{"revision":"dc003223cb402998b3ae62e4a1213a47","url":"img/example3.png"},{"revision":"6dd4f71e7ab9b5c1ee4989c19ca1382c","url":"img/example4.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"8ded5056ddf7492f042c5507ccb76db3","url":"img/fields.png"},{"revision":"ec7eb8419987ac1dbd0bc194ff15c6f4","url":"img/files.png"},{"revision":"a5446c79630b20a8944ea9a1a7a52a87","url":"img/flags.png"},{"revision":"502658bbecf9de9307b9d3227562eeb4","url":"img/floatType.png"},{"revision":"0c6d4ea7015399f0b5e7aab99fe9e254","url":"img/floatTypeDetailed.png"},{"revision":"562c0655f338d4cd7d8ceb6b12204dd1","url":"img/flowChart.png"},{"revision":"75b8ef1ef6de589c459d96e1f22b7914","url":"img/flowg.gif"},{"revision":"f2f82cc8e4261d2954d12f67726b724a","url":"img/fopen.png"},{"revision":"2ca57db3c02de021b5770e571f6fba42","url":"img/four-byte-representation.png"},{"revision":"569d376afa7f858b976501b28f3966af","url":"img/function.png"},{"revision":"4e82aecdc7202668ef3d3f06f85ba8b7","url":"img/gcc.png"},{"revision":"7761937e02892e1b0da95ff70dc42694","url":"img/getchar.png"},{"revision":"51b73fe8d09077b4bb2235cc04eecf0c","url":"img/hardware.png"},{"revision":"01aadc3b47eabec27d4bf956fa38f496","url":"img/image10.png"},{"revision":"eb0d033ef7680c48fa9d042f456177c9","url":"img/image18.png"},{"revision":"9564946e4f14735e4dd73b3e0440b3cc","url":"img/image21.png"},{"revision":"3a3505e1e75686eeb7ea7aaddd54e70c","url":"img/image22.png"},{"revision":"613bfcdd913759af82ec9e2c8d269085","url":"img/image25.png"},{"revision":"6ef6f40b4dbec1ea55a37ca398d5fd59","url":"img/image26.png"},{"revision":"5b23e56cbef4781c15380c6b075f8585","url":"img/image33.png"},{"revision":"f82e6853dd0b7131ceb284213b7ee975","url":"img/image34.png"},{"revision":"573b329ad70ee785c3d5800f18c3acdb","url":"img/image35.png"},{"revision":"e850dd3120e0ccd511027cf1db2811c5","url":"img/image36.png"},{"revision":"17073ae4bd575ff6a35d290f226e5c6d","url":"img/image5.png"},{"revision":"d22f200f6224060417a308a075d3e33e","url":"img/instruction.png"},{"revision":"571bd677d3828c3f6b7541f96d709b22","url":"img/intType.png"},{"revision":"c50c527dad4541d6cd7f70ad400ead83","url":"img/iteration.png"},{"revision":"381bce9ba29bbc5568caf10418089a4a","url":"img/languages.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"fe10e44a6e7e10703e374e8ea7d01dfb","url":"img/longDoubleType.png"},{"revision":"f2a1f7601697f819d7c6618298f780bc","url":"img/longIntType.png"},{"revision":"56fc74229e9bb71d75ec9dc3aaaf4708","url":"img/longLongIntType.png"},{"revision":"e81e9fd34276b296da5aad9bbe659070","url":"img/memory-map.png"},{"revision":"c4fc5585862dd0c7eb620cf498116a86","url":"img/modules.png"},{"revision":"e09f19e76c053134af4a8187d047a45b","url":"img/multiple.png"},{"revision":"12f755e7dcad9655ad6c86656656c5c9","url":"img/printf.png"},{"revision":"18c8ed2e1428ad0c524f8189dcbaaade","url":"img/programmer.png"},{"revision":"9480715e0733faf21c97c9c13bdcef12","url":"img/putchar.png"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"9fe257dbb1424e4dd430b7bc0888dc71","url":"img/ram.png"},{"revision":"bb94cb1eb85de30c49bd1c307196a371","url":"img/records.png"},{"revision":"80f4cfaf65b61dc3e5f8f540a8cf37c5","url":"img/result-of-converted-table.png"},{"revision":"02fe164dcfec1db0a0a63a75793cd8f2","url":"img/scanf.png"},{"revision":"2506aaa68f44e7ce59d09336d79d5173","url":"img/scope.png"},{"revision":"65cc220611c3c6ca9846438cf2a41ee3","url":"img/selection.png"},{"revision":"dbf6e8bf265c2229fead2a8a3635cb81","url":"img/shortIntType.png"},{"revision":"1a00eddb9d8c57504356576cc6bf99f8","url":"img/software.png"},{"revision":"84e5661571103428d3ae472ea371c58c","url":"img/standards.png"},{"revision":"853678c3d94559a0292b2c14d259a0c0","url":"img/structured.png"},{"revision":"44215a7e46dca833eb18cfa4abd91b3e","url":"img/structures-walkthrough-table.png"},{"revision":"544892ab2001979454cf3267a266818f","url":"img/tables.png"},{"revision":"52fdbf1ab751f332a5ca688ec64b9bdd","url":"img/take-screenshot.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"5a58fa56aae051288f377e8ba7e30e59","url":"img/types.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"bbef83cafcff866385ba50b21bbe7a56","url":"img/walkthrough.png"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();