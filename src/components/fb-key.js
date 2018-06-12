import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAPzbuGiOrhrJ3jGKofidnjnXD84Y5xj48",
    authDomain: "bears-22c68.firebaseapp.com",
    databaseURL: "https://bears-22c68.firebaseio.com"
}

const app = firebase.initializeApp(config)

export const rebase = Rebase.createClass(app.database());


