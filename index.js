function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" && password === "1234") {
      window.location.href = "/users/juan.html";
    } else if (username === "" && password === "4567") {
      window.location.href = "/users/linda.html";
    } else if (username === "" && password === "7891") {
      window.location.href = "/users/perez.html";
    } else {
      alert("Ingresa un usuario y contraseña válidos");
    }
  }
  
