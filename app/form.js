// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0qz-H3guLTokAwmCfVIJlkTdska4fq3c",
    authDomain: "alfaizmomin-c5f5a.firebaseapp.com",
    databaseURL: "https://alfaizmomin-c5f5a.firebaseio.com",
    projectId: "alfaizmomin-c5f5a",
    storageBucket: "alfaizmomin-c5f5a.appspot.com",
    messagingSenderId: "107882973720"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
	e.preventDefault();

	// Get values
	var name = getInputVal('name'),
	email = getInputVal('email'),
	message = getInputVal('message');

	//save message
	saveMessage(name, email, message);

}

// function to get form values
function getInputVal(id) {
	return document.getElementById(id).value;
}

// save message to firebase

function saveMessage(){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		message: message
	});
}