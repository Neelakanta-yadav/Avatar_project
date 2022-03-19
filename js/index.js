function fun(){
    var name = document.getElementById("uname").value;
    var gen = document.getElementsByName("sex").value;
    if(name==""||name.length==0){
        alert("Enter the name");
        document.getElementById("uname").focus();
    }else if(gen.length==0){
        alert("please mention gender");
    }
    else{
        console.log(name);
        console.log(gen);
        document.getElementById("img_id").src=`https://joeschmoe.io/api/v1/${name}`;
    }
}