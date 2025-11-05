gdjs.DebugCode = {};
gdjs.DebugCode.localVariables = [];
gdjs.DebugCode.idToCallbackMap = new Map();
gdjs.DebugCode.GDGreenButtonWithShadowObjects1= [];
gdjs.DebugCode.GDGreenButtonWithShadowObjects2= [];
gdjs.DebugCode.GDoutputObjects1= [];
gdjs.DebugCode.GDoutputObjects2= [];
gdjs.DebugCode.GDinputObjects1= [];
gdjs.DebugCode.GDinputObjects2= [];
gdjs.DebugCode.GDssObjects1= [];
gdjs.DebugCode.GDssObjects2= [];
gdjs.DebugCode.GDOnScreenControlsButtonObjects1= [];
gdjs.DebugCode.GDOnScreenControlsButtonObjects2= [];
gdjs.DebugCode.GDHell_9595WeahObjects1= [];
gdjs.DebugCode.GDHell_9595WeahObjects2= [];
gdjs.DebugCode.GDborder3Objects1= [];
gdjs.DebugCode.GDborder3Objects2= [];
gdjs.DebugCode.GDNewSprite2Objects1= [];
gdjs.DebugCode.GDNewSprite2Objects2= [];
gdjs.DebugCode.GDStObjects1= [];
gdjs.DebugCode.GDStObjects2= [];
gdjs.DebugCode.GDNewSprite3Objects1= [];
gdjs.DebugCode.GDNewSprite3Objects2= [];
gdjs.DebugCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.DebugCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.DebugCode.GDborderObjects1= [];
gdjs.DebugCode.GDborderObjects2= [];
gdjs.DebugCode.GDborder2Objects1= [];
gdjs.DebugCode.GDborder2Objects2= [];
gdjs.DebugCode.GDbuttonPlaceObjects1= [];
gdjs.DebugCode.GDbuttonPlaceObjects2= [];
gdjs.DebugCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.DebugCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.DebugCode.GDbuttonPlace2Objects1= [];
gdjs.DebugCode.GDbuttonPlace2Objects2= [];
gdjs.DebugCode.GDRastreadorObjects1= [];
gdjs.DebugCode.GDRastreadorObjects2= [];


gdjs.DebugCode.asyncCallback19060732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DebugCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("output"), gdjs.DebugCode.GDoutputObjects2);
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, "Content.json", (( gdjs.DebugCode.GDoutputObjects2.length === 0 ) ? "" :gdjs.DebugCode.GDoutputObjects2[0].getBehavior("Text").getText()), null);
}
gdjs.DebugCode.localVariables.length = 0;
}
gdjs.DebugCode.idToCallbackMap.set(19060732, gdjs.DebugCode.asyncCallback19060732);
gdjs.DebugCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DebugCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.DebugCode.asyncCallback19060732(runtimeScene, asyncObjectsList)), 19060732, asyncObjectsList);
}
}

}


};gdjs.DebugCode.asyncCallback19069004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.DebugCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("output"), gdjs.DebugCode.GDoutputObjects2);
{for(var i = 0, len = gdjs.DebugCode.GDoutputObjects2.length ;i < len;++i) {
    gdjs.DebugCode.GDoutputObjects2[i].getBehavior("Text").setText(gdjs.DebugCode.GDoutputObjects2[i].getBehavior("Text").getText() + ("\nNome: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString()));
}
}
gdjs.DebugCode.localVariables.length = 0;
}
gdjs.DebugCode.idToCallbackMap.set(19069004, gdjs.DebugCode.asyncCallback19069004);
gdjs.DebugCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.DebugCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.DebugCode.asyncCallback19069004(runtimeScene, asyncObjectsList)), 19069004, asyncObjectsList);
}
}

}


};gdjs.DebugCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.DebugCode.GDGreenButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DebugCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.DebugCode.GDGreenButtonWithShadowObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DebugCode.GDGreenButtonWithShadowObjects1[k] = gdjs.DebugCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.DebugCode.GDGreenButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.DebugCode.eventsList0(runtimeScene);} //End of subevents
}

}


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
gdjs.copyArray(runtimeScene.getObjects("Rastreador"), gdjs.DebugCode.GDRastreadorObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), false);
}
{for(var i = 0, len = gdjs.DebugCode.GDRastreadorObjects1.length ;i < len;++i) {
    gdjs.DebugCode.GDRastreadorObjects1[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
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
{
gdjs.copyArray(runtimeScene.getObjects("output"), gdjs.DebugCode.GDoutputObjects1);
{for(var i = 0, len = gdjs.DebugCode.GDoutputObjects1.length ;i < len;++i) {
    gdjs.DebugCode.GDoutputObjects1[i].getBehavior("Text").setText("Email:" + gdjs.evtTools.firebaseTools.auth.userManagement.getEmail() + "\nHora da criação de conta: " + gdjs.evtTools.firebaseTools.auth.userManagement.getCreationTime() + "\nId locativo de Usuario: " + gdjs.evtTools.firebaseTools.auth.userManagement.getTenantID() + "\nId de Usuario: " + gdjs.evtTools.firebaseTools.auth.userManagement.getUID() + "\nTimeStamp Server: " + gdjs.evtTools.firebaseTools.firestore.getServerTimestamp());
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("DebugValues" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "DebugEst", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.DebugCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DebugCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.DebugCode.GDOnScreenControlsButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DebugCode.GDOnScreenControlsButtonObjects1[k] = gdjs.DebugCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.DebugCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2));
}
{gdjs.evtTools.storage.writeStringInJSONFile("DebugValues" + gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "DebugEst", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.DebugCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DebugCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.DebugCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DebugCode.GDNewSprite2Objects1[k] = gdjs.DebugCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.DebugCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Login");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ss"), gdjs.DebugCode.GDssObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DebugCode.GDssObjects1.length;i<l;++i) {
    if ( gdjs.DebugCode.GDssObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DebugCode.GDssObjects1[k] = gdjs.DebugCode.GDssObjects1[i];
        ++k;
    }
}
gdjs.DebugCode.GDssObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("input"), gdjs.DebugCode.GDinputObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString((( gdjs.DebugCode.GDinputObjects1.length === 0 ) ? "" :gdjs.DebugCode.GDinputObjects1[0].getBehavior("Text").getText()));
}

{ //Subevents
gdjs.DebugCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()).startsWith("Add "));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString(gdjs.evtTools.common.toString(gdjs.evtTools.string.strFind(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), "::")));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.evtTools.common.toString(gdjs.evtTools.string.strFindFrom(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), "::", runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 2)));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 0, runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) - 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 2, runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hell_Weah"), gdjs.DebugCode.GDHell_9595WeahObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DebugCode.GDHell_9595WeahObjects1.length;i<l;++i) {
    if ( gdjs.DebugCode.GDHell_9595WeahObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.DebugCode.GDHell_9595WeahObjects1[k] = gdjs.DebugCode.GDHell_9595WeahObjects1[i];
        ++k;
    }
}
gdjs.DebugCode.GDHell_9595WeahObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("HellWeah");
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "LoadingExtra");
}
}

}


};

gdjs.DebugCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DebugCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.DebugCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.DebugCode.GDoutputObjects1.length = 0;
gdjs.DebugCode.GDoutputObjects2.length = 0;
gdjs.DebugCode.GDinputObjects1.length = 0;
gdjs.DebugCode.GDinputObjects2.length = 0;
gdjs.DebugCode.GDssObjects1.length = 0;
gdjs.DebugCode.GDssObjects2.length = 0;
gdjs.DebugCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.DebugCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.DebugCode.GDHell_9595WeahObjects1.length = 0;
gdjs.DebugCode.GDHell_9595WeahObjects2.length = 0;
gdjs.DebugCode.GDborder3Objects1.length = 0;
gdjs.DebugCode.GDborder3Objects2.length = 0;
gdjs.DebugCode.GDNewSprite2Objects1.length = 0;
gdjs.DebugCode.GDNewSprite2Objects2.length = 0;
gdjs.DebugCode.GDStObjects1.length = 0;
gdjs.DebugCode.GDStObjects2.length = 0;
gdjs.DebugCode.GDNewSprite3Objects1.length = 0;
gdjs.DebugCode.GDNewSprite3Objects2.length = 0;
gdjs.DebugCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.DebugCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.DebugCode.GDborderObjects1.length = 0;
gdjs.DebugCode.GDborderObjects2.length = 0;
gdjs.DebugCode.GDborder2Objects1.length = 0;
gdjs.DebugCode.GDborder2Objects2.length = 0;
gdjs.DebugCode.GDbuttonPlaceObjects1.length = 0;
gdjs.DebugCode.GDbuttonPlaceObjects2.length = 0;
gdjs.DebugCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.DebugCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.DebugCode.GDbuttonPlace2Objects1.length = 0;
gdjs.DebugCode.GDbuttonPlace2Objects2.length = 0;
gdjs.DebugCode.GDRastreadorObjects1.length = 0;
gdjs.DebugCode.GDRastreadorObjects2.length = 0;

gdjs.DebugCode.eventsList2(runtimeScene);
gdjs.DebugCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.DebugCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.DebugCode.GDoutputObjects1.length = 0;
gdjs.DebugCode.GDoutputObjects2.length = 0;
gdjs.DebugCode.GDinputObjects1.length = 0;
gdjs.DebugCode.GDinputObjects2.length = 0;
gdjs.DebugCode.GDssObjects1.length = 0;
gdjs.DebugCode.GDssObjects2.length = 0;
gdjs.DebugCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.DebugCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.DebugCode.GDHell_9595WeahObjects1.length = 0;
gdjs.DebugCode.GDHell_9595WeahObjects2.length = 0;
gdjs.DebugCode.GDborder3Objects1.length = 0;
gdjs.DebugCode.GDborder3Objects2.length = 0;
gdjs.DebugCode.GDNewSprite2Objects1.length = 0;
gdjs.DebugCode.GDNewSprite2Objects2.length = 0;
gdjs.DebugCode.GDStObjects1.length = 0;
gdjs.DebugCode.GDStObjects2.length = 0;
gdjs.DebugCode.GDNewSprite3Objects1.length = 0;
gdjs.DebugCode.GDNewSprite3Objects2.length = 0;
gdjs.DebugCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.DebugCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.DebugCode.GDborderObjects1.length = 0;
gdjs.DebugCode.GDborderObjects2.length = 0;
gdjs.DebugCode.GDborder2Objects1.length = 0;
gdjs.DebugCode.GDborder2Objects2.length = 0;
gdjs.DebugCode.GDbuttonPlaceObjects1.length = 0;
gdjs.DebugCode.GDbuttonPlaceObjects2.length = 0;
gdjs.DebugCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.DebugCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.DebugCode.GDbuttonPlace2Objects1.length = 0;
gdjs.DebugCode.GDbuttonPlace2Objects2.length = 0;
gdjs.DebugCode.GDRastreadorObjects1.length = 0;
gdjs.DebugCode.GDRastreadorObjects2.length = 0;


return;

}

gdjs['DebugCode'] = gdjs.DebugCode;
