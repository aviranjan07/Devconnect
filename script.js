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

function addPost() {
  let input = document.getElementById("postInput").value;
  let container = document.getElementById("postContainer");

  if(input === "") {
    alert("Write Something First ❌");
    return;
  }

  let postDiv = document.createElement("div");

  let newPost = document.createElement("p");
  newPost.innerText = input;

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function() {
    postDiv.remove();
  }

  postDiv.appendChild(newPost);
  postDiv.appendChild(deleteBtn);

  container.appendChild(postDiv);
  Document.getElementById("postInput").value = "";

}
