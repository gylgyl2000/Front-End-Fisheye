import Subject from "./Subject.js";
import ContactForm from "./ContactForm.js";
import Lightbox from "./Lightbox.js";
import Sort from "./Sort.js";
import Likes from "./Likes.js";

export default class Utils {
    static handler() {
        const gallery = [ ...document.querySelectorAll("[data-id]") ];
    
        const subject = new Subject();
        const contactForm = new ContactForm("#contact");
        const sortBy = new Sort(gallery);
        const lightBox = new Lightbox("#lightbox", gallery);
        const likes = new Likes();
    
        subject.attach(contactForm);
        subject.attach(sortBy);
        subject.attach(lightBox);
        subject.attach(likes);
        subject.notify();
    }
}