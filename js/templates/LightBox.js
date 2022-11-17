class LightBox {
    static LightBoxDOM() {
        return `
            <section id="lightbox" class="modal-bg" aria-hidden="true">
                <article class="modal" aria-label="image closeup view" aria-modal="true" role="dialog" tabindex="-1">
                    <button class="previous" type="button" aria-label="Preivous image" tabindex="0"><i class="fa fa-chevron-left"></i></button>
                    <article class="lightbox-container" aria-labelledby="lightbox">
                        <div class="lightbox-media" tabindex="0"></div>
                        <p class="lightbox-caption"></p>
                    </article>
                    <button class="next" type="button" aria-label="Next image" tabindex="0"><i class="fa fa-chevron-right"></i></button>
                    <button class="lightbox-close close" type="button" aria-label="Close dialog" tabindex="0">
                        <span class="icon-close" aria-hidden="true"></span>
                    </button>
                </article>
            </section>
        `;
    }
}