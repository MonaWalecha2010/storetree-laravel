(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_familyTree1_vue"],{

/***/ "./node_modules/@balkangraph/familytree.js/familytree.js":
/*!***************************************************************!*\
  !*** ./node_modules/@balkangraph/familytree.js/familytree.js ***!
  \***************************************************************/
/***/ ((module) => {

var FamilyTree=function(e,t){var i=this;if(("string"==typeof e||e instanceof String)&&(e=document.querySelector(e)),this.element=e,this.config=FamilyTree.mergeDeep(FamilyTree._defaultConfig(t),t),this._layoutConfigs={base:{orientation:this.config.orientation,levelSeparation:this.config.levelSeparation,mixedHierarchyNodesSeparation:this.config.mixedHierarchyNodesSeparation,assistantSeparation:this.config.assistantSeparation,subtreeSeparation:this.config.subtreeSeparation,siblingSeparation:this.config.siblingSeparation,layout:this.config.layout,columns:this.config.columns,collapse:this.config.collapse,partnerNodeSeparation:this.config.partnerNodeSeparation}},this.config.tags)for(var r in this.config.tags){var a=this.config.tags[r];null!=a.subTreeConfig&&(this._layoutConfigs[r]={orientation:null!=a.subTreeConfig.orientation?a.subTreeConfig.orientation:this.config.orientation,levelSeparation:null!=a.subTreeConfig.levelSeparation?a.subTreeConfig.levelSeparation:this.config.levelSeparation,mixedHierarchyNodesSeparation:null!=a.subTreeConfig.mixedHierarchyNodesSeparation?a.subTreeConfig.mixedHierarchyNodesSeparation:this.config.mixedHierarchyNodesSeparation,assistantSeparation:null!=a.subTreeConfig.assistantSeparation?a.subTreeConfig.assistantSeparation:this.config.assistantSeparation,subtreeSeparation:null!=a.subTreeConfig.subtreeSeparation?a.subTreeConfig.subtreeSeparation:this.config.subtreeSeparation,siblingSeparation:null!=a.subTreeConfig.siblingSeparation?a.subTreeConfig.siblingSeparation:this.config.siblingSeparation,layout:null!=a.subTreeConfig.layout?a.subTreeConfig.layout:this.config.layout,columns:null!=a.subTreeConfig.columns?a.subTreeConfig.columns:this.config.columns,collapse:null!=a.subTreeConfig.collapse?a.subTreeConfig.collapse:this.config.collapse,partnerNodeSeparation:null!=a.subTreeConfig.partnerNodeSeparation?a.subTreeConfig.partnerNodeSeparation:this.config.partnerNodeSeparation})}if(this._event_id=FamilyTree._guid(),!this.config.searchFields.length&&this.config.nodeBinding)for(var n in this.config.nodeBinding)-1==n.indexOf("img")&&"function"!=typeof this.config.nodeBinding[n]&&this.config.searchFields.push(this.config.nodeBinding[n]);FamilyTree._validateConfig(this.config)&&(this._vScroll={},this.config.ui||(this.ui=FamilyTree.ui),this.config.editUI?this.editUI=this.config.editUI:this.editUI=new FamilyTree.editUI,this.editUI.init(this),this.config.filterUI?this.filterUI=this.config.filterUI:this.filterUI=new FamilyTree.filterUI,this.filterUI.init(this),this.manager=new FamilyTree.manager(this),this.config.searchUI?this.searchUI=this.config.searchUI:this.searchUI=new FamilyTree.searchUI,this.config.nodeMenuUI?this.nodeMenuUI=this.config.nodeMenuUI:this.nodeMenuUI=new FamilyTree.menuUI,this.nodeMenuUI.init(this,this.config.nodeMenu),this.config.nodeCircleMenuUI?this.nodeCircleMenuUI=this.config.nodeCircleMenuUI:this.nodeCircleMenuUI=new FamilyTree.circleMenuUI,this.nodeCircleMenuUI.init(this,this.config.nodeCircleMenu),this.config.nodeContextMenuUI?this.nodeContextMenuUI=this.config.nodeContextMenuUI:this.nodeContextMenuUI=new FamilyTree.menuUI,this.nodeContextMenuUI.init(this,this.config.nodeContextMenu),this.config.toolbarUI?this.toolbarUI=this.config.toolbarUI:this.toolbarUI=new FamilyTree.toolbarUI,this.config.notifierUI?this.notifierUI=this.config.notifierUI:this.notifierUI=new FamilyTree.notifierUI,this.notifierUI.init(this),this.config.menuUI?this.menuUI=this.config.menuUI:this.menuUI=new FamilyTree.menuUI,this.menuUI.init(this,this.config.menu),this.config.xScrollUI||(this.xScrollUI=new FamilyTree.xScrollUI(this.element,this.config,(function(){return{boundary:i.response.boundary,scale:i.getScale(),viewBox:i.getViewBox(),padding:i.config.padding}}),(function(e){i.setViewBox(e)}),(function(){i._draw(!0,FamilyTree.action.xScroll)}))),this.config.yScrollUI||(this.yScrollUI=new FamilyTree.yScrollUI(this.element,this.config,(function(){return{boundary:i.response.boundary,scale:i.getScale(),viewBox:i.getViewBox(),padding:i.config.padding}}),(function(e){i.setViewBox(e)}),(function(){i._draw(!0,FamilyTree.action.xScroll)}))),this.element.classList.add("bft-"+this.config.mode),this._gragStartedId=null,this._timeout=null,this._touch=null,this._initialized=!1,this._loaded=!1,this._moveInterval=null,this._movePosition=null,this.response=null,this.nodes=null,this.isVisible=null,FamilyTree._intersectionObserver(this.element,(function(e){i.isVisible=e,!1!==FamilyTree.events.publish("visibility-change",[i])&&FamilyTree.LAZY_LOADING&&i.isVisible&&(i._loaded?i._draw(!1,FamilyTree.action.update):(i._setInitialSizeIfNotSet(),i._draw(!1,FamilyTree.action.init)))})))};FamilyTree._defaultConfig=function(e){return{interactive:!0,mode:"light",lazyLoading:!0,enableDragDrop:!1,enableSearch:!0,enableTouch:!1,keyNavigation:!1,miniMap:!1,nodeMenu:null,nodeCircleMenu:null,nodeContextMenu:null,menu:null,toolbar:!1,sticky:!0,nodeMouseClick:FamilyTree.action.details,nodeMouseDbClick:FamilyTree.none,mouseScrool:FamilyTree.action.zoom,showXScroll:FamilyTree.none,showYScroll:FamilyTree.none,template:"ana",tags:{},min:!1,nodeBinding:{},linkBinding:{},searchFields:[],searchDisplayField:null,searchFieldsWeight:null,nodes:[],clinks:[],slinks:[],levelSeparation:60,siblingSeparation:20,subtreeSeparation:40,mixedHierarchyNodesSeparation:15,assistantSeparation:100,minPartnerSeparation:50,partnerChildrenSplitSeparation:20,partnerNodeSeparation:15,columns:10,padding:30,orientation:FamilyTree.orientation.top,layout:FamilyTree.normal,scaleInitial:1,scaleMin:.1,scaleMax:5,orderBy:null,editUI:null,filterUI:null,searchUI:null,xScrollUI:null,yScrollUI:null,nodeMenuUI:null,nodeCircleMenuUI:null,nodeContextMenuUI:null,toolbarUI:null,notifierUI:null,menuUI:null,exportUrl:"https://balkan.app/export",collapse:{},expand:{},align:FamilyTree.CENTER,UI:null,anim:{func:FamilyTree.anim.outPow,duration:200},zoom:{speed:120,smooth:12},roots:null,state:null,editForm:{readOnly:!1,titleBinding:"name",photoBinding:"img",addMore:"Add more fileds",addMoreBtn:"Add",addMoreFieldName:"Field name",saveAndCloseBtn:"Save and close",cancelBtn:"Cancel",generateElementsFromFields:!0,focusBinding:null,buttons:{edit:{icon:FamilyTree.icon.edit(24,24,"#fff"),text:"Edit",hideIfEditMode:!0,hideIfDetailsMode:!1},share:{icon:FamilyTree.icon.share(24,24,"#fff"),text:"Share"},pdf:{icon:FamilyTree.icon.pdf(24,24,"#fff"),text:"Save as PDF"},remove:{icon:FamilyTree.icon.remove(24,24,"#fff"),text:"Remove",hideIfDetailsMode:!0}},elements:[]}}},FamilyTree.prototype.load=function(e){return this.config.nodes=e,this._draw(!1,FamilyTree.action.init),this},FamilyTree.prototype.loadXML=function(e){var t=FamilyTree._xml2json(e);return this.load(t)},FamilyTree.prototype.getXML=function(){return FamilyTree._json2xml(this.config.nodes)},FamilyTree.prototype.on=function(e,t){return FamilyTree.events.on(e,t,this._event_id),this},FamilyTree.prototype.draw=function(e,t,i){null==e&&(e=FamilyTree.action.update),this._draw(!1,e,t,i)},FamilyTree.prototype._draw=function(e,t,i,r){var a=this;if(!FamilyTree.LAZY_LOADING||this.isVisible)if(FamilyTree.LAZY_LOADING||this._initialized||(this._setInitialSizeIfNotSet(),0!=this.width()&&0!=this.height())){this._hideBeforeAnimationCompleted=!1;var n=t==FamilyTree.action.init?null:this.getViewBox();this.manager.read(e,this.width(),this.height(),n,t,i,(function(e){if(!a.notifierUI.show(e.notif)){t!=FamilyTree.action.exporting&&(a.nodes=e.nodes,a.visibleNodeIds=e.visibleNodeIds,a.roots=e.roots),a.editUI.fields=e.allFields;var n={defs:""};FamilyTree.events.publish("renderdefs",[a,n]);var l=a.ui.defs(n.defs),o=a.getScale(e.viewBox);l+=a.ui.pointer(a.config,t,o);var s=a.getViewBox(),d=e.viewBox;n={content:l,res:e};FamilyTree.events.publish("prerender",[a,n]),l=n.content;for(var c=0;c<e.visibleNodeIds.length;c++){var m=e.nodes[e.visibleNodeIds[c]],p=a._get(m.id);FamilyTree.RENDER_LINKS_BEFORE_NODES&&(l+=a.ui.link(m,a,o,e.bordersByRootIdAndLevel,e.nodes,t)),l+=a.ui.node(m,p,e.animations,a.config,void 0,void 0,void 0,t,o,a)}for(c=0;c<e.visibleNodeIds.length;c++){m=e.nodes[e.visibleNodeIds[c]];FamilyTree.RENDER_LINKS_BEFORE_NODES||(l+=a.ui.link(m,a,o,e.bordersByRootIdAndLevel,e.nodes,t)),l+=a.ui.expandCollapseBtn(a,m,a._layoutConfigs,t,o)}n={content:l,res:e};if(FamilyTree.events.publish("render",[a,n]),l=n.content,e=n.res,l+=a.ui.lonely(a.config),t!==FamilyTree.action.exporting){t!==FamilyTree.action.centerNode&&t!==FamilyTree.action.insert&&t!==FamilyTree.action.expand&&t!==FamilyTree.action.collapse&&t!==FamilyTree.action.update||(d=s),t===FamilyTree.action.init&&null!=s&&(d=s),a.response=e;v=a.ui.svg(a.width(),a.height(),d,a.config,l);if(a._initialized){var h=a.getSvg(),f=h.parentNode;f.removeChild(h),f.insertAdjacentHTML("afterbegin",v),a._attachEventHandlers(),a.xScrollUI.addListener(a.getSvg()),a.yScrollUI.addListener(a.getSvg()),a.xScrollUI.setPosition(),a.yScrollUI.setPosition()}else a.element.innerHTML=a.ui.css()+v+a.ui.menuButton(a.config),a._attachInitEventHandlers(),a._attachEventHandlers(),a.xScrollUI.create(a.width(),a.config.padding),a.xScrollUI.setPosition(),a.xScrollUI.addListener(a.getSvg()),a.yScrollUI.create(a.height(),a.config.padding),a.yScrollUI.setPosition(),a.yScrollUI.addListener(a.getSvg()),a.config.enableSearch&&a.searchUI.init(a),a.toolbarUI.init(a,a.config.toolbar);var u=!1,y=a.response.animations;if(y[0].length>0){a._hideBeforeAnimation(y[0].length);for(c=0;c<y[0].length;c++)y[0][c]=a.getNodeElement(y[0][c]);FamilyTree.animate(y[0],y[1],y[2],a.config.anim.duration,a.config.anim.func,(function(){u||(r&&r(),FamilyTree.events.publish("redraw",[a]),a._showAfterAnimation(),u=!0)}))}t===FamilyTree.action.centerNode?FamilyTree.animate(a.getSvg(),{viewbox:s},{viewbox:a.response.viewBox},a.config.anim.duration,a.config.anim.func,(function(){a.ripple(i.options.rippleId),u||(r&&r(),FamilyTree.events.publish("redraw",[a]),a._showAfterAnimation(),u=!0)}),(function(){a.xScrollUI.setPosition(),a.yScrollUI.setPosition()})):!s||!a.response||s[0]==a.response.viewBox[0]&&s[1]==a.response.viewBox[1]&&s[2]==a.response.viewBox[2]&&s[3]==a.response.viewBox[3]||t!==FamilyTree.action.insert&&t!==FamilyTree.action.expand&&t!==FamilyTree.action.collapse&&t!==FamilyTree.action.update&&t!==FamilyTree.action.init?0==y[0].length&&(u||(r&&r(),FamilyTree.events.publish("redraw",[a]),u=!0)):FamilyTree.animate(a.getSvg(),{viewbox:s},{viewbox:a.response.viewBox},2*a.config.anim.duration,a.config.anim.func,(function(){a.xScrollUI.setPosition(),a.yScrollUI.setPosition(),u||(r&&r(),FamilyTree.events.publish("redraw",[a]),u=!0)})),a._initialized||(a._initialized=!0,a.filterUI.update(),FamilyTree.events.publish("init",[a])),!a._loaded&&e&&e.nodes&&Object.keys(e.nodes).length&&(a._loaded=!0)}else{var g=e.boundary,T=g.maxX-g.minX,b=g.maxY-g.minY,v=a.ui.svg(T,b,[g.minX,g.minY,T,b],a.config,l,o);r(v)}}}),(function(e){FamilyTree.events.publish("ready",[a,e])}))}else console.error("Cannot load the family with size 0! If you are using the FamilyTree within tabs set FamilyTree.LAZY_LOADING to true! ")},FamilyTree.prototype._setInitialSizeIfNotSet=function(){this.element.style.overflow="hidden",this.element.style.position="relative",0==this.element.offsetHeight&&(this.element.style.height="100%",0==this.element.offsetHeight&&(this.element.style.height="700px")),0==this.element.offsetWidth&&(this.element.style.width="100%",0==this.element.offsetWidth&&(this.element.style.width="700px"))},FamilyTree.prototype.width=function(){return this.element.offsetWidth},FamilyTree.prototype.height=function(){return this.element.offsetHeight},FamilyTree.prototype.getViewBox=function(){var e=this.getSvg();return FamilyTree._getViewBox(e)},FamilyTree.prototype.setViewBox=function(e){this.getSvg().setAttribute("viewBox",e.toString())},FamilyTree.prototype.getScale=function(e){return e||(e=this.getViewBox()),FamilyTree.getScale(e,this.width(),this.height(),this.config.scaleInitial,this.config.scaleMax,this.config.scaleMin)},FamilyTree.prototype.ripple=function(e,t,i){var r=this.getNode(e);if(null!=r){var a=this.getNodeElement(e);if(null!=a){var n=this.getScale(),l=r.w/2,o=r.h/2;if(void 0!==t&&void 0!==i){var s=a.getBoundingClientRect();l=t/n-s.left/n,o=i/n-s.top/n}var d=r.w,c=r.h,m=d-l>l?d-l:l,p=c-o>o?c-o:o,h=(m=m)>(p=p)?m:p,f=document.createElementNS("http://www.w3.org/2000/svg","g"),u=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),y=document.createElementNS("http://www.w3.org/2000/svg","rect"),g=document.createElementNS("http://www.w3.org/2000/svg","circle"),T=FamilyTree.randomId();u.setAttribute("id",T);var b={ripple:FamilyTree.t(r.templateName,r.min,this.getScale()).ripple,node:r};FamilyTree.events.publish("ripple",[this,b]),y.setAttribute("x",b.ripple.rect?b.ripple.rect.x:0),y.setAttribute("y",b.ripple.rect?b.ripple.rect.y:0),y.setAttribute("width",b.ripple.rect?b.ripple.rect.width:r.w),y.setAttribute("height",b.ripple.rect?b.ripple.rect.height:r.h),y.setAttribute("rx",b.ripple.radius),y.setAttribute("ry",b.ripple.radius),g.setAttribute("clip-path","url(#"+T+")"),g.setAttribute("cx",l),g.setAttribute("cy",o),g.setAttribute("r",0),g.setAttribute("fill",b.ripple.color),g.setAttribute("class","bft-ripple"),u.appendChild(y),f.appendChild(u),f.appendChild(g),a.appendChild(f),FamilyTree.animate(g,{r:0,opacity:1},{r:h,opacity:0},500,FamilyTree.anim.outPow,(function(){a.removeChild(f)}))}}},FamilyTree.prototype.center=function(e,t,i){var r,a,n=e,l=!0,o=!0;t&&null!=t.parentState&&(r=t.parentState),t&&null!=t.childrenState&&(a=t.childrenState),t&&null!=t.rippleId&&(n=t.rippleId),t&&null!=t.vertical&&(l=t.vertical),t&&null!=t.horizontal&&(o=t.horizontal);var s={parentState:r,childrenState:a,rippleId:n,vertical:l,horizontal:o};this._draw(!1,FamilyTree.action.centerNode,{id:e,options:s},i)},FamilyTree.prototype.fit=function(e){this.config.scaleInitial=FamilyTree.match.boundary,this._draw(!0,FamilyTree.action.init,{method:"fit"},e)},FamilyTree.prototype.toggleFullScreen=function(){var e=document.querySelector("["+FamilyTree.attr.tlbr+"r='fullScreen']");document.fullscreenElement==this.element||document.webkitFullscreenElement==this.element||document.mozFullScreenElement==this.element||document.msFullscreenElement==this.element?(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),e&&(e.innerHTML=FamilyTree.toolbarUI.openFullScreenIcon)):(this.element.requestFullscreen?this.element.requestFullscreen():this.element.mozRequestFullScreen?this.element.mozRequestFullScreen():this.element.webkitRequestFullscreen?this.element.webkitRequestFullscreen():this.element.msRequestFullscreen&&this.element.msRequestFullscreen(),e&&(e.innerHTML=FamilyTree.toolbarUI.closeFullScreenIcon))},FamilyTree.prototype.getNode=function(e){return this.nodes[e]},FamilyTree.prototype.setLayout=function(e,t){t||(t="base"),this._layoutConfigs[t].layout=e,this._draw(!1,FamilyTree.action.update)},FamilyTree.prototype.setOrientation=function(e,t){t||(t="base"),this._layoutConfigs[t].orientation=e,this._draw(!1,FamilyTree.action.update)},FamilyTree.prototype.search=function(e,t,i){return FamilyTree.isNEU(t)&&(t=this.config.searchFields),FamilyTree.isNEU(i)&&(i=t),FamilyTree._search.search(this.config.nodes,e,t,i,this.config.searchDisplayField,this.config.searchFieldsWeight)},FamilyTree.prototype._hideBeforeAnimation=function(e){if(1!=this._hideBeforeAnimationCompleted&&!(e&&e<FamilyTree.ANIM_THRESHOLD)){var t=this.element.getElementsByTagName("text");if(t.length>FamilyTree.TEXT_THRESHOLD)for(var i=0;i<t.length;i++)t[i].style.display="none";var r=this.element.getElementsByTagName("image");if(r.length>FamilyTree.IMAGES_THRESHOLD)for(i=0;i<r.length;i++)r[i].style.display="none";var a=this.element.querySelectorAll("["+FamilyTree.attr.link_id+"]");if(a.length>FamilyTree.LINKS_THRESHOLD)for(i=0;i<a.length;i++)a[i].style.display="none";var n=this.element.querySelectorAll("["+FamilyTree.attr.control_expcoll_id+"]");if(n.length>FamilyTree.BUTTONS_THRESHOLD)for(i=0;i<n.length;i++)n[i].style.display="none";var l=this.element.querySelectorAll("["+FamilyTree.attr.control_up_id+"]");if(l.length>FamilyTree.BUTTONS_THRESHOLD)for(i=0;i<l.length;i++)l[i].style.display="none";this._hideBeforeAnimationCompleted=!0}},FamilyTree.prototype._showAfterAnimation=function(){for(var e=this.element.getElementsByTagName("text"),t=0;t<e.length;t++)e[t].style.display="";var i=this.element.getElementsByTagName("image");for(t=0;t<i.length;t++)i[t].style.display="";var r=this.element.querySelectorAll("["+FamilyTree.attr.link_id+"]");for(t=0;t<r.length;t++)r[t].style.display="";var a=this.element.querySelectorAll("["+FamilyTree.attr.control_expcoll_id+"]");for(t=0;t<a.length;t++)a[t].style.display="";var n=this.element.querySelectorAll("["+FamilyTree.attr.control_up_id+"]");for(t=0;t<n.length;t++)n[t].style.display="";this._hideBeforeAnimationCompleted=!1},FamilyTree.prototype.isChild=function(e,t){for(var i=this.getNode(t);i;){if(i.id==e)return!0;i=i.parent?i.parent:i.stParent}return!1},FamilyTree.prototype.getCollapsedIds=function(e){for(var t=[],i=0;i<e.childrenIds.length;i++){var r=this.getNode(e.childrenIds[i]);1==r.collapsed&&t.push(r.id)}return t},FamilyTree.prototype.stateToUrl=function(){if(this.manager.state){var e={};return e.exp=this.manager.state.exp.join("*"),e.min=this.manager.state.min.join("*"),e.adjustify=this.manager.state.adjustify.x+"*"+this.manager.state.adjustify.y,e.scale=this.manager.state.scale,e.y=this.manager.state.x,e.x=this.manager.state.y,new URLSearchParams(e).toString()}return""},FamilyTree.prototype.generateId=function(){for(;;){var e="_"+("0000"+(Math.random()*Math.pow(36,4)|0).toString(36)).slice(-4);if(!this.nodes.hasOwnProperty(e))return e}},FamilyTree.prototype._nodeHasHiddenParent=function(e){return!e.parent&&!FamilyTree.isNEU(e.pid)&&this.getNode(e.pid)},FamilyTree.prototype.destroy=function(){this._removeEvent(window,"resize"),FamilyTree.events.removeForEventId(this._event_id),this.element.innerHTML=null},FamilyTree.__defaultConfig=FamilyTree._defaultConfig,FamilyTree._defaultConfig=function(e){var t=FamilyTree.__defaultConfig();return t.nodeTreeMenu=null,t.template="tommy",t.mode="light",t.minPartnerSeparation=30,t.partnerChildrenSplitSeparation=10,t.siblingSeparation=35,t.tags["children-group"]={template:"cgroup",subTreeConfig:{siblingSeparation:7,columns:1}},e&&e.template?(t.tags.male={template:e.template+"_male"},t.tags.female={template:e.template+"_female"}):(t.tags.male={template:t.template+"_male"},t.tags.female={template:t.template+"_female"}),t},FamilyTree.prototype.getRecentRootsByNodeId=function(e){this.recentRoots||(this.recentRoots=[]);var t=this.recentRoots,i=this.getNode(e);return i?(i.rids.sort((function(e,i){var r=t.indexOf(e),a=t.indexOf(i);return-1==r?1e3:-1==a?-1e3:r-a})),i.rids):[]},FamilyTree.prototype._nodeHasHiddenParent=function(e){return!(e.parent||FamilyTree.isNEU(e.pid)||!this.getNode(e.pid))||(!(!e.isPartner||FamilyTree.isNEU(e.mid)||!this.getNode(e.mid))||(!(!e.isPartner||FamilyTree.isNEU(e.fid)||!this.getNode(e.fid))||!!(e.isPartner&&e.pids.length>1)))},FamilyTree.prototype._center=FamilyTree.prototype.center,FamilyTree.prototype.center=function(e,t,i){var r=this.getRecentRootsByNodeId(e);Array.isArray(this.config.roots)||(roots=[]),FamilyTree._changeRootOption(this.config.roots,r,this.manager.rootList),this._center(e,t,i)},FamilyTree.prototype.onUpdateNode=function(e){return this.on("update",(function(t,i){return e.call(t,i)}))},FamilyTree.prototype.onNodeTreeMenuShow=function(e){return this.on("node-tree-menu-show",(function(t,i){return e.call(t,i)}))},FamilyTree.prototype.onRemoveNode=null,FamilyTree.prototype.onAddNode=null,FamilyTree.localStorage={},FamilyTree.localStorage.getItem=function(e){var t=localStorage.getItem("to_date");if(t){if((t=new Date(t))<new Date){for(var i=0,r=localStorage.length;i<r;++i){var a=localStorage.key(i);a&&a.startsWith&&a.startsWith('{"n"')&&localStorage.removeItem(a)}localStorage.removeItem("to_date")}}else(t=new Date).setDate(t.getDate()+5),t=t.toISOString(),localStorage.setItem("to_date",t);return localStorage.getItem(e)},FamilyTree.localStorage.setItem=function(e,t){try{localStorage.setItem(e,t)}catch(e){e.code==e.QUOTA_EXCEEDED_ERR?(console.warn("Local storage quota exceeded"),localStorage.clear()):(console.error("Local storage error code:"+e.code),console.error(e))}},FamilyTree.prototype.canUpdateLink=function(e,t){if(null==t||null==t)return!1;if(null==e||null==e)return!1;if(e==t)return!1;var i=this.getNode(t),r=this.getNode(e);return!(i&&r&&(i.isPartner||i.hasPartners&&r.isAssistant||i.hasAssistants&&r.isPartner))&&!this.isChild(e,t)},FamilyTree.prototype._canUpdateLink=FamilyTree.prototype.canUpdateLink,FamilyTree.prototype.updateNode=function(e,t,i){var r=this,a=this.get(e.id);if(!0===i&&!1===FamilyTree.events.publish("update",[this,a,e]))return!1;this.update(e);var n=this.getNode(e.id),l=n.pid;null==l&&(l=n.stpid),this._draw(!1,FamilyTree.action.update,{id:l},(function(){r.ripple(e.id),t&&t(),FamilyTree.events.publish("updated",[r,a,e]),r.filterUI.update()}))},FamilyTree.prototype.update=function(e){for(var t=0;t<this.config.nodes.length;t++)if(this.config.nodes[t].id==e.id){this.config.nodes[t]=e;break}return this},FamilyTree.prototype.removeNode=function(e,t,i){var r=this;if(!this.canRemove(e))return!1;var a=this._getNewPidsAndStpidsForIds(e);if(!0===i&&!1===FamilyTree.events.publish("remove",[this,e,a]))return!1;return this.remove(e),this._draw(!1,FamilyTree.action.update,null,(function(){r.config.sticky&&FamilyTree._moveToBoundaryArea(r.getSvg(),r.getViewBox(),r.response.boundary),t&&t(),FamilyTree.events.publish("removed",[r,e,a]),r.filterUI.update()})),!0},FamilyTree.prototype.remove=function(e){var t=this.get(e);if(t)for(var i=this.config.nodes.length-1;i>=0;i--)this.config.nodes[i].pid!=e&&this.config.nodes[i].stpid!=e||(this.config.nodes[i].pid=t.pid,this.config.nodes[i].stpid=t.stpid),this.config.nodes[i].id==e&&this.config.nodes.splice(i,1);return this},FamilyTree.prototype._getNewPidsAndStpidsForIds=function(e){var t=this.get(e),i={},r={};if(t)for(var a=this.config.nodes.length-1;a>=0;a--)this.config.nodes[a].pid==e?i[this.config.nodes[a].id]=t.pid:this.config.nodes[a].stpid==e&&(r[this.config.nodes[a].id]=t.stpid);return{newPidsForIds:i,newStpidsForIds:r}},FamilyTree.prototype.addNode=function(e,t,i){var r=this;if(!0===i&&!1===FamilyTree.events.publish("add",[this,e]))return!1;this.add(e),r._draw(!1,FamilyTree.action.insert,{id:e.pid,insertedNodeId:e.id},(function(){r.ripple(e.id),t&&t(),FamilyTree.events.publish("added",[r,e.id]),r.filterUI.update()})),FamilyTree.events.publish("adding",[r,e.id])},FamilyTree.prototype.add=function(e){return null==e.id&&console.error("Call addNode without id"),this.config.nodes.push(e),this},FamilyTree.prototype._get=function(e){for(var t=0;t<this.config.nodes.length;t++)if(this.config.nodes[t].id==e)return this.config.nodes[t];return null},FamilyTree.prototype.get=function(e){for(var t=0;t<this.config.nodes.length;t++)if(this.config.nodes[t].id==e)return JSON.parse(JSON.stringify(this.config.nodes[t]));return null},FamilyTree.prototype.canRemove=function(e){var t=this.getNode(e);return!!t&&(!t.hasPartners&&!t.hasAssistants)},FamilyTree.prototype.addChildNode=function(e,t,i){this.hideTreeMenu(!1);var r=this;if(!e||FamilyTree.isNEU(e.mid)&&FamilyTree.isNEU(e.fid))console.error("addSonNode invalid data");else{FamilyTree.isNEU(e.id)&&(e.id=this.generateId());var a={addNodesData:[e],updateNodesData:[],removeNodeId:null};if(!1!==this._fireUpdate_addUpdateRemove(a,i)){var n="";FamilyTree.isNEU(a.addNodesData[0].pid)?FamilyTree.isNEU(a.addNodesData[0].mid)?FamilyTree.isNEU(a.addNodesData[0].fid)||(n=a.addNodesData[0].fid):n=a.addNodesData[0].mid:n=a.addNodesData[0].pid,r._draw(!1,FamilyTree.action.insert,{id:n,insertedNodeId:a.addNodesData[0].id},(function(){r.ripple(a.addNodesData[0].id),t&&t(),FamilyTree.events.publish("updated",[r,a]),r.filterUI.update()})),FamilyTree.events.publish("updating",[r,a])}}},FamilyTree.prototype.addChildAndPartnerNodes=function(e,t,i,r,a){this.hideTreeMenu(!1);var n=this;if(!t||FamilyTree.isNEU(t.mid)&&FamilyTree.isNEU(t.fid))console.error("addChildAndPartnerNodes invalid childData");else if(i){FamilyTree.isNEU(t.id)&&(t.id=this.generateId()),FamilyTree.isNEU(i.id)&&(i.id=this.generateId()),"_ft_partner"==t.mid?t.mid=i.id:"_ft_partner"==t.fid&&(t.fid=i.id);var l=[],o=null;Array.isArray(i.pids)&&(1!=i.pids.length&&console.error("addChildAndPartnerNodes partnerData.pids has to have one partner"),o=this.get(i.pids[0]),Array.isArray(o.pids)||(o.pids=[]),o.pids.push(i.id),l.push(o));var s={addNodesData:[t,i],updateNodesData:l,removeNodeId:null};if(!1!==this._fireUpdate_addUpdateRemove(s,a)){var d=this.getRecentRootsByNodeId(e);FamilyTree._changeRootOption(this.config.roots,d,this.manager.rootList);var c="";o?c=o.id:FamilyTree.isNEU(t.pid)?FamilyTree.isNEU(t.mid)?FamilyTree.isNEU(t.fid)||(c=t.fid):c=t.mid:c=t.pid,n._draw(!1,FamilyTree.action.update,{id:c},(function(){n.ripple(t.id),n.ripple(i.id),r&&r(),FamilyTree.events.publish("updated",[n,s]),n.filterUI.update()})),FamilyTree.events.publish("updating",[n,s])}}else console.error("addChildAndPartnerNodes invalid data")},FamilyTree.prototype.addPartnerAndParentNodes=function(e,t,i,r,a){this.hideTreeMenu(!1);var n=this;if(FamilyTree.isNEU(t))console.error("addPartnerAndParentNodes invalid data");else if(i){FamilyTree.isNEU(i.id)&&(i.id=this.generateId());var l=[],o=this.get(t);if(FamilyTree.isNEU(o.mid)||FamilyTree.isNEU(o.fid)){FamilyTree.isNEU(o.mid)?o.mid=i.id:FamilyTree.isNEU(o.mid)||(o.fid=i.id),l.push(o);var s=null;Array.isArray(i.pids)&&(1!=i.pids.length&&console.error("addChildAndPartnerNodes partnerData.pids has to have one partner"),s=this.get(i.pids[0]),Array.isArray(s.pids)||(s.pids=[]),s.pids.push(i.id),l.push(s));var d={addNodesData:[i],updateNodesData:l,removeNodeId:null};if(!1!==this._fireUpdate_addUpdateRemove(d,a)){var c=this.getRecentRootsByNodeId(e);FamilyTree._changeRootOption(this.config.roots,c,this.manager.rootList);var m="";s?m=s.id:FamilyTree.isNEU(o.pid)?FamilyTree.isNEU(o.mid)?FamilyTree.isNEU(o.fid)||(m=o.fid):m=o.mid:m=o.pid,n._draw(!1,FamilyTree.action.update,{id:m},(function(){n.ripple(o.id),n.ripple(i.id),r&&r(),FamilyTree.events.publish("updated",[n,d]),n.filterUI.update()})),FamilyTree.events.publish("updating",[n,d])}}else console.error("father id (fid) or mather id (mid) has to be null or undefined")}else console.error("addPartnerAndParentNodes invalid data")},FamilyTree.prototype.addPartnerNode=function(e,t,i){this.hideTreeMenu(!1);var r=this;if(e&&Array.isArray(e.pids)&&1==e.pids.length){FamilyTree.isNEU(e.id)&&(e.id=this.generateId());var a=this.get(e.pids[0]);Array.isArray(a.pids)||(a.pids=[]),a.pids.push(e.id);var n={removeNodeId:null,updateNodesData:[a],addNodesData:[e]};if(!1!==this._fireUpdate_addUpdateRemove(n,i)){var l=this.getRecentRootsByNodeId(n.updateNodesData[0].id);FamilyTree._changeRootOption(this.config.roots,l,this.manager.rootList);var o=n.updateNodesData[0].id;r._draw(!1,FamilyTree.action.insert,{id:o,insertedNodeId:n.addNodesData[0].id},(function(){r.ripple(n.addNodesData[0].id),t&&t(),FamilyTree.events.publish("updated",[r,n]),r.filterUI.update()})),FamilyTree.events.publish("updating",[r,n])}}else console.error("addPartnerNode invalid data")},FamilyTree.prototype.addParentNode=function(e,t,i,r,a){this.hideTreeMenu(!1);var n=this;if(i){if(["mid","fid"].has(t))if(FamilyTree.isNEU(e))console.error("addParentNode invalid childId");else{FamilyTree.isNEU(i.id)&&(i.id=this.generateId());var l=[],o=this.get(e);o[t]=i.id,l.push(o);var s=null;Array.isArray(i.pids)&&(1!=i.pids.length&&console.error("addParentNode: data has to have one partner"),s=this.get(i.pids[0]),Array.isArray(s.pids)||(s.pids=[]),s.pids.push(i.id),l.push(s));var d={removeNodeId:null,updateNodesData:l,addNodesData:[i]};if(!1!==this._fireUpdate_addUpdateRemove(d,a)){var c=e;this.config.roots=[d.addNodesData[0].id],this._draw(!1,FamilyTree.action.insert,{id:c,insertedNodeId:d.addNodesData[0].id},(function(){n.ripple(d.addNodesData[0].id),r&&r(),FamilyTree.events.publish("updated",[n,d]),n.filterUI.update()})),FamilyTree.events.publish("updating",[n,d])}}else console.error("addParentNode invalid type")}else console.error("addParentNode invalid data")},FamilyTree.prototype.canRemove=function(e){var t=this.getNode(e);return!!t&&(!(t.pids.length>1)&&!(t.childrenIds.length>0))},FamilyTree.prototype.removeNode=function(e,t,i){var r=this;if(this.canRemove(e)){var a=this.getNode(e),n=[];if(Array.isArray(a.pids))for(var l=0;l<a.pids.length;l++){var o=this.get(a.pids[l]);if(o)-1!=(d=o.pids.indexOf(a.id))&&(o.pids.splice(d,1),n.push(o))}if(Array.isArray(a.ftChildrenIds))for(l=0;l<a.ftChildrenIds.length;l++){var s=this.get(a.ftChildrenIds[l]);s&&(s.mid==a.id?(s.mid=void 0,n.push(s)):s.fid==a.id&&(s.fid=void 0,n.push(s)))}var d,c={removeNodeId:e,updateNodesData:n,addNodesData:[]};if(!1!==this._fireUpdate_addUpdateRemove(c,i))-1!=(d=this.config.roots.indexOf(e))&&this.config.roots.splice(d,1),this._draw(!1,FamilyTree.action.update,null,(function(){r.config.sticky&&FamilyTree._moveToBoundaryArea(r.getSvg(),r.getViewBox(),r.response.boundary),t&&t(),FamilyTree.events.publish("updated",[r,c]),r.filterUI.update()})),FamilyTree.events.publish("updating",[r,c])}},FamilyTree.prototype.updateNode=function(e,t,i){var r=this,a=this.getNode(e.id);e.pids||(e.pids=[]);var n=[];n.push(e);for(var l=0;l<a.pids.length;l++){if(!e.pids.has(a.pids[l]))if((s=this._get(a.pids[l]))&&s.pids){var o=s.pids.indexOf(e.id);-1!=o&&(s.pids.splice(o,1),n.push(e)),a.pids.splice(l,1),n.push(s)}}for(l=0;l<e.pids.length;l++){var s;if(!a.pids||!a.pids.has(e.pids[l]))(s=this._get(e.pids[l])).pids||(s.pids=[]),s.pids.push(e.pids[l]),n.push(s)}var d={removeNodeId:null,updateNodesData:n,addNodesData:[]};!1!==this._fireUpdate_addUpdateRemove(d,i)&&(this._draw(!1,FamilyTree.action.update,null,(function(){r.config.sticky&&FamilyTree._moveToBoundaryArea(r.getSvg(),r.getViewBox(),r.response.boundary),t&&t(),FamilyTree.events.publish("updated",[r,d]),r.filterUI.update()})),FamilyTree.events.publish("updating",[r,d]))},FamilyTree.prototype._fireUpdate_addUpdateRemove=function(e,t){if(!0===t&&!1===FamilyTree.events.publish("update",[this,e]))return!1;for(var i=0;i<e.addNodesData.length;i++)this.add(e.addNodesData[i]);for(i=0;i<e.updateNodesData.length;i++)this.update(e.updateNodesData[i]);return FamilyTree.isNEU(e.removeNodeId)||this.remove(e.removeNodeId),!0},void 0===FamilyTree&&(FamilyTree={}),FamilyTree._ajax=function(e,t,i,r,a){null==r&&(r="arraybuffer");var n=new XMLHttpRequest;n.onload=function(e){4==n.readyState&&200===this.status&&(null==e.target?a(this.response):a(e.target.response))},n.onerror=function(e){a({error:e})},n.open(t,e),n.responseType=r,n.setRequestHeader("Content-Type","application/json"),null==i?n.send():n.send(i)},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.animate=function(e,t,i,r,a,n,l){var o,s=10,d=1,c=r/s+1;document.getElementsByTagName("g");return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]),o=setInterval((function(){for(var m=0;m<e.length;m++)for(var p in i[m]){var h=FamilyTree._arrayContains(["top","left","right","bottom","width","height"],p.toLowerCase())?"px":"";switch(p.toLowerCase()){case"d":var f=a((d*s-s)/r)*(i[m][p][0]-t[m][p][0])+t[m][p][0],u=a((d*s-s)/r)*(i[m][p][1]-t[m][p][1])+t[m][p][1];e[m].setAttribute("d",e[m].getAttribute("d")+" L"+f+" "+u);break;case"r":var y=a((d*s-s)/r)*(i[m][p]-t[m][p])+t[m][p];e[m].setAttribute("r",y);break;case"x1":y=a((d*s-s)/r)*(i[m][p]-t[m][p])+t[m][p];e[m].setAttribute("x1",y);break;case"x2":y=a((d*s-s)/r)*(i[m][p]-t[m][p])+t[m][p];e[m].setAttribute("x2",y);break;case"y1":y=a((d*s-s)/r)*(i[m][p]-t[m][p])+t[m][p];e[m].setAttribute("y1",y);break;case"y2":y=a((d*s-s)/r)*(i[m][p]-t[m][p])+t[m][p];e[m].setAttribute("y2",y);break;case"rotate3d":if(i[m][p]){var g=t[m][p],T=i[m][p],b=[0,0,0,0];for(var v in g)b[v]=a((d*s-s)/r)*(T[v]-g[v])+g[v];e[m].style.transform="rotate3d("+b.toString()+"deg)"}break;case"transform":if(i[m][p]){g=t[m][p],T=i[m][p],b=[0,0,0,0,0,0];for(var v in g)b[v]=a((d*s-s)/r)*(T[v]-g[v])+g[v];e[m].hasAttribute("transform")?e[m].setAttribute("transform","matrix("+b.toString()+")"):e[m].style.transform="matrix("+b.toString()+")"}break;case"viewbox":if(i[m][p]){g=t[m][p],T=i[m][p],b=[0,0,0,0];for(var v in g)b[v]=a((d*s-s)/r)*(T[v]-g[v])+g[v];e[m].setAttribute("viewBox",b.toString())}break;case"margin":if(i[m][p]){g=t[m][p],T=i[m][p],b=[0,0,0,0];for(var v in g)b[v]=a((d*s-s)/r)*(T[v]-g[v])+g[v];var F="";for(v=0;v<b.length;v++)F+=parseInt(b[v])+"px ";e[m]&&e[m].style&&(e[m].style[p]=F)}break;case"scrolly":y=a((d*s-s)/r)*(i[m][p]-t[m][p])+t[m][p];e[m].scrollTo(0,y);break;default:y=a((d*s-s)/r)*(i[m][p]-t[m][p])+t[m][p];e[m]&&e[m].style&&(e[m].style[p]=y+h)}}l&&l(),(d+=1)>c+1&&(clearInterval(o),n&&n(e))}),s)},FamilyTree.anim={},FamilyTree.anim.inPow=function(e){return e<0?0:e>1?1:Math.pow(e,2)},FamilyTree.anim.outPow=function(e){if(e<0)return 0;if(e>1)return 1;return-1*(Math.pow(e-1,2)+-1)},FamilyTree.anim.inOutPow=function(e){if(e<0)return 0;if(e>1)return 1;if((e*=2)<1)return FamilyTree.anim.inPow(e,2)/2;return-.5*(Math.pow(e-2,2)+-2)},FamilyTree.anim.inSin=function(e){return e<0?0:e>1?1:1-Math.cos(e*(Math.PI/2))},FamilyTree.anim.outSin=function(e){return e<0?0:e>1?1:Math.sin(e*(Math.PI/2))},FamilyTree.anim.inOutSin=function(e){return e<0?0:e>1?1:-.5*(Math.cos(Math.PI*e)-1)},FamilyTree.anim.inExp=function(e){return e<0?0:e>1?1:Math.pow(2,10*(e-1))},FamilyTree.anim.outExp=function(e){return e<0?0:e>1?1:1-Math.pow(2,-10*e)},FamilyTree.anim.inOutExp=function(e){return e<0?0:e>1?1:e<.5?.5*Math.pow(2,10*(2*e-1)):.5*(2-Math.pow(2,10*(-2*e+1)))},FamilyTree.anim.inCirc=function(e){return e<0?0:e>1?1:-(Math.sqrt(1-e*e)-1)},FamilyTree.anim.outCirc=function(e){return e<0?0:e>1?1:Math.sqrt(1-(e-1)*(e-1))},FamilyTree.anim.inOutCirc=function(e){return e<0?0:e>1?1:e<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(2*e-2)*(2*e-2))+1)},FamilyTree.anim.rebound=function(e){return e<0?0:e>1?1:e<1/2.75?1-7.5625*e*e:e<2/2.75?1-(7.5625*(e-1.5/2.75)*(e-1.5/2.75)+.75):e<2.5/2.75?1-(7.5625*(e-2.25/2.75)*(e-2.25/2.75)+.9375):1-(7.5625*(e-2.625/2.75)*(e-2.625/2.75)+.984375)},FamilyTree.anim.inBack=function(e){return e<0?0:e>1?1:e*e*(2.70158*e-1.70158)},FamilyTree.anim.outBack=function(e){return e<0?0:e>1?1:(e-1)*(e-1)*(2.70158*(e-1)+1.70158)+1},FamilyTree.anim.inOutBack=function(e){return e<0?0:e>1?1:e<.5?4*e*e*(7.1898*e-2.5949)*.5:.5*((2*e-2)*(2*e-2)*(3.5949*(2*e-2)+2.5949)+2)},FamilyTree.anim.impulse=function(e){var t=2*e;return t*Math.exp(1-t)},FamilyTree.anim.expPulse=function(e){return Math.exp(-2*Math.pow(e,2))},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.prototype._attachInitEventHandlers=function(e){this._addEvent(window,"resize",this._resizeHandler)},FamilyTree.prototype._attachEventHandlers=function(e){if(this.config.interactive){e=this.getSvg();this.config.enableTouch||FamilyTree.isMobile()?(this._addEvent(e,"touchstart",this._globalMouseDownHandler),this._addEvent(e,"touchend",this._globalClickHandler)):(this._addEvent(e,"mousedown",this._globalMouseDownHandler),this._addEvent(e,"click",this._globalClickHandler),this._addEvent(e,"contextmenu",this._globalContextHandler),this._addEvent(e,"dblclick",this._globalDbClickHandler),this.config.mouseScrool!=FamilyTree.action.zoom&&this.config.mouseScrool!=FamilyTree.action.ctrlZoom||(this._addEvent(e,"DOMMouseScroll",this._mouseScrollHandler),this._addEvent(e,"mousewheel",this._mouseScrollHandler)));var t=this.getMenuButton();t&&this._addEvent(t,"click",this._menuClickHandler)}},FamilyTree.prototype._addEvent=function(e,t,i,r){var a,n;(r||(r=""),e.getListenerList||(e.getListenerList={}),e.getListenerList[t+r])||(a=this,n=i,i=function(){if(n)return n.apply(a,[this,arguments[0]])},e.addEventListener?"mousewheel"==t?e.addEventListener(t,l,{passive:!1}):e.addEventListener(t,l,!1):e.attachEvent("on"+t,(function(){var t=i.call(e,window.event);return!1===t&&(window.event.returnValue=!1,window.event.cancelBubble=!0),t})),e.getListenerList[t+r]=l);function l(e){var t=i.apply(this,arguments);return!1===t&&(e.stopPropagation(),e.preventDefault()),t}},FamilyTree.prototype._removeEvent=function(e,t){if(e.getListenerList[t]){var i=e.getListenerList[t];e.removeEventListener(t,i,!1),delete e.getListenerList[t]}},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.VERSION="8.08.06",FamilyTree.orientation={},FamilyTree.orientation.top=0,FamilyTree.orientation.bottom=1,FamilyTree.orientation.right=2,FamilyTree.orientation.left=3,FamilyTree.orientation.top_left=4,FamilyTree.orientation.bottom_left=5,FamilyTree.orientation.right_top=6,FamilyTree.orientation.left_top=7,FamilyTree.align={},FamilyTree.align.center=FamilyTree.CENTER=8,FamilyTree.align.orientation=FamilyTree.ORIENTATION=9,FamilyTree.attr={},FamilyTree.attr.l="data-l",FamilyTree.attr.id="data-id",FamilyTree.attr.sl="data-sl",FamilyTree.attr.lbl="data-lbl",FamilyTree.attr.val="data-val",FamilyTree.attr.tlbr="data-tlbr",FamilyTree.attr.item="data-item",FamilyTree.attr.layout="data-layout",FamilyTree.attr.node_id="data-n-id",FamilyTree.attr.link_id="data-l-id",FamilyTree.attr.field_name="data-f-name",FamilyTree.attr.c_link_to="data-c-l-to",FamilyTree.attr.c_link_from="data-c-l-from",FamilyTree.attr.s_link_to="data-s-l-to",FamilyTree.attr.s_link_from="data-s-l-from",FamilyTree.attr.control_add="data-ctrl-add",FamilyTree.attr.control_expcoll_id="data-ctrl-ec-id",FamilyTree.attr.control_up_id="data-ctrl-up-id",FamilyTree.attr.control_export_menu="data-ctrl-menu",FamilyTree.attr.control_node_menu_id="data-ctrl-n-menu-id",FamilyTree.attr.control_node_circle_menu_id="data-ctrl-n-c-menu-id",FamilyTree.attr.control_node_circle_menu_name="data-ctrl-n-c-menu-name",FamilyTree.attr.control_node_circle_menu_wrraper_id="data-ctrl-n-c-menu-wrapper-id",FamilyTree.attr.width="data-width",FamilyTree.attr.text_overflow="data-text-overflow",FamilyTree.ID="id",FamilyTree.PID="pid",FamilyTree.STPID="stpid",FamilyTree.TAGS="tags",FamilyTree.NODES="nodes",FamilyTree.ELASTIC="elastic",FamilyTree.ASSISTANT="Assistant",FamilyTree.action={},FamilyTree.action.expand=0,FamilyTree.action.collapse=1,FamilyTree.action.maximize=101,FamilyTree.action.minimize=102,FamilyTree.action.expandCollapse=501,FamilyTree.action.edit=1,FamilyTree.action.zoom=2,FamilyTree.action.ctrlZoom=22,FamilyTree.action.scroll=41,FamilyTree.action.xScroll=3,FamilyTree.action.yScroll=4,FamilyTree.action.none=5,FamilyTree.action.init=6,FamilyTree.action.update=7,FamilyTree.action.move=70,FamilyTree.action.pan=8,FamilyTree.action.centerNode=9,FamilyTree.action.resize=10,FamilyTree.action.insert=11,FamilyTree.action.insertfirst=12,FamilyTree.action.details=13,FamilyTree.action.exporting=14,FamilyTree.none=400001,FamilyTree.scroll={},FamilyTree.scroll.visible=!0,FamilyTree.scroll.smooth=12,FamilyTree.scroll.speed=120,FamilyTree.scroll.safari={smooth:12,speed:250},FamilyTree.match={},FamilyTree.match.height=100001,FamilyTree.match.width=100002,FamilyTree.match.boundary=100003,FamilyTree.layout={},FamilyTree.layout.normal=FamilyTree.normal=0,FamilyTree.layout.mixed=FamilyTree.mixed=1,FamilyTree.layout.tree=FamilyTree.tree=2,FamilyTree.layout.treeLeftOffset=FamilyTree.treeLeftOffset=3,FamilyTree.layout.treeRightOffset=FamilyTree.treeRightOffset=4,FamilyTree.nodeOpenTag="<g "+FamilyTree.attr.node_id+'="{id}" style="opacity: {opacity}" transform="matrix(1,0,0,1,{x},{y})" class="{class}" '+FamilyTree.attr.sl+'="{sl}" '+FamilyTree.attr.l+"={level} {lcn}>",FamilyTree.linkOpenTag="<g "+FamilyTree.attr.link_id+'="[{id}][{child-id}]" class="{class}">',FamilyTree.expcollOpenTag="<g "+FamilyTree.attr.control_expcoll_id+'="{id}" transform="matrix(1,0,0,1,{x},{y})"  style="cursor:pointer;">',FamilyTree.upOpenTag="<g "+FamilyTree.attr.control_up_id+'="{id}" transform="matrix(1,0,0,1,{x},{y})" style="cursor:pointer;">',FamilyTree.linkFieldsOpenTag='<g transform="matrix(1,0,0,1,{x},{y}) rotate({rotate})">',FamilyTree.grCloseTag="</g>",FamilyTree.A5w=420,FamilyTree.A5h=595,FamilyTree.A4w=595,FamilyTree.A4h=842,FamilyTree.A3w=842,FamilyTree.A3h=1191,FamilyTree.A2w=1191,FamilyTree.A2h=1684,FamilyTree.A1w=1684,FamilyTree.A1h=2384,FamilyTree.Letterw=612,FamilyTree.Letterh=791,FamilyTree.Legalw=612,FamilyTree.Legalh=1009,FamilyTree.COLLAPSE_PARENT_NEIGHBORS=1,FamilyTree.COLLAPSE_SUB_CHILDRENS=2,FamilyTree.COLLAPSE_PARENT_SUB_CHILDREN_EXCEPT_CLICKED=3,FamilyTree.TEXT_THRESHOLD=400,FamilyTree.IMAGES_THRESHOLD=100,FamilyTree.LINKS_THRESHOLD=200,FamilyTree.BUTTONS_THRESHOLD=70,FamilyTree.ANIM_THRESHOLD=50,FamilyTree.IT_IS_LONELY_HERE='<g transform="translate(-100, 0)" style="cursor:pointer;"  '+FamilyTree.attr.control_add+'="control-add"><text fill="#039be5">{link}</text></g>',FamilyTree.RES={},FamilyTree.RES.IT_IS_LONELY_HERE_LINK="It's lonely here, add your first node",FamilyTree.FIRE_DRAG_NOT_CLICK_IF_MOVE=3,FamilyTree.STRING_TAGS=!1,FamilyTree.MAX_NODES_MESS="The trial has expired or 200 nodes limit was reached! <br /><a style='color: #039BE5;' target='_blank' href='https://balkan.app/FamilyTreeJS/Docs/Evaluation'>See more</a>",FamilyTree.OFFLINE_MESS="The evaluation version requires internet connection! <br /><a style='color: #039BE5;' target='_blank' href='https://balkan.app/FamilyTreeJS/Docs/Evaluation'>See more</a>",FamilyTree.SEARCH_PLACEHOLDER="Search",FamilyTree.IMPORT_MESSAGE="Choose the columns (fields) in your data file that contain the required information.",FamilyTree.FIXED_POSITION_ON_CLICK=!1,FamilyTree.RENDER_LINKS_BEFORE_NODES=!1,FamilyTree.MIXED_LAYOUT_ALL_NODES=!0,FamilyTree.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN=!1,FamilyTree.LINK_ROUNDED_CORNERS=5,FamilyTree.MOVE_STEP=5,FamilyTree.MOVE_INTERVAL=25,FamilyTree.CLINK_CURVE=1,FamilyTree.SEARCH_RESULT_LIMIT=10,FamilyTree.MAX_DEPTH=200,FamilyTree.SCALE_FACTOR=1.44,FamilyTree.LAZY_LOADING_FACTOR=500,FamilyTree.HIDE_EDIT_FORM_ON_PAN=!0,FamilyTree.LAZY_LOADING=!0,FamilyTree.ARRAY_FIELDS=["tags"],FamilyTree.CSV_DELIMITER=",",FamilyTree.EDITFORM_CLOSE_BTN='<svg data-edit-from-close class="bft-edit-form-close"><path style="fill:#ffffff;" d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path></svg>',FamilyTree.ESCAPE_HTML=!1,FamilyTree.VERTICAL_CHILDREN_ASSISTANT=!1, true&&(module.exports=FamilyTree),FamilyTree.OC_VERSION=FamilyTree.VERSION,FamilyTree.VERSION="1.07.09",FamilyTree.RENDER_LINKS_BEFORE_NODES=!0,FamilyTree.ARRAY_FIELDS=["tags","pids"],FamilyTree._intersects=function(e,t,i){var r=e.x-i.siblingSeparation/4,a=e.y,n=e.x+e.w+i.siblingSeparation/4,l=e.y;switch(i.orientation){case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:r=e.x,a=e.y-i.siblingSeparation/4,n=e.x,l=e.y+e.h+i.siblingSeparation/4}var o,s,d,c=t.p,m=t.q,p=t.r,h=t.s;return 0!==(o=(n-r)*(h-m)-(p-c)*(l-a))&&(s=((a-l)*(p-r)+(n-r)*(h-a))/o,0<(d=((h-m)*(p-r)+(c-p)*(h-a))/o)&&d<1&&0<s&&s<1)},FamilyTree._addPoint=function(e,t,i,r,a){switch(i.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:return FamilyTree._addPointTop(e,t,i,r,a);case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:return FamilyTree._addPointBottom(e,t,i,r,a);case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:return FamilyTree._addPointLeft(e,t,i,r,a);case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:return FamilyTree._addPointRight(e,t,i,r,a)}},FamilyTree._addPointTop=function(e,t,i,r,a){var n,l,o;return"left"==a?n=e.leftNeighbor?e.x+(e.leftNeighbor.x+e.leftNeighbor.w-e.x)/2:e.x-i.siblingSeparation/2:"right"==a&&(n=e.rightNeighbor?e.x+e.w+(e.rightNeighbor.x-(e.x+e.w))/2:e.x+e.w+i.siblingSeparation/2),t.push([n,t[t.length-1][1]]),t.push([n,e.y-i.levelSeparation/3]),l=t[t.length-1][1],o=n,r.p=n,r.q=l,r.r=o,r},FamilyTree._addPointBottom=function(e,t,i,r,a){var n,l,o;return"left"==a?n=e.leftNeighbor?e.x+(e.leftNeighbor.x+e.leftNeighbor.w-e.x)/2:e.x-i.siblingSeparation/2:"right"==a&&(n=e.rightNeighbor?e.x+e.w+(e.rightNeighbor.x-(e.x+e.w))/2:e.x+e.w+i.siblingSeparation/2),t.push([n,t[t.length-1][1]]),t.push([n,e.y+e.h+i.levelSeparation/3]),l=t[t.length-1][1],o=n,r.p=n,r.q=l,r.r=o,r},FamilyTree._addPointLeft=function(e,t,i,r,a){var n,l=t[t.length-1][0];return"bottom"==a?n=e.rightNeighbor?e.y+e.h+(e.rightNeighbor.y-(e.y+e.h))/2:e.y+e.h+i.siblingSeparation/2:"top"==a&&(n=e.leftNeighbor?e.y+(e.leftNeighbor.y+e.leftNeighbor.h-e.y)/2:e.y-i.siblingSeparation/2),t.push([t[t.length-1][0],n]),t.push([e.x-i.levelSeparation/3,n]),l=t[t.length-1][0],s=n,r.p=l,r.q=n,r.s=s,r},FamilyTree._addPointRight=function(e,t,i,r,a){var n,l=t[t.length-1][0];return"bottom"==a?n=e.rightNeighbor?e.y+e.h+(e.rightNeighbor.y-(e.y+e.h))/2:e.y+e.h+i.siblingSeparation/2:"top"==a&&(n=e.leftNeighbor?e.y+(e.leftNeighbor.y+e.leftNeighbor.h-e.y)/2:e.y-i.siblingSeparation/2),t.push([t[t.length-1][0],n]),t.push([e.x+e.w+i.levelSeparation/3,n]),l=t[t.length-1][0],s=n,r.p=l,r.q=n,r.s=s,r},FamilyTree.editUI=function(){},FamilyTree.editUI.prototype.init=function(e){this.obj=e,this.fields=null,this._event_id=FamilyTree._guid()},FamilyTree.editUI.prototype.on=function(e,t){return FamilyTree.events.on(e,t,this._event_id),this},FamilyTree.editUI.prototype.show=function(e,t,i){if(this.hide(),!1===FamilyTree.events.publish("show",[this,e]))return!1;var r=this,a=this.content(e,t,i);this.obj.element.appendChild(a.element),FamilyTree.input.init(this.obj.element),i?t||this._focusElement(a.focusId):this.interval=FamilyTree.animate(a.element,{right:-20,opacity:0},{right:0,opacity:1},300,FamilyTree.anim.outSin,(function(){t||r._focusElement(a.focusId)})),this.obj.element.querySelector("[data-edit-from-close]").addEventListener("click",(function(t){t.preventDefault(),!1!==FamilyTree.events.publish("cancel",[r,{id:e}])&&r.hide()})),this.obj.element.querySelector("[data-edit-from-cancel]").addEventListener("click",(function(t){t.preventDefault(),!1!==FamilyTree.events.publish("cancel",[r,{id:e}])&&r.hide()})),this.obj.element.querySelector("[data-edit-from-save]").addEventListener("click",(function(t){t.preventDefault();var i=FamilyTree.input.validateAndGetData(a.element);if(!1!==i){var n=r.obj.get(e),l={data:FamilyTree.mergeDeep(n,i)};if(!1===FamilyTree.events.publish("save",[r,l]))return;r.obj.updateNode(l.data,null,!0),r.hide()}}));for(var n=this.obj.element.querySelectorAll("[bft-input-btn]"),l=0;l<n.length;l++){n[l].addEventListener("click",(function(t){t.preventDefault(),FamilyTree.events.publish("element-btn-click",[r,{input:this.parentNode.querySelector("input"),nodeId:e,event:t}])}))}this.obj.element.querySelector("[data-add-more-fields-btn]").addEventListener("click",(function(e){e.stopPropagation(),e.preventDefault();var t=this,i=FamilyTree.elements.textbox({},{type:"textbox",label:r.obj.config.editForm.addMoreFieldName,btn:r.obj.config.editForm.addMoreBtn},"280px");t.parentNode.insertAdjacentHTML("beforebegin",i.html),t.style.display="none",FamilyTree.input.init(t.parentNode.previousSibling);var a=document.getElementById(i.id);a.focus(),a.nextElementSibling.addEventListener("click",(function(e){e.stopPropagation(),e.preventDefault();var i=a.value,n=r.obj.element.querySelector('[data-binding="'+FamilyTree._escapeDoubleQuotes(a.value)+'"]');if(FamilyTree.isNEU(i)||n)a.focus();else{var l=FamilyTree.elements.textbox({},{type:"textbox",label:i,binding:i},"280px");a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode),t.parentNode.insertAdjacentHTML("beforebegin",l.html),t.style.display="",FamilyTree.input.init(t.parentNode.previousSibling),document.getElementById(l.id).focus()}}))})),this.obj.element.querySelector("[data-bft-edit-from-btns]").addEventListener("click",(function(t){for(var i=t.target;i&&i.hasAttribute&&!i.hasAttribute("data-edit-from-btn");)i=i.parentNode;if(i&&i.hasAttribute){var n=i.getAttribute("data-edit-from-btn"),l={button:r.obj.config.editForm.buttons[n],name:n,nodeId:e,event:t};if(!1===FamilyTree.events.publish("button-click",[r,l]))return!1;switch(n){case"edit":r.obj.editUI.show(e,!1,!0);break;case"pdf":r.obj.exportPDFProfile({id:e,filename:a.title}),r.hide();break;case"png":r.obj.exportPNGProfile({id:e,filename:a.title}),r.hide();break;case"share":r.obj.shareProfile(e);break;case"remove":r.obj.removeNode(e,null,!0),r.hide()}}}))},FamilyTree.editUI.prototype._focusElement=function(e){var t=null;FamilyTree.isNEU(this.obj.config.editForm.focusBinding)?FamilyTree.isNEU(e)||(t=document.getElementById(e)):t=this.obj.element.querySelector('[data-binding="'+this.obj.config.editForm.focusBinding+'"]'),t&&(t.value&&t.value.length&&t.setSelectionRange(t.value.length,t.value.length),t.focus())},FamilyTree.editUI.prototype.setAvatar=function(e){var t=this.obj.element.querySelector("#bft-avatar");FamilyTree.isNEU(e)?t.innerHTML=FamilyTree.icon.user(150,150,"#8C8C8C",0,0):t.innerHTML=`<img style="width: 100%;height:100%;border-radius: 50%;" src="${e}"></img>`},FamilyTree.editUI.prototype.content=function(e,t,i,r,a){var n,l=this.obj.config.editForm.readOnly,o=JSON.parse(JSON.stringify(this.obj.config.editForm.elements)),s=this.obj.config.editForm.addMore,d=this.obj.config.editForm.saveAndCloseBtn,c=this.obj.config.editForm.cancelBtn,m=this.obj.config.editForm.buttons,p=this.obj.config.editForm.titleBinding,h=this.obj.config.editForm.photoBinding,f=this.obj.getNode(e),u=this.obj._get(e),y=FamilyTree.t(f.templateName,f.min,this.obj.getScale()),g=u[p],T=u[h];if(this.obj.config.editForm.generateElementsFromFields)for(var b=0;b<this.fields.length;b++){var v=this.fields[b];if("tags"!=v){for(var F=!1,x=0;x<o.length;x++){if(Array.isArray(o[x])){for(var _=0;_<o[x].length;_++)if(v==o[x][_].binding){F=!0;break}}else if(v==o[x].binding){F=!0;break}if(F)break}F||o.push({type:"textbox",label:v,binding:v})}}FamilyTree.isNEU(g)&&(g=""),T=FamilyTree.isNEU(T)?FamilyTree.icon.user(150,150,"#8C8C8C",0,0):`<img style="width: 100%;height:100%;border-radius: 50%;" src="${T}"></img>`;var w=!t,k=t?"display:none;":"",S=t||!s?"display:none;":"",C=y.editFormHeaderColor?`style="background-color:${y.editFormHeaderColor};"`:"",I=document.createElement("form");if(I.setAttribute("data-bft-edit-form",""),I.classList.add("bft-edit-form"),I.classList.add(this.obj.config.mode),I.classList.add(f.templateName),I.classList.add(FamilyTree.ui._defsIds[f.templateName]),Array.isArray(f.tags)&&f.tags.length)for(b=0;b<f.tags.length;b++)I.classList.add(f.tags[b]);I.style.display="flex",I.style.opacity=i?1:0,I.style.right=i?0:"-20px",r&&(I.style.width=r);var N=[],A=a?"":FamilyTree.EDITFORM_CLOSE_BTN;return I.innerHTML=`<div>\n                        <div class="bft-edit-form-header" ${C}>\n                            ${A}\n                            <h1 class="bft-edit-form-title">${FamilyTree._escapeGreaterLessSign(g)}</h1>\n                            <div id="bft-avatar" class="bft-edit-form-avatar">${T}</div>                        \n                        </div>\n                        <div data-bft-edit-from-btns class="bft-edit-form-instruments">\n                        ${function(){if(a)return"";var e="";for(var i in m){var r=m[i];FamilyTree.isNEU(r)||(w&&r.hideIfEditMode||t&&r.hideIfDetailsMode||l&&"Edit"==r.text||(e+=`<div data-edit-from-btn='${i}' class="bft-img-button" ${C} title="${r.text}">${r.icon}</div>`))}return e}()}    \n                        </div>\n                    </div>\n                    <div class="bft-edit-form-fields">\n                        <div class="bft-edit-form-fields-inner">\n                            <div class="bft-form-fieldset">\n                                ${function(){for(var e="",i=0;i<o.length;i++){var r=o[i];if(Array.isArray(r)){e+='<div class="bft-form-field-100 bft-form-fieldset">';for(var a=0;a<r.length;a++){var l=r[a],s=FamilyTree.elements[l.type](u,l,"unset",t);!FamilyTree.isNEU(s.id)&&FamilyTree.isNEU(n)&&FamilyTree.isNEU(s.value)&&(n=s.id),FamilyTree.isNEU(s.value)||N.push(`${l.label}: ${s.value}`),e+=s.html}e+="</div>"}else{s=FamilyTree.elements[r.type](u,r,"280px",t);!FamilyTree.isNEU(s.id)&&FamilyTree.isNEU(n)&&FamilyTree.isNEU(s.value)&&(n=s.id),FamilyTree.isNEU(s.value)||N.push(`${r.label}: ${s.value}`),e+=s.html}}return e}()}\n\n                                <div class="bft-form-field" style="min-width: 280px; text-align:center; ${S}">\n                                    <a data-add-more-fields-btn href="#" class="bft-link">${s}</a>\n                                </div>\n                            </div>        \n                        </div>\n                    </div>\n                    <div class="bft-form-fieldset" style="padding: 14px 10px; ${k}">\n                        <div class="bft-form-field" style="min-width: initial;">\n                            <button data-edit-from-cancel type="button" class="bft-button transparent">${c}</button>\n                        </div>\n                        <div class="bft-form-field" style="min-width: initial;">\n                            <button type="submit" data-edit-from-save type="button" class="bft-button">${d}</button>\n                        </div>\n                    </div>`,{element:I,focusId:n,title:g,shareText:N.join("\n")}},FamilyTree.editUI.prototype.hide=function(){if(!1===FamilyTree.events.publish("hide",[this]))return!1;FamilyTree.isNEU(this.interval)&&(clearInterval(this.interval),this.interval=null);var e=this.obj.element.querySelector("[data-bft-edit-form]");e&&e.parentNode&&e.parentNode.removeChild(e)},FamilyTree.prototype.getSvg=function(){var e=this.element.getElementsByTagName("svg");return e&&e.length?e[0]:null},FamilyTree.prototype.getPointerElement=function(){return this.element.querySelector("g[data-pointer]")},FamilyTree.prototype.getNodeElement=function(e){return this.element.querySelector("g["+FamilyTree.attr.node_id+"='"+e+"']")},FamilyTree.prototype.getMenuButton=function(){return this.element.querySelector("["+FamilyTree.attr.control_export_menu+"]")},FamilyTree.menuUI=function(){},FamilyTree.menuUI.prototype.init=function(e,t){this.obj=e,this.wrapper=null,this.menu=t,this._event_id=FamilyTree._guid()},FamilyTree.menuUI.prototype.showStickIn=function(e,t,i,r){this._show(e,null,t,i,r)},FamilyTree.menuUI.prototype.show=function(e,t,i,r,a){this._show(e,t,i,r,a)},FamilyTree.menuUI.prototype._show=function(e,t,i,r,a){var n=this;this.hide();var l="";a||(a=this.menu);var o={firstNodeId:i,secondNodeId:r,menu:a};if(!1===FamilyTree.events.publish("show",[this,o]))return!1;for(var s in a=o.menu){var d=a[s].icon,c=a[s].text;void 0===d&&(d=FamilyTree.icon[s]?FamilyTree.icon[s](24,24,"#7A7A7A"):""),"function"==typeof c&&(c=c()),"function"==typeof d&&(d=d()),l+="<div "+FamilyTree.attr.item+'="'+s+'">'+d+"<span>&nbsp;&nbsp;"+c+"</span></div>"}if(""!=l){if(this.wrapper=document.createElement("div"),this.wrapper.className="bft-family-menu",this.wrapper.style.left="-99999px",this.wrapper.style.top="-99999px",this.wrapper.innerHTML=l,this.obj.element.appendChild(this.wrapper),null==t){var m=FamilyTree._menuPosition(e,this.wrapper,this.obj.getSvg());e=m.x,t=m.y}var p=e+45;this.wrapper.style.left=p+"px",this.wrapper.style.top=t+"px",this.wrapper.style.left=p-this.wrapper.offsetWidth+"px";var h=e-this.wrapper.offsetWidth;FamilyTree.animate(this.wrapper,{opacity:0,left:p-this.wrapper.offsetWidth},{opacity:1,left:h},300,FamilyTree.anim.inOutPow);for(var f=this.wrapper.getElementsByTagName("div"),u=0;u<f.length;u++){(s=f[u]).addEventListener("click",(function(e){var t,l=this.getAttribute(FamilyTree.attr.item);if(void 0===a[l].onClick)if("add"===l){var o={id:n.obj.generateId(),pid:i};n.obj.addNode(o,null,!0)}else if("edit"===l){var s=n.obj.getNode(i);n.obj.editUI.show(s.id)}else if("details"===l){s=n.obj.getNode(i);n.obj.editUI.show(s.id,!0)}else"remove"===l?n.obj.removeNode(i,null,!0):"svg"===l?n.obj.exportSVG({filename:"FamilyTree.svg",expandChildren:!1,nodeId:i}):"pdf"===l?n.obj.exportPDF({filename:"FamilyTree.pdf",expandChildren:!1,nodeId:i}):"png"===l?n.obj.exportPNG({filename:"FamilyTree.png",expandChildren:!1,nodeId:i}):"csv"===l?n.obj.exportCSV():"xml"===l?n.obj.exportXML():"json"===l&&n.obj.exportJSON();else t=a[l].onClick.call(n.obj,i,r);0!=t&&n.hide()}))}}},FamilyTree.menuUI.prototype.hide=function(){null!=this.wrapper&&(this.obj.element.removeChild(this.wrapper),this.wrapper=null)},FamilyTree.menuUI.prototype.on=function(e,t){return FamilyTree.events.on(e,t,this._event_id),this},FamilyTree.circleMenuUI=function(){},FamilyTree.circleMenuUI.prototype.init=function(e,t){this.obj=e,this.menu=t,this._menu=null,this._buttonsInterval=[],this._linesInterval=[],this._event_id=FamilyTree._guid()},FamilyTree.circleMenuUI.prototype.show=function(e,t){this._show(e,t)},FamilyTree.circleMenuUI.prototype._show=function(e,t){var i=this,r=this.obj.getNode(e),a=FamilyTree.t(r.templateName,r.min,this.obj.getScale());if(!FamilyTree.isNEU(a.nodeCircleMenuButton)){var n=this.obj.getSvg(),l=this.obj.element.querySelector("["+FamilyTree.attr.control_node_circle_menu_id+'="'+e+'"]'),o=this.obj.getNodeElement(e),s=FamilyTree._getTransform(l),d=FamilyTree._getTransform(o),c=s[4]+d[4],m=s[5]+d[5],p=l.querySelectorAll("line"),h=this.obj.element.querySelector("["+FamilyTree.attr.control_node_circle_menu_wrraper_id+"]");if(FamilyTree.isNEU(h)||h.getAttribute(FamilyTree.attr.control_node_circle_menu_wrraper_id)!=e){this.hide(),t||(t=this.menu);var f={nodeId:e,menu:t},u=FamilyTree.events.publish("show",[this,f]);if(this._menu=t,!1===u)return!1;for(var y=0,g=Object.keys(f.menu).length,T=2*a.nodeCircleMenuButton.radius+4,b=2*Math.PI*T,v=b/g-(2*a.nodeCircleMenuButton.radius+2);v<0;)T+=8,v=(b=2*Math.PI*T)/g-(2*a.nodeCircleMenuButton.radius+2);for(var F in(h=document.createElementNS("http://www.w3.org/2000/svg","g")).setAttribute(FamilyTree.attr.control_node_circle_menu_wrraper_id,e),h.setAttribute("transform","matrix(1,0,0,1,"+c+","+m+")"),n.appendChild(h),f.menu){var x=f.menu[F].icon,_=f.menu[F].color,w=f.menu[F].text;"function"==typeof x&&(x=x()),"function"==typeof _&&(_=_()),"function"==typeof w&&(w=w());var k=document.createElementNS("http://www.w3.org/2000/svg","g");k.setAttribute("transform","matrix(1,0,0,1,0,0)"),k.setAttribute(FamilyTree.attr.control_node_circle_menu_name,F),k.style.cursor="pointer";var S=document.createElementNS("http://www.w3.org/2000/svg","title");FamilyTree.isNEU(w)||(S.innerHTML=w);var C=document.createElementNS("http://www.w3.org/2000/svg","circle");C.setAttribute("cx",0),C.setAttribute("cy",0),C.setAttribute("r",a.nodeCircleMenuButton.radius),C.setAttribute("fill",_),C.setAttribute("stroke-width","1"),C.setAttribute("stroke",a.nodeCircleMenuButton.stroke),k.appendChild(C),k.appendChild(S),k.innerHTML+=x,h.appendChild(k);var I=k.getElementsByTagName("svg")[0];if(I.setAttribute("pointer-events","none"),I){var N=parseInt(I.getAttribute("width")),A=parseInt(I.getAttribute("height"));I.setAttribute("x",-N/2),I.setAttribute("y",-A/2)}var M=y*Math.PI/(g/2);y++;var E=Math.cos(M)*T,L=Math.sin(M)*T;this._buttonsInterval.push(FamilyTree.animate(k,{transform:[1,0,0,1,0,0]},{transform:[1,0,0,1,E,L]},250,FamilyTree.anim.outBack,(function(e){var t=e[0].getAttribute(FamilyTree.attr.control_node_circle_menu_name),r=e[0].parentNode.getAttribute(FamilyTree.attr.control_node_circle_menu_wrraper_id);e[0].addEventListener("mouseenter",(function(e){FamilyTree.events.publish("mouseenter",[i,{from:r,menuItem:f.menu[t],menuItemName:t,event:e}])})),e[0].addEventListener("mouseout",(function(e){FamilyTree.events.publish("mouseout",[i,{from:r,menuItem:f.menu[t],menuItemName:t,event:e}])}))})))}this._linesInterval.push(FamilyTree.animate(p[0],{x1:-a.nodeCircleMenuButton.radius/2,y1:-6,x2:a.nodeCircleMenuButton.radius/2,y2:-6},{x1:-7,y1:-7,x2:7,y2:7},500,FamilyTree.anim.inOutSin)),this._linesInterval.push(FamilyTree.animate(p[1],{x1:-a.nodeCircleMenuButton.radius/2,y1:0,x2:a.nodeCircleMenuButton.radius/2,y2:0},{x1:0,y1:0,x2:0,y2:0},500,FamilyTree.anim.inOutSin)),this._linesInterval.push(FamilyTree.animate(p[2],{x1:-a.nodeCircleMenuButton.radius/2,y1:6,x2:a.nodeCircleMenuButton.radius/2,y2:6},{x1:-7,y1:7,x2:7,y2:-7},500,FamilyTree.anim.inOutSin))}else this.hide()}},FamilyTree.circleMenuUI.prototype.hide=function(){for(var e=this._buttonsInterval.length-1;e>=0;e--)clearInterval(this._buttonsInterval[e]),this._buttonsInterval.splice(e,1);this._buttonsInterval=[];for(e=this._linesInterval.length-1;e>=0;e--)clearInterval(this._linesInterval[e]),this._linesInterval.splice(e,1);this._linesInterval=[];var t=this.obj.element.querySelector("["+FamilyTree.attr.control_node_circle_menu_wrraper_id+"]");if(null!=t){var i=t.getAttribute(FamilyTree.attr.control_node_circle_menu_wrraper_id),r=this.obj.getNode(i),a=FamilyTree.t(r.templateName,r.min,this.obj.getScale()),n=this.obj.element.querySelector("["+FamilyTree.attr.control_node_circle_menu_id+'="'+i+'"]').querySelectorAll("line");n[0].setAttribute("x1",-a.nodeCircleMenuButton.radius/2),n[0].setAttribute("x2",a.nodeCircleMenuButton.radius/2),n[0].setAttribute("y1",-6),n[0].setAttribute("y2",-6),n[1].setAttribute("x1",-a.nodeCircleMenuButton.radius/2),n[1].setAttribute("x2",a.nodeCircleMenuButton.radius/2),n[1].setAttribute("y1",0),n[1].setAttribute("y2",0),n[2].setAttribute("x1",-a.nodeCircleMenuButton.radius/2),n[2].setAttribute("x2",a.nodeCircleMenuButton.radius/2),n[2].setAttribute("y1",6),n[2].setAttribute("y2",6),t.parentElement.removeChild(t),t=null}},FamilyTree.circleMenuUI.prototype.on=function(e,t){return FamilyTree.events.on(e,t,this._event_id),this},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.idb={version:1,dbName:"BALKAN",tableName:"familytree-js",keyPath:"id"},FamilyTree.idb.db=null,FamilyTree.idb._open=function(e){if(FamilyTree._browser().msie)e&&e(!1);else if((navigator.userAgent.toLowerCase().indexOf("safari")>0||navigator.userAgent.toLowerCase().indexOf("firefox")>0)&&window.location!==window.parent.location)e&&e(!1);else{if(!window.indexedDB)return console.error("Your browser doesn't support a stable version of IndexedDB."),void(e&&e(!1));if(null==FamilyTree.idb.db){var t=indexedDB.open(FamilyTree.idb.dbName,FamilyTree.idb.version);t.onerror=function(t){console.error("Cannot open database!"),e&&e(!1)},t.onsuccess=function(t){FamilyTree.idb.db=t.target.result,e&&e(!0)},t.onupgradeneeded=function(e){var t=e.target.result;t.objectStoreNames.contains(FamilyTree.idb.tableName)&&t.deleteObjectStore(FamilyTree.idb.tableName);t.createObjectStore(FamilyTree.idb.tableName,{keyPath:FamilyTree.idb.keyPath})}}else e&&e(!0)}},FamilyTree.idb.read=function(e,t){FamilyTree.idb._open((function(i){if(i){var r=FamilyTree.idb.db.transaction([FamilyTree.idb.tableName]).objectStore(FamilyTree.idb.tableName).get(e);r.onerror=function(e){console.error("Unable to retrieve data from database!"),t&&t(!1)},r.onsuccess=function(e){r.result?t&&t(!0,r.result):t&&t(null)}}else t&&t(!1)}))},FamilyTree.idb.write=function(e,t){FamilyTree.idb.read(e.id,(function(i){if(null==i){var r=FamilyTree.idb.db.transaction([FamilyTree.idb.tableName],"readwrite").objectStore(FamilyTree.idb.tableName).add(e);r.onerror=function(e){console.error("Unable to add data to database!"),t&&t(!1)},r.onsuccess=function(e){t&&t(!0)}}else t&&t(i)}))},FamilyTree.idb.put=function(e,t){FamilyTree.idb._open((function(i){if(i){var r=FamilyTree.idb.db.transaction([FamilyTree.idb.tableName],"readwrite").objectStore(FamilyTree.idb.tableName).put(e);r.onerror=function(e){console.error("Unable to put data to database!"),t&&t(!1)},r.onsuccess=function(e){t&&t(!0)}}else t&&t(!1)}))},FamilyTree.idb.delete=function(e,t){FamilyTree.idb._open((function(i){if(i){var r=FamilyTree.idb.db.transaction([FamilyTree.idb.tableName],"readwrite").objectStore(FamilyTree.idb.tableName).delete(e);r.onerror=function(e){console.error("Unable to retrieve data from database!"),t&&t(!1)},r.onsuccess=function(e){r.error?t&&t(!1):t&&t(!0)}}else t&&t(!1)}))},FamilyTree.toolbarUI=function(){},FamilyTree.toolbarUI.expandAllIcon='<svg style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#757575" /></marker><line x1="11" y1="11" x2="6" y2="6" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><line x1="21" y1="11" x2="26" y2="6" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><line x1="21" y1="21" x2="26" y2="26" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><line x1="11" y1="21" x2="6" y2="26" stroke="#757575" stroke-width="2" marker-end="url(#arrow)" /><rect x="12" y="12" width="8" height="8" fill="#757575"></rect></svg>',FamilyTree.toolbarUI.fitIcon='<svg  style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M4,11 L4,4 L11,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,11 L28,4 L21,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,21 L28,28 L21,28"></path><path stroke-width="3" fill="none" stroke="#757575" d="M4,21 L4,28 L11,28"></path><circle cx="16" cy="16" r="5" fill="#757575"></circle></svg>',FamilyTree.toolbarUI.openFullScreenIcon='<svg  style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M4,11 L4,4 L11,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,11 L28,4 L21,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,21 L28,28 L21,28"></path><path stroke-width="3" fill="none" stroke="#757575" d="M4,21 L4,28 L11,28"></path><line x1="5" y1="5" x2="27" y2="27" stroke-width="3" stroke="#757575"></line><line x1="5" y1="27" x2="27" y2="5" stroke-width="3" stroke="#757575"></line></svg>',FamilyTree.toolbarUI.closeFullScreenIcon='<svg  style="margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M4,11 L4,4 L11,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,11 L28,4 L21,4"></path><path stroke-width="3" fill="none" stroke="#757575" d="M28,21 L28,28 L21,28"></path><path stroke-width="3" fill="none" stroke="#757575" d="M4,21 L4,28 L11,28"></path><rect x="11" y="11" width="10" height="10" stroke-width="3" fill="none" stroke="#757575" ></rect></svg>',FamilyTree.toolbarUI.zoomInIcon='<svg style="box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border-left: 1px solid #cacaca; border-right: 1px solid #cacaca; border-top: 1px solid #cacaca; background-color: #f9f9f9;display: block; cursor: pointer;" width="32px" height="32px" ><g><rect fill="#f9f9f9" x="0" y="0" width="32" height="32" ></rect><line x1="8" y1="16" x2="24" y2="16" stroke-width="3" stroke="#757575"></line><line x1="16" y1="8" x2="16" y2="24" stroke-width="3" stroke="#757575"></line></g><line x1="4" y1="32" x2="28" y2="32" stroke-width="1" stroke="#cacaca"></line></svg>',FamilyTree.toolbarUI.zoomOutIcon='<svg style="box-shadow: 0px 1px 4px rgba(0,0,0,0.3); margin-bottom:7px; border-left: 1px solid #cacaca; border-right: 1px solid #cacaca; border-bottom: 1px solid #cacaca; background-color: #f9f9f9;display: block; cursor: pointer;" width="32px" height="32px" ><g><rect fill="#f9f9f9" x="0" y="0" width="32" height="32" ></rect><line x1="8" y1="16" x2="24" y2="16" stroke-width="3" stroke="#757575"></line></g></svg>',FamilyTree.toolbarUI.layoutIcon="<svg "+FamilyTree.attr.tlbr+'="layout" style="box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;" width="32px" height="32px"><path stroke-width="3" fill="none" stroke="#757575" d="M8,24 L16,14 L24,24"></path><path stroke-width="3" fill="none" stroke="#757575" d="M8,16 L16,8 L24,16"></path></svg>',FamilyTree.toolbarUI.prototype.init=function(e,t){if(t){this.obj=e,this.toolbar=t,this._visible=!1,this.div=document.createElement("div"),this.div.classList.add("bft-toolbar-container"),Object.assign(this.div.style,{position:"absolute",padding:"3px",right:this.obj.config.padding-10+"px",bottom:this.obj.config.padding-10+"px"}),t.expandAll&&(this.div.innerHTML+="<div "+FamilyTree.attr.tlbr+'="expand">'+FamilyTree.toolbarUI.expandAllIcon+"</div>"),t.fit&&(this.div.innerHTML+="<div "+FamilyTree.attr.tlbr+'="fit">'+FamilyTree.toolbarUI.fitIcon+"</div>"),t.zoom&&(this.div.innerHTML+="<div "+FamilyTree.attr.tlbr+'="plus">'+FamilyTree.toolbarUI.zoomInIcon+"</div>",this.div.innerHTML+="<div "+FamilyTree.attr.tlbr+'="minus">'+FamilyTree.toolbarUI.zoomOutIcon+"</div>"),t.layout&&(this.div.innerHTML+="<div "+FamilyTree.attr.tlbr+'="layout">'+FamilyTree.toolbarUI.layoutIcon+"</div>",this.layouts=document.createElement("div"),this.layouts.innerHTML="<svg "+FamilyTree.attr.layout+'="normal" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="7" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="63" y="41" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line><line stroke="#000000" x1="32" x2="88" y1="35" y2="35" stroke-width="1"></line><line stroke="#000000" x1="32" x2="32" y1="35" y2="41" stroke-width="1"></line><line stroke="#000000" x1="88" x2="88" y1="35" y2="41" stroke-width="1"></line></svg><svg '+FamilyTree.attr.layout+'="treeRightOffset" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="40" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="40" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line><line stroke="#000000" x1="60" x2="35" y1="35" y2="35" stroke-width="1"></line><line stroke="#000000" x1="35" x2="35" y1="35" y2="86" stroke-width="1"></line><line stroke="#000000" x1="35" x2="40" y1="86" y2="86" stroke-width="1"></line><line stroke="#000000" x1="35" x2="40" y1="54" y2="54" stroke-width="1"></line></svg><svg '+FamilyTree.attr.layout+'="treeLeftOffset" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="30" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="30" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line><line stroke="#000000" x1="60" x2="85" y1="35" y2="35" stroke-width="1"></line><line stroke="#000000" x1="85" x2="85" y1="35" y2="86" stroke-width="1"></line><line stroke="#000000" x1="80" x2="85" y1="86" y2="86" stroke-width="1"></line><line stroke="#000000" x1="80" x2="85" y1="54" y2="54" stroke-width="1"></line></svg><svg '+FamilyTree.attr.layout+'="mixed" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="35" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="35" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="41" stroke-width="1"></line><line stroke="#000000" x1="60" x2="60" y1="68" y2="73" stroke-width="1"></line></svg><svg '+FamilyTree.attr.layout+'="tree" style="cursor: pointer;" width="110" height="100"><rect fill="#039BE5" x="35" y="0" width="50" height="27"></rect><rect fill="#F57C00" x="7" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="7" y="73" width="50" height="27"></rect><rect fill="#F57C00" x="63" y="41" width="50" height="27"></rect><rect fill="#F57C00" x="63" y="73" width="50" height="27"></rect><line stroke="#000000" x1="60" x2="60" y1="27" y2="86" stroke-width="1"></line><line stroke="#000000" x1="57" x2="63" y1="54" y2="54" stroke-width="1"></line><line stroke="#000000" x1="57" x2="63" y1="86" y2="86" stroke-width="1"></line></svg>',this.obj.element.appendChild(this.layouts),Object.assign(this.layouts.style,{position:"absolute",width:"100%",left:"0",bottom:"-145px","box-shadow":"0px 1px 4px rgba(0,0,0,0.3)","background-color":"#f9f9f9",height:"123px","padding-top":"20px","border-top":"1px solid #cacaca"})),t.fullScreen&&(this.div.innerHTML+="<div "+FamilyTree.attr.tlbr+'="fullScreen">'+FamilyTree.toolbarUI.openFullScreenIcon+"</div>"),this.obj.element.appendChild(this.div),this.layoutBtn=this.div.querySelector("["+FamilyTree.attr.tlbr+'="layout"]');var i=this.div.querySelector("["+FamilyTree.attr.tlbr+'="plus"]'),r=this.div.querySelector("["+FamilyTree.attr.tlbr+'="minus"]'),a=this.div.querySelector("["+FamilyTree.attr.tlbr+'="fit"]'),n=this.div.querySelector("["+FamilyTree.attr.tlbr+'="fullScreen"]'),l=this.div.querySelector("["+FamilyTree.attr.tlbr+'="expand"]'),o=this;i&&i.addEventListener("click",(function(){o.obj.zoom(!0,null,!0)})),r&&r.addEventListener("click",(function(){o.obj.zoom(!1,null,!0)})),a&&a.addEventListener("click",(function(){o.obj.fit()})),n&&n.addEventListener("click",(function(){o.obj.toggleFullScreen()})),l&&l.addEventListener("click",(function(){o.obj.expand(null,"all")})),this.layoutBtn&&this.layoutBtn.addEventListener("click",(function(){o._visible?o.hideLayout():o.showLayout()})),this.layouts&&this.layouts.addEventListener("click",(function(e){for(var t=e.target;t;){if(t.hasAttribute&&t.hasAttribute(FamilyTree.attr.layout)){t=t.getAttribute(FamilyTree.attr.layout),o.obj.setLayout(FamilyTree[t]);break}t=t.parentNode}}))}},FamilyTree.toolbarUI.prototype.showLayout=function(){this._visible=!0,this.layoutBtn.style.transform="rotate(180deg) translateX(0px) translateY(0px)",FamilyTree.animate(this.div,{bottom:this.obj.config.padding-10},{bottom:this.obj.config.padding+135},this.obj.config.anim.duration,this.obj.config.anim.func),FamilyTree.animate(this.layouts,{bottom:-145},{bottom:0},this.obj.config.anim.duration,this.obj.config.anim.func)},FamilyTree.toolbarUI.prototype.hideLayout=function(){this._visible=!1,this.layoutBtn.style.transform="rotate(0deg) translateX(0px) translateY(0px)",FamilyTree.animate(this.div,{bottom:this.obj.config.padding+135},{bottom:this.obj.config.padding-10},this.obj.config.anim.duration,this.obj.config.anim.func),FamilyTree.animate(this.layouts,{bottom:0},{bottom:-145},this.obj.config.anim.duration,this.obj.config.anim.func)},FamilyTree.notifierUI=function(){},FamilyTree.notifierUI.prototype.init=function(e){this.obj=e},FamilyTree.notifierUI.prototype.show=function(e,t){if(null==e)return!1;1==e&&(e=FamilyTree.MAX_NODES_MESS,t="#FFCA28"),2==e&&(e=FamilyTree.OFFLINE_MESS,t="#FFCA28");var i=document.createElement("div");i.innerHTML=e,Object.assign(i.style,{position:"absolute","background-color":t,color:"#ffffff",padding:"15px","border-radius":"40px",opacity:0,overflow:"hidden","white-space":"nowrap","text-align":"center"}),this.obj.element.appendChild(i);var r=this.obj.width()/2-i.offsetWidth/2,a=this.obj.height()/2-i.offsetHeight/2;i.style.left=r+"px",i.style.top=a+"px";var n=i.offsetWidth;return i.style.width="20px",FamilyTree.animate(i,{opacity:0,width:10},{opacity:1,width:n},this.obj.config.anim.duration,this.obj.config.anim.func),!0},void 0===FamilyTree&&(FamilyTree={}),FamilyTree._validateConfig=function(e){return!!e||(console.error("config is not defined"),!1)},FamilyTree._arrayContains=function(e,t){if(e&&Array.isArray(e))for(var i=e.length;i--;)if(e[i]===t)return!0;return!1},FamilyTree._interceptions=function(e,t){if(!e)return[];if(!t)return[];var i=[];if(Array.isArray(e)&&Array.isArray(t))for(var r in e)for(var a in t)e[r]==t[a]&&i.push(e[r]);else if(Array.isArray(e)&&!Array.isArray(t))for(var r in e)for(var a in t)e[r]==a&&i.push(e[r]);else if(!Array.isArray(e)&&Array.isArray(t))for(var r in e)for(var a in t)r==t[a]&&i.push(t[a]);return i},FamilyTree._getTags=function(e){return e.tags&&!Array.isArray(e.tags)?e.tags.split(","):e.tags&&Array.isArray(e.tags)?e.tags:[]},FamilyTree._centerPointInPercent=function(e,t,i){var r=e.getBoundingClientRect(),a=t-r.left,n=i-r.top;return[a/(r.width/100),n/(r.height/100)]},FamilyTree._trim=function(e){return e.replace(/^\s+|\s+$/g,"")},FamilyTree._getTransform=function(e){var t=e.getAttribute("transform");return t=t.replace("matrix","").replace("(","").replace(")",""),FamilyTree._browser().msie&&(t=t.replace(/ /g,",")),t="["+(t=FamilyTree._trim(t))+"]",t=JSON.parse(t)},FamilyTree.getScale=function(e,t,i,r,a,n,l,o){var s=1;if(e||r!==FamilyTree.match.boundary)if(e||r!==FamilyTree.match.width)if(e||r!==FamilyTree.match.height)if(e){var d,c;s=(d=t/e[2])>(c=i/e[3])?c:d}else s=r;else s=i/o;else s=t/l;else s=(d=t/l)>(c=i/o)?c:d;return s&&s>a&&(s=a),s&&s<n&&(s=n),s},FamilyTree.isObject=function(e){return e&&"object"==typeof e&&!Array.isArray(e)&&null!==e},FamilyTree.fileUploadDialog=function(e){var t=document.createElement("INPUT");t.setAttribute("type","file"),t.style.display="none",t.onchange=function(){var t=this.files[0];e(t)},document.body.appendChild(t),t.click()},FamilyTree.mergeDeep=function(e,t){if(FamilyTree.isObject(e)&&FamilyTree.isObject(t))for(var i in t)FamilyTree.isObject(t[i])?(e[i]||Object.assign(e,{[i]:{}}),FamilyTree.mergeDeep(e[i],t[i])):Object.assign(e,{[i]:t[i]});return e},FamilyTree._lblIsImg=function(e,t){return!(!e.nodeBinding||"string"!=typeof t||-1==t.indexOf("img")||!e.nodeBinding[t])},FamilyTree._getFistImgField=function(e){if(e.nodeBinding)for(var t in e.nodeBinding)if(-1!=t.indexOf("img"))return e.nodeBinding[t];return!1},FamilyTree._fieldIsImg=function(e,t){if(e.nodeBinding)for(var i in e.nodeBinding)if(e.nodeBinding[i]==t)return FamilyTree._lblIsImg(e,i);return!1},FamilyTree._guid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},FamilyTree.htmlRipple=function(e){var t=document.createElement("style");t.type="text/css",t.innerHTML=" .bft-ripple-container {position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .bft-ripple-container span {transform: scale(0);border-radius:100%;position:absolute;opacity:0.75;background-color:#fff;animation: bft-ripple 1000ms; }@-moz-keyframes bft-ripple {to {opacity: 0;transform: scale(2);}}@-webkit-keyframes bft-ripple {to {opacity: 0;transform: scale(2);}}@-o-keyframes bft-ripple {to {opacity: 0;transform: scale(2);}}@keyframes bft-ripple {to {opacity: 0;transform: scale(2);}}",document.head.appendChild(t);var i,r,a,n=document.createElement("div");n.className="bft-ripple-container",e.addEventListener("mousedown",(function(t){var i,r,a,n,l;return this,r=document.createElement("span"),a=this.offsetWidth,i=this.getBoundingClientRect(),l=t.pageX-i.left-a/2,n="top:"+(t.pageY-i.top-a/2)+"px; left: "+l+"px; height: "+a+"px; width: "+a+"px;",e.rippleContainer.appendChild(r),r.setAttribute("style",n)})),e.addEventListener("mouseup",(i=function(){for(;this.rippleContainer.firstChild;)this.rippleContainer.removeChild(this.rippleContainer.firstChild)},r=2e3,a=void 0,function(){var e,t;return t=this,e=arguments,clearTimeout(a),a=setTimeout((function(){return i.apply(t,e)}),r)})),e.rippleContainer=n,e.appendChild(n)},FamilyTree._moveToBoundaryArea=function(e,t,i,r){var a=t.slice(0);t[0]<i.left&&t[0]<i.right&&(a[0]=i.left>i.right?i.right:i.left),t[0]>i.right&&t[0]>i.left&&(a[0]=i.left>i.right?i.left:i.right),t[1]<i.top&&t[1]<i.bottom&&(a[1]=i.top>i.bottom?i.bottom:i.top),t[1]>i.bottom&&t[1]>i.top&&(a[1]=i.top>i.bottom?i.top:i.bottom),t[0]!==a[0]||t[1]!==a[1]?FamilyTree.animate(e,{viewBox:t},{viewBox:a},300,FamilyTree.anim.outPow,(function(){r&&r()})):r&&r()},FamilyTree.randomId=function(){return"_"+("0000"+(Math.random()*Math.pow(36,4)|0).toString(36)).slice(-4)},FamilyTree._getClientXY=function(e){return-1==e.type.indexOf("touch")?{x:e.clientX,y:e.clientY}:e.changedTouches.length?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:void 0},FamilyTree._getClientTouchesXY=function(e,t){return-1!=e.type.indexOf("touch")?e.touches.length<t+1?{x:null,y:null}:{x:e.touches[t].clientX,y:e.touches[t].clientY}:{x:e.clientX,y:e.clientY}},FamilyTree._getOffset=function(e,t){e&&(t.x+=e.offsetLeft,t.y+=e.offsetTop,FamilyTree._getOffset(e.offsetParent,t))},FamilyTree._getTopLeft=function(e){var t={x:0,y:0};return FamilyTree._getOffset(e,t),t},FamilyTree._getOffsetXY=function(e,t){if(-1==t.type.indexOf("touch"))return{x:t.offsetX,y:t.offsetY};if(t.touches.length){var i=FamilyTree._getTopLeft(e);return{x:t.touches[0].pageX-i.x,y:t.touches[0].pageY-i.y}}if(t.changedTouches.length){i=FamilyTree._getTopLeft(e);return{x:t.changedTouches[0].pageX-i.x,y:t.changedTouches[0].pageY-i.y}}},FamilyTree._pinchMiddlePointInPercent=function(e,t,i,r){var a=FamilyTree._getTopLeft(e),n=r.touches[0].pageX-a.x,l=r.touches[0].pageY-a.y,o=r.touches[1].pageX-a.x,s=r.touches[1].pageY-a.y;return[((n-o)/2+o)/(t/100),((l-s)/2+s)/(i/100)]},FamilyTree._browser=function(){var e=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,t="undefined"!=typeof InstallTrigger,i=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),r=!!document.documentMode,a=!r&&!!window.StyleMedia,n=!(!window.chrome||!window.chrome.webstore&&!window.chrome.runtime);return{opera:e,firefox:t,safari:i,msie:r,edge:a,chrome:n,blink:(n||e)&&!!window.CSS}},FamilyTree._menuPosition=function(e,t,i){var r=e.getBoundingClientRect(),a=i.getBoundingClientRect(),n=t.getBoundingClientRect(),l=r.left-a.left,o=r.top-a.top;return r.top+n.height>a.top+a.height&&(o-=n.height),r.left-n.width<a.left&&(l+=n.width),{x:l,y:o}},FamilyTree._getTemplate=function(e,t,i){if(Array.isArray(e))for(var r=0;r<e.length;r++){var a=t[e[r]];if(a&&a.template)return a.template}return i},FamilyTree._getMin=function(e,t){if(e.tags&&e.tags.length&&t.tags)for(var i=0;i<e.tags.length;i++){var r=t.tags[e.tags[i]];if(r&&!0===r.min)return!0}return t.min},FamilyTree._getSubLevels=function(e,t){if(e&&e.length)for(var i=0;i<e.length;i++){var r=t[e[i]];if(r&&r.subLevels)return r.subLevels}return 0},FamilyTree._isHTML=function(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes,r=i.length;r--;)if(1==i[r].nodeType)return!0;return!1},FamilyTree._getTestDiv=function(){var e=document.getElementById("orgfamily_js_test_div");return e||((e=document.createElement("div")).id="orgfamily_js_test_div",e.style.position="fixed",e.style.top="-10000px",e.style.left="-10000px",document.body.appendChild(e)),e},FamilyTree._getLabelSize=function(e){var t=FamilyTree._getTestDiv();return t.innerHTML="<svg>"+e+"</svg>",t.querySelector("text").getBoundingClientRect()},FamilyTree.wrapText=function(e,t){var i=t.toLowerCase();if(-1==i.indexOf("<text"))return FamilyTree._escapeHtml(e);if(-1==i.indexOf(FamilyTree.attr.width))return FamilyTree._escapeHtml(e);if(-1!=i.indexOf("foreignobject"))return FamilyTree._escapeHtml(e);if(-1==t.indexOf(FamilyTree.attr.width))return FamilyTree._escapeHtml(e);if(FamilyTree._isHTML(e))return FamilyTree._escapeHtml(e);var r=FamilyTree._getTestDiv();t=t.replaceAll("{cw}",0),r.innerHTML="<svg>"+t+"</svg>";var a,n,l=(new DOMParser).parseFromString(t,"text/xml").getElementsByTagName("text")[0],o=parseFloat(l.getAttribute("x")),s=parseFloat(l.getAttribute("y")),d=l.getAttribute("text-anchor"),c=l.getAttribute(FamilyTree.attr.width),m=l.getAttribute(FamilyTree.attr.text_overflow),p="http://www.w3.org/2000/svg",h=r.getElementsByTagName("svg")[0].getElementsByTagName("text")[0];m||(m="ellipsis");var f=m.split("-");if(f.length>1&&(a=parseInt(m.split("-")[1]),f.length>2&&"ellipsis"==f[2]&&(n=!0)),!c)return FamilyTree._escapeHtml(e);if(c=parseFloat(c),o||(o=0),s||(s=0),o||(d="start"),"ellipsis"==m){h.removeChild(h.firstChild),h.textContent=e;for(var u=h.getComputedTextLength(),y=2;u>c;)h.textContent=e.substring(0,e.length-y),h.textContent+="...",u=h.getComputedTextLength(),y++;return y>2?`<title>${FamilyTree._escapeHtml(e)}</title>${h.textContent}`:FamilyTree._escapeHtml(e)}if(-1!=m.indexOf("multiline")){var g=e.split(" "),T=h.getBBox().height;h.textContent="";var b=document.createElementNS(p,"tspan"),v=document.createTextNode(g[0]);b.setAttributeNS(null,"x",o),b.setAttributeNS(null,"y",s),b.setAttributeNS(null,"text-anchor",d),b.appendChild(v),h.appendChild(b);y=1;for(var F=1,x=1;x<g.length;x++){var _=b.firstChild.data.length;if(b.firstChild.data+=" "+g[x],b.getComputedTextLength()>c){if(b.firstChild.data=b.firstChild.data.slice(0,_),F++,a&&F>a){if(n&&h.children.length==a){var w=h.children[a-1].textContent;h.children[a-1].textContent=w.substring(0,w.length-3)+"..."}break}(b=document.createElementNS(p,"tspan")).setAttributeNS(null,"x",o),b.setAttributeNS(null,"y",s+T*y),b.setAttributeNS(null,"text-anchor",d),v=document.createTextNode(g[x]),b.appendChild(v),h.appendChild(b),y++}}var k="";if(null!=h.innerHTML)k=h.innerHTML,h.innerHTML="";else{var S="";for(x=h.childNodes.length-1;x>=0;x--)S=XMLSerializer().serializeToString(h.childNodes[x])+S,h.removeChild(h.childNodes[x]);k=S}return k}},FamilyTree._downloadFile=function(e,t,i,r){var a=new Blob([t],{type:e});if(1==r){var n=URL.createObjectURL(a);window.open(n,"_blank").focus()}else if(navigator.msSaveBlob)navigator.msSaveBlob(a,i);else{var l=document.createElement("a");if(void 0!==l.download){n=URL.createObjectURL(a);l.setAttribute("href",n),l.setAttribute("download",i),l.style.visibility="hidden",document.body.appendChild(l),l.click(),document.body.removeChild(l)}}},FamilyTree._getPosition=function(e,t,i,r){var a={x:t.x,y:t.y};if(null!=i&&(a.x=i),null!=r&&(a.y=i),e&&3==e.length){var n=e[0].indexOf(t.id);-1!=n&&null!=e[1][n].transform&&(null==i&&(a.x=e[1][n].transform[4]),null==r&&(a.y=e[1][n].transform[5]))}return a},FamilyTree._getOpacity=function(e,t){var i=1;if(e&&3==e.length){var r=e[0].indexOf(t.id);-1!=r&&null!=e[1][r].opacity&&(i=e[1][r].opacity)}return i},FamilyTree.t=function(e,t,i){var r=FamilyTree.templates[e];null==r&&console.error(`Template "${e}" does not exist!`);var a=null;if(null!=i&&r.scaleLessThen){var n=[];for(var l in r.scaleLessThen){var o=parseFloat(l);i<o&&n.push(o)}if(n.length>0){n.sort((function(e,t){return e-t}));var s=r.scaleLessThen[n[0]];for(var d in s)null==a&&(a=Object.assign({},r)),a[d]=s[d]}}return t?null==a?r.min?r.min:r:a.min?a.min:a:null==a?r:a},FamilyTree.setNodeSize=function(e){var t=FamilyTree.t(e.templateName,e.min);e.w=t&&t.size?t.size[0]:0,e.h=t&&t.size?t.size[1]:0},FamilyTree._imgs2base64=function(e,t,i,r){var a=e.getElementsByTagName(t),n=a.length;0==n&&r();for(var l=0;l<n;l++)!function(){var e=l,t=a[e];FamilyTree._getDataUri(t.getAttribute(i),(function(a){a.success&&t.setAttribute(i,a.result),e==n-1&&r()}))}()},FamilyTree._getDataUri=function(e,t){if(-1!=e.indexOf("base64"))t({success:!1});else{var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){200===i.status?r.readAsDataURL(i.response):404===i.status&&t({success:!1,result:i.status})};var r=new FileReader;r.onloadend=function(){t({success:!0,result:r.result})},i.send()}},FamilyTree._convertStringToArray=function(e,t){return-1!=FamilyTree.ARRAY_FIELDS.indexOf(e)?FamilyTree.isNEU(t)?[]:t.split(","):t},FamilyTree._convertArrayToString=function(e){return!FamilyTree.isNEU(e)&&Array.isArray(e)?e.join():e},FamilyTree._csvToArray=function(e,t){t=t||FamilyTree.CSV_DELIMITER;for(var i=new RegExp("(\\"+t+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+t+"\\r\\n]*))","gi"),r=[[]],a=null;a=i.exec(e);){var n,l=a[1];l.length&&l!==t&&r.push([]),n=a[2]?a[2].replace(new RegExp('""',"g"),'"'):a[3],r[r.length-1].push(n)}return r},FamilyTree._json2xml=function(e){for(var t=document.implementation.createDocument("","",null),i=t.createElement("nodes"),r=0;r<e.length;r++){var a=t.createElement("node"),n=e[r];for(var l in n){var o=n[l];a.setAttribute(l,FamilyTree._convertArrayToString(o))}i.appendChild(a)}return t.appendChild(i),'<?xml version="1.0" encoding="utf-8" ?>'+(new XMLSerializer).serializeToString(t.documentElement)},FamilyTree._xml2json=function(e){for(var t=(new DOMParser).parseFromString(e,"text/xml").getElementsByTagName("node"),i=[],r=0;r<t.length;r++){for(var a=t[r],n={},l=0;l<a.attributes.length;l++){var o=a.attributes[l];n[o.name]=FamilyTree._convertStringToArray(o.name,o.value)}i.push(n)}return i},FamilyTree._json2csv=function(e){for(var t=[],i=function(e){for(var i="",r=0;r<t.length;r++){var a;(a="reportsTo"==t[r]?null:null==e[t[r]]?"":e[t[r]])instanceof Date&&(a=a.toLocaleString());var n=(a=null===a?"":a.toString()).replace(/"/g,'""'),l=new RegExp('("|;|\n)',"g");n.search(l)>=0&&(n='"'+n+'"'),r>0&&(i+=FamilyTree.CSV_DELIMITER),i+=n}return i+"\n"},r="",a=0;a<e.length;a++)for(var n in e[a])FamilyTree._arrayContains(t,n)||(t.push(n),r+=n+FamilyTree.CSV_DELIMITER);r=r.substring(0,r.length-1),r+="\n";for(a=0;a<e.length;a++)r+=i(e[a]);return r=r.substring(0,r.length-1)},FamilyTree.accentFold=function(e){return(e=e.toString().toLowerCase()).replace(/([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g,(function(e,t,i,r,a,n,l,o,s,d,c){return t?"a":i?"c":r?"e":a?"i":n?"n":l?"o":o?"s":s?"u":d?"y":c?"ae":void 0}))},FamilyTree.copy=function(e){if(null===e||"object"!=typeof e||"isActiveClone"in e)return e;if(e instanceof Date)var t=new e.constructor;else t=e.constructor();for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e.isActiveClone=null,t[i]=FamilyTree.copy(e[i]),delete e.isActiveClone);return t},FamilyTree._getScrollSensitivity=function(){var e=FamilyTree._browser();return e.msie&&FamilyTree.scroll.ie?FamilyTree.scroll.ie:e.edge&&FamilyTree.scroll.edge?FamilyTree.scroll.edge:e.safari&&FamilyTree.scroll.safari?FamilyTree.scroll.safari:e.chrome&&FamilyTree.scroll.chrome?FamilyTree.scroll.chrome:e.firefox&&FamilyTree.scroll.firefox?FamilyTree.scroll.firefox:e.opera&&FamilyTree.scroll.opera?FamilyTree.scroll.opera:{smooth:FamilyTree.scroll.smooth,speed:FamilyTree.scroll.speed}},FamilyTree.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},FamilyTree.isTrial=function(){return void 0!==FamilyTree.remote},FamilyTree.childrenCount=function(e,t){for(var i=0,r=0;r<t.childrenIds.length;r++){e.nodes[t.childrenIds[r]]&&i++}return i},FamilyTree.childrenTotalCount=function(e,t){for(var i=0,r=0;r<t.childrenIds.length;r++){var a=e.nodes[t.childrenIds[r]];a&&(i++,i+=FamilyTree.childrenTotalCount(e,a))}return i},FamilyTree.collapsedChildrenCount=function(e,t){for(var i=0,r=0;r<t.childrenIds.length;r++){var a=e.nodes[t.childrenIds[r]];a&&!0===a.collapsed&&i++}return i},FamilyTree.collapsedChildrenTotalCount=function(e,t,i){for(var r=0,a=0;a<t.childrenIds.length;a++){var n=e.nodes[t.childrenIds[a]];n&&((i||!0===n.collapsed)&&r++,r+=FamilyTree.collapsedChildrenTotalCount(e,n,!0))}return r},FamilyTree._setMinMaxXY=function(e,t){(null==t.minX||null!=e.x&&e.x<t.minX)&&(t.minX=e.x),(null==t.minY||null!=e.y&&e.y<t.minY)&&(t.minY=e.y),(null==t.maxX||null!=e.x&&e.x+e.w>t.maxX)&&(t.maxX=e.x+e.w),(null==t.maxY||null!=e.y&&e.y+e.h>t.maxY)&&(t.maxY=e.y+e.h)},FamilyTree.getStParentNodes=function(e,t){for(t||(t=[]);e.parent;)e=e.parent;return e.stParent&&(t.push(e.stParent),FamilyTree.getStParentNodes(e.stParent,t)),t},FamilyTree.getRootOf=function(e){for(;e&&e.parent;)e=e.parent;return e},FamilyTree._getViewBox=function(e){var t=null;return e?(t=(t="["+(t=e.getAttribute("viewBox"))+"]").replace(/\ /g,","),t=JSON.parse(t)):null},FamilyTree.isNEU=function(e){return null==e||""===e},FamilyTree.gradientCircleForDefs=function(e,t,i,r){function a(e,t,i,r){var a=(r-90)*Math.PI/180;return{x:e+i*Math.cos(a),y:t+i*Math.sin(a)}}function n(e,t,i,r,n){var l=a(e,t,i,n),o=a(e,t,i,r),s=n-r<=180?"0":"1";return["M",l.x,l.y,"A",i,i,0,s,0,o.x,o.y].join(" ")}return Array.isArray(t)||(t=[t,t,t,t,t,t]),`<linearGradient id="${e}_linearColors1" x1="0" y1="0" x2="1" y2="1">\n            <stop offset="0%" stop-color="${t[0]}"></stop>\n            <stop offset="100%" stop-color="${t[1]}"></stop>\n        </linearGradient>\n        <linearGradient id="${e}_linearColors2" x1="0.5" y1="0" x2="0.5" y2="1">\n            <stop offset="0%" stop-color="${t[1]}"></stop>\n            <stop offset="100%" stop-color="${t[2]}"></stop>\n        </linearGradient>\n        <linearGradient id="${e}_linearColors3" x1="1" y1="0" x2="0" y2="1">\n            <stop offset="0%" stop-color="${t[2]}"></stop>\n            <stop offset="100%" stop-color="${t[3]}"></stop>\n        </linearGradient>\n        <linearGradient id="${e}_linearColors4" x1="1" y1="1" x2="0" y2="0">\n            <stop offset="0%" stop-color="${t[3]}"></stop>\n            <stop offset="100%" stop-color="${t[4]}"></stop>\n        </linearGradient>\n        <linearGradient id="${e}_linearColors5" x1="0.5" y1="1" x2="0.5" y2="0">\n            <stop offset="0%" stop-color="${t[4]}"></stop>\n            <stop offset="100%" stop-color="${t[5]}"></stop>\n        </linearGradient>\n        <linearGradient id="${e}_linearColors6" x1="0" y1="1" x2="1" y2="0">\n            <stop offset="0%" stop-color="${t[5]}"></stop>\n            <stop offset="100%" stop-color="${t[0]}"></stop>\n        </linearGradient>        \n        <g id="${e}">\n            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors1)" d="${n(i,i,i,1,60)}"  />\n            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors2)" d="${n(i,i,i,60,120)}"/>\n            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors3)" d="${n(i,i,i,120,180)}" />\n            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors4)" d="${n(i,i,i,180,240)}" />\n            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors5)" d="${n(i,i,i,240,300)}" />\n            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors6)" d="${n(i,i,i,300,1)}"/>\n        </g>`},FamilyTree._intersectionObserver=function(e,t){"function"==typeof IntersectionObserver?new IntersectionObserver((function(e,i){e.forEach((function(e){var i=e.intersectionRatio>0;0==e.intersectionRatio&&(i=e.isIntersecting),t(i)}))})).observe(e):t(!0)},FamilyTree.convertCsvToNodes=function(e){for(var t=FamilyTree._csvToArray(e),i=t[0],r=[],a=1;a<t.length;a++){for(var n={},l=0;l<t[a].length;l++){var o=i[l],s=t[a][l];n[i[l]]=FamilyTree._convertStringToArray(o,s)}""!=n.id.trim()&&r.push(n)}return r},FamilyTree._escapeHtml=function(e){return FamilyTree.ESCAPE_HTML&&"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):e},FamilyTree._escapeDoubleQuotes=function(e){return"string"==typeof e?e.replace(/"/g,"&quot;"):e},FamilyTree._escapeGreaterLessSign=function(e){return"string"==typeof e?e.replace(/</g,"&lt;").replace(/>/g,"&gt;"):e},FamilyTree._changeRootOption=function(e,t,i){for(var r=[],a=0;a<t.length;a++)for(var n=0;n<i.length;n++)if(i[n].has(t[a])){r=i[n];break}for(a=0;a<r.length;a++){var l=e.indexOf(r[a]);-1!=l&&e.splice(l,1)}t.length&&e.push(t[0])},FamilyTree._convertStringToArrayOnImport=function(e,t){return"tags"==e||"pids"==e?FamilyTree.isNEU(t)?[]:t.split(","):t},FamilyTree.icon={},FamilyTree.icon.png=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 550.801 550.801"><path fill="'+i+'" d="M146.747,276.708c0-13.998-9.711-22.352-26.887-22.352c-6.99,0-11.726,0.675-14.204,1.355v44.927 c2.932,0.676,6.539,0.896,11.52,0.896C135.449,301.546,146.747,292.28,146.747,276.708z"/><path fill="'+i+'" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M234.344,335.86v45.831h-31.601V229.524h40.184 l31.611,55.759c9.025,16.031,18.064,34.983,24.825,52.154h0.675c-2.257-20.103-2.933-40.643-2.933-63.44v-44.473h31.614v152.167 h-36.117l-32.516-58.703c-9.049-16.253-18.971-35.892-26.438-53.727l-0.665,0.222C233.906,289.58,234.344,311.027,234.344,335.86z M71.556,381.691V231.56c10.613-1.804,25.516-3.159,46.506-3.159c21.215,0,36.353,4.061,46.509,12.192 c9.698,7.673,16.255,20.313,16.255,35.219c0,14.897-4.959,27.549-13.999,36.123c-11.738,11.063-29.123,16.031-49.441,16.031 c-4.522,0-8.593-0.231-11.736-0.675v54.411H71.556V381.691z M453.601,523.353H97.2V419.302h356.4V523.353z M485.652,374.688 c-10.61,3.607-30.713,8.585-50.805,8.585c-27.759,0-47.872-7.003-61.857-20.545c-13.995-13.1-21.684-32.97-21.452-55.318 c0.222-50.569,37.03-79.463,86.917-79.463c19.644,0,34.783,3.829,42.219,7.446l-7.214,27.543c-8.369-3.617-18.752-6.55-35.458-6.55 c-28.656,0-50.341,16.256-50.341,49.22c0,31.382,19.649,49.892,47.872,49.892c7.895,0,14.218-0.901,16.934-2.257v-31.835h-23.493 v-26.869h56.679V374.688z"/></svg>'},FamilyTree.icon.pdf=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 550.801 550.801"><path fill="'+i+'" d="M160.381,282.225c0-14.832-10.299-23.684-28.474-23.684c-7.414,0-12.437,0.715-15.071,1.432V307.6 c3.114,0.707,6.942,0.949,12.192,0.949C148.419,308.549,160.381,298.74,160.381,282.225z"/><path fill="'+i+'" d="M272.875,259.019c-8.145,0-13.397,0.717-16.519,1.435v105.523c3.116,0.729,8.142,0.729,12.69,0.729 c33.017,0.231,54.554-17.946,54.554-56.474C323.842,276.719,304.215,259.019,272.875,259.019z"/><path fill="'+i+'" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M362.359,309.023c0,30.876-11.243,52.165-26.82,65.333 c-16.971,14.117-42.82,20.814-74.396,20.814c-18.9,0-32.297-1.197-41.401-2.389V234.365c13.399-2.149,30.878-3.346,49.304-3.346 c30.612,0,50.478,5.508,66.039,17.226C351.828,260.69,362.359,280.547,362.359,309.023z M80.7,393.499V234.365 c11.241-1.904,27.042-3.346,49.296-3.346c22.491,0,38.527,4.308,49.291,12.928c10.292,8.131,17.215,21.534,17.215,37.328 c0,15.799-5.25,29.198-14.829,38.285c-12.442,11.728-30.865,16.996-52.407,16.996c-4.778,0-9.1-0.243-12.435-0.723v57.67H80.7 V393.499z M453.601,523.353H97.2V419.302h356.4V523.353z M484.898,262.127h-61.989v36.851h57.913v29.674h-57.913v64.848h-36.593 V232.216h98.582V262.127z"/></svg>'},FamilyTree.icon.svg=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 550.801 550.801"><path fill="'+i+'" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M338.871,225.672L284.545,386.96h-42.591 l-51.69-161.288h39.967l19.617,68.196c5.508,19.143,10.531,37.567,14.36,57.67h0.717c4.061-19.385,9.089-38.527,14.592-56.953 l20.585-68.918h38.77V225.672z M68.458,379.54l7.415-30.153c9.811,5.021,24.888,10.051,40.439,10.051 c16.751,0,25.607-6.935,25.607-17.465c0-10.052-7.662-15.795-27.05-22.734c-26.8-9.328-44.263-24.168-44.263-47.611 c0-27.524,22.971-48.579,61.014-48.579c18.188,0,31.591,3.823,41.159,8.131l-8.126,29.437c-6.465-3.116-17.945-7.657-33.745-7.657 c-15.791,0-23.454,7.183-23.454,15.552c0,10.296,9.089,14.842,29.917,22.731c28.468,10.536,41.871,25.365,41.871,48.094 c0,27.042-20.812,50.013-65.09,50.013C95.731,389.349,77.538,384.571,68.458,379.54z M453.601,523.353H97.2V419.302h356.4V523.353z M488.911,379.54c-11.243,3.823-32.537,9.103-53.831,9.103c-29.437,0-50.73-7.426-65.57-21.779 c-14.839-13.875-22.971-34.942-22.738-58.625c0.253-53.604,39.255-84.235,92.137-84.235c20.81,0,36.852,4.073,44.74,7.896 l-7.657,29.202c-8.859-3.829-19.849-6.95-37.567-6.95c-30.396,0-53.357,17.233-53.357,52.173c0,33.265,20.81,52.882,50.73,52.882 c8.375,0,15.072-0.96,17.94-2.395v-33.745h-24.875v-28.471h60.049V379.54L488.911,379.54z" /></svg>'},FamilyTree.icon.csv=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 548.29 548.291" ><path fill="'+i+'" d="M486.2,196.121h-13.164V132.59c0-0.399-0.064-0.795-0.116-1.2c-0.021-2.52-0.824-5-2.551-6.96L364.656,3.677 c-0.031-0.034-0.064-0.044-0.085-0.075c-0.629-0.707-1.364-1.292-2.141-1.796c-0.231-0.157-0.462-0.286-0.704-0.419 c-0.672-0.365-1.386-0.672-2.121-0.893c-0.199-0.052-0.377-0.134-0.576-0.188C358.229,0.118,357.4,0,356.562,0H96.757 C84.893,0,75.256,9.649,75.256,21.502v174.613H62.093c-16.972,0-30.733,13.756-30.733,30.73v159.81 c0,16.966,13.761,30.736,30.733,30.736h13.163V526.79c0,11.854,9.637,21.501,21.501,21.501h354.777 c11.853,0,21.502-9.647,21.502-21.501V417.392H486.2c16.966,0,30.729-13.764,30.729-30.731v-159.81 C516.93,209.872,503.166,196.121,486.2,196.121z M96.757,21.502h249.053v110.006c0,5.94,4.818,10.751,10.751,10.751h94.973v53.861 H96.757V21.502z M258.618,313.18c-26.68-9.291-44.063-24.053-44.063-47.389c0-27.404,22.861-48.368,60.733-48.368 c18.107,0,31.447,3.811,40.968,8.107l-8.09,29.3c-6.43-3.107-17.862-7.632-33.59-7.632c-15.717,0-23.339,7.149-23.339,15.485 c0,10.247,9.047,14.769,29.78,22.632c28.341,10.479,41.681,25.239,41.681,47.874c0,26.909-20.721,49.786-64.792,49.786 c-18.338,0-36.449-4.776-45.497-9.77l7.38-30.016c9.772,5.014,24.775,10.006,40.264,10.006c16.671,0,25.488-6.908,25.488-17.396 C285.536,325.789,277.909,320.078,258.618,313.18z M69.474,302.692c0-54.781,39.074-85.269,87.654-85.269 c18.822,0,33.113,3.811,39.549,7.149l-7.392,28.816c-7.38-3.084-17.632-5.939-30.491-5.939c-28.822,0-51.206,17.375-51.206,53.099 c0,32.158,19.051,52.4,51.456,52.4c10.947,0,23.097-2.378,30.241-5.238l5.483,28.346c-6.672,3.34-21.674,6.919-41.208,6.919 C98.06,382.976,69.474,348.424,69.474,302.692z M451.534,520.962H96.757v-103.57h354.777V520.962z M427.518,380.583h-42.399 l-51.45-160.536h39.787l19.526,67.894c5.479,19.046,10.479,37.386,14.299,57.397h0.709c4.048-19.298,9.045-38.352,14.526-56.693 l20.487-68.598h38.599L427.518,380.583z" /></svg>'},FamilyTree.icon.json=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 32 32" ><polygon fill="'+i+'"  points="31 11 31 21 29 21 27 15 27 21 25 21 25 11 27 11 29 17 29 11 31 11"/><path fill="'+i+'"  d="M21.3335,21h-2.667A1.6684,1.6684,0,0,1,17,19.3335v-6.667A1.6684,1.6684,0,0,1,18.6665,11h2.667A1.6684,1.6684,0,0,1,23,12.6665v6.667A1.6684,1.6684,0,0,1,21.3335,21ZM19,19h2V13H19Z"/><path fill="'+i+'"  d="M13.3335,21H9V19h4V17H11a2.002,2.002,0,0,1-2-2V12.6665A1.6684,1.6684,0,0,1,10.6665,11H15v2H11v2h2a2.002,2.002,0,0,1,2,2v2.3335A1.6684,1.6684,0,0,1,13.3335,21Z"/><path fill="'+i+'"  d="M5.3335,21H2.6665A1.6684,1.6684,0,0,1,1,19.3335V17H3v2H5V11H7v8.3335A1.6684,1.6684,0,0,1,5.3335,21Z"/><rect fill="'+i+'"  id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style="fill: none;" width="32" height="32"/></svg>'},FamilyTree.icon.excel=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 512 512"><path fill="#ECEFF1" d="M496,432.011H272c-8.832,0-16-7.168-16-16s0-311.168,0-320s7.168-16,16-16h224 c8.832,0,16,7.168,16,16v320C512,424.843,504.832,432.011,496,432.011z" /><path fill="'+i+'" d="M336,176.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,176.011,336,176.011z" /><path fill="'+i+'" d="M336,240.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,240.011,336,240.011z" /><path fill="'+i+'" d="M336,304.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,304.011,336,304.011z" /><path fill="'+i+'" d="M336,368.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,368.011,336,368.011z" /><path fill="'+i+'" d="M432,176.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,176.011,432,176.011z" /><path fill="'+i+'" d="M432,240.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,240.011,432,240.011z" /><path fill="'+i+'" d="M432,304.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,304.011,432,304.011z" /><path fill="'+i+'" d="M432,368.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,368.011,432,368.011z" /><path fill="'+i+'"  d="M282.208,19.691c-3.648-3.04-8.544-4.352-13.152-3.392l-256,48C5.472,65.707,0,72.299,0,80.011v352 c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.952,0.288,2.944,0.288c3.712,0,7.328-1.28,10.208-3.68 c3.68-3.04,5.792-7.584,5.792-12.32v-448C288,27.243,285.888,22.731,282.208,19.691z" /><path fill="#FAFAFA" d="M220.032,309.483l-50.592-57.824l51.168-65.792c5.44-6.976,4.16-17.024-2.784-22.464 c-6.944-5.44-16.992-4.16-22.464,2.784l-47.392,60.928l-39.936-45.632c-5.856-6.72-15.968-7.328-22.56-1.504 c-6.656,5.824-7.328,15.936-1.504,22.56l44,50.304L83.36,310.187c-5.44,6.976-4.16,17.024,2.784,22.464 c2.944,2.272,6.432,3.36,9.856,3.36c4.768,0,9.472-2.112,12.64-6.176l40.8-52.48l46.528,53.152 c3.168,3.648,7.584,5.504,12.032,5.504c3.744,0,7.488-1.312,10.528-3.968C225.184,326.219,225.856,316.107,220.032,309.483z" /></svg>'},FamilyTree.icon.edit=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 528.899 528.899"><path fill="'+i+'" d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z" /></svg>'},FamilyTree.icon.details=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 512 512"><path fill="'+i+'" d="M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008 C350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237 h333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931 l50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278 c-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239 h66.527V486.763z"/><path fill="'+i+'" d="M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z"/><path fill="'+i+'" d="M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z"/><path fill="'+i+'" d="M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z"/><path fill="'+i+'" d="M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256 c6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z"/></svg>'},FamilyTree.icon.remove=function(e,t,i){return'<svg width="'+e+'" height="'+t+'"  viewBox="0 0 900.5 900.5"><path fill="'+i+'" d="M176.415,880.5c0,11.046,8.954,20,20,20h507.67c11.046,0,20-8.954,20-20V232.487h-547.67V880.5L176.415,880.5z M562.75,342.766h75v436.029h-75V342.766z M412.75,342.766h75v436.029h-75V342.766z M262.75,342.766h75v436.029h-75V342.766z"/><path fill="'+i+'" d="M618.825,91.911V20c0-11.046-8.954-20-20-20h-297.15c-11.046,0-20,8.954-20,20v71.911v12.5v12.5H141.874 c-11.046,0-20,8.954-20,20v50.576c0,11.045,8.954,20,20,20h34.541h547.67h34.541c11.046,0,20-8.955,20-20v-50.576 c0-11.046-8.954-20-20-20H618.825v-12.5V91.911z M543.825,112.799h-187.15v-8.389v-12.5V75h187.15v16.911v12.5V112.799z"/></svg>'},FamilyTree.icon.add=function(e,t,i){return'<svg width="'+e+'" height="'+t+'"   viewBox="0 0 922 922"><path fill="'+i+'" d="M922,453V81c0-11.046-8.954-20-20-20H410c-11.045,0-20,8.954-20,20v149h318c24.812,0,45,20.187,45,45v198h149 C913.046,473.001,922,464.046,922,453z" /><path fill="'+i+'" d="M557,667.001h151c11.046,0,20-8.954,20-20v-174v-198c0-11.046-8.954-20-20-20H390H216c-11.045,0-20,8.954-20,20v149h194 h122c24.812,0,45,20.187,45,45v4V667.001z" /><path fill="'+i+'" d="M0,469v372c0,11.046,8.955,20,20,20h492c11.046,0,20-8.954,20-20V692v-12.501V667V473v-4c0-11.046-8.954-20-20-20H390H196 h-12.5H171H20C8.955,449,0,457.955,0,469z" /></svg>'},FamilyTree.icon.search=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485.213 485.213"><path fill="'+i+'" d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324 c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" /><path fill="'+i+'" d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951 C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46 c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465 C318.424,257.208,257.206,318.416,181.956,318.416z" /><path fill="'+i+'" d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z" /></svg>'},FamilyTree.icon.xml=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 550.801 550.801"><path fill="'+i+'"  d="M488.426,197.019H475.2v-63.816c0-0.401-0.063-0.799-0.116-1.205c-0.021-2.534-0.827-5.023-2.562-6.992L366.325,3.691 c-0.032-0.031-0.063-0.042-0.085-0.073c-0.633-0.707-1.371-1.298-2.151-1.804c-0.231-0.158-0.464-0.287-0.706-0.422 c-0.676-0.366-1.393-0.675-2.131-0.896c-0.2-0.053-0.38-0.135-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.87v160.542 c0,17.044,13.824,30.876,30.873,30.876h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87V227.89C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.51c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M369.531,374.53h-32.058l-2.156-55.519 c-0.644-17.434-1.298-38.518-1.298-59.611h-0.633c-4.514,18.516-10.547,39.166-16.137,56.162l-17.645,56.601h-25.618 l-15.494-56.157c-4.725-16.996-9.671-37.658-13.123-56.6h-0.43c-0.854,19.585-1.508,41.961-2.586,60.038l-2.576,55.086h-30.343 l9.26-145.035h43.677l14.207,48.421c4.517,16.774,9.041,34.847,12.258,51.843h0.654c4.081-16.77,9.038-35.923,13.774-52.064 l15.493-48.199h42.82L369.531,374.53z M69.992,374.53l41.955-73.385l-40.444-71.65h37.655l12.688,26.465 c4.316,8.828,7.533,15.928,10.99,24.092h0.422c3.438-9.242,6.23-15.694,9.893-24.092l12.274-26.465h37.434l-40.89,70.796 l43.044,74.239h-37.866l-13.134-26.257c-5.376-10.108-8.817-17.639-12.909-26.04h-0.433c-3.009,8.401-6.674,15.932-11.19,26.04 l-12.042,26.257H69.992z M453.601,523.353H97.2V419.302h356.4V523.353z M485.325,374.53h-90.608V229.495h32.933v117.497h57.682 v27.538H485.325z"/></svg>'},FamilyTree.icon.link=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 512.092 512.092"  ><path fill="'+i+'" d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859 c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318 c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6 c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581 c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0 c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0 c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z" /><path fill="'+i+'" d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387 c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877 l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768 l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0 c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893 c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365 c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597 c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403 l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z" /></svg>'},FamilyTree.icon.happy=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 512 512"><path fill="'+i+'" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/><path fill="'+i+'" d="M176,176c17.673,0,32,14.327,32,32h32c0-35.346-28.654-64-64-64c-35.346,0-64,28.654-64,64h32 C144,190.327,158.327,176,176,176z"/><path fill="'+i+'" d="M336,144c-35.346,0-64,28.654-64,64h32c0-17.673,14.327-32,32-32c17.673,0,32,14.327,32,32h32 C400,172.654,371.346,144,336,144z"/><path fill="'+i+'" d="M256,368c-53.019,0-96-42.981-96-96h-32c0,70.692,57.308,128,128,128s128-57.308,128-128h-32 C352,325.019,309.019,368,256,368z"/></svg>'},FamilyTree.icon.sad=function(e,t,i){return'<svg width="'+e+'" height="'+t+'" viewBox="0 0 512 512"><path fill="'+i+'" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/><path fill="'+i+'" d="M336,192c-17.673,0-32-14.327-32-32h-32c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64h-32 C368,177.673,353.673,192,336,192z"/><path fill="'+i+'" d="M176,224c35.346,0,64-28.654,64-64h-32c0,17.673-14.327,32-32,32s-32-14.327-32-32h-32C112,195.346,140.654,224,176,224z "/><path fill="'+i+'" d="M256,256c-70.692,0-128,57.308-128,128h32c0-53.019,42.981-96,96-96s96,42.981,96,96h32C384,313.308,326.692,256,256,256 z"/></svg>'},FamilyTree.icon.share=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512 512">\n                <path fill="${i}" d="M406,332c-29.641,0-55.761,14.581-72.167,36.755L191.99,296.124c2.355-8.027,4.01-16.346,4.01-25.124\n                    c0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307,167.424,378.589,180,406,180c49.629,0,90-40.371,90-90\n                    c0-49.629-40.371-90-90-90c-49.629,0-90,40.371-90,90c0,11.437,2.355,22.286,6.262,32.358l-148.887,89.59\n                    C156.869,193.136,132.937,181,106,181c-49.629,0-90,40.371-90,90c0,49.629,40.371,90,90,90c30.13,0,56.691-15.009,73.035-37.806\n                    l141.376,72.395C317.807,403.995,316,412.75,316,422c0,49.629,40.371,90,90,90c49.629,0,90-40.371,90-90\n                    C496,372.371,455.629,332,406,332z"/>\n                </svg>`},FamilyTree.icon.user=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 24 24">\n                <path fill="${i}" d="M12 11.796C14.7189 11.796 16.9231 9.60308 16.9231 6.89801C16.9231 4.19294 14.7189 2.00005 12 2.00005C9.28106 2.00005 7.07692 4.19294 7.07692 6.89801C7.07692 9.60308 9.28106 11.796 12 11.796Z" fill="#030D45"/>\n                <path fill="${i}" d="M14.5641 13.8369H9.4359C6.46154 13.8369 4 16.2859 4 19.245C4 19.9593 4.30769 20.5716 4.92308 20.8777C5.84615 21.3879 7.89744 22.0001 12 22.0001C16.1026 22.0001 18.1538 21.3879 19.0769 20.8777C19.5897 20.5716 20 19.9593 20 19.245C20 16.1838 17.5385 13.8369 14.5641 13.8369Z" fill="#030D45"/>\n            </svg>`},FamilyTree.icon.ft=function(e,t,i,r,a){return`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512 512"  >\n                <path fill="${i}" d="m336.061 377.731c-5.086-6.54-14.511-7.717-21.049-2.631l-44.012 34.231v-200.331c0-8.284-6.716-15-15-15s-15 6.716-15 15v200.331l-44.011-34.231c-6.538-5.086-15.962-3.908-21.049 2.631-5.086 6.539-3.908 15.963 2.631 21.049l62.429 48.556v49.664c0 8.284 6.716 15 15 15s15-6.716 15-15v-49.664l62.429-48.556c6.54-5.086 7.717-14.51 2.632-21.049z" />\n                <path fill="${i}" d="m271 497v-49.664l62.429-48.556c6.54-5.086 7.717-14.51 2.631-21.049-5.086-6.54-14.511-7.717-21.049-2.631l-44.011 34.231v-200.331c0-8.284-6.716-15-15-15v318c8.284 0 15-6.716 15-15z" />\n                <path fill="${i}" d="m320 512h-128c-8.284 0-15-6.716-15-15s6.716-15 15-15h128c8.284 0 15 6.716 15 15s-6.716 15-15 15z" />\n                <path fill="${i}" d="m320 482h-64v30h64c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />\n                <path fill="${i}" d="m400 439c-61.206 0-111-49.794-111-111s49.794-111 111-111 111 49.794 111 111-49.794 111-111 111z" />\n                <path fill="${i}" d="m112 439c-61.206 0-111-49.794-111-111s49.794-111 111-111 111 49.794 111 111-49.794 111-111 111z" />\n                <path fill="${i}" d="m256 222c-61.206 0-111-49.794-111-111s49.794-111 111-111 111 49.794 111 111-49.794 111-111 111z" />\n                <path fill="${i}" d="m367 111c0-61.206-49.794-111-111-111v222c61.206 0 111-49.794 111-111z" />\n            </svg>`},FamilyTree.icon.addUser=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512 512" >\n                <path fill="${i}" d="M300.434,257.599c-25.945,27.304-60.622,43.875-98.602,43.875c-37.979,0-72.656-16.571-98.602-43.875 c-45.617,28.738-77.826,76.818-85.092,132.736c-1.659,12.77,8.291,24.107,21.201,24.107h225.846 c0-53.371,32.011-99.402,77.838-119.914C330.812,280.165,316.452,267.69,300.434,257.599z"/>\n                <ellipse fill="${i}" cx="201.828" cy="133.868" rx="112.229" ry="133.868"/>\n                <path fill="${i}" d="M396.486,316.885c-53.794,0-97.558,43.764-97.558,97.558S342.693,512,396.486,512c53.792,0,97.557-43.764,97.557-97.558 S450.279,316.885,396.486,316.885z M435.199,431.315h-21.841v21.841c0,9.318-7.554,16.872-16.872,16.872 c-9.318,0-16.872-7.554-16.872-16.872v-21.841h-21.842c-9.318,0-16.872-7.554-16.872-16.872c0-9.319,7.554-16.872,16.872-16.872 h21.842v-21.841c0-9.318,7.554-16.872,16.872-16.872c9.318,0,16.872,7.554,16.872,16.872v21.841h21.841 c9.318,0,16.872,7.554,16.872,16.872C452.072,423.761,444.518,431.315,435.199,431.315z"/>\n            </svg>`},FamilyTree.icon.close=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512 512">\n    <path fill="${i}" d="m256 0c-141.49 0-256 114.5-256 256 0 141.49 114.5 256 256 256 141.49 0 256-114.5 256-256 0-141.49-114.5-256-256-256zm-12.284 317.397-58.121 58.132c-6.565 6.553-15.283 10.166-24.557 10.166-19.196 0-34.734-15.526-34.734-34.734 0-9.274 3.612-17.992 10.166-24.557l58.132-58.121c6.785-6.784 6.785-17.783 0-24.568l-58.132-58.121c-6.553-6.565-10.166-15.283-10.166-24.557 0-19.196 15.526-34.734 34.734-34.734 9.274 0 17.992 3.613 24.557 10.166l58.121 58.132c6.785 6.773 17.784 6.773 24.568 0l58.121-58.132c6.565-6.553 15.283-10.166 24.557-10.166 19.196 0 34.734 15.526 34.734 34.734 0 9.274-3.612 17.992-10.166 24.557l-58.132 58.121c-6.785 6.784-6.785 17.783 0 24.568l58.132 58.121c6.553 6.565 10.166 15.283 10.166 24.557 0 19.196-15.526 34.734-34.734 34.734-9.274 0-17.992-3.613-24.557-10.166l-58.121-58.132c-6.784-6.784-17.784-6.773-24.568 0z"/>\n    </svg>`},FamilyTree.icon.daughter=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512.879 512.879">\n                <path fill="${i}" d="M213.773,238.933c4.71,0,8.533-3.823,8.533-8.533v-5.615c0.546,0.529,0.922,0.964,0.964,1.024 c1.519,2.918,4.497,4.591,7.578,4.591c1.323,0,2.671-0.307,3.934-0.964c4.181-2.176,5.803-7.33,3.627-11.511 c-2.534-4.872-10.581-13.124-24.636-13.124c-14.054,0-22.101,8.252-24.636,13.124c-2.125,4.087-0.555,8.969,3.456,11.23 c4.011,2.287,9.156,0.811,11.563-3.123c0.077-0.128,0.495-0.623,1.084-1.195v5.564 C205.239,235.11,209.062,238.933,213.773,238.933z"/>\n                <path fill="${i}" d="M256.439,332.8c20.028,0,30.507-9.907,31.633-11.034c3.294-3.294,3.285-8.568,0.043-11.913 c-3.234-3.354-8.61-3.439-12.015-0.247c-0.265,0.247-6.699,6.127-19.661,6.127c-12.774,0-19.209-5.709-19.652-6.118 c-3.336-3.251-8.678-3.217-11.981,0.085c-3.337,3.337-3.337,8.73,0,12.066C225.933,322.893,236.412,332.8,256.439,332.8z"/>\n                <path fill="${i}" d="M365.666,293.547c-49.826-66.441-75.093-133.623-75.093-199.68c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533 c0,68.369,25.31,137.489,75.255,205.542c-12.228,21.623-50.483,76.058-92.322,76.058c-45.218,0-86.255-63.59-94.763-80.614 c-8.388-16.768-24.704-66.765-24.704-98.586v-25.754c20.378-0.572,73.404-3.405,121.813-17.246 c4.531-1.289,7.151-6.016,5.854-10.547c-1.289-4.531-6.008-7.159-10.547-5.854C196.254,153.387,129.114,153.6,128.439,153.6 c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,34.935,17.254,87.723,26.496,106.214c0.452,0.905,46.797,90.052,110.037,90.052 s109.585-89.148,110.037-90.052C367.919,299.588,367.603,296.132,365.666,293.547z"/>\n                <path fill="${i}" d="M316.173,392.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,0.06,0.034,0.111,0.034,0.171 c0,0.051-0.034,0.094-0.034,0.154c-0.034,5.205-1.749,50.876-51.2,50.876s-51.166-45.986-51.2-51.2v-17.067 c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v8.687c-116.028,1.638-168.917,35.9-178.765,65.417l-8.533,25.6 c-1.493,4.471,0.93,9.301,5.402,10.795C7.172,511.863,8.085,512,8.973,512c3.575,0,6.903-2.261,8.098-5.837l8.533-25.6 c6.076-18.227,48.034-52.335,163.132-53.845c3.106,24.422,19.721,59.682,67.704,59.682c53.999,0,68.267-44.425,68.267-67.917 c0-0.06-0.034-0.111-0.034-0.171c0-0.068,0.034-0.119,0.034-0.179v-17.067C324.706,396.356,320.883,392.533,316.173,392.533z"/>\n                <path fill="${i}" d="M256.695,273.067h-0.085c-4.71,0-8.491,3.823-8.491,8.533c0,4.71,3.866,8.533,8.576,8.533 c4.719,0,8.533-3.823,8.533-8.533C265.229,276.89,261.414,273.067,256.695,273.067z"/>\n                <path fill="${i}" d="M512.004,501.641l-8.533-25.591c-4.659-13.978-22.34-28.228-49.792-40.141c-4.318-1.877-9.352,0.102-11.23,4.429 c-1.869,4.318,0.111,9.353,4.437,11.221c26.266,11.401,38.178,23.219,40.388,29.884l8.533,25.6 c1.195,3.575,4.523,5.837,8.098,5.837c0.887,0,1.801-0.145,2.697-0.444C511.074,510.942,513.498,506.112,512.004,501.641z"/>\n                <path fill="${i}" d="M256.439,0c-115.558,0-179.2,63.642-179.2,179.2V256c0,66.039-24.909,141.611-25.165,142.37 c-1.485,4.471,0.93,9.301,5.402,10.795c4.48,1.476,9.301-0.93,10.795-5.402c1.058-3.191,26.035-78.908,26.035-147.763v-76.8 c0-134.008,88.175-162.133,162.133-162.133c100.454,0,162.133,94.43,162.133,162.133v17.067 c0,34.458-21.111,74.163-41.532,112.572c-18.133,34.116-35.268,66.338-35.268,92.228c0,54.11,35.14,89.873,36.634,91.366 c1.596,1.604,3.772,2.5,6.033,2.5c2.261,0,4.437-0.896,6.033-2.5c1.493-1.493,36.634-37.257,36.634-91.366 c0-53.197-17.562-72.303-19.567-74.3c-3.285-3.285-8.559-3.285-11.904-0.051c-3.354,3.234-3.439,8.61-0.265,12.015 c0.145,0.154,14.669,16.256,14.669,62.336c0,33.937-16.444,60.16-25.617,72.149c-9.19-11.947-25.583-38.05-25.583-72.149 c0-21.632,16.162-52.036,33.271-84.215c21.402-40.252,43.529-81.869,43.529-120.585V179.2C435.639,94.438,362.04,0,256.439,0z"/>\n            </svg>`},FamilyTree.icon.son=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}"  viewBox="0 0 512.002 512.002">\n                <path fill="${i}" d="M238.934,213.334c0-4.71-3.823-8.533-8.533-8.533h-34.133c-4.71,0-8.533,3.823-8.533,8.533 c0,4.71,3.823,8.533,8.533,8.533h8.533c0,4.71,3.823,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533h8.533 C235.111,221.867,238.934,218.044,238.934,213.334z"/>\n                <path fill="${i}" d="M121.601,255.19c4.565,13.466,17.178,49.98,24.371,64.358c13.551,27.11,51.977,72.986,110.029,72.986 s96.478-45.875,110.037-72.986c7.185-14.379,19.797-50.893,24.371-64.358c11.025-2.85,19.191-12.885,19.191-24.789v-34.133 c0-11.127-7.134-20.617-17.067-24.141v-44.126c0-33.69-17.741-95.923-83.354-101.931c-0.137-4.028-1.476-7.27-2.953-9.668 c-8.38-13.559-31.94-16.401-50.227-16.401c-151.842,0-153.6,143.616-153.6,145.067c0,4.71,3.814,8.525,8.525,8.525h0.009 c4.702,0,8.525-3.806,8.533-8.516c0.017-5.222,1.937-128.009,136.533-128.009c24.132,0,33.801,5.222,35.703,8.311 c0.282,0.435,0.998,1.604-0.666,4.941c-1.323,2.645-1.178,5.786,0.375,8.303c1.553,2.509,4.301,4.045,7.253,4.045 c75.656,0,76.791,81.86,76.8,85.333v51.2c0,4.71,3.823,8.533,8.533,8.533c4.702,0,8.533,3.831,8.533,8.533v34.133 c0,4.702-3.831,8.533-8.533,8.533c-3.669,0-6.929,2.347-8.098,5.837c-0.162,0.503-16.964,50.816-25.131,67.149 c-1.297,2.594-32.495,63.548-94.771,63.548s-93.466-60.954-94.763-63.548c-8.166-16.333-24.977-66.645-25.139-67.149 c-1.161-3.49-4.42-5.837-8.098-5.837c-4.702,0-8.533-3.831-8.533-8.533v-34.133c0-2.313,0.93-4.412,2.423-5.948 c3.396,7.62,10.607,14.481,23.177,14.481c3.234,0,6.187-1.826,7.637-4.719c7.535-15.061,15.283-30.575,17.399-46.652 c43.665-1.758,108.979-17.323,139.742-41.105c8.201,29.764,32.742,54.596,33.988,55.842c3.337,3.337,8.738,3.337,12.066,0 c3.337-3.336,3.337-8.73,0-12.066c-0.316-0.316-31.633-31.983-31.633-62.234c0-3.831-2.56-7.202-6.255-8.226 c-3.703-1.024-7.62,0.546-9.591,3.831c-14.549,24.243-94.746,47.061-146.287,47.061c-4.71,0-8.533,3.823-8.533,8.533 c0,13.295-6.127,27.102-13.286,41.6c-2.901-1.604-3.703-4.753-3.78-7.467c0-4.71-3.823-8.533-8.533-8.533 c-14.114,0-25.6,11.486-25.6,25.6v34.133C102.401,242.305,110.576,252.34,121.601,255.19z"/>\n                <path fill="${i}" d="M256.001,332.801c20.028,0,30.507-9.907,31.633-11.034c3.294-3.294,3.285-8.567,0.051-11.913 c-3.243-3.354-8.619-3.439-12.023-0.247c-0.265,0.247-6.699,6.127-19.661,6.127c-12.774,0-19.209-5.709-19.652-6.118 c-3.336-3.251-8.678-3.217-11.981,0.085c-3.328,3.337-3.328,8.73,0,12.066C225.503,322.893,235.982,332.801,256.001,332.801z"/>\n                <path fill="${i}" d="M264.79,281.601c0-4.71-3.814-8.533-8.533-8.533h-0.085c-4.71,0-8.491,3.823-8.491,8.533c0,4.71,3.866,8.533,8.576,8.533 C260.976,290.134,264.79,286.311,264.79,281.601z"/>\n                <path fill="${i}" d="M511.745,501.394l-8.713-34.756c-4.386-13.158-30.285-55.484-178.765-56.636v-8.934c0-4.71-3.823-8.533-8.533-8.533 s-8.533,3.823-8.533,8.533v17.067c0,0.06,0.034,0.111,0.034,0.171c0,0.051-0.034,0.094-0.034,0.154 c-0.034,5.205-1.749,50.876-51.2,50.876s-51.166-45.986-51.2-51.2v-17.067c0-4.71-3.823-8.533-8.533-8.533 s-8.533,3.823-8.533,8.533v8.619C77.168,410.556,21.786,428.203,8.79,467.26l-8.533,34.133 c-1.143,4.574,1.638,9.207,6.212,10.351c4.557,1.143,9.199-1.638,10.342-6.204l8.354-33.51 c9.916-29.739,63.309-44.595,163.132-45.338c3.098,24.431,19.712,59.708,67.704,59.708c47.983,0,64.597-35.063,67.703-59.366 c116.958,0.862,157.628,28.467,162.953,44.373l8.533,34.133c0.973,3.874,4.446,6.46,8.269,6.46c0.691,0,1.382-0.077,2.082-0.256 C510.115,510.601,512.888,505.968,511.745,501.394z"/>\n                <path fill="${i}" d="M298.668,230.401c4.71,0,8.533-3.823,8.533-8.533h8.533c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533 h-34.133c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h8.533 C290.134,226.578,293.957,230.401,298.668,230.401z"/>\n            </svg>`},FamilyTree.icon.wife=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512 512" >\n                <path fill="${i}" d="M128,307.2c4.719,0,8.533-3.823,8.533-8.533V281.6c0-4.71-3.814-8.533-8.533-8.533c-4.719,0-8.533,3.823-8.533,8.533 v17.067C119.467,303.377,123.281,307.2,128,307.2z"/>\n                <path fill="${i}" d="M384,273.067c-4.719,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533 V281.6C392.533,276.89,388.719,273.067,384,273.067z"/>\n                <path fill="${i}" d="M392.183,433.109c-0.162-0.606-0.418-1.152-0.7-1.715c-0.162-0.299-0.196-0.64-0.384-0.93 c-0.094-0.128-0.23-0.196-0.324-0.324c-0.358-0.469-0.802-0.845-1.254-1.246c-0.418-0.375-0.819-0.742-1.306-1.016 c-0.145-0.094-0.23-0.23-0.392-0.316l-34.133-17.067c-2.748-1.357-6.008-1.161-8.55,0.538l-51.209,34.133 c-2.372,1.587-3.797,4.25-3.797,7.1v30.259c-5.077,4.062-17.545,12.407-34.133,12.407c-16.427,0-29.013-8.388-34.133-12.433 v-30.234c0-2.85-1.425-5.513-3.797-7.1l-51.2-34.133c-2.543-1.698-5.803-1.894-8.55-0.538l-34.133,17.067 c-0.154,0.077-0.239,0.213-0.375,0.299c-0.512,0.29-0.939,0.674-1.374,1.075c-0.435,0.384-0.853,0.734-1.186,1.178 c-0.102,0.137-0.256,0.213-0.35,0.35c-0.205,0.307-0.239,0.657-0.401,0.99c-0.265,0.529-0.521,1.05-0.674,1.63 c-0.137,0.529-0.179,1.05-0.205,1.596c-0.034,0.538-0.06,1.058,0.008,1.604c0.068,0.597,0.265,1.143,0.461,1.707 c0.119,0.341,0.111,0.7,0.273,1.024c0.077,0.154,0.222,0.247,0.307,0.393c0.282,0.495,0.666,0.913,1.058,1.348 c0.384,0.427,0.742,0.853,1.186,1.195c0.137,0.102,0.213,0.256,0.35,0.35l51.2,34.133c1.459,0.973,3.106,1.434,4.727,1.434 c2.756,0,5.47-1.331,7.108-3.797c2.62-3.925,1.562-9.225-2.364-11.836l-38.972-25.975l16.555-8.277l43.281,28.851V486.4 c0,2.261,0.896,4.437,2.5,6.033C208.102,493.235,227.2,512,256,512s47.898-18.765,48.7-19.567c1.604-1.596,2.5-3.772,2.5-6.033 v-29.568l43.29-28.851l16.546,8.277l-38.972,25.975c-3.925,2.611-4.983,7.91-2.364,11.836c1.638,2.466,4.352,3.797,7.108,3.797 c1.621,0,3.268-0.461,4.727-1.434l51.2-34.133c0.137-0.094,0.205-0.239,0.333-0.341c0.478-0.35,0.853-0.794,1.254-1.246 c0.358-0.427,0.725-0.811,0.998-1.289c0.085-0.154,0.239-0.247,0.324-0.41c0.171-0.35,0.171-0.725,0.29-1.084 c0.179-0.538,0.367-1.05,0.435-1.613c0.077-0.58,0.051-1.126,0.009-1.698C392.354,434.108,392.32,433.613,392.183,433.109z"/>\n                <path fill="${i}" d="M57.037,409.165c0.896,0.29,1.809,0.435,2.697,0.435c3.575,0,6.903-2.261,8.09-5.837 C68.89,400.572,93.867,324.855,93.867,256v-76.8C93.867,45.193,182.033,17.067,256,17.067c25.199,0,77.636,0,85.649,11.128 c0.333,0.452,0.828,1.135,0.128,3.243c-0.956,2.842-0.341,5.965,1.604,8.235c1.946,2.278,4.932,3.362,7.885,2.876 c10.863-1.792,20.412,0.93,29.184,8.354c22.895,19.396,37.683,69.76,37.683,128.299V256c0,77.457,25.071,145.22,26.138,148.062 c1.656,4.412,6.571,6.639,10.991,5.001c4.412-1.655,6.647-6.571,5.001-10.991C460.006,397.406,435.2,330.257,435.2,256v-76.8 c0-50.415-11.486-114.014-43.716-141.321c-9.745-8.243-20.932-12.621-32.836-12.902c-0.683-2.773-1.903-5.035-3.149-6.767 C343.356,1.374,303.258,0,256,0C140.442,0,76.8,63.642,76.8,179.2V256c0,66.039-24.909,141.611-25.156,142.37 C50.15,402.842,52.565,407.672,57.037,409.165z"/>\n                <path fill="${i}" d="M91.802,426.923C19.814,444.919,1.195,498.492,0.444,500.77c-1.493,4.471,0.922,9.301,5.393,10.795 C6.733,511.864,7.646,512,8.533,512c3.576,0,6.904-2.261,8.09-5.837c0.162-0.469,16.316-46.942,79.309-62.686 c4.574-1.143,7.356-5.777,6.212-10.351C101.001,428.561,96.367,425.771,91.802,426.923z"/>\n                <path fill="${i}" d="M213.333,238.933c4.719,0,8.533-3.823,8.533-8.533v-5.615c0.546,0.529,0.922,0.964,0.964,1.024 c1.519,2.918,4.497,4.591,7.578,4.591c1.323,0,2.671-0.307,3.934-0.964c4.173-2.176,5.803-7.33,3.627-11.511 c-2.534-4.873-10.59-13.124-24.636-13.124c-14.046,0-22.101,8.252-24.636,13.124c-2.125,4.087-0.546,8.969,3.456,11.23 c3.985,2.261,9.148,0.819,11.554-3.123c0.085-0.128,0.503-0.623,1.092-1.195v5.564C204.8,235.11,208.614,238.933,213.333,238.933 z"/>\n                <path fill="${i}" d="M511.556,500.77c-0.751-2.278-19.371-55.851-91.358-73.847c-4.574-1.161-9.199,1.638-10.342,6.204 c-1.143,4.574,1.638,9.207,6.212,10.351c62.524,15.633,78.66,60.809,79.309,62.686c1.186,3.576,4.514,5.837,8.09,5.837 c0.888,0,1.801-0.137,2.697-0.435C510.635,510.071,513.05,505.242,511.556,500.77z"/>\n                <path fill="${i}" d="M256,332.8c20.028,0,30.507-9.907,31.633-11.034c3.294-3.294,3.285-8.567,0.051-11.913 c-3.251-3.345-8.61-3.439-12.015-0.247c-0.273,0.247-6.707,6.127-19.669,6.127c-12.774,0-19.208-5.709-19.652-6.118 c-3.32-3.251-8.67-3.226-11.981,0.085c-3.337,3.337-3.337,8.73,0,12.066C225.493,322.893,235.972,332.8,256,332.8z"/>\n                <path fill="${i}" d="M298.667,238.933c4.719,0,8.533-3.823,8.533-8.533v-5.615c0.546,0.529,0.922,0.964,0.964,1.024 c1.519,2.918,4.497,4.591,7.578,4.591c1.323,0,2.671-0.307,3.934-0.964c4.173-2.176,5.803-7.33,3.627-11.511 c-2.534-4.873-10.59-13.124-24.636-13.124c-14.046,0-22.101,8.252-24.636,13.124c-2.125,4.087-0.546,8.969,3.456,11.23 c3.994,2.261,9.156,0.819,11.554-3.123c0.085-0.128,0.503-0.623,1.092-1.195v5.564 C290.133,235.11,293.948,238.933,298.667,238.933z"/>\n                <path fill="${i}" d="M389.129,189.449c-8.542-6.443-30.729-26.957-30.729-44.382c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533 c0,24.678,24.354,47.249,34.014,55.228c-1.835,33.476-24.917,95.223-33.118,111.625c-7.654,15.317-48.154,63.548-86.229,63.548 s-78.575-48.23-86.229-63.548c-8.542-17.084-33.237-83.379-33.237-115.652v-25.728c33.835-0.802,157.321-6.929,218.453-52.779 c3.772-2.825,4.54-8.175,1.707-11.947c-2.825-3.772-8.175-4.54-11.947-1.707C279.561,152.994,129.51,153.6,128,153.6 c-4.719,0-8.533,3.823-8.533,8.533v34.133c0,36.625,26.871,106.965,35.029,123.281c10.385,20.77,55.834,72.986,101.504,72.986 s91.119-52.216,101.504-72.986c8.158-16.316,35.029-86.656,35.029-123.281C392.533,193.587,391.27,191.061,389.129,189.449z"/>\n            </svg>`},FamilyTree.icon.husband=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512.007 512.007" >\n                <path fill="${i}" d="M121.835,255.249c6.229,16.196,26.803,68.42,41.737,90.82l1.348,2.039c10.957,16.614,29.295,44.425,91.085,44.425 c61.79,0,80.128-27.81,91.085-44.425l1.348-2.039c14.933-22.4,35.507-74.624,41.737-90.82c11.145-2.773,19.43-12.86,19.43-24.849 v-34.133c0-11.127-7.134-20.617-17.067-24.141V128c0-33.69-17.741-95.923-83.362-101.931c-0.128-4.028-1.459-7.27-2.944-9.668 C297.844,2.85,274.292,0,256.005,0c-151.842,0-153.6,143.616-153.6,145.067c0,4.71,3.814,8.525,8.516,8.525h0.017 c4.702,0,8.516-3.806,8.533-8.508c0.017-5.231,1.937-128.017,136.533-128.017c24.132,0,33.801,5.222,35.712,8.311 c0.265,0.435,0.99,1.604-0.683,4.941c-1.323,2.645-1.178,5.786,0.375,8.303c1.562,2.509,4.301,4.045,7.262,4.045 c75.657,0,76.791,81.86,76.8,85.333v51.2c0,4.71,3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533V230.4 c0,4.702-3.823,8.533-8.533,8.533c-3.558,0-6.741,2.21-7.996,5.538c-0.247,0.674-25.446,67.644-41.771,92.126l-1.399,2.116 c-10.223,15.514-24.235,36.753-76.834,36.753c-52.599,0-66.611-21.239-76.834-36.753l-1.399-2.116 c-16.324-24.482-41.523-91.452-41.771-92.126c-1.254-3.328-4.437-5.538-7.996-5.538c-4.71,0-8.533-3.831-8.533-8.533v-34.133 c0-2.313,0.922-4.412,2.423-5.948c3.089,6.955,9.421,13.21,20.053,14.268l29.193,21.897c2.27,16.623,16.418,29.517,33.664,29.517 h17.067c18.825,0,34.133-15.309,34.133-34.133c0,18.825,15.309,34.133,34.133,34.133h17.067 c17.237,0,31.394-12.894,33.664-29.517l31.189-23.39c3.772-2.825,4.54-8.175,1.707-11.947c-2.825-3.772-8.175-4.548-11.947-1.707 l-21.751,16.316c-3.251-10.402-12.86-18.022-24.329-18.022h-34.133c-14.114,0-25.6,11.486-25.6,25.6 c0-14.114-11.486-25.6-25.6-25.6h-34.133c-11.469,0-21.077,7.62-24.328,18.022l-16.282-12.211 c6.716-16.23,12.8-40.235,14.524-57.088c26.897-0.478,104.713-3.763,139.332-25.37c7.851,30.31,33.058,55.817,34.321,57.08 c3.336,3.336,8.73,3.336,12.066,0c3.336-3.337,3.336-8.73,0-12.066c-0.316-0.316-31.633-31.983-31.633-62.234 c0-3.831-2.56-7.202-6.255-8.226c-3.661-1.016-7.629,0.546-9.591,3.831c-12.425,20.693-93.022,29.995-146.287,29.995 c-4.719,0-8.533,3.823-8.533,8.533c0,13.858-6.554,41.515-13.508,58.539c-2.722-1.638-3.49-4.693-3.558-7.339 c0-4.71-3.814-8.533-8.533-8.533c-14.114,0-25.6,11.486-25.6,25.6V230.4C102.405,242.389,110.691,252.476,121.835,255.249z M273.071,213.333c0-4.702,3.823-8.533,8.533-8.533h34.133c4.71,0,8.533,3.831,8.533,8.533v8.533 c0,9.412-7.654,17.067-17.067,17.067h-17.067c-9.412,0-17.067-7.654-17.067-17.067V213.333z M187.738,213.333 c0-4.702,3.823-8.533,8.533-8.533h34.133c4.71,0,8.533,3.831,8.533,8.533v8.533c0,9.412-7.654,17.067-17.067,17.067h-17.067 c-9.412,0-17.067-7.654-17.067-17.067V213.333z"/>\n                <path fill="${i}" d="M298.663,307.226c0.009-4.702-3.797-8.533-8.499-8.559c-0.162,0-15.42-0.171-30.345-7.629 c-2.398-1.203-5.231-1.203-7.629,0c-14.925,7.458-30.182,7.629-30.319,7.629c-4.719,0-8.533,3.823-8.533,8.533 s3.814,8.533,8.533,8.533c0.725,0,16.853-0.094,34.133-7.646c17.28,7.552,33.408,7.646,34.133,7.646 C294.84,315.733,298.646,311.927,298.663,307.226z"/>\n                <path fill="${i}" d="M247.471,324.267c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h17.067 c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H247.471z"/>\n                <path fill="${i}" d="M511.749,501.393l-8.721-34.756c-12.706-38.135-73.114-56.687-184.67-56.687c-0.879,0-1.758,0-2.645,0.009 c-4.053,0.009-7.544,2.867-8.337,6.852l-17.067,84.975c-0.93,4.625,2.065,9.122,6.682,10.052 c4.608,0.896,9.114-2.074,10.044-6.69l15.693-78.114c97.724,0.452,154.436,15.957,163.934,44.373l8.533,34.133 c0.973,3.874,4.446,6.468,8.269,6.46c0.683,0,1.382-0.077,2.074-0.256C510.11,510.601,512.892,505.976,511.749,501.393z"/>\n                <path fill="${i}" d="M204.634,416.461c-0.794-3.994-4.292-6.861-8.363-6.861c-116.386,0-174.148,17.596-187.477,57.66l-8.533,34.133 c-1.152,4.582,1.638,9.207,6.212,10.351C7.164,511.923,7.864,512,8.547,512c3.823,0,7.296-2.586,8.269-6.46l8.346-33.51 c9.95-29.841,63.667-44.689,164.122-45.338l15.693,78.447c0.913,4.617,5.367,7.629,10.035,6.699 c4.617-0.93,7.62-5.427,6.69-10.044L204.634,416.461z"/>\n                <path fill="${i}" d="M256.005,409.6c-14.114,0-25.6,11.486-25.6,25.6c0,11.11,7.159,20.489,17.067,24.021v44.245 c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533V459.23c9.907-3.541,17.067-12.919,17.067-24.03 C281.605,421.086,270.119,409.6,256.005,409.6z M256.005,443.733c-4.71,0-8.533-3.831-8.533-8.533 c0-4.702,3.823-8.533,8.533-8.533c4.71,0,8.533,3.831,8.533,8.533C264.538,439.902,260.715,443.733,256.005,443.733z"/>\n            </svg>`},FamilyTree.icon.father=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512.002 512.002" >\n                <path fill="${i}" d="M366.934,128.001c0-4.71-3.814-8.533-8.533-8.533c-2.091,0-51.2-0.683-51.2-59.733c0-4.71-3.814-8.533-8.533-8.533 s-8.533,3.823-8.533,8.533c0,75.921,67.584,76.8,68.267,76.8C363.12,136.534,366.934,132.711,366.934,128.001z"/>\n                <path fill="${i}" d="M256.001,196.268c0-14.114-11.486-25.6-25.6-25.6h-34.133c-11.46,0-21.069,7.62-24.329,18.022l-21.751-16.316 c-3.772-2.825-9.114-2.048-11.947,1.707c-2.825,3.772-2.065,9.122,1.707,11.947l31.189,23.39 c2.278,16.623,16.418,29.517,33.664,29.517h17.067c18.825,0,34.133-15.309,34.133-34.133c0,18.825,15.309,34.133,34.133,34.133 h17.067c17.237,0,31.394-12.894,33.664-29.517l31.189-23.39c3.772-2.825,4.54-8.175,1.707-11.947 c-2.825-3.772-8.175-4.548-11.947-1.707l-21.751,16.316c-3.251-10.402-12.86-18.022-24.329-18.022h-34.133 C267.487,170.668,256.001,182.153,256.001,196.268z M238.934,204.801c0,9.412-7.654,17.067-17.067,17.067h-17.067 c-9.412,0-17.067-7.654-17.067-17.067v-8.533c0-4.702,3.831-8.533,8.533-8.533h34.133c4.702,0,8.533,3.831,8.533,8.533V204.801z M324.268,196.268v8.533c0,9.412-7.654,17.067-17.067,17.067h-17.067c-9.412,0-17.067-7.654-17.067-17.067v-8.533 c0-4.702,3.823-8.533,8.533-8.533h34.133C320.445,187.734,324.268,191.566,324.268,196.268z"/>\n                <path fill="${i}" d="M298.659,307.226c0.009-4.702-3.797-8.533-8.499-8.559c-0.162,0-15.42-0.171-30.345-7.629 c-2.398-1.203-5.231-1.203-7.629,0c-14.925,7.458-30.191,7.629-30.319,7.629c-4.71,0-8.533,3.823-8.533,8.533 s3.823,8.533,8.533,8.533c0.725,0,16.845-0.094,34.133-7.646c17.28,7.552,33.408,7.646,34.133,7.646 C294.836,315.734,298.642,311.928,298.659,307.226z"/>\n                <path fill="${i}" d="M120.986,237.953c4.378,18.611,18.91,76.877,34.048,99.584c10.974,16.452,36.668,54.997,100.966,54.997 s89.993-38.545,100.966-54.997c15.138-22.707,29.67-80.973,34.048-99.584c10.718-3.055,18.586-12.937,18.586-24.619v-34.133 c0-11.127-7.134-20.617-17.067-24.141v-44.126c0-1.109-1.562-110.933-136.533-110.933c-151.842,0-153.6,126.72-153.6,128 c0,4.702,3.806,8.516,8.516,8.525h0.017c4.693,0,8.516-3.806,8.533-8.499c0.017-4.54,2.048-110.959,136.533-110.959 c117.581,0,119.441,90.061,119.467,93.867v51.2c0,4.71,3.814,8.533,8.533,8.533c4.71,0,8.533,3.831,8.533,8.533v34.133 c0,4.702-3.823,8.533-8.533,8.533c-4.002,0-7.458,2.782-8.337,6.682c-0.162,0.751-16.896,75.52-32.896,99.516 c-10.257,15.386-31.599,47.403-86.767,47.403s-76.51-32.017-86.767-47.403c-15.992-23.979-32.734-98.765-32.905-99.516 c-0.87-3.9-4.326-6.682-8.329-6.682c-4.702,0-8.533-3.831-8.533-8.533v-34.133c0-4.702,3.831-8.533,8.533-8.533 c1.323,0,2.637-0.307,3.814-0.896c2.978-1.493,72.986-37.333,72.986-110.037c0-4.71-3.823-8.533-8.533-8.533 s-8.533,3.823-8.533,8.533c0,56.678-52.523,88.636-62.08,93.978c-13.022,1.186-23.253,12.169-23.253,25.489v34.133 C102.401,225.016,110.269,234.898,120.986,237.953z"/>\n                <path fill="${i}" d="M196.097,416.462c-0.794-3.994-4.292-6.861-8.363-6.861c-140.399,0-168.892,27.409-178.944,57.66l-8.533,34.133 c-1.143,4.582,1.638,9.207,6.204,10.351c0.7,0.179,1.391,0.256,2.082,0.256c3.823,0,7.296-2.586,8.269-6.46l8.354-33.51 c7.339-22.025,31.718-44.527,155.58-45.338l15.693,78.447c0.913,4.617,5.393,7.603,10.035,6.699 c4.625-0.93,7.62-5.427,6.69-10.044L196.097,416.462z"/>\n                <path fill="${i}" d="M511.745,501.394l-8.721-34.756c-7.117-21.342-39.689-57.216-178.782-56.678c-4.062,0.009-7.544,2.867-8.337,6.852 l-17.067,84.975c-0.93,4.625,2.065,9.122,6.682,10.052c4.591,0.896,9.114-2.074,10.044-6.69l15.693-78.114 c103.714,0.674,148.412,23.484,155.401,44.373l8.533,34.133c0.973,3.874,4.446,6.468,8.269,6.46c0.683,0,1.382-0.077,2.074-0.256 C510.106,510.601,512.888,505.976,511.745,501.394z"/>\n                <path fill="${i}" d="M256.257,426.668h-0.085c-4.71,0-8.491,3.823-8.491,8.533s3.866,8.533,8.576,8.533c4.71,0,8.533-3.823,8.533-8.533 S260.967,426.668,256.257,426.668z"/>\n                <path fill="${i}" d="M256.257,494.934h-0.085c-4.71,0-8.491,3.823-8.491,8.533s3.866,8.533,8.576,8.533c4.71,0,8.533-3.823,8.533-8.533 S260.967,494.934,256.257,494.934z"/>\n                <path fill="${i}" d="M247.468,324.268c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h17.067 c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H247.468z"/>\n                <path fill="${i}" d="M256.257,460.801h-0.085c-4.71,0-8.491,3.823-8.491,8.533c0,4.71,3.866,8.533,8.576,8.533 c4.71,0,8.533-3.823,8.533-8.533C264.79,464.624,260.967,460.801,256.257,460.801z"/>\n            </svg>`},FamilyTree.icon.mother=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512.011 512.011" >\n                <path fill="${i}" d="M299.355,445.356c-1.621,1.536-2.56,3.755-2.56,5.973c0,2.304,0.939,4.437,2.56,6.059 c1.536,1.621,3.755,2.475,5.973,2.475c2.304,0,4.523-0.853,6.059-2.475c1.621-1.536,2.475-3.755,2.475-6.059 c0-2.219-0.853-4.437-2.475-5.973C308.23,442.113,302.512,442.199,299.355,445.356z"/>\n                <path fill="${i}" d="M276.23,458.668c-1.621,1.621-2.475,3.755-2.475,6.059c0,2.219,0.939,4.437,2.475,5.973 c1.621,1.621,3.84,2.56,6.059,2.56c2.219,0,4.437-0.939,5.973-2.56c1.621-1.536,2.56-3.755,2.56-5.973 c0-2.304-0.939-4.437-2.56-6.059C285.104,455.511,279.387,455.511,276.23,458.668z"/>\n                <path fill="${i}" d="M392.539,196.268c0-2.68-1.263-5.205-3.405-6.818c-8.55-6.443-30.729-26.957-30.729-44.382 c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533c0,24.678,24.354,47.249,34.014,55.228 c-1.835,33.476-24.917,95.223-33.118,111.625c-7.654,15.317-48.154,63.548-86.229,63.548s-78.575-48.23-86.229-63.548 c-8.542-17.084-33.237-83.379-33.237-115.652V170.54c33.835-0.802,157.321-6.929,218.453-52.779 c3.772-2.825,4.531-8.175,1.707-11.947c-2.825-3.763-8.166-4.531-11.947-1.707c-65.186,48.887-215.236,49.493-216.747,49.493 c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,36.625,26.871,106.965,35.029,123.281c10.394,20.77,55.834,72.986,101.504,72.986 s91.11-52.215,101.504-72.986C365.668,303.233,392.539,232.893,392.539,196.268z"/>\n                <path fill="${i}" d="M249.947,463.276c-1.536,1.621-2.475,3.84-2.475,6.059c0,2.219,0.939,4.437,2.475,6.059 c1.621,1.536,3.84,2.475,6.059,2.475s4.437-0.939,6.059-2.475c1.536-1.621,2.475-3.84,2.475-6.059 c0-2.219-0.939-4.437-2.475-6.059C258.907,460.119,253.104,460.119,249.947,463.276z"/>\n                <path fill="${i}" d="M34.139,230.401c0,18.85,6.75,36.659,19.098,50.688c-1.348,5.76-2.031,11.648-2.031,17.579 c0,42.342,34.458,76.8,76.8,76.8c6.494,0,12.954-0.819,19.191-2.432c4.565-1.178,7.305-5.828,6.127-10.394 c-1.178-4.565-5.828-7.305-10.394-6.127c-4.847,1.254-9.865,1.886-14.925,1.886c-32.939,0-59.733-26.795-59.733-59.733 c0-5.922,0.879-11.793,2.603-17.459c0.922-3.021,0.102-6.298-2.133-8.525c-11.307-11.298-17.536-26.308-17.536-42.283 c0-19.251,9.421-37.453,25.199-48.674c3.78-2.688,4.719-7.893,2.116-11.742c-6.707-9.89-10.249-21.461-10.249-33.451 c0-28.843,20.591-53.53,48.947-58.701c2.432-0.452,4.557-1.929,5.811-4.053c18.987-32.137,40.892-56.713,133.888-56.713 c71.714,0,128.947,23.484,142.413,58.436c0.888,2.304,2.731,4.105,5.052,4.949c23.535,8.559,39.356,31.095,39.356,56.081 c0,11.989-3.541,23.561-10.249,33.451c-2.603,3.849-1.664,9.054,2.116,11.742c15.778,11.221,25.199,29.423,25.199,48.674 c0,15.974-6.229,30.984-17.536,42.283c-2.236,2.227-3.055,5.504-2.133,8.525c1.724,5.666,2.603,11.537,2.603,17.459 c0,32.939-26.795,59.733-59.733,59.733c-5.018,0-10.001-0.623-14.814-1.852c-4.574-1.186-9.207,1.579-10.377,6.144 c-1.169,4.574,1.587,9.216,6.153,10.385c6.195,1.587,12.595,2.389,19.038,2.389c42.342,0,76.8-34.458,76.8-76.8 c0-5.931-0.683-11.819-2.031-17.579c12.348-14.029,19.098-31.838,19.098-50.688c0-22.11-9.643-43.128-26.138-57.643 c5.956-11.102,9.071-23.475,9.071-36.224c0-30.865-18.748-58.82-47.044-70.733C395.475,25.704,334.598,0.001,256.919,0.001 c-90.172,0-121.984,21.7-146.62,61.85c-34.475,8.115-59.093,38.921-59.093,74.684c0,12.749,3.115,25.122,9.071,36.224 C43.782,187.274,34.139,208.291,34.139,230.401z"/>\n                <path fill="${i}" d="M316.507,424.876c-1.621,1.621-2.475,3.84-2.475,6.059c0,2.304,0.853,4.437,2.475,6.059 c1.621,1.536,3.755,2.475,5.973,2.475c2.304,0,4.437-0.939,6.059-2.475c1.621-1.621,2.475-3.755,2.475-6.059 c0-2.219-0.853-4.437-2.475-6.059C325.382,421.719,319.664,421.719,316.507,424.876z"/>\n                <path fill="${i}" d="M223.664,458.668c-1.536,1.621-2.475,3.755-2.475,6.059c0,2.219,0.939,4.437,2.475,6.059 c1.621,1.536,3.84,2.475,6.059,2.475c2.304,0,4.437-0.939,6.059-2.475c1.621-1.621,2.475-3.84,2.475-6.059 c0-2.219-0.853-4.437-2.475-6.059C232.624,455.511,226.907,455.511,223.664,458.668z"/>\n                <path fill="${i}" d="M337.67,411.905c1.621-1.621,2.475-3.755,2.475-6.059c0-2.219-0.853-4.437-2.475-6.059 c-3.157-3.157-8.875-3.072-12.032,0.085c-1.621,1.536-2.56,3.755-2.56,5.973c0,2.304,0.939,4.437,2.56,6.059 c1.536,1.621,3.755,2.475,5.973,2.475C333.915,414.38,336.048,413.527,337.67,411.905z"/>\n                <path fill="${i}" d="M213.339,238.935c4.71,0,8.533-3.823,8.533-8.533v-5.615c0.546,0.529,0.922,0.964,0.964,1.024 c1.519,2.918,4.497,4.591,7.578,4.591c1.323,0,2.671-0.307,3.934-0.964c4.181-2.176,5.803-7.33,3.627-11.511 c-2.534-4.873-10.581-13.124-24.636-13.124c-14.054,0-22.101,8.252-24.636,13.124c-2.125,4.087-0.555,8.969,3.456,11.23 c4.011,2.287,9.156,0.811,11.563-3.123c0.077-0.128,0.495-0.623,1.084-1.195v5.564 C204.806,235.112,208.629,238.935,213.339,238.935z"/>\n                <path fill="${i}" d="M256.006,332.801c20.028,0,30.507-9.907,31.633-11.034c3.294-3.294,3.285-8.567,0.043-11.913 c-3.234-3.345-8.61-3.439-12.015-0.247c-0.265,0.247-6.699,6.127-19.661,6.127c-12.774,0-19.208-5.709-19.652-6.118 c-3.336-3.251-8.678-3.217-11.981,0.085c-3.337,3.336-3.337,8.73,0,12.066C225.499,322.894,235.978,332.801,256.006,332.801z"/>\n                <path fill="${i}" d="M298.672,238.935c4.71,0,8.533-3.823,8.533-8.533v-5.615c0.546,0.529,0.922,0.964,0.964,1.024 c1.519,2.918,4.497,4.591,7.578,4.591c1.323,0,2.671-0.307,3.934-0.964c4.181-2.176,5.803-7.33,3.627-11.511 c-2.534-4.873-10.581-13.124-24.636-13.124s-22.101,8.252-24.636,13.124c-2.125,4.087-0.555,8.969,3.456,11.23 c4.011,2.287,9.165,0.811,11.563-3.123c0.077-0.128,0.495-0.623,1.084-1.195v5.564 C290.139,235.112,293.962,238.935,298.672,238.935z"/>\n                <path fill="${i}" d="M511.571,500.771l-8.533-25.6c-8.883-26.658-62.464-65.212-136.098-65.212c-3.482,0-6.613,2.116-7.919,5.333 c-0.316,0.802-33.015,79.642-103.014,79.642c-69.99,0-102.69-79.181-103.014-79.983c-1.306-3.226-4.437-5.35-7.919-5.35 c-106.001,0-130.97,50.185-136.098,65.57l-8.533,25.6c-1.493,4.471,0.93,9.301,5.402,10.795c4.48,1.502,9.301-0.93,10.795-5.402 l8.533-25.6c8.465-25.412,42.974-52.514,114.381-53.845c9.293,19.703,45.577,85.282,116.454,85.282 c70.827,0,107.102-65.229,116.437-84.898c64.051,1.835,108.339,35.294,114.398,53.461l8.533,25.6 c1.195,3.576,4.523,5.837,8.098,5.837c0.887,0,1.801-0.137,2.697-0.435C510.64,510.073,513.064,505.243,511.571,500.771z"/>\n                <path fill="${i}" d="M375.472,281.601v17.067c0,4.71,3.823,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533v-17.067 c0-4.71-3.823-8.533-8.533-8.533C379.295,273.068,375.472,276.891,375.472,281.601z"/>\n                <path fill="${i}" d="M188.934,405.847c0-2.219-0.939-4.437-2.56-5.973c-3.157-3.243-8.875-3.243-12.032,0 c-1.621,1.536-2.475,3.755-2.475,5.973c0,2.304,0.853,4.437,2.475,6.059s3.755,2.475,6.059,2.475 c2.219,0,4.437-0.853,5.973-2.475C187.995,410.284,188.934,408.151,188.934,405.847z"/>\n                <path fill="${i}" d="M189.531,439.468c2.219,0,4.437-0.939,5.973-2.475c1.621-1.621,2.475-3.755,2.475-6.059c0-2.219-0.853-4.437-2.475-6.059 c-3.157-3.157-8.875-3.157-12.032,0c-1.621,1.621-2.475,3.84-2.475,6.059c0,2.304,0.853,4.437,2.475,6.059 C185.008,438.529,187.227,439.468,189.531,439.468z"/>\n                <path fill="${i}" d="M200.624,445.356c-1.621,1.621-2.56,3.755-2.56,6.059c0,2.219,0.939,4.437,2.56,5.973c1.621,1.621,3.755,2.56,6.059,2.56 c2.219,0,4.437-0.939,5.973-2.56c1.621-1.536,2.475-3.755,2.475-5.973c0-2.304-0.853-4.523-2.475-6.059 C209.499,442.199,203.782,442.199,200.624,445.356z"/>\n                <path fill="${i}" d="M119.472,281.601v17.067c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-17.067 c0-4.71-3.823-8.533-8.533-8.533S119.472,276.891,119.472,281.601z"/>\n            </svg>`},FamilyTree.icon.teddy=function(e,t,i,r,a){return FamilyTree.isNEU(r)&&(r=0),FamilyTree.isNEU(a)&&(a=0),`<svg width="${e}" height="${t}" x="${r}" y="${a}" viewBox="0 0 512 512">\n                <path fill="${i}" d="M234.513,246.613c9.378-1.929,16.555-9.02,21.487-15.863c4.932,6.844,12.109,13.935,21.487,15.863 c1.459,0.299,3.089,0.486,4.873,0.486c6.118,0,13.978-2.304,22.34-10.667c3.337-3.337,3.337-8.73,0-12.066s-8.73-3.337-12.066,0 c-4.361,4.369-8.337,6.212-11.699,5.53c-6.912-1.408-13.611-12.203-16.401-18.364c9.523-3.866,17.067-13.577,17.067-23.799 c0-9.353-9.566-14.933-25.6-14.933c-16.026,0-25.6,5.581-25.6,14.933c0,10.223,7.535,19.934,17.067,23.799 c-2.807,6.178-9.498,16.956-16.401,18.364c-3.405,0.666-7.339-1.178-11.699-5.53c-3.336-3.337-8.73-3.337-12.066,0 s-3.337,8.73,0,12.066C218.104,247.236,228.062,247.91,234.513,246.613z M263.748,190.669c-1.502,2.944-4.873,5.598-7.748,5.598\ts-6.246-2.654-7.748-5.598C251.793,189.833,260.207,189.833,263.748,190.669z"/>\n                <path fill="${i}" d="M390.033,53.7c1.621,1.613,2.5,3.755,2.5,6.033s-0.879,4.42-2.5,6.025c-3.337,3.337-3.337,8.738,0,12.075 c1.664,1.664,3.849,2.5,6.033,2.5s4.369-0.836,6.033-2.492c4.838-4.838,7.501-11.273,7.501-18.108s-2.662-13.269-7.501-18.099 c-9.984-9.984-26.214-9.984-36.198,0c-3.337,3.328-3.337,8.73,0,12.066s8.73,3.337,12.066,0 C381.303,50.372,386.697,50.372,390.033,53.7z"/>\n                <path fill="${i}" d="M311.467,136.533c7.057,0,12.8-5.743,12.8-12.8c0-7.057-5.743-12.8-12.8-12.8s-12.8,5.743-12.8,12.8 C298.667,130.79,304.41,136.533,311.467,136.533z"/>\n                <path fill="${i}" d="M200.533,136.533c7.057,0,12.8-5.743,12.8-12.8c0-7.057-5.743-12.8-12.8-12.8s-12.8,5.743-12.8,12.8 C187.733,130.79,193.476,136.533,200.533,136.533z"/>\n                <path fill="${i}" d="M115.934,80.333c2.185,0,4.369-0.836,6.042-2.5c3.328-3.337,3.328-8.738-0.009-12.075c-1.613-1.604-2.5-3.746-2.5-6.025 s0.887-4.42,2.509-6.033c3.209-3.226,8.841-3.226,12.058,0c3.328,3.337,8.738,3.328,12.066,0 c3.337-3.328,3.337-8.738,0.009-12.066c-9.677-9.677-26.539-9.668-36.207-0.009c-4.838,4.838-7.501,11.273-7.501,18.108 s2.662,13.269,7.501,18.108C111.565,79.497,113.749,80.333,115.934,80.333z"/>\n                <path fill="${i}" d="M498.552,286.191c-28.262-23.945-91.742-14.2-98.884-13.005c-4.651,0.768-7.791,5.171-7.014,9.813 c0.777,4.651,5.171,7.799,9.813,7.014c17.246-2.867,66.133-6.827,85.052,9.199c5.06,4.284,7.415,9.54,7.415,16.521 c0,3.977-1.476,6.946-4.779,9.626c-24.098,19.567-114.33,5.982-147.063-0.913c-3.703-0.776-7.441,0.981-9.242,4.275 c-1.801,3.311-1.212,7.424,1.434,10.095c0.12,0.119,8.499,8.755,12.493,19.951c-2.125-0.222-4.267-0.367-6.443-0.367 c-37.641,0-68.267,34.458-68.267,76.8c0,7.629,1.024,14.993,2.884,21.956c-3.823,1.715-10.197,3.644-19.951,3.644 c-10.052,0-16.367-2.082-19.908-3.814c1.826-6.912,2.842-14.217,2.842-21.786c0-42.342-30.626-76.8-68.267-76.8 c-2.176,0-4.318,0.145-6.443,0.367c3.994-11.196,12.373-19.831,12.476-19.934c2.671-2.671,3.268-6.775,1.468-10.095 c-1.792-3.319-5.521-5.069-9.259-4.292c-32.725,6.895-122.974,20.48-147.063,0.913c-3.302-2.68-4.779-5.649-4.779-9.626 c0-6.98,2.355-12.228,7.407-16.512c18.867-15.991,67.806-12.066,85.06-9.208c4.651,0.794,9.045-2.364,9.813-7.014 c0.776-4.651-2.364-9.045-7.006-9.813c-7.151-1.195-70.613-10.957-98.884,13.005C4.651,293.649,0,303.863,0,315.733 c0,9.079,3.831,16.998,11.093,22.886c27.179,22.05,102.818,12.783,140.535,6.426c-2.825,5.47-5.188,11.896-6.11,18.825 c-25.216,11.29-43.119,38.98-43.119,71.33c0,42.342,30.626,76.8,68.267,76.8c25.446,0,47.642-15.778,59.383-39.057 c5.743,2.56,14.174,4.924,25.95,4.924c11.674,0,20.164-2.287,26.035-4.77C293.794,496.29,315.938,512,341.333,512 c37.641,0,68.267-34.458,68.267-76.8c0-32.35-17.903-60.041-43.119-71.33c-0.922-6.929-3.277-13.355-6.101-18.825 c37.717,6.357,113.365,15.633,140.527-6.426c7.262-5.888,11.093-13.807,11.093-22.886 C512,303.863,507.349,293.649,498.552,286.191z M170.667,494.933c-28.237,0-51.2-26.795-51.2-59.733s22.963-59.733,51.2-59.733 s51.2,26.795,51.2,59.733S198.904,494.933,170.667,494.933z M392.533,435.2c0,32.939-22.963,59.733-51.2,59.733 c-20.983,0-39.04-14.814-46.942-35.942c-0.145-0.614-0.324-1.186-0.606-1.766c-2.338-6.818-3.652-14.242-3.652-22.025 c0-32.939,22.963-59.733,51.2-59.733C369.57,375.467,392.533,402.261,392.533,435.2z"/>\n                <path fill="${i}" d="M307.2,443.733c0,18.825,15.309,34.133,34.133,34.133c18.825,0,34.133-15.309,34.133-34.133 c0-18.825-15.309-34.133-34.133-34.133C322.509,409.6,307.2,424.909,307.2,443.733z M358.4,443.733 c0,9.412-7.654,17.067-17.067,17.067c-9.404,0-17.067-7.654-17.067-17.067c0-9.412,7.663-17.067,17.067-17.067 C350.746,426.667,358.4,434.321,358.4,443.733z"/>\n                <path fill="${i}" d="M115.541,118.161c-8.619,21.709-13.141,45.525-13.141,69.572c0,67.849,52.762,136.533,153.6,136.533 s153.6-68.685,153.6-136.533c0-24.491-4.412-47.846-13.107-69.581c26.957-5.76,47.24-29.764,47.24-58.419 C443.733,26.795,416.93,0,384,0c-24.67,0-46.14,14.916-55.108,36.745C307.115,23.859,282.368,17.067,256,17.067 c-26.615,0-51.2,6.716-73.259,19.925C174.08,14.754,153.088,0,128,0C95.061,0,68.267,26.795,68.267,59.733 C68.267,88.397,88.559,112.41,115.541,118.161z M128,17.067c19.226,0,35.021,12.177,40.115,30.054 c-11.085,8.61-21.163,18.816-29.901,30.592c-2.807,3.789-2.014,9.131,1.775,11.938c3.789,2.816,9.139,2.022,11.938-1.766 c8.9-12.006,19.26-22.281,30.788-30.507C204.288,41.95,228.949,34.133,256,34.133c41.429,0,78.396,19.098,104.098,53.786 c1.681,2.253,4.25,3.447,6.869,3.447c1.766,0,3.55-0.546,5.077-1.681c3.78-2.799,4.574-8.149,1.775-11.938 c-8.969-12.092-19.157-22.485-30.345-31.104c5.427-17.374,21.632-29.577,40.525-29.577c23.526,0,42.667,19.14,42.667,42.667 S407.526,102.4,384,102.4c-2.935,0-5.658,1.502-7.228,3.985c-1.553,2.483-1.732,5.589-0.461,8.243 c10.761,22.443,16.222,47.044,16.222,73.105C392.533,247.1,345.634,307.2,256,307.2s-136.533-60.1-136.533-119.467 c0-25.617,5.615-50.901,16.23-73.122c1.263-2.637,1.084-5.751-0.478-8.226c-1.562-2.483-4.292-3.985-7.219-3.985 c-23.526,0-42.667-19.14-42.667-42.667S104.474,17.067,128,17.067z"/>\n                <path fill="${i}" d="M256,290.133c47.053,0,85.333-30.626,85.333-68.267c0-36.258-36.489-76.8-85.333-76.8s-85.333,40.542-85.333,76.8 C170.667,259.507,208.947,290.133,256,290.133z M256,162.133c38.451,0,68.267,32.111,68.267,59.733 c0,28.237-30.626,51.2-68.267,51.2c-37.641,0-68.267-22.963-68.267-51.2C187.733,194.244,217.557,162.133,256,162.133z"/>\n                <path fill="${i}" d="M170.667,409.6c-18.825,0-34.133,15.309-34.133,34.133c0,18.825,15.309,34.133,34.133,34.133 s34.133-15.309,34.133-34.133C204.8,424.909,189.491,409.6,170.667,409.6z M170.667,460.8c-9.412,0-17.067-7.654-17.067-17.067 c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067C187.733,453.146,180.079,460.8,170.667,460.8z"/>\n            </svg>`},FamilyTree.prototype.exportPDFProfile=function(e,t){e=this._defaultExportProfileOptions(e,"pdf"),this._exportProfile(e,t)},FamilyTree.prototype.exportPDFPreview=function(e){FamilyTree.pdfPrevUI.show(this,e)},FamilyTree.prototype.exportPNGProfile=function(e,t){e=this._defaultExportProfileOptions(e,"png"),this._exportProfile(e,t)},FamilyTree.prototype.shareProfile=function(e){var t;"object"==typeof e?e=(t=e).focusId:t=this.editUI.content(e,!0,!0,"100%",!0);var i=new URL(window.location.href);i.searchParams.append("nodeId",e);var r={title:t.title,text:t.shareText,url:i.href};try{navigator.share(r)}catch(e){console.error("error: "+e)}},FamilyTree.prototype.exportPDF=function(e,t){e=this._defaultExportOptions(e,"pdf"),this._export(e,t)},FamilyTree.prototype.exportPNG=function(e,t){e=this._defaultExportOptions(e,"png"),this._export(e,t)},FamilyTree.prototype.exportSVG=function(e,t){e=this._defaultExportOptions(e,"svg"),this._export(e,t)},FamilyTree.prototype._defaultExportOptions=function(e,t){return null==e&&(e={}),"svg"==t?(e.ext="svg",e.mime="image/svg+xml"):"pdf"==t?(e.mime="application/pdf",e.ext="pdf"):"png"==t&&(e.mime="image/png",e.ext="png"),null==e.margin&&(e.margin=[50,40,50,40]),null==e.padding&&(e.padding=0),null==e.landscape&&(e.landscape=!1),null==e.filename&&(e.filename="FamilyTree."+e.ext),null==e.scale&&(e.scale="fit"),null==e.format&&(e.format="fit"),null==e.header&&(e.header=""),"pdf"==t&&null==e.footer?e.footer="Page {current-page} of {total-pages}":null==e.footer&&(e.footer=""),null==e.openInNewTab&&(e.openInNewTab=!1),null==e.mode&&(e.mode="bft-"+this.config.mode),e},FamilyTree.prototype._export=function(e,t){var i=this,r={id:e.nodeId,expandChildren:e.expandChildren};e.margin&&e.margin[0]<2&&(e.margin[0]=2),e.margin&&e.margin[1]<2&&(e.margin[1]=2),e.margin&&e.margin[2]<2&&(e.margin[2]=2),e.margin&&e.margin[3]<2&&(e.margin[3]=2),this._draw(!1,FamilyTree.action.exporting,r,(function(r){var a=document.createElement("div");if(a.innerHTML=r,e.padding>0){var n=a.querySelector("svg"),l=FamilyTree._getViewBox(n);l[0]-=e.padding,l[1]-=e.padding,l[2]+=2*e.padding,l[3]+=2*e.padding,n.setAttribute("viewBox",l.join()),n.setAttribute("width",l[2]),n.setAttribute("height",l[3])}if("svg"==e.ext)if(t)t(e,a.innerHTML);else{(n=a.querySelector("svg")).classList.add("bft-"+i.config.mode);var o={content:a.innerHTML,options:e,styles:""},s=FamilyTree.events.publish("exportstart",[i,o]),d=i.element.querySelector("[data-bft-styles]");if(d&&(o.styles+=d.outerHTML),o.styles&&(a.childNodes[0].insertAdjacentHTML("afterbegin",o.styles),o.content=a.innerHTML),!1===s)return!1;if(!1===(s=FamilyTree.events.publish("exportend",[i,o])))return!1;FamilyTree._downloadFile(e.mime,o.content,o.options.filename,o.options.openInNewTab)}else i._pages(e,a.querySelector("svg"),(function(r){var n={content:a.innerHTML,options:e,pages:r,styles:""},l=FamilyTree.events.publish("exportstart",[i,n]),o=i.element.querySelector("[data-bft-styles]");if(o&&(n.styles+=o.outerHTML),!1===l)return!1;t||FamilyTree.loading.show(i),t?t(i,n,a.querySelector("svg")):(n=JSON.stringify(n),FamilyTree._ajax(i.config.exportUrl+"/v3","POST",n,"arraybuffer",(function(t){var r=FamilyTree.events.publish("exportend",[i,t]);if(FamilyTree.loading.hide(i),!1===r)return!1;FamilyTree._downloadFile(e.mime,t,e.filename,e.openInNewTab)})))}))}))},FamilyTree.prototype.exportCSV=function(e){e||(e="FamilyTree.csv");var t={ext:"csv",filename:e,nodes:JSON.parse(JSON.stringify(this.config.nodes))};if(!1===FamilyTree.events.publish("exportstart",[this,t]))return!1;var i=FamilyTree._json2csv(t.nodes),r={ext:t.ext,filename:t.filename,nodes:t.nodes,content:i};if(!1===FamilyTree.events.publish("exportend",[this,r]))return!1;FamilyTree._downloadFile("text/csv;charset=utf-8;","\ufeff"+r.content,r.filename,r.openInNewTab)},FamilyTree.prototype.exportXML=function(e){e||(e="FamilyTree.xml");var t={ext:"xml",filename:e,nodes:JSON.parse(JSON.stringify(this.config.nodes))};if(!1===FamilyTree.events.publish("exportstart",[this,t]))return!1;var i=FamilyTree._json2xml(t.nodes),r={ext:t.ext,filename:t.filename,nodes:t.nodes,content:i};if(!1===FamilyTree.events.publish("exportend",[this,r]))return!1;FamilyTree._downloadFile("application/xml",r.content,r.filename,r.openInNewTab)},FamilyTree.prototype.exportJSON=function(e){e||(e="FamilyTree.json");var t={ext:"json",filename:e,nodes:JSON.parse(JSON.stringify(this.config.nodes))};if(!1===FamilyTree.events.publish("exportstart",[this,t]))return!1;var i={ext:t.ext,filename:t.filename,nodes:t.nodes,content:JSON.stringify(t.nodes)};if(!1===FamilyTree.events.publish("exportend",[this,i]))return!1;FamilyTree._downloadFile("application/json",i.content,i.filename,i.openInNewTab)},FamilyTree.prototype._pages=function(e,t,i){"A5"==e.format&&"fit"!=e.scale||"A4"==e.format&&"fit"!=e.scale||"A3"==e.format&&"fit"!=e.scale||"A2"==e.format&&"fit"!=e.scale||"A1"==e.format&&"fit"!=e.scale||"Letter"==e.format&&"fit"!=e.scale||"Legal"==e.format&&"fit"!=e.scale?i(this._pagesA100(e,t,e.scale)):"A5"==e.format&&"fit"==e.scale||"A4"==e.format&&"fit"==e.scale||"A3"==e.format&&"fit"==e.scale||"A2"==e.format&&"fit"==e.scale||"A1"==e.format&&"fit"==e.scale||"Letter"==e.format&&"fit"==e.scale||"Legal"==e.format&&"fit"==e.scale?i(this._pagesAfit(e,t)):"fit"==e.format&&i(this._pagesFit(e,t))},FamilyTree.prototype._pagesFit=function(e,t){var i=t.getAttribute("width"),r=t.getAttribute("height"),a=FamilyTree._getViewBox(t),n={w:parseFloat(i),h:parseFloat(r)};return[{vb:a,size:{w:n.w+(e.margin[1]+e.margin[3]),h:n.h+(e.margin[0]+e.margin[2])},innerSize:n}]},FamilyTree.prototype._pagesAfit=function(e,t){var i=t.getAttribute("width"),r=0,a=0;switch(e.format){case"A5":r=FamilyTree.A5w,a=FamilyTree.A5h;break;case"A4":r=FamilyTree.A4w,a=FamilyTree.A4h;break;case"A3":r=FamilyTree.A3w,a=FamilyTree.A3h;break;case"A2":r=FamilyTree.A2w,a=FamilyTree.A2h;break;case"A1":r=FamilyTree.A1w,a=FamilyTree.A1h;break;case"Letter":r=FamilyTree.Letterw,a=FamilyTree.Letterh;break;case"Legal":r=FamilyTree.Legalw,a=FamilyTree.Legalh}var n=e.landscape?a-(e.margin[1]+e.margin[3]):r-(e.margin[1]+e.margin[3]),l=(e.landscape?(e.margin[0],e.margin[2]):(e.margin[0],e.margin[2]),n/i);return this._pagesA100(e,t,100*l)},FamilyTree.prototype._pagesA100=function(e,t,i){var r=FamilyTree._getViewBox(t),a=0,n=0;switch(e.format){case"A5":a=FamilyTree.A5w,n=FamilyTree.A5h;break;case"A4":a=FamilyTree.A4w,n=FamilyTree.A4h;break;case"A3":a=FamilyTree.A3w,n=FamilyTree.A3h;break;case"A2":a=FamilyTree.A2w,n=FamilyTree.A2h;break;case"A1":a=FamilyTree.A1w,n=FamilyTree.A1h;break;case"Letter":a=FamilyTree.Letterw,n=FamilyTree.Letterh;break;case"Legal":a=FamilyTree.Legalw,n=FamilyTree.Legalh}var l=r[0],o=r[1],s=r[2],d=r[3],c={w:e.landscape?n-(e.margin[1]+e.margin[3]):a-(e.margin[1]+e.margin[3]),h:e.landscape?a-(e.margin[0]+e.margin[2]):n-(e.margin[0]+e.margin[2])},m={w:e.landscape?n:a,h:e.landscape?a:n};t.setAttribute("preserveAspectRatio","xMinYMin slice"),t.setAttribute("width",c.w),t.setAttribute("height",c.h);for(var p=c.w*(100/i),h=c.h*(100/i),f=l,u=o,y=[];f<s+l;){for(;u<d+o;){var g=[f,u,p,h];g=g.join(),y.push({vb:g,innerSize:c,size:m}),u+=h}f+=p,u=o}return y},FamilyTree.prototype._defaultExportProfileOptions=function(e,t){return(FamilyTree.isNEU(e)||FamilyTree.isNEU(e.id))&&console.error("options.id is not defilned"),"svg"==t?(e.ext="svg",e.mime="image/svg+xml"):"pdf"==t?(e.mime="application/pdf",e.ext="pdf"):"png"==t&&(e.mime="image/png",e.ext="png"),null==e.margin&&(e.margin=[50,40,50,40]),null==e.padding&&(e.padding=0),null==e.landscape&&(e.landscape=!1),null==e.filename&&(e.filename="Profile."+e.ext),null==e.scale&&(e.scale="fit"),null==e.format&&(e.format="A4"),null==e.header&&(e.header=""),null==e.footer&&(e.footer=""),null==e.openInNewTab&&(e.openInNewTab=!1),null==e.mode&&(e.mode="bft-"+this.config.mode),e},FamilyTree.prototype._exportProfile=function(e,t){var i=this,r=0,a=0;switch(e.format){case"A5":r=FamilyTree.A5w,a=FamilyTree.A5h;break;case"A4":r=FamilyTree.A4w,a=FamilyTree.A4h;break;case"A3":r=FamilyTree.A3w,a=FamilyTree.A3h;break;case"A2":r=FamilyTree.A2w,a=FamilyTree.A2h;break;case"A1":r=FamilyTree.A1w,a=FamilyTree.A1h;break;case"Letter":r=FamilyTree.Letterw,a=FamilyTree.Letterh;break;case"Legal":r=FamilyTree.Legalw,a=FamilyTree.Legalh}var n={w:e.landscape?a-(e.margin[1]+e.margin[3]):r-(e.margin[1]+e.margin[3]),h:e.landscape?r-(e.margin[0]+e.margin[2]):a-(e.margin[0]+e.margin[2])},l={w:e.landscape?a:r,h:e.landscape?r:a},o=this.editUI.content(e.id,!0,!0,"100%",!0).element;FamilyTree.input.init(o);var s={content:o.outerHTML,options:e,pages:[{vb:"",innerSize:n,size:l}],styles:""};if(!t){if(!1===FamilyTree.events.publish("exportstart",[i,s]))return!1;FamilyTree.loading.show(i)}var d=this.element.querySelector("[data-bft-styles]");d&&(s.styles+=d.outerHTML);var c=this.getSvg().querySelector("defs");if(c)for(var m=0;m<c.children.length;m++)"style"==c.children[m].nodeName.toLowerCase()&&(s.styles+=c.children[m].outerHTML);s=JSON.stringify(s),FamilyTree._ajax(this.config.exportUrl+"/v3","POST",s,"arraybuffer",(function(r){if(t)t(i,r);else{var a=FamilyTree.events.publish("exportend",[i,r]);if(FamilyTree.loading.hide(i),!1===a)return!1;FamilyTree._downloadFile(e.mime,r,e.filename,e.openInNewTab)}}))},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.events=function(){var e={};return{on:function(t,i,r){Array.isArray(e[t])||(e[t]=[]),e[t].push({listener:i,event_id:r})},removeAll:function(t){Array.isArray(e[t])||(e[t]=[]),e[t]=[]},has:function(t,i){if(e[t]&&Array.isArray(e[t])&&e[t].length>0){if(FamilyTree.isNEU(i))return!0;for(var r=0;r<e[t].length;r++)if(e[t][r].event_id==i)return!0}return!1},removeForEventId:function(t){for(var i in e)if(Array.isArray(e[i]))for(var r=e[i].length-1;r>=0;r--)e[i][r].event_id==t&&e[i].splice(r,1)},publish:function(t,i){if(e[t]){for(var r=[],a=0;a<e[t].length;a++){var n=e[t][a];null!=n.event_id&&n.event_id!=i[0]._event_id||r.push(n.listener)}if(r.length>0){var l=!0;for(a=0;a<r.length&&(1==i.length?l=r[a](i[0])&&l:2==i.length?l=r[a](i[0],i[1])&&l:3==i.length?l=r[a](i[0],i[1],i[2])&&l:4==i.length?l=r[a](i[0],i[1],i[2],i[3])&&l:5==i.length&&(l=r[a](i[0],i[1],i[2],i[3],i[4])&&l),!1!==l);a++);return l}}}}}(),FamilyTree.prototype.importCSV=function(){var e=this,t=document.createElement("INPUT");t.setAttribute("type","file"),t.setAttribute("accept",".csv"),t.style.display="none",t.onchange=function(t){var i=t.target,r=new FileReader;r.onload=function(){var t=r.result,i=FamilyTree._csvToArray(t),a=[],n=i[0];FamilyTree._importSetColumnNames(n,(function(t){for(var r=1;r<i.length;r++){for(var n={},l=0;l<i[r].length;l++){var o=t[l],s=i[r][l];n[o]=FamilyTree._convertStringToArray(o,s)}""!=n.id.trim()&&a.push(n)}var d={nodes:a,columnNames:i[0]};0!=FamilyTree.events.publish("import",[e,d])&&(e.config.nodes=d.nodes,e.draw())}))},r.readAsText(i.files[0])},t.click()},FamilyTree._importSetColumnNames=function(e,t){if(-1==e.indexOf("id")||-1==e.indexOf("pid")){var i=document.createElement("DIV"),r=document.createElement("P");r.style.padding="5px",r.style.color="rgb(122, 122, 122)",r.innerHTML=FamilyTree.IMPORT_MESSAGE,i.appendChild(r);var a=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),o=document.createElement("span");a.setAttribute("id","bft-sampleDialog"),a.style.height="260px",a.style.width="400px",a.style.background="white",a.style.border="0.5px solid grey",a.style.position="fixed",a.style.overflow="hidden",a.style.zIndex="99",n.setAttribute("id","title"),n.style.backgroundColor="#e5e5e5",n.style.fontWeight="bold",n.style.color="rgb(122, 122, 122)",n.style.height="20px",n.style.padding="3px 0 0 7px",o.setAttribute("id","close"),o.style.cursor="pointer",o.style.position="absolute",o.style.color="rgb(122, 122, 122)",o.style.fontWeight="bold",o.style.top="2px",o.style.zIndex=100,l.setAttribute("id","content"),l.style.padding="2px",n.innerHTML="Import Organizational Chart Data",o.innerHTML="&times;";var s=document.createElement("HR");s.style.height="0.1px",s.style.backgroundColor="#aeaeae",s.style.border="none",s.style.margin="0",a.appendChild(n),a.appendChild(s),l.appendChild(i),a.appendChild(l),a.appendChild(o),document.body.appendChild(a),FamilyTree._importCenter(a),o.style.left=a.offsetWidth-20+"px";var d=document.createElement("div");d.setAttribute("id","overlay"),d.style.width="100%",d.style.height="100%",d.style.left=0,d.style.top=0,d.style.position="fixed",d.style.background="grey",d.style.opacity="0.5",d.style.zIndex=98,document.body.appendChild(d),a._overlay=d;var c=document.createElement("LABEL"),m=document.createTextNode("Name:");c.setAttribute("for","bft-id-select"),c.appendChild(m),c.style.fontSize="16px",c.style.color="rgb(122, 122, 122)",c.style.padding="5px",c.style.margin="5px",c.style.width="30%",c.style.textAlign="right",c.style.display="inline-block",i.appendChild(c);var p=document.createElement("SELECT");p.id="bft-id-select",p.style.fontSize="16px",p.style.color="rgb(122, 122, 122)",p.style.padding="5px",p.style.margin="5px",p.style.width="60%",p.style.border="1px solid #aeaeae",i.appendChild(p);var h=document.createElement("BR");i.appendChild(h);for(var f=0;f<e.length;f++){(b=document.createElement("option")).setAttribute("value",e[f]);var u=document.createTextNode(e[f]);b.appendChild(u),p.appendChild(b)}var y=document.createElement("LABEL"),g=document.createTextNode("Reports to:");y.setAttribute("for","pid-select"),y.appendChild(g),y.style.fontSize="16px",y.style.color="rgb(122, 122, 122)",y.style.padding="5px",y.style.margin="5px",y.style.width="30%",y.style.textAlign="right",y.style.display="inline-block",i.appendChild(y);var T=document.createElement("SELECT");T.id="pid-select",T.style.fontSize="16px",T.style.color="rgb(122, 122, 122)",T.style.padding="5px",T.style.margin="5px",T.style.width="60%",T.style.border="1px solid #aeaeae",i.appendChild(T);for(f=0;f<e.length;f++){var b;(b=document.createElement("option")).setAttribute("value",e[f]);u=document.createTextNode(e[f]);b.appendChild(u),T.appendChild(b)}var v=document.createElement("BUTTON");v.innerHTML="Import",v.style.fontSize="16px",v.style.color="rgb(122, 122, 122)",v.style.padding="5px 20px",v.style.margin="20px auto",v.style.display="block",v.onclick=function(){a.style.display="none",a._overlay&&a._overlay.parentNode.removeChild(a._overlay);var i=p.options[p.selectedIndex].value,r=e.indexOf(i);e[r]="id";var n=T.options[T.selectedIndex].value,l=e.indexOf(n);e[l]="pid",t(e)};var F=document.createElement("DIV");return F.appendChild(v),i.appendChild(F),o.onclick=function(e){a._overlay&&a._overlay.parentNode.removeChild(a._overlay),a.parentNode.removeChild(a),e.stopPropagation()},n.onmousedown=function(e){e=e||window.event,a._dragging=!0,a._originalLeft=a.offsetLeft,a._originalTop=a.offsetTop,a._mouseLeft=e.clientX,a._mouseTop=e.clientY},document.onmousemove=function(e){e=e||window.event,a._dragging&&(a.style.left=a._originalLeft+e.clientX-a._mouseLeft+"px",a.style.top=a._originalTop+e.clientY-a._mouseTop+"px")},document.onmouseup=function(e){e=e||window.event,a._dragging&&(a.style.left=a._originalLeft+e.clientX-a._mouseLeft+"px",a.style.top=a._originalTop+e.clientY-a._mouseTop+"px",a._dragging=!1)},a}t(e)},FamilyTree._importCenter=function(e){e&&(e.style.left=(window.innerWidth-e.offsetWidth)/2+"px",e.style.top=(window.innerHeight-e.offsetHeight)/2+"px")},FamilyTree.prototype.importXML=function(){var e=this,t=document.createElement("INPUT");t.setAttribute("type","file"),t.setAttribute("accept",".xml"),t.style.display="none",t.onchange=function(t){var i=t.target,r=new FileReader;r.onload=function(){var t=r.result,i=FamilyTree._xml2json(t);0!=FamilyTree.events.publish("import",[e,i])&&(e.config.nodes=i,e.draw())},r.readAsText(i.files[0])},t.click()},FamilyTree.prototype.importJSON=function(){var e=this,t=document.createElement("INPUT");t.setAttribute("type","file"),t.setAttribute("accept",".json"),t.style.display="none",t.onchange=function(t){var i=t.target,r=new FileReader;r.onload=function(){var t=r.result,i=JSON.parse(t);0!=FamilyTree.events.publish("import",[e,i])&&(e.config.nodes=i,e.draw())},r.readAsText(i.files[0])},t.click()},FamilyTree._importSetColumnNames=function(e,t){t(e)},FamilyTree.prototype.expand=function(e,t,i){var r={id:e,ids:t};this._draw(!1,FamilyTree.action.expand,r,i)},FamilyTree.prototype.collapse=function(e,t,i){var r={id:e,ids:t};this._draw(!1,FamilyTree.action.collapse,r,i)},FamilyTree.prototype.expandCollapse=function(e,t,i,r){Array.isArray(t)||(t=[]),Array.isArray(i)||(i=[]);var a={id:e,expandIds:t,collapseIds:i,ids:t.concat(i)};this._draw(!1,FamilyTree.action.collapse,a,r)},FamilyTree.prototype.changeRoots=function(e,t,i){this.config.roots=t;var r={id:e,changeRoots:t};this._draw(!1,FamilyTree.action.update,r,i)},FamilyTree.prototype.expandCollapseToLevel=function(e,t,i,r){this.config.collapse=t,null==i&&(i={}),this.config.expand=i;var a={id:e,method:"expandCollapseToLevel"};this._draw(!1,FamilyTree.action.collapse,a,r)},FamilyTree.prototype.maximize=function(e,t,i,r){var a=this,n={id:e,options:{}};FamilyTree.isNEU(n.id)&&(n.id=this.roots[0].id,n.all=!0),n.options.horizontal=!1,n.options.vertical=!1,t&&(n.options.horizontal=t),i&&(n.options.vertical=i),this._draw(!1,FamilyTree.action.maximize,n,(function(){a.ripple(e),r&&r()}))},FamilyTree.prototype.minimize=function(e,t){var i=this,r={id:e};FamilyTree.isNEU(r.id)&&(r.id=this.roots[0].id,r.all=!0),this._draw(!1,FamilyTree.action.minimize,r,(function(){i.ripple(e),t&&t()}))},FamilyTree.prototype._expCollHandler=function(e){this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.hide(),this.nodeCircleMenuUI.hide();var t=this.getNode(e),i=this.getCollapsedIds(t);if(i.length){if(!1===FamilyTree.events.publish("expcollclick",[this,!1,e,i]))return!1;this.expand(e,i,!1)}else{if(!1===FamilyTree.events.publish("expcollclick",[this,!0,e,t.childrenIds]))return!1;this.collapse(e,t.childrenIds,!1)}},FamilyTree.prototype._upHandler=function(e){this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.hide(),this.nodeCircleMenuUI.hide();var t=this._upHandlerCreateArgs(e);if(!1===FamilyTree.events.publish("up-click",[this,t]))return!1;this.changeRoots(t.id,t.roots,!1)},FamilyTree.prototype._upHandlerCreateArgs=function(e){var t,i=this.getNode(e),r=Object.assign([],this.config.roots),a=this.getNode(i.pid);if(a&&(t=a),t){if(Array.isArray(r)){var n=r.indexOf(i.id);-1!=n&&r.splice(n,1)}else r=[];r.push(t.id)}return{id:i.id,roots:r}},FamilyTree.prototype._upHandlerCreateArgs=function(e){var t=this.getNode(e),i=Object.assign([],this.config.roots),r=this.getRecentRootsByNodeId(e);return Array.isArray(i)||(i=[]),FamilyTree._changeRootOption(i,r,this.manager.rootList),{id:t.id,roots:i}},String.prototype.replaceAll||(String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)}),String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),String.prototype.splice||(String.prototype.splice=function(e,t,i){return this.slice(0,e)+i+this.slice(e+Math.abs(t))}),String.prototype.insert||(String.prototype.insert=function(e,t){return e>0?this.substring(0,e)+t+this.substr(e):t+this}),Array.prototype.unique||Object.defineProperty(Array.prototype,"unique",{value:function(){for(var e=this.concat(),t=0;t<e.length;++t)for(var i=t+1;i<e.length;++i)e[t]===e[i]&&e.splice(i--,1);return e},writable:!0,configurable:!0,enumerable:!1}),Array.prototype.has||Object.defineProperty(Array.prototype,"has",{value:function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return!0;return!1},writable:!0,configurable:!0,enumerable:!1}),Object.assign||Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(e),r=1;r<arguments.length;r++){var a=arguments[r];if(null!=a)for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i[n]=a[n])}return i},writable:!0,configurable:!0}),FamilyTree.prototype._globalMouseDownHandler=function(e,t){var i={move:"mousemove",up:"mouseup",leave:"mouseleave"};if(-1!=t.type.indexOf("touch")&&(1==t.touches.length?this._touch={x:t.touches[0].clientX,y:t.touches[0].clientY}:this._touch=null,i={move:"touchmove",up:"touchend",touchstart:"touchstart"}),e==t.target)return t.stopPropagation(),t.preventDefault(),void this._mouseDownHandler(e,t,i);if(this.config.nodeMouseClick==FamilyTree.action.pan){for(var r=t.target;r!=e&&!r.hasAttribute(FamilyTree.attr.control_expcoll_id)&&!r.hasAttribute(FamilyTree.attr.control_up_id);)r=r.parentNode;if(!r.hasAttribute(FamilyTree.attr.control_expcoll_id)&&!r.hasAttribute(FamilyTree.attr.control_up_id))return t.stopPropagation(),t.preventDefault(),void this._mouseDownHandler(e,t,i)}for(var a=t.target;a!=e;){if(a.hasAttribute(FamilyTree.attr.node_id))return void this._nodeMouseDownHandler(a,t,i);if(a.hasAttribute(FamilyTree.attr.control_node_circle_menu_name))return t.stopPropagation(),t.preventDefault(),void this._nodeCircleNodeMenuItemMouseDownHandler(a,t,i);a=a.parentNode}},FamilyTree.prototype._globalClickHandler=function(e,t){if(-1!=t.type.indexOf("touch")&&this._touch&&1==t.changedTouches.length){if(t.changedTouches.length){var i={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY},r=FamilyTree.t(this.config.template,!1,this.getScale()).size,a=this.getScale(),n=Math.abs(i.x-this._touch.x)/a,l=Math.abs(i.y-this._touch.y)/a;if(this._touch=null,n>r[0]/10)return;if(l>r[1]/10)return}}else if(-1!=t.type.indexOf("touch")&&null==this._touch)return;for(var o=t.target;o!=e;){if(o.hasAttribute(FamilyTree.attr.control_expcoll_id)){var s=o.getAttribute(FamilyTree.attr.control_expcoll_id),d=this.getNode(s);return void this._expCollHandler(d.id)}if(o.hasAttribute(FamilyTree.attr.node_id)){s=o.getAttribute(FamilyTree.attr.node_id),d=this.getNode(s);return void this._nodeClickHandler(d.id,t)}if(o.hasAttribute(FamilyTree.attr.control_node_menu_id)){t.stopPropagation(),t.preventDefault();s=o.getAttribute(FamilyTree.attr.control_node_menu_id),d=this.getNode(s);return void this._nodeMenuClickHandler(d.id,o,t)}if(o.hasAttribute(FamilyTree.attr.control_node_circle_menu_id)){t.stopPropagation(),t.preventDefault();s=o.getAttribute(FamilyTree.attr.control_node_circle_menu_id);return void this._nodeCircleMenuClickHandler(s)}if(o.hasAttribute(FamilyTree.attr.control_node_circle_menu_name))return t.stopPropagation(),t.preventDefault(),void this._nodeCircleMenuItemClickHandler(o,t);if(o.hasAttribute(FamilyTree.attr.control_add))return void this._lonelyButtonHandler();if(o.hasAttribute(FamilyTree.attr.control_up_id)){s=o.getAttribute(FamilyTree.attr.control_up_id);return t.stopPropagation(),t.preventDefault(),void this._upHandler(s)}if(o.hasAttribute(FamilyTree.attr.c_link_from))return void FamilyTree.events.publish("clink-click",[this,{from:o.getAttribute(FamilyTree.attr.c_link_from),to:o.getAttribute(FamilyTree.attr.c_link_to),event:t}]);if(o.hasAttribute(FamilyTree.attr.s_link_from))return void FamilyTree.events.publish("slink-click",[this,{from:o.getAttribute(FamilyTree.attr.s_link_from),to:o.getAttribute(FamilyTree.attr.s_link_to),event:t}]);o=o.parentNode}},FamilyTree.prototype._globalContextHandler=function(e,t){for(var i=t.target;i!=e;){if(i.hasAttribute(FamilyTree.attr.node_id)){var r=i.getAttribute(FamilyTree.attr.node_id),a=this.getNode(r);return void this._nodeContextHandler(a.id,t)}i=i.parentNode}},FamilyTree.prototype._nodeContextHandler=function(e,t){t.preventDefault(),this.searchUI.hide(),this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.hide(),this.nodeCircleMenuUI.hide();var i=this.get(e),r=null;if(null!=i&&Array.isArray(i.tags))for(var a=0;a<i.tags.length;a++){var n=i.tags[a];this.config.tags[n]&&this.config.tags[n].nodeContextMenu&&(r=this.config.tags[n].nodeContextMenu)}this.nodeContextMenuUI.show(t.pageX,t.pageY,e,null,r)},FamilyTree.prototype._globalDbClickHandler=function(e,t){for(var i=t.target;i!=e;){if(i.hasAttribute(FamilyTree.attr.node_id)){var r=i.getAttribute(FamilyTree.attr.node_id),a=this.getNode(r);return void this._nodeDbClickHandler(a.id,t)}i=i.parentNode}},FamilyTree.prototype._mouseScrollHandler=function(e,t){this.__mouseScrollHandler(this.getSvg(),t)},FamilyTree.prototype.__mouseScrollHandler=function(e,t){if(this.config.mouseScrool!=FamilyTree.action.ctrlZoom||t.ctrlKey){var i=this,r=!1,a=this.config.zoom.speed,n=this.config.zoom.smooth,l=0,o=this.getScale(),s=FamilyTree._centerPointInPercent(e,t.pageX,t.pageY),d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,20)};t.preventDefault();var c=t.delta||t.wheelDelta;void 0===c&&(c=-t.detail),c=Math.max(-1,Math.min(1,c)),l+=-c*a,r||function e(){r=!0;var t=(l-o)/n;t>0?t++:t--,o+=t,i.zoom(1-t/12/50,s),parseInt(o)==parseInt(l)?r=!1:d(e)}()}},FamilyTree.prototype._nodeCircleNodeMenuItemMouseDownHandler=function(e,t,i){var r=e.parentNode.getAttribute(FamilyTree.attr.control_node_circle_menu_wrraper_id),a=e.getAttribute(FamilyTree.attr.control_node_circle_menu_name),n=this.nodeCircleMenuUI._menu[a];if(n.draggable){var l=this,o=FamilyTree._getClientXY(t),s=this.getNode(r);e._dragEventFired=!1;var d=l.getScale(),c=null,m=null;this._gragStartedId=r,document.body.style.mozUserSelect=document.body.style.webkitUserSelect=document.body.style.userSelect="none";var p=this.getSvg(),h={x:o.x,y:o.y},f=e.cloneNode(!0);p.insertBefore(f,p.firstChild);var u=FamilyTree._getTransform(f),y=u[4],g=u[5],T=function(e){for(;e&&!e.hasAttribute(FamilyTree.attr.control_node_circle_menu_wrraper_id);)e=e.parentNode;if(e){var t=FamilyTree._getTransform(e);return{x:t[4],y:t[5]}}console.error("cannot find parent"+FamilyTree.attr.control_node_circle_menu_wrraper_id)}(e);f.setAttribute("transform","matrix(1,0,0,1,"+(y+T.x)+","+(g+T.y)+")"),f.style.opacity=.7;var b=function(e,t){if(null!=e){t.classList.remove("bft-drag-over");for(var i=FamilyTree.getStParentNodes(l.getNode(c)),r=0;r<i.length;r++){var a=l.getNodeElement(i[r].id);a&&(a.style.opacity=1)}}},v=function(t){if(h){var i=FamilyTree._getClientXY(t),r=t.target;FamilyTree.isMobile()&&(r=document.elementFromPoint(i.x,i.y)),i.x+=T.x*d,i.y+=T.y*d;var o=FamilyTree._getOffsetXY(l.element,t),s={left:l.width()-(o.x+l.config.padding)<0,right:o.x-l.config.padding<0,down:l.height()-(o.y+l.config.padding)<0,up:o.y-l.config.padding<0};if(s.left||s.right||s.up||s.down){p.classList&&(p.classList.remove("bft-cursor-grab"),p.classList.add("bft-cursor-move"),p.classList.remove("bft-cursor-nodrop"),p.classList.remove("bft-cursor-copy"));var v=u[4],x=u[5],_=h.x,w=h.y,k=i.x,S=i.y;l.startMove(s,(function(e){u[4]=v+e.x,u[5]=x+e.y,h.x=_-e.xWithoutScale,h.y=w-e.yWithoutScale,i.x=k-e.xWithoutScale,i.y=S-e.yWithoutScale,f.setAttribute("transform","matrix("+u.toString()+")")}))}else{for(l.stopMove(),p.classList&&(p.classList.add("bft-cursor-grab"),p.classList.remove("bft-cursor-move"),p.classList.remove("bft-cursor-nodrop"),p.classList.remove("bft-cursor-copy")),b(c,m),c=null,m=null;null!=r&&r!=p;){if(r.hasAttribute&&r.hasAttribute(FamilyTree.attr.node_id)){var C=r.getAttribute(FamilyTree.attr.node_id);c=C,m=r;break}r=r.parentNode}if(null!=c){m.classList.add("bft-drag-over");for(var I=l.getNode(c),N=FamilyTree.getStParentNodes(I),A=0;A<N.length;A++){var M=l.getNodeElement(N[A].id);M&&(M.style.opacity=.1)}p.classList.remove("bft-cursor-grab"),p.classList.remove("bft-cursor-move"),p.classList.add("bft-cursor-copy"),p.classList.remove("bft-cursor-nodrop")}var E=(i.x-h.x)/d,L=(i.y-h.y)/d;if(u[4]=y+E,u[5]=g+L,!e._dragEventFired&&(Math.abs(i.x-h.x)>FamilyTree.FIRE_DRAG_NOT_CLICK_IF_MOVE||Math.abs(i.y-h.y)>FamilyTree.FIRE_DRAG_NOT_CLICK_IF_MOVE))!1===FamilyTree.events.publish("drag",[l.nodeCircleMenuUI,{from:C,menuItem:n,menuItemName:a}])&&F(),e._dragEventFired=!0;f.setAttribute("transform","matrix("+u.toString()+")")}}},F=function(t){if(l.stopMove(),p.classList&&(p.classList.remove("bft-cursor-grab"),p.classList.remove("bft-cursor-move"),p.classList.remove("bft-cursor-nodrop"),p.classList.remove("bft-cursor-copy")),p.removeEventListener(i.move,v),p.removeEventListener(i.up,F),i.leave&&p.removeEventListener(i.leave,F),s.id==c||null==c)return p.removeChild(f),l._gragStartedId=null,void(e._dragEventFired&&FamilyTree.events.publish("drop",[l.nodeCircleMenuUI,{from:s.id,menuItemName:a,menuItem:n}]));var r=l.getNode(c);FamilyTree.events.publish("drop",[l.nodeCircleMenuUI,{from:s.id,to:r.id,menuItem:n,menuItemName:a}]),b(c,m),p.removeChild(f),l._gragStartedId=null};p.addEventListener(i.move,v),p.addEventListener(i.up,F),i.leave&&p.addEventListener(i.leave,F)}},FamilyTree.prototype._nodeMouseDownHandler=function(e,t,i){if(this.config.enableDragDrop){var r=FamilyTree._getClientXY(t),a=e.getAttribute(FamilyTree.attr.node_id),n=this.getNode(a);e._dragEventFired=!1;var l=null,o=null;this._gragStartedId=a,document.body.style.mozUserSelect=document.body.style.webkitUserSelect=document.body.style.userSelect="none";var s=this,d=this.getSvg(),c={x:r.x,y:r.y},m=FamilyTree._getTransform(e),p=m[4],h=m[5],f=s.getScale(),u=e.cloneNode(!0);d.insertBefore(u,d.firstChild),u.style.opacity=.7;var y=function(e,t){if(null!=e){t.classList.remove("bft-drag-over");for(var i=s.getNode(l),r=FamilyTree.getStParentNodes(i),a=0;a<r.length;a++){var n=s.getNodeElement(r[a].id);n&&(n.style.opacity=1)}}},g=function(t){if(c){var i=FamilyTree._getClientXY(t),r=t.target;FamilyTree.isMobile()&&(r=document.elementFromPoint(i.x,i.y));var a=FamilyTree._getOffsetXY(s.element,t),g={left:s.width()-(a.x+s.config.padding)<0,right:a.x-s.config.padding<0,down:s.height()-(a.y+s.config.padding)<0,up:a.y-s.config.padding<0};if(g.left||g.right||g.up||g.down){d.classList&&(d.classList.remove("bft-cursor-grab"),d.classList.add("bft-cursor-move"),d.classList.remove("bft-cursor-nodrop"),d.classList.remove("bft-cursor-copy"));var b=m[4],v=m[5],F=c.x,x=c.y,_=i.x,w=i.y;s.startMove(g,(function(e){m[4]=b+e.x,m[5]=v+e.y,c.x=F-e.xWithoutScale,c.y=x-e.yWithoutScale,i.x=_-e.xWithoutScale,i.y=w-e.yWithoutScale,u.setAttribute("transform","matrix("+m.toString()+")")}))}else{if(s.stopMove(),d.classList&&(d.classList.add("bft-cursor-grab"),d.classList.remove("bft-cursor-move"),d.classList.remove("bft-cursor-nodrop"),d.classList.remove("bft-cursor-copy")),y(l,o),l=null,o=null,s.config.enableDragDrop)for(;null!=r&&r!=d;){if(r.hasAttribute&&r.hasAttribute(FamilyTree.attr.node_id)){var k=r.getAttribute(FamilyTree.attr.node_id);if(s._gragStartedId&&k!=s._gragStartedId){l=k,o=r;break}}r=r.parentNode}if(null!=l){o.classList.add("bft-drag-over");for(var S=s.getNode(l),C=FamilyTree.getStParentNodes(S),I=0;I<C.length;I++){var N=s.getNodeElement(C[I].id);N&&(N.style.opacity=.1)}!s.canUpdateLink(n.id,l)&&d.classList?(d.classList.remove("bft-cursor-grab"),d.classList.remove("bft-cursor-move"),d.classList.remove("bft-cursor-copy"),d.classList.add("bft-cursor-nodrop")):d.classList&&(d.classList.remove("bft-cursor-grab"),d.classList.remove("bft-cursor-move"),d.classList.add("bft-cursor-copy"),d.classList.remove("bft-cursor-nodrop"))}var A=(i.x-c.x)/f,M=(i.y-c.y)/f;if(m[4]=p+A,m[5]=h+M,!e._dragEventFired&&(Math.abs(i.x-c.x)>FamilyTree.FIRE_DRAG_NOT_CLICK_IF_MOVE||Math.abs(i.y-c.y)>FamilyTree.FIRE_DRAG_NOT_CLICK_IF_MOVE))!1===FamilyTree.events.publish("drag",[s,k,t])&&T(),e._dragEventFired=!0;u.setAttribute("transform","matrix("+m.toString()+")")}}},T=function(t){if(s.stopMove(),d.classList&&(d.classList.remove("bft-cursor-grab"),d.classList.remove("bft-cursor-move"),d.classList.remove("bft-cursor-nodrop"),d.classList.remove("bft-cursor-copy")),d.removeEventListener(i.move,g),d.removeEventListener(i.up,T),i.leave&&d.removeEventListener(i.leave,T),n.id==l||null==l)return d.removeChild(u),s._gragStartedId=null,void(e._dragEventFired&&FamilyTree.events.publish("drop",[s,n.id]));var r=s.getNode(l);if(!1===FamilyTree.events.publish("drop",[s,n.id,r.id]))return y(l,o),d.removeChild(u),void(s._gragStartedId=null);if(s.canUpdateLink(n.id,l)){var a=s.get(n.id);a.pid=l,a.stpid=null,s.updateNode(a,null,!0)}else d.removeChild(u),y(l,o);s._gragStartedId=null};d.addEventListener(i.move,g),d.addEventListener(i.up,T),i.leave&&d.addEventListener(i.leave,T)}},FamilyTree.prototype._resizeHandler=function(e,t){if(this.isVisible){var i=this.getViewBox(),r=this.getSvg(),a=r.getAttribute("width"),n=r.getAttribute("height"),l=a/i[2],o=n/i[3],s=l>o?o:l;r.setAttribute("width",this.width()),r.setAttribute("height",this.height()),i[2]=this.width()/s,i[3]=this.height()/s,this.setViewBox(i),this.xScrollUI.create(this.width()),this.yScrollUI.create(this.height()),this._draw(!1,FamilyTree.action.resize)}},FamilyTree.prototype._nodeDbClickHandler=function(e,t){if(!1===FamilyTree.events.publish("dbclick",[this,this.get(e)]))return!1;this._commonClickHandler(e,t,this.config.nodeMouseDbClick)},FamilyTree.prototype._nodeClickHandler=function(e,t){var i=this.getNodeElement(e);if(i&&i._dragEventFired)i._dragEventFired=!1;else{if(!1===FamilyTree.events.publish("click",[this,{node:this.getNode(e),event:t}]))return!1;this._commonClickHandler(e,t,this.config.nodeMouseClick)}},FamilyTree.prototype._nodeCircleMenuItemClickHandler=function(e,t){var i=e.parentNode.getAttribute(FamilyTree.attr.control_node_circle_menu_wrraper_id),r=e.getAttribute(FamilyTree.attr.control_node_circle_menu_name),a=this.nodeCircleMenuUI._menu[r];FamilyTree.events.publish("click",[this.nodeCircleMenuUI,{nodeId:i,menuItemName:r,menuItem:a,event:t}])},FamilyTree.prototype._nodeCircleMenuClickHandler=function(e){this.searchUI.hide(),this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.hide();var t=this.getNode(e),i=null;if(Array.isArray(t.tags))for(var r=0;r<t.tags.length;r++){var a=t.tags[r];this.config.tags[a]&&this.config.tags[a].nodeCircleMenu&&(i=this.config.tags[a].nodeCircleMenu)}this.nodeCircleMenuUI.show(e,i)},FamilyTree.prototype._commonClickHandler=function(e,t,i){var r;(this.searchUI.hide(),this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.hide(),this.nodeCircleMenuUI.hide(),i==FamilyTree.action.expandCollapse&&this.toggleExpandCollapse(e,t),i==FamilyTree.action.edit)&&((r=this.getNode(e))&&(this.editUI.show(r.id),this.ripple(r.id,t.clientX,t.clientY)));i==FamilyTree.action.details&&((r=this.getNode(e))&&(this.editUI.show(r.id,!0),this.ripple(r.id,t.clientX,t.clientY)))},FamilyTree.prototype._menuHandlerMouseDownHandler=function(e,t){t.stopPropagation(),t.preventDefault()},FamilyTree.prototype._nodeMenuClickHandler=function(e,t,i){this.searchUI.hide(),this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.hide(),this.nodeCircleMenuUI.hide();var r=this.getNode(e),a=null;if(Array.isArray(r.tags))for(var n=0;n<r.tags.length;n++){var l=r.tags[n];this.config.tags[l]&&this.config.tags[l].nodeMenu&&(a=this.config.tags[l].nodeMenu)}this.nodeMenuUI.showStickIn(t,e,null,a)},FamilyTree.prototype._menuClickHandler=function(e,t){t.stopPropagation(),t.preventDefault(),this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.show(e.offsetLeft,e.offsetTop)},FamilyTree.prototype._lonelyButtonHandler=function(){var e={id:this.generateId()};!1!==this.addNode(e,null,!0)&&this.center(e.id)},FamilyTree.prototype.toggleExpandCollapse=function(e,t){var i=this.getNode(e),r=this.getCollapsedIds(i);if(r.length){if(!1===FamilyTree.events.publish("expcollclick",[this,!1,e,r]))return!1;this.expand(e,r,!1)}else{if(!1===FamilyTree.events.publish("expcollclick",[this,!0,e,i.childrenIds]))return!1;this.collapse(e,i.childrenIds,!1)}t&&this.ripple(i.id,t.clientX,t.clientY)},FamilyTree.prototype._move=function(e,t,i){i[0]=t,i[1]=e,this.setViewBox(i),this.xScrollUI.setPosition(),this.yScrollUI.setPosition()},FamilyTree.prototype.startMove=function(e,t){if(e){if(this._movePosition=e,!this._moveInterval){var i=this,r=this.getViewBox().slice(0),a=this.getScale(),n=0,l=0;this._moveInterval=setInterval((function(){var e={x:0,y:0,xWithoutScale:0,yWithoutScale:0};i._movePosition.left&&(n++,e.x=n*FamilyTree.MOVE_STEP/a,e.xWithoutScale=n*FamilyTree.MOVE_STEP),i._movePosition.right&&(n++,e.x=-n*FamilyTree.MOVE_STEP/a,e.xWithoutScale=-n*FamilyTree.MOVE_STEP),i._movePosition.up&&(l++,e.y=-l*FamilyTree.MOVE_STEP/a,e.yWithoutScale=-l*FamilyTree.MOVE_STEP),i._movePosition.down&&(l++,e.y=l*FamilyTree.MOVE_STEP/a,e.yWithoutScale=l*FamilyTree.MOVE_STEP),i.setViewBox([r[0]+e.x,r[1]+e.y,r[2],r[3]]),i.xScrollUI.setPosition(),i.yScrollUI.setPosition(),t&&t(e)}),FamilyTree.MOVE_INTERVAL)}}else console.error("movePosition parameter not defined")},FamilyTree.prototype.stopMove=function(){this._moveInterval&&(clearInterval(this._moveInterval),this._moveInterval=null,this._movePosition=null)},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.node=function(e,t,i,r){this.templateName=r,this.id=e,this.pid=t,this.children=[],this.childrenIds=[],this.parent=null,this.stpid=null,this.stParent=null,this.stChildren=[],this.stChildrenIds=[],this.tags=i,this.tags||(this.tags=[])},FamilyTree.prototype._mouseDownHandler=function(e,t,i){var r=this;FamilyTree.HIDE_EDIT_FORM_ON_PAN&&this.editUI.hide(),this.searchUI.hide(),this.nodeMenuUI.hide(),this.nodeContextMenuUI.hide(),this.menuUI.hide(),this.nodeCircleMenuUI.hide();var a=this.getViewBox(),n=this.getScale(),l=FamilyTree._getClientTouchesXY(t,0),o=FamilyTree._getClientTouchesXY(t,1),s={diffX:0,diffY:0,x0:l.x,y0:l.y,type:"pan",viewBoxLeft:a[0],viewBoxTop:a[1]};t.touches&&t.touches.length>1&&(s.type="pinch",s.dist=Math.sqrt((l.x-o.x)*(l.x-o.x)+(l.y-o.y)*(l.y-o.y)));var d=this.getPointerElement();if("pan"==s.type){this._hideBeforeAnimation();var c=FamilyTree._getOffsetXY(this.element,t),m=c.x/n+a[0]-16/n,p=c.y/n+a[1]-16/n;d.style.display="inherit",d.setAttribute("transform","matrix(0,0,0,0,"+m+","+p+")"),FamilyTree.animate(d,{transform:[0,0,0,0,m,p],opacity:0},{transform:[1/n,0,0,1/n,m,p],opacity:1},300,FamilyTree.anim.outBack)}var h=function(e){var t=FamilyTree._getClientTouchesXY(e,0);if(s&&"pan"==s.type){r._hideBeforeAnimation(),s.diffX=t.x-s.x0,s.diffY=t.y-s.y0;var i=-s.diffY/n+s.viewBoxTop,l=-s.diffX/n+s.viewBoxLeft;r._move(i,l,a)}else if(s&&"pinch"==s.type){var o=FamilyTree._getClientTouchesXY(e,1),d=Math.sqrt((t.x-o.x)*(t.x-o.x)+(t.y-o.y)*(t.y-o.y)),c=1+(d-s.dist)/(s.dist/100)/100;s.dist=d;var m=FamilyTree._pinchMiddlePointInPercent(r.element,r.width(),r.height(),e);r.zoom(c,m)}},f=function(){"pan"==s.type&&r.config.sticky?setTimeout((function(){FamilyTree._moveToBoundaryArea(e,r.getViewBox(),r.response.boundary,(function(){r._draw(!0,FamilyTree.action.pan)}))}),0):"pan"!=s.type||r.config.sticky||setTimeout((function(){r._draw(!0,FamilyTree.action.pan)}),0),s=null,d.style.display="none",e.removeEventListener(i.move,h),e.removeEventListener(i.up,f),i.leave&&e.removeEventListener(i.leave,f),i.touchstart&&e.removeEventListener(i.touchstart,f)};e.addEventListener(i.move,h),e.addEventListener(i.up,f),i.leave&&e.addEventListener(i.leave,f),i.touchstart&&e.addEventListener(i.touchstart,f)},FamilyTree.searchUI=function(){},FamilyTree.searchUI.prototype.init=function(e){this.obj=e;var t=this,i=document.createElement("div");i.classList.add("bft-search"),i.style.right=this.obj.config.padding-10+"px",i.style.top=this.obj.config.padding-10+"px";var r=FamilyTree.elements.textbox({},{label:FamilyTree.SEARCH_PLACEHOLDER},"320px");i.innerHTML+=r.html,this.searchTableWrapper=document.createElement("div"),i.appendChild(this.searchTableWrapper);var a=e.getSvg().nextSibling;this.obj.element.insertBefore(i,a),FamilyTree.input.init(i),this.input=document.getElementById(r.id),this.input.addEventListener("keypress",(function(e){"Enter"==e.key&&e.preventDefault()})),this.input.addEventListener("keyup",(function(e){"ArrowDown"==e.key?(e.preventDefault(),n()):"ArrowUp"==e.key?(e.preventDefault(),e.stopPropagation(),l()):"Enter"==e.key?(e.preventDefault(),o()):"Escape"==e.key?(e.preventDefault(),t.hide()):t._serverSearch(this.value)}));var n=function(){var e=t.obj.element.querySelectorAll("[data-search-item-id]"),i=t.obj.element.querySelector('[data-selected="yes"]');null==i&&e.length>0?e[0].setAttribute("data-selected","yes"):e.length>0&&i.nextSibling&&i.nextSibling.setAttribute&&(i.removeAttribute("data-selected"),i.nextSibling.setAttribute("data-selected","yes"))},l=function(){var e=t.obj.element.querySelectorAll("[data-search-item-id]"),i=t.obj.element.querySelector('[data-selected="yes"]');null==i&&e.length>0?e[e.length-1].setAttribute("data-selected","yes"):e.length>0&&i.previousSibling&&i.previousSibling.setAttribute&&(i.removeAttribute("data-selected"),i.previousSibling.setAttribute("data-selected","yes"))},o=function(){var e=t.obj.element.querySelector('[data-selected="yes"]');if(e){var i=e.getAttribute("data-search-item-id");0!=FamilyTree.events.publish("searchclick",[t.obj,i])&&t.obj.center(i)}}},FamilyTree.searchUI.prototype.hide=function(){this.searchTableWrapper&&(this.searchTableWrapper.innerHTML=""),this.input&&(this.input.value="",this.input.focus(),this.input.blur())},FamilyTree.searchUI.prototype.find=function(e){this.input&&(this.input.value=e,this._serverSearch(e),this.input.focus())},FamilyTree.searchUI.prototype._serverSearch=function(e){var t=this,i=FamilyTree._search.search(this.obj.config.nodes,e,this.obj.config.searchFields,this.obj.config.searchFields,this.obj.config.searchDisplayField,this.obj.config.searchFieldsWeight),r=FamilyTree._getFistImgField(this.obj.config),a=`<table border="0" cellspacing="0" cellpadding="0">\n                    <tbody>\n                        ${function(){for(var e="",a=0;a<i.length&&!(a>=FamilyTree.SEARCH_RESULT_LIMIT);a++){var n=i[a],l="";if(r){var o=t.obj._get(n.id);"function"==typeof r?l=r(t.obj,t.obj.getNode(n.id),o):o[r]&&(l=o[r])}var s="",d="";t.obj.config.searchDisplayField==n.__searchField?s=n.__searchMarks:t.obj.config.searchDisplayField?(s=n[t.obj.config.searchDisplayField],FamilyTree.isNEU(s)&&(s=""),d=n.__searchMarks):s=n.__searchMarks,e+=FamilyTree.searchUI.createItem(l,n.id,s,d)}return e}()}  \n                    </tbody>\n                </table>`;this.searchTableWrapper.innerHTML=a;for(var n=this.obj.element.querySelectorAll("[data-search-item-id]"),l=0;l<n.length;l++)n[l].addEventListener("click",(function(){if(!1!==FamilyTree.events.publish("searchclick",[t.obj,this.getAttribute("data-search-item-id")])){t.obj.center(this.getAttribute("data-search-item-id"));var e=t.obj.element.querySelector('[data-selected="yes"]');e&&e.removeAttribute("data-selected"),this.setAttribute("data-selected","yes"),t.input.focus()}}))},FamilyTree.searchUI.createItem=function(e,t,i,r){return i&&(i="<b>"+i+"</b>"),`<tr data-search-item-id="${t}">\n                <td class="bft-search-image-td">\n                    ${e=e?`<div class="bft-search-photo" style="background-image: url(${e})"></div>`:`<div class="bft-search-photo">${FamilyTree.icon.user(32,32,"#aeaeae")}</div>`}\n                </td>\n                <td class="bft-search-text-td">${i} <br/>${r}</td>\n            </tr>`},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.manager=function(e){this.config=e.config,this.layoutConfigs=e._layoutConfigs,this.visibleNodeIds=[],this.viewBox=null,this.action=null,this.actionParams=null,this.nodes={},this.oldNodes={},this.maxX=null,this.maxY=null,this.minX=null,this.minY=null,this.bordersByRootIdAndLevel=null,this.roots=null,this.state=null,this.vbIsInitializedFromState=!1,this.rootList=[],this.instance=e},FamilyTree.manager.prototype.read=function(e,t,i,r,a,n,l,o){var s=this;FamilyTree.state._get(this.config.state,t,i,(function(d){s.state=d,s.action=a,s.actionParams=n,a!=FamilyTree.action.init||!s.state||n&&n.method&&"fit"==n.method?(s.viewBox=r,s.vbIsInitializedFromState=!1):(s.viewBox=s.state.vb,s.vbIsInitializedFromState=!0,Array.isArray(s.state.roots)&&(s.config.roots=s.state.roots));var c=s.maxX,m=s.maxY,p=s.minX,h=s.minY,f=s.bordersByRootIdAndLevel,u=s.roots,y=s.nodes;if(e){var g=FamilyTree.manager._getResponse(t,i,s.visibleNodeIds,s.config,c,m,p,h,s.viewBox,u,s.action,s.actionParams,y,s.oldNodes,s.vbIsInitializedFromState);a!=FamilyTree.action.exporting&&(s.maxX=c,s.maxY=m,s.minX=p,s.minY=h,s.roots=u,s.nodes=y,s.visibleNodeIds=g.visibleNodeIds),g.bordersByRootIdAndLevel=f,g.roots=u,g.adjustify={x:0,y:0},s.state&&(g.adjustify=s.state.adjustify),l(g)}else s.oldNodes=y||null,s._read((function(e){c=e.maxX,m=e.maxY,p=e.minX,h=e.minY,f=e.bordersByRootIdAndLevel,u=e.roots,y=e.nodes;var r=FamilyTree.manager._getResponse(t,i,s.visibleNodeIds,s.config,c,m,p,h,s.viewBox,u,s.action,s.actionParams,y,s.oldNodes,s.vbIsInitializedFromState);r.notif=e.limit,r.roots=u,r.bordersByRootIdAndLevel=f,r.adjustify=e.adjustify,a!=FamilyTree.action.exporting&&(s.maxX=c,s.maxY=m,s.minX=p,s.minY=h,s.roots=u,s.nodes=y,s.visibleNodeIds=r.visibleNodeIds,s.bordersByRootIdAndLevel=f,s.rootList=e.rootList),l(r)}),o)}))},FamilyTree.manager.prototype._read=function(e,t){var i=this,r=FamilyTree.manager._createNodes(this.instance);t(r);var a=r.nodes,n=r.roots,l=FamilyTree.remote;null==l&&(l=FamilyTree.local),l._setPositions(n,i.layoutConfigs,(function(t){var l=FamilyTree.manager._doNotChangePositionOfClickedNodeIfAny(n,a,i.action,i.actionParams,i.oldNodes,i.config.orientation);i.state&&i.action==FamilyTree.action.init&&(l=i.state.adjustify);for(var o={minX:null,minY:null,maxX:null,maxY:null},s={},d=0;d<n.length;d++)FamilyTree.manager._setMinMaxXYAdjustifyIterate(n[d],n[d],o,0,s,l,i.config.orientation);e({minX:o.minX,minY:o.minY,maxX:o.maxX,maxY:o.maxY,bordersByRootIdAndLevel:s,nodes:a,roots:n,rootList:r.rootList,limit:t,adjustify:l})}),a)},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.manager._initDinamicNode=function(e,t,i){t&&(e.lcn=t),i&&(e.isAssistant=!0);var r=FamilyTree.t(e.templateName);e.w=r&&r.size?r.size[0]:0,e.h=r&&r.size?r.size[1]:0,e.isSplit="split"==e.templateName},FamilyTree.manager._setCollpasedProperty=function(e,t,i,r,a,n,l){null==e.collapsed&&t.collapse&&t.collapse.allChildren?e.collapsed=!0:null==e.collapsed&&(e.collapsed=!1),a==FamilyTree.action.expand&&-1!=i.ids.indexOf(e.id)&&(e.collapsed=!1),a==FamilyTree.action.collapse&&(i.expandIds||i.collapseIds)?i.expandIds&&-1!=i.expandIds.indexOf(e.id)?e.collapsed=!1:i.collapseIds&&-1!=i.collapseIds.indexOf(e.id)&&(e.collapsed=!0):a==FamilyTree.action.collapse&&-1!=i.ids.indexOf(e.id)&&(e.collapsed=!0),a==FamilyTree.action.expand&&"all"==i.ids&&(e.collapsed=!1),a==FamilyTree.action.exporting&&i.expandChildren&&(e.collapsed=!1),a==FamilyTree.action.init&&null!=l?e.collapsed=!l.exp.has(e.id):a==FamilyTree.action.init?e.collapsed=t.collapse&&n>=t.collapse.level-1&&-1==r.indexOf(e.id):a==FamilyTree.action.centerNode||a==FamilyTree.action.insert||a==FamilyTree.action.expand||a==FamilyTree.action.collapse?r.has(e.id)&&(e.collapsed=!1):a==FamilyTree.action.update&&i&&i.changeRoots&&i.changeRoots.has(e.id)&&(e.collapsed=!1)},FamilyTree.manager._initNode=function(e,t,i,r,a,n,l){var o=l.manager.config,s=l.manager.layoutConfigs,d=l.manager.action,c=l.manager.actionParams,m=l.manager.state,p=s[i||"base"];null==e.parent&&FamilyTree.manager._setCollpasedProperty(e,p,c,a,d,r-1,m);for(var h=0;h<e.childrenIds.length;h++){var f=t[e.childrenIds[h]];if(FamilyTree.manager._setCollpasedProperty(f,p,c,a,d,r,m),!f.collapsed){if(f.parent=e,null!=f.ppid){var u=t[f.ppid];u&&(f.parentPartner=u)}(-1!=f.tags.indexOf("left-partner")||-1!=f.tags.indexOf("right-partner")||-1!=f.tags.indexOf("partner")||f.parentPartner)&&-1==n.indexOf(e.id)&&n.push(e.id),e.children.push(f)}}if(e.min||d!=FamilyTree.action.minimize||(c.all||c.id==e.id)&&(e.min=!0),!0===e.min&&d==FamilyTree.action.maximize&&(c.all||c.id==e.id)&&(e.min=!1),d==FamilyTree.action.init&&null!=m&&(e.min=m.min.has(e.id)),!e.min)for(h=0;h<e.stChildrenIds.length;h++){f=t[e.stChildrenIds[h]];e.tags&&e.tags.has("filter")||(f.stParent=e,e.stChildren.push(f))}null!=r&&(e.level=r),i&&(e.lcn=i);var y=FamilyTree._getSubLevels(e.tags,o.tags);y>0&&(e.subLevels=y),-1!=e.tags.indexOf("assistant")&&null!=e.parent&&(e.isAssistant=!0);var g=FamilyTree.t(e.templateName,e.min);e.w=g&&g.size?g.size[0]:0,e.h=g&&g.size?g.size[1]:0,e.padding=g&&g.padding?g.padding:[0,0,0,0];var T={node:e};FamilyTree.events.publish("node-initialized",[l,T]),FamilyTree.events.publish("node-created",[e])},FamilyTree.manager._iterate=function(e,t,i,r,a,n,l,o,s,d,c,m){var p=m.manager.layoutConfigs;if(FamilyTree.manager._initNode(t,i,s,r,d,c,m),t.isAssistant&&(n[t.pid]||(n[t.pid]=[]),n[t.pid].push(t.id)),t.subLevels>0&&l.push(t.id),FamilyTree.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN&&!t.isAssistant&&t.parent){if(t.parent&&t.parent.children.length&&t.parent.children[t.parent.children.length-1]==t){for(var h=[],f=0,u=0,y=0;y<t.parent.children.length;y++){-1==(g=t.parent.children[y]).tags.indexOf("partner")&&-1==g.tags.indexOf("left-partner")&&-1==g.tags.indexOf("right-partner")&&-1==g.tags.indexOf("assistant")&&0==g.children.length?h.push(g.id):-1!=g.tags.indexOf("assistant")?f++:-1==g.tags.indexOf("partner")&&-1==g.tags.indexOf("left-partner")&&-1==g.tags.indexOf("right-partner")||u++}(FamilyTree.MIXED_LAYOUT_ALL_NODES&&h.length>1&&h.length==t.parent.children.length-f-u||!FamilyTree.MIXED_LAYOUT_ALL_NODES&&h.length>1)&&(o[t.pid]=h)}}else if(!t.isAssistant&&0==t.childrenIds.length&&t.parent&&!o[t.pid]){for(h=[],f=0,u=0,y=0;y<t.parent.children.length;y++){var g;-1==(g=t.parent.children[y]).tags.indexOf("partner")&&-1==g.tags.indexOf("left-partner")&&-1==g.tags.indexOf("right-partner")&&-1==g.tags.indexOf("assistant")&&0==g.childrenIds.length?h.push(g.id):-1!=g.tags.indexOf("assistant")?f++:-1==g.tags.indexOf("partner")&&-1==g.tags.indexOf("left-partner")&&-1==g.tags.indexOf("right-partner")||u++}(FamilyTree.MIXED_LAYOUT_ALL_NODES&&h.length>1&&h.length==t.parent.childrenIds.length-f-u||!FamilyTree.MIXED_LAYOUT_ALL_NODES&&h.length>1)&&(o[t.pid]=h)}t.stChildren.length&&(e.stContainerNodes||(e.stContainerNodes=[]),e.stContainerNodes.push(t));for(var T=0;T<t.stChildren.length;T++){var b="";for(y=0;y<t.tags.length;y++)if(p[t.tags[y]]){b=t.tags[y];break}a.push(t.stChildren[T].id),FamilyTree.manager._iterate(e,t.stChildren[T],i,0,a,n,l,o,b,d,c,m)}r++;for(T=0;T<t.children.length;T++)FamilyTree.manager._iterate(e,t.children[T],i,r,a,n,l,o,s,d,c,m)},FamilyTree.manager.__createNodes=function(e,t,i,r,a,n,l,o){for(var s=i.nodes,d=[],c=0;c<s.length;c++){var m,p=s[c];m=FamilyTree.STRING_TAGS?p.tags?p.tags.split(","):[]:Array.isArray(p.tags)?p.tags.slice(0):[],o.filterUI.addFilterTag(p)&&m.unshift("filter");var h=FamilyTree._getTemplate(m,i.tags,i.template),f=new FamilyTree.node(p.id,p.pid,m,h);FamilyTree.isNEU(p.ppid)||(f.ppid=p.ppid),FamilyTree.isNEU(p.stpid)||(f.stpid=p.stpid),null!=i.orderBy&&(f.order=FamilyTree.manager._getOrderFieldValue(p,i.orderBy)),e[p.id]=f,d.push(p.id)}null!=i.orderBy&&d.sort((function(t,r){var a=e[t].order,n=e[r].order;return"number"==typeof a||"number"==typeof n?(null==a&&(a=-1),null==n&&(n=-1),i.orderBy.desc?n-a:a-n):"string"==typeof a||"string"==typeof n?(null==a&&(a=""),null==n&&(n=""),i.orderBy.desc?n.localeCompare(a):a.localeCompare(n)):void 0}));for(c=0;c<d.length;c++){var u=d[c],y=(f=e[u],n?n[u]:null),g=e[f.stpid],T=e[f.pid];if(g||(f.stpid=null),T||(f.pid=null),g){var b=n?n[g.id]:null;b&&(g.min=b.min),g.stChildrenIds.push(f.id)}else T?(y&&(f.collapsed=y.collapsed,f.min=y.min),T.childrenIds.push(f.id)):(y&&(f.collapsed=y.collapsed,f.min=y.min),t.push(f),l.push(f.id));r==FamilyTree.action.init&&(f.min=FamilyTree._getMin(f,i))}},FamilyTree.manager._createNodes=function(e){var t=e.manager.config,i=e.manager.layoutConfigs,r=e.manager.action,a=e.manager.actionParams,n=e.manager.oldNodes,l=e.manager.state,o={},s=[],d=[];if(FamilyTree.manager.__createNodes(o,s,t,r,a,n,d,e),null!=t.roots){s=[];for(var c=0;c<t.roots.length;c++){var m=o[t.roots[c]];if(m&&r==FamilyTree.action.centerNode){for(var p=m;null!=p.pid||null!=p.stpid;)p=null==p.pid&&null!=p.stpid?o[p.stpid]:o[p.pid];for(var h=o[a.id];(null!=h.pid||null!=h.stpid)&&h!=m;)h=null==h.pid&&null!=h.stpid?o[h.stpid]:o[h.pid];p==h&&(m=p)}if(m){for(var f=!1,u=0;u<s.length;u++)if(s[u].id==m.id){f=!0;break}if(!f){if(!FamilyTree.isNEU(m.pid))(H=(b=o[m.pid]).childrenIds.indexOf(m.id))>-1&&b.childrenIds.splice(H,1);s.push(m)}}}t.roots=[];for(c=0;c<s.length;c++)t.roots.push(s[c].id)}r==FamilyTree.action.exporting&&null!=a.id&&((g=o[a.id])&&(g.pid=null,s=[g]));var y=[];if(r==FamilyTree.action.init&&t.expand&&t.expand.nodes&&null==l)for(c=0;c<t.expand.nodes.length;c++){var g=o[t.expand.nodes[c]];for(!0===t.expand.allChildren&&FamilyTree.manager._addExpandedNodeIdsIterate(g,o,y);g;)y.push(g.id),null==g.pid&&null!=g.stpid?(g=o[g.stpid]).min=!1:g=o[g.pid]}else if(r==FamilyTree.action.expand&&a.ids&&"all"!=a.ids||r==FamilyTree.action.collapse&&a&&a.expandIds){var T;T=r==FamilyTree.action.expand?a.ids:a.expandIds;for(c=0;c<T.length;c++)for(var b=o[(g=o[T[c]]).pid];b;)y.push(b.id),null==b.pid&&null!=b.stpid?(b=o[b.stpid]).min=!1:b=o[b.pid]}else if(r==FamilyTree.action.centerNode){for(var v=o[a.id];v;){if(y.push(v.id),a.options.parentState===FamilyTree.COLLAPSE_PARENT_NEIGHBORS&&v)for(c=0;c<v.childrenIds.length;c++){(R=o[v.childrenIds[c]]).collapsed=!0}null==v.pid&&null!=v.stpid?(v=o[v.stpid]).min=!1:v=o[v.pid]}v=o[a.id];if(a.options.childrenState===FamilyTree.COLLAPSE_SUB_CHILDRENS)for(c=0;c<v.childrenIds.length;c++){(x=o[v.childrenIds[c]]).collapsed=!1;for(var F=0;F<x.childrenIds.length;F++){o[x.childrenIds[F]].collapsed=!0}}if(a.options.parentState===FamilyTree.COLLAPSE_PARENT_SUB_CHILDREN_EXCEPT_CLICKED)if(b=o[v.pid])for(c=0;c<b.childrenIds.length;c++){var x;if((x=o[b.childrenIds[c]])!=v){x.collapsed=!1;for(F=0;F<x.childrenIds.length;F++){o[x.childrenIds[F]].collapsed=!0}}}}else if(r==FamilyTree.action.insert)for(g=o[a.insertedNodeId];g;)y.push(g.id),null==g.pid&&null!=g.stpid?(g=o[g.stpid]).min=!1:g=o[g.pid];var _=[],w={},k=[],S={},C=[];for(c=0;c<s.length;c++)FamilyTree.manager._iterate(s[c],s[c],o,0,_,w,k,S,"",y,C,e);for(c=s.length-1;c>=0;c--)s[c].collapsed&&s.splice(c,1);for(c=0;c<C.length;c++){g=o[C[c]];var I=[],N=[],A=[],M={},E=0,L=0,U=0,B=[],O=[];for(F=0;F<g.children.length;F++){(R=g.children[F]).isAssistant?I.push(R.id):-1!=R.tags.indexOf("right-partner")?(R.isPartner=1,R.children=[],N.push(R.id)):-1!=R.tags.indexOf("left-partner")?(R.isPartner=2,R.children=[],A.push(R.id)):-1==R.tags.indexOf("partner")||E%2?-1!=R.tags.indexOf("partner")&&E%2?(R.isPartner=2,R.children=[],A.push(R.id),E++):R.parentPartner?(M[R.parentPartner.id]||(M[R.parentPartner.id]=[]),M[R.parentPartner.id].push(R.id)):I.push(R.id):(R.isPartner=1,R.children=[],N.push(R.id),E++)}g.children=[];var P=[];for(F=0;F<N.length;F++){M[(R=o[N[F]]).id]?g.children.push(R):g.children.splice(0,0,R);for(var D=0;D<R.childrenIds.length;D++)P.push(R.childrenIds[D])}var z=[];for(F=0;F<A.length;F++){M[(R=o[A[F]]).id]?g.children.push(R):g.children.splice(0,0,R);for(D=0;D<R.childrenIds.length;D++)z.push(R.childrenIds[D])}for(F=0;F<z.length;F++){(R=o[z[F]]).collapsed||(R.parentPartner=R.parent,R.parent=g,R.isChildOfPartner=!0,g.children.push(R))}for(F=A.length-1;F>=0;F--)if(M[A[F]])for(u=0;u<M[A[F]].length;u++)g.children.push(o[M[A[F]][u]]),L++,-1==O.indexOf(A[F])&&O.push(A[F]);for(F=0;F<I.length;F++){var R=o[I[F]];g.children.push(R)}for(F=0;F<N.length;F++)if(M[N[F]])for(u=0;u<M[N[F]].length;u++)g.children.push(o[M[N[F]][u]]),U++,-1==B.indexOf(N[F])&&B.push(N[F]);for(F=0;F<P.length;F++){(R=o[P[F]]).collapsed||(R.parentPartner=R.parent,R.parent=g,R.isChildOfPartner=!0,g.children.push(R))}g.partnerSeparation=Math.max(O.length,B.length)*t.partnerChildrenSplitSeparation+t.minPartnerSeparation,I.length||!L||U?I.length||L||!U?I.length||1!=L||1!=U?I.length||L||U?!I.length||L||U?I.length&&(L||U)?g.hasPartners=7:g.hasPartners=1:g.hasPartners=6:g.hasPartners=5:g.hasPartners=4:g.hasPartners=3:g.hasPartners=2}for(c=0;c<k.length;c++){if((ae=i[(g=o[k[c]]).lcn?g.lcn:"base"]).layout==FamilyTree.normal||!S[g.pid])for(F=0;F<g.subLevels;F++){var H,j=new FamilyTree.node(g.id+"_sub_level_index_"+F,g.pid,[],"subLevel");if(FamilyTree.manager._initDinamicNode(j,g.lcn),b=g.parent)(H=b.children.indexOf(g))>-1&&(b.children.splice(H,1),b.children.splice(H,0,j)),j.children.push(g),j.parent=b,g.parent=j,o[j.id]=j}}for(var $ in w){(b=o[$]).hasAssistants=!0;j=new FamilyTree.node(b.id+"_split_assitant_0",b.id,["assistant"],"split");FamilyTree.manager._initDinamicNode(j,b.lcn,!0),o[j.id]=j;var Y=[];for(F=b.children.length-1;F>=0;F--){(R=b.children[F]).isAssistant?(R.parent=null,b.children.splice(F,1),Y.splice(0,0,R.id)):R.isPartner||(R.parent&&S[R.parent.id]&&j&&R.parent.id!=j.id&&(Object.defineProperty(S,j.id,Object.getOwnPropertyDescriptor(S,R.parent.id)),delete S[R.parent.id]),R.parent=j,j.children.unshift(R),b.children.splice(F,1))}if(Y.length%2){var q=o[Y[Y.length-1]],X=new FamilyTree.node(q.id+"_mirror",b.pid,[],"mirror");FamilyTree.manager._initDinamicNode(X,q.lcn,!0),q._m=X.id,X.isAssistant=!0,X.w=q.w,X.h=q.h,o[X.id]=X,Y.splice(Y.length-1,0,X.id)}var V=1;for(F=Y.length-1;F>=0;F--)if(F%2&&F!=Y.length-1){var W=new FamilyTree.node(b.id+"_split_assitant_"+V,b.pid,[],"split");FamilyTree.manager._initDinamicNode(W,b.lcn,!0),o[W.id]=W,Y.splice(F,0,W.id),V++}else F%2&&Y.splice(F,0,j.id);for(F=0;F<Y.length;F+=3){var G=null;G=0==F?b:o[Y[F-2]];var K=o[Y[F]],J=o[Y[F+1]],Z=o[Y[F+2]];K.parent=G,J.parent=G,Z.parent=G,G.children.push(K),G.children.push(J),G.children.push(Z)}}var Q=!1;for(var ee in i){if((ae=i[ee]).layout==FamilyTree.mixed||ae.layout==FamilyTree.tree||ae.layout==FamilyTree.treeRightOffset||ae.layout==FamilyTree.treeLeftOffset){Q=!0;break}}var te=FamilyTree.events.has("node-layout",e._event_id);if(Q||te){var ie={nodes:o,config:t,action:r,actionParams:a};for(var $ in S){for(var re=b=o[$];re.isSplit;)re=o[re.pid];var ae;if((ae=i[b.lcn?b.lcn:"base"]).layout==FamilyTree.mixed||ae.layout==FamilyTree.tree||ae.layout==FamilyTree.treeRightOffset||ae.layout==FamilyTree.treeLeftOffset||te)if(ie.pnode=b,ie.layout=ae.layout,ie.childrenIds=S[$],ie.lastChildrenPidIds=S,FamilyTree.events.publish("node-layout",[e,ie]),FamilyTree.events.publish("layout",[ie]),ie.layout==FamilyTree.mixed){var ne=ie.childrenIds;for(c=ne.length-1;c>=0;c--){b=(R=o[ne[c]]).parent,R.layout=FamilyTree.mixed;for(F=b.children.length-1;F>=0;F--)if(R.id==b.children[F].id){b.children.splice(F,1);break}if(c>0){var le=o[ne[c-1]];R.parent=le,R.layout=FamilyTree.mixed,le.children.push(R)}else b.children.push(R)}}else if(ie.layout==FamilyTree.tree||ie.layout==FamilyTree.treeRightOffset||ie.layout==FamilyTree.treeLeftOffset){j=new FamilyTree.node(b.id+"_split_0",re.id,[],"split");FamilyTree.manager._initDinamicNode(j,b.lcn),o[j.id]=j,j.layout=FamilyTree.tree;var oe=[];for(c=ie.childrenIds.length-1;c>=0;c--){for(R=o[ie.childrenIds[c]],F=0;F<b.children.length;F++)b.children[F].id==R.id&&b.children.splice(F,1);if(R.parent=null,R.layout=FamilyTree.tree,ie.layout==FamilyTree.treeRightOffset&&oe.splice(0,0,R.id),ie.layout==FamilyTree.treeLeftOffset||ie.layout==FamilyTree.treeRightOffset){var se=new FamilyTree.node(R.id+"_mirror",re.id,[],"mirror");FamilyTree.manager._initDinamicNode(se,R.lcn),se.layout=FamilyTree.tree,o[se.id]=se,oe.splice(0,0,se.id)}ie.layout!=FamilyTree.treeRightOffset&&oe.splice(0,0,R.id)}for(V=1,F=oe.length-1;F>=0;F--)if(F%2&&F!=oe.length-1){W=new FamilyTree.node(b.id+"_split_"+V,re.id,[],"split");FamilyTree.manager._initDinamicNode(W,b.lcn),W.layout=FamilyTree.tree,o[W.id]=W,oe.splice(F,0,W.id),V++}else F%2&&oe.splice(F,0,j.id);for(F=0;F<oe.length;F+=3){G=null;0==F&&(G=b);K=o[oe[F]],J=o[oe[F+1]],Z=o[oe[F+2]];0!=F&&(G=o[oe[F-3]]),0==F||J||(G=o[oe[F-2]]),K.parent=G,G.children.push(K),J&&(0!=F&&(G=o[oe[F-2]]),J.parent=G,G.children.push(J)),Z&&(0!=F&&(G=o[oe[F-1]]),Z.parent=G,G.children.push(Z))}}}}if(FamilyTree.VERTICAL_CHILDREN_ASSISTANT)for(c=0;c<s.length;c++)FamilyTree.manager._verticalAssistantIterate(s[c],o);return{nodes:o,roots:s,rootList:d}},FamilyTree.manager._getOrderFieldValue=function(e,t){var i=t;return t.field&&(i=t.field),e[i]},FamilyTree.manager._getNodeWidth=function(e,t){switch(t.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:return e.w;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:return e.h}return 0},FamilyTree.manager._isVisible=function(e,t,i,r){if(null!=e.x&&null!=e.y){if(t.lazyLoading&&r!==FamilyTree.action.exporting){function a(e,t){var i=e.x,r=e.y,a=e.w,n=e.h,l=t[0]-FamilyTree.LAZY_LOADING_FACTOR,o=t[2]+FamilyTree.LAZY_LOADING_FACTOR+t[0],s=t[1]-FamilyTree.LAZY_LOADING_FACTOR,d=t[3]+FamilyTree.LAZY_LOADING_FACTOR+t[1],c=i+a>l&&o>i;return c&&(c=r+n>s&&d>r),c}if(a(e,i))return!0;for(var n=0;n<e.children.length;n++)if(a(e.children[n],i))return!0;return!1}return!0}},FamilyTree.manager.getAllFields=function(e){var t=[FamilyTree.TAGS];for(var i in e.nodeBinding)t.push(e.nodeBinding[i]);for(i=0;i<e.nodes.length;i++)for(var r in e.nodes[i])r!==FamilyTree.ID&&r!==FamilyTree.TAGS&&r!==FamilyTree.NODES&&r!==FamilyTree.PID&&r!==FamilyTree.STPID&&(e.nodeBinding[r]||t.has(r)||t.push(r));return t},FamilyTree.manager._getMostDeepChild=function(e){if(e){var t=e;return function e(i){i.sl>t.sl&&(t=i);for(var r=0;r<i.children.length;r++)e(i.children[r])}(e),t}},FamilyTree.manager._getResponse=function(e,t,i,r,a,n,l,o,s,d,c,m,p,h,f){var u=d[0],y=[],g={top:null,left:null,bottom:null,right:null,minX:null,maxX:null,minY:null,maxY:null},T=[[],[],[]],b=a-l+2*r.padding,v=n-o+2*r.padding,F=FamilyTree.getScale(s,e,t,r.scaleInitial,r.scaleMax,r.scaleMin,b,v);if(g.top=o-r.padding,g.left=l-r.padding,g.bottom=n+r.padding-t/F,g.right=a+r.padding-e/F,g.maxX=a,g.minX=l,g.maxY=n,g.minY=o,0==d.length||null==s&&!f&&r.align==FamilyTree.CENTER){var x=Math.ceil(e/F),_=Math.ceil(t/F),w=0,k=0;if(x-2*r.padding>=a-l)switch(w=(a+l)/2-x/2,r.orientation){case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:w=(l-a)/2-x/2}else switch(w=u.x-x/2+FamilyTree.manager._getNodeWidth(u,r)/2,r.orientation){case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:(w=-(x/2-(l-a)/2))<r.padding-x&&(w=r.padding-x);break;case FamilyTree.orientation.left:case FamilyTree.orientation.bottom_left:case FamilyTree.orientation.top_left:case FamilyTree.orientation.left_top:(w=-(x/2-(a-l)/2))>-r.padding&&(w=-r.padding)}if(_-2*r.padding>=n-o)switch(k=(n+o)/2-_/2,r.orientation){case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:k=(o-n)/2-_/2}else switch((k=-(_/2-(n-o)/2))>-r.padding&&(k=-r.padding),r.orientation){case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:(k=-(_/2-(o-n)/2))<r.padding-_&&(k=r.padding-_);break;case FamilyTree.orientation.left:case FamilyTree.orientation.right:k=u.y-_/2+FamilyTree.manager._getNodeWidth(u,r)/2}s=[w,k,x,_]}else if(null==s&&!f&&r.align==FamilyTree.ORIENTATION){x=Math.ceil(e/F),_=Math.ceil(t/F),w=0,k=0;switch(r.orientation){case FamilyTree.orientation.top:w=u.x-x/2+FamilyTree.manager._getNodeWidth(u,r)/2,k=-r.padding;break;case FamilyTree.orientation.bottom:w=u.x-x/2+FamilyTree.manager._getNodeWidth(u,r)/2,k=r.padding-_;break;case FamilyTree.orientation.left:w=-r.padding,k=u.y-_/2+FamilyTree.manager._getNodeWidth(u,r)/2;break;case FamilyTree.orientation.right:w=r.padding-x,k=u.y-_/2+FamilyTree.manager._getNodeWidth(u,r)/2;break;case FamilyTree.orientation.top_left:w=-r.padding,k=-r.padding;break;case FamilyTree.orientation.right_top:w=r.padding-x,k=-r.padding;break;case FamilyTree.orientation.left_top:w=-r.padding,k=-r.padding;break;case FamilyTree.orientation.bottom_left:w=-r.padding,k=r.padding-_}s=[w,k,x,_],r.sticky&&(s[0]<g.left&&s[0]<g.right&&(s[0]=g.left>g.right?g.right:g.left),s[0]>g.right&&s[0]>g.left&&(s[0]=g.left>g.right?g.left:g.right),s[1]<g.top&&s[1]<g.bottom&&(s[1]=g.top>g.bottom?g.bottom:g.top),s[1]>g.bottom&&s[1]>g.top&&(s[1]=g.top>g.bottom?g.top:g.bottom))}if(c==FamilyTree.action.centerNode||c==FamilyTree.action.maximize){var S=p[m.id];1==m.options.horizontal&&(s[0]=S.x+S.w/2-s[2]/2),1==m.options.vertical&&(s[1]=S.y+S.h/2-s[3]/2),r.sticky&&(s[0]<g.left&&s[0]<g.right&&(s[0]=g.left>g.right?g.right:g.left),s[0]>g.right&&s[0]>g.left&&(s[0]=g.left>g.right?g.left:g.right),s[1]<g.top&&s[1]<g.bottom&&(s[1]=g.top>g.bottom?g.bottom:g.top),s[1]>g.bottom&&s[1]>g.top&&(s[1]=g.top>g.bottom?g.top:g.bottom))}if(c==FamilyTree.action.insert||c==FamilyTree.action.expand||c==FamilyTree.action.collapse||c==FamilyTree.action.update||c==FamilyTree.action.centerNode||c==FamilyTree.action.maximize){var C=null;if(c==FamilyTree.action.insert&&m&&null!=m.insertedNodeId&&null!=m.insertedNodeId)C=p[m.insertedNodeId];else if(c==FamilyTree.action.update&&m&&null!=m.visId&&null!=m.visId)C=p[m.visId];else if(c!=FamilyTree.action.expand&&c!=FamilyTree.action.collapse&&c!=FamilyTree.action.maximize||!m||null==m.id||null==m.id){if(c==FamilyTree.action.centerNode||c==FamilyTree.action.maximize){switch(r.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:m.options.vertical||(C=p[m.id]);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:m.options.horizontal||(C=p[m.id])}C&&(C=FamilyTree.manager._getMostDeepChild(C,p))}}else C=p[m.id],C=FamilyTree.manager._getMostDeepChild(C,p);if(!FamilyTree.FIXED_POSITION_ON_CLICK&&C)switch(r.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:var I=C.y+C.h-s[3]+r.padding;s[1]<I&&(s[1]=I);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:I=C.y-r.padding;s[1]>I&&(s[1]=I);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:I=C.x-r.padding;s[0]>I&&(s[0]=I);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:I=C.x+C.w-s[2]+r.padding;s[0]<I&&(s[0]=I)}}for(var N=0;N<d.length;N++)FamilyTree.manager._iterate2(d[N],p,r,s,c,m,y,h,i,T);return{animations:T,boundary:g,viewBox:s,visibleNodeIds:y,nodes:p,allFields:FamilyTree.manager.getAllFields(r)}},FamilyTree.manager._iterate2=function(e,t,i,r,a,n,l,o,s,d){if(FamilyTree.manager._isVisible(e,i,r,a)){l.push(e.id);var c=null;if((a==FamilyTree.action.expand||a==FamilyTree.action.collapse||a==FamilyTree.action.maximize)&&o&&o[e.id]&&"expandCollapseToLevel"==n.method){if(c={x:(f=o[e.id]).x,y:f.y},f){c={x:f.x,y:f.y};for(var m=e,p=null;null!=m;)o[m.id]&&o[m.id].collapsed&&(p=m),m=m.parent;p&&p.parent&&(c={x:p.parent.x,y:p.parent.y})}if(u=t[n.id]){for(m=e.parent;null!=m;)m=m.parent;m&&(c={x:u.x+u.w/2-e.w/2,y:u.y+u.h/2-e.h/2})}}else if((a==FamilyTree.action.expand||a==FamilyTree.action.collapse)&&o&&o[e.id]){if(c={x:(f=o[e.id]).x,y:f.y},"all"==n.ids&&f){c={x:f.x,y:f.y};for(m=e,p=null;null!=m;)o[m.id]&&o[m.id].collapsed&&(p=m),m=m.parent;p&&p.parent&&(c={x:p.parent.x,y:p.parent.y})}if(u=t[n.id]){for(m=e.parent;null!=m&&-1==n.ids.indexOf(e.id)&&-1==n.ids.indexOf(m.id);)m=m.parent;m&&(c={x:u.x+u.w/2-e.w/2,y:u.y+u.h/2-e.h/2})}}else if(a==FamilyTree.action.centerNode&&o&&o[e.id]){if(null!=(f=o[e.id]).x&&null!=f.y&&(c={x:f.x,y:f.y}),(h=t[n.id])&&h==e)(m=e.parent)&&m.id==n.id&&(c={x:h.x+h.w/2-e.w/2,y:h.y+h.h/2-e.h/2})}else if(a==FamilyTree.action.maximize&&o&&o[e.id]){var h;if(null!=(f=o[e.id]).x&&null!=f.y&&(c={x:f.x,y:f.y}),(h=t[n.id])&&h==e)(m=e.parent)&&m.id==n.id&&(c={x:h.x+h.w/2-e.w/2,y:h.y+h.h/2-e.h/2})}else if(a==FamilyTree.action.minimize&&o&&o[e.id]){c={x:(f=o[e.id]).x,y:f.y}}else if(a==FamilyTree.action.insert&&n&&n.insertedNodeId==e.id&&e.parent)c={x:e.parent.x,y:e.parent.y};else if(a!=FamilyTree.action.update&&a!=FamilyTree.action.insert||!o)a!==FamilyTree.action.exporting&&a!==FamilyTree.action.init&&-1==s.indexOf(e.id)&&(d[0].push(e.id),d[1].push({opacity:0}),d[2].push({opacity:1}));else{var f,u;if((!(f=o[e.id])||FamilyTree.isNEU(f.x)&&FamilyTree.isNEU(f.y))&&n){if(u=t[n.id]){for(m=u;m&&m.id==e.id;)m=m.parent;m&&(c={x:u.x,y:u.y})}}else f&&(c={x:f.x,y:f.y})}null!=c&&null!=c.x&&null!=c.y&&(c.x==e.x&&c.y==e.y||(d[0].push(e.id),d[1].push({transform:[1,0,0,1,c.x,c.y]}),d[2].push({transform:[1,0,0,1,e.x,e.y]})))}for(var y=0;y<e.stChildren.length;y++)FamilyTree.manager._iterate2(e.stChildren[y],t,i,r,a,n,l,o,s,d);for(y=0;y<e.children.length;y++)FamilyTree.manager._iterate2(e.children[y],t,i,r,a,n,l,o,s,d)},FamilyTree.manager._addExpandedNodeIdsIterate=function(e,t,i){for(var r=0;r<e.childrenIds.length;r++)i.push(e.childrenIds[r]),FamilyTree.manager._addExpandedNodeIdsIterate(t[e.childrenIds[r]],t,i)},FamilyTree.manager._setMinMaxXYAdjustifyIterate=function(e,t,i,r,a,n,l){e.x+=n.x,e.y+=n.y,FamilyTree._setMinMaxXY(e,i);for(var o=0;o<e.stChildren.length;o++)FamilyTree.manager._setMinMaxXYAdjustifyIterate(e.stChildren[o],e.stChildren[o],i,0,a,n,l);e.isPartner?e.sl=r-1:e.sl=r,null==a[t.id]&&(a[t.id]={}),null==a[t.id][e.sl]&&(a[t.id][e.sl]={minX:null,minY:null,maxX:null,maxY:null}),e.layout||FamilyTree._setMinMaxXY(e,a[t.id][e.sl]),r++;for(o=0;o<e.children.length;o++)FamilyTree.manager._setMinMaxXYAdjustifyIterate(e.children[o],t,i,r,a,n,l)},FamilyTree.manager._doNotChangePositionOfClickedNodeIfAny=function(e,t,i,r,a,n){if(i!=FamilyTree.action.expand&&i!=FamilyTree.action.collapse&&i!=FamilyTree.action.minimize&&i!=FamilyTree.action.maximize&&i!=FamilyTree.action.centerNode&&i!=FamilyTree.action.update&&i!=FamilyTree.action.insert)return{x:0,y:0};if(i==FamilyTree.action.update&&(!r||null==r.id)){if(!e||!e.length)return{x:0,y:0};r={id:e[0].id}}if(null==r.id)return{x:0,y:0};var l=r.id;(i==FamilyTree.action.minimize&&t[l].parent||i==FamilyTree.action.maximize&&t[l].parent)&&(l=t[l].pid);var o=t[l],s=a[l];return s?{x:(s.x?s.x:0)-o.x,y:(s.y?s.y:0)-o.y}:{x:0,y:0}},FamilyTree.manager._verticalAssistantIterate=function(e,t){for(var i=0;i<e.stChildren.length;i++)FamilyTree.manager._verticalAssistantIterate(e.stChildren[i],t);if(3==e.children.length)FamilyTree.manager._verticalAssistantIterate(e.children[0],t),FamilyTree.manager._verticalAssistantIterate(e.children[2],t),FamilyTree.manager._verticalAssistantIterate(e.children[1],t);else for(i=0;i<e.children.length;i++)FamilyTree.manager._verticalAssistantIterate(e.children[i],t);if(e.isAssistant&&e.isSplit&&e.children.length){for(var r=e.parent.children[0],a=e.parent.children[2],n=e.parent;!n.hasAssistants;)n=n.parent;var l={max:0},o={max:0};FamilyTree.manager._verticalAssistantLevelCountIterate(r,0,l),FamilyTree.manager._verticalAssistantLevelCountIterate(a,0,o);var s=Math.max(l.max,o.max),d=[];for(i=0;i<s;i++){var c=new FamilyTree.node(e.parent.id+"_split_assitant_level_"+i,e.pid,[],"subLevel");FamilyTree.manager._initDinamicNode(c,e.lcn,!0),i>0&&(d[i-1].children.push(c),c.parent=d[i-1]),t[c.id]=c,d.push(c)}if(d.length){for(var m=d[d.length-1],p=d[0],h=e.children.length-1;h>=0;h--){var f=e.children[h];m.children.unshift(f),f.parent=m,e.children.splice(h,1)}e.children.push(p),p.parent=e}}},FamilyTree.manager._verticalAssistantLevelCountIterate=function(e,t,i){i.max<t&&(i.max=t),t++;for(var r=0;r<e.children.length;r++)FamilyTree.manager._verticalAssistantLevelCountIterate(e.children[r],t,i)},FamilyTree.manager.__createNodes=function(e,t,i,r,a,n,l,o){for(var s=i.nodes,d=[],c={},m={},p=0;p<s.length;p++){var h,f=s[p];h=FamilyTree.STRING_TAGS?f.tags?f.tags.split(","):[]:Array.isArray(f.tags)?f.tags.slice(0):[],o.filterUI.addFilterTag(f)&&h.push("filter"),f.gender&&h.push(f.gender);var u=FamilyTree._getTemplate(h,i.tags,i.template);f.templateName&&(u=f.templateName);var y=new FamilyTree.node(f.id,f.pid,h,u);y.ftChildrenIds=[],y.rids=[],FamilyTree.isNEU(f.ppid)||(y.ppid=f.ppid),FamilyTree.isNEU(f.stpid)||(y.stpid=f.stpid),FamilyTree.isNEU(f.mid)||(y.mid=f.mid),FamilyTree.isNEU(f.fid)||(y.fid=f.fid),FamilyTree.isNEU(f.gender)||(y.gender=f.gender),Array.isArray(f.pids)?y.pids=f.pids:y.pids=[],null!=i.orderBy&&(y.order=FamilyTree.manager._getOrderFieldValue(f,i.orderBy)),e[f.id]=y,FamilyTree.isNEU(y.stpid)?(FamilyTree.isNEU(y.mid)||(c[y.mid]||(c[y.mid]=[]),c[y.mid].push(y.id)),FamilyTree.isNEU(y.fid)||(c[y.fid]||(c[y.fid]=[]),c[y.fid].push(y.id)),FamilyTree.isNEU(y.mid)&&FamilyTree.isNEU(y.fid)&&FamilyTree.isNEU(y.stpid)&&(d.has(y.id)||d.push(y.id))):(m[y.stpid]||(m[y.stpid]=[]),m[y.stpid].push(y.id))}if(null!=i.orderBy&&c)for(var g in c)c[g].sort((function(t,r){var a=e[t].order,n=e[r].order;return"number"==typeof a||"number"==typeof n?(null==a&&(a=-1),null==n&&(n=-1),i.orderBy.desc?n-a:a-n):"string"==typeof a||"string"==typeof n?(null==a&&(a=""),null==n&&(n=""),i.orderBy.desc?n.localeCompare(a):a.localeCompare(n)):void 0}));for(p=0;p<d.length;p++){var T=e[d[p]];if(T){var b=[];FamilyTree.manager._iterateSetRootIds(T.id,T.id,m,c,e,b),l.push(b)}}for(p=0;p<l.length;p++)for(var v=0;v<l.length;v++)if(v!=p){for(var F=l[p],x=l[v],_=!1,w=0;w<F.length;w++)if(x.has(F[w])){_=!0;break}_&&(l[p]=F.concat(x).unique(),l[v]=[])}for(p=l.length-1;p>=0;p--)l[p].length||l.splice(p,1);if(!i.roots||!i.roots.length){i.roots=[];for(p=l.length-1;p>=0;p--)i.roots.push(l[p][0])}for(p=0;p<i.roots.length;p++)FamilyTree.manager._iterateFT(i.roots[p],m,c,e,n,t,r,a,i)},FamilyTree.manager._iterateSetRootIds=function(e,t,i,r,a,n){var l=a[e];if(l){l.rids.has(t)||l.rids.push(t);for(var o=0;o<l.rids.length;o++)n.has(l.rids[o])||n.push(l.rids[o]);for(o=0;o<l.pids.length;o++){var s=a[l.pids[o]];if(s)for(var d=0;d<s.rids.length;d++)n.has(s.rids[d])||n.push(s.rids[d])}if(i[l.id])for(o=0;o<i[l.id].length;o++)FamilyTree.manager._iterateSetRootIds(i[l.id][o],t,i,r,a,n);if(r[l.id])for(o=0;o<r[l.id].length;o++)FamilyTree.manager._iterateSetRootIds(r[l.id][o],t,i,r,a,n)}},FamilyTree.manager._iterateFT=function(e,t,i,r,a,n,l,o,s){var d,c=r[e],m=a?a[e]:null,p=r[c.stpid],h=r[c.mid],f=r[c.fid];if(p||(c.stpid=null),h?f&&(h.tags.has("partner")||h.tags.has("left-partner")||h.tags.has("right-partner"))?(c.pid=f.id,d=f,c.ppid=h.id):(c.pid=h.id,d=h,f&&(c.ppid=f.id)):f?h&&(f.tags.has("partner")||f.tags.has("left-partner")||f.tags.has("right-partner"))?(c.pid=h.id,d=h,c.ppid=f.id):(c.pid=f.id,d=f,h&&(c.ppid=h.id)):c.pid,p){var u=a?a[p.id]:null;u&&(p.min=u.min),p.stChildrenIds.push(c.id)}else h||f?(m&&(c.collapsed=m.collapsed,c.min=m.min),d&&!d.childrenIds.has(c.id)&&d.childrenIds.push(c.id),h&&!h.ftChildrenIds.has(c.id)&&h.ftChildrenIds.push(c.id),f&&!f.ftChildrenIds.has(c.id)&&f.ftChildrenIds.push(c.id)):(m&&(c.collapsed=m.collapsed,c.min=m.min),n.push(c));l==FamilyTree.action.init&&(c.min=FamilyTree._getMin(c,s));for(var y=0;y<c.pids.length;y++){var g=r[c.pids[y]];if(g){g.pid=c.id;var T=a?a[g.id]:null;if(T&&(g.collapsed=T.collapsed,g.min=T.min),l==FamilyTree.action.init&&(g.min=FamilyTree._getMin(g,s)),o&&m&&T&&o.id==c.id?T.hasPartners&&1==m.isPartner?g.tags.push("left-partner"):T.hasPartners&&2==m.isPartner||1==m.isPartner?g.tags.push("right-partner"):2==m.isPartner?g.tags.push("left-partner"):g.tags.push("partner"):T&&2==T.isPartner?g.tags.push("left-partner"):T&&1==T.isPartner?g.tags.push("right-partner"):g.tags.push("partner"),!FamilyTree.isNEU(g)&&i[g.id])for(var b=0;b<i[g.id].length;b++){var v=r[i[g.id][b]];v&&(FamilyTree.isNEU(v.fid)||FamilyTree.isNEU(v.mid))&&FamilyTree.manager._iterateFT(i[g.id][b],t,i,r,a,n,l,o,s)}c.childrenIds.push(g.id),g.ftChildrenIds=c.ftChildrenIds}}if(t[e])for(b=0;b<t[e].length;b++)FamilyTree.manager._iterateFT(t[e][b],t,i,r,a,n,l,o,s);if(i[e])for(b=0;b<i[e].length;b++)FamilyTree.manager._iterateFT(i[e][b],t,i,r,a,n,l,o,s)},FamilyTree.manager.getAllFields=function(e){var t=[FamilyTree.TAGS];for(var i in e.nodeBinding)t.push(e.nodeBinding[i]);for(i=0;i<e.nodes.length;i++)for(var r in e.nodes[i])r!==FamilyTree.ID&&r!==FamilyTree.TAGS&&r!==FamilyTree.NODES&&r!==FamilyTree.PID&&r!==FamilyTree.STPID&&"mid"!==r&&"fid"!==r&&"pids"!==r&&(e.nodeBinding[r]||t.has(r)||t.push(r));return t},FamilyTree.templates={},FamilyTree.templates.base={defs:`<g transform="matrix(1,0,0,1,0,0)" id="dot"><circle class="bft-fill" cx="0" cy="0" r="5" stroke="#aeaeae" stroke-width="1"></circle></g>\n            <g id="base_node_menu" style="cursor:pointer;"><rect x="0" y="0" fill="transparent" width="22" height="22"></rect><circle cx="4" cy="11" r="2" fill="#ffffff"></circle><circle cx="11" cy="11" r="2" fill="#ffffff"></circle><circle cx="18" cy="11" r="2" fill="#ffffff"></circle></g>\n            <g style="cursor: pointer;" id="base_tree_menu">\n                <rect x="0" y="0" width="25" height="25" fill="transparent"></rect>\n                ${FamilyTree.icon.addUser(25,25,"#fff",0,0)}\n            </g>\n            <g style="cursor: pointer;" id="base_tree_menu_close">\n                <circle cx="12.5" cy="12.5" r="12" fill="#F57C00"></circle>\n                ${FamilyTree.icon.close(25,25,"#fff",0,0)}\n            </g>            \n            <g id="base_up">\n                <circle cx="15" cy="15" r="15" fill="#fff" stroke="#aeaeae" stroke-width="1"></circle>\n                ${FamilyTree.icon.ft(20,20,"#aeaeae",5,5)}\n            </g>\n            <clipPath id="base_img_0"><rect id="base_img_0_stroke" stroke-width="3" stroke="#fff" x="170" y="-5" rx="25" ry="25" width="70" height="70"></rect></clipPath>`,size:[250,120],linkAdjuster:{fromX:0,fromY:0,toX:0,toY:0},ripple:{radius:0,color:"#e6e6e6",rect:null},expandCollapseSize:0,svg:'<svg class="{randId} {template} bft-{mode}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>',link:'<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />',assistanseLink:'<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}"/>',pointer:'<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)"><radialGradient id="pointerGradient"><stop stop-color="#ffffff" offset="0" /><stop stop-color="#C1C1C1" offset="1" /></radialGradient><circle cx="16" cy="16" r="16" stroke-width="1" stroke="#acacac" fill="url(#pointerGradient)"></circle></g>',node:'<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>',menuButton:'<div style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" '+FamilyTree.attr.control_export_menu+'=""><hr style="background-color: #7A7A7A; height: 3px; border: none;"><hr style="background-color: #7A7A7A; height: 3px; border: none;"><hr style="background-color: #7A7A7A; height: 3px; border: none;"></div>',padding:[50,20,35,20],nodeMenuButton:`<use ${FamilyTree.attr.control_node_menu_id}="{id}" x="220" y="95" xlink:href="#base_node_menu"/>`,nodeTreeMenuButton:'<use data-ctrl-n-t-menu-id="{id}" x="10" y="10" xlink:href="#base_tree_menu"/>',nodeTreeMenuCloseButton:'<use data-ctrl-n-t-menu-c="" x="10" y="10" xlink:href="#base_tree_menu_close"/>',up:'<use x="110" y="-10" xlink:href="#base_up"/>',img_0:'<use xlink:href="#base_img_0_stroke" /><image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_0)" xlink:href="{val}"  x="170" y="-5"  width="70" height="70"></image>',link_field_0:'<text text-anchor="middle" fill="#aeaeae" '+FamilyTree.attr.width+'="290" x="0" y="0" style="font-size:10px;">{val}</text>'},FamilyTree.templates.dot=Object.assign({},FamilyTree.templates.base),FamilyTree.templates.dot.node='<circle cx="5" cy="5" r="5" fill="none" stroke-width="1" stroke="#aeaeae"></circle>',FamilyTree.templates.dot.size=[10,10],FamilyTree.templates.dot.nodeMenuButton="",FamilyTree.templates.dot.nodeTreeMenuButton="",FamilyTree.templates.dot.nodeTreeMenuCloseButton="",FamilyTree.templates.dot.up="",FamilyTree.templates.john=Object.assign({},FamilyTree.templates.base),FamilyTree.templates.john.defs=`<style>                          \n                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{\n                                            background-color: #aeaeae;\n                                        }\n                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{\n                                            background-color: #039BE5;\n                                        }        \n                                        .{randId}.male div.bft-img-button:hover{\n                                            background-color: #F57C00;\n                                        }\n                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{\n                                            background-color: #F57C00;\n                                        }        \n                                        .{randId}.female div.bft-img-button:hover{\n                                            background-color: #039BE5;\n                                        }\n                                    </style>\n                                    <clipPath id="john_img_0"><rect  x="6" y="6" rx="54" ry="54" width="108" height="108"></rect></clipPath>\n                                    ${FamilyTree.gradientCircleForDefs("circle","#aeaeae",60,5)}\n                                    ${FamilyTree.gradientCircleForDefs("male_circle","#039BE5",60,5)}\n                                    ${FamilyTree.gradientCircleForDefs("female_circle","#F57C00",60,5)}`,FamilyTree.templates.john.field_0="<text "+FamilyTree.attr.width+'="230" style="font-size: 16px;font-weight:bold;" fill="#aeaeae" x="60" y="135" text-anchor="middle">{val}</text>',FamilyTree.templates.john.field_1="<text "+FamilyTree.attr.width+'="150" style="font-size: 13px;" fill="#aeaeae" x="60" y="150" text-anchor="middle">{val}</text>',FamilyTree.templates.john.node='<use x="0" y="0" xlink:href="#circle" />',FamilyTree.templates.john.img_0='<image preserveAspectRatio="xMidYMid slice" clip-path="url(#john_img_0)" xlink:href="{val}"  x="6" y="6"  width="108" height="108"></image>',FamilyTree.templates.john.ripple={radius:60,color:"#e6e6e6",rect:null},FamilyTree.templates.john.size=[120,120],FamilyTree.templates.john_male=Object.assign({},FamilyTree.templates.john),FamilyTree.templates.john_male.node+='<use x="0" y="0" xlink:href="#male_circle" />',FamilyTree.templates.john_male.ripple={radius:60,color:"#039BE5",rect:null},FamilyTree.templates.john_female=Object.assign({},FamilyTree.templates.john),FamilyTree.templates.john_female.node+='<use x="0" y="0" xlink:href="#female_circle" />',FamilyTree.templates.john_female.ripple={radius:60,color:"#F57C00",rect:null},FamilyTree.templates.tommy=Object.assign({},FamilyTree.templates.base),FamilyTree.templates.tommy.defs="<style>                          \n                                        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{\n                                            background-color: #aeaeae;\n                                        }\n                                        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{\n                                            background-color: #039BE5;\n                                        }        \n                                        .{randId}.male div.bft-img-button:hover{\n                                            background-color: #F57C00;\n                                        }\n                                        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{\n                                            background-color: #F57C00;\n                                        }        \n                                        .{randId}.female div.bft-img-button:hover{\n                                            background-color: #039BE5;\n                                        }\n                                    </style>",FamilyTree.templates.tommy.field_0="<text "+FamilyTree.attr.width+'="230" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="10" y="90" text-anchor="start">{val}</text>',FamilyTree.templates.tommy.field_1="<text "+FamilyTree.attr.width+'="150" style="font-size: 14px;" fill="#ffffff" x="10" y="65" text-anchor="start">{val}</text>',FamilyTree.templates.tommy.node='<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#aeaeae" stroke="#aeaeae" rx="7" ry="7"></rect>',FamilyTree.templates.tommy_male=Object.assign({},FamilyTree.templates.tommy),FamilyTree.templates.tommy_male.node='<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#039BE5" stroke="#aeaeae" rx="7" ry="7"></rect>',FamilyTree.templates.tommy_female=Object.assign({},FamilyTree.templates.tommy),FamilyTree.templates.tommy_female.node='<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#F57C00" stroke="#aeaeae" rx="7" ry="7"></rect>',FamilyTree.templates.hugo=Object.assign({},FamilyTree.templates.base),FamilyTree.templates.hugo.up='<use x="200" y="10" xlink:href="#hugo_up"/>',FamilyTree.templates.hugo.nodeMenuButton=`<use x="225" y="10" ${FamilyTree.attr.control_node_menu_id}="{id}" xlink:href="#hugo_node_menu"/>`,FamilyTree.templates.hugo.defs=`<clipPath id="hugo_img_0"><rect id="hugo_img_0_stroke" stroke-width="2" stroke="#fff" x="90" y="-5" rx="25" ry="25" width="70" height="70"></rect></clipPath>\n                                    <linearGradient id="hugo_grad_female" x1="0%" y1="0%" x2="100%" y2="0%">\n                                        <stop offset="0%" style="stop-color:#FF8024;stop-opacity:1" />\n                                        <stop offset="100%" style="stop-color:#FF46A3;stop-opacity:1" />\n                                    </linearGradient>\n                                    <linearGradient id="hugo_grad_male" x1="0%" y1="0%" x2="100%" y2="0%">\n                                        <stop offset="0%" style="stop-color:#00D3A5;stop-opacity:1" />\n                                        <stop offset="100%" style="stop-color:#00A7D4;stop-opacity:1" />\n                                    </linearGradient>\n                                    <linearGradient id="hugo_grad" x1="0%" y1="0%" x2="100%" y2="0%">\n                                        <stop offset="0%" style="stop-color:#D0D0D0;stop-opacity:1" />\n                                        <stop offset="100%" style="stop-color:#909090;stop-opacity:1" />\n                                    </linearGradient>\n                                    <g id="hugo_up">\n                                        <circle cx="12" cy="12" r="15" fill="transparent" ></circle>\n                                        ${FamilyTree.icon.ft(24,24,"#fff",0,0)}\n                                    </g>\n                                    <g id="hugo_node_menu" style="cursor:pointer;"><rect x="0" y="0" fill="transparent" width="22" height="22"></rect><circle cx="11" cy="4" r="2" fill="#ffffff"></circle><circle cx="11" cy="11" r="2" fill="#ffffff"></circle><circle cx="11" cy="18" r="2" fill="#ffffff"></circle></g>\n                                    <style>\n                                        .{randId} .bft-edit-form-header{\n                                            background: linear-gradient(90deg, #D0D0D0 0%, #909090 100%);\n                                        }\n                                        .{randId}.male .bft-edit-form-header{\n                                            background: linear-gradient(90deg, #00D3A5 0%, #00A7D4 100%);\n                                        }\n                                        .{randId}.female .bft-edit-form-header{\n                                            background: linear-gradient(90deg, #FF8024 0%, #FF46A3 100%);\n                                        }  \n                                        .{randId} .bft-img-button{\n                                            background-color: #909090;\n                                        }      \n                                        .{randId} .bft-img-button:hover{\n                                            background-color: #D0D0D0;\n                                        }\n                                        .{randId}.male .bft-img-button{\n                                            background-color: #00A7D4;\n                                        }      \n                                        .{randId}.male .bft-img-button:hover{\n                                            background-color: #00D3A5;\n                                        }\n                                        .{randId}.female .bft-img-button{\n                                            background-color: #FF46A3;\n                                        }      \n                                        .{randId}.female .bft-img-button:hover{\n                                            background-color: #FF8024;\n                                        }\n                                        \n                                    </style>`,FamilyTree.templates.hugo.img_0='<use xlink:href="#hugo_img_0_stroke" /><image preserveAspectRatio="xMidYMid slice" clip-path="url(#hugo_img_0)" xlink:href="{val}"  x="90" y="-5"  width="70" height="70"></image>',FamilyTree.templates.hugo.field_0="<text "+FamilyTree.attr.width+'="230" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="125" y="85" text-anchor="middle">{val}</text>',FamilyTree.templates.hugo.field_1="<text "+FamilyTree.attr.width+'="230" style="font-size: 14px;" fill="#ffffff" x="125" y="105" text-anchor="middle">{val}</text>',FamilyTree.templates.hugo.node='<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill=url(#hugo_grad) stroke="#aeaeae" rx="7" ry="7"></rect>',FamilyTree.templates.hugo_male=Object.assign({},FamilyTree.templates.hugo),FamilyTree.templates.hugo_male.node='<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill=url(#hugo_grad_male) stroke="#aeaeae" rx="7" ry="7"></rect>',FamilyTree.templates.hugo_female=Object.assign({},FamilyTree.templates.hugo),FamilyTree.templates.hugo_female.node='<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill=url(#hugo_grad_female) stroke="#aeaeae" rx="7" ry="7"></rect>',FamilyTree.templates.mother=Object.assign({},FamilyTree.templates.base),FamilyTree.templates.mother.up="",FamilyTree.templates.mother.node='<rect x="0" y="0" height="{h}" width="{w}" style="fill:transparent;"  stroke-width="1" stroke="#F57C00" rx="5" ry="5"></rect><text style="font-size: 18px;" fill="#F57C00" x="240" y="30" text-anchor="end">Add mother</text>'+FamilyTree.icon.mother(70,70,"#F57C00",10,40),FamilyTree.templates.mother.field_0="",FamilyTree.templates.mother.field_1="",FamilyTree.templates.father=Object.assign({},FamilyTree.templates.mother),FamilyTree.templates.father.node='<rect x="0" y="0" height="{h}" width="{w}" style="fill:transparent;height:{h}; width:{w};stroke-width:1;stroke:#039BE5;rx:5;ry:5;"></rect><text style="font-size: 18px;" fill="#039BE5" x="240" y="30" text-anchor="end">Add father</text>'+FamilyTree.icon.father(70,70,"#039BE5",10,40),FamilyTree.templates.partner=Object.assign({},FamilyTree.templates.mother),FamilyTree.templates.partner.node='<rect x="0" y="0" height="{h}" width="{w}" style="fill:transparent;height:{h}; width:{w};stroke-width:1;stroke:#aeaeae;rx:5;ry:5;"></rect><text style="font-size: 18px;" fill="#aeaeae" x="240" y="30" text-anchor="end">Add partner</text>',FamilyTree.templates.son=Object.assign({},FamilyTree.templates.mother),FamilyTree.templates.son.node='<rect x="0" y="0" height="{h}" width="{w}" style="fill:transparent;height:{h}; width:{w};stroke-width:1;stroke:#039BE5;rx:5;ry:5;"></rect><text style="font-size: 18px;" fill="#039BE5" x="240" y="30" text-anchor="end">Add son</text>'+FamilyTree.icon.son(70,70,"#039BE5",10,40),FamilyTree.templates.daughter=Object.assign({},FamilyTree.templates.mother),FamilyTree.templates.daughter.node='<rect x="0" y="0" height="{h}" width="{w}" style="fill:transparent;height:{h}; width:{w};stroke-width:1;stroke:#F57C00;rx:5;ry:5;"></rect><text style="font-size: 18px;" fill="#F57C00" x="240" y="30" text-anchor="end">Add daughter</text>'+FamilyTree.icon.daughter(70,70,"#F57C00",10,40),FamilyTree.templates.husband=Object.assign({},FamilyTree.templates.mother),FamilyTree.templates.husband.node='<rect x="0" y="0" height="{h}" width="{w}" style="fill:transparent;height:{h}; width:{w};stroke-width:1;stroke:#039BE5;rx:5;ry:5;"></rect><text style="font-size: 18px;" fill="#039BE5" x="240" y="30" text-anchor="end">Add husband</text>'+FamilyTree.icon.husband(70,70,"#039BE5",10,40),FamilyTree.templates.wife=Object.assign({},FamilyTree.templates.mother),FamilyTree.templates.wife.node='<rect x="0" y="0" height="{h}" width="{w}" style="fill:transparent;height:{h}; width:{w};stroke-width:1;stroke:#F57C00;rx:5;ry:5;"></rect><text style="font-size: 18px;" fill="#F57C00" x="240" y="30" text-anchor="end">Add wife</text>'+FamilyTree.icon.wife(70,70,"#F57C00",10,40),FamilyTree.templates.pet=Object.assign({},FamilyTree.templates.mother),FamilyTree.templates.pet.node='<rect x="0" y="0" style="fill:transparent;height:{h}; width:{w};stroke-width:1;stroke:#F57C00;rx:5;ry:5;"></rect><text style="font-size: 18px;" fill="#F57C00" x="240" y="30" text-anchor="end">Add pet</text>'+FamilyTree.icon.teddy(70,70,"#F57C00",10,40),FamilyTree.templates.cgroup=Object.assign({},FamilyTree.templates.base),FamilyTree.templates.cgroup.defs="",FamilyTree.templates.cgroup.size=[250,120],FamilyTree.templates.cgroup.padding=[0,0,0,0],FamilyTree.templates.cgroup.node="",FamilyTree.templates.split=Object.assign({},FamilyTree.templates.base),FamilyTree.templates.split.size=[10,10],FamilyTree.templates.split.node='<circle cx="5" cy="5" r="5" fill="none" stroke-width="1" stroke="#aeaeae"></circle>',FamilyTree.templates.mirror={linkAdjuster:{},link:"",node:"",nodeMenuButton:"",size:[0,0]},FamilyTree.ui={_defsIds:{},defs:function(e){var t="";for(var i in FamilyTree.templates){var r=FamilyTree.templates[i];r.defs&&(FamilyTree.ui._defsIds[i]=FamilyTree.randomId(),t+=r.defs.replaceAll("{randId}",FamilyTree.ui._defsIds[i]))}return"<defs>"+t+e+"</defs>"},lonely:function(e){return e.nodes&&e.nodes.length?"":FamilyTree.IT_IS_LONELY_HERE.replace("{link}",FamilyTree.RES.IT_IS_LONELY_HERE_LINK)},pointer:function(e,t,i){return t===FamilyTree.action.exporting?"":FamilyTree.t(e.template,!1,i).pointer},node:function(e,t,i,r,a,n,l,o,s,d){var c=FamilyTree.t(e.templateName,e.min,s),m=c.node.replaceAll("{w}",e.w).replaceAll("{h}",e.h);c.defs&&(m=m.replaceAll("{randId}",FamilyTree.ui._defsIds[e.templateName])),null==l&&(l=r.nodeBinding);var p={node:e,data:t};for(var h in l){var f,u=l[h];t&&(f=t[u]);var y=FamilyTree._lblIsImg(r,h);if(p.value=f,p.element=c[h],p.name=u,!1!==FamilyTree.events.publish("field",[d,p])&&null!=p.value&&null!=p.value&&null!=p.element){y||"string"!=typeof p.value||(p.value=FamilyTree.wrapText(p.value,p.element));var g=p.element.replace("{val}",p.value);m+=g=g.replaceAll("{ew}",e.w-(e.padding?e.padding[1]:0)).replaceAll("{cw}",e.w/2).replaceAll("{randId}",FamilyTree.randomId()).replaceAll("{randId2}",FamilyTree.randomId())}}var T=FamilyTree._getPosition(i,e,a,n),b="node";Array.isArray(e.tags)&&e.tags.length&&(b+=" "+e.tags.join(" ")),e.layout&&(b+=" tree-layout");var v="";e.lcn&&(v='lcn="'+e.lcn+'"');var F=FamilyTree.nodeOpenTag.replace("{lcn}",v).replace("{id}",e.id).replace("{class}",b).replace("{sl}",e.sl).replace("{level}",e.level).replace("{x}",T.x).replace("{y}",T.y),x=FamilyTree._getOpacity(i,e);return m=(F=F.replace("{opacity}",x))+(m+=FamilyTree.ui.nodeBtns(r,e,o,c,d))+FamilyTree.grCloseTag},nodeBtns:function(e,t,i,r,a){var n="";return null==e.nodeMenu||t.isSplit||i===FamilyTree.action.exporting||(n+=r.nodeMenuButton.replace("{id}",t.id).replace("{cw}",t.w/2).replace("{ew}",t.w-(t.padding?t.padding[1]:0))),null==e.nodeCircleMenu||t.isSplit||i===FamilyTree.action.exporting||FamilyTree.isNEU(r.nodeCircleMenuButton)||(n+='<g style="cursor:pointer;" transform="matrix(1,0,0,1,'+r.nodeCircleMenuButton.x+","+r.nodeCircleMenuButton.y+')" '+FamilyTree.attr.control_node_circle_menu_id+'="'+t.id+'"><circle cx="0" cy="0" fill="'+r.nodeCircleMenuButton.color+'" r="'+r.nodeCircleMenuButton.radius+'" stroke-width="1" stroke="'+r.nodeCircleMenuButton.stroke+'"></circle><line x1="-'+r.nodeCircleMenuButton.radius/2+'" y1="-6" x2="'+r.nodeCircleMenuButton.radius/2+'" y2="-6" stroke-width="2" stroke="'+r.nodeCircleMenuButton.stroke+'"></line><line x1="-'+r.nodeCircleMenuButton.radius/2+'" y1="0" x2="'+r.nodeCircleMenuButton.radius/2+'" y2="0" stroke-width="2" stroke="'+r.nodeCircleMenuButton.stroke+'"></line><line x1="-'+r.nodeCircleMenuButton.radius/2+'" y1="6" x2="'+r.nodeCircleMenuButton.radius/2+'" y2="6" stroke-width="2" stroke="'+r.nodeCircleMenuButton.stroke+'"></line></g>'),n},expandCollapseBtn:function(e,t,i,r,a){var n="";if(r!==FamilyTree.action.exporting&&!t.isSplit){var l=i[t.lcn?t.lcn:"base"],o=0,s=0,d=FamilyTree.t(t.templateName,t.min,a);if(t.childrenIds.length>0){if(t.hasPartners){for(var c=!1,m=0;m<t.children.length;m++)t.children[m].parentPartner||t.children[m].isPartner||(c=!0);if(!c)return""}switch(l.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:o=t.x+t.w/2,s=t.y+t.h;break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:o=t.x+t.w/2,s=t.y;break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:o=t.x,s=t.y+t.h/2;break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:o=t.x+t.w,s=t.y+t.h/2}if(o-=d.expandCollapseSize/2,s-=d.expandCollapseSize/2,e.getCollapsedIds(t).length?(n+=FamilyTree.expcollOpenTag.replace("{id}",t.id).replace("{x}",o).replace("{y}",s),n+=d.plus,n+=FamilyTree.grCloseTag):(n+=FamilyTree.expcollOpenTag.replace("{id}",t.id).replace("{x}",o).replace("{y}",s),n+=d.minus,n+=FamilyTree.grCloseTag),-1!=n.indexOf("{collapsed-children-count}")){var p=FamilyTree.collapsedChildrenCount(e,t);n=n.replace("{collapsed-children-count}",p)}if(-1!=n.indexOf("{collapsed-children-total-count}")){var h=FamilyTree.collapsedChildrenTotalCount(e,t);n=n.replace("{collapsed-children-total-count}",h)}}e._nodeHasHiddenParent(t)&&(n+=FamilyTree.upOpenTag.replace("{id}",t.id).replace("{x}",t.x).replace("{y}",t.y),n+=d.up,n+=FamilyTree.grCloseTag)}var f={html:n,node:t};return FamilyTree.events.publish("renderbuttons",[e,f]),f.html},link:function(e,t,i,r,a,n){var l=e.lcn?e.lcn:"base",o=t._layoutConfigs[l],s=FamilyTree.t(e.templateName,e.min,i),d=[],c=o.levelSeparation/2;e.layout!=FamilyTree.mixed&&e.layout!=FamilyTree.tree||(c=o.mixedHierarchyNodesSeparation/2);var m=0,p=FamilyTree.getRootOf(e).id,h=r[p][e.sl],f=void 0;if(e.hasPartners){f={ids:[],indexes:{},ppnodes:{},lastLeft:null,firstRight:null,maxSidePartnersWithChildren:0,rightIds:[],leftIds:[],partnerChildrenSplitSeparation:t.config.partnerChildrenSplitSeparation};for(var u=0;u<e.children.length;u++){(y=e.children[u]).parentPartner?(f.ppnodes[y.id]=y.parentPartner,f.ids.push(y.id),1==y.parentPartner.isPartner?(-1==f.rightIds.indexOf(y.parentPartner.id)&&f.rightIds.push(y.parentPartner.id),f.indexes[y.id]=f.rightIds.indexOf(y.parentPartner.id),f.firstRight||(f.firstRight=y)):2==y.parentPartner.isPartner&&(-1==f.leftIds.indexOf(y.parentPartner.id)&&f.leftIds.push(y.parentPartner.id),f.indexes[y.id]=f.leftIds.indexOf(y.parentPartner.id),f.lastLeft=y)):y.isPartner||(f.lastLeft=y,f.firstRight||(f.firstRight=y))}f.maxSidePartnersWithChildren=Math.max(f.leftIds.length,f.rightIds.length),m=0==f.maxSidePartnersWithChildren?t.config.minPartnerSeparation/2:t.config.minPartnerSeparation/2+f.partnerChildrenSplitSeparation*f.maxSidePartnersWithChildren+f.partnerChildrenSplitSeparation/2}for(u=0;u<e.children.length;u++){var y=e.children[u],g=r[p][y.sl],T={xa:0,ya:0,xb:0,yb:0,xc:0,yc:0,xd:0,yd:0,x:0,y:0,rotate:0},b=(s=FamilyTree.t(y.templateName,y.min,i)).link;if(y.isChildOfPartner)switch(o.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:var v=1==y.layout?void 0:g.minY-(g.minY-h.maxY)/2;T=FamilyTree.ui._linkTopToBottom(y.parentPartner,y,s,c,v);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:v=1==y.layout?void 0:g.maxY-(g.maxY-h.minY)/2;T=FamilyTree.ui._linkBottomToTop(y.parentPartner,y,s,c,v);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:v=1==y.layout?void 0:g.maxX-(g.maxX-h.minX)/2;T=FamilyTree.ui._linkRightToLeft(y.parentPartner,y,s,c,v);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:v=1==y.layout?void 0:g.minX-(g.minX-h.maxX)/2;T=FamilyTree.ui._linkLeftToRight(y.parentPartner,y,s,c,v)}else if(f&&-1!=f.ids.indexOf(y.id))switch(o.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:T=FamilyTree.ui._linkPpTop(f,e,y,g,h,s);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:T=FamilyTree.ui._linkPpBottom(f,e,y,g,h,s);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:T=FamilyTree.ui._linkPpRight(f,e,y,g,h,s);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:T=FamilyTree.ui._linkPpLeft(f,e,y,g,h,s)}else{var F=y.isAssistant&&y.rightNeighbor&&y.rightNeighbor.isAssistant&&y.parent==y.rightNeighbor.parent,x=y.isAssistant&&y.leftNeighbor&&y.leftNeighbor.isAssistant&&y.parent==y.leftNeighbor.parent;if((F||2==y.layout)&&y.rightNeighbor&&y.rightNeighbor.isSplit)switch(o.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:T=FamilyTree.ui._linkRightToLeft(y.rightNeighbor,y,s,c);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:T=FamilyTree.ui._linkBottomToTop(y.rightNeighbor,y,s,c)}else if((x||2==y.layout)&&y.leftNeighbor&&y.leftNeighbor.isSplit)switch(o.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:T=FamilyTree.ui._linkLeftToRight(y.leftNeighbor,y,s,c);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:T=FamilyTree.ui._linkTopToBottom(y.leftNeighbor,y,s,c)}else switch(o.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:if(1==y.isPartner)T=FamilyTree.ui._linkLeftToRight(e,y,s,m);else if(2==y.isPartner)T=FamilyTree.ui._linkRightToLeft(e,y,s,m);else{v=1==y.layout?void 0:g.minY-(g.minY-h.maxY)/2;T=FamilyTree.ui._linkTopToBottom(e,y,s,c,v)}break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:if(1==y.isPartner)T=FamilyTree.ui._linkLeftToRight(e,y,s,m);else if(2==y.isPartner)T=FamilyTree.ui._linkRightToLeft(e,y,s,m);else{v=1==y.layout?void 0:g.maxY-(g.maxY-h.minY)/2;T=FamilyTree.ui._linkBottomToTop(e,y,s,c,v)}break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:if(1==y.isPartner)T=FamilyTree.ui._linkTopToBottom(e,y,s,m);else if(2==y.isPartner)T=FamilyTree.ui._linkBottomToTop(e,y,s,m);else{v=1==y.layout?void 0:g.maxX-(g.maxX-h.minX)/2;T=FamilyTree.ui._linkRightToLeft(e,y,s,c,v)}break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:if(1==y.isPartner)T=FamilyTree.ui._linkTopToBottom(e,y,s,m);else if(2==y.isPartner)T=FamilyTree.ui._linkBottomToTop(e,y,s,m);else{v=1==y.layout?void 0:g.minX-(g.minX-h.maxX)/2;T=FamilyTree.ui._linkLeftToRight(e,y,s,c,v)}}}if(-1!=b.indexOf("{rounded}"))if(T.xa==T.xb&&T.xa==T.xc&&T.xa==T.xd||T.ya==T.yb&&T.ya==T.yc&&T.ya==T.yd)b=b.replace("{rounded}","M"+T.xa+","+T.ya+" L"+T.xd+","+T.yd);else if(Math.abs(T.xa-T.xd)<=FamilyTree.LINK_ROUNDED_CORNERS&&Math.abs(T.xa-T.xc)<=FamilyTree.LINK_ROUNDED_CORNERS&&Math.abs(T.xa-T.xb)<=FamilyTree.LINK_ROUNDED_CORNERS)b=b.replace("{rounded}","M"+T.xa+","+T.ya+" L"+T.xa+","+T.yd);else if(Math.abs(T.ya-T.yd)<=FamilyTree.LINK_ROUNDED_CORNERS&&Math.abs(T.ya-T.yc)<=FamilyTree.LINK_ROUNDED_CORNERS&&Math.abs(T.ya-T.yb)<=FamilyTree.LINK_ROUNDED_CORNERS)b=b.replace("{rounded}","M"+T.xa+","+T.ya+" L"+T.xd+","+T.ya);else{var _=FamilyTree.ui._roundedEdge(T.xa,T.ya,T.xb,T.yb,T.xc,T.yc),w=FamilyTree.ui._roundedEdge(T.xb,T.yb,T.xc,T.yc,T.xd,T.yd);b=b.replace("{rounded}","M"+_.x1+","+_.y1+" "+_.x2+","+_.y2+" Q"+_.qx1+","+_.qy1+" "+_.qx2+","+_.qy2+" L"+w.x2+","+w.y2+" Q"+w.qx1+","+w.qy1+" "+w.qx2+","+w.qy2+" L"+w.x3+","+w.y3)}else b=-1!=b.indexOf("{edge}")?b.replace("{edge}","M"+T.xa+","+T.ya+" "+T.xb+","+T.yb+" "+T.xc+","+T.yc+" L"+T.xd+","+T.yd):-1!=b.indexOf("{curve}")?b.replace("{curve}","M"+T.xa+","+T.ya+" C"+T.xb+","+T.yb+" "+T.xc+","+T.yc+" "+T.xd+","+T.yd):b.replaceAll("{xa}",T.xa).replaceAll("{ya}",T.ya).replaceAll("{xb}",T.xb).replaceAll("{yb}",T.yb).replaceAll("{xc}",T.xc).replaceAll("{yc}",T.yc).replaceAll("{xd}",T.xd).replaceAll("{yd}",T.yd);d.push(FamilyTree.linkOpenTag.replace("{id}",e.id).replace("{class}","link "+y.tags.join(" ")).replace("{child-id}",y.id));var k={node:e,cnode:y,p:T,html:b,action:n};FamilyTree.events.publish("render-link",[t,k]),d.push(k.html);var S="";for(var C in t.config.linkBinding){var I=t.config.linkBinding[C],N=t._get(y.id);if(N){var A=N[I];k.value=A,k.element=s[C],k.name=I,!1!==FamilyTree.events.publish("label",[t,k])&&(FamilyTree.isNEU(k.value)||FamilyTree.isNEU(k.element)||(S+=k.element.replace("{val}",k.value)))}}""!=S&&(S=FamilyTree.linkFieldsOpenTag.replace("{x}",T.x).replace("{y}",T.y).replace("{rotate}",0)+S+FamilyTree.grCloseTag,d.push(S)),d.push(FamilyTree.grCloseTag)}return d.join("")},svg:function(e,t,i,r,a,n){return FamilyTree.t(r.template,!1,n).svg.replace("{w}",e).replace("{h}",t).replace("{viewBox}",i).replace("{randId}",FamilyTree.ui._defsIds[r.template]).replace("{mode}",r.mode).replace("{template}",r.template).replace("{content}",(function(){return a}))},menuButton:function(e){return null==e.menu?"":FamilyTree.t(e.template,!1).menuButton.replaceAll("{p}",e.padding)},_roundedEdge:function(e,t,i,r,a,n){var l,o,s,d=FamilyTree.LINK_ROUNDED_CORNERS,c=0;return e==i&&e==a||t==r&&t==n?(l=s=i,o=c=r):(e!=a&&i==a&&(l=s=i,o=r,t<n?c=r+d:t>n&&(c=r-d)),e<a&&i==a?i-=d:e>a&&i==a&&(i+=d),t!=n&&r==n&&(l=i,o=c=r,e<a?s=i+d:e>a&&(s=i-d)),t<n&&r==n?r-=d:t>n&&r==n&&(r+=d)),{x1:e,y1:t,x2:i,y2:r,x3:a,y3:n,qx1:l,qy1:o,qx2:s,qy2:c}},_linkTopToBottom:function(e,t,i,r,a){var n,l,o,s,d,c=0;return n=e.x+e.w/2+i.linkAdjuster.toX,l=e.y+e.h+i.linkAdjuster.toY,s=o=t.x+t.w/2+i.linkAdjuster.fromX,d=t.y+i.linkAdjuster.fromY,{xa:n,ya:l,xb:n,yb:c=e.rightNeighbor&&e.rightNeighbor.isAssistant&&"split"==t.templateName?e.rightNeighbor.y+e.rightNeighbor.h+r:"split"!=e.templateName||!t.isAssistant&&2!=t.layout?"split"==t.templateName?l+r:null!=a?a:d-r:d,xc:o,yc:c,xd:s,yd:d,x:o,y:c+16,rotate:0}},_linkBottomToTop:function(e,t,i,r,a){var n,l,o,s,d,c=0;return n=e.x+e.w/2+i.linkAdjuster.toX,l=e.y+i.linkAdjuster.toY,s=o=t.x+t.w/2+i.linkAdjuster.fromX,d=t.y+t.h+i.linkAdjuster.fromY,{xa:n,ya:l,xb:n,yb:c=e.rightNeighbor&&e.rightNeighbor.isAssistant&&"split"==t.templateName?e.rightNeighbor.y-r:"split"!=e.templateName||!t.isAssistant&&2!=t.layout?"split"==t.templateName?l-r:null!=a?a:d+r:d,xc:o,yc:c,xd:s,yd:d,x:o,y:c-14,rotate:0}},_linkRightToLeft:function(e,t,i,r,a){var n,l,o,s,d,c,m=0;return n=e.x+i.linkAdjuster.toX,l=e.y+e.h/2+i.linkAdjuster.toY,d=t.x+t.w+i.linkAdjuster.fromX,c=s=t.y+t.h/2+i.linkAdjuster.fromY,o=l,90,{xa:n,ya:l,xb:m=e.rightNeighbor&&e.rightNeighbor.isAssistant&&"split"==t.templateName?e.rightNeighbor.x-r:"split"!=e.templateName||!t.isAssistant&&2!=t.layout?"split"==t.templateName?n-r:null!=a?a:d+r:d,yb:o,xc:m,yc:s,xd:d,yd:c,x:m-16,y:s,rotate:90}},_linkLeftToRight:function(e,t,i,r,a){var n,l,o,s,d,c,m=0;return n=e.x+e.w+i.linkAdjuster.toX,l=e.y+e.h/2+i.linkAdjuster.toY,d=t.x+i.linkAdjuster.fromX,c=s=t.y+t.h/2+i.linkAdjuster.fromY,o=l,270,{xa:n,ya:l,xb:m=e.rightNeighbor&&e.rightNeighbor.isAssistant&&"split"==t.templateName?e.rightNeighbor.x+e.rightNeighbor.w+r:"split"!=e.templateName||!t.isAssistant&&2!=t.layout?"split"==t.templateName?n+r:null!=a?a:d-r:d,yb:o,xc:m,yc:s,xd:d,yd:c,x:m+14,y:s,rotate:270}},_linkPpTop:function(e,t,i,r,a,n){var l=e.ppnodes[i.id],o=l.y+l.h/2,s=r.minY-(r.minY-a.maxY)/2,d=(r.minY-a.maxY)/e.maxSidePartnersWithChildren/4,c=FamilyTree.ui.__linkPpBottomTop(e,t,i,s,d,l),m=c.x;return s=c.mid,FamilyTree.ui._linkTopToBottom({x:m,y:o,w:0,h:0},i,n,0,s)},_linkPpBottom:function(e,t,i,r,a,n){var l=e.ppnodes[i.id],o=l.y+l.h/2,s=r.maxY-(r.maxY-a.minY)/2,d=(r.maxY-a.minY)/e.maxSidePartnersWithChildren/4,c=FamilyTree.ui.__linkPpBottomTop(e,t,i,s,d,l),m=c.x;return s=c.mid,FamilyTree.ui._linkBottomToTop({x:m,y:o,w:0,h:0},i,n,0,s)},_linkPpLeft:function(e,t,i,r,a,n){var l=e.ppnodes[i.id],o=r.minX-(r.minX-a.maxX)/2,s=(r.minX-a.maxX)/e.maxSidePartnersWithChildren/4,d=l.x+l.w/2,c=FamilyTree.ui.__linkPpLeftRight(e,t,i,o,s,l),m=c.y;return o=c.mid,FamilyTree.ui._linkLeftToRight({x:d,y:m,w:0,h:0},i,n,0,o)},_linkPpRight:function(e,t,i,r,a,n){var l=e.ppnodes[i.id],o=r.maxX-(r.maxX-a.minX)/2,s=(r.maxX-a.minX)/e.maxSidePartnersWithChildren/4,d=l.x+l.w/2,c=FamilyTree.ui.__linkPpLeftRight(e,t,i,o,s,l),m=c.y;return o=c.mid,FamilyTree.ui._linkRightToLeft({x:d,y:m,w:0,h:0},i,n,0,o)},__linkPpBottomTop:function(e,t,i,r,a,n){var l=0;return 1==n.isPartner?(l=n.x-t.partnerSeparation/2+e.indexes[i.id]*e.partnerChildrenSplitSeparation-(e.rightIds.length-1)*e.partnerChildrenSplitSeparation/2,e.lastLeft&&l<e.lastLeft.x+e.lastLeft.w/2?l<i.x+i.w/2?r-=(e.indexes[i.id]+1)*a:r-=(e.rightIds.length-e.indexes[i.id])*a:l<i.x+i.w/2?r+=(e.rightIds.length-e.indexes[i.id])*a:r+=(e.indexes[i.id]+1)*a):2==n.isPartner&&(l=n.x+n.w+t.partnerSeparation/2+e.indexes[i.id]*e.partnerChildrenSplitSeparation-(e.leftIds.length-1)*e.partnerChildrenSplitSeparation/2,e.firstRight&&l>e.firstRight.x+e.firstRight.w/2?l<i.x+i.w/2?r-=(e.indexes[i.id]+1)*a:r-=(e.leftIds.length-e.indexes[i.id])*a:l<i.x+i.w/2?r+=(e.leftIds.length-e.indexes[i.id])*a:r+=(e.indexes[i.id]+1)*a),{x:l,mid:r}},__linkPpLeftRight:function(e,t,i,r,a,n){var l=0;return 1==n.isPartner?(l=n.y-t.partnerSeparation/2+e.indexes[i.id]*e.partnerChildrenSplitSeparation-(e.rightIds.length-1)*e.partnerChildrenSplitSeparation/2,e.lastLeft&&l<e.lastLeft.y+e.lastLeft.h/2?l<i.y+i.h/2?r-=(e.indexes[i.id]+1)*a:r-=(e.rightIds.length-e.indexes[i.id])*a:l<i.y+i.h/2?r+=(e.rightIds.length-e.indexes[i.id])*a:r+=(e.indexes[i.id]+1)*a):2==n.isPartner&&(l=n.y+n.h+t.partnerSeparation/2+e.indexes[i.id]*e.partnerChildrenSplitSeparation-(e.leftIds.length-1)*e.partnerChildrenSplitSeparation/2,e.firstRight&&l>e.firstRight.y+e.firstRight.h/2?l<i.y+i.h/2?r-=(e.indexes[i.id]+1)*a:r-=(e.leftIds.length-e.indexes[i.id])*a:l<i.y+i.h/2?r+=(e.leftIds.length-e.indexes[i.id])*a:r+=(e.indexes[i.id]+1)*a),{y:l,mid:r}}},FamilyTree.ui._base_nodeBtns=FamilyTree.ui.nodeBtns,FamilyTree.ui.nodeBtns=function(e,t,i,r,a){var n="";if(a._tree_menu_temp)!t.isSplit&&i!==FamilyTree.action.exporting&&r.nodeTreeMenuCloseButton&&a._tree_menu_temp.id==t.id&&(n+=r.nodeTreeMenuCloseButton);else{n=FamilyTree.ui._base_nodeBtns(e,t,i,r,a);null!=e.nodeTreeMenu&&!t.isSplit&&i!==FamilyTree.action.exporting&&r.nodeTreeMenuButton&&(n+=r.nodeTreeMenuButton.replace("{id}",t.id))}return n},FamilyTree.ui._base_expandCollapseBtn=FamilyTree.ui.expandCollapseBtn,FamilyTree.ui.expandCollapseBtn=function(e,t,i,r,a){return e._tree_menu_temp?"":FamilyTree.ui._base_expandCollapseBtn(e,t,i,r,a)},FamilyTree.xScrollUI=function(e,t,i,r,a){this.element=e,this.requestParams=i,this.config=t,this.onSetViewBoxCallback=r,this.onDrawCallback=a,this.pos=0},FamilyTree.xScrollUI.prototype.addListener=function(e){var t=this;if((this.config.mouseScrool==FamilyTree.action.xScroll||this.config.mouseScrool==FamilyTree.action.scroll)&&this.bar){var i=FamilyTree._getScrollSensitivity();!function(e,i,r){var a=!1;function n(){a=!0;var e=(t.pos-t.bar.scrollLeft)/r;if(e>0)e++;else{if(0==e)return void(a=!1);e--}Math.ceil(t.bar.scrollLeft)==Math.ceil(t.pos)?a=!1:(t.bar.scrollLeft+=e,l(n))}e.addEventListener("wheel",(function(e){var r=0;if(t.config.mouseScrool==FamilyTree.action.xScroll)(r=e.deltaX||e.wheelDeltaX)||(r=e.deltaY||e.wheelDeltaY);else if(t.config.mouseScrool==FamilyTree.action.scroll&&!(r=e.shiftKey?e.deltaY||e.wheelDeltaY:e.deltaX||e.wheelDeltaX))return;r=-r,r=Math.max(-1,Math.min(1,r)),t.pos+=-r*i;var l=parseFloat(t.innerBar.clientWidth)-parseFloat(t.bar.clientWidth);t.pos<0&&(t.pos=0);t.pos>l&&(t.pos=l);a||n()}),{passive:!0});var l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,20)}}(e,i.speed,i.smooth)}},FamilyTree.xScrollUI.prototype.create=function(e){if(this.config.showXScroll===FamilyTree.scroll.visible||this.config.mouseScrool===FamilyTree.action.scroll||this.config.mouseScrool===FamilyTree.action.xScroll){var t=this;this.bar&&this.bar.parentNode.removeChild(this.bar),this.bar=document.createElement("div"),this.config.showXScroll!==FamilyTree.scroll.visible&&(this.bar.style.visibility="hidden"),this.innerBar=document.createElement("div");this.requestParams();this.innerBar.innerHTML="&nbsp",Object.assign(this.bar.style,{position:"absolute",left:0,bottom:0,width:e+"px","overflow-x":"scroll",height:"20px"}),this.element.appendChild(this.bar),this.bar.appendChild(this.innerBar),this.bar.addEventListener("scroll",(function(){if(this.ignore)this.ignore=!1;else{var e=t.requestParams(),i=(parseFloat(t.innerBar.clientWidth)-parseFloat(t.bar.clientWidth))/100,r=this.scrollLeft/i,a=(e.boundary.right-e.boundary.left)/100;e.viewBox[0]=r*a+e.boundary.left,t.onSetViewBoxCallback(e.viewBox),clearTimeout(this._timeout),this._timeout=setTimeout((function(){t.onDrawCallback()}),500)}}))}},FamilyTree.xScrollUI.prototype.setPosition=function(){if(this.bar){var e=this.requestParams(),t=Math.abs(e.boundary.maxX-e.boundary.minX)*e.scale;switch(this.config.orientation){case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:innerHeight=Math.abs(e.boundary.minY*e.scale);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:t=Math.abs(e.boundary.minX*e.scale)}this.innerBar.style.width=t+"px";var i=(e.boundary.right-e.boundary.left)/100,r=(e.viewBox[0]-e.boundary.left)/i;r<0?r=0:r>100&&(r=100);var a=(parseFloat(this.innerBar.clientWidth)-parseFloat(this.bar.clientWidth))/100,n=r*a;this.bar.ignore=!0,this.bar.scrollLeft=n,this.pos=this.bar.scrollLeft,this.bar.style.visibility=a<=0?"hidden":""}},FamilyTree.yScrollUI=function(e,t,i,r,a){this.element=e,this.requestParams=i,this.config=t,this.onSetViewBoxCallback=r,this.onDrawCallback=a,this.pos=0},FamilyTree.yScrollUI.prototype.addListener=function(e){var t=this;if(this.config.mouseScrool==FamilyTree.action.yScroll||this.config.mouseScrool==FamilyTree.action.scroll){var i=FamilyTree._getScrollSensitivity();!function(e,i,r){var a=!1;function n(){a=!0;var e=(t.pos-t.bar.scrollTop)/r;if(e>0)e++;else{if(0==e)return void(a=!1);e--}Math.ceil(t.bar.scrollTop)==Math.ceil(t.pos)?a=!1:(t.bar.scrollTop+=e,l(n))}e.addEventListener("wheel",(function(e){var r=0;if(t.config.mouseScrool==FamilyTree.action.yScroll)(r=e.deltaY||e.wheelDeltaY)||(r=e.deltaX||e.wheelDeltaX);else if(t.config.mouseScrool==FamilyTree.action.scroll&&!(r=e.shiftKey?e.deltaX||e.wheelDeltaX:e.deltaY||e.wheelDeltaY))return;r=-r,r=Math.max(-1,Math.min(1,r)),t.pos+=-r*i;var l=parseFloat(t.innerBar.clientHeight)-parseFloat(t.bar.clientHeight);t.pos<0&&(t.pos=0);t.pos>l&&(t.pos=l);a||n()}),{passive:!0});var l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,20)}}(e,i.speed,i.smooth)}},FamilyTree.yScrollUI.prototype.create=function(e){if(this.config.showYScroll===FamilyTree.scroll.visible||this.config.mouseScrool===FamilyTree.action.scroll||this.config.mouseScrool===FamilyTree.action.yScroll){var t=this;this.bar&&this.bar.parentNode.removeChild(this.bar),this.bar=document.createElement("div"),this.config.showYScroll!==FamilyTree.scroll.visible&&(this.bar.style.visibility="hidden"),this.innerBar=document.createElement("div"),this.innerBar.innerHTML="&nbsp",Object.assign(this.bar.style,{position:"absolute",right:0,bottom:0,height:e+"px","overflow-y":"scroll",width:"20px"}),this.element.appendChild(this.bar),this.bar.appendChild(this.innerBar),this.bar.addEventListener("scroll",(function(){if(this.ignore)this.ignore=!1;else{var e=t.requestParams(),i=(parseFloat(t.innerBar.clientHeight)-parseFloat(t.bar.clientHeight))/100,r=this.scrollTop/i,a=(e.boundary.bottom-e.boundary.top)/100;e.viewBox[1]=r*a+e.boundary.top,t.onSetViewBoxCallback(e.viewBox),clearTimeout(this._timeout),this._timeout=setTimeout((function(){t.onDrawCallback()}),500)}}))}},FamilyTree.yScrollUI.prototype.setPosition=function(){if(this.bar){var e=this.requestParams(),t=Math.abs(e.boundary.maxY-e.boundary.minY)*e.scale;switch(this.config.orientation){case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:t=Math.abs(e.boundary.minY*e.scale);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:innerWidth=Math.abs(e.boundary.minX*e.scale)}this.innerBar.style.height=t+"px";var i=(e.boundary.bottom-e.boundary.top)/100,r=(e.viewBox[1]-e.boundary.top)/Math.abs(i);r<0?r=0:r>100&&(r=100);var a=(parseFloat(this.innerBar.clientHeight)-parseFloat(this.bar.clientHeight))/100,n=r*a;this.bar.ignore=!0,this.bar.scrollTop=n,this.pos=this.bar.scrollTop,this.bar.style.visibility=a<=0?"hidden":""}},FamilyTree.prototype.zoom=function(e,t,i,r){var a=this.getViewBox().slice(0),n=a,l=a[2],o=a[3];!0===e?(a[2]=a[2]/FamilyTree.SCALE_FACTOR,a[3]=a[3]/FamilyTree.SCALE_FACTOR):!1===e?(a[2]=a[2]*FamilyTree.SCALE_FACTOR,a[3]=a[3]*FamilyTree.SCALE_FACTOR):(a[2]=a[2]/e,a[3]=a[3]/e),t||(t=[50,50]),a[0]=n[0]-(a[2]-l)/(100/t[0]),a[1]=n[1]-(a[3]-o)/(100/t[1]);var s=this.getScale(a);if(a[2]=this.width()/s,a[3]=this.height()/s,!0===e&&s<this.config.scaleMax||!1===e&&s>this.config.scaleMin||0!=e&&1!=e&&s<this.config.scaleMax&&s>this.config.scaleMin){this._hideBeforeAnimation();var d=this;i?(clearTimeout(d._timeout),FamilyTree.animate(this.getSvg(),{viewbox:this.getViewBox()},{viewbox:a},this.config.anim.duration,this.config.anim.func,(function(){clearTimeout(d._timeout),d._timeout=setTimeout((function(){d._draw(!0,FamilyTree.action.zoom,null,r)}),500)}))):(this.setViewBox(a),clearTimeout(d._timeout),d._timeout=setTimeout((function(){d._draw(!0,FamilyTree.action.zoom,null,r)}),500))}},FamilyTree.loading={},FamilyTree.loading.show=function(e){var t=document.createElement("div");t.id="bft-loading",t.innerHTML='<style>@-webkit-keyframes dot-keyframes {0% { opacity: .4; -webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {opacity: 1;-webkit-transform: scale(1.2, 1.2);transform: scale(1.2, 1.2);}100% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@keyframes dot-keyframes {0% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {opacity: 1;-webkit-transform: scale(1.2, 1.2);transform: scale(1.2, 1.2);}100% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}}.bft-loading-dots div {margin: 10px;}      .bft-dot-1 {background-color: #039BE5;}.bft-dot-2 {background-color: #F57C00;}.bft-dot-3 {background-color: #FFCA28;}      .bft-loading-dots {text-align: center;width: 100%; position: absolute; top: 0;}.bft-loading-dots--dot {-webkit-animation: dot-keyframes 1.5s infinite ease-in-out;animation: dot-keyframes 1.5s infinite ease-in-out;        border-radius: 10px;display: inline-block;height: 10px;width: 10px;}.bft-loading-dots--dot:nth-child(2) {-webkit-animation-delay: .5s;animation-delay: .5s;}.bft-loading-dots--dot:nth-child(3) {-webkit-animation-delay: 1s;animation-delay: 1s;}</style><div class="bft-loading-dots"><div class="bft-loading-dots--dot bft-dot-1"></div><div class="bft-loading-dots--dot bft-dot-2"></div><div class="bft-loading-dots--dot bft-dot-3"></div></div>',e.element.appendChild(t)},FamilyTree.loading.hide=function(e){var t=e.element.querySelector("#bft-loading");t&&t.parentNode.removeChild(t)},FamilyTree.pdfPrevUI={},FamilyTree.loc||(FamilyTree.loc={}),FamilyTree.loc.ppdfCmdTitle="PDF Preview",FamilyTree.loc.ppdfSave="Save",FamilyTree.loc.ppdfCancel="Cancel",FamilyTree.loc.ppdfFormat="Format",FamilyTree.loc.ppdfFitToDrwaing="Fit",FamilyTree.loc.ppdfA4="A4",FamilyTree.loc.ppdfA3="A3",FamilyTree.loc.ppdfA2="A2",FamilyTree.loc.ppdfA1="A1",FamilyTree.loc.ppdfLetter="Letter",FamilyTree.loc.ppdfLegal="Legal",FamilyTree.loc.ppdfLayout="Layout",FamilyTree.loc.ppdfPortrait="Portrait",FamilyTree.loc.ppdfLandscape="Landscape",FamilyTree.loc.ppdfFittopagewidth="Fit to page width",FamilyTree.loc.ppdfMargin="Margin",FamilyTree.loc.ppdfHeader="Header",FamilyTree.loc.ppdfFooter="Footer",FamilyTree.loc.ppdfScale="Scale",FamilyTree.pdfPrevUI.show=function(e,t){FamilyTree.pdfPrevUI.hide(e),t=e._defaultExportOptions(t,"pdf");var i=document.createElement("div");i.classList.add(e.config.mode),i.id="bft-ppdf-btns",Object.assign(i.style,{position:"absolute",top:0,left:0,"background-color":"#fff","z-index":5,margin:"0 0 0 -265px","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",width:"265px",height:"100%","font-family":"Roboto,Helvetica",color:"#757575","text-align":"right",padding:"10px"}),e.element.appendChild(i),i.innerHTML="<h1>"+FamilyTree.loc.ppdfCmdTitle+'</h1><div><button type="button" id="bft-prev-save" style="font-size: 14px; width: 90px;">'+FamilyTree.loc.ppdfSave+'</button>&nbsp;<button type="button" id="bft-prev-cancel" style="width: 90px;font-size: 14px;">'+FamilyTree.loc.ppdfCancel+'</button></div><div style="margin-top:30px; height:10px;border-bottom:1px solid #eeeeee;"></div><div style="padding-top:30px;"><label for="bft-size">'+FamilyTree.loc.ppdfFormat+': </label><select id="bft-ppdf-size" style="color: #757575; width: 150px; font-size: 14px;" id="bft-size"><option value="fit">'+FamilyTree.loc.ppdfFitToDrwaing+'</option><option value="A4">'+FamilyTree.loc.ppdfA4+'</option><option value="A3">'+FamilyTree.loc.ppdfA3+'</option><option value="A2">'+FamilyTree.loc.ppdfA2+'</option><option value="A1">'+FamilyTree.loc.ppdfA1+'</option><option value="Letter">'+FamilyTree.loc.ppdfLetter+'</option><option value="Legal">'+FamilyTree.loc.ppdfLegal+'</option></select></div><div style="padding-top:10px;"><label for="bft-ppdf-layout">'+FamilyTree.loc.ppdfLayout+': </label><select id="bft-ppdf-layout" style="color: #757575; width: 150px;font-size: 14px;" ><option value="false">'+FamilyTree.loc.ppdfPortrait+'</option><option value="true">'+FamilyTree.loc.ppdfLandscape+'</option></select></div><div style="padding-top:10px;"><label for="bft-scale">'+FamilyTree.loc.ppdfScale+': </label><select id="bft-ppdf-scale" style="color: #757575; width: 150px;font-size: 14px;" id="bft-scale"><option value="fit">'+FamilyTree.loc.ppdfFittopagewidth+'</option><option value="10">10%</option><option value="20">20%</option><option value="30">30%</option><option value="40">40%</option><option value="50">50%</option><option value="60">60%</option><option value="70">70%</option><option value="80">80%</option><option value="90">90%</option><option value="100">100%</option><option value="110">110%</option><option value="120">120%</option><option value="130">130%</option><option value="140">140%</option><option value="150">150%</option><option value="160">160%</option><option value="170">170%</option><option value="180">180%</option><option value="190">190%</option><option value="200">200%</option></select></div><div style="margin-top:10px;margin-bottom:10px; height:10px;border-bottom:1px solid #eeeeee;"></div><div style="padding-top:10px;"><label for="bft-ppdf-header">'+FamilyTree.loc.ppdfHeader+': </label><input id="bft-ppdf-header" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div><div style="padding-top:10px;"><label for="bft-ppdf-footer">'+FamilyTree.loc.ppdfFooter+': </label><input id="bft-ppdf-footer" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div><div style="padding-top:10px;"><label for="bft-ppdf-margin">'+FamilyTree.loc.ppdfMargin+': </label><input id="bft-ppdf-margin" type="text" style="color: #757575; width: 100px;font-size: 14px;" ></div>';var r=document.createElement("div");r.id="bft-ppdf-wrapper",Object.assign(r.style,{"overflow-y":"scroll","z-index":11,position:"absolute",top:0,left:"285px","background-color":"#eee",width:e.width()-270+"px",height:"100%"}),e.element.appendChild(r),r.innerHTML='<div id="bft-ppdf-content" style="width: 100%;margin-top:10px;margin-bottom:10px;opacity:0;"></div>';var a,n,l,o=e.element.querySelector("#bft-ppdf-size"),s=e.element.querySelector("#bft-ppdf-layout"),d=e.element.querySelector("#bft-ppdf-scale"),c=e.element.querySelector("#bft-ppdf-margin"),m=e.element.querySelector("#bft-ppdf-header"),p=e.element.querySelector("#bft-ppdf-footer");o.value=t.format,s.value=t.landscape,d.value=t.scale,c.value=t.margin,m.value=t.header,p.value=t.footer,FamilyTree.animate(e.element.querySelector("#bft-ppdf-btns"),{margin:[0,0,0,-250]},{margin:[0,0,0,0]},300,FamilyTree.anim.outSin,(function(){e.exportPDF(t,FamilyTree.pdfPrevUI._handler)})),e.element.querySelector("#bft-prev-cancel").addEventListener("click",(function(){FamilyTree.pdfPrevUI.hide(e)})),e.element.querySelector("#bft-prev-save").addEventListener("click",(function(){e.exportPDF(t),FamilyTree.pdfPrevUI.hide(e)})),FamilyTree.pdfPrevUI._showHide(o,s,d),o.addEventListener("change",(function(){FamilyTree.animate(e.element.querySelector("#bft-ppdf-content"),{opacity:1},{opacity:0},300,FamilyTree.anim.inSin,(function(){e.element.querySelector("#bft-ppdf-content").innerHTML="",t.format=o.value,e.exportPDF(t,FamilyTree.pdfPrevUI._handler),FamilyTree.pdfPrevUI._showHide(o,s,d)}))})),s.addEventListener("change",(function(){FamilyTree.animate(e.element.querySelector("#bft-ppdf-content"),{opacity:1},{opacity:0},300,FamilyTree.anim.inSin,(function(){e.element.querySelector("#bft-ppdf-content").innerHTML="",t.landscape="true"==s.value,e.exportPDF(t,FamilyTree.pdfPrevUI._handler),FamilyTree.pdfPrevUI._showHide(o,s,d)}))})),d.addEventListener("change",(function(){FamilyTree.animate(e.element.querySelector("#bft-ppdf-content"),{opacity:1},{opacity:0},300,FamilyTree.anim.inSin,(function(){e.element.querySelector("#bft-ppdf-content").innerHTML="",t.scale=d.value,e.exportPDF(t,FamilyTree.pdfPrevUI._handler),FamilyTree.pdfPrevUI._showHide(o,s,d)}))})),c.addEventListener("keyup",(function(){clearTimeout(a),a=setTimeout((function(){FamilyTree.animate(e.element.querySelector("#bft-ppdf-content"),{opacity:1},{opacity:0},300,FamilyTree.anim.inSin,(function(){e.element.querySelector("#bft-ppdf-content").innerHTML="";var i=c.value.split(",");if(4==i.length){for(var r=0;r<i.length;r++)i[r]=parseInt(i[r]);t.margin=i,e.exportPDF(t,FamilyTree.pdfPrevUI._handler)}}))}),1e3)})),m.addEventListener("keyup",(function(){clearTimeout(n),n=setTimeout((function(){FamilyTree.animate(e.element.querySelector("#bft-ppdf-content"),{opacity:1},{opacity:0},300,FamilyTree.anim.inSin,(function(){e.element.querySelector("#bft-ppdf-content").innerHTML="",t.header=m.value,e.exportPDF(t,FamilyTree.pdfPrevUI._handler)}))}),1e3)})),p.addEventListener("keyup",(function(){clearTimeout(l),l=setTimeout((function(){FamilyTree.animate(e.element.querySelector("#bft-ppdf-content"),{opacity:1},{opacity:0},300,FamilyTree.anim.inSin,(function(){e.element.querySelector("#bft-ppdf-content").innerHTML="",t.footer=p.value,e.exportPDF(t,FamilyTree.pdfPrevUI._handler)}))}),1e3)}))},FamilyTree.pdfPrevUI._showHide=function(e,t,i){"A4"==e.value||"A3"==e.value||"A2"==e.value||"A1"==e.value||"Letter"==e.value||"Legal"==e.value?(t.parentNode.style.display="block",i.parentNode.style.display="block"):(t.parentNode.style.display="none",i.parentNode.style.display="none")},FamilyTree.pdfPrevUI._handler=function(e,t,i){var r=t.options,a=t.pages,n=r.margin[0],l=r.margin[2],o=document.createElement("div");o.classList.add(e.config.mode),o.innerHTML=i.outerHTML,FamilyTree._browser().msie&&(o.innerHTML=(new XMLSerializer).serializeToString(i));for(var s=o.querySelector("svg"),d=e.element.querySelector("#bft-ppdf-content"),c=0;c<a.length;c++){var m=document.createElement("iframe");Object.assign(m.style,{display:"block",margin:"10px auto",border:"1px solid #eeeeee","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}),d.appendChild(m),s&&s.style.backgroundColor?m.style.backgroundColor=s.style.backgroundColor:m.style.backgroundColor="#fff";var p=m.contentWindow.document;p.open(),m.style.width=a[c].size.w+"px",m.style.height=a[c].size.h+"px",m.style.margin="10 auto",a[c].backgroundColor&&(m.style.backgroundColor=a[c].backgroundColor);var h=r.header;a[c].header&&(h=a[c].header),h&&(h=h.replace("{current-page}",c+1).replace("{total-pages}",a.length));var f=r.footer;a[c].footer&&(f=a[c].footer),f&&(f=f.replace("{current-page}",c+1).replace("{total-pages}",a.length)),a[c].html?p.write(FamilyTree._exportHtml(a[c].html,t.styles,r,a[c].innerSize.w,a[c].innerSize.h,h,f,e.config.mode)):(s.setAttribute("viewBox",a[c].vb),p.write(FamilyTree._exportHtml(o.innerHTML,t.styles,r,a[c].innerSize.w,a[c].innerSize.h,h,f,e.config.mode)));var u=p.getElementById("bft-header"),y=p.getElementById("bft-footer");if(u){var g=n-u.offsetHeight-7;u.style.top=g+"px"}if(y){var T=l-y.offsetHeight-7;y.style.bottom=T+"px"}p.close()}var b=e.element.querySelector("#bft-ppdf-content");FamilyTree.animate(b,{opacity:0},{opacity:1},300,FamilyTree.anim.outSin)},FamilyTree.pdfPrevUI._getViewBox=function(e){var t=null;return e?(t=(t="["+(t=e.getAttribute("viewBox"))+"]").replace(/\ /g,","),t=JSON.parse(t)):null},FamilyTree._exportHtml=function(e,t,i,r,a,n,l,o){for(var s="",d=0;d<i.margin.length;d++)s+=i.margin[d]+"px ";var c='<!DOCTYPE html><html style="margin:0;padding:0;"><head></head>'+t+'<body class="bft-'+o+'" style="margin:0; padding:0;"><div style="margin: '+s+";overflow:hidden;width:"+r+"px;height:"+a+'px">';return n&&(c+='<div id="bft-header" style="width:'+r+"px;color:#757575;position:absolute;left:"+i.margin[3]+'px;top:0;">'+n+"</div>"),c+=e,l&&(c+='<div id="bft-footer" style="width:'+r+"px;color:#757575;position:absolute;left:"+i.margin[3]+'px;bottom:0;">'+l+"</div>"),c+="</div>",c+="</body></html>"},FamilyTree.pdfPrevUI.hide=function(e){var t=e.element.querySelector("#bft-ppdf-wrapper");if(t){t.parentNode.removeChild(t),t.style.opacity=0;var i=e.element.querySelector("#bft-ppdf-btns");i.parentNode.removeChild(i)}},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.events.on("renderdefs",(function(e,t){for(var i=0;i<e.config.clinks.length;i++){var r=e.config.clinks[i].template;r||(r="orange");var a=FamilyTree.clinkTemplates[r];t.defs+=a.defs}})),FamilyTree.events.on("render",(function(e,t){e._clink(e,t)})),FamilyTree.prototype._clink=function(e,t){for(var i,r,a,n,l,o="",s=0;s<this.config.clinks.length;s++){var d=this.config.clinks[s],c=e.getNode(d.from),m=e.getNode(d.to);if(c&&-1!=t.res.visibleNodeIds.indexOf(c.id)&&(m&&-1!=t.res.visibleNodeIds.indexOf(m.id))){var p=c.x,h=c.y,f=m.x,u=m.y,y={},g={},T=p+c.w/2,b=f+m.w/2,v=h+c.h/2,F=u+m.h/2,x=1;switch(this.config.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:T<=b?(x=1,y.x=T+c.w/10,g.x=b-m.w/10):(x=-1,y.x=T-c.w/10,g.x=b+m.w/10),h==u?(x=1,y.y=h,g.y=u):h>u?(y.y=h,g.y=u+m.h):(y.y=h+c.h,g.y=u);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:T<=b?(x=-1,y.x=T+c.w/10,g.x=b+m.w/10):(x=1,y.x=T-c.w/10,g.x=b+m.w/10),h==u?(x=-1,y.y=h+c.h,g.y=u+m.h):h>u?(y.y=h,g.y=u+m.h):(y.y=h+c.h,g.y=u);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:v<=F?(x=-1,y.y=v+c.h/5,g.y=F+m.h/5):(x=1,y.y=v-c.h/5,g.y=F+m.h/5),p==f?(x=-1,y.x=p,g.x=f):p>f?(y.x=p,g.x=f+m.w):(y.x=p+c.w,g.x=f);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:v<=F?(x=1,y.y=v+c.h/5,g.y=F+m.h/5):(x=-1,y.y=v-c.h/5,g.y=F+m.h/5),p==f?(x=1,y.x=p+c.w,g.x=f+m.w):p>f?(y.x=p,g.x=f+m.w):(y.x=p+c.w,g.x=f)}var _=I(y,g,x),w=d.template;w||(w="orange");var k=FamilyTree.clinkTemplates[w],S=(i=y,a=_,n=void 0,l=void 0,n=((r=g).x-i.x)/2+i.x,l=(r.y-i.y)/2+i.y,{x:(n-a.x)/2+a.x,y:(l-a.y)/2+a.y});d.label&&(o+=k.label.replace("{x}",S.x).replace("{y}",S.y).replace("{val}",d.label));var C="M"+y.x+","+y.y+"C"+y.x+","+y.y+" "+_.x+","+_.y+" "+g.x+","+g.y;o+=("<g "+FamilyTree.attr.c_link_from+'="{from}" '+FamilyTree.attr.c_link_to+'="{to}">').replace("{from}",c.id).replace("{to}",m.id)+k.link.replaceAll("{d}",C)+'<path stroke="transparent" stroke-width="15" fill="none" d="'+C+'" />',o+=FamilyTree.grCloseTag}function I(e,t,i){null==i&&(i=1);var r=t.x-e.x,a=t.y-e.y,n=Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))/3;return n=n/(Math.sqrt(r*r+a*a)*i)*FamilyTree.CLINK_CURVE,{x:e.x+r/2-a*n,y:e.y+a/2+r*n}}}t.content+=o},FamilyTree.prototype.addClink=function(e,t,i,r){return this.removeClink(e,t),this.config.clinks.push({from:e,to:t,label:i,template:r}),this},FamilyTree.prototype.removeClink=function(e,t){for(var i=this.config.clinks.length-1;i>=0;i--){var r=this.config.clinks[i];r.from==e&&r.to==t&&this.config.clinks.splice(i,1)}return this},FamilyTree.clinkTemplates={},FamilyTree.clinkTemplates.orange={defs:'<marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#F57C00" /></marker>',link:'<path marker-start="url(#dotOrange)" marker-end="url(#arrowOrange)" stroke="#F57C00" stroke-width="2" fill="none" d="{d}" />',label:'<text fill="#F57C00" text-anchor="middle" x="{x}" y="{y}">{val}</text>'},FamilyTree.clinkTemplates.blue={defs:'<marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#039BE5" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#039BE5" /></marker>',link:'<path marker-start="url(#dotBlue)" marker-end="url(#arrowBlue)" stroke="#039BE5" stroke-width="2" fill="none" d="{d}" />',label:'<text fill="#039BE5"  text-anchor="middle" x="{x}" y="{y}">{val}</text>'},FamilyTree.clinkTemplates.yellow={defs:'<marker id="arrowYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#FFCA28" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#FFCA28" /></marker>',link:'<path marker-start="url(#dotYellow)" marker-end="url(#arrowYellow)" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />',label:'<text fill="#FFCA28"  text-anchor="middle" x="{x}" y="{y}">{val}</text>'},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.events.on("renderdefs",(function(e,t){for(var i=0;i<e.config.slinks.length;i++){var r=e.config.slinks[i].template;r||(r="orange");var a=FamilyTree.slinkTemplates[r];t.defs+=a.defs}})),FamilyTree.events.on("render",(function(e,t){e._slinks(e,t)})),FamilyTree.prototype._slinks=function(e,t){var i="",r=this.getScale(),a=t.res.boundary;function n(t,n,l){var s=[],d=null,c="left",m=t.lcn?t.lcn:"base",p=e._layoutConfigs[m];switch(p.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:n.x>t.x&&(c="right");break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:c="top",n.y>t.y&&(c="bottom")}var h=FamilyTree.t(t.templateName,t.min,r),f=p.levelSeparation;(t.parent&&t.parent.layout==FamilyTree.mixed||t.parent&&t.parent.layout==FamilyTree.tree)&&(f=p.mixedHierarchyNodesSeparation);var u={p:t.x+t.w/2+h.expandCollapseSize,q:t.y,r:t.x+t.w/2+h.expandCollapseSize,s:a.minY+f};if(t.sl==n.sl)switch(d=n,p.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:s.push([u.p,u.q]),s.push([u.p,u.q-f/3]),h=FamilyTree.t(d.templateName,d.min,r),s.push([d.x+d.w/2+h.expandCollapseSize,s[s.length-1][1]]),s.push([s[s.length-1][0],d.y]);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:u.q=t.y+t.h,u.s=a.maxY-f,s.push([u.p,u.q]),s.push([u.r,t.y+t.h+f/3]),h=FamilyTree.t(d.templateName,d.min,r),s.push([d.x+d.w/2+h.expandCollapseSize,s[s.length-1][1]]),s.push([s[s.length-1][0],d.y+d.h]);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:u.p=t.x,u.q=t.y+t.h/2+h.expandCollapseSize,u.r=a.minX-f,u.s=t.y+t.h/2+h.expandCollapseSize,s.push([u.p,u.q]),s.push([t.x-f/3,u.q]),h=FamilyTree.t(d.templateName,d.min,r),s.push([s[s.length-1][0],d.y+d.h/2+h.expandCollapseSize]),s.push([d.x,s[s.length-1][1]]);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:u.p=t.x+t.w,u.q=t.y+t.h/2+h.expandCollapseSize,u.r=a.maxX+f,u.s=t.y+t.h/2+h.expandCollapseSize,s.push([u.p,u.q]),s.push([t.x+t.w+f/3,u.q]),h=FamilyTree.t(d.templateName,d.min,r),s.push([s[s.length-1][0],d.y+d.h/2+h.expandCollapseSize]),s.push([d.x+d.w,s[s.length-1][1]])}else{switch(p.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:s.push([u.p,u.q]),s.push([u.r,t.y-f/3]);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:u.q=t.y+t.h,u.s=a.maxY-f,s.push([u.p,u.q]),s.push([u.r,t.y+t.h+f/3]);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:u.p=t.x,u.q=t.y+t.h/2+h.expandCollapseSize,u.r=a.minX-f,u.s=t.y+t.h/2+h.expandCollapseSize,s.push([u.p,u.q]),s.push([t.x-f/3,u.q]);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:u.p=t.x+t.w,u.q=t.y+t.h/2+h.expandCollapseSize,u.r=a.maxX+f,u.s=t.y+t.h/2+h.expandCollapseSize,s.push([u.p,u.q]),s.push([t.x+t.w+f/3,u.q])}for(var y=t;null==d;){var g=!1,T=y.parent,b=T.leftNeighbor,v=T.rightNeighbor;if(T.id==n.id?d=T:FamilyTree._intersects(T,u,e.config)&&(u=FamilyTree._addPoint(T,s,e.config,u,c),g=!0),T.id!=n.id){for(;b;){if(b.id==n.id){d=b;break}FamilyTree._intersects(b,u,e.config)&&(u=FamilyTree._addPoint(b,s,e.config,u,c),g=!0),b=b.leftNeighbor}for(;v;){if(v.id==n.id){d=v;break}FamilyTree._intersects(v,u,e.config)&&(u=FamilyTree._addPoint(v,s,e.config,u,c),g=!0),v=v.rightNeighbor}}if(!g){var F=s[s.length-1][0],x=0;if(T.parent)switch(f=p.levelSeparation,T.parent.layout!=FamilyTree.mixed&&T.parent.layout!=FamilyTree.tree||(f=p.mixedHierarchyNodesSeparation),p.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:x=T.parent.y+T.parent.h+f*(2/3);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:x=T.parent.y-f*(2/3);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:F=T.parent.x+T.parent.w+f*(2/3),x=s[s.length-1][1];break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:F=T.parent.x-f*(2/3),x=s[s.length-1][1]}s.push([F,x])}y=T}switch(h=FamilyTree.t(d.templateName,d.min,r),s.splice(s.length-1,1),p.orientation){case FamilyTree.orientation.top:case FamilyTree.orientation.top_left:s.push([d.x+d.w/2+h.expandCollapseSize,s[s.length-1][1]]),s.push([s[s.length-1][0],d.y+d.h]);break;case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:s.push([d.x+d.w/2+h.expandCollapseSize,s[s.length-1][1]]),s.push([s[s.length-1][0],d.y]);break;case FamilyTree.orientation.left:case FamilyTree.orientation.left_top:s.push([s[s.length-1][0],d.y+d.h/2+h.expandCollapseSize]),s.push([d.x+d.w,s[s.length-1][1]]);break;case FamilyTree.orientation.right:case FamilyTree.orientation.right_top:s.push([s[s.length-1][0],d.y+d.h/2+h.expandCollapseSize]),s.push([d.x,s[s.length-1][1]])}}var _=o.template;_||(_="orange");var w,k,S=null;switch((h=FamilyTree.slinkTemplates[_]).labelPosition){case"start":S={x:s[1][0],y:s[1][1]};break;case"middle":var C=Math.ceil(s.length/2);w=s[C],k=s[C-1],S={x:(w[0]+k[0])/2,y:(w[1]+k[1])/2};break;case"end":S={x:s[s.length-2][0],y:s[s.length-2][1]}}l&&(s=s.reverse()),s[0]="M"+s[0].join(",");for(var I=1;I<s.length;I++)s[I]="L"+s[I].join(",");var N=s.join(" ");if(o.label){var A=h.label.replace("{x}",S.x).replace("{y}",S.y).replace("{val}",o.label),M=FamilyTree._getLabelSize(A),E=-M.height/2;switch(p.orientation){case FamilyTree.orientation.bottom:case FamilyTree.orientation.bottom_left:E=M.height}i+=h.label.replace("{x}",S.x).replace("{y}",S.y+E).replace("{val}",o.label)}var L=t.id,U=n.id;l&&(L=n.id,U=t.id),i+=("<g "+FamilyTree.attr.s_link_from+'="{from}" '+FamilyTree.attr.s_link_to+'="{to}">').replace("{from}",L).replace("{to}",U)+h.link.replaceAll("{d}",N)+'<path stroke="transparent" stroke-width="15" fill="none" d="'+N+'" />',i+=FamilyTree.grCloseTag}for(var l=0;l<this.config.slinks.length;l++){var o=this.config.slinks[l],s=e.getNode(o.from),d=e.getNode(o.to);s&&d&&-1!=t.res.visibleNodeIds.indexOf(d.id)&&-1!=t.res.visibleNodeIds.indexOf(s.id)&&(s.sl>=d.sl?n(s,d,!1):n(d,s,!0))}t.content+=i},FamilyTree.prototype.addSlink=function(e,t,i,r){return this.removeClink(e,t),this.config.slinks.push({from:e,to:t,label:i,template:r}),this},FamilyTree.prototype.removeSlink=function(e,t){for(var i=this.config.slinks.length-1;i>=0;i--){var r=this.config.slinks[i];r.from==e&&r.to==t&&this.config.slinks.splice(i,1)}return this},FamilyTree.slinkTemplates={},FamilyTree.slinkTemplates.orange={defs:'<marker id="arrowSlinkOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotSlinkOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#F57C00" /></marker>',link:'<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkOrange)" marker-end="url(#arrowSlinkOrange)" stroke-linejoin="round" stroke="#F57C00" stroke-width="2" fill="none" d="{d}" />',label:'<text dominant-baseline="middle" fill="#F57C00" alignment-baseline="middle" text-anchor="middle" x="{x}" y="{y}">{val}</text>',labelPosition:"middle"},FamilyTree.slinkTemplates.blue={defs:'<marker id="arrowSlinkBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#039BE5" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotSlinkBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#039BE5" /></marker>',link:'<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkBlue)" marker-end="url(#arrowSlinkBlue)" stroke-linejoin="round" stroke="#039BE5" stroke-width="2" fill="none" d="{d}" />',label:'<text fill="#039BE5" text-anchor="middle" x="{x}" y="{y}">{val}</text>',labelPosition:"middle"},FamilyTree.slinkTemplates.yellow={defs:'<marker id="arrowSlinkYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path fill="#FFCA28" d="M 0 0 L 10 5 L 0 10 z" /></marker><marker id="dotSlinkYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#FFCA28" /></marker>',link:'<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkYellow)" marker-end="url(#arrowSlinkYellow)" stroke-linejoin="round" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />',label:'<text  fill="#FFCA28" text-anchor="middle" x="{x}" y="{y}">{val}</text>',labelPosition:"middle"},FamilyTree.events.on("redraw",(function(e,t){if(e.config.miniMap&&e.manager.action!=FamilyTree.action.move){FamilyTree.miniMap._settings._scale=Math.min(FamilyTree.miniMap.width/(e.response.boundary.maxX-e.response.boundary.minX),FamilyTree.miniMap.height/(e.response.boundary.maxY-e.response.boundary.minY)),FamilyTree.miniMap._settings._translateX=-e.response.boundary.minX*FamilyTree.miniMap._settings._scale+(FamilyTree.miniMap.width-(e.response.boundary.maxX-e.response.boundary.minX)*FamilyTree.miniMap._settings._scale)/2,FamilyTree.miniMap._settings._translateY=-e.response.boundary.minY*FamilyTree.miniMap._settings._scale+(FamilyTree.miniMap.height-(e.response.boundary.maxY-e.response.boundary.minY)*FamilyTree.miniMap._settings._scale)/2;var i=e.getViewBox();FamilyTree.miniMap._init(e),FamilyTree.miniMap._drawMainCanvas(e),FamilyTree.miniMap._drawRectSelectorCanvas(e,i);var r,a,n,l,o=e.element.querySelector('[data-id="mini-map-focus"]'),s=!1,d=null;o.onmousedown=function(e){var t,n,l,d=o.getBoundingClientRect(),c=d.left,m=d.top;if(r=parseInt(e.clientX-c),a=parseInt(e.clientY-m),t=a,n=(r-FamilyTree.miniMap._settings._translateX)/FamilyTree.miniMap._settings._scale,l=(t-FamilyTree.miniMap._settings._translateY)/FamilyTree.miniMap._settings._scale,n>i[0]&&n<i[0]+i[2]&&l>i[1]&&l<i[1]+i[3])return e.preventDefault(),e.stopPropagation(),void(s=!0)},o.onmousemove=function(t){if(s){t.preventDefault(),t.stopPropagation();var c=o.getBoundingClientRect(),m=c.left,p=c.top;n=parseInt(t.clientX-m),l=parseInt(t.clientY-p);var h=(n-r)/FamilyTree.miniMap._settings._scale,f=(l-a)/FamilyTree.miniMap._settings._scale;i[0]=h+i[0],i[1]=f+i[1],e.setViewBox(i),d&&(clearTimeout(d),d=null),d=setTimeout((function(){e._draw(!0,FamilyTree.action.move)}),300),FamilyTree.miniMap._drawRectSelectorCanvas(e,i),r=n,a=l}},o.onmouseup=function(e){s&&(e.preventDefault(),e.stopPropagation(),s=!1)},o.onmouseout=function(e){s&&(e.preventDefault(),e.stopPropagation(),s=!1)}}})),FamilyTree.miniMap={},FamilyTree.miniMap._settings={_translateX:0,_translateY:0,_scale:1},FamilyTree.miniMap._drawMainCanvas=function(e){var t=e.element.querySelector('[data-id="mini-map-main"]'),i=t.getContext("2d");FamilyTree.miniMap._initCtx(e,t,1);var r=0,a=[];!function e(t,n){if(Array.isArray(n))for(var l=0;l<n.length;l++)e(t,n[l]);else{i.fillStyle=FamilyTree.miniMap.colors[3],i.beginPath(),i.lineWidth="0.5",i.fillRect(n.x,n.y,n.w,n.h),i.strokeRect(n.x,n.y,n.w,n.h);for(l=0;l<n.stChildrenIds.length;l++)r++,a.includes(n.id)||(1==r?i.fillStyle=FamilyTree.miniMap.colors[0]:2==r?i.fillStyle=FamilyTree.miniMap.colors[1]:3==r&&(i.fillStyle=FamilyTree.miniMap.colors[2]),i.beginPath(),i.fillRect(n.x,n.y,n.w,n.h),i.strokeRect(n.x,n.y,n.w,n.h),a.push(n.id)),e(t,t.getNode(n.stChildrenIds[l])),r--;for(l=0;l<n.childrenIds.length;l++)e(t,t.getNode(n.childrenIds[l]))}}(e,e.roots)},FamilyTree.miniMap._drawRectSelectorCanvas=function(e,t){var i=e.element.querySelector('[data-id="mini-map-focus"]'),r=i.getContext("2d");FamilyTree.miniMap._initCtx(e,i,FamilyTree.miniMap.opacity);var a=t[0],n=t[1],l=t[2],o=t[3];r.lineWidth=.5/FamilyTree.miniMap._settings._scale,r.strokeStyle=FamilyTree.miniMap.focusStroke,r.globalAlpha=1,r.clearRect(a,n,l,o),r.strokeRect(a,n,l,o)},FamilyTree.miniMap._initCtx=function(e,t,i){var r=t.getContext("2d");t.width=t.width,t.height=t.height,r.clearRect(0,0,FamilyTree.miniMap.width,FamilyTree.miniMap.height),r.globalAlpha=i,1!=i&&(r.fillStyle=FamilyTree.miniMap.selectorBackgroundColor,r.fillRect(0,0,FamilyTree.miniMap.width,FamilyTree.miniMap.height)),r.translate(FamilyTree.miniMap._settings._translateX,FamilyTree.miniMap._settings._translateY),r.scale(FamilyTree.miniMap._settings._scale,FamilyTree.miniMap._settings._scale)},FamilyTree.miniMap._init=function(e){if(!e.element.querySelector('[data-id="mini-map"]')){var t=document.createElement("canvas");t.width=FamilyTree.miniMap.width,t.height=FamilyTree.miniMap.height,t.setAttribute("data-id","mini-map-main"),t.style.display="inline-block",t.style.backgroundColor=FamilyTree.miniMap.backgroundColor,t.style.position="absolute",t.style.top=0,t.style.left=0;var i=document.createElement("canvas");i.width=FamilyTree.miniMap.width,i.height=FamilyTree.miniMap.height,i.setAttribute("data-id","mini-map-focus"),i.style.display="inline-block",i.style.position="absolute",i.style.top=0,i.style.left=0;var r=document.createElement("div");r.setAttribute("data-id","mini-map"),r.style.position="absolute";for(var a=["top","right","left","bottom"],n=0;n<a.length;n++){var l=a[n];FamilyTree.isNEU(FamilyTree.miniMap.position[l])||("padding"==FamilyTree.miniMap.position[l]?r.style[l]=e.config.padding+"px":r.style[l]=FamilyTree.miniMap.position[l]+"px")}r.style.border=FamilyTree.miniMap.border,r.style.padding=FamilyTree.miniMap.padding+"px",r.style.backgroundColor=FamilyTree.miniMap.backgroundColor;var o=document.createElement("div");o.style.position="relative",o.style.width=FamilyTree.miniMap.width+"px",o.style.height=FamilyTree.miniMap.height+"px",o.appendChild(t),o.appendChild(i),r.appendChild(o),e.element.appendChild(r);var s=function(t,i){e.__mouseScrollHandler(r,i)};e._addEvent(r,"DOMMouseScroll",s),e._addEvent(r,"mousewheel",s);var d=0,c=0,m=function(e){var t=e.clientX-d,i=e.clientY-c;if(!FamilyTree.isNEU(r.style.left)){var a=parseFloat(r.style.left)+t;r.style.left=`${a}px`}if(!FamilyTree.isNEU(r.style.right)){var n=parseFloat(r.style.right)-t;r.style.right=`${n}px`}if(!FamilyTree.isNEU(r.style.bottom)){var l=parseFloat(r.style.bottom)-i;r.style.bottom=`${l}px`}if(!FamilyTree.isNEU(r.style.top)){var o=parseFloat(r.style.top)+i;r.style.top=`${o}px`}d=e.clientX,c=e.clientY},p=function(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",p)};r.addEventListener("mousedown",(function(e){d=e.clientX,c=e.clientY,document.addEventListener("mousemove",m),document.addEventListener("mouseup",p)}))}},FamilyTree.miniMap.colors=["#E0E0E0","#BDBDBD","#9E9E9E","#757575"],FamilyTree.miniMap.selectorBackgroundColor="white",FamilyTree.miniMap.backgroundColor="white",FamilyTree.miniMap.focusStroke="#f57c00",FamilyTree.miniMap.opacity=.4,FamilyTree.miniMap.border="1px solid #aeaeae",FamilyTree.miniMap.width=250,FamilyTree.miniMap.height=140,FamilyTree.miniMap.padding=5,FamilyTree.miniMap.position={top:void 0,left:"padding",right:void 0,bottom:"padding"},FamilyTree._search={},FamilyTree._search.search=function(e,t,i,r,a,n){var l=[],o=t.toLowerCase().split(" ");o=o.filter((function(e,t,i){return i.indexOf(e)===t}));for(var s={},d=0;d<e.length;d++)for(var c=e[d],m=0;m<i.length;m++){var p=i[m];if(!FamilyTree.isNEU(c[p])){var h=c[p];if(null!=(t=FamilyTree._search.searchAndComputeScore(o,h,p,n))){var f=c.id;if(s[f]){if(s[f]&&s[f]<t.__score){s[f]=t.__score;for(var u=l.length-1;u>=0;u--)l[u].id==f&&l.splice(u,1);FamilyTree._search.addNodeToResult(l,r,c,t,p,a)}}else s[f]=t.__score,FamilyTree._search.addNodeToResult(l,r,c,t,p,a)}}}return l.sort((function(e,t){return e.__score<t.__score?1:e.__score>t.__score?-1:0})),l},FamilyTree._search.addNodeToResult=function(e,t,i,r,a,n){var l={};l.id=i.id,FamilyTree.isNEU(i[n])||(l[n]=i[n]);for(var o=0;o<t.length;o++){var s=t[o];FamilyTree.isNEU(i[s])||FamilyTree.isNEU(l[s])&&(l[s]=i[s])}null!=r&&(FamilyTree.isNEU(l.__score)&&(l.__score=r.__score),FamilyTree.isNEU(l.__searchField)&&(l.__searchField=a),FamilyTree.isNEU(l.__searchMarks)&&(l.__searchMarks=r.__searchMarks)),e.push(l)},FamilyTree._search.searchAndComputeScore=function(e,t,i,r){if(FamilyTree.isNEU(t))return null;if(FamilyTree.isNEU(e))return null;if(!e.length)return null;"string"!=typeof t&&(t=t.toString());var a=t.toLowerCase(),n=FamilyTree._search.searchIndexesOf(a,e);if(!n.length)return null;var l=a.length/100,o=0,s=0,d=o>0?100:0;if(n.length){s=n[0].start;for(var c=0;c<n.length;c++)if(o+=n[c].length,n[c].start<s&&(s=n[c].start),c>=1&&n[c-1].start>n[c].start){d=0;break}}var m=0;0!=o&&(m=o/l);var p=o>0?100:0;0!=s&&(p=100-s/l);var h=0;r&&r[i]&&(h=r[i]),m>0&&(m=m/100*20),p>0&&(p=p/100*20),d>0&&(d=d/100*20),h>0&&(h=h/100*40);var f=Math.round(1e4*(m+p+d+h));f>1e6&&(f=1e6),n.sort((function(e,t){return e.start<t.start?-1:e.start>t.start?1:0}));var u=t;for(c=n.length-1;c>=0;c--)u=(u=u.insert(n[c].start+n[c].length,"</mark>")).insert(n[c].start,"<mark>");return{__searchMarks:u,__score:f}},FamilyTree._search.searchIndexesOf=function(e,t){var i=[];if(!FamilyTree.isNEU(e))for(var r=0;r<t.length;r++){var a=t[r];if(!FamilyTree.isNEU(a))for(var n=0;(n=e.indexOf(a,n))>-1;)i.push({length:a.length,start:n}),n+=a.length}return i.sort((function(e,t){return e.length<t.length?1:e.length>t.length||e.start<t.start?-1:e.start>t.start?1:0})),i=i.filter((function(e){for(var t=!1,r=0;r<i.length;r++){var a=i[r].start,n=i[r].start+i[r].length-1,l=e.start,o=e.start+e.length-1;if(a==l&&n==o){t=!1;break}if(a>=l&&n<=o){t=!0;break}if(a<=l&&n>=o){t=!0;break}}return!t}))},FamilyTree.events.on("redraw",(function(e,t){if(e.config.state){var i=[],r=[];!function e(t){if(Array.isArray(t))for(var a=0;a<t.length;a++)e(t[a]);else{("string"!=typeof t.id||"string"==typeof t.id&&-1==t.id.indexOf("split")&&-1==t.id.indexOf("mirror"))&&(i.push(t.id),1==t.min&&r.push(t.id));for(a=0;a<t.stChildren.length;a++)e(t.stChildren[a]);for(a=0;a<t.children.length;a++)e(t.children[a])}}(e.roots),FamilyTree.state._put(e.config.roots,e.width(),e.height(),e.response.viewBox,i,r,e.response.adjustify,e.config.state)}})),FamilyTree.state={},FamilyTree.state._buildStateNames=function(e){return{paramScale:e+"-scale",paramX:e+"-x",paramY:e+"-y",paramExp:e+"-exp",paramMin:e+"-min",paramRoots:e+"-roots",paramAdjustify:e+"-adjustify"}},FamilyTree.state._put=function(e,t,i,r,a,n,l,o){if(o){var s=FamilyTree.state._buildStateNames(o.name),d={roots:e,scale:Math.min(t/r[2],i/r[3]),x:r[0],y:r[1],exp:a,min:n,adjustify:l};if(o.writeToUrlParams){var c=new URLSearchParams(window.location.search);c.has(s.paramScale)?c.set(s.paramScale,d.scale):c.append(s.paramScale,d.scale),c.has(s.paramX)?c.set(s.paramX,d.x):c.append(s.paramX,d.x),c.has(s.paramY)?c.set(s.paramY,d.y):c.append(s.paramY,d.y),c.has(s.paramExp)?c.set(s.paramExp,d.exp.join("*")):c.append(s.paramExp,d.exp.join("*")),c.has(s.paramRoots)&&Array.isArray(d.roots)?c.set(s.paramRoots,d.roots.join("*")):Array.isArray(d.roots)&&c.append(s.paramRoots,d.roots.join("*")),c.has(s.paramMin)?c.set(s.paramMin,d.min.join("*")):c.append(s.paramMin,d.min.join("*")),c.has(s.paramAdjustify)?c.set(s.paramAdjustify,d.adjustify.x+"*"+d.adjustify.y):c.append(s.paramAdjustify,d.adjustify.x+"*"+d.adjustify.y),window.history.replaceState(null,null,"?"+c)}o.writeToIndexedDB&&(d.id=o.name,FamilyTree.idb.put(d,(function(e){0==e&&console.error("Cannot write row - "+o.name)}))),o.writeToLocalStorage&&FamilyTree.localStorage.setItem(o.name,JSON.stringify(d))}},FamilyTree.state._get=function(e,t,i,r){if(e){var a=FamilyTree.state._buildStateNames(e.name);if(e.readFromUrlParams){var n=new URLSearchParams(window.location.search);if(n.has(a.paramScale)&&n.has(a.paramX)&&n.has(a.paramY)&&n.has(a.paramExp)&&n.has(a.paramRoots)&&n.has(a.paramMin)&&n.has(a.paramAdjustify)){var l={},o=parseFloat(n.get(a.paramScale)),s=parseFloat(n.get(a.paramX)),d=parseFloat(n.get(a.paramY));(m=[])[0]=s,m[1]=d,m[2]=t/o,m[3]=i/o,l.vb=m,l.scale=o,l.x=s,l.y=d,l.exp=n.get(a.paramExp).split("*"),l.roots=n.get(a.paramRoots).split("*"),l.min=n.get(a.paramMin).split("*");var c=n.get(a.paramAdjustify).split("*");return l.adjustify={x:parseFloat(c[0]),y:parseFloat(c[1])},void r(l)}if(!e.readFromIndexedDB&&!e.readFromLocalStorage)return void r(null)}if(e.readFromLocalStorage){var m;if(null!=(l=FamilyTree.localStorage.getItem(e.name)))return l=JSON.parse(l),(m=[])[0]=l.x,m[1]=l.y,m[2]=t/l.scale,m[3]=i/l.scale,l.vb=m,void r(l);if(!e.readFromIndexedDB)return void r(null)}e.readFromIndexedDB&&FamilyTree.idb.read(e.name,(function(a,n){if(0==a)console.error("Cannot read from - "+e.name),r(null);else if(null==a)r(null);else{var l=[];l[0]=n.x,l[1]=n.y,l[2]=t/n.scale,l[3]=i/n.scale,n.vb=l,r(n)}}))}else r(null)},FamilyTree.state.clear=function(e){if(!e)return!1;try{localStorage.removeItem(e);var t=FamilyTree.state._buildStateNames(e),i=new URLSearchParams(window.location.search);i.has(t.paramScale)&&i.delete(t.paramScale),i.has(t.paramX)&&i.delete(t.paramX),i.has(t.paramY)&&i.delete(t.paramY),i.has(t.paramExp)&&i.delete(t.paramExp),i.has(t.paramRoots)&&i.delete(t.paramRoots),i.has(t.paramMin)&&i.delete(t.paramMin),i.has(t.paramAdjustify)&&i.delete(t.paramAdjustify),window.history.replaceState(null,null,"?"+i),FamilyTree.idb.delete(e,(function(t){0==t&&console.error("Cannot delete row - "+e)}))}catch{}},FamilyTree._magnify={},FamilyTree.prototype.magnify=function(e,t,i,r,a){r||(r=this.config.anim);var n=this.getNode(e),l=this.getNodeElement(e);if(n||l){var o=FamilyTree._magnify[e];if(o&&(null!=o.timer&&clearInterval(o.timer),null!=o.timerBack&&clearInterval(o.timerBack),l.setAttribute("transform","matrix("+o.transformStart.toString()+")"),FamilyTree._magnify[e]),i)l=l.cloneNode(!0),this.getSvg().appendChild(l);var s=FamilyTree._getTransform(l),d=JSON.parse(JSON.stringify(s));d[0]=t,d[3]=t;var c=n.w+n.w*(t-1),m=n.h+n.h*(t-1);d[4]+=(n.w-c)/2,d[5]+=(n.h-m)/2;var p=FamilyTree.animate(l,{transform:s},{transform:d},r.duration,r.func);FamilyTree._magnify[e]={timer:p,transformStart:s,nodeElement:l,front:i},a&&a(l)}},FamilyTree.prototype.magnifyBack=function(e,t,i){t||(t=this.config.anim);var r=FamilyTree._magnify[e];if(r){null!=r.timer&&clearInterval(r.timer),null!=r.timerBack&&clearInterval(r.timerBack);var a=FamilyTree._getTransform(r.nodeElement);r.timerBack=FamilyTree.animate(r.nodeElement,{transform:a},{transform:r.transformStart},t.duration,t.func,(function(e){var t=e[0].getAttribute(FamilyTree.attr.node_id);FamilyTree._magnify[t]&&FamilyTree._magnify[t].front&&(e[0].parentNode.removeChild(e[0]),FamilyTree._magnify[t]=null),i&&i(e[0])}))}},void 0===FamilyTree&&(FamilyTree={}),FamilyTree.events.on("init",(function(e,t){if(e.config.keyNavigation&&(e._addEvent(window,"keydown",e._windowKeyDownHandler),FamilyTree.isNEU(e._keyNavigationActiveNodeId)&&e.roots&&e.roots.length)){var i=e.roots[0].id;FamilyTree.isNEU(e.config.keyNavigation.focusId)||(i=e.config.keyNavigation.focusId),e._keyNavigationActiveNodeId=i,e.center(e._keyNavigationActiveNodeId)}})),FamilyTree.prototype._windowKeyDownHandler=function(e,t){for(var i=t.target,r=null;i&&i!=this.element;){if(i.hasAttribute&&i.hasAttribute(FamilyTree.attr.node_id)){r=i.getAttribute(FamilyTree.attr.node_id);break}i=i.parentNode}if(i){var a=r?this.getNode(r):null,n={node:a,data:r?this.get(r):null,event:t};if(!1!==FamilyTree.events.publish("key-down",[this,n])&&a)if("KeyF"==t.code)this.searchUI.find("");else if("ArrowRight"==t.code||a.isAssistant&&"ArrowDown"==t.code||a.isPartner&&"ArrowDown"==t.code){if(s=this.getNode(a.pid)){var l=s.childrenIds.indexOf(a.id);if(++l<s.childrenIds.length){var o=s.childrenIds[l];this._keyNavigationActiveNodeId=o,this.center(o)}}}else if("ArrowLeft"==t.code){if(s=this.getNode(a.pid)){l=s.childrenIds.indexOf(a.id);if(--l>=0){o=s.childrenIds[l];this._keyNavigationActiveNodeId=o,this.center(o)}}}else if("ArrowUp"==t.code){var s;if(s=this.getNode(a.pid)){o=s.id;if(a.isAssistant||s.hasAssistants||a.isPartner||s.hasPartners){l=s.childrenIds.indexOf(a.id);--l>=0&&(o=s.childrenIds[l])}this._keyNavigationActiveNodeId=o,this.center(o)}}else if("ArrowDown"==t.code)a.childrenIds.length&&(this._keyNavigationActiveNodeId=a.childrenIds[0],this.center(a.childrenIds[0]));else if("Space"==t.code){var d=i.getAttribute(FamilyTree.attr.node_id);return void this.toggleExpandCollapse(d,t)}}},FamilyTree.events.on("redraw",(function(e,t){e.config.keyNavigation&&FamilyTree._keyNavigation(e)})),FamilyTree.events.on("click",(function(e,t){e.config&&e.config.keyNavigation&&(e._keyNavigationActiveNodeId=t.node.id,e.center(t.node.id))})),FamilyTree._keyNavigation=function(e){var t=e.element.querySelector(":focus");if(t&&t.parentElement&&t.parentElement.hasAttribute(FamilyTree.attr.node_id)){var i=t.parentElement;(a=(r=t).querySelector("title"))&&a.parentNode.removeChild(a),r.removeAttribute("tabindex")}if(!FamilyTree.isNEU(e._keyNavigationActiveNodeId)&&((i=e.getNodeElement(e._keyNavigationActiveNodeId))&&i.children.length)){var r;(r=i.children[0]).setAttribute("tabindex",2);var a,n={text:"",id:e._keyNavigationActiveNodeId};if(FamilyTree.events.publish("screen-reader-text",[e,n]),!FamilyTree.isNEU(n.text))(a=document.createElementNS("http://www.w3.org/2000/svg","title")).innerHTML=n.text,r.appendChild(a);e.searchUI.hide(),r.focus()}},FamilyTree.elements={},FamilyTree.elements.textbox=function(e,t,i,r){var a=FamilyTree.elements._vidrf(e,t,r);if(a.doNotRender)return{html:""};var n="";return t.btn&&(n=`<a href="#" bft-input-btn="" class="bft-link bft-link-bft-button">${t.btn}</a>`),{html:`<div class="bft-form-field" style="min-width: ${i};">\n                    <div class="bft-input" data-bft-input="" ${a.disabledAttribute} ${a.vlidators}>\n                        <label for="${a.id}">${FamilyTree._escapeGreaterLessSign(a.label)}</label>\n                        <input ${a.readOnlyAttribute} data-binding="${FamilyTree._escapeDoubleQuotes(a.binding)}" maxlength="256" id="${a.id}" name="${a.id}" type="text" value="${FamilyTree._escapeDoubleQuotes(a.value)}" autocomplete="off">\n                        ${n}\n                    </div>\n                </div>`,id:a.id,value:a.value}},FamilyTree.elements.checkbox=function(e,t,i,r){var a=FamilyTree.elements._vidrf(e,t,r);if(a.doNotRender)return{html:""};var n=a.value?"checked":"",l=r?'onclick="return false;"':"";return{html:`<div class="bft-form-field"  style="min-width: ${i};" >\n                        <label class="bft-checkbox" data-bft-input="" ${a.disabledAttribute}>\n                            <input ${n} ${l} data-binding="${FamilyTree._escapeDoubleQuotes(a.binding)}" type="checkbox"><span class="bft-checkbox-checkmark" type="checkbox"></span>${FamilyTree._escapeGreaterLessSign(a.label)}\n                        </label>\n                    </div>`,id:a.id,value:n}},FamilyTree.elements.select=function(e,t,i,r){if(r)return FamilyTree.elements.textbox(e,t,i,r);var a=FamilyTree.elements._vidrf(e,t,r);return a.doNotRender?{html:""}:{html:`<div class="bft-form-field" style="min-width: ${i};">\n                    <div class="bft-input" data-bft-input="" ${a.disabledAttribute} ${a.vlidators}>\n                        <label for="${a.id}">${FamilyTree._escapeGreaterLessSign(a.label)}</label>\n                        <select data-binding="${FamilyTree._escapeDoubleQuotes(a.binding)}" ${a.readOnlyAttribute} id="${a.id}" name="${a.id}">\n                            ${function(){for(var e="",t=0;t<a.options.length;t++){var i=a.options[t];e+=`<option ${i.value==a.value?"selected":""} value="${FamilyTree._escapeDoubleQuotes(i.value)}">${FamilyTree._escapeGreaterLessSign(i.text)}</option>`}return e}()}                           \n                        </select>\n                    </div>\n                </div>`,id:a.id,value:a.value}},FamilyTree.elements.date=function(e,t,i,r){var a=FamilyTree.elements._vidrf(e,t,r);return a.doNotRender?{html:""}:{html:`<div class="bft-form-field" style="min-width: ${i};">\n                    <div class="bft-input" data-bft-input="" ${a.disabledAttribute} ${a.vlidators}>\n                        <label for="${a.id}" class="hasval">${FamilyTree._escapeGreaterLessSign(a.label)}</label>\n                        <input data-binding="${FamilyTree._escapeDoubleQuotes(a.binding)}" ${a.readOnlyAttribute} maxlength="256" id="${a.id}" name="${a.id}" type="date" value="${FamilyTree._escapeDoubleQuotes(a.value)}" autocomplete="off">\n                    </div>\n                </div>`,id:a.id,value:a.value}},FamilyTree.elements._vidrf=function(e,t,i){var r={};if(t.binding||(t.binding=""),t.label||(t.label=""),"select"!=t.type||Array.isArray(t.options)?r.options=t.options:r.options=[],r.value=e&&!FamilyTree.isNEU(e[t.binding])?e[t.binding]:"",i&&r.options)for(var a=0;a<r.options.length;a++)if(r.options[a].value==r.value){r.value=r.options[a].text;break}if(r.id=FamilyTree.elements.generateId(),r.disabledAttribute=i?"data-bft-input-disabled":"",r.readOnlyAttribute=i?"readonly":"",r.id=r.id,i&&FamilyTree.isNEU(r.value)&&(r.doNotRender=!0),i&&"photo"==t.binding&&(r.id=null,r.doNotRender=!0),r.binding=t.binding,r.label=t.label,r.vlidators="",t.vlidators)for(var n in t.vlidators)r.vlidators+=`data-v-${n}="${t.vlidators[n]}" `;return r},FamilyTree.elements.ids=[],FamilyTree.elements.generateId=function(){for(;;){var e="_"+("0000"+(Math.random()*Math.pow(36,4)|0).toString(36)).slice(-4);if(!FamilyTree.elements.ids.has(e))return FamilyTree.elements.ids.push(e),e}},FamilyTree.input={},FamilyTree.input._timeout=null,FamilyTree.input.initWithTimeout=function(){FamilyTree.input._timeout&&(clearTimeout(FamilyTree.input._timeout),FamilyTree.input._timeout=null),FamilyTree.input._timeout=setTimeout(FamilyTree.input.init,200)},FamilyTree.input.init=function(e){var t;t=e?e.querySelectorAll("[data-bft-input]"):document.querySelectorAll("[data-bft-input]");for(var i=0;i<t.length;i++){var r=t[i],a=null;r.type&&"hidden"==r.type.toLowerCase()&&(a=r),a||(a=r.querySelector("input")),a||(a=r.querySelector("select"));var n=r.querySelector("label");n&&(a.value||"select-one"==a.type&&a.selectedOptions&&a.selectedOptions.length&&""==a.selectedOptions[0].value&&a.selectedOptions[0].innerHTML)&&n.classList.add("hasval"),"checkbox"!=a.type.toLowerCase()&&a.addEventListener("focus",(function(){this.classList.remove("bft-validation-error");var e=this.parentNode.querySelector("label");e.classList.add("focused");var t=e.querySelector(".bft-validation-error-message");t&&t.parentNode.removeChild(t)})),"checkbox"!=a.type.toLowerCase()&&a.addEventListener("blur",(function(){var e=this.parentNode.querySelector("label");e.classList.remove("focused"),this.value||"date"==this.type?e.classList.add("hasval"):e.classList.remove("hasval")}))}},FamilyTree.input.validate=function(e){var t=null;e.type&&"hidden"==e.type.toLowerCase()&&(t=e),t||(t=e.querySelector("input")),t||(t=e.querySelector("select"));var i=e.querySelector("label");if(t.classList.remove("bft-validation-error"),i){var r=i.querySelector(".bft-validation-error-message");r&&r.parentNode.removeChild(r)}t.value&&(t.value=t.value.trim());var a=e.getAttribute("data-v-required"),n=e.getAttribute("data-v-password"),l=e.getAttribute("data-v-email"),o=e.getAttribute("data-v-emails");return a&&""==t.value?(i.innerHTML+='<span class="bft-validation-error-message">&nbsp;'+a+"</span>",t.classList.add("bft-validation-error"),!1):n&&!FamilyTree.input.validatePassword(t.value)?(i.innerHTML+='<span class="bft-validation-error-message">&nbsp;'+n+"</span>",t.classList.add("bft-validation-error"),!1):l&&!FamilyTree.input.isValidEmail(t.value)?(i.innerHTML+='<span class="bft-validation-error-message">&nbsp;'+l+"</span>",t.classList.add("bft-validation-error"),!1):!(o&&!FamilyTree.input.isValidEmails(t.value))||(i.innerHTML+='<span class="bft-validation-error-message">&nbsp;'+o+"</span>",t.classList.add("bft-validation-error"),!1)},FamilyTree.input.validateAndGetData=function(e){for(var t=e.querySelectorAll("[data-bft-input]"),i=!0,r=0;r<t.length;r++){var a=t[r];FamilyTree.input.validate(a)||(i=!1)}if(!i)return!1;var n=e.querySelectorAll("[data-binding]"),l={};for(r=0;r<n.length;r++){var o=n[r],s=o.getAttribute("data-binding");"checkbox"==o.type.toLowerCase()?l[s]=o.checked:l[s]=o.value}return l},FamilyTree.input.validatePassword=function(e){return e&&(e=e.trim()),!(e.length<5)&&(!(e.length>18)&&-1==e.indexOf(" "))},FamilyTree.input.isValidEmails=function(e){if(e)for(var t=e.split(","),i=0;i<t.length;i++){var r=t[i].trim();if(!FamilyTree.input.isValidEmail(r))return!1}return!0},FamilyTree.input.isValidEmail=function(e){e&&(e=e.trim());return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},FamilyTree.prototype.hideTreeMenu=function(e,t){if(this._tree_menu_temp){var i=this._tree_menu_temp;if(this.manager.oldNodes=this.nodes,this.nodes=i.nodes,this.manager.maxX=i.maxX,this.manager.maxY=i.maxY,this.manager.minX=i.minX,this.manager.minY=i.minY,this.manager.roots=i.roots,this.manager.nodes=i.nodes,this.manager.rootList=i.rootList,this.manager.visibleNodeIds=i.visibleNodeIds,this.manager.bordersByRootIdAndLevel=i.bordersByRootIdAndLevel,this.config.roots=i.config.roots,this.config.nodes=i.config.nodes,this._tree_menu_temp=null,e){var r={id:i.id,animFromClickedNode:!1};this._draw(!0,FamilyTree.action.update,r,(function(){t&&t()}))}}},FamilyTree.prototype.showTreeMenu=function(e){null==e&&console.error("Call addNode without id");var t=this.getNode(e);t||console.error("Cannot get node id: "+e);var i=this.getNode(t.fid),r=this.getNode(t.mid),a=null,n=null,l=[],o=[];i&&(a=this.get(i.id)),r&&(n=this.get(r.id));for(var s=0;s<t.pids.length;s++){var d=this.get(t.pids[s]);d&&l.push(d)}for(s=0;s<t.ftChildrenIds.length;s++)o.push(this.get(t.ftChildrenIds[s]));var c=this.get(e);this._tree_menu_temp={maxX:this.manager.maxX,maxY:this.manager.maxY,minX:this.manager.minX,minY:this.manager.minY,roots:this.manager.roots,nodes:this.manager.nodes,rootList:this.manager.rootList,visibleNodeIds:this.manager.visibleNodeIds,bordersByRootIdAndLevel:this.manager.bordersByRootIdAndLevel,id:e,config:{roots:this.config.roots,nodes:this.config.nodes}},this.config.nodes=[];var m=[];if(n)m.push(n);else{var p={id:"_ft_mother",templateName:"mother",_ft_method:"addParentNode",_ft_childId:e,_ft_type:"mid",_ft_data:{gender:"female"}};c.mid=p.id,a?(a.pids=[p.id],p.pids=[a.id],p._ft_data.pids=[a.id]):p.pids=["_ft_father"],m.push(p)}if(a)m.push(a);else{var h={id:"_ft_father",templateName:"father",_ft_method:"addParentNode",_ft_childId:e,_ft_type:"fid",_ft_data:{gender:"male"}};c.fid=h.id,n?(n.pids=[h.id],h.pids=[n.id],h._ft_data.pids=[n.id]):h.pids=["_ft_mother"],m.push(h)}for(s=0;s<l.length;s++)m.push(l[s]);c.pids||(c.pids=[]);var f={id:"_ft_partner",pids:[e],templateName:"partner",_ft_method:"addPartnerNode",_ft_data:{pids:[e]}};if("male"==c.gender?(f.templateName="wife",f._ft_data.gender="female"):"female"==c.gender&&(f.templateName="husband",f._ft_data.gender="male"),c.pids.push(f.id),m.push(f),c.pids)for(s=0;s<c.pids.length;s++){if(m.push({id:"_ft_child_group_"+s,mid:e,fid:c.pids[s],tags:["children-group"]}),"_ft_partner"==c.pids[s]){var u={id:"_ft_son_"+s,stpid:"_ft_child_group_"+s,templateName:"son",_ft_method:"addChildAndPartnerNodes",_ft_childData:{mid:t.id,fid:f.id,gender:"male"},_ft_partnerData:{pids:[e]},_ft_id:e},y={id:"_ft_daughter_"+s,stpid:"_ft_child_group_"+s,templateName:"daughter",_ft_method:"addChildAndPartnerNodes",_ft_childData:{mid:t.id,fid:f.id,gender:"female"},_ft_partnerData:{pids:[e]},_ft_id:e};"male"==c.gender&&"female"==f._ft_data.gender?(u._ft_childData.mid=f.id,u._ft_childData.fid=c.id,u._ft_partnerData.gender=f._ft_data.gender,y._ft_childData.mid=f.id,y._ft_childData.fid=c.id,y._ft_partnerData.gender=f._ft_data.gender):"female"==c.gender&&"male"==f._ft_data.gender&&(u._ft_childData.mid=c.id,u._ft_childData.fid=f.id,u._ft_partnerData.gender=f._ft_data.gender,y._ft_childData.mid=c.id,y._ft_childData.fid=f.id,y._ft_partnerData.gender=f._ft_data.gender),m.push(u),m.push(y)}else m.push({id:"_ft_son_"+s,stpid:"_ft_child_group_"+s,templateName:"son",_ft_method:"addChildNode",_ft_data:{mid:e,fid:c.pids[s],gender:"male"}}),m.push({id:"_ft_daughter_"+s,stpid:"_ft_child_group_"+s,templateName:"daughter",_ft_method:"addChildNode",_ft_data:{mid:e,fid:c.pids[s],gender:"female"}});for(var g=0;g<o.length;g++)o[g].mid!=c.pids[s]&&o[g].fid!=c.pids[s]||(o[g].mid=void 0,o[g].fid=void 0,o[g].stpid="_ft_child_group_"+s,m.push(o[g]))}for(g=0;g<o.length;g++)if(o[g].fid==c.id&&FamilyTree.isNEU(o[g].mid)||o[g].mid==c.id&&FamilyTree.isNEU(o[g].fid)){var T={id:"_ft_partner_for_single_child",pids:[e],templateName:"partner",_ft_method:"addPartnerAndParentNodes",_ft_childId:o[g].id,_ft_partnerData:{pids:[e]},_ft_id:e};"male"==c.gender?(T.templateName="wife",T._ft_partnerData.gender="female"):"female"==c.gender&&(T.templateName="husband",T._ft_partnerData.gender="male"),c.pids.push(T.id),m.push(T),o[g].fid==c.id?o[g].mid="_ft_partner_for_single_child":o[g].mid==c.id&&(o[g].fid="_ft_partner_for_single_child"),m.push(o[g])}var b={nodes:m,node:c};FamilyTree.events.publish("node-tree-menu-show",[this,b]),b.nodes.push(b.node),this.config.nodes=b.nodes,c=this.get(e);var v=this;FamilyTree.isNEU(c.mid)?FamilyTree.isNEU(c.fid)||(this.config.roots=[c.fid]):this.config.roots=[c.mid];var F={id:e,treeMenuMode:!0};this._draw(!1,FamilyTree.action.update,F,(function(){FamilyTree._moveToBoundaryArea(v.getSvg(),v.getViewBox(),v.response.boundary)}))},FamilyTree.ui.css=function(){return'<style data-bft-styles>.bft-button{background-color:#039be5;cursor:pointer;width:calc(100%);height:50px;color:#fff;padding-top:5px;padding-left:7px;padding-right:7px;text-align:center;text-transform:uppercase;border:1px solid #3fc0ff;display:inline-block;border-radius:5px}.bft-button.orange{background-color:#f57c00;border:1px solid #ffa03e}.bft-button.yellow{background-color:#ffca28;border:1px solid #ffdf7c}.bft-button.lower{text-transform:unset}.bft-button.transparent{background-color:transparent}.bft-button:hover{background-color:#35afea}.bft-button.orange:hover{background-color:#f79632}.bft-button.yellow:hover{background-color:#ffd452}.bft-button:active{transform:matrix(.98,0,0,.98,0,0)}.bft-button-icon{text-align:initial;cursor:pointer;margin-bottom:15px;color:#039be5}.bft-dark .bft-button-icon:hover{background-color:#2d2d2d}.bft-light .bft-button-icon:hover{background-color:#ececec}.bft-button-icon>img{height:24px;width:24px;vertical-align:middle;padding:7px}.bft-button:focus{outline:0}.bft-button-icon>img{filter:invert(46%) sepia(66%) saturate(2530%) hue-rotate(171deg) brightness(95%) contrast(98%)}.bft-light .bft-button.transparent{color:#039be5}.bft-light .bft-button.transparent:hover{color:#fff}.bft-button-loading{background-color:transparent;cursor:pointer;width:calc(100% - 2px);height:50px;color:#fff;text-align:center;text-transform:uppercase;border:1px solid #027cb7;display:inline-block;display:flex;justify-content:center;align-items:center;display:none}.bft-button-loading .bft-loading-dots div{margin:0 10px}.bft-link-bft-button{position:absolute;right:10px;top:-1px}[data-bft-input-disabled] .bft-link-bft-button{display:none}[dir=rtl] .bft-link-bft-button{left:10px;right:unset}.bft-img-button{width:48px;height:48px;cursor:pointer;border-radius:50%;background-color:#039be5;background-repeat:no-repeat;background-size:24px 24px;background-position:center center;margin:3px;display:inline-block}.bft-img-button:hover{background-color:#f57c00}.bft-checkbox{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.bft-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.bft-checkbox-checkmark{position:absolute;top:0;left:0;height:25px;width:25px;border-radius:5px}.bft-dark [data-bft-input-disabled] .bft-checkbox-checkmark,.bft-dark [data-bft-input-disabled].bft-checkbox input:checked~.bft-checkbox-checkmark,.bft-light [data-bft-input-disabled] .bft-checkbox-checkmark,.bft-light [data-bft-input-disabled].bft-checkbox input:checked~.bft-checkbox-checkmark{background-color:#aeaeae!important}[data-bft-input-disabled].bft-checkbox{cursor:default}[dir=rtl] .bft-checkbox-checkmark{right:0}[dir=rtl] .bft-checkbox{padding-left:unset;padding-right:35px}.bft-dark .bft-checkbox-checkmark{background-color:#333;border:1px solid #5b5b5b}.bft-light .bft-checkbox-checkmark{background-color:#fff;border:1px solid #c7c7c7}.bft-dark .bft-checkbox:hover input~.bft-checkbox-checkmark{background-color:#3c3c3c}.bft-light .bft-checkbox:hover input~.bft-checkbox-checkmark{background-color:#f8f9f9}.bft-dark .bft-checkbox input:checked~.bft-checkbox-checkmark{background-color:#039be5}.bft-light .bft-checkbox input:checked~.bft-checkbox-checkmark{background-color:#039be5}.bft-checkbox-checkmark:after{content:"";position:absolute;display:none}.bft-checkbox input:checked~.bft-checkbox-checkmark:after{display:block}.bft-checkbox .bft-checkbox-checkmark:after{left:9px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.bft-filter{user-select:none}.bft-light .bft-filter{color:#757575}.bft-dark .bft-filter{color:#ccc}.bft-filter>div>div{display:inline-block;padding:3px 10px;cursor:pointer}.bft-filter-menu fieldset,.bft-filter>div,.filter-field-selected{border-radius:5px}.bft-filter-menu fieldset{overflow-y:auto;max-height:300px}.bft-filter>div.bft-filter-menu{padding:10px}.bft-light .bft-filter>div.bft-filter-menu,.bft-light .filter-field-selected{background-color:#f8f9f9}.bft-dark .bft-filter>div.bft-filter-menu,.bft-dark .filter-field-selected{background-color:#3c3c3c}.bft-light .bft-filter>div{background-color:#eee}.bft-dark .bft-filter>div{background-color:#333}.bft-form-perspective{transform-style:preserve-3d;perspective:500px;position:absolute;top:32px}.bft-form{box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;padding:14px;transform-origin:top center;user-select:none;display:none;position:relative;max-height:calc(100vh - 100px);overflow-y:auto;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.bft-form-bottom{border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:5px;border-top-right-radius:5px}.bft-form .separator{margin:0 10px}@media screen and (max-width:1000px){.bft-form-perspective{min-width:100%;max-height:calc(100% - 32px);left:unset!important;right:unset!important;transform:none!important}.bft-form .set{max-height:calc(100vh - 74px)}.bft-form-fieldset{max-width:unset!important}}.bft-light .bft-form .separator{border-bottom:1px solid #c7c7c7}.bft-dark .bft-form .separator{border-bottom:1px solid #5b5b5b}.bft-light .bft-form{background-color:#fff}.bft-dark .bft-form{background-color:#252526}.bft-item{padding:6px 12px 6px 12px;display:flex;flex-direction:row}.bft-light .bft-form .bft-item.selected,.bft-light .bft-form .bft-item:hover{background-color:#0074e8;color:#fff}.bft-dark .bft-form .bft-item.selected,.bft-dark .bft-form .bft-item:hover{background-color:#094771;color:#fff}.bft-item.selected img,.bft-item:hover img{filter:invert(100%)}.bft-item.selected img{visibility:visible!important}.bft-form-fieldset{display:flex;flex-wrap:wrap;margin:0!important}.bft-form-field{flex:1 0 21%;margin:3px;min-width:200px}.bft-form-field-100{flex:1 0 96%;margin:3px;min-width:200px}.bft-input{position:relative}.bft-input>input,.bft-input>select{height:50px;padding:18px 10px 2px 9px;width:100%;box-sizing:border-box;border-style:solid;border-width:1px}.bft-input select{height:50px;padding:20px 5px 4px 5px}[data-bft-input-disabled].bft-input>input,[data-bft-input-disabled].bft-input>select{border-color:transparent!important}.bft-light [data-bft-input-disabled]>input,.bft-light [data-bft-input-disabled]>select{background-color:#fff!important}.bft-dark [data-bft-input-disabled]>input,.bft-dark [data-bft-input-disabled]>select{background-color:#252526!important}[data-bft-input-disabled]>select{appearance:none;padding-left:8px}.bft-input>label{display:inline-block;position:absolute;padding-left:10px;padding-right:10px;color:#acacac;cursor:text;-webkit-transition:all .1s ease-out;-moz-transition:all .1s ease-out;-ms-transition:all .1s ease-out;-o-transition:all .1s ease-out;transition:all .1 ease-out;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:initial;text-align:initial;white-space:nowrap}.bft-input>label{top:12px;overflow:hidden;text-overflow:ellipsis;max-width:calc(100% - 14px)}.bft-input>label.focused,.bft-input>label.hasval{top:-1px}.bft-input>input,.bft-input>select{outline:0;border-radius:5px}.bft-dark .bft-input>label.focused,.bft-light .bft-input>label.focused{color:#039be5}.bft-dark .bft-input>input,.bft-dark .bft-input>select{color:#ccc;background-color:#333;border-color:#5b5b5b}.bft-light .bft-input>input,.bft-light .bft-input>select{color:#757575;background-color:#fff;border-color:#c7c7c7}.bft-light .bft-input>input:focus,.bft-light .bft-input>select:focus{border-color:#039be5;background-color:#f8f9f9}.bft-dark .bft-input>input:focus,.bft-dark .bft-input>select:focus{border-color:#039be5;background-color:#3c3c3c}.bft-dark .bft-input>input.bft-validation-error,.bft-dark .bft-input>select.bft-validation-error,.bft-light .bft-input>input.bft-validation-error,.bft-light .bft-input>select.bft-validation-error{border-color:#ca2a2a}.bft-dark .bft-validation-error-message,.bft-light .bft-validation-error-message{color:#ca2a2a}.bft-link{color:#039be5;cursor:pointer;text-decoration:underline}.bft-link:hover{color:#f57c00}.bft-dark ::-webkit-scrollbar,.bft-light ::-webkit-scrollbar{width:15px}.bft-dark ::-webkit-scrollbar-track{background:#1e1e1e;border-left:1px solid #333}.bft-dark ::-webkit-scrollbar-thumb{background:#424242}.bft-dark ::-webkit-scrollbar-thumb:hover{background:#4f4f4f}.bft-dark ::-webkit-scrollbar-thumb:active{background:#5e5e5e}.bft-light ::-webkit-scrollbar-track{background:#fff;border-left:1px solid #ddd}.bft-light ::-webkit-scrollbar-thumb{background:#c1c1c1}.bft-light ::-webkit-scrollbar-thumb:hover{background:#929292}.bft-light ::-webkit-scrollbar-thumb:active{background:#666}.bft-edit-form{position:fixed;top:0;right:0;height:100%;width:100%;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;display:flex;flex-direction:column;height:100%;width:400px}@media screen and (max-width:1000px){.bft-edit-form{width:100%}}.bft-dark .bft-edit-form{background-color:#252526}.bft-light .bft-edit-form{background-color:#fff}.bft-edit-form-header{height:200px;text-align:center;border-radius:10px}.export-service .bft-edit-form-header{border-radius:unset}.bft-edit-form-title{color:#fff;margin:0;padding:14px 17px 7px 17px}.bft-edit-form-avatar{border-radius:50%;width:150px;height:150px;position:absolute;top:75px;border:5px solid #fff;left:50%;transform:translateX(-50%);background-color:#cacaca;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0}.bft-edit-form-close{position:absolute;right:14px;top:14px;width:34px;height:34px;cursor:pointer}.bft-edit-form-fields{flex-grow:1;overflow-y:auto;overflow-x:hidden}.bft-edit-form-fields-inner{margin:0 7px 20px 7px}.bft-family-menu{opacity:0;display:inline-block;position:absolute;text-align:left;user-select:none;min-width:270px;box-shadow:rgba(0,0,0,.2) 0 4px 8px 0,rgba(0,0,0,.19) 0 6px 20px 0;font:13px/28px Helvetica,"Segoe UI",Arial,sans-serif;border-radius:10px}.bft-family-menu>div:hover img{filter:invert(100%)}.bft-family-menu [data-item]{text-align:start;padding:7px 10px}.bft-dark .bft-family-menu [data-item]{background-color:#252526;color:#acacac;border-bottom:1px solid #333}.bft-dark .bft-family-menu [data-item]:hover{background-color:#094771!important;color:#fff!important}.bft-dark .bft-family-menu [data-item]:hover svg{filter:brightness(0) invert(1)}.bft-light .bft-family-menu [data-item]{background-color:#fff;color:#333;border-bottom:1px solid #c7c7c7}.bft-light .bft-family-menu [data-item]:hover{background-color:#0074e8!important;color:#fff!important}.bft-light .bft-family-menu [data-item]:hover svg{filter:brightness(0) invert(1)}.bft-family-menu [data-item] svg{vertical-align:middle}.bft-family-menu [data-item]:first-child{border-top-left-radius:7px;border-top-right-radius:7px}.bft-family-menu [data-item]:last-child{border-bottom-width:0;border-bottom-style:none;border-bottom-left-radius:7px;border-bottom-right-radius:7px}.bft-search{position:absolute}@media screen and (max-width:1000px){.bft-search{width:calc(100% - 30px)}}.bft-search .bft-input{margin-bottom:0}.bft-search-input{color:#7a7a7a;width:100%;border:none;outline:0;padding-top:10px;padding-right:47px}.bft-search label{padding-right:47px}.bft-search-image-td{width:43px}.bft-search-text-td{padding-inline-end:7px;line-height:15px;text-align:start}.bft-search table{box-shadow:rgba(0,0,0,.2) 0 4px 8px 0,rgba(0,0,0,.19) 0 6px 20px 0;margin:0 3.5px 0 3.5px;width:calc(100% - 7px);border-radius:7px}.bft-search table tr:first-child td:first-child{border-top-left-radius:7px}.bft-search table tr:first-child td:last-child{border-top-right-radius:7px}[dir=rtl] .bft-search table tr:first-child td:first-child{border-top-left-radius:unset;border-top-right-radius:7px}[dir=rtl] .bft-search table tr:first-child td:last-child{border-top-right-radius:unset;border-top-left-radius:7px}.bft-search table tr:last-child td:first-child{border-bottom-left-radius:7px}.bft-search table tr:last-child td:last-child{border-bottom-right-radius:7px}[dir=rtl] .bft-search table tr:last-child td:first-child{border-bottom-left-radius:unset;border-bottom-right-radius:7px}[dir=rtl] .bft-search table tr:last-child td:last-child{border-bottom-right-radius:unset;border-bottom-left-radius:7px}.bft-dark .bft-search table{background-color:#252526;color:#acacac}.bft-search [data-search-item-id]{cursor:pointer}.bft-search-photo{margin:7px 7px 0 7px;width:32px;height:32px;background-size:cover;background-position:top center;border-radius:50%;display:inline-block;border:1px solid #8c8c8c}.bft-dark .bft-search [data-search-item-id] td{border-top:1px solid #333}.bft-dark .bft-search [data-search-item-id]:hover,.bft-dark .bft-search [data-selected=yes]{background-color:#094771;color:#fff}.bft-light .bft-search table{background-color:#fff;color:#333}.bft-light .bft-search [data-search-item-id] td{border-top:1px solid #c7c7c7}.bft-light .bft-search [data-search-item-id]:hover,.bft-light .bft-search [data-selected=yes]{background-color:#0074e8;color:#fff}.bft-search [data-search-item-id]:first-child td{border-top:unset}.bft-ripple-container{position:absolute;top:0;right:0;bottom:0;left:0}.bft-drag-over rect{opacity:.5}.bft-ripple-container span{transform:scale(0);border-radius:100%;position:absolute;opacity:.75;background-color:#fff;animation:bft-ripple 1s}@-moz-keyframes bft-ripple{to{opacity:0;transform:scale(2)}}@-webkit-keyframes bft-ripple{to{opacity:0;transform:scale(2)}}@-o-keyframes bft-ripple{to{opacity:0;transform:scale(2)}}@keyframes bft-ripple{to{opacity:0;transform:scale(2)}}.bft-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.bft-slider:before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}.bft-slider.round{border-radius:24px}.bft-slider.round:before{border-radius:50%}svg text:hover{cursor:default}svg.bft-cursor-grab,svg.bft-cursor-grab text:hover{cursor:grab}svg.bft-cursor-nodrop,svg.bft-cursor-nodrop text:hover{cursor:no-drop}svg.bft-cursor-copy,svg.bft-cursor-copy text:hover{cursor:copy}svg.bft-cursor-move,svg.bft-cursor-move text:hover{cursor:move}#bft-close-btn:focus,#bft-close-btn:hover{color:#000;text-decoration:none;cursor:pointer}#bft-id-select:focus{outline:.5px solid #aeaeae}#bft-sampleDialog #title:hover{cursor:default;background:gray}.bft-light{background-color:#fff;font:13px/28px Helvetica,"Segoe UI",Arial,sans-serif}.bft-dark{background-color:#1e1e1e;font:13px/28px Helvetica,"Segoe UI",Arial,sans-serif}.bft-light .bft-fill{fill:#fff}.bft-dark .bft-fill{fill:#1e1e1e}.bft-dark input,.bft-dark select,.bft-light input,.bft-light select{font:16px Helvetica,"Segoe UI",Arial,sans-serif}.bft-dark h1,.bft-light h1{font-size:30px;line-height:1}.bft-edit-form{position:absolute;border-radius:10px}.export-service .bft-edit-form{border-radius:unset}.bft-dark .bft-edit-form{color:#acacac}.bft-light .bft-edit-form{color:#333}.bft-dark ::-webkit-calendar-picker-indicator{filter:invert(70%)}.bft-light ::-webkit-calendar-picker-indicator{filter:invert(50%)}.bft-edit-form-instruments{margin:42px 10px 0 10px;text-align:center;min-height:70px}.bft-img-button svg{position:relative;top:12px}.bft-light .bft-toolbar-container svg circle,.bft-light .bft-toolbar-container svg line,.bft-light .bft-toolbar-container svg path{stroke:#8c8c8c!important}.bft-dark .bft-toolbar-container svg circle,.bft-dark .bft-toolbar-container svg line,.bft-dark .bft-toolbar-container svg path{stroke:#8c8c8c!important}.bft-dark .bft-toolbar-container svg rect{fill:#252526!important}.bft-dark .bft-toolbar-container [data-tlbr=minus] svg{border-left:1px solid #5b5b5b!important;border-right:1px solid #5b5b5b!important;border-bottom:1px solid #5b5b5b!important}.bft-dark .bft-toolbar-container [data-tlbr=plus] svg{border-left:1px solid #5b5b5b!important;border-right:1px solid #5b5b5b!important;border-top:1px solid #5b5b5b!important}.bft-dark .bft-toolbar-container [data-tlbr]>svg{border:1px solid #5b5b5b!important;background-color:#252526!important}</style>'},FamilyTree.events.on("render",(function(e,t){if(e.recentRoots||(e.recentRoots=[]),e.config.roots)for(var i=0;i<e.config.roots.length;i++){var r=e.recentRoots.indexOf(e.config.roots[i]);-1!=r&&e.recentRoots.splice(r,1),e.recentRoots.unshift(e.config.roots[i])}})),FamilyTree.events.on("render-link",(function(e,t){null!=t.cnode.ppid&&t.cnode.layout!=FamilyTree.mixed&&(t.html+='<use xlink:href="#dot" x="'+t.p.xa+'" y="'+t.p.ya+'"/>')})),FamilyTree.events.on("click",(function(e,t){if(e instanceof FamilyTree){var i=e._get(t.node.id);if(i._ft_method)return"addParentNode"==i._ft_method?e[i._ft_method](i._ft_childId,i._ft_type,i._ft_data,null,!0):"addChildAndPartnerNodes"==i._ft_method?e[i._ft_method](i._ft_id,i._ft_childData,i._ft_partnerData,null,!0):"addPartnerAndParentNodes"==i._ft_method?e[i._ft_method](i._ft_id,i._ft_childId,i._ft_partnerData,null,!0):e[i._ft_method](i._ft_data,null,!0),!1;for(var r=t.event.target;r;){if(r.getAttribute&&(r.hasAttribute("data-ctrl-n-t-menu-id")||r.hasAttribute("data-ctrl-n-t-menu-c"))){var a=r.getAttribute("data-ctrl-n-t-menu-id");return FamilyTree.isNEU(a)?e.hideTreeMenu(!0):e.showTreeMenu(a),t.event.stopPropagation(),t.event.preventDefault(),!1}r=r.parentNode}}})),void 0===FamilyTree&&(FamilyTree={}),FamilyTree.prototype.onField=function(e){return this.on("field",(function(t,i){return e.call(t,i)}))},FamilyTree.prototype.onInit=function(e){return this.on("init",(function(t){return e.call(t)}))},FamilyTree.prototype.onRedraw=function(e){return this.on("redraw",(function(t){return e.call(t)}))},FamilyTree.prototype.onUpdateNode=function(e){return this.on("update",(function(t,i,r){var a={oldData:i,newData:r};return e.call(t,a)}))},FamilyTree.prototype.onRemoveNode=function(e){return this.on("remove",(function(t,i,r){var a={id:i,newPidsAndStpidsForIds:r};return e.call(t,a)}))},FamilyTree.prototype.onAddNode=function(e){return this.on("add",(function(t,i){var r={data:i};return e.call(t,r)}))},FamilyTree.prototype.onDrop=function(e){return this.on("drop",(function(t,i,r){var a={dragId:i,dropId:r};return e.call(t,a)}))},FamilyTree.prototype.onDrag=function(e){return this.on("drag",(function(t,i,r){var a={dragId:i,event:r};return e.call(t,a)}))},FamilyTree.prototype.onExpandCollpaseButtonClick=function(e){return this.on("expcollclick",(function(t,i,r,a){var n={collapsing:i,id:r,ids:a};return e.call(t,n)}))},FamilyTree.prototype.onExportStart=function(e){return this.on("exportstart",(function(t,i){return e.call(t,i)}))},FamilyTree.prototype.onExportEnd=function(e){return this.on("exportend",(function(t,i){return e.call(t,i)}))},FamilyTree.prototype.onNodeClick=function(e){return this.on("click",(function(t,i){return e.call(t,i)}))},FamilyTree.prototype.onNodeDoubleClick=function(e){return this.on("dbclick",(function(t,i){var r={data:i};return e.call(t,r)}))},FamilyTree.filterUI=function(){},FamilyTree.filterUI.prototype.init=function(e){this.instance=e,this.filterBy=null,this._event_id=FamilyTree._guid()},FamilyTree.filterUI.prototype.addFilterTag=function(e){if(!this.instance.config.filterBy)return!1;if(FamilyTree.isNEU(e))return!1;if(null!==this.filterBy||"object"!=typeof this.instance.config.filterBy||Array.isArray(this.instance.config.filterBy)||(this.filterBy=JSON.parse(JSON.stringify(this.instance.config.filterBy))),null!=this.filterBy)for(var t in this.filterBy){var i=e[t];if(null!=i){var r=this.filterBy[t];if(null!=r){var a=r[i];if(null!=a&&!1===a.checked)return!0}}}return!1},FamilyTree.filterUI.prototype.show=function(e){var t=this.instance.element.querySelector('[data-filter-field="'+e+'"]');t&&t.click()},FamilyTree.filterUI.prototype.hide=function(){var e=this.instance.element.querySelector("[data-filter-close]");e&&e.click()},FamilyTree.filterUI.prototype.update=function(){if(this.instance.config.filterBy){var e={};if("all"==this.instance.config.filterBy)for(var t=0;t<this.instance.editUI.fields.length;t++){var i=this.instance.editUI.fields[t];"tags"!=i&&"id"!=i&&"pid"!=i&&"ppid"!=i&&"stpid"!=i&&(e[i]={})}else if(Array.isArray(this.instance.config.filterBy))for(t=0;t<this.instance.config.filterBy.length;t++)e[this.instance.config.filterBy[t]]={};else if("object"==typeof this.instance.config.filterBy)for(var r in this.instance.config.filterBy)e[r]={};for(var a in e){var n=e[a];for(t=0;t<this.instance.config.nodes.length;t++){var l=this.instance.config.nodes[t][a];null!=l&&(n[l]||(n[l]={checked:!0,text:l}))}}if(null!=this.filterBy)for(var o in e)if(this.filterBy[o])for(var s in e[o])this.filterBy[o][s]&&(e[o][s]=this.filterBy[o][s]);this.filterBy=e;var d=this,c=this.instance.element.querySelector("[data-filter]");c&&c.parentNode.removeChild(c),(c=document.createElement("div")).setAttribute("data-filter",""),c.style.position="absolute",c.setAttribute("class","bft-filter"),c.style.top=this.instance.config.padding+"px",c.style.left=this.instance.config.padding+"px";var m="";for(var o in this.filterBy)m+=`<div data-filter-field="${o}">${o}</div>`;c.innerHTML=`<div>${m}</div>`,c.addEventListener("click",(function(e){if(e.target.hasAttribute("data-filter-close")||e.target.hasAttribute("data-filter-field")){for(var t=e.target.getAttribute("data-filter-field"),i=d.instance.element.querySelectorAll("[data-filter-menu]"),r=0;r<i.length;r++)i[r].style.display="none";var a=d.instance.element.querySelectorAll(".filter-field-selected");for(r=0;r<a.length;r++)a[r].classList.remove("filter-field-selected");var n=d.instance.element.querySelector("[data-filter-close]");if(n&&n.parentNode.removeChild(n),e.target.hasAttribute("data-filter-close"))return;if(!e.target.hasAttribute("data-filter-field"))return;var l=d.instance.element.querySelector(`[data-filter-menu="${t}"]`);if(!l){var o=`<div>\n                    <input data-all type="checkbox" id="${t}" name="${t}" checked>\n                    <label for="${t}">[All]</label>\n                </div>`;for(var s in d.filterBy[t]){var c=d.filterBy[t][s],m=c.text;null==m&&(m=s),o+=`<div>\n                        <input  type="checkbox" id="${s}" name="${s}" ${c.checked?"checked":""}>\n                        <label for="${s}">${m}</label>\n                    </div>`}(l=document.createElement("div")).innerHTML=`<fieldset>\n                                                    <legend>Filter by ${t}:</legend>\n                                                    ${o}\n                                                </fieldset>`,l.setAttribute("data-filter-menu",t),l.classList.add("bft-filter-menu"),e.target.parentNode.parentNode.appendChild(l);var p=l.querySelectorAll("input");for(r=0;r<p.length;r++)p[r].addEventListener("change",(function(e){for(var t=e.target;t&&!t.hasAttribute("data-filter-menu");)t=t.parentNode;if(t){var i=t.getAttribute("data-filter-menu");if(e.target.hasAttribute("data-all")){for(var r=e.target.parentNode.parentNode.querySelectorAll("input"),a=0;a<r.length;a++)if(r[a]!=e.target)for(var n in r[a].checked=e.target.checked,d.filterBy[i])d.filterBy[i][n].checked=e.target.checked}else null!=d.filterBy[i][this.name]&&(d.filterBy[i][this.name].checked=this.checked);d.instance.draw()}}))}l.style.display="block",e.target.classList.add("filter-field-selected"),(n=document.createElement("div")).classList.add("close"),n.innerHTML="x",n.setAttribute("data-filter-close",""),e.target.parentNode.appendChild(n)}})),this.instance.element.appendChild(c)}},void 0===FamilyTree&&(FamilyTree={}),void 0===FamilyTree.remote&&(FamilyTree.remote={}),FamilyTree.LIMIT_NODES=!0,FamilyTree.remote._fromResDTO=function(e,t,i,r,a){var n=t[e.id];e.x=n.p[0],e.y=n.p[1],e.w=n.p[2],e.h=n.p[3],null!=n.ln&&(e.leftNeighbor=a[n.ln]),null!=n.rn&&(e.rightNeighbor=a[n.rn]);for(var l=0;l<e.stChildren.length;l++)FamilyTree.remote._fromResDTO(e.stChildren[l],t,i,r,a);for(l=0;l<e.children.length;l++)FamilyTree.remote._fromResDTO(e.children[l],t,i,r,a)},FamilyTree.remote._toReqDTO=function(e,t){var i={p:[e.id,null!=e.parent?e.parent.id:null,null!=e.stParent?e.stParent.id:null,e.w,e.h]};e.children.length>0&&(i.c=FamilyTree.remote._convertToIdArray(e.children)),e.stChildren.length>0&&(i.v=FamilyTree.remote._convertToIdArray(e.stChildren)),null!=e.layout&&0!=e.layout&&(i.l=e.layout),e.isAssistant&&(i.a=1),e.isSplit&&(i.s=e.isSplit),e.padding&&(i.q=e.padding),e.lcn&&(i.k=e.lcn),e.stContainerNodes&&(i.b=FamilyTree.remote._convertToIdArray(e.stContainerNodes)),e._m&&(i.m=e._m.id),e.isPartner&&(i.i=e.isPartner),e.hasPartners&&(i.g=e.hasPartners),e.partnerSeparation&&(i.e=e.partnerSeparation),t.push(i);for(var r=0;r<e.stChildren.length;r++)FamilyTree.remote._toReqDTO(e.stChildren[r],t);for(r=0;r<e.children.length;r++)FamilyTree.remote._toReqDTO(e.children[r],t)},FamilyTree.remote._toReqLayoutConfigsDTO=function(e){var t={};for(var i in e){var r=e[i];t[i]||(t[i]=[]),t[i][0]=r.orientation,t[i][1]=r.levelSeparation,t[i][2]=r.mixedHierarchyNodesSeparation,t[i][3]=r.subtreeSeparation,t[i][4]=r.siblingSeparation,t[i][5]=r.layout,t[i][6]=r.columns,t[i][7]=r.collapse,t[i][8]=r.assistantSeparation,t[i][9]=r.partnerNodeSeparation}return t},FamilyTree.remote._convertToIdArray=function(e){for(var t=[],i=0;i<e.length;i++)t.push(e[i].id);return t},FamilyTree.remote._setPositions=function(e,t,i,r){for(var a=[],n=[],l=FamilyTree.remote._toReqLayoutConfigsDTO(t),o=0;o<e.length;o++)n.push(e[o].id),FamilyTree.remote._toReqDTO(e[o],a);var s={n:a,c:l,r:n,v:"8.07.00"};if(FamilyTree.LIMIT_NODES||(s.l=!0),null!=FamilyTree.remote._fromReqDTO)FamilyTree.remote._fromReqDTO(s.n,s.r,s.c,(function(t){for(var a=0;a<e.length;a++)FamilyTree.remote._fromResDTO(e[a],t,0,e,r);i()}));else{s=JSON.stringify(s);var d=FamilyTree.localStorage.getItem(s);d&&(d=JSON.parse(d)),d&&!d.limit?FamilyTree.remote._proceed(e,d,r,i):FamilyTree.remote._findRegion((function(t){FamilyTree._ajax(t,"post",s,"json",(function(t){t.error?i(2):(FamilyTree.remote._proceed(e,t,r,i),FamilyTree.localStorage.setItem(s,JSON.stringify(t)))}))}))}},FamilyTree.remote._proceed=function(e,t,i,r){if("string"==typeof t&&(t=JSON.parse(t)),t.limit&&1==t.limit)r(t.limit);else{for(var a=0;a<e.length;a++)FamilyTree.remote._fromResDTO(e[a],t,0,e,i);r()}},FamilyTree.remote._findRegion=function(e){var t=FamilyTree.localStorage.getItem("funcUrl");if(t)e(t);else{for(var i=["au-e","au-se","brs","ca","ca-e","easia","eus-2","eus","fr","ind","jp-e","jp-w","kr","n-eu","se-asia","s-ind","uk-s","uk-w","us","us-n-c","us-s-c","w-c-us","w-eu","w-ind","w-us-2","wus"],r=[],a=0;a<i.length;a++)r.push(new XMLHttpRequest);for(a=0;a<i.length;a++)!function(){var t="https://"+i[a]+"-balkangraph.azurewebsites.net/api/OrgChartJS",n=r[a];n.onreadystatechange=function(){if(4==this.readyState&&200==this.status){FamilyTree.localStorage.setItem("funcUrl",t),e(t);for(var i=0;i<r.length;i++)r[i].abort()}},n.open("GET",t,!0),n.send()}()}};

/***/ }),

/***/ "./node_modules/@videojs/vhs-utils/cjs/byte-helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@videojs/vhs-utils/cjs/byte-helpers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.reverseBytes = exports.sliceBytes = exports.bytesMatch = exports.concatTypedArrays = exports.stringToBytes = exports.bytesToString = exports.numberToBytes = exports.bytesToNumber = exports.IS_LITTLE_ENDIAN = exports.IS_BIG_ENDIAN = exports.ENDIANNESS = exports.toBinaryString = exports.toHexString = exports.toUint8 = exports.isTypedArray = exports.isArrayBufferView = exports.padStart = exports.countBytes = exports.countBits = void 0;

var _window = _interopRequireDefault(__webpack_require__(/*! global/window */ "./node_modules/global/window.js"));

// const log2 = Math.log2 ? Math.log2 : (x) => (Math.log(x) / Math.log(2));
var repeat = function repeat(str, len) {
  var acc = '';

  while (len--) {
    acc += str;
  }

  return acc;
}; // count the number of bits it would take to represent a number
// we used to do this with log2 but BigInt does not support builtin math
// Math.ceil(log2(x));


var countBits = function countBits(x) {
  return x.toString(2).length;
}; // count the number of whole bytes it would take to represent a number


exports.countBits = countBits;

var countBytes = function countBytes(x) {
  return Math.ceil(countBits(x) / 8);
};

exports.countBytes = countBytes;

var padStart = function padStart(b, len, str) {
  if (str === void 0) {
    str = ' ';
  }

  return (repeat(str, len) + b.toString()).slice(-len);
};

exports.padStart = padStart;

var isArrayBufferView = function isArrayBufferView(obj) {
  if (ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(obj);
  }

  return obj && obj.buffer instanceof ArrayBuffer;
};

exports.isArrayBufferView = isArrayBufferView;

var isTypedArray = function isTypedArray(obj) {
  return isArrayBufferView(obj);
};

exports.isTypedArray = isTypedArray;

var toUint8 = function toUint8(bytes) {
  if (bytes instanceof Uint8Array) {
    return bytes;
  }

  if (!Array.isArray(bytes) && !isTypedArray(bytes) && !(bytes instanceof ArrayBuffer)) {
    // any non-number or NaN leads to empty uint8array
    // eslint-disable-next-line
    if (typeof bytes !== 'number' || typeof bytes === 'number' && bytes !== bytes) {
      bytes = 0;
    } else {
      bytes = [bytes];
    }
  }

  return new Uint8Array(bytes && bytes.buffer || bytes, bytes && bytes.byteOffset || 0, bytes && bytes.byteLength || 0);
};

exports.toUint8 = toUint8;

var toHexString = function toHexString(bytes) {
  bytes = toUint8(bytes);
  var str = '';

  for (var i = 0; i < bytes.length; i++) {
    str += padStart(bytes[i].toString(16), 2, '0');
  }

  return str;
};

exports.toHexString = toHexString;

var toBinaryString = function toBinaryString(bytes) {
  bytes = toUint8(bytes);
  var str = '';

  for (var i = 0; i < bytes.length; i++) {
    str += padStart(bytes[i].toString(2), 8, '0');
  }

  return str;
};

exports.toBinaryString = toBinaryString;
var BigInt = _window.default.BigInt || Number;
var BYTE_TABLE = [BigInt('0x1'), BigInt('0x100'), BigInt('0x10000'), BigInt('0x1000000'), BigInt('0x100000000'), BigInt('0x10000000000'), BigInt('0x1000000000000'), BigInt('0x100000000000000'), BigInt('0x10000000000000000')];

var ENDIANNESS = function () {
  var a = new Uint16Array([0xFFCC]);
  var b = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);

  if (b[0] === 0xFF) {
    return 'big';
  }

  if (b[0] === 0xCC) {
    return 'little';
  }

  return 'unknown';
}();

exports.ENDIANNESS = ENDIANNESS;
var IS_BIG_ENDIAN = ENDIANNESS === 'big';
exports.IS_BIG_ENDIAN = IS_BIG_ENDIAN;
var IS_LITTLE_ENDIAN = ENDIANNESS === 'little';
exports.IS_LITTLE_ENDIAN = IS_LITTLE_ENDIAN;

var bytesToNumber = function bytesToNumber(bytes, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$signed = _ref.signed,
      signed = _ref$signed === void 0 ? false : _ref$signed,
      _ref$le = _ref.le,
      le = _ref$le === void 0 ? false : _ref$le;

  bytes = toUint8(bytes);
  var fn = le ? 'reduce' : 'reduceRight';
  var obj = bytes[fn] ? bytes[fn] : Array.prototype[fn];
  var number = obj.call(bytes, function (total, byte, i) {
    var exponent = le ? i : Math.abs(i + 1 - bytes.length);
    return total + BigInt(byte) * BYTE_TABLE[exponent];
  }, BigInt(0));

  if (signed) {
    var max = BYTE_TABLE[bytes.length] / BigInt(2) - BigInt(1);
    number = BigInt(number);

    if (number > max) {
      number -= max;
      number -= max;
      number -= BigInt(2);
    }
  }

  return Number(number);
};

exports.bytesToNumber = bytesToNumber;

var numberToBytes = function numberToBytes(number, _temp2) {
  var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$le = _ref2.le,
      le = _ref2$le === void 0 ? false : _ref2$le;

  // eslint-disable-next-line
  if (typeof number !== 'bigint' && typeof number !== 'number' || typeof number === 'number' && number !== number) {
    number = 0;
  }

  number = BigInt(number);
  var byteCount = countBytes(number);
  var bytes = new Uint8Array(new ArrayBuffer(byteCount));

  for (var i = 0; i < byteCount; i++) {
    var byteIndex = le ? i : Math.abs(i + 1 - bytes.length);
    bytes[byteIndex] = Number(number / BYTE_TABLE[i] & BigInt(0xFF));

    if (number < 0) {
      bytes[byteIndex] = Math.abs(~bytes[byteIndex]);
      bytes[byteIndex] -= i === 0 ? 1 : 2;
    }
  }

  return bytes;
};

exports.numberToBytes = numberToBytes;

var bytesToString = function bytesToString(bytes) {
  if (!bytes) {
    return '';
  } // TODO: should toUint8 handle cases where we only have 8 bytes
  // but report more since this is a Uint16+ Array?


  bytes = Array.prototype.slice.call(bytes);
  var string = String.fromCharCode.apply(null, toUint8(bytes));

  try {
    return decodeURIComponent(escape(string));
  } catch (e) {// if decodeURIComponent/escape fails, we are dealing with partial
    // or full non string data. Just return the potentially garbled string.
  }

  return string;
};

exports.bytesToString = bytesToString;

var stringToBytes = function stringToBytes(string, stringIsBytes) {
  if (typeof string !== 'string' && string && typeof string.toString === 'function') {
    string = string.toString();
  }

  if (typeof string !== 'string') {
    return new Uint8Array();
  } // If the string already is bytes, we don't have to do this
  // otherwise we do this so that we split multi length characters
  // into individual bytes


  if (!stringIsBytes) {
    string = unescape(encodeURIComponent(string));
  }

  var view = new Uint8Array(string.length);

  for (var i = 0; i < string.length; i++) {
    view[i] = string.charCodeAt(i);
  }

  return view;
};

exports.stringToBytes = stringToBytes;

var concatTypedArrays = function concatTypedArrays() {
  for (var _len = arguments.length, buffers = new Array(_len), _key = 0; _key < _len; _key++) {
    buffers[_key] = arguments[_key];
  }

  buffers = buffers.filter(function (b) {
    return b && (b.byteLength || b.length) && typeof b !== 'string';
  });

  if (buffers.length <= 1) {
    // for 0 length we will return empty uint8
    // for 1 length we return the first uint8
    return toUint8(buffers[0]);
  }

  var totalLen = buffers.reduce(function (total, buf, i) {
    return total + (buf.byteLength || buf.length);
  }, 0);
  var tempBuffer = new Uint8Array(totalLen);
  var offset = 0;
  buffers.forEach(function (buf) {
    buf = toUint8(buf);
    tempBuffer.set(buf, offset);
    offset += buf.byteLength;
  });
  return tempBuffer;
};
/**
 * Check if the bytes "b" are contained within bytes "a".
 *
 * @param {Uint8Array|Array} a
 *        Bytes to check in
 *
 * @param {Uint8Array|Array} b
 *        Bytes to check for
 *
 * @param {Object} options
 *        options
 *
 * @param {Array|Uint8Array} [offset=0]
 *        offset to use when looking at bytes in a
 *
 * @param {Array|Uint8Array} [mask=[]]
 *        mask to use on bytes before comparison.
 *
 * @return {boolean}
 *         If all bytes in b are inside of a, taking into account
 *         bit masks.
 */


exports.concatTypedArrays = concatTypedArrays;

var bytesMatch = function bytesMatch(a, b, _temp3) {
  var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$offset = _ref3.offset,
      offset = _ref3$offset === void 0 ? 0 : _ref3$offset,
      _ref3$mask = _ref3.mask,
      mask = _ref3$mask === void 0 ? [] : _ref3$mask;

  a = toUint8(a);
  b = toUint8(b); // ie 11 does not support uint8 every

  var fn = b.every ? b.every : Array.prototype.every;
  return b.length && a.length - offset >= b.length && // ie 11 doesn't support every on uin8
  fn.call(b, function (bByte, i) {
    var aByte = mask[i] ? mask[i] & a[offset + i] : a[offset + i];
    return bByte === aByte;
  });
};

exports.bytesMatch = bytesMatch;

var sliceBytes = function sliceBytes(src, start, end) {
  if (Uint8Array.prototype.slice) {
    return Uint8Array.prototype.slice.call(src, start, end);
  }

  return new Uint8Array(Array.prototype.slice.call(src, start, end));
};

exports.sliceBytes = sliceBytes;

var reverseBytes = function reverseBytes(src) {
  if (src.reverse) {
    return src.reverse();
  }

  return Array.prototype.reverse.call(src);
};

exports.reverseBytes = reverseBytes;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @balkangraph/familytree.js */ "./node_modules/@balkangraph/familytree.js/familytree.js");
/* harmony import */ var _balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _videojs_vhs_utils_cjs_byte_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @videojs/vhs-utils/cjs/byte-helpers */ "./node_modules/@videojs/vhs-utils/cjs/byte-helpers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



(_balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default().EDITFORM_CLOSE_BTN) = '<svg data-edit-from-close class="bft-edit-form-close"><path style="fill:#ffffff;" d="M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z"></path></svg>';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["datas"],
  name: "tree",
  data: function data() {
    return {
      trees: [],
      nodes: [// { id: 2, pids: [3], gender: 'female', relation: "grandmother" },
      // { id: 3, pids: [2], gender: 'male', relation: "grandfather" },
      // { id: 4, pids: [5], gender: 'male', fid: 3, mid: 2, relation: "father" },
      // { id: 5, pids: [4], gender: 'female', fid: 21, mid: 22, relation: "mother" },
      // { id: 6, pids: [10, 11, 12, 13], gender: 'male', fid: 4, mid: 5, relation: "son" },
      // { id: 7, gender: 'female', fid: 4, mid: 5, relation: "daughter" },
      // { id: 8, gender: 'male', fid: 4, mid: 5, relation: "son" },
      // { id: 9, gender: 'male', fid: 4, mid: 5, relation: "son" },
      // { id: 10, pids: [6], gender: 'female', relation: "wife" },
      // { id: 11, pids: [6], gender: 'female', relation: "wife" },
      // { id: 12, pids: [6], gender: 'female', relation: "wife" },
      // { id: 13, pids: [6], gender: 'female', relation: "wife" },
      // { id: 14, gender: 'female', fid: 6, mid: 13, relation: "child" },
      // { id: 15, gender: 'male', fid: 6, mid: 13, relation: "child" },
      // { id: 16, gender: 'female', fid: 6, mid: 13, relation: "child" },
      // { id: 17, gender: 'male', fid: 6, mid: 13, relation: "child" },
      // { id: 18, gender: 'female', fid: 6, mid: 12, relation: "child" },
      // { id: 19, pids: [20], gender: 'male', name: "grand grandfather" },
      // { id: 20, pids: [19], gender: 'female', name: "grand grandmother" },
      // { id: 21, pids: [22], gender: 'male', fid: 19, mid: 20, name: "grandfather" },
      // { id: 22, pids: [21], gender: 'female', name: "grandmother" }
      {
        "id": 1,
        "name": "Md Makinul Hasan Khan",
        "gender": "male",
        "img": "http://127.0.0.1:8000/images/frontend/photo_man.png",
        "pids": [12],
        "fid": 2
      }, {
        "id": 5,
        "name": "Labeed",
        "gender": "male",
        "img": "http://127.0.0.1:8000/images/frontend/photo_man.png",
        "fid": 1,
        "mid": 12
      }, {
        "id": 23,
        "name": "Laibah",
        "gender": "female",
        "img": "http://127.0.0.1:8000/images/frontend/photo_female.png",
        "pids": [21],
        "fid": 1
      }, {
        "id": 59,
        "name": "Mother",
        "gender": "female",
        "img": "http://127.0.0.1:8000/images/frontend/photo_female.png",
        "pids": [58],
        "fid": 1,
        "mid": 12
      }, //   { "id": 1, "name": "Md Makinul Hasan Khan", "gender": "male", "img": "http://127.0.0.1:8000/images/frontend/photo_man.png", "pids": [ 12 ], "fid": 2 }, 
      {
        "id": 12,
        "name": "Umma",
        "gender": "female",
        "img": "http://127.0.0.1:8000/images/frontend/photo_female.png",
        "pids": [1]
      }, {
        "id": 25,
        "name": "Yeasmin Akter",
        "gender": "female",
        "img": "http://127.0.0.1:8000/images/frontend/photo_female.png",
        "fid": 2
      }, {
        "id": 27,
        "name": "Makinul",
        "gender": "male",
        "img": "http://127.0.0.1:8000/images/frontend/photo_man.png",
        "fid": 2
      }, {
        "id": 2,
        "name": "Asad Ullah",
        "gender": "male",
        "img": "http://127.0.0.1:8000/images/frontend/photo_man.png",
        "pids": [64],
        "fid": 17
      }, {
        "id": 17,
        "name": "Nurul Hossen",
        "gender": "male",
        "img": "http://127.0.0.1:8000/images/frontend/photo_man.png"
      } //   { "id": 12, "name": "Umma", "gender": "female", "img": "http://127.0.0.1:8000/images/frontend/photo_female.png", "pids": [ 1 ] } 
      // { id: 8, pids: [9], mid: 6, fid: 3, name: "Savin Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/1.jpg"  },
      // { id: 9, pids: [8], mid: 1, fid: 2, name: "Emma Stevens", gender: "female", img: "https://cdn.balkan.app/shared/w10/3.jpg" }
      ]
    };
  },
  methods: {
    callHandler: function callHandler(nodeId) {
      window.open("/family/member/" + nodeId);
    },
    mytree: function mytree(domEl, x) {
      this.family = new (_balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default())(domEl, {
        nodes: x,
        nodeBinding: {
          field_0: "name",
          img_0: "img",
          field_1: "title"
        },
        // mode: "dark",
        enableSearch: false,
        // enableEditForm: false,
        // nodeTreeMenu: true,
        // template: 'john',
        // nodeContextMenu  :{
        // },
        // nodeTreeMenu:{
        // },
        // menu:{
        // },
        // nodeMouseClick:FamilyTree.action.nodeMenu,
        // scaleInitial:FamilyTree.match.boundary,
        // showXScroll: FamilyTree.scroll.visible,
        // showYScroll: FamilyTree.scroll.visible,
        mouseScrool: (_balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default().action.none),
        // mouseScroolBehaviour: FamilyTree.action.none,
        mouseDragBehaviour: (_balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default().action.none),
        // scaleInitial:FamilyTree.match.width,
        // zoom:false,
        // nodeMenuUI:,
        // nodeMenu: {
        //     onClick: this.callHandler
        // },
        nodeMenu: {
          call: {
            icon: _balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default().icon.user(18, 18, "#039BE5"),
            text: "View Profile",
            onClick: this.callHandler
          }
        },
        editForm: {
          buttons: {
            user: {
              icon: _balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default().icon.user(18, 18, "#fff"),
              text: "Profile View"
            },
            deleteMember: {
              icon: _balkangraph_familytree_js__WEBPACK_IMPORTED_MODULE_0___default().icon.remove(18, 18, "#fff"),
              text: "Delete Memeber"
            },
            edit: null,
            pdf: null,
            share: null
          }
        }
      }); // this.family.on('init', function (sender) { sender.editUI.show(1, true); });

      this.family.editUI.on("button-click", function (sender, args) {
        if (args.name == "user") {
          window.open("/family/member/" + args.nodeId);
        }

        if (args.name == "deleteMember") {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(function (result) {
            if (result.isConfirmed) {
              axios({
                method: "get",
                url: "delete-member/" + args.nodeId,
                headers: {
                  "Content-Type": "multipart/form-data",
                  "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                }
              }).then(function (res) {
                if (res.status === 200) {
                  if (res.data.success) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Deleted!", res.data.msg, "success");
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(res.data.msg);
                  }

                  window.location.reload();
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Failed to delete data you can delete you patner, father and mother now.");
                  window.location.reload();
                }
              })["catch"](function (error) {
                alert("Failed to delete data you can delete you patner, father and mother now.");
              });
            }
          });
        }
      });
    },
    reArrangeData: function reArrangeData() {// console.dir(this.datas);
      // this.datas.forEach(dataInfo=>{
      //     // console.dir(dataInfo);
      // })
    }
  },
  mounted: function mounted() {
    // console.dir(this.trees);
    this.trees = JSON.parse(this.datas); // this.reArrangeData();
    // console.log(this.trees)
    // console.dir(this.trees);
    // this.trees=Object.entries(this.trees);
    // this.mytree(this.$refs.tree, this.nodes);

    var uniqueNodes = _toConsumableArray(new Map(this.trees.map(function (m) {
      return [m.id, m];
    })).values());

    this.mytree(this.$refs.tree, uniqueNodes);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bft-search[data-v-07cb9258] {\r\n  display: none !important;\n}\n.bft-edit-form-close[data-v-07cb9258] {\r\n  position: absolute;\r\n  right: 14px;\r\n  top: 0px !important;\r\n  width: 34px;\r\n  height: 34px;\r\n  cursor: pointer;\n}\n.family_tree_wrapper[data-v-07cb9258] {\r\n  border: 2px solid brown;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_style_index_0_id_07cb9258_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_style_index_0_id_07cb9258_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_style_index_0_id_07cb9258_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.4.24
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param {string} str
   * @returns {string}
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Standardize console warnings
   * @param {string | array} message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardize console errors
   * @param {string} message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param {string} message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;
  const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {string} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {string} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {string} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };

  const swalPrefix = 'swal2-';
  /**
   * @param {string[]} items
   * @returns {object}
   */

  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'no-war']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */

  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };
  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };
  /**
   * @returns {HTMLElement | null}
   */


  const getPopup = () => elementByClass(swalClasses.popup);
  /**
   * @returns {HTMLElement | null}
   */

  const getIcon = () => elementByClass(swalClasses.icon);
  /**
   * @returns {HTMLElement | null}
   */

  const getTitle = () => elementByClass(swalClasses.title);
  /**
   * @returns {HTMLElement | null}
   */

  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  /**
   * @returns {HTMLElement | null}
   */

  const getImage = () => elementByClass(swalClasses.image);
  /**
   * @returns {HTMLElement | null}
   */

  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  /**
   * @returns {HTMLElement | null}
   */

  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  /**
   * @returns {HTMLElement | null}
   */

  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  /**
   * @returns {HTMLElement | null}
   */

  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  /**
   * @returns {HTMLElement | null}
   */

  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  /**
   * @returns {HTMLElement | null}
   */

  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  /**
   * @returns {HTMLElement | null}
   */

  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  /**
   * @returns {HTMLElement | null}
   */

  const getActions = () => elementByClass(swalClasses.actions);
  /**
   * @returns {HTMLElement | null}
   */

  const getFooter = () => elementByClass(swalClasses.footer);
  /**
   * @returns {HTMLElement | null}
   */

  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  /**
   * @returns {HTMLElement | null}
   */

  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */

  const getFocusableElements = () => {
    const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex'));
      const tabindexB = parseInt(b.getAttribute('tabindex'));

      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  /**
   * @returns {boolean}
   */

  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };
  /**
   * @returns {boolean}
   */

  const isToast = () => {
    return getPopup() && hasClass(getPopup(), swalClasses.toast);
  };
  /**
   * @returns {boolean}
   */

  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */

  const setInnerHtml = (elem, html) => {
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      Array.from(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      Array.from(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */

  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */

  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */


  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */

  const getInput = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }

    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));

      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */

  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */

  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */

  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | null}
   */

  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */

  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {string} display
   */

  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  /**
   * @param {HTMLElement} elem
   */

  const hide = elem => {
    elem.style.display = 'none';
  };
  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */

  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */

  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };
  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  /**
   * @returns {boolean}
   */

  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  /**
   * @returns {boolean}
   */

  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);
  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  /**
   * @param {number} timer
   * @param {boolean} reset
   */

  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };
  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
  /**
   * @returns {boolean}
   */

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    globalState.currentInstance.resetValidationMessage();
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */

    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */

    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */

    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };
  };
  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */


  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;
  /**
   * @param {SweetAlertOptions} params
   */


  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };
  /**
   * @param {HTMLElement} targetElement
   */


  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    } // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    } // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };
  /**
   * @param {object} param
   * @param {HTMLElement} target
   */

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    } // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };
  /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */


  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax

    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render all the buttons

    renderButtons(actions, loader, params); // Loader

    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };
  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */

  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }
  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */


  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }
  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */


  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */


  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }
  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */


  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>
  /** @type {InputClass[]} */

  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]); // set attributes

      setAttributes(inputClass, params.inputAttributes); // set class

      inputContainer.className = swalClasses[inputClass];

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };
  /**
   * @param {HTMLInputElement} input
   */


  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };
  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */


  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput(getPopup(), inputClass);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };
  /**
   * @param {SweetAlertOptions} params
   */


  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };
  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */


  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };
  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */


  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;

      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }

      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };
  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */


  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };
  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */


  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof inputValue, "\""));
    }
  };
  /** @type Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input> */


  const renderInputType = {};
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };
  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };
  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };
  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */


  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };
  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */


  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };
  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */


  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };
  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */


  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);
    /**
     * @param {HTMLElement} el
     * @returns {number}
     */

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight); // https://github.com/sweetalert2/sweetalert2/issues/2291


    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    } // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    } // No content
    else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgroundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */

    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  const errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */

  const setContent = (icon, params) => {
    let oldContent = icon.innerHTML;
    let newContent;

    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }

    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };
  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */


  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };
  /**
   * @param {string} content
   * @returns {string}
   */


  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };
  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };
  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */


  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }

    return lineEl;
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170

    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Color

    if (params.color) {
      popup.style.color = params.color;
    } // Background


    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };
  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */


    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */

  const getSwalParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        result[paramName] = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalButtons = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */

    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */

    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */


    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));

    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   */


  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */

      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };
  /**
   * @param {DocumentFragment} templateContent
   */


  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };
  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */


  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },

    /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }
  /**
   * @param {SweetAlertOptions} params
   */


  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = // @ts-ignore
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups();
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */

  const addBottomPaddingForTallPopups = () => {
    const ua = navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */


  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylus(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */


  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };
  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */


  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   * @returns {HTMLElement | null}
   */

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  /**
   * @param {GlobalState} globalState
   */

  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };
  /**
   * @param {SweetAlertOptions} innerParams
   * @param {number} index
   * @param {number} increment
   */

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {function} dismissWith
   */

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406


    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams);
    } // TAB
    else if (e.key === 'Tab') {
      handleTab(e, innerParams);
    } // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key);
    } // ESC
    else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleEnter = (instance, e, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }

    if (e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */


  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    } // Cycle to the next button


    if (!e.shiftKey) {
      setFocus(innerParams, btnIndex, 1);
    } // Cycle to the prev button
    else {
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };
  /**
   * @param {string} key
   */


  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (document.activeElement instanceof HTMLElement && ![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;

    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];

      if (!buttonToFocus) {
        return;
      }

      if (buttonToFocus instanceof HTMLButtonElement && isVisible(buttonToFocus)) {
        break;
      }
    }

    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };
  /**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }
  /**
   * @param {SweetAlert2} instance
   */

  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };
  /**
   * @param {SweetAlert2} instance
   */


  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    // @ts-ignore
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };
  /**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */


  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    handleAwaitingPromise: handleAwaitingPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    update: update,
    _destroy: _destroy
  });

  /**
   * @param {SweetAlert2} instance
   */

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  /**
   * @param {SweetAlert2} instance
   */

  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {Function} dismissWith
   */

  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };
  /**
   * @param {SweetAlert2} instance
   * @param {'confirm' | 'deny'} type
   */

  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams.input) {
      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
      return;
    }

    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {string} inputValue
   * @param {'confirm' | 'deny'} type
   */


  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };
  /**
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {string} error
   */


  const rejectWith = (instance, error$$1) => {
    // @ts-ignore
    instance.rejectPromise(error$$1);
  };
  /**
   *
   * @param {SweetAlert2} instance
   * @param {any} value
   */


  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      succeedWith(instance, value);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };
  /**
   * @param {*} innerParams
   * @returns {boolean}
   */


  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  let currentInstance;

  class SweetAlert {
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this; // @ts-ignore

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      }); // @ts-ignore

      const promise = currentInstance._main(currentInstance.params);

      privateProps.promise.set(this, promise);
    }

    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));

      if (globalState.currentInstance) {
        // @ts-ignore
        globalState.currentInstance._destroy();

        if (isModal()) {
          unsetAriaHidden();
        }
      }

      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams); // clear the previous timer

      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      } // clear the restore focus timeout


      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  }

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };
  /**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */


  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };
  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */


  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */


  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };
  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */


  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }; // This anti-war message will only be shown to Russian users visiting Russian sites


  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
    if (Math.random() < 0.1) {
      const noWar = document.createElement('div');
      noWar.className = 'leave-russia-now-and-apply-your-skills-to-the-world';
      const video = getRandomElement([{
        text: "\u0412 \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0442\u043E\u043C,\n        <strong>\u0447\u0442\u043E\u0431\u044B \u044D\u0442\u0430 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u0431\u0435\u0441\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043D\u0430\u044F \u0432\u043E\u0439\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C</strong>:",
        id: '4CfDhaRkw7I'
      }, {
        text: 'Эмпатия - главное <strong>человеческое</strong> чувство. Способность сопереживать. <strong>Способность поставить себя на место другого.</strong>',
        id: 's-GLAIY4DXA'
      }]);
      setInnerHtml(noWar, "\n      <div>\n        \u0415\u0441\u043B\u0438 \u043C\u044B \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C \u0432\u043E\u0439\u043D\u0443, \u043E\u043D\u0430 \u043F\u0440\u0438\u0434\u0435\u0442 \u0432 \u0434\u043E\u043C <strong>\u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043D\u0430\u0441</strong> \u0438 \u0435\u0451 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0431\u0443\u0434\u0443\u0442 <strong>\u0443\u0436\u0430\u0441\u0430\u044E\u0449\u0438\u043C\u0438</strong>.\n      </div>\n      <div>\n        \u041F\u0443\u0442\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u0437\u0430 20 \u0441 \u043B\u0438\u0448\u043D\u0438\u043C \u043B\u0435\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0434\u043E\u043B\u0431\u0438\u043B \u043D\u0430\u043C, \u0447\u0442\u043E \u043C\u044B \u0431\u0435\u0441\u0441\u0438\u043B\u044C\u043D\u044B \u0438 \u043E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C. <strong>\u042D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A!</strong>\n      </div>\n      <div>\n        ".concat(video.text, "\n      </div>\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/").concat(video.id, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <div>\n        \u041D\u0435\u0442 \u0432\u043E\u0439\u043D\u0435!\n      </div>\n      "));
      const closeButton = document.createElement('button');
      closeButton.innerHTML = '&times;';

      closeButton.onclick = () => noWar.remove();

      noWar.appendChild(closeButton);
      window.addEventListener('load', () => {
        setTimeout(() => {
          document.body.appendChild(noWar);
        }, 1000);
      });
    }
  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function () {
      if (currentInstance) {
        return currentInstance[key](...arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.4.24';

  const Swal = SweetAlert; // @ts-ignore

  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./resources/js/components/familyTree1.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/familyTree1.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _familyTree1_vue_vue_type_template_id_07cb9258_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./familyTree1.vue?vue&type=template&id=07cb9258&scoped=true& */ "./resources/js/components/familyTree1.vue?vue&type=template&id=07cb9258&scoped=true&");
/* harmony import */ var _familyTree1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./familyTree1.vue?vue&type=script&lang=js& */ "./resources/js/components/familyTree1.vue?vue&type=script&lang=js&");
/* harmony import */ var _familyTree1_vue_vue_type_style_index_0_id_07cb9258_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css& */ "./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _familyTree1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _familyTree1_vue_vue_type_template_id_07cb9258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _familyTree1_vue_vue_type_template_id_07cb9258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "07cb9258",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/familyTree1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/familyTree1.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/familyTree1.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./familyTree1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_style_index_0_id_07cb9258_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=style&index=0&id=07cb9258&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/familyTree1.vue?vue&type=template&id=07cb9258&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/familyTree1.vue?vue&type=template&id=07cb9258&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_template_id_07cb9258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_template_id_07cb9258_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_familyTree1_vue_vue_type_template_id_07cb9258_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./familyTree1.vue?vue&type=template&id=07cb9258&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=template&id=07cb9258&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=template&id=07cb9258&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/familyTree1.vue?vue&type=template&id=07cb9258&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        ref: "retakeVideo",
        staticClass: "modal fade modal-vcenter modal_small",
        attrs: { id: "retake-video", role: "dialog" },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "row padding_gap_3" }, [
                  _c("div", { staticClass: "col-xs-6 col-sm-6 col-md-6" }, [
                    _c("div", { staticClass: "modal_confirm_btn" }, [
                      _c(
                        "a",
                        {
                          attrs: { href: "#", "data-dismiss": "modal" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.retakeVideo()
                            },
                          },
                        },
                        [_vm._v("Yes")]
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c("div", { ref: "tree", attrs: { id: "tree" } }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xs-12" }, [
        _c("div", { staticClass: "modal_tittle" }, [
          _c("h2", [
            _vm._v("Are You Sure You Want to Re-Record This Question ?"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-6 col-sm-6 col-md-6" }, [
      _c("div", { staticClass: "modal_cancel_btn" }, [
        _c(
          "a",
          {
            attrs: {
              href: "#",
              "data-dismiss": "modal",
              "aria-label": "Close",
            },
          },
          [_vm._v("Cancel")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);