import Api from "./Api.js";

export default class PhotographerApi extends Api {
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        const { photographers } = await this.get();
        return photographers
    }
    
    async getPhotographerById(id) {
        const photographers = await this.getPhotographers();
        const photographerById = photographers.find(photographer => photographer.id == id);
        return photographerById;
    }
}