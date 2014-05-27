console.log('This would be the main JS file.');

<script type='text/javascript'
        src='https://cdn.firebase.com/js/simple-login/1.4.1/firebase-simple-login.js'>
</script>


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
