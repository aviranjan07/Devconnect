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
