import PhotographerApi from "../api/PhotographerApi.js";
import MediaApi from "../api/MediaApi.js";
import PhotographerFactory from "../factories/Photographer.js";
import MediaFactory from "../factories/Media.js";
import FilterDropdown from "../templates/FilterDropdown.js";
import FormContact from "../templates/FormContact.js";
import LightBox from "../templates/LightBox.js";
import Utils from "../observers/Utils.js";

class App {
    constructor() {
        this.$photographerMain = document.querySelector("#main");
        this.$photographerHeader = document.querySelector(".photographer_header");
        this.$photographerGallery = document.querySelector(".photographer_gallery");

        this.photographersApi = new PhotographerApi('data/photographers.json');
        this.mediaApi = new MediaApi('data/photographers.json');
    }

    displayData(photographer, mediaList) {
        const photographerTemplate = new PhotographerFactory(photographer);

        document.title = photographerTemplate.UserTitleDOM();
        this.$photographerHeader.innerHTML = photographerTemplate.UserHeaderDOM();
        this.$photographerHeader.insertAdjacentHTML("beforeend", photographerTemplate.UserInsertDOM());

        mediaList.map(media => {
            const mediaTemplate = new MediaFactory(media);
            this.$photographerGallery.innerHTML += mediaTemplate.MediaCardDOM();
        });

        this.$photographerGallery.insertAdjacentHTML("beforebegin", FilterDropdown.FilterDropdownDOM());
        this.$photographerMain.insertAdjacentHTML("afterend", FormContact.FormContactDOM(photographer.name));
        this.$photographerMain.insertAdjacentHTML("afterend", LightBox.LightBoxDOM());
    }

    async init() {
        const URLSearchParams = new URL(window.location.href).searchParams;
        const id = URLSearchParams.get("id");
        
        const photographer = await this.photographersApi.getPhotographerById(id);
        const media = await this.mediaApi.getMediaByPhotographerId(id);
        
        this.displayData(photographer, media);
        Utils.handler();
    }
}

const app = new App();
app.init();