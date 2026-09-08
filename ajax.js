const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");
getButton.addEventListener("click", getData);
getButton.addEventListener("click", sendData);


function sendRequest(methood, url, data) {
    const promise =new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        // for single way
        // console.log(this.response.id);
        // console.log(JSON.parse(this.responseText).id);
        // const valu = JSON.parse(this.responseText);
        // const valu = this.response.id;
        // const valu2 = this.response.title;
        // document.getElementById("demo").innerHTML=`${valu}. ${valu2}`;
        
        //dynamic way        
        //error handle condition
        if(this.status >= 400){
            reject (`There was an error, check status ${this.status} text is ${this.statusText}`);
        }else{
        resolve(this.response);
        }
    };
    xhr.onerror = function () {
        reject("Error Detect");
    };

    xhr.open(methood, url);
    xhr.responseType = "json";
    xhr.send(data);
    });
    return promise;  
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
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responsData)=>{
      console.log(responsData);
    })
    .catch((err)=>{
        console.log(err);
    })
}

function sendData() {
    sendRequest(
        "POST",
        "https://jsonplaceholder.typicode.com/pots",
        JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1, 
    })
    ).then((responsData)=>{
      console.log(responsData);

    })
    .catch((err)=>{
        console.log(err);
    })
    
}

