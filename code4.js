gdjs._36938_25138_38283_22987Code = {};
gdjs._36938_25138_38283_22987Code.localVariables = [];
gdjs._36938_25138_38283_22987Code.idToCallbackMap = new Map();
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects2= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects3= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects4= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects5= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects6= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects7= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects8= [];
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects9= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects2= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects3= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects4= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects5= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects6= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects7= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects8= [];
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects9= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects1= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects2= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects3= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects4= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects5= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects6= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects7= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects8= [];
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects9= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects1= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects2= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects3= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects4= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects5= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects6= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects7= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects8= [];
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects9= [];


gdjs._36938_25138_38283_22987Code.asyncCallback17954332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects9);

{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects9.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects9[i].getBehavior("Opacity").setOpacity(200);
}
}
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17954332, gdjs._36938_25138_38283_22987Code.asyncCallback17954332);
gdjs._36938_25138_38283_22987Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
for (const obj of gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects8) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17954332(runtimeScene, asyncObjectsList)), 17954332, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17951876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects8);

{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects8.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects8[i].getBehavior("Opacity").setOpacity(150);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/cute.mp3", false, 100, 1);
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17951876, gdjs._36938_25138_38283_22987Code.asyncCallback17951876);
gdjs._36938_25138_38283_22987Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
for (const obj of gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects7) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17951876(runtimeScene, asyncObjectsList)), 17951876, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17953660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects7);

{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects7.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects7[i].getBehavior("Opacity").setOpacity(100);
}
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17953660, gdjs._36938_25138_38283_22987Code.asyncCallback17953660);
gdjs._36938_25138_38283_22987Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
for (const obj of gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects6) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17953660(runtimeScene, asyncObjectsList)), 17953660, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17953220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects6);

{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects6.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects6[i].getBehavior("Opacity").setOpacity(80);
}
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17953220, gdjs._36938_25138_38283_22987Code.asyncCallback17953220);
gdjs._36938_25138_38283_22987Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
for (const obj of gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects5) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17953220(runtimeScene, asyncObjectsList)), 17953220, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17952860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects5);

{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects5.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects5[i].getBehavior("Opacity").setOpacity(60);
}
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17952860, gdjs._36938_25138_38283_22987Code.asyncCallback17952860);
gdjs._36938_25138_38283_22987Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
for (const obj of gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects4) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17952860(runtimeScene, asyncObjectsList)), 17952860, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17952500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects4);

{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects4.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects4[i].getBehavior("Opacity").setOpacity(40);
}
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17952500, gdjs._36938_25138_38283_22987Code.asyncCallback17952500);
gdjs._36938_25138_38283_22987Code.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
for (const obj of gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects3) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17952500(runtimeScene, asyncObjectsList)), 17952500, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17952140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects3);

{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects3[i].getBehavior("Opacity").setOpacity(20);
}
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17952140, gdjs._36938_25138_38283_22987Code.asyncCallback17952140);
gdjs._36938_25138_38283_22987Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
for (const obj of gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects2) asyncObjectsList.addObject("NewSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17952140(runtimeScene, asyncObjectsList)), 17952140, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17951436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects2);
{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects2[i].getBehavior("Opacity").setOpacity(10);
}
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17951436, gdjs._36938_25138_38283_22987Code.asyncCallback17951436);
gdjs._36938_25138_38283_22987Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17951436(runtimeScene, asyncObjectsList)), 17951436, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.asyncCallback17953948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "執行", false);
}
gdjs._36938_25138_38283_22987Code.localVariables.length = 0;
}
gdjs._36938_25138_38283_22987Code.idToCallbackMap.set(17953948, gdjs._36938_25138_38283_22987Code.asyncCallback17953948);
gdjs._36938_25138_38283_22987Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_38283_22987Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._36938_25138_38283_22987Code.asyncCallback17953948(runtimeScene, asyncObjectsList)), 17953948, asyncObjectsList);
}
}

}


};gdjs._36938_25138_38283_22987Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("骰子"), gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects1);
{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects1.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/Whoosh.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1[i].play();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1[k] = gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1 */
{for(var i = 0, len = gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17951540);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1[i].getBehavior("Opacity").getOpacity() == 200 ) {
        isConditionTrue_0 = true;
        gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1[k] = gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}

{ //Subevents
gdjs._36938_25138_38283_22987Code.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs._36938_25138_38283_22987Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects2.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects3.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects4.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects5.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects6.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects7.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects8.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects9.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects2.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects3.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects4.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects5.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects6.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects7.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects8.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects9.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects1.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects2.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects3.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects4.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects5.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects6.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects7.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects8.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects9.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects1.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects2.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects3.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects4.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects5.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects6.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects7.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects8.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects9.length = 0;

gdjs._36938_25138_38283_22987Code.eventsList9(runtimeScene);
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects1.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects2.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects3.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects4.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects5.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects6.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects7.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects8.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewVideoObjects9.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects1.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects2.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects3.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects4.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects5.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects6.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects7.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects8.length = 0;
gdjs._36938_25138_38283_22987Code.GDNewSpriteObjects9.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects1.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects2.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects3.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects4.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects5.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects6.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects7.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects8.length = 0;
gdjs._36938_25138_38283_22987Code.GD_9539600_9523376Objects9.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects1.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects2.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects3.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects4.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects5.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects6.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects7.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects8.length = 0;
gdjs._36938_25138_38283_22987Code.GDGold_9595CoinObjects9.length = 0;


return;

}

gdjs['_36938_25138_38283_22987Code'] = gdjs._36938_25138_38283_22987Code;
