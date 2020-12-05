function TipCalc(){
    var Amount = document.getElementById("billamt").value;
    var TipPercent = document.getElementById("tipper").value;
    TipPercent = TipPercent/100
    var Answer = 0;
    console.log(Amount, TipPercent)
    
    if (TipPercent > 0){
        Answer = Amount * TipPercent;
        document.getElementById("ac").innerHTML ="$"+ Answer.toFixed(2);
    }
    else{
        document.getElementById("ac").innerHTML = "Error!!";
    }
    }

