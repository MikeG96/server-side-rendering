(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HQoU:function(l,n,t){"use strict";t.r(n);var a=t("8Y7J");class u{}var i=t("pMnS"),e=t("lzlj"),c=t("igqZ"),r=t("omvX"),s=t("IX8d"),o=t("JNbZ"),b=t("AytR");class d{constructor(l,n,t){this.route=l,this.service=n,this.meta=t,this.article={}}ngOnInit(){this.getById()}getById(){let l=this.route.snapshot.paramMap.get("id");void 0!==l&&this.service.getById(l).then(l=>{this.article=l,this.article.img=b.a.site_url+`assets/${Math.floor(3*Math.random()).toString()}.jpeg`,this.meta.updateTitle(this.article.title,this.article.body),this.meta.updateMetaFB(this.article.title,this.article.img,this.article.body)})}}var m=t("iInd"),p=a.lb({encapsulation:0,styles:[["section.article[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;max-width:400px;margin:0 auto}section.article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:20px auto}"]],data:{}});function h(l){return a.Db(0,[(l()(),a.nb(0,0,null,null,13,"section",[["class","article"]],null,null,null,null,null)),(l()(),a.nb(1,0,null,null,12,"mat-card",[["class","card mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,e.d,e.a)),a.mb(2,49152,null,0,c.a,[[2,r.a]],null,null),(l()(),a.nb(3,0,null,0,4,"mat-card-header",[["class","mat-card-header"]],null,null,null,e.c,e.b)),a.mb(4,49152,null,0,c.c,[],null,null),(l()(),a.nb(5,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),a.mb(6,16384,null,0,c.f,[],null,null),(l()(),a.Bb(7,null,[" "," "])),(l()(),a.nb(8,0,null,0,1,"img",[["alt","Photo of a Shiba Inu"],["class","mat-card-image"],["mat-card-image",""]],[[8,"src",4]],null,null,null,null)),a.mb(9,16384,null,0,c.d,[],null,null),(l()(),a.nb(10,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.mb(11,16384,null,0,c.b,[],null,null),(l()(),a.nb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Bb(13,null,["",""]))],null,function(l,n){var t=n.component;l(n,1,0,"NoopAnimations"===a.wb(n,2)._animationMode),l(n,7,0,null==t.article?null:t.article.title),l(n,8,0,null==t.article?null:t.article.img),l(n,13,0,null==t.article?null:t.article.body)})}function g(l){return a.Db(0,[(l()(),a.nb(0,0,null,null,1,"app-article",[],null,null,null,h,p)),a.mb(1,114688,null,0,d,[m.a,o.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var f=a.jb("app-article",d,g,{},{},[]),v=t("SVse"),w=t("IP0z"),y=t("Xd0L"),M=t("cUpR");class I{}t.d(n,"ArticleModuleNgFactory",function(){return j});var j=a.kb(u,[],function(l){return a.tb([a.ub(512,a.j,a.Y,[[8,[i.a,f]],[3,a.j],a.v]),a.ub(4608,v.j,v.i,[a.s,[2,v.r]]),a.ub(1073742336,v.b,v.b,[]),a.ub(1073742336,w.a,w.a,[]),a.ub(1073742336,y.c,y.c,[[2,y.a],[2,M.f]]),a.ub(1073742336,c.e,c.e,[]),a.ub(1073742336,m.n,m.n,[[2,m.s],[2,m.l]]),a.ub(1073742336,I,I,[]),a.ub(1073742336,u,u,[]),a.ub(1024,m.j,function(){return[[{path:"",component:d}]]},[])])})}}]);