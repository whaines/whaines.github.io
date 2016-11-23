function buttonDidPress() {
  var password;
  var pass1="alex4390";
    password=prompt('Please enter password.','');

    if (password!=pass1)
      alert('Incorrect password. Try again.');
    else
      {
      window.location="./content.html";
      }
}
