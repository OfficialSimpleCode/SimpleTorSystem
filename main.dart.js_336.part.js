((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_336",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={acN:function acN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},d0N:function d0N(d){this.a=d},aVI:function aVI(){},c0P:function c0P(d){this.a=d},c0Q:function c0Q(d){this.a=d},c0L:function c0L(){},c0M:function c0M(d){this.a=d},
faZ(d,e,f,g,h,i,j,k){var x=new B.acN(A.ch("bytes from (?:.*)(?<ip>\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b)\\)?: icmp_seq=(?<seq>\\d+) ttl=(?<ttl>\\d+) time=(?<time>(\\d+).?(\\d+))",!0,!1,!1),A.ch("(?<tx>\\d+) packets transmitted, (?<rx>\\d+) received,.*time (?<time>\\d+)ms",!0,!1,!1),A.ch("no answer yet for icmp_seq=(?<seq>\\d+)",!0,!1,!1),A.ch("From (?<ip>.*)(?:.*) icmp_seq=(?<seq>\\d+) Time to live exceeded",!0,!1,!1),A.ch("unknown host|service not known|failure in name",!0,!1,!1),D.Xe),w=new B.d0L(d,e,f,g,h,!1,x,j,!1,A.b([],y.k))
w.aiC(d,e,f,g,h,!1,x,j,!1)
return w},
d0L:function d0L(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=$
_.z=null
_.Q=$
_.as=null
_.at=m},
fb_(d,e,f,g,h,i,j,k){var x=new B.acN(A.ch("bytes from (?<ip>.*): icmp_seq=(?<seq>\\d+) ttl=(?<ttl>\\d+) time=(?<time>(\\d+).?(\\d+))",!0,!1,!1),A.ch("(?<tx>\\d+) packets transmitted, (?<rx>\\d+) packets received",!0,!1,!1),A.ch("Request timeout for icmp_seq (?<seq>\\d+)",!0,!1,!1),A.ch("from (?<ip>.*): Time to live exceeded",!0,!1,!1),A.ch("Unknown host",!0,!1,!1),D.Xe),w=new B.d0M(d,e,f,g,h,!1,x,j,!1,A.b([],y.k))
w.aiC(d,e,f,g,h,!1,x,j,!1)
return w},
d0M:function d0M(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=$
_.z=null
_.Q=$
_.as=null
_.at=m},
fb0(d,e,f,g,h,i,j,k,l){var x=new B.acN(A.ch("Reply from (?<ip>.*): bytes=(?:\\d+) time(?:=|<)(?<time>\\d+)ms TTL=(?<ttl>\\d+)",!0,!1,!1),A.ch("Sent = (?<tx>\\d+), Received = (?<rx>\\d+), Lost = (?:\\d+)",!0,!1,!1),A.ch("Request timed out",!0,!1,!1),A.ch("Reply from (?<ip>.*): TTL expired in transit",!0,!1,!1),A.ch("could not find host",!0,!1,!1),A.b([A.ch("General failure",!0,!1,!1),A.ch("Destination host unreachable",!0,!1,!1)],y.c)),w=new B.d0R(d,e,f,g,h,!1,x,j,!1,A.b([],y.k))
w.aiC(d,e,f,g,h,!1,x,j,!1)
return w},
d0R:function d0R(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=$
_.z=null
_.Q=$
_.as=null
_.at=m},
fdp(){return new B.bj_(null)},
bj_:function bj_(d){this.a=d},
dbK:function dbK(d){this.a=d},
biY:function biY(d,e){this.c=d
this.a=e},
dbI:function dbI(d){this.a=d},
fb1(d,e){var x,w=null
switch($.agt()){case"android":case"fuchsia":case"linux":return B.faZ(d,e,1,2,255,!1,C.bc,w)
case"macos":return B.fb_(d,e,1,2,255,!1,C.bc,w)
case"windows":return B.fb0(d,e,1,2,255,!1,C.bc,!1,w)
case"ios":x=$.eLm
if(x!=null)return x.$8(d,e,1,2,255,!1,w,C.bc)
throw A.B(A.eN("iOS support has not been enabled. Please see the docs at https://pub.dev/packages/dart_ping"))
default:throw A.B(A.eN("Ping not supported on this platform"))}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[137],B)
D=c[286]
B.acN.prototype={
gctx(){return A.ePz(new B.d0N(this),y.w,y.i)},
YQ(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l="seq",k=n.c.j2(e)
if(k!=null){x=k.gayN().u(0,l)?k.r9(l):m
return new A.n0(new A.acO(x==null?m:A.cZ(x,m,m),m,m,m),m,new A.p0(C.OB,m))}k=n.a.j2(e)
if(k!=null){x=k.gayN().u(0,l)?k.r9(l):m
w=k.r9("ttl")
v=k.r9("time")
u=k.r9("ip")
t=x==null?m:x.length===0
if(t!==!1)t=m
else{x.toString
t=A.cZ(x,m,m)}s=w==null?m:A.cZ(w,m,m)
return new A.n0(new A.acO(t,s,v==null?m:A.R(0,0,C.h.dH(A.jj(v)*1000),0,0,0),u),m,m)}k=n.b.j2(e)
if(k!=null){r=k.r9("tx")
q=k.r9("rx")
v=k.b.length-1>2?k.r9("time"):m
if(r==null||q==null)throw A.B(A.dW("Error parsing summary data: "+e))
u=A.cZ(r,m,m)
t=A.cZ(q,m,m)
return new A.n0(m,A.ewJ(m,t,v==null?m:A.R(0,0,0,A.cZ(v,m,m),0,0),u),m)}k=n.d.j2(e)
if(k!=null){u=k.r9("ip")
t=k.r9(l)
t.toString
return new A.n0(new A.acO(A.ea(t,m),m,m,u),m,new A.p0(D.aTu,m))}if(C.j.u(e,n.e))return new A.n0(m,m,new A.p0(C.Fo,m))
for(u=n.f,t=u.length,p=0;p<u.length;u.length===t||(0,A.aN)(u),++p){o=u[p]
if(o.b.test(e))return new A.n0(m,m,new A.p0(C.Fp,e))}return m}}
B.aVI.prototype={
aiC(d,e,f,g,h,i,j,k,l){var x=this,w=A.S7(x.gbrz(),x.gbrA(),new B.c0P(x),new B.c0Q(x),!1,y.i)
x.y!==$&&A.df()
x.y=w},
gado(){var x=0,w=A.i(y.A),v,u=this,t
var $async$gado=A.d(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:t=A.ai(u.gavA(),!0,y.w)
t.push(u.a)
x=3
return A.c(A.eLG("ping",t,u.glv(u),!1),$async$gado)
case 3:v=e
x=1
break
case 1:return A.f(v,w)}})
return A.h($async$gado,w)},
a2Q(){var x=0,w=A.i(y.v),v=this,u
var $async$a2Q=A.d(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.gado().kL(new B.c0L()),$async$a2Q)
case 2:u=e
v.z=u
u=A.fep(A.b([u.gcz8(),v.z.gcz9()],y.m),y.y)
u=new A.b8v().kJ(C.ml.kJ(u))
u=v.r.gctx().kJ(u).cdS(new B.c0M(v),v.gbtD())
v.Q!==$&&A.df()
v.Q=u
return A.f(null,w)}})
return A.h($async$a2Q,w)},
RN(){var x=0,w=A.i(y.v),v=this,u,t,s,r
var $async$RN=A.d(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.z.gczE(),$async$RN)
case 2:r=e
if(r!==0){u=v.atQ(r)
if(u!=null){t=v.as
if(t!=null){t=t.b.d
t===$&&A.j()
t.push(u)}else{t=A.R(0,0,0,0,0,0)
v.as=new A.n0(null,A.ewJ(A.b([u],y.k),0,t,0),null)}}else v.awC(r)}t=v.as
if(t!=null){s=v.y
s===$&&A.j()
s.A(0,t)}t=v.y
t===$&&A.j()
x=(t.b&4)===0?3:4
break
case 3:x=5
return A.c(t.bl(0),$async$RN)
case 5:case 4:return A.f(null,w)}})
return A.h($async$RN,w)},
gu0(d){var x=this.y
x===$&&A.j()
return new A.i9(x,A.Q(x).k("i9<1>"))},
aj5(){var x=0,w=A.i(y.v)
var $async$aj5=A.d(function(d,e){if(d===1)return A.e(e,w)
while(true)switch(x){case 0:return A.f(null,w)}})
return A.h($async$aj5,w)}}
B.d0L.prototype={
glv(d){var x=y.w
return A.m(["LC_ALL","C"],x,x)},
gavA(){var x=this,w=A.b(["-O","-n","-W "+x.d,"-i "+x.c,"-t "+x.e],y.x)
w.push("-c "+x.b)
return w},
atQ(d){return d===1?new A.p0(D.OA,null):null},
awC(d){return d>1?new A.Tu("Ping process exited with code: "+d):null}}
B.d0M.prototype={
glv(d){var x=y.w
return A.m(["LC_ALL","C"],x,x)},
gavA(){var x=this,w=A.b(["-n","-W "+x.d*1000,"-i "+x.c,"-m "+x.e],y.x)
w.push("-c "+x.b)
return w},
atQ(d){if(d===1)return new A.p0(D.OA,null)
else if(d===68)return new A.p0(C.Fo,null)
return null},
awC(d){if(d>1&&d!==68)return new A.Tu("Ping process exited with code: "+d)
return null}}
B.d0R.prototype={
glv(d){var x=y.w
return A.m(["LANG","en_US"],x,x)},
gavA(){var x=A.b(["-w",C.f.l(this.d*1000),"-i",C.f.l(this.e)],y.x)
x.push("-4")
x.push("-n")
x.push(C.f.l(this.b))
return x},
atQ(d){return new A.p0(C.Fp,"Ping process exited with code: "+d)},
awC(d){return new A.Tu("Ping process exited with code: "+d)}}
B.bj_.prototype={
m(d){var x=null
return A.L(A.b([A.C("\u05e1\u05d8\u05d8\u05d5\u05e1 \u05d4\u05e9\u05e8\u05ea\u05d9\u05dd",x,!1,!1,x,!1,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,15,x,""),new A.n(x,20,x,x),this.be1(),new A.n(x,30,x,x)],y.u),C.e,C.i,C.d)},
be1(){var x=A.b([],y.u)
C.b.q(D.b6a,new B.dbK(x))
return A.L(x,C.e,C.i,C.d)}}
B.biY.prototype={
m(d){var x=B.fb1(this.c,5)
return A.lI(A.ext(new B.dbI(this),null,x.gu0(x),y.i),C.C)},
bao(d){var x,w,v,u=null,t=d.b
if(t==null)return A.aW("",u,u,u,u,u,u,u,u,u,u,u)
x=t.a
if(x!=null){w=A.aW("Ttl - "+J.bG(x.b),u,u,u,u,u,u,C.t,C.C,u,u,u)
v=x.c
v=v!=null?A.aW("Miliseconds- "+C.f.l(C.f.a5(v.a,1000)),u,u,u,u,u,u,C.t,C.C,u,u,u):new A.n(u,u,u,u)
return A.L(A.b([w,v,A.aW("Seq - "+J.bG(x.a),u,u,u,u,u,u,C.t,C.C,u,u,u),new A.n(u,20,u,u)],y.u),C.e,C.F,C.d)}x=t.b
if(x!=null){w=A.aW("Transmitted - "+C.f.l(x.a),u,u,u,u,u,u,C.t,C.C,u,u,u)
v=A.aW("Received - "+C.f.l(x.b),u,u,u,u,u,u,C.t,C.C,u,u,u)
x=x.c
x=x!=null?A.aW("Miliseconds - "+C.f.l(C.f.a5(x.a,1000)),u,u,u,u,u,u,C.t,C.C,u,u,u):new A.n(u,u,u,u)
return A.L(A.b([w,v,x,new A.n(u,20,u,u)],y.u),C.e,C.F,C.d)}return A.aW("",u,u,u,u,u,u,u,u,u,u,u)},
aPA(d,e){var x=null
return A.b1(!0,C.b8,x,C.a2,x,x,A.L(A.b([new A.n(x,20,x,x),A.C(this.c,C.t,!1,!1,x,!1,!0,x,!1,!1,!1,!1,1,x,!1,!1,!1,19,x,""),new A.n(x,10,x,x),A.ao(C.l,e,C.o,x,x,x,x,x,x,x,x,x,x,x)],y.u),C.e,C.i,C.d),d,0,"",x,!1,x,new A.y(0,10,0,0),!1,!0,x,x,x,new A.y(20,10,20,10),x,x,0.55,x,x,x)}}
var z=a.updateTypes(["aa<~>()"])
B.d0N.prototype={
$2(d,e){var x,w=this.a.YQ(0,d)
if(w!=null){x=e.a
if((x.e&2)!==0)A.D(A.aB("Stream is already closed"))
x.J7(0,w)}},
$S:1597}
B.c0P.prototype={
$0(){var x=this.a.Q
x===$&&A.j()
return x.gada(x)},
$S:1}
B.c0Q.prototype={
$0(){var x=this.a.Q
x===$&&A.j()
return x.gxs(x)},
$S:1}
B.c0L.prototype={
$1(d){if(C.j.u(J.bG(d),"No such file"))throw A.B(A.dW("Could not find ping binary on this system. Please ensure it is installed"))
throw A.B(d)},
$S:1598}
B.c0M.prototype={
$1(d){var x,w
if(d.a!=null||d.c!=null){x=d.c
if(x!=null)this.a.at.push(x)
x=this.a.y
x===$&&A.j()
x.A(0,d)}else{x=d.b
if(x!=null){x=x.d
x===$&&A.j()
w=this.a
C.b.a6(x,w.at)
w.as=d}}},
$S:1599}
B.dbK.prototype={
$1(d){this.a.push(new B.biY(d,null))},
$S:8}
B.dbI.prototype={
$2(d,e){var x,w,v=null,u=e.b
if(u!=null){x=J.bG(u.c)
w=this.a
u=u.b
if(u!=null){u=u.d
u===$&&A.j()
u=u.length===0}else u=!1
if(u)u=A.S(C.h.W(127.5),76,175,80)
else u=x==="null"?A.S(C.h.W(127.5),255,152,0):A.S(C.h.W(127.5),244,67,54)
return w.aPA(u,w.bao(e))}u=J.bG(e.c)
return this.a.aPA(A.S(C.h.W(127.5),244,67,54),A.aW(u,v,v,v,v,v,v,C.t,C.C,v,v,v))},
$S:1600};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.aVI.prototype,"gbrA","a2Q",0)
x(w,"gbtD","RN",0)
x(w,"gbrz","aj5",0)})();(function inheritance(){var x=a.inheritMany
x(A.am,[B.acN,B.aVI])
x(A.d_,[B.d0N,B.dbI])
x(A.bz,[B.c0P,B.c0Q])
x(A.bB,[B.c0L,B.c0M,B.dbK])
x(B.aVI,[B.d0L,B.d0M,B.d0R])
x(A.w,[B.bj_,B.biY])})()
A.bj(b.typeUniverse,JSON.parse('{"bj_":{"w":[],"k":[]},"biY":{"w":[],"k":[]}}'))
var y=(function rtii(){var x=A.E
return{k:x("K<p0>"),c:x("K<alT>"),m:x("K<cA<a0<F>>>"),x:x("K<p>"),u:x("K<k>"),y:x("a0<F>"),i:x("n0"),A:x("h_u"),w:x("p"),v:x("~")}})();(function constants(){var x=a.makeConstList
D.OA=new A.aat("No Reply",4,"noReply")
D.aTu=new A.aat("Time To Live Exceeded",0,"timeToLiveExceeded")
D.Xe=A.b(x([]),y.c)
D.b6a=A.b(x(["devapi.simpletor.app"]),y.x)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_336",e:"endPart",h:b})})($__dart_deferred_initializers__,"CFFX/2vNCJgaZvp2zBzdyOUHLJw=");