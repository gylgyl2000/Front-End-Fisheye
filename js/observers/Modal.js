class Modal {
    constructor(modal) {
        this._modalBg = document.querySelector(modal);
        this._modal = document.querySelector(".modal");
        this._header = document.querySelector("#header");
        this._main = document.querySelector("#main");
    }
  
    openModal(focus, fn) {
        document.body.style.overflow = "hidden";
        this._modalBg.style.display = "block";
        this._modalBg.setAttribute("aria-hidden", false);
        this._modal.tabIndex = 0;
        this._header.setAttribute("aria-hidden", true);
        this._header.tabIndex = -1;
        this._main.setAttribute("aria-hidden", true);
        this._main.tabIndex = -1;
        document.querySelector(focus).focus();
        document.addEventListener("keydown", fn);
    }
  
    closeModal(focus, fn) {
        document.body.style.overflow = "auto";
        this._modalBg.style.display = "none";
        this._modalBg.setAttribute("aria-hidden", true);
        this._modal.tabIndex = -1;
        this._header.setAttribute("aria-hidden", false);
        this._header.tabIndex = 0;
        this._main.setAttribute("aria-hidden", false);
        this._main.tabIndex = 0;
        document.querySelector(focus).focus();
        document.removeEventListener("keydown", fn);
    }
}

class ContactForm extends Modal {
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

class Lightbox extends Modal {
    constructor(modal, gallery) {
        super(modal);
        this._gallery = gallery;
        this._currentIndex = -1;
        this._currentItem = "";
    }
  
    displayMedia() {
        const mediaLightbox = document.querySelector(".lightbox-media");
        const captionLightbox = document.querySelector(".lightbox-caption");
    
        mediaLightbox.innerHTML = this._currentItem.querySelector(".media").outerHTML;
        captionLightbox.textContent = this._currentItem.querySelector(".caption .title").textContent;
        captionLightbox.setAttribute("aria-label", this._currentItem.querySelector(".caption .title").textContent);
    
        if (mediaLightbox.querySelector(".media").tagName === "VIDEO") {
            mediaLightbox.querySelector(".media").setAttribute("controls", "");
    
            this.controlVideo(mediaLightbox.querySelector(".media"));
        }
    }
  
    lightboxHandler(e) {
        this._currentItem = e.target.closest("[data-id]");
        this._currentIndex = this._gallery.indexOf(this._currentItem);
        
        this.displayMedia();
        this.openModal(".lightbox-media");
    }
  
    prev() {
        if (this._currentIndex < 1) {
            this._currentIndex = this._gallery.length - 1;
            this._currentItem = this._gallery.at(-1);
        } else {
            this._currentIndex--;
            this._currentItem = this._gallery[this._currentIndex];
        }
    
        this.displayMedia();
    }
  
    next() {
        if (this._currentIndex >= this._gallery.length - 1) {
            this._currentIndex = 0;
            this._currentItem = this._gallery.at(0);
        } else {
            this._currentIndex++;
            this._currentItem = this._gallery[this._currentIndex];
        }
    
        this.displayMedia();
    }
  
    controlsHandler(e) {
        const keyCode = e.key;
    
        switch (keyCode) {
        case "Escape": this.closeModal(".photographer_gallery", e => this.controlsHandler(e));
            break;
    
        case "ArrowRight": this.next();
            break;
    
        case "ArrowLeft": this.prev();
            break;
        }
    }
  
    controlVideo(video) {
        document.addEventListener("keydown", e => (e.key === " ") && video.paused ? video.play() : video.pause());
    }
  
    init() {
        const openButton = document.querySelectorAll(".lnk-media.open");
        const closeButton = document.querySelector("#lightbox .close");
        const prevButton = document.querySelector(".previous");
        const nextButton = document.querySelector(".next");
        const lightboxHandler = this.lightboxHandler.bind(this);
    
        openButton.forEach(el => el.addEventListener("click", lightboxHandler));
        closeButton.addEventListener("click", () => this.closeModal(".photographer_gallery", e => this.controlsHandler(e)));
        document.addEventListener("keydown", e => this.controlsHandler(e));
        prevButton.addEventListener("click", () => this.prev());
        nextButton.addEventListener("click", () => this.next());
    }
}