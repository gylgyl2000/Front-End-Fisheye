class PhotographerTemplate {
    constructor(data) {
      this._data = data;
    }
  
    UserCardDOM() {
        return `
            <article class="photographer" data-id="${this._data.id}" data-name="${this._data.name}">
                <a href="photographer.html?id=${this._data.id}">
                    <img class="portrait" src="${this._data.portrait}" alt="${this._data.name}" aria-hidden="true">
                    <h2 class="name">${this._data.name}</h2>
                </a>
                <h3 class="location">${this._data.location}</h3>
                <p class="tagline">${this._data.tagline}</p>
                <p class="price">${this._data.price}€/jour</p>
            </article>
        `;
    }
  
    UserTitleDOM() { return `Fisheye - ${this._data.name}`; }
  
    UserHeaderDOM() {
        return `
            <article class="info">
                <h2 class="name">${this._data.name}</h2>
                <h3 class="location">${this._data.location}</h3>
                <h4 class="tagline">${this._data.tagline}</h4>
            </article>
            <button class="contact_button open" type="button" aria-label="Contact Me">Contactez-moi</button>
            <img class="portrait" src=${this._data.portrait} alt="${this.name}">
        `;
    }
  
    UserInsertDOM() {
        return `
            <aside role="complementary" class="insert">
                <span class="insert-likes"></span>
                <span class="insert-price">${this._data.price}€ / jour</span>
            </aside>
        `;
    }
}