import ImageModel from "../models/ImageModel.js";
import VideoModel from "../models/VideoModel.js";
import MediaTemplate from "../templates/Media.js";

export default class MediaFactory {
    constructor(data) {
        if (data.image !== undefined) {
            this._data = new ImageModel(data);
        } else {
            this._data = new VideoModel(data);
        }
        return new MediaTemplate(this._data)
    }
}
