"use strict";(self.webpackChunklc_fe=self.webpackChunklc_fe||[]).push([[41],{1041:(K,h,a)=>{a.r(h),a.d(h,{ManagementModule:()=>Q});var p=a(9808),o=a(3075),c=a(5089),E=a(3900),f=a(4004),t=a(5e3),q=a(520);let v=(()=>{class e{constructor(u){this.httpClient=u}getEquipmentCategories(){return this.httpClient.get("equipment/categories")}getEquipmentSubCategoryById(u){return this.httpClient.get(`equipment/categories/${u}/subcategories`)}registerEquipment(u){return this.httpClient.post("equipment",u)}getPetKinds(){return this.httpClient.get("pet_kind")}getPetSizes(){return this.httpClient.get("pet_size")}uploadPhoto(u){return this.httpClient.post("equipment/photos",u)}getEquipmentStatuses(){return this.httpClient.get("equipment/statuses")}getAllEquipment(){return this.httpClient.get("equipment?limit=9999")}}return e.\u0275fac=function(u){return new(u||e)(t.LFG(q.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var Z=a(6275),y=a(6634);let C=(()=>{class e{constructor(u,n,r,s){this.api=u,this.router=n,this.validationService=r,this.blockUiService=s}getEquipmentCategories(){return this.api.getEquipmentCategories()}getEquipmentSubCategoryById(u){return this.api.getEquipmentSubCategoryById(u)}getPetKinds(){return this.api.getPetKinds()}getPetSizes(){return this.api.getPetSizes()}cancel(){this.router.navigate(["/catalog"])}registerEquipment(u){return this.api.registerEquipment(u)}uploadPhoto(u){const n=new FormData;return n.append("file",u,u.name),this.api.uploadPhoto(n)}getEquipmentStatuses(){return this.api.getEquipmentStatuses()}validateForm(u){this.validationService.validateForm(u)}manageBlockUi(u){if(u)return this.blockUiService.block();this.blockUiService.unBlock()}getAllEquipment(){return this.api.getAllEquipment()}}return e.\u0275fac=function(u){return new(u||e)(t.LFG(v),t.LFG(c.F0),t.LFG(Z.R),t.LFG(y.A))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var l=(()=>{return(e=l||(l={})).is="\u0435\u0441\u0442\u044c",e.not="\u043d\u0435\u0442",l;var e})();class b{constructor(i){this.category=i.category,this.compensationCost=i.compensationCost,this.description=i.description,this.inventoryNumber=i.inventoryNumber,this.location=i.location,this.maximumAmount=i.maximumAmount,this.maximumDays=i.maximumDays,this.name=i.name,this.petKinds=i.petKinds,this.petSize=i.petSize,this.photoID=i.photoID,this.receiptDate=this.getDate(i.receiptDate),this.status=i.status,this.supplier=i.supplier,this.technicalIssues=i.technicalIssues===l.is,this.termsOfUse=i.termsOfUse,this.title=i.title,i.subCategory&&(this.subCategory=i.subCategory),i.condition&&(this.condition=i.condition),i.nameSubstring&&(this.nameSubstring=i.nameSubstring)}getDate(i){return`${this.addZero(i.getDate())}.${this.addZero(i.getMonth()+1)}.${i.getFullYear()}`}addZero(i){return i<10?`0${i}`:`${i}`}}var m=(()=>{return(e=m||(m={})).EquipmentFormInvalid="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f.",e.InventoryNumberExistst="\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0414\u043b\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440.",m;var e})(),A=a(2114),D=a(5186),g=a(7322),I=a(4107),F=a(1505),S=a(508),N=a(7531),d=a(6856),x=a(7423);const U=["photoInput"];function T(e,i){if(1&e&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&e){const u=i.$implicit;t.Q6J("value",u.id),t.xp6(1),t.Oqu(u.name)}}function k(e,i){if(1&e&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&e){const u=i.$implicit;t.Q6J("value",u.id),t.xp6(1),t.Oqu(u.name)}}function _(e,i){if(1&e&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&e){const u=i.$implicit;t.Q6J("value",u),t.xp6(1),t.Oqu(u)}}function O(e,i){if(1&e&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&e){const u=i.$implicit;t.Q6J("value",u.id),t.xp6(1),t.hij(" ",u.name," ")}}function R(e,i){if(1&e&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&e){const u=i.$implicit;t.Q6J("value",u.id),t.xp6(1),t.Oqu(u.name)}}const P=function(e){return{"registration-form-submitted":e}};let M=(()=>{class e{constructor(u,n,r,s){this.cdr=u,this.formBuilder=n,this.controller=r,this.notificationsService=s,this.equipmentCategories$=this.getEquipmentCategories(),this.petKinds$=this.getPetKinds(),this.petSize$=this.getPetSize(),this.subcategoryOptions=[],this.technicalIssuesOptions=[l.is,l.not],this.maxInventoryNumberValue=1e50,this.maxCompensationCost=9999999999,this.inventoryNumbers=[],this.isFormSubmitted=!1,this.equipmentRegistrationForm=this.formBuilder.group({category:[null,o.kI.required],subCategory:[{value:null,disabled:!0},o.kI.min(0)],compensationCost:[null,[o.kI.required,o.kI.max(this.maxCompensationCost)]],condition:[{value:null,disabled:!0},o.kI.maxLength(1e3)],description:["",o.kI.required],inventoryNumber:[null,[o.kI.required,o.kI.max(this.maxInventoryNumberValue)]],location:[1,o.kI.required],maximumAmount:[null,[o.kI.required,o.kI.min(1)]],maximumDays:[null,[o.kI.required,o.kI.min(1)]],name:["",o.kI.required],nameSubstring:[""],petKinds:[[null],o.kI.required],petSize:[null,o.kI.required],photoID:[null,o.kI.required],receiptDate:["",o.kI.required],status:[1,o.kI.required],supplier:["",[o.kI.required,o.kI.maxLength(50)]],technicalIssues:[null,[o.kI.required]],termsOfUse:["",[o.kI.required,o.kI.maxLength(249)]],title:["",[o.kI.required,o.kI.maxLength(49)]]})}ngOnInit(){this.subCategoryControl=this.equipmentRegistrationForm.get("subCategory"),this.conditionControl=this.equipmentRegistrationForm.get("condition"),this.photoIdControl=this.equipmentRegistrationForm.get("photoID"),this.inventoryNumberControl=this.equipmentRegistrationForm.get("inventoryNumber"),this.getEquipmentInventoryNumbers()}ngOnDestroy(){this.equipmentRegistrationForm.reset()}disableKeyboardInput(u,n){if("Backspace"===u.key)return;const r=this.equipmentRegistrationForm.get(n);return!((null==r?void 0:r.errors)&&(r.errors.maxlength||r.errors.max))}setSubcategoryDisabledState(u){this.controller.getEquipmentSubCategoryById(u).subscribe(n=>{this.setControlState(!!n.length,this.subCategoryControl),this.subcategoryOptions=n})}setConditionState(u){this.setControlState(u===l.is,this.conditionControl)}onCancel(){this.controller.cancel()}onSubmit(){var u;if(this.controller.validateForm(this.equipmentRegistrationForm),!this.file||this.equipmentRegistrationForm.invalid)return void this.notificationsService.openError(m.EquipmentFormInvalid);const n=this.equipmentRegistrationForm.value.inventoryNumber;if(this.inventoryNumbers.includes(n))return null===(u=this.inventoryNumberControl)||void 0===u||u.setErrors({incorrectInventoryNumber:!0}),void this.notificationsService.openError(m.InventoryNumberExistst);this.controller.manageBlockUi(!0),this.controller.uploadPhoto(this.file).pipe((0,E.w)(r=>{const s=new b(this.equipmentRegistrationForm.value);return s.photoID=r.data.id,this.controller.registerEquipment(s)})).subscribe(()=>{this.controller.manageBlockUi(!1),this.notificationsService.openSuccess(A.R.EquipmentAdded),this.inventoryNumbers.push(n)})}choosePhoto(){var u;null===(u=this.photoInput)||void 0===u||u.nativeElement.click()}addPhoto(u){var n,r;let s=u.target;this.file=(null===(n=null==s?void 0:s.files)||void 0===n?void 0:n.length)?s.files[0]:void 0,this.file&&(null===(r=this.photoIdControl)||void 0===r||r.setValue(this.file.name))}preventDefault(u){u.preventDefault()}setControlState(u,n){u?null==n||n.enable():(null==n||n.disable(),null==n||n.setValue(null)),null==n||n.setValidators(u?o.kI.required:null)}getEquipmentCategories(){return this.controller.getEquipmentCategories().pipe((0,f.U)(u=>u.items))}getPetKinds(){return this.controller.getPetKinds()}getPetSize(){return this.controller.getPetSizes()}getEquipmentInventoryNumbers(){this.controller.getAllEquipment().pipe((0,f.U)(u=>u.items.map(n=>n.inventoryNumber))).subscribe(u=>this.inventoryNumbers=u)}}return e.\u0275fac=function(u){return new(u||e)(t.Y36(t.sBO),t.Y36(o.qu),t.Y36(C),t.Y36(D.T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["lc-equipment"]],viewQuery:function(u,n){if(1&u&&t.Gf(U,5),2&u){let r;t.iGM(r=t.CRH())&&(n.photoInput=r.first)}},features:[t._Bn([C])],decls:107,vars:19,consts:[[1,"registration-form",3,"formGroup","ngClass"],[1,"registration-form-field"],["formControlName","category","lcValidationErrors","",3,"valueChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","subCategory","lcValidationErrors",""],["appearance","fill","floatLabel","auto"],["matInput","","type","number","formControlName","compensationCost","lcValidationErrors",""],["appearance","fill"],["formControlName","technicalIssues","lcValidationErrors","",3,"valueChange"],["matInput","","formControlName","condition",3,"maxlength"],["matInput","","type","number","formControlName","inventoryNumber","lcValidationErrors","",3,"max"],["matInput","","formControlName","supplier","lcValidationErrors",""],["appearance","fill",1,"registration-form-field-input"],["matInput","","formControlName","receiptDate","lcValidationErrors","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","type","url","formControlName","termsOfUse","lcValidationErrors",""],["matInput","","formControlName","name","lcValidationErrors",""],["matInput","","formControlName","title","lcValidationErrors",""],["appearance","fill",1,"example-full-width"],["matInput","","formControlName","description","lcValidationErrors",""],["formControlName","petKinds","multiple","","lcValidationErrors",""],["formControlName","petSize","lcValidationErrors",""],["matInput","","type","number","formControlName","maximumAmount","lcValidationErrors",""],["matInput","","type","number","formControlName","maximumDays","lcValidationErrors",""],[1,"registration-form-field","photo-field"],["type","button","mat-raised-button","",1,"registration-controls-button",3,"click"],["matInput","","formControlName","photoID","type","text",3,"keydown"],[1,"hidden"],["type","file",1,"registration-form-field-input",3,"change"],["photoInput",""],[1,"registration-actions"],["mat-raised-button","","color","primary",1,"registration-controls-button",3,"click"],["mat-raised-button","","color","accent",1,"registration-controls-button",3,"click"],[3,"value"]],template:function(u,n){if(1&u&&(t.TgZ(0,"form",0)(1,"div",1)(2,"mat-form-field")(3,"mat-label"),t._uU(4,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),t.qZA(),t.TgZ(5,"mat-select",2),t.NdJ("valueChange",function(s){return n.setSubcategoryDisabledState(s)}),t.YNc(6,T,2,2,"mat-option",3),t.ALo(7,"async"),t.qZA()()(),t.TgZ(8,"div",1)(9,"mat-form-field")(10,"mat-label"),t._uU(11,"\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),t.qZA(),t.TgZ(12,"mat-select",4),t.YNc(13,k,2,2,"mat-option",3),t.qZA()()(),t.TgZ(14,"div",1)(15,"mat-form-field",5)(16,"mat-label"),t._uU(17,"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0430\u0446\u0438\u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0443\u0442\u0440\u0430\u0442\u044b/\u043f\u043e\u0440\u0447\u0438, \u0440\u0443\u0431."),t.qZA(),t._UZ(18,"input",6),t.qZA()(),t.TgZ(19,"div",1)(20,"mat-form-field",7)(21,"mat-label"),t._uU(22,"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u041e\u0441\u043e\u0441\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),t.qZA(),t.TgZ(23,"mat-select",8),t.NdJ("valueChange",function(s){return n.setConditionState(s)}),t.YNc(24,_,2,2,"mat-option",3),t.qZA()()(),t.TgZ(25,"div",1)(26,"mat-form-field",5)(27,"mat-label"),t._uU(28,"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043d\u043e\u0441\u0442\u0438"),t.qZA(),t._UZ(29,"textarea",9),t.qZA()(),t.TgZ(30,"div",1)(31,"mat-form-field",5)(32,"mat-label"),t._uU(33,"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"),t.qZA(),t._UZ(34,"input",10),t.qZA()(),t.TgZ(35,"div",1)(36,"mat-form-field",5)(37,"mat-label"),t._uU(38,"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a"),t.qZA(),t._UZ(39,"input",11),t.qZA()(),t.TgZ(40,"div",1)(41,"mat-form-field",12)(42,"mat-label"),t._uU(43,"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0432 \u0444\u043e\u043d\u0434"),t.qZA(),t._UZ(44,"input",13)(45,"mat-datepicker-toggle",14)(46,"mat-datepicker",null,15),t.qZA()(),t.TgZ(48,"div",1)(49,"mat-form-field",5)(50,"mat-label"),t._uU(51,"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),t.qZA(),t._UZ(52,"input",16),t.qZA()(),t.TgZ(53,"div",1)(54,"mat-form-field",5)(55,"mat-label"),t._uU(56,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t._UZ(57,"input",17),t.qZA()(),t.TgZ(58,"div",1)(59,"mat-form-field",5)(60,"mat-label"),t._uU(61,"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t._UZ(62,"input",18),t.qZA()(),t.TgZ(63,"div",1)(64,"mat-form-field",19)(65,"mat-label"),t._uU(66,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),t.qZA(),t._UZ(67,"textarea",20),t.qZA()(),t.TgZ(68,"div",1)(69,"mat-form-field",5)(70,"mat-label"),t._uU(71,"\u0416\u0438\u0432\u043e\u0442\u043d\u043e\u0435"),t.qZA(),t.TgZ(72,"mat-select",21),t.YNc(73,O,2,2,"mat-option",3),t.ALo(74,"async"),t.qZA()()(),t.TgZ(75,"div",1)(76,"mat-form-field",7)(77,"mat-label"),t._uU(78,"\u0420a\u0437\u043c\u0435\u0440 \u0436\u0438\u0432\u043e\u0442\u043d\u043e\u0433\u043e"),t.qZA(),t.TgZ(79,"mat-select",22),t.YNc(80,R,2,2,"mat-option",3),t.ALo(81,"async"),t.qZA()()(),t.TgZ(82,"div",1)(83,"mat-form-field")(84,"mat-label"),t._uU(85,"\u0412 \u0440\u0443\u043a\u0438, \u0434\u043e (\u0448\u0442\u0443\u043a)"),t.qZA(),t._UZ(86,"input",23),t.qZA()(),t.TgZ(87,"div",1)(88,"mat-form-field")(89,"mat-label"),t._uU(90,"\u0421\u0440\u043e\u043a, \u0434\u043e (\u0441\u0443\u0442\u043e\u043a)"),t.qZA(),t._UZ(91,"input",24),t.qZA()(),t.TgZ(92,"div",25)(93,"button",26),t.NdJ("click",function(){return n.choosePhoto()}),t._uU(94,"\u043f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u043e\u0442\u043e"),t.qZA(),t.TgZ(95,"mat-form-field")(96,"mat-label"),t._uU(97,"\u0424\u043e\u0442\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f"),t.qZA(),t.TgZ(98,"input",27),t.NdJ("keydown",function(s){return n.preventDefault(s)}),t.qZA()()(),t.TgZ(99,"div",28)(100,"input",29,30),t.NdJ("change",function(s){return n.addPhoto(s)}),t.qZA()(),t.TgZ(102,"div",31)(103,"button",32),t.NdJ("click",function(){return n.onSubmit()}),t._uU(104,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),t.qZA(),t.TgZ(105,"button",33),t.NdJ("click",function(){return n.onCancel()}),t._uU(106,"\u041e\u0442\u043c\u0435\u043d\u0430"),t.qZA()()()),2&u){const r=t.MAs(47);t.Q6J("formGroup",n.equipmentRegistrationForm)("ngClass",t.VKq(17,P,n.isFormSubmitted)),t.xp6(6),t.Q6J("ngForOf",t.lcZ(7,11,n.equipmentCategories$)),t.xp6(7),t.Q6J("ngForOf",n.subcategoryOptions),t.xp6(11),t.Q6J("ngForOf",n.technicalIssuesOptions),t.xp6(5),t.Q6J("maxlength",1e3),t.xp6(5),t.Q6J("max",n.maxInventoryNumberValue),t.xp6(10),t.Q6J("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(28),t.Q6J("ngForOf",t.lcZ(74,13,n.petKinds$)),t.xp6(7),t.Q6J("ngForOf",t.lcZ(81,15,n.petSize$))}},directives:[o._Y,o.JL,o.sg,p.mk,g.KE,g.hX,I.gD,o.JJ,o.u,F.D,p.sg,S.ey,N.Nt,o.wV,o.Fj,o.nD,o.Fd,d.hl,d.nW,g.R9,d.Mq,x.lW],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:block}.registration-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:844px;margin:auto;padding-right:25px;padding-left:25px}.registration-form-field[_ngcontent-%COMP%]{margin-top:16px}.registration-form-field[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.registration-form[_ngcontent-%COMP%]   .photo-field[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.registration-form[_ngcontent-%COMP%]   .photo-field[_ngcontent-%COMP%]   .registration-controls-button[_ngcontent-%COMP%]{width:200px;height:40px;margin-right:20px}.registration-actions[_ngcontent-%COMP%]{display:flex;padding-top:24px;padding-bottom:24px}.registration-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex-basis:calc(50% - 8px)}.registration-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{margin-right:16px}.hidden[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),e})();const J=[{path:a(138).$.EquipmentRegistration,component:M}];let V=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.Bz.forChild(J)],c.Bz]}),e})();var z=a(9868),$=a(4466);let Q=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[v],imports:[[p.ez,V,o.UX,z.q,$.m]]}),e})()}}]);