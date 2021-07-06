function changeAsset(isUp, asset){
    var cabeloSrc = document.getElementById("cabelo").src;
    // document.getElementById("cabelo").src = "file:///home/nandozanutto/%C3%81rea%20de%20Trabalho/testAvatar/Assets_customizador/cabelo02_cor01.png"
    // var n = str.search("cabelo");
    document.write(cabeloSrc);
    var aux = cabeloSrc.charAt(89) + cabeloSrc.charAt(90);
    var number = parseInt(aux);
    number = number+1;
    if(number>13)
        number=1;

    var aux2 = "cabelo".concat(aux);
    if(number<10){    
        document.getElementById("cabelo").src = cabeloSrc.replace(aux2, "cabelo0" + number);
    }else{
        document.getElementById("cabelo").src = cabeloSrc.replace(aux2, "cabelo" + number);

    }


    // var n = str.length - 1;
    // if(isUp){
    //     var res = parseInt(str.charAt(n)) + 1
    //     if(res === 4)res=1;
    //     document.getElementById(asset).value = asset + res;    
    // }else{
    //     var res = parseInt(str.charAt(n)) - 1
    //     if(res === 0)res=3;
    //     document.getElementById(asset).value = asset + res;  
    // }
    // var str2 = asset + res;
    // var old = document.getElementById("avatarImage").src
    // document.getElementById("avatarImage").src = old.replace(str, str2);
    
    // document.getElementById("myForm").submit();  
}