function changeAsset(isUp, asset){
    const limits = {oculos:7, calcado:2, calca:3, blusa:8, brinco:3, boca:4, nariz:2, sobrancelha:4};
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
            document.getElementById("corpo").src = newSrc + "corpo_m_cor1.png";
            document.getElementById("blusa").src = newSrc + "corpo_m_blusa1_cor1.png";
            document.getElementById("calca").src = newSrc + "corpo_m_calca1_cor1.png";
            document.getElementById("calcado").src = newSrc + "corpo_m_calcado1_cor1.png";
        }else{
            var newSrc = corpoSrc.slice(0,numPos);
            document.getElementById("corpo").src = newSrc + "corpo_f_cor1.png";
            document.getElementById("blusa").src = newSrc + "corpo_f_blusa1_cor1.png";
            document.getElementById("calca").src = newSrc + "corpo_f_calca1_cor1.png";
            document.getElementById("calcado").src = newSrc + "corpo_f_calcado1_cor1.png";
        }
    }else if(!asset.localeCompare("blusa")){
        var assetSrc = document.getElementById(asset).src;
        var numPos = assetSrc.indexOf(asset);
        var aux = assetSrc.charAt(numPos + asset.length);
        var number = parseInt(aux);
        number++;
        if(number>limits[asset])
            number=1;
        var aux2 = asset.concat(aux);
        var newSrc = assetSrc.replace(aux2, asset + number);//trocando blusa
        //**************/
        var numPosCor = assetSrc.indexOf("_cor");
        var aux = assetSrc.charAt(numPosCor + 4);
        var aux2 = ("_cor").concat(aux);
        document.getElementById(asset).src = newSrc.replace(aux2, "_cor" + 1);//resetando cor
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
function changeColor(asset){
    const colorLimits = {cabelo:6, blusa:3, calca:3, calcado:3, corpo:5};
    var limit = colorLimits[asset];
    //blusaF = 3 (blusaF < 4)
    //blusaF = 1 (blusaF >= 4)

    //blusaM = 3 (blusaM < 3)
    //blusaM = 1 (blusaM >= 3)

    var assetSrc = document.getElementById(asset).src;
    var numPos = assetSrc.indexOf("_cor");

    if(!asset.localeCompare("blusa")){
        var corpoSrc = document.getElementById("corpo").src;
        var numPosC = corpoSrc.indexOf("corpo");
        var corpoType = corpoSrc.charAt(numPosC + 6);
        //**************** */
        var blusaSrc = document.getElementById("blusa").src;
        var numPosB = blusaSrc.indexOf("blusa");
        var auxB = assetSrc.charAt(numPosB + 5);
        var numberB = parseInt(auxB);
        if(corpoType === "f" && numberB > 3)
            return;
        if(corpoType === "m" && numberB > 2)
            return;
        
    }

    var aux = assetSrc.charAt(numPos + 4);
    var number = parseInt(aux);
    number++;
    if(number>limit)
        number=1;
    var aux2 = ("_cor").concat(aux);
    document.getElementById(asset).src = assetSrc.replace(aux2, "_cor" + number);
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