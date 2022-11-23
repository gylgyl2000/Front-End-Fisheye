import MediaModel from "./Media.js";

export default class ImageModel extends MediaModel {
    constructor(data) {
        super(data);
        this._image = data.image;
    }
  
    get media() {
        return `
            <figure class="media">
                <img src="${this.path + this._image}" alt="${this.title}">
            </figure>
        `;
    }
}