var PostsModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getPosts: function (callback) {
            //Make GET call to /api/Specials
            console.log("gathering data")
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://nandosoawesome.azurewebsites.net/api/Posts/",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getPostsById: function (id, callback) {
            //Make GET call to /api/Specials/id
            console.log("getpostbyid")
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://nandosoawesome.azurewebsites.net/api/Posts/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        addPosts: function (post, callback) {
            console.log('adding post')

            $.ajax({
                url: "http://nandosoawesome.azurewebsites.net/api/Posts/",
                type: "POST",
                data: post,
                success: function (data, textStatus, jqXHR) {
                    console.log(data)
                    callback();

                }
            });
            //Make POST call
        },

        updatePosts: function (ID, post, callback) {
            //Make PUT calll
            console.log('updating post')

            $.ajax({
                url: "http://nandosoawesome.azurewebsites.net/api/Posts/" + ID,
                type: "PUT",
                data: post,
                success: function (data, textStatus, jqXHR) {
                    callback();
                    console.log(data);
                }
            });
        },

        deletePost: function (ID, callback) {
            console.log('deleting post')

            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "http://nandosoawesome.azurewebsites.net/api/Posts/" + ID,
                success: function (data) {
                    callback();
                }
            });
        }
    };
}());