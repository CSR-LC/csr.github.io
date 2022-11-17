"use strict";(self.webpackChunklc_fe=self.webpackChunklc_fe||[]).push([[1],{5001:(k,m,n)=>{n.r(m),n.d(m,{UserProfile:()=>b});var a=n(9808),e=n(3075),f=n(5089),s=n(508),g=n(3656),u=n(5e3),A=n(9646),I=n(520);let c=(()=>{class o{constructor(t){this.httpClient=t}updateUserInfo(t){return(0,A.of)(t)}getWorkArias(){return this.httpClient.get("/api/v1/active_areas")}}return o.\u0275fac=function(t){return new(t||o)(u.LFG(I.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac}),o})(),p=(()=>{class o{constructor(t){this.api=t}cancel(t){t.reset()}fillProfile(t){this.api.updateUserInfo(t).subscribe(()=>{console.log("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430"),console.log(t)})}loadActiveAreas(){return this.api.getWorkArias()}}return o.\u0275fac=function(t){return new(t||o)(u.LFG(c))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac}),o})();var d=n(7322),C=n(7531),Z=n(4107),h=n(7423);function v(o,r){if(1&o&&(u.TgZ(0,"mat-option",20),u._uU(1),u.qZA()),2&o){const t=r.$implicit;u.Q6J("value",t.id),u.xp6(1),u.hij(" ",t.name," ")}}function F(o,r){1&o&&(u.TgZ(0,"div"),u._uU(1," \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f "),u.qZA())}const E=[{path:"",component:(()=>{class o{constructor(t){this.controller=t,this.isFormSubmitted=!1,this.activeAreas=this.loadActiveAreas(),this.userInfoForm=new e.cw({surname:new e.NI("",[e.kI.required,e.kI.maxLength(49),e.kI.pattern(/^[-\u0430-\u044f\u0410-\u042f\u0451\u0401]+$/)]),name:new e.NI("",[e.kI.required,e.kI.maxLength(49),e.kI.pattern(/^[-\u0430-\u044f\u0410-\u042f\u0451\u0401]+$/)]),patronymic:new e.NI("",[e.kI.maxLength(49),e.kI.pattern(/^[-\u0430-\u044f\u0410-\u042f\u0451\u0401]+$/)]),documentNumber:new e.NI("",[e.kI.required,e.kI.maxLength(49)]),documentIssuingInfo:new e.NI("",[e.kI.required,e.kI.maxLength(149),e.kI.pattern(/^[-\u0430-\u044f\u0410-\u042f\u0451\u0401]+$/)]),phoneNumber:new e.NI("",[e.kI.required,e.kI.maxLength(24)]),email:new e.NI("",[e.kI.required,e.kI.maxLength(49),e.kI.email]),status:new e.NI(""),organizationName:new e.NI("",[e.kI.maxLength(149)]),organizationContact:new e.NI("",[e.kI.maxLength(149)]),personalAccount:new e.NI("",[e.kI.maxLength(149)]),workDistrict:new e.NI("")})}disableKeyboardInput(t,l){if("Backspace"===t.key)return;const i=this.userInfoForm.get(l);return!((null==i?void 0:i.errors)&&(i.errors.maxlength||i.errors.max))}onCancel(){this.controller.cancel(this.userInfoForm)}onSubmit(){if(this.isFormSubmitted=!0,this.userInfoForm.valid){const t=this.userInfoForm.value;this.controller.fillProfile({surname:t.surname,name:t.name,patronymic:t.patronymic,documentNumber:t.documentNumber,documentIssuingInfo:t.documentIssuingInfo,phoneNumber:t.phoneNumber,email:t.email,status:t.status,organizationName:t.organizationName,organizationContact:t.organizationContact,personalAccount:t.personalAccount,activeArea:t.workDistrict})}}loadActiveAreas(){return this.controller.loadActiveAreas()}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(p))},o.\u0275cmp=u.Xpm({type:o,selectors:[["lc-fill-profile"]],features:[u._Bn([p,{provide:s.rD,useClass:g.D}])],decls:58,vars:5,consts:[[1,"fill-profile"],[1,"fill-profile-form",3,"formGroup"],["appearance","fill","floatLabel","auto",1,"fill-profile-form-input"],["matInput","","formControlName","surname",3,"keydown"],["matInput","","formControlName","name"],["matInput","","formControlName","patronymic"],["matInput","","formControlName","documentNumber"],["matInput","","formControlName","documentIssuingInfo"],["matInput","","formControlName","phoneNumber"],["matInput","","formControlName","email"],["formControlName","status"],["matInput","","formControlName","organizationName"],["matInput","","formControlName","organizationContact"],["matInput","","formControlName","personalAccount"],["formControlName","workDistrict","multiple",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"fill-profile-form-controls"],["type","reset","mat-raised-button","",1,"fill-profile-form-controls-button",3,"click"],["type","submit","mat-raised-button","","color","primary",1,"fill-profile-form-controls-button",3,"click"],[3,"value"]],template:function(t,l){1&t&&(u.TgZ(0,"main",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),u._uU(4,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f: "),u.qZA(),u.TgZ(5,"input",3),u.NdJ("keydown",function(U){return l.disableKeyboardInput(U,"surname")}),u.qZA()(),u.TgZ(6,"mat-form-field",2)(7,"mat-label"),u._uU(8,"\u0418\u043c\u044f: "),u.qZA(),u._UZ(9,"input",4),u.qZA(),u.TgZ(10,"mat-form-field",2)(11,"mat-label"),u._uU(12,"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e (\u0435\u0441\u043b\u0438 \u0438\u043c\u0435\u0435\u0442\u0441\u044f): "),u.qZA(),u._UZ(13,"input",5),u.qZA(),u.TgZ(14,"mat-form-field",2)(15,"mat-label"),u._uU(16,"\u0421\u0435\u0440\u0438\u044f \u0438 \u043d\u043e\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430, \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0435\u0433\u043e \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c: "),u.qZA(),u._UZ(17,"input",6),u.qZA(),u.TgZ(18,"mat-form-field",2)(19,"mat-label"),u._uU(20,"\u041a\u0435\u043c \u0438 \u043a\u043e\u0433\u0434\u0430 \u0432\u044b\u0434\u0430\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0439 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c: "),u.qZA(),u._UZ(21,"input",7),u.qZA(),u.TgZ(22,"mat-form-field",2)(23,"mat-label"),u._uU(24,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: "),u.qZA(),u._UZ(25,"input",8),u.qZA(),u.TgZ(26,"mat-form-field",2)(27,"mat-label"),u._uU(28,"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b: "),u.qZA(),u._UZ(29,"input",9),u.qZA(),u.TgZ(30,"mat-form-field",2)(31,"mat-label"),u._uU(32,"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: "),u.qZA(),u._UZ(33,"mat-select",10),u.qZA(),u.TgZ(34,"mat-form-field",2)(35,"mat-label"),u._uU(36,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u043e\u043e\u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "),u.qZA(),u._UZ(37,"input",11),u.qZA(),u.TgZ(38,"mat-form-field",2)(39,"mat-label"),u._uU(40,"\u0421\u0430\u0439\u0442/\u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0437\u043e\u043e\u0437\u0430\u0449\u0438\u0442\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438: "),u.qZA(),u._UZ(41,"input",12),u.qZA(),u.TgZ(42,"mat-form-field",2)(43,"mat-label"),u._uU(44,"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445: "),u.qZA(),u._UZ(45,"input",13),u.qZA(),u.TgZ(46,"mat-form-field",2)(47,"mat-label"),u._uU(48,"\u0420\u0430\u0439\u043e\u043d\u044b \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u043c\u0438: "),u.qZA(),u.TgZ(49,"mat-select",14),u.YNc(50,v,2,2,"mat-option",15),u.ALo(51,"async"),u.qZA()(),u.YNc(52,F,2,0,"div",16),u.TgZ(53,"div",17)(54,"button",18),u.NdJ("click",function(){return l.onCancel()}),u._uU(55,"\u041e\u0442\u043c\u0435\u043d\u0430"),u.qZA(),u.TgZ(56,"button",19),u.NdJ("click",function(){return l.onSubmit()}),u._uU(57,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),u.qZA()()()()),2&t&&(u.xp6(1),u.Q6J("formGroup",l.userInfoForm),u.xp6(49),u.Q6J("ngForOf",u.lcZ(51,3,l.activeAreas)),u.xp6(2),u.Q6J("ngIf",l.isFormSubmitted&&!l.userInfoForm.valid))},directives:[e._Y,e.JL,e.sg,d.KE,d.hX,C.Nt,e.Fj,e.JJ,e.u,Z.gD,a.sg,s.ey,a.O5,h.lW],pipes:[a.Ov],styles:["[_nghost-%COMP%]{display:block}.fill-profile[_ngcontent-%COMP%]{padding:30px 20px;display:flex;justify-content:center}.fill-profile-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:50%}.fill-profile-form-input[_ngcontent-%COMP%]{width:100%}.fill-profile-form-controls[_ngcontent-%COMP%]{padding-top:24px}.fill-profile-form-controls-button[_ngcontent-%COMP%]:not(:first-child){margin-left:16px}"],changeDetection:0}),o})()}];let N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[f.Bz.forChild(E)],f.Bz]}),o})();var D=n(6868);let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({providers:[c],imports:[[a.ez,N,e.UX,D.q]]}),o})()}}]);