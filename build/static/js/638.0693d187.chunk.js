"use strict";(self.webpackChunkcom_jobara=self.webpackChunkcom_jobara||[]).push([[638],{7638:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(1413),i=n(3433),u=n(9439),a=n(7313),s=n(8467),c=n(2135),l=n(8418),o=n(7782),d=n(8559),p=n(9678),f=n(8625),h=n(7020),x=n(8804),m=n(5749),j=n(6417),v=(0,a.forwardRef)((function(e,t){(0,f.Z)().alert;var n=(0,p.jn)(),r=((0,x.Zl)(m.BY),t.inputID),i=function(e){var t=e.currentTarget.value;if(h.Q1.test(t)){var r={user_id:t},i={method:"post",url:l.H.api_user_check,data:r,err:n,callback:function(e){return function(e){console.log(e)}(e)}};(0,p.eO)(i)}};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"ID"}),(0,j.jsxs)("td",{children:[(0,j.jsx)("input",{type:"text",className:"input_s",autoFocus:!0,ref:r,onChange:function(e){i(e)}}),(0,j.jsx)("p",{className:"pointtxt",children:"\u203b \uc544\uc774\ub514\ub294 \uc2e0\uccad\ud655\uc778 \ubc0f \uc218\uc815\uc2dc \uc0ac\uc6a9\ub418\uba70, \ud76c\ub9dd\ud558\ub294 \uc544\uc774\ub514\ub85c \uae30\uc785\ud574\uc8fc\uc138\uc694."})]})]})})})),g=n(2094),b=(0,a.forwardRef)((function(e,t){var n=t.inputCaptcha,r=(0,a.useState)({}),i=(0,u.Z)(r,2),s=i[0],o=i[1],d=l.H.api_captcha_img;return(0,a.useEffect)((function(){o({imageSrc:d,imageHash:Date.now()})}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\uc790\ub3d9\uc785\ub825\ubc29\uc9c0"}),(0,j.jsx)("td",{children:(0,j.jsxs)("div",{className:"cap_wrap",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:"cap",children:(0,j.jsx)("img",{className:"imgClass",id:"captchaImg",src:"".concat(s.imageSrc,"?").concat(s.imageHash),alt:"",decoding:"async",style:{background:"white"}})}),(0,j.jsx)("span",{className:"cap_refresh",children:(0,j.jsxs)(c.rU,{onClick:function(e){o({imageSrc:d,imageHash:Date.now()}),e.preventDefault()},children:[(0,j.jsx)(g.Z,{}),"\uc0c8\ub85c\uace0\uce68"]})})]}),(0,j.jsx)("input",{type:"text",className:"input_s",ref:n})]})})]})})})),_=(0,a.forwardRef)((function(e,t){var n=t.inputFirstName,r=t.inputLastName;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\uc774\ub984"}),(0,j.jsxs)("td",{children:[(0,j.jsx)("input",{type:"text",className:"input_s",placeholder:"\uc131",ref:n})," ",(0,j.jsx)("input",{type:"text",className:"input_s",placeholder:"\uc774\ub984",ref:r})]})]})})})),N=(0,a.forwardRef)((function(e,t){var n=t.inputMobile1,r=t.inputMobile2,i=t.inputMobile3,u=function(e){var t=e.target.id,u=e.target.value;switch(t){case"mobile1":h.pX.test(u)||(n.current.value=u.slice(0,-1)),u.length>=3&&r.current.focus();break;case"mobile2":h.i1.test(u)||(r.current.value=u.slice(0,-1)),u.length>=4&&i.current.focus();break;case"mobile3":h.i1.test(u)||(i.current.value=u.slice(0,-1))}};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\uc5f0\ub77d\ucc98"}),(0,j.jsxs)("td",{children:[(0,j.jsx)("input",{type:"text",id:"mobile1",className:"input_m",ref:n,onChange:function(e){return u(e)}})," ","-"," ",(0,j.jsx)("input",{type:"text",id:"mobile2",className:"input_m",ref:r,onChange:function(e){return u(e)}})," ","-"," ",(0,j.jsx)("input",{type:"text",id:"mobile3",className:"input_m",ref:i,onChange:function(e){return u(e)}})]})]})})})),y=(0,a.forwardRef)((function(e,t){var n=t.inputOrg;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\ud559\uad50"}),(0,j.jsx)("td",{children:(0,j.jsx)("input",{type:"text",className:"input_l",ref:n})})]})})})),F=(0,a.forwardRef)((function(e,t){var n=t.inputDepartment;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\ud559\uacfc"}),(0,j.jsx)("td",{children:(0,j.jsx)("input",{type:"text",className:"input_l",ref:n})})]})})})),w=(0,a.forwardRef)((function(e,t){var n=t.inputBirth;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\uc0dd\ub144\uc6d4\uc77c"}),(0,j.jsx)("td",{children:(0,j.jsx)("input",{type:"date",className:"input_date",ref:n})})]})})})),k=(0,a.forwardRef)((function(e,t){var n=t.inputSpecialized;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\ud76c\ub9dd\uc9c1\uc885"}),(0,j.jsx)("td",{children:(0,j.jsx)("input",{type:"text",className:"input_l",ref:n})})]})})})),R=(0,a.forwardRef)((function(e,t){var n=(0,p.jn)(),r=(0,x.Zl)(m.BY),i=(0,a.useState)([]),s=(0,u.Z)(i,2),c=s[0],o=s[1],d=e.handleSingleCheck;(0,a.useEffect)((function(){f()}),[]);var f=function(){var e={method:"get",url:l.H.api_get_additional,data:{},err:n,callback:function(e){return function(e){var t=e.data.result_info;o(t),r(!1)}(e)}};(0,p.eO)(e)};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\ucc38\uc5ec\ud504\ub85c\uadf8\ub7a8"}),(0,j.jsx)("td",{children:c&&c.map((function(e,t){return(0,j.jsx)("div",{children:(0,j.jsxs)("label",{children:[(0,j.jsx)("input",{type:"checkbox",value:e.additional_idx,onChange:function(t){return d(t.target.checked,e.additional_idx)},disabled:!0})," ",(0,j.jsx)("b",{children:e.additional_name_ko})," (",e.additional_memo,")"]})},"programsLabel_".concat(t))}))})]})})})),C=(0,a.forwardRef)((function(e,t){var n=(0,f.Z)().alert,r=t.inputAttachmentFile;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsxs)("th",{children:["\uc774\ub825\uc11c, \uc790\uae30\uc18c\uac1c\uc11c",(0,j.jsx)("br",{}),"\uc5c5\ub85c\ub4dc"]}),(0,j.jsxs)("td",{className:"regi_file",children:[(0,j.jsx)("div",{children:"\uc5ec\ub7ec \ud30c\uc77c \uc120\ud0dd\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc5ec\ub7ec \ud30c\uc77c \uc120\ud0dd \uc2dc ctrl \ub204\ub978 \ud6c4 \uc120\ud0dd\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."}),(0,j.jsx)("input",{type:"file",ref:r,multiple:!0,onChange:function(e){return function(e){if(e.files.length>5)return(0,p.o5)({type:"alert",hook:n,message:"\uc774\ubbf8\uc9c0\ub294 5\uc7a5\uae4c\uc9c0 \uc5c5\ub85c\ub4dc \uac00\ub2a5\ud569\ub2c8\ub2e4."}),e.value="",!1}(e.target)}})]})]})})})),D=n(7076),M=(0,a.forwardRef)((function(e,t){var n=t.inputMemo;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{children:"\ud559\ubc88"}),(0,j.jsx)("td",{children:(0,j.jsx)("input",{type:"text",className:"input_l",ref:n})})]})})})),Z=n(2213);var S=function(){var e=(0,f.Z)().alert,t=(0,p.jn)(),n=(0,x.Zl)(m.BY),g=(0,x.sJ)(m.JM),S=(0,x.sJ)(m.pp),I=(0,s.s0)(),B=(0,a.useState)("1"),O=(0,u.Z)(B,2),z=(O[0],O[1],(0,a.useState)([])),H=(0,u.Z)(z,2),A=H[0],L=H[1];(0,a.useEffect)((function(){Y(),(0,p.uv)(g,S,e,(function(){return K()}),n).then((function(e){e||I(l.j.web_main_url)}))}),[]);var K=function(){n(!1),I(l.j.web_main_url)},Y=function(){n(!0)},E={inputID:(0,a.useRef)(null),inputFirstName:(0,a.useRef)(null),inputLastName:(0,a.useRef)(null),inputMobile1:(0,a.useRef)(null),inputMobile2:(0,a.useRef)(null),inputMobile3:(0,a.useRef)(null),inputCaptcha:(0,a.useRef)(null),inputOrg:(0,a.useRef)(null),inputDepartment:(0,a.useRef)(null),inputBirth:(0,a.useRef)(null),inputSpecialized:(0,a.useRef)(null),inputAttachmentFile:(0,a.useRef)(null),inputMemo:(0,a.useRef)(null)},J=function(){if(Q()){n(!0);var i,u,a=new FormData,s=D.c,c=E.inputBirth.current.value?E.inputBirth.current.value.split("-"):"";for(var o in i=(0,r.Z)((0,r.Z)({},s),{},{userId:E.inputID.current.value,userNameFirstKo:E.inputFirstName.current.value,userNameLastKo:E.inputLastName.current.value,mobile1:E.inputMobile1.current.value,mobile2:E.inputMobile2.current.value,mobile3:E.inputMobile3.current.value,securityCode:E.inputCaptcha.current.value,organizationNameKo:E.inputOrg.current.value,departmentNameKo:E.inputDepartment.current.value,birthYyyy:c[0],birthMm:c[1],birthDd:c[2],specializedNameKo:E.inputSpecialized.current.value,userMemo:E.inputMemo.current.value,additionalIdxs:A.join()}))a.append(o,i[o]);for(var d=(u=Array.from(E.inputAttachmentFile.current.files)).length,f=0;f<d;f++)a.append("attachmentFile",u[f]);(0,p.uv)(g,S,e,K,n).then((function(r){if(r){var i={method:"post_multi",url:l.H.api_auth_reg_user,data:a,err:t,callback:function(t){return function(t){t.headers.result_code===Z.B.success?(n(!1),(0,p.o5)({type:"alert",hook:e,message:"\uc0ac\uc804\ub4f1\ub85d\uc774 \uc644\ub8cc \ub418\uc5c8\uc2b5\ub2c8\ub2e4",callback:void I(l.j.web_signupchk_url)})):(n(!1),(0,p.o5)({type:"alert",hook:e,message:"\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694"}))}(t)}};(0,p.eO)(i)}else I(l.j.web_main_url)}))}},Q=function(){return E.inputID.current.value?h.Q1.test(E.inputID.current.value)?E.inputFirstName.current.value&&E.inputLastName.current.value?E.inputMobile1.current.value&&E.inputMobile2.current.value&&E.inputMobile3.current.value?E.inputOrg.current.value?E.inputDepartment.current.value?E.inputBirth.current.value?E.inputSpecialized.current.value?A.indexOf(4)>-1&&!E.inputAttachmentFile.current.value?(U("\uc774\ub825\uc11c\ub97c \ucca8\ubd80\ud574\uc8fc\uc138\uc694"),E.inputAttachmentFile.current.focus(),!1):!!E.inputCaptcha.current.value||(U("\ubcf4\uc548\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputCaptcha.current.focus(),!1):(U("\ud76c\ub9dd\uc9c1\uc885\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputSpecialized.current.focus(),!1):(U("\uc0dd\ub144\uc6d4\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputBirth.current.focus(),!1):(U("\ud559\uacfc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputDepartment.current.focus(),!1):(U("\ud559\uad50\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputOrg.current.focus(),!1):(U("\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputMobile1.current.focus(),!1):(U("\uc131\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputFirstName.current.focus(),!1):(U("\uc544\uc774\ub514\ub294 4\uae00\uc790\uc774\uc0c1 20\uae00\uc790 \uc774\ud558\uc785\ub2c8\ub2e4"),E.inputID.current.focus(),!1):(U("\uc544\uc774\ub514\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),E.inputID.current.focus(),!1)},U=function(t){(0,p.o5)({type:"alert",hook:e,message:t})};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{}),(0,j.jsx)("div",{id:"container",className:"sub_container",children:(0,j.jsxs)("div",{id:"content",children:[(0,j.jsx)("h2",{id:"subtitle",children:"\uc0ac\uc804\ub4f1\ub85d"}),(0,j.jsxs)("div",{className:"registration",children:[(0,j.jsxs)("table",{className:"regi_form",children:[(0,j.jsxs)("colgroup",{children:[(0,j.jsx)("col",{widtd:"30%"}),(0,j.jsx)("col",{widtd:"*"})]}),(0,j.jsxs)("tbody",{children:[(0,j.jsx)(v,{ref:E}),(0,j.jsx)(_,{ref:E}),(0,j.jsx)(N,{ref:E}),(0,j.jsx)(y,{ref:E}),(0,j.jsx)(F,{ref:E}),(0,j.jsx)(M,{ref:E}),(0,j.jsx)(w,{ref:E}),(0,j.jsx)(k,{ref:E}),(0,j.jsx)(R,{ref:E,handleSingleCheck:function(e,t){L(e?function(e){return[].concat((0,i.Z)(e),[t])}:A.filter((function(e){return e!==t})))}}),(0,j.jsx)(C,{ref:E}),(0,j.jsx)(b,{ref:E})]})]}),(0,j.jsx)("div",{className:"registrationNotice",children:(0,j.jsx)("p",{children:"\u203b \uc0ac\uc804\ub4f1\ub85d \uc644\ub8cc\uc2dc \uac1c\uc778\uc815\ubcf4\ud65c\uc6a9\uc5d0 \ub3d9\uc758\ud55c \uac83\uc73c\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4."})}),(0,j.jsx)("div",{className:"btnbox",children:(0,j.jsx)(c.rU,{onClick:function(e){J(),e.preventDefault()},children:"\uc0ac\uc804\ub4f1\ub85d\ud558\uae30"})})]})]})}),(0,j.jsx)(d.Z,{})]})}}}]);