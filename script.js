function handleSubmit(event) {
  event.preventDefault(); //stop page reload

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("All fields are required ❌");
  } else {
    alert("Login Successful ✅");
  }
}
