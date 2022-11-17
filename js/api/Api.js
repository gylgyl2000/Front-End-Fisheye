class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(response => response.json())
            // .then(response => response.data)
            .catch(error => console.log('An error occurs', error))
    }
}
class PhotographerApi extends Api {
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

class MediaApi extends Api {
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