gdjs.Adimin_95login_95painelCode = {};
gdjs.Adimin_95login_95painelCode.localVariables = [];
gdjs.Adimin_95login_95painelCode.idToCallbackMap = new Map();
gdjs.Adimin_95login_95painelCode.GDNameObjects1= [];
gdjs.Adimin_95login_95painelCode.GDNameObjects2= [];
gdjs.Adimin_95login_95painelCode.GDSenhaObjects1= [];
gdjs.Adimin_95login_95painelCode.GDSenhaObjects2= [];
gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1= [];
gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects2= [];
gdjs.Adimin_95login_95painelCode.GDBackgroundObjects1= [];
gdjs.Adimin_95login_95painelCode.GDBackgroundObjects2= [];
gdjs.Adimin_95login_95painelCode.GDborder3Objects1= [];
gdjs.Adimin_95login_95painelCode.GDborder3Objects2= [];
gdjs.Adimin_95login_95painelCode.GDNewSprite2Objects1= [];
gdjs.Adimin_95login_95painelCode.GDNewSprite2Objects2= [];
gdjs.Adimin_95login_95painelCode.GDStObjects1= [];
gdjs.Adimin_95login_95painelCode.GDStObjects2= [];
gdjs.Adimin_95login_95painelCode.GDNewSprite3Objects1= [];
gdjs.Adimin_95login_95painelCode.GDNewSprite3Objects2= [];
gdjs.Adimin_95login_95painelCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.Adimin_95login_95painelCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.Adimin_95login_95painelCode.GDborderObjects1= [];
gdjs.Adimin_95login_95painelCode.GDborderObjects2= [];
gdjs.Adimin_95login_95painelCode.GDborder2Objects1= [];
gdjs.Adimin_95login_95painelCode.GDborder2Objects2= [];
gdjs.Adimin_95login_95painelCode.GDbuttonPlaceObjects1= [];
gdjs.Adimin_95login_95painelCode.GDbuttonPlaceObjects2= [];
gdjs.Adimin_95login_95painelCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.Adimin_95login_95painelCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.Adimin_95login_95painelCode.GDbuttonPlace2Objects1= [];
gdjs.Adimin_95login_95painelCode.GDbuttonPlace2Objects2= [];
gdjs.Adimin_95login_95painelCode.GDRastreadorObjects1= [];
gdjs.Adimin_95login_95painelCode.GDRastreadorObjects2= [];


gdjs.Adimin_95login_95painelCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Rastreador"), gdjs.Adimin_95login_95painelCode.GDRastreadorObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), false);
}
{for(var i = 0, len = gdjs.Adimin_95login_95painelCode.GDRastreadorObjects1.length ;i < len;++i) {
    gdjs.Adimin_95login_95painelCode.GDRastreadorObjects1[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
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

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Adimin_95login_95painelCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.Adimin_95login_95painelCode.GDSenhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("buttonPlace3"), gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1.length;i<l;++i) {
    if ( gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1[k] = gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1[i];
        ++k;
    }
}
gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Adimin_95login_95painelCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.Adimin_95login_95painelCode.GDNameObjects1[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Adimin_95login_95painelCode.GDNameObjects1[k] = gdjs.Adimin_95login_95painelCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.Adimin_95login_95painelCode.GDNameObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Adimin_95login_95painelCode.GDSenhaObjects1.length;i<l;++i) {
    if ( gdjs.Adimin_95login_95painelCode.GDSenhaObjects1[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Adimin_95login_95painelCode.GDSenhaObjects1[k] = gdjs.Adimin_95login_95painelCode.GDSenhaObjects1[i];
        ++k;
    }
}
gdjs.Adimin_95login_95painelCode.GDSenhaObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Admin_painel");
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("Admin", "Name", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.getField("Admin", "Senha", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}
}

}


};

gdjs.Adimin_95login_95painelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Adimin_95login_95painelCode.GDNameObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDNameObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDSenhaObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDSenhaObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDBackgroundObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDBackgroundObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite2Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite2Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDStObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDStObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDborderObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDborderObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder2Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder2Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlaceObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlaceObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace2Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace2Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDRastreadorObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDRastreadorObjects2.length = 0;

gdjs.Adimin_95login_95painelCode.eventsList0(runtimeScene);
gdjs.Adimin_95login_95painelCode.GDNameObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDNameObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDSenhaObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDSenhaObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDBackgroundObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDBackgroundObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite2Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite2Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDStObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDStObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDNewSprite3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDborderObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDborderObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder2Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDborder2Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlaceObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlaceObjects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace2Objects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDbuttonPlace2Objects2.length = 0;
gdjs.Adimin_95login_95painelCode.GDRastreadorObjects1.length = 0;
gdjs.Adimin_95login_95painelCode.GDRastreadorObjects2.length = 0;


return;

}

gdjs['Adimin_95login_95painelCode'] = gdjs.Adimin_95login_95painelCode;
