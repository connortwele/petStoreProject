function storeInfo(email,text){
    event.preventDefault();
    console.log("email:" + email, "comment:" + text)
    email = " "
    text = " "
    document.getElementById('email').value = " "
    document.getElementById('comment').value = " "
}