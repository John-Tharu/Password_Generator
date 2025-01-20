let btn  = document.querySelector("#btn");
let copy = document.querySelector("#copy");
let uppercase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase  = "abcdefghijklmnopqrstuvwxyz";
let numbers    = "0123456789";
let symbols = "!@#$%&'()*+,-./:;<=>?[]^_`{|}~";


const pass = () =>{
    let length = 16;
    let password = "";
    let characters = uppercase + lowercase + numbers + symbols;
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

btn.addEventListener('click', () =>{
    document.querySelector("#pass").value = pass();
})

copy.addEventListener('click', () =>{
    try {
        let data = document.querySelector("#pass").value;
        if(data === ""){
            showtoast(empty);
        }
        else{
            document.querySelector("#pass").select();
            document.execCommand('copy');
            document.querySelector("#pass").value = "";
            showtoast(copied);
        }
    } catch (err) {
        showtoast(error);
    }
});


let toastbox = document.getElementById("toastbox");
let copied = "<img src='img/success.png' class='icon' alt='Success'>Password Copied";
let error = "<img src='img/error.png' class='icon' alt='Error'>Something went wrong";
let empty = "<img src='img/empty.png' class='icon' alt='Empty'>Nothing to copy";
const showtoast = (msg) =>{
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastbox.appendChild(toast);

    if(msg.includes("copied")){
        toast.classList.add("success");
    }
    if(msg.includes("error")){
        toast.classList.add("error");
    }
    if(msg.includes("empty")){
        toast.classList.add("empty");
    }

    setTimeout(() =>{
        toast.remove();
    }, 5000);
}