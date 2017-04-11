var bookController = function(Book){

    var post = function(req, res){
        //hint hereeeeeeee
        var book = new Book(req.body);

        if(!req.body.title){
            res.status(400);
            res.send('Title is required');
        }
        else {
            book.save();
            res.status(200);
            res.send(book);
        }

    }

    var get = function(req,res){

        var query = {};
        //console.log(req.query.genre);
        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        //console.log(query);
        Book.find(function(err,books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    }

    return {
        post:post,
        get:get
    }
}
module.exports = bookController;