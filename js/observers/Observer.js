class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(obs => obs.init());
  }
}

class Utils {
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