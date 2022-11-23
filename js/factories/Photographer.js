import PhotographerModel from "../models/Photographer.js";
import PhotographerTemplate from "../templates/Photographer.js";

export default class PhotographerFactory {
    constructor(data) {
        this._data = new PhotographerModel(data);
        
        return new PhotographerTemplate(this._data)
    }
}
