class App {
    constructor() {
        this.$photographerSection = document.querySelector(".photographer_section")
        this.photographersApi = new PhotographerApi('data/photographers.json')
    }
    
    async init() {
        let photographers = await this.photographersApi.getPhotographers();
        photographers.map(photographer => {
            const photographerTemplate = new PhotographerFactory(photographer);
            this.$photographerSection.innerHTML += photographerTemplate.UserCardDOM();
        });
    }
}
  
const app = new App();
app.init();