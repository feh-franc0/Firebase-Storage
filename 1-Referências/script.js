//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIxsSyBQNUwATkh57snoV-PF4zDSm3qgFs1hjAY",
    authDomain: "cursodevweb.firebaseapp.com",
    databaseURL: "https://cursodevweb.firebaseio.com",
    projectId: "cursodevweb",
    storageBucket: "cursodevweb.appspot.com",
    messagingSenderId: "1057960976744",
    appId: "1:1057960976744:web:670a80d91bfd55380976dd",
    measurementId: "G-XZXJW9X8R6"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const ref = storage.ref("/Images/depende.png");

ref.getDownloadURL().then(url => {console.log(url)})

//ref.listAll().then(res => {
//    console.log(res)
//    res.items[0].listAll().then(res => {console.log(res) })
//})