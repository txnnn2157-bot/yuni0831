gdjs._36973_36935_21069Code = {};
gdjs._36973_36935_21069Code.localVariables = [];
gdjs._36973_36935_21069Code.idToCallbackMap = new Map();
gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1= [];
gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2= [];
gdjs._36973_36935_21069Code.GDNewSpriteObjects1= [];
gdjs._36973_36935_21069Code.GDNewSpriteObjects2= [];
gdjs._36973_36935_21069Code.GD_95952Objects1= [];
gdjs._36973_36935_21069Code.GD_95952Objects2= [];
gdjs._36973_36935_21069Code.GD_9539600_9523376Objects1= [];
gdjs._36973_36935_21069Code.GD_9539600_9523376Objects2= [];
gdjs._36973_36935_21069Code.GDGold_9595CoinObjects1= [];
gdjs._36973_36935_21069Code.GDGold_9595CoinObjects2= [];


gdjs._36973_36935_21069Code.asyncCallback18525452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36973_36935_21069Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("史萊姆"), gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2);
{for(var i = 0, len = gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2[i].play();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
gdjs._36973_36935_21069Code.localVariables.length = 0;
}
gdjs._36973_36935_21069Code.idToCallbackMap.set(18525452, gdjs._36973_36935_21069Code.asyncCallback18525452);
gdjs._36973_36935_21069Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._36973_36935_21069Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._36973_36935_21069Code.asyncCallback18525452(runtimeScene, asyncObjectsList)), 18525452, asyncObjectsList);
}
}

}


};gdjs._36973_36935_21069Code.asyncCallback18526884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36973_36935_21069Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "戰鬥", false);
}
gdjs._36973_36935_21069Code.localVariables.length = 0;
}
gdjs._36973_36935_21069Code.idToCallbackMap.set(18526884, gdjs._36973_36935_21069Code.asyncCallback18526884);
gdjs._36973_36935_21069Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._36973_36935_21069Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._36973_36935_21069Code.asyncCallback18526884(runtimeScene, asyncObjectsList)), 18526884, asyncObjectsList);
}
}

}


};gdjs._36973_36935_21069Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._36973_36935_21069Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._36973_36935_21069Code.GD_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("史萊姆"), gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1);
{for(var i = 0, len = gdjs._36973_36935_21069Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GDNewSpriteObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._36973_36935_21069Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GD_95952Objects1[i].play();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs._36973_36935_21069Code.GD_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36973_36935_21069Code.GD_95952Objects1.length;i<l;++i) {
    if ( gdjs._36973_36935_21069Code.GD_95952Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._36973_36935_21069Code.GD_95952Objects1[k] = gdjs._36973_36935_21069Code.GD_95952Objects1[i];
        ++k;
    }
}
gdjs._36973_36935_21069Code.GD_95952Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._36973_36935_21069Code.GD_95952Objects1 */
{for(var i = 0, len = gdjs._36973_36935_21069Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GD_95952Objects1[i].pause();
}
}
{for(var i = 0, len = gdjs._36973_36935_21069Code.GD_95952Objects1.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GD_95952Objects1[i].hide();
}
}

{ //Subevents
gdjs._36973_36935_21069Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("史萊姆"), gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1.length;i<l;++i) {
    if ( gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1[k] = gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1[i];
        ++k;
    }
}
gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1 */
{for(var i = 0, len = gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1.length ;i < len;++i) {
    gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1[i].pause();
}
}

{ //Subevents
gdjs._36973_36935_21069Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._36973_36935_21069Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1.length = 0;
gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2.length = 0;
gdjs._36973_36935_21069Code.GDNewSpriteObjects1.length = 0;
gdjs._36973_36935_21069Code.GDNewSpriteObjects2.length = 0;
gdjs._36973_36935_21069Code.GD_95952Objects1.length = 0;
gdjs._36973_36935_21069Code.GD_95952Objects2.length = 0;
gdjs._36973_36935_21069Code.GD_9539600_9523376Objects1.length = 0;
gdjs._36973_36935_21069Code.GD_9539600_9523376Objects2.length = 0;
gdjs._36973_36935_21069Code.GDGold_9595CoinObjects1.length = 0;
gdjs._36973_36935_21069Code.GDGold_9595CoinObjects2.length = 0;

gdjs._36973_36935_21069Code.eventsList2(runtimeScene);
gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects1.length = 0;
gdjs._36973_36935_21069Code.GD_9521490_9533802_9522982Objects2.length = 0;
gdjs._36973_36935_21069Code.GDNewSpriteObjects1.length = 0;
gdjs._36973_36935_21069Code.GDNewSpriteObjects2.length = 0;
gdjs._36973_36935_21069Code.GD_95952Objects1.length = 0;
gdjs._36973_36935_21069Code.GD_95952Objects2.length = 0;
gdjs._36973_36935_21069Code.GD_9539600_9523376Objects1.length = 0;
gdjs._36973_36935_21069Code.GD_9539600_9523376Objects2.length = 0;
gdjs._36973_36935_21069Code.GDGold_9595CoinObjects1.length = 0;
gdjs._36973_36935_21069Code.GDGold_9595CoinObjects2.length = 0;


return;

}

gdjs['_36973_36935_21069Code'] = gdjs._36973_36935_21069Code;
