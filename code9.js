gdjs._31934_38728Code = {};
gdjs._31934_38728Code.localVariables = [];
gdjs._31934_38728Code.idToCallbackMap = new Map();
gdjs._31934_38728Code.GDNewSpriteObjects1= [];
gdjs._31934_38728Code.GDNewSpriteObjects2= [];
gdjs._31934_38728Code.GDNewSprite2Objects1= [];
gdjs._31934_38728Code.GDNewSprite2Objects2= [];
gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1= [];
gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2= [];
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1= [];
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects2= [];
gdjs._31934_38728Code.GDNewVideoObjects1= [];
gdjs._31934_38728Code.GDNewVideoObjects2= [];
gdjs._31934_38728Code.GD_9521345_9529255Objects1= [];
gdjs._31934_38728Code.GD_9521345_9529255Objects2= [];
gdjs._31934_38728Code.GD_9520142Objects1= [];
gdjs._31934_38728Code.GD_9520142Objects2= [];
gdjs._31934_38728Code.GD_9536984_9525799Objects1= [];
gdjs._31934_38728Code.GD_9536984_9525799Objects2= [];
gdjs._31934_38728Code.GD_9527231_9526371Objects1= [];
gdjs._31934_38728Code.GD_9527231_9526371Objects2= [];
gdjs._31934_38728Code.GD_9521629_9536939Objects1= [];
gdjs._31934_38728Code.GD_9521629_9536939Objects2= [];
gdjs._31934_38728Code.GD_9536984_9521629Objects1= [];
gdjs._31934_38728Code.GD_9536984_9521629Objects2= [];
gdjs._31934_38728Code.GD_9536984_9527231Objects1= [];
gdjs._31934_38728Code.GD_9536984_9527231Objects2= [];
gdjs._31934_38728Code.GD_9539600_9523376Objects1= [];
gdjs._31934_38728Code.GD_9539600_9523376Objects2= [];
gdjs._31934_38728Code.GDGold_9595CoinObjects1= [];
gdjs._31934_38728Code.GDGold_9595CoinObjects2= [];


gdjs._31934_38728Code.asyncCallback18341452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("精靈文"), gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2);
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2[i].play();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}
gdjs._31934_38728Code.localVariables.length = 0;
}
gdjs._31934_38728Code.idToCallbackMap.set(18341452, gdjs._31934_38728Code.asyncCallback18341452);
gdjs._31934_38728Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._31934_38728Code.asyncCallback18341452(runtimeScene, asyncObjectsList)), 18341452, asyncObjectsList);
}
}

}


};gdjs._31934_38728Code.asyncCallback18342956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("卡片"), gdjs._31934_38728Code.GD_9521345_9529255Objects2);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets/cute4.mp3", 1, true, 100, 1);
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9521345_9529255Objects2.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9521345_9529255Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9521345_9529255Objects2.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9521345_9529255Objects2[i].play();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}
gdjs._31934_38728Code.localVariables.length = 0;
}
gdjs._31934_38728Code.idToCallbackMap.set(18342956, gdjs._31934_38728Code.asyncCallback18342956);
gdjs._31934_38728Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._31934_38728Code.asyncCallback18342956(runtimeScene, asyncObjectsList)), 18342956, asyncObjectsList);
}
}

}


};gdjs._31934_38728Code.asyncCallback18344772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("亮"), gdjs._31934_38728Code.GD_9520142Objects2);

gdjs.copyArray(runtimeScene.getObjects("選擇"), gdjs._31934_38728Code.GD_9536984_9525799Objects2);
{for(var i = 0, len = gdjs._31934_38728Code.GD_9520142Objects2.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9520142Objects2[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9536984_9525799Objects2.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9536984_9525799Objects2[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}
gdjs._31934_38728Code.localVariables.length = 0;
}
gdjs._31934_38728Code.idToCallbackMap.set(18344772, gdjs._31934_38728Code.asyncCallback18344772);
gdjs._31934_38728Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
for (const obj of gdjs._31934_38728Code.GD_9520142Objects1) asyncObjectsList.addObject("亮", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs._31934_38728Code.asyncCallback18344772(runtimeScene, asyncObjectsList)), 18344772, asyncObjectsList);
}
}

}


};gdjs._31934_38728Code.mapOfGDgdjs_9546_959531934_959538728Code_9546GD_95959527231_95959526371Objects1Objects = Hashtable.newFrom({"機會": gdjs._31934_38728Code.GD_9527231_9526371Objects1});
gdjs._31934_38728Code.asyncCallback18346820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "機會", false);
}
gdjs._31934_38728Code.localVariables.length = 0;
}
gdjs._31934_38728Code.idToCallbackMap.set(18346820, gdjs._31934_38728Code.asyncCallback18346820);
gdjs._31934_38728Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs._31934_38728Code.asyncCallback18346820(runtimeScene, asyncObjectsList)), 18346820, asyncObjectsList);
}
}

}


};gdjs._31934_38728Code.mapOfGDgdjs_9546_959531934_959538728Code_9546GD_95959521629_95959536939Objects1Objects = Hashtable.newFrom({"命運": gdjs._31934_38728Code.GD_9521629_9536939Objects1});
gdjs._31934_38728Code.asyncCallback18348148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "命運", false);
}
gdjs._31934_38728Code.localVariables.length = 0;
}
gdjs._31934_38728Code.idToCallbackMap.set(18348148, gdjs._31934_38728Code.asyncCallback18348148);
gdjs._31934_38728Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._31934_38728Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs._31934_38728Code.asyncCallback18348148(runtimeScene, asyncObjectsList)), 18348148, asyncObjectsList);
}
}

}


};gdjs._31934_38728Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("亮"), gdjs._31934_38728Code.GD_9520142Objects1);
gdjs.copyArray(runtimeScene.getObjects("卡片"), gdjs._31934_38728Code.GD_9521345_9529255Objects1);
gdjs.copyArray(runtimeScene.getObjects("精靈文"), gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1);
gdjs.copyArray(runtimeScene.getObjects("選命"), gdjs._31934_38728Code.GD_9536984_9521629Objects1);
gdjs.copyArray(runtimeScene.getObjects("選擇"), gdjs._31934_38728Code.GD_9536984_9525799Objects1);
gdjs.copyArray(runtimeScene.getObjects("選機"), gdjs._31934_38728Code.GD_9536984_9527231Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9521345_9529255Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9521345_9529255Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9520142Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9520142Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9536984_9525799Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9536984_9525799Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9536984_9521629Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9536984_9521629Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9536984_9527231Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9536984_9527231Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("精靈飛"), gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1);
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i].setX(-280);
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i].getBehavior("Tween").addObjectPositionXTween2("flyin", 220, "easeOutQuad", 0.5, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/fly.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("精靈飛"), gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i].getBehavior("Tween").hasFinished("flyin") ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[k] = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18331916);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1 */
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i].play();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("精靈飛"), gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[k] = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1 */
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1[i].pause();
}
}

{ //Subevents
gdjs._31934_38728Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("精靈文"), gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1[k] = gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11219004);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1 */
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1[i].pause();
}
}

{ //Subevents
gdjs._31934_38728Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("卡片"), gdjs._31934_38728Code.GD_9521345_9529255Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_9521345_9529255Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_9521345_9529255Objects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_9521345_9529255Objects1[k] = gdjs._31934_38728Code.GD_9521345_9529255Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_9521345_9529255Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("亮"), gdjs._31934_38728Code.GD_9520142Objects1);
/* Reuse gdjs._31934_38728Code.GD_9521345_9529255Objects1 */
{for(var i = 0, len = gdjs._31934_38728Code.GD_9521345_9529255Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9521345_9529255Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9521345_9529255Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9521345_9529255Objects1[i].pause();
}
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9520142Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9520142Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("亮"), gdjs._31934_38728Code.GD_9520142Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31934_38728Code.GD_9520142Objects1.length;i<l;++i) {
    if ( gdjs._31934_38728Code.GD_9520142Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs._31934_38728Code.GD_9520142Objects1[k] = gdjs._31934_38728Code.GD_9520142Objects1[i];
        ++k;
    }
}
gdjs._31934_38728Code.GD_9520142Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._31934_38728Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("機會"), gdjs._31934_38728Code.GD_9527231_9526371Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31934_38728Code.mapOfGDgdjs_9546_959531934_959538728Code_9546GD_95959527231_95959526371Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10017404);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("選機"), gdjs._31934_38728Code.GD_9536984_9527231Objects1);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/bring閃亮音效 YouTuber常用素材 無版權 綜藝篇 - 音效 素材庫 (youtube).mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9536984_9527231Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9536984_9527231Objects1[i].hide(false);
}
}

{ //Subevents
gdjs._31934_38728Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("命運"), gdjs._31934_38728Code.GD_9521629_9536939Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31934_38728Code.mapOfGDgdjs_9546_959531934_959538728Code_9546GD_95959521629_95959536939Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18199676);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("選命"), gdjs._31934_38728Code.GD_9536984_9521629Objects1);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/bring閃亮音效 YouTuber常用素材 無版權 綜藝篇 - 音效 素材庫 (youtube).mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs._31934_38728Code.GD_9536984_9521629Objects1.length ;i < len;++i) {
    gdjs._31934_38728Code.GD_9536984_9521629Objects1[i].hide(false);
}
}

{ //Subevents
gdjs._31934_38728Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._31934_38728Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._31934_38728Code.GDNewSpriteObjects1.length = 0;
gdjs._31934_38728Code.GDNewSpriteObjects2.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects2.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects2.length = 0;
gdjs._31934_38728Code.GDNewVideoObjects1.length = 0;
gdjs._31934_38728Code.GDNewVideoObjects2.length = 0;
gdjs._31934_38728Code.GD_9521345_9529255Objects1.length = 0;
gdjs._31934_38728Code.GD_9521345_9529255Objects2.length = 0;
gdjs._31934_38728Code.GD_9520142Objects1.length = 0;
gdjs._31934_38728Code.GD_9520142Objects2.length = 0;
gdjs._31934_38728Code.GD_9536984_9525799Objects1.length = 0;
gdjs._31934_38728Code.GD_9536984_9525799Objects2.length = 0;
gdjs._31934_38728Code.GD_9527231_9526371Objects1.length = 0;
gdjs._31934_38728Code.GD_9527231_9526371Objects2.length = 0;
gdjs._31934_38728Code.GD_9521629_9536939Objects1.length = 0;
gdjs._31934_38728Code.GD_9521629_9536939Objects2.length = 0;
gdjs._31934_38728Code.GD_9536984_9521629Objects1.length = 0;
gdjs._31934_38728Code.GD_9536984_9521629Objects2.length = 0;
gdjs._31934_38728Code.GD_9536984_9527231Objects1.length = 0;
gdjs._31934_38728Code.GD_9536984_9527231Objects2.length = 0;
gdjs._31934_38728Code.GD_9539600_9523376Objects1.length = 0;
gdjs._31934_38728Code.GD_9539600_9523376Objects2.length = 0;
gdjs._31934_38728Code.GDGold_9595CoinObjects1.length = 0;
gdjs._31934_38728Code.GDGold_9595CoinObjects2.length = 0;

gdjs._31934_38728Code.eventsList5(runtimeScene);
gdjs._31934_38728Code.GDNewSpriteObjects1.length = 0;
gdjs._31934_38728Code.GDNewSpriteObjects2.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects1.length = 0;
gdjs._31934_38728Code.GDNewSprite2Objects2.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects1.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9525991Objects2.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects1.length = 0;
gdjs._31934_38728Code.GD_9531934_9538728_9539131Objects2.length = 0;
gdjs._31934_38728Code.GDNewVideoObjects1.length = 0;
gdjs._31934_38728Code.GDNewVideoObjects2.length = 0;
gdjs._31934_38728Code.GD_9521345_9529255Objects1.length = 0;
gdjs._31934_38728Code.GD_9521345_9529255Objects2.length = 0;
gdjs._31934_38728Code.GD_9520142Objects1.length = 0;
gdjs._31934_38728Code.GD_9520142Objects2.length = 0;
gdjs._31934_38728Code.GD_9536984_9525799Objects1.length = 0;
gdjs._31934_38728Code.GD_9536984_9525799Objects2.length = 0;
gdjs._31934_38728Code.GD_9527231_9526371Objects1.length = 0;
gdjs._31934_38728Code.GD_9527231_9526371Objects2.length = 0;
gdjs._31934_38728Code.GD_9521629_9536939Objects1.length = 0;
gdjs._31934_38728Code.GD_9521629_9536939Objects2.length = 0;
gdjs._31934_38728Code.GD_9536984_9521629Objects1.length = 0;
gdjs._31934_38728Code.GD_9536984_9521629Objects2.length = 0;
gdjs._31934_38728Code.GD_9536984_9527231Objects1.length = 0;
gdjs._31934_38728Code.GD_9536984_9527231Objects2.length = 0;
gdjs._31934_38728Code.GD_9539600_9523376Objects1.length = 0;
gdjs._31934_38728Code.GD_9539600_9523376Objects2.length = 0;
gdjs._31934_38728Code.GDGold_9595CoinObjects1.length = 0;
gdjs._31934_38728Code.GDGold_9595CoinObjects2.length = 0;


return;

}

gdjs['_31934_38728Code'] = gdjs._31934_38728Code;
