gdjs._36938_25138_32080_264632Code = {};
gdjs._36938_25138_32080_264632Code.localVariables = [];
gdjs._36938_25138_32080_264632Code.idToCallbackMap = new Map();
gdjs._36938_25138_32080_264632Code.GDNewSpriteObjects1= [];
gdjs._36938_25138_32080_264632Code.GDNewSpriteObjects2= [];
gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1= [];
gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects2= [];
gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects1= [];
gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects2= [];
gdjs._36938_25138_32080_264632Code.GD_9539600_9523376Objects1= [];
gdjs._36938_25138_32080_264632Code.GD_9539600_9523376Objects2= [];
gdjs._36938_25138_32080_264632Code.GDGold_9595CoinObjects1= [];
gdjs._36938_25138_32080_264632Code.GDGold_9595CoinObjects2= [];


gdjs._36938_25138_32080_264632Code.asyncCallback18225516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_32080_264632Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewSprite2"), gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("NewSprite3"), gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects2);

{for(var i = 0, len = gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects2.length ;i < len;++i) {
    gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects2.length ;i < len;++i) {
    gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects2[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
gdjs._36938_25138_32080_264632Code.localVariables.length = 0;
}
gdjs._36938_25138_32080_264632Code.idToCallbackMap.set(18225516, gdjs._36938_25138_32080_264632Code.asyncCallback18225516);
gdjs._36938_25138_32080_264632Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_32080_264632Code.localVariables);
for (const obj of gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1) asyncObjectsList.addObject("NewSprite2", obj);
for (const obj of gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects1) asyncObjectsList.addObject("NewSprite3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._36938_25138_32080_264632Code.asyncCallback18225516(runtimeScene, asyncObjectsList)), 18225516, asyncObjectsList);
}
}

}


};gdjs._36938_25138_32080_264632Code.mapOfGDgdjs_9546_959536938_959525138_959532080_9595264632Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1});
gdjs._36938_25138_32080_264632Code.asyncCallback18226908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._36938_25138_32080_264632Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "動畫", false);
}
gdjs._36938_25138_32080_264632Code.localVariables.length = 0;
}
gdjs._36938_25138_32080_264632Code.idToCallbackMap.set(18226908, gdjs._36938_25138_32080_264632Code.asyncCallback18226908);
gdjs._36938_25138_32080_264632Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._36938_25138_32080_264632Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._36938_25138_32080_264632Code.asyncCallback18226908(runtimeScene, asyncObjectsList)), 18226908, asyncObjectsList);
}
}

}


};gdjs._36938_25138_32080_264632Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets/stollenbreadcookie-youtube_Z0ViZTQL.mp3", 1, true, 60, 1);
}
{for(var i = 0, len = gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects1[i].hide();
}
}

{ //Subevents
gdjs._36938_25138_32080_264632Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36938_25138_32080_264632Code.mapOfGDgdjs_9546_959536938_959525138_959532080_9595264632Code_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19627476);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1 */
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/Deng.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs._36938_25138_32080_264632Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._36938_25138_32080_264632Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._36938_25138_32080_264632Code.GDNewSpriteObjects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSpriteObjects2.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects2.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects2.length = 0;
gdjs._36938_25138_32080_264632Code.GD_9539600_9523376Objects1.length = 0;
gdjs._36938_25138_32080_264632Code.GD_9539600_9523376Objects2.length = 0;
gdjs._36938_25138_32080_264632Code.GDGold_9595CoinObjects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDGold_9595CoinObjects2.length = 0;

gdjs._36938_25138_32080_264632Code.eventsList2(runtimeScene);
gdjs._36938_25138_32080_264632Code.GDNewSpriteObjects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSpriteObjects2.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite2Objects2.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDNewSprite3Objects2.length = 0;
gdjs._36938_25138_32080_264632Code.GD_9539600_9523376Objects1.length = 0;
gdjs._36938_25138_32080_264632Code.GD_9539600_9523376Objects2.length = 0;
gdjs._36938_25138_32080_264632Code.GDGold_9595CoinObjects1.length = 0;
gdjs._36938_25138_32080_264632Code.GDGold_9595CoinObjects2.length = 0;


return;

}

gdjs['_36938_25138_32080_264632Code'] = gdjs._36938_25138_32080_264632Code;
