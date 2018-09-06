 var registerTab = document.querySelector('.reg');
 var loginTab = document.querySelector('.log');
var registerDiv = document.getElementById('register');
var loginDiv = document.getElementById('login');
var mecLone = document.querySelector('.mec');
var regBlock = document.getElementById("block");
var loginBlock = document.getElementById("blockL");

 registerTab.addEventListener('click', function(){
  if(registerDiv.className =='removeDiv'){
    registerDiv.className = 'showDiv';
    loginDiv.className = 'removeDiv';
    regBlock.style.borderBottom = "1px solid #3c52dd";
    loginBlock.style.borderBottom  = "1px solid rgba(0,0,0,.1)";
    
  }
});


loginTab.addEventListener("click", function() {
 if(loginDiv.className = 'removeDiv'){
    loginDiv.className = 'showDiv';
     registerDiv.className = 'removeDiv';
     loginBlock.style.borderBottom  = "1px solid #3c52dd";
     regBlock.style.borderBottom  = "1px solid rgba(0,0,0,.1)";
  }
});
  
  function clearInputFields(){
    document.querySelector(".form").value="clear"
  }