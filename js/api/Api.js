class Api {
    constructor(url) {
        this._url = url
    }

    async getPhotographersData() {
        return fetch(this._url)
            .then(response => response.json())
            .then(response => response.photographers)
            .catch(error => console.log('an error occurs', error))
    }
}
class PhotographerApi extends Api {
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.getPhotographersData();
    }
    
    async getPhotographerById(id) {
        const photographers = await this.getPhotographers();
        const photographerById = photographers.find(photographer => photographer.id == id);
    
        return photographerById;
    }
}