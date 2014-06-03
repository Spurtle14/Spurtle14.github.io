console.log('This would be the main JS file.');


auth.createUser(email, password, function(error, user) {
  if (!error) {
    console.log('User Id: ' + user.uid + ', Email: ' + user.email);
  }
});


var chatRef = new Firebase('https://luminous-fire-5993.firebaseio.com/');
var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    // user authenticated with Firebase
    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
  } else {
    // user is logged out
  }
});

auth.login('password', {
  email: '<email@domain.com>',
  password: '<password>'
});


var signUp = function(){
        var userName = new Firebase('https://luminous-fire-5993.firebaseio.com/');
        userName.set(document.getElementById('username'));
        
        
        var lastName = new Firebase('https://luminous-fire-5993.firebaseio.com/');
        lastName.set(document.getElementById('lastname'));
 
    var firstName = new Firebase('https://luminous-fire-5993.firebaseio.com/');
        firstName.set(document.getElementById('firstname'));
 
     var studentPin = new Firebase('https://luminous-fire-5993.firebaseio.com/');
        studentPin.set(document.getElementById('studentpin'));
 
 
}
