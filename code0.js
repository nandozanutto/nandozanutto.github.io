gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDCamisaObjects1= [];
gdjs.New_32sceneCode.GDCamisaObjects2= [];
gdjs.New_32sceneCode.GDScoreObjects1= [];
gdjs.New_32sceneCode.GDScoreObjects2= [];
gdjs.New_32sceneCode.GDTimerTextObjects1= [];
gdjs.New_32sceneCode.GDTimerTextObjects2= [];
gdjs.New_32sceneCode.GDbackgroundObjects1= [];
gdjs.New_32sceneCode.GDbackgroundObjects2= [];
gdjs.New_32sceneCode.GDCamisaBotafogoObjects1= [];
gdjs.New_32sceneCode.GDCamisaBotafogoObjects2= [];
gdjs.New_32sceneCode.GDCamisaFluObjects1= [];
gdjs.New_32sceneCode.GDCamisaFluObjects2= [];
gdjs.New_32sceneCode.GDCamisaVascoObjects1= [];
gdjs.New_32sceneCode.GDCamisaVascoObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaObjects1Objects = Hashtable.newFrom({"Camisa": gdjs.New_32sceneCode.GDCamisaObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaObjects1Objects = Hashtable.newFrom({"Camisa": gdjs.New_32sceneCode.GDCamisaObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaObjects1Objects = Hashtable.newFrom({"Camisa": gdjs.New_32sceneCode.GDCamisaObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaBotafogoObjects1Objects = Hashtable.newFrom({"CamisaBotafogo": gdjs.New_32sceneCode.GDCamisaBotafogoObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaBotafogoObjects1Objects = Hashtable.newFrom({"CamisaBotafogo": gdjs.New_32sceneCode.GDCamisaBotafogoObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaFluObjects1Objects = Hashtable.newFrom({"CamisaFlu": gdjs.New_32sceneCode.GDCamisaFluObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaFluObjects1Objects = Hashtable.newFrom({"CamisaFlu": gdjs.New_32sceneCode.GDCamisaFluObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaVascoObjects1Objects = Hashtable.newFrom({"CamisaVasco": gdjs.New_32sceneCode.GDCamisaVascoObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaVascoObjects1Objects = Hashtable.newFrom({"CamisaVasco": gdjs.New_32sceneCode.GDCamisaVascoObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Camisa"), gdjs.New_32sceneCode.GDCamisaObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCamisaObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCamisaObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCamisaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.New_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CountDown");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.New_32sceneCode.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTimerTextObjects1[i].setString("Tempo: " + gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CountDown") - 30))));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 30, "CountDown");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Camisa"), gdjs.New_32sceneCode.GDCamisaObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaObjects1Objects) < 1;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCamisaObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaObjects1Objects, gdjs.randomFloatInRange(0, 800), gdjs.randomFloatInRange(-(300), 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CamisaBotafogo"), gdjs.New_32sceneCode.GDCamisaBotafogoObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaBotafogoObjects1Objects) < 2;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCamisaBotafogoObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaBotafogoObjects1Objects, gdjs.randomFloatInRange(0, 800), gdjs.randomFloatInRange(-(300), 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CamisaFlu"), gdjs.New_32sceneCode.GDCamisaFluObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaFluObjects1Objects) < 2;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCamisaFluObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaFluObjects1Objects, gdjs.randomFloatInRange(0, 800), gdjs.randomFloatInRange(-(300), 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CamisaVasco"), gdjs.New_32sceneCode.GDCamisaVascoObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaVascoObjects1Objects) < 2;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCamisaVascoObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCamisaVascoObjects1Objects, gdjs.randomFloatInRange(0, 800), gdjs.randomFloatInRange(-(300), 0), "");
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDCamisaObjects1.length = 0;
gdjs.New_32sceneCode.GDCamisaObjects2.length = 0;
gdjs.New_32sceneCode.GDScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDTimerTextObjects1.length = 0;
gdjs.New_32sceneCode.GDTimerTextObjects2.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDbackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDCamisaBotafogoObjects1.length = 0;
gdjs.New_32sceneCode.GDCamisaBotafogoObjects2.length = 0;
gdjs.New_32sceneCode.GDCamisaFluObjects1.length = 0;
gdjs.New_32sceneCode.GDCamisaFluObjects2.length = 0;
gdjs.New_32sceneCode.GDCamisaVascoObjects1.length = 0;
gdjs.New_32sceneCode.GDCamisaVascoObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
