var YM=Object.defineProperty,ZM=Object.defineProperties;var JM=Object.getOwnPropertyDescriptors;var ag=Object.getOwnPropertySymbols;var KM=Object.prototype.hasOwnProperty,QM=Object.prototype.propertyIsEnumerable;var cg=(n,e,t)=>e in n?YM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ve=(n,e)=>{for(var t in e||={})KM.call(e,t)&&cg(n,t,e[t]);if(ag)for(var t of ag(e))QM.call(e,t)&&cg(n,t,e[t]);return n},Mt=(n,e)=>ZM(n,JM(e));var cs=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});function lg(n,e){return Object.is(n,e)}var Lt=null,Za=!1,wd=1,ls=Symbol("SIGNAL");function tt(n){let e=Lt;return Lt=n,e}function Cd(){return Lt}var Ja={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Td(n){if(Za)throw new Error("");if(Lt===null)return;Lt.consumerOnSignalRead(n);let e=Lt.nextProducerIndex++;if(Qa(Lt),e<Lt.producerNode.length&&Lt.producerNode[e]!==n&&bo(Lt)){let t=Lt.producerNode[e];Ka(t,Lt.producerIndexOfThis[e])}Lt.producerNode[e]!==n&&(Lt.producerNode[e]=n,Lt.producerIndexOfThis[e]=bo(Lt)?pg(n,Lt,e):0),Lt.producerLastReadVersion[e]=n.version}function ug(){wd++}function dg(n){if(!(bo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===wd)){if(!n.producerMustRecompute(n)&&!Id(n)){bd(n);return}n.producerRecomputeValue(n),bd(n)}}function Dd(n){if(n.liveConsumerNode===void 0)return;let e=Za;Za=!0;try{for(let t of n.liveConsumerNode)t.dirty||eS(t)}finally{Za=e}}function fg(){return Lt?.consumerAllowSignalWrites!==!1}function eS(n){n.dirty=!0,Dd(n),n.consumerMarkedDirty?.(n)}function bd(n){n.dirty=!1,n.lastCleanEpoch=wd}function Ad(n){return n&&(n.nextProducerIndex=0),tt(n)}function hg(n,e){if(tt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(bo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Ka(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Id(n){Qa(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(dg(t),i!==t.version))return!0}return!1}function Rd(n){if(Qa(n),bo(n))for(let e=0;e<n.producerNode.length;e++)Ka(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function pg(n,e,t){if(mg(n),n.liveConsumerNode.length===0&&gg(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=pg(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function Ka(n,e){if(mg(n),n.liveConsumerNode.length===1&&gg(n))for(let i=0;i<n.producerNode.length;i++)Ka(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];Qa(r),r.producerIndexOfThis[i]=e}}function bo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function Qa(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function mg(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function gg(n){return n.producerNode!==void 0}function tS(){throw new Error}var vg=tS;function nS(n){vg(n)}function Nd(n){vg=n}var iS=null;function Pd(n,e){fg()||nS(n),n.equal(n.value,e)||(n.value=e,rS(n))}var Od=Mt(ve({},Ja),{equal:lg,value:void 0,kind:"signal"});function rS(n){n.version++,ug(),Dd(n),iS?.()}var Ld;function wo(){return Ld}function mi(n){let e=Ld;return Ld=n,e}var ec=Symbol("NotFound");function Re(n){return typeof n=="function"}function us(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var tc=us(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Co(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Nt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Re(i))try{i()}catch(s){e=s instanceof tc?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{yg(s)}catch(o){e=e??[],o instanceof tc?e=[...e,...o.errors]:e.push(o)}}if(e)throw new tc(e)}}add(e){var t;if(e&&e!==this)if(this.closed)yg(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Co(t,e)}remove(e){let{_finalizers:t}=this;t&&Co(t,e),e instanceof n&&e._removeParent(this)}};Nt.EMPTY=(()=>{let n=new Nt;return n.closed=!0,n})();var Fd=Nt.EMPTY;function nc(n){return n instanceof Nt||n&&"closed"in n&&Re(n.remove)&&Re(n.add)&&Re(n.unsubscribe)}function yg(n){Re(n)?n():n.unsubscribe()}var Un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ds={setTimeout(n,e,...t){let{delegate:i}=ds;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ds;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function ic(n){ds.setTimeout(()=>{let{onUnhandledError:e}=Un;if(e)e(n);else throw n})}function To(){}var _g=kd("C",void 0,void 0);function xg(n){return kd("E",void 0,n)}function Mg(n){return kd("N",n,void 0)}function kd(n,e,t){return{kind:n,value:e,error:t}}var vr=null;function fs(n){if(Un.useDeprecatedSynchronousErrorHandling){let e=!vr;if(e&&(vr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=vr;if(vr=null,t)throw i}}else n()}function Sg(n){Un.useDeprecatedSynchronousErrorHandling&&vr&&(vr.errorThrown=!0,vr.error=n)}var yr=class extends Nt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,nc(e)&&e.add(this)):this.destination=pS}static create(e,t,i){return new hs(e,t,i)}next(e){this.isStopped?Bd(Mg(e),this):this._next(e)}error(e){this.isStopped?Bd(xg(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Bd(_g,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},fS=Function.prototype.bind;function Ud(n,e){return fS.call(n,e)}var Vd=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){rc(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){rc(i)}else rc(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){rc(t)}}},hs=class extends yr{constructor(e,t,i){super();let r;if(Re(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Un.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Ud(e.next,s),error:e.error&&Ud(e.error,s),complete:e.complete&&Ud(e.complete,s)}):r=e}this.destination=new Vd(r)}};function rc(n){Un.useDeprecatedSynchronousErrorHandling?Sg(n):ic(n)}function hS(n){throw n}function Bd(n,e){let{onStoppedNotification:t}=Un;t&&ds.setTimeout(()=>t(n,e))}var pS={closed:!0,next:To,error:hS,complete:To};var ps=typeof Symbol=="function"&&Symbol.observable||"@@observable";function pn(n){return n}function Hd(...n){return zd(n)}function zd(n){return n.length===0?pn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var pt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=gS(t)?t:new hs(t,i,r);return fs(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Eg(i),new i((r,s)=>{let o=new hs({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[ps](){return this}pipe(...t){return zd(t)(this)}toPromise(t){return t=Eg(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Eg(n){var e;return(e=n??Un.Promise)!==null&&e!==void 0?e:Promise}function mS(n){return n&&Re(n.next)&&Re(n.error)&&Re(n.complete)}function gS(n){return n&&n instanceof yr||mS(n)&&nc(n)}function Gd(n){return Re(n?.lift)}function Ze(n){return e=>{if(Gd(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Je(n,e,t,i,r){return new Wd(n,e,t,i,r)}var Wd=class extends yr{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function ms(){return Ze((n,e)=>{let t=null;n._refCount++;let i=Je(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var gs=class extends pt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Gd(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Nt;let t=this.getSubject();e.add(this.source.subscribe(Je(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Nt.EMPTY)}return e}refCount(){return ms()(this)}};var bg=us(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Wt=(()=>{class n extends pt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new sc(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new bg}next(t){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){fs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?Fd:(this.currentObservers=null,s.push(t),new Nt(()=>{this.currentObservers=null,Co(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new pt;return t.source=this,t}}return n.create=(e,t)=>new sc(e,t),n})(),sc=class extends Wt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Fd}};var jt=class extends Wt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var an=new pt(n=>n.complete());function wg(n){return n&&Re(n.schedule)}function Cg(n){return n[n.length-1]}function Tg(n){return Re(Cg(n))?n.pop():void 0}function Gi(n){return wg(Cg(n))?n.pop():void 0}function Ag(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Dg(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _r(n){return this instanceof _r?(this.v=n,this):new _r(n)}function Ig(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){s.push([h,y,m,p])>1||c(h,y)})},g&&(r[h]=g(r[h])))}function c(h,g){try{l(i[h](g))}catch(y){f(s[0][3],y)}}function l(h){h.value instanceof _r?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,g){h(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Rg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Dg=="function"?Dg(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var oc=n=>n&&typeof n.length=="number"&&typeof n!="function";function ac(n){return Re(n?.then)}function cc(n){return Re(n[ps])}function lc(n){return Symbol.asyncIterator&&Re(n?.[Symbol.asyncIterator])}function uc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function vS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var dc=vS();function fc(n){return Re(n?.[dc])}function hc(n){return Ig(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield _r(t.read());if(r)return yield _r(void 0);yield yield _r(i)}}finally{t.releaseLock()}})}function pc(n){return Re(n?.getReader)}function Vt(n){if(n instanceof pt)return n;if(n!=null){if(cc(n))return yS(n);if(oc(n))return _S(n);if(ac(n))return xS(n);if(lc(n))return Ng(n);if(fc(n))return MS(n);if(pc(n))return SS(n)}throw uc(n)}function yS(n){return new pt(e=>{let t=n[ps]();if(Re(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function _S(n){return new pt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function xS(n){return new pt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,ic)})}function MS(n){return new pt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Ng(n){return new pt(e=>{ES(n,e).catch(t=>e.error(t))})}function SS(n){return Ng(hc(n))}function ES(n,e){var t,i,r,s;return Ag(this,void 0,void 0,function*(){try{for(t=Rg(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function cn(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function mc(n,e=0){return Ze((t,i)=>{t.subscribe(Je(i,r=>cn(i,n,()=>i.next(r),e),()=>cn(i,n,()=>i.complete(),e),r=>cn(i,n,()=>i.error(r),e)))})}function gc(n,e=0){return Ze((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Pg(n,e){return Vt(n).pipe(gc(e),mc(e))}function Og(n,e){return Vt(n).pipe(gc(e),mc(e))}function Lg(n,e){return new pt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Fg(n,e){return new pt(t=>{let i;return cn(t,e,()=>{i=n[dc](),cn(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Re(i?.return)&&i.return()})}function vc(n,e){if(!n)throw new Error("Iterable cannot be null");return new pt(t=>{cn(t,e,()=>{let i=n[Symbol.asyncIterator]();cn(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function kg(n,e){return vc(hc(n),e)}function Ug(n,e){if(n!=null){if(cc(n))return Pg(n,e);if(oc(n))return Lg(n,e);if(ac(n))return Og(n,e);if(lc(n))return vc(n,e);if(fc(n))return Fg(n,e);if(pc(n))return kg(n,e)}throw uc(n)}function Ft(n,e){return e?Ug(n,e):Vt(n)}function Le(...n){let e=Gi(n);return Ft(n,e)}function vs(n,e){let t=Re(n)?n:()=>n,i=r=>r.error(t());return new pt(e?r=>e.schedule(i,0,r):i)}function jd(n){return!!n&&(n instanceof pt||Re(n.lift)&&Re(n.subscribe))}var gi=us(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function nt(n,e){return Ze((t,i)=>{let r=0;t.subscribe(Je(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:bS}=Array;function wS(n,e){return bS(e)?n(...e):n(e)}function Bg(n){return nt(e=>wS(n,e))}var{isArray:CS}=Array,{getPrototypeOf:TS,prototype:DS,keys:AS}=Object;function Vg(n){if(n.length===1){let e=n[0];if(CS(e))return{args:e,keys:null};if(IS(e)){let t=AS(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function IS(n){return n&&typeof n=="object"&&TS(n)===DS}function Hg(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function yc(...n){let e=Gi(n),t=Tg(n),{args:i,keys:r}=Vg(n);if(i.length===0)return Ft([],e);let s=new pt(RS(i,e,r?o=>Hg(r,o):pn));return t?s.pipe(Bg(t)):s}function RS(n,e,t=pn){return i=>{zg(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)zg(e,()=>{let l=Ft(n[c],e),u=!1;l.subscribe(Je(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function zg(n,e,t){n?cn(t,n,e):e()}function Gg(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let m=!1;Vt(t(y,u++)).subscribe(Je(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let p=c.shift();o?cn(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Je(e,h,()=>{d=!0,f()})),()=>{a?.()}}function kt(n,e,t=1/0){return Re(e)?kt((i,r)=>nt((s,o)=>e(i,s,r,o))(Vt(n(i,r))),t):(typeof e=="number"&&(t=e),Ze((i,r)=>Gg(i,r,n,t)))}function $d(n=1/0){return kt(pn,n)}function Wg(){return $d(1)}function ys(...n){return Wg()(Ft(n,Gi(n)))}function _c(n){return new pt(e=>{Vt(n()).subscribe(e)})}function Bn(n,e){return Ze((t,i)=>{let r=0;t.subscribe(Je(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Wi(n){return Ze((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Je(t,void 0,void 0,o=>{s=Vt(n(o,Wi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function jg(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Je(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function _s(n,e){return Re(e)?kt(n,e,1):kt(n,1)}function ji(n){return Ze((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function vi(n){return n<=0?()=>an:Ze((e,t)=>{let i=0;e.subscribe(Je(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function xc(n=NS){return Ze((e,t)=>{let i=!1;e.subscribe(Je(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function NS(){return new gi}function Do(n){return Ze((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function yi(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Bn((r,s)=>n(r,s,i)):pn,vi(1),t?ji(e):xc(()=>new gi))}function xs(n){return n<=0?()=>an:Ze((e,t)=>{let i=[];e.subscribe(Je(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function qd(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Bn((r,s)=>n(r,s,i)):pn,xs(1),t?ji(e):xc(()=>new gi))}function Xd(n,e){return Ze(jg(n,e,arguments.length>=2,!0))}function Yd(...n){let e=Gi(n);return Ze((t,i)=>{(e?ys(n,t,e):ys(n,t)).subscribe(i)})}function Vn(n,e){return Ze((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Je(i,c=>{r?.unsubscribe();let l=0,u=s++;Vt(n(c,u)).subscribe(r=Je(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Zd(n){return Ze((e,t)=>{Vt(n).subscribe(Je(t,()=>t.complete(),To)),!t.closed&&e.subscribe(t)})}function $t(n,e,t){let i=Re(n)||e||t?{next:n,error:e,complete:t}:n;return i?Ze((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Je(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):pn}var PS="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",we=class extends Error{code;constructor(e,t){super(Zf(e,t)),this.code=e}};function Zf(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var Nv=Symbol("InputSignalNode#UNSET"),OS=Mt(ve({},Od),{transformFn:void 0,applyValueToInputSignal(n,e){Pd(n,e)}});function Pv(n,e){let t=Object.create(OS);t.value=n,t.transformFn=e?.transform;function i(){if(Td(t),t.value===Nv){let r=null;throw new we(-950,r)}return t.value}return i[ls]=t,i}function Jf(n){return{toString:n}.toString()}function vt(n){for(let e in n)if(n[e]===vt)return e;throw Error("Could not find renamed property on target object.")}function ln(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(ln).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function $g(n,e){return n?e?`${n} ${e}`:n:e||""}var LS=vt({__forward_ref__:vt});function Ov(n){return n.__forward_ref__=Ov,n.toString=function(){return ln(this())},n}function Cn(n){return Lv(n)?n():n}function Lv(n){return typeof n=="function"&&n.hasOwnProperty(LS)&&n.__forward_ref__===Ov}function Oe(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Zc(n){return qg(n,kv)||qg(n,Uv)}function Fv(n){return Zc(n)!==null}function qg(n,e){return n.hasOwnProperty(e)?n[e]:null}function FS(n){let e=n&&(n[kv]||n[Uv]);return e||null}function Xg(n){return n&&(n.hasOwnProperty(Yg)||n.hasOwnProperty(kS))?n[Yg]:null}var kv=vt({\u0275prov:vt}),Yg=vt({\u0275inj:vt}),Uv=vt({ngInjectableDef:vt}),kS=vt({ngInjectorDef:vt}),Pe=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Oe({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Bv(n){return n&&!!n.\u0275providers}var US=vt({\u0275cmp:vt}),BS=vt({\u0275dir:vt}),VS=vt({\u0275pipe:vt}),HS=vt({\u0275mod:vt}),Dc=vt({\u0275fac:vt}),No=vt({__NG_ELEMENT_ID__:vt}),Zg=vt({__NG_ENV_ID__:vt});function Vv(n){return typeof n=="string"?n:n==null?"":String(n)}function zS(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():Vv(n)}function Hv(n,e){throw new we(-200,n)}function Kf(n,e){throw new we(-201,!1)}var He=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(He||{}),lf;function zv(){return lf}function wn(n){let e=lf;return lf=n,e}function Gv(n,e,t){let i=Zc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&He.Optional)return null;if(e!==void 0)return e;Kf(n,"Injector")}var GS={},xr=GS,WS="__NG_DI_FLAG__",Ac=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=t;return this.injector.get(e,i.optional?ec:xr,i)}},Ic="ngTempTokenPath",jS="ngTokenPath",$S=/\n/gm,qS="\u0275",Jg="__source";function XS(n,e=He.Default){if(wo()===void 0)throw new we(-203,!1);if(wo()===null)return Gv(n,void 0,e);{let t=wo(),i;return t instanceof Ac?i=t.injector:i=t,i.get(n,e&He.Optional?null:void 0,e)}}function We(n,e=He.Default){return(zv()||XS)(Cn(n),e)}function re(n,e=He.Default){return We(n,Jc(e))}function Jc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function uf(n){let e=[];for(let t=0;t<n.length;t++){let i=Cn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new we(900,!1);let r,s=He.Default;for(let o=0;o<i.length;o++){let a=i[o],c=YS(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(We(r,s))}else e.push(We(i))}return e}function YS(n){return n[WS]}function ZS(n,e,t,i){let r=n[Ic];throw e[Jg]&&r.unshift(e[Jg]),n.message=JS(`
`+n.message,r,t,i),n[jS]=r,n[Ic]=null,n}function JS(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==qS?n.slice(2):n;let r=ln(e);if(Array.isArray(e))r=e.map(ln).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):ln(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace($S,`
  `)}`}function ws(n,e){let t=n.hasOwnProperty(Dc);return t?n[Dc]:null}function KS(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function QS(n){return n.flat(Number.POSITIVE_INFINITY)}function Qf(n,e){n.forEach(t=>Array.isArray(t)?Qf(t,e):e(t))}function Wv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Rc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function eE(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function tE(n,e,t){let i=Ho(n,e);return i>=0?n[i|1]=t:(i=~i,eE(n,i,e,t)),i}function Jd(n,e){let t=Ho(n,e);if(t>=0)return n[t|1]}function Ho(n,e){return nE(n,e,1)}function nE(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var Cs={},Er=[],Ts=new Pe(""),jv=new Pe("",-1),$v=new Pe(""),Nc=class{get(e,t=xr){if(t===xr){let i=new Error(`NullInjectorError: No provider for ${ln(e)}!`);throw i.name="NullInjectorError",i}return t}};function qv(n,e){let t=n[HS]||null;if(!t&&e===!0)throw new Error(`Type ${ln(n)} does not have '\u0275mod' property.`);return t}function Ds(n){return n[US]||null}function iE(n){return n[BS]||null}function rE(n){return n[VS]||null}function Kc(n){return{\u0275providers:n}}function sE(...n){return{\u0275providers:Xv(!0,n),\u0275fromNgModule:!0}}function Xv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return Qf(e,o=>{let a=o;df(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Yv(r,s),t}function Yv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];eh(r,s=>{e(s,i)})}}function df(n,e,t,i){if(n=Cn(n),!n)return!1;let r=null,s=Xg(n),o=!s&&Ds(n);if(!s&&!o){let c=n.ngModule;if(s=Xg(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)df(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{Qf(s.imports,u=>{df(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Yv(l,e)}if(!a){let l=ws(r)||(()=>new r);e({provide:r,useFactory:l,deps:Er},r),e({provide:$v,useValue:r,multi:!0},r),e({provide:Ts,useValue:()=>We(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;eh(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function eh(n,e){for(let t of n)Bv(t)&&(t=t.\u0275providers),Array.isArray(t)?eh(t,e):e(t)}var oE=vt({provide:String,useValue:vt});function Zv(n){return n!==null&&typeof n=="object"&&oE in n}function aE(n){return!!(n&&n.useExisting)}function cE(n){return!!(n&&n.useFactory)}function ff(n){return typeof n=="function"}var Qc=new Pe(""),Sc={},Kg={},Kd;function th(){return Kd===void 0&&(Kd=new Nc),Kd}var Dn=class{},Po=class extends Dn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,pf(e,o=>this.processProvider(o)),this.records.set(jv,Ms(void 0,this)),r.has("environment")&&this.records.set(Dn,Ms(void 0,this));let s=this.records.get(Qc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get($v,Er,He.Self))}retrieve(e,t){let i=t;return this.get(e,i.optional?ec:xr,i)}destroy(){Io(this),this._destroyed=!0;let e=tt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),tt(e)}}onDestroy(e){return Io(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Io(this);let t=mi(this),i=wn(void 0),r;try{return e()}finally{mi(t),wn(i)}}get(e,t=xr,i=He.Default){if(Io(this),e.hasOwnProperty(Zg))return e[Zg](this);i=Jc(i);let r,s=mi(this),o=wn(void 0);try{if(!(i&He.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=pE(e)&&Zc(e);l&&this.injectableDefInScope(l)?c=Ms(hf(e),Sc):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&He.Self?th():this.parent;return t=i&He.Optional&&t===xr?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Ic]=a[Ic]||[]).unshift(ln(e)),s)throw a;return ZS(a,e,"R3InjectorError",this.source)}else throw a}finally{wn(o),mi(s)}}resolveInjectorInitializers(){let e=tt(null),t=mi(this),i=wn(void 0),r;try{let s=this.get(Ts,Er,He.Self);for(let o of s)o()}finally{mi(t),wn(i),tt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(ln(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=Cn(e);let t=ff(e)?e:Cn(e&&e.provide),i=uE(e);if(!ff(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ms(void 0,Sc,!0),r.factory=()=>uf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=tt(null);try{return t.value===Kg?Hv(ln(e)):t.value===Sc&&(t.value=Kg,t.value=t.factory()),typeof t.value=="object"&&t.value&&hE(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{tt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=Cn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function hf(n){let e=Zc(n),t=e!==null?e.factory:ws(n);if(t!==null)return t;if(n instanceof Pe)throw new we(204,!1);if(n instanceof Function)return lE(n);throw new we(204,!1)}function lE(n){if(n.length>0)throw new we(204,!1);let t=FS(n);return t!==null?()=>t.factory(n):()=>new n}function uE(n){if(Zv(n))return Ms(void 0,n.useValue);{let e=dE(n);return Ms(e,Sc)}}function dE(n,e,t){let i;if(ff(n)){let r=Cn(n);return ws(r)||hf(r)}else if(Zv(n))i=()=>Cn(n.useValue);else if(cE(n))i=()=>n.useFactory(...uf(n.deps||[]));else if(aE(n))i=()=>We(Cn(n.useExisting));else{let r=Cn(n&&(n.useClass||n.provide));if(fE(n))i=()=>new r(...uf(n.deps));else return ws(r)||hf(r)}return i}function Io(n){if(n.destroyed)throw new we(205,!1)}function Ms(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function fE(n){return!!n.deps}function hE(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function pE(n){return typeof n=="function"||typeof n=="object"&&n instanceof Pe}function pf(n,e){for(let t of n)Array.isArray(t)?pf(t,e):t&&Bv(t)?pf(t.\u0275providers,e):e(t)}function Gn(n,e){let t;n instanceof Po?(Io(n),t=n):t=new Ac(n);let i,r=mi(t),s=wn(void 0);try{return e()}finally{mi(r),wn(s)}}function mE(){return zv()!==void 0||wo()!=null}function gE(n){return typeof n=="function"}var bi=0,Ge=1,Ne=2,Zt=3,zn=4,Wn=5,Pc=6,Oc=7,An=8,As=9,qi=10,rn=11,Oo=12,Qg=13,zo=14,Qn=15,br=16,Ss=17,_i=18,el=19,Jv=20,$i=21,Qd=22,Lc=23,Tn=24,ef=25,xi=26,Kv=1;var wr=7,Fc=8,Is=9,gn=10;function Mr(n){return Array.isArray(n)&&typeof n[Kv]=="object"}function wi(n){return Array.isArray(n)&&n[Kv]===!0}function Qv(n){return(n.flags&4)!==0}function Os(n){return n.componentOffset>-1}function nh(n){return(n.flags&1)===1}function Ar(n){return!!n.template}function kc(n){return(n[Ne]&512)!==0}function Go(n){return(n[Ne]&256)===256}var mf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function ey(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var ih=(()=>{let n=()=>ty;return n.ngInherit=!0,n})();function ty(n){return n.type.prototype.ngOnChanges&&(n.setInput=yE),vE}function vE(){let n=iy(this),e=n?.current;if(e){let t=n.previous;if(t===Cs)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function yE(n,e,t,i,r){let s=this.declaredInputs[i],o=iy(n)||_E(n,{previous:Cs,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new mf(l&&l.currentValue,t,c===Cs),ey(n,e,r,t)}var ny="__ngSimpleChanges__";function iy(n){return n[ny]||null}function _E(n,e){return n[ny]=e}var ev=null;var _t=function(n,e=null,t){ev?.(n,e,t)},xE="svg",ME="math";function ei(n){for(;Array.isArray(n);)n=n[bi];return n}function ry(n,e){return ei(e[n])}function Ci(n,e){return ei(e[n.index])}function sy(n,e){return n.data[e]}function Mi(n,e){let t=e[n];return Mr(t)?t:t[bi]}function SE(n){return(n[Ne]&4)===4}function rh(n){return(n[Ne]&128)===128}function EE(n){return wi(n[Zt])}function Uc(n,e){return e==null?null:n[e]}function oy(n){n[Ss]=0}function ay(n){n[Ne]&1024||(n[Ne]|=1024,rh(n)&&nl(n))}function tl(n){return!!(n[Ne]&9216||n[Tn]?.dirty)}function gf(n){n[qi].changeDetectionScheduler?.notify(8),n[Ne]&64&&(n[Ne]|=1024),tl(n)&&nl(n)}function nl(n){n[qi].changeDetectionScheduler?.notify(0);let e=Cr(n);for(;e!==null&&!(e[Ne]&8192||(e[Ne]|=8192,!rh(e)));)e=Cr(e)}function cy(n,e){if(Go(n))throw new we(911,!1);n[$i]===null&&(n[$i]=[]),n[$i].push(e)}function bE(n,e){if(n[$i]===null)return;let t=n[$i].indexOf(e);t!==-1&&n[$i].splice(t,1)}function Cr(n){let e=n[Zt];return wi(e)?e[Zt]:e}function ly(n){return n[Oc]??=[]}function uy(n){return n.cleanup??=[]}function wE(n,e,t,i){let r=ly(e);r.push(t),n.firstCreatePass&&uy(n).push(i,r.length-1)}var it={lFrame:_y(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var vf=!1;function CE(){return it.lFrame.elementDepthCount}function TE(){it.lFrame.elementDepthCount++}function DE(){it.lFrame.elementDepthCount--}function dy(){return it.bindingsEnabled}function AE(){return it.skipHydrationRootTNode!==null}function IE(n){return it.skipHydrationRootTNode===n}function RE(){it.skipHydrationRootTNode=null}function Pt(){return it.lFrame.lView}function ii(){return it.lFrame.tView}function Ti(){let n=fy();for(;n!==null&&n.type===64;)n=n.parent;return n}function fy(){return it.lFrame.currentTNode}function NE(){let n=it.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Wo(n,e){let t=it.lFrame;t.currentTNode=n,t.isParent=e}function hy(){return it.lFrame.isParent}function PE(){it.lFrame.isParent=!1}function py(){return vf}function tv(n){let e=vf;return vf=n,e}function OE(n){return it.lFrame.bindingIndex=n}function my(){return it.lFrame.bindingIndex++}function LE(n){let e=it.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function FE(){return it.lFrame.inI18n}function kE(n,e){let t=it.lFrame;t.bindingIndex=t.bindingRootIndex=n,yf(e)}function UE(){return it.lFrame.currentDirectiveIndex}function yf(n){it.lFrame.currentDirectiveIndex=n}function BE(n){let e=it.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function gy(){return it.lFrame.currentQueryIndex}function sh(n){it.lFrame.currentQueryIndex=n}function VE(n){let e=n[Ge];return e.type===2?e.declTNode:e.type===1?n[Wn]:null}function vy(n,e,t){if(t&He.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&He.Host);)if(r=VE(s),r===null||(s=s[zo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=it.lFrame=yy();return i.currentTNode=e,i.lView=n,!0}function oh(n){let e=yy(),t=n[Ge];it.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function yy(){let n=it.lFrame,e=n===null?null:n.child;return e===null?_y(n):e}function _y(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function xy(){let n=it.lFrame;return it.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var My=xy;function ah(){let n=xy();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Ls(){return it.lFrame.selectedIndex}function Tr(n){it.lFrame.selectedIndex=n}function HE(){let n=it.lFrame;return sy(n.tView,n.selectedIndex)}function zE(){return it.lFrame.currentNamespace}var Sy=!0;function ch(){return Sy}function lh(n){Sy=n}function GE(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=ty(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Ey(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Ec(n,e,t){by(n,e,3,t)}function bc(n,e,t,i){(n[Ne]&3)===t&&by(n,e,t,i)}function tf(n,e){let t=n[Ne];(t&3)===e&&(t&=16383,t+=1,n[Ne]=t)}function by(n,e,t,i){let r=i!==void 0?n[Ss]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Ss]+=65536),(a<s||s==-1)&&(WE(n,t,e,c),n[Ss]=(n[Ss]&4294901760)+c+2),c++}function nv(n,e){_t(4,n,e);let t=tt(null);try{e.call(n)}finally{tt(t),_t(5,n,e)}}function WE(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ne]>>14<n[Ss]>>16&&(n[Ne]&3)===e&&(n[Ne]+=16384,nv(a,s)):nv(a,s)}var bs=-1,Lo=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function jE(n){return(n.flags&8)!==0}function $E(n){return(n.flags&16)!==0}function qE(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];YE(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function XE(n){return n===3||n===4||n===6}function YE(n){return n.charCodeAt(0)===64}function uh(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?iv(n,t,r,null,e[++i]):iv(n,t,r,null,null))}}return n}function iv(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}var nf={},_f=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Jc(i);let r=this.injector.get(e,nf,i);return r!==nf||t===nf?r:this.parentInjector.get(e,t,i)}};function wy(n){return n!==bs}function Bc(n){return n&32767}function ZE(n){return n>>16}function Vc(n,e){let t=ZE(n),i=e;for(;t>0;)i=i[zo],t--;return i}var xf=!0;function rv(n){let e=xf;return xf=n,e}var JE=256,Cy=JE-1,Ty=5,KE=0,Kn={};function QE(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(No)&&(i=t[No]),i==null&&(i=t[No]=KE++);let r=i&Cy,s=1<<r;e.data[n+(r>>Ty)]|=s}function Dy(n,e){let t=Ay(n,e);if(t!==-1)return t;let i=e[Ge];i.firstCreatePass&&(n.injectorIndex=e.length,rf(i.data,n),rf(e,null),rf(i.blueprint,null));let r=dh(n,e),s=n.injectorIndex;if(wy(r)){let o=Bc(r),a=Vc(r,e),c=a[Ge].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function rf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Ay(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function dh(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Oy(r),i===null)return bs;if(t++,r=r[zo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return bs}function eb(n,e,t){QE(n,e,t)}function Iy(n,e,t){if(t&He.Optional||n!==void 0)return n;Kf(e,"NodeInjector")}function Ry(n,e,t,i){if(t&He.Optional&&i===void 0&&(i=null),(t&(He.Self|He.Host))===0){let r=n[As],s=wn(void 0);try{return r?r.get(e,i,t&He.Optional):Gv(e,i,t&He.Optional)}finally{wn(s)}}return Iy(i,e,t)}function Ny(n,e,t,i=He.Default,r){if(n!==null){if(e[Ne]&2048&&!(i&He.Self)){let o=rb(n,e,t,i,Kn);if(o!==Kn)return o}let s=Py(n,e,t,i,Kn);if(s!==Kn)return s}return Ry(e,t,i,r)}function Py(n,e,t,i,r){let s=nb(t);if(typeof s=="function"){if(!vy(e,n,i))return i&He.Host?Iy(r,t,i):Ry(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&He.Optional))Kf(t);else return o}finally{My()}}else if(typeof s=="number"){let o=null,a=Ay(n,e),c=bs,l=i&He.Host?e[Qn][Wn]:null;for((a===-1||i&He.SkipSelf)&&(c=a===-1?dh(n,e):e[a+8],c===bs||!ov(i,!1)?a=-1:(o=e[Ge],a=Bc(c),e=Vc(c,e)));a!==-1;){let u=e[Ge];if(sv(s,a,u.data)){let d=tb(a,e,t,o,i,l);if(d!==Kn)return d}c=e[a+8],c!==bs&&ov(i,e[Ge].data[a+8]===l)&&sv(s,a,e)?(o=u,a=Bc(c),e=Vc(c,e)):a=-1}}return r}function tb(n,e,t,i,r,s){let o=e[Ge],a=o.data[n+8],c=i==null?Os(a)&&xf:i!=o&&(a.type&3)!==0,l=r&He.Host&&s===a,u=wc(a,o,t,c,l);return u!==null?Hc(e,o,u,a):Kn}function wc(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let g=o[h];if(h<c&&t===g||h>=c&&g.type===t)return h}if(r){let h=o[c];if(h&&Ar(h)&&h.type===t)return c}return null}function Hc(n,e,t,i){let r=n[t],s=e.data;if(r instanceof Lo){let o=r;o.resolving&&Hv(zS(s[t]));let a=rv(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?wn(o.injectImpl):null,u=vy(n,i,He.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&GE(t,s[t],e)}finally{l!==null&&wn(l),rv(a),o.resolving=!1,My()}}return r}function nb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(No)?n[No]:void 0;return typeof e=="number"?e>=0?e&Cy:ib:e}function sv(n,e,t){let i=1<<n;return!!(t[e+(n>>Ty)]&i)}function ov(n,e){return!(n&He.Self)&&!(n&He.Host&&e)}var Sr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Ny(this._tNode,this._lView,e,Jc(i),t)}};function ib(){return new Sr(Ti(),Pt())}function fh(n){return Jf(()=>{let e=n.prototype.constructor,t=e[Dc]||Mf(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Dc]||Mf(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Mf(n){return Lv(n)?()=>{let e=Mf(Cn(n));return e&&e()}:ws(n)}function rb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ne]&2048&&!kc(o);){let a=Py(s,o,t,i|He.Self,Kn);if(a!==Kn)return a;let c=s.parent;if(!c){let l=o[Jv];if(l){let u=l.get(t,Kn,i);if(u!==Kn)return u}c=Oy(o),o=o[zo]}s=c}return r}function Oy(n){let e=n[Ge],t=e.type;return t===2?e.declTNode:t===1?n[Wn]:null}function av(n,e=null,t=null,i){let r=Ly(n,e,t,i);return r.resolveInjectorInitializers(),r}function Ly(n,e=null,t=null,i,r=new Set){let s=[t||Er,sE(n)];return i=i||(typeof n=="object"?void 0:ln(n)),new Po(s,e||th(),i||null,r)}var ti=class n{static THROW_IF_NOT_FOUND=xr;static NULL=new Nc;static create(e,t){if(Array.isArray(e))return av({name:""},t,e,"");{let i=e.name??"";return av({name:i},e.parent,e.providers,i)}}static \u0275prov=Oe({token:n,providedIn:"any",factory:()=>We(jv)});static __NG_ELEMENT_ID__=-1};var sb=new Pe("");sb.__NG_ELEMENT_ID__=n=>{let e=Ti();if(e===null)throw new we(204,!1);if(e.type&2)return e.value;if(n&He.Optional)return null;throw new we(204,!1)};var Fy=!1,il=(()=>{class n{static __NG_ELEMENT_ID__=ob;static __NG_ENV_ID__=t=>t}return n})(),Sf=class extends il{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return cy(this._lView,e),()=>bE(this._lView,e)}};function ob(){return new Sf(Pt())}var Fo=class{},rl=new Pe("",{providedIn:"root",factory:()=>!1});var ky=new Pe(""),Uy=new Pe(""),Fs=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new jt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>new n})}return n})();var Ef=class extends Wt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,mE()&&(this.destroyRef=re(il,{optional:!0})??void 0,this.pendingTasks=re(Fs,{optional:!0})??void 0)}emit(e){let t=tt(null);try{super.next(e)}finally{tt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Nt&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},mn=Ef;function zc(...n){}function By(n){let e,t;function i(){n=zc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function cv(n){return queueMicrotask(()=>n()),()=>{n=zc}}var hh="isAngularZone",Gc=hh+"_ID",ab=0,qt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new mn(!1);onMicrotaskEmpty=new mn(!1);onStable=new mn(!1);onError=new mn(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Fy}=e;if(typeof Zone>"u")throw new we(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,ub(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(hh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new we(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new we(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,cb,zc,zc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},cb={};function ph(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function lb(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){By(()=>{n.callbackScheduled=!1,bf(n),n.isCheckStableRunning=!0,ph(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),bf(n)}function ub(n){let e=()=>{lb(n)},t=ab++;n._inner=n._inner.fork({name:"angular",properties:{[hh]:!0,[Gc]:t,[Gc+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(db(c))return i.invokeTask(s,o,a,c);try{return lv(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),uv(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return lv(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!fb(c)&&e(),uv(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,bf(n),ph(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function bf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function lv(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function uv(n){n._nesting--,ph(n)}var wf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new mn;onMicrotaskEmpty=new mn;onStable=new mn;onError=new mn;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function db(n){return Vy(n,"__ignore_ng_zone__")}function fb(n){return Vy(n,"__scheduler_tick__")}function Vy(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Si=class{_console=console;handleError(e){this._console.error("ERROR",e)}},hb=new Pe("",{providedIn:"root",factory:()=>{let n=re(qt),e=re(Si);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function dv(n,e){return Pv(n,e)}function pb(n){return Pv(Nv,n)}var Hy=(dv.required=pb,dv);function mb(){return ks(Ti(),Pt())}function ks(n,e){return new Ir(Ci(n,e))}var Ir=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=mb}return n})();function gb(n){return n instanceof Ir?n.nativeElement:n}function vb(){return this._results[Symbol.iterator]()}var Cf=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Wt}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=QS(e);(this._changesDetected=!KS(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=vb};function zy(n){return(n.flags&128)===128}var Gy=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Gy||{}),Wy=new Map,yb=0;function _b(){return yb++}function xb(n){Wy.set(n[el],n)}function Tf(n){Wy.delete(n[el])}var fv="__ngContext__";function jo(n,e){Mr(e)?(n[fv]=e[el],xb(e)):n[fv]=e}function jy(n){return qy(n[Oo])}function $y(n){return qy(n[zn])}function qy(n){for(;n!==null&&!wi(n);)n=n[zn];return n}var Df;function Xy(n){Df=n}function Mb(){if(Df!==void 0)return Df;if(typeof document<"u")return document;throw new we(210,!1)}var mh=new Pe("",{providedIn:"root",factory:()=>Sb}),Sb="ng",gh=new Pe(""),$o=new Pe("",{providedIn:"platform",factory:()=>"unknown"});var vh=new Pe("",{providedIn:"root",factory:()=>Mb().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Eb="h",bb="b";var Yy=!1,wb=new Pe("",{providedIn:"root",factory:()=>Yy});var Zy=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(Zy||{}),sl=new Pe(""),hv=new Set;function yh(n){hv.has(n)||(hv.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Cb=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>new n})}return n})();var Tb=()=>null;function Jy(n,e,t=!1){return Tb(n,e,t)}function Ky(n,e){let t=n.contentQueries;if(t!==null){let i=tt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];sh(s),a.contentQueries(2,e[o],o)}}}finally{tt(i)}}}function Af(n,e,t){sh(0);let i=tt(null);try{e(n,t)}finally{tt(i)}}function Qy(n,e,t){if(Qv(e)){let i=tt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{tt(i)}}}var ni=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ni||{});var If=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${PS})`}};function _h(n){return n instanceof If?n.changingThisBreaksApplicationSecurity:n}function e_(n){return n.ownerDocument}function t_(n){return n instanceof Function?n():n}function Db(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var n_="ng-template";function Ab(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Db(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(xh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function xh(n){return n.type===4&&n.value!==n_}function Ib(n,e,t){let i=n.type===4&&!t?n_:n.value;return e===i}function Rb(n,e,t){let i=4,r=n.attrs,s=r!==null?Ob(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!Hn(i)&&!Hn(c))return!1;if(o&&Hn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!Ib(n,c,t)||c===""&&e.length===1){if(Hn(i))return!1;o=!0}}else if(i&8){if(r===null||!Ab(n,r,c,t)){if(Hn(i))return!1;o=!0}}else{let l=e[++a],u=Nb(c,r,xh(n),t);if(u===-1){if(Hn(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(Hn(i))return!1;o=!0}}}}return Hn(i)||o}function Hn(n){return(n&1)===0}function Nb(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return Lb(e,n)}function Pb(n,e,t=!1){for(let i=0;i<e.length;i++)if(Rb(n,e[i],t))return!0;return!1}function Ob(n){for(let e=0;e<n.length;e++){let t=n[e];if(XE(t))return e}return n.length}function Lb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function pv(n,e){return n?":not("+e.trim()+")":e}function Fb(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!Hn(o)&&(e+=pv(s,r),r=""),i=o,s=s||!Hn(i);t++}return r!==""&&(e+=pv(s,r)),e}function kb(n){return n.map(Fb).join(",")}function Ub(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!Hn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Us={};function Bb(n,e){return n.createText(e)}function Vb(n,e,t){n.setValue(e,t)}function i_(n,e,t){return n.createElement(e,t)}function Wc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function r_(n,e,t){n.appendChild(e,t)}function mv(n,e,t,i,r){i!==null?Wc(n,e,t,i,r):r_(n,e,t)}function Hb(n,e,t){n.removeChild(null,e,t)}function zb(n,e,t){n.setAttribute(e,"style",t)}function Gb(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function s_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&qE(n,e,i),r!==null&&Gb(n,e,r),s!==null&&zb(n,e,s)}function Mh(n,e,t,i,r,s,o,a,c,l,u){let d=xi+i,f=d+r,h=Wb(d,f),g=typeof l=="function"?l():l;return h[Ge]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function Wb(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Us);return t}function jb(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Mh(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function Sh(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[bi]=r,d[Ne]=i|4|128|8|64|1024,(l!==null||n&&n[Ne]&2048)&&(d[Ne]|=2048),oy(d),d[Zt]=d[zo]=n,d[An]=t,d[qi]=o||n&&n[qi],d[rn]=a||n&&n[rn],d[As]=c||n&&n[As]||null,d[Wn]=s,d[el]=_b(),d[Pc]=u,d[Jv]=l,d[Qn]=e.type==2?n[Qn]:d,d}function $b(n,e,t){let i=Ci(e,n),r=jb(t),s=n[qi].rendererFactory,o=Eh(n,Sh(n,r,null,o_(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function o_(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function a_(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function Eh(n,e){return n[Oo]?n[Qg][zn]=e:n[Oo]=e,n[Qg]=e,e}function Rr(n=1){c_(ii(),Pt(),Ls()+n,!1)}function c_(n,e,t,i){if(!i)if((e[Ne]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Ec(e,s,t)}else{let s=n.preOrderHooks;s!==null&&bc(e,s,0,t)}Tr(t)}var ol=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(ol||{});function Rf(n,e,t,i){let r=tt(null);try{let[s,o,a]=n.inputs[t],c=null;(o&ol.SignalBased)!==0&&(c=e[s][ls]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):ey(e,c,s,i)}finally{tt(r)}}function l_(n,e,t,i,r){let s=Ls(),o=i&2;try{Tr(-1),o&&e.length>xi&&c_(n,e,xi,!1),_t(o?2:0,r),t(i,r)}finally{Tr(s),_t(o?3:1,r)}}function bh(n,e,t){Qb(n,e,t),(t.flags&64)===64&&ew(n,e,t)}function u_(n,e,t=Ci){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function qb(n,e,t,i){let s=i.get(wb,Yy)||t===ni.ShadowDom,o=n.selectRootElement(e,s);return Xb(o),o}function Xb(n){Yb(n)}var Yb=()=>null;function Zb(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Jb(n,e,t,i,r,s,o,a){if(!a&&wh(e,n,t,i,r)){Os(e)&&Kb(t,e.index);return}if(e.type&3){let c=Ci(e,t);i=Zb(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(c,i,r)}else e.type&12}function Kb(n,e){let t=Mi(e,n);t[Ne]&16||(t[Ne]|=64)}function Qb(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Os(t)&&$b(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||Dy(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Hc(e,n,o,t);if(jo(c,e),s!==null&&nw(e,o-i,c,a,t,s),Ar(a)){let l=Mi(t.index,e);l[An]=Hc(e,n,o,t)}}}function ew(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=UE();try{Tr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];yf(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&tw(c,l)}}finally{Tr(-1),yf(o)}}function tw(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function d_(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];Pb(e,s.selectors,!1)&&(i??=[],Ar(s)?i.unshift(s):i.push(s))}return i}function nw(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Rf(i,t,c,l)}}function iw(n,e){let t=n[As],i=t?t.get(Si,null):null;i&&i.handleError(e)}function wh(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Rf(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Rf(u,l,i,r),a=!0}return a}function rw(n,e){let t=Mi(e,n),i=t[Ge];sw(i,t);let r=t[bi];r!==null&&t[Pc]===null&&(t[Pc]=Jy(r,t[As])),_t(18),Ch(i,t,t[An]),_t(19,t[An])}function sw(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Ch(n,e,t){oh(e);try{let i=n.viewQuery;i!==null&&Af(1,i,t);let r=n.template;r!==null&&l_(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[_i]?.finishViewCreation(n),n.staticContentQueries&&Ky(n,e),n.staticViewQueries&&Af(2,n.viewQuery,t);let s=n.components;s!==null&&ow(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ne]&=-5,ah()}}function ow(n,e){for(let t=0;t<e.length;t++)rw(n,e[t])}function aw(n,e,t,i){let r=tt(null);try{let s=e.tView,a=n[Ne]&4096?4096:16,c=Sh(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[br]=l;let u=n[_i];return u!==null&&(c[_i]=u.createEmbeddedView(s)),Ch(s,c,t),c}finally{tt(r)}}function gv(n,e){return!e||e.firstChild===null||zy(n)}var cw;function Th(n,e){return cw(n,e)}var Ei=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(Ei||{});function f_(n){return(n.flags&32)===32}function Es(n,e,t,i,r){if(i!=null){let s,o=!1;wi(i)?s=i:Mr(i)&&(o=!0,i=i[bi]);let a=ei(i);n===0&&t!==null?r==null?r_(e,t,a):Wc(e,t,a,r||null,!0):n===1&&t!==null?Wc(e,t,a,r||null,!0):n===2?Hb(e,a,o):n===3&&e.destroyNode(a),s!=null&&xw(e,n,s,t,r)}}function lw(n,e){h_(n,e),e[bi]=null,e[Wn]=null}function uw(n,e,t,i,r,s){i[bi]=r,i[Wn]=e,al(n,i,t,1,r,s)}function h_(n,e){e[qi].changeDetectionScheduler?.notify(9),al(n,e,e[rn],2,null,null)}function dw(n){let e=n[Oo];if(!e)return sf(n[Ge],n);for(;e;){let t=null;if(Mr(e))t=e[Oo];else{let i=e[gn];i&&(t=i)}if(!t){for(;e&&!e[zn]&&e!==n;)Mr(e)&&sf(e[Ge],e),e=e[Zt];e===null&&(e=n),Mr(e)&&sf(e[Ge],e),t=e&&e[zn]}e=t}}function Dh(n,e){let t=n[Is],i=t.indexOf(e);t.splice(i,1)}function p_(n,e){if(Go(e))return;let t=e[rn];t.destroyNode&&al(n,e,t,3,null,null),dw(e)}function sf(n,e){if(Go(e))return;let t=tt(null);try{e[Ne]&=-129,e[Ne]|=256,e[Tn]&&Rd(e[Tn]),hw(n,e),fw(n,e),e[Ge].type===1&&e[rn].destroy();let i=e[br];if(i!==null&&wi(e[Zt])){i!==e[Zt]&&Dh(i,e);let r=e[_i];r!==null&&r.detachView(n)}Tf(e)}finally{tt(t)}}function fw(n,e){let t=n.cleanup,i=e[Oc];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[Oc]=null);let r=e[$i];if(r!==null){e[$i]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Lc];if(s!==null){e[Lc]=null;for(let o of s)o.destroy()}}function hw(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Lo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];_t(4,a,c);try{c.call(a)}finally{_t(5,a,c)}}else{_t(4,r,s);try{s.call(r)}finally{_t(5,r,s)}}}}}function pw(n,e,t){return mw(n,e.parent,t)}function mw(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[bi];if(Os(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ni.None||r===ni.Emulated)return null}return Ci(i,t)}function gw(n,e,t){return yw(n,e,t)}function vw(n,e,t){return n.type&40?Ci(n,t):null}var yw=vw,vv;function Ah(n,e,t,i){let r=pw(n,i,e),s=e[rn],o=i.parent||e[Wn],a=gw(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)mv(s,r,t[c],a,!1);else mv(s,r,t,a,!1);vv!==void 0&&vv(s,i,e,t,r)}function Ro(n,e){if(e!==null){let t=e.type;if(t&3)return Ci(e,n);if(t&4)return Nf(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ro(n,i);{let r=n[e.index];return wi(r)?Nf(-1,r):ei(r)}}else{if(t&128)return Ro(n,e.next);if(t&32)return Th(e,n)()||ei(n[e.index]);{let i=m_(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Cr(n[Qn]);return Ro(r,i)}else return Ro(n,e.next)}}}return null}function m_(n,e){if(e!==null){let i=n[Qn][Wn],r=e.projection;return i.projection[r]}return null}function Nf(n,e){let t=gn+n+1;if(t<e.length){let i=e[t],r=i[Ge].firstChild;if(r!==null)return Ro(i,r)}return e[wr]}function Ih(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],c=t.type;if(o&&e===0&&(a&&jo(ei(a),i),t.flags|=2),!f_(t))if(c&8)Ih(n,e,t.child,i,r,s,!1),Es(e,n,r,a,s);else if(c&32){let l=Th(t,i),u;for(;u=l();)Es(e,n,r,u,s);Es(e,n,r,a,s)}else c&16?_w(n,e,i,t,r,s):Es(e,n,r,a,s);t=o?t.projectionNext:t.next}}function al(n,e,t,i,r,s){Ih(t,i,n.firstChild,e,r,s,!1)}function _w(n,e,t,i,r,s){let o=t[Qn],c=o[Wn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Es(e,n,r,u,s)}else{let l=c,u=o[Zt];zy(i)&&(l.flags|=128),Ih(n,e,l,u,r,s,!0)}}function xw(n,e,t,i,r){let s=t[wr],o=ei(t);s!==o&&Es(e,n,i,s,r);for(let a=gn;a<t.length;a++){let c=t[a];al(c[Ge],c,n,e,i,s)}}function Mw(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Ei.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Ei.Important),n.setStyle(t,i,r,s))}}function jc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(ei(s)),wi(s)&&Sw(s,i);let o=t.type;if(o&8)jc(n,e,t.child,i);else if(o&32){let a=Th(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=m_(e,t);if(Array.isArray(a))i.push(...a);else{let c=Cr(e[Qn]);jc(c[Ge],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Sw(n,e){for(let t=gn;t<n.length;t++){let i=n[t],r=i[Ge].firstChild;r!==null&&jc(i[Ge],i,r,e)}n[wr]!==n[bi]&&e.push(n[wr])}function g_(n){if(n[ef]!==null){for(let e of n[ef])e.impl.addSequence(e);n[ef].length=0}}var v_=[];function Ew(n){return n[Tn]??bw(n)}function bw(n){let e=v_.pop()??Object.create(Cw);return e.lView=n,e}function ww(n){n.lView[Tn]!==n&&(n.lView=null,v_.push(n))}var Cw=Mt(ve({},Ja),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{nl(n.lView)},consumerOnSignalRead(){this.lView[Tn]=this}});function Tw(n){let e=n[Tn]??Object.create(Dw);return e.lView=n,e}var Dw=Mt(ve({},Ja),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Cr(n.lView);for(;e&&!y_(e[Ge]);)e=Cr(e);e&&ay(e)},consumerOnSignalRead(){this.lView[Tn]=this}});function y_(n){return n.type!==2}function __(n){if(n[Lc]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Lc])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Ne]&8192)}}var Aw=100;function x_(n,e=!0,t=0){let r=n[qi].rendererFactory,s=!1;s||r.begin?.();try{Iw(n,t)}catch(o){throw e&&iw(n,o),o}finally{s||r.end?.()}}function Iw(n,e){let t=py();try{tv(!0),Pf(n,e);let i=0;for(;tl(n);){if(i===Aw)throw new we(103,!1);i++,Pf(n,1)}}finally{tv(t)}}function Rw(n,e,t,i){if(Go(e))return;let r=e[Ne],s=!1,o=!1;oh(e);let a=!0,c=null,l=null;s||(y_(n)?(l=Ew(e),c=Ad(l)):Cd()===null?(a=!1,l=Tw(e),c=Ad(l)):e[Tn]&&(Rd(e[Tn]),e[Tn]=null));try{oy(e),OE(n.bindingStartIndex),t!==null&&l_(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Ec(e,h,null)}else{let h=n.preOrderHooks;h!==null&&bc(e,h,0,null),tf(e,0)}if(o||Nw(e),__(e),M_(e,0),n.contentQueries!==null&&Ky(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Ec(e,h)}else{let h=n.contentHooks;h!==null&&bc(e,h,1),tf(e,1)}Ow(n,e);let d=n.components;d!==null&&E_(e,d,0);let f=n.viewQuery;if(f!==null&&Af(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Ec(e,h)}else{let h=n.viewHooks;h!==null&&bc(e,h,2),tf(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Qd]){for(let h of e[Qd])h();e[Qd]=null}s||(g_(e),e[Ne]&=-73)}catch(u){throw s||nl(e),u}finally{l!==null&&(hg(l,c),a&&ww(l)),ah()}}function M_(n,e){for(let t=jy(n);t!==null;t=$y(t))for(let i=gn;i<t.length;i++){let r=t[i];S_(r,e)}}function Nw(n){for(let e=jy(n);e!==null;e=$y(e)){if(!(e[Ne]&2))continue;let t=e[Is];for(let i=0;i<t.length;i++){let r=t[i];ay(r)}}}function Pw(n,e,t){_t(18);let i=Mi(e,n);S_(i,t),_t(19,i[An])}function S_(n,e){rh(n)&&Pf(n,e)}function Pf(n,e){let i=n[Ge],r=n[Ne],s=n[Tn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Id(s)),o||=!1,s&&(s.dirty=!1),n[Ne]&=-9217,o)Rw(i,n,i.template,n[An]);else if(r&8192){__(n),M_(n,1);let a=i.components;a!==null&&E_(n,a,1),g_(n)}}function E_(n,e,t){for(let i=0;i<e.length;i++)Pw(n,e[i],t)}function Ow(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Tr(~r);else{let s=r,o=t[++i],a=t[++i];kE(o,s);let c=e[s];_t(24,c),a(2,c),_t(25,c)}}}finally{Tr(-1)}}function Rh(n,e){let t=py()?64:1088;for(n[qi].changeDetectionScheduler?.notify(e);n;){n[Ne]|=t;let i=Cr(n);if(kc(n)&&!i)return n;n=i}return null}function b_(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function Lw(n,e,t,i=!0){let r=e[Ge];if(Fw(r,e,n,t),i){let o=Nf(t,n),a=e[rn],c=a.parentNode(n[wr]);c!==null&&uw(r,n[Wn],a,e,c,o)}let s=e[Pc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Of(n,e){if(n.length<=gn)return;let t=gn+e,i=n[t];if(i){let r=i[br];r!==null&&r!==n&&Dh(r,i),e>0&&(n[t-1][zn]=i[zn]);let s=Rc(n,gn+e);lw(i[Ge],i);let o=s[_i];o!==null&&o.detachView(s[Ge]),i[Zt]=null,i[zn]=null,i[Ne]&=-129}return i}function Fw(n,e,t,i){let r=gn+i,s=t.length;i>0&&(t[r-1][zn]=e),i<s-gn?(e[zn]=t[r],Wv(t,gn+i,e)):(t.push(e),e[zn]=null),e[Zt]=t;let o=e[br];o!==null&&t!==o&&w_(o,e);let a=e[_i];a!==null&&a.insertView(n),gf(e),e[Ne]|=128}function w_(n,e){let t=n[Is],i=e[Zt];if(Mr(i))n[Ne]|=2;else{let r=i[Zt][Qn];e[Qn]!==r&&(n[Ne]|=2)}t===null?n[Is]=[e]:t.push(e)}var ko=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[Ge];return jc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[An]}set context(e){this._lView[An]=e}get destroyed(){return Go(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Zt];if(wi(e)){let t=e[Fc],i=t?t.indexOf(this):-1;i>-1&&(Of(e,i),Rc(t,i))}this._attachedToViewContainer=!1}p_(this._lView[Ge],this._lView)}onDestroy(e){cy(this._lView,e)}markForCheck(){Rh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Ne]&=-129}reattach(){gf(this._lView),this._lView[Ne]|=128}detectChanges(){this._lView[Ne]|=1024,x_(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new we(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=kc(this._lView),t=this._lView[br];t!==null&&!e&&Dh(t,this._lView),h_(this._lView[Ge],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new we(902,!1);this._appRef=e;let t=kc(this._lView),i=this._lView[br];i!==null&&!t&&w_(i,this._lView),gf(this._lView)}};var Uo=(()=>{class n{static __NG_ELEMENT_ID__=Bw}return n})(),kw=Uo,Uw=class extends kw{_declarationLView;_declarationTContainer;elementRef;constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=aw(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:t,dehydratedView:i});return new ko(r)}};function Bw(){return Nh(Ti(),Pt())}function Nh(n,e){return n.type&4?new Uw(e,n,ks(n,e)):null}function Ph(n,e,t,i,r){let s=n.data[e];if(s===null)s=Vw(n,e,t,i,r),FE()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=NE();s.injectorIndex=o===null?-1:o.injectorIndex}return Wo(s,!0),s}function Vw(n,e,t,i,r){let s=fy(),o=hy(),a=o?s:s&&s.parent,c=n.data[e]=zw(n,a,t,e,i,r);return Hw(n,c,s,o),c}function Hw(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function zw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return AE()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var zU=new RegExp(`^(\\d+)*(${bb}|${Eb})*(.*)`);var Gw=()=>null;function yv(n,e){return Gw(n,e)}var Ww=class{},C_=class{},Lf=class{resolveComponentFactory(e){throw Error(`No component factory found for ${ln(e)}.`)}},cl=class{static NULL=new Lf},Rs=class{};var jw=(()=>{class n{static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>null})}return n})();function _v(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=$g(r,a);else if(s==2){let c=a,l=e[++o];i=$g(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function Oh(n,e=He.Default){let t=Pt();if(t===null)return We(n,e);let i=Ti();return Ny(i,t,Cn(n),e)}function T_(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a,c=null,l=null,u=qw(o);u===null?a=o:[a,c,l]=u,Zw(n,e,t,a,s,c,l)}s!==null&&i!==null&&$w(t,i,s)}function $w(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new we(-301,!1);i.push(e[r],s)}}function qw(n){let e=null,t=!1;for(let o=0;o<n.length;o++){let a=n[o];if(o===0&&Ar(a)&&(e=a),a.findHostDirectiveDefs!==null){t=!0;break}}if(!t)return null;let i=null,r=null,s=null;for(let o of n)o.findHostDirectiveDefs!==null&&(i??=[],r??=new Map,s??=new Map,Xw(o,i,s,r)),o===e&&(i??=[],i.push(o));return i!==null?(i.push(...e===null?n:n.slice(1)),[i,r,s]):null}function Xw(n,e,t,i){let r=e.length;n.findHostDirectiveDefs(n,e,i),t.set(n,[r,e.length-1])}function Yw(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Zw(n,e,t,i,r,s,o){let a=i.length,c=!1;for(let f=0;f<a;f++){let h=i[f];!c&&Ar(h)&&(c=!0,Yw(n,t,f)),eb(Dy(t,e),n,h.type)}nC(t,n.data.length,a);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=a_(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=uh(t.mergedAttrs,h.hostAttrs),Kw(n,t,e,d,h),tC(d,h,r),o!==null&&o.has(h)){let[y,m]=o.get(h);t.directiveToIndex.set(h.type,[d,y+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let g=h.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}Jw(n,t,s)}function Jw(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))xv(0,e,r,i),xv(1,e,r,i),Sv(e,i,!1);else{let s=t.get(r);Mv(0,e,s,i),Mv(1,e,s,i),Sv(e,i,!0)}}}function xv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),D_(e,s)}}function Mv(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),D_(e,o)}}function D_(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function Sv(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||xh(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function Kw(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=ws(r.type,!0)),o=new Lo(s,Ar(r),Oh);n.blueprint[i]=o,t[i]=o,Qw(n,e,i,a_(n,t,r.hostVars,Us),r)}function Qw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;eC(o)!=a&&o.push(a),o.push(t,i,s)}}function eC(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function tC(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Ar(e)&&(t[""]=n)}}function nC(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function A_(n,e,t,i,r,s,o,a){let c=e.consts,l=Uc(c,o),u=Ph(e,n,2,i,l);return s&&T_(e,t,u,Uc(c,a),r),u.mergedAttrs=uh(u.mergedAttrs,u.attrs),u.attrs!==null&&_v(u,u.attrs,!1),u.mergedAttrs!==null&&_v(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function I_(n,e){Ey(n,e),Qv(e)&&n.queries.elementEnd(e)}var $c=class extends cl{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Ds(e);return new Bo(t,this.ngModule)}};function iC(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&ol.SignalBased)!==0};return r&&(s.transform=r),s})}function rC(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function sC(n,e,t){let i=e instanceof Dn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new _f(t,i):t}function oC(n){let e=n.get(Rs,null);if(e===null)throw new we(407,!1);let t=n.get(jw,null),i=n.get(Fo,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i}}function aC(n,e){let t=(n.selectors[0][0]||"div").toLowerCase();return i_(e,t,t==="svg"?xE:t==="math"?ME:null)}var Bo=class extends C_{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=iC(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=rC(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=kb(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){_t(22);let s=tt(null);try{let o=this.componentDef,a=i?["ng-version","19.2.4"]:Ub(this.componentDef.selectors[0]),c=Mh(0,null,null,1,0,null,null,null,null,[a],null),l=sC(o,r||this.ngModule,e),u=oC(l),d=u.rendererFactory.createRenderer(null,o),f=i?qb(d,i,o.encapsulation,l):aC(o,d),h=Sh(null,c,null,512|o_(o),null,null,u,d,l,null,Jy(f,l,!0));h[xi]=f,oh(h);let g=null;try{let y=A_(xi,c,h,"#host",()=>[this.componentDef],!0,0);f&&(s_(d,f,y),jo(f,h)),bh(c,h,y),Qy(c,y,h),I_(c,y),t!==void 0&&cC(y,this.ngContentSelectors,t),g=Mi(y.index,h),h[An]=g[An],Ch(c,h,null)}catch(y){throw g!==null&&Tf(g),Tf(h),y}finally{_t(23),ah()}return new Ff(this.componentType,h)}finally{tt(s)}}},Ff=class extends Ww{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=sy(t[Ge],xi),this.location=ks(this._tNode,t),this.instance=Mi(this._tNode.index,t)[An],this.hostView=this.changeDetectorRef=new ko(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=wh(i,r[Ge],r,e,t);this.previousInputValues.set(e,t);let o=Mi(i.index,r);Rh(o,1)}get injector(){return new Sr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function cC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Bs=(()=>{class n{static __NG_ELEMENT_ID__=lC}return n})();function lC(){let n=Ti();return N_(n,Pt())}var uC=Bs,R_=class extends uC{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return ks(this._hostTNode,this._hostLView)}get injector(){return new Sr(this._hostTNode,this._hostLView)}get parentInjector(){let e=dh(this._hostTNode,this._hostLView);if(wy(e)){let t=Vc(e,this._hostLView),i=Bc(e),r=t[Ge].data[i+8];return new Sr(r,t)}else return new Sr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Ev(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-gn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=yv(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,gv(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!gE(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Bo(Ds(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(Dn,null);y&&(s=y)}let u=Ds(c.componentType??{}),d=yv(this._lContainer,u?.id??null),f=d?.firstChild??null,h=c.create(l,r,f,s);return this.insertImpl(h.hostView,a,gv(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(EE(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Zt],l=new R_(c,c[Wn],c[Zt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Lw(o,r,s,i),e.attachToViewContainerRef(),Wv(of(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Ev(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Of(this._lContainer,t);i&&(Rc(of(this._lContainer),t),p_(i[Ge],i))}detach(e){let t=this._adjustIndex(e,-1),i=Of(this._lContainer,t);return i&&Rc(of(this._lContainer),t)!=null?new ko(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Ev(n){return n[Fc]}function of(n){return n[Fc]||(n[Fc]=[])}function N_(n,e){let t,i=e[n.index];return wi(i)?t=i:(t=b_(i,e,null,n),e[n.index]=t,Eh(e,t)),fC(t,e,n,i),new R_(t,n,e)}function dC(n,e){let t=n[rn],i=t.createComment(""),r=Ci(e,n),s=t.parentNode(r);return Wc(t,s,i,t.nextSibling(r),!1),i}var fC=mC,hC=()=>!1;function pC(n,e,t){return hC(n,e,t)}function mC(n,e,t,i){if(n[wr])return;let r;t.type&8?r=ei(i):r=dC(e,t),n[wr]=r}var kf=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Uf=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Lh(e,t).matches!==null&&this.queries[t].setDirty()}},Bf=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=EC(e):this.predicate=e}},Vf=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Hf=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,gC(t,s)),this.matchTNodeWithReadOption(e,t,wc(t,e,s,!1,!1))}else i===Uo?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,wc(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Ir||r===Bs||r===Uo&&t.type&4)this.addMatch(t.index,-2);else{let s=wc(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function gC(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function vC(n,e){return n.type&11?ks(n,e):n.type&4?Nh(n,e):null}function yC(n,e,t,i){return t===-1?vC(e,n):t===-2?_C(n,e,i):Hc(n,n[Ge],t,e)}function _C(n,e,t){if(t===Ir)return ks(e,n);if(t===Uo)return Nh(e,n);if(t===Bs)return N_(e,n)}function P_(n,e,t,i){let r=e[_i].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(yC(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function zf(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=P_(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=gn;d<u.length;d++){let f=u[d];f[br]===f[Zt]&&zf(f[Ge],f,l,i)}if(u[Is]!==null){let d=u[Is];for(let f=0;f<d.length;f++){let h=d[f];zf(h[Ge],h,l,i)}}}}}return i}function xC(n,e){return n[_i].queries[e].queryList}function MC(n,e,t){let i=new Cf((t&4)===4);return wE(n,e,i,i.destroy),(e[_i]??=new Uf).queries.push(new kf(i))-1}function SC(n,e,t){let i=ii();return i.firstCreatePass&&(bC(i,new Bf(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),MC(i,Pt(),e)}function EC(n){return n.split(",").map(e=>e.trim())}function bC(n,e,t){n.queries===null&&(n.queries=new Vf),n.queries.track(new Hf(e,t))}function Lh(n,e){return n.queries.getByIndex(e)}function wC(n,e){let t=n[Ge],i=Lh(t,e);return i.crossesNgTemplate?zf(t,n,e,[]):P_(t,n,i,e)}var Ns=class{},Fh=class{};var Gf=class extends Ns{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new $c(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=qv(e);this._bootstrapComponents=t_(s.bootstrap),this._r3Injector=Ly(e,t,[{provide:Ns,useValue:this},{provide:cl,useValue:this.componentFactoryResolver},...i],ln(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Wf=class extends Fh{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new Gf(this.moduleType,e,[])}};var qc=class extends Ns{injector;componentFactoryResolver=new $c(this);instance=null;constructor(e){super();let t=new Po([...e.providers,{provide:Ns,useValue:this},{provide:cl,useValue:this.componentFactoryResolver}],e.parent||th(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function kh(n,e,t=null){return new qc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var CC=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Xv(!1,t.type),r=i.length>0?kh([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Oe({token:n,providedIn:"environment",factory:()=>new n(We(Dn))})}return n})();function un(n){return Jf(()=>{let e=O_(n),t=Mt(ve({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Gy.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(CC).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ni.Emulated,styles:n.styles||Er,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&yh("NgStandalone"),L_(t);let i=n.dependencies;return t.directiveDefs=bv(i,!1),t.pipeDefs=bv(i,!0),t.id=RC(t),t})}function TC(n){return Ds(n)||iE(n)}function DC(n){return n!==null}function AC(n,e){if(n==null)return Cs;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=ol.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function IC(n){if(n==null)return Cs;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Uh(n){return Jf(()=>{let e=O_(n);return L_(e),e})}function O_(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Cs,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Er,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:AC(n.inputs,e),outputs:IC(n.outputs),debugInfo:null}}function L_(n){n.features?.forEach(e=>e(n))}function bv(n,e){if(!n)return null;let t=e?rE:TC;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(DC)}function RC(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Bh(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function NC(n,e,t,i,r,s,o,a,c){let l=e.consts,u=Ph(e,n,4,o||null,a||null);dy()&&T_(e,t,u,Uc(l,c),d_),u.mergedAttrs=uh(u.mergedAttrs,u.attrs),Ey(e,u);let d=u.tView=Mh(2,u,i,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,l,null);return e.queries!==null&&(e.queries.template(e,u),d.queries=e.queries.embeddedTView(u)),u}function PC(n,e,t,i,r,s,o,a,c,l){let u=t+xi,d=e.firstCreatePass?NC(u,e,n,i,r,s,o,a,c):e.data[u];Wo(d,!1);let f=OC(e,n,d,t);ch()&&Ah(e,n,f,d),jo(f,n);let h=b_(f,n,f,d);return n[u]=h,Eh(n,h),pC(h,d,n),nh(d)&&bh(e,n,d),c!=null&&u_(n,d,l),d}function Vh(n,e,t,i,r,s,o,a){let c=Pt(),l=ii(),u=Uc(l.consts,s);return PC(c,l,n,e,t,i,r,u,o,a),Vh}var OC=LC;function LC(n,e,t,i){return lh(!0),e[rn].createComment("")}var Hh=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var F_=new Pe("");var FC=(()=>{class n{static \u0275prov=Oe({token:n,providedIn:"root",factory:()=>new jf})}return n})(),jf=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}};function qo(n){return!!n&&typeof n.then=="function"}function k_(n){return!!n&&typeof n.subscribe=="function"}var U_=new Pe("");var B_=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=re(U_,{optional:!0})??[];injector=re(ti);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=Gn(this.injector,r);if(qo(s))t.push(s);else if(k_(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),zh=new Pe("");function kC(){Nd(()=>{throw new we(600,!1)})}function UC(n){return n.isBoundToModule}var BC=10;var Xi=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=re(hb);afterRenderManager=re(Cb);zonelessEnabled=re(rl);rootEffectScheduler=re(FC);dirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Wt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=re(Fs).hasPendingTasks.pipe(nt(t=>!t));constructor(){re(sl,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=re(Dn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){_t(10);let r=t instanceof C_;if(!this._injector.get(B_).done){let f="";throw new we(405,f)}let o;r?o=t:o=this._injector.get(cl).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=UC(o)?void 0:this._injector.get(Ns),c=i||o.selector,l=o.create(ti.NULL,[],c,a),u=l.location.nativeElement,d=l.injector.get(F_,null);return d?.registerApplication(u),l.onDestroy(()=>{this.detachView(l.hostView),Cc(this.components,l),d?.unregisterApplication(u)}),this._loadComponent(l),_t(11,l),l}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){_t(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(Zy.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new we(101,!1);let t=tt(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,tt(t),this.afterTick.next(),_t(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Rs,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<BC;)_t(14),this.synchronizeOnce(),_t(15)}synchronizeOnce(){if(this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)VC(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>tl(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Cc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(zh,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Cc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new we(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Cc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function VC(n,e,t,i){if(!t&&!tl(n))return;x_(n,e,t&&!i?0:1)}function HC(n,e,t,i){return Bh(n,my(),t)?e+Vv(t)+i:Us}function Mc(n,e){return n<<17|e<<2}function Dr(n){return n>>17&32767}function zC(n){return(n&2)==2}function GC(n,e){return n&131071|e<<17}function $f(n){return n|2}function Ps(n){return(n&131068)>>2}function af(n,e){return n&-131069|e<<2}function WC(n){return(n&1)===1}function qf(n){return n|1}function jC(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Dr(o),c=Ps(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||Ho(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Dr(n[a+1]);n[i+1]=Mc(f,a),f!==0&&(n[f+1]=af(n[f+1],i)),n[a+1]=GC(n[a+1],i)}else n[i+1]=Mc(a,0),a!==0&&(n[a+1]=af(n[a+1],i)),a=i;else n[i+1]=Mc(c,0),a===0?a=i:n[c+1]=af(n[c+1],i),c=i;l&&(n[i+1]=$f(n[i+1])),wv(n,u,i,!0),wv(n,u,i,!1),$C(e,u,n,i,s),o=Mc(a,c),s?e.classBindings=o:e.styleBindings=o}function $C(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&Ho(s,e)>=0&&(t[i+1]=qf(t[i+1]))}function wv(n,e,t,i){let r=n[t+1],s=e===null,o=i?Dr(r):Ps(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];qC(c,e)&&(a=!0,n[o+1]=i?qf(l):$f(l)),o=i?Dr(l):Ps(l)}a&&(n[t+1]=i?$f(r):qf(r))}function qC(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Ho(n,e)>=0:!1}function Gh(n,e,t){let i=Pt(),r=my();if(Bh(i,r,e)){let s=ii(),o=HE();Jb(s,o,i,n,e,i[rn],t,!1)}return Gh}function Cv(n,e,t,i,r){wh(e,n,t,r?"class":"style",i)}function ll(n,e){return XC(n,e,null,!0),ll}function XC(n,e,t,i){let r=Pt(),s=ii(),o=LE(2);if(s.firstUpdatePass&&ZC(s,n,o,i),e!==Us&&Bh(r,o,e)){let a=s.data[Ls()];tT(s,a,r,r[rn],n,r[o+1]=nT(e,t),i,o)}}function YC(n,e){return e>=n.expandoStartIndex}function ZC(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Ls()],o=YC(n,t);iT(s,i)&&e===null&&!o&&(e=!1),e=JC(r,s,e,i),jC(r,s,e,t,o,i)}}function JC(n,e,t,i){let r=BE(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=cf(null,n,e,t,i),t=Vo(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=cf(r,n,e,t,i),s===null){let c=KC(n,e,i);c!==void 0&&Array.isArray(c)&&(c=cf(null,n,e,c[1],i),c=Vo(c,e.attrs,i),QC(n,e,i,c))}else s=eT(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function KC(n,e,t){let i=t?e.classBindings:e.styleBindings;if(Ps(i)!==0)return n[Dr(i)]}function QC(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Dr(r)]=i}function eT(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=Vo(i,o,t)}return Vo(i,e.attrs,t)}function cf(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=Vo(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function Vo(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),tE(n,o,t?!0:e[++s]))}return n===void 0?null:n}function tT(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=WC(l)?Tv(c,e,t,r,Ps(l),o):void 0;if(!Xc(u)){Xc(s)||zC(l)&&(s=Tv(c,null,t,r,a,o));let d=ry(Ls(),t);Mw(i,o,d,r,s)}}function Tv(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Us&&(f=d?Er:void 0);let h=d?Jd(f,i):u===i?f:void 0;if(l&&!Xc(h)&&(h=Jd(c,i)),Xc(h)&&(a=h,o))return a;let g=n[r+1];r=o?Dr(g):Ps(g)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=Jd(c,i))}return a}function Xc(n){return n!==void 0}function nT(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=ln(_h(n)))),n}function iT(n,e){return(n.flags&(e?8:16))!==0}function lt(n,e,t,i){let r=Pt(),s=ii(),o=xi+n,a=r[rn],c=s.firstCreatePass?A_(o,s,r,e,d_,dy(),t,i):s.data[o],l=rT(s,r,c,a,e,n);r[o]=l;let u=nh(c);return Wo(c,!0),s_(a,l,c),!f_(c)&&ch()&&Ah(s,r,l,c),(CE()===0||u)&&jo(l,r),TE(),u&&(bh(s,r,c),Qy(s,c,r)),i!==null&&u_(r,c),lt}function ut(){let n=Ti();hy()?PE():(n=n.parent,Wo(n,!1));let e=n;IE(e)&&RE(),DE();let t=ii();return t.firstCreatePass&&I_(t,e),e.classesWithoutHost!=null&&jE(e)&&Cv(t,e,Pt(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&$E(e)&&Cv(t,e,Pt(),e.stylesWithoutHost,!1),ut}function Jt(n,e,t,i){return lt(n,e,t,i),ut(),Jt}var rT=(n,e,t,i,r,s)=>(lh(!0),i_(i,r,zE()));var Yc="en-US";var sT=Yc;function oT(n){typeof n=="string"&&(sT=n.toLowerCase().replace(/_/g,"-"))}function Dv(n,e,t,i){return function r(s){if(s===Function)return i;let o=Os(n)?Mi(n.index,e):e;Rh(o,5);let a=Av(e,t,i,s),c=r.__ngNextListenerFn__;for(;c;)a=Av(e,t,c,s)&&a,c=c.__ngNextListenerFn__;return a}}function Av(n,e,t,i){let r=tt(null);try{return _t(6,e,t),t(i)!==!1}catch(s){return aT(n,s),!1}finally{_t(7,e,t),tt(r)}}function aT(n,e){let t=n[As],i=t?t.get(Si,null):null;i&&i.handleError(e)}function Iv(n,e,t,i,r,s,o,a,c){let l=t[i],d=e.data[i].outputs[r],h=l[d].subscribe(o),g=a.length;a.push(o,h),c&&c.push(s,n.index,g,-(g+1))}var cT=(n,e,t)=>{};function Vs(n,e,t,i){let r=Pt(),s=ii(),o=Ti();return uT(s,r,r[rn],o,n,e,i),Vs}function lT(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[Oc],c=r[s+2];return a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function uT(n,e,t,i,r,s,o){let a=nh(i),l=n.firstCreatePass?uy(n):null,u=e[An],d=ly(e),f=!0;if(i.type&3||o){let h=Ci(i,e),g=o?o(h):h,y=d.length,m=o?w=>o(ei(w[i.index])):i.index,p=null;if(!o&&a&&(p=lT(n,e,r,i.index)),p!==null){let w=p.__ngLastListenerFn__||p;w.__ngNextListenerFn__=s,p.__ngLastListenerFn__=s,f=!1}else{s=Dv(i,e,u,s),cT(g,r,s);let w=t.listen(g,r,s);d.push(s,w),l&&l.push(r,m,y,y+1)}}else s=Dv(i,e,u,s);if(f){let h=i.outputs?.[r],g=i.hostDirectiveOutputs?.[r];if(g&&g.length)for(let y=0;y<g.length;y+=2){let m=g[y],p=g[y+1];Iv(i,n,e,m,p,r,s,d,l)}if(h&&h.length)for(let y of h)Iv(i,n,e,y,r,r,s,d,l)}}function V_(n,e,t){SC(n,e,t)}function Wh(n){let e=Pt(),t=ii(),i=gy();sh(i+1);let r=Lh(t,i);if(n.dirty&&SE(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=wC(e,i);n.reset(s,gb),n.notifyOnChanges()}return!0}return!1}function jh(){return xC(Pt(),gy())}function Ct(n,e=""){let t=Pt(),i=ii(),r=n+xi,s=i.firstCreatePass?Ph(i,r,1,e,null):i.data[r],o=dT(i,t,s,e,n);t[r]=o,ch()&&Ah(i,t,o,s),Wo(s,!1)}var dT=(n,e,t,i,r)=>(lh(!0),Bb(e[rn],i));function ul(n){return H_("",n,""),ul}function H_(n,e,t){let i=Pt(),r=HC(i,n,e,t);return r!==Us&&fT(i,Ls(),r),H_}function fT(n,e,t){let i=ry(e,n);Vb(n[rn],i,t)}var Xf=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},$h=(()=>{class n{compileModuleSync(t){return new Wf(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=qv(t),s=t_(r.declarations).reduce((o,a)=>{let c=Ds(a);return c&&o.push(new Bo(c)),o},[]);return new Xf(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var hT=(()=>{class n{zone=re(qt);changeDetectionScheduler=re(Fo);applicationRef=re(Xi);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pT=new Pe("",{factory:()=>!1});function z_({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new qt(Mt(ve({},W_()),{scheduleInRootZone:t})),[{provide:qt,useFactory:n},{provide:Ts,multi:!0,useFactory:()=>{let i=re(hT,{optional:!0});return()=>i.initialize()}},{provide:Ts,multi:!0,useFactory:()=>{let i=re(mT);return()=>{i.initialize()}}},e===!0?{provide:ky,useValue:!0}:[],{provide:Uy,useValue:t??Fy}]}function G_(n){let e=n?.ignoreChangesOutsideZone,t=n?.scheduleInRootZone,i=z_({ngZoneFactory:()=>{let r=W_(n);return r.scheduleInRootZone=t,r.shouldCoalesceEventChangeDetection&&yh("NgZone_CoalesceEvent"),new qt(r)},ignoreChangesOutsideZone:e,scheduleInRootZone:t});return Kc([{provide:pT,useValue:!0},{provide:rl,useValue:!1},i])}function W_(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var mT=(()=>{class n{subscription=new Nt;initialized=!1;zone=re(qt);pendingTasks=re(Fs);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{qt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{qt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gT=(()=>{class n{appRef=re(Xi);taskService=re(Fs);ngZone=re(qt);zonelessEnabled=re(rl);tracing=re(sl,{optional:!0});disableScheduling=re(ky,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Nt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Gc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(re(Uy,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof wf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{this.appRef.dirtyFlags|=16,i=!0;break}case 13:{this.appRef.dirtyFlags|=2,i=!0;break}case 11:{i=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?cv:By;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Gc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,cv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function vT(){return typeof $localize<"u"&&$localize.locale||Yc}var qh=new Pe("",{providedIn:"root",factory:()=>re(qh,He.Optional|He.SkipSelf)||vT()});var Yf=new Pe(""),yT=new Pe("");function Ao(n){return!n.moduleRef}function _T(n){let e=Ao(n)?n.r3Injector:n.moduleRef.injector,t=e.get(qt);return t.run(()=>{Ao(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(Si,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Ao(n)){let s=()=>e.destroy(),o=n.platformInjector.get(Yf);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(Yf);o.add(s),n.moduleRef.onDestroy(()=>{Cc(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return MT(i,t,()=>{let s=e.get(B_);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(qh,Yc);if(oT(o||Yc),!e.get(yT,!0))return Ao(n)?e.get(Xi):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Ao(n)){let c=e.get(Xi);return n.rootComponent!==void 0&&c.bootstrap(n.rootComponent),c}else return xT(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function xT(n,e){let t=n.injector.get(Xi);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new we(-403,!1);e.push(n)}function MT(n,e,t){try{let i=t();return qo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Tc=null;function ST(n=[],e){return ti.create({name:e,providers:[{provide:Qc,useValue:"platform"},{provide:Yf,useValue:new Set([()=>Tc=null])},...n]})}function ET(n=[]){if(Tc)return Tc;let e=ST(n);return Tc=e,kC(),bT(e),e}function bT(n){let e=n.get(gh,null);Gn(n,()=>{e?.forEach(t=>t())})}var Xo=(()=>{class n{static __NG_ELEMENT_ID__=wT}return n})();function wT(n){return CT(Ti(),Pt(),(n&16)===16)}function CT(n,e,t){if(Os(n)&&!t){let i=Mi(n.index,e);return new ko(i,i)}else if(n.type&175){let i=e[Qn];return new ko(i,e)}return null}function j_(n){_t(8);try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=ET(i),s=[z_({}),{provide:Fo,useExisting:gT},...t||[]],o=new qc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return _T({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}finally{_t(9)}}var Rv=class{[ls];constructor(e){this[ls]=e}destroy(){this[ls].destroy()}};var K_=null;function Hs(){return K_}function Q_(n){K_??=n}var dl=class{};var In=new Pe(""),e0=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>re(AT),providedIn:"platform"})}return n})();var AT=(()=>{class n extends e0{_location;_history;_doc=re(In);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Hs().getBaseHref(this._doc)}onPopState(t){let i=Hs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Hs().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function t0(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function $_(n){let e=n.search(/#|\?|$/);return n[e-1]==="/"?n.slice(0,e-1)+n.slice(e):n}function Nr(n){return n&&n[0]!=="?"?`?${n}`:n}var hl=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>re(n0),providedIn:"root"})}return n})(),IT=new Pe(""),n0=(()=>{class n extends hl{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??re(In).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return t0(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+Nr(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+Nr(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+Nr(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(We(e0),We(IT,8))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yo=(()=>{class n{_subject=new Wt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=PT($_(q_(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+Nr(i))}normalize(t){return n.stripTrailingSlash(NT(this._basePath,q_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Nr(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Nr(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Nr;static joinWithSlash=t0;static stripTrailingSlash=$_;static \u0275fac=function(i){return new(i||n)(We(hl))};static \u0275prov=Oe({token:n,factory:()=>RT(),providedIn:"root"})}return n})();function RT(){return new Yo(We(hl))}function NT(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function q_(n){return n.replace(/\/index.html$/,"")}function PT(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function i0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var r0="browser",OT="server";function Xh(n){return n===OT}var fl=class{};var Zh=class extends dl{supportsDOMEvents=!0},Jh=class n extends Zh{static makeCurrent(){Q_(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=LT();return t==null?null:FT(t)}resetBaseElement(){Zo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return i0(document.cookie,e)}},Zo=null;function LT(){return Zo=Zo||document.querySelector("base"),Zo?Zo.getAttribute("href"):null}function FT(n){return new URL(n,document.baseURI).pathname}var kT=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),Kh=new Pe(""),u0=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new we(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(We(Kh),We(qt))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),ml=class{_doc;constructor(e){this._doc=e}manager},pl="ng-app-id";function s0(n){for(let e of n)e.remove()}function o0(n,e){let t=e.createElement("style");return t.textContent=n,t}function UT(n,e,t,i){let r=n.head?.querySelectorAll(`style[${pl}="${e}"],link[${pl}="${e}"]`);if(r)for(let s of r)s.removeAttribute(pl),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Qh(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var d0=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=Xh(s),UT(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,o0);i?.forEach(r=>this.addUsage(r,this.external,Qh))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(s0(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])s0(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,o0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,Qh(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(pl,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(We(In),We(mh),We(vh,8),We($o))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),Yh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},tp=/%COMP%/g;var f0="%COMP%",BT=`_nghost-${f0}`,VT=`_ngcontent-${f0}`,HT=!0,zT=new Pe("",{providedIn:"root",factory:()=>HT});function GT(n){return VT.replace(tp,n)}function WT(n){return BT.replace(tp,n)}function h0(n,e){return e.map(t=>t.replace(tp,n))}var a0=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=Xh(a),this.defaultRenderer=new Jo(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ni.ShadowDom&&(i=Mt(ve({},i),{encapsulation:ni.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof gl?r.applyToHost(t):r instanceof Ko&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case ni.Emulated:s=new gl(c,l,i,this.appId,u,o,a,d,f);break;case ni.ShadowDom:return new ep(c,l,t,i,o,a,this.nonce,d,f);default:s=new Ko(c,l,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(We(u0),We(d0),We(mh),We(zT),We(In),We($o),We(qt),We(vh),We(sl,8))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),Jo=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Yh[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(c0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(c0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new we(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Yh[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Yh[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(Ei.DashCase|Ei.Important)?e.style.setProperty(t,i,r&Ei.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&Ei.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Hs().getGlobalEventTarget(this.doc,e),!e))throw new we(5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function c0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var ep=class extends Jo{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=h0(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=Qh(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ko=class extends Jo{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=l?h0(l,u):u,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},gl=class extends Ko{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=GT(u),this.hostAttr=WT(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},jT=(()=>{class n extends ml{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(We(In))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})(),l0=["alt","control","meta","shift"],$T={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qT={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},XT=(()=>{class n extends ml{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Hs().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),l0.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=$T[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),l0.forEach(o=>{if(o!==r){let a=qT[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(We(In))};static \u0275prov=Oe({token:n,factory:n.\u0275fac})}return n})();function p0(n,e){return j_(ve({rootComponent:n},YT(e)))}function YT(n){return{appProviders:[...eD,...n?.providers??[]],platformProviders:QT}}function ZT(){Jh.makeCurrent()}function JT(){return new Si}function KT(){return Xy(document),document}var QT=[{provide:$o,useValue:r0},{provide:gh,useValue:ZT,multi:!0},{provide:In,useFactory:KT,deps:[]}];var eD=[{provide:Qc,useValue:"root"},{provide:Si,useFactory:JT,deps:[]},{provide:Kh,useClass:jT,multi:!0,deps:[In]},{provide:Kh,useClass:XT,multi:!0,deps:[In]},a0,d0,u0,{provide:Rs,useExisting:a0},{provide:fl,useClass:kT,deps:[]},[]];var m0=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(We(In))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ue="primary",ha=Symbol("RouteTitle"),op=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function qs(n){return new op(n)}function nD(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function iD(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!ri(n[t],e[t]))return!1;return!0}function ri(n,e){let t=n?ap(n):void 0,i=e?ap(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!E0(n[r],e[r]))return!1;return!0}function ap(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function E0(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function b0(n){return n.length>0?n[n.length-1]:null}function Yi(n){return jd(n)?n:qo(n)?Ft(Promise.resolve(n)):Le(n)}var rD={exact:C0,subset:T0},w0={exact:sD,subset:oD,ignored:()=>!0};function g0(n,e,t){return rD[t.paths](n.root,e.root,t.matrixParams)&&w0[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function sD(n,e){return ri(n,e)}function C0(n,e,t){if(!Or(n.segments,e.segments)||!_l(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!C0(n.children[i],e.children[i],t))return!1;return!0}function oD(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>E0(n[t],e[t]))}function T0(n,e,t){return D0(n,e,e.segments,t)}function D0(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Or(r,t)||e.hasChildren()||!_l(r,t,i))}else if(n.segments.length===t.length){if(!Or(n.segments,t)||!_l(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!T0(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Or(n.segments,r)||!_l(n.segments,r,i)||!n.children[Ue]?!1:D0(n.children[Ue],e,s,i)}}function _l(n,e,t){return e.every((i,r)=>w0[t](n[r].parameters,i.parameters))}var Ii=class{root;queryParams;fragment;_queryParamMap;constructor(e=new dt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=qs(this.queryParams),this._queryParamMap}toString(){return lD.serialize(this)}},dt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return xl(this)}},Pr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=qs(this.parameters),this._parameterMap}toString(){return I0(this)}};function aD(n,e){return Or(n,e)&&n.every((t,i)=>ri(t.parameters,e[i].parameters))}function Or(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function cD(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Ue&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Ue&&(t=t.concat(e(r,i)))}),t}var Pp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>new ia,providedIn:"root"})}return n})(),ia=class{parse(e){let t=new lp(e);return new Ii(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Qo(e.root,!0)}`,i=fD(e.queryParams),r=typeof e.fragment=="string"?`#${uD(e.fragment)}`:"";return`${t}${i}${r}`}},lD=new ia;function xl(n){return n.segments.map(e=>I0(e)).join("/")}function Qo(n,e){if(!n.hasChildren())return xl(n);if(e){let t=n.children[Ue]?Qo(n.children[Ue],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Ue&&i.push(`${r}:${Qo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=cD(n,(i,r)=>r===Ue?[Qo(n.children[Ue],!1)]:[`${r}:${Qo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Ue]!=null?`${xl(n)}/${t[0]}`:`${xl(n)}/(${t.join("//")})`}}function A0(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function vl(n){return A0(n).replace(/%3B/gi,";")}function uD(n){return encodeURI(n)}function cp(n){return A0(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ml(n){return decodeURIComponent(n)}function v0(n){return Ml(n.replace(/\+/g,"%20"))}function I0(n){return`${cp(n.path)}${dD(n.parameters)}`}function dD(n){return Object.entries(n).map(([e,t])=>`;${cp(e)}=${cp(t)}`).join("")}function fD(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${vl(t)}=${vl(r)}`).join("&"):`${vl(t)}=${vl(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var hD=/^[^\/()?;#]+/;function np(n){let e=n.match(hD);return e?e[0]:""}var pD=/^[^\/()?;=#]+/;function mD(n){let e=n.match(pD);return e?e[0]:""}var gD=/^[^=?&#]+/;function vD(n){let e=n.match(gD);return e?e[0]:""}var yD=/^[^&#]+/;function _D(n){let e=n.match(yD);return e?e[0]:""}var lp=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new dt([],{}):new dt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Ue]=new dt(e,t)),i}parseSegment(){let e=np(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new we(4009,!1);return this.capture(e),new Pr(Ml(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=mD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=np(this.remaining);r&&(i=r,this.capture(i))}e[Ml(t)]=Ml(i)}parseQueryParam(e){let t=vD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=_D(this.remaining);o&&(i=o,this.capture(i))}let r=v0(t),s=v0(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=np(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new we(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ue);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ue]:new dt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new we(4011,!1)}};function R0(n){return n.segments.length>0?new dt([],{[Ue]:n}):n}function N0(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=N0(r);if(i===Ue&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new dt(n.segments,e);return xD(t)}function xD(n){if(n.numberOfChildren===1&&n.children[Ue]){let e=n.children[Ue];return new dt(n.segments.concat(e.segments),e.children)}return n}function ra(n){return n instanceof Ii}function MD(n,e,t=null,i=null){let r=P0(n);return O0(r,e,t,i)}function P0(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new dt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=R0(i);return e??r}function O0(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return ip(r,r,r,t,i);let s=SD(e);if(s.toRoot())return ip(r,r,new dt([],{}),t,i);let o=ED(s,r,n),a=o.processChildren?ta(o.segmentGroup,o.index,s.commands):F0(o.segmentGroup,o.index,s.commands);return ip(r,o.segmentGroup,a,t,i)}function El(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function sa(n){return typeof n=="object"&&n!=null&&n.outlets}function ip(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=L0(n,e,t);let a=R0(N0(o));return new Ii(a,s,r)}function L0(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=L0(s,e,t)}),new dt(n.segments,i)}var bl=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&El(i[0]))throw new we(4003,!1);let r=i.find(sa);if(r&&r!==b0(i))throw new we(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function SD(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new bl(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new bl(t,e,i)}var Ws=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function ED(n,e,t){if(n.isAbsolute)return new Ws(e,!0,0);if(!t)return new Ws(e,!1,NaN);if(t.parent===null)return new Ws(t,!0,0);let i=El(n.commands[0])?0:1,r=t.segments.length-1+i;return bD(t,r,n.numberOfDoubleDots)}function bD(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new we(4005,!1);r=i.segments.length}return new Ws(i,!1,r-s)}function wD(n){return sa(n[0])?n[0].outlets:{[Ue]:n}}function F0(n,e,t){if(n??=new dt([],{}),n.segments.length===0&&n.hasChildren())return ta(n,e,t);let i=CD(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new dt(n.segments.slice(0,i.pathIndex),{});return s.children[Ue]=new dt(n.segments.slice(i.pathIndex),n.children),ta(s,0,r)}else return i.match&&r.length===0?new dt(n.segments,{}):i.match&&!n.hasChildren()?up(n,e,t):i.match?ta(n,0,r):up(n,e,t)}function ta(n,e,t){if(t.length===0)return new dt(n.segments,{});{let i=wD(t),r={};if(Object.keys(i).some(s=>s!==Ue)&&n.children[Ue]&&n.numberOfChildren===1&&n.children[Ue].segments.length===0){let s=ta(n.children[Ue],e,t);return new dt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=F0(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new dt(n.segments,r)}}function CD(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(sa(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!_0(c,l,o))return s;i+=2}else{if(!_0(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function up(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(sa(s)){let c=TD(s.outlets);return new dt(i,c)}if(r===0&&El(t[0])){let c=n.segments[e];i.push(new Pr(c.path,y0(t[0]))),r++;continue}let o=sa(s)?s.outlets[Ue]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&El(a)?(i.push(new Pr(o,y0(a))),r+=2):(i.push(new Pr(o,{})),r++)}return new dt(i,{})}function TD(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=up(new dt([],{}),0,i))}),e}function y0(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function _0(n,e,t){return n==t.path&&ri(e,t.parameters)}var Sl="imperative",Xt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Xt||{}),Rn=class{id;url;constructor(e,t){this.id=e,this.url=t}},oa=class extends Rn{type=Xt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Lr=class extends Rn{urlAfterRedirects;type=Xt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(yn||{}),dp=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(dp||{}),Ai=class extends Rn{reason;code;type=Xt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Fr=class extends Rn{reason;code;type=Xt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},aa=class extends Rn{error;target;type=Xt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},wl=class extends Rn{urlAfterRedirects;state;type=Xt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fp=class extends Rn{urlAfterRedirects;state;type=Xt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hp=class extends Rn{urlAfterRedirects;state;shouldActivate;type=Xt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},pp=class extends Rn{urlAfterRedirects;state;type=Xt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mp=class extends Rn{urlAfterRedirects;state;type=Xt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gp=class{route;type=Xt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},vp=class{route;type=Xt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},yp=class{snapshot;type=Xt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_p=class{snapshot;type=Xt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xp=class{snapshot;type=Xt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mp=class{snapshot;type=Xt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ca=class{},Xs=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function DD(n,e){return n.providers&&!n._injector&&(n._injector=kh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function jn(n){return n.outlet||Ue}function AD(n,e){let t=n.filter(i=>jn(i)===e);return t.push(...n.filter(i=>jn(i)!==e)),t}function pa(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Sp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return pa(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Nl(this.rootInjector)}},Nl=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Sp(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(We(Dn))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Cl=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Ep(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Ep(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=bp(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return bp(e,this._root).map(t=>t.value)}};function Ep(n,e){if(n===e.value)return e;for(let t of e.children){let i=Ep(n,t);if(i)return i}return null}function bp(n,e){if(n===e.value)return[e];for(let t of e.children){let i=bp(n,t);if(i.length)return i.unshift(e),i}return[]}var vn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Gs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Tl=class extends Cl{snapshot;constructor(e,t){super(e),this.snapshot=t,Op(this,e)}toString(){return this.snapshot.toString()}};function k0(n){let e=ID(n),t=new jt([new Pr("",{})]),i=new jt({}),r=new jt({}),s=new jt({}),o=new jt(""),a=new Ys(t,i,s,o,r,Ue,n,e.root);return a.snapshot=e.root,new Tl(new vn(a,[]),e)}function ID(n){let e={},t={},i={},r="",s=new js([],e,i,r,t,Ue,n,null,{});return new Al("",new vn(s,[]))}var Ys=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(nt(l=>l[ha]))??Le(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(nt(e=>qs(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(nt(e=>qs(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Dl(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:ve(ve({},e.params),n.params),data:ve(ve({},e.data),n.data),resolve:ve(ve(ve(ve({},n.data),e.data),r?.data),n._resolvedData)}:i={params:ve({},n.params),data:ve({},n.data),resolve:ve(ve({},n.data),n._resolvedData??{})},r&&B0(r)&&(i.resolve[ha]=r.title),i}var js=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[ha]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=qs(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=qs(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Al=class extends Cl{url;constructor(e,t){super(t),this.url=e,Op(this,t)}toString(){return U0(this._root)}};function Op(n,e){e.value._routerState=n,e.children.forEach(t=>Op(n,t))}function U0(n){let e=n.children.length>0?` { ${n.children.map(U0).join(", ")} } `:"";return`${n.value}${e}`}function rp(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,ri(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),ri(e.params,t.params)||n.paramsSubject.next(t.params),iD(e.url,t.url)||n.urlSubject.next(t.url),ri(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function wp(n,e){let t=ri(n.params,e.params)&&aD(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||wp(n.parent,e.parent))}function B0(n){return typeof n.title=="string"||n.title===null}var RD=new Pe(""),Lp=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ue;activateEvents=new mn;deactivateEvents=new mn;attachEvents=new mn;detachEvents=new mn;routerOutletData=Hy(void 0);parentContexts=re(Nl);location=re(Bs);changeDetector=re(Xo);inputBinder=re(Fp,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new we(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new we(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new we(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new we(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Cp(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=Uh({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[ih]})}return n})(),Cp=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===Ys?this.route:e===Nl?this.childContexts:e===RD?this.outletData:this.parent.get(e,t)}},Fp=new Pe("");function ND(n,e,t){let i=la(n,e._root,t?t._root:void 0);return new Tl(i,e)}function la(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=PD(n,e,t);return new vn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>la(n,a)),o}}let i=OD(e.value),r=e.children.map(s=>la(n,s));return new vn(i,r)}}function PD(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return la(n,i,r);return la(n,i)})}function OD(n){return new Ys(new jt(n.url),new jt(n.params),new jt(n.queryParams),new jt(n.fragment),new jt(n.data),n.outlet,n.component,n)}var ua=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},V0="ngNavigationCancelingError";function Il(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=ra(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=H0(!1,yn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function H0(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[V0]=!0,t.cancellationCode=e,t}function LD(n){return z0(n)&&ra(n.url)}function z0(n){return!!n&&n[V0]}var FD=(n,e,t,i)=>nt(r=>(new Tp(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Tp=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),rp(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=Gs(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Gs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=Gs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=Gs(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Mp(s.value.snapshot))}),e.children.length&&this.forwardEvent(new _p(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(rp(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),rp(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},Rl=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},$s=class{component;route;constructor(e,t){this.component=e,this.route=t}};function kD(n,e,t){let i=n._root,r=e?e._root:null;return ea(i,r,t,[i.value])}function UD(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Js(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Fv(n)?n:e.get(n):i}function ea(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Gs(e);return n.children.forEach(o=>{BD(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>na(a,t.getContext(o),r)),r}function BD(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=VD(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Rl(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ea(n,e,a?a.children:null,i,r):ea(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new $s(a.outlet.component,o))}else o&&na(e,a,r),r.canActivateChecks.push(new Rl(i)),s.component?ea(n,null,a?a.children:null,i,r):ea(n,null,t,i,r);return r}function VD(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Or(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Or(n.url,e.url)||!ri(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!wp(n,e)||!ri(n.queryParams,e.queryParams);case"paramsChange":default:return!wp(n,e)}}function na(n,e,t){let i=Gs(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?na(o,e.children.getContext(s),t):na(o,null,t):na(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new $s(e.outlet.component,r)):t.canDeactivateChecks.push(new $s(null,r)):t.canDeactivateChecks.push(new $s(null,r))}function ma(n){return typeof n=="function"}function HD(n){return typeof n=="boolean"}function zD(n){return n&&ma(n.canLoad)}function GD(n){return n&&ma(n.canActivate)}function WD(n){return n&&ma(n.canActivateChild)}function jD(n){return n&&ma(n.canDeactivate)}function $D(n){return n&&ma(n.canMatch)}function G0(n){return n instanceof gi||n?.name==="EmptyError"}var yl=Symbol("INITIAL_VALUE");function Zs(){return Vn(n=>yc(n.map(e=>e.pipe(vi(1),Yd(yl)))).pipe(nt(e=>{for(let t of e)if(t!==!0){if(t===yl)return yl;if(t===!1||qD(t))return t}return!0}),Bn(e=>e!==yl),vi(1)))}function qD(n){return ra(n)||n instanceof ua}function XD(n,e){return kt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Le(Mt(ve({},t),{guardsResult:!0})):YD(o,i,r,n).pipe(kt(a=>a&&HD(a)?ZD(i,s,n,e):Le(a)),nt(a=>Mt(ve({},t),{guardsResult:a})))})}function YD(n,e,t,i){return Ft(n).pipe(kt(r=>tA(r.component,r.route,t,e,i)),yi(r=>r!==!0,!0))}function ZD(n,e,t,i){return Ft(e).pipe(_s(r=>ys(KD(r.route.parent,i),JD(r.route,i),eA(n,r.path,t),QD(n,r.route,t))),yi(r=>r!==!0,!0))}function JD(n,e){return n!==null&&e&&e(new xp(n)),Le(!0)}function KD(n,e){return n!==null&&e&&e(new yp(n)),Le(!0)}function QD(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Le(!0);let r=i.map(s=>_c(()=>{let o=pa(e)??t,a=Js(s,o),c=GD(a)?a.canActivate(e,n):Gn(o,()=>a(e,n));return Yi(c).pipe(yi())}));return Le(r).pipe(Zs())}function eA(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>UD(o)).filter(o=>o!==null).map(o=>_c(()=>{let a=o.guards.map(c=>{let l=pa(o.node)??t,u=Js(c,l),d=WD(u)?u.canActivateChild(i,n):Gn(l,()=>u(i,n));return Yi(d).pipe(yi())});return Le(a).pipe(Zs())}));return Le(s).pipe(Zs())}function tA(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Le(!0);let o=s.map(a=>{let c=pa(e)??r,l=Js(a,c),u=jD(l)?l.canDeactivate(n,e,t,i):Gn(c,()=>l(n,e,t,i));return Yi(u).pipe(yi())});return Le(o).pipe(Zs())}function nA(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Le(!0);let s=r.map(o=>{let a=Js(o,n),c=zD(a)?a.canLoad(e,t):Gn(n,()=>a(e,t));return Yi(c)});return Le(s).pipe(Zs(),W0(i))}function W0(n){return Hd($t(e=>{if(typeof e!="boolean")throw Il(n,e)}),nt(e=>e===!0))}function iA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Le(!0);let s=r.map(o=>{let a=Js(o,n),c=$D(a)?a.canMatch(e,t):Gn(n,()=>a(e,t));return Yi(c)});return Le(s).pipe(Zs(),W0(i))}var da=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},fa=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function zs(n){return vs(new da(n))}function rA(n){return vs(new we(4e3,!1))}function sA(n){return vs(H0(!1,yn.GuardRejected))}var Dp=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Le(i);if(r.numberOfChildren>1||!r.children[Ue])return rA(`${e.redirectTo}`);r=r.children[Ue]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,params:h,data:g,title:y}=r,m=Gn(s,()=>a({params:h,data:g,queryParams:c,fragment:l,routeConfig:u,url:d,outlet:f,title:y}));if(m instanceof Ii)throw new fa(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new fa(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ii(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new dt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new we(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Ap={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function oA(n,e,t,i,r){let s=j0(n,e,t);return s.matched?(i=DD(e,i),iA(i,e,t,r).pipe(nt(o=>o===!0?s:ve({},Ap)))):Le(s)}function j0(n,e,t){if(e.path==="**")return aA(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?ve({},Ap):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||nD)(t,n,e);if(!r)return ve({},Ap);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ve(ve({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function aA(n){return{matched:!0,parameters:n.length>0?b0(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function x0(n,e,t,i){return t.length>0&&uA(n,t,i)?{segmentGroup:new dt(e,lA(i,new dt(t,n.children))),slicedSegments:[]}:t.length===0&&dA(n,t,i)?{segmentGroup:new dt(n.segments,cA(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new dt(n.segments,n.children),slicedSegments:t}}function cA(n,e,t,i){let r={};for(let s of t)if(Pl(n,e,s)&&!i[jn(s)]){let o=new dt([],{});r[jn(s)]=o}return ve(ve({},i),r)}function lA(n,e){let t={};t[Ue]=e;for(let i of n)if(i.path===""&&jn(i)!==Ue){let r=new dt([],{});t[jn(i)]=r}return t}function uA(n,e,t){return t.some(i=>Pl(n,e,i)&&jn(i)!==Ue)}function dA(n,e,t){return t.some(i=>Pl(n,e,i))}function Pl(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function fA(n,e,t){return e.length===0&&!n.children[t]}var Ip=class{};function hA(n,e,t,i,r,s,o="emptyOnly"){return new Rp(n,e,t,i,r,o,s).recognize()}var pA=31,Rp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Dp(this.urlSerializer,this.urlTree)}noMatchError(e){return new we(4002,`'${e.segmentGroup}'`)}recognize(){let e=x0(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(nt(({children:t,rootSnapshot:i})=>{let r=new vn(i,t),s=new Al("",r),o=MD(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new js([],Object.freeze({}),Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ue,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ue,t).pipe(nt(i=>({children:i,rootSnapshot:t})),Wi(i=>{if(i instanceof fa)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof da?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(nt(o=>o instanceof vn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ft(s).pipe(_s(o=>{let a=i.children[o],c=AD(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Xd((o,a)=>(o.push(...a),o)),ji(null),qd(),kt(o=>{if(o===null)return zs(i);let a=$0(o);return mA(a),Le(a)}))}processSegment(e,t,i,r,s,o,a){return Ft(t).pipe(_s(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,i,r,s,o,a).pipe(Wi(l=>{if(l instanceof da)return Le(null);throw l}))),yi(c=>!!c),Wi(c=>{if(G0(c))return fA(i,r,s)?Le(new Ip):zs(i);throw c}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,c){return jn(i)!==o&&(o===Ue||!Pl(r,s,i))?zs(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,c):zs(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=j0(t,r,s);if(!c)return zs(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>pA&&(this.allowRedirects=!1));let h=new js(s,l,Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,M0(r),jn(r),r.component??r._loadedComponent??null,r,S0(r)),g=Dl(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(kt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=oA(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Vn(c=>c.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Vn(({routes:l})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=c,g=new js(f,d,Object.freeze(ve({},this.urlTree.queryParams)),this.urlTree.fragment,M0(i),jn(i),i.component??i._loadedComponent??null,i,S0(i)),y=Dl(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=x0(t,f,h,l);if(p.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(nt(b=>new vn(g,b)));if(l.length===0&&p.length===0)return Le(new vn(g,[]));let w=jn(i)===s;return this.processSegment(u,l,m,p,w?Ue:s,!0,g).pipe(nt(b=>new vn(g,b instanceof vn?[b]:[])))}))):zs(t)))}getChildConfig(e,t,i){return t.children?Le({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Le({routes:t._loadedRoutes,injector:t._loadedInjector}):nA(e,t,i,this.urlSerializer).pipe(kt(r=>r?this.configLoader.loadChildren(e,t).pipe($t(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):sA(t))):Le({routes:[],injector:e})}};function mA(n){n.sort((e,t)=>e.value.outlet===Ue?-1:t.value.outlet===Ue?1:e.value.outlet.localeCompare(t.value.outlet))}function gA(n){let e=n.value.routeConfig;return e&&e.path===""}function $0(n){let e=[],t=new Set;for(let i of n){if(!gA(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=$0(i.children);e.push(new vn(i.value,r))}return e.filter(i=>!t.has(i))}function M0(n){return n.data||{}}function S0(n){return n.resolve||{}}function vA(n,e,t,i,r,s){return kt(o=>hA(n,e,t,i,o.extractedUrl,r,s).pipe(nt(({state:a,tree:c})=>Mt(ve({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function yA(n,e){return kt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Le(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of q0(c))o.add(l);let a=0;return Ft(o).pipe(_s(c=>s.has(c)?_A(c,i,n,e):(c.data=Dl(c,c.parent,n).resolve,Le(void 0))),$t(()=>a++),xs(1),kt(c=>a===o.size?Le(t):an))})}function q0(n){let e=n.children.map(t=>q0(t)).flat();return[n,...e]}function _A(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!B0(r)&&(s[ha]=r.title),xA(s,n,e,i).pipe(nt(o=>(n._resolvedData=o,n.data=Dl(n,n.parent,t).resolve,null)))}function xA(n,e,t,i){let r=ap(n);if(r.length===0)return Le({});let s={};return Ft(r).pipe(kt(o=>MA(n[o],e,t,i).pipe(yi(),$t(a=>{if(a instanceof ua)throw Il(new ia,a);s[o]=a}))),xs(1),nt(()=>s),Wi(o=>G0(o)?an:vs(o)))}function MA(n,e,t,i){let r=pa(e)??i,s=Js(n,r),o=s.resolve?s.resolve(e,t):Gn(r,()=>s(e,t));return Yi(o)}function sp(n){return Vn(e=>{let t=n(e);return t?Ft(t).pipe(nt(()=>e)):Le(e)})}var X0=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===Ue);return i}getResolvedTitleForRoute(t){return t.data[ha]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>re(SA),providedIn:"root"})}return n})(),SA=(()=>{class n extends X0{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(We(m0))};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kp=new Pe("",{providedIn:"root",factory:()=>({})}),EA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=un({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Jt(0,"router-outlet")},dependencies:[Lp],encapsulation:2})}return n})();function Up(n){let e=n.children&&n.children.map(Up),t=e?Mt(ve({},n),{children:e}):ve({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ue&&(t.component=EA),t}var Bp=new Pe(""),bA=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=re($h);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Le(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=Yi(t.loadComponent()).pipe(nt(Y0),$t(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Do(()=>{this.componentLoaders.delete(t)})),r=new gs(i,()=>new Wt).pipe(ms());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Le({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=wA(i,this.compiler,t,this.onLoadEndListener).pipe(Do(()=>{this.childrenLoaders.delete(i)})),o=new gs(s,()=>new Wt).pipe(ms());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function wA(n,e,t,i){return Yi(n.loadChildren()).pipe(nt(Y0),kt(r=>r instanceof Fh||Array.isArray(r)?Le(r):Ft(e.compileModuleAsync(r))),nt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Bp,[],{optional:!0,self:!0}).flat()),{routes:o.map(Up),injector:s}}))}function CA(n){return n&&typeof n=="object"&&"default"in n}function Y0(n){return CA(n)?n.default:n}var Vp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>re(TA),providedIn:"root"})}return n})(),TA=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),DA=new Pe("");var AA=new Pe(""),IA=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Wt;transitionAbortSubject=new Wt;configLoader=re(bA);environmentInjector=re(Dn);destroyRef=re(il);urlSerializer=re(Pp);rootContexts=re(Nl);location=re(Yo);inputBindingEnabled=re(Fp,{optional:!0})!==null;titleStrategy=re(X0);options=re(kp,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=re(Vp);createViewTransition=re(DA,{optional:!0});navigationErrorHandler=re(AA,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Le(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new gp(r)),i=r=>this.events.next(new vp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Mt(ve({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i}))}setupNavigations(t){return this.transitions=new jt(null),this.transitions.pipe(Bn(i=>i!==null),Vn(i=>{let r=!1,s=!1;return Le(i).pipe(Vn(o=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",yn.SupersededByNewNavigation),an;this.currentTransition=i,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?Mt(ve({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new Fr(o.id,this.urlSerializer.serialize(o.rawUrl),l,dp.IgnoredSameUrlNavigation)),o.resolve(!1),an}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Le(o).pipe(Vn(l=>(this.events.next(new oa(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?an:Promise.resolve(l))),vA(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),$t(l=>{i.targetSnapshot=l.targetSnapshot,i.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=Mt(ve({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new wl(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:d,restoredState:f,extras:h}=o,g=new oa(l,this.urlSerializer.serialize(u),d,f);this.events.next(g);let y=k0(this.rootComponentType).snapshot;return this.currentTransition=i=Mt(ve({},o),{targetSnapshot:y,urlAfterRedirects:u,extras:Mt(ve({},h),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Le(i)}else{let l="";return this.events.next(new Fr(o.id,this.urlSerializer.serialize(o.extractedUrl),l,dp.IgnoredByUrlHandlingStrategy)),o.resolve(!1),an}}),$t(o=>{let a=new fp(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),nt(o=>(this.currentTransition=i=Mt(ve({},o),{guards:kD(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),i)),XD(this.environmentInjector,o=>this.events.next(o)),$t(o=>{if(i.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Il(this.urlSerializer,o.guardsResult);let a=new hp(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),Bn(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",yn.GuardRejected),!1)),sp(o=>{if(o.guards.canActivateChecks.length!==0)return Le(o).pipe($t(a=>{let c=new pp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),Vn(a=>{let c=!1;return Le(a).pipe(yA(this.paramsInheritanceStrategy,this.environmentInjector),$t({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",yn.NoDataFromResolver)}}))}),$t(a=>{let c=new mp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),sp(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe($t(u=>{c.component=u}),nt(()=>{})));for(let u of c.children)l.push(...a(u));return l};return yc(a(o.targetSnapshot.root)).pipe(ji(null),vi(1))}),sp(()=>this.afterPreactivation()),Vn(()=>{let{currentSnapshot:o,targetSnapshot:a}=i,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?Ft(c).pipe(nt(()=>i)):Le(i)}),nt(o=>{let a=ND(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=i=Mt(ve({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,i}),$t(()=>{this.events.next(new ca)}),FD(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),vi(1),$t({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Lr(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),Zd(this.transitionAbortSubject.pipe($t(o=>{throw o}))),Do(()=>{!r&&!s&&this.cancelNavigationTransition(i,"",yn.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation=null,this.currentTransition=null)}),Wi(o=>{if(this.destroyed)return i.resolve(!1),an;if(s=!0,z0(o))this.events.next(new Ai(i.id,this.urlSerializer.serialize(i.extractedUrl),o.message,o.cancellationCode)),LD(o)?this.events.next(new Xs(o.url,o.navigationBehaviorOptions)):i.resolve(!1);else{let a=new aa(i.id,this.urlSerializer.serialize(i.extractedUrl),o,i.targetSnapshot??void 0);try{let c=Gn(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof ua){let{message:l,cancellationCode:u}=Il(this.urlSerializer,c);this.events.next(new Ai(i.id,this.urlSerializer.serialize(i.extractedUrl),l,u)),this.events.next(new Xs(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return an}))}))}cancelNavigationTransition(t,i,r){let s=new Ai(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function RA(n){return n!==Sl}var NA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>re(PA),providedIn:"root"})}return n})(),Np=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},PA=(()=>{class n extends Np{static \u0275fac=(()=>{let t;return function(r){return(t||(t=fh(n)))(r||n)}})();static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Z0=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:()=>re(OA),providedIn:"root"})}return n})(),OA=(()=>{class n extends Z0{location=re(Yo);urlSerializer=re(Pp);options=re(kp,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=re(Vp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ii;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=k0(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof oa)this.stateMemento=this.createStateMemento();else if(t instanceof Fr)this.rawUrlTree=i.initialUrl;else if(t instanceof wl){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof ca?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof Ai&&(t.code===yn.GuardRejected||t.code===yn.NoDataFromResolver)?this.restoreHistory(i):t instanceof aa?this.restoreHistory(i,!0):t instanceof Lr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof Ii?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=ve(ve({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=ve(ve({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=fh(n)))(r||n)}})();static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function LA(n,e){n.events.pipe(Bn(t=>t instanceof Lr||t instanceof Ai||t instanceof aa||t instanceof Fr),nt(t=>t instanceof Lr||t instanceof Fr?0:(t instanceof Ai?t.code===yn.Redirect||t.code===yn.SupersededByNewNavigation:!1)?2:1),Bn(t=>t!==2),vi(1)).subscribe(()=>{e()})}var FA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},kA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},J0=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=re(Hh);stateManager=re(Z0);options=re(kp,{optional:!0})||{};pendingTasks=re(Fs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=re(IA);urlSerializer=re(Pp);location=re(Yo);urlHandlingStrategy=re(Vp);_events=new Wt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=re(NA);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=re(Bp,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!re(Fp,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Nt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof Ai&&i.code!==yn.Redirect&&i.code!==yn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Lr)this.navigated=!0;else if(i instanceof Xs){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=ve({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||RA(r.source)},o);this.scheduleNavigation(a,Sl,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}BA(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Sl,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=ve({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Up),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ve(ve({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=P0(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return O0(d,t,u,l??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=ra(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Sl,null,i)}navigate(t,i={skipLocationChange:!1}){return UA(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=ve({},FA):i===!1?r=ve({},kA):r=i,ra(t))return g0(this.currentUrlTree,t,r);let s=this.parseUrl(t);return g0(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((d,f)=>{a=d,c=f});let u=this.pendingTasks.add();return LA(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Oe({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function UA(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new we(4008,!1)}function BA(n){return!(n instanceof ca)&&!(n instanceof Xs)}var VA=new Pe("");function K0(n,...e){return Kc([{provide:Bp,multi:!0,useValue:n},[],{provide:Ys,useFactory:HA,deps:[J0]},{provide:zh,multi:!0,useFactory:zA},e.map(t=>t.\u0275providers)])}function HA(n){return n.routerState.root}function zA(){let n=re(ti);return e=>{let t=n.get(Xi);if(e!==t.components[0])return;let i=n.get(J0),r=n.get(GA);n.get(WA)===1&&i.initialNavigation(),n.get(jA,null,He.Optional)?.setUpPreloading(),n.get(VA,null,He.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var GA=new Pe("",{factory:()=>new Wt}),WA=new Pe("",{providedIn:"root",factory:()=>1});var jA=new Pe("");var Ks=class n{isMenuActive=!1;toggleMenu(){this.isMenuActive=!this.isMenuActive}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=un({type:n,selectors:[["app-navigation"]],decls:18,vars:4,consts:[[1,"navbar"],[1,"nav-links"],["href","#home",1,"nav-item"],["href","#about",1,"nav-item"],["href","#projects",1,"nav-item"],["href","#contact",1,"nav-item"],[1,"hamburger",3,"click"]],template:function(t,i){t&1&&(lt(0,"nav",0)(1,"ul",1)(2,"li")(3,"a",2),Ct(4,"Home"),ut()(),lt(5,"li")(6,"a",3),Ct(7,"About"),ut()(),lt(8,"li")(9,"a",4),Ct(10,"Projects"),ut()(),lt(11,"li")(12,"a",5),Ct(13,"Contact"),ut()()(),lt(14,"div",6),Vs("click",function(){return i.toggleMenu()}),Jt(15,"span")(16,"span")(17,"span"),ut()()),t&2&&(Rr(),ll("active",i.isMenuActive),Rr(13),ll("active",i.isMenuActive))},styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}.navbar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:20px;background-color:#18171700;color:#fff;position:fixed;width:100%;z-index:1000;transition:background-color .3s ease-in-out}.nav-links[_ngcontent-%COMP%]{display:flex;gap:50px;transition:transform .5s ease-in-out}.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.nav-item[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-size:1rem;transition:color .3s ease-in-out}.nav-item[_ngcontent-%COMP%]:hover{color:#12d6d6}.hamburger[_ngcontent-%COMP%]{display:none;flex-direction:column;cursor:pointer;gap:5px}.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:30px;height:3px;background-color:#fff;transition:transform .3s ease-in-out}@media (max-width: 768px){.nav-links[_ngcontent-%COMP%]{display:none;position:absolute;top:60px;right:0;width:200px;background:#000000e6;flex-direction:column;padding:20px;border-radius:10px}.nav-links.active[_ngcontent-%COMP%], .hamburger[_ngcontent-%COMP%]{display:flex}}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){transform:rotate(45deg) translateY(8px)}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){opacity:0}.hamburger.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg) translateY(-8px)}"]})};var Q0=[{path:"",component:Ks}];var ex={providers:[G_({eventCoalescing:!0}),K0(Q0)]};var Eu="174";var xx=0,vm=1,Mx=2;var ym=1,Sx=2,li=3,ki=0,sn=1,ui=2,Vi=0,Wr=1,Ua=2,_m=3,xm=4,Ex=5,rr=100,bx=101,wx=102,Cx=103,Tx=104,Dx=200,Ax=201,Ix=202,Rx=203,tu=204,nu=205,Nx=206,Px=207,Ox=208,Lx=209,Fx=210,kx=211,Ux=212,Bx=213,Vx=214,bu=0,wu=1,Cu=2,jr=3,Tu=4,Du=5,Au=6,Iu=7,Mm=0,Hx=1,zx=2,Hi=0,Gx=1,Wx=2,jx=3,$x=4,qx=5,Xx=6,Yx=7;var lm=300,Qr=301,es=302,Ru=303,Nu=304,Ba=306,iu=1e3,ir=1001,ru=1002,Pn=1003,Zx=1004;var Va=1005;var Yn=1006,Pu=1007;var ur=1008;var di=1009,Sm=1010,Em=1011,go=1012,Ou=1013,dr=1014,fi=1015,vo=1016,Lu=1017,Fu=1018,ts=1020,bm=35902,wm=1021,Cm=1022,Ln=1023,Tm=1024,Dm=1025,Gr=1026,$r=1027,Am=1028,ku=1029,Im=1030,Uu=1031;var Bu=1033,Ha=33776,za=33777,Ga=33778,Wa=33779,Vu=35840,Hu=35841,zu=35842,Gu=35843,Wu=36196,ju=37492,$u=37496,qu=37808,Xu=37809,Yu=37810,Zu=37811,Ju=37812,Ku=37813,Qu=37814,ed=37815,td=37816,nd=37817,id=37818,rd=37819,sd=37820,od=37821,ja=36492,ad=36494,cd=36495,Rm=36283,ld=36284,ud=36285,dd=36286;var Sa=2300,su=2301,eu=2302,um=2400,dm=2401,fm=2402;var Jx=3200,Kx=3201;var Qx=0,eM=1,zi="",Mn="srgb",qr="srgb-linear",Ea="linear",ht="srgb";var Hr=7680;var hm=519,tM=512,nM=513,iM=514,Nm=515,rM=516,sM=517,oM=518,aM=519,pm=35044;var Pm="300 es",oi=2e3,ba=2001;var Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hp=Math.PI/180,ou=180/Math.PI;function $a(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function $A(n,e){return(n%e+e)%e}function zp(n,e,t){return(1-t)*n+t*e}function va(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var mt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],w=r[1],b=r[4],E=r[7],P=r[2],R=r[5],T=r[8];return s[0]=o*y+a*w+c*P,s[3]=o*m+a*b+c*R,s[6]=o*p+a*E+c*T,s[1]=l*y+u*w+d*P,s[4]=l*m+u*b+d*R,s[7]=l*p+u*E+d*T,s[2]=f*y+h*w+g*P,s[5]=f*m+h*b+g*R,s[8]=f*p+h*E+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gp.makeScale(e,t)),this}rotate(e){return this.premultiply(Gp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gp=new Fe;function Om(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cM(){let n=wa("canvas");return n.style.display="block",n}var tx={};function fr(n){n in tx||(tx[n]=!0,console.warn(n))}function lM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function uM(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dM(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nx=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ix=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qA(){let n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Fi(r.r),r.g=Fi(r.g),r.b=Fi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=fo(r.r),r.g=fo(r.g),r.b=fo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zi?Ea:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:Ea,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:nx,fromXYZ:ix,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}var rt=qA();function Fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,au=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=wa("canvas")),Qs.width=e.width,Qs.height=e.height;let i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fi(t[i]/255)*255):t[i]=Fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},XA=0,ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XA++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wp(r[o].image)):s.push(Wp(r[o]))}else s=Wp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Wp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?au.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var YA=0,hr=(()=>{class n extends Ui{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=ir,s=ir,o=Yn,a=ur,c=Ln,l=di,u=n.DEFAULT_ANISOTROPY,d=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=$a(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case iu:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case ru:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case iu:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case ru:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=lm,n.DEFAULT_ANISOTROPY=1,n})(),Dt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,E=(h+1)/2,P=(p+1)/2,R=(u+f)/4,T=(d+y)/4,O=(g+m)/4;return b>E&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=T/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=O/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-y)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cu=class extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new hr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends cu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ca=class extends hr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lu=class extends hr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==h||u!==g){let m=1-a,p=c*f+l*h+u*g+d*y,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let P=Math.sqrt(b),R=Math.atan2(P,p*w);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let E=a*w;if(c=c*m+f*E,l=l*m+h*E,u=u*m+g*E,d=d*m+y*E,m===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=P,l*=P,u*=P,d*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-a*h,e[t+2]=l*g+u*h+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jp.copy(this).projectOnVector(e),this.sub(jp)}reflect(e){return this.sub(jp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jp=new U,rx=new Bi,sr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),Ll.subVectors(this.max,ya),eo.subVectors(e.a,ya),to.subVectors(e.b,ya),no.subVectors(e.c,ya),Zi.subVectors(to,eo),Ji.subVectors(no,to),kr.subVectors(eo,no);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-kr.z,kr.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,kr.z,0,-kr.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-kr.y,kr.x,0];return!$p(t,eo,to,no,Ll)||(t=[1,0,0,0,1,0,0,0,1],!$p(t,eo,to,no,Ll))?!1:(Fl.crossVectors(Zi,Ji),t=[Fl.x,Fl.y,Fl.z],$p(t,eo,to,no,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ri=[new U,new U,new U,new U,new U,new U,new U,new U],$n=new U,Ol=new sr,eo=new U,to=new U,no=new U,Zi=new U,Ji=new U,kr=new U,ya=new U,Ll=new U,Fl=new U,Ur=new U;function $p(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ur.fromArray(n,s);let a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),c=e.dot(Ur),l=t.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ZA=new sr,_a=new U,qp=new U,Xr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ZA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);let t=_a.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(qp)),this.expandByPoint(_a.copy(e.center).sub(qp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new U,Xp=new U,kl=new U,Ki=new U,Yp=new U,Ul=new U,Zp=new U,Ta=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xp.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Xp);let s=e.distanceTo(t)*.5,o=-this.direction.dot(kl),a=Ki.dot(this.direction),c=-Ki.dot(kl),l=Ki.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xp).addScaledVector(kl,f),h}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){Yp.subVectors(t,e),Ul.subVectors(i,e),Zp.crossVectors(Yp,Ul);let o=this.direction.dot(Zp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(Ul.crossVectors(Ki,Ul));if(c<0)return null;let l=a*this.direction.dot(Yp.cross(Ki));if(l<0||c+l>o)return null;let u=-a*Ki.dot(Zp);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},It=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),s=1/io.setFromMatrixColumn(e,1).length(),o=1/io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*c,h=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JA,e,KA)}lookAt(e,t,i){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Qi.crossVectors(i,_n),Qi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Qi.crossVectors(i,_n)),Qi.normalize(),Bl.crossVectors(_n,Qi),r[0]=Qi.x,r[4]=Bl.x,r[8]=_n.x,r[1]=Qi.y,r[5]=Bl.y,r[9]=_n.y,r[2]=Qi.z,r[6]=Bl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],w=i[3],b=i[7],E=i[11],P=i[15],R=r[0],T=r[4],O=r[8],M=r[12],x=r[1],D=r[5],G=r[9],B=r[13],X=r[2],Y=r[6],j=r[10],J=r[14],H=r[3],se=r[7],de=r[11],xe=r[15];return s[0]=o*R+a*x+c*X+l*H,s[4]=o*T+a*D+c*Y+l*se,s[8]=o*O+a*G+c*j+l*de,s[12]=o*M+a*B+c*J+l*xe,s[1]=u*R+d*x+f*X+h*H,s[5]=u*T+d*D+f*Y+h*se,s[9]=u*O+d*G+f*j+h*de,s[13]=u*M+d*B+f*J+h*xe,s[2]=g*R+y*x+m*X+p*H,s[6]=g*T+y*D+m*Y+p*se,s[10]=g*O+y*G+m*j+p*de,s[14]=g*M+y*B+m*J+p*xe,s[3]=w*R+b*x+E*X+P*H,s[7]=w*T+b*D+E*Y+P*se,s[11]=w*O+b*G+E*j+P*de,s[15]=w*M+b*B+E*J+P*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*h-i*c*h)+y*(+t*c*h-t*l*f+s*o*f-r*o*h+r*l*u-s*c*u)+m*(+t*l*d-t*a*h-s*o*d+i*o*h+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],w=d*m*l-y*f*l+y*c*h-a*m*h-d*c*p+a*f*p,b=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,E=u*y*l-g*d*l+g*a*h-o*y*h-u*a*p+o*d*p,P=g*d*c-u*y*c-g*a*f+o*y*f+u*a*m-o*d*m,R=t*w+i*b+r*E+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=w*T,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*T,e[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*p+i*c*p)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*h-i*c*h)*T,e[4]=b*T,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*h+t*c*h)*T,e[8]=E*T,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*T,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*h-t*a*h)*T,e[12]=P*T,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,w=c*l,b=c*u,E=c*d,P=i.x,R=i.y,T=i.z;return r[0]=(1-(y+p))*P,r[1]=(h+E)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(h-E)*R,r[5]=(1-(f+p))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(g+b)*T,r[9]=(m-w)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=io.set(r[0],r[1],r[2]).length(),o=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);let l=1/s,u=1/o,d=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=oi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===oi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ba)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=oi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,h=(i+r)*u,g,y;if(a===oi)g=(o+s)*d,y=-2*d;else if(a===ba)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},io=new U,qn=new It,JA=new U(0,0,0),KA=new U(1,1,1),Qi=new U,Bl=new U,_n=new U,sx=new It,ox=new Bi,Yr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return sx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ox.setFromEuler(this),this.setFromQuaternion(ox,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},QA=0,ax=new U,ro=new Bi,Pi=new It,Vl=new U,xa=new U,eI=new U,tI=new Bi,cx=new U(1,0,0),lx=new U(0,1,0),ux=new U(0,0,1),dx={type:"added"},nI={type:"removed"},so={type:"childadded",child:null},Jp={type:"childremoved",child:null},pr=(()=>{class n extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QA++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,i=new Yr,r=new Bi,s=new U(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new Fe}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ro.setFromAxisAngle(t,i),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,i){return ro.setFromAxisAngle(t,i),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(cx,t)}rotateY(t){return this.rotateOnAxis(lx,t)}rotateZ(t){return this.rotateOnAxis(ux,t)}translateOnAxis(t,i){return ax.copy(t).applyQuaternion(this.quaternion),this.position.add(ax.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(cx,t)}translateY(t){return this.translateOnAxis(lx,t)}translateZ(t){return this.translateOnAxis(ux,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Vl.copy(t):Vl.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(xa,Vl,this.up):Pi.lookAt(Vl,xa,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(Pi),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dx),so.child=t,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(nI),Jp.child=t,this.dispatchEvent(Jp),Jp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dx),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,t,eI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,tI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new U(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Xn=new U,Oi=new U,Kp=new U,Li=new U,oo=new U,ao=new U,fx=new U,Qp=new U,em=new U,tm=new U,nm=new Dt,im=new Dt,rm=new Dt,nr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),Oi.subVectors(i,t),Kp.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(Oi),c=Xn.dot(Kp),l=Oi.dot(Oi),u=Oi.dot(Kp),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Li.x),c.addScaledVector(o,Li.y),c.addScaledVector(a,Li.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return nm.setScalar(0),im.setScalar(0),rm.setScalar(0),nm.fromBufferAttribute(e,t),im.fromBufferAttribute(e,i),rm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nm,s.x),o.addScaledVector(im,s.y),o.addScaledVector(rm,s.z),o}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),Oi.subVectors(e,t),Xn.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),Xn.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;oo.subVectors(r,i),ao.subVectors(s,i),Qp.subVectors(e,i);let c=oo.dot(Qp),l=ao.dot(Qp);if(c<=0&&l<=0)return t.copy(i);em.subVectors(e,r);let u=oo.dot(em),d=ao.dot(em);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(oo,o);tm.subVectors(e,s);let h=oo.dot(tm),g=ao.dot(tm);if(g>=0&&h<=g)return t.copy(s);let y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ao,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return fx.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(fx,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(oo,o).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function sm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=$A(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sm(o,s,e+1/3),this.g=sm(o,s,e),this.b=sm(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let i=fM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return rt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(je(Qt.r*255,0,255))*65536+Math.round(je(Qt.g*255,0,255))*256+Math.round(je(Qt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Qt.copy(this),t);let i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Mn){rt.fromWorkingColorSpace(Qt.copy(this),e);let t=Qt.r,i=Qt.g,r=Qt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Hl);let i=zp(er.h,Hl.h,t),r=zp(er.s,Hl.s,t),s=zp(er.l,Hl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Ke;Ke.NAMES=fM;var iI=0,or=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iI++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Wr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tu&&(i.blendSrc=this.blendSrc),this.blendDst!==nu&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zr=class extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new U,zl=new mt,rI=0,en=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rI++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pm,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=va(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=va(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=va(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=va(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=va(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}};var Aa=class extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ia=class extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ai=class extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}},sI=0,Nn=new It,om=new pr,co=new U,xn=new sr,Ma=new sr,Ht=new U,Zn=class n extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sI++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Om(e)?Ia:Aa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return om.lookAt(e),om.updateMatrix(),this.applyMatrix4(om.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ma.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(xn.min,Ma.min),xn.expandByPoint(Ht),Ht.addVectors(xn.max,Ma.max),xn.expandByPoint(Ht)):(xn.expandByPoint(Ma.min),xn.expandByPoint(Ma.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(e,l),Ht.add(co)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<i.count;O++)a[O]=new U,c[O]=new U;let l=new U,u=new U,d=new U,f=new mt,h=new mt,g=new mt,y=new U,m=new U;function p(O,M,x){l.fromBufferAttribute(i,O),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,O),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[O].add(y),a[M].add(y),a[x].add(y),c[O].add(m),c[M].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,M=w.length;O<M;++O){let x=w[O],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new U,E=new U,P=new U,R=new U;function T(O){P.fromBufferAttribute(r,O),R.copy(P);let M=a[O];b.copy(M),b.sub(P.multiplyScalar(P.dot(M))).normalize(),E.crossVectors(R,M);let D=E.dot(c[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,D)}for(let O=0,M=w.length;O<M;++O){let x=w[O],D=x.start,G=x.count;for(let B=D,X=D+G;B<X;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,d=new U;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?h=c[y]*a.data.stride+a.offset:h=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new en(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hx=new It,Br=new Ta,Gl=new Xr,px=new U,Wl=new U,jl=new U,$l=new U,am=new U,ql=new U,mx=new U,Xl=new U,fn=class extends pr{constructor(e=new Zn,t=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(am.fromBufferAttribute(d,e),o?ql.addScaledVector(am,u):ql.addScaledVector(am.sub(t),u))}t.add(ql)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(Gl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Gl,px)===null||Br.origin.distanceToSquared(px)>(e.far-e.near)**2))&&(hx.copy(s).invert(),Br.copy(e.ray).applyMatrix4(hx),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=w,P=b;E<P;E+=3){let R=a.getX(E),T=a.getX(E+1),O=a.getX(E+2);r=Yl(this,p,e,i,l,u,d,R,T,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);r=Yl(this,o,e,i,l,u,d,w,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),b=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let E=w,P=b;E<P;E+=3){let R=E,T=E+1,O=E+2;r=Yl(this,p,e,i,l,u,d,R,T,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let w=m,b=m+1,E=m+2;r=Yl(this,o,e,i,l,u,d,w,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function oI(n,e,t,i,r,s,o,a){let c;if(e.side===sn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ki,a),c===null)return null;Xl.copy(a),Xl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Xl);return l<t.near||l>t.far?null:{distance:l,point:Xl.clone(),object:n}}function Yl(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Wl),n.getVertexPosition(c,jl),n.getVertexPosition(l,$l);let u=oI(n,e,t,i,Wl,jl,$l,mx);if(u){let d=new U;nr.getBarycoord(mx,Wl,jl,$l,d),r&&(u.uv=nr.getInterpolatedAttribute(r,a,c,l,d,new mt)),s&&(u.uv1=nr.getInterpolatedAttribute(s,a,c,l,d,new mt)),o&&(u.normal=nr.getInterpolatedAttribute(o,a,c,l,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};nr.getNormal(Wl,jl,$l,f.normal),u.face=f,u.barycoord=d}return u}var ar=class n extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ai(l,3)),this.setAttribute("normal",new ai(u,3)),this.setAttribute("uv",new ai(d,2));function g(y,m,p,w,b,E,P,R,T,O,M){let x=E/T,D=P/O,G=E/2,B=P/2,X=R/2,Y=T+1,j=O+1,J=0,H=0,se=new U;for(let de=0;de<j;de++){let xe=de*D-B;for(let ze=0;ze<Y;ze++){let gt=ze*x-G;se[y]=gt*w,se[m]=xe*b,se[p]=X,l.push(se.x,se.y,se.z),se[y]=0,se[m]=0,se[p]=R>0?1:-1,u.push(se.x,se.y,se.z),d.push(ze/T),d.push(1-de/O),J+=1}}for(let de=0;de<O;de++)for(let xe=0;xe<T;xe++){let ze=f+xe+Y*de,gt=f+xe+Y*(de+1),W=f+(xe+1)+Y*(de+1),ee=f+(xe+1)+Y*de;c.push(ze,gt,ee),c.push(gt,W,ee),H+=6}a.addGroup(h,H,M),h+=H,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ns(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=ns(n[t]);for(let r in i)e[r]=i[r]}return e}function aI(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var hM={clone:ns,merge:tn},cI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cI,this.fragmentShader=lI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=aI(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ra=class extends pr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=new U,gx=new mt,vx=new mt,zt=class extends Ra{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ou*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ou*2*Math.atan(Math.tan(Hp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,gx,vx),t.subVectors(vx,gx)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lo=-90,uo=1,uu=class extends pr{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zt(lo,uo,e,t);r.layers=this.layers,this.add(r);let s=new zt(lo,uo,e,t);s.layers=this.layers,this.add(s);let o=new zt(lo,uo,e,t);o.layers=this.layers,this.add(o);let a=new zt(lo,uo,e,t);a.layers=this.layers,this.add(a);let c=new zt(lo,uo,e,t);c.layers=this.layers,this.add(c);let l=new zt(lo,uo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Na=class extends hr{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},du=class extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Na(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ar(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Vi});s.uniforms.tEquirect.value=t;let o=new fn(r,s),a=t.minFilter;return t.minFilter===ur&&(t.minFilter=Yn),new uu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},zr=class extends pr{constructor(){super(),this.isGroup=!0,this.type="Group"}},uI={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uI)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Jr=class extends pr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentIntensity=1,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var cm=new U,dI=new U,fI=new Fe,si=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=cm.subVectors(i,t).cross(dI.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(cm),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fI.getNormalMatrix(e),r=this.coplanarPoint(cm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vr=new Xr,Zl=new U,Pa=class{constructor(e=new si,t=new si,i=new si,r=new si,s=new si,o=new si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],w=r[13],b=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,m-h,E-p).normalize(),i[1].setComponents(c+s,f+l,m+h,E+p).normalize(),i[2].setComponents(c+o,f+u,m+g,E+w).normalize(),i[3].setComponents(c-o,f-u,m-g,E-w).normalize(),i[4].setComponents(c-a,f-d,m-y,E-b).normalize(),t===oi)i[5].setComponents(c+a,f+d,m+y,E+b).normalize();else if(t===ba)i[5].setComponents(a,d,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Zl.x=r.normal.x>0?e.max.x:e.min.x,Zl.y=r.normal.y>0?e.max.y:e.min.y,Zl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mo=class extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yx=new It,mm=new Ta,Jl=new Xr,Kl=new U,Oa=class extends pr{constructor(e=new Zn,t=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;yx.copy(r).invert(),mm.copy(e.ray).applyMatrix4(yx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=f,y=h;g<y;g++){let m=l.getX(g);Kl.fromBufferAttribute(d,m),_x(Kl,m,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,y=h;g<y;g++)Kl.fromBufferAttribute(d,g),_x(Kl,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function _x(n,e,t,i,r,s,o){let a=mm.distanceSqToPoint(n);if(a<t){let c=new U;mm.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var La=class extends hr{constructor(e,t,i,r,s,o,a,c,l,u=Gr){if(u!==Gr&&u!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gr&&(i=dr),i===void 0&&u===$r&&(i=ts),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Fa=class n extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let w=p*f-o;for(let b=0;b<l;b++){let E=b*d-s;g.push(E,-w,0),y.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let b=w+l*p,E=w+l*(p+1),P=w+1+l*(p+1),R=w+1+l*p;h.push(b,E,R),h.push(E,P,R)}this.setIndex(h),this.setAttribute("position",new ai(g,3)),this.setAttribute("normal",new ai(y,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var fu=class extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hu=class extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ql(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hI(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Kr=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pu=class extends Kr{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:um,endingEnd:um}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case dm:s=e,a=2*t-i;break;case fm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case dm:o=e,c=2*i-t;break;case fm:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,w=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,b=(-1-h)*m+(1.5+h)*y+.5*g,E=h*m-h*y;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+w*o[l+P]+b*o[c+P]+E*o[d+P];return s}},mu=class extends Kr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},gu=class extends Kr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case su:t=this.InterpolantFactoryMethodLinear;break;case eu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return su;case this.InterpolantFactoryMethodSmooth:return eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&hI(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===eu,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=su;var cr=class extends On{constructor(e,t,i){super(e,t,i)}};cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Sa;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var vu=class extends On{};vu.prototype.ValueTypeName="color";var yu=class extends On{};yu.prototype.ValueTypeName="number";var _u=class extends Kr{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Bi.slerpFlat(s,0,o,l-a,o,l,c);return s}},ka=class extends On{InterpolantFactoryMethodLinear(e){return new _u(this.times,this.values,this.getValueSize(),e)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends On{constructor(e,t,i){super(e,t,i)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Sa;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends On{};xu.prototype.ValueTypeName="vector";var Mu=class extends Ra{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Su=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Fm="\\[\\]\\.:\\/",pI=new RegExp("["+Fm+"]","g"),km="[^"+Fm+"]",mI="[^"+Fm.replace("\\.","")+"]",gI=/((?:WC+[\/:])*)/.source.replace("WC",km),vI=/(WCOD+)?/.source.replace("WCOD",mI),yI=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",km),_I=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",km),xI=new RegExp("^"+gI+vI+yI+_I+"$"),MI=["material","materials","bones","map"],gm=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pI,"")}static parseTrackName(t){let i=xI.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);MI.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=gm,n})();Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H3=new Float32Array(1);function Um(n,e,t,i){let r=SI(i);switch(t){case wm:return n*e;case Tm:return n*e;case Dm:return n*e*2;case Am:return n*e/r.components*r.byteLength;case ku:return n*e/r.components*r.byteLength;case Im:return n*e*2/r.components*r.byteLength;case Uu:return n*e*2/r.components*r.byteLength;case Cm:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case Bu:return n*e*4/r.components*r.byteLength;case Ha:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hu:case Gu:return Math.max(n,16)*Math.max(e,8)/4;case Vu:case zu:return Math.max(n,8)*Math.max(e,8)/2;case Wu:case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ed:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case td:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case id:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case od:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ja:case ad:case cd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rm:case ld:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ud:case dd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SI(n){switch(n){case di:case Sm:return{byteLength:1,components:1};case go:case Em:case vo:return{byteLength:2,components:1};case Lu:case Fu:return{byteLength:2,components:4};case dr:case Ou:case fi:return{byteLength:4,components:1};case bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);function kM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function EI(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var bI=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wI=`#ifdef USE_ALPHAHASH
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
#endif`,CI=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TI=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DI=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,II=`#ifdef USE_AOMAP
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
#endif`,RI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NI=`#ifdef USE_BATCHING
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
#endif`,PI=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OI=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FI=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kI=`#ifdef USE_IRIDESCENCE
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
#endif`,UI=`#ifdef USE_BUMPMAP
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
#endif`,BI=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$I=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qI=`#define PI 3.141592653589793
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
} // validated`,XI=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YI=`vec3 transformedNormal = objectNormal;
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
#endif`,ZI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eR="gl_FragColor = linearToOutputTexel( gl_FragColor );",tR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nR=`#ifdef USE_ENVMAP
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
#endif`,iR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rR=`#ifdef USE_ENVMAP
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
#endif`,sR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oR=`#ifdef USE_ENVMAP
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
#endif`,aR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dR=`#ifdef USE_GRADIENTMAP
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
}`,fR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mR=`uniform bool receiveShadow;
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
#endif`,gR=`#ifdef USE_ENVMAP
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
#endif`,vR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_R=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MR=`PhysicalMaterial material;
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
#endif`,SR=`struct PhysicalMaterial {
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
}`,ER=`
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
#endif`,bR=`#if defined( RE_IndirectDiffuse )
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
#endif`,wR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PR=`#if defined( USE_POINTS_UV )
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
#endif`,OR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BR=`#ifdef USE_MORPHTARGETS
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
#endif`,VR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$R=`#ifdef USE_NORMALMAP
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
#endif`,qR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c1=`float getShadowMask() {
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
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`#include <common>
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
}`,I1=`#if DEPTH_PACKING == 3200
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
}`,R1=`#define DISTANCE
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
}`,N1=`#define DISTANCE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,U1=`uniform vec3 diffuse;
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
}`,B1=`#define LAMBERT
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
}`,V1=`#define LAMBERT
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
}`,H1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,G1=`#define NORMAL
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
}`,W1=`#define NORMAL
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
}`,j1=`#define PHONG
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
}`,$1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,X1=`#define STANDARD
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
}`,Y1=`#define TOON
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
}`,Z1=`#define TOON
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
}`,J1=`uniform float size;
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
}`,K1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,eN=`uniform vec3 color;
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
}`,tN=`uniform float rotation;
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
}`,nN=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:bI,alphahash_pars_fragment:wI,alphamap_fragment:CI,alphamap_pars_fragment:TI,alphatest_fragment:DI,alphatest_pars_fragment:AI,aomap_fragment:II,aomap_pars_fragment:RI,batching_pars_vertex:NI,batching_vertex:PI,begin_vertex:OI,beginnormal_vertex:LI,bsdfs:FI,iridescence_fragment:kI,bumpmap_pars_fragment:UI,clipping_planes_fragment:BI,clipping_planes_pars_fragment:VI,clipping_planes_pars_vertex:HI,clipping_planes_vertex:zI,color_fragment:GI,color_pars_fragment:WI,color_pars_vertex:jI,color_vertex:$I,common:qI,cube_uv_reflection_fragment:XI,defaultnormal_vertex:YI,displacementmap_pars_vertex:ZI,displacementmap_vertex:JI,emissivemap_fragment:KI,emissivemap_pars_fragment:QI,colorspace_fragment:eR,colorspace_pars_fragment:tR,envmap_fragment:nR,envmap_common_pars_fragment:iR,envmap_pars_fragment:rR,envmap_pars_vertex:sR,envmap_physical_pars_fragment:gR,envmap_vertex:oR,fog_vertex:aR,fog_pars_vertex:cR,fog_fragment:lR,fog_pars_fragment:uR,gradientmap_pars_fragment:dR,lightmap_pars_fragment:fR,lights_lambert_fragment:hR,lights_lambert_pars_fragment:pR,lights_pars_begin:mR,lights_toon_fragment:vR,lights_toon_pars_fragment:yR,lights_phong_fragment:_R,lights_phong_pars_fragment:xR,lights_physical_fragment:MR,lights_physical_pars_fragment:SR,lights_fragment_begin:ER,lights_fragment_maps:bR,lights_fragment_end:wR,logdepthbuf_fragment:CR,logdepthbuf_pars_fragment:TR,logdepthbuf_pars_vertex:DR,logdepthbuf_vertex:AR,map_fragment:IR,map_pars_fragment:RR,map_particle_fragment:NR,map_particle_pars_fragment:PR,metalnessmap_fragment:OR,metalnessmap_pars_fragment:LR,morphinstance_vertex:FR,morphcolor_vertex:kR,morphnormal_vertex:UR,morphtarget_pars_vertex:BR,morphtarget_vertex:VR,normal_fragment_begin:HR,normal_fragment_maps:zR,normal_pars_fragment:GR,normal_pars_vertex:WR,normal_vertex:jR,normalmap_pars_fragment:$R,clearcoat_normal_fragment_begin:qR,clearcoat_normal_fragment_maps:XR,clearcoat_pars_fragment:YR,iridescence_pars_fragment:ZR,opaque_fragment:JR,packing:KR,premultiplied_alpha_fragment:QR,project_vertex:e1,dithering_fragment:t1,dithering_pars_fragment:n1,roughnessmap_fragment:i1,roughnessmap_pars_fragment:r1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:o1,shadowmap_vertex:a1,shadowmask_pars_fragment:c1,skinbase_vertex:l1,skinning_pars_vertex:u1,skinning_vertex:d1,skinnormal_vertex:f1,specularmap_fragment:h1,specularmap_pars_fragment:p1,tonemapping_fragment:m1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:y1,uv_pars_fragment:_1,uv_pars_vertex:x1,uv_vertex:M1,worldpos_vertex:S1,background_vert:E1,background_frag:b1,backgroundCube_vert:w1,backgroundCube_frag:C1,cube_vert:T1,cube_frag:D1,depth_vert:A1,depth_frag:I1,distanceRGBA_vert:R1,distanceRGBA_frag:N1,equirect_vert:P1,equirect_frag:O1,linedashed_vert:L1,linedashed_frag:F1,meshbasic_vert:k1,meshbasic_frag:U1,meshlambert_vert:B1,meshlambert_frag:V1,meshmatcap_vert:H1,meshmatcap_frag:z1,meshnormal_vert:G1,meshnormal_frag:W1,meshphong_vert:j1,meshphong_frag:$1,meshphysical_vert:q1,meshphysical_frag:X1,meshtoon_vert:Y1,meshtoon_frag:Z1,points_vert:J1,points_frag:K1,shadow_vert:Q1,shadow_frag:eN,sprite_vert:tN,sprite_frag:nN},te={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},hi={basic:{uniforms:tn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:tn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:tn([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:tn([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:tn([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:tn([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:tn([te.points,te.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:tn([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:tn([te.common,te.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:tn([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:tn([te.sprite,te.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:tn([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:tn([te.lights,te.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};hi.physical={uniforms:tn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var fd={r:0,b:0,g:0},is=new Yr,iN=new It;function rN(n,e,t,i,r,s,o){let a=new Ke(0),c=s===!0?0:1,l,u,d=null,f=0,h=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function y(b){let E=!1,P=g(b);P===null?p(a,c):P&&P.isColor&&(p(P,1),E=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){let P=g(E);P&&(P.isCubeTexture||P.mapping===Ba)?(u===void 0&&(u=new fn(new ar(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ns(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),is.copy(E.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iN.makeRotationFromEuler(is)),u.material.toneMapped=rt.getTransfer(P.colorSpace)!==ht,(d!==P||f!==P.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,h=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new fn(new Fa(2,2),new Jn({name:"BackgroundMaterial",uniforms:ns(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=rt.getTransfer(P.colorSpace)!==ht,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=P,f=P.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(fd,Lm(n)),i.buffers.color.setClear(fd.r,fd.g,fd.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:y,addToRenderList:m,dispose:w}}function sN(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,D,G,B,X){let Y=!1,j=d(B,G,D);s!==j&&(s=j,l(s.object)),Y=h(x,B,G,X),Y&&g(x,B,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,E(x,D,G,B),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,D,G){let B=G.wireframe===!0,X=i[x.id];X===void 0&&(X={},i[x.id]=X);let Y=X[D.id];Y===void 0&&(Y={},X[D.id]=Y);let j=Y[B];return j===void 0&&(j=f(c()),Y[B]=j),j}function f(x){let D=[],G=[],B=[];for(let X=0;X<t;X++)D[X]=0,G[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:B,object:x,attributes:{},index:null}}function h(x,D,G,B){let X=s.attributes,Y=D.attributes,j=0,J=G.getAttributes();for(let H in J)if(J[H].location>=0){let de=X[H],xe=Y[H];if(xe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(x,D,G,B){let X={},Y=D.attributes,j=0,J=G.getAttributes();for(let H in J)if(J[H].location>=0){let de=Y[H];de===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));let xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),X[H]=xe,j++}s.attributes=X,s.attributesNum=j,s.index=B}function y(){let x=s.newAttributes;for(let D=0,G=x.length;D<G;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let G=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;G[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),X[x]!==D&&(n.vertexAttribDivisor(x,D),X[x]=D)}function w(){let x=s.newAttributes,D=s.enabledAttributes;for(let G=0,B=D.length;G<B;G++)D[G]!==x[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function b(x,D,G,B,X,Y,j){j===!0?n.vertexAttribIPointer(x,D,G,X,Y):n.vertexAttribPointer(x,D,G,B,X,Y)}function E(x,D,G,B){y();let X=B.attributes,Y=G.getAttributes(),j=D.defaultAttributeValues;for(let J in Y){let H=Y[J];if(H.location>=0){let se=X[J];if(se===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),se!==void 0){let de=se.normalized,xe=se.itemSize,ze=e.get(se);if(ze===void 0)continue;let gt=ze.buffer,W=ze.type,ee=ze.bytesPerElement,ge=W===n.INT||W===n.UNSIGNED_INT||se.gpuType===Ou;if(se.isInterleavedBufferAttribute){let oe=se.data,be=oe.stride,ot=se.offset;if(oe.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)p(H.location+Te,oe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<H.locationSize;Te++)m(H.location+Te);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let Te=0;Te<H.locationSize;Te++)b(H.location+Te,xe/H.locationSize,W,de,be*ee,(ot+xe/H.locationSize*Te)*ee,ge)}else{if(se.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let oe=0;oe<H.locationSize;oe++)b(H.location+oe,xe/H.locationSize,W,de,xe*ee,xe/H.locationSize*oe*ee,ge)}}else if(j!==void 0){let de=j[J];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(H.location,de);break;case 3:n.vertexAttrib3fv(H.location,de);break;case 4:n.vertexAttrib4fv(H.location,de);break;default:n.vertexAttrib1fv(H.location,de)}}}}w()}function P(){O();for(let x in i){let D=i[x];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;let D=i[x.id];for(let G in D){let B=D[G];for(let X in B)u(B[X].object),delete B[X];delete D[G]}delete i[x.id]}function T(x){for(let D in i){let G=i[D];if(G[x.id]===void 0)continue;let B=G[x.id];for(let X in B)u(B[X].object),delete B[X];delete G[x.id]}}function O(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function oN(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function aN(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Ln&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let O=T===vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==di&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==fi&&!O)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:P,maxSamples:R}}function cN(n){let e=this,t=null,i=0,r=!1,s=!1,o=new si,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let w=s?0:i,b=w*4,E=p.clippingState||null;c.value=E,E=u(g,f,b,h);for(let P=0;P!==b;++P)E[P]=t[P];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=h+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,E=h;b!==y;++b,E+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function lN(n){let e=new WeakMap;function t(o,a){return a===Ru?o.mapping=Qr:a===Nu&&(o.mapping=es),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ru||a===Nu)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new du(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var _o=4,pM=[.125,.215,.35,.446,.526,.582],os=20,Bm=new Mu,mM=new Ke,Vm=null,Hm=0,zm=0,Gm=!1,ss=(1+Math.sqrt(5))/2,yo=1/ss,gM=[new U(-ss,yo,0),new U(ss,yo,0),new U(-yo,0,ss),new U(yo,0,ss),new U(0,ss,-yo),new U(0,ss,yo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],uN=new U,md=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=uN}=s;Vm=this._renderer.getRenderTarget(),Hm=this._renderer.getActiveCubeFace(),zm=this._renderer.getActiveMipmapLevel(),Gm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_M(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vm,Hm,zm),this._renderer.xr.enabled=Gm,e.scissorTest=!1,hd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vm=this._renderer.getRenderTarget(),Hm=this._renderer.getActiveCubeFace(),zm=this._renderer.getActiveMipmapLevel(),Gm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:vo,format:Ln,colorSpace:qr,depthBuffer:!1},r=vM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vM(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dN(s)),this._blurMaterial=fN(s,e,t)}return r}_compileMaterial(e){let t=new fn(this._lodPlanes[0],e);this._renderer.compile(t,Bm)}_sceneToCubeUV(e,t,i,r,s){let c=new zt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(mM),d.toneMapping=Hi,d.autoClear=!1;let g=new Zr({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),y=new fn(new ar,g),m=!1,p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(mM),m=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):b===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));let E=this._cubeSize;hd(r,b*E,w>2?E:0,E,E),d.setRenderTarget(r),m&&d.render(y,c),d.render(e,c)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Qr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_M()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;hd(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Bm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gM[(r-s-1)%gM.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new fn(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*os-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):os;m>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],w=0;for(let T=0;T<os;++T){let O=T/y,M=Math.exp(-O*O/2);p.push(M),T===0?w+=M:T<m&&(w+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let E=this._sizeLods[r],P=3*E*(r>b-_o?r-b+_o:0),R=4*(this._cubeSize-E);hd(t,P,R,3*E,2*E),c.setRenderTarget(t),c.render(d,Bm)}};function dN(n){let e=[],t=[],i=[],r=n,s=n-_o+1+pM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-_o?c=pM[o-n+_o-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,w=new Float32Array(y*g*h),b=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let R=0;R<h;R++){let T=R%3*2/3-1,O=R>2?0:-1,M=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];w.set(M,y*g*R),b.set(f,m*g*R);let x=[R,R,R,R,R,R];E.set(x,p*g*R)}let P=new Zn;P.setAttribute("position",new en(w,y)),P.setAttribute("uv",new en(b,m)),P.setAttribute("faceIndex",new en(E,p)),e.push(P),r>_o&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vM(n,e,t){let i=new ci(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function fN(n,e,t){let i=new Float32Array(os),r=new U(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function yM(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function _M(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Qm(){return`

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
	`}function hN(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ru||c===Nu,u=c===Qr||c===es;if(l||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new md(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new md(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pN(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mN(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let w=h.array;y=h.version;for(let b=0,E=w.length;b<E;b+=3){let P=w[b+0],R=w[b+1],T=w[b+2];f.push(P,R,R,T,T,P)}}else if(g!==void 0){let w=g.array;y=g.version;for(let b=0,E=w.length/3-1;b<E;b+=3){let P=b+0,R=b+1,T=b+2;f.push(P,R,R,T,T,P)}}else return;let m=new(Om(f)?Ia:Aa)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function gN(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*y[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function vN(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yN(n,e,t){let i=new WeakMap,r=new Dt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;g===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let P=a.attributes.position.count*E,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let T=new Float32Array(P*R*4*d),O=new Ca(T,P,R,d);O.type=fi,O.needsUpdate=!0;let M=E*4;for(let D=0;D<d;D++){let G=p[D],B=w[D],X=b[D],Y=P*R*4*D;for(let j=0;j<G.count;j++){let J=j*M;g===!0&&(r.fromBufferAttribute(G,j),T[Y+J+0]=r.x,T[Y+J+1]=r.y,T[Y+J+2]=r.z,T[Y+J+3]=0),y===!0&&(r.fromBufferAttribute(B,j),T[Y+J+4]=r.x,T[Y+J+5]=r.y,T[Y+J+6]=r.z,T[Y+J+7]=0),m===!0&&(r.fromBufferAttribute(X,j),T[Y+J+8]=r.x,T[Y+J+9]=r.y,T[Y+J+10]=r.z,T[Y+J+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new mt(P,R)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function _N(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var UM=new hr,xM=new La(1,1),BM=new Ca,VM=new lu,HM=new Na,MM=[],SM=[],EM=new Float32Array(16),bM=new Float32Array(9),wM=new Float32Array(4);function So(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=MM[r];if(s===void 0&&(s=new Float32Array(r),MM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gd(n,e){let t=SM[e];t===void 0&&(t=new Int32Array(e),SM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function MN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function SN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function EN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function bN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;wM.set(i),n.uniformMatrix2fv(this.addr,!1,wM),Bt(t,i)}}function wN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;bM.set(i),n.uniformMatrix3fv(this.addr,!1,bM),Bt(t,i)}}function CN(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,i))return;EM.set(i),n.uniformMatrix4fv(this.addr,!1,EM),Bt(t,i)}}function TN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function AN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function IN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function RN(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function PN(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function ON(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function LN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xM.compareFunction=Nm,s=xM):s=UM,t.setTexture2D(e||s,r)}function FN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||VM,r)}function kN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||HM,r)}function UN(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||BM,r)}function BN(n){switch(n){case 5126:return xN;case 35664:return MN;case 35665:return SN;case 35666:return EN;case 35674:return bN;case 35675:return wN;case 35676:return CN;case 5124:case 35670:return TN;case 35667:case 35671:return DN;case 35668:case 35672:return AN;case 35669:case 35673:return IN;case 5125:return RN;case 36294:return NN;case 36295:return PN;case 36296:return ON;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return FN;case 35680:case 36300:case 36308:case 36293:return kN;case 36289:case 36303:case 36311:case 36292:return UN}}function VN(n,e){n.uniform1fv(this.addr,e)}function HN(n,e){let t=So(e,this.size,2);n.uniform2fv(this.addr,t)}function zN(n,e){let t=So(e,this.size,3);n.uniform3fv(this.addr,t)}function GN(n,e){let t=So(e,this.size,4);n.uniform4fv(this.addr,t)}function WN(n,e){let t=So(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jN(n,e){let t=So(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $N(n,e){let t=So(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qN(n,e){n.uniform1iv(this.addr,e)}function XN(n,e){n.uniform2iv(this.addr,e)}function YN(n,e){n.uniform3iv(this.addr,e)}function ZN(n,e){n.uniform4iv(this.addr,e)}function JN(n,e){n.uniform1uiv(this.addr,e)}function KN(n,e){n.uniform2uiv(this.addr,e)}function QN(n,e){n.uniform3uiv(this.addr,e)}function eP(n,e){n.uniform4uiv(this.addr,e)}function tP(n,e,t){let i=this.cache,r=e.length,s=gd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||UM,s[o])}function nP(n,e,t){let i=this.cache,r=e.length,s=gd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||VM,s[o])}function iP(n,e,t){let i=this.cache,r=e.length,s=gd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||HM,s[o])}function rP(n,e,t){let i=this.cache,r=e.length,s=gd(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||BM,s[o])}function sP(n){switch(n){case 5126:return VN;case 35664:return HN;case 35665:return zN;case 35666:return GN;case 35674:return WN;case 35675:return jN;case 35676:return $N;case 5124:case 35670:return qN;case 35667:case 35671:return XN;case 35668:case 35672:return YN;case 35669:case 35673:return ZN;case 5125:return JN;case 36294:return KN;case 36295:return QN;case 36296:return eP;case 35678:case 36198:case 36298:case 36306:case 35682:return tP;case 35679:case 36299:case 36307:return nP;case 35680:case 36300:case 36308:case 36293:return iP;case 36289:case 36303:case 36311:case 36292:return rP}}var jm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=BN(t.type)}},$m=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sP(t.type)}},qm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Wm=/(\w+)(\])?(\[|\.)?/g;function CM(n,e){n.seq.push(e),n.map[e.id]=e}function oP(n,e,t){let i=n.name,r=i.length;for(Wm.lastIndex=0;;){let s=Wm.exec(i),o=Wm.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){CM(t,l===void 0?new jm(a,n,e):new $m(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new qm(a),CM(t,d)),t=d}}}var xo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);oP(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function TM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var aP=37297,cP=0;function lP(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var DM=new Fe;function uP(n){rt._getMatrix(DM,rt.workingColorSpace,n);let e=`mat3( ${DM.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ea:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function AM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lP(n.getShaderSource(e),o)}else return r}function dP(n,e){let t=uP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fP(n,e){let t;switch(e){case Gx:t="Linear";break;case Wx:t="Reinhard";break;case jx:t="Cineon";break;case $x:t="ACESFilmic";break;case Xx:t="AgX";break;case Yx:t="Neutral";break;case qx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pd=new U;function hP(){rt.getLuminanceCoefficients(pd);let n=pd.x.toFixed(4),e=pd.y.toFixed(4),t=pd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function mP(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gP(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qa(n){return n!==""}function IM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function RM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(n){return n.replace(vP,_P)}var yP=new Map;function _P(n,e){let t=Ve[e];if(t===void 0){let i=yP.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xm(t)}var xP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function NM(n){return n.replace(xP,MP)}function MP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function PM(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function SP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ym?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function EP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function wP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mm:e="ENVMAP_BLENDING_MULTIPLY";break;case Hx:e="ENVMAP_BLENDING_MIX";break;case zx:e="ENVMAP_BLENDING_ADD";break}return e}function CP(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TP(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=SP(t),l=EP(t),u=bP(t),d=wP(t),f=CP(t),h=pP(t),g=mP(s),y=r.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(m=[PM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[PM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Hi?fP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,dP("linearToOutputTexel",t.outputColorSpace),hP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),o=Xm(o),o=IM(o,t),o=RM(o,t),a=Xm(a),a=IM(a,t),a=RM(a,t),o=NM(o),a=NM(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=w+m+o,E=w+p+a,P=TM(r,r.VERTEX_SHADER,b),R=TM(r,r.FRAGMENT_SHADER,E);r.attachShader(y,P),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(D){if(n.debug.checkShaderErrors){let G=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(R).trim(),Y=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,P,R);else{let J=AM(r,P,"vertex"),H=AM(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+J+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||X==="")&&(j=!1);j&&(D.diagnostics={runnable:Y,programLog:G,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(P),r.deleteShader(R),O=new xo(r,y),M=gP(r,y)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,aP)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cP++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}var DP=0,Ym=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Zm(e),t.set(e,i)),i}},Zm=class{constructor(e){this.id=DP++,this.code=e,this.usedTimes=0}};function AP(n,e,t,i,r,s,o){let a=new Da,c=new Ym,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,G,B){let X=G.fog,Y=B.geometry,j=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),H=J&&J.mapping===Ba?J.image.height:null,se=g[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xe=de!==void 0?de.length:0,ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let gt,W,ee,ge;if(se){let ft=hi[se];gt=ft.vertexShader,W=ft.fragmentShader}else gt=M.vertexShader,W=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),ge=c.getFragmentShaderID(M);let oe=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),ot=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,At=!!M.map,Et=!!M.matcap,$e=!!J,C=!!M.aoMap,Sn=!!M.lightMap,qe=!!M.bumpMap,Xe=!!M.normalMap,Me=!!M.displacementMap,xt=!!M.emissiveMap,_e=!!M.metalnessMap,S=!!M.roughnessMap,v=M.anisotropy>0,L=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,z=M.sheen>0,ye=M.transmission>0,ae=v&&!!M.anisotropyMap,fe=L&&!!M.clearcoatMap,Qe=L&&!!M.clearcoatNormalMap,Q=L&&!!M.clearcoatRoughnessMap,he=Z&&!!M.iridescenceMap,Ce=Z&&!!M.iridescenceThicknessMap,De=z&&!!M.sheenColorMap,pe=z&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,Be=!!M.specularColorMap,yt=!!M.specularIntensityMap,A=ye&&!!M.transmissionMap,ne=ye&&!!M.thicknessMap,V=!!M.gradientMap,q=!!M.alphaMap,le=M.alphaTest>0,ce=!!M.alphaHash,ke=!!M.extensions,bt=Hi;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(bt=n.toneMapping);let Yt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:W,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:ot,instancingColor:ot&&B.instanceColor!==null,instancingMorph:ot&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:qr,alphaToCoverage:!!M.alphaToCoverage,map:At,matcap:Et,envMap:$e,envMapMode:$e&&J.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Sn,bumpMap:qe,normalMap:Xe,displacementMap:f&&Me,emissiveMap:xt,normalMapObjectSpace:Xe&&M.normalMapType===eM,normalMapTangentSpace:Xe&&M.normalMapType===Qx,metalnessMap:_e,roughnessMap:S,anisotropy:v,anisotropyMap:ae,clearcoat:L,clearcoatMap:fe,clearcoatNormalMap:Qe,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Ce,sheen:z,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:Ye,specularColorMap:Be,specularIntensityMap:yt,transmission:ye,transmissionMap:A,thicknessMap:ne,gradientMap:V,opaque:M.transparent===!1&&M.blending===Wr&&M.alphaToCoverage===!1,alphaMap:q,alphaTest:le,alphaHash:ce,combine:M.combine,mapUv:At&&y(M.map.channel),aoMapUv:C&&y(M.aoMap.channel),lightMapUv:Sn&&y(M.lightMap.channel),bumpMapUv:qe&&y(M.bumpMap.channel),normalMapUv:Xe&&y(M.normalMap.channel),displacementMapUv:Me&&y(M.displacementMap.channel),emissiveMapUv:xt&&y(M.emissiveMap.channel),metalnessMapUv:_e&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:ae&&y(M.anisotropyMap.channel),clearcoatMapUv:fe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(M.sheenRoughnessMap.channel),specularMapUv:Ye&&y(M.specularMap.channel),specularColorMapUv:Be&&y(M.specularColorMap.channel),specularIntensityMapUv:yt&&y(M.specularIntensityMap.channel),transmissionMapUv:A&&y(M.transmissionMap.channel),thicknessMapUv:ne&&y(M.thicknessMap.channel),alphaMapUv:q&&y(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Xe||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(At||q),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:be,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ht,decodeVideoTextureEmissive:xt&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ui,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(w(x,M),b(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function E(M){let x=g[M.type],D;if(x){let G=hi[x];D=hM.clone(G.uniforms)}else D=M.uniforms;return D}function P(M,x){let D;for(let G=0,B=u.length;G<B;G++){let X=u[G];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new TP(n,x,M,s),u.push(D)),D}function R(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function T(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:P,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:O}}function IP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function RP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function OM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function LM(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,f){t.length>1&&t.sort(d||RP),i.length>1&&i.sort(f||OM),r.length>1&&r.sort(f||OM)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function NP(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new LM,n.set(i,[o])):r>=s.length?(o=new LM,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function PP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ke};break;case"SpotLight":t={position:new U,direction:new U,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function OP(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var LP=0;function FP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kP(n){let e=new PP,t=OP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let r=new U,s=new It,o=new It;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,w=0,b=0,E=0,P=0,R=0,T=0;l.sort(FP);for(let M=0,x=l.length;M<x;M++){let D=l[M],G=D.color,B=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*B,d+=G.g*B,f+=G.b*B;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],B);T++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[h]=H,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=D.shadow.matrix,w++}i.directional[h]=j,h++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(B),j.distance=X,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[y]=j;let J=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,J.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[y]=J.matrix,D.castShadow){let H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[y]=H,i.spotShadowMap[y]=Y,E++}y++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(G).multiplyScalar(B),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=j,m++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let J=D.shadow,H=t.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=j,g++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(B),j.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==w||O.numPointShadows!==b||O.numSpotShadows!==E||O.numSpotMaps!==P||O.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,O.directionalLength=h,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=w,O.numPointShadows=b,O.numSpotShadows=E,O.numSpotMaps=P,O.numLightProbes=T,i.version=LP++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let b=l[p];if(b.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(b.isSpotLight){let E=i.spot[h];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(b.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let E=i.hemi[y];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function FM(n){let e=new kP(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function UP(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new FM(n),e.set(r,[a])):s>=o.length?(a=new FM(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var BP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VP=`uniform sampler2D shadow_pass;
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
}`;function HP(n,e,t){let i=new Pa,r=new mt,s=new mt,o=new Dt,a=new fu({depthPacking:Kx}),c=new hu,l={},u=t.maxTextureSize,d={[ki]:sn,[sn]:ki,[ui]:ui},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:BP,fragmentShader:VP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Zn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new fn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ym;let p=this.type;this.render=function(R,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==li&&this.type===li,X=p===li&&this.type!==li;for(let Y=0,j=R.length;Y<j;Y++){let J=R[Y],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let se=H.getFrameExtents();if(r.multiply(se),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){let xe=this.type!==li?{minFilter:Pn,magFilter:Pn}:{};H.map!==null&&H.map.dispose(),H.map=new ci(r.x,r.y,xe),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let de=H.getViewportCount();for(let xe=0;xe<de;xe++){let ze=H.getViewport(xe);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),G.viewport(o),H.updateMatrices(J,xe),i=H.getFrustum(),E(T,O,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===li&&w(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,x,D)};function w(R,T){let O=e.update(y);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ci(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,O,f,y,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,O,h,y,null)}function b(R,T,O,M){let x=null,D=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)x=D;else if(x=O.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=x.uuid,B=T.uuid,X=l[G];X===void 0&&(X={},l[G]=X);let Y=X[B];Y===void 0&&(Y=x.clone(),X[B]=Y,T.addEventListener("dispose",P)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,M===li?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let G=n.properties.get(x);G.light=O}return x}function E(R,T,O,M,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===li)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let B=e.update(R),X=R.material;if(Array.isArray(X)){let Y=B.groups;for(let j=0,J=Y.length;j<J;j++){let H=Y[j],se=X[H.materialIndex];if(se&&se.visible){let de=b(R,se,M,x);R.onBeforeShadow(n,R,T,O,B,de,H),n.renderBufferDirect(O,null,B,de,R,H),R.onAfterShadow(n,R,T,O,B,de,H)}}}else if(X.visible){let Y=b(R,X,M,x);R.onBeforeShadow(n,R,T,O,B,Y,null),n.renderBufferDirect(O,null,B,Y,R,null),R.onAfterShadow(n,R,T,O,B,Y,null)}}let G=R.children;for(let B=0,X=G.length;B<X;B++)E(G[B],T,O,M,x)}function P(R){R.target.removeEventListener("dispose",P);for(let O in l){let M=l[O],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var zP={[bu]:wu,[Cu]:Au,[Tu]:Iu,[jr]:Du,[wu]:bu,[Au]:Cu,[Iu]:Tu,[Du]:jr};function GP(n,e){function t(){let A=!1,ne=new Dt,V=null,q=new Dt(0,0,0,0);return{setMask:function(le){V!==le&&!A&&(n.colorMask(le,le,le,le),V=le)},setLocked:function(le){A=le},setClear:function(le,ce,ke,bt,Yt){Yt===!0&&(le*=bt,ce*=bt,ke*=bt),ne.set(le,ce,ke,bt),q.equals(ne)===!1&&(n.clearColor(le,ce,ke,bt),q.copy(ne))},reset:function(){A=!1,V=null,q.set(-1,0,0,0)}}}function i(){let A=!1,ne=!1,V=null,q=null,le=null;return{setReversed:function(ce){if(ne!==ce){let ke=e.get("EXT_clip_control");ne?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);let bt=le;le=null,this.setClear(bt)}ne=ce},getReversed:function(){return ne},setTest:function(ce){ce?oe(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ce){V!==ce&&!A&&(n.depthMask(ce),V=ce)},setFunc:function(ce){if(ne&&(ce=zP[ce]),q!==ce){switch(ce){case bu:n.depthFunc(n.NEVER);break;case wu:n.depthFunc(n.ALWAYS);break;case Cu:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case Tu:n.depthFunc(n.EQUAL);break;case Du:n.depthFunc(n.GEQUAL);break;case Au:n.depthFunc(n.GREATER);break;case Iu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){A=ce},setClear:function(ce){le!==ce&&(ne&&(ce=1-ce),n.clearDepth(ce),le=ce)},reset:function(){A=!1,V=null,q=null,le=null,ne=!1}}}function r(){let A=!1,ne=null,V=null,q=null,le=null,ce=null,ke=null,bt=null,Yt=null;return{setTest:function(ft){A||(ft?oe(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ft){ne!==ft&&!A&&(n.stencilMask(ft),ne=ft)},setFunc:function(ft,Fn,pi){(V!==ft||q!==Fn||le!==pi)&&(n.stencilFunc(ft,Fn,pi),V=ft,q=Fn,le=pi)},setOp:function(ft,Fn,pi){(ce!==ft||ke!==Fn||bt!==pi)&&(n.stencilOp(ft,Fn,pi),ce=ft,ke=Fn,bt=pi)},setLocked:function(ft){A=ft},setClear:function(ft){Yt!==ft&&(n.clearStencil(ft),Yt=ft)},reset:function(){A=!1,ne=null,V=null,q=null,le=null,ce=null,ke=null,bt=null,Yt=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,b=null,E=null,P=null,R=null,T=new Ke(0,0,0),O=0,M=!1,x=null,D=null,G=null,B=null,X=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,J=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=J>=2);let se=null,de={},xe=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),gt=new Dt().fromArray(xe),W=new Dt().fromArray(ze);function ee(A,ne,V,q){let le=new Uint8Array(4),ce=n.createTexture();n.bindTexture(A,ce),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<V;ke++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ne+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return ce}let ge={};ge[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(jr),qe(!1),Xe(vm),oe(n.CULL_FACE),C(Vi);function oe(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function be(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function ot(A,ne){return d[A]!==ne?(n.bindFramebuffer(A,ne),d[A]=ne,A===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),A===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(A,ne){let V=h,q=!1;if(A){V=f.get(ne),V===void 0&&(V=[],f.set(ne,V));let le=A.textures;if(V.length!==le.length||V[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ke=le.length;ce<ke;ce++)V[ce]=n.COLOR_ATTACHMENT0+ce;V.length=le.length,q=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,q=!0);q&&n.drawBuffers(V)}function At(A){return g!==A?(n.useProgram(A),g=A,!0):!1}let Et={[rr]:n.FUNC_ADD,[bx]:n.FUNC_SUBTRACT,[wx]:n.FUNC_REVERSE_SUBTRACT};Et[Cx]=n.MIN,Et[Tx]=n.MAX;let $e={[Dx]:n.ZERO,[Ax]:n.ONE,[Ix]:n.SRC_COLOR,[tu]:n.SRC_ALPHA,[Fx]:n.SRC_ALPHA_SATURATE,[Ox]:n.DST_COLOR,[Nx]:n.DST_ALPHA,[Rx]:n.ONE_MINUS_SRC_COLOR,[nu]:n.ONE_MINUS_SRC_ALPHA,[Lx]:n.ONE_MINUS_DST_COLOR,[Px]:n.ONE_MINUS_DST_ALPHA,[kx]:n.CONSTANT_COLOR,[Ux]:n.ONE_MINUS_CONSTANT_COLOR,[Bx]:n.CONSTANT_ALPHA,[Vx]:n.ONE_MINUS_CONSTANT_ALPHA};function C(A,ne,V,q,le,ce,ke,bt,Yt,ft){if(A===Vi){y===!0&&(be(n.BLEND),y=!1);return}if(y===!1&&(oe(n.BLEND),y=!0),A!==Ex){if(A!==m||ft!==M){if((p!==rr||E!==rr)&&(n.blendEquation(n.FUNC_ADD),p=rr,E=rr),ft)switch(A){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFunc(n.ONE,n.ONE);break;case _m:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _m:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,b=null,P=null,R=null,T.set(0,0,0),O=0,m=A,M=ft}return}le=le||ne,ce=ce||V,ke=ke||q,(ne!==p||le!==E)&&(n.blendEquationSeparate(Et[ne],Et[le]),p=ne,E=le),(V!==w||q!==b||ce!==P||ke!==R)&&(n.blendFuncSeparate($e[V],$e[q],$e[ce],$e[ke]),w=V,b=q,P=ce,R=ke),(bt.equals(T)===!1||Yt!==O)&&(n.blendColor(bt.r,bt.g,bt.b,Yt),T.copy(bt),O=Yt),m=A,M=!1}function Sn(A,ne){A.side===ui?be(n.CULL_FACE):oe(n.CULL_FACE);let V=A.side===sn;ne&&(V=!V),qe(V),A.blending===Wr&&A.transparent===!1?C(Vi):C(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),s.setMask(A.colorWrite);let q=A.stencilWrite;a.setTest(q),q&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),xt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(A){x!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),x=A)}function Xe(A){A!==xx?(oe(n.CULL_FACE),A!==D&&(A===vm?n.cullFace(n.BACK):A===Mx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),D=A}function Me(A){A!==G&&(j&&n.lineWidth(A),G=A)}function xt(A,ne,V){A?(oe(n.POLYGON_OFFSET_FILL),(B!==ne||X!==V)&&(n.polygonOffset(ne,V),B=ne,X=V)):be(n.POLYGON_OFFSET_FILL)}function _e(A){A?oe(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function S(A){A===void 0&&(A=n.TEXTURE0+Y-1),se!==A&&(n.activeTexture(A),se=A)}function v(A,ne,V){V===void 0&&(se===null?V=n.TEXTURE0+Y-1:V=se);let q=de[V];q===void 0&&(q={type:void 0,texture:void 0},de[V]=q),(q.type!==A||q.texture!==ne)&&(se!==V&&(n.activeTexture(V),se=V),n.bindTexture(A,ne||ge[A]),q.type=A,q.texture=ne)}function L(){let A=de[se];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{n.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function z(){try{n.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Qe(){try{n.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{n.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(){try{n.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function De(A){gt.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),gt.copy(A))}function pe(A){W.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),W.copy(A))}function Ye(A,ne){let V=l.get(ne);V===void 0&&(V=new WeakMap,l.set(ne,V));let q=V.get(A);q===void 0&&(q=n.getUniformBlockIndex(ne,A.name),V.set(A,q))}function Be(A,ne){let q=l.get(ne).get(A);c.get(ne)!==q&&(n.uniformBlockBinding(ne,q,A.__bindingPointIndex),c.set(ne,q))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},se=null,de={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,w=null,b=null,E=null,P=null,R=null,T=new Ke(0,0,0),O=0,M=!1,x=null,D=null,G=null,B=null,X=null,gt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:be,bindFramebuffer:ot,drawBuffers:Te,useProgram:At,setBlending:C,setMaterial:Sn,setFlipSided:qe,setCullFace:Xe,setLineWidth:Me,setPolygonOffset:xt,setScissorTest:_e,activeTexture:S,bindTexture:v,unbindTexture:L,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:he,texImage3D:Ce,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:Qe,texStorage3D:Q,texSubImage2D:z,texSubImage3D:ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:De,viewport:pe,reset:yt}}function WP(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return h?new OffscreenCanvas(S,v):wa("canvas")}function y(S,v,L){let $=1,Z=_e(S);if((Z.width>L||Z.height>L)&&($=L/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let z=Math.floor($*Z.width),ye=Math.floor($*Z.height);d===void 0&&(d=g(z,ye));let ae=v?g(z,ye):d;return ae.width=z,ae.height=ye,ae.getContext("2d").drawImage(S,0,0,z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+ye+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,v,L,$,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=v;if(v===n.RED&&(L===n.FLOAT&&(z=n.R32F),L===n.HALF_FLOAT&&(z=n.R16F),L===n.UNSIGNED_BYTE&&(z=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.R8UI),L===n.UNSIGNED_SHORT&&(z=n.R16UI),L===n.UNSIGNED_INT&&(z=n.R32UI),L===n.BYTE&&(z=n.R8I),L===n.SHORT&&(z=n.R16I),L===n.INT&&(z=n.R32I)),v===n.RG&&(L===n.FLOAT&&(z=n.RG32F),L===n.HALF_FLOAT&&(z=n.RG16F),L===n.UNSIGNED_BYTE&&(z=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RG8UI),L===n.UNSIGNED_SHORT&&(z=n.RG16UI),L===n.UNSIGNED_INT&&(z=n.RG32UI),L===n.BYTE&&(z=n.RG8I),L===n.SHORT&&(z=n.RG16I),L===n.INT&&(z=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(z=n.RGB16UI),L===n.UNSIGNED_INT&&(z=n.RGB32UI),L===n.BYTE&&(z=n.RGB8I),L===n.SHORT&&(z=n.RGB16I),L===n.INT&&(z=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),L===n.UNSIGNED_INT&&(z=n.RGBA32UI),L===n.BYTE&&(z=n.RGBA8I),L===n.SHORT&&(z=n.RGBA16I),L===n.INT&&(z=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),v===n.RGBA){let ye=Z?Ea:rt.getTransfer($);L===n.FLOAT&&(z=n.RGBA32F),L===n.HALF_FLOAT&&(z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(z=ye===ht?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function E(S,v){let L;return S?v===null||v===dr||v===ts?L=n.DEPTH24_STENCIL8:v===fi?L=n.DEPTH32F_STENCIL8:v===go&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===dr||v===ts?L=n.DEPTH_COMPONENT24:v===fi?L=n.DEPTH_COMPONENT32F:v===go&&(L=n.DEPTH_COMPONENT16),L}function P(S,v){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pn&&S.minFilter!==Yn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){let v=S.target;v.removeEventListener("dispose",R),O(v),v.isVideoTexture&&u.delete(v)}function T(S){let v=S.target;v.removeEventListener("dispose",T),x(v)}function O(S){let v=i.get(S);if(v.__webglInit===void 0)return;let L=S.source,$=f.get(L);if($){let Z=$[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys($).length===0&&f.delete(L)}i.remove(S)}function M(S){let v=i.get(S);n.deleteTexture(v.__webglTexture);let L=S.source,$=f.get(L);delete $[v.__cacheKey],o.memory.textures--}function x(S){let v=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Z=0;Z<v.__webglFramebuffer[$].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[$][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=S.textures;for(let $=0,Z=L.length;$<Z;$++){let z=i.get(L[$]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(L[$])}i.remove(S)}let D=0;function G(){D=0}function B(){let S=D;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),D+=1,S}function X(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function Y(S,v){let L=i.get(S);if(S.isVideoTexture&&Me(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){let $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(L,S,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function j(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){W(L,S,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function J(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){W(L,S,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function H(S,v){let L=i.get(S);if(S.version>0&&L.__version!==S.version){ee(L,S,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}let se={[iu]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[ru]:n.MIRRORED_REPEAT},de={[Pn]:n.NEAREST,[Zx]:n.NEAREST_MIPMAP_NEAREST,[Va]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Pu]:n.LINEAR_MIPMAP_NEAREST,[ur]:n.LINEAR_MIPMAP_LINEAR},xe={[tM]:n.NEVER,[aM]:n.ALWAYS,[nM]:n.LESS,[Nm]:n.LEQUAL,[iM]:n.EQUAL,[oM]:n.GEQUAL,[rM]:n.GREATER,[sM]:n.NOTEQUAL};function ze(S,v){if(v.type===fi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yn||v.magFilter===Pu||v.magFilter===Va||v.magFilter===ur||v.minFilter===Yn||v.minFilter===Pu||v.minFilter===Va||v.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,se[v.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==Va&&v.minFilter!==ur||v.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function gt(S,v){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",R));let $=v.source,Z=f.get($);Z===void 0&&(Z={},f.set($,Z));let z=X(v);if(z!==S.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[z].usedTimes++;let ye=Z[S.__cacheKey];ye!==void 0&&(Z[S.__cacheKey].usedTimes--,ye.usedTimes===0&&M(v)),S.__cacheKey=z,S.__webglTexture=Z[z].texture}return L}function W(S,v,L){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);let Z=gt(S,v),z=v.source;t.bindTexture($,S.__webglTexture,n.TEXTURE0+L);let ye=i.get(z);if(z.version!==ye.__version||Z===!0){t.activeTexture(n.TEXTURE0+L);let ae=rt.getPrimaries(rt.workingColorSpace),fe=v.colorSpace===zi?null:rt.getPrimaries(v.colorSpace),Qe=v.colorSpace===zi||ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Q=y(v.image,!1,r.maxTextureSize);Q=xt(v,Q);let he=s.convert(v.format,v.colorSpace),Ce=s.convert(v.type),De=b(v.internalFormat,he,Ce,v.colorSpace,v.isVideoTexture);ze($,v);let pe,Ye=v.mipmaps,Be=v.isVideoTexture!==!0,yt=ye.__version===void 0||Z===!0,A=z.dataReady,ne=P(v,Q);if(v.isDepthTexture)De=E(v.format===$r,v.type),yt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,De,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,De,Q.width,Q.height,0,he,Ce,null));else if(v.isDataTexture)if(Ye.length>0){Be&&yt&&t.texStorage2D(n.TEXTURE_2D,ne,De,Ye[0].width,Ye[0].height);for(let V=0,q=Ye.length;V<q;V++)pe=Ye[V],Be?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,V,De,pe.width,pe.height,0,he,Ce,pe.data);v.generateMipmaps=!1}else Be?(yt&&t.texStorage2D(n.TEXTURE_2D,ne,De,Q.width,Q.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Ce,Q.data)):t.texImage2D(n.TEXTURE_2D,0,De,Q.width,Q.height,0,he,Ce,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,De,Ye[0].width,Ye[0].height,Q.depth);for(let V=0,q=Ye.length;V<q;V++)if(pe=Ye[V],v.format!==Ln)if(he!==null)if(Be){if(A)if(v.layerUpdates.size>0){let le=Um(pe.width,pe.height,v.format,v.type);for(let ce of v.layerUpdates){let ke=pe.data.subarray(ce*le/pe.data.BYTES_PER_ELEMENT,(ce+1)*le/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,ce,pe.width,pe.height,1,he,ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,De,pe.width,pe.height,Q.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,Q.depth,he,Ce,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,De,pe.width,pe.height,Q.depth,0,he,Ce,pe.data)}else{Be&&yt&&t.texStorage2D(n.TEXTURE_2D,ne,De,Ye[0].width,Ye[0].height);for(let V=0,q=Ye.length;V<q;V++)pe=Ye[V],v.format!==Ln?he!==null?Be?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,V,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,pe.width,pe.height,he,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,V,De,pe.width,pe.height,0,he,Ce,pe.data)}else if(v.isDataArrayTexture)if(Be){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,De,Q.width,Q.height,Q.depth),A)if(v.layerUpdates.size>0){let V=Um(Q.width,Q.height,v.format,v.type);for(let q of v.layerUpdates){let le=Q.data.subarray(q*V/Q.data.BYTES_PER_ELEMENT,(q+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,he,Ce,le)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Ce,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,Q.width,Q.height,Q.depth,0,he,Ce,Q.data);else if(v.isData3DTexture)Be?(yt&&t.texStorage3D(n.TEXTURE_3D,ne,De,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Ce,Q.data)):t.texImage3D(n.TEXTURE_3D,0,De,Q.width,Q.height,Q.depth,0,he,Ce,Q.data);else if(v.isFramebufferTexture){if(yt)if(Be)t.texStorage2D(n.TEXTURE_2D,ne,De,Q.width,Q.height);else{let V=Q.width,q=Q.height;for(let le=0;le<ne;le++)t.texImage2D(n.TEXTURE_2D,le,De,V,q,0,he,Ce,null),V>>=1,q>>=1}}else if(Ye.length>0){if(Be&&yt){let V=_e(Ye[0]);t.texStorage2D(n.TEXTURE_2D,ne,De,V.width,V.height)}for(let V=0,q=Ye.length;V<q;V++)pe=Ye[V],Be?A&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,he,Ce,pe):t.texImage2D(n.TEXTURE_2D,V,De,he,Ce,pe);v.generateMipmaps=!1}else if(Be){if(yt){let V=_e(Q);t.texStorage2D(n.TEXTURE_2D,ne,De,V.width,V.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ce,Q)}else t.texImage2D(n.TEXTURE_2D,0,De,he,Ce,Q);m(v)&&p($),ye.__version=z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ee(S,v,L){if(v.image.length!==6)return;let $=gt(S,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);let z=i.get(Z);if(Z.version!==z.__version||$===!0){t.activeTexture(n.TEXTURE0+L);let ye=rt.getPrimaries(rt.workingColorSpace),ae=v.colorSpace===zi?null:rt.getPrimaries(v.colorSpace),fe=v.colorSpace===zi||ye===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Qe=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,he=[];for(let q=0;q<6;q++)!Qe&&!Q?he[q]=y(v.image[q],!0,r.maxCubemapSize):he[q]=Q?v.image[q].image:v.image[q],he[q]=xt(v,he[q]);let Ce=he[0],De=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),Ye=b(v.internalFormat,De,pe,v.colorSpace),Be=v.isVideoTexture!==!0,yt=z.__version===void 0||$===!0,A=Z.dataReady,ne=P(v,Ce);ze(n.TEXTURE_CUBE_MAP,v);let V;if(Qe){Be&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Ye,Ce.width,Ce.height);for(let q=0;q<6;q++){V=he[q].mipmaps;for(let le=0;le<V.length;le++){let ce=V[le];v.format!==Ln?De!==null?Be?A&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,De,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,0,0,ce.width,ce.height,De,pe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le,Ye,ce.width,ce.height,0,De,pe,ce.data)}}}else{if(V=v.mipmaps,Be&&yt){V.length>0&&ne++;let q=_e(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Ye,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Be?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,he[q].width,he[q].height,De,pe,he[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,he[q].width,he[q].height,0,De,pe,he[q].data);for(let le=0;le<V.length;le++){let ke=V[le].image[q].image;Be?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,ke.width,ke.height,De,pe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ye,ke.width,ke.height,0,De,pe,ke.data)}}else{Be?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,De,pe,he[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ye,De,pe,he[q]);for(let le=0;le<V.length;le++){let ce=V[le];Be?A&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,0,0,De,pe,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,le+1,Ye,De,pe,ce.image[q])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),z.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ge(S,v,L,$,Z,z){let ye=s.convert(L.format,L.colorSpace),ae=s.convert(L.type),fe=b(L.internalFormat,ye,ae,L.colorSpace),Qe=i.get(v),Q=i.get(L);if(Q.__renderTarget=v,!Qe.__hasExternalTextures){let he=Math.max(1,v.width>>z),Ce=Math.max(1,v.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,fe,he,Ce,v.depth,0,ye,ae,null):t.texImage2D(Z,z,fe,he,Ce,0,ye,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Xe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Z,Q.__webglTexture,0,qe(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Z,Q.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(S,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),v.depthBuffer){let $=v.depthTexture,Z=$&&$.isDepthTexture?$.type:null,z=E(v.stencilBuffer,Z),ye=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=qe(v);Xe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,z,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,z,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,z,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,S)}else{let $=v.textures;for(let Z=0;Z<$.length;Z++){let z=$[Z],ye=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),fe=b(z.internalFormat,ye,ae,z.colorSpace),Qe=qe(v);L&&Xe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,fe,v.width,v.height):Xe(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function be(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);let Z=$.__webglTexture,z=qe(v);if(v.depthTexture.format===Gr)Xe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(v.depthTexture.format===$r)Xe(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ot(S){let v=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let $=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=$}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,S)}else if(L){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[$],S,!1);else{let Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,S,!1);else{let $=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(S,v,L){let $=i.get(S);v!==void 0&&ge($.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ot(S)}function At(S){let v=S.texture,L=i.get(S),$=i.get(v);S.addEventListener("dispose",T);let Z=S.textures,z=S.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,o.memory.textures++),z){L.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ae]=[];for(let fe=0;fe<v.mipmaps.length;fe++)L.__webglFramebuffer[ae][fe]=n.createFramebuffer()}else L.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)L.__webglFramebuffer[ae]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ae=0,fe=Z.length;ae<fe;ae++){let Qe=i.get(Z[ae]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Xe(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){let fe=Z[ae];L.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ae]);let Qe=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),he=b(fe.internalFormat,Qe,Q,fe.colorSpace,S.isXRRenderTarget===!0),Ce=qe(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,he,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,L.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ze(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(L.__webglFramebuffer[ae][fe],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else ge(L.__webglFramebuffer[ae],S,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ae=0,fe=Z.length;ae<fe;ae++){let Qe=Z[ae],Q=i.get(Qe);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ze(n.TEXTURE_2D,Qe),ge(L.__webglFramebuffer,S,Qe,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Qe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ae=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),ze(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)ge(L.__webglFramebuffer[fe],S,v,n.COLOR_ATTACHMENT0,ae,fe);else ge(L.__webglFramebuffer,S,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}S.depthBuffer&&ot(S)}function Et(S){let v=S.textures;for(let L=0,$=v.length;L<$;L++){let Z=v[L];if(m(Z)){let z=w(S),ye=i.get(Z).__webglTexture;t.bindTexture(z,ye),p(z),t.unbindTexture()}}}let $e=[],C=[];function Sn(S){if(S.samples>0){if(Xe(S)===!1){let v=S.textures,L=S.width,$=S.height,Z=n.COLOR_BUFFER_BIT,z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(S),ae=v.length>1;if(ae)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let Qe=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,L,$,0,0,L,$,Z,n.NEAREST),c===!0&&($e.length=0,C.length=0,$e.push(n.COLOR_ATTACHMENT0+fe),S.depthBuffer&&S.resolveDepthBuffer===!1&&($e.push(z),C.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);let Qe=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function qe(S){return Math.min(r.maxSamples,S.samples)}function Xe(S){let v=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Me(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function xt(S,v){let L=S.colorSpace,$=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==qr&&L!==zi&&(rt.getTransfer(L)===ht?($!==Ln||Z!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function _e(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Te,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Xe}function jP(n,e){function t(i,r=zi){let s,o=rt.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===Lu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Sm)return n.BYTE;if(i===Em)return n.SHORT;if(i===go)return n.UNSIGNED_SHORT;if(i===Ou)return n.INT;if(i===dr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===vo)return n.HALF_FLOAT;if(i===wm)return n.ALPHA;if(i===Cm)return n.RGB;if(i===Ln)return n.RGBA;if(i===Tm)return n.LUMINANCE;if(i===Dm)return n.LUMINANCE_ALPHA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===Am)return n.RED;if(i===ku)return n.RED_INTEGER;if(i===Im)return n.RG;if(i===Uu)return n.RG_INTEGER;if(i===Bu)return n.RGBA_INTEGER;if(i===Ha||i===za||i===Ga||i===Wa)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vu||i===Hu||i===zu||i===Gu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wu||i===ju||i===$u)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wu||i===ju)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$u)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qu||i===Xu||i===Yu||i===Zu||i===Ju||i===Ku||i===Qu||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ju)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qu)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ed)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===td)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===id)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sd)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===od)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===ad||i===cd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ja)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ad)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rm||i===ld||i===ud||i===dd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var $P=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qP=`
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

}`,Jm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new hr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Jn({vertexShader:$P,fragmentShader:qP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Km=class extends Ui{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,y=new Jm,m=t.getContextAttributes(),p=null,w=null,b=[],E=[],P=new mt,R=null,T=new zt;T.viewport=new Dt;let O=new zt;O.viewport=new Dt;let M=[T,O],x=new Su,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=b[W];return ee===void 0&&(ee=new po,b[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=b[W];return ee===void 0&&(ee=new po,b[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=b[W];return ee===void 0&&(ee=new po,b[W]=ee),ee.getHandSpace()};function B(W){let ee=E.indexOf(W.inputSource);if(ee===-1)return;let ge=b[ee];ge!==void 0&&(ge.update(W.inputSource,W.frame,l||o),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<b.length;W++){let ee=E[W];ee!==null&&(E[W]=null,b[W].disconnect(ee))}D=null,G=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,w=null,gt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(W){return cs(this,null,function*(){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,oe=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?$r:Gr,oe=m.stencil?ts:dr);let ot={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ot),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new ci(f.textureWidth,f.textureHeight,{format:Ln,type:di,depthTexture:new La(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new ci(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),gt.setContext(r),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(W){for(let ee=0;ee<W.removed.length;ee++){let ge=W.removed[ee],oe=E.indexOf(ge);oe>=0&&(E[oe]=null,b[oe].disconnect(ge))}for(let ee=0;ee<W.added.length;ee++){let ge=W.added[ee],oe=E.indexOf(ge);if(oe===-1){for(let ot=0;ot<b.length;ot++)if(ot>=E.length){E.push(ge),oe=ot;break}else if(E[ot]===null){E[ot]=ge,oe=ot;break}if(oe===-1)break}let be=b[oe];be&&be.connect(ge)}}let j=new U,J=new U;function H(W,ee,ge){j.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);let oe=j.distanceTo(J),be=ee.projectionMatrix.elements,ot=ge.projectionMatrix.elements,Te=be[14]/(be[10]-1),At=be[14]/(be[10]+1),Et=(be[9]+1)/be[5],$e=(be[9]-1)/be[5],C=(be[8]-1)/be[0],Sn=(ot[8]+1)/ot[0],qe=Te*C,Xe=Te*Sn,Me=oe/(-C+Sn),xt=Me*-C;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(xt),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let _e=Te+Me,S=At+Me,v=qe-xt,L=Xe+(oe-xt),$=Et*At/S*_e,Z=$e*At/S*_e;W.projectionMatrix.makePerspective(v,L,$,Z,_e,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function se(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ee=W.near,ge=W.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),x.near=O.near=T.near=ee,x.far=O.far=T.far=ge,(D!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,G=x.far),T.layers.mask=W.layers.mask|2,O.layers.mask=W.layers.mask|4,x.layers.mask=T.layers.mask|O.layers.mask;let oe=W.parent,be=x.cameras;se(x,oe);for(let ot=0;ot<be.length;ot++)se(be[ot],oe);be.length===2?H(x,T,O):x.projectionMatrix.copy(T.projectionMatrix),de(W,x,oe)};function de(W,ee,ge){ge===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ou*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let xe=null;function ze(W,ee){if(u=ee.getViewerPose(l||o),g=ee,u!==null){let ge=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let oe=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let Te=0;Te<ge.length;Te++){let At=ge[Te],Et=null;if(h!==null)Et=h.getViewport(At);else{let C=d.getViewSubImage(f,At);Et=C.viewport,Te===0&&(e.setRenderTargetTextures(w,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(w))}let $e=M[Te];$e===void 0&&($e=new zt,$e.layers.enable(Te),$e.viewport=new Dt,M[Te]=$e),$e.matrix.fromArray(At.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(At.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Et.x,Et.y,Et.width,Et.height),Te===0&&(x.matrix.copy($e.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push($e)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Te=d.getDepthInformation(ge[0]);Te&&Te.isValid&&Te.texture&&y.init(e,Te,r.renderState)}}for(let ge=0;ge<b.length;ge++){let oe=E[ge],be=b[ge];oe!==null&&be!==void 0&&be.update(oe,ee,l||o)}xe&&xe(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let gt=new kM;gt.setAnimationLoop(ze),this.setAnimationLoop=function(W){xe=W},this.dispose=function(){}}},rs=new Yr,XP=new It;function YP(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Lm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),b=w.envMap,E=w.envMapRotation;b&&(m.envMap.value=b,rs.copy(E),rs.x*=-1,rs.y*=-1,rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(XP.makeRotationFromEuler(rs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZP(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){let E=b.program;i.uniformBlockBinding(w,E)}function l(w,b){let E=r[w.id];E===void 0&&(g(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));let P=b.program;i.updateUBOMapping(w,P);let R=e.render.frame;s[w.id]!==R&&(f(w),s[w.id]=R)}function u(w){let b=d();w.__bindingPointIndex=b;let E=n.createBuffer(),P=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let b=r[w.id],E=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,T=E.length;R<T;R++){let O=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,x=O.length;M<x;M++){let D=O[M];if(h(D,R,M,P)===!0){let G=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],X=0;for(let Y=0;Y<B.length;Y++){let j=B[Y],J=y(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,G+X,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,b,E,P){let R=w.value,T=b+"_"+E;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{let O=P[T];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return P[T]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(w){let b=w.uniforms,E=0,P=16;for(let T=0,O=b.length;T<O;T++){let M=Array.isArray(b[T])?b[T]:[b[T]];for(let x=0,D=M.length;x<D;x++){let G=M[x],B=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Y=B.length;X<Y;X++){let j=B[X],J=y(j),H=E%P,se=H%J.boundary,de=H+se;E+=se,de!==0&&P-de<J.storage&&(E+=P-de),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=J.storage}}}let R=E%P;return R>0&&(E+=P-R),w.__size=E,w.__cache={},this}function y(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Mo=class{constructor(e={}){let{canvas:t=cM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Hi,this.toneMappingExposure=1;let E=this,P=!1,R=0,T=0,O=null,M=-1,x=null,D=new Dt,G=new Dt,B=null,X=new Ke(0),Y=0,j=t.width,J=t.height,H=1,se=null,de=null,xe=new Dt(0,0,j,J),ze=new Dt(0,0,j,J),gt=!1,W=new Pa,ee=!1,ge=!1;this.transmissionResolutionScale=1;let oe=new It,be=new It,ot=new U,Te=new Dt,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function $e(){return O===null?H:1}let C=i;function Sn(_,I){return t.getContext(_,I)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){let I="webgl2";if(C=Sn(I,_),C===null)throw Sn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let qe,Xe,Me,xt,_e,S,v,L,$,Z,z,ye,ae,fe,Qe,Q,he,Ce,De,pe,Ye,Be,yt,A;function ne(){qe=new pN(C),qe.init(),Be=new jP(C,qe),Xe=new aN(C,qe,e,Be),Me=new GP(C,qe),Xe.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),xt=new vN(C),_e=new IP,S=new WP(C,qe,Me,_e,Xe,Be,xt),v=new lN(E),L=new hN(E),$=new EI(C),yt=new sN(C,$),Z=new mN(C,$,xt,yt),z=new _N(C,Z,$,xt),De=new yN(C,Xe,S),Q=new cN(_e),ye=new AP(E,v,L,qe,Xe,yt,Q),ae=new YP(E,_e),fe=new NP,Qe=new UP(qe),Ce=new rN(E,v,L,Me,z,h,c),he=new HP(E,z,Xe),A=new ZP(C,xt,Xe,Me),pe=new oN(C,qe,xt),Ye=new gN(C,qe,xt),xt.programs=ye.programs,E.capabilities=Xe,E.extensions=qe,E.properties=_e,E.renderLists=fe,E.shadowMap=he,E.state=Me,E.info=xt}ne();let V=new Km(E,C);this.xr=V,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=qe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=qe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(j,J,!1))},this.getSize=function(_){return _.set(j,J)},this.setSize=function(_,I,F=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,J=I,t.width=Math.floor(_*H),t.height=Math.floor(I*H),F===!0&&(t.style.width=_+"px",t.style.height=I+"px"),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(j*H,J*H).floor()},this.setDrawingBufferSize=function(_,I,F){j=_,J=I,H=F,t.width=Math.floor(_*F),t.height=Math.floor(I*F),this.setViewport(0,0,_,I)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,I,F,k){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,I,F,k),Me.viewport(D.copy(xe).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(ze)},this.setScissor=function(_,I,F,k){_.isVector4?ze.set(_.x,_.y,_.z,_.w):ze.set(_,I,F,k),Me.scissor(G.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(_){Me.setScissorTest(gt=_)},this.setOpaqueSort=function(_){se=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(_=!0,I=!0,F=!0){let k=0;if(_){let N=!1;if(O!==null){let K=O.texture.format;N=K===Bu||K===Uu||K===ku}if(N){let K=O.texture.type,ie=K===di||K===dr||K===go||K===ts||K===Lu||K===Fu,ue=Ce.getClearColor(),me=Ce.getClearAlpha(),Ae=ue.r,Ie=ue.g,Se=ue.b;ie?(g[0]=Ae,g[1]=Ie,g[2]=Se,g[3]=me,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Ae,y[1]=Ie,y[2]=Se,y[3]=me,C.clearBufferiv(C.COLOR,0,y))}else k|=C.COLOR_BUFFER_BIT}I&&(k|=C.DEPTH_BUFFER_BIT),F&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ce.dispose(),fe.dispose(),Qe.dispose(),_e.dispose(),v.dispose(),L.dispose(),z.dispose(),yt.dispose(),A.dispose(),ye.dispose(),V.dispose(),V.removeEventListener("sessionstart",eg),V.removeEventListener("sessionend",tg),mr.stop()};function q(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let _=xt.autoReset,I=he.enabled,F=he.autoUpdate,k=he.needsUpdate,N=he.type;ne(),xt.autoReset=_,he.enabled=I,he.autoUpdate=F,he.needsUpdate=k,he.type=N}function ce(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ke(_){let I=_.target;I.removeEventListener("dispose",ke),bt(I)}function bt(_){Yt(_),_e.remove(_)}function Yt(_){let I=_e.get(_).programs;I!==void 0&&(I.forEach(function(F){ye.releaseProgram(F)}),_.isShaderMaterial&&ye.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,F,k,N,K){I===null&&(I=At);let ie=N.isMesh&&N.matrixWorld.determinant()<0,ue=GM(_,I,F,k,N);Me.setMaterial(k,ie);let me=F.index,Ae=1;if(k.wireframe===!0){if(me=Z.getWireframeAttribute(F),me===void 0)return;Ae=2}let Ie=F.drawRange,Se=F.attributes.position,et=Ie.start*Ae,at=(Ie.start+Ie.count)*Ae;K!==null&&(et=Math.max(et,K.start*Ae),at=Math.min(at,(K.start+K.count)*Ae)),me!==null?(et=Math.max(et,0),at=Math.min(at,me.count)):Se!=null&&(et=Math.max(et,0),at=Math.min(at,Se.count));let Rt=at-et;if(Rt<0||Rt===1/0)return;yt.setup(N,k,ue,F,me);let wt,st=pe;if(me!==null&&(wt=$.get(me),st=Ye,st.setIndex(wt)),N.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*$e()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(N.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),Me.setLineWidth(Ee*$e()),N.isLineSegments?st.setMode(C.LINES):N.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else N.isPoints?st.setMode(C.POINTS):N.isSprite&&st.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ee=N._multiDrawStarts,Gt=N._multiDrawCounts,ct=N._multiDrawCount,kn=me?$.get(me).bytesPerElement:1,as=_e.get(k).currentProgram.getUniforms();for(let hn=0;hn<ct;hn++)as.setValue(C,"_gl_DrawID",hn),st.render(Ee[hn]/kn,Gt[hn])}else if(N.isInstancedMesh)st.renderInstances(et,Rt,N.count);else if(F.isInstancedBufferGeometry){let Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Gt=Math.min(F.instanceCount,Ee);st.renderInstances(et,Rt,Gt)}else st.render(et,Rt)};function ft(_,I,F){_.transparent===!0&&_.side===ui&&_.forceSinglePass===!1?(_.side=sn,_.needsUpdate=!0,Ya(_,I,F),_.side=ki,_.needsUpdate=!0,Ya(_,I,F),_.side=ui):Ya(_,I,F)}this.compile=function(_,I,F=null){F===null&&(F=_),p=Qe.get(F),p.init(I),b.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),_!==F&&_.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let k=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let K=N.material;if(K)if(Array.isArray(K))for(let ie=0;ie<K.length;ie++){let ue=K[ie];ft(ue,F,N),k.add(ue)}else ft(K,F,N),k.add(K)}),p=b.pop(),k},this.compileAsync=function(_,I,F=null){let k=this.compile(_,I,F);return new Promise(N=>{function K(){if(k.forEach(function(ie){_e.get(ie).currentProgram.isReady()&&k.delete(ie)}),k.size===0){N(_);return}setTimeout(K,10)}qe.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let Fn=null;function pi(_){Fn&&Fn(_)}function eg(){mr.stop()}function tg(){mr.start()}let mr=new kM;mr.setAnimationLoop(pi),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(_){Fn=_,V.setAnimationLoop(_),_===null?mr.stop():mr.start()},V.addEventListener("sessionstart",eg),V.addEventListener("sessionend",tg),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(I),I=V.getCamera()),_.isScene===!0&&_.onBeforeRender(E,_,I,O),p=Qe.get(_,b.length),p.init(I),b.push(p),be.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(be),ge=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,ge),m=fe.get(_,w.length),m.init(),w.push(m),V.enabled===!0&&V.isPresenting===!0){let K=E.xr.getDepthSensingMesh();K!==null&&Sd(K,I,-1/0,E.sortObjects)}Sd(_,I,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(se,de),Et=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Et&&Ce.addToRenderList(m,_),this.info.render.frame++,ee===!0&&Q.beginShadows();let F=p.state.shadowsArray;he.render(F,_,I),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,N=m.transmissive;if(p.setupLights(),I.isArrayCamera){let K=I.cameras;if(N.length>0)for(let ie=0,ue=K.length;ie<ue;ie++){let me=K[ie];ig(k,N,_,me)}Et&&Ce.render(_);for(let ie=0,ue=K.length;ie<ue;ie++){let me=K[ie];ng(m,_,me,me.viewport)}}else N.length>0&&ig(k,N,_,I),Et&&Ce.render(_),ng(m,_,I);O!==null&&T===0&&(S.updateMultisampleRenderTarget(O),S.updateRenderTargetMipmap(O)),_.isScene===!0&&_.onAfterRender(E,_,I),yt.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],ee===!0&&Q.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Sd(_,I,F,k){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||W.intersectsSprite(_)){k&&Te.setFromMatrixPosition(_.matrixWorld).applyMatrix4(be);let ie=z.update(_),ue=_.material;ue.visible&&m.push(_,ie,ue,F,Te.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||W.intersectsObject(_))){let ie=z.update(_),ue=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Te.copy(_.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),Te.copy(ie.boundingSphere.center)),Te.applyMatrix4(_.matrixWorld).applyMatrix4(be)),Array.isArray(ue)){let me=ie.groups;for(let Ae=0,Ie=me.length;Ae<Ie;Ae++){let Se=me[Ae],et=ue[Se.materialIndex];et&&et.visible&&m.push(_,ie,et,F,Te.z,Se)}}else ue.visible&&m.push(_,ie,ue,F,Te.z,null)}}let K=_.children;for(let ie=0,ue=K.length;ie<ue;ie++)Sd(K[ie],I,F,k)}function ng(_,I,F,k){let N=_.opaque,K=_.transmissive,ie=_.transparent;p.setupLightsView(F),ee===!0&&Q.setGlobalState(E.clippingPlanes,F),k&&Me.viewport(D.copy(k)),N.length>0&&Xa(N,I,F),K.length>0&&Xa(K,I,F),ie.length>0&&Xa(ie,I,F),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ig(_,I,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?vo:di,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let K=p.state.transmissionRenderTarget[k.id],ie=k.viewport||D;K.setSize(ie.z*E.transmissionResolutionScale,ie.w*E.transmissionResolutionScale);let ue=E.getRenderTarget();E.setRenderTarget(K),E.getClearColor(X),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear(),Et&&Ce.render(F);let me=E.toneMapping;E.toneMapping=Hi;let Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),ee===!0&&Q.setGlobalState(E.clippingPlanes,k),Xa(_,F,k),S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Se=0,et=I.length;Se<et;Se++){let at=I[Se],Rt=at.object,wt=at.geometry,st=at.material,Ee=at.group;if(st.side===ui&&Rt.layers.test(k.layers)){let Gt=st.side;st.side=sn,st.needsUpdate=!0,rg(Rt,F,k,wt,st,Ee),st.side=Gt,st.needsUpdate=!0,Ie=!0}}Ie===!0&&(S.updateMultisampleRenderTarget(K),S.updateRenderTargetMipmap(K))}E.setRenderTarget(ue),E.setClearColor(X,Y),Ae!==void 0&&(k.viewport=Ae),E.toneMapping=me}function Xa(_,I,F){let k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,K=_.length;N<K;N++){let ie=_[N],ue=ie.object,me=ie.geometry,Ae=k===null?ie.material:k,Ie=ie.group;ue.layers.test(F.layers)&&rg(ue,I,F,me,Ae,Ie)}}function rg(_,I,F,k,N,K){_.onBeforeRender(E,I,F,k,N,K),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(E,I,F,k,_,K),N.transparent===!0&&N.side===ui&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,E.renderBufferDirect(F,I,k,N,_,K),N.side=ki,N.needsUpdate=!0,E.renderBufferDirect(F,I,k,N,_,K),N.side=ui):E.renderBufferDirect(F,I,k,N,_,K),_.onAfterRender(E,I,F,k,N,K)}function Ya(_,I,F){I.isScene!==!0&&(I=At);let k=_e.get(_),N=p.state.lights,K=p.state.shadowsArray,ie=N.state.version,ue=ye.getParameters(_,N.state,K,I,F),me=ye.getProgramCacheKey(ue),Ae=k.programs;k.environment=_.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(_.isMeshStandardMaterial?L:v).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,Ae===void 0&&(_.addEventListener("dispose",ke),Ae=new Map,k.programs=Ae);let Ie=Ae.get(me);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===ie)return og(_,ue),Ie}else ue.uniforms=ye.getUniforms(_),_.onBeforeCompile(ue,E),Ie=ye.acquireProgram(ue,me),Ae.set(me,Ie),k.uniforms=ue.uniforms;let Se=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Se.clippingPlanes=Q.uniform),og(_,ue),k.needsLights=jM(_),k.lightsStateVersion=ie,k.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function sg(_){if(_.uniformsList===null){let I=_.currentProgram.getUniforms();_.uniformsList=xo.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function og(_,I){let F=_e.get(_);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function GM(_,I,F,k,N){I.isScene!==!0&&(I=At),S.resetTextureUnits();let K=I.fog,ie=k.isMeshStandardMaterial?I.environment:null,ue=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:qr,me=(k.isMeshStandardMaterial?L:v).get(k.envMap||ie),Ae=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ie=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!F.morphAttributes.position,et=!!F.morphAttributes.normal,at=!!F.morphAttributes.color,Rt=Hi;k.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Rt=E.toneMapping);let wt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=wt!==void 0?wt.length:0,Ee=_e.get(k),Gt=p.state.lights;if(ee===!0&&(ge===!0||_!==x)){let nn=_===x&&k.id===M;Q.setState(k,_,nn)}let ct=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Gt.state.version||Ee.outputColorSpace!==ue||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==me||k.fog===!0&&Ee.fog!==K||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Ie||Ee.morphTargets!==Se||Ee.morphNormals!==et||Ee.morphColors!==at||Ee.toneMapping!==Rt||Ee.morphTargetsCount!==st)&&(ct=!0):(ct=!0,Ee.__version=k.version);let kn=Ee.currentProgram;ct===!0&&(kn=Ya(k,I,N));let as=!1,hn=!1,Eo=!1,St=kn.getUniforms(),En=Ee.uniforms;if(Me.useProgram(kn.program)&&(as=!0,hn=!0,Eo=!0),k.id!==M&&(M=k.id,hn=!0),as||x!==_){Me.buffers.depth.getReversed()?(oe.copy(_.projectionMatrix),uM(oe),dM(oe),St.setValue(C,"projectionMatrix",oe)):St.setValue(C,"projectionMatrix",_.projectionMatrix),St.setValue(C,"viewMatrix",_.matrixWorldInverse);let on=St.map.cameraPosition;on!==void 0&&on.setValue(C,ot.setFromMatrixPosition(_.matrixWorld)),Xe.logarithmicDepthBuffer&&St.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,hn=!0,Eo=!0)}if(N.isSkinnedMesh){St.setOptional(C,N,"bindMatrix"),St.setOptional(C,N,"bindMatrixInverse");let nn=N.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),St.setValue(C,"boneTexture",nn.boneTexture,S))}N.isBatchedMesh&&(St.setOptional(C,N,"batchingTexture"),St.setValue(C,"batchingTexture",N._matricesTexture,S),St.setOptional(C,N,"batchingIdTexture"),St.setValue(C,"batchingIdTexture",N._indirectTexture,S),St.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&St.setValue(C,"batchingColorTexture",N._colorsTexture,S));let bn=F.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&De.update(N,F,kn),(hn||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,St.setValue(C,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(En.envMap.value=me,En.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(En.envMapIntensity.value=I.environmentIntensity),hn&&(St.setValue(C,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&WM(En,Eo),K&&k.fog===!0&&ae.refreshFogUniforms(En,K),ae.refreshMaterialUniforms(En,k,H,J,p.state.transmissionRenderTarget[_.id]),xo.upload(C,sg(Ee),En,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xo.upload(C,sg(Ee),En,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(C,"center",N.center),St.setValue(C,"modelViewMatrix",N.modelViewMatrix),St.setValue(C,"normalMatrix",N.normalMatrix),St.setValue(C,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let nn=k.uniformsGroups;for(let on=0,Ed=nn.length;on<Ed;on++){let gr=nn[on];A.update(gr,kn),A.bind(gr,kn)}}return kn}function WM(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function jM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(_,I,F){_e.get(_.texture).__webglTexture=I,_e.get(_.depthTexture).__webglTexture=F;let k=_e.get(_);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,I){let F=_e.get(_);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0};let $M=C.createFramebuffer();this.setRenderTarget=function(_,I=0,F=0){O=_,R=I,T=F;let k=!0,N=null,K=!1,ie=!1;if(_){let me=_e.get(_);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(me.__hasExternalTextures)S.rebindTextures(_,_e.get(_.texture).__webglTexture,_e.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Se=_.depthTexture;if(me.__boundDepthTexture!==Se){if(Se!==null&&_e.has(Se)&&(_.width!==Se.image.width||_.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}let Ae=_.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ie=!0);let Ie=_e.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?N=Ie[I][F]:N=Ie[I],K=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?N=_e.get(_).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[F]:N=Ie,D.copy(_.viewport),G.copy(_.scissor),B=_.scissorTest}else D.copy(xe).multiplyScalar(H).floor(),G.copy(ze).multiplyScalar(H).floor(),B=gt;if(F!==0&&(N=$M),Me.bindFramebuffer(C.FRAMEBUFFER,N)&&k&&Me.drawBuffers(_,N),Me.viewport(D),Me.scissor(G),Me.setScissorTest(B),K){let me=_e.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,F)}else if(ie){let me=_e.get(_.texture),Ae=I;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,me.__webglTexture,F,Ae)}else if(_!==null&&F!==0){let me=_e.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(_,I,F,k,N,K,ie){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ie!==void 0&&(ue=ue[ie]),ue){Me.bindFramebuffer(C.FRAMEBUFFER,ue);try{let me=_.texture,Ae=me.format,Ie=me.type;if(!Xe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-k&&F>=0&&F<=_.height-N&&C.readPixels(I,F,k,N,Be.convert(Ae),Be.convert(Ie),K)}finally{let me=O!==null?_e.get(O).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(_,I,F,k,N,K,ie){return cs(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ie!==void 0&&(ue=ue[ie]),ue){let me=_.texture,Ae=me.format,Ie=me.type;if(!Xe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=_.width-k&&F>=0&&F<=_.height-N){Me.bindFramebuffer(C.FRAMEBUFFER,ue);let Se=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Se),C.bufferData(C.PIXEL_PACK_BUFFER,K.byteLength,C.STREAM_READ),C.readPixels(I,F,k,N,Be.convert(Ae),Be.convert(Ie),0);let et=O!==null?_e.get(O).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,et);let at=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield lM(C,at,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Se),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,K),C.deleteBuffer(Se),C.deleteSync(at),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(_,I=null,F=0){_.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,_=arguments[1]);let k=Math.pow(2,-F),N=Math.floor(_.image.width*k),K=Math.floor(_.image.height*k),ie=I!==null?I.x:0,ue=I!==null?I.y:0;S.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,F,0,0,ie,ue,N,K),Me.unbindTexture()};let qM=C.createFramebuffer(),XM=C.createFramebuffer();this.copyTextureToTexture=function(_,I,F=null,k=null,N=0,K=null){_.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,_=arguments[1],I=arguments[2],K=arguments[3]||0,F=null),K===null&&(N!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=N,N=0):K=0);let ie,ue,me,Ae,Ie,Se,et,at,Rt,wt=_.isCompressedTexture?_.mipmaps[K]:_.image;if(F!==null)ie=F.max.x-F.min.x,ue=F.max.y-F.min.y,me=F.isBox3?F.max.z-F.min.z:1,Ae=F.min.x,Ie=F.min.y,Se=F.isBox3?F.min.z:0;else{let bn=Math.pow(2,-N);ie=Math.floor(wt.width*bn),ue=Math.floor(wt.height*bn),_.isDataArrayTexture?me=wt.depth:_.isData3DTexture?me=Math.floor(wt.depth*bn):me=1,Ae=0,Ie=0,Se=0}k!==null?(et=k.x,at=k.y,Rt=k.z):(et=0,at=0,Rt=0);let st=Be.convert(I.format),Ee=Be.convert(I.type),Gt;I.isData3DTexture?(S.setTexture3D(I,0),Gt=C.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(S.setTexture2DArray(I,0),Gt=C.TEXTURE_2D_ARRAY):(S.setTexture2D(I,0),Gt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,I.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,I.unpackAlignment);let ct=C.getParameter(C.UNPACK_ROW_LENGTH),kn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),as=C.getParameter(C.UNPACK_SKIP_PIXELS),hn=C.getParameter(C.UNPACK_SKIP_ROWS),Eo=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,wt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,wt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se);let St=_.isDataArrayTexture||_.isData3DTexture,En=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){let bn=_e.get(_),nn=_e.get(I),on=_e.get(bn.__renderTarget),Ed=_e.get(nn.__renderTarget);Me.bindFramebuffer(C.READ_FRAMEBUFFER,on.__webglFramebuffer),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ed.__webglFramebuffer);for(let gr=0;gr<me;gr++)St&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(_).__webglTexture,N,Se+gr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.get(I).__webglTexture,K,Rt+gr)),C.blitFramebuffer(Ae,Ie,ie,ue,et,at,ie,ue,C.DEPTH_BUFFER_BIT,C.NEAREST);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||_e.has(_)){let bn=_e.get(_),nn=_e.get(I);Me.bindFramebuffer(C.READ_FRAMEBUFFER,qM),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,XM);for(let on=0;on<me;on++)St?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,bn.__webglTexture,N,Se+on):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,bn.__webglTexture,N),En?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,K,Rt+on):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,K),N!==0?C.blitFramebuffer(Ae,Ie,ie,ue,et,at,ie,ue,C.COLOR_BUFFER_BIT,C.NEAREST):En?C.copyTexSubImage3D(Gt,K,et,at,Rt+on,Ae,Ie,ie,ue):C.copyTexSubImage2D(Gt,K,et,at,Ae,Ie,ie,ue);Me.bindFramebuffer(C.READ_FRAMEBUFFER,null),Me.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else En?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Gt,K,et,at,Rt,ie,ue,me,st,Ee,wt.data):I.isCompressedArrayTexture?C.compressedTexSubImage3D(Gt,K,et,at,Rt,ie,ue,me,st,wt.data):C.texSubImage3D(Gt,K,et,at,Rt,ie,ue,me,st,Ee,wt):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,K,et,at,ie,ue,st,Ee,wt.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,K,et,at,wt.width,wt.height,st,wt.data):C.texSubImage2D(C.TEXTURE_2D,K,et,at,ie,ue,st,Ee,wt);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,kn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,as),C.pixelStorei(C.UNPACK_SKIP_ROWS,hn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Eo),K===0&&I.generateMipmaps&&C.generateMipmap(Gt),Me.unbindTexture()},this.copyTextureToTexture3D=function(_,I,F=null,k=null,N=0){return _.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,_=arguments[2],I=arguments[3],N=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,I,F,k,N)},this.initRenderTarget=function(_){_e.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),Me.unbindTexture()},this.resetState=function(){R=0,T=0,O=null,Me.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var JP=["backgroundCanvas"],vd=class n{canvasRef;scene;camera;renderer;particles;mouseX=0;mouseY=0;particleSystem;time=0;ngAfterViewInit(){this.initThreeJS(),this.animate()}initThreeJS(){this.scene=new Jr,this.scene.background=new Ke(3354),this.camera=new zt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new Mo({canvas:this.canvasRef.nativeElement,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement);let e=new Zn,t=1500,i=new Float32Array(t*3),r=new Float32Array(t*3);for(let o=0;o<t*3;o++)i[o]=(Math.random()-.5)*15,r[o]=(Math.random()-.5)*.1;e.setAttribute("position",new en(i,3)),e.setAttribute("velocity",new en(r,3));let s=new mo({color:3394815,size:.07,transparent:!0,opacity:.8,blending:Ua});this.particleSystem=new Oa(e,s),this.scene.add(this.particleSystem),window.addEventListener("resize",()=>this.onWindowResize())}animate(){requestAnimationFrame(()=>this.animate()),this.time+=.01,this.particleSystem.rotation.y+=.002,this.camera.position.x+=(this.mouseX*.001-this.camera.position.x)*.05,this.camera.position.y+=(-this.mouseY*.001-this.camera.position.y)*.05,this.camera.lookAt(this.scene.position),this.renderer.render(this.scene,this.camera)}onMouseMove(e){this.mouseX=e.clientX-window.innerWidth/2,this.mouseY=e.clientY-window.innerHeight/2}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=un({type:n,selectors:[["app-three-bg"]],viewQuery:function(t,i){if(t&1&&V_(JP,7),t&2){let r;Wh(r=jh())&&(i.canvasRef=r.first)}},hostBindings:function(t,i){t&1&&Vs("mousemove",function(s){return i.onMouseMove(s)},!1,e_)},decls:2,vars:0,consts:[["backgroundCanvas",""]],template:function(t,i){t&1&&Jt(0,"canvas",null,0)},styles:["canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;background:radial-gradient(circle at top left,#001f3f,#000d1a)}"]})};var yd=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=un({type:n,selectors:[["app-home"]],decls:9,vars:0,consts:[[1,"home"],[1,"home-content"],[1,"intro"],[1,"name"],[1,"description"]],template:function(t,i){t&1&&(Jt(0,"app-three-bg"),lt(1,"section",0)(2,"div",1)(3,"p",2),Ct(4,"HELLO \u{1F44B}, I AM"),ut(),lt(5,"h1",3),Ct(6,"THABO"),ut(),lt(7,"p",4),Ct(8,"A full-stack developer, Building mobile & web applications."),ut()()())},dependencies:[vd],styles:[".home[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh;text-align:left;padding:20px}.home-content[_ngcontent-%COMP%]{max-width:600px}.intro[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#fff}.name[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:#12d6d6}.description[_ngcontent-%COMP%]{font-size:18px;color:#fff;max-width:500px}.cta-btn[_ngcontent-%COMP%]{display:inline-block;margin-top:20px;padding:12px 24px;font-size:18px;font-weight:700;text-decoration:none;color:#fff;background:#ff9800;border-radius:8px;transition:.3s ease-in-out}.cta-btn[_ngcontent-%COMP%]:hover{background:#e68900;transform:scale(1.05)}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}"]})};function KP(n,e){if(n&1&&(lt(0,"li"),Ct(1),ut()),n&2){let t=e.$implicit;Rr(),ul(t)}}var _d=class n{name="Thabo";role="Backend Developer";description=`
    I'm dedicated to the philosophy of continuous learning, with a strong focus on backend development and creating scalable web solutions.
    My love for coding is fueled by the problem-solving nature of the field and the endless opportunities for growth and exploration. When I'm not working on code,
    I enjoy staying active at the gym, reading insightful books, and immersing myself in anime for relaxation and inspiration.
  `;static \u0275fac=function(t){return new(t||n)};static \u0275cmp=un({type:n,selectors:[["app-about-me"]],decls:13,vars:2,consts:[[1,"about-me"],[1,"container"],[1,"intro"],[1,"description"],[1,"skills"],[4,"ngFor","ngForOf"]],template:function(t,i){t&1&&(lt(0,"section",0)(1,"div",1)(2,"h2"),Ct(3,"About Me"),ut(),lt(4,"p",2),Ct(5," Myself and I "),ut(),lt(6,"p",3),Ct(7),ut(),lt(8,"div",4)(9,"h3"),Ct(10,"Skills:"),ut(),lt(11,"ul"),Vh(12,KP,2,1,"li",5),ut()()()()),t&2&&(Rr(7),ul(i.description),Rr(5),Gh("ngForOf",i.skills))},styles:[".about-me[_ngcontent-%COMP%]{background-color:#000;padding:60px 20px;text-align:center;border-radius:2%;margin:-8px}.about-me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;font-weight:700;color:#fff;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;color:#fff;margin-top:10px;margin-bottom:20px}.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;color:#fff;line-height:1.8;max-width:900px;margin:20px auto;padding:0 10px;text-align:justify}.about-me-content[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:20px;background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a}"]})};var xd=class n{constructor(){}ngOnInit(){this.initThreeJS()}initThreeJS(){let e=new Jr,t=new zt(75,window.innerWidth/window.innerHeight,.1,1e3),i=new Mo;i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);let r=new ar,s=new Zr({color:65280}),o=new fn(r,s);e.add(o),t.position.z=5;let a=()=>{requestAnimationFrame(a),o.rotation.x+=.1,o.rotation.y+=.01,i.render(e,t)};a()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=un({type:n,selectors:[["app-skills"]],decls:27,vars:0,consts:[[1,"skills"],[1,"skills-container"],["id","springBoot",1,"skill"],[1,"skill-icon"],["src","assets/spring-boot.svg","alt","Spring Boot"],[1,"skill-name"],["id","htmlCss",1,"skill"],["src","assets/java.svg","alt","Java"],["id","jsAngular",1,"skill"],["src","assets/typescript.svg","alt","Typescript"],["id","git",1,"skill"],["src","assets/angular.svg","alt","Angular"],[1,"subskills"],[1,"subskill-name"]],template:function(t,i){t&1&&(lt(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),Jt(4,"img",4),ut(),lt(5,"p",5),Ct(6,"Spring Boot"),ut()(),lt(7,"div",6)(8,"div",3),Jt(9,"img",7),ut(),lt(10,"p",5),Ct(11,"Java"),ut()(),lt(12,"div",8)(13,"div",3),Jt(14,"img",9),ut(),lt(15,"p",5),Ct(16,"Typescript"),ut()(),lt(17,"div",10)(18,"div",3),Jt(19,"img",11),ut(),lt(20,"p",5),Ct(21,"Angular"),ut(),lt(22,"div",12)(23,"p",13),Ct(24,"HTML"),ut(),lt(25,"p",13),Ct(26,"CSS"),ut()()()()())},styles:[".skills[_ngcontent-%COMP%]{background-color:#f4f4f9;padding:60px 20px;text-align:center}.skills-container[_ngcontent-%COMP%]{display:flex;justify-content:left;align-items:center;flex-wrap:wrap;gap:20px;max-width:1100px;margin:0 auto}.skill[_ngcontent-%COMP%]{background-color:#1e1e1e;color:#fff;width:200px;height:250px;border-radius:10px;padding:15px;box-shadow:0 4px 10px #0003;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:transform .3s ease,box-shadow .3s ease;overflow:hidden;position:relative}.skill[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 6px 15px #0000004d}.skill-icon[_ngcontent-%COMP%]{width:60px;height:60px;margin-bottom:15px;display:flex;justify-content:center;align-items:center}.skill-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:contain}.skill-name[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;text-align:center;margin-top:10px}.subskills[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:10px;justify-content:center}.subskill-name[_ngcontent-%COMP%]{font-size:.9rem;color:#555;background-color:#e0e0e0;padding:5px 8px;border-radius:5px;text-align:center}"]})};var Md=class n{title="personal-portfolio";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=un({type:n,selectors:[["app-root"]],decls:5,vars:0,template:function(t,i){t&1&&Jt(0,"app-navigation")(1,"app-home")(2,"app-about-me")(3,"app-skills")(4,"router-outlet")},dependencies:[Lp,Ks,yd,_d,xd],encapsulation:2})};p0(Md,ex).catch(n=>console.error(n));
