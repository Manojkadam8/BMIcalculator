


var btn=document.querySelector("#btns");
btn.addEventListener("click", ()=>{
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;

    console.log(height+weight);

    var BMI;

    BMI= (weight / ((height * height)
    / 10000)).toFixed(2);

    console.log(BMI)
    var textvalue;
    document.getElementById("Bmiresult").innerHTML=`BMI = ${BMI} Kg/m2`;
   
    if(BMI < 18.5){
        textvalue = "Underweight 😒";
        // result.style.color = “#ffc44d”;
    }
    else if( BMI >= 18.5 && BMI <= 24.9 ){
        textvalue = "Normal Weight 😍";
        // result.style.color = “#0be881”;
    }
    else if( BMI >= 25 && BMI <= 29.9 ){
        textvalue = "Overweight 😮";
        // result.style.color = “#ff884d”;
    }
    else{
        textvalue = "Mote 😱";
        // result.style.color = “#ff5e57”;
    }
    document.getElementById("Bmitext").innerHTML=`${textvalue}`;
    
});

  