function check() {
   var name = document.querySelector("#name").value;
   var email = document.querySelector("#email").value;
   var mobile = document.querySelector("#mobile").value;
   var password = document.querySelector("#password").value;
   var cpassword = document.querySelector("#cpassword").value;

  var ml = mobile.length;
  var passl = password.length;

   var ename = document.querySelector("#ename");
   var ermail = document.querySelector("#ermail");
   var emobile = document.querySelector("#emobile");
   var epassword = document.querySelector("#epassword");
   var ecpassword = document.querySelector("#ecpassword");

   var name1 = /^[A-za-z]+$/
   var email1 = /^([A-za-z0-9])+\@([A-za-z])+\.([a-z])+$/
   var mobile1 = /^([0-9])+$/
   var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/


   if (name == "") {
      ename.innerHTML = "Please Enter Your Name";
   }
   else if (!name1.test(name)) {
      ename.innerHTML = "Please Enter Only Characters";
   }
   else {
      ename.innerHTML = "";
   }
   if (email == "") {
      ermail.innerHTML = "Please Enter Your Mail Id";

   }
   else if (!email1.test(email)) {
      ermail.innerHTML = "Please Enter Valid E-Mail Id";
   }
   else {
      ermail.innerHTML = "";
   }

   if (mobile == "") {
      emobile.innerHTML = "Please Enter Your Mobile Number";
   }
   else if (!mobile1.test(mobile)) {
      emobile.innerHTML = "Please Enter 10 Digits Numbers ";
   }
   else if (ml!==10) {
      emobile.innerHTML ="Please Enter 10 Digits Numbers";
   }
   else {
      emobile.innerHTML = "";
   }
   if (password == "") {
      epassword.innerHTML = "Please Enter Your Password";
   }
   else if (!pass.test(password)) {
      epassword.innerHTML = "Password must be At Least One Capital,Small,Number,Special Char";
   }
   else if (passl <= 8) {
      epassword.innerHTML = "Password Must Be 8 Characters";
   }
   else {
      epassword.innerHTML = "";
   }
   if (cpassword == "") {
      ecpassword.innerHTML = "Please Enter Your Confirm Password";
   }
   else if (cpassword !== password) {
      ecpassword.innerHTML = "Confirm Password not Same";
   }



}

document.querySelector("#btn").type = "Submit";
