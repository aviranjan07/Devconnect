function handleSubmit(event) {
  event.preventDefault(); //stop page reload

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

  if (email === "" || password === "") {
    message.innerText = "All fields are required ❌";
    message.style.color = "red";
  } else {
    message.innerText = "Login Successful ✅";
    message.style.color = "green"
  }
}

// Store Posts in Local Storage

function addPost() {
  let input = document.getElementById("postInput").value;
  // let container = document.getElementById("postContainer");

  if(input === "") {
    alert("Write Something First ❌");
    return;
  }
   let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.push(input);

    localStorage.setItem("posts", JSON.stringify(posts));

    displayPosts();

    document.getElementById("postInput").value = "";
}


// Display Saved Posts

function displayPosts() {
    let container = document.getElementById("postContainer");
    container.innerHTML = "";

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach((post, index) => {
        let postDiv = document.createElement("div");

        let text = document.createElement("p");
        text.innerText = post;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.onclick = function () {
            deletePost(index);
        };

        postDiv.appendChild(text);
        postDiv.appendChild(deleteBtn);

        container.appendChild(postDiv);
    });
}

// Delete Function 

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts"));

    posts.splice(index, 1);

    localStorage.setItem("posts", JSON.stringify(posts));

    displayPosts();
}

// Load Data on Page Start
displayPosts();