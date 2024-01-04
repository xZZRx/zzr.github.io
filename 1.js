function validate() {
  
  var username = document.forms['form'].elements['username'].value;
  var password = document.forms['form'].elements['password'].value;

  
  var correctUsername = 'zzr';  
  var correctPassword = '123';  

  
  if (username === correctUsername && password === correctPassword) {
    alert("Correct!");
    return true;  
  } else {
    alert("Wrong username or password.");
    return false;  
  }
}