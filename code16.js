gdjs._21205_30059Code = {};
gdjs._21205_30059Code.localVariables = [];
gdjs._21205_30059Code.idToCallbackMap = new Map();
gdjs._21205_30059Code.GDNewVideoObjects1= [];
gdjs._21205_30059Code.GDNewVideoObjects2= [];
gdjs._21205_30059Code.GD_9539600_9523376Objects1= [];
gdjs._21205_30059Code.GD_9539600_9523376Objects2= [];
gdjs._21205_30059Code.GDGold_9595CoinObjects1= [];
gdjs._21205_30059Code.GDGold_9595CoinObjects2= [];


gdjs._21205_30059Code.asyncCallback18958260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._21205_30059Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._21205_30059Code.GDNewVideoObjects2);
{for(var i = 0, len = gdjs._21205_30059Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs._21205_30059Code.GDNewVideoObjects2[i].play();
}
}
gdjs._21205_30059Code.localVariables.length = 0;
}
gdjs._21205_30059Code.idToCallbackMap.set(18958260, gdjs._21205_30059Code.asyncCallback18958260);
gdjs._21205_30059Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._21205_30059Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs._21205_30059Code.asyncCallback18958260(runtimeScene, asyncObjectsList)), 18958260, asyncObjectsList);
}
}

}


};gdjs._21205_30059Code.asyncCallback18959668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._21205_30059Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "封面", false);
}
gdjs._21205_30059Code.localVariables.length = 0;
}
gdjs._21205_30059Code.idToCallbackMap.set(18959668, gdjs._21205_30059Code.asyncCallback18959668);
gdjs._21205_30059Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._21205_30059Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._21205_30059Code.asyncCallback18959668(runtimeScene, asyncObjectsList)), 18959668, asyncObjectsList);
}
}

}


};gdjs._21205_30059Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "chiikawa-hachiware_eskcavjB.mp3", false, 100, 1);
}

{ //Subevents
gdjs._21205_30059Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs._21205_30059Code.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21205_30059Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs._21205_30059Code.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._21205_30059Code.GDNewVideoObjects1[k] = gdjs._21205_30059Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs._21205_30059Code.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs._21205_30059Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._21205_30059Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._21205_30059Code.GDNewVideoObjects1.length = 0;
gdjs._21205_30059Code.GDNewVideoObjects2.length = 0;
gdjs._21205_30059Code.GD_9539600_9523376Objects1.length = 0;
gdjs._21205_30059Code.GD_9539600_9523376Objects2.length = 0;
gdjs._21205_30059Code.GDGold_9595CoinObjects1.length = 0;
gdjs._21205_30059Code.GDGold_9595CoinObjects2.length = 0;

gdjs._21205_30059Code.eventsList2(runtimeScene);
gdjs._21205_30059Code.GDNewVideoObjects1.length = 0;
gdjs._21205_30059Code.GDNewVideoObjects2.length = 0;
gdjs._21205_30059Code.GD_9539600_9523376Objects1.length = 0;
gdjs._21205_30059Code.GD_9539600_9523376Objects2.length = 0;
gdjs._21205_30059Code.GDGold_9595CoinObjects1.length = 0;
gdjs._21205_30059Code.GDGold_9595CoinObjects2.length = 0;


return;

}

gdjs['_21205_30059Code'] = gdjs._21205_30059Code;
