gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDCloudObjects1= [];
gdjs.New_32sceneCode.GDCloudObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects1= [];
gdjs.New_32sceneCode.GDGrassPlatformObjects2= [];
gdjs.New_32sceneCode.GDSmallBridgeObjects1= [];
gdjs.New_32sceneCode.GDSmallBridgeObjects2= [];
gdjs.New_32sceneCode.GDcoinObjects1= [];
gdjs.New_32sceneCode.GDcoinObjects2= [];
gdjs.New_32sceneCode.GDScoreObjects1= [];
gdjs.New_32sceneCode.GDScoreObjects2= [];
gdjs.New_32sceneCode.GDSlimeObjects1= [];
gdjs.New_32sceneCode.GDSlimeObjects2= [];
gdjs.New_32sceneCode.GDleftObjects1= [];
gdjs.New_32sceneCode.GDleftObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.New_32sceneCode.GDcoinObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.New_32sceneCode.GDSlimeObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs.New_32sceneCode.GDleftObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.New_32sceneCode.GDcoinObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDcoinObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PlatformerTutorialResources/coin.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.New_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDSlimeObjects1[k] = gdjs.New_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].addPolarForce(0, 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs.New_32sceneCode.GDleftObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSlimeObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDleftObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].returnVariable(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.New_32sceneCode.GDSlimeObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariableString(gdjs.New_32sceneCode.GDSlimeObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDSlimeObjects1[k] = gdjs.New_32sceneCode.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeObjects1[i].addPolarForce(180, 100, 0);
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDCloudObjects1.length = 0;
gdjs.New_32sceneCode.GDCloudObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDSmallBridgeObjects1.length = 0;
gdjs.New_32sceneCode.GDSmallBridgeObjects2.length = 0;
gdjs.New_32sceneCode.GDcoinObjects1.length = 0;
gdjs.New_32sceneCode.GDcoinObjects2.length = 0;
gdjs.New_32sceneCode.GDScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDSlimeObjects1.length = 0;
gdjs.New_32sceneCode.GDSlimeObjects2.length = 0;
gdjs.New_32sceneCode.GDleftObjects1.length = 0;
gdjs.New_32sceneCode.GDleftObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
