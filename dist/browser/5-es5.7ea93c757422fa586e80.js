(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{HQoU:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),a=function(){return function(){}}(),e=t("pMnS"),i=t("lzlj"),c=t("FVSy"),r=t("wFw1"),o=t("IX8d"),b=t("JNbZ"),s=t("AytR"),p=function(){function l(l,n,t){this.route=l,this.service=n,this.meta=t,this.article={}}return l.prototype.ngOnInit=function(){this.getById()},l.prototype.getById=function(){var l=this,n=this.route.snapshot.paramMap.get("id");void 0!==n&&this.service.getById(n).then(function(n){l.article=n,l.article.img=s.a.site_url+"assets/"+Math.floor(3*Math.random()).toString()+".jpeg",l.meta.updateTitle(l.article.title,l.article.body),l.meta.updateMetaFB(l.article.title,l.article.img,l.article.body)})},l}(),d=t("ZYCi"),m=u.nb({encapsulation:0,styles:[["section.article[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;max-width:400px;margin:0 auto}section.article[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:20px auto}"]],data:{}});function f(l){return u.Fb(0,[(l()(),u.pb(0,0,null,null,13,"section",[["class","article"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,12,"mat-card",[["class","card mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,i.d,i.a)),u.ob(2,49152,null,0,c.a,[[2,r.a]],null,null),(l()(),u.pb(3,0,null,0,4,"mat-card-header",[["class","mat-card-header"]],null,null,null,i.c,i.b)),u.ob(4,49152,null,0,c.c,[],null,null),(l()(),u.pb(5,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),u.ob(6,16384,null,0,c.f,[],null,null),(l()(),u.Db(7,null,[" "," "])),(l()(),u.pb(8,0,null,0,1,"img",[["alt","Photo of a Shiba Inu"],["class","mat-card-image"],["mat-card-image",""]],[[8,"src",4]],null,null,null,null)),u.ob(9,16384,null,0,c.d,[],null,null),(l()(),u.pb(10,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),u.ob(11,16384,null,0,c.b,[],null,null),(l()(),u.pb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Db(13,null,["",""]))],null,function(l,n){var t=n.component;l(n,1,0,"NoopAnimations"===u.yb(n,2)._animationMode),l(n,7,0,null==t.article?null:t.article.title),l(n,8,0,null==t.article?null:t.article.img),l(n,13,0,null==t.article?null:t.article.body)})}function w(l){return u.Fb(0,[(l()(),u.pb(0,0,null,null,1,"app-article",[],null,null,null,f,m)),u.ob(1,114688,null,0,p,[d.a,b.a,o.a],null,null)],function(l,n){l(n,1,0)},null)}var g=u.lb("app-article",p,w,{},{},[]),h=t("Ip0R"),y=t("Fzqc"),M=t("Wf4p"),v=t("ZYjt"),j=function(){return function(){}}();t.d(n,"ArticleModuleNgFactory",function(){return F});var F=u.mb(a,[],function(l){return u.vb([u.wb(512,u.j,u.ab,[[8,[e.a,g]],[3,u.j],u.x]),u.wb(4608,h.j,h.i,[u.u,[2,h.r]]),u.wb(1073742336,h.b,h.b,[]),u.wb(1073742336,y.a,y.a,[]),u.wb(1073742336,M.c,M.c,[[2,M.a],[2,v.f]]),u.wb(1073742336,c.e,c.e,[]),u.wb(1073742336,d.n,d.n,[[2,d.s],[2,d.l]]),u.wb(1073742336,j,j,[]),u.wb(1073742336,a,a,[]),u.wb(1024,d.j,function(){return[[{path:"",component:p}]]},[])])})}}]);