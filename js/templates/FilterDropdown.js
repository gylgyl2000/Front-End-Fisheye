export default class FilterDropdown {
    static FilterDropdownDOM() {
        return `
            <section class="filters">
                <label id="sortBy">Trier par</label>
                <article class="filters-dropdown">
                    <button class="filters-selected" type="button" aria-labelledby="sortBy" aria-expanded="false" aria-haspopup="listbox">
                        <span class="filters-value">Popularité</span>
                        <span class="filters-button"><i class="fa fa-chevron-down"></i></span>
                    </button>
                    <ul class="filters-option" aria-labelledby="sortBy" aria-activedescendant="popularity" aria-selected="true" role="listbox">
                        <li class="filters-item" data-value="popularity" aria-label="popularity" role="option" tabindex="0">Popularité</li>
                        <li class="filters-item" data-value="date" aria-label="date" role="option" tabindex="0">Date</li>
                        <li class="filters-item"  data-value="title" aria-label="title" role="option" tabindex="0">Titre</li>
                    </ul>
                </article>
            </section>
        `;
    }
}