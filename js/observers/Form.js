class Form {
    constructor (formData) {
        this.formData = formData;
    }
  
    getFormData = id => this.formData.find(el => el.querySelector(id));
  
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

class CheckInputs extends Form {
    checkName(formdata) {
        const name = formdata.querySelector("input").value;
        const regex = /^[A-Za-z- ]+$/;
    
        if (name === "") throw new Error("Veuillez remplir ce champ");
        else if (regex.test(name) === false) throw new Error("Veuillez saisir un nom valide");
        else if (name.length < 2) throw new Error("Veuillez saisir 2 caractères ou plus pour le champ du nom");
    }
  
    checkEmail(formdata) {
        const email = formdata.querySelector("input").value;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if (email === "") throw new Error("Veuillez remplir ce champ");
        else if (regex.test(email.trim()) === false) throw new Error("Veuillez entrer un email valide");
    }
  
    checkMessage(formdata) {
        const message = formdata.querySelector("textarea").value;
    
        if (message === "") throw new Error("Veuillez remplir ce champ");
    }
}

class CheckIsInvalid extends CheckInputs {
    firstname = id => this.checkInput(id, this.checkName);
  
    lastname = id => this.checkInput(id, this.checkName);
  
    email = id => this.checkInput(id, this.checkEmail);
  
    message = id => this.checkInput(id, this.checkMessage);
}