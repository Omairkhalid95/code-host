(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[124],{340:function(e,t,a){"use strict";a.r(t);var l=a(1),o=a(6),n=a(14),m=a(7),i=a(519),r=a(1019),s=a(167),c=a(926),E=a(303),u=a(125),_=a(23),p=a(815),L=a(149),d=a(0),b=a(44),T=a(58),A=a(243),O=a(15),I=a(3),x=i.a.TextArea;t.default=function(e){var t,a=e.setIsVisible,v=e.onCancel,f=e.profileUpdateData,M=e.getEmployeeById,y=Object(L.a)(),N=r.a.useForm(),g=Object(m.a)(N,1)[0],B=Object(d.useState)(null),D=Object(m.a)(B,2),j=(D[0],D[1],s.a.Option),P=(s.a.OptGroup,c.a.confirm),h=Object(b.d)((function(e){return e.myTeams.masterData.skills})),R=function(){var e=Object(n.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.UpdateProfile(t);case 2:M(),v(),E.b.success(y(p.b.PROFILE_UPDATE_MESSAGE.text));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){g.validateFields().then((function(e){g.resetFields(),R(Object(l.a)(Object(l.a)({},e),{},{employeeId:f.employeeId})),Object(T.d)()})).catch((function(e){console.log(_.gb.value,e)}))},U=function(){g.isFieldsTouched()?P({title:_.n.value,centered:!0,onOk:function(){v()}}):v()},C={mobileNumber:null===f||void 0===f?void 0:f.mobileNumber,alternateMobileNumber:null===f||void 0===f?void 0:f.alternateMobileNumber,personalEmailId:null===f||void 0===f?void 0:f.personalEmailId,technologyKnown:null===f||void 0===f?void 0:f.technologyKnown,baseTechnology:""!==(null===f||void 0===f?void 0:f.baseTechnology)?null===f||void 0===f||null===(t=f.baseTechnology)||void 0===t?void 0:t.split(/[;,\u2014]+/):void 0};return Object(I.jsx)(c.a,{visible:a,title:y(p.b.UPDATE_PROFILE_TEXT.text),onCancel:U,onOk:S,footer:[Object(I.jsx)(u.a,{onClick:U,children:y(p.b.CANCEL_TEXT.text)},p.b.MODAL_BACK_BUTTON.value),Object(I.jsx)(u.a,{onClick:S,type:p.b.MODAL_ADD_BUTTON_TYPE.value,children:y(p.b.UPDATE_TEXT.text)},p.b.SUBMIT_TEXT.value)],children:Object(I.jsxs)(r.a,{form:g,layout:p.b.FORM_LAYOUT.vertical,name:p.b.FORM_NAME.text,initialValues:C,children:[Object(I.jsx)(r.a.Item,{name:p.b.MOBILE_NO_LABEL.value,label:y(p.b.MOBILE_NO_LABEL.text),rules:[{pattern:/^[\d+-]{0,15}$/,required:!0,message:y(p.b.MOBILE_VALIDATE_TEXT.text)}],children:Object(I.jsx)(i.a,{min:0,onKeyPress:O.a.blockInvalidChar})}),Object(I.jsx)(r.a.Item,{name:p.b.ALT_MOBILE_NUMBER_LABEL.value,label:y(p.b.ALT_MOBILE_NUMBER_LABEL.text),rules:[{pattern:/^[\d+-]{0,15}$/,message:y(p.b.MOBILE_VALIDATE_TEXT.text)}],children:Object(I.jsx)(i.a,{min:0,onKeyPress:O.a.blockInvalidChar})}),Object(I.jsx)(r.a.Item,{name:p.b.PERSONAL_EMAIL_ID_LABEL.value,label:y(p.b.PERSONAL_EMAIL_ID_LABEL.text),rules:[{required:!0,pattern:_.N,message:y(p.b.EMAIL_VALIDATE_TEXT.text)}],children:Object(I.jsx)(i.a,{})}),Object(I.jsx)(r.a.Item,{name:p.b.PRIMARY_SKILL_LABEL.value,label:y(p.b.PRIMARY_SKILL_LABEL.text),rules:[{required:!0,message:y(p.b.PRIMARY_SKILL_VALIDATE_TEXT.message)}],children:Object(I.jsx)(s.a,{mode:_.Z.MULTIPLE,placeholder:y(p.b.PRIMARY_SKILL_VALIDATE_TEXT.value),showArrow:!0,showSearch:!0,allowClear:!0,children:h.map((function(e,t){return Object(I.jsx)(j,{value:e,children:e},t)}))})}),Object(I.jsx)(r.a.Item,{name:p.b.TECHNOLOGIES_KNOWN.value,label:y(p.b.TECHNOLOGIES_KNOWN.text),rules:[{required:!0,message:y(p.b.TECHNOLOGIES_KNOWN_VALIDATE_TEXT.text)}],children:Object(I.jsx)(x,{rows:4,placeholder:y(p.b.TECHNOLOGIES_KNOWN_VALIDATE_TEXT.text)})})]})})}},815:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o}));var l={MOBILE_NO_LABEL:{text:"common.label.mobileno",value:"mobileNumber"},ALT_MOBILE_NUMBER_LABEL:{text:"component.myprofile.altmobilenumber.label",value:"alternateMobileNumber"},ALT_MOBILE_VALIDATE_TEXT:{text:"component.myprofile.altmobile.validate.message",value:"Please Enter Alternate Mobile Number"},UPDATE_TEXT:{text:"component.common.update.text",value:"update"},MOBILE_VALIDATE_TEXT:{text:"component.myprofile.validate.message",value:"Please Enter Mobile Number"},EMAIL_VALIDATE_TEXT:{text:"component.myprofile.email.validate.message",value:"Please Enter Email Address"},PRIMARY_SKILL_LABEL:{text:"component.myprofile.primaryskills.label",value:"baseTechnology"},PRIMARY_SKILL_VALIDATE_TEXT:{text:"component.myprofile.primaryskills.validate.message",value:"component.myprofile.primary.message",message:"component.myprofile.primary.skills.message"},TECHNOLOGIES_KNOWN_VALIDATE_TEXT:{text:"component.myprofile.technologiesknown.validate.message"},UPLOAD_RESUME_TEXT:{text:"component.myprofile.uploadresume.text",value:"uploadResume"},MY_PROFILE_TITLE:{text:"component.myprofile.title",value:"myprofile"},UPDATE_PROFILE_TEXT:{text:"component.myprofile.updateprofile.text",value:"updateprofile"},DOWNLOAD_RESUME_TEXT:{text:"component.myprofile.downloadresume.text",value:"downloadresume"},TECHNOLOGIES_KNOWN:{text:"component.myprofile.technologiesknown.text",value:"technologyKnown"},MODAL_BACK_BUTTON:{text:"component.addaccountform.modal.back.button",value:"back"},EMAIL_ID_LABEL:{text:"common.label.emailid",value:"personalEmailId",name:"emailId"},PERSONAL_EMAIL_ID_LABEL:{text:"common.label.personal_email_id",value:"personalEmailId",name:"emailId"},CANCEL_TEXT:{text:"component.common.cancel.text",value:"cancel"},SUBMIT_TEXT:{text:"component.common.submit.text",value:"submit"},MODAL_ADD_BUTTON_TYPE:{text:"component.addaccountform.modal.button.type",value:"primary"},FORM_LAYOUT:{vertical:"vertical",horizontal:"horizontal",inline:"inline"},FORM_NAME:{text:"form_in_modal",value:"form_in_modal"},FUNCTIONAL_ORG_LABEL:{text:"component.myprofile.functionalorg.label",value:"functional org"},PASSPORT_EXPIRY_DATE:{text:"component.myprofile.passportexpirydate.label",value:"passport expiry date"},PERSONAL_EMAIL_LABEL:{text:"component.myprofile.personalemail.label",value:"personal email"},DATE_OF_BIRTH_LABEL:{text:"component.myprofile.dateofbirth.label",value:"date of birth"},DOC_TYPE:{text:"component.myprofile.updateprofile.doctype",value:"docType"},LAST_RESUME_UPLOAD_LABEL:{text:"component.myprofile.lastresume.label",value:"lastresume"},UPLOAD_RESUME_VALIDATE_TEXT:{text:"component.myprofile.uploadresume.validate.message",value:"Please Upload Resume"},PROFILE_UPDATE_MESSAGE:{text:"component.myprofile.profileupdate.message",value:"Profile Updated Successfully "},LAST_RESUME_UPLOAD_DATE_LABEL:{text:"myprofile.lastresumeuploaddate"}},o={EMAIL_ID_LABEL:{text:"common.label.emailid",value:"personalEmailId",name:"emailId"},EMPLOYEE_ID_LABEL:{text:"common.label.employeeId",value:"employeeId"},EMPLOYEMENT_TYPE_LABEL:{text:"component.addemployeeform.organizationInfo.employementType.label",value:"Employement Type"},HRMS_ID_LABEL:{text:"common.label.hrmsId",value:"hrmsId"},LOCATION_LABEL:{text:"common.label.location",value:"empLocation"},DOMAIN_COLUMN:{text:"common.label.domain",value:"domain"},ROLE_COLUMN:{text:"component.manageprojects.manageteams.role.heading",value:"resourceRole"},EMP_STATUS:{name:"emp_status",label:"component.manageprojects.manageteams.empstatusform.label",invalid_message:"component.manageprojects.manageteams.empstatusform.message",placeholder:"component.manageprojects.manageteams.empstatusform.message"},DATE_OF_JOINING:{text:"common.label.dateofjoining",value:"dateOfJoining"},SHIFT_TIMING_LABEL:{text:"component.myprofile.shifttiming.label",value:"shift"},COUNTRY_LABEL:{text:"component.addemployeeform.organizationInfo.country.label",value:"Country"},EXPERIENCE_LABEL:{text:"common.label.experience",value:"experience",preExperienceValue:"previousExperience"},DESIGNATION_COLUMN:{text:"common.label.designation",value:"designationName",desigValue:"designation"},PERSONAL_EMAIL_ID_LABEL:{text:"common.label.personal_email_id",value:"personalEmailId",name:"emailId"}}}}]);
//# sourceMappingURL=124.3482a092.chunk.js.map