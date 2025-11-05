gdjs.passCode = {};
gdjs.passCode.localVariables = [];
gdjs.passCode.idToCallbackMap = new Map();
gdjs.passCode.GDNewTextInputObjects1= [];
gdjs.passCode.GDNewTextInputObjects2= [];
gdjs.passCode.GDNewTextInputObjects3= [];
gdjs.passCode.GDNewTextObjects1= [];
gdjs.passCode.GDNewTextObjects2= [];
gdjs.passCode.GDNewTextObjects3= [];
gdjs.passCode.GDborder3Objects1= [];
gdjs.passCode.GDborder3Objects2= [];
gdjs.passCode.GDborder3Objects3= [];
gdjs.passCode.GDNewSprite2Objects1= [];
gdjs.passCode.GDNewSprite2Objects2= [];
gdjs.passCode.GDNewSprite2Objects3= [];
gdjs.passCode.GDStObjects1= [];
gdjs.passCode.GDStObjects2= [];
gdjs.passCode.GDStObjects3= [];
gdjs.passCode.GDNewSprite3Objects1= [];
gdjs.passCode.GDNewSprite3Objects2= [];
gdjs.passCode.GDNewSprite3Objects3= [];
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects3= [];
gdjs.passCode.GDborderObjects1= [];
gdjs.passCode.GDborderObjects2= [];
gdjs.passCode.GDborderObjects3= [];
gdjs.passCode.GDborder2Objects1= [];
gdjs.passCode.GDborder2Objects2= [];
gdjs.passCode.GDborder2Objects3= [];
gdjs.passCode.GDbuttonPlaceObjects1= [];
gdjs.passCode.GDbuttonPlaceObjects2= [];
gdjs.passCode.GDbuttonPlaceObjects3= [];
gdjs.passCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.passCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.passCode.GDGreyButtonWithShadow3Objects3= [];
gdjs.passCode.GDbuttonPlace2Objects1= [];
gdjs.passCode.GDbuttonPlace2Objects2= [];
gdjs.passCode.GDbuttonPlace2Objects3= [];
gdjs.passCode.GDRastreadorObjects1= [];
gdjs.passCode.GDRastreadorObjects2= [];
gdjs.passCode.GDRastreadorObjects3= [];


gdjs.passCode.asyncCallback17857580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.passCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "tela de quiosque");
}
gdjs.passCode.localVariables.length = 0;
}
gdjs.passCode.idToCallbackMap.set(17857580, gdjs.passCode.asyncCallback17857580);
gdjs.passCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.passCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.passCode.asyncCallback17857580(runtimeScene, asyncObjectsList)), 17857580, asyncObjectsList);
}
}

}


};gdjs.passCode.asyncCallback17371764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.passCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("NewText"), gdjs.passCode.GDNewTextObjects2);

{for(var i = 0, len = gdjs.passCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.passCode.GDNewTextObjects2[i].getBehavior("Text").setText("Ok...");
}
}

{ //Subevents
gdjs.passCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.passCode.localVariables.length = 0;
}
gdjs.passCode.idToCallbackMap.set(17371764, gdjs.passCode.asyncCallback17371764);
gdjs.passCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.passCode.localVariables);
for (const obj of gdjs.passCode.GDNewTextObjects1) asyncObjectsList.addObject("NewText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.passCode.asyncCallback17371764(runtimeScene, asyncObjectsList)), 17371764, asyncObjectsList);
}
}

}


};gdjs.passCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.passCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.passCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.passCode.GDNewTextInputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.passCode.GDNewTextInputObjects1[k] = gdjs.passCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.passCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.passCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.passCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "26" ) {
        isConditionTrue_0 = true;
        gdjs.passCode.GDNewTextInputObjects1[k] = gdjs.passCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.passCode.GDNewTextInputObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.passCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.passCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.passCode.GDNewTextObjects1[i].getBehavior("Text").setText("Não, LOL");
}
}

{ //Subevents
gdjs.passCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.passCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.passCode.GDNewTextInputObjects1.length = 0;
gdjs.passCode.GDNewTextInputObjects2.length = 0;
gdjs.passCode.GDNewTextInputObjects3.length = 0;
gdjs.passCode.GDNewTextObjects1.length = 0;
gdjs.passCode.GDNewTextObjects2.length = 0;
gdjs.passCode.GDNewTextObjects3.length = 0;
gdjs.passCode.GDborder3Objects1.length = 0;
gdjs.passCode.GDborder3Objects2.length = 0;
gdjs.passCode.GDborder3Objects3.length = 0;
gdjs.passCode.GDNewSprite2Objects1.length = 0;
gdjs.passCode.GDNewSprite2Objects2.length = 0;
gdjs.passCode.GDNewSprite2Objects3.length = 0;
gdjs.passCode.GDStObjects1.length = 0;
gdjs.passCode.GDStObjects2.length = 0;
gdjs.passCode.GDStObjects3.length = 0;
gdjs.passCode.GDNewSprite3Objects1.length = 0;
gdjs.passCode.GDNewSprite3Objects2.length = 0;
gdjs.passCode.GDNewSprite3Objects3.length = 0;
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects3.length = 0;
gdjs.passCode.GDborderObjects1.length = 0;
gdjs.passCode.GDborderObjects2.length = 0;
gdjs.passCode.GDborderObjects3.length = 0;
gdjs.passCode.GDborder2Objects1.length = 0;
gdjs.passCode.GDborder2Objects2.length = 0;
gdjs.passCode.GDborder2Objects3.length = 0;
gdjs.passCode.GDbuttonPlaceObjects1.length = 0;
gdjs.passCode.GDbuttonPlaceObjects2.length = 0;
gdjs.passCode.GDbuttonPlaceObjects3.length = 0;
gdjs.passCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.passCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.passCode.GDGreyButtonWithShadow3Objects3.length = 0;
gdjs.passCode.GDbuttonPlace2Objects1.length = 0;
gdjs.passCode.GDbuttonPlace2Objects2.length = 0;
gdjs.passCode.GDbuttonPlace2Objects3.length = 0;
gdjs.passCode.GDRastreadorObjects1.length = 0;
gdjs.passCode.GDRastreadorObjects2.length = 0;
gdjs.passCode.GDRastreadorObjects3.length = 0;

gdjs.passCode.eventsList2(runtimeScene);
gdjs.passCode.GDNewTextInputObjects1.length = 0;
gdjs.passCode.GDNewTextInputObjects2.length = 0;
gdjs.passCode.GDNewTextInputObjects3.length = 0;
gdjs.passCode.GDNewTextObjects1.length = 0;
gdjs.passCode.GDNewTextObjects2.length = 0;
gdjs.passCode.GDNewTextObjects3.length = 0;
gdjs.passCode.GDborder3Objects1.length = 0;
gdjs.passCode.GDborder3Objects2.length = 0;
gdjs.passCode.GDborder3Objects3.length = 0;
gdjs.passCode.GDNewSprite2Objects1.length = 0;
gdjs.passCode.GDNewSprite2Objects2.length = 0;
gdjs.passCode.GDNewSprite2Objects3.length = 0;
gdjs.passCode.GDStObjects1.length = 0;
gdjs.passCode.GDStObjects2.length = 0;
gdjs.passCode.GDStObjects3.length = 0;
gdjs.passCode.GDNewSprite3Objects1.length = 0;
gdjs.passCode.GDNewSprite3Objects2.length = 0;
gdjs.passCode.GDNewSprite3Objects3.length = 0;
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.passCode.GDIcone_9595configura_95231_95227oObjects3.length = 0;
gdjs.passCode.GDborderObjects1.length = 0;
gdjs.passCode.GDborderObjects2.length = 0;
gdjs.passCode.GDborderObjects3.length = 0;
gdjs.passCode.GDborder2Objects1.length = 0;
gdjs.passCode.GDborder2Objects2.length = 0;
gdjs.passCode.GDborder2Objects3.length = 0;
gdjs.passCode.GDbuttonPlaceObjects1.length = 0;
gdjs.passCode.GDbuttonPlaceObjects2.length = 0;
gdjs.passCode.GDbuttonPlaceObjects3.length = 0;
gdjs.passCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.passCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.passCode.GDGreyButtonWithShadow3Objects3.length = 0;
gdjs.passCode.GDbuttonPlace2Objects1.length = 0;
gdjs.passCode.GDbuttonPlace2Objects2.length = 0;
gdjs.passCode.GDbuttonPlace2Objects3.length = 0;
gdjs.passCode.GDRastreadorObjects1.length = 0;
gdjs.passCode.GDRastreadorObjects2.length = 0;
gdjs.passCode.GDRastreadorObjects3.length = 0;


return;

}

gdjs['passCode'] = gdjs.passCode;
