import Modal from "./Modal.js";

export default class Lightbox extends Modal {
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