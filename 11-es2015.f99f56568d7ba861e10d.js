(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{AevH:function(t,o,i){"use strict";i.r(o),i.d(o,"SkillsPageModule",(function(){return a}));var l=i("ofXK"),s=i("tyNb"),e=i("fXoL"),n=i("+NYR");const c=function(t,o){return{"scroll-up":t,"scroll-down":o}},b=[{path:"",component:(()=>{class t{constructor(t,o,i){this.router=t,this.viewportScroller=o,this.navigationService=i,this.justLoaded=!0}ngOnInit(){this.lastScroll=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,this.navigationService.previousRoutePath.subscribe(t=>{"/whatido"===t?this.scrollDirection="down":"/experience"===t&&(this.scrollDirection="up")}),setTimeout(()=>this.justLoaded=!1,500)}onScroll(){if(this.justLoaded)this.viewportScroller.scrollToPosition([0,10]);else{const t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;t>this.lastScroll?this.router.navigateByUrl("/experience"):t<this.lastScroll&&this.router.navigateByUrl("/whatido"),this.lastScroll=t}}}return t.\u0275fac=function(o){return new(o||t)(e.Hb(s.b),e.Hb(l.m),e.Hb(n.a))},t.\u0275cmp=e.Bb({type:t,selectors:[["app-skills-page"]],hostBindings:function(t,o){1&t&&e.Tb("scroll",(function(){return o.onScroll()}),!1,e.dc)},decls:61,vars:4,consts:[[1,"skills",3,"ngClass"],[1,"content"],[1,"skills-content"],[1,"skills-content__section"],[1,"skills-content__section__title"],[1,"skills-content__section__list"],[1,"skills-content__section__list__item"]],template:function(t,o){1&t&&(e.Mb(0,"section",0),e.Mb(1,"div",1),e.Mb(2,"div",2),e.Mb(3,"div",3),e.Mb(4,"h3",4),e.kc(5,"programming languages"),e.Lb(),e.Mb(6,"ul",5),e.Mb(7,"li",6),e.kc(8,"Python"),e.Lb(),e.Mb(9,"li",6),e.kc(10,"Ruby"),e.Lb(),e.Mb(11,"li",6),e.kc(12," SQL/Postgres/MongoDB "),e.Lb(),e.Mb(13,"li",6),e.kc(14," Javascript/Typescript "),e.Lb(),e.Mb(15,"li",6),e.kc(16,"HTML5"),e.Lb(),e.Mb(17,"li",6),e.kc(18,"CSS3/SCSS"),e.Lb(),e.Mb(19,"li",6),e.kc(20,"C"),e.Lb(),e.Mb(21,"li",6),e.kc(22,"LaTex"),e.Lb(),e.Lb(),e.Lb(),e.Mb(23,"div",3),e.Mb(24,"h3",4),e.kc(25,"frameworks and tools"),e.Lb(),e.Mb(26,"ul",5),e.Mb(27,"li",6),e.kc(28,"Django"),e.Lb(),e.Mb(29,"li",6),e.kc(30,"Rails"),e.Lb(),e.Mb(31,"li",6),e.kc(32,"React"),e.Lb(),e.Mb(33,"li",6),e.kc(34,"Rails"),e.Lb(),e.Mb(35,"li",6),e.kc(36,"Extress/Koa"),e.Lb(),e.Mb(37,"li",6),e.kc(38,"Docker"),e.Lb(),e.Mb(39,"li",6),e.kc(40,"Git"),e.Lb(),e.Lb(),e.Lb(),e.Mb(41,"div",3),e.Mb(42,"h3",4),e.kc(43,"languages"),e.Lb(),e.Mb(44,"ul",5),e.Mb(45,"li",6),e.kc(46," Spanish (native speaker) "),e.Lb(),e.Mb(47,"li",6),e.kc(48,"English (B1)"),e.Lb(),e.Mb(49,"li",6),e.kc(50,"German (C1)"),e.Lb(),e.Lb(),e.Lb(),e.Mb(51,"div",3),e.Mb(52,"h3",4),e.kc(53,"others"),e.Lb(),e.Mb(54,"ul",5),e.Mb(55,"li",6),e.kc(56," Adobe programs (Illustrator & InDesign) "),e.Lb(),e.Mb(57,"li",6),e.kc(58," AWS "),e.Lb(),e.Mb(59,"li",6),e.kc(60," Google Cloud Platform "),e.Lb(),e.Lb(),e.Lb(),e.Lb(),e.Lb(),e.Lb()),2&t&&e.Wb("ngClass",e.Zb(1,c,"up"===o.scrollDirection,"down"===o.scrollDirection))},directives:[l.h],styles:[""]}),t})()}];let r=(()=>{class t{}return t.\u0275mod=e.Fb({type:t}),t.\u0275inj=e.Eb({factory:function(o){return new(o||t)},imports:[[s.e.forChild(b)],s.e]}),t})(),a=(()=>{class t{}return t.\u0275mod=e.Fb({type:t}),t.\u0275inj=e.Eb({factory:function(o){return new(o||t)},imports:[[l.b,r]]}),t})()}}]);