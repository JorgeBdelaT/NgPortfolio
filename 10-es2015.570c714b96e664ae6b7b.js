(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{xqqP:function(t,e,c){"use strict";c.r(e),c.d(e,"ProjectsPageModule",(function(){return k}));var n=c("ofXK"),i=c("tyNb"),o=c("fXoL"),r=c("+NYR"),s=c("YWyl");function a(t,e){if(1&t&&(o.Kb(0),o.Mb(1,"h2",3),o.kc(2),o.Lb(),o.Mb(3,"p",4),o.kc(4),o.Lb(),o.Mb(5,"a",5),o.kc(6," Visit site "),o.Ib(7,"i",6),o.Lb(),o.Jb()),2&t){const t=o.Vb();o.xb(2),o.lc(t.data.title),o.xb(2),o.mc(" ",t.data.description," "),o.xb(1),o.Wb("href",t.data.link,o.fc)}}function l(t,e){if(1&t&&(o.Kb(0),o.Mb(1,"div",7),o.Ib(2,"img",8),o.Lb(),o.Jb()),2&t){const t=o.Vb();o.xb(2),o.Wb("src",t.data.img,o.fc)}}function b(t,e){if(1&t&&(o.Mb(0,"li",12),o.kc(1),o.Lb()),2&t){const t=e.$implicit;o.xb(1),o.mc(" ",t," ")}}function d(t,e){if(1&t&&(o.Kb(0),o.Mb(1,"h3",9),o.kc(2,"What i did..."),o.Lb(),o.Mb(3,"ol",10),o.ic(4,b,2,1,"li",11),o.Lb(),o.Jb()),2&t){const t=o.Vb();o.xb(4),o.Wb("ngForOf",t.data.tasks)}}const p=function(t,e,c){return{"project-card--left":t,"project-card--right":e,"project-card--down":c}};let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Bb({type:t,selectors:[["app-project-card"]],inputs:{type:"type",data:"data"},decls:5,vars:8,consts:[[1,"project-card__wrapper","zoom-in"],[1,"project-card",3,"ngClass"],[4,"ngIf"],[1,"project-card__title"],[1,"project-card__description"],["target","blank",1,"project-card__link",3,"href"],["aria-hidden","true",1,"fa","fa-angle-double-right"],[1,"project-card__image-box"],["alt","",1,"project-card__image",3,"src"],[1,"project-card__subtitle"],[1,"project-card__list"],["class","project-card__list-item",4,"ngFor","ngForOf"],[1,"project-card__list-item"]],template:function(t,e){1&t&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.ic(2,a,8,3,"ng-container",2),o.ic(3,l,3,1,"ng-container",2),o.ic(4,d,5,1,"ng-container",2),o.Lb(),o.Lb()),2&t&&(o.xb(1),o.Wb("ngClass",o.ac(4,p,"left"===e.type,"right"===e.type,"down"===e.type)),o.xb(1),o.Wb("ngIf","left"===e.type),o.xb(1),o.Wb("ngIf","right"===e.type),o.xb(1),o.Wb("ngIf","down"===e.type))},directives:[n.h,n.j,n.i],styles:[""]}),t})();const f=["carouselItems"];function h(t,e){}const g=function(t){return{"carousel__navbar-item--active":t}};function m(t,e){if(1&t){const t=o.Nb();o.Mb(0,"li",4),o.Tb("click",(function(){o.ec(t);const c=e.index;return o.Vb().onClick(c)})),o.Mb(1,"a",5),o.kc(2),o.Lb(),o.Lb()}if(2&t){const t=e.index,c=o.Vb();o.xb(1),o.Wb("ngClass",o.Yb(2,g,t===c.currentIndex)),o.xb(1),o.lc(t+1)}}let v=(()=>{class t{constructor(t){this.resolver=t,this.currentIndex=0,this.componentRefArr=[],this.factory=this.resolver.resolveComponentFactory(u),this.onClick=t=>{this.currentIndex=t,this.container.clear(),this.createCards()}}ngOnInit(){this.createCards()}createCards(){this.componentRefArr=[],["left","right","down"].forEach(t=>{const e=this.container.createComponent(this.factory);this.componentRefArr.push(e),e.instance.data=this.items[this.currentIndex],e.instance.type=t})}}return t.\u0275fac=function(e){return new(e||t)(o.Hb(o.j))},t.\u0275cmp=o.Bb({type:t,selectors:[["app-carousel"]],viewQuery:function(t,e){var c;1&t&&o.hc(f,!0,o.O),2&t&&o.cc(c=o.Ub())&&(e.container=c.first)},inputs:{items:"items"},decls:5,vars:1,consts:[[1,"carousel"],["carouselItems",""],[1,"carousel__navbar"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"carousel__navbar-item",3,"ngClass"]],template:function(t,e){1&t&&(o.Mb(0,"div",0),o.ic(1,h,0,0,"ng-template",null,1,o.jc),o.Mb(3,"ul",2),o.ic(4,m,3,4,"li",3),o.Lb(),o.Lb()),2&t&&(o.xb(4),o.Wb("ngForOf",e.items))},directives:[n.i,n.h],styles:[""]}),t})();var y=c("qQYQ");function j(t,e){if(1&t&&(o.Mb(0,"div",3),o.Ib(1,"app-carousel",4),o.Lb()),2&t){const t=o.Vb();o.xb(1),o.Wb("items",t.data)}}function w(t,e){1&t&&o.Ib(0,"app-loading")}const x=function(t,e){return{"scroll-up":t,"scroll-down":e}},_=[{path:"",component:(()=>{class t{constructor(t,e,c,n){this.router=t,this.viewportScroller=e,this.navigationService=c,this.firestoreService=n,this.loading=!0,this.data=[],this.justLoaded=!0}ngOnInit(){this.firestoreService.getResources("projects").subscribe(t=>{t.forEach(t=>{this.data.push(Object.assign({id:t.payload.doc.id},t.payload.doc.data())),this.loading=!1})}),this.lastScroll=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,this.navigationService.previousRoutePath.subscribe(t=>{"/experience"===t?this.scrollDirection="down":"/contact"===t&&(this.scrollDirection="up")}),setTimeout(()=>this.justLoaded=!1,500)}onScroll(){if(this.justLoaded)this.viewportScroller.scrollToPosition([0,10]);else{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;t>this.lastScroll?this.router.navigateByUrl("/contact"):t<this.lastScroll&&this.router.navigateByUrl("/experience"),this.lastScroll=t}}}return t.\u0275fac=function(e){return new(e||t)(o.Hb(i.b),o.Hb(n.m),o.Hb(r.a),o.Hb(s.a))},t.\u0275cmp=o.Bb({type:t,selectors:[["app-projects-page"]],hostBindings:function(t,e){1&t&&o.Tb("scroll",(function(){return e.onScroll()}),!1,o.dc)},decls:3,vars:6,consts:[[1,"projects",3,"ngClass"],["class","content",4,"ngIf"],[4,"ngIf"],[1,"content"],[3,"items"]],template:function(t,e){1&t&&(o.Mb(0,"section",0),o.ic(1,j,2,1,"div",1),o.ic(2,w,1,0,"app-loading",2),o.Lb()),2&t&&(o.Wb("ngClass",o.Zb(3,x,"up"===e.scrollDirection,"down"===e.scrollDirection)),o.xb(1),o.Wb("ngIf",!e.loading),o.xb(1),o.Wb("ngIf",e.loading))},directives:[n.h,n.j,v,y.a],styles:[""]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(_)],i.e]}),t})();var L=c("j1ZV");let k=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},imports:[[n.b,I,L.a]]}),t})()}}]);