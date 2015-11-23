document.addEventListener("DOMContentLoaded", function () {
    loadPostsTable();
    console.log("loading posts")
});

function loadPostsTable() {
    var postsTable = document.getElementById("postcontent");

    PostsModule.getPosts(function (postsList) {
        setupPostsTable(postsList);
    });

    function setupPostsTable(posts) {
        for (i = 0; i < posts.length; i++) {
            console.log("creating rows");

            var row = document.createElement('tr');
            row.setAttribute("data-id", posts[i].ID);

            // Add the columns in the row (td / data cells)
            var lastnamecol = document.createElement('td');
            lastnamecol.innerHTML = posts[i].user;
            row.appendChild(lastnamecol);


            var firstnamecol = document.createElement('td');
            firstnamecol.innerHTML = posts[i].date;
            row.appendChild(firstnamecol);

            var enrollmentdatecol = document.createElement('td');
            enrollmentdatecol.innerHTML = posts[i].question;
            row.appendChild(enrollmentdatecol);

            var endcol = document.createElement('td');
            endcol.innerHTML = posts[i].answer;
            row.appendChild(endcol);

            //delete

            var btncol = document.createElement('td');
            btncol.id = row.getAttribute("data-id");
            var btn = document.createElement("BUTTON");
            btn.className += "adminbtn"
            var txt1 = document.createTextNode("delete");
            btn.appendChild(txt1);
            btn.onclick = function (event) {
                var id = event.target.parentNode.id;

                var password = prompt("Please enter admin password", "");
                if (password == "admin") {
                    //delete post
                    PostsModule.deletePost(id, function () {
                        window.location.href = "contact.html";
                    });
                }
            };
            btncol.appendChild(btn);

            //reply

            var btn2 = document.createElement("BUTTON");
            var txt2 = document.createTextNode("reply");
            btn2.appendChild(txt2);
            btn2.className += "adminbtn"
            btn2.onclick = function (event) {

                var id = event.target.parentNode.id;
                var password = prompt("Please enter admin password", "");
                if (password == "admin") {


                    //get post first
                    PostsModule.getPostsById(id, function (data) {
                        var reply = prompt("Enter your answer", "");
                        var newPost = {
                            ID: data.ID,
                            user: data.user,
                            date: data.date,
                            question: data.question,
                            answer: reply
                        }

                        PostsModule.updatePosts(id, newPost, function () {
                            window.location.href = "contact.html";
                        });
                    });
                }
            };
            btncol.appendChild(btn2);
            row.appendChild(btncol);



            // Append the row to the end of the table
            postsTable.appendChild(row);
        }
    }
}

        //Show table after it's all loaded
        //document.getElementById("tblspecial").classList.remove("hidden");
        //document.getElementById("loadingmsg").style.display = "none";

        function submitButtonPressed() {

            console.log("submit pressed");

            var name = document.getElementById("name").value;
            var question = document.getElementById("question").value;

            if (name == "" || question == "") {
                window.alert("Name and/or question is Empty!");
            } else {
                //post 
                var newPost = {
                    ID: Math.floor((Math.random() * 9999999) + 1),
                    user: name,
                    question: question,
                    date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    answer: "---"
                }

                console.log(newPost);

                PostsModule.addPosts(newPost, function () {
                    window.location.href = "contact.html";
                });
            }

        }