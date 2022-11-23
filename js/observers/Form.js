export default class Form {
    constructor (formData) {
        this.formData = formData;
    }
  
    getFormData(id) {
        this.formData.find(el => el.querySelector(id))
    }
  
    checkInput(id, fn) {
        const formdata = this.getFormData(id);
    
        try {
            fn(formdata);
    
            formdata.removeAttribute("data-error");
            formdata.querySelector(id).setAttribute("aria-invalid", false);
            formdata.querySelector(id).removeAttribute("aria-errormessage");
            return false;
        } catch (error) {
            formdata.setAttribute("data-error", "* " + error.message);
            formdata.querySelector(id).setAttribute("aria-invalid", true);
            formdata.querySelector(id).setAttribute("aria-errormessage", error.message);
            return true;
        }
    }
}