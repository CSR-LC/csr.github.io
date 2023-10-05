"use strict";(self.webpackChunklc_fe=self.webpackChunklc_fe||[]).push([[763],{6763:(J,B,i)=>{i.r(B),i.d(B,{AuthModule:()=>I});var P=i(6814),l=i(9316),u=i(5879),f=i(4104),h=i(7582),E=i(7245),o=i(6223),c=i(388),D=i(4664),F=i(4716),A=i(9118),v=i(2805),b=i(2010),Z=i(5659),y=i(2296),x=i(2032),m=i(4170),T=i(2599);let p=class d{constructor(n,e,t,s,a){this.controller=n,this.router=e,this.formBuilder=t,this.validationService=s,this.blockUiService=a,this.loginForm=this.formBuilder.group({login:["",[o.kI.required]],password:["",[o.kI.required]]}),this.formName="login_form",this.rememberMe=this.controller.rememberMe}onLogin(){if(this.validationService.emitSubmit(this.formName),!this.loginForm.valid)return;this.blockUiService.block();const{login:n,password:e}=this.loginForm.value;this.controller.login({login:n,password:e}).pipe((0,D.w)(()=>this.controller.getCurrentUser()),(0,D.w)(s=>this.controller.setUser(s)),(0,F.x)(()=>this.blockUiService.unBlock()),(0,c.t)(this)).subscribe(s=>{s&&this.router.navigate(["/"])})}onOpenResetPassword(n){n.stopPropagation(),n.preventDefault(),this.controller.openResetPasswordModal(this.loginForm.value.login)}onChangeRememberMe(n){this.controller.setRememberMe(n)}static#u=this.\u0275fac=function(e){return new(e||d)(u.Y36(E.Q),u.Y36(l.F0),u.Y36(o.QS),u.Y36(A.R),u.Y36(v.A))};static#t=this.\u0275cmp=u.Xpm({type:d,selectors:[["lc-login"]],features:[u._Bn([E.Q])],decls:17,vars:4,consts:[[1,"login"],[1,"login-form",3,"formGroup"],["floatLabel","auto"],["matInput","","maxlength","49","formControlName","login",3,"lcValidationErrors"],["type","password","maxlength","49","matInput","","formControlName","password","lcHideText","",1,"input-password",3,"lcValidationErrors"],[1,"reset",3,"click"],["color","primary",3,"checked","change"],[1,"login-controls"],["type","submit","mat-raised-button","","color","primary",1,"sign-up-controls-button",3,"click"]],template:function(e,t){1&e&&(u.TgZ(0,"main",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),u._uU(4,"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430 "),u.qZA(),u._UZ(5,"input",3),u.qZA(),u.TgZ(6,"mat-form-field",2)(7,"mat-label"),u._uU(8,"\u041f\u0430\u0440\u043e\u043b\u044c"),u.qZA(),u._UZ(9,"input",4),u.TgZ(10,"button",5),u.NdJ("click",function(a){return t.onOpenResetPassword(a)}),u._uU(11,"\u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),u.qZA()(),u.TgZ(12,"mat-slide-toggle",6),u.NdJ("change",function(a){return t.onChangeRememberMe(a.checked)}),u._uU(13," \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f "),u.qZA(),u.TgZ(14,"div",7)(15,"button",8),u.NdJ("click",function(){return t.onLogin()}),u._uU(16,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),u.qZA()()()()),2&e&&(u.xp6(1),u.Q6J("formGroup",t.loginForm),u.xp6(4),u.Q6J("lcValidationErrors",t.formName),u.xp6(4),u.Q6J("lcValidationErrors",t.formName),u.xp6(3),u.Q6J("checked",t.rememberMe))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.nD,o.sg,o.u,b.W,Z.D,y.lW,x.Nt,m.KE,m.hX,T.Rr],styles:["[_nghost-%COMP%]{display:block}.login[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px 20px;width:350px;margin:auto}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;width:100%}.login-controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.login-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:55px;border-radius:10px}.login-controls-button[_ngcontent-%COMP%]:not(:first-child){margin-left:16px}.input-password[_ngcontent-%COMP%]{position:relative}.reset[_ngcontent-%COMP%]{cursor:pointer;font-weight:400;color:#87afbc;position:absolute;top:19px;right:30px;background-color:inherit;border:0;text-decoration:underline}mat-slide-toggle[_ngcontent-%COMP%]{margin:20px 0;color:#87afbc}"],changeDetection:0})};p=(0,h.gn)([c.c],p);var M=i(3680),w=i(2877),U=function(r){return r.person="person",r.organisation="organisation",r}(U||{}),k=i(4614);let g=class C{constructor(n,e,t,s,a){this.controller=n,this.formBuilder=e,this.router=t,this.validationService=s,this.blockUiService=a,this.userRegistrationForm=this.formBuilder.group({email:["",[o.kI.maxLength(49),o.kI.email,o.kI.required]],password:["",[o.kI.required,o.kI.maxLength(49),o.kI.minLength(6)]],confirmPassword:[""]}),this.formName="user_registration_form",this.offerPath=`/${k.$.PublicOffer}`}get formValue(){return this.userRegistrationForm.value}ngOnInit(){this.setConfirmPasswordValidation()}disableKeyboardInput(n,e){if("Backspace"===n.key)return;const t=this.userRegistrationForm.get(e);return!(t?.errors&&(t.errors.maxlength||t.errors.max))}onSubmit(){if(this.validationService.emitSubmit(this.formName),!this.userRegistrationForm.valid||this.formValue.password!==this.formValue.confirmPassword)return;this.blockUiService.block();const n=this.getNewUserInfo();this.controller.signUp(n).pipe((0,D.w)(()=>this.controller.login({login:this.formValue.email,password:this.formValue.password})),(0,F.x)(()=>this.blockUiService.unBlock()),(0,c.t)(this)).subscribe(()=>this.router.navigate(["/"]))}getNewUserInfo(){const n=this.formValue;return{login:n.email,email:n.email,password:n.password,name:n.email,type:U.person}}setConfirmPasswordValidation(){const n=this.userRegistrationForm.controls.confirmPassword,e=this.userRegistrationForm.controls.password;n?.setValidators([o.kI.required,o.kI.maxLength(49),o.kI.minLength(6),this.validationService.compare({message:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"},e)])}static#u=this.\u0275fac=function(e){return new(e||C)(u.Y36(E.Q),u.Y36(o.QS),u.Y36(l.F0),u.Y36(A.R),u.Y36(v.A))};static#t=this.\u0275cmp=u.Xpm({type:C,selectors:[["lc-sign-up"]],features:[u._Bn([E.Q,{provide:M.rD,useClass:w.D}])],decls:20,vars:5,consts:[[1,"sign-up"],[1,"sign-up-form",3,"formGroup"],["floatLabel","auto"],["matInput","","formControlName","email","maxlength","49",3,"lcValidationErrors","keydown"],["type","password","matInput","","formControlName","password","maxlength","49","lcHideText","",3,"lcValidationErrors","keydown"],["type","password","matInput","","formControlName","confirmPassword","maxlength","49","lcHideText","",3,"lcValidationErrors","keydown"],[1,"offer"],["target","_blank",3,"routerLink"],["type","submit","mat-raised-button","","color","primary",1,"sign-up-controls-button",3,"click"]],template:function(e,t){1&e&&(u.TgZ(0,"main",0)(1,"form",1)(2,"mat-form-field",2)(3,"mat-label"),u._uU(4,"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430"),u.qZA(),u.TgZ(5,"input",3),u.NdJ("keydown",function(a){return t.disableKeyboardInput(a,"email")}),u.qZA()(),u.TgZ(6,"mat-form-field",2)(7,"mat-label"),u._uU(8,"\u041f\u0430\u0440\u043e\u043b\u044c"),u.qZA(),u.TgZ(9,"input",4),u.NdJ("keydown",function(a){return t.disableKeyboardInput(a,"password")}),u.qZA()(),u.TgZ(10,"mat-form-field",2)(11,"mat-label"),u._uU(12,"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),u.qZA(),u.TgZ(13,"input",5),u.NdJ("keydown",function(a){return t.disableKeyboardInput(a,"password")}),u.qZA()(),u.TgZ(14,"div",6),u._uU(15," \u041d\u0430\u0436\u0438\u043c\u0430\u044f \xab\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c\xbb \u0432\u044b \u0434\u0430\u0435\u0442\u0435 "),u.TgZ(16,"a",7),u._uU(17,"\u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),u.qZA()(),u.TgZ(18,"button",8),u.NdJ("click",function(){return t.onSubmit()}),u._uU(19,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),u.qZA()()()),2&e&&(u.xp6(1),u.Q6J("formGroup",t.userRegistrationForm),u.xp6(4),u.Q6J("lcValidationErrors",t.formName),u.xp6(4),u.Q6J("lcValidationErrors",t.formName),u.xp6(4),u.Q6J("lcValidationErrors",t.formName),u.xp6(3),u.s9C("routerLink",t.offerPath))},dependencies:[l.rH,o._Y,o.Fj,o.JJ,o.JL,o.nD,o.sg,o.u,b.W,Z.D,y.lW,x.Nt,m.KE,m.hX],styles:["[_nghost-%COMP%]{display:block}.sign-up[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px 20px}.sign-up-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;width:350px}.sign-up[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:55px;border-radius:10px}.offer[_ngcontent-%COMP%]{color:#87afbc;align-items:center;margin:20px 0}.offer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer;color:#87afbc}"],changeDetection:0})};g=(0,h.gn)([c.c],g);const O=[{path:"",pathMatch:"full",component:(()=>{class r{static#u=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275cmp=u.Xpm({type:r,selectors:[["lc-auth"]],decls:7,vars:0,consts:[[1,"logo"],["src","assets/img/logo.svg","alt","\u041b\u043e\u0433\u043e\u0442\u0438\u043f"],["color","primary","mat-align-tabs","center"],["label","\u0412\u0445\u043e\u0434"],["label","\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"]],template:function(t,s){1&t&&(u.TgZ(0,"div",0),u._UZ(1,"img",1),u.qZA(),u.TgZ(2,"mat-tab-group",2)(3,"mat-tab",3),u._UZ(4,"lc-login"),u.qZA(),u.TgZ(5,"mat-tab",4),u._UZ(6,"lc-sign-up"),u.qZA()())},dependencies:[f.uX,f.SP,p,g],styles:[".logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:80px 0 50px}mat-tab-group[_ngcontent-%COMP%]{width:350px;margin:auto}"],changeDetection:0})}return r})()},{path:"public-offer",component:(()=>{class r{static#u=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275cmp=u.Xpm({type:r,selectors:[["lc-public-offer"]],decls:23,vars:0,template:function(t,s){1&t&&(u.TgZ(0,"h1"),u._uU(1,"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),u.qZA(),u.TgZ(2,"p"),u._uU(3," \u0412 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u0441\u0442. 9 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u0430 \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043e\u0442 27 \u0438\u044e\u043b\u044f 2006 \u0433. \u2116152-\u0424\u0417 \xab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\xbb, "),u.TgZ(4,"b"),u._uU(5,"\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0434\u0430\u044e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u0438\u0445 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e, \u0441\u0432\u043e\u0435\u0439 \u0432\u043e\u043b\u0435\u0439 \u0438 \u0432 \u0441\u0432\u043e\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0435"),u.qZA(),u._uU(6," \u0411\u043b\u0430\u0433\u043e\u0442\u0432\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u0444\u043e\u043d\u0434\u0443 \u043f\u043e\u043c\u043e\u0449\u0438 \u0431\u0435\u0437\u0434\u043e\u043c\u043d\u044b\u0445 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0445 \xab\u041b\u0451\u043d\u044c\u043a\u0438\u043d \u043a\u043e\u0442\xbb (\u0434\u0430\u043b\u0435\u0435 \u2013 \u0424\u043e\u043d\u0434), \u0430\u0434\u0440\u0435\u0441 \u043c\u0435\u0441\u0442\u0430 \u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f: 191002, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0421\u0432\u0435\u0447\u043d\u043e\u0439 \u043f\u0435\u0440., \u0434\u043e\u043c 3, \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 20. \u0441 \u0446\u0435\u043b\u044c\u044e \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441\u043e \u043c\u043d\u043e\u0439 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0431\u0435\u0437\u0432\u043e\u0437\u043c\u0435\u0437\u0434\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u043c.\n"),u.qZA(),u.TgZ(7,"p"),u._uU(8," \u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u0432 \u0441\u0435\u0431\u044f \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043c\u043d\u043e\u044e \u043f\u0440\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430: \u043c\u043e\u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f, \u0438\u043c\u044f, \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e, \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 (\u043d\u043e\u043c\u0435\u0440, \u0441\u0435\u0440\u0438\u044f, \u0434\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438, \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0440\u0433\u0430\u043d\u0430, \u0432\u044b\u0434\u0430\u0432\u0448\u0435\u0433\u043e \u043f\u0430\u0441\u043f\u043e\u0440\u0442), \u0430\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u0430\u0434\u0440\u0435\u0441 \u043c\u0435\u0441\u0442\u0430 \u0436\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430, \u043b\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d, \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b, \u0438\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0430\u044f\u0441\u044f \u043a \u043c\u043e\u0435\u0439 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0430\u044f \u043c\u043d\u043e\u0439 \u043f\u0440\u0438 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430.\n"),u.qZA(),u.TgZ(9,"p"),u._uU(10," \u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e \u0424\u043e\u043d\u0434\u0443 \u043f\u0440\u0430\u0432\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438) \u0441 \u043c\u043e\u0438\u043c\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0441\u0431\u043e\u0440, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044e, \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0435, \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435, \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435, \u043e\u0431\u0435\u0437\u043b\u0438\u0447\u0438\u0432\u0430\u043d\u0438\u0435, \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435, \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435.\n"),u.qZA(),u.TgZ(11,"p"),u._uU(12," \u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043c\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043d\u044b\u043c \u043b\u0438\u0446\u0430\u043c \u0438\u043b\u0438 \u0438\u043d\u043e\u0435 \u0438\u0445 \u0440\u0430\u0437\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u043c\u043e\u0435\u0433\u043e \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f.\n"),u.qZA(),u.TgZ(13,"p"),u._uU(14," \u042f \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e \u0437\u0430 \u0441\u043e\u0431\u043e\u0439 \u043f\u0440\u0430\u0432\u043e \u043e\u0442\u043e\u0437\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043c\u043d\u043e\u0439 \u0432 \u0430\u0434\u0440\u0435\u0441 \u0424\u043e\u043d\u0434\u0430 \u043f\u043e \u043f\u043e\u0447\u0442\u0435 \u0437\u0430\u043a\u0430\u0437\u043d\u044b\u043c \u043f\u0438\u0441\u044c\u043c\u043e\u043c \u0441 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u043e \u0432\u0440\u0443\u0447\u0435\u043d\u0438\u0438 \u043b\u0438\u0431\u043e \u0432\u0440\u0443\u0447\u0435\u043d \u043b\u0438\u0447\u043d\u043e \u043f\u043e\u0434 \u0440\u0430\u0441\u043f\u0438\u0441\u043a\u0443 \u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0443\u043f\u043e\u043b\u043d\u043e\u043c\u043e\u0447\u0435\u043d\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044e \u0424\u043e\u043d\u0434\u0430.\n"),u.qZA(),u.TgZ(15,"p"),u._uU(16," \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0435\u0433\u043e \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0442\u0437\u044b\u0432\u0435 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0424\u043e\u043d\u0434 \u043e\u0431\u044f\u0437\u0430\u043d \u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0438\u0445 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043e \u0444\u0430\u043c\u0438\u043b\u0438\u0438, \u0438\u043c\u0435\u043d\u0438, \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u0435.\n"),u.qZA(),u.TgZ(17,"p"),u._uU(18," \u042f \u043e\u0441\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0442\u0437\u044b\u0432\u0430 \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0424\u043e\u043d\u0434 \u0432\u043f\u0440\u0430\u0432\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0435\u0437 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u044f \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0447\u0430\u0441\u0442\u044c\u044e \u0432\u0442\u043e\u0440\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0438 9 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u0430 \u043e\u0442 27 \u0438\u044e\u043b\u044f 2006 \u0433\u043e\u0434\u0430 \u2116152-\u0424\u0417 \xab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\xbb.\n"),u.qZA(),u.TgZ(19,"p"),u._uU(20," \u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u0434\u0430\u043d\u043e \u0431\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u043e.\n"),u.qZA(),u.TgZ(21,"p"),u._uU(22," \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043b\u0438\u043a\u0432\u0438\u0434\u0430\u0446\u0438\u0438 \u0424\u043e\u043d\u0434\u0430 \u0424\u043e\u043d\u0434 \u043e\u0431\u044f\u0437\u0430\u043d \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0438\u0442\u044c \u0432\u0441\u0435 \u0438\u043c\u0435\u044e\u0449\u0438\u0435\u0441\u044f \u0443 \u0424\u043e\u043d\u0434\u0430 \u043c\u043e\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435.\n"),u.qZA())},styles:["[_nghost-%COMP%]{max-width:900px;margin:0 auto;padding:20px;display:block;font-size:18px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{color:#000}"],changeDetection:0})}return r})()}];let S=(()=>{class r{static#u=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=u.oAB({type:r});static#o=this.\u0275inj=u.cJS({imports:[l.Bz.forChild(O),l.Bz]})}return r})();var N=i(325);let I=(()=>{class r{static#u=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=u.oAB({type:r});static#o=this.\u0275inj=u.cJS({providers:[E.z],imports:[P.ez,S,o.UX,N.m,o.u5]})}return r})()}}]);