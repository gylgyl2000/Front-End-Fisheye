import Modal from "./Modal.js";
import CheckIsInvalid from "./CheckIsInvalid.js";

export default class ContactForm extends Modal {
    constructor(modal) {
        super(modal);
        this.form = document.querySelector("#contact-form");
    }
  
    #isInvalid() {
        const formData = [ ...document.querySelectorAll(".formData") ];
        const check = new CheckIsInvalid(formData);
    
        check.firstname("#firstnameInput");
        check.lastname("#lastnameInput");
        check.email("#emailInput");
        check.message("#messageInput");
        return (check.firstname("#firstnameInput") || check.lastname("#lastnameInput") || check.email("#emailInput") || check.message("#messageInput")) ? true : false;
    }
  
    contactFormHandler(e) {
        const formData = new FormData(this.form);
        const result = Object.fromEntries(formData.entries());
    
        e.preventDefault();
    
        if (this.#isInvalid()) return;
    
        console.log("contact: ", result);
    
        this.closeModal(".contact_button", e => this.controlsHandler(e));
        this.form.reset();
    }
  
    controlsHandler(e) {
        const keyCode = e.key;
    
        switch (keyCode) {
        case "Escape": this.closeModal(".contact_button", e => this.controlsHandler(e));
            break;
    
        case "Enter": this.contactFormHandler.bind(this);
            break;
        }
    }
  
    init() {
        const openButton = document.querySelector(".contact_button.open");
        const closeButton = document.querySelector("#contact .close");
        const contactFormHandlerBind = this.contactFormHandler.bind(this);

        this.form.addEventListener("submit", contactFormHandlerBind);
        openButton.addEventListener("click", () => this.openModal("#firstname", e => this.controlsHandler(e)));
        closeButton.addEventListener("click", () => this.closeModal(".contact_button", e => this.controlsHandler(e)));
    }
}