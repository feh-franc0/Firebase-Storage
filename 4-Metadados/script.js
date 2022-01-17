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

//Fazer upload de arquivo em base64(criptografado):
//const storage = firebase.storage();
//const ref = storage.ref("/Images");
//
//const fileBase64 = 'foto em base64 em formato de texto criptogrado';
//
//ref.child("Foto.jpg").putString(fileBase64, "base64"),then(snapshot => {
//    console.log(snapshot);
//})


//Mudando os metadados dele:
const storage = firebase.storage();
const ref = storage.ref("/Images");

const newMetaData = {
    contentType: 'image/jpeg'
}

ref.child("Foto.jpg").updateMetadata(newMetaData).then(metaData => {
    console.log(metaData)
}).catch(err => {
    console.log(err)
})