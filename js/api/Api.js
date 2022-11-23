export default class Api {
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