/*! ecui 2013-08-20 */
!function(){function a(b,c,d){var e=b._eScollMsg;parseInt(e.style.top,10)<=-c?(e.innerHTML=d,e.style.top="0px",null!==b._oTimer&&(b._oTimer=setTimeout(function(){b.$play()},b._nSec))):(e.style.top=parseInt(e.style.top,10)-3+"px",setTimeout(function(){a(b,c,d)},100))}function b(a,b){return p(a)>b&&(a=q(a,b-2)+"..."),a}var c=ecui,d=c.ui,e=c.dom,f=c.util,g=c.string,h=document,i=c.$fastCreate,j=c.inherits,k=e.moveElements,l=e.getPosition,m=e.create,n=e.children,o=f.extend,p=(f.blank,function(a){return g.getByteLength(a,"gbk")}),q=function(a,b){return g.sliceByte(a,b,"gbk")},r=d.Control,s=r.prototype,t=d.Items,u=d.MessageBar=j(r,"ui-message-bar",function(a){var b=m("","","ul"),c=this.getTypes()[0];k(a,b,!0),a.innerHTML='<div class="'+c+'-title"><span class="'+c+'-title-icon"></span>系统消息</div><div class="'+c+'-scroll-msg" style="display:none"><div class="'+c+'-scroll-msg-inner" style="top:0px;left:0px">&nbsp;</div></div>',a.appendChild(b)},function(a,b){BODY=h.body;var c=m("","display:none;position:absolute");this._nPIndex=0,this._nSec=b.sec||5e3,this._nMaxLen=b.maxlength||70,c.appendChild(a.lastChild),c.className="ui-message-bar-layer",BODY.appendChild(c),a=n(a),this.$setBody(c.firstChild),this._eScollMsg=a[1].firstChild,this._uLayer=i(this.Layer,c,this),this.$initItems()}),v=u.prototype,w=v.Layer=j(r,"ui-message-bar-layer"),x=w.prototype;o(v,t),v.init=function(){this.getItems(),s.init.call(this),s.init.call(this._uLayer),this.$alterItems(),this.play()},v.$mouseover=function(){var a,b=this._uLayer;this.getItems().length>0&&(a=l(this.getOuter()),b.show(),b.setPosition(a.left,a.top+this.getHeight()),s.$activate.call(this),this.alterClass("+expend"))},v.$mouseout=function(){this._uLayer.hide(),this.alterClass("-expend")},v.play=function(){var a=this;this._oTimer||(this._oTimer=setTimeout(function(){a.$play()},this._nSec))},v.$play=function(){var c,d,e=this.getItems(),f=this._eScollMsg.offsetHeight;e.length>1?(this._nPIndex=(this._nPIndex+1)%e.length,c=e[this._nPIndex],d=b(c.getContent(),this._nMaxLen),this._eScollMsg.innerHTML+="<br />"+d,a(this,f,d)):1==e.length&&(this._eScollMsg.innerHTML=b(e[0].getContent(),this._nMaxLen),this._oTimer=null)},v.stop=function(){clearTimeout(this._oTimer),this._oTimer=null},x.$setSize=function(){var a=this.getParent();s.$setSize.call(this,a.getWidth())},v.add=function(a,b,c){var d;return"string"==typeof a?(d=m("","","li"),d.innerHTML=a,this.getBody().appendChild(d)):d=a,a=t.add.call(this,d,b,c),a.getOuter().style.overflow="",a},v.$alterItems=function(){var a=this.getItems(),c=this._eScollMsg;a.length>0?(c.parentNode.style.display="","&nbsp;"==c.innerHTML&&(c.innerHTML=b(this.getItems()[0].getContent(),this._nMaxLen),this._nPIndex=0),this.play()):(c.parentNode.style.display="none",c.innerHTML="&nbsp",this.stop())}}();