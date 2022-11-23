import Api from "./Api.js";

export default class MediaApi extends Api {
    constructor(url) {
        super(url)
    }

    async getMedia() {
        const { media } = await this.get();
        return media
    }

    async getMediaByPhotographerId(id) {
        const allMedia = await this.getMedia();
        const mediaList = [];
        allMedia.find(media => {
            (media.photographerId == id) && mediaList.push(media);
        });
    
        return mediaList;
    }
}