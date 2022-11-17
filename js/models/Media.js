class MediaModel {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._path = "assets/media/";
    }
  
    get id() { return this._id; }
  
    get photographerId() { return this._photographerId; }
  
    get title() { return this._title; }
  
    get likes() { return this._likes; }
  
    get date() { return this._date; }
  
    get price() { return this._price; }
  
    get path() { return this._path; }
}

class ImageModel extends MediaModel {
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

class VideoModel extends MediaModel {
    constructor(data) {
        super(data);
        this._video = data.video;
    }
  
    get media() {
        const extension = this._video.split(".")[1];
    
        return `
            <video class="media" tabindex="-1">
                <source src="${this.path + this._video}" type="video/${extension}">
                <track src="captions/vtt/captions_fr.vtt" kind="captions" srclang="fr" label="french_captions" default="true">
            </video>
        `;
    }
}