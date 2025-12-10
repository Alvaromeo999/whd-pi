console.log("WHD-PI Website Loaded");

// Contoh login sederhana (tanpa backend)
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin") {
    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}
