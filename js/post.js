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

}   

