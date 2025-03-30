var BM=Object.defineProperty,VM=Object.defineProperties;var HM=Object.getOwnPropertyDescriptors;var qm=Object.getOwnPropertySymbols;var zM=Object.prototype.hasOwnProperty,GM=Object.prototype.propertyIsEnumerable;var Xm=(n,e,t)=>e in n?BM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ve=(n,e)=>{for(var t in e||={})zM.call(e,t)&&Xm(n,t,e[t]);if(qm)for(var t of qm(e))GM.call(e,t)&&Xm(n,t,e[t]);return n},bt=(n,e)=>VM(n,HM(e));var as=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function Ym(n,e){return Object.is(n,e)}var Lt=null,Xa=!1,bd=1,cs=Symbol("SIGNAL");function it(n){let e=Lt;return Lt=n,e}function Ed(){return Lt}var Ya={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function wd(n){if(Xa)throw new Error("");if(Lt===null)return;Lt.consumerOnSignalRead(n);let e=Lt.nextProducerIndex++;if(Ja(Lt),e<Lt.producerNode.length&&Lt.producerNode[e]!==n&&So(Lt)){let t=Lt.producerNode[e];Za(t,Lt.producerIndexOfThis[e])}Lt.producerNode[e]!==n&&(Lt.producerNode[e]=n,Lt.producerIndexOfThis[e]=So(Lt)?eg(n,Lt,e):0),Lt.producerLastReadVersion[e]=n.version}function Zm(){bd++}function Jm(n){if(!(So(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===bd)){if(!n.producerMustRecompute(n)&&!Dd(n)){Sd(n);return}n.producerRecomputeValue(n),Sd(n)}}function Cd(n){if(n.liveConsumerNode===void 0)return;let e=Xa;Xa=!0;try{for(let t of n.liveConsumerNode)t.dirty||WM(t)}finally{Xa=e}}function Km(){return Lt?.consumerAllowSignalWrites!==!1}function WM(n){n.dirty=!0,Cd(n),n.consumerMarkedDirty?.(n)}function Sd(n){n.dirty=!1,n.lastCleanEpoch=bd}function Td(n){return n&&(n.nextProducerIndex=0),it(n)}function Qm(n,e){if(it(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(So(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Za(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Dd(n){Ja(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Jm(t),i!==t.version))return!0}return!1}function Ad(n){if(Ja(n),So(n))for(let e=0;e<n.producerNode.length;e++)Za(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function eg(n,e,t){if(tg(n),n.liveConsumerNode.length===0&&ng(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=eg(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Za(n,e){if(tg(n),n.liveConsumerNode.length===1&&ng(n))for(let i=0;i<n.producerNode.length;i++)Za(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Ja(r),r.producerIndexOfThis[i]=e}}function So(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Ja(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function tg(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function ng(n){return n.producerNode!==void 0}function jM(){throw new Error}var ig=jM;function $M(n){ig(n)}function Id(n){ig=n}var qM=null;function Rd(n,e){Km()||$M(n),n.equal(n.value,e)||(n.value=e,XM(n))}var Nd=bt(ve({},Ya),{equal:Ym,value:void 0,kind:"signal"});function XM(n){n.version++,Zm(),Cd(n),qM?.()}var Pd;function bo(){return Pd}function pi(n){let e=Pd;return Pd=n,e}var Ka=Symbol("NotFound");function Pe(n){return typeof n=="function"}function ls(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Qa=ls(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Eo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Pt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Pe(i))try{i()}catch(s){e=s instanceof Qa?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{rg(s)}catch(o){e=e??[],o instanceof Qa?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Qa(e)}}add(e){var t;if(e&&e!==this)if(this.closed)rg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Eo(t,e)}remove(e){let{_finalizers:t}=this;t&&Eo(t,e),e instanceof n&&e._removeParent(this)}};Pt.EMPTY=(()=>{let n=new Pt;return n.closed=!0,n})();var Od=Pt.EMPTY;function ec(n){return n instanceof Pt||n&&"closed"in n&&Pe(n.remove)&&Pe(n.add)&&Pe(n.unsubscribe)}function rg(n){Pe(n)?n():n.unsubscribe()}var Un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var us={setTimeout(n,e,...t){let{delegate:i}=us;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=us;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function tc(n){us.setTimeout(()=>{let{onUnhandledError:e}=Un;if(e)e(n);else throw n})}function wo(){}var sg=Ld("C",void 0,void 0);function og(n){return Ld("E",void 0,n)}function ag(n){return Ld("N",n,void 0)}function Ld(n,e,t){return{kind:n,value:e,error:t}}var vr=null;function ds(n){if(Un.useDeprecatedSynchronousErrorHandling){let e=!vr;if(e&&(vr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=vr;if(vr=null,t)throw i}}else n()}function cg(n){Un.useDeprecatedSynchronousErrorHandling&&vr&&(vr.errorThrown=!0,vr.error=n)}var yr=class extends Pt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ec(e)&&e.add(this)):this.destination=rS}static create(e,t,i){return new fs(e,t,i)}next(e){this.isStopped?kd(ag(e),this):this._next(e)}error(e){this.isStopped?kd(og(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?kd(sg,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},nS=Function.prototype.bind;function Fd(n,e){return nS.call(n,e)}var Ud=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){nc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){nc(i)}else nc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){nc(t)}}},fs=class extends yr{constructor(e,t,i){super();let r;if(Pe(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Un.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Fd(e.next,s),error:e.error&&Fd(e.error,s),complete:e.complete&&Fd(e.complete,s)}):r=e}this.destination=new Ud(r)}};function nc(n){Un.useDeprecatedSynchronousErrorHandling?cg(n):tc(n)}function iS(n){throw n}function kd(n,e){let{onStoppedNotification:t}=Un;t&&us.setTimeout(()=>t(n,e))}var rS={closed:!0,next:wo,error:iS,complete:wo};var hs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function hn(n){return n}function Bd(...n){return Vd(n)}function Vd(n){return n.length===0?hn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var gt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=oS(t)?t:new fs(t,i,r);return ds(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=lg(i),new i((r,s)=>{let o=new fs({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[hs](){return this}pipe(...t){return Vd(t)(this)}toPromise(t){return t=lg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function lg(n){var e;return(e=n??Un.Promise)!==null&&e!==void 0?e:Promise}function sS(n){return n&&Pe(n.next)&&Pe(n.error)&&Pe(n.complete)}function oS(n){return n&&n instanceof yr||sS(n)&&ec(n)}function Hd(n){return Pe(n?.lift)}function Ke(n){return e=>{if(Hd(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Qe(n,e,t,i,r){return new zd(n,e,t,i,r)}var zd=class extends yr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ps(){return Ke((n,e)=>{let t=null;n._refCount++;let i=Qe(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var ms=class extends gt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Hd(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Pt;let t=this.getSubject();e.add(this.source.subscribe(Qe(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Pt.EMPTY)}return e}refCount(){return ps()(this)}};var ug=ls(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var jt=(()=>{class n extends gt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ic(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new ug}next(t){ds(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){ds(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){ds(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Od:(this.currentObservers=null,s.push(t),new Pt(()=>{this.currentObservers=null,Eo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new gt;return t.source=this,t}}return n.create=(e,t)=>new ic(e,t),n})(),ic=class extends jt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Od}};var $t=class extends jt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var on=new gt(n=>n.complete());function dg(n){return n&&Pe(n.schedule)}function fg(n){return n[n.length-1]}function hg(n){return Pe(fg(n))?n.pop():void 0}function Bi(n){return dg(fg(n))?n.pop():void 0}function mg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function pg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _r(n){return this instanceof _r?(this.v=n,this):new _r(n)}function gg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){s.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(s[0][3],y)}}function l(h){h.value instanceof _r?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function vg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof pg=="function"?pg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var rc=n=>n&&typeof n.length=="number"&&typeof n!="function";function sc(n){return Pe(n?.then)}function oc(n){return Pe(n[hs])}function ac(n){return Symbol.asyncIterator&&Pe(n?.[Symbol.asyncIterator])}function cc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function aS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var lc=aS();function uc(n){return Pe(n?.[lc])}function dc(n){return gg(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield _r(t.read());if(r)return yield _r(void 0);yield yield _r(i)}}finally{t.releaseLock()}})}function fc(n){return Pe(n?.getReader)}function Vt(n){if(n instanceof gt)return n;if(n!=null){if(oc(n))return cS(n);if(rc(n))return lS(n);if(sc(n))return uS(n);if(ac(n))return yg(n);if(uc(n))return dS(n);if(fc(n))return fS(n)}throw cc(n)}function cS(n){return new gt(e=>{let t=n[hs]();if(Pe(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lS(n){return new gt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function uS(n){return new gt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,tc)})}function dS(n){return new gt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function yg(n){return new gt(e=>{hS(n,e).catch(t=>e.error(t))})}function fS(n){return yg(dc(n))}function hS(n,e){var t,i,r,s;return mg(this,void 0,void 0,function*(){try{for(t=vg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function an(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function hc(n,e=0){return Ke((t,i)=>{t.subscribe(Qe(i,r=>an(i,n,()=>i.next(r),e),()=>an(i,n,()=>i.complete(),e),r=>an(i,n,()=>i.error(r),e)))})}function pc(n,e=0){return Ke((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function _g(n,e){return Vt(n).pipe(pc(e),hc(e))}function xg(n,e){return Vt(n).pipe(pc(e),hc(e))}function Mg(n,e){return new gt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Sg(n,e){return new gt(t=>{let i;return an(t,e,()=>{i=n[lc](),an(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Pe(i?.return)&&i.return()})}function mc(n,e){if(!n)throw new Error("Iterable cannot be null");return new gt(t=>{an(t,e,()=>{let i=n[Symbol.asyncIterator]();an(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function bg(n,e){return mc(dc(n),e)}function Eg(n,e){if(n!=null){if(oc(n))return _g(n,e);if(rc(n))return Mg(n,e);if(sc(n))return xg(n,e);if(ac(n))return mc(n,e);if(uc(n))return Sg(n,e);if(fc(n))return bg(n,e)}throw cc(n)}function Ft(n,e){return e?Eg(n,e):Vt(n)}function Fe(...n){let e=Bi(n);return Ft(n,e)}function gs(n,e){let t=Pe(n)?n:()=>n,i=r=>r.error(t());return new gt(e?r=>e.schedule(i,0,r):i)}function Gd(n){return!!n&&(n instanceof gt||Pe(n.lift)&&Pe(n.subscribe))}var mi=ls(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function rt(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Qe(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:pS}=Array;function mS(n,e){return pS(e)?n(...e):n(e)}function wg(n){return rt(e=>mS(n,e))}var{isArray:gS}=Array,{getPrototypeOf:vS,prototype:yS,keys:_S}=Object;function Cg(n){if(n.length===1){let e=n[0];if(gS(e))return{args:e,keys:null};if(xS(e)){let t=_S(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function xS(n){return n&&typeof n=="object"&&vS(n)===yS}function Tg(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function gc(...n){let e=Bi(n),t=hg(n),{args:i,keys:r}=Cg(n);if(i.length===0)return Ft([],e);let s=new gt(MS(i,e,r?o=>Tg(r,o):hn));return t?s.pipe(wg(t)):s}function MS(n,e,t=hn){return i=>{Dg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)Dg(e,()=>{let l=Ft(n[c],e),u=!1;l.subscribe(Qe(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Dg(n,e,t){n?an(t,n,e):e()}function Ag(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Vt(t(y,u++)).subscribe(Qe(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?an(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Qe(e,h,()=>{d=!0,f()})),()=>{a?.()}}function kt(n,e,t=1/0){return Pe(e)?kt((i,r)=>rt((s,o)=>e(i,s,r,o))(Vt(n(i,r))),t):(typeof e=="number"&&(t=e),Ke((i,r)=>Ag(i,r,n,t)))}function Wd(n=1/0){return kt(hn,n)}function Ig(){return Wd(1)}function vs(...n){return Ig()(Ft(n,Bi(n)))}function vc(n){return new gt(e=>{Vt(n()).subscribe(e)})}function Bn(n,e){return Ke((t,i)=>{let r=0;t.subscribe(Qe(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Vi(n){return Ke((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Qe(t,void 0,void 0,o=>{s=Vt(n(o,Vi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function Rg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Qe(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function ys(n,e){return Pe(e)?kt(n,e,1):kt(n,1)}function Hi(n){return Ke((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function gi(n){return n<=0?()=>on:Ke((e,t)=>{let i=0;e.subscribe(Qe(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function yc(n=SS){return Ke((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function SS(){return new mi}function Co(n){return Ke((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function vi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Bn((r,s)=>n(r,s,i)):hn,gi(1),t?Hi(e):yc(()=>new mi))}function _s(n){return n<=0?()=>on:Ke((e,t)=>{let i=[];e.subscribe(Qe(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function jd(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Bn((r,s)=>n(r,s,i)):hn,_s(1),t?Hi(e):yc(()=>new mi))}function $d(n,e){return Ke(Rg(n,e,arguments.length>=2,!0))}function qd(...n){let e=Bi(n);return Ke((t,i)=>{(e?vs(n,t,e):vs(n,t)).subscribe(i)})}function Vn(n,e){return Ke((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Qe(i,c=>{r?.unsubscribe();let l=0,u=s++;Vt(n(c,u)).subscribe(r=Qe(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Xd(n){return Ke((e,t)=>{Vt(n).subscribe(Qe(t,()=>t.complete(),wo)),!t.closed&&e.subscribe(t)})}function qt(n,e,t){let i=Pe(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ke((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Qe(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):hn}var bS="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ce=class extends Error{code;constructor(e,t){super(Xf(e,t)),this.code=e}};function Xf(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var _v=Symbol("InputSignalNode#UNSET"),ES=bt(ve({},Nd),{transformFn:void 0,applyValueToInputSignal(n,e){Rd(n,e)}});function xv(n,e){let t=Object.create(ES);t.value=n,t.transformFn=e?.transform;function i(){if(wd(t),t.value===_v){let r=null;throw new Ce(-950,r)}return t.value}return i[cs]=t,i}function Yf(n){return{toString:n}.toString()}function _t(n){for(let e in n)if(n[e]===_t)return e;throw Error("Could not find renamed property on target object.")}function cn(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(cn).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Ng(n,e){return n?e?`${n} ${e}`:n:e||""}var wS=_t({__forward_ref__:_t});function Mv(n){return n.__forward_ref__=Mv,n.toString=function(){return cn(this())},n}function Cn(n){return Sv(n)?n():n}function Sv(n){return typeof n=="function"&&n.hasOwnProperty(wS)&&n.__forward_ref__===Mv}function Le(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function qc(n){return Pg(n,Ev)||Pg(n,wv)}function bv(n){return qc(n)!==null}function Pg(n,e){return n.hasOwnProperty(e)?n[e]:null}function CS(n){let e=n&&(n[Ev]||n[wv]);return e||null}function Og(n){return n&&(n.hasOwnProperty(Lg)||n.hasOwnProperty(TS))?n[Lg]:null}var Ev=_t({\u0275prov:_t}),Lg=_t({\u0275inj:_t}),wv=_t({ngInjectableDef:_t}),TS=_t({ngInjectorDef:_t}),Oe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Le({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Cv(n){return n&&!!n.\u0275providers}var DS=_t({\u0275cmp:_t}),AS=_t({\u0275dir:_t}),IS=_t({\u0275pipe:_t}),RS=_t({\u0275mod:_t}),Cc=_t({\u0275fac:_t}),Io=_t({__NG_ELEMENT_ID__:_t}),Fg=_t({__NG_ENV_ID__:_t});function Tv(n){return typeof n=="string"?n:n==null?"":String(n)}function NS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Tv(n)}function Dv(n,e){throw new Ce(-200,n)}function Zf(n,e){throw new Ce(-201,!1)}var Ge=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Ge||{}),af;function Av(){return af}function wn(n){let e=af;return af=n,e}function Iv(n,e,t){let i=qc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Ge.Optional)return null;if(e!==void 0)return e;Zf(n,"Injector")}var PS={},xr=PS,OS="__NG_DI_FLAG__",Tc=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?Ka:xr,i)}},Dc="ngTempTokenPath",LS="ngTokenPath",FS=/\n/gm,kS="\u0275",kg="__source";function US(n,e=Ge.Default){if(bo()===void 0)throw new Ce(-203,!1);if(bo()===null)return Iv(n,void 0,e);{let t=bo(),i;return t instanceof Tc?i=t.injector:i=t,i.get(n,e&Ge.Optional?null:void 0,e)}}function $e(n,e=Ge.Default){return(Av()||US)(Cn(n),e)}function re(n,e=Ge.Default){return $e(n,Xc(e))}function Xc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function cf(n){let e=[];for(let t=0;t<n.length;t++){let i=Cn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ce(900,!1);let r,s=Ge.Default;for(let o=0;o<i.length;o++){let a=i[o],c=BS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push($e(r,s))}else e.push($e(i))}return e}function BS(n){return n[OS]}function VS(n,e,t,i){let r=n[Dc];throw e[kg]&&r.unshift(e[kg]),n.message=HS(`
`+n.message,r,t,i),n[LS]=r,n[Dc]=null,n}function HS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==kS?n.slice(2):n;let r=cn(e);if(Array.isArray(e))r=e.map(cn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):cn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(FS,`
  `)}`}function Es(n,e){let t=n.hasOwnProperty(Cc);return t?n[Cc]:null}function zS(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function GS(n){return n.flat(Number.POSITIVE_INFINITY)}function Jf(n,e){n.forEach(t=>Array.isArray(t)?Jf(t,e):e(t))}function Rv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ac(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function WS(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function jS(n,e,t){let i=Bo(n,e);return i>=0?n[i|1]=t:(i=~i,WS(n,i,e,t)),i}function Yd(n,e){let t=Bo(n,e);if(t>=0)return n[t|1]}function Bo(n,e){return $S(n,e,1)}function $S(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var ws={},br=[],Cs=new Oe(""),Nv=new Oe("",-1),Pv=new Oe(""),Ic=class{get(e,t=xr){if(t===xr){let i=new Error(`NullInjectorError: No provider for ${cn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Ov(n,e){let t=n[RS]||null;if(!t&&e===!0)throw new Error(`Type ${cn(n)} does not have '\u0275mod' property.`);return t}function Ts(n){return n[DS]||null}function qS(n){return n[AS]||null}function XS(n){return n[IS]||null}function Yc(n){return{\u0275providers:n}}function YS(...n){return{\u0275providers:Lv(!0,n),\u0275fromNgModule:!0}}function Lv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Jf(e,o=>{let a=o;lf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Fv(r,s),t}function Fv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Kf(r,s=>{e(s,i)})}}function lf(n,e,t,i){if(n=Cn(n),!n)return!1;let r=null,s=Og(n),o=!s&&Ts(n);if(!s&&!o){let c=n.ngModule;if(s=Og(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)lf(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Jf(s.imports,u=>{lf(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Fv(l,e)}if(!a){let l=Es(r)||(()=>new r);e({provide:r,useFactory:l,deps:br},r),e({provide:Pv,useValue:r,multi:!0},r),e({provide:Cs,useValue:()=>$e(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Kf(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Kf(n,e){for(let t of n)Cv(t)&&(t=t.\u0275providers),Array.isArray(t)?Kf(t,e):e(t)}var ZS=_t({provide:String,useValue:_t});function kv(n){return n!==null&&typeof n=="object"&&ZS in n}function JS(n){return!!(n&&n.useExisting)}function KS(n){return!!(n&&n.useFactory)}function uf(n){return typeof n=="function"}var Zc=new Oe(""),xc={},Ug={},Zd;function Qf(){return Zd===void 0&&(Zd=new Ic),Zd}var Dn=class{},Ro=class extends Dn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,ff(e,o=>this.processProvider(o)),this.records.set(Nv,xs(void 0,this)),r.has("environment")&&this.records.set(Dn,xs(void 0,this));let s=this.records.get(Zc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Pv,br,Ge.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?Ka:xr,i)}destroy(){Do(this),this._destroyed=!0;let e=it(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),it(e)}}onDestroy(e){return Do(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Do(this);let t=pi(this),i=wn(void 0),r;try{return e()}finally{pi(t),wn(i)}}get(e,t=xr,i=Ge.Default){if(Do(this),e.hasOwnProperty(Fg))return e[Fg](this);i=Xc(i);let r,s=pi(this),o=wn(void 0);try{if(!(i&Ge.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=rb(e)&&qc(e);l&&this.injectableDefInScope(l)?c=xs(df(e),xc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&Ge.Self?Qf():this.parent;return t=i&Ge.Optional&&t===xr?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Dc]=a[Dc]||[]).unshift(cn(e)),s)throw a;return VS(a,e,"R3InjectorError",this.source)}else throw a}finally{wn(o),pi(s)}}resolveInjectorInitializers(){let e=it(null),t=pi(this),i=wn(void 0),r;try{let s=this.get(Cs,br,Ge.Self);for(let o of s)o()}finally{pi(t),wn(i),it(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(cn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Cn(e);let t=uf(e)?e:Cn(e&&e.provide),i=eb(e);if(!uf(e)&&e.multi===!0){let r=this.records.get(t);r||(r=xs(void 0,xc,!0),r.factory=()=>cf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=it(null);try{return t.value===Ug?Dv(cn(e)):t.value===xc&&(t.value=Ug,t.value=t.factory()),typeof t.value=="object"&&t.value&&ib(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{it(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Cn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function df(n){let e=qc(n),t=e!==null?e.factory:Es(n);if(t!==null)return t;if(n instanceof Oe)throw new Ce(204,!1);if(n instanceof Function)return QS(n);throw new Ce(204,!1)}function QS(n){if(n.length>0)throw new Ce(204,!1);let t=CS(n);return t!==null?()=>t.factory(n):()=>new n}function eb(n){if(kv(n))return xs(void 0,n.useValue);{let e=tb(n);return xs(e,xc)}}function tb(n,e,t){let i;if(uf(n)){let r=Cn(n);return Es(r)||df(r)}else if(kv(n))i=()=>Cn(n.useValue);else if(KS(n))i=()=>n.useFactory(...cf(n.deps||[]));else if(JS(n))i=()=>$e(Cn(n.useExisting));else{let r=Cn(n&&(n.useClass||n.provide));if(nb(n))i=()=>new r(...cf(n.deps));else return Es(r)||df(r)}return i}function Do(n){if(n.destroyed)throw new Ce(205,!1)}function xs(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function nb(n){return!!n.deps}function ib(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function rb(n){return typeof n=="function"||typeof n=="object"&&n instanceof Oe}function ff(n,e){for(let t of n)Array.isArray(t)?ff(t,e):t&&Cv(t)?ff(t.\u0275providers,e):e(t)}function Gn(n,e){let t;n instanceof Ro?(Do(n),t=n):t=new Tc(n);let i,r=pi(t),s=wn(void 0);try{return e()}finally{pi(r),wn(s)}}function sb(){return Av()!==void 0||bo()!=null}function ob(n){return typeof n=="function"}var Mi=0,je=1,Be=2,Jt=3,zn=4,Wn=5,Rc=6,Nc=7,An=8,Ds=9,Gi=10,gn=11,No=12,Bg=13,Vo=14,Qn=15,Er=16,Ms=17,yi=18,Jc=19,Uv=20,zi=21,Jd=22,Pc=23,Tn=24,Kd=25,Wi=26,Bv=1;var wr=7,Oc=8,As=9,mn=10;function Mr(n){return Array.isArray(n)&&typeof n[Bv]=="object"}function Si(n){return Array.isArray(n)&&n[Bv]===!0}function Vv(n){return(n.flags&4)!==0}function Ho(n){return n.componentOffset>-1}function Hv(n){return(n.flags&1)===1}function Ar(n){return!!n.template}function Lc(n){return(n[Be]&512)!==0}function zo(n){return(n[Be]&256)===256}var hf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function zv(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var eh=(()=>{let n=()=>Gv;return n.ngInherit=!0,n})();function Gv(n){return n.type.prototype.ngOnChanges&&(n.setInput=cb),ab}function ab(){let n=jv(this),e=n?.current;if(e){let t=n.previous;if(t===ws)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function cb(n,e,t,i,r){let s=this.declaredInputs[i],o=jv(n)||lb(n,{previous:ws,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new hf(l&&l.currentValue,t,c===ws),zv(n,e,r,t)}var Wv="__ngSimpleChanges__";function jv(n){return n[Wv]||null}function lb(n,e){return n[Wv]=e}var Vg=null;var Mt=function(n,e=null,t){Vg?.(n,e,t)},ub="svg",db="math";function ei(n){for(;Array.isArray(n);)n=n[Mi];return n}function $v(n,e){return ei(e[n])}function qi(n,e){return ei(e[n.index])}function fb(n,e){return n.data[e]}function ji(n,e){let t=e[n];return Mr(t)?t:t[Mi]}function hb(n){return(n[Be]&4)===4}function th(n){return(n[Be]&128)===128}function pb(n){return Si(n[Jt])}function Hg(n,e){return e==null?null:n[e]}function qv(n){n[Ms]=0}function Xv(n){n[Be]&1024||(n[Be]|=1024,th(n)&&Qc(n))}function Kc(n){return!!(n[Be]&9216||n[Tn]?.dirty)}function pf(n){n[Gi].changeDetectionScheduler?.notify(8),n[Be]&64&&(n[Be]|=1024),Kc(n)&&Qc(n)}function Qc(n){n[Gi].changeDetectionScheduler?.notify(0);let e=Cr(n);for(;e!==null&&!(e[Be]&8192||(e[Be]|=8192,!th(e)));)e=Cr(e)}function Yv(n,e){if(zo(n))throw new Ce(911,!1);n[zi]===null&&(n[zi]=[]),n[zi].push(e)}function mb(n,e){if(n[zi]===null)return;let t=n[zi].indexOf(e);t!==-1&&n[zi].splice(t,1)}function Cr(n){let e=n[Jt];return Si(e)?e[Jt]:e}function Zv(n){return n[Nc]??=[]}function Jv(n){return n.cleanup??=[]}function gb(n,e,t,i){let r=Zv(e);r.push(t),n.firstCreatePass&&Jv(n).push(i,r.length-1)}var at={lFrame:ry(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var mf=!1;function vb(){return at.lFrame.elementDepthCount}function yb(){at.lFrame.elementDepthCount++}function _b(){at.lFrame.elementDepthCount--}function xb(){return at.bindingsEnabled}function Mb(){return at.skipHydrationRootTNode!==null}function Sb(n){return at.skipHydrationRootTNode===n}function bb(){at.skipHydrationRootTNode=null}function Ht(){return at.lFrame.lView}function Xi(){return at.lFrame.tView}function bi(){let n=Kv();for(;n!==null&&n.type===64;)n=n.parent;return n}function Kv(){return at.lFrame.currentTNode}function Eb(){let n=at.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function el(n,e){let t=at.lFrame;t.currentTNode=n,t.isParent=e}function Qv(){return at.lFrame.isParent}function wb(){at.lFrame.isParent=!1}function ey(){return mf}function zg(n){let e=mf;return mf=n,e}function Cb(n){return at.lFrame.bindingIndex=n}function Tb(){return at.lFrame.bindingIndex++}function Db(n){let e=at.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function Ab(){return at.lFrame.inI18n}function Ib(n,e){let t=at.lFrame;t.bindingIndex=t.bindingRootIndex=n,gf(e)}function Rb(){return at.lFrame.currentDirectiveIndex}function gf(n){at.lFrame.currentDirectiveIndex=n}function Nb(n){let e=at.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function ty(){return at.lFrame.currentQueryIndex}function nh(n){at.lFrame.currentQueryIndex=n}function Pb(n){let e=n[je];return e.type===2?e.declTNode:e.type===1?n[Wn]:null}function ny(n,e,t){if(t&Ge.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Ge.Host);)if(r=Pb(s),r===null||(s=s[Vo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=at.lFrame=iy();return i.currentTNode=e,i.lView=n,!0}function ih(n){let e=iy(),t=n[je];at.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function iy(){let n=at.lFrame,e=n===null?null:n.child;return e===null?ry(n):e}function ry(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function sy(){let n=at.lFrame;return at.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var oy=sy;function rh(){let n=sy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Ps(){return at.lFrame.selectedIndex}function Tr(n){at.lFrame.selectedIndex=n}function Ob(){return at.lFrame.currentNamespace}var ay=!0;function cy(){return ay}function ly(n){ay=n}function Lb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=Gv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Fb(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Mc(n,e,t){uy(n,e,3,t)}function Sc(n,e,t,i){(n[Be]&3)===t&&uy(n,e,t,i)}function Qd(n,e){let t=n[Be];(t&3)===e&&(t&=16383,t+=1,n[Be]=t)}function uy(n,e,t,i){let r=i!==void 0?n[Ms]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Ms]+=65536),(a<s||s==-1)&&(kb(n,t,e,c),n[Ms]=(n[Ms]&4294901760)+c+2),c++}function Gg(n,e){Mt(4,n,e);let t=it(null);try{e.call(n)}finally{it(t),Mt(5,n,e)}}function kb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Be]>>14<n[Ms]>>16&&(n[Be]&3)===e&&(n[Be]+=16384,Gg(a,s)):Gg(a,s)}var bs=-1,Po=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function Ub(n){return(n.flags&8)!==0}function Bb(n){return(n.flags&16)!==0}function Vb(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];zb(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function Hb(n){return n===3||n===4||n===6}function zb(n){return n.charCodeAt(0)===64}function dy(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Wg(n,t,r,null,e[++i]):Wg(n,t,r,null,null))}}return n}function Wg(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}var ef={},vf=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Xc(i);let r=this.injector.get(e,ef,i);return r!==ef||t===ef?r:this.parentInjector.get(e,t,i)}};function fy(n){return n!==bs}function Fc(n){return n&32767}function Gb(n){return n>>16}function kc(n,e){let t=Gb(n),i=e;for(;t>0;)i=i[Vo],t--;return i}var yf=!0;function jg(n){let e=yf;return yf=n,e}var Wb=256,hy=Wb-1,py=5,jb=0,Kn={};function $b(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Io)&&(i=t[Io]),i==null&&(i=t[Io]=jb++);let r=i&hy,s=1<<r;e.data[n+(r>>py)]|=s}function my(n,e){let t=gy(n,e);if(t!==-1)return t;let i=e[je];i.firstCreatePass&&(n.injectorIndex=e.length,tf(i.data,n),tf(e,null),tf(i.blueprint,null));let r=sh(n,e),s=n.injectorIndex;if(fy(r)){let o=Fc(r),a=kc(r,e),c=a[je].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function tf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function gy(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function sh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=My(r),i===null)return bs;if(t++,r=r[Vo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return bs}function qb(n,e,t){$b(n,e,t)}function vy(n,e,t){if(t&Ge.Optional||n!==void 0)return n;Zf(e,"NodeInjector")}function yy(n,e,t,i){if(t&Ge.Optional&&i===void 0&&(i=null),(t&(Ge.Self|Ge.Host))===0){let r=n[Ds],s=wn(void 0);try{return r?r.get(e,i,t&Ge.Optional):Iv(e,i,t&Ge.Optional)}finally{wn(s)}}return vy(i,e,t)}function _y(n,e,t,i=Ge.Default,r){if(n!==null){if(e[Be]&2048&&!(i&Ge.Self)){let o=Jb(n,e,t,i,Kn);if(o!==Kn)return o}let s=xy(n,e,t,i,Kn);if(s!==Kn)return s}return yy(e,t,i,r)}function xy(n,e,t,i,r){let s=Yb(t);if(typeof s=="function"){if(!ny(e,n,i))return i&Ge.Host?vy(r,t,i):yy(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Ge.Optional))Zf(t);else return o}finally{oy()}}else if(typeof s=="number"){let o=null,a=gy(n,e),c=bs,l=i&Ge.Host?e[Qn][Wn]:null;for((a===-1||i&Ge.SkipSelf)&&(c=a===-1?sh(n,e):e[a+8],c===bs||!qg(i,!1)?a=-1:(o=e[je],a=Fc(c),e=kc(c,e)));a!==-1;){let u=e[je];if($g(s,a,u.data)){let d=Xb(a,e,t,o,i,l);if(d!==Kn)return d}c=e[a+8],c!==bs&&qg(i,e[je].data[a+8]===l)&&$g(s,a,e)?(o=u,a=Fc(c),e=kc(c,e)):a=-1}}return r}function Xb(n,e,t,i,r,s){let o=e[je],a=o.data[n+8],c=i==null?Ho(a)&&yf:i!=o&&(a.type&3)!==0,l=r&Ge.Host&&s===a,u=bc(a,o,t,c,l);return u!==null?Uc(e,o,u,a):Kn}function bc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Ar(h)&&h.type===t)return c}return null}function Uc(n,e,t,i){let r=n[t],s=e.data;if(r instanceof Po){let o=r;o.resolving&&Dv(NS(s[t]));let a=jg(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?wn(o.injectImpl):null,u=ny(n,i,Ge.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Lb(t,s[t],e)}finally{l!==null&&wn(l),jg(a),o.resolving=!1,oy()}}return r}function Yb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Io)?n[Io]:void 0;return typeof e=="number"?e>=0?e&hy:Zb:e}function $g(n,e,t){let i=1<<n;return!!(t[e+(n>>py)]&i)}function qg(n,e){return!(n&Ge.Self)&&!(n&Ge.Host&&e)}var Sr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return _y(this._tNode,this._lView,e,Xc(i),t)}};function Zb(){return new Sr(bi(),Ht())}function oh(n){return Yf(()=>{let e=n.prototype.constructor,t=e[Cc]||_f(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Cc]||_f(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function _f(n){return Sv(n)?()=>{let e=_f(Cn(n));return e&&e()}:Es(n)}function Jb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Be]&2048&&!Lc(o);){let a=xy(s,o,t,i|Ge.Self,Kn);if(a!==Kn)return a;let c=s.parent;if(!c){let l=o[Uv];if(l){let u=l.get(t,Kn,i);if(u!==Kn)return u}c=My(o),o=o[Vo]}s=c}return r}function My(n){let e=n[je],t=e.type;return t===2?e.declTNode:t===1?n[Wn]:null}function Xg(n,e=null,t=null,i){let r=Sy(n,e,t,i);return r.resolveInjectorInitializers(),r}function Sy(n,e=null,t=null,i,r=new Set){let s=[t||br,YS(n)];return i=i||(typeof n=="object"?void 0:cn(n)),new Ro(s,e||Qf(),i||null,r)}var ti=class n{static THROW_IF_NOT_FOUND=xr;static NULL=new Ic;static create(e,t){if(Array.isArray(e))return Xg({name:""},t,e,"");{let i=e.name??"";return Xg({name:i},e.parent,e.providers,i)}}static \u0275prov=Le({token:n,providedIn:"any",factory:()=>$e(Nv)});static __NG_ELEMENT_ID__=-1};var Kb=new Oe("");Kb.__NG_ELEMENT_ID__=n=>{let e=bi();if(e===null)throw new Ce(204,!1);if(e.type&2)return e.value;if(n&Ge.Optional)return null;throw new Ce(204,!1)};var by=!1,tl=(()=>{class n{static __NG_ELEMENT_ID__=Qb;static __NG_ENV_ID__=t=>t}return n})(),xf=class extends tl{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return Yv(this._lView,e),()=>mb(this._lView,e)}};function Qb(){return new xf(Ht())}var Oo=class{},nl=new Oe("",{providedIn:"root",factory:()=>!1});var Ey=new Oe(""),wy=new Oe(""),Os=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new $t(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new n})}return n})();var Mf=class extends jt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,sb()&&(this.destroyRef=re(tl,{optional:!0})??void 0,this.pendingTasks=re(Os,{optional:!0})??void 0)}emit(e){let t=it(null);try{super.next(e)}finally{it(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Pt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},pn=Mf;function Bc(...n){}function Cy(n){let e,t;function i(){n=Bc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Yg(n){return queueMicrotask(()=>n()),()=>{n=Bc}}var ah="isAngularZone",Vc=ah+"_ID",eE=0,Xt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new pn(!1);onMicrotaskEmpty=new pn(!1);onStable=new pn(!1);onError=new pn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=by}=e;if(typeof Zone>"u")throw new Ce(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,iE(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(ah)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ce(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ce(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,tE,Bc,Bc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},tE={};function ch(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function nE(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Cy(()=>{n.callbackScheduled=!1,Sf(n),n.isCheckStableRunning=!0,ch(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Sf(n)}function iE(n){let e=()=>{nE(n)},t=eE++;n._inner=n._inner.fork({name:"angular",properties:{[ah]:!0,[Vc]:t,[Vc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(rE(c))return i.invokeTask(s,o,a,c);try{return Zg(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Jg(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return Zg(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!sE(c)&&e(),Jg(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Sf(n),ch(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Sf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Zg(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Jg(n){n._nesting--,ch(n)}var bf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new pn;onMicrotaskEmpty=new pn;onStable=new pn;onError=new pn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function rE(n){return Ty(n,"__ignore_ng_zone__")}function sE(n){return Ty(n,"__scheduler_tick__")}function Ty(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var _i=class{_console=console;handleError(e){this._console.error("ERROR",e)}},oE=new Oe("",{providedIn:"root",factory:()=>{let n=re(Xt),e=re(_i);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function Kg(n,e){return xv(n,e)}function aE(n){return xv(_v,n)}var Dy=(Kg.required=aE,Kg);function cE(){return Ls(bi(),Ht())}function Ls(n,e){return new Ir(qi(n,e))}var Ir=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=cE}return n})();function lE(n){return n instanceof Ir?n.nativeElement:n}function uE(){return this._results[Symbol.iterator]()}var Ef=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new jt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=GS(e);(this._changesDetected=!zS(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=uE};function Ay(n){return(n.flags&128)===128}var Iy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Iy||{}),Ry=new Map,dE=0;function fE(){return dE++}function hE(n){Ry.set(n[Jc],n)}function wf(n){Ry.delete(n[Jc])}var Qg="__ngContext__";function il(n,e){Mr(e)?(n[Qg]=e[Jc],hE(e)):n[Qg]=e}function Ny(n){return Oy(n[No])}function Py(n){return Oy(n[zn])}function Oy(n){for(;n!==null&&!Si(n);)n=n[zn];return n}var Cf;function Ly(n){Cf=n}function pE(){if(Cf!==void 0)return Cf;if(typeof document<"u")return document;throw new Ce(210,!1)}var lh=new Oe("",{providedIn:"root",factory:()=>mE}),mE="ng",uh=new Oe(""),Go=new Oe("",{providedIn:"platform",factory:()=>"unknown"});var dh=new Oe("",{providedIn:"root",factory:()=>pE().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var gE="h",vE="b";var Fy=!1,yE=new Oe("",{providedIn:"root",factory:()=>Fy});var ky=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(ky||{}),rl=new Oe(""),ev=new Set;function fh(n){ev.has(n)||(ev.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var _E=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new n})}return n})();var xE=()=>null;function Uy(n,e,t=!1){return xE(n,e,t)}function By(n,e){let t=n.contentQueries;if(t!==null){let i=it(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];nh(s),a.contentQueries(2,e[o],o)}}}finally{it(i)}}}function Tf(n,e,t){nh(0);let i=it(null);try{e(n,t)}finally{it(i)}}function Vy(n,e,t){if(Vv(e)){let i=it(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{it(i)}}}var ni=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ni||{});var Df=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${bS})`}};function hh(n){return n instanceof Df?n.changingThisBreaksApplicationSecurity:n}function Hy(n){return n.ownerDocument}function zy(n){return n instanceof Function?n():n}function ME(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Gy="ng-template";function SE(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&ME(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(ph(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function ph(n){return n.type===4&&n.value!==Gy}function bE(n,e,t){let i=n.type===4&&!t?Gy:n.value;return e===i}function EE(n,e,t){let i=4,r=n.attrs,s=r!==null?TE(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Hn(i)&&!Hn(c))return!1;if(o&&Hn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!bE(n,c,t)||c===""&&e.length===1){if(Hn(i))return!1;o=!0}}else if(i&8){if(r===null||!SE(n,r,c,t)){if(Hn(i))return!1;o=!0}}else{let l=e[++a],u=wE(c,r,ph(n),t);if(u===-1){if(Hn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Hn(i))return!1;o=!0}}}}return Hn(i)||o}function Hn(n){return(n&1)===0}function wE(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return DE(e,n)}function CE(n,e,t=!1){for(let i=0;i<e.length;i++)if(EE(n,e[i],t))return!0;return!1}function TE(n){for(let e=0;e<n.length;e++){let t=n[e];if(Hb(t))return e}return n.length}function DE(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function tv(n,e){return n?":not("+e.trim()+")":e}function AE(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Hn(o)&&(e+=tv(s,r),r=""),i=o,s=s||!Hn(i);t++}return r!==""&&(e+=tv(s,r)),e}function IE(n){return n.map(AE).join(",")}function RE(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Hn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Fs={};function NE(n,e){return n.createText(e)}function PE(n,e,t){n.setValue(e,t)}function Wy(n,e,t){return n.createElement(e,t)}function Hc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function jy(n,e,t){n.appendChild(e,t)}function nv(n,e,t,i,r){i!==null?Hc(n,e,t,i,r):jy(n,e,t)}function OE(n,e,t){n.removeChild(null,e,t)}function LE(n,e,t){n.setAttribute(e,"style",t)}function FE(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function $y(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Vb(n,e,i),r!==null&&FE(n,e,r),s!==null&&LE(n,e,s)}function qy(n,e,t,i,r,s,o,a,c,l,u){let d=Wi+i,f=d+r,h=kE(d,f),g=typeof l=="function"?l():l;return h[je]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function kE(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Fs);return t}function UE(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=qy(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function mh(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[Mi]=r,d[Be]=i|4|128|8|64|1024,(l!==null||n&&n[Be]&2048)&&(d[Be]|=2048),qv(d),d[Jt]=d[Vo]=n,d[An]=t,d[Gi]=o||n&&n[Gi],d[gn]=a||n&&n[gn],d[Ds]=c||n&&n[Ds]||null,d[Wn]=s,d[Jc]=fE(),d[Rc]=u,d[Uv]=l,d[Qn]=e.type==2?n[Qn]:d,d}function BE(n,e,t){let i=qi(e,n),r=UE(t),s=n[Gi].rendererFactory,o=Zy(n,mh(n,r,null,Xy(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function Xy(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Yy(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Zy(n,e){return n[No]?n[Bg][zn]=e:n[No]=e,n[Bg]=e,e}function Wo(n=1){Jy(Xi(),Ht(),Ps()+n,!1)}function Jy(n,e,t,i){if(!i)if((e[Be]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Mc(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Sc(e,s,0,t)}Tr(t)}var sl=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(sl||{});function Af(n,e,t,i){let r=it(null);try{let[s,o,a]=n.inputs[t],c=null;(o&sl.SignalBased)!==0&&(c=e[s][cs]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):zv(e,c,s,i)}finally{it(r)}}function Ky(n,e,t,i,r){let s=Ps(),o=i&2;try{Tr(-1),o&&e.length>Wi&&Jy(n,e,Wi,!1),Mt(o?2:0,r),t(i,r)}finally{Tr(s),Mt(o?3:1,r)}}function Qy(n,e,t){WE(n,e,t),(t.flags&64)===64&&jE(n,e,t)}function VE(n,e,t=qi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function HE(n,e,t,i){let s=i.get(yE,Fy)||t===ni.ShadowDom,o=n.selectRootElement(e,s);return zE(o),o}function zE(n){GE(n)}var GE=()=>null;function WE(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Ho(t)&&BE(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||my(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Uc(e,n,o,t);if(il(c,e),s!==null&&XE(e,o-i,c,a,t,s),Ar(a)){let l=ji(t.index,e);l[An]=Uc(e,n,o,t)}}}function jE(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Rb();try{Tr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];gf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&$E(c,l)}}finally{Tr(-1),gf(o)}}function $E(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function qE(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];CE(e,s.selectors,!1)&&(i??=[],Ar(s)?i.unshift(s):i.push(s))}return i}function XE(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Af(i,t,c,l)}}function YE(n,e){let t=n[Ds],i=t?t.get(_i,null):null;i&&i.handleError(e)}function e_(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Af(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Af(u,l,i,r),a=!0}return a}function ZE(n,e){let t=ji(e,n),i=t[je];JE(i,t);let r=t[Mi];r!==null&&t[Rc]===null&&(t[Rc]=Uy(r,t[Ds])),Mt(18),gh(i,t,t[An]),Mt(19,t[An])}function JE(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function gh(n,e,t){ih(e);try{let i=n.viewQuery;i!==null&&Tf(1,i,t);let r=n.template;r!==null&&Ky(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[yi]?.finishViewCreation(n),n.staticContentQueries&&By(n,e),n.staticViewQueries&&Tf(2,n.viewQuery,t);let s=n.components;s!==null&&KE(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Be]&=-5,rh()}}function KE(n,e){for(let t=0;t<e.length;t++)ZE(n,e[t])}function QE(n,e,t,i){let r=it(null);try{let s=e.tView,a=n[Be]&4096?4096:16,c=mh(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Er]=l;let u=n[yi];return u!==null&&(c[yi]=u.createEmbeddedView(s)),gh(s,c,t),c}finally{it(r)}}function iv(n,e){return!e||e.firstChild===null||Ay(n)}var ew;function vh(n,e){return ew(n,e)}var xi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(xi||{});function t_(n){return(n.flags&32)===32}function Ss(n,e,t,i,r){if(i!=null){let s,o=!1;Si(i)?s=i:Mr(i)&&(o=!0,i=i[Mi]);let a=ei(i);n===0&&t!==null?r==null?jy(e,t,a):Hc(e,t,a,r||null,!0):n===1&&t!==null?Hc(e,t,a,r||null,!0):n===2?OE(e,a,o):n===3&&e.destroyNode(a),s!=null&&fw(e,n,s,t,r)}}function tw(n,e){n_(n,e),e[Mi]=null,e[Wn]=null}function nw(n,e,t,i,r,s){i[Mi]=r,i[Wn]=e,ol(n,i,t,1,r,s)}function n_(n,e){e[Gi].changeDetectionScheduler?.notify(9),ol(n,e,e[gn],2,null,null)}function iw(n){let e=n[No];if(!e)return nf(n[je],n);for(;e;){let t=null;if(Mr(e))t=e[No];else{let i=e[mn];i&&(t=i)}if(!t){for(;e&&!e[zn]&&e!==n;)Mr(e)&&nf(e[je],e),e=e[Jt];e===null&&(e=n),Mr(e)&&nf(e[je],e),t=e&&e[zn]}e=t}}function yh(n,e){let t=n[As],i=t.indexOf(e);t.splice(i,1)}function i_(n,e){if(zo(e))return;let t=e[gn];t.destroyNode&&ol(n,e,t,3,null,null),iw(e)}function nf(n,e){if(zo(e))return;let t=it(null);try{e[Be]&=-129,e[Be]|=256,e[Tn]&&Ad(e[Tn]),sw(n,e),rw(n,e),e[je].type===1&&e[gn].destroy();let i=e[Er];if(i!==null&&Si(e[Jt])){i!==e[Jt]&&yh(i,e);let r=e[yi];r!==null&&r.detachView(n)}wf(e)}finally{it(t)}}function rw(n,e){let t=n.cleanup,i=e[Nc];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Nc]=null);let r=e[zi];if(r!==null){e[zi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Pc];if(s!==null){e[Pc]=null;for(let o of s)o.destroy()}}function sw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Po)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Mt(4,a,c);try{c.call(a)}finally{Mt(5,a,c)}}else{Mt(4,r,s);try{s.call(r)}finally{Mt(5,r,s)}}}}}function ow(n,e,t){return aw(n,e.parent,t)}function aw(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Mi];if(Ho(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ni.None||r===ni.Emulated)return null}return qi(i,t)}function cw(n,e,t){return uw(n,e,t)}function lw(n,e,t){return n.type&40?qi(n,t):null}var uw=lw,rv;function r_(n,e,t,i){let r=ow(n,i,e),s=e[gn],o=i.parent||e[Wn],a=cw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)nv(s,r,t[c],a,!1);else nv(s,r,t,a,!1);rv!==void 0&&rv(s,i,e,t,r)}function Ao(n,e){if(e!==null){let t=e.type;if(t&3)return qi(e,n);if(t&4)return If(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ao(n,i);{let r=n[e.index];return Si(r)?If(-1,r):ei(r)}}else{if(t&128)return Ao(n,e.next);if(t&32)return vh(e,n)()||ei(n[e.index]);{let i=s_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Cr(n[Qn]);return Ao(r,i)}else return Ao(n,e.next)}}}return null}function s_(n,e){if(e!==null){let i=n[Qn][Wn],r=e.projection;return i.projection[r]}return null}function If(n,e){let t=mn+n+1;if(t<e.length){let i=e[t],r=i[je].firstChild;if(r!==null)return Ao(i,r)}return e[wr]}function _h(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&il(ei(a),i),t.flags|=2),!t_(t))if(c&8)_h(n,e,t.child,i,r,s,!1),Ss(e,n,r,a,s);else if(c&32){let l=vh(t,i),u;for(;u=l();)Ss(e,n,r,u,s);Ss(e,n,r,a,s)}else c&16?dw(n,e,i,t,r,s):Ss(e,n,r,a,s);t=o?t.projectionNext:t.next}}function ol(n,e,t,i,r,s){_h(t,i,n.firstChild,e,r,s,!1)}function dw(n,e,t,i,r,s){let o=t[Qn],c=o[Wn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ss(e,n,r,u,s)}else{let l=c,u=o[Jt];Ay(i)&&(l.flags|=128),_h(n,e,l,u,r,s,!0)}}function fw(n,e,t,i,r){let s=t[wr],o=ei(t);s!==o&&Ss(e,n,i,s,r);for(let a=mn;a<t.length;a++){let c=t[a];ol(c[je],c,n,e,i,s)}}function hw(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:xi.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=xi.Important),n.setStyle(t,i,r,s))}}function zc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(ei(s)),Si(s)&&pw(s,i);let o=t.type;if(o&8)zc(n,e,t.child,i);else if(o&32){let a=vh(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=s_(e,t);if(Array.isArray(a))i.push(...a);else{let c=Cr(e[Qn]);zc(c[je],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function pw(n,e){for(let t=mn;t<n.length;t++){let i=n[t],r=i[je].firstChild;r!==null&&zc(i[je],i,r,e)}n[wr]!==n[Mi]&&e.push(n[wr])}function o_(n){if(n[Kd]!==null){for(let e of n[Kd])e.impl.addSequence(e);n[Kd].length=0}}var a_=[];function mw(n){return n[Tn]??gw(n)}function gw(n){let e=a_.pop()??Object.create(yw);return e.lView=n,e}function vw(n){n.lView[Tn]!==n&&(n.lView=null,a_.push(n))}var yw=bt(ve({},Ya),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Qc(n.lView)},consumerOnSignalRead(){this.lView[Tn]=this}});function _w(n){let e=n[Tn]??Object.create(xw);return e.lView=n,e}var xw=bt(ve({},Ya),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Cr(n.lView);for(;e&&!c_(e[je]);)e=Cr(e);e&&Xv(e)},consumerOnSignalRead(){this.lView[Tn]=this}});function c_(n){return n.type!==2}function l_(n){if(n[Pc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Pc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Be]&8192)}}var Mw=100;function u_(n,e=!0,t=0){let r=n[Gi].rendererFactory,s=!1;s||r.begin?.();try{Sw(n,t)}catch(o){throw e&&YE(n,o),o}finally{s||r.end?.()}}function Sw(n,e){let t=ey();try{zg(!0),Rf(n,e);let i=0;for(;Kc(n);){if(i===Mw)throw new Ce(103,!1);i++,Rf(n,1)}}finally{zg(t)}}function bw(n,e,t,i){if(zo(e))return;let r=e[Be],s=!1,o=!1;ih(e);let a=!0,c=null,l=null;s||(c_(n)?(l=mw(e),c=Td(l)):Ed()===null?(a=!1,l=_w(e),c=Td(l)):e[Tn]&&(Ad(e[Tn]),e[Tn]=null));try{qv(e),Cb(n.bindingStartIndex),t!==null&&Ky(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Mc(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Sc(e,h,0,null),Qd(e,0)}if(o||Ew(e),l_(e),d_(e,0),n.contentQueries!==null&&By(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Mc(e,h)}else{let h=n.contentHooks;h!==null&&Sc(e,h,1),Qd(e,1)}Cw(n,e);let d=n.components;d!==null&&h_(e,d,0);let f=n.viewQuery;if(f!==null&&Tf(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Mc(e,h)}else{let h=n.viewHooks;h!==null&&Sc(e,h,2),Qd(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Jd]){for(let h of e[Jd])h();e[Jd]=null}s||(o_(e),e[Be]&=-73)}catch(u){throw s||Qc(e),u}finally{l!==null&&(Qm(l,c),a&&vw(l)),rh()}}function d_(n,e){for(let t=Ny(n);t!==null;t=Py(t))for(let i=mn;i<t.length;i++){let r=t[i];f_(r,e)}}function Ew(n){for(let e=Ny(n);e!==null;e=Py(e)){if(!(e[Be]&2))continue;let t=e[As];for(let i=0;i<t.length;i++){let r=t[i];Xv(r)}}}function ww(n,e,t){Mt(18);let i=ji(e,n);f_(i,t),Mt(19,i[An])}function f_(n,e){th(n)&&Rf(n,e)}function Rf(n,e){let i=n[je],r=n[Be],s=n[Tn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Dd(s)),o||=!1,s&&(s.dirty=!1),n[Be]&=-9217,o)bw(i,n,i.template,n[An]);else if(r&8192){l_(n),d_(n,1);let a=i.components;a!==null&&h_(n,a,1),o_(n)}}function h_(n,e,t){for(let i=0;i<e.length;i++)ww(n,e[i],t)}function Cw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Tr(~r);else{let s=r,o=t[++i],a=t[++i];Ib(o,s);let c=e[s];Mt(24,c),a(2,c),Mt(25,c)}}}finally{Tr(-1)}}function xh(n,e){let t=ey()?64:1088;for(n[Gi].changeDetectionScheduler?.notify(e);n;){n[Be]|=t;let i=Cr(n);if(Lc(n)&&!i)return n;n=i}return null}function Tw(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Dw(n,e,t,i=!0){let r=e[je];if(Aw(r,e,n,t),i){let o=If(t,n),a=e[gn],c=a.parentNode(n[wr]);c!==null&&nw(r,n[Wn],a,e,c,o)}let s=e[Rc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Nf(n,e){if(n.length<=mn)return;let t=mn+e,i=n[t];if(i){let r=i[Er];r!==null&&r!==n&&yh(r,i),e>0&&(n[t-1][zn]=i[zn]);let s=Ac(n,mn+e);tw(i[je],i);let o=s[yi];o!==null&&o.detachView(s[je]),i[Jt]=null,i[zn]=null,i[Be]&=-129}return i}function Aw(n,e,t,i){let r=mn+i,s=t.length;i>0&&(t[r-1][zn]=e),i<s-mn?(e[zn]=t[r],Rv(t,mn+i,e)):(t.push(e),e[zn]=null),e[Jt]=t;let o=e[Er];o!==null&&t!==o&&p_(o,e);let a=e[yi];a!==null&&a.insertView(n),pf(e),e[Be]|=128}function p_(n,e){let t=n[As],i=e[Jt];if(Mr(i))n[Be]|=2;else{let r=i[Jt][Qn];e[Qn]!==r&&(n[Be]|=2)}t===null?n[As]=[e]:t.push(e)}var Lo=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[je];return zc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[An]}set context(e){this._lView[An]=e}get destroyed(){return zo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Jt];if(Si(e)){let t=e[Oc],i=t?t.indexOf(this):-1;i>-1&&(Nf(e,i),Ac(t,i))}this._attachedToViewContainer=!1}i_(this._lView[je],this._lView)}onDestroy(e){Yv(this._lView,e)}markForCheck(){xh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Be]&=-129}reattach(){pf(this._lView),this._lView[Be]|=128}detectChanges(){this._lView[Be]|=1024,u_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Lc(this._lView),t=this._lView[Er];t!==null&&!e&&yh(t,this._lView),n_(this._lView[je],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ce(902,!1);this._appRef=e;let t=Lc(this._lView),i=this._lView[Er];i!==null&&!t&&p_(i,this._lView),pf(this._lView)}};var Fo=(()=>{class n{static __NG_ELEMENT_ID__=Nw}return n})(),Iw=Fo,Rw=class extends Iw{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=QE(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new Lo(r)}};function Nw(){return Mh(bi(),Ht())}function Mh(n,e){return n.type&4?new Rw(e,n,Ls(n,e)):null}function m_(n,e,t,i,r){let s=n.data[e];if(s===null)s=Pw(n,e,t,i,r),Ab()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Eb();s.injectorIndex=o===null?-1:o.injectorIndex}return el(s,!0),s}function Pw(n,e,t,i,r){let s=Kv(),o=Qv(),a=o?s:s&&s.parent,c=n.data[e]=Lw(n,a,t,e,i,r);return Ow(n,c,s,o),c}function Ow(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function Lw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Mb()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var AU=new RegExp(`^(\\d+)*(${vE}|${gE})*(.*)`);var Fw=()=>null;function sv(n,e){return Fw(n,e)}var kw=class{},g_=class{},Pf=class{resolveComponentFactory(e){throw Error(`No component factory found for ${cn(e)}.`)}},al=class{static NULL=new Pf},Is=class{};var Uw=(()=>{class n{static \u0275prov=Le({token:n,providedIn:"root",factory:()=>null})}return n})();function ov(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Ng(r,a);else if(s==2){let c=a,l=e[++o];i=Ng(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Sh(n,e=Ge.Default){let t=Ht();if(t===null)return $e(n,e);let i=bi();return _y(i,t,Cn(n),e)}function Bw(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,c=null,l=null,u=Hw(o);u===null?a=o:[a,c,l]=u,Ww(n,e,t,a,s,c,l)}s!==null&&i!==null&&Vw(t,i,s)}function Vw(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ce(-301,!1);i.push(e[r],s)}}function Hw(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&Ar(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,zw(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function zw(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function Gw(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Ww(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&Ar(h)&&(c=!0,Gw(n,t,f)),qb(my(t,e),n,h.type)}Zw(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=Yy(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=dy(t.mergedAttrs,h.hostAttrs),$w(n,t,e,d,h),Yw(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}jw(n,t,s)}function jw(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))av(0,e,r,i),av(1,e,r,i),lv(e,i,!1);else{let s=t.get(r);cv(0,e,s,i),cv(1,e,s,i),lv(e,i,!0)}}}function av(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),v_(e,s)}}function cv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),v_(e,o)}}function v_(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function lv(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||ph(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function $w(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Es(r.type,!0)),o=new Po(s,Ar(r),Sh);n.blueprint[i]=o,t[i]=o,qw(n,e,i,Yy(n,t,r.hostVars,Fs),r)}function qw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;Xw(o)!=a&&o.push(a),o.push(t,i,s)}}function Xw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function Yw(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ar(e)&&(t[""]=n)}}function Zw(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function y_(n,e,t,i,r,s,o,a){let c=e.consts,l=Hg(c,o),u=m_(e,n,2,i,l);return s&&Bw(e,t,u,Hg(c,a),r),u.mergedAttrs=dy(u.mergedAttrs,u.attrs),u.attrs!==null&&ov(u,u.attrs,!1),u.mergedAttrs!==null&&ov(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function __(n,e){Fb(n,e),Vv(e)&&n.queries.elementEnd(e)}var Gc=class extends al{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Ts(e);return new ko(t,this.ngModule)}};function Jw(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&sl.SignalBased)!==0};return r&&(s.transform=r),s})}function Kw(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function Qw(n,e,t){let i=e instanceof Dn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new vf(t,i):t}function eC(n){let e=n.get(Is,null);if(e===null)throw new Ce(407,!1);let t=n.get(Uw,null),i=n.get(Oo,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function tC(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return Wy(e,t,t==="svg"?ub:t==="math"?db:null)}var ko=class extends g_{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=Jw(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Kw(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=IE(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){Mt(22);let s=it(null);try{let o=this.componentDef,a=i?["ng-version","19.2.4"]:RE(this.componentDef.selectors[0]),c=qy(0,null,null,1,0,null,null,null,null,[a],null),l=Qw(o,r||this.ngModule,e),u=eC(l),d=u.rendererFactory.createRenderer(null,o),f=i?HE(d,i,o.encapsulation,l):tC(o,d),h=mh(null,c,null,512|Xy(o),null,null,u,d,l,null,Uy(f,l,!0));h[Wi]=f,ih(h);let g=null;try{let y=y_(Wi,c,h,"#host",()=>[this.componentDef],!0,0);f&&($y(d,f,y),il(f,h)),Qy(c,h,y),Vy(c,y,h),__(c,y),t!==void 0&&nC(y,this.ngContentSelectors,t),g=ji(y.index,h),h[An]=g[An],gh(c,h,null)}catch(y){throw g!==null&&wf(g),wf(h),y}finally{Mt(23),rh()}return new Of(this.componentType,h)}finally{it(s)}}},Of=class extends kw{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=fb(t[je],Wi),this.location=Ls(this._tNode,t),this.instance=ji(this._tNode.index,t)[An],this.hostView=this.changeDetectorRef=new Lo(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=e_(i,r[je],r,e,t);this.previousInputValues.set(e,t);let o=ji(i.index,r);xh(o,1)}get injector(){return new Sr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function nC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var ks=(()=>{class n{static __NG_ELEMENT_ID__=iC}return n})();function iC(){let n=bi();return M_(n,Ht())}var rC=ks,x_=class extends rC{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Ls(this._hostTNode,this._hostLView)}get injector(){return new Sr(this._hostTNode,this._hostLView)}get parentInjector(){let e=sh(this._hostTNode,this._hostLView);if(fy(e)){let t=kc(e,this._hostLView),i=Fc(e),r=t[je].data[i+8];return new Sr(r,t)}else return new Sr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=uv(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-mn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=sv(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,iv(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!ob(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new ko(Ts(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(Dn,null);y&&(s=y)}let u=Ts(c.componentType??{}),d=sv(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,iv(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(pb(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Jt],l=new x_(c,c[Wn],c[Jt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Dw(o,r,s,i),e.attachToViewContainerRef(),Rv(rf(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=uv(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Nf(this._lContainer,t);i&&(Ac(rf(this._lContainer),t),i_(i[je],i))}detach(e){let t=this._adjustIndex(e,-1),i=Nf(this._lContainer,t);return i&&Ac(rf(this._lContainer),t)!=null?new Lo(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function uv(n){return n[Oc]}function rf(n){return n[Oc]||(n[Oc]=[])}function M_(n,e){let t,i=e[n.index];return Si(i)?t=i:(t=Tw(i,e,null,n),e[n.index]=t,Zy(e,t)),oC(t,e,n,i),new x_(t,n,e)}function sC(n,e){let t=n[gn],i=t.createComment(""),r=qi(e,n),s=t.parentNode(r);return Hc(t,s,i,t.nextSibling(r),!1),i}var oC=aC;function aC(n,e,t,i){if(n[wr])return;let r;t.type&8?r=ei(i):r=sC(e,t),n[wr]=r}var Lf=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Ff=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)bh(e,t).matches!==null&&this.queries[t].setDirty()}},kf=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=mC(e):this.predicate=e}},Uf=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Bf=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,cC(t,s)),this.matchTNodeWithReadOption(e,t,bc(t,e,s,!1,!1))}else i===Fo?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,bc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ir||r===ks||r===Fo&&t.type&4)this.addMatch(t.index,-2);else{let s=bc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function cC(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function lC(n,e){return n.type&11?Ls(n,e):n.type&4?Mh(n,e):null}function uC(n,e,t,i){return t===-1?lC(e,n):t===-2?dC(n,e,i):Uc(n,n[je],t,e)}function dC(n,e,t){if(t===Ir)return Ls(e,n);if(t===Fo)return Mh(e,n);if(t===ks)return M_(e,n)}function S_(n,e,t,i){let r=e[yi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(uC(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Vf(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=S_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=mn;d<u.length;d++){let f=u[d];f[Er]===f[Jt]&&Vf(f[je],f,l,i)}if(u[As]!==null){let d=u[As];for(let f=0;f<d.length;f++){let h=d[f];Vf(h[je],h,l,i)}}}}}return i}function fC(n,e){return n[yi].queries[e].queryList}function hC(n,e,t){let i=new Ef((t&4)===4);return gb(n,e,i,i.destroy),(e[yi]??=new Ff).queries.push(new Lf(i))-1}function pC(n,e,t){let i=Xi();return i.firstCreatePass&&(gC(i,new kf(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),hC(i,Ht(),e)}function mC(n){return n.split(",").map(e=>e.trim())}function gC(n,e,t){n.queries===null&&(n.queries=new Uf),n.queries.track(new Bf(e,t))}function bh(n,e){return n.queries.getByIndex(e)}function vC(n,e){let t=n[je],i=bh(t,e);return i.crossesNgTemplate?Vf(t,n,e,[]):S_(t,n,i,e)}var Rs=class{},Eh=class{};var Hf=class extends Rs{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new Gc(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Ov(e);this._bootstrapComponents=zy(s.bootstrap),this._r3Injector=Sy(e,t,[{provide:Rs,useValue:this},{provide:al,useValue:this.componentFactoryResolver},...i],cn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},zf=class extends Eh{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Hf(this.moduleType,e,[])}};var Wc=class extends Rs{injector;componentFactoryResolver=new Gc(this);instance=null;constructor(e){super();let t=new Ro([...e.providers,{provide:Rs,useValue:this},{provide:al,useValue:this.componentFactoryResolver}],e.parent||Qf(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function wh(n,e,t=null){return new Wc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var yC=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Lv(!1,t.type),r=i.length>0?wh([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Le({token:n,providedIn:"environment",factory:()=>new n($e(Dn))})}return n})();function ln(n){return Yf(()=>{let e=b_(n),t=bt(ve({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Iy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(yC).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ni.Emulated,styles:n.styles||br,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&fh("NgStandalone"),E_(t);let i=n.dependencies;return t.directiveDefs=dv(i,!1),t.pipeDefs=dv(i,!0),t.id=bC(t),t})}function _C(n){return Ts(n)||qS(n)}function xC(n){return n!==null}function MC(n,e){if(n==null)return ws;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=sl.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function SC(n){if(n==null)return ws;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Ch(n){return Yf(()=>{let e=b_(n);return E_(e),e})}function b_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||ws,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||br,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:MC(n.inputs,e),outputs:SC(n.outputs),debugInfo:null}}function E_(n){n.features?.forEach(e=>e(n))}function dv(n,e){if(!n)return null;let t=e?XS:_C;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(xC)}function bC(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function w_(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}var Th=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var C_=new Oe("");var EC=(()=>{class n{static \u0275prov=Le({token:n,providedIn:"root",factory:()=>new Gf})}return n})(),Gf=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function jo(n){return!!n&&typeof n.then=="function"}function T_(n){return!!n&&typeof n.subscribe=="function"}var D_=new Oe("");var A_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=re(D_,{optional:!0})??[];injector=re(ti);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Gn(this.injector,r);if(jo(s))t.push(s);else if(T_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Dh=new Oe("");function wC(){Id(()=>{throw new Ce(600,!1)})}function CC(n){return n.isBoundToModule}var TC=10;var $i=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=re(oE);afterRenderManager=re(_E);zonelessEnabled=re(nl);rootEffectScheduler=re(EC);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new jt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=re(Os).hasPendingTasks.pipe(rt(t=>!t));constructor(){re(rl,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=re(Dn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){Mt(10);let r=t instanceof g_;if(!this._injector.get(A_).done){let f="";throw new Ce(405,f)}let o;r?o=t:o=this._injector.get(al).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=CC(o)?void 0:this._injector.get(Rs),c=i||o.selector,l=o.create(ti.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(C_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Ec(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),Mt(11,l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Mt(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(ky.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new Ce(101,!1);let t=it(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,it(t),this.afterTick.next(),Mt(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Is,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<TC;)Mt(14),this.synchronizeOnce(),Mt(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)DC(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Kc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Ec(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Dh,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Ec(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ce(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ec(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function DC(n,e,t,i){if(!t&&!Kc(n))return;u_(n,e,t&&!i?0:1)}function AC(n,e,t,i){return w_(n,Tb(),t)?e+Tv(t)+i:Fs}function _c(n,e){return n<<17|e<<2}function Dr(n){return n>>17&32767}function IC(n){return(n&2)==2}function RC(n,e){return n&131071|e<<17}function Wf(n){return n|2}function Ns(n){return(n&131068)>>2}function sf(n,e){return n&-131069|e<<2}function NC(n){return(n&1)===1}function jf(n){return n|1}function PC(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Dr(o),c=Ns(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Bo(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Dr(n[a+1]);n[i+1]=_c(f,a),f!==0&&(n[f+1]=sf(n[f+1],i)),n[a+1]=RC(n[a+1],i)}else n[i+1]=_c(a,0),a!==0&&(n[a+1]=sf(n[a+1],i)),a=i;else n[i+1]=_c(c,0),a===0?a=i:n[c+1]=sf(n[c+1],i),c=i;l&&(n[i+1]=Wf(n[i+1])),fv(n,u,i,!0),fv(n,u,i,!1),OC(e,u,n,i,s),o=_c(a,c),s?e.classBindings=o:e.styleBindings=o}function OC(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Bo(s,e)>=0&&(t[i+1]=jf(t[i+1]))}function fv(n,e,t,i){let r=n[t+1],s=e===null,o=i?Dr(r):Ns(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];LC(c,e)&&(a=!0,n[o+1]=i?jf(l):Wf(l)),o=i?Dr(l):Ns(l)}a&&(n[t+1]=i?Wf(r):jf(r))}function LC(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Bo(n,e)>=0:!1}function hv(n,e,t,i,r){e_(e,n,t,r?"class":"style",i)}function cl(n,e){return FC(n,e,null,!0),cl}function FC(n,e,t,i){let r=Ht(),s=Xi(),o=Db(2);if(s.firstUpdatePass&&UC(s,n,o,i),e!==Fs&&w_(r,o,e)){let a=s.data[Ps()];GC(s,a,r,r[gn],n,r[o+1]=WC(e,t),i,o)}}function kC(n,e){return e>=n.expandoStartIndex}function UC(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Ps()],o=kC(n,t);jC(s,i)&&e===null&&!o&&(e=!1),e=BC(r,s,e,i),PC(r,s,e,t,o,i)}}function BC(n,e,t,i){let r=Nb(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=of(null,n,e,t,i),t=Uo(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=of(r,n,e,t,i),s===null){let c=VC(n,e,i);c!==void 0&&Array.isArray(c)&&(c=of(null,n,e,c[1],i),c=Uo(c,e.attrs,i),HC(n,e,i,c))}else s=zC(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function VC(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Ns(i)!==0)return n[Dr(i)]}function HC(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Dr(r)]=i}function zC(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Uo(i,o,t)}return Uo(i,e.attrs,t)}function of(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Uo(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Uo(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),jS(n,o,t?!0:e[++s]))}return n===void 0?null:n}function GC(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=NC(l)?pv(c,e,t,r,Ns(l),o):void 0;if(!jc(u)){jc(s)||IC(l)&&(s=pv(c,null,t,r,a,o));let d=$v(Ps(),t);hw(i,o,d,r,s)}}function pv(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Fs&&(f=d?br:void 0);let h=d?Yd(f,i):u===i?f:void 0;if(l&&!jc(h)&&(h=Yd(c,i)),jc(h)&&(a=h,o))return a;let g=n[r+1];r=o?Dr(g):Ns(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Yd(c,i))}return a}function jc(n){return n!==void 0}function WC(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=cn(hh(n)))),n}function jC(n,e){return(n.flags&(e?8:16))!==0}function De(n,e,t,i){let r=Ht(),s=Xi(),o=Wi+n,a=r[gn],c=s.firstCreatePass?y_(o,s,r,e,qE,xb(),t,i):s.data[o],l=$C(s,r,c,a,e,n);r[o]=l;let u=Hv(c);return el(c,!0),$y(a,l,c),!t_(c)&&cy()&&r_(s,r,l,c),(vb()===0||u)&&il(l,r),yb(),u&&(Qy(s,r,c),Vy(s,c,r)),i!==null&&VE(r,c),De}function Ee(){let n=bi();Qv()?wb():(n=n.parent,el(n,!1));let e=n;Sb(e)&&bb(),_b();let t=Xi();return t.firstCreatePass&&__(t,e),e.classesWithoutHost!=null&&Ub(e)&&hv(t,e,Ht(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Bb(e)&&hv(t,e,Ht(),e.stylesWithoutHost,!1),Ee}function lt(n,e,t,i){return De(n,e,t,i),Ee(),lt}var $C=(n,e,t,i,r,s)=>(ly(!0),Wy(i,r,Ob()));var $c="en-US";var qC=$c;function XC(n){typeof n=="string"&&(qC=n.toLowerCase().replace(/_/g,"-"))}function mv(n,e,t,i){return function r(s){if(s===Function)return i;let o=Ho(n)?ji(n.index,e):e;xh(o,5);let a=gv(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=gv(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function gv(n,e,t,i){let r=it(null);try{return Mt(6,e,t),t(i)!==!1}catch(s){return YC(n,s),!1}finally{Mt(7,e,t),it(r)}}function YC(n,e){let t=n[Ds],i=t?t.get(_i,null):null;i&&i.handleError(e)}function vv(n,e,t,i,r,s,o,a,c){let l=t[i],d=e.data[i].outputs[r],h=l[d].subscribe(o),g=a.length;a.push(o,h),c&&c.push(s,n.index,g,-(g+1))}var ZC=(n,e,t)=>{};function Us(n,e,t,i){let r=Ht(),s=Xi(),o=bi();return KC(s,r,r[gn],o,n,e,i),Us}function JC(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Nc],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function KC(n,e,t,i,r,s,o){let a=Hv(i),l=n.firstCreatePass?Jv(n):null,u=e[An],d=Zv(e),f=!0;if(i.type&3||o){let h=qi(i,e),g=o?o(h):h,y=d.length,m=o?w=>o(ei(w[i.index])):i.index,p=null;if(!o&&a&&(p=JC(n,e,r,i.index)),p!==null){let w=p.__ngLastListenerFn__||p;w.__ngNextListenerFn__=s,p.__ngLastListenerFn__=s,f=!1}else{s=mv(i,e,u,s),ZC(g,r,s);let w=t.listen(g,r,s);d.push(s,w),l&&l.push(r,m,y,y+1)}}else s=mv(i,e,u,s);if(f){let h=i.outputs?.[r],g=i.hostDirectiveOutputs?.[r];if(g&&g.length)for(let y=0;y<g.length;y+=2){let m=g[y],p=g[y+1];vv(i,n,e,m,p,r,s,d,l)}if(h&&h.length)for(let y of h)vv(i,n,e,y,r,r,s,d,l)}}function I_(n,e,t){pC(n,e,t)}function Ah(n){let e=Ht(),t=Xi(),i=ty();nh(i+1);let r=bh(t,i);if(n.dirty&&hb(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=vC(e,i);n.reset(s,lE),n.notifyOnChanges()}return!0}return!1}function Ih(){return fC(Ht(),ty())}function pt(n,e=""){let t=Ht(),i=Xi(),r=n+Wi,s=i.firstCreatePass?m_(i,r,1,e,null):i.data[r],o=QC(i,t,s,e,n);t[r]=o,cy()&&r_(i,t,o,s),el(s,!1)}var QC=(n,e,t,i,r)=>(ly(!0),NE(e[gn],i));function Rh(n){return R_("",n,""),Rh}function R_(n,e,t){let i=Ht(),r=AC(i,n,e,t);return r!==Fs&&eT(i,Ps(),r),R_}function eT(n,e,t){let i=$v(e,n);PE(n[gn],i,t)}var $f=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Nh=(()=>{class n{compileModuleSync(t){return new zf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Ov(t),s=zy(r.declarations).reduce((o,a)=>{let c=Ts(a);return c&&o.push(new ko(c)),o},[]);return new $f(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var tT=(()=>{class n{zone=re(Xt);changeDetectionScheduler=re(Oo);applicationRef=re($i);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nT=new Oe("",{factory:()=>!1});function N_({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Xt(bt(ve({},O_()),{scheduleInRootZone:t})),[{provide:Xt,useFactory:n},{provide:Cs,multi:!0,useFactory:()=>{let i=re(tT,{optional:!0});return()=>i.initialize()}},{provide:Cs,multi:!0,useFactory:()=>{let i=re(iT);return()=>{i.initialize()}}},e===!0?{provide:Ey,useValue:!0}:[],{provide:wy,useValue:t??by}]}function P_(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=N_({ngZoneFactory:()=>{let r=O_(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&fh("NgZone_CoalesceEvent"),new Xt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return Yc([{provide:nT,useValue:!0},{provide:nl,useValue:!1},i])}function O_(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var iT=(()=>{class n{subscription=new Pt;initialized=!1;zone=re(Xt);pendingTasks=re(Os);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Xt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Xt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var rT=(()=>{class n{appRef=re($i);taskService=re(Os);ngZone=re(Xt);zonelessEnabled=re(nl);tracing=re(rl,{optional:!0});disableScheduling=re(Ey,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Pt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Vc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(re(wy,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof bf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?Yg:Cy;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Vc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,Yg(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function sT(){return typeof $localize<"u"&&$localize.locale||$c}var Ph=new Oe("",{providedIn:"root",factory:()=>re(Ph,Ge.Optional|Ge.SkipSelf)||sT()});var qf=new Oe(""),oT=new Oe("");function To(n){return!n.moduleRef}function aT(n){let e=To(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Xt);return t.run(()=>{To(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(_i,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),To(n)){let s=()=>e.destroy(),o=n.platformInjector.get(qf);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(qf);o.add(s),n.moduleRef.onDestroy(()=>{Ec(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return lT(i,t,()=>{let s=e.get(A_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(Ph,$c);if(XC(o||$c),!e.get(oT,!0))return To(n)?e.get($i):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(To(n)){let c=e.get($i);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return cT(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function cT(n,e){let t=n.injector.get($i);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new Ce(-403,!1);e.push(n)}function lT(n,e,t){try{let i=t();return jo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var wc=null;function uT(n=[],e){return ti.create({name:e,providers:[{provide:Zc,useValue:"platform"},{provide:qf,useValue:new Set([()=>wc=null])},...n]})}function dT(n=[]){if(wc)return wc;let e=uT(n);return wc=e,wC(),fT(e),e}function fT(n){let e=n.get(uh,null);Gn(n,()=>{e?.forEach(t=>t())})}var $o=(()=>{class n{static __NG_ELEMENT_ID__=hT}return n})();function hT(n){return pT(bi(),Ht(),(n&16)===16)}function pT(n,e,t){if(Ho(n)&&!t){let i=ji(n.index,e);return new Lo(i,i)}else if(n.type&175){let i=e[Qn];return new Lo(i,e)}return null}function L_(n){Mt(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=dT(i),s=[N_({}),{provide:Oo,useExisting:rT},...t||[]],o=new Wc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return aT({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{Mt(9)}}var yv=class{[cs];constructor(e){this[cs]=e}destroy(){this[cs].destroy()}};var z_=null;function Bs(){return z_}function G_(n){z_??=n}var ll=class{};var In=new Oe(""),W_=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>re(vT),providedIn:"platform"})}return n})();var vT=(()=>{class n extends W_{_location;_history;_doc=re(In);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Bs().getBaseHref(this._doc)}onPopState(t){let i=Bs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Bs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function j_(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function F_(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Rr(n){return n&&n[0]!=="?"?`?${n}`:n}var dl=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>re($_),providedIn:"root"})}return n})(),yT=new Oe(""),$_=(()=>{class n extends dl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??re(In).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return j_(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Rr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Rr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Rr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)($e(W_),$e(yT,8))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qo=(()=>{class n{_subject=new jt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=MT(F_(k_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Rr(i))}normalize(t){return n.stripTrailingSlash(xT(this._basePath,k_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Rr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Rr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Rr;static joinWithSlash=j_;static stripTrailingSlash=F_;static \u0275fac=function(i){return new(i||n)($e(dl))};static \u0275prov=Le({token:n,factory:()=>_T(),providedIn:"root"})}return n})();function _T(){return new qo($e(dl))}function xT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function k_(n){return n.replace(/\/index.html$/,"")}function MT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function q_(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var X_="browser",ST="server";function Oh(n){return n===ST}var ul=class{};var Fh=class extends ll{supportsDOMEvents=!0},kh=class n extends Fh{static makeCurrent(){G_(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=bT();return t==null?null:ET(t)}resetBaseElement(){Xo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return q_(document.cookie,e)}},Xo=null;function bT(){return Xo=Xo||document.querySelector("base"),Xo?Xo.getAttribute("href"):null}function ET(n){return new URL(n,document.baseURI).pathname}var wT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),Uh=new Oe(""),e0=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ce(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)($e(Uh),$e(Xt))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),hl=class{_doc;constructor(e){this._doc=e}manager},fl="ng-app-id";function Y_(n){for(let e of n)e.remove()}function Z_(n,e){let t=e.createElement("style");return t.textContent=n,t}function CT(n,e,t,i){let r=n.head?.querySelectorAll(`style[${fl}="${e}"],link[${fl}="${e}"]`);if(r)for(let s of r)s.removeAttribute(fl),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Bh(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var t0=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Oh(s),CT(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,Z_);i?.forEach(r=>this.addUsage(r,this.external,Bh))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(Y_(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Y_(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,Z_(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Bh(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(fl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)($e(In),$e(lh),$e(dh,8),$e(Go))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),Lh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Hh=/%COMP%/g;var n0="%COMP%",TT=`_nghost-${n0}`,DT=`_ngcontent-${n0}`,AT=!0,IT=new Oe("",{providedIn:"root",factory:()=>AT});function RT(n){return DT.replace(Hh,n)}function NT(n){return TT.replace(Hh,n)}function i0(n,e){return e.map(t=>t.replace(Hh,n))}var J_=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=Oh(a),this.defaultRenderer=new Yo(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ni.ShadowDom&&(i=bt(ve({},i),{encapsulation:ni.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof pl?r.applyToHost(t):r instanceof Zo&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case ni.Emulated:s=new pl(c,l,i,this.appId,u,o,a,d,f);break;case ni.ShadowDom:return new Vh(c,l,t,i,o,a,this.nonce,d,f);default:s=new Zo(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)($e(e0),$e(t0),$e(lh),$e(IT),$e(In),$e(Go),$e(Xt),$e(dh),$e(rl,8))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),Yo=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Lh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(K_(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(K_(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ce(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Lh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Lh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(xi.DashCase|xi.Important)?e.style.setProperty(t,i,r&xi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&xi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Bs().getGlobalEventTarget(this.doc,e),!e))throw new Ce(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function K_(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Vh=class extends Yo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=i0(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Bh(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Zo=class extends Yo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?i0(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},pl=class extends Zo{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=RT(u),this.hostAttr=NT(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},PT=(()=>{class n extends hl{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)($e(In))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})(),Q_=["alt","control","meta","shift"],OT={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},LT={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},FT=(()=>{class n extends hl{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Bs().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),Q_.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=OT[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Q_.forEach(o=>{if(o!==r){let a=LT[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)($e(In))};static \u0275prov=Le({token:n,factory:n.\u0275fac})}return n})();function r0(n,e){return L_(ve({rootComponent:n},kT(e)))}function kT(n){return{appProviders:[...zT,...n?.providers??[]],platformProviders:HT}}function UT(){kh.makeCurrent()}function BT(){return new _i}function VT(){return Ly(document),document}var HT=[{provide:Go,useValue:X_},{provide:uh,useValue:UT,multi:!0},{provide:In,useFactory:VT,deps:[]}];var zT=[{provide:Zc,useValue:"root"},{provide:_i,useFactory:BT,deps:[]},{provide:Uh,useClass:PT,multi:!0,deps:[In]},{provide:Uh,useClass:FT,multi:!0,deps:[In]},J_,t0,e0,{provide:Is,useExisting:J_},{provide:ul,useClass:wT,deps:[]},[]];var s0=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)($e(In))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ve="primary",da=Symbol("RouteTitle"),$h=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function js(n){return new $h(n)}function WT(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function jT(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ii(n[t],e[t]))return!1;return!0}function ii(n,e){let t=n?qh(n):void 0,i=e?qh(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!h0(n[r],e[r]))return!1;return!0}function qh(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function h0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function p0(n){return n.length>0?n[n.length-1]:null}function Yi(n){return Gd(n)?n:jo(n)?Ft(Promise.resolve(n)):Fe(n)}var $T={exact:g0,subset:v0},m0={exact:qT,subset:XT,ignored:()=>!0};function o0(n,e,t){return $T[t.paths](n.root,e.root,t.matrixParams)&&m0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function qT(n,e){return ii(n,e)}function g0(n,e,t){if(!Pr(n.segments,e.segments)||!vl(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!g0(n.children[i],e.children[i],t))return!1;return!0}function XT(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>h0(n[t],e[t]))}function v0(n,e,t){return y0(n,e,e.segments,t)}function y0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Pr(r,t)||e.hasChildren()||!vl(r,t,i))}else if(n.segments.length===t.length){if(!Pr(n.segments,t)||!vl(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!v0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Pr(n.segments,r)||!vl(n.segments,r,i)||!n.children[Ve]?!1:y0(n.children[Ve],e,s,i)}}function vl(n,e,t){return e.every((i,r)=>m0[t](n[r].parameters,i.parameters))}var Ci=class{root;queryParams;fragment;_queryParamMap;constructor(e=new ft([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=js(this.queryParams),this._queryParamMap}toString(){return JT.serialize(this)}},ft=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return yl(this)}},Nr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=js(this.parameters),this._parameterMap}toString(){return x0(this)}};function YT(n,e){return Pr(n,e)&&n.every((t,i)=>ii(t.parameters,e[i].parameters))}function Pr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function ZT(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ve&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ve&&(t=t.concat(e(r,i)))}),t}var _p=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>new ta,providedIn:"root"})}return n})(),ta=class{parse(e){let t=new Yh(e);return new Ci(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Jo(e.root,!0)}`,i=eD(e.queryParams),r=typeof e.fragment=="string"?`#${KT(e.fragment)}`:"";return`${t}${i}${r}`}},JT=new ta;function yl(n){return n.segments.map(e=>x0(e)).join("/")}function Jo(n,e){if(!n.hasChildren())return yl(n);if(e){let t=n.children[Ve]?Jo(n.children[Ve],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ve&&i.push(`${r}:${Jo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=ZT(n,(i,r)=>r===Ve?[Jo(n.children[Ve],!1)]:[`${r}:${Jo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ve]!=null?`${yl(n)}/${t[0]}`:`${yl(n)}/(${t.join("//")})`}}function _0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ml(n){return _0(n).replace(/%3B/gi,";")}function KT(n){return encodeURI(n)}function Xh(n){return _0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _l(n){return decodeURIComponent(n)}function a0(n){return _l(n.replace(/\+/g,"%20"))}function x0(n){return`${Xh(n.path)}${QT(n.parameters)}`}function QT(n){return Object.entries(n).map(([e,t])=>`;${Xh(e)}=${Xh(t)}`).join("")}function eD(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${ml(t)}=${ml(r)}`).join("&"):`${ml(t)}=${ml(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var tD=/^[^\/()?;#]+/;function zh(n){let e=n.match(tD);return e?e[0]:""}var nD=/^[^\/()?;=#]+/;function iD(n){let e=n.match(nD);return e?e[0]:""}var rD=/^[^=?&#]+/;function sD(n){let e=n.match(rD);return e?e[0]:""}var oD=/^[^&#]+/;function aD(n){let e=n.match(oD);return e?e[0]:""}var Yh=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ft([],{}):new ft([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ve]=new ft(e,t)),i}parseSegment(){let e=zh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ce(4009,!1);return this.capture(e),new Nr(_l(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=iD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=zh(this.remaining);r&&(i=r,this.capture(i))}e[_l(t)]=_l(i)}parseQueryParam(e){let t=sD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=aD(this.remaining);o&&(i=o,this.capture(i))}let r=a0(t),s=a0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=zh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ce(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ve);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ve]:new ft([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ce(4011,!1)}};function M0(n){return n.segments.length>0?new ft([],{[Ve]:n}):n}function S0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=S0(r);if(i===Ve&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new ft(n.segments,e);return cD(t)}function cD(n){if(n.numberOfChildren===1&&n.children[Ve]){let e=n.children[Ve];return new ft(n.segments.concat(e.segments),e.children)}return n}function na(n){return n instanceof Ci}function lD(n,e,t=null,i=null){let r=b0(n);return E0(r,e,t,i)}function b0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new ft(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=M0(i);return e??r}function E0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Gh(r,r,r,t,i);let s=uD(e);if(s.toRoot())return Gh(r,r,new ft([],{}),t,i);let o=dD(s,r,n),a=o.processChildren?Qo(o.segmentGroup,o.index,s.commands):C0(o.segmentGroup,o.index,s.commands);return Gh(r,o.segmentGroup,a,t,i)}function Ml(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function ia(n){return typeof n=="object"&&n!=null&&n.outlets}function Gh(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=w0(n,e,t);let a=M0(S0(o));return new Ci(a,s,r)}function w0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=w0(s,e,t)}),new ft(n.segments,i)}var Sl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Ml(i[0]))throw new Ce(4003,!1);let r=i.find(ia);if(r&&r!==p0(i))throw new Ce(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function uD(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Sl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Sl(t,e,i)}var zs=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function dD(n,e,t){if(n.isAbsolute)return new zs(e,!0,0);if(!t)return new zs(e,!1,NaN);if(t.parent===null)return new zs(t,!0,0);let i=Ml(n.commands[0])?0:1,r=t.segments.length-1+i;return fD(t,r,n.numberOfDoubleDots)}function fD(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Ce(4005,!1);r=i.segments.length}return new zs(i,!1,r-s)}function hD(n){return ia(n[0])?n[0].outlets:{[Ve]:n}}function C0(n,e,t){if(n??=new ft([],{}),n.segments.length===0&&n.hasChildren())return Qo(n,e,t);let i=pD(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new ft(n.segments.slice(0,i.pathIndex),{});return s.children[Ve]=new ft(n.segments.slice(i.pathIndex),n.children),Qo(s,0,r)}else return i.match&&r.length===0?new ft(n.segments,{}):i.match&&!n.hasChildren()?Zh(n,e,t):i.match?Qo(n,0,r):Zh(n,e,t)}function Qo(n,e,t){if(t.length===0)return new ft(n.segments,{});{let i=hD(t),r={};if(Object.keys(i).some(s=>s!==Ve)&&n.children[Ve]&&n.numberOfChildren===1&&n.children[Ve].segments.length===0){let s=Qo(n.children[Ve],e,t);return new ft(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=C0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new ft(n.segments,r)}}function pD(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(ia(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!l0(c,l,o))return s;i+=2}else{if(!l0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Zh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(ia(s)){let c=mD(s.outlets);return new ft(i,c)}if(r===0&&Ml(t[0])){let c=n.segments[e];i.push(new Nr(c.path,c0(t[0]))),r++;continue}let o=ia(s)?s.outlets[Ve]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Ml(a)?(i.push(new Nr(o,c0(a))),r+=2):(i.push(new Nr(o,{})),r++)}return new ft(i,{})}function mD(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Zh(new ft([],{}),0,i))}),e}function c0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function l0(n,e,t){return n==t.path&&ii(e,t.parameters)}var xl="imperative",Yt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Yt||{}),Rn=class{id;url;constructor(e,t){this.id=e,this.url=t}},ra=class extends Rn{type=Yt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Or=class extends Rn{urlAfterRedirects;type=Yt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(yn||{}),Jh=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Jh||{}),wi=class extends Rn{reason;code;type=Yt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Lr=class extends Rn{reason;code;type=Yt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},sa=class extends Rn{error;target;type=Yt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},bl=class extends Rn{urlAfterRedirects;state;type=Yt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kh=class extends Rn{urlAfterRedirects;state;type=Yt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qh=class extends Rn{urlAfterRedirects;state;shouldActivate;type=Yt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ep=class extends Rn{urlAfterRedirects;state;type=Yt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tp=class extends Rn{urlAfterRedirects;state;type=Yt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},np=class{route;type=Yt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ip=class{route;type=Yt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},rp=class{snapshot;type=Yt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sp=class{snapshot;type=Yt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},op=class{snapshot;type=Yt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ap=class{snapshot;type=Yt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var oa=class{},$s=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function gD(n,e){return n.providers&&!n._injector&&(n._injector=wh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function jn(n){return n.outlet||Ve}function vD(n,e){let t=n.filter(i=>jn(i)===e);return t.push(...n.filter(i=>jn(i)!==e)),t}function fa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var cp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return fa(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Il(this.rootInjector)}},Il=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new cp(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)($e(Dn))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),El=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=lp(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=lp(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=up(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return up(e,this._root).map(t=>t.value)}};function lp(n,e){if(n===e.value)return e;for(let t of e.children){let i=lp(n,t);if(i)return i}return null}function up(n,e){if(n===e.value)return[e];for(let t of e.children){let i=up(n,t);if(i.length)return i.unshift(e),i}return[]}var vn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Hs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var wl=class extends El{snapshot;constructor(e,t){super(e),this.snapshot=t,xp(this,e)}toString(){return this.snapshot.toString()}};function T0(n){let e=yD(n),t=new $t([new Nr("",{})]),i=new $t({}),r=new $t({}),s=new $t({}),o=new $t(""),a=new qs(t,i,s,o,r,Ve,n,e.root);return a.snapshot=e.root,new wl(new vn(a,[]),e)}function yD(n){let e={},t={},i={},r="",s=new Gs([],e,i,r,t,Ve,n,null,{});return new Tl("",new vn(s,[]))}var qs=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(rt(l=>l[da]))??Fe(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>js(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>js(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Cl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ve(ve({},e.params),n.params),data:ve(ve({},e.data),n.data),resolve:ve(ve(ve(ve({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ve({},n.params),data:ve({},n.data),resolve:ve(ve({},n.data),n._resolvedData??{})},r&&A0(r)&&(i.resolve[da]=r.title),i}var Gs=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[da]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=js(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=js(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Tl=class extends El{url;constructor(e,t){super(t),this.url=e,xp(this,t)}toString(){return D0(this._root)}};function xp(n,e){e.value._routerState=n,e.children.forEach(t=>xp(n,t))}function D0(n){let e=n.children.length>0?` { ${n.children.map(D0).join(", ")} } `:"";return`${n.value}${e}`}function Wh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ii(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ii(e.params,t.params)||n.paramsSubject.next(t.params),jT(e.url,t.url)||n.urlSubject.next(t.url),ii(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function dp(n,e){let t=ii(n.params,e.params)&&YT(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||dp(n.parent,e.parent))}function A0(n){return typeof n.title=="string"||n.title===null}var _D=new Oe(""),Mp=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ve;activateEvents=new pn;deactivateEvents=new pn;attachEvents=new pn;detachEvents=new pn;routerOutletData=Dy(void 0);parentContexts=re(Il);location=re(ks);changeDetector=re($o);inputBinder=re(Sp,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ce(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ce(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ce(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new Ce(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new fp(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Ch({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[eh]})}return n})(),fp=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===qs?this.route:e===Il?this.childContexts:e===_D?this.outletData:this.parent.get(e,t)}},Sp=new Oe("");function xD(n,e,t){let i=aa(n,e._root,t?t._root:void 0);return new wl(i,e)}function aa(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=MD(n,e,t);return new vn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>aa(n,a)),o}}let i=SD(e.value),r=e.children.map(s=>aa(n,s));return new vn(i,r)}}function MD(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return aa(n,i,r);return aa(n,i)})}function SD(n){return new qs(new $t(n.url),new $t(n.params),new $t(n.queryParams),new $t(n.fragment),new $t(n.data),n.outlet,n.component,n)}var ca=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},I0="ngNavigationCancelingError";function Dl(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=na(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=R0(!1,yn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function R0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[I0]=!0,t.cancellationCode=e,t}function bD(n){return N0(n)&&na(n.url)}function N0(n){return!!n&&n[I0]}var ED=(n,e,t,i)=>rt(r=>(new hp(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),hp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Wh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Hs(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Hs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Hs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Hs(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new ap(s.value.snapshot))}),e.children.length&&this.forwardEvent(new sp(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Wh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Wh(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Al=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ws=class{component;route;constructor(e,t){this.component=e,this.route=t}};function wD(n,e,t){let i=n._root,r=e?e._root:null;return Ko(i,r,t,[i.value])}function CD(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Ys(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!bv(n)?n:e.get(n):i}function Ko(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Hs(e);return n.children.forEach(o=>{TD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ea(a,t.getContext(o),r)),r}function TD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=DD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Al(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ko(n,e,a?a.children:null,i,r):Ko(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ws(a.outlet.component,o))}else o&&ea(e,a,r),r.canActivateChecks.push(new Al(i)),s.component?Ko(n,null,a?a.children:null,i,r):Ko(n,null,t,i,r);return r}function DD(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Pr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Pr(n.url,e.url)||!ii(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!dp(n,e)||!ii(n.queryParams,e.queryParams);case"paramsChange":default:return!dp(n,e)}}function ea(n,e,t){let i=Hs(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?ea(o,e.children.getContext(s),t):ea(o,null,t):ea(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ws(e.outlet.component,r)):t.canDeactivateChecks.push(new Ws(null,r)):t.canDeactivateChecks.push(new Ws(null,r))}function ha(n){return typeof n=="function"}function AD(n){return typeof n=="boolean"}function ID(n){return n&&ha(n.canLoad)}function RD(n){return n&&ha(n.canActivate)}function ND(n){return n&&ha(n.canActivateChild)}function PD(n){return n&&ha(n.canDeactivate)}function OD(n){return n&&ha(n.canMatch)}function P0(n){return n instanceof mi||n?.name==="EmptyError"}var gl=Symbol("INITIAL_VALUE");function Xs(){return Vn(n=>gc(n.map(e=>e.pipe(gi(1),qd(gl)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===gl)return gl;if(t===!1||LD(t))return t}return!0}),Bn(e=>e!==gl),gi(1)))}function LD(n){return na(n)||n instanceof ca}function FD(n,e){return kt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Fe(bt(ve({},t),{guardsResult:!0})):kD(o,i,r,n).pipe(kt(a=>a&&AD(a)?UD(i,s,n,e):Fe(a)),rt(a=>bt(ve({},t),{guardsResult:a})))})}function kD(n,e,t,i){return Ft(n).pipe(kt(r=>GD(r.component,r.route,t,e,i)),vi(r=>r!==!0,!0))}function UD(n,e,t,i){return Ft(e).pipe(ys(r=>vs(VD(r.route.parent,i),BD(r.route,i),zD(n,r.path,t),HD(n,r.route,t))),vi(r=>r!==!0,!0))}function BD(n,e){return n!==null&&e&&e(new op(n)),Fe(!0)}function VD(n,e){return n!==null&&e&&e(new rp(n)),Fe(!0)}function HD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Fe(!0);let r=i.map(s=>vc(()=>{let o=fa(e)??t,a=Ys(s,o),c=RD(a)?a.canActivate(e,n):Gn(o,()=>a(e,n));return Yi(c).pipe(vi())}));return Fe(r).pipe(Xs())}function zD(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>CD(o)).filter(o=>o!==null).map(o=>vc(()=>{let a=o.guards.map(c=>{let l=fa(o.node)??t,u=Ys(c,l),d=ND(u)?u.canActivateChild(i,n):Gn(l,()=>u(i,n));return Yi(d).pipe(vi())});return Fe(a).pipe(Xs())}));return Fe(s).pipe(Xs())}function GD(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Fe(!0);let o=s.map(a=>{let c=fa(e)??r,l=Ys(a,c),u=PD(l)?l.canDeactivate(n,e,t,i):Gn(c,()=>l(n,e,t,i));return Yi(u).pipe(vi())});return Fe(o).pipe(Xs())}function WD(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Fe(!0);let s=r.map(o=>{let a=Ys(o,n),c=ID(a)?a.canLoad(e,t):Gn(n,()=>a(e,t));return Yi(c)});return Fe(s).pipe(Xs(),O0(i))}function O0(n){return Bd(qt(e=>{if(typeof e!="boolean")throw Dl(n,e)}),rt(e=>e===!0))}function jD(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Fe(!0);let s=r.map(o=>{let a=Ys(o,n),c=OD(a)?a.canMatch(e,t):Gn(n,()=>a(e,t));return Yi(c)});return Fe(s).pipe(Xs(),O0(i))}var la=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},ua=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Vs(n){return gs(new la(n))}function $D(n){return gs(new Ce(4e3,!1))}function qD(n){return gs(R0(!1,yn.GuardRejected))}var pp=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Fe(i);if(r.numberOfChildren>1||!r.children[Ve])return $D(`${e.redirectTo}`);r=r.children[Ve]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:y}=r,m=Gn(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:y}));if(m instanceof Ci)throw new ua(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new ua(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ci(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new ft(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Ce(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},mp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function XD(n,e,t,i,r){let s=L0(n,e,t);return s.matched?(i=gD(e,i),jD(i,e,t,r).pipe(rt(o=>o===!0?s:ve({},mp)))):Fe(s)}function L0(n,e,t){if(e.path==="**")return YD(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ve({},mp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||WT)(t,n,e);if(!r)return ve({},mp);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ve(ve({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function YD(n){return{matched:!0,parameters:n.length>0?p0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function u0(n,e,t,i){return t.length>0&&KD(n,t,i)?{segmentGroup:new ft(e,JD(i,new ft(t,n.children))),slicedSegments:[]}:t.length===0&&QD(n,t,i)?{segmentGroup:new ft(n.segments,ZD(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new ft(n.segments,n.children),slicedSegments:t}}function ZD(n,e,t,i){let r={};for(let s of t)if(Rl(n,e,s)&&!i[jn(s)]){let o=new ft([],{});r[jn(s)]=o}return ve(ve({},i),r)}function JD(n,e){let t={};t[Ve]=e;for(let i of n)if(i.path===""&&jn(i)!==Ve){let r=new ft([],{});t[jn(i)]=r}return t}function KD(n,e,t){return t.some(i=>Rl(n,e,i)&&jn(i)!==Ve)}function QD(n,e,t){return t.some(i=>Rl(n,e,i))}function Rl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function eA(n,e,t){return e.length===0&&!n.children[t]}var gp=class{};function tA(n,e,t,i,r,s,o="emptyOnly"){return new vp(n,e,t,i,r,o,s).recognize()}var nA=31,vp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new pp(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ce(4002,`'${e.segmentGroup}'`)}recognize(){let e=u0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(({children:t,rootSnapshot:i})=>{let r=new vn(i,t),s=new Tl("",r),o=lD(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Gs([],Object.freeze({}),Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ve,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ve,t).pipe(rt(i=>({children:i,rootSnapshot:t})),Vi(i=>{if(i instanceof ua)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof la?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(rt(o=>o instanceof vn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ft(s).pipe(ys(o=>{let a=i.children[o],c=vD(t,o);return this.processSegmentGroup(e,c,a,o,r)}),$d((o,a)=>(o.push(...a),o)),Hi(null),jd(),kt(o=>{if(o===null)return Vs(i);let a=F0(o);return iA(a),Fe(a)}))}processSegment(e,t,i,r,s,o,a){return Ft(t).pipe(ys(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Vi(l=>{if(l instanceof la)return Fe(null);throw l}))),vi(c=>!!c),Vi(c=>{if(P0(c))return eA(i,r,s)?Fe(new gp):Vs(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return jn(i)!==o&&(o===Ve||!Rl(r,s,i))?Vs(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):Vs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=L0(t,r,s);if(!c)return Vs(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>nA&&(this.allowRedirects=!1));let h=new Gs(s,l,Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,d0(r),jn(r),r.component??r._loadedComponent??null,r,f0(r)),g=Cl(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(kt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=XD(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Vn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Vn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new Gs(f,d,Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,d0(i),jn(i),i.component??i._loadedComponent??null,i,f0(i)),y=Cl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=u0(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(rt(E=>new vn(g,E)));if(l.length===0&&p.length===0)return Fe(new vn(g,[]));let w=jn(i)===s;return this.processSegment(u,l,m,p,w?Ve:s,!0,g).pipe(rt(E=>new vn(g,E instanceof vn?[E]:[])))}))):Vs(t)))}getChildConfig(e,t,i){return t.children?Fe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Fe({routes:t._loadedRoutes,injector:t._loadedInjector}):WD(e,t,i,this.urlSerializer).pipe(kt(r=>r?this.configLoader.loadChildren(e,t).pipe(qt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):qD(t))):Fe({routes:[],injector:e})}};function iA(n){n.sort((e,t)=>e.value.outlet===Ve?-1:t.value.outlet===Ve?1:e.value.outlet.localeCompare(t.value.outlet))}function rA(n){let e=n.value.routeConfig;return e&&e.path===""}function F0(n){let e=[],t=new Set;for(let i of n){if(!rA(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=F0(i.children);e.push(new vn(i.value,r))}return e.filter(i=>!t.has(i))}function d0(n){return n.data||{}}function f0(n){return n.resolve||{}}function sA(n,e,t,i,r,s){return kt(o=>tA(n,e,t,i,o.extractedUrl,r,s).pipe(rt(({state:a,tree:c})=>bt(ve({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function oA(n,e){return kt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Fe(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of k0(c))o.add(l);let a=0;return Ft(o).pipe(ys(c=>s.has(c)?aA(c,i,n,e):(c.data=Cl(c,c.parent,n).resolve,Fe(void 0))),qt(()=>a++),_s(1),kt(c=>a===o.size?Fe(t):on))})}function k0(n){let e=n.children.map(t=>k0(t)).flat();return[n,...e]}function aA(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!A0(r)&&(s[da]=r.title),cA(s,n,e,i).pipe(rt(o=>(n._resolvedData=o,n.data=Cl(n,n.parent,t).resolve,null)))}function cA(n,e,t,i){let r=qh(n);if(r.length===0)return Fe({});let s={};return Ft(r).pipe(kt(o=>lA(n[o],e,t,i).pipe(vi(),qt(a=>{if(a instanceof ca)throw Dl(new ta,a);s[o]=a}))),_s(1),rt(()=>s),Vi(o=>P0(o)?on:gs(o)))}function lA(n,e,t,i){let r=fa(e)??i,s=Ys(n,r),o=s.resolve?s.resolve(e,t):Gn(r,()=>s(e,t));return Yi(o)}function jh(n){return Vn(e=>{let t=n(e);return t?Ft(t).pipe(rt(()=>e)):Fe(e)})}var U0=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ve);return i}getResolvedTitleForRoute(t){return t.data[da]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>re(uA),providedIn:"root"})}return n})(),uA=(()=>{class n extends U0{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)($e(s0))};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),bp=new Oe("",{providedIn:"root",factory:()=>({})}),dA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=ln({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&lt(0,"router-outlet")},dependencies:[Mp],encapsulation:2})}return n})();function Ep(n){let e=n.children&&n.children.map(Ep),t=e?bt(ve({},n),{children:e}):ve({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ve&&(t.component=dA),t}var wp=new Oe(""),fA=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=re(Nh);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Fe(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Yi(t.loadComponent()).pipe(rt(B0),qt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Co(()=>{this.componentLoaders.delete(t)})),r=new ms(i,()=>new jt).pipe(ps());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Fe({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=hA(i,this.compiler,t,this.onLoadEndListener).pipe(Co(()=>{this.childrenLoaders.delete(i)})),o=new ms(s,()=>new jt).pipe(ps());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hA(n,e,t,i){return Yi(n.loadChildren()).pipe(rt(B0),kt(r=>r instanceof Eh||Array.isArray(r)?Fe(r):Ft(e.compileModuleAsync(r))),rt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(wp,[],{optional:!0,self:!0}).flat()),{routes:o.map(Ep),injector:s}}))}function pA(n){return n&&typeof n=="object"&&"default"in n}function B0(n){return pA(n)?n.default:n}var Cp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>re(mA),providedIn:"root"})}return n})(),mA=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),gA=new Oe("");var vA=new Oe(""),yA=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new jt;transitionAbortSubject=new jt;configLoader=re(fA);environmentInjector=re(Dn);destroyRef=re(tl);urlSerializer=re(_p);rootContexts=re(Il);location=re(qo);inputBindingEnabled=re(Sp,{optional:!0})!==null;titleStrategy=re(U0);options=re(bp,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=re(Cp);createViewTransition=re(gA,{optional:!0});navigationErrorHandler=re(vA,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Fe(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new np(r)),i=r=>this.events.next(new ip(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(bt(ve({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new $t(null),this.transitions.pipe(Bn(i=>i!==null),Vn(i=>{let r=!1,s=!1;return Fe(i).pipe(Vn(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",yn.SupersededByNewNavigation),on;this.currentTransition=i,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?bt(ve({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new Lr(o.id,this.urlSerializer.serialize(o.rawUrl),l,Jh.IgnoredSameUrlNavigation)),o.resolve(!1),on}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Fe(o).pipe(Vn(l=>(this.events.next(new ra(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?on:Promise.resolve(l))),sA(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),qt(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=bt(ve({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new bl(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:d,restoredState:f,extras:h}=o,g=new ra(l,this.urlSerializer.serialize(u),d,f);this.events.next(g);let y=T0(this.rootComponentType).snapshot;return this.currentTransition=i=bt(ve({},o),{targetSnapshot:y,urlAfterRedirects:u,extras:bt(ve({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Fe(i)}else{let l="";return this.events.next(new Lr(o.id,this.urlSerializer.serialize(o.extractedUrl),l,Jh.IgnoredByUrlHandlingStrategy)),o.resolve(!1),on}}),qt(o=>{let a=new Kh(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),rt(o=>(this.currentTransition=i=bt(ve({},o),{guards:wD(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),FD(this.environmentInjector,o=>this.events.next(o)),qt(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Dl(this.urlSerializer,o.guardsResult);let a=new Qh(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Bn(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",yn.GuardRejected),!1)),jh(o=>{if(o.guards.canActivateChecks.length!==0)return Fe(o).pipe(qt(a=>{let c=new ep(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),Vn(a=>{let c=!1;return Fe(a).pipe(oA(this.paramsInheritanceStrategy,this.environmentInjector),qt({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",yn.NoDataFromResolver)}}))}),qt(a=>{let c=new tp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),jh(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(qt(u=>{c.component=u}),rt(()=>{})));for(let u of c.children)l.push(...a(u));return l};return gc(a(o.targetSnapshot.root)).pipe(Hi(null),gi(1))}),jh(()=>this.afterPreactivation()),Vn(()=>{let{currentSnapshot:o,targetSnapshot:a}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?Ft(c).pipe(rt(()=>i)):Fe(i)}),rt(o=>{let a=xD(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=bt(ve({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,i}),qt(()=>{this.events.next(new oa)}),ED(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),gi(1),qt({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Or(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),Xd(this.transitionAbortSubject.pipe(qt(o=>{throw o}))),Co(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",yn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Vi(o=>{if(this.destroyed)return i.resolve(!1),on;if(s=!0,N0(o))this.events.next(new wi(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),bD(o)?this.events.next(new $s(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let a=new sa(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=Gn(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof ca){let{message:l,cancellationCode:u}=Dl(this.urlSerializer,c);this.events.next(new wi(i.id,this.urlSerializer.serialize(i.extractedUrl),l,u)),this.events.next(new $s(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return on}))}))}cancelNavigationTransition(t,i,r){let s=new wi(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _A(n){return n!==xl}var xA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>re(MA),providedIn:"root"})}return n})(),yp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},MA=(()=>{class n extends yp{static \u0275fac=(()=>{let t;return function(r){return(t||(t=oh(n)))(r||n)}})();static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),V0=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:()=>re(SA),providedIn:"root"})}return n})(),SA=(()=>{class n extends V0{location=re(qo);urlSerializer=re(_p);options=re(bp,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=re(Cp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ci;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=T0(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof ra)this.stateMemento=this.createStateMemento();else if(t instanceof Lr)this.rawUrlTree=i.initialUrl;else if(t instanceof bl){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof oa?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof wi&&(t.code===yn.GuardRejected||t.code===yn.NoDataFromResolver)?this.restoreHistory(i):t instanceof sa?this.restoreHistory(i,!0):t instanceof Or&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof Ci?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=ve(ve({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=ve(ve({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=oh(n)))(r||n)}})();static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function bA(n,e){n.events.pipe(Bn(t=>t instanceof Or||t instanceof wi||t instanceof sa||t instanceof Lr),rt(t=>t instanceof Or||t instanceof Lr?0:(t instanceof wi?t.code===yn.Redirect||t.code===yn.SupersededByNewNavigation:!1)?2:1),Bn(t=>t!==2),gi(1)).subscribe(()=>{e()})}var EA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},wA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},H0=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=re(Th);stateManager=re(V0);options=re(bp,{optional:!0})||{};pendingTasks=re(Os);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=re(yA);urlSerializer=re(_p);location=re(qo);urlHandlingStrategy=re(Cp);_events=new jt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=re(xA);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=re(wp,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!re(Sp,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Pt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof wi&&i.code!==yn.Redirect&&i.code!==yn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Or)this.navigated=!0;else if(i instanceof $s){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ve({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||_A(r.source)},o);this.scheduleNavigation(a,xl,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}TA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),xl,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ve({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ep),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ve(ve({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=b0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return E0(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=na(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,xl,null,i)}navigate(t,i={skipLocationChange:!1}){return CA(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ve({},EA):i===!1?r=ve({},wA):r=i,na(t))return o0(this.currentUrlTree,t,r);let s=this.parseUrl(t);return o0(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return bA(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Le({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function CA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Ce(4008,!1)}function TA(n){return!(n instanceof oa)&&!(n instanceof $s)}var DA=new Oe("");function z0(n,...e){return Yc([{provide:wp,multi:!0,useValue:n},[],{provide:qs,useFactory:AA,deps:[H0]},{provide:Dh,multi:!0,useFactory:IA},e.map(t=>t.\u0275providers)])}function AA(n){return n.routerState.root}function IA(){let n=re(ti);return e=>{let t=n.get($i);if(e!==t.components[0])return;let i=n.get(H0),r=n.get(RA);n.get(NA)===1&&i.initialNavigation(),n.get(PA,null,Ge.Optional)?.setUpPreloading(),n.get(DA,null,Ge.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var RA=new Oe("",{factory:()=>new jt}),NA=new Oe("",{providedIn:"root",factory:()=>1});var PA=new Oe("");var Zs=class n{isMenuActive=!1;toggleMenu(){this.isMenuActive=!this.isMenuActive}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ln({type:n,selectors:[["app-navigation"]],decls:19,vars:4,consts:[[1,"navbar"],[1,"nav-links"],["href","#home",1,"nav-item"],["href","#about",1,"nav-item"],["href","#projects",1,"nav-item"],["href","#contact",1,"nav-item"],[1,"hamburger",3,"click"],[1,"container"]],template:function(t,i){t&1&&(De(0,"nav",0)(1,"ul",1)(2,"li")(3,"a",2),pt(4,"Home"),Ee()(),De(5,"li")(6,"a",3),pt(7,"About"),Ee()(),De(8,"li")(9,"a",4),pt(10,"Projects"),Ee()(),De(11,"li")(12,"a",5),pt(13,"Contact"),Ee()()(),De(14,"div",6),Us("click",function(){return i.toggleMenu()}),lt(15,"span")(16,"span")(17,"span"),Ee()(),lt(18,"div",7)),t&2&&(Wo(),cl("active",i.isMenuActive),Wo(13),cl("active",i.isMenuActive))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}.navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:15px 30px;background:#2b2b2cbf;border:1px solid;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);position:fixed;width:100%;z-index:1000;left:auto;right:0;border-radius:20px;box-shadow:none}.container[_ngcontent-%COMP%]{display:flex;padding:20px;gap:20px;overflow:hidden}.navbar.scrolled[_ngcontent-%COMP%]{background:#000000e6;transform:translateY(0)}.nav-links[_ngcontent-%COMP%]{display:flex;gap:30px;align-items:center;transition:transform .5s ease-in-out;margin-left:auto}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.nav-item[_ngcontent-%COMP%]{text-decoration:none;color:#fffc;font-size:1rem;font-weight:500;transition:color .3s ease-in-out,text-shadow .3s ease-in-out}.nav-item[_ngcontent-%COMP%]:hover{color:#12d6d6;text-shadow:0 0 10px rgba(18,214,214,.8),0 0 20px rgba(18,214,214,.6)}.hamburger[_ngcontent-%COMP%]{display:none;flex-direction:column;cursor:pointer;gap:6px;z-index:1100;margin-left:auto}.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:35px;height:4px;background-color:#fff;border-radius:2px;transition:transform .3s ease-in-out,opacity .3s ease-in-out}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){transform:rotate(45deg) translate(6px,6px)}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){opacity:0}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg) translate(6px,-6px)}@media (max-width: 768px){.nav-links[_ngcontent-%COMP%]{display:none;position:absolute;top:70px;right:20px;width:250px;background:#000000f2;flex-direction:column;padding:20px;border-radius:10px;box-shadow:0 4px 10px #00000080}.nav-links.active[_ngcontent-%COMP%]{display:flex}.nav-item[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;padding:10px 0}.hamburger[_ngcontent-%COMP%]{display:flex}}"]})};var G0=[{path:"",component:Zs}];var W0={providers:[P_({eventCoalescing:!0}),z0(G0)]};var Mu="174";var ux=0,im=1,dx=2;var rm=1,fx=2,ci=3,Pi=0,rn=1,li=2,Fi=0,Gr=1,Fa=2,sm=3,om=4,hx=5,rr=100,px=101,mx=102,gx=103,vx=104,yx=200,_x=201,xx=202,Mx=203,Ql=204,eu=205,Sx=206,bx=207,Ex=208,wx=209,Cx=210,Tx=211,Dx=212,Ax=213,Ix=214,Su=0,bu=1,Eu=2,Wr=3,wu=4,Cu=5,Tu=6,Du=7,am=0,Rx=1,Nx=2,ki=0,Px=1,Ox=2,Lx=3,Fx=4,kx=5,Ux=6,Bx=7;var Yp=300,Kr=301,Qr=302,Au=303,Iu=304,ka=306,tu=1e3,ir=1001,nu=1002,Pn=1003,Vx=1004;var Ua=1005;var Yn=1006,Ru=1007;var ur=1008;var ui=1009,cm=1010,lm=1011,po=1012,Nu=1013,dr=1014,di=1015,mo=1016,Pu=1017,Ou=1018,es=1020,um=35902,dm=1021,fm=1022,Ln=1023,hm=1024,pm=1025,zr=1026,jr=1027,mm=1028,Lu=1029,gm=1030,Fu=1031;var ku=1033,Ba=33776,Va=33777,Ha=33778,za=33779,Uu=35840,Bu=35841,Vu=35842,Hu=35843,zu=36196,Gu=37492,Wu=37496,ju=37808,$u=37809,qu=37810,Xu=37811,Yu=37812,Zu=37813,Ju=37814,Ku=37815,Qu=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,Ga=36492,sd=36494,od=36495,vm=36283,ad=36284,cd=36285,ld=36286;var xa=2300,iu=2301,Kl=2302,Zp=2400,Jp=2401,Kp=2402;var Hx=3200,zx=3201;var Gx=0,Wx=1,Ui="",Mn="srgb",$r="srgb-linear",Ma="linear",mt="srgb";var Vr=7680;var Qp=519,jx=512,$x=513,qx=514,ym=515,Xx=516,Yx=517,Zx=518,Jx=519,em=35044;var _m="300 es",si=2e3,Sa=2001;var Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tp=Math.PI/180,ru=180/Math.PI;function Wa(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function OA(n,e){return(n%e+e)%e}function Dp(n,e,t){return(1-t)*n+t*e}function ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var vt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],w=r[1],E=r[4],b=r[7],P=r[2],R=r[5],T=r[8];return s[0]=o*y+a*w+c*P,s[3]=o*m+a*E+c*R,s[6]=o*p+a*b+c*T,s[1]=l*y+u*w+d*P,s[4]=l*m+u*E+d*R,s[7]=l*p+u*b+d*T,s[2]=f*y+h*w+g*P,s[5]=f*m+h*E+g*R,s[8]=f*p+h*b+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ap.makeScale(e,t)),this}rotate(e){return this.premultiply(Ap.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ap.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ap=new ke;function xm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kx(){let n=ba("canvas");return n.style.display="block",n}var j0={};function fr(n){n in j0||(j0[n]=!0,console.warn(n))}function Qx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function eM(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $0=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q0=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LA(){let n={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=lo(r.r),r.g=lo(r.g),r.b=lo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?Ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$r]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:$0,fromXYZ:q0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:$0,fromXYZ:q0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}var st=LA();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,su=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=ba("canvas")),Js.width=e.width,Js.height=e.height;let i=Js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Js}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ba("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},FA=0,uo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ip(r[o].image)):s.push(Ip(r[o]))}else s=Ip(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ip(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?su.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kA=0,hr=(()=>{class n extends Oi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ir,s=ir,o=Yn,a=ur,c=Ln,l=ui,u=n.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kA++}),this.uuid=Wa(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tu:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case nu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tu:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case nu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Yp,n.DEFAULT_ANISOTROPY=1,n})(),At=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,b=(h+1)/2,P=(p+1)/2,R=(u+f)/4,T=(d+y)/4,O=(g+m)/4;return E>b&&E>P?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=T/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=O/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ou=class extends Oi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new hr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new uo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends ou{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ea=class extends hr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var au=class extends hr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,w=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let P=Math.sqrt(E),R=Math.atan2(P,p*w);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let b=a*w;if(c=c*m+f*b,l=l*m+h*b,u=u*m+g*b,d=d*m+y*b,m===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(X0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(X0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rp.copy(this).projectOnVector(e),this.sub(Rp)}reflect(e){return this.sub(Rp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rp=new U,X0=new Li,sr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Pl.subVectors(this.max,ga),Ks.subVectors(e.a,ga),Qs.subVectors(e.b,ga),eo.subVectors(e.c,ga),Zi.subVectors(Qs,Ks),Ji.subVectors(eo,Qs),Fr.subVectors(Ks,eo);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Fr.z,Fr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Fr.z,0,-Fr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Fr.y,Fr.x,0];return!Np(t,Ks,Qs,eo,Pl)||(t=[1,0,0,0,1,0,0,0,1],!Np(t,Ks,Qs,eo,Pl))?!1:(Ol.crossVectors(Zi,Ji),t=[Ol.x,Ol.y,Ol.z],Np(t,Ks,Qs,eo,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ti=[new U,new U,new U,new U,new U,new U,new U,new U],$n=new U,Nl=new sr,Ks=new U,Qs=new U,eo=new U,Zi=new U,Ji=new U,Fr=new U,ga=new U,Pl=new U,Ol=new U,kr=new U;function Np(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){kr.fromArray(n,s);let a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),c=e.dot(kr),l=t.dot(kr),u=i.dot(kr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var UA=new sr,va=new U,Pp=new U,qr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):UA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);let t=va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(Pp)),this.expandByPoint(va.copy(e.center).sub(Pp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new U,Op=new U,Ll=new U,Ki=new U,Lp=new U,Fl=new U,Fp=new U,wa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Op.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Op);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ll),a=Ki.dot(this.direction),c=-Ki.dot(Ll),l=Ki.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Op).addScaledVector(Ll,f),h}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,r,s){Lp.subVectors(t,e),Fl.subVectors(i,e),Fp.crossVectors(Lp,Fl);let o=this.direction.dot(Fp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(Fl.crossVectors(Ki,Fl));if(c<0)return null;let l=a*this.direction.dot(Lp.cross(Ki));if(l<0||c+l>o)return null;let u=-a*Ki.dot(Fp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),s=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BA,e,VA)}lookAt(e,t,i){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Qi.crossVectors(i,_n),Qi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Qi.crossVectors(i,_n)),Qi.normalize(),kl.crossVectors(_n,Qi),r[0]=Qi.x,r[4]=kl.x,r[8]=_n.x,r[1]=Qi.y,r[5]=kl.y,r[9]=_n.y,r[2]=Qi.z,r[6]=kl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],w=i[3],E=i[7],b=i[11],P=i[15],R=r[0],T=r[4],O=r[8],M=r[12],x=r[1],D=r[5],G=r[9],B=r[13],X=r[2],Y=r[6],j=r[10],J=r[14],H=r[3],se=r[7],de=r[11],xe=r[15];return s[0]=o*R+a*x+c*X+l*H,s[4]=o*T+a*D+c*Y+l*se,s[8]=o*O+a*G+c*j+l*de,s[12]=o*M+a*B+c*J+l*xe,s[1]=u*R+d*x+f*X+h*H,s[5]=u*T+d*D+f*Y+h*se,s[9]=u*O+d*G+f*j+h*de,s[13]=u*M+d*B+f*J+h*xe,s[2]=g*R+y*x+m*X+p*H,s[6]=g*T+y*D+m*Y+p*se,s[10]=g*O+y*G+m*j+p*de,s[14]=g*M+y*B+m*J+p*xe,s[3]=w*R+E*x+b*X+P*H,s[7]=w*T+E*D+b*Y+P*se,s[11]=w*O+E*G+b*j+P*de,s[15]=w*M+E*B+b*J+P*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,E=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,b=u*y*l-g*d*l+g*a*h-o*y*h-u*a*p+o*d*p,P=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,R=t*w+i*E+r*b+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=w*T,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*T,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*T,e[4]=E*T,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*T,e[8]=b*T,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*T,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*T,e[12]=P*T,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,w=c*l,E=c*u,b=c*d,P=i.x,R=i.y,T=i.z;return r[0]=(1-(y+p))*P,r[1]=(h+b)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(h-b)*R,r[5]=(1-(f+p))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(g+E)*T,r[9]=(m-w)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=to.set(r[0],r[1],r[2]).length(),o=to.set(r[4],r[5],r[6]).length(),a=to.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);let l=1/s,u=1/o,d=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=si){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===si)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Sa)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=si){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,y;if(a===si)g=(o+s)*d,y=-2*d;else if(a===Sa)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},to=new U,qn=new Rt,BA=new U(0,0,0),VA=new U(1,1,1),Qi=new U,kl=new U,_n=new U,Y0=new Rt,Z0=new Li,Xr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Y0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},HA=0,J0=new U,no=new Li,Ai=new Rt,Ul=new U,ya=new U,zA=new U,GA=new Li,K0=new U(1,0,0),Q0=new U(0,1,0),ex=new U(0,0,1),tx={type:"added"},WA={type:"removed"},io={type:"childadded",child:null},kp={type:"childremoved",child:null},pr=(()=>{class n extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,i=new Xr,r=new Li,s=new U(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ke}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return no.setFromAxisAngle(t,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(t,i){return no.setFromAxisAngle(t,i),this.quaternion.premultiply(no),this}rotateX(t){return this.rotateOnAxis(K0,t)}rotateY(t){return this.rotateOnAxis(Q0,t)}rotateZ(t){return this.rotateOnAxis(ex,t)}translateOnAxis(t,i){return J0.copy(t).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(K0,t)}translateY(t){return this.translateOnAxis(Q0,t)}translateZ(t){return this.translateOnAxis(ex,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ul.copy(t):Ul.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(ya,Ul,this.up):Ai.lookAt(Ul,ya,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),no.setFromRotationMatrix(Ai),this.quaternion.premultiply(no.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tx),io.child=t,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WA),kp.child=t,this.dispatchEvent(kp),kp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tx),io.child=t,this.dispatchEvent(io),io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,t,zA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,GA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new U(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Xn=new U,Ii=new U,Up=new U,Ri=new U,ro=new U,so=new U,nx=new U,Bp=new U,Vp=new U,Hp=new U,zp=new At,Gp=new At,Wp=new At,nr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),Ii.subVectors(i,t),Up.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(Ii),c=Xn.dot(Up),l=Ii.dot(Ii),u=Ii.dot(Up),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return zp.setScalar(0),Gp.setScalar(0),Wp.setScalar(0),zp.fromBufferAttribute(e,t),Gp.fromBufferAttribute(e,i),Wp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zp,s.x),o.addScaledVector(Gp,s.y),o.addScaledVector(Wp,s.z),o}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),Ii.subVectors(e,t),Xn.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Xn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ro.subVectors(r,i),so.subVectors(s,i),Bp.subVectors(e,i);let c=ro.dot(Bp),l=so.dot(Bp);if(c<=0&&l<=0)return t.copy(i);Vp.subVectors(e,r);let u=ro.dot(Vp),d=so.dot(Vp);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ro,o);Hp.subVectors(e,s);let h=ro.dot(Hp),g=so.dot(Hp);if(g>=0&&h<=g)return t.copy(s);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(so,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return nx.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(nx,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(ro,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function jp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=OA(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jp(o,s,e+1/3),this.g=jp(o,s,e),this.b=jp(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let i=nM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return st.fromWorkingColorSpace(Qt.copy(this),e),Math.round(qe(Qt.r*255,0,255))*65536+Math.round(qe(Qt.g*255,0,255))*256+Math.round(qe(Qt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Qt.copy(this),t);let i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Mn){st.fromWorkingColorSpace(Qt.copy(this),e);let t=Qt.r,i=Qt.g,r=Qt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Bl);let i=Dp(er.h,Bl.h,t),r=Dp(er.s,Bl.s,t),s=Dp(er.l,Bl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new et;et.NAMES=nM;var jA=0,or=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jA++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Gr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=eu,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==eu&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Yr=class extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new U,Vl=new vt,$A=0,en=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$A++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=em,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ma(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==em&&(e.usage=this.usage),e}};var Ta=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Da=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var oi=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},qA=0,Nn=new Rt,$p=new pr,oo=new U,xn=new sr,_a=new sr,zt=new U,Zn=class n extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xm(e)?Da:Ta)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return $p.lookAt(e),$p.updateMatrix(),this.applyMatrix4($p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(xn.min,_a.min),xn.expandByPoint(zt),zt.addVectors(xn.max,_a.max),xn.expandByPoint(zt)):(xn.expandByPoint(_a.min),xn.expandByPoint(_a.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(oo.fromBufferAttribute(e,l),zt.add(oo)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new U,c[O]=new U;let l=new U,u=new U,d=new U,f=new vt,h=new vt,g=new vt,y=new U,m=new U;function p(O,M,x){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,O),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[O].add(y),a[M].add(y),a[x].add(y),c[O].add(m),c[M].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,M=w.length;O<M;++O){let x=w[O],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let E=new U,b=new U,P=new U,R=new U;function T(O){P.fromBufferAttribute(r,O),R.copy(P);let M=a[O];E.copy(M),E.sub(P.multiplyScalar(P.dot(M))).normalize(),b.crossVectors(R,M);let D=b.dot(c[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,D)}for(let O=0,M=w.length;O<M;++O){let x=w[O],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new en(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ix=new Rt,Ur=new wa,Hl=new qr,rx=new U,zl=new U,Gl=new U,Wl=new U,qp=new U,jl=new U,sx=new U,$l=new U,dn=class extends pr{constructor(e=new Zn,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){jl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(qp.fromBufferAttribute(d,e),o?jl.addScaledVector(qp,u):jl.addScaledVector(qp.sub(t),u))}t.add(jl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(Hl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Hl,rx)===null||Ur.origin.distanceToSquared(rx)>(e.far-e.near)**2))&&(ix.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(ix),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=w,P=E;b<P;b+=3){let R=a.getX(b),T=a.getX(b+1),O=a.getX(b+2);r=ql(this,p,e,i,l,u,d,R,T,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);r=ql(this,o,e,i,l,u,d,w,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),E=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=w,P=E;b<P;b+=3){let R=b,T=b+1,O=b+2;r=ql(this,p,e,i,l,u,d,R,T,O),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=m,E=m+1,b=m+2;r=ql(this,o,e,i,l,u,d,w,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function XA(n,e,t,i,r,s,o,a){let c;if(e.side===rn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Pi,a),c===null)return null;$l.copy(a),$l.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo($l);return l<t.near||l>t.far?null:{distance:l,point:$l.clone(),object:n}}function ql(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,zl),n.getVertexPosition(c,Gl),n.getVertexPosition(l,Wl);let u=XA(n,e,t,i,zl,Gl,Wl,sx);if(u){let d=new U;nr.getBarycoord(sx,zl,Gl,Wl,d),r&&(u.uv=nr.getInterpolatedAttribute(r,a,c,l,d,new vt)),s&&(u.uv1=nr.getInterpolatedAttribute(s,a,c,l,d,new vt)),o&&(u.normal=nr.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};nr.getNormal(zl,Gl,Wl,f.normal),u.face=f,u.barycoord=d}return u}var ar=class n extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new oi(l,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(d,2));function g(y,m,p,w,E,b,P,R,T,O,M){let x=b/T,D=P/O,G=b/2,B=P/2,X=R/2,Y=T+1,j=O+1,J=0,H=0,se=new U;for(let de=0;de<j;de++){let xe=de*D-B;for(let We=0;We<Y;We++){let yt=We*x-G;se[y]=yt*w,se[m]=xe*E,se[p]=X,l.push(se.x,se.y,se.z),se[y]=0,se[m]=0,se[p]=R>0?1:-1,u.push(se.x,se.y,se.z),d.push(We/T),d.push(1-de/O),J+=1}}for(let de=0;de<O;de++)for(let xe=0;xe<T;xe++){let We=f+xe+Y*de,yt=f+xe+Y*(de+1),W=f+(xe+1)+Y*(de+1),ee=f+(xe+1)+Y*de;c.push(We,yt,ee),c.push(yt,W,ee),H+=6}a.addGroup(h,H,M),h+=H,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ts(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=ts(n[t]);for(let r in i)e[r]=i[r]}return e}function YA(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var iM={clone:ts,merge:tn},ZA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZA,this.fragmentShader=JA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=YA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Aa=class extends pr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=new U,ox=new vt,ax=new vt,Gt=class extends Aa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ru*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ru*2*Math.atan(Math.tan(Tp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,ox,ax),t.subVectors(ax,ox)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ao=-90,co=1,cu=class extends pr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Gt(ao,co,e,t);r.layers=this.layers,this.add(r);let s=new Gt(ao,co,e,t);s.layers=this.layers,this.add(s);let o=new Gt(ao,co,e,t);o.layers=this.layers,this.add(o);let a=new Gt(ao,co,e,t);a.layers=this.layers,this.add(a);let c=new Gt(ao,co,e,t);c.layers=this.layers,this.add(c);let l=new Gt(ao,co,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ia=class extends hr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Kr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lu=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ia(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ar(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Fi});s.uniforms.tEquirect.value=t;let o=new dn(r,s),a=t.minFilter;return t.minFilter===ur&&(t.minFilter=Yn),new cu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Hr=class extends pr{constructor(){super(),this.isGroup=!0,this.type="Group"}},KA={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KA)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Zr=class extends pr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Xp=new U,QA=new U,eI=new ke,ri=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Xp.subVectors(i,t).cross(QA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Xp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||eI.getNormalMatrix(e),r=this.coplanarPoint(Xp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Br=new qr,Xl=new U,Ra=class{constructor(e=new ri,t=new ri,i=new ri,r=new ri,s=new ri,o=new ri){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],w=r[13],E=r[14],b=r[15];if(i[0].setComponents(c-s,f-l,m-h,b-p).normalize(),i[1].setComponents(c+s,f+l,m+h,b+p).normalize(),i[2].setComponents(c+o,f+u,m+g,b+w).normalize(),i[3].setComponents(c-o,f-u,m-g,b-w).normalize(),i[4].setComponents(c-a,f-d,m-y,b-E).normalize(),t===si)i[5].setComponents(c+a,f+d,m+y,b+E).normalize();else if(t===Sa)i[5].setComponents(a,d,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ho=class extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cx=new Rt,tm=new wa,Yl=new qr,Zl=new U,Na=class extends pr{constructor(e=new Zn,t=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(r),Yl.radius+=s,e.ray.intersectsSphere(Yl)===!1)return;cx.copy(r).invert(),tm.copy(e.ray).applyMatrix4(cx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,y=h;g<y;g++){let m=l.getX(g);Zl.fromBufferAttribute(d,m),lx(Zl,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,y=h;g<y;g++)Zl.fromBufferAttribute(d,g),lx(Zl,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function lx(n,e,t,i,r,s,o){let a=tm.distanceSqToPoint(n);if(a<t){let c=new U;tm.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pa=class extends hr{constructor(e,t,i,r,s,o,a,c,l,u=zr){if(u!==zr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zr&&(i=dr),i===void 0&&u===jr&&(i=es),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Oa=class n extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*f-o;for(let E=0;E<l;E++){let b=E*d-s;g.push(b,-w,0),y.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let E=w+l*p,b=w+l*(p+1),P=w+1+l*(p+1),R=w+1+l*p;h.push(E,b,R),h.push(b,P,R)}this.setIndex(h),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(y,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var uu=class extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},du=class extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Jl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Jr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fu=class extends Jr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zp,endingEnd:Zp}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jp:s=e,a=2*t-i;break;case Kp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Jp:o=e,c=2*i-t;break;case Kp:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,E=(-1-h)*m+(1.5+h)*y+.5*g,b=h*m-h*y;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+w*o[l+P]+E*o[c+P]+b*o[d+P];return s}},hu=class extends Jr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},pu=class extends Jr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jl(t,this.TimeBufferType),this.values=Jl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jl(e.times,Array),values:Jl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case iu:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return iu;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&tI(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Kl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=iu;var cr=class extends On{constructor(e,t,i){super(e,t,i)}};cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=xa;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var mu=class extends On{};mu.prototype.ValueTypeName="color";var gu=class extends On{};gu.prototype.ValueTypeName="number";var vu=class extends Jr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Li.slerpFlat(s,0,o,l-a,o,l,c);return s}},La=class extends On{InterpolantFactoryMethodLinear(e){return new vu(this.times,this.values,this.getValueSize(),e)}};La.prototype.ValueTypeName="quaternion";La.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends On{constructor(e,t,i){super(e,t,i)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=xa;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends On{};yu.prototype.ValueTypeName="vector";var _u=class extends Aa{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var xu=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Sm="\\[\\]\\.:\\/",nI=new RegExp("["+Sm+"]","g"),bm="[^"+Sm+"]",iI="[^"+Sm.replace("\\.","")+"]",rI=/((?:WC+[\/:])*)/.source.replace("WC",bm),sI=/(WCOD+)?/.source.replace("WCOD",iI),oI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bm),aI=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bm),cI=new RegExp("^"+rI+sI+oI+aI+"$"),lI=["material","materials","bones","map"],nm=class{constructor(e,t,i){let r=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nI,"")}static parseTrackName(t){let i=cI.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);lI.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=nm,n})();Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D3=new Float32Array(1);function Em(n,e,t,i){let r=uI(i);switch(t){case dm:return n*e;case hm:return n*e;case pm:return n*e*2;case mm:return n*e/r.components*r.byteLength;case Lu:return n*e/r.components*r.byteLength;case gm:return n*e*2/r.components*r.byteLength;case Fu:return n*e*2/r.components*r.byteLength;case fm:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case ku:return n*e*4/r.components*r.byteLength;case Ba:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ha:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bu:case Hu:return Math.max(n,16)*Math.max(e,8)/4;case Uu:case Vu:return Math.max(n,8)*Math.max(e,8)/2;case zu:case Gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $u:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ga:case sd:case od:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vm:case ad:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cd:case ld:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uI(n){switch(n){case ui:case cm:return{byteLength:1,components:1};case po:case lm:case mo:return{byteLength:2,components:1};case Pu:case Ou:return{byteLength:2,components:4};case dr:case Nu:case di:return{byteLength:4,components:1};case um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);function TM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dI(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hI=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_I=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xI=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,MI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EI=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wI=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CI=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TI=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,DI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,II=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LI=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FI=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kI=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zI="gl_FragColor = linearToOutputTexel( gl_FragColor );",GI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$I=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XI=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QI=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_R=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ER=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,DR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$R=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:fI,alphahash_pars_fragment:hI,alphamap_fragment:pI,alphamap_pars_fragment:mI,alphatest_fragment:gI,alphatest_pars_fragment:vI,aomap_fragment:yI,aomap_pars_fragment:_I,batching_pars_vertex:xI,batching_vertex:MI,begin_vertex:SI,beginnormal_vertex:bI,bsdfs:EI,iridescence_fragment:wI,bumpmap_pars_fragment:CI,clipping_planes_fragment:TI,clipping_planes_pars_fragment:DI,clipping_planes_pars_vertex:AI,clipping_planes_vertex:II,color_fragment:RI,color_pars_fragment:NI,color_pars_vertex:PI,color_vertex:OI,common:LI,cube_uv_reflection_fragment:FI,defaultnormal_vertex:kI,displacementmap_pars_vertex:UI,displacementmap_vertex:BI,emissivemap_fragment:VI,emissivemap_pars_fragment:HI,colorspace_fragment:zI,colorspace_pars_fragment:GI,envmap_fragment:WI,envmap_common_pars_fragment:jI,envmap_pars_fragment:$I,envmap_pars_vertex:qI,envmap_physical_pars_fragment:rR,envmap_vertex:XI,fog_vertex:YI,fog_pars_vertex:ZI,fog_fragment:JI,fog_pars_fragment:KI,gradientmap_pars_fragment:QI,lightmap_pars_fragment:eR,lights_lambert_fragment:tR,lights_lambert_pars_fragment:nR,lights_pars_begin:iR,lights_toon_fragment:sR,lights_toon_pars_fragment:oR,lights_phong_fragment:aR,lights_phong_pars_fragment:cR,lights_physical_fragment:lR,lights_physical_pars_fragment:uR,lights_fragment_begin:dR,lights_fragment_maps:fR,lights_fragment_end:hR,logdepthbuf_fragment:pR,logdepthbuf_pars_fragment:mR,logdepthbuf_pars_vertex:gR,logdepthbuf_vertex:vR,map_fragment:yR,map_pars_fragment:_R,map_particle_fragment:xR,map_particle_pars_fragment:MR,metalnessmap_fragment:SR,metalnessmap_pars_fragment:bR,morphinstance_vertex:ER,morphcolor_vertex:wR,morphnormal_vertex:CR,morphtarget_pars_vertex:TR,morphtarget_vertex:DR,normal_fragment_begin:AR,normal_fragment_maps:IR,normal_pars_fragment:RR,normal_pars_vertex:NR,normal_vertex:PR,normalmap_pars_fragment:OR,clearcoat_normal_fragment_begin:LR,clearcoat_normal_fragment_maps:FR,clearcoat_pars_fragment:kR,iridescence_pars_fragment:UR,opaque_fragment:BR,packing:VR,premultiplied_alpha_fragment:HR,project_vertex:zR,dithering_fragment:GR,dithering_pars_fragment:WR,roughnessmap_fragment:jR,roughnessmap_pars_fragment:$R,shadowmap_pars_fragment:qR,shadowmap_pars_vertex:XR,shadowmap_vertex:YR,shadowmask_pars_fragment:ZR,skinbase_vertex:JR,skinning_pars_vertex:KR,skinning_vertex:QR,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:o1,uv_pars_fragment:a1,uv_pars_vertex:c1,uv_vertex:l1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:v1,depth_frag:y1,distanceRGBA_vert:_1,distanceRGBA_frag:x1,equirect_vert:M1,equirect_frag:S1,linedashed_vert:b1,linedashed_frag:E1,meshbasic_vert:w1,meshbasic_frag:C1,meshlambert_vert:T1,meshlambert_frag:D1,meshmatcap_vert:A1,meshmatcap_frag:I1,meshnormal_vert:R1,meshnormal_frag:N1,meshphong_vert:P1,meshphong_frag:O1,meshphysical_vert:L1,meshphysical_frag:F1,meshtoon_vert:k1,meshtoon_frag:U1,points_vert:B1,points_frag:V1,shadow_vert:H1,shadow_frag:z1,sprite_vert:G1,sprite_frag:W1},te={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},fi={basic:{uniforms:tn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:tn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:tn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:tn([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:tn([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:tn([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:tn([te.points,te.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:tn([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:tn([te.common,te.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:tn([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:tn([te.sprite,te.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:tn([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:tn([te.lights,te.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};fi.physical={uniforms:tn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var ud={r:0,b:0,g:0},ns=new Xr,j1=new Rt;function $1(n,e,t,i,r,s,o){let a=new et(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function y(E){let b=!1,P=g(E);P===null?p(a,c):P&&P.isColor&&(p(P,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,b){let P=g(b);P&&(P.isCubeTexture||P.mapping===ka)?(u===void 0&&(u=new dn(new ar(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ts(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ns.copy(b.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(ns)),u.material.toneMapped=st.getTransfer(P.colorSpace)!==mt,(d!==P||f!==P.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,h=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new dn(new Oa(2,2),new Jn({name:"BackgroundMaterial",uniforms:ts(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(P.colorSpace)!==mt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,f=P.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,b){E.getRGB(ud,Mm(n)),i.buffers.color.setClear(ud.r,ud.g,ud.b,b,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:y,addToRenderList:m,dispose:w}}function q1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,D,G,B,X){let Y=!1,j=d(B,G,D);s!==j&&(s=j,l(s.object)),Y=h(x,B,G,X),Y&&g(x,B,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,b(x,D,G,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,G){let B=G.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[D.id];Y===void 0&&(Y={},X[D.id]=Y);let j=Y[B];return j===void 0&&(j=f(c()),Y[B]=j),j}function f(x){let D=[],G=[],B=[];for(let X=0;X<t;X++)D[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,D,G,B){let X=s.attributes,Y=D.attributes,j=0,J=G.getAttributes();for(let H in J)if(J[H].location>=0){let de=X[H],xe=Y[H];if(xe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(x,D,G,B){let X={},Y=D.attributes,j=0,J=G.getAttributes();for(let H in J)if(J[H].location>=0){let de=Y[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),X[H]=xe,j++}s.attributes=X,s.attributesNum=j,s.index=B}function y(){let x=s.newAttributes;for(let D=0,G=x.length;D<G;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==D&&(n.vertexAttribDivisor(x,D),X[x]=D)}function w(){let x=s.newAttributes,D=s.enabledAttributes;for(let G=0,B=D.length;G<B;G++)D[G]!==x[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function E(x,D,G,B,X,Y,j){j===!0?n.vertexAttribIPointer(x,D,G,X,Y):n.vertexAttribPointer(x,D,G,B,X,Y)}function b(x,D,G,B){y();let X=B.attributes,Y=G.getAttributes(),j=D.defaultAttributeValues;for(let J in Y){let H=Y[J];if(H.location>=0){let se=X[J];if(se===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let de=se.normalized,xe=se.itemSize,We=e.get(se);if(We===void 0)continue;let yt=We.buffer,W=We.type,ee=We.bytesPerElement,ge=W===n.INT||W===n.UNSIGNED_INT||se.gpuType===Nu;if(se.isInterleavedBufferAttribute){let oe=se.data,we=oe.stride,ct=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<H.locationSize;Ae++)p(H.location+Ae,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ae=0;Ae<H.locationSize;Ae++)m(H.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let Ae=0;Ae<H.locationSize;Ae++)E(H.location+Ae,xe/H.locationSize,W,de,we*ee,(ct+xe/H.locationSize*Ae)*ee,ge)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let oe=0;oe<H.locationSize;oe++)E(H.location+oe,xe/H.locationSize,W,de,xe*ee,xe/H.locationSize*oe*ee,ge)}}else if(j!==void 0){let de=j[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}w()}function P(){O();for(let x in i){let D=i[x];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;let D=i[x.id];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x.id]}function T(x){for(let D in i){let G=i[D];if(G[x.id]===void 0)continue;let B=G[x.id];for(let X in B)u(B[X].object),delete B[X];delete G[x.id]}}function O(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function X1(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Y1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Ln&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let O=T===mo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ui&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==di&&!O)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:P,maxSamples:R}}function Z1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new ri,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let w=s?0:i,E=w*4,b=p.clippingState||null;c.value=b,b=u(g,f,E,h);for(let P=0;P!==E;++P)b[P]=t[P];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=h;E!==y;++E,b+=4)o.copy(d[E]).applyMatrix4(w,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function J1(n){let e=new WeakMap;function t(o,a){return a===Au?o.mapping=Kr:a===Iu&&(o.mapping=Qr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Au||a===Iu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new lu(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var vo=4,rM=[.125,.215,.35,.446,.526,.582],ss=20,wm=new _u,sM=new et,Cm=null,Tm=0,Dm=0,Am=!1,rs=(1+Math.sqrt(5))/2,go=1/rs,oM=[new U(-rs,go,0),new U(rs,go,0),new U(-go,0,rs),new U(go,0,rs),new U(0,rs,-go),new U(0,rs,go),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],K1=new U,hd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=K1}=s;Cm=this._renderer.getRenderTarget(),Tm=this._renderer.getActiveCubeFace(),Dm=this._renderer.getActiveMipmapLevel(),Am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cm,Tm,Dm),this._renderer.xr.enabled=Am,e.scissorTest=!1,dd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Kr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cm=this._renderer.getRenderTarget(),Tm=this._renderer.getActiveCubeFace(),Dm=this._renderer.getActiveMipmapLevel(),Am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:mo,format:Ln,colorSpace:$r,depthBuffer:!1},r=aM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q1(s)),this._blurMaterial=eN(s,e,t)}return r}_compileMaterial(e){let t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,wm)}_sceneToCubeUV(e,t,i,r,s){let c=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(sM),d.toneMapping=ki,d.autoClear=!1;let g=new Yr({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),y=new dn(new ar,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(sM),m=!0);for(let w=0;w<6;w++){let E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));let b=this._cubeSize;dd(r,E*b,w>2?b:0,b,b),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Kr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;dd(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,wm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=oM[(r-s-1)%oM.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new dn(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ss-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):ss;m>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],w=0;for(let T=0;T<ss;++T){let O=T/y,M=Math.exp(-O*O/2);p.push(M),T===0?w+=M:T<m&&(w+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let b=this._sizeLods[r],P=3*b*(r>E-vo?r-E+vo:0),R=4*(this._cubeSize-b);dd(t,P,R,3*b,2*b),c.setRenderTarget(t),c.render(d,wm)}};function Q1(n){let e=[],t=[],i=[],r=n,s=n-vo+1+rM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-vo?c=rM[o-n+vo-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*h),E=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let R=0;R<h;R++){let T=R%3*2/3-1,O=R>2?0:-1,M=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];w.set(M,y*g*R),E.set(f,m*g*R);let x=[R,R,R,R,R,R];b.set(x,p*g*R)}let P=new Zn;P.setAttribute("position",new en(w,y)),P.setAttribute("uv",new en(E,m)),P.setAttribute("faceIndex",new en(b,p)),e.push(P),r>vo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function aM(n,e,t){let i=new ai(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function eN(n,e,t){let i=new Float32Array(ss),r=new U(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function cM(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function lM(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Bm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Au||c===Iu,u=c===Kr||c===Qr;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new hd(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new hd(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iN(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let w=h.array;y=h.version;for(let E=0,b=w.length;E<b;E+=3){let P=w[E+0],R=w[E+1],T=w[E+2];f.push(P,R,R,T,T,P)}}else if(g!==void 0){let w=g.array;y=g.version;for(let E=0,b=w.length/3-1;E<b;E+=3){let P=E+0,R=E+1,T=E+2;f.push(P,R,R,T,T,P)}}else return;let m=new(xm(f)?Da:Ta)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function rN(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*y[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oN(n,e,t){let i=new WeakMap,r=new At;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;g===!0&&(b=1),y===!0&&(b=2),m===!0&&(b=3);let P=a.attributes.position.count*b,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let T=new Float32Array(P*R*4*d),O=new Ea(T,P,R,d);O.type=di,O.needsUpdate=!0;let M=b*4;for(let D=0;D<d;D++){let G=p[D],B=w[D],X=E[D],Y=P*R*4*D;for(let j=0;j<G.count;j++){let J=j*M;g===!0&&(r.fromBufferAttribute(G,j),T[Y+J+0]=r.x,T[Y+J+1]=r.y,T[Y+J+2]=r.z,T[Y+J+3]=0),y===!0&&(r.fromBufferAttribute(B,j),T[Y+J+4]=r.x,T[Y+J+5]=r.y,T[Y+J+6]=r.z,T[Y+J+7]=0),m===!0&&(r.fromBufferAttribute(X,j),T[Y+J+8]=r.x,T[Y+J+9]=r.y,T[Y+J+10]=r.z,T[Y+J+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new vt(P,R)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function aN(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var DM=new hr,uM=new Pa(1,1),AM=new Ea,IM=new au,RM=new Ia,dM=[],fM=[],hM=new Float32Array(16),pM=new Float32Array(9),mM=new Float32Array(4);function xo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=dM[r];if(s===void 0&&(s=new Float32Array(r),dM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pd(n,e){let t=fM[e];t===void 0&&(t=new Int32Array(e),fM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function uN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function dN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function fN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;mM.set(i),n.uniformMatrix2fv(this.addr,!1,mM),Bt(t,i)}}function hN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;pM.set(i),n.uniformMatrix3fv(this.addr,!1,pM),Bt(t,i)}}function pN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;hM.set(i),n.uniformMatrix4fv(this.addr,!1,hM),Bt(t,i)}}function mN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function vN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function yN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function _N(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function MN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function SN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function bN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uM.compareFunction=ym,s=uM):s=DM,t.setTexture2D(e||s,r)}function EN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||IM,r)}function wN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||RM,r)}function CN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||AM,r)}function TN(n){switch(n){case 5126:return cN;case 35664:return lN;case 35665:return uN;case 35666:return dN;case 35674:return fN;case 35675:return hN;case 35676:return pN;case 5124:case 35670:return mN;case 35667:case 35671:return gN;case 35668:case 35672:return vN;case 35669:case 35673:return yN;case 5125:return _N;case 36294:return xN;case 36295:return MN;case 36296:return SN;case 35678:case 36198:case 36298:case 36306:case 35682:return bN;case 35679:case 36299:case 36307:return EN;case 35680:case 36300:case 36308:case 36293:return wN;case 36289:case 36303:case 36311:case 36292:return CN}}function DN(n,e){n.uniform1fv(this.addr,e)}function AN(n,e){let t=xo(e,this.size,2);n.uniform2fv(this.addr,t)}function IN(n,e){let t=xo(e,this.size,3);n.uniform3fv(this.addr,t)}function RN(n,e){let t=xo(e,this.size,4);n.uniform4fv(this.addr,t)}function NN(n,e){let t=xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function PN(n,e){let t=xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ON(n,e){let t=xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function LN(n,e){n.uniform1iv(this.addr,e)}function FN(n,e){n.uniform2iv(this.addr,e)}function kN(n,e){n.uniform3iv(this.addr,e)}function UN(n,e){n.uniform4iv(this.addr,e)}function BN(n,e){n.uniform1uiv(this.addr,e)}function VN(n,e){n.uniform2uiv(this.addr,e)}function HN(n,e){n.uniform3uiv(this.addr,e)}function zN(n,e){n.uniform4uiv(this.addr,e)}function GN(n,e,t){let i=this.cache,r=e.length,s=pd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||DM,s[o])}function WN(n,e,t){let i=this.cache,r=e.length,s=pd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||IM,s[o])}function jN(n,e,t){let i=this.cache,r=e.length,s=pd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||RM,s[o])}function $N(n,e,t){let i=this.cache,r=e.length,s=pd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||AM,s[o])}function qN(n){switch(n){case 5126:return DN;case 35664:return AN;case 35665:return IN;case 35666:return RN;case 35674:return NN;case 35675:return PN;case 35676:return ON;case 5124:case 35670:return LN;case 35667:case 35671:return FN;case 35668:case 35672:return kN;case 35669:case 35673:return UN;case 5125:return BN;case 36294:return VN;case 36295:return HN;case 36296:return zN;case 35678:case 36198:case 36298:case 36306:case 35682:return GN;case 35679:case 36299:case 36307:return WN;case 35680:case 36300:case 36308:case 36293:return jN;case 36289:case 36303:case 36311:case 36292:return $N}}var Rm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TN(t.type)}},Nm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qN(t.type)}},Pm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Im=/(\w+)(\])?(\[|\.)?/g;function gM(n,e){n.seq.push(e),n.map[e.id]=e}function XN(n,e,t){let i=n.name,r=i.length;for(Im.lastIndex=0;;){let s=Im.exec(i),o=Im.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){gM(t,l===void 0?new Rm(a,n,e):new Nm(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Pm(a),gM(t,d)),t=d}}}var yo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);XN(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function vM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var YN=37297,ZN=0;function JN(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var yM=new ke;function KN(n){st._getMatrix(yM,st.workingColorSpace,n);let e=`mat3( ${yM.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Ma:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _M(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+JN(n.getShaderSource(e),o)}else return r}function QN(n,e){let t=KN(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function eP(n,e){let t;switch(e){case Px:t="Linear";break;case Ox:t="Reinhard";break;case Lx:t="Cineon";break;case Fx:t="ACESFilmic";break;case Ux:t="AgX";break;case Bx:t="Neutral";break;case kx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fd=new U;function tP(){st.getLuminanceCoefficients(fd);let n=fd.x.toFixed(4),e=fd.y.toFixed(4),t=fd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function iP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ja(n){return n!==""}function xM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function MM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Om(n){return n.replace(sP,aP)}var oP=new Map;function aP(n,e){let t=ze[e];if(t===void 0){let i=oP.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Om(t)}var cP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SM(n){return n.replace(cP,lP)}function lP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function uP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function dP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Kr:case Qr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qr:e="ENVMAP_MODE_REFRACTION";break}return e}function hP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case am:e="ENVMAP_BLENDING_MULTIPLY";break;case Rx:e="ENVMAP_BLENDING_MIX";break;case Nx:e="ENVMAP_BLENDING_ADD";break}return e}function pP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=uP(t),l=dP(t),u=fP(t),d=hP(t),f=pP(t),h=nP(t),g=iP(s),y=r.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[bM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[bM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?ze.tonemapping_pars_fragment:"",t.toneMapping!==ki?eP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,QN("linearToOutputTexel",t.outputColorSpace),tP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),o=Om(o),o=xM(o,t),o=MM(o,t),a=Om(a),a=xM(a,t),a=MM(a,t),o=SM(o),a=SM(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=w+m+o,b=w+p+a,P=vM(r,r.VERTEX_SHADER,E),R=vM(r,r.FRAGMENT_SHADER,b);r.attachShader(y,P),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(D){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(R).trim(),Y=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,P,R);else{let J=_M(r,P,"vertex"),H=_M(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+J+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&(j=!1);j&&(D.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(P),r.deleteShader(R),O=new yo(r,y),M=rP(r,y)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,YN)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}var gP=0,Lm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Fm(e),t.set(e,i)),i}},Fm=class{constructor(e){this.id=gP++,this.code=e,this.usedTimes=0}};function vP(n,e,t,i,r,s,o){let a=new Ca,c=new Lm,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,G,B){let X=G.fog,Y=B.geometry,j=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),H=J&&J.mapping===ka?J.image.height:null,se=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=de!==void 0?de.length:0,We=0;Y.morphAttributes.position!==void 0&&(We=1),Y.morphAttributes.normal!==void 0&&(We=2),Y.morphAttributes.color!==void 0&&(We=3);let yt,W,ee,ge;if(se){let ht=fi[se];yt=ht.vertexShader,W=ht.fragmentShader}else yt=M.vertexShader,W=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),ge=c.getFragmentShaderID(M);let oe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),ct=B.isInstancedMesh===!0,Ae=B.isBatchedMesh===!0,It=!!M.map,wt=!!M.matcap,Xe=!!J,C=!!M.aoMap,Sn=!!M.lightMap,Ye=!!M.bumpMap,Ze=!!M.normalMap,Me=!!M.displacementMap,St=!!M.emissiveMap,_e=!!M.metalnessMap,S=!!M.roughnessMap,v=M.anisotropy>0,L=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,z=M.sheen>0,ye=M.transmission>0,ae=v&&!!M.anisotropyMap,fe=L&&!!M.clearcoatMap,tt=L&&!!M.clearcoatNormalMap,Q=L&&!!M.clearcoatRoughnessMap,he=Z&&!!M.iridescenceMap,Te=Z&&!!M.iridescenceThicknessMap,Ie=z&&!!M.sheenColorMap,pe=z&&!!M.sheenRoughnessMap,Je=!!M.specularMap,He=!!M.specularColorMap,xt=!!M.specularIntensityMap,A=ye&&!!M.transmissionMap,ne=ye&&!!M.thicknessMap,V=!!M.gradientMap,q=!!M.alphaMap,le=M.alphaTest>0,ce=!!M.alphaHash,Ue=!!M.extensions,Ct=ki;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ct=n.toneMapping);let Zt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:W,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&B._colorsTexture!==null,instancing:ct,instancingColor:ct&&B.instanceColor!==null,instancingMorph:ct&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:$r,alphaToCoverage:!!M.alphaToCoverage,map:It,matcap:wt,envMap:Xe,envMapMode:Xe&&J.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Sn,bumpMap:Ye,normalMap:Ze,displacementMap:f&&Me,emissiveMap:St,normalMapObjectSpace:Ze&&M.normalMapType===Wx,normalMapTangentSpace:Ze&&M.normalMapType===Gx,metalnessMap:_e,roughnessMap:S,anisotropy:v,anisotropyMap:ae,clearcoat:L,clearcoatMap:fe,clearcoatNormalMap:tt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Te,sheen:z,sheenColorMap:Ie,sheenRoughnessMap:pe,specularMap:Je,specularColorMap:He,specularIntensityMap:xt,transmission:ye,transmissionMap:A,thicknessMap:ne,gradientMap:V,opaque:M.transparent===!1&&M.blending===Gr&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:ce,combine:M.combine,mapUv:It&&y(M.map.channel),aoMapUv:C&&y(M.aoMap.channel),lightMapUv:Sn&&y(M.lightMap.channel),bumpMapUv:Ye&&y(M.bumpMap.channel),normalMapUv:Ze&&y(M.normalMap.channel),displacementMapUv:Me&&y(M.displacementMap.channel),emissiveMapUv:St&&y(M.emissiveMap.channel),metalnessMapUv:_e&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:ae&&y(M.anisotropyMap.channel),clearcoatMapUv:fe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(M.sheenRoughnessMap.channel),specularMapUv:Je&&y(M.specularMap.channel),specularColorMapUv:He&&y(M.specularColorMap.channel),specularIntensityMapUv:xt&&y(M.specularIntensityMap.channel),transmissionMapUv:A&&y(M.transmissionMap.channel),thicknessMapUv:ne&&y(M.thicknessMap.channel),alphaMapUv:q&&y(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ze||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(It||q),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:We,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,decodeVideoTexture:It&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:St&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===li,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(w(x,M),E(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){let x=g[M.type],D;if(x){let G=fi[x];D=iM.clone(G.uniforms)}else D=M.uniforms;return D}function P(M,x){let D;for(let G=0,B=u.length;G<B;G++){let X=u[G];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new mP(n,x,M,s),u.push(D)),D}function R(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function T(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:P,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:O}}function yP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function _P(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function EM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||_P),i.length>1&&i.sort(f||EM),r.length>1&&r.sort(f||EM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function xP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new wM,n.set(i,[o])):r>=s.length?(o=new wM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function MP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new et};break;case"SpotLight":t={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function SP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var bP=0;function EP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wP(n){let e=new MP,t=SP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let r=new U,s=new Rt,o=new Rt;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,w=0,E=0,b=0,P=0,R=0,T=0;l.sort(EP);for(let M=0,x=l.length;M<x;M++){let D=l[M],G=D.color,B=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*B,d+=G.g*B,f+=G.b*B;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],B);T++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=D.shadow.matrix,w++}i.directional[h]=j,h++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(B),j.distance=X,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[y]=j;let J=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,J.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[y]=J.matrix,D.castShadow){let H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=Y,b++}y++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(G).multiplyScalar(B),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let J=D.shadow,H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=j,g++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(B),j.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==w||O.numPointShadows!==E||O.numSpotShadows!==b||O.numSpotMaps!==P||O.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,O.directionalLength=h,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=w,O.numPointShadows=E,O.numSpotShadows=b,O.numSpotMaps=P,O.numLightProbes=T,i.version=bP++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let E=l[p];if(E.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(E.isSpotLight){let b=i.spot[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(E.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let b=i.hemi[y];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function CM(n){let e=new wP(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function CP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new CM(n),e.set(r,[a])):s>=o.length?(a=new CM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var TP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AP(n,e,t){let i=new Ra,r=new vt,s=new vt,o=new At,a=new uu({depthPacking:zx}),c=new du,l={},u=t.maxTextureSize,d={[Pi]:rn,[rn]:Pi,[li]:li},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:TP,fragmentShader:DP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Zn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rm;let p=this.type;this.render=function(R,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Fi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==ci&&this.type===ci,X=p===ci&&this.type!==ci;for(let Y=0,j=R.length;Y<j;Y++){let J=R[Y],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){let xe=this.type!==ci?{minFilter:Pn,magFilter:Pn}:{};H.map!==null&&H.map.dispose(),H.map=new ai(r.x,r.y,xe),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let de=H.getViewportCount();for(let xe=0;xe<de;xe++){let We=H.getViewport(xe);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),G.viewport(o),H.updateMatrices(J,xe),i=H.getFrustum(),b(T,O,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===ci&&w(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,x,D)};function w(R,T){let O=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ai(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,O,f,y,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,O,h,y,null)}function E(R,T,O,M){let x=null,D=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)x=D;else if(x=O.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=x.uuid,B=T.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,T.addEventListener("dispose",P)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,M===ci?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=O}return x}function b(R,T,O,M,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ci)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let B=e.update(R),X=R.material;if(Array.isArray(X)){let Y=B.groups;for(let j=0,J=Y.length;j<J;j++){let H=Y[j],se=X[H.materialIndex];if(se&&se.visible){let de=E(R,se,M,x);R.onBeforeShadow(n,R,T,O,B,de,H),n.renderBufferDirect(O,null,B,de,R,H),R.onAfterShadow(n,R,T,O,B,de,H)}}}else if(X.visible){let Y=E(R,X,M,x);R.onBeforeShadow(n,R,T,O,B,Y,null),n.renderBufferDirect(O,null,B,Y,R,null),R.onAfterShadow(n,R,T,O,B,Y,null)}}let G=R.children;for(let B=0,X=G.length;B<X;B++)b(G[B],T,O,M,x)}function P(R){R.target.removeEventListener("dispose",P);for(let O in l){let M=l[O],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var IP={[Su]:bu,[Eu]:Tu,[wu]:Du,[Wr]:Cu,[bu]:Su,[Tu]:Eu,[Du]:wu,[Cu]:Wr};function RP(n,e){function t(){let A=!1,ne=new At,V=null,q=new At(0,0,0,0);return{setMask:function(le){V!==le&&!A&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){A=le},setClear:function(le,ce,Ue,Ct,Zt){Zt===!0&&(le*=Ct,ce*=Ct,Ue*=Ct),ne.set(le,ce,Ue,Ct),q.equals(ne)===!1&&(n.clearColor(le,ce,Ue,Ct),q.copy(ne))},reset:function(){A=!1,V=null,q.set(-1,0,0,0)}}}function i(){let A=!1,ne=!1,V=null,q=null,le=null;return{setReversed:function(ce){if(ne!==ce){let Ue=e.get("EXT_clip_control");ne?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);let Ct=le;le=null,this.setClear(Ct)}ne=ce},getReversed:function(){return ne},setTest:function(ce){ce?oe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!A&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(ne&&(ce=IP[ce]),q!==ce){switch(ce){case Su:n.depthFunc(n.NEVER);break;case bu:n.depthFunc(n.ALWAYS);break;case Eu:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case wu:n.depthFunc(n.EQUAL);break;case Cu:n.depthFunc(n.GEQUAL);break;case Tu:n.depthFunc(n.GREATER);break;case Du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){A=ce},setClear:function(ce){le!==ce&&(ne&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){A=!1,V=null,q=null,le=null,ne=!1}}}function r(){let A=!1,ne=null,V=null,q=null,le=null,ce=null,Ue=null,Ct=null,Zt=null;return{setTest:function(ht){A||(ht?oe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ht){ne!==ht&&!A&&(n.stencilMask(ht),ne=ht)},setFunc:function(ht,Fn,hi){(V!==ht||q!==Fn||le!==hi)&&(n.stencilFunc(ht,Fn,hi),V=ht,q=Fn,le=hi)},setOp:function(ht,Fn,hi){(ce!==ht||Ue!==Fn||Ct!==hi)&&(n.stencilOp(ht,Fn,hi),ce=ht,Ue=Fn,Ct=hi)},setLocked:function(ht){A=ht},setClear:function(ht){Zt!==ht&&(n.clearStencil(ht),Zt=ht)},reset:function(){A=!1,ne=null,V=null,q=null,le=null,ce=null,Ue=null,Ct=null,Zt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,E=null,b=null,P=null,R=null,T=new et(0,0,0),O=0,M=!1,x=null,D=null,G=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,J=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=J>=2);let se=null,de={},xe=n.getParameter(n.SCISSOR_BOX),We=n.getParameter(n.VIEWPORT),yt=new At().fromArray(xe),W=new At().fromArray(We);function ee(A,ne,V,q){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(A,ce),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<V;Ue++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ne+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ge={};ge[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Wr),Ye(!1),Ze(im),oe(n.CULL_FACE),C(Fi);function oe(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function we(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function ct(A,ne){return d[A]!==ne?(n.bindFramebuffer(A,ne),d[A]=ne,A===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),A===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ae(A,ne){let V=h,q=!1;if(A){V=f.get(ne),V===void 0&&(V=[],f.set(ne,V));let le=A.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ue=le.length;ce<Ue;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=le.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function It(A){return g!==A?(n.useProgram(A),g=A,!0):!1}let wt={[rr]:n.FUNC_ADD,[px]:n.FUNC_SUBTRACT,[mx]:n.FUNC_REVERSE_SUBTRACT};wt[gx]=n.MIN,wt[vx]=n.MAX;let Xe={[yx]:n.ZERO,[_x]:n.ONE,[xx]:n.SRC_COLOR,[Ql]:n.SRC_ALPHA,[Cx]:n.SRC_ALPHA_SATURATE,[Ex]:n.DST_COLOR,[Sx]:n.DST_ALPHA,[Mx]:n.ONE_MINUS_SRC_COLOR,[eu]:n.ONE_MINUS_SRC_ALPHA,[wx]:n.ONE_MINUS_DST_COLOR,[bx]:n.ONE_MINUS_DST_ALPHA,[Tx]:n.CONSTANT_COLOR,[Dx]:n.ONE_MINUS_CONSTANT_COLOR,[Ax]:n.CONSTANT_ALPHA,[Ix]:n.ONE_MINUS_CONSTANT_ALPHA};function C(A,ne,V,q,le,ce,Ue,Ct,Zt,ht){if(A===Fi){y===!0&&(we(n.BLEND),y=!1);return}if(y===!1&&(oe(n.BLEND),y=!0),A!==hx){if(A!==m||ht!==M){if((p!==rr||b!==rr)&&(n.blendEquation(n.FUNC_ADD),p=rr,b=rr),ht)switch(A){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.ONE,n.ONE);break;case sm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case om:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case om:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,E=null,P=null,R=null,T.set(0,0,0),O=0,m=A,M=ht}return}le=le||ne,ce=ce||V,Ue=Ue||q,(ne!==p||le!==b)&&(n.blendEquationSeparate(wt[ne],wt[le]),p=ne,b=le),(V!==w||q!==E||ce!==P||Ue!==R)&&(n.blendFuncSeparate(Xe[V],Xe[q],Xe[ce],Xe[Ue]),w=V,E=q,P=ce,R=Ue),(Ct.equals(T)===!1||Zt!==O)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Zt),T.copy(Ct),O=Zt),m=A,M=!1}function Sn(A,ne){A.side===li?we(n.CULL_FACE):oe(n.CULL_FACE);let V=A.side===rn;ne&&(V=!V),Ye(V),A.blending===Gr&&A.transparent===!1?C(Fi):C(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);let q=A.stencilWrite;a.setTest(q),q&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),St(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(A){x!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),x=A)}function Ze(A){A!==ux?(oe(n.CULL_FACE),A!==D&&(A===im?n.cullFace(n.BACK):A===dx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),D=A}function Me(A){A!==G&&(j&&n.lineWidth(A),G=A)}function St(A,ne,V){A?(oe(n.POLYGON_OFFSET_FILL),(B!==ne||X!==V)&&(n.polygonOffset(ne,V),B=ne,X=V)):we(n.POLYGON_OFFSET_FILL)}function _e(A){A?oe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function S(A){A===void 0&&(A=n.TEXTURE0+Y-1),se!==A&&(n.activeTexture(A),se=A)}function v(A,ne,V){V===void 0&&(se===null?V=n.TEXTURE0+Y-1:V=se);let q=de[V];q===void 0&&(q={type:void 0,texture:void 0},de[V]=q),(q.type!==A||q.texture!==ne)&&(se!==V&&(n.activeTexture(V),se=V),n.bindTexture(A,ne||ge[A]),q.type=A,q.texture=ne)}function L(){let A=de[se];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function z(){try{n.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function tt(){try{n.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{n.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Te(){try{n.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ie(A){yt.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),yt.copy(A))}function pe(A){W.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),W.copy(A))}function Je(A,ne){let V=l.get(ne);V===void 0&&(V=new WeakMap,l.set(ne,V));let q=V.get(A);q===void 0&&(q=n.getUniformBlockIndex(ne,A.name),V.set(A,q))}function He(A,ne){let q=l.get(ne).get(A);c.get(ne)!==q&&(n.uniformBlockBinding(ne,q,A.__bindingPointIndex),c.set(ne,q))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,de={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,E=null,b=null,P=null,R=null,T=new et(0,0,0),O=0,M=!1,x=null,D=null,G=null,B=null,X=null,yt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:we,bindFramebuffer:ct,drawBuffers:Ae,useProgram:It,setBlending:C,setMaterial:Sn,setFlipSided:Ye,setCullFace:Ze,setLineWidth:Me,setPolygonOffset:St,setScissorTest:_e,activeTexture:S,bindTexture:v,unbindTexture:L,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:he,texImage3D:Te,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:tt,texStorage3D:Q,texSubImage2D:z,texSubImage3D:ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Ie,viewport:pe,reset:xt}}function NP(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return h?new OffscreenCanvas(S,v):ba("canvas")}function y(S,v,L){let $=1,Z=_e(S);if((Z.width>L||Z.height>L)&&($=L/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let z=Math.floor($*Z.width),ye=Math.floor($*Z.height);d===void 0&&(d=g(z,ye));let ae=v?g(z,ye):d;return ae.width=z,ae.height=ye,ae.getContext("2d").drawImage(S,0,0,z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ye+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(S,v,L,$,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=v;if(v===n.RED&&(L===n.FLOAT&&(z=n.R32F),L===n.HALF_FLOAT&&(z=n.R16F),L===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.R8UI),L===n.UNSIGNED_SHORT&&(z=n.R16UI),L===n.UNSIGNED_INT&&(z=n.R32UI),L===n.BYTE&&(z=n.R8I),L===n.SHORT&&(z=n.R16I),L===n.INT&&(z=n.R32I)),v===n.RG&&(L===n.FLOAT&&(z=n.RG32F),L===n.HALF_FLOAT&&(z=n.RG16F),L===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RG8UI),L===n.UNSIGNED_SHORT&&(z=n.RG16UI),L===n.UNSIGNED_INT&&(z=n.RG32UI),L===n.BYTE&&(z=n.RG8I),L===n.SHORT&&(z=n.RG16I),L===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(z=n.RGB16UI),L===n.UNSIGNED_INT&&(z=n.RGB32UI),L===n.BYTE&&(z=n.RGB8I),L===n.SHORT&&(z=n.RGB16I),L===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),L===n.UNSIGNED_INT&&(z=n.RGBA32UI),L===n.BYTE&&(z=n.RGBA8I),L===n.SHORT&&(z=n.RGBA16I),L===n.INT&&(z=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){let ye=Z?Ma:st.getTransfer($);L===n.FLOAT&&(z=n.RGBA32F),L===n.HALF_FLOAT&&(z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(z=ye===mt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(S,v){let L;return S?v===null||v===dr||v===es?L=n.DEPTH24_STENCIL8:v===di?L=n.DEPTH32F_STENCIL8:v===po&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===dr||v===es?L=n.DEPTH_COMPONENT24:v===di?L=n.DEPTH_COMPONENT32F:v===po&&(L=n.DEPTH_COMPONENT16),L}function P(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pn&&S.minFilter!==Yn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){let v=S.target;v.removeEventListener("dispose",R),O(v),v.isVideoTexture&&u.delete(v)}function T(S){let v=S.target;v.removeEventListener("dispose",T),x(v)}function O(S){let v=i.get(S);if(v.__webglInit===void 0)return;let L=S.source,$=f.get(L);if($){let Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys($).length===0&&f.delete(L)}i.remove(S)}function M(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let L=S.source,$=f.get(L);delete $[v.__cacheKey],o.memory.textures--}function x(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=S.textures;for(let $=0,Z=L.length;$<Z;$++){let z=i.get(L[$]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(L[$])}i.remove(S)}let D=0;function G(){D=0}function B(){let S=D;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),D+=1,S}function X(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Y(S,v){let L=i.get(S);if(S.isVideoTexture&&Me(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){let $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(L,S,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function j(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){W(L,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function J(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){W(L,S,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function H(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){ee(L,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let se={[tu]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[nu]:n.MIRRORED_REPEAT},de={[Pn]:n.NEAREST,[Vx]:n.NEAREST_MIPMAP_NEAREST,[Ua]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Ru]:n.LINEAR_MIPMAP_NEAREST,[ur]:n.LINEAR_MIPMAP_LINEAR},xe={[jx]:n.NEVER,[Jx]:n.ALWAYS,[$x]:n.LESS,[ym]:n.LEQUAL,[qx]:n.EQUAL,[Zx]:n.GEQUAL,[Xx]:n.GREATER,[Yx]:n.NOTEQUAL};function We(S,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yn||v.magFilter===Ru||v.magFilter===Ua||v.magFilter===ur||v.minFilter===Yn||v.minFilter===Ru||v.minFilter===Ua||v.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,se[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==Ua&&v.minFilter!==ur||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function yt(S,v){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",R));let $=v.source,Z=f.get($);Z===void 0&&(Z={},f.set($,Z));let z=X(v);if(z!==S.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[z].usedTimes++;let ye=Z[S.__cacheKey];ye!==void 0&&(Z[S.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),S.__cacheKey=z,S.__webglTexture=Z[z].texture}return L}function W(S,v,L){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let Z=yt(S,v),z=v.source;t.bindTexture($,S.__webglTexture,n.TEXTURE0+L);let ye=i.get(z);if(z.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+L);let ae=st.getPrimaries(st.workingColorSpace),fe=v.colorSpace===Ui?null:st.getPrimaries(v.colorSpace),tt=v.colorSpace===Ui||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Q=y(v.image,!1,r.maxTextureSize);Q=St(v,Q);let he=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),Ie=E(v.internalFormat,he,Te,v.colorSpace,v.isVideoTexture);We($,v);let pe,Je=v.mipmaps,He=v.isVideoTexture!==!0,xt=ye.__version===void 0||Z===!0,A=z.dataReady,ne=P(v,Q);if(v.isDepthTexture)Ie=b(v.format===jr,v.type),xt&&(He?t.texStorage2D(n.TEXTURE_2D,1,Ie,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,he,Te,null));else if(v.isDataTexture)if(Je.length>0){He&&xt&&t.texStorage2D(n.TEXTURE_2D,ne,Ie,Je[0].width,Je[0].height);for(let V=0,q=Je.length;V<q;V++)pe=Je[V],He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Te,pe.data):t.texImage2D(n.TEXTURE_2D,V,Ie,pe.width,pe.height,0,he,Te,pe.data);v.generateMipmaps=!1}else He?(xt&&t.texStorage2D(n.TEXTURE_2D,ne,Ie,Q.width,Q.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Te,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,Q.width,Q.height,0,he,Te,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){He&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ie,Je[0].width,Je[0].height,Q.depth);for(let V=0,q=Je.length;V<q;V++)if(pe=Je[V],v.format!==Ln)if(he!==null)if(He){if(A)if(v.layerUpdates.size>0){let le=Em(pe.width,pe.height,v.format,v.type);for(let ce of v.layerUpdates){let Ue=pe.data.subarray(ce*le/pe.data.BYTES_PER_ELEMENT,(ce+1)*le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,pe.width,pe.height,1,he,Ue)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ie,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,Te,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ie,pe.width,pe.height,Q.depth,0,he,Te,pe.data)}else{He&&xt&&t.texStorage2D(n.TEXTURE_2D,ne,Ie,Je[0].width,Je[0].height);for(let V=0,q=Je.length;V<q;V++)pe=Je[V],v.format!==Ln?he!==null?He?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ie,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Te,pe.data):t.texImage2D(n.TEXTURE_2D,V,Ie,pe.width,pe.height,0,he,Te,pe.data)}else if(v.isDataArrayTexture)if(He){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Ie,Q.width,Q.height,Q.depth),A)if(v.layerUpdates.size>0){let V=Em(Q.width,Q.height,v.format,v.type);for(let q of v.layerUpdates){let le=Q.data.subarray(q*V/Q.data.BYTES_PER_ELEMENT,(q+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,he,Te,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(v.isData3DTexture)He?(xt&&t.texStorage3D(n.TEXTURE_3D,ne,Ie,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(v.isFramebufferTexture){if(xt)if(He)t.texStorage2D(n.TEXTURE_2D,ne,Ie,Q.width,Q.height);else{let V=Q.width,q=Q.height;for(let le=0;le<ne;le++)t.texImage2D(n.TEXTURE_2D,le,Ie,V,q,0,he,Te,null),V>>=1,q>>=1}}else if(Je.length>0){if(He&&xt){let V=_e(Je[0]);t.texStorage2D(n.TEXTURE_2D,ne,Ie,V.width,V.height)}for(let V=0,q=Je.length;V<q;V++)pe=Je[V],He?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,he,Te,pe):t.texImage2D(n.TEXTURE_2D,V,Ie,he,Te,pe);v.generateMipmaps=!1}else if(He){if(xt){let V=_e(Q);t.texStorage2D(n.TEXTURE_2D,ne,Ie,V.width,V.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Te,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ie,he,Te,Q);m(v)&&p($),ye.__version=z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ee(S,v,L){if(v.image.length!==6)return;let $=yt(S,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);let z=i.get(Z);if(Z.version!==z.__version||$===!0){t.activeTexture(n.TEXTURE0+L);let ye=st.getPrimaries(st.workingColorSpace),ae=v.colorSpace===Ui?null:st.getPrimaries(v.colorSpace),fe=v.colorSpace===Ui||ye===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let tt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,he=[];for(let q=0;q<6;q++)!tt&&!Q?he[q]=y(v.image[q],!0,r.maxCubemapSize):he[q]=Q?v.image[q].image:v.image[q],he[q]=St(v,he[q]);let Te=he[0],Ie=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Je=E(v.internalFormat,Ie,pe,v.colorSpace),He=v.isVideoTexture!==!0,xt=z.__version===void 0||$===!0,A=Z.dataReady,ne=P(v,Te);We(n.TEXTURE_CUBE_MAP,v);let V;if(tt){He&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Je,Te.width,Te.height);for(let q=0;q<6;q++){V=he[q].mipmaps;for(let le=0;le<V.length;le++){let ce=V[le];v.format!==Ln?Ie!==null?He?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Je,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,Ie,pe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Je,ce.width,ce.height,0,Ie,pe,ce.data)}}}else{if(V=v.mipmaps,He&&xt){V.length>0&&ne++;let q=_e(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Je,q.width,q.height)}for(let q=0;q<6;q++)if(Q){He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,he[q].width,he[q].height,Ie,pe,he[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Je,he[q].width,he[q].height,0,Ie,pe,he[q].data);for(let le=0;le<V.length;le++){let Ue=V[le].image[q].image;He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Ue.width,Ue.height,Ie,pe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Je,Ue.width,Ue.height,0,Ie,pe,Ue.data)}}else{He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ie,pe,he[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Je,Ie,pe,he[q]);for(let le=0;le<V.length;le++){let ce=V[le];He?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,Ie,pe,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Je,Ie,pe,ce.image[q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ge(S,v,L,$,Z,z){let ye=s.convert(L.format,L.colorSpace),ae=s.convert(L.type),fe=E(L.internalFormat,ye,ae,L.colorSpace),tt=i.get(v),Q=i.get(L);if(Q.__renderTarget=v,!tt.__hasExternalTextures){let he=Math.max(1,v.width>>z),Te=Math.max(1,v.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,fe,he,Te,v.depth,0,ye,ae,null):t.texImage2D(Z,z,fe,he,Te,0,ye,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ze(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,Q.__webglTexture,0,Ye(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,Q.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(S,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,z=b(v.stencilBuffer,Z),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ye(v);Ze(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,z,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,S)}else{let $=v.textures;for(let Z=0;Z<$.length;Z++){let z=$[Z],ye=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),fe=E(z.internalFormat,ye,ae,z.colorSpace),tt=Ye(v);L&&Ze(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,fe,v.width,v.height):Ze(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=$.__webglTexture,z=Ye(v);if(v.depthTexture.format===zr)Ze(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===jr)Ze(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ct(S){let v=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let $=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,S)}else if(L){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[$],S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,S,!1);else{let $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(S,v,L){let $=i.get(S);v!==void 0&&ge($.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ct(S)}function It(S){let v=S.texture,L=i.get(S),$=i.get(v);S.addEventListener("dispose",T);let Z=S.textures,z=S.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),z){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let fe=0;fe<v.mipmaps.length;fe++)L.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else L.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)L.__webglFramebuffer[ae]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ae=0,fe=Z.length;ae<fe;ae++){let tt=i.get(Z[ae]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Ze(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){let fe=Z[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);let tt=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),he=E(fe.internalFormat,tt,Q,fe.colorSpace,S.isXRRenderTarget===!0),Te=Ye(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,he,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),We(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(L.__webglFramebuffer[ae][fe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ge(L.__webglFramebuffer[ae],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,fe=Z.length;ae<fe;ae++){let tt=Z[ae],Q=i.get(tt);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),We(n.TEXTURE_2D,tt),ge(L.__webglFramebuffer,S,tt,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(tt)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),We(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(L.__webglFramebuffer[fe],S,v,n.COLOR_ATTACHMENT0,ae,fe);else ge(L.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}S.depthBuffer&&ct(S)}function wt(S){let v=S.textures;for(let L=0,$=v.length;L<$;L++){let Z=v[L];if(m(Z)){let z=w(S),ye=i.get(Z).__webglTexture;t.bindTexture(z,ye),p(z),t.unbindTexture()}}}let Xe=[],C=[];function Sn(S){if(S.samples>0){if(Ze(S)===!1){let v=S.textures,L=S.width,$=S.height,Z=n.COLOR_BUFFER_BIT,z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(S),ae=v.length>1;if(ae)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let tt=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,L,$,0,0,L,$,Z,n.NEAREST),c===!0&&(Xe.length=0,C.length=0,Xe.push(n.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Xe.push(z),C.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let tt=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,tt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ye(S){return Math.min(r.maxSamples,S.samples)}function Ze(S){let v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function St(S,v){let L=S.colorSpace,$=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==$r&&L!==Ui&&(st.getTransfer(L)===mt?($!==Ln||Z!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function _e(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Ae,this.setupRenderTarget=It,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ze}function PP(n,e){function t(i,r=Ui){let s,o=st.getTransfer(r);if(i===ui)return n.UNSIGNED_BYTE;if(i===Pu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ou)return n.UNSIGNED_SHORT_5_5_5_1;if(i===um)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cm)return n.BYTE;if(i===lm)return n.SHORT;if(i===po)return n.UNSIGNED_SHORT;if(i===Nu)return n.INT;if(i===dr)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===mo)return n.HALF_FLOAT;if(i===dm)return n.ALPHA;if(i===fm)return n.RGB;if(i===Ln)return n.RGBA;if(i===hm)return n.LUMINANCE;if(i===pm)return n.LUMINANCE_ALPHA;if(i===zr)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===mm)return n.RED;if(i===Lu)return n.RED_INTEGER;if(i===gm)return n.RG;if(i===Fu)return n.RG_INTEGER;if(i===ku)return n.RGBA_INTEGER;if(i===Ba||i===Va||i===Ha||i===za)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uu||i===Bu||i===Vu||i===Hu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zu||i===Gu||i===Wu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zu||i===Gu)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ju||i===$u||i===qu||i===Xu||i===Yu||i===Zu||i===Ju||i===Ku||i===Qu||i===ed||i===td||i===nd||i===id||i===rd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ju)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$u)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ju)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ku)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ed)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===td)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===id)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rd)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===sd||i===od)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ga)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===od)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vm||i===ad||i===cd||i===ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ga)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ad)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var OP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,km=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new hr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Jn({vertexShader:OP,fragmentShader:LP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Um=class extends Oi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new km,m=t.getContextAttributes(),p=null,w=null,E=[],b=[],P=new vt,R=null,T=new Gt;T.viewport=new At;let O=new Gt;O.viewport=new At;let M=[T,O],x=new xu,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=E[W];return ee===void 0&&(ee=new fo,E[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=E[W];return ee===void 0&&(ee=new fo,E[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=E[W];return ee===void 0&&(ee=new fo,E[W]=ee),ee.getHandSpace()};function B(W){let ee=b.indexOf(W.inputSource);if(ee===-1)return;let ge=E[ee];ge!==void 0&&(ge.update(W.inputSource,W.frame,l||o),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<E.length;W++){let ee=b[W];ee!==null&&(b[W]=null,E[W].disconnect(ee))}D=null,G=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,w=null,yt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return as(this,null,function*(){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,oe=null,we=null;m.depth&&(we=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?jr:zr,oe=m.stencil?es:dr);let ct={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ct),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new ai(f.textureWidth,f.textureHeight,{format:Ln,type:ui,depthTexture:new Pa(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new ai(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),yt.setContext(r),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(W){for(let ee=0;ee<W.removed.length;ee++){let ge=W.removed[ee],oe=b.indexOf(ge);oe>=0&&(b[oe]=null,E[oe].disconnect(ge))}for(let ee=0;ee<W.added.length;ee++){let ge=W.added[ee],oe=b.indexOf(ge);if(oe===-1){for(let ct=0;ct<E.length;ct++)if(ct>=b.length){b.push(ge),oe=ct;break}else if(b[ct]===null){b[ct]=ge,oe=ct;break}if(oe===-1)break}let we=E[oe];we&&we.connect(ge)}}let j=new U,J=new U;function H(W,ee,ge){j.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);let oe=j.distanceTo(J),we=ee.projectionMatrix.elements,ct=ge.projectionMatrix.elements,Ae=we[14]/(we[10]-1),It=we[14]/(we[10]+1),wt=(we[9]+1)/we[5],Xe=(we[9]-1)/we[5],C=(we[8]-1)/we[0],Sn=(ct[8]+1)/ct[0],Ye=Ae*C,Ze=Ae*Sn,Me=oe/(-C+Sn),St=Me*-C;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(St),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),we[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let _e=Ae+Me,S=It+Me,v=Ye-St,L=Ze+(oe-St),$=wt*It/S*_e,Z=Xe*It/S*_e;W.projectionMatrix.makePerspective(v,L,$,Z,_e,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function se(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ee=W.near,ge=W.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),x.near=O.near=T.near=ee,x.far=O.far=T.far=ge,(D!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,G=x.far),T.layers.mask=W.layers.mask|2,O.layers.mask=W.layers.mask|4,x.layers.mask=T.layers.mask|O.layers.mask;let oe=W.parent,we=x.cameras;se(x,oe);for(let ct=0;ct<we.length;ct++)se(we[ct],oe);we.length===2?H(x,T,O):x.projectionMatrix.copy(T.projectionMatrix),de(W,x,oe)};function de(W,ee,ge){ge===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ru*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let xe=null;function We(W,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let oe=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Ae=0;Ae<ge.length;Ae++){let It=ge[Ae],wt=null;if(h!==null)wt=h.getViewport(It);else{let C=d.getViewSubImage(f,It);wt=C.viewport,Ae===0&&(e.setRenderTargetTextures(w,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(w))}let Xe=M[Ae];Xe===void 0&&(Xe=new Gt,Xe.layers.enable(Ae),Xe.viewport=new At,M[Ae]=Xe),Xe.matrix.fromArray(It.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(It.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(wt.x,wt.y,wt.width,wt.height),Ae===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(Xe)}let we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Ae=d.getDepthInformation(ge[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let ge=0;ge<E.length;ge++){let oe=b[ge],we=E[ge];oe!==null&&we!==void 0&&we.update(oe,ee,l||o)}xe&&xe(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let yt=new TM;yt.setAnimationLoop(We),this.setAnimationLoop=function(W){xe=W},this.dispose=function(){}}},is=new Xr,FP=new Rt;function kP(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),E=w.envMap,b=w.envMapRotation;E&&(m.envMap.value=E,is.copy(b),is.x*=-1,is.y*=-1,is.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(FP.makeRotationFromEuler(is)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){let b=E.program;i.uniformBlockBinding(w,b)}function l(w,E){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",m));let P=E.program;i.updateUBOMapping(w,P);let R=e.render.frame;s[w.id]!==R&&(f(w),s[w.id]=R)}function u(w){let E=d();w.__bindingPointIndex=E;let b=n.createBuffer(),P=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=r[w.id],b=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,T=b.length;R<T;R++){let O=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,x=O.length;M<x;M++){let D=O[M];if(h(D,R,M,P)===!0){let G=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],X=0;for(let Y=0;Y<B.length;Y++){let j=B[Y],J=y(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,G+X,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,E,b,P){let R=w.value,T=E+"_"+b;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{let O=P[T];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return P[T]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(w){let E=w.uniforms,b=0,P=16;for(let T=0,O=E.length;T<O;T++){let M=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,D=M.length;x<D;x++){let G=M[x],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=B.length;X<Y;X++){let j=B[X],J=y(j),H=b%P,se=H%J.boundary,de=H+se;b+=se,de!==0&&P-de<J.storage&&(b+=P-de),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=J.storage}}}let R=b%P;return R>0&&(b+=P-R),w.__size=b,w.__cache={},this}function y(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var _o=class{constructor(e={}){let{canvas:t=Kx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=ki,this.toneMappingExposure=1;let b=this,P=!1,R=0,T=0,O=null,M=-1,x=null,D=new At,G=new At,B=null,X=new et(0),Y=0,j=t.width,J=t.height,H=1,se=null,de=null,xe=new At(0,0,j,J),We=new At(0,0,j,J),yt=!1,W=new Ra,ee=!1,ge=!1;this.transmissionResolutionScale=1;let oe=new Rt,we=new Rt,ct=new U,Ae=new At,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Xe(){return O===null?H:1}let C=i;function Sn(_,I){return t.getContext(_,I)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mu}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){let I="webgl2";if(C=Sn(I,_),C===null)throw Sn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ye,Ze,Me,St,_e,S,v,L,$,Z,z,ye,ae,fe,tt,Q,he,Te,Ie,pe,Je,He,xt,A;function ne(){Ye=new nN(C),Ye.init(),He=new PP(C,Ye),Ze=new Y1(C,Ye,e,He),Me=new RP(C,Ye),Ze.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),St=new sN(C),_e=new yP,S=new NP(C,Ye,Me,_e,Ze,He,St),v=new J1(b),L=new tN(b),$=new dI(C),xt=new q1(C,$),Z=new iN(C,$,St,xt),z=new aN(C,Z,$,St),Ie=new oN(C,Ze,S),Q=new Z1(_e),ye=new vP(b,v,L,Ye,Ze,xt,Q),ae=new kP(b,_e),fe=new xP,tt=new CP(Ye),Te=new $1(b,v,L,Me,z,h,c),he=new AP(b,z,Ze),A=new UP(C,St,Ze,Me),pe=new X1(C,Ye,St),Je=new rN(C,Ye,St),St.programs=ye.programs,b.capabilities=Ze,b.extensions=Ye,b.properties=_e,b.renderLists=fe,b.shadowMap=he,b.state=Me,b.info=St}ne();let V=new Um(b,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=Ye.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Ye.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(j,J,!1))},this.getSize=function(_){return _.set(j,J)},this.setSize=function(_,I,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,J=I,t.width=Math.floor(_*H),t.height=Math.floor(I*H),F===!0&&(t.style.width=_+"px",t.style.height=I+"px"),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(j*H,J*H).floor()},this.setDrawingBufferSize=function(_,I,F){j=_,J=I,H=F,t.width=Math.floor(_*F),t.height=Math.floor(I*F),this.setViewport(0,0,_,I)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,I,F,k){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,I,F,k),Me.viewport(D.copy(xe).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(We)},this.setScissor=function(_,I,F,k){_.isVector4?We.set(_.x,_.y,_.z,_.w):We.set(_,I,F,k),Me.scissor(G.copy(We).multiplyScalar(H).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(_){Me.setScissorTest(yt=_)},this.setOpaqueSort=function(_){se=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,F=!0){let k=0;if(_){let N=!1;if(O!==null){let K=O.texture.format;N=K===ku||K===Fu||K===Lu}if(N){let K=O.texture.type,ie=K===ui||K===dr||K===po||K===es||K===Pu||K===Ou,ue=Te.getClearColor(),me=Te.getClearAlpha(),Re=ue.r,Ne=ue.g,Se=ue.b;ie?(g[0]=Re,g[1]=Ne,g[2]=Se,g[3]=me,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Re,y[1]=Ne,y[2]=Se,y[3]=me,C.clearBufferiv(C.COLOR,0,y))}else k|=C.COLOR_BUFFER_BIT}I&&(k|=C.DEPTH_BUFFER_BIT),F&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Te.dispose(),fe.dispose(),tt.dispose(),_e.dispose(),v.dispose(),L.dispose(),z.dispose(),xt.dispose(),A.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",Vm),V.removeEventListener("sessionend",Hm),mr.stop()};function q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let _=St.autoReset,I=he.enabled,F=he.autoUpdate,k=he.needsUpdate,N=he.type;ne(),St.autoReset=_,he.enabled=I,he.autoUpdate=F,he.needsUpdate=k,he.type=N}function ce(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ue(_){let I=_.target;I.removeEventListener("dispose",Ue),Ct(I)}function Ct(_){Zt(_),_e.remove(_)}function Zt(_){let I=_e.get(_).programs;I!==void 0&&(I.forEach(function(F){ye.releaseProgram(F)}),_.isShaderMaterial&&ye.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,F,k,N,K){I===null&&(I=It);let ie=N.isMesh&&N.matrixWorld.determinant()<0,ue=PM(_,I,F,k,N);Me.setMaterial(k,ie);let me=F.index,Re=1;if(k.wireframe===!0){if(me=Z.getWireframeAttribute(F),me===void 0)return;Re=2}let Ne=F.drawRange,Se=F.attributes.position,nt=Ne.start*Re,ut=(Ne.start+Ne.count)*Re;K!==null&&(nt=Math.max(nt,K.start*Re),ut=Math.min(ut,(K.start+K.count)*Re)),me!==null?(nt=Math.max(nt,0),ut=Math.min(ut,me.count)):Se!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,Se.count));let Nt=ut-nt;if(Nt<0||Nt===1/0)return;xt.setup(N,k,ue,F,me);let Tt,ot=pe;if(me!==null&&(Tt=$.get(me),ot=Je,ot.setIndex(Tt)),N.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*Xe()),ot.setMode(C.LINES)):ot.setMode(C.TRIANGLES);else if(N.isLine){let be=k.linewidth;be===void 0&&(be=1),Me.setLineWidth(be*Xe()),N.isLineSegments?ot.setMode(C.LINES):N.isLineLoop?ot.setMode(C.LINE_LOOP):ot.setMode(C.LINE_STRIP)}else N.isPoints?ot.setMode(C.POINTS):N.isSprite&&ot.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let be=N._multiDrawStarts,Wt=N._multiDrawCounts,dt=N._multiDrawCount,kn=me?$.get(me).bytesPerElement:1,os=_e.get(k).currentProgram.getUniforms();for(let fn=0;fn<dt;fn++)os.setValue(C,"_gl_DrawID",fn),ot.render(be[fn]/kn,Wt[fn])}else if(N.isInstancedMesh)ot.renderInstances(nt,Nt,N.count);else if(F.isInstancedBufferGeometry){let be=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Wt=Math.min(F.instanceCount,be);ot.renderInstances(nt,Nt,Wt)}else ot.render(nt,Nt)};function ht(_,I,F){_.transparent===!0&&_.side===li&&_.forceSinglePass===!1?(_.side=rn,_.needsUpdate=!0,qa(_,I,F),_.side=Pi,_.needsUpdate=!0,qa(_,I,F),_.side=li):qa(_,I,F)}this.compile=function(_,I,F=null){F===null&&(F=_),p=tt.get(F),p.init(I),E.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),_!==F&&_.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let k=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let K=N.material;if(K)if(Array.isArray(K))for(let ie=0;ie<K.length;ie++){let ue=K[ie];ht(ue,F,N),k.add(ue)}else ht(K,F,N),k.add(K)}),p=E.pop(),k},this.compileAsync=function(_,I,F=null){let k=this.compile(_,I,F);return new Promise(N=>{function K(){if(k.forEach(function(ie){_e.get(ie).currentProgram.isReady()&&k.delete(ie)}),k.size===0){N(_);return}setTimeout(K,10)}Ye.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let Fn=null;function hi(_){Fn&&Fn(_)}function Vm(){mr.stop()}function Hm(){mr.start()}let mr=new TM;mr.setAnimationLoop(hi),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(_){Fn=_,V.setAnimationLoop(_),_===null?mr.stop():mr.start()},V.addEventListener("sessionstart",Vm),V.addEventListener("sessionend",Hm),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,I,O),p=tt.get(_,E.length),p.init(I),E.push(p),we.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(we),ge=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,ge),m=fe.get(_,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let K=b.xr.getDepthSensingMesh();K!==null&&xd(K,I,-1/0,b.sortObjects)}xd(_,I,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(se,de),wt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,wt&&Te.addToRenderList(m,_),this.info.render.frame++,ee===!0&&Q.beginShadows();let F=p.state.shadowsArray;he.render(F,_,I),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(p.setupLights(),I.isArrayCamera){let K=I.cameras;if(N.length>0)for(let ie=0,ue=K.length;ie<ue;ie++){let me=K[ie];Gm(k,N,_,me)}wt&&Te.render(_);for(let ie=0,ue=K.length;ie<ue;ie++){let me=K[ie];zm(m,_,me,me.viewport)}}else N.length>0&&Gm(k,N,_,I),wt&&Te.render(_),zm(m,_,I);O!==null&&T===0&&(S.updateMultisampleRenderTarget(O),S.updateRenderTargetMipmap(O)),_.isScene===!0&&_.onAfterRender(b,_,I),xt.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],ee===!0&&Q.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function xd(_,I,F,k){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||W.intersectsSprite(_)){k&&Ae.setFromMatrixPosition(_.matrixWorld).applyMatrix4(we);let ie=z.update(_),ue=_.material;ue.visible&&m.push(_,ie,ue,F,Ae.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||W.intersectsObject(_))){let ie=z.update(_),ue=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ae.copy(_.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Ae.copy(ie.boundingSphere.center)),Ae.applyMatrix4(_.matrixWorld).applyMatrix4(we)),Array.isArray(ue)){let me=ie.groups;for(let Re=0,Ne=me.length;Re<Ne;Re++){let Se=me[Re],nt=ue[Se.materialIndex];nt&&nt.visible&&m.push(_,ie,nt,F,Ae.z,Se)}}else ue.visible&&m.push(_,ie,ue,F,Ae.z,null)}}let K=_.children;for(let ie=0,ue=K.length;ie<ue;ie++)xd(K[ie],I,F,k)}function zm(_,I,F,k){let N=_.opaque,K=_.transmissive,ie=_.transparent;p.setupLightsView(F),ee===!0&&Q.setGlobalState(b.clippingPlanes,F),k&&Me.viewport(D.copy(k)),N.length>0&&$a(N,I,F),K.length>0&&$a(K,I,F),ie.length>0&&$a(ie,I,F),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Gm(_,I,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ai(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?mo:ui,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let K=p.state.transmissionRenderTarget[k.id],ie=k.viewport||D;K.setSize(ie.z*b.transmissionResolutionScale,ie.w*b.transmissionResolutionScale);let ue=b.getRenderTarget();b.setRenderTarget(K),b.getClearColor(X),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),wt&&Te.render(F);let me=b.toneMapping;b.toneMapping=ki;let Re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ee===!0&&Q.setGlobalState(b.clippingPlanes,k),$a(_,F,k),S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Se=0,nt=I.length;Se<nt;Se++){let ut=I[Se],Nt=ut.object,Tt=ut.geometry,ot=ut.material,be=ut.group;if(ot.side===li&&Nt.layers.test(k.layers)){let Wt=ot.side;ot.side=rn,ot.needsUpdate=!0,Wm(Nt,F,k,Tt,ot,be),ot.side=Wt,ot.needsUpdate=!0,Ne=!0}}Ne===!0&&(S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K))}b.setRenderTarget(ue),b.setClearColor(X,Y),Re!==void 0&&(k.viewport=Re),b.toneMapping=me}function $a(_,I,F){let k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,K=_.length;N<K;N++){let ie=_[N],ue=ie.object,me=ie.geometry,Re=k===null?ie.material:k,Ne=ie.group;ue.layers.test(F.layers)&&Wm(ue,I,F,me,Re,Ne)}}function Wm(_,I,F,k,N,K){_.onBeforeRender(b,I,F,k,N,K),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(b,I,F,k,_,K),N.transparent===!0&&N.side===li&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,b.renderBufferDirect(F,I,k,N,_,K),N.side=Pi,N.needsUpdate=!0,b.renderBufferDirect(F,I,k,N,_,K),N.side=li):b.renderBufferDirect(F,I,k,N,_,K),_.onAfterRender(b,I,F,k,N,K)}function qa(_,I,F){I.isScene!==!0&&(I=It);let k=_e.get(_),N=p.state.lights,K=p.state.shadowsArray,ie=N.state.version,ue=ye.getParameters(_,N.state,K,I,F),me=ye.getProgramCacheKey(ue),Re=k.programs;k.environment=_.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(_.isMeshStandardMaterial?L:v).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Re===void 0&&(_.addEventListener("dispose",Ue),Re=new Map,k.programs=Re);let Ne=Re.get(me);if(Ne!==void 0){if(k.currentProgram===Ne&&k.lightsStateVersion===ie)return $m(_,ue),Ne}else ue.uniforms=ye.getUniforms(_),_.onBeforeCompile(ue,b),Ne=ye.acquireProgram(ue,me),Re.set(me,Ne),k.uniforms=ue.uniforms;let Se=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Se.clippingPlanes=Q.uniform),$m(_,ue),k.needsLights=LM(_),k.lightsStateVersion=ie,k.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ne,k.uniformsList=null,Ne}function jm(_){if(_.uniformsList===null){let I=_.currentProgram.getUniforms();_.uniformsList=yo.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function $m(_,I){let F=_e.get(_);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function PM(_,I,F,k,N){I.isScene!==!0&&(I=It),S.resetTextureUnits();let K=I.fog,ie=k.isMeshStandardMaterial?I.environment:null,ue=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:$r,me=(k.isMeshStandardMaterial?L:v).get(k.envMap||ie),Re=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ne=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!F.morphAttributes.position,nt=!!F.morphAttributes.normal,ut=!!F.morphAttributes.color,Nt=ki;k.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Nt=b.toneMapping);let Tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=Tt!==void 0?Tt.length:0,be=_e.get(k),Wt=p.state.lights;if(ee===!0&&(ge===!0||_!==x)){let nn=_===x&&k.id===M;Q.setState(k,_,nn)}let dt=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Wt.state.version||be.outputColorSpace!==ue||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==me||k.fog===!0&&be.fog!==K||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Q.numPlanes||be.numIntersection!==Q.numIntersection)||be.vertexAlphas!==Re||be.vertexTangents!==Ne||be.morphTargets!==Se||be.morphNormals!==nt||be.morphColors!==ut||be.toneMapping!==Nt||be.morphTargetsCount!==ot)&&(dt=!0):(dt=!0,be.__version=k.version);let kn=be.currentProgram;dt===!0&&(kn=qa(k,I,N));let os=!1,fn=!1,Mo=!1,Et=kn.getUniforms(),bn=be.uniforms;if(Me.useProgram(kn.program)&&(os=!0,fn=!0,Mo=!0),k.id!==M&&(M=k.id,fn=!0),os||x!==_){Me.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),eM(oe),tM(oe),Et.setValue(C,"projectionMatrix",oe)):Et.setValue(C,"projectionMatrix",_.projectionMatrix),Et.setValue(C,"viewMatrix",_.matrixWorldInverse);let sn=Et.map.cameraPosition;sn!==void 0&&sn.setValue(C,ct.setFromMatrixPosition(_.matrixWorld)),Ze.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Et.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,fn=!0,Mo=!0)}if(N.isSkinnedMesh){Et.setOptional(C,N,"bindMatrix"),Et.setOptional(C,N,"bindMatrixInverse");let nn=N.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Et.setValue(C,"boneTexture",nn.boneTexture,S))}N.isBatchedMesh&&(Et.setOptional(C,N,"batchingTexture"),Et.setValue(C,"batchingTexture",N._matricesTexture,S),Et.setOptional(C,N,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",N._indirectTexture,S),Et.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",N._colorsTexture,S));let En=F.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ie.update(N,F,kn),(fn||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,Et.setValue(C,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(bn.envMap.value=me,bn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(bn.envMapIntensity.value=I.environmentIntensity),fn&&(Et.setValue(C,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&OM(bn,Mo),K&&k.fog===!0&&ae.refreshFogUniforms(bn,K),ae.refreshMaterialUniforms(bn,k,H,J,p.state.transmissionRenderTarget[_.id]),yo.upload(C,jm(be),bn,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(yo.upload(C,jm(be),bn,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Et.setValue(C,"center",N.center),Et.setValue(C,"modelViewMatrix",N.modelViewMatrix),Et.setValue(C,"normalMatrix",N.normalMatrix),Et.setValue(C,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let nn=k.uniformsGroups;for(let sn=0,Md=nn.length;sn<Md;sn++){let gr=nn[sn];A.update(gr,kn),A.bind(gr,kn)}}return kn}function OM(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function LM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(_,I,F){_e.get(_.texture).__webglTexture=I,_e.get(_.depthTexture).__webglTexture=F;let k=_e.get(_);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,I){let F=_e.get(_);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};let FM=C.createFramebuffer();this.setRenderTarget=function(_,I=0,F=0){O=_,R=I,T=F;let k=!0,N=null,K=!1,ie=!1;if(_){let me=_e.get(_);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(me.__hasExternalTextures)S.rebindTextures(_,_e.get(_.texture).__webglTexture,_e.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Se=_.depthTexture;if(me.__boundDepthTexture!==Se){if(Se!==null&&_e.has(Se)&&(_.width!==Se.image.width||_.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}let Re=_.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ie=!0);let Ne=_e.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?N=Ne[I][F]:N=Ne[I],K=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?N=_e.get(_).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[F]:N=Ne,D.copy(_.viewport),G.copy(_.scissor),B=_.scissorTest}else D.copy(xe).multiplyScalar(H).floor(),G.copy(We).multiplyScalar(H).floor(),B=yt;if(F!==0&&(N=FM),Me.bindFramebuffer(C.FRAMEBUFFER,N)&&k&&Me.drawBuffers(_,N),Me.viewport(D),Me.scissor(G),Me.setScissorTest(B),K){let me=_e.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,F)}else if(ie){let me=_e.get(_.texture),Re=I;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,F,Re)}else if(_!==null&&F!==0){let me=_e.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(_,I,F,k,N,K,ie){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ie!==void 0&&(ue=ue[ie]),ue){Me.bindFramebuffer(C.FRAMEBUFFER,ue);try{let me=_.texture,Re=me.format,Ne=me.type;if(!Ze.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-k&&F>=0&&F<=_.height-N&&C.readPixels(I,F,k,N,He.convert(Re),He.convert(Ne),K)}finally{let me=O!==null?_e.get(O).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(_,I,F,k,N,K,ie){return as(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ie!==void 0&&(ue=ue[ie]),ue){let me=_.texture,Re=me.format,Ne=me.type;if(!Ze.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=_.width-k&&F>=0&&F<=_.height-N){Me.bindFramebuffer(C.FRAMEBUFFER,ue);let Se=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Se),C.bufferData(C.PIXEL_PACK_BUFFER,K.byteLength,C.STREAM_READ),C.readPixels(I,F,k,N,He.convert(Re),He.convert(Ne),0);let nt=O!==null?_e.get(O).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,nt);let ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield Qx(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Se),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,K),C.deleteBuffer(Se),C.deleteSync(ut),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(_,I=null,F=0){_.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,_=arguments[1]);let k=Math.pow(2,-F),N=Math.floor(_.image.width*k),K=Math.floor(_.image.height*k),ie=I!==null?I.x:0,ue=I!==null?I.y:0;S.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,ie,ue,N,K),Me.unbindTexture()};let kM=C.createFramebuffer(),UM=C.createFramebuffer();this.copyTextureToTexture=function(_,I,F=null,k=null,N=0,K=null){_.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,_=arguments[1],I=arguments[2],K=arguments[3]||0,F=null),K===null&&(N!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=N,N=0):K=0);let ie,ue,me,Re,Ne,Se,nt,ut,Nt,Tt=_.isCompressedTexture?_.mipmaps[K]:_.image;if(F!==null)ie=F.max.x-F.min.x,ue=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,Re=F.min.x,Ne=F.min.y,Se=F.isBox3?F.min.z:0;else{let En=Math.pow(2,-N);ie=Math.floor(Tt.width*En),ue=Math.floor(Tt.height*En),_.isDataArrayTexture?me=Tt.depth:_.isData3DTexture?me=Math.floor(Tt.depth*En):me=1,Re=0,Ne=0,Se=0}k!==null?(nt=k.x,ut=k.y,Nt=k.z):(nt=0,ut=0,Nt=0);let ot=He.convert(I.format),be=He.convert(I.type),Wt;I.isData3DTexture?(S.setTexture3D(I,0),Wt=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(S.setTexture2DArray(I,0),Wt=C.TEXTURE_2D_ARRAY):(S.setTexture2D(I,0),Wt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let dt=C.getParameter(C.UNPACK_ROW_LENGTH),kn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),os=C.getParameter(C.UNPACK_SKIP_PIXELS),fn=C.getParameter(C.UNPACK_SKIP_ROWS),Mo=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Tt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Tt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Re),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ne),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se);let Et=_.isDataArrayTexture||_.isData3DTexture,bn=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){let En=_e.get(_),nn=_e.get(I),sn=_e.get(En.__renderTarget),Md=_e.get(nn.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,sn.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,Md.__webglFramebuffer);for(let gr=0;gr<me;gr++)Et&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(_).__webglTexture,N,Se+gr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(I).__webglTexture,K,Nt+gr)),C.blitFramebuffer(Re,Ne,ie,ue,nt,ut,ie,ue,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||_e.has(_)){let En=_e.get(_),nn=_e.get(I);Me.bindFramebuffer(C.READ_FRAMEBUFFER,kM),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,UM);for(let sn=0;sn<me;sn++)Et?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,En.__webglTexture,N,Se+sn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,En.__webglTexture,N),bn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,K,Nt+sn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,K),N!==0?C.blitFramebuffer(Re,Ne,ie,ue,nt,ut,ie,ue,C.COLOR_BUFFER_BIT,C.NEAREST):bn?C.copyTexSubImage3D(Wt,K,nt,ut,Nt+sn,Re,Ne,ie,ue):C.copyTexSubImage2D(Wt,K,nt,ut,Re,Ne,ie,ue);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else bn?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Wt,K,nt,ut,Nt,ie,ue,me,ot,be,Tt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Wt,K,nt,ut,Nt,ie,ue,me,ot,Tt.data):C.texSubImage3D(Wt,K,nt,ut,Nt,ie,ue,me,ot,be,Tt):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,K,nt,ut,ie,ue,ot,be,Tt.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,K,nt,ut,Tt.width,Tt.height,ot,Tt.data):C.texSubImage2D(C.TEXTURE_2D,K,nt,ut,ie,ue,ot,be,Tt);C.pixelStorei(C.UNPACK_ROW_LENGTH,dt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,kn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,os),C.pixelStorei(C.UNPACK_SKIP_ROWS,fn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Mo),K===0&&I.generateMipmaps&&C.generateMipmap(Wt),Me.unbindTexture()},this.copyTextureToTexture3D=function(_,I,F=null,k=null,N=0){return _.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,_=arguments[2],I=arguments[3],N=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,I,F,k,N)},this.initRenderTarget=function(_){_e.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),Me.unbindTexture()},this.resetState=function(){R=0,T=0,O=null,Me.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var BP=["backgroundCanvas"],md=class n{canvasRef;scene;camera;renderer;particles;mouseX=0;mouseY=0;particleSystem;time=0;ngAfterViewInit(){this.initThreeJS(),this.animate()}initThreeJS(){this.scene=new Zr,this.scene.background=new et(3354),this.camera=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new _o({canvas:this.canvasRef.nativeElement,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);let e=new Zn,t=1500,i=new Float32Array(t*3),r=new Float32Array(t*3);for(let o=0;o<t*3;o++)i[o]=(Math.random()-.5)*15,r[o]=(Math.random()-.5)*.1;e.setAttribute("position",new en(i,3)),e.setAttribute("velocity",new en(r,3));let s=new ho({color:3394815,size:.07,transparent:!0,opacity:.8,blending:Fa});this.particleSystem=new Na(e,s),this.scene.add(this.particleSystem),window.addEventListener("resize",()=>this.onWindowResize())}animate(){requestAnimationFrame(()=>this.animate()),this.time+=.01,this.particleSystem.rotation.y+=.002,this.camera.position.x+=(this.mouseX*.001-this.camera.position.x)*.05,this.camera.position.y+=(-this.mouseY*.001-this.camera.position.y)*.05,this.camera.lookAt(this.scene.position),this.renderer.render(this.scene,this.camera)}onMouseMove(e){this.mouseX=e.clientX-window.innerWidth/2,this.mouseY=e.clientY-window.innerHeight/2}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ln({type:n,selectors:[["app-three-bg"]],viewQuery:function(t,i){if(t&1&&I_(BP,7),t&2){let r;Ah(r=Ih())&&(i.canvasRef=r.first)}},hostBindings:function(t,i){t&1&&Us("mousemove",function(s){return i.onMouseMove(s)},!1,Hy)},decls:2,vars:0,consts:[["backgroundCanvas",""]],template:function(t,i){t&1&&lt(0,"canvas",null,0)},styles:["canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;background:radial-gradient(circle at top left,#001f3f,#000d1a)}"]})};var gd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ln({type:n,selectors:[["app-home"]],decls:45,vars:0,consts:[[1,"container"],[1,"profile-card"],[1,"avatar-container"],[1,"avatar"],["src","assets/luffy.jpg","alt","Profile avatar"],[1,"status-indicator"],[1,"name"],[1,"title"],[1,"divider"],[1,"contact-info"],[1,"info-item"],[1,"icon-container"],["src","assets/email.png","alt","Email Icon"],[1,"info-content"],[1,"info-label"],[1,"info-value"],["src","assets/phone.png","alt","Email Icon"],["src","assets/location.png","alt","Email Icon"],[1,"social-links"],["href","#",1,"social-icon"],[1,"fa","fa-linkedin"],[1,"fa","fa-github"],[1,"fa","fa-twitter"],[1,"right-container"]],template:function(t,i){t&1&&(lt(0,"app-three-bg"),De(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3),lt(5,"img",4),Ee(),lt(6,"div",5),Ee(),De(7,"h1",6),pt(8,"Thabo Tshabalala"),Ee(),De(9,"p",7),pt(10,"Backend Developer"),Ee(),lt(11,"div",8),De(12,"div",9)(13,"div",10)(14,"div",11),lt(15,"img",12),Ee(),De(16,"div",13)(17,"p",14),pt(18,"EMAIL"),Ee(),De(19,"p",15),pt(20,"1lo0v3coding.gmail.com"),Ee()()(),De(21,"div",10)(22,"div",11),lt(23,"img",16),Ee(),De(24,"div",13)(25,"p",14),pt(26,"PHONE"),Ee(),De(27,"p",15),pt(28,"+277 **** ****"),Ee()()(),De(29,"div",10)(30,"div",11),lt(31,"img",17),Ee(),De(32,"div",13)(33,"p",14),pt(34,"LOCATION"),Ee(),De(35,"p",15),pt(36,"Cape Town"),Ee()()()(),De(37,"div",18)(38,"a",19),lt(39,"i",20),Ee(),De(40,"a",19),lt(41,"i",21),Ee(),De(42,"a",19),lt(43,"i",22),Ee()()(),lt(44,"div",23),Ee())},dependencies:[md],styles:[".container[_ngcontent-%COMP%]{display:flex;min-height:calc(100vh - 60px);padding:20px;overflow:hidden}.profile-card[_ngcontent-%COMP%]{width:340px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background:#ffffff1a;border-radius:20px;padding:40px 25px;display:flex;flex-direction:column;align-items:center;color:#fff;margin-right:20px;box-shadow:0 10px 20px #0000004d;max-height:100%;overflow-y:auto}.right-container[_ngcontent-%COMP%]{flex-grow:1;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);background:#ffffff1a;padding:20px;border-radius:20px;box-shadow:0 10px 20px #0000001a;max-height:100%;overflow-y:auto;max-width:70%}.avatar-container[_ngcontent-%COMP%]{position:relative;margin-bottom:20px}.avatar[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:25px;background-color:#2a2a2a;display:flex;justify-content:center;align-items:center;overflow:hidden}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.status-indicator[_ngcontent-%COMP%]{position:absolute;width:16px;height:16px;background-color:#4cd137;border-radius:50%;bottom:6px;right:6px;border:2px solid #1E1E1E}.name[_ngcontent-%COMP%]{margin:0;font-size:28px;font-weight:600;text-align:center}.title[_ngcontent-%COMP%]{margin:8px 0 20px;font-size:16px;background-color:#222;padding:7px 18px;border-radius:20px;display:inline-block}.divider[_ngcontent-%COMP%]{width:100%;height:1px;background-color:#333;margin:15px 0 25px}.contact-info[_ngcontent-%COMP%]{width:100%}.info-item[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}.icon-container[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:12px;background-color:#111;display:flex;justify-content:center;align-items:center;margin-right:18px;color:gold;font-size:18px}.info-content[_ngcontent-%COMP%]{flex:1}.info-label[_ngcontent-%COMP%]{font-size:14px;color:#777;margin:0;text-transform:uppercase;letter-spacing:.5px}.info-value[_ngcontent-%COMP%]{margin:2px 0 0;font-size:16px}.icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;object-fit:cover;filter:invert(1) sepia(0) saturate(0) brightness(100%)}.social-links[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:25px;gap:20px}.social-icon[_ngcontent-%COMP%]{color:#aaa;font-size:20px;transition:color .3s ease}.social-icon[_ngcontent-%COMP%]:hover{color:#fff}@media (max-width: 768px){.container[_ngcontent-%COMP%]{justify-content:center}.profile-card[_ngcontent-%COMP%]{margin-left:0;width:100%;max-width:340px}}"]})};var vd=class n{description=`
    I'm dedicated to the philosophy of continuous learning, with a strong focus on backend development and creating scalable web solutions.
    My love for coding is fueled by the problem-solving nature of the field and the endless opportunities for growth and exploration. When I'm not working on code,
    I enjoy staying active at the gym, reading insightful books, and immersing myself in anime for relaxation and inspiration.
  `;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ln({type:n,selectors:[["app-about-me"]],decls:8,vars:1,consts:[[1,"about-me"],[1,"container"],[1,"intro"],[1,"description"]],template:function(t,i){t&1&&(De(0,"section",0)(1,"div",1)(2,"h2"),pt(3,"About Me"),Ee(),De(4,"p",2),pt(5," Myself and I "),Ee(),De(6,"p",3),pt(7),Ee()()()),t&2&&(Wo(7),Rh(i.description))},styles:[".about-me[_ngcontent-%COMP%]{background-color:#000;padding:60px 20px;text-align:center;border-radius:2%;margin:-8px}.about-me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;color:#fff;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;color:#fff;margin-top:10px;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#fff;line-height:1.8;max-width:900px;margin:20px auto;padding:0 10px;text-align:justify}.about-me-content[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:20px;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a}"]})};var yd=class n{isSidebarVisible=!1;constructor(){}ngOnInit(){this.initThreeJS()}toggleSidebar(){this.isSidebarVisible=!this.isSidebarVisible}initThreeJS(){let e=new Zr,t=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3),i=new _o;i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);let r=new ar,s=new Yr({color:65280}),o=new dn(r,s);e.add(o),t.position.z=5;let a=()=>{requestAnimationFrame(a),o.rotation.x+=.1,o.rotation.y+=.01,i.render(e,t)};a()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ln({type:n,selectors:[["app-skills"]],decls:47,vars:0,consts:[[1,"skills"],[1,"skills-container"],["id","springBoot",1,"skill"],[1,"skill-icon"],["src","assets/spring-boot.svg","alt","Spring Boot"],[1,"skill-name"],["id","htmlCss",1,"skill"],["src","assets/java.svg","alt","Java"],["id","jsAngular",1,"skill"],["src","assets/typescript.svg","alt","Typescript"],["id","git",1,"skill"],["src","assets/angular.svg","alt","Angular"],[1,"subskills"],[1,"subskill-name"],["id","flutter",1,"skill"],["src","assets/flutter.svg","alt","Flutter"],["id","sql",1,"skill"],["src","assets/sql.png","alt","SQL"],["src","assets/git.svg","alt","Git"],["id","docker",1,"skill"],["src","assets/docker.svg","alt","Docker"]],template:function(t,i){t&1&&(De(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),lt(4,"img",4),Ee(),De(5,"p",5),pt(6,"Spring Boot"),Ee()(),De(7,"div",6)(8,"div",3),lt(9,"img",7),Ee(),De(10,"p",5),pt(11,"Java"),Ee()(),De(12,"div",8)(13,"div",3),lt(14,"img",9),Ee(),De(15,"p",5),pt(16,"Typescript"),Ee()(),De(17,"div",10)(18,"div",3),lt(19,"img",11),Ee(),De(20,"p",5),pt(21,"Angular"),Ee(),De(22,"div",12)(23,"p",13),pt(24,"HTML"),Ee(),De(25,"p",13),pt(26,"CSS"),Ee()()(),De(27,"div",14)(28,"div",3),lt(29,"img",15),Ee(),De(30,"p",5),pt(31,"Flutter"),Ee()(),De(32,"div",16)(33,"div",3),lt(34,"img",17),Ee(),De(35,"p",5),pt(36,"SQL"),Ee()(),De(37,"div",10)(38,"div",3),lt(39,"img",18),Ee(),De(40,"p",5),pt(41,"Git"),Ee()(),De(42,"div",19)(43,"div",3),lt(44,"img",20),Ee(),De(45,"p",5),pt(46,"Docker"),Ee()()()())},styles:[".skills[_ngcontent-%COMP%]{background-color:#f4f4f9;padding:50px 20px;text-align:center}.skills-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:15px;max-width:1100px;margin:0 auto}.skill[_ngcontent-%COMP%]{background-color:#1e1e1e;color:#fff;border-radius:12px;padding:20px;box-shadow:0 4px 6px #0003;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:transform .2s ease,box-shadow .2s ease}.skill[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 8px 16px #0000004d}.skill-icon[_ngcontent-%COMP%]{width:50px;height:50px;margin-bottom:10px}.skill-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.skill-name[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-top:5px}.subskills[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:10px;justify-content:center}.subskill-name[_ngcontent-%COMP%]{font-size:.9rem;color:#555;background-color:#e0e0e0;padding:5px 8px;border-radius:5px;text-align:center}"]})};var _d=class n{title="personal-portfolio";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=ln({type:n,selectors:[["app-root"]],decls:5,vars:0,template:function(t,i){t&1&&lt(0,"app-navigation")(1,"app-home")(2,"app-about-me")(3,"app-skills")(4,"router-outlet")},dependencies:[Mp,Zs,gd,vd,yd],encapsulation:2})};r0(_d,W0).catch(n=>console.error(n));
