(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"34c1f6a2a374d29d0a312342517133d2","url":"404.html"},{"revision":"23c08ed1ff9a32a2fab400ac659a3c28","url":"assets/css/styles.3bebf718.css"},{"revision":"239792d862df91ae61cab9f79c7a96ed","url":"assets/js/0cc29fcc.85694615.js"},{"revision":"451b79338ac8b0ce1cd4ee8471791955","url":"assets/js/0e384e19.36f31ad7.js"},{"revision":"b7ff48fc4bbff04b462480bcb37708d4","url":"assets/js/131.4799c67f.js"},{"revision":"ddf2cb62a294efb0261bcf0a569732fa","url":"assets/js/17896441.ea61c3bd.js"},{"revision":"17b95c8d87cec11ccc7b7a8c0d7e28a2","url":"assets/js/1be78505.e251cb06.js"},{"revision":"3601db598d8287801d640b4703af6005","url":"assets/js/2cf355b8.423c1a0a.js"},{"revision":"c5f65ff6f52b39f91f29abdea8454b62","url":"assets/js/3382963c.4f6bc91d.js"},{"revision":"35862d381736ba805532544e9b6289bd","url":"assets/js/33fabada.2525a268.js"},{"revision":"fa4922496e4edd048f77d2a0d1d0431e","url":"assets/js/4032b14d.4d57b2dc.js"},{"revision":"0122e809a9aacef1f2e93e63ad923810","url":"assets/js/422db77a.dd61fbeb.js"},{"revision":"8c0e54a856c89f122f3ab8f9306a4314","url":"assets/js/4303f665.ec0543b0.js"},{"revision":"a3f0fdc4d4f8d5b56212abe3585b7936","url":"assets/js/444.bd268d7e.js"},{"revision":"385e39e80c6813c4a6034331ba21cce6","url":"assets/js/4515fa64.8b75d0e2.js"},{"revision":"d6ce252927138b17a1b6b3df057dd5e3","url":"assets/js/56a8551a.ec5c4553.js"},{"revision":"81cfbead79da02f94afab79adc09b15c","url":"assets/js/5a0316ec.0a7707e7.js"},{"revision":"a2574c90c157562afd46c18449e421ed","url":"assets/js/5a489454.11422fc2.js"},{"revision":"27c15cde69fe4fc45bee29306a2befbc","url":"assets/js/5b5f059d.0e33234d.js"},{"revision":"d2c862927808f421382e640f040ace1f","url":"assets/js/662be6d3.1564ab23.js"},{"revision":"ce7cdef5b279fc9c811f7df8192d81ff","url":"assets/js/6bc3106f.d01c4932.js"},{"revision":"f6504c32ee656826495f967a02050fa4","url":"assets/js/749ee8a4.4c466eda.js"},{"revision":"e12e8b45ea749eb5b152ab685e27da85","url":"assets/js/75.94d6ee0c.js"},{"revision":"ff36851663b32897dd6d42e31a88aa48","url":"assets/js/7d53361e.aa697220.js"},{"revision":"69261bf536c9ba341bd917cd9675d32a","url":"assets/js/814.8f385b29.js"},{"revision":"f78db2c157f792c556072aba0858cf79","url":"assets/js/9052a911.7687a84b.js"},{"revision":"9d18cfae934931af4a96da70005c1617","url":"assets/js/923.42522b5e.js"},{"revision":"643711a1fd1ba82e42b28cae11c833df","url":"assets/js/935f2afb.343ef324.js"},{"revision":"0d0e43570f9654ef3bbda3d244a9b136","url":"assets/js/937af094.f131d3ec.js"},{"revision":"51b7ac733682636f3649c9e2e0e44c8f","url":"assets/js/9e4087bc.541adb14.js"},{"revision":"ef3f209509399dff73164d78db995f1e","url":"assets/js/a4ceae05.b52006c1.js"},{"revision":"a6b5a2b6df9e6cc7f2431180d74783f0","url":"assets/js/a6fda238.ff54e9ee.js"},{"revision":"0d206d16e173a0f85357c3b902ac24b4","url":"assets/js/b2f554cd.4250bf5f.js"},{"revision":"ec2434cc18e298b2c123e3365af26987","url":"assets/js/b4ee539c.250a54ea.js"},{"revision":"c27371ca9fa17bb03a21fb37b278bb2c","url":"assets/js/b5beb390.77098087.js"},{"revision":"d94642c6416610fdabd2b7fbbf1e8879","url":"assets/js/b5eb431a.9201498d.js"},{"revision":"4570ac1572415f5751ebf2ced37b764e","url":"assets/js/c732709b.eebcf7c4.js"},{"revision":"939808c82a6956177ecff1b7a196a020","url":"assets/js/c87e92e6.74450998.js"},{"revision":"1bcc9b4cb41c9e0ec94baf20f4ae3574","url":"assets/js/cee6b58e.cafc6048.js"},{"revision":"947e88be49ee0fefd01b38b4254ed537","url":"assets/js/d6ffb831.49ee8013.js"},{"revision":"8d9f80e6b7b7e60476c7428ebf22bff7","url":"assets/js/d83e5981.d8c6e89b.js"},{"revision":"65999d241183acd5c10b51a2175ce875","url":"assets/js/dc5ffb51.2233caa2.js"},{"revision":"67ecf059ed9fcbc67b174d3abac4a50e","url":"assets/js/dd68b280.2b0ac4dc.js"},{"revision":"cfcf23b3cd146d2d26786f4fc9d1ec71","url":"assets/js/ef36065f.a67e70b8.js"},{"revision":"8fc39b6bd18faa55e3c7f4f3b79223d3","url":"assets/js/main.59863c1f.js"},{"revision":"d9a3698b9326f80c5c03b0a447818789","url":"assets/js/runtime~main.b5a41344.js"},{"revision":"9bb7fb8c10b16ac4905e6e46dd959353","url":"B-computations/expressions.html"},{"revision":"a523b17960163ebc655525571a213d56","url":"B-Computations/types.html"},{"revision":"d9fec7ebf0dab45a04bee6b8899f0c87","url":"blog/archive.html"},{"revision":"0f6f7098dc3193520c229fc4dc1b222e","url":"computations/a-simple-calculation.html"},{"revision":"b42cb3f9feea46b029688d266d35fe31","url":"computations/logic.html"},{"revision":"63b430357ab36e8990e26272571f438c","url":"computations/style-guidelines.html"},{"revision":"da3e6b5bc818950dbe939527435c45ca","url":"computations/testing-and-debugging.html"},{"revision":"0a9d0d5e7394ae90f15b0f7906428685","url":"D-Modularity/functions-arrays-and-structs.html"},{"revision":"5f38b47c7d657a10f54c02257ad1753d","url":"D-Modularity/functions.html"},{"revision":"45f64784e18a2c9936c7071bfd2fb1b9","url":"D-Modularity/input-functions.html"},{"revision":"7e2e8fc4ee92cb3bdb0c5d9a796ed6a8","url":"D-Modularity/library-functions.html"},{"revision":"279e37ab28c4fe0e59849e56f3165b19","url":"D-Modularity/modularity/output-functions.html"},{"revision":"41b83d3f60fc6c7a74ba32d337311613","url":"data-structures/arrays.html"},{"revision":"05299c4dcfa839cfb7983cd339c15f46","url":"data-structures/structures.html"},{"revision":"abdf411fed6d24a1b487d79f91702c5b","url":"E-Secondary-Storage/text-files.html"},{"revision":"7d0a4b6964a1fff5a71072b06eced8d9","url":"F-Refinements/character-strings.html"},{"revision":"10b6b1cc72c77890f2b05faabed36fb2","url":"F-Refinements/pointers-arrays-and-structs.html"},{"revision":"0994c5d243b09db16a46f64f1573e7ba","url":"index.html"},{"revision":"91e4b490c3229c0fa1974e40a4bbc52a","url":"introduction/compilers.html"},{"revision":"5ca590659f58b15eacbebf1e3e23f93e","url":"introduction/computers.html"},{"revision":"e4d28231af46f609994f054326fbfea0","url":"introduction/information.html"},{"revision":"966695ea5021ff1b156c1b742d905986","url":"manifest.json"},{"revision":"098503be55a7c71aa59aeef192fb2975","url":"modularity/pointers.html"},{"revision":"488f4ce54d917ff8f61f86060f4d4a03","url":"refinements/algorithms.html"},{"revision":"41623b0b735e0addd3f5a361f8b22999","url":"refinements/more-input-and-output.html"},{"revision":"3135c9ec8d9a8612227fff9d75dc2417","url":"refinements/portability.html"},{"revision":"2ddef271cbc965bfd6015b5410eec02c","url":"refinements/string-library.html"},{"revision":"c9976accd01fc77540f3fd6449b409cd","url":"refinements/two-dimensional-arrays.html"},{"revision":"b461ae44d18bcdd946d3d0925e013c5d","url":"Resources-Appendices/ascii-collating-sequence.html"},{"revision":"b7b5522ca3e934f11d3534acfee49b8a","url":"Resources-Appendices/data-conversions.html"},{"revision":"1b451038cbf70f73fa30e13b719a1c17","url":"Resources-Appendices/ebcdic-collating-sequence.html"},{"revision":"8d2c1b30cae38b203caacc6d5d0d630a","url":"resources-appendices/operators.html"},{"revision":"aa38cd33457ae580976577c22b6fed67","url":"secondary-storage/records-and-files.html"},{"revision":"9fa0fbda40a853d1b56bbe6b1b0aaf71","url":"weeklyContents.html"},{"revision":"12dccaa1311b6b6a6c1fa8436b3af8e9","url":"assets/images/array-with-8-elements-9cc288c9efdd2ba710d56b209d40d1de.png"},{"revision":"ea97382591cec272f870b2c1c1608d7a","url":"assets/images/array-with-values-5c517d30e4e5e9721c10e11709f70ba7.png"},{"revision":"0b582513eb9d32ce418453e573a2ff3d","url":"assets/images/bytenibbit-07ecd6ebcd709b1c68b3165fc4eb7b70.jpg"},{"revision":"c225513f559c5247fd6b2c47cd69135e","url":"assets/images/constructs-89cf24b6a624e60d4348b049a41405be.png"},{"revision":"d23914978df6f8c0c67b897c7d2ef3b1","url":"assets/images/example2-memory-occupation-c76980f109d3cf1731f330b8ee546102.png"},{"revision":"dc003223cb402998b3ae62e4a1213a47","url":"assets/images/example3-b9fc1a2c20a2de5c00592e0203b484c4.png"},{"revision":"6dd4f71e7ab9b5c1ee4989c19ca1382c","url":"assets/images/example4-88a54a29ba30552916047f599bc673a0.png"},{"revision":"a5446c79630b20a8944ea9a1a7a52a87","url":"assets/images/flags-95df8c0e2035528abda1ed8b6a3c6a7c.png"},{"revision":"562c0655f338d4cd7d8ceb6b12204dd1","url":"assets/images/flowChart-325c3bf2a69273f199f55804953e803e.png"},{"revision":"eb0d033ef7680c48fa9d042f456177c9","url":"assets/images/image18-74e59c9cc7d90ed0fa02b5202e54ebf7.png"},{"revision":"9564946e4f14735e4dd73b3e0440b3cc","url":"assets/images/image21-c93c5084abf036eda1ad8eb8c2aadadc.png"},{"revision":"3a3505e1e75686eeb7ea7aaddd54e70c","url":"assets/images/image22-370ae9217a1e66a4113df60b3d130760.png"},{"revision":"613bfcdd913759af82ec9e2c8d269085","url":"assets/images/image25-38f7668be78f6c4d46f7a13beda33269.png"},{"revision":"6ef6f40b4dbec1ea55a37ca398d5fd59","url":"assets/images/image26-392914dc0ad33c98f016eea21d8ef845.png"},{"revision":"5b23e56cbef4781c15380c6b075f8585","url":"assets/images/image33-97a20f7670ce93f5d6ebee76821303e8.png"},{"revision":"f82e6853dd0b7131ceb284213b7ee975","url":"assets/images/image34-b8bf0942477cf59e59625ef8331d322f.png"},{"revision":"573b329ad70ee785c3d5800f18c3acdb","url":"assets/images/image35-5827db2e30ddd672401f42ba2755d93e.png"},{"revision":"e850dd3120e0ccd511027cf1db2811c5","url":"assets/images/image36-3127a2d41d51f435d25c95e6c51b453a.png"},{"revision":"bfbebf594bab53bf6cb5ee5fa438258f","url":"assets/images/index-of-null-terminator-ed748f1d391734fd7f1995ddedc3a1fb.png"},{"revision":"c50c527dad4541d6cd7f70ad400ead83","url":"assets/images/iteration-f247c8d36bf77551b27affb900fd0720.png"},{"revision":"9fe257dbb1424e4dd430b7bc0888dc71","url":"assets/images/ram-b36e26e10295c0a175e7b47c4ed7f8c1.png"},{"revision":"2506aaa68f44e7ce59d09336d79d5173","url":"assets/images/scope-27eaba280229d8c880b6b92f9656f8da.png"},{"revision":"65cc220611c3c6ca9846438cf2a41ee3","url":"assets/images/selection-d79421e9833ccb6a138a4e9000d14874.png"},{"revision":"853678c3d94559a0292b2c14d259a0c0","url":"assets/images/structured-8ff802e1942e4d9e1e89b06442387842.png"},{"revision":"44215a7e46dca833eb18cfa4abd91b3e","url":"assets/images/structures-walkthrough-table-ffad408f453d9da10956ff4a932a6c7f.png"},{"revision":"544892ab2001979454cf3267a266818f","url":"assets/images/tables-e8ea532580072d6bab9f5bd3878f4880.png"},{"revision":"12dccaa1311b6b6a6c1fa8436b3af8e9","url":"img/arrays/array-with-8-elements.png"},{"revision":"f799f647053bf7a721669a9bb7396f18","url":"img/arrays/array-with-null-terminator.png"},{"revision":"ea97382591cec272f870b2c1c1608d7a","url":"img/arrays/array-with-values.png"},{"revision":"e9144a1aa2e11318b2c6742833be09b7","url":"img/arrays/array.png"},{"revision":"bfbebf594bab53bf6cb5ee5fa438258f","url":"img/arrays/index-of-null-terminator.png"},{"revision":"0b582513eb9d32ce418453e573a2ff3d","url":"img/bytenibbit.jpg"},{"revision":"c225513f559c5247fd6b2c47cd69135e","url":"img/constructs.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"f5592bf24aa12f517da1fc0a3403df72","url":"img/example1-memory-occupation.png"},{"revision":"d23914978df6f8c0c67b897c7d2ef3b1","url":"img/example2-memory-occupation.png"},{"revision":"dc003223cb402998b3ae62e4a1213a47","url":"img/example3.png"},{"revision":"6dd4f71e7ab9b5c1ee4989c19ca1382c","url":"img/example4.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"a5446c79630b20a8944ea9a1a7a52a87","url":"img/flags.png"},{"revision":"562c0655f338d4cd7d8ceb6b12204dd1","url":"img/flowChart.png"},{"revision":"2ca57db3c02de021b5770e571f6fba42","url":"img/four-byte-representation.png"},{"revision":"01aadc3b47eabec27d4bf956fa38f496","url":"img/image10.png"},{"revision":"eb0d033ef7680c48fa9d042f456177c9","url":"img/image18.png"},{"revision":"9564946e4f14735e4dd73b3e0440b3cc","url":"img/image21.png"},{"revision":"3a3505e1e75686eeb7ea7aaddd54e70c","url":"img/image22.png"},{"revision":"613bfcdd913759af82ec9e2c8d269085","url":"img/image25.png"},{"revision":"6ef6f40b4dbec1ea55a37ca398d5fd59","url":"img/image26.png"},{"revision":"5b23e56cbef4781c15380c6b075f8585","url":"img/image33.png"},{"revision":"f82e6853dd0b7131ceb284213b7ee975","url":"img/image34.png"},{"revision":"573b329ad70ee785c3d5800f18c3acdb","url":"img/image35.png"},{"revision":"e850dd3120e0ccd511027cf1db2811c5","url":"img/image36.png"},{"revision":"17073ae4bd575ff6a35d290f226e5c6d","url":"img/image5.png"},{"revision":"c50c527dad4541d6cd7f70ad400ead83","url":"img/iteration.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"e81e9fd34276b296da5aad9bbe659070","url":"img/memorymap.png"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"9fe257dbb1424e4dd430b7bc0888dc71","url":"img/ram.png"},{"revision":"2506aaa68f44e7ce59d09336d79d5173","url":"img/scope.png"},{"revision":"65cc220611c3c6ca9846438cf2a41ee3","url":"img/selection.png"},{"revision":"853678c3d94559a0292b2c14d259a0c0","url":"img/structured.png"},{"revision":"44215a7e46dca833eb18cfa4abd91b3e","url":"img/structures-walkthrough-table.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();