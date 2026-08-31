gdjs._27161Code = {};
gdjs._27161Code.localVariables = [];
gdjs._27161Code.idToCallbackMap = new Map();
gdjs._27161Code.GDNewSpriteObjects1= [];
gdjs._27161Code.GDNewSpriteObjects2= [];
gdjs._27161Code.GD_9539600_9523376Objects1= [];
gdjs._27161Code.GD_9539600_9523376Objects2= [];
gdjs._27161Code.GDGold_9595CoinObjects1= [];
gdjs._27161Code.GDGold_9595CoinObjects2= [];


gdjs._27161Code.asyncCallback17687220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._27161Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "封面", false);
}
gdjs._27161Code.localVariables.length = 0;
}
gdjs._27161Code.idToCallbackMap.set(17687220, gdjs._27161Code.asyncCallback17687220);
gdjs._27161Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._27161Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs._27161Code.asyncCallback17687220(runtimeScene, asyncObjectsList)), 17687220, asyncObjectsList);
}
}

}


};gdjs._27161Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/start.mp3", false, 100, 1);
}

{ //Subevents
gdjs._27161Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._27161Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._27161Code.GDNewSpriteObjects1.length = 0;
gdjs._27161Code.GDNewSpriteObjects2.length = 0;
gdjs._27161Code.GD_9539600_9523376Objects1.length = 0;
gdjs._27161Code.GD_9539600_9523376Objects2.length = 0;
gdjs._27161Code.GDGold_9595CoinObjects1.length = 0;
gdjs._27161Code.GDGold_9595CoinObjects2.length = 0;

gdjs._27161Code.eventsList1(runtimeScene);
gdjs._27161Code.GDNewSpriteObjects1.length = 0;
gdjs._27161Code.GDNewSpriteObjects2.length = 0;
gdjs._27161Code.GD_9539600_9523376Objects1.length = 0;
gdjs._27161Code.GD_9539600_9523376Objects2.length = 0;
gdjs._27161Code.GDGold_9595CoinObjects1.length = 0;
gdjs._27161Code.GDGold_9595CoinObjects2.length = 0;


return;

}

gdjs['_27161Code'] = gdjs._27161Code;
