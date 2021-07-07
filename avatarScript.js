function changeAsset(isUp, asset){
    const limits = {oculos:6, calcado:2, calca:3, blusa:8, brinco:2, boca:4, nariz:2, sobrancelha:4};
    if(!asset.localeCompare("cabelo")){
        var cabeloSrc = document.getElementById("cabelo").src;
        var numPos = cabeloSrc.indexOf("cabelo");
        var aux = cabeloSrc.charAt(numPos+6) + cabeloSrc.charAt(numPos+7);
        var number = parseInt(aux);
        number++;
        if(number>13)
            number=1;

        var aux2 = "cabelo".concat(aux);
        if(number<10){    
            document.getElementById("cabelo").src = cabeloSrc.replace(aux2, "cabelo0" + number);
        }else{
            document.getElementById("cabelo").src = cabeloSrc.replace(aux2, "cabelo" + number);

        }
    }
    else if(!asset.localeCompare("corpo")){
        var corpoSrc = document.getElementById("corpo").src;
        var numPos = corpoSrc.indexOf("corpo");
        var aux = corpoSrc.charAt(numPos + 6);
        if(aux === "f"){
            var newSrc = corpoSrc.slice(0,numPos);
            var aux2 = newSrc.concat("corpo_m_cor1.png");
            document.getElementById("corpo").src = aux2;

            var aux3 = newSrc.concat("corpo_m_blusa1_cor1.png");
            document.getElementById("blusa").src = aux3;
            
            var aux4 = newSrc.concat("corpo_m_calca1_cor1.png");             
            document.getElementById("calca").src = aux4;
            
            var aux5 = newSrc.concat("corpo_m_calcado1_cor1.png");
            document.getElementById("calcado").src = aux5;
        }else{
            var newSrc = corpoSrc.slice(0,numPos);
            var aux2 = newSrc.concat("corpo_f_cor1.png");
            document.getElementById("corpo").src = aux2;

            var aux3 = newSrc.concat("corpo_f_blusa1_cor1.png");
            document.getElementById("blusa").src = aux3;
            
            var aux4 = newSrc.concat("corpo_f_calca1_cor1.png");             
            document.getElementById("calca").src = aux4;
            
            var aux5 = newSrc.concat("corpo_f_calcado1_cor1.png");
            document.getElementById("calcado").src = aux5;
        }
    }

    else{
        var assetSrc = document.getElementById(asset).src;
        var numPos = assetSrc.indexOf(asset);
        var aux = assetSrc.charAt(numPos + asset.length);
        var number = parseInt(aux);
        number++;
        if(number>limits[asset])
            number=1;
        var aux2 = asset.concat(aux);
        document.getElementById(asset).src = assetSrc.replace(aux2, asset + number);
    }


    
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

    
    
    //************************************** */
    // else if(!asset.localeCompare("blusa")){
    //     var blusaSrc = document.getElementById("blusa").src;
    //     var numPos = blusaSrc.indexOf("blusa");
    //     aux = blusaSrc.charAt(numPos + 5);
    //     var number = parseInt(aux);
    //     number++;
    //     if(number>8)
    //         number=1;
    //     var aux2 = "blusa".concat(aux);
    //     document.getElementById("blusa").src = blusaSrc.replace(aux2, "blusa" + number);
    // }
    // else if(!asset.localeCompare("calca")){
    //     var calcaSrc = document.getElementById("calca").src;
    //     var numPos = calcaSrc.indexOf("calca");
    //     aux = calcaSrc.charAt(numPos + 5);
    //     var number = parseInt(aux);
    //     number++;
    //     if(number>3)
    //         number=1;
    //     var aux2 = "calca".concat(aux);
    //     document.getElementById("calca").src = calcaSrc.replace(aux2, "calca" + number);
    // }
    // else if(!asset.localeCompare("calcado")){
    //     var calcadoSrc = document.getElementById("calcado").src;
    //     var numPos = calcadoSrc.indexOf("calcado");
    //     aux = calcadoSrc.charAt(numPos + 7);
    //     var number = parseInt(aux);
    //     number++;
    //     if(number>2)
    //         number=1;
    //     var aux2 = "calcado".concat(aux);
    //     document.getElementById("calcado").src = calcadoSrc.replace(aux2, "calcado" + number);
    // }
    // else if(!asset.localeCompare("oculos")){
    //     var assetInput = "oculos";
    //     var oculosSrc = document.getElementById("oculos").src;
    //     var numPos = oculosSrc.indexOf("oculos");
    //     aux = oculosSrc.charAt(numPos + assetInput.length);
    //     var number = parseInt(aux);
    //     number++;
    //     if(number>6)
    //         number=1;
    //     var aux2 = "oculos".concat(aux);
    //     document.getElementById("oculos").src = oculosSrc.replace(aux2, "oculos" + number);
    // }