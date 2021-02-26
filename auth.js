const register=()=>{
    // Untuk menagkap data
    let username = document.getElementById('username').value
    let passowrd = document.getElementById('password').value
    // untuk penyimpanan Data di Brouser
    // setItem untuk menambahkan item
    let user = sessionStorage.setItem("username", username)
    let pass = sessionStorage.setItem("password", passowrd)
    
}
const login=()=>{
    // Untuk menagkap data
    let username = document.getElementById('username').value
    let passowrd = document.getElementById('password').value
    // untuk penyimpanan Data di Brouser
    // setItem untuk menambahkan item
    let user = sessionStorage.getItem("username", username)
    let pass = sessionStorage.getItem("password", passowrd)
    if( username == "user" && password == "pass"){
        return true;
      }
      else if(username =="" || password ==""){
        alert("Masukan username dan password Anda");
        return false;
      }
      else{
        alert("Username atau password yang Anda masukan SALAH");
        return true;
      }
    // if (username === user && passowrd === pass) {
    //     alert("LOGIN BERHASIL")
    // }else{
    //     alert("LOGIN GAGAL")
    // }
}
