class FormContact {
    static FormContactDOM(name) {
        return `
            <section id="contact" class="modal-bg" aria-hidden="true">
                <article class="modal" aria-label="Contact me ${name}" aria-modal="true" role="dialog" tabindex="-1">
                    <header>
                        <h1>Contactez-moi ${name}</h1>
                        <button class="contact-close close" aria-label="Close contact form" tabindex="0">
                            <span class="icon-close" aria-hidden="true"></span>
                        </button>
                    </header>
                    <article class="modal-body">
                        <form id="contact-form" name="contact" action="#" method="get" novalidate>
                            <div class="formData">
                                <label id="firstname" for="firstnameInput" aria-label="firstname">Prénom</label>
                                <input id="firstnameInput" class="text-control" name="firstname" type="text" required aria-labelledby="firstname" aria-required="true">
                            </div>
                            <div class="formData">
                                <label id="lastname" for="lastnameInput" aria-label="lastname">Nom</label>
                                <input id="lastnameInput" class="text-control" name="lastname" type="text" required aria-labelledby="lastname" aria-required="true">
                            </div>
                            <div class="formData">
                                <label id="email" for="emailInput" aria-label="email">Email</label>
                                <input id="emailInput" class="text-control" name="email" type="email" required aria-labelledby="email" aria-required="true">
                            </div>
                            <div class="formData message">
                                <label id="message" for="messageInput" aria-label="message">Votre message</label>
                                <textarea id="messageInput" class="text-control" name="message" required aria-labelledby="message" aria-required="true"></textarea>
                            </div>
                            <button class="submit-button" aria-label="Send">Envoyer</button>
                        </form>
                    </article>
                </article>
            </section>
        `
    }
}
