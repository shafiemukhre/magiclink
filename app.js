document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();

document.addEventListener("change", event => {
    const app = firebase.app();

    console.log(app)
})

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

        .then(result =>{
            const user = result.user;
            document.write('Hello ${user.displayName}');
            console.log(user)
        })
        .catch(console.log)

        function uploadFile(files) {
            const storageRef = firebase.storage().ref();
            const imgRef = storageRef.child('pic.jpg');
        
            const file = files.item(0);
        
            const task = imgRef.put(file)
        
            // successful upload
            task.then(snapshot => {
                const url = snapshot.ref.getDownloadURL().then()
            })
        
            // monitor progress
            task.on('state_changed', snapshot => {
                console.log(snapshot)
        
            })
        }

