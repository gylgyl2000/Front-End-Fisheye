class Likes {
    constructor() {
        this.insertLikes = document.querySelector(".insert-likes");
        this._likes = 0;
    }
  
    insertHTML(likes) {
        return `${likes} <i class="fa fa-heart"></i>`;
    }
  
    likeHandler(e) {
        const currentLike = e.target.closest("[data-user-like]");
        const captionLikeText = currentLike.querySelector(".caption .like-text");
        const captionLikeIcon = currentLike.querySelector(".caption .like-icon");
        let likesText = parseInt(captionLikeText.innerText);
    
    
        if (currentLike.dataset.userLike === "false") {
            currentLike.dataset.userLike = true;
            currentLike.dataset.likes = likesText + 1;
            captionLikeText.innerHTML = `${likesText + 1}`;
            captionLikeIcon.innerHTML = "<i class='fa fa-heart'></i>";
    
            this._likes++;
            this.insertLikes.innerHTML = this.insertHTML(this._likes);
        } else {
            currentLike.dataset.userLike = false;
            currentLike.dataset.likes = likesText - 1;
            captionLikeText.innerHTML = `${likesText - 1}`;
            captionLikeIcon.innerHTML = "<i class='far fa-heart'></i>";
    
            this._likes--;
            this.insertLikes.innerHTML = this.insertHTML(this._likes);
        }
    }
  
    init() {
        const insertBlock = document.querySelector(".insert");
        const likeText = [ ...document.querySelectorAll(".like-text") ];
        const likeButton = [ ...document.querySelectorAll(".like-icon") ];
        const likeHandlerBind = this.likeHandler.bind(this);
    
        likeText.map(like => this._likes += parseInt(like.innerText));
    
        likeButton.map(like => {
            like.addEventListener("click", likeHandlerBind);
    
            like.addEventListener("keydown", e => (e.key === "Enter") && likeHandlerBind(e));
        });
    
        insertBlock.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            document.querySelector(".btn-contact").focus();
        });
    
        this.insertLikes.innerHTML = this.insertHTML(this._likes);
    }
}