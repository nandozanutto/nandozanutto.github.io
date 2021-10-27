gdjs.vitoriaCode = {};
gdjs.vitoriaCode.GDbackgroundObjects1= [];
gdjs.vitoriaCode.GDbackgroundObjects2= [];
gdjs.vitoriaCode.GDNewObjectObjects1= [];
gdjs.vitoriaCode.GDNewObjectObjects2= [];
gdjs.vitoriaCode.GDTelaParabensObjects1= [];
gdjs.vitoriaCode.GDTelaParabensObjects2= [];

gdjs.vitoriaCode.conditionTrue_0 = {val:false};
gdjs.vitoriaCode.condition0IsTrue_0 = {val:false};


gdjs.vitoriaCode.mapOfGDgdjs_46vitoriaCode_46GDTelaParabensObjects1Objects = Hashtable.newFrom({"TelaParabens": gdjs.vitoriaCode.GDTelaParabensObjects1});gdjs.vitoriaCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.vitoriaCode.GDTelaParabensObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.vitoriaCode.mapOfGDgdjs_46vitoriaCode_46GDTelaParabensObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.vitoriaCode.GDTelaParabensObjects1.length ;i < len;++i) {
    gdjs.vitoriaCode.GDTelaParabensObjects1[i].setHeight(0.9 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.vitoriaCode.GDTelaParabensObjects1.length ;i < len;++i) {
    gdjs.vitoriaCode.GDTelaParabensObjects1[i].setWidth(0.9 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.vitoriaCode.GDTelaParabensObjects1.length ;i < len;++i) {
    gdjs.vitoriaCode.GDTelaParabensObjects1[i].setCenterPositionInScene(0.5 * gdjs.evtTools.window.getGameResolutionWidth(runtimeScene),0.5 * gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


};

gdjs.vitoriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.vitoriaCode.GDbackgroundObjects1.length = 0;
gdjs.vitoriaCode.GDbackgroundObjects2.length = 0;
gdjs.vitoriaCode.GDNewObjectObjects1.length = 0;
gdjs.vitoriaCode.GDNewObjectObjects2.length = 0;
gdjs.vitoriaCode.GDTelaParabensObjects1.length = 0;
gdjs.vitoriaCode.GDTelaParabensObjects2.length = 0;

gdjs.vitoriaCode.eventsList0(runtimeScene);
return;

}

gdjs['vitoriaCode'] = gdjs.vitoriaCode;
