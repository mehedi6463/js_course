const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

function sendRequest(methood, url) {
    const promise =new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        // console.log(this.response.id);
        // console.log(JSON.parse(this.responseText).id);
        // const valu = JSON.parse(this.responseText);
        const valu = this.response.id;
        const valu2 = this.response.title;
        document.getElementById("demo").innerHTML=`${valu}. ${valu2}`;
        
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    xhr.responseType = "json";
    xhr.send();
    })
    
    
}

function getData() {
    // const xhr = new XMLHttpRequest();

    // xhr.onload = function () {
    //     // console.log(this.response.id);
    //     // console.log(JSON.parse(this.responseText).id);
    //     // const valu = JSON.parse(this.responseText);
    //     const valu = this.response.id;
    //     const valu2 = this.response.title;
    //     document.getElementById("demo").innerHTML=`${valu}. ${valu2}`;
        
    // }
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    // xhr.responseType = "json";
    // xhr.send();
    
}
function sendData() {
    // document.getElementById("demoOne").innerHTML="data sending..."
    
}

getButton.addEventListener("click", getData);
getButton.addEventListener("click", sendData);
