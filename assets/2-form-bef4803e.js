document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.elements.email.value=t.email||"",e.elements.message.value=t.message||""),e.addEventListener("input",a=>{if(a.target.name==="email"||a.target.name==="message"){const r={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(r))}}),e.addEventListener("submit",a=>{a.preventDefault();const r={email:e.elements.email.value,message:e.elements.message.value};console.log("Form data submitted:",r),e.reset(),localStorage.removeItem("feedback-form-state")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".emailInputFild");e.addEventListener("focus",t=>{t.target.value.trim()===""&&t.target.setAttribute("placeholder","Enter your email")}),e.addEventListener("blur",t=>{t.target.value.trim()===""&&t.target.removeAttribute("placeholder")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".textInputFild");e.addEventListener("focus",t=>{t.target.value.trim()===""&&t.target.setAttribute("placeholder","Enter your text")}),e.addEventListener("blur",t=>{t.target.value.trim()===""&&t.target.removeAttribute("placeholder")})});
//# sourceMappingURL=2-form-bef4803e.js.map
