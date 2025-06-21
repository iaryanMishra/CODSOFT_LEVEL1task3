alert("Use ** for superscript(Power)");

let input = document.querySelector("input");
let erase = document.querySelector("#erase");
let btns = document.querySelectorAll("button");

let string="";
let arr = Array.from(btns);
arr.forEach(button => {
    button.addEventListener("click",(evt)=> {
        if(evt.target.innerHTML === "="){
             string = eval(string);
             input.value = string;
        }else if(evt.target.innerHTML === "AC"){
            string = "";
            input.value = string;
        }else{
                string = string + evt.target.innerHTML;
                input.value = string;
        }
    })
})

erase.addEventListener("click", () => {
      string = string.substring(0,string.length-1);
    input.value = string;
});

