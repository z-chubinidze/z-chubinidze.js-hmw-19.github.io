// ვალიდაცის error

function check(){
    var email = document.getElementById("email");
    var pasword = document.getElementById("pasword");
    var eror1 = document.getElementById("error1");
    var eror2 = document.getElementById("error2");
   

    if(email.value == "" || email.length == 0){
        eror1.innerHTML = "შეივანეთ იმეილი";
        document.getElementById("border1").style.border = "2px solid red";
        eror1.style.color = "red"
        eror1.style.fontSize = "14px";


    }else if (pasword.value == "" || pasword.length == 0){
        eror1.innerHTML = "";
        document.getElementById("border1").style.border = "4px solid #FFFFFF";
        eror2.innerHTML = "შეიყვანეთ პაროლი";
        document.getElementById("border2").style.border = "2px solid red";
        eror2.style.color = "red"
        eror2.style.fontSize = "14px";
    } else{
        eror1.innerHTML = "";
        document.getElementById("border1").style.border = "4px solid #FFFFFF";
        eror2.innerHTML = "";
        document.getElementById("border2").style.border = "4px solid #FFFFFF";
        document.getElementById("alert").style.display = "block";
    };
}
function clos(){
    document.getElementById("alert").style.display = "none";
}