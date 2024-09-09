"use strict";(self.webpackChunklc_fe=self.webpackChunklc_fe||[]).push([[826],{8826:(pt,x,o)=>{o.r(x),o.d(x,{AdminModule:()=>ut});var p=o(177),O=o(9329),S=o(1635),r=o(7883),D=o(7301),f=o(3487),g=o(8428),N=o(2578),e=o(7705),v=o(6132),b=o(8834);const $=function(){return[]};let m=class T{constructor(a){this.controller=a,this.columns=N.u,this.equipments$=this.controller.equipmentData$}ngOnInit(){this.controller.setPageHeader(),this.controller.fetchEquipments().subscribe(),this.equipmentCategories.pipe((0,D.s)(this)).subscribe(a=>this.controller.createCategoryDictionary(a)),this.equipmentStatuses.pipe((0,D.s)(this)).subscribe(a=>{this.controller.createStatusDictionary(a),this.controller.createEquipmentStatusIds(a)})}editEquipment(a){this.controller.manageEvent(a)}addNewEquipment(){this.controller.addNewEquipment()}static#t=this.\u0275fac=function(t){return new(t||T)(e.rXU(r.bW))};static#e=this.\u0275cmp=e.VBU({type:T,selectors:[["lc-equipments"]],features:[e.Jv_([r.bW])],decls:7,vars:6,consts:[[3,"columns","limit","data","action"],["mat-raised-button","","color","primary",1,"add-equipment",3,"click"],[1,"content"]],template:function(t,n){1&t&&(e.j41(0,"lc-table",0),e.bIt("action",function(c){return n.editEquipment(c)}),e.nI1(1,"async"),e.k0s(),e.j41(2,"button",1),e.bIt("click",function(){return n.addNewEquipment()}),e.j41(3,"div",2)(4,"span"),e.EFF(5,"+"),e.k0s(),e.EFF(6,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"),e.k0s()()),2&t&&e.Y8G("columns",n.columns)("limit",20)("data",e.bMT(1,3,n.equipments$)||e.lJ4(5,$))},dependencies:[v.O,b.$z,p.Jj],styles:["lc-table[_ngcontent-%COMP%]{margin-bottom:30px}.add-equipment[_ngcontent-%COMP%]{position:fixed;bottom:24px;right:24px;height:56px;border-radius:28px;padding:20px}.add-equipment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;font-size:14px;font-family:Roboto,serif;font-weight:400;text-transform:uppercase;line-height:24px;letter-spacing:1.25px;word-wrap:break-word}.add-equipment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:100;margin-right:8px}"],changeDetection:0})};(0,S.Cg)([(0,f.l6)(g.WZ.equipmentCategories)],m.prototype,"equipmentCategories",void 0),(0,S.Cg)([(0,f.l6)(g.WZ.equipmentStatuses)],m.prototype,"equipmentStatuses",void 0),m=(0,S.Cg)([D.d],m);var d=o(1473),F=o(2917),y=o(6354),h=o(5558),U=o(4379),V=o(3573);let E=(()=>{class s{constructor(t,n){this.api=t,this.store=n}getEquipmentStatuses(){return this.api.getEquipmentStatuses().pipe((0,y.T)(t=>this.fillInStatusesTranslations(t)),(0,h.n)(t=>this.store.dispatch(new g.lx(t))),(0,y.T)(t=>t.application_data?.equipmentStatuses))}fillInStatusesTranslations(t){return t.map(n=>{const i=U.R[n.name];return i&&(n.translation=i),n})}getEquipmentCategories(){return this.api.getEquipmentCategories().pipe((0,h.n)(t=>this.store.dispatch(new g.ZC(t.items))),(0,y.T)(t=>t.application_data?.equipmentCategories))}static#t=this.\u0275fac=function(n){return new(n||s)(e.KVO(V.G),e.KVO(f.il))};static#e=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac})}return s})(),M=(()=>{class s{constructor(t){this.equipmentResolverService=t}resolve(){return this.equipmentResolverService.getEquipmentStatuses()}static#t=this.\u0275fac=function(n){return new(n||s)(e.KVO(E))};static#e=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),R=(()=>{class s{constructor(t){this.equipmentResolverService=t}resolve(){return this.equipmentResolverService.getEquipmentCategories()}static#t=this.\u0275fac=function(n){return new(n||s)(e.KVO(E))};static#e=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var q=o(8843),J=o(6473);const z=function(){return[]};let B=(()=>{class s{constructor(t){this.controller=t,this.columns=q.K,this.users$=this.controller.users$}ngOnInit(){this.controller.fetchUsers().subscribe(),this.controller.setPageTitle(J.n.Users)}editUser(t){this.controller.editUser(t)}static#t=this.\u0275fac=function(n){return new(n||s)(e.rXU(r.Tz))};static#e=this.\u0275cmp=e.VBU({type:s,selectors:[["lc-users"]],features:[e.Jv_([r.Tz])],decls:2,vars:5,consts:[[3,"columns","data","action"]],template:function(n,i){1&n&&(e.j41(0,"lc-table",0),e.bIt("action",function(u){return i.editUser(u)}),e.nI1(1,"async"),e.k0s()),2&n&&e.Y8G("columns",i.columns)("data",e.bMT(1,2,i.users$)||e.lJ4(4,z))},dependencies:[v.O,p.Jj],changeDetection:0})}return s})();var I=o(9261);const K=[{header:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",columnDef:"email",style:{"minWidth.px":200}},{header:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",columnDef:"surname",style:{"minWidth.px":200}},{header:"\u0418\u043c\u044f",columnDef:"name",style:{"minWidth.px":200}},{header:"\u0420\u043e\u043b\u044c",columnDef:"roleName",style:{"width.px":150}},{header:"",columnDef:I.ay.Delete,action:I.ay.Delete,tooltip:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435",style:{"width.px":32,"padding.px":0}}],G=function(){return[]};let W=(()=>{class s{constructor(t){this.controller=t,this.columns=K,this.data$=this.controller.roles$}ngOnInit(){this.controller.setPageTitle(),this.controller.fetchRoles().subscribe()}editRole(t){this.controller.manageEvent(t)}assignRole(){this.controller.assignRole()}static#t=this.\u0275fac=function(n){return new(n||s)(e.rXU(r.mT))};static#e=this.\u0275cmp=e.VBU({type:s,selectors:[["lc-roles"]],features:[e.Jv_([r.mT])],decls:7,vars:6,consts:[[3,"columns","limit","data","action"],["mat-raised-button","","color","primary",1,"add-role",3,"click"],[1,"content"]],template:function(n,i){1&n&&(e.j41(0,"lc-table",0),e.bIt("action",function(u){return i.editRole(u)}),e.nI1(1,"async"),e.k0s(),e.j41(2,"button",1),e.bIt("click",function(){return i.assignRole()}),e.j41(3,"div",2)(4,"span"),e.EFF(5,"+"),e.k0s(),e.EFF(6,"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0440\u043e\u043b\u044c"),e.k0s()()),2&n&&e.Y8G("columns",i.columns)("limit",20)("data",e.bMT(1,3,i.data$)||e.lJ4(5,G))},dependencies:[v.O,b.$z,p.Jj],styles:[".add-role[_ngcontent-%COMP%]{position:fixed;bottom:24px;right:24px;height:56px;border-radius:28px;padding:20px}.add-role[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;font-size:14px;font-family:Roboto,serif;font-weight:400;text-transform:uppercase;line-height:24px;letter-spacing:1.25px;word-wrap:break-word}.add-role[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:24px;font-weight:100;margin-right:8px}"],changeDetection:0})}return s})();var l=function(s){return s.edit="edit",s.more="more_horiz",s}(l||{});const X=[{header:"\u0421\u0442\u0430\u0442\u0443\u0441",columnDef:"status",style:{"width.px":150}},{header:"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440",columnDef:"equipmentInventoryNumber",style:null},{header:"\u041f\u0435\u0440\u0438\u043e\u0434 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",columnDef:"rentPeriod",style:null},{header:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",columnDef:"equipmentName",style:null},{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",columnDef:"equipmentTitle",style:null},{header:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",columnDef:"userSurname",style:null},{header:"\u0418\u043c\u044f",columnDef:"userName",style:null},{header:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",columnDef:"userPhoneNumber",style:null},{header:"",columnDef:l.edit,action:l.edit,tooltip:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",style:{"width.px":32,"padding.px":0}},{header:"",columnDef:l.more,action:l.more,tooltip:"???",style:{"width.px":32,"padding.px":0}}];var Z=o(8141),Y=o(4412),P=o(5964),L=o(7673),Q=o(4387),w=o(915),k=o(4986),A=o(8736),C=o(4501),_=o(5351),tt=o(4571),et=o(3269);let j=(()=>{class s{get applicationsData$(){return this.applicationsSub.asObservable()}constructor(t,n,i,c,u){this.api=t,this.dialog=n,this.store=i,this.notificationsService=c,this.mainPageHeaderService=u,this.applicationsSub=new Y.t([])}get applicationStatuses(){return this.store.snapshot().application_data?.applicationStatuses||[]}setPageTitle(){this.mainPageHeaderService.setPageTitle("\u0417\u0430\u044f\u0432\u043a\u0438")}fetchApplications(){return this.api.getAllOrders().pipe((0,y.T)(t=>this.createRows(t.items)),(0,Z.M)(t=>this.applicationsSub.next(t)))}createRows(t){return t.map(n=>({entity:n,...n,...this.getUserInfo(n.user),...this.getEquipmentInfo(n.equipments),rentPeriod:this.getRentPeriodValue(n),status:this.getApplicationStatusName(n.last_status),actions:this.getRowActions(n)}))}getRowActions(t){const n=t.last_status.status;return{[l.more]:{tooltip:"",disabled:!1},[l.edit]:{tooltip:"",disabled:n===C.C.closed||n===C.C.rejected}}}getApplicationStatusName(t){return Q.O[t.status]||""}getRentPeriodValue(t){const n=new Date(t.rent_start),i=new Date(t.rent_end);return`${n.getDate()}.${n.getMonth()+1}-${i.getDate()}.${i.getMonth()+1}`}getUserInfo(t){return{userName:t.name||"",userSurname:t.surname||"",userPhoneNumber:t.phone_number||""}}getEquipmentInfo(t){const n=t[0]||void 0;return{equipmentName:n?.name||"",equipmentTitle:n?.title||"",equipmentInventoryNumber:n?.inventoryNumber||""}}editApplication(t){t.action===l.edit&&this.editApplicationStatus(t.row.entity)}editApplicationStatus(t){let n;this.openEditApplicationStatusModal(t).pipe((0,P.p)(Boolean),(0,h.n)(i=>(n=i,this.checkNonChangeableStatuses(i))),(0,P.p)(Boolean),(0,h.n)(()=>{const i=this.getChangeStatusBody(t,n);return this.api.editApplicationStatus(i)}),(0,h.n)(()=>this.fetchApplications())).subscribe(()=>this.notificationsService.openSuccess("\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044f\u0432\u043a\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d"))}checkNonChangeableStatuses(t){switch(t){case C.C.rejected:return this.openNotificationRejectedStatus();case C.C.closed:return this.openNotificationAboutClosedStatus();default:return(0,L.of)(!0)}}openNotificationAboutClosedStatus(){return this.dialog.open(A.ZE,{width:"472px",data:{headerText:'\u0421\u0442\u0430\u0442\u0443\u0441 "\u0417\u0430\u043a\u0440\u044b\u0442\u043e"',infoMessage:'\u0415\u0441\u043b\u0438 \u0412\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u0432 \u0441\u0442\u0430\u0442\u0443\u0441\u0435 "\u0417\u0430\u043a\u0440\u044b\u0442\u043e", \u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u044d\u0442\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e.',buttonOkText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonCancelText:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}}).afterClosed()}openNotificationRejectedStatus(){return this.dialog.open(A.ZE,{width:"472px",data:{headerText:'\u0421\u0442\u0430\u0442\u0443\u0441 "\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u043e"',infoMessage:'\u0415\u0441\u043b\u0438 \u0412\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u0432 \u0441\u0442\u0430\u0442\u0443\u0441\u0435 "\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u043e", \u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u044d\u0442\u043e\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e.',buttonOkText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonCancelText:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}}).afterClosed()}getChangeStatusBody(t,n){return{comment:"comment",created_at:new Date,order_id:t.id,status:n}}openEditApplicationStatusModal(t){return this.dialog.open(w.qd,{...k.r,data:{application:t,statuses:this.applicationStatuses,statusTranslation:this.getApplicationStatusName(t.last_status),rentPeriod:this.getRentPeriodValue(t)}}).afterClosed()}static#t=this.\u0275fac=function(n){return new(n||s)(e.KVO(r.y6),e.KVO(_.bZ),e.KVO(f.il),e.KVO(tt.I),e.KVO(et.j))};static#e=this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac})}return s})();const nt=function(){return[]},ot=[{path:"",redirectTo:d.S.Equipments,pathMatch:"full"},{path:d.S.Equipments,resolve:{equipmentsStatuses:M,equipmentCategories:R},pathMatch:"full",component:m},{path:d.S.Users,pathMatch:"full",component:B},{path:d.S.Roles,resolve:{roles:(s,a,t=(0,e.WQX)(r.Fz))=>t.getRoles()},pathMatch:"full",component:W},{path:d.S.Applications,pathMatch:"full",component:(()=>{class s{get applications$(){return this.controller.applicationsData$}constructor(t){this.controller=t,this.columns=X}ngOnInit(){this.controller.fetchApplications().subscribe(),this.controller.setPageTitle()}editApplication(t){this.controller.editApplication(t)}static#t=this.\u0275fac=function(n){return new(n||s)(e.rXU(j))};static#e=this.\u0275cmp=e.VBU({type:s,selectors:[["lc-applications"]],features:[e.Jv_([j])],decls:2,vars:6,consts:[[3,"columns","limit","data","action"]],template:function(n,i){1&n&&(e.j41(0,"lc-table",0),e.bIt("action",function(u){return i.editApplication(u)}),e.nI1(1,"async"),e.k0s()),2&n&&e.Y8G("columns",i.columns)("limit",20)("data",e.bMT(1,3,i.applications$)||e.lJ4(5,nt))},dependencies:[v.O,p.Jj],changeDetection:0})}return s})()}];let it=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=e.$C({type:s});static#n=this.\u0275inj=e.G2t({providers:[F.f],imports:[O.iI.forChild(ot),O.iI]})}return s})();var at=o(2201),rt=o(9417),lt=o(3434),ct=o(850);o(5781),o(1457),o(5129),o(6957),o(9087),o(9237),o(145),o(1529),o(8385),o(8449);let ut=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=e.$C({type:s});static#n=this.\u0275inj=e.G2t({providers:[r.y6,E,M,R,r.Fz,p.vh],imports:[p.MD,it,at.G,rt.X1,lt._,ct.jL]})}return s})()}}]);