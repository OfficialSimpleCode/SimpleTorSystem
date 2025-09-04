((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_555",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={aiR:function aiR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},dHi:function dHi(d){this.a=d},b7Z:function b7Z(){},cpX:function cpX(d){this.a=d},cpY:function cpY(d){this.a=d},cpT:function cpT(){},cpU:function cpU(d){this.a=d},
hjq(d,e,f,g,h,i,j,k){var x=new C.aiR(A.cu("bytes from (?:.*)(?<ip>\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b)\\)?: icmp_seq=(?<seq>\\d+) ttl=(?<ttl>\\d+) time=(?<time>(\\d+).?(\\d+))",!0,!1,!1),A.cu("(?<tx>\\d+) packets transmitted, (?<rx>\\d+) received,.*time (?<time>\\d+)ms",!0,!1,!1),A.cu("no answer yet for icmp_seq=(?<seq>\\d+)",!0,!1,!1),A.cu("From (?<ip>.*)(?:.*) icmp_seq=(?<seq>\\d+) Time to live exceeded",!0,!1,!1),A.cu("unknown host|service not known|failure in name",!0,!1,!1),D.a4Q),w=new C.dHg(d,e,f,g,h,!1,x,j,!1,A.a([],y.k))
w.arp(d,e,f,g,h,!1,x,j,!1)
return w},
dHg:function dHg(d,e,f,g,h,i,j,k,l,m){var _=this
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
hjr(d,e,f,g,h,i,j,k){var x=new C.aiR(A.cu("bytes from (?<ip>.*): icmp_seq=(?<seq>\\d+) ttl=(?<ttl>\\d+) time=(?<time>(\\d+).?(\\d+))",!0,!1,!1),A.cu("(?<tx>\\d+) packets transmitted, (?<rx>\\d+) packets received",!0,!1,!1),A.cu("Request timeout for icmp_seq (?<seq>\\d+)",!0,!1,!1),A.cu("from (?<ip>.*): Time to live exceeded",!0,!1,!1),A.cu("Unknown host",!0,!1,!1),D.a4Q),w=new C.dHh(d,e,f,g,h,!1,x,j,!1,A.a([],y.k))
w.arp(d,e,f,g,h,!1,x,j,!1)
return w},
dHh:function dHh(d,e,f,g,h,i,j,k,l,m){var _=this
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
hjs(d,e,f,g,h,i,j,k,l){var x=new C.aiR(A.cu("Reply from (?<ip>.*): bytes=(?:\\d+) time(?:=|<)(?<time>\\d+)ms TTL=(?<ttl>\\d+)",!0,!1,!1),A.cu("Sent = (?<tx>\\d+), Received = (?<rx>\\d+), Lost = (?:\\d+)",!0,!1,!1),A.cu("Request timed out",!0,!1,!1),A.cu("Reply from (?<ip>.*): TTL expired in transit",!0,!1,!1),A.cu("could not find host",!0,!1,!1),A.a([A.cu("General failure",!0,!1,!1),A.cu("Destination host unreachable",!0,!1,!1)],y.c)),w=new C.dHm(d,e,f,g,h,!1,x,j,!1,A.a([],y.k))
w.arp(d,e,f,g,h,!1,x,j,!1)
return w},
dHm:function dHm(d,e,f,g,h,i,j,k,l,m){var _=this
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
hmk(){return new C.bBd(null)},
bBd:function bBd(d){this.a=d},
dUT:function dUT(d){this.a=d},
bBb:function bBb(d,e){this.c=d
this.a=e},
dUR:function dUR(d){this.a=d},
hjt(d,e){var x,w=null
switch($.ani()){case"android":case"fuchsia":case"linux":return C.hjq(d,e,1,2,255,!1,B.b4,w)
case"macos":return C.hjr(d,e,1,2,255,!1,B.b4,w)
case"windows":return C.hjs(d,e,1,2,255,!1,B.b4,!1,w)
case"ios":x=$.fQ8
if(x!=null)return x.$8(d,e,1,2,255,!1,w,B.b4)
throw A.H(A.eG("iOS support has not been enabled. Please see the docs at https://pub.dev/packages/dart_ping"))
default:throw A.H(A.eG("Ping not supported on this platform"))}}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[194],C)
D=c[461]
C.aiR.prototype={
gcT8(){return A.fUT(new C.dHi(this),y.w,y.i)},
aGH(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l="seq",k=n.c.l2(e)
if(k!=null){x=k.gaL3().u(0,l)?k.u8(l):m
return new A.oV(new A.aiS(x==null?m:A.dr(x,m),m,m,m),m,new A.rf(B.WW,m))}k=n.a.l2(e)
if(k!=null){x=k.gaL3().u(0,l)?k.u8(l):m
w=k.u8("ttl")
v=k.u8("time")
u=k.u8("ip")
t=x==null?m:x.length===0
if(t!==!1)t=m
else{x.toString
t=A.dr(x,m)}s=w==null?m:A.dr(w,m)
return new A.oV(new A.aiS(t,s,v==null?m:A.R(0,0,B.l.cL(A.nd(v)*1000),0,0,0),u),m,m)}k=n.b.l2(e)
if(k!=null){r=k.u8("tx")
q=k.u8("rx")
v=k.b.length-1>2?k.u8("time"):m
if(r==null||q==null)throw A.H(A.df("Error parsing summary data: "+e))
u=A.dr(r,m)
t=A.dr(q,m)
return new A.oV(m,A.fzH(m,t,v==null?m:A.R(0,0,0,A.dr(v,m),0,0),u),m)}k=n.d.l2(e)
if(k!=null){u=k.u8("ip")
t=k.u8(l)
t.toString
return new A.oV(new A.aiS(A.i4(t,m),m,m,u),m,new A.rf(D.b8R,m))}if(B.k.u(e,n.e))return new A.oV(m,m,new A.rf(B.Li,m))
for(u=n.f,t=u.length,p=0;p<u.length;u.length===t||(0,A.aH)(u),++p){o=u[p]
if(o.b.test(e))return new A.oV(m,m,new A.rf(B.Lj,e))}return m}}
C.b7Z.prototype={
arp(d,e,f,g,h,i,j,k,l){var x=this,w=A.tn(x.gbIm(),x.gbIn(),new C.cpX(x),new C.cpY(x),!1,y.i)
x.y!==$&&A.dc()
x.y=w},
gal2(){var x=0,w=A.j(y.A),v,u=this,t
var $async$gal2=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:t=u.gaGG()
t=A.a0(t,y.w)
t.push(u.a)
x=3
return A.c(A.fQu("ping",t,u.gmC(u),!1),$async$gal2)
case 3:v=e
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$gal2,w)},
a85(){var x=0,w=A.j(y.v),v=this,u
var $async$a85=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.gal2().kV(new C.cpT()),$async$a85)
case 2:u=e
v.z=u
u=A.hnm(A.a([u.gcZK(),v.z.gcZL()],y.m),y.y)
u=new A.bp6().lD(B.pd.lD(u))
u=v.r.gcT8().lD(u).czt(new C.cpU(v),v.gbKG())
v.Q!==$&&A.dc()
v.Q=u
return A.h(null,w)}})
return A.i($async$a85,w)},
VV(){var x=0,w=A.j(y.v),v=this,u,t,s,r
var $async$VV=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=2
return A.c(v.z.gd_h(),$async$VV)
case 2:r=e
if(r!==0){u=v.aEk(r)
if(u!=null){t=v.as
if(t!=null){t=t.b.d
t===$&&A.d()
t.push(u)}else{t=A.R(0,0,0,0,0,0)
v.as=new A.oV(null,A.fzH(A.a([u],y.k),0,t,0),null)}}else v.aHX(r)}t=v.as
if(t!=null){s=v.y
s===$&&A.d()
s.C(0,t)}t=v.y
t===$&&A.d()
x=(t.b&4)===0?3:4
break
case 3:x=5
return A.c(t.bA(0),$async$VV)
case 5:case 4:return A.h(null,w)}})
return A.i($async$VV,w)},
gw6(d){var x=this.y
x===$&&A.d()
return new A.it(x,A.N(x).j("it<1>"))},
arV(){var x=0,w=A.j(y.v)
var $async$arV=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:return A.h(null,w)}})
return A.i($async$arV,w)}}
C.dHg.prototype={
gmC(d){var x=y.w
return A.n(["LC_ALL","C"],x,x)},
gaGG(){var x=this,w=A.a(["-O","-n","-W "+x.d,"-i "+x.c,"-t "+x.e],y.x)
w.push("-c "+x.b)
return w},
aEk(d){return d===1?new A.rf(D.WX,null):null},
aHX(d){return d>1?new A.Va("Ping process exited with code: "+d):null}}
C.dHh.prototype={
gmC(d){var x=y.w
return A.n(["LC_ALL","C"],x,x)},
gaGG(){var x=this,w=A.a(["-n","-W "+x.d*1000,"-i "+x.c,"-m "+x.e],y.x)
w.push("-c "+x.b)
return w},
aEk(d){if(d===1)return new A.rf(D.WX,null)
else if(d===68)return new A.rf(B.Li,null)
return null},
aHX(d){if(d>1&&d!==68)return new A.Va("Ping process exited with code: "+d)
return null}}
C.dHm.prototype={
gmC(d){var x=y.w
return A.n(["LANG","en_US"],x,x)},
gaGG(){var x=A.a(["-w",B.i.m(this.d*1000),"-i",B.i.m(this.e)],y.x)
x.push("-4")
x.push("-n")
x.push(B.i.m(this.b))
return x},
aEk(d){return new A.rf(B.Lj,"Ping process exited with code: "+d)},
aHX(d){return new A.Va("Ping process exited with code: "+d)}}
C.bBd.prototype={
l(d){var x=null
return A.I(A.a([A.y("\u05e1\u05d8\u05d8\u05d5\u05e1 \u05d4\u05e9\u05e8\u05ea\u05d9\u05dd",x,!1,!1,x,!1,!1,x,!1,!1,!1,!1,1,x,!1,!1,!1,15,x,x,!1,""),new A.m(x,20,x,x),this.btK(),new A.m(x,30,x,x)],y.u),B.e,B.c,B.f)},
btK(){var x=A.a([],y.u)
B.b.q(D.bpE,new C.dUT(x))
return A.I(x,B.e,B.c,B.f)}}
C.bBb.prototype={
l(d){var x=C.hjt(this.c,5)
return A.o_(A.fAB(new C.dUR(this),null,x.gw6(x),y.i),B.E)},
bpy(d){var x,w,v,u=null,t=d.b
if(t==null)return A.bu("",u,u,u,u,u,u,u,u,u,u,u,u)
x=t.a
if(x!=null){w=A.bu("Ttl - "+J.bN(x.b),u,u,u,u,u,u,u,B.r,B.E,u,u,u)
v=x.c
v=v!=null?A.bu("Miliseconds- "+B.i.m(B.i.V(v.a,1000)),u,u,u,u,u,u,u,B.r,B.E,u,u,u):new A.m(u,u,u,u)
return A.I(A.a([w,v,A.bu("Seq - "+J.bN(x.a),u,u,u,u,u,u,u,B.r,B.E,u,u,u),new A.m(u,20,u,u)],y.u),B.e,B.B,B.f)}x=t.b
if(x!=null){w=A.bu("Transmitted - "+B.i.m(x.a),u,u,u,u,u,u,u,B.r,B.E,u,u,u)
v=A.bu("Received - "+B.i.m(x.b),u,u,u,u,u,u,u,B.r,B.E,u,u,u)
x=x.c
x=x!=null?A.bu("Miliseconds - "+B.i.m(B.i.V(x.a,1000)),u,u,u,u,u,u,u,B.r,B.E,u,u,u):new A.m(u,u,u,u)
return A.I(A.a([w,v,x,new A.m(u,20,u,u)],y.u),B.e,B.B,B.f)}return A.bu("",u,u,u,u,u,u,u,u,u,u,u,u)},
b2W(d,e){var x=null
return A.ai(!0,B.bl,x,B.A,x,x,A.I(A.a([new A.m(x,20,x,x),A.y(this.c,B.r,!1,!1,x,!1,!0,x,!1,!1,!1,!1,1,x,!1,!1,!1,19,x,x,!1,""),new A.m(x,10,x,x),A.au(B.m,e,B.j,x,x,x,x,x,x,x,x,x,x,x)],y.u),B.e,B.c,B.f),d,0,"",!1,x,x,B.c,!1,x,new A.w(0,10,0,0),!1,!0,x,x,x,new A.w(20,10,20,10),x,x,0.55,x,x,x)}}
var z=a.updateTypes(["ad<~>()"])
C.dHi.prototype={
$2(d,e){var x,w=this.a.aGH(0,d)
if(w!=null){x=e.a
if((x.e&2)!==0)A.af(A.aW("Stream is already closed"))
x.Nr(0,w)}},
$S:1871}
C.cpX.prototype={
$0(){var x=this.a.Q
x===$&&A.d()
return x.gakT(x)},
$S:1}
C.cpY.prototype={
$0(){var x=this.a.Q
x===$&&A.d()
return x.gzR(x)},
$S:1}
C.cpT.prototype={
$1(d){if(B.k.u(J.bN(d),"No such file"))throw A.H(A.df("Could not find ping binary on this system. Please ensure it is installed"))
throw A.H(d)},
$S:1872}
C.cpU.prototype={
$1(d){var x,w
if(d.a!=null||d.c!=null){x=d.c
if(x!=null)this.a.at.push(x)
x=this.a.y
x===$&&A.d()
x.C(0,d)}else{x=d.b
if(x!=null){x=x.d
x===$&&A.d()
w=this.a
B.b.X(x,w.at)
w.as=d}}},
$S:1873}
C.dUT.prototype={
$1(d){this.a.push(new C.bBb(d,null))},
$S:10}
C.dUR.prototype={
$2(d,e){var x,w,v=null,u=e.b
if(u!=null){x=J.bN(u.c)
w=this.a
u=u.b
if(u!=null){u=u.d
u===$&&A.d()
u=u.length===0}else u=!1
if(u)u=A.bX(B.l.aC(127.5),B.b8.gk(0)>>>16&255,B.b8.gk(0)>>>8&255,B.b8.gk(0)&255)
else u=x==="null"?A.bX(B.l.aC(127.5),B.d0.gk(0)>>>16&255,B.d0.gk(0)>>>8&255,B.d0.gk(0)&255):A.bX(B.l.aC(127.5),B.R.gk(0)>>>16&255,B.R.gk(0)>>>8&255,B.R.gk(0)&255)
return w.b2W(u,w.bpy(e))}u=J.bN(e.c)
return this.a.b2W(A.bX(B.l.aC(127.5),B.R.gk(0)>>>16&255,B.R.gk(0)>>>8&255,B.R.gk(0)&255),A.bu(u,v,v,v,v,v,v,v,B.r,B.E,v,v,v))},
$S:1874};(function installTearOffs(){var x=a._instance_0u
var w
x(w=C.b7Z.prototype,"gbIn","a85",0)
x(w,"gbKG","VV",0)
x(w,"gbIm","arV",0)})();(function inheritance(){var x=a.inheritMany
x(A.al,[C.aiR,C.b7Z])
x(A.c2,[C.dHi,C.dUR])
x(A.b_,[C.cpX,C.cpY])
x(A.b5,[C.cpT,C.cpU,C.dUT])
x(C.b7Z,[C.dHg,C.dHh,C.dHm])
x(A.u,[C.bBd,C.bBb])})()
A.aN(b.typeUniverse,JSON.parse('{"bBd":{"u":[],"l":[]},"bBb":{"u":[],"l":[]}}'))
var y=(function rtii(){var x=A.x
return{k:x("J<rf>"),c:x("J<atC>"),m:x("J<cZ<a1<C>>>"),x:x("J<o>"),u:x("J<l>"),y:x("a1<C>"),i:x("oV"),A:x("iny"),w:x("o"),v:x("~")}})();(function constants(){var x=a.makeConstList
D.b8R=new A.agu("Time To Live Exceeded",0,"timeToLiveExceeded")
D.WX=new A.agu("No Reply",4,"noReply")
D.bpE=A.a(x(["devapi.simpletor.app"]),y.x)
D.a4Q=A.a(x([]),y.c)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_555",e:"endPart",h:b})})($__dart_deferred_initializers__,"xG2+mUWRBCX2rEj0HMxDy9z55YM=");