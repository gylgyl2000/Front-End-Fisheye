class App {
    constructor() {
        this.$photographerSection = document.querySelector(".photographer_section");
    
        this.photographersApi = new PhotographerApi('data/photographers.json');
    }
    displayData(photographers) {
        photographers.map(photographer => {
            const photographerTemplate = new PhotographerFactory(photographer);
            this.$photographerSection.innerHTML += photographerTemplate.UserCardDOM();
        });
    }
    async init() {
        const photographers = await this.photographersApi.getPhotographers();
        this.displayData(photographers)
    }
}
  
const app = new App();
app.init();