function myFunction() {
    var name = document.getElementById("name").value;
    var fever=document.getElementById("inputFever").value;
    var pain=document.getElementById("pain").value;
    var runnynose=document.getElementById("runnynose").value;
    var breathing=document.getElementById("breathing").value;
    var loss=document.getElementById("loss").value;
    var cough=document.getElementById("cough").value;
    var gender=document.getElementById('gender').value;
    var score=0
    if (fever>100.4){
        score+=1
    }
    if(pain==2){
        score+=1
    }
    if(runnynose==1){
        score+=1
    }
    if(breathing!=-1){
        score+=1
    }
    if(cough!=0){
        score+=1
    }

    if(score>=3){
        var result='high'
    }
    else{
        var result='low'
    }

    if (gender==0){
         var salutation='Mr. '
    }
    else{
        var salutation='Ms. '
    }

    

    var message=salutation+name+' you may have '+result+' chance of being infected by the corona virus';
    //alert(message);
    console.log(message)
    document.getElementById("demo").innerHTML = message;
    
  }

  