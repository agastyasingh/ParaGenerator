const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const generateWord = (n) => {
    let text="";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; ++i){
        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }
    return text;
}

const paraGenerate = () => {
    const para = document.createElement("p");
    const space = document.createElement("br");
    const words = Number((input.value));
    if(words<=0){
        alert("Enter a valid value!");
    }
    if(words>0){
    let data = "";

    for( let i =0; i< words; ++i){
        const word = (generateWord((Math.random()*10).toFixed(0))).toLowerCase();
        data += word;
        data += " ";
    }
    para.innerText = data;

    para.setAttribute("class", "paras");
    
    container.append(space);
    container.append(para);
    }
}

const pDelete = () => {
    const p = document.querySelector("p");
    p.remove();
}

