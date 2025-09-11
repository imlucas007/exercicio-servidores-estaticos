class Post {
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    static frontRaw (json) {
        return new Post (json.userId, json.id, json.title, json.body);
    }

    renderFrom (container) {
        container.innerHTML = "";

        let h2 = document.createElement('h2');
        h2.textContent = this.userId;

        let pTitle = document.createElement('p');
        pTitle.textContent = this.titulo;

        let pBody = document.createElement('p');
        pBody.textContent = this.body;

        container.appendChild(h2);
        container.appendChild(pTitle);
        container.appendChild(pBody);
    }

    // renderWithHTML (conatiner) {
    //     conatiner.innerHTML = 
    //  `
    //      <div>
    //         <h2>${this.userId}</h2>
    //         <p>${this.title}</p>
    //         <p>${this.body}</p
    //      </div>
    //     `
    // }

    

} 