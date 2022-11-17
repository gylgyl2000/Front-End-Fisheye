class MediaFactory {
    constructor(data) {
        if (data.image !== undefined) {
            this._data = new ImageModel(data);
        } else {
            this._data = new VideoModel(data);
        }
        return new MediaTemplate(this._data)
    }
}
