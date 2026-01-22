let isLoggedIn = true
let isProfileComplete = false

function login() {
    if (!isLoggedIn) {
        console.log("Please login to continue")
    } 
    else if (!isProfileComplete) {
        console.log("Please complete your profile")
    } 
    else {
        console.log("Welcome to the dashboard")
    }
}

login()
