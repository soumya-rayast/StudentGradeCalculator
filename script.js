function showresult(){
    let c = document.querySelector("#c").value;
    let mt = document.querySelector("#mt").value;
    let ph = document.querySelector("#ph").value;
    let ja = document.querySelector("#ja").value;
    let csa = document.querySelector("#csa").value;
    let total =  parseFloat(c)+parseFloat(mt)+parseFloat(ph)+parseFloat(ja)+parseFloat(csa);
    let percentage = (total/500)*100;
    if(percentage >=95){
        document.querySelector(".gra").innerHTML="A+";
    }
    else if(percentage>90 && percentage <95){
        document.querySelector(".gra").innerHTML="A1";
    }
    else if(percentage>81 && percentage<=90){
        document.querySelector(".gra").innerHTML="B2";
    }
    else if(percentage>71 && percentage<=80){
        document.querySelector(".gra").innerHTML="B1";
    }
    else if(percentage>61 && percentage<=70){
        document.querySelector(".gra").innerHTML="B2";
    }
    else if(percentage>51 && percentage<60){
        document.querySelector(".gra").innerHTML="C";
    }
    else if(percentage>41 && percentage<50){
        document.querySelector(".gra").innerHTML="D";
    }
    else if(percentage>31 && percentage<40){
        document.querySelector(".gra").innerHTML="E";
    }
    else{
        document.querySelector(".gra").innerHTML="F";
    }
    document.querySelector(".per").innerHTML= percentage +"%";
    document.querySelector(".Tot").innerHTML= total;

    if(percentage>30)
    {
        document.querySelector(".result h2").innerHTML ="You are Pass";
    }
    else{
        document.querySelector(".result h2 ").innerHTML = "You are Failed";
    }
}