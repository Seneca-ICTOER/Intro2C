(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"d3f023cf850ee84131077ccfbf4a361f","url":"404.html"},{"revision":"ba25eb68eba4e36bb1ccbe7c237a918c","url":"A-Introduction/compilers.html"},{"revision":"a77b0e1e01f8856b9de5f347872a79b5","url":"A-Introduction/computers.html"},{"revision":"80c629352972c74943d0c8503cbb5434","url":"A-Introduction/information.html"},{"revision":"18e700e309b4bbba146de53a8c7558a6","url":"assets/css/styles.a1e99f15.css"},{"revision":"8e97a365b13a4b130383b1b9cc8969e2","url":"assets/js/0cc29fcc.fa32dd2d.js"},{"revision":"db27bd3f958bea0dce5e97dee22fbb35","url":"assets/js/0e384e19.620da043.js"},{"revision":"b7ff48fc4bbff04b462480bcb37708d4","url":"assets/js/131.4799c67f.js"},{"revision":"ddf2cb62a294efb0261bcf0a569732fa","url":"assets/js/17896441.ea61c3bd.js"},{"revision":"17b95c8d87cec11ccc7b7a8c0d7e28a2","url":"assets/js/1be78505.e251cb06.js"},{"revision":"833654807c5876b733661ed360881980","url":"assets/js/2cf355b8.9146be58.js"},{"revision":"09ed1d196685cd5ec5d7a9dae708de69","url":"assets/js/3382963c.5ca30673.js"},{"revision":"8342596d09d6d41f4665cb8c83c83dd5","url":"assets/js/33fabada.509ec98a.js"},{"revision":"d801b3fd99bcb156672f60e83ea25a94","url":"assets/js/4032b14d.0fc484db.js"},{"revision":"f37c11954ec0aa4abbc702528abfcdbb","url":"assets/js/422db77a.4139453e.js"},{"revision":"2fe18822a8737f6c8524c5ca9a651ddf","url":"assets/js/4303f665.fb7759b6.js"},{"revision":"a3f0fdc4d4f8d5b56212abe3585b7936","url":"assets/js/444.bd268d7e.js"},{"revision":"46d16a31ed5c44bd7f95feb583fc92da","url":"assets/js/4515fa64.c854a23e.js"},{"revision":"7f19704d16f4ade6603677bf334439f4","url":"assets/js/56a8551a.3e5fb390.js"},{"revision":"a48563274c109c6c59423000b08e5748","url":"assets/js/5a0316ec.6ce925bd.js"},{"revision":"dbb75d5e878b49a6a5963b8bda5edc9b","url":"assets/js/5a489454.b74033fd.js"},{"revision":"12e6327e5caa9f9885a454fd1c80a3ba","url":"assets/js/5b5f059d.d3e63a2a.js"},{"revision":"6201a145db7dbb26c48e2a01ef37b134","url":"assets/js/662be6d3.9dccee6a.js"},{"revision":"103767f8cb5e3ea70ce54e2f65ac47c8","url":"assets/js/6bc3106f.1c521d7d.js"},{"revision":"40b3b4d41e2b697bd9edf51c813c4f0a","url":"assets/js/749ee8a4.f1880dfd.js"},{"revision":"e12e8b45ea749eb5b152ab685e27da85","url":"assets/js/75.94d6ee0c.js"},{"revision":"916e8d065fdd7426b4c62e3da7a8adc2","url":"assets/js/7d53361e.3d0489b8.js"},{"revision":"69261bf536c9ba341bd917cd9675d32a","url":"assets/js/814.8f385b29.js"},{"revision":"e3eec36c0a9d93836718aeddad5c2831","url":"assets/js/9052a911.5e0fbff3.js"},{"revision":"9d18cfae934931af4a96da70005c1617","url":"assets/js/923.42522b5e.js"},{"revision":"49c5ffd2e441b4f0dbeb89493c3d9ae3","url":"assets/js/935f2afb.78e09dba.js"},{"revision":"38d9527d70cf46ad521d485f22f4ef59","url":"assets/js/937af094.4f94c7b5.js"},{"revision":"51b7ac733682636f3649c9e2e0e44c8f","url":"assets/js/9e4087bc.541adb14.js"},{"revision":"d22553a24637289d9ed85d1941b14904","url":"assets/js/a4ceae05.6087a262.js"},{"revision":"8b05bbb2f23f5c1802fa73176ff5ba5e","url":"assets/js/a6fda238.06845715.js"},{"revision":"0d206d16e173a0f85357c3b902ac24b4","url":"assets/js/b2f554cd.4250bf5f.js"},{"revision":"6f4094cd7049cf08504ee5df870a67c2","url":"assets/js/b4ee539c.b758bcb6.js"},{"revision":"954addf322d9659dd89b788a3ffebfbc","url":"assets/js/b5beb390.239ff8b9.js"},{"revision":"4728d0c525683dbb1fe85f6226883c0c","url":"assets/js/b5eb431a.5ab0bf70.js"},{"revision":"0fb723f7cc51fb414cafe79020a52df0","url":"assets/js/c732709b.ab2f8c2e.js"},{"revision":"90617327770c6e665ccaa4767c30c778","url":"assets/js/c87e92e6.fb40e18a.js"},{"revision":"7d05963a064de3510a3a6182752134cc","url":"assets/js/cee6b58e.035e31cf.js"},{"revision":"ef9691929e1a6cdf8d259164f10746c3","url":"assets/js/d6ffb831.6aacd557.js"},{"revision":"89e8d12112c5ba5e5fef6b91206e9c47","url":"assets/js/d83e5981.147950fb.js"},{"revision":"7b24b4e811cecbc55be3edd3b0b65d2c","url":"assets/js/dc5ffb51.4091745b.js"},{"revision":"fdb043023ed6c18a9f4f75b8e2a5946b","url":"assets/js/dd68b280.e15a3f45.js"},{"revision":"29a8844c6c64ca595ce7d831dfe36b8d","url":"assets/js/ef36065f.367ada90.js"},{"revision":"9b4b75f97879c4d6b0b570473da1b18a","url":"assets/js/main.8c5b31e5.js"},{"revision":"2bc9fa15c7ffb2948c56e5a8777d33e3","url":"assets/js/runtime~main.3274894b.js"},{"revision":"7bbea6bd4fbc05fd7c38a41904b43a32","url":"B-Computations/a-simple-calculation.html"},{"revision":"212b8847b2414fb128caca2fe2ade97c","url":"B-Computations/expressions.html"},{"revision":"9454ab642baef1d70894c9457dec2521","url":"B-Computations/logic.html"},{"revision":"71eb058fb7566309c105941431808202","url":"B-Computations/style-guidelines.html"},{"revision":"0e0c78a1a2bb1ea5bc23e1df21053279","url":"B-Computations/testing-and-debugging.html"},{"revision":"b712af88aa3e878ff28bbbd717134c0b","url":"B-Computations/types.html"},{"revision":"21528bffa38d3508d188be17414e4ed0","url":"blog/archive.html"},{"revision":"037ae4dfd569ad60e05bd2a58bce825c","url":"C-Data-Structures/arrays.html"},{"revision":"ab6fc7ce9e4dee2823ab0b5e275746d0","url":"C-Data-Structures/structures.html"},{"revision":"ddf56c89801c6266153c530311a05042","url":"D-Modularity/functions-arrays-and-structs.html"},{"revision":"d8408155326442b7a7b589709e027bba","url":"D-Modularity/functions.html"},{"revision":"1e4d1fb3110d9f258f5ab7e95ae86b03","url":"D-Modularity/input-functions.html"},{"revision":"0e397a2f9ebd1dd922255848f6a3b54d","url":"D-Modularity/library-functions.html"},{"revision":"0cbe144c0b5e9c865e90da17ec70b65a","url":"D-Modularity/output-functions.html"},{"revision":"69efd886d253a530be66ea5d8ee4c8a6","url":"D-Modularity/pointers.html"},{"revision":"4768bcb1153ce9ef2fa14825771b5e18","url":"E-Secondary-Storage/records-and-files.html"},{"revision":"4a91d2b1bdf3502a24143b033443fa4a","url":"E-Secondary-Storage/text-files.html"},{"revision":"d957e08c819aaf440f364a9cb9cf27db","url":"F-Refinements/algorithms.html"},{"revision":"1f2f86b75ce4f3ee82ce0674babc3669","url":"F-Refinements/character-strings.html"},{"revision":"9e63bb61de16bc91933de3c9b64501f3","url":"F-Refinements/more-input-and-output.html"},{"revision":"c0c0bc32654a9118c1a8f6014f444464","url":"F-Refinements/pointers-arrays-and-structs.html"},{"revision":"f8cfb5bb26edddb813edf00c5ba251e7","url":"F-Refinements/portability.html"},{"revision":"3cc69e8ec05c2394e3eced42c4e2a288","url":"F-Refinements/string-library.html"},{"revision":"2d626f05b1f8650942d4eab9b11dce9e","url":"F-Refinements/two-dimensional-arrays.html"},{"revision":"512ba3ecb2f5f450cf5a986974719b52","url":"index.html"},{"revision":"966695ea5021ff1b156c1b742d905986","url":"manifest.json"},{"revision":"0e425b11485fc62e192d6f9b7eaefaf4","url":"Resources-Appendices/ascii-collating-sequence.html"},{"revision":"fa4ee2574bec13c648a0d89b1252d939","url":"Resources-Appendices/data-conversions.html"},{"revision":"84638aed557a3122feda03e27f241469","url":"Resources-Appendices/ebcdic-collating-sequence.html"},{"revision":"766b1fb1434e8e62aded59490ddcb06f","url":"Resources-Appendices/operators.html"},{"revision":"913794034ebf8e96692e80711c6724c7","url":"weeklyContents.html"},{"revision":"c95838674519b5aa7dd3aa715b02f731","url":"assets/images/2dArray-621013445a0c94ec6880bd2b696d4c3d.png"},{"revision":"6b8b74caffb7b6fc2c83d2a3ad78bbcb","url":"assets/images/alu-48f361e75b0b4d16bb3ac52667de1e9f.png"},{"revision":"12dccaa1311b6b6a6c1fa8436b3af8e9","url":"assets/images/array-with-8-elements-9cc288c9efdd2ba710d56b209d40d1de.png"},{"revision":"ea97382591cec272f870b2c1c1608d7a","url":"assets/images/array-with-values-5c517d30e4e5e9721c10e11709f70ba7.png"},{"revision":"fb464393084cf99f81be403b43ee907c","url":"assets/images/assembler-273240c8881d4d36b768093adab672f6.png"},{"revision":"0b582513eb9d32ce418453e573a2ff3d","url":"assets/images/bytenibbit-07ecd6ebcd709b1c68b3165fc4eb7b70.jpg"},{"revision":"14c3e1effc78a8ba57a0af605cc7aa39","url":"assets/images/calculation-fcff5202ecb8450b556d76c10cbedd24.png"},{"revision":"4c7e9a076b49212ef015161ba08ed7d0","url":"assets/images/compiler-aad7c7aaa7f466886d8854685307a0fa.png"},{"revision":"c225513f559c5247fd6b2c47cd69135e","url":"assets/images/constructs-89cf24b6a624e60d4348b049a41405be.png"},{"revision":"d23914978df6f8c0c67b897c7d2ef3b1","url":"assets/images/example2-memory-occupation-c76980f109d3cf1731f330b8ee546102.png"},{"revision":"dc003223cb402998b3ae62e4a1213a47","url":"assets/images/example3-b9fc1a2c20a2de5c00592e0203b484c4.png"},{"revision":"6dd4f71e7ab9b5c1ee4989c19ca1382c","url":"assets/images/example4-88a54a29ba30552916047f599bc673a0.png"},{"revision":"a5446c79630b20a8944ea9a1a7a52a87","url":"assets/images/flags-95df8c0e2035528abda1ed8b6a3c6a7c.png"},{"revision":"562c0655f338d4cd7d8ceb6b12204dd1","url":"assets/images/flowChart-325c3bf2a69273f199f55804953e803e.png"},{"revision":"f2f82cc8e4261d2954d12f67726b724a","url":"assets/images/fopen-07bc080993d92c11eeccbe3433a156db.png"},{"revision":"569d376afa7f858b976501b28f3966af","url":"assets/images/function-a5609357ec7a3714a89e6b8a0a2b1c76.png"},{"revision":"7761937e02892e1b0da95ff70dc42694","url":"assets/images/getchar-4bbf6cb17875a6ee991afd2d338997b3.png"},{"revision":"51b73fe8d09077b4bb2235cc04eecf0c","url":"assets/images/hardware-784ff08516ea99c88d31c6aa584fcf8c.png"},{"revision":"eb0d033ef7680c48fa9d042f456177c9","url":"assets/images/image18-74e59c9cc7d90ed0fa02b5202e54ebf7.png"},{"revision":"9564946e4f14735e4dd73b3e0440b3cc","url":"assets/images/image21-c93c5084abf036eda1ad8eb8c2aadadc.png"},{"revision":"3a3505e1e75686eeb7ea7aaddd54e70c","url":"assets/images/image22-370ae9217a1e66a4113df60b3d130760.png"},{"revision":"613bfcdd913759af82ec9e2c8d269085","url":"assets/images/image25-38f7668be78f6c4d46f7a13beda33269.png"},{"revision":"6ef6f40b4dbec1ea55a37ca398d5fd59","url":"assets/images/image26-392914dc0ad33c98f016eea21d8ef845.png"},{"revision":"5b23e56cbef4781c15380c6b075f8585","url":"assets/images/image33-97a20f7670ce93f5d6ebee76821303e8.png"},{"revision":"f82e6853dd0b7131ceb284213b7ee975","url":"assets/images/image34-b8bf0942477cf59e59625ef8331d322f.png"},{"revision":"573b329ad70ee785c3d5800f18c3acdb","url":"assets/images/image35-5827db2e30ddd672401f42ba2755d93e.png"},{"revision":"e850dd3120e0ccd511027cf1db2811c5","url":"assets/images/image36-3127a2d41d51f435d25c95e6c51b453a.png"},{"revision":"bfbebf594bab53bf6cb5ee5fa438258f","url":"assets/images/index-of-null-terminator-ed748f1d391734fd7f1995ddedc3a1fb.png"},{"revision":"c50c527dad4541d6cd7f70ad400ead83","url":"assets/images/iteration-f247c8d36bf77551b27affb900fd0720.png"},{"revision":"381bce9ba29bbc5568caf10418089a4a","url":"assets/images/languages-f4d3b9ee3a58537d1c041e2789480b40.png"},{"revision":"c4fc5585862dd0c7eb620cf498116a86","url":"assets/images/modules-5605c76adef45212777be23be7f21b6b.png"},{"revision":"e09f19e76c053134af4a8187d047a45b","url":"assets/images/multiple-b18904b0d3824d17eea24fe466a90d68.png"},{"revision":"12f755e7dcad9655ad6c86656656c5c9","url":"assets/images/printf-af8d47cd68a21dfe9fb9d45283a6c6e5.png"},{"revision":"18c8ed2e1428ad0c524f8189dcbaaade","url":"assets/images/programmer-d2ff9589694dab189661e4b111b2c25e.png"},{"revision":"9480715e0733faf21c97c9c13bdcef12","url":"assets/images/putchar-50b25f417e8f7854d588967db5c46b56.png"},{"revision":"9fe257dbb1424e4dd430b7bc0888dc71","url":"assets/images/ram-b36e26e10295c0a175e7b47c4ed7f8c1.png"},{"revision":"02fe164dcfec1db0a0a63a75793cd8f2","url":"assets/images/scanf-2415be7515c897882039fd6ff30f2c4f.png"},{"revision":"2506aaa68f44e7ce59d09336d79d5173","url":"assets/images/scope-27eaba280229d8c880b6b92f9656f8da.png"},{"revision":"65cc220611c3c6ca9846438cf2a41ee3","url":"assets/images/selection-d79421e9833ccb6a138a4e9000d14874.png"},{"revision":"1a00eddb9d8c57504356576cc6bf99f8","url":"assets/images/software-fe12acf4a3da1ef1c783958d306f0331.png"},{"revision":"853678c3d94559a0292b2c14d259a0c0","url":"assets/images/structured-8ff802e1942e4d9e1e89b06442387842.png"},{"revision":"44215a7e46dca833eb18cfa4abd91b3e","url":"assets/images/structures-walkthrough-table-ffad408f453d9da10956ff4a932a6c7f.png"},{"revision":"544892ab2001979454cf3267a266818f","url":"assets/images/tables-e8ea532580072d6bab9f5bd3878f4880.png"},{"revision":"86ed4ef1f5e1d682b36640a33b82c5a3","url":"assets/images/types-7bcf8fd450e1fbd194054d1b02778ec7.png"},{"revision":"bbef83cafcff866385ba50b21bbe7a56","url":"assets/images/walkthrough-09708809c1a32e4de8d9b4ab6181ef50.png"},{"revision":"c95838674519b5aa7dd3aa715b02f731","url":"img/2dArray.png"},{"revision":"6b8b74caffb7b6fc2c83d2a3ad78bbcb","url":"img/alu.png"},{"revision":"12dccaa1311b6b6a6c1fa8436b3af8e9","url":"img/arrays/array-with-8-elements.png"},{"revision":"f799f647053bf7a721669a9bb7396f18","url":"img/arrays/array-with-null-terminator.png"},{"revision":"ea97382591cec272f870b2c1c1608d7a","url":"img/arrays/array-with-values.png"},{"revision":"e9144a1aa2e11318b2c6742833be09b7","url":"img/arrays/array.png"},{"revision":"bfbebf594bab53bf6cb5ee5fa438258f","url":"img/arrays/index-of-null-terminator.png"},{"revision":"fb464393084cf99f81be403b43ee907c","url":"img/assembler.png"},{"revision":"a8e06ef89586592fd5947b9aa2c089d2","url":"img/buffer.png"},{"revision":"d3f84eeb01a9f62ed8cdc354abe2e77d","url":"img/bufferout.png"},{"revision":"0b582513eb9d32ce418453e573a2ff3d","url":"img/bytenibbit.jpg"},{"revision":"14c3e1effc78a8ba57a0af605cc7aa39","url":"img/calculation.png"},{"revision":"ef2ec2ab702629c792fb20605aa8a373","url":"img/calling.png"},{"revision":"ad1c20b8901d96bb02a09a035b23e0a3","url":"img/cl.png"},{"revision":"e74fccf74795df7bc7c38003ed1b2f36","url":"img/click-to-select-region.png"},{"revision":"4c7e9a076b49212ef015161ba08ed7d0","url":"img/compiler.png"},{"revision":"c225513f559c5247fd6b2c47cd69135e","url":"img/constructs.png"},{"revision":"4eaf0e5dbd15d918833260f3517d7b03","url":"img/cpu.png"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"7f0f5c81147ea707d4b4fdca8befb1a7","url":"img/download-selected-region.png"},{"revision":"f5592bf24aa12f517da1fc0a3403df72","url":"img/example1-memory-occupation.png"},{"revision":"d23914978df6f8c0c67b897c7d2ef3b1","url":"img/example2-memory-occupation.png"},{"revision":"dc003223cb402998b3ae62e4a1213a47","url":"img/example3.png"},{"revision":"6dd4f71e7ab9b5c1ee4989c19ca1382c","url":"img/example4.png"},{"revision":"ef2266bfb84465c731756b58cde0afb8","url":"img/favicon.ico"},{"revision":"8ded5056ddf7492f042c5507ccb76db3","url":"img/fields.png"},{"revision":"ec7eb8419987ac1dbd0bc194ff15c6f4","url":"img/files.png"},{"revision":"a5446c79630b20a8944ea9a1a7a52a87","url":"img/flags.png"},{"revision":"562c0655f338d4cd7d8ceb6b12204dd1","url":"img/flowChart.png"},{"revision":"75b8ef1ef6de589c459d96e1f22b7914","url":"img/flowg.gif"},{"revision":"f2f82cc8e4261d2954d12f67726b724a","url":"img/fopen.png"},{"revision":"2ca57db3c02de021b5770e571f6fba42","url":"img/four-byte-representation.png"},{"revision":"569d376afa7f858b976501b28f3966af","url":"img/function.png"},{"revision":"4e82aecdc7202668ef3d3f06f85ba8b7","url":"img/gcc.png"},{"revision":"7761937e02892e1b0da95ff70dc42694","url":"img/getchar.png"},{"revision":"51b73fe8d09077b4bb2235cc04eecf0c","url":"img/hardware.png"},{"revision":"01aadc3b47eabec27d4bf956fa38f496","url":"img/image10.png"},{"revision":"eb0d033ef7680c48fa9d042f456177c9","url":"img/image18.png"},{"revision":"9564946e4f14735e4dd73b3e0440b3cc","url":"img/image21.png"},{"revision":"3a3505e1e75686eeb7ea7aaddd54e70c","url":"img/image22.png"},{"revision":"613bfcdd913759af82ec9e2c8d269085","url":"img/image25.png"},{"revision":"6ef6f40b4dbec1ea55a37ca398d5fd59","url":"img/image26.png"},{"revision":"5b23e56cbef4781c15380c6b075f8585","url":"img/image33.png"},{"revision":"f82e6853dd0b7131ceb284213b7ee975","url":"img/image34.png"},{"revision":"573b329ad70ee785c3d5800f18c3acdb","url":"img/image35.png"},{"revision":"e850dd3120e0ccd511027cf1db2811c5","url":"img/image36.png"},{"revision":"17073ae4bd575ff6a35d290f226e5c6d","url":"img/image5.png"},{"revision":"d22f200f6224060417a308a075d3e33e","url":"img/instruction.png"},{"revision":"c50c527dad4541d6cd7f70ad400ead83","url":"img/iteration.png"},{"revision":"381bce9ba29bbc5568caf10418089a4a","url":"img/languages.png"},{"revision":"22c6eb8088b86099d5a78b5a13f7b24d","url":"img/logo-dark.svg"},{"revision":"8817e00103e8837d17c2758b0ce25c41","url":"img/logo.svg"},{"revision":"e81e9fd34276b296da5aad9bbe659070","url":"img/memory-map.png"},{"revision":"c4fc5585862dd0c7eb620cf498116a86","url":"img/modules.png"},{"revision":"e09f19e76c053134af4a8187d047a45b","url":"img/multiple.png"},{"revision":"12f755e7dcad9655ad6c86656656c5c9","url":"img/printf.png"},{"revision":"18c8ed2e1428ad0c524f8189dcbaaade","url":"img/programmer.png"},{"revision":"9480715e0733faf21c97c9c13bdcef12","url":"img/putchar.png"},{"revision":"2e1cb1ba37fc5ae886ea57248bdb60bd","url":"img/pwa/icon-192x192.png"},{"revision":"a0f8ed72d3d3489353a57a03aeac9b0d","url":"img/pwa/icon-256x256.png"},{"revision":"ab9ed19e2716b5c233d6132d66204d53","url":"img/pwa/icon-384x384.png"},{"revision":"b71acc5b894ccfac0c22eb39a590f2a0","url":"img/pwa/icon-512x512.png"},{"revision":"9fe257dbb1424e4dd430b7bc0888dc71","url":"img/ram.png"},{"revision":"bb94cb1eb85de30c49bd1c307196a371","url":"img/records.png"},{"revision":"80f4cfaf65b61dc3e5f8f540a8cf37c5","url":"img/result-of-converted-table.png"},{"revision":"02fe164dcfec1db0a0a63a75793cd8f2","url":"img/scanf.png"},{"revision":"2506aaa68f44e7ce59d09336d79d5173","url":"img/scope.png"},{"revision":"65cc220611c3c6ca9846438cf2a41ee3","url":"img/selection.png"},{"revision":"1a00eddb9d8c57504356576cc6bf99f8","url":"img/software.png"},{"revision":"84e5661571103428d3ae472ea371c58c","url":"img/standards.png"},{"revision":"853678c3d94559a0292b2c14d259a0c0","url":"img/structured.png"},{"revision":"44215a7e46dca833eb18cfa4abd91b3e","url":"img/structures-walkthrough-table.png"},{"revision":"544892ab2001979454cf3267a266818f","url":"img/tables.png"},{"revision":"52fdbf1ab751f332a5ca688ec64b9bdd","url":"img/take-screenshot.png"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"},{"revision":"86ed4ef1f5e1d682b36640a33b82c5a3","url":"img/types.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"bbef83cafcff866385ba50b21bbe7a56","url":"img/walkthrough.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();