gdjs.LoadingExtraCode = {};
gdjs.LoadingExtraCode.localVariables = [];
gdjs.LoadingExtraCode.idToCallbackMap = new Map();
gdjs.LoadingExtraCode.GDLoadingObjects1= [];
gdjs.LoadingExtraCode.GDLoadingObjects2= [];
gdjs.LoadingExtraCode.GDTileObjects1= [];
gdjs.LoadingExtraCode.GDTileObjects2= [];
gdjs.LoadingExtraCode.GDNewTextObjects1= [];
gdjs.LoadingExtraCode.GDNewTextObjects2= [];
gdjs.LoadingExtraCode.GDborder3Objects1= [];
gdjs.LoadingExtraCode.GDborder3Objects2= [];
gdjs.LoadingExtraCode.GDNewSprite2Objects1= [];
gdjs.LoadingExtraCode.GDNewSprite2Objects2= [];
gdjs.LoadingExtraCode.GDStObjects1= [];
gdjs.LoadingExtraCode.GDStObjects2= [];
gdjs.LoadingExtraCode.GDNewSprite3Objects1= [];
gdjs.LoadingExtraCode.GDNewSprite3Objects2= [];
gdjs.LoadingExtraCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.LoadingExtraCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.LoadingExtraCode.GDborderObjects1= [];
gdjs.LoadingExtraCode.GDborderObjects2= [];
gdjs.LoadingExtraCode.GDborder2Objects1= [];
gdjs.LoadingExtraCode.GDborder2Objects2= [];
gdjs.LoadingExtraCode.GDbuttonPlaceObjects1= [];
gdjs.LoadingExtraCode.GDbuttonPlaceObjects2= [];
gdjs.LoadingExtraCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.LoadingExtraCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.LoadingExtraCode.GDbuttonPlace2Objects1= [];
gdjs.LoadingExtraCode.GDbuttonPlace2Objects2= [];
gdjs.LoadingExtraCode.GDRastreadorObjects1= [];
gdjs.LoadingExtraCode.GDRastreadorObjects2= [];


gdjs.LoadingExtraCode.asyncCallback19251092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingExtraCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.LoadingExtraCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.LoadingExtraCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.LoadingExtraCode.GDNewTextObjects2[i].getBehavior("Text").setText(gdjs.LoadingExtraCode.GDNewTextObjects2[i].getBehavior("Text").getText() + ("_________\nAtualize o app para continuar usando.\n_________"));
}
}
gdjs.LoadingExtraCode.localVariables.length = 0;
}
gdjs.LoadingExtraCode.idToCallbackMap.set(19251092, gdjs.LoadingExtraCode.asyncCallback19251092);
gdjs.LoadingExtraCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingExtraCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LoadingExtraCode.asyncCallback19251092(runtimeScene, asyncObjectsList)), 19251092, asyncObjectsList);
}
}

}


};gdjs.LoadingExtraCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Rastrear-Sigiloso-Indentificador", 1, null);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "UIDselecionado", runtimeScene.getScene().getVariables().get("UIDselecionadoParaRastreamento"), gdjs.VariablesContainer.badVariable);
}
{gdjs.VariablesContainer.badVariable.setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Rastrear-Sigiloso", 1, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.VariablesContainer.badVariable.getAsString() == "");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Rastreamento", "Cena", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.updateField("Rastreamento", "Xmouse", gdjs.evtTools.common.toString(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.updateField("Rastreamento", "Ymouse", gdjs.evtTools.common.toString(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0)), gdjs.VariablesContainer.badVariable);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Rastrear-Sigiloso-Admin", 1, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(5).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rastreador"), gdjs.LoadingExtraCode.GDRastreadorObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), false);
}
{for(var i = 0, len = gdjs.LoadingExtraCode.GDRastreadorObjects1.length ;i < len;++i) {
    gdjs.LoadingExtraCode.GDRastreadorObjects1[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "Cena", runtimeScene.getScene().getVariables().get("Cena"), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "Xmouse", runtimeScene.getScene().getVariables().get("Xmouse"), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "Ymouse", runtimeScene.getScene().getVariables().get("Ymouse"), gdjs.VariablesContainer.badVariable);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setString("");
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "HellWeah");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.LoadingExtraCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.LoadingExtraCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.LoadingExtraCode.GDNewTextObjects1[i].getBehavior("Text").setText("________________\nHell Weah Mode   \n     Instaling...\n________________\n" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "HellWeah")) + " Loaded");
}
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "HellWeah");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "HellWeah");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.LoadingExtraCode.GDLoadingObjects1);
{for(var i = 0, len = gdjs.LoadingExtraCode.GDLoadingObjects1.length ;i < len;++i) {
    gdjs.LoadingExtraCode.GDLoadingObjects1[i].SetValue(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "HellWeah"), null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Loading"), gdjs.LoadingExtraCode.GDLoadingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "HellWeah");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingExtraCode.GDLoadingObjects1.length;i<l;++i) {
    if ( gdjs.LoadingExtraCode.GDLoadingObjects1[i].IsFull(null) ) {
        isConditionTrue_0 = true;
        gdjs.LoadingExtraCode.GDLoadingObjects1[k] = gdjs.LoadingExtraCode.GDLoadingObjects1[i];
        ++k;
    }
}
gdjs.LoadingExtraCode.GDLoadingObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "HellWeah");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() == "Update");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadingExtraCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LoadingExtraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingExtraCode.GDLoadingObjects1.length = 0;
gdjs.LoadingExtraCode.GDLoadingObjects2.length = 0;
gdjs.LoadingExtraCode.GDTileObjects1.length = 0;
gdjs.LoadingExtraCode.GDTileObjects2.length = 0;
gdjs.LoadingExtraCode.GDNewTextObjects1.length = 0;
gdjs.LoadingExtraCode.GDNewTextObjects2.length = 0;
gdjs.LoadingExtraCode.GDborder3Objects1.length = 0;
gdjs.LoadingExtraCode.GDborder3Objects2.length = 0;
gdjs.LoadingExtraCode.GDNewSprite2Objects1.length = 0;
gdjs.LoadingExtraCode.GDNewSprite2Objects2.length = 0;
gdjs.LoadingExtraCode.GDStObjects1.length = 0;
gdjs.LoadingExtraCode.GDStObjects2.length = 0;
gdjs.LoadingExtraCode.GDNewSprite3Objects1.length = 0;
gdjs.LoadingExtraCode.GDNewSprite3Objects2.length = 0;
gdjs.LoadingExtraCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.LoadingExtraCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.LoadingExtraCode.GDborderObjects1.length = 0;
gdjs.LoadingExtraCode.GDborderObjects2.length = 0;
gdjs.LoadingExtraCode.GDborder2Objects1.length = 0;
gdjs.LoadingExtraCode.GDborder2Objects2.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlaceObjects1.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlaceObjects2.length = 0;
gdjs.LoadingExtraCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.LoadingExtraCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlace2Objects1.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlace2Objects2.length = 0;
gdjs.LoadingExtraCode.GDRastreadorObjects1.length = 0;
gdjs.LoadingExtraCode.GDRastreadorObjects2.length = 0;

gdjs.LoadingExtraCode.eventsList1(runtimeScene);
gdjs.LoadingExtraCode.GDLoadingObjects1.length = 0;
gdjs.LoadingExtraCode.GDLoadingObjects2.length = 0;
gdjs.LoadingExtraCode.GDTileObjects1.length = 0;
gdjs.LoadingExtraCode.GDTileObjects2.length = 0;
gdjs.LoadingExtraCode.GDNewTextObjects1.length = 0;
gdjs.LoadingExtraCode.GDNewTextObjects2.length = 0;
gdjs.LoadingExtraCode.GDborder3Objects1.length = 0;
gdjs.LoadingExtraCode.GDborder3Objects2.length = 0;
gdjs.LoadingExtraCode.GDNewSprite2Objects1.length = 0;
gdjs.LoadingExtraCode.GDNewSprite2Objects2.length = 0;
gdjs.LoadingExtraCode.GDStObjects1.length = 0;
gdjs.LoadingExtraCode.GDStObjects2.length = 0;
gdjs.LoadingExtraCode.GDNewSprite3Objects1.length = 0;
gdjs.LoadingExtraCode.GDNewSprite3Objects2.length = 0;
gdjs.LoadingExtraCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.LoadingExtraCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.LoadingExtraCode.GDborderObjects1.length = 0;
gdjs.LoadingExtraCode.GDborderObjects2.length = 0;
gdjs.LoadingExtraCode.GDborder2Objects1.length = 0;
gdjs.LoadingExtraCode.GDborder2Objects2.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlaceObjects1.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlaceObjects2.length = 0;
gdjs.LoadingExtraCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.LoadingExtraCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlace2Objects1.length = 0;
gdjs.LoadingExtraCode.GDbuttonPlace2Objects2.length = 0;
gdjs.LoadingExtraCode.GDRastreadorObjects1.length = 0;
gdjs.LoadingExtraCode.GDRastreadorObjects2.length = 0;


return;

}

gdjs['LoadingExtraCode'] = gdjs.LoadingExtraCode;
