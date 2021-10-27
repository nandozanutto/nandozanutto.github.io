gdjs.derrotaCode = {};
gdjs.derrotaCode.GDGameOverObjects1= [];
gdjs.derrotaCode.GDGameOverObjects2= [];
gdjs.derrotaCode.GDbackgroundObjects1= [];
gdjs.derrotaCode.GDbackgroundObjects2= [];
gdjs.derrotaCode.GDTelaGameOverObjects1= [];
gdjs.derrotaCode.GDTelaGameOverObjects2= [];
gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1= [];
gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects2= [];

gdjs.derrotaCode.conditionTrue_0 = {val:false};
gdjs.derrotaCode.condition0IsTrue_0 = {val:false};


gdjs.derrotaCode.mapOfGDgdjs_46derrotaCode_46GDTelaNaoFoidessaVezObjects1Objects = Hashtable.newFrom({"TelaNaoFoidessaVez": gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1});gdjs.derrotaCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{


{
gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.derrotaCode.mapOfGDgdjs_46derrotaCode_46GDTelaNaoFoidessaVezObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1.length ;i < len;++i) {
    gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1[i].setWidth(0.9 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1.length ;i < len;++i) {
    gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1[i].setHeight(0.9 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1.length ;i < len;++i) {
    gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1[i].setCenterPositionInScene(0.5 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene),0.5 * gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


};

gdjs.derrotaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.derrotaCode.GDGameOverObjects1.length = 0;
gdjs.derrotaCode.GDGameOverObjects2.length = 0;
gdjs.derrotaCode.GDbackgroundObjects1.length = 0;
gdjs.derrotaCode.GDbackgroundObjects2.length = 0;
gdjs.derrotaCode.GDTelaGameOverObjects1.length = 0;
gdjs.derrotaCode.GDTelaGameOverObjects2.length = 0;
gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects1.length = 0;
gdjs.derrotaCode.GDTelaNaoFoidessaVezObjects2.length = 0;

gdjs.derrotaCode.eventsList0(runtimeScene);
return;

}

gdjs['derrotaCode'] = gdjs.derrotaCode;
