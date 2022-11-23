export default class Sort {
    constructor(gallery) {
        this._gallery = gallery;
        this._icon = document.querySelector(".filters-button");
        this._option = document.querySelector(".filters-option");
    }
  
    sortByPopularity(a, b) {
        const likesA = parseInt(a.dataset.likes);
        const likesB = parseInt(b.dataset.likes);
        return ((likesA < likesB) ? 1 : (likesA == likesB) ? 0 : -1);
    }
  
    sortByDate(a, b) {
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        return ((dateA < dateB) ? 1 : (dateA == dateB) ? 0 : -1);
    }
  
    sortByTitle(a, b) {
        const titleA = a.dataset.title;
        const titleB = b.dataset.title;
        return (titleA < titleB) ? -1 : 1;
    }
  
    sortByHandler(filtersValue) {
        switch (filtersValue) {
        case "Popularité": this._gallery.sort(this.sortByPopularity);
            break;
    
        case "Date": this._gallery.sort(this.sortByDate);
            break;
    
        case "Titre": this._gallery.sort(this.sortByTitle);
            break;
        }
    
        this._gallery.forEach(el => document.querySelector(".photographer_gallery").appendChild(el));
    }
  
    openFilters() {
        this._icon.className += " open";
        this._option.style.display = "block";
    }
  
    closeFilters() {
        this._icon.className = "filters-button";
        this._option.style.display = "none";
        document.querySelector(".photographer_gallery").focus();
    }
  
    filtersItemHandler(item, filtersValue, filtersOption, filtersSelected) {
        filtersValue.textContent = item.textContent;
        filtersOption.setAttribute("aria-activedescendant", item.dataset.value);
    
        this.sortByHandler(filtersValue.textContent);
        this.closeFilters();
        filtersSelected.setAttribute("aria-expanded", false);
    }
  
    init() {
        const filtersSelected = document.querySelector(".filters-selected");
        const filtersValue = document.querySelector(".filters-value");
        const filtersOption = document.querySelector(".filters-option");
        const filtersItem = document.querySelectorAll(".filters-item");
        let open = false;
    
        filtersSelected.addEventListener("click", () => {
            open = !open;
            if (open) {
                this.openFilters();
                filtersSelected.setAttribute("aria-expanded", true);
            } else {
                this.closeFilters();
                filtersSelected.setAttribute("aria-expanded", false);
            }
        });
    
        filtersItem.forEach(item => {
            item.addEventListener("click", () => {
                this.filtersItemHandler(item, filtersValue, filtersOption, filtersSelected);
                open = false;
            });
    
            item.addEventListener("keydown", e => {
                (e.key === "Enter") && this.filtersItemHandler(item, filtersValue, filtersOption, filtersSelected);
                open = false;
            });
        });
    
        this.sortByHandler(filtersValue.textContent);
    }
}