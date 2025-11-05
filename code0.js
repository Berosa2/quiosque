gdjs.LoginCode = {};
gdjs.LoginCode.localVariables = [];
gdjs.LoginCode.idToCallbackMap = new Map();
gdjs.LoginCode.GDE_9595MailObjects1= [];
gdjs.LoginCode.GDE_9595MailObjects2= [];
gdjs.LoginCode.GDSenhaObjects1= [];
gdjs.LoginCode.GDSenhaObjects2= [];
gdjs.LoginCode.GDNewSpriteObjects1= [];
gdjs.LoginCode.GDNewSpriteObjects2= [];
gdjs.LoginCode.GDNewSprite2Objects1= [];
gdjs.LoginCode.GDNewSprite2Objects2= [];
gdjs.LoginCode.GDNewSprite4Objects1= [];
gdjs.LoginCode.GDNewSprite4Objects2= [];
gdjs.LoginCode.GDcriarObjects1= [];
gdjs.LoginCode.GDcriarObjects2= [];
gdjs.LoginCode.GDNewText2Objects1= [];
gdjs.LoginCode.GDNewText2Objects2= [];
gdjs.LoginCode.GDCriarObjects1= [];
gdjs.LoginCode.GDCriarObjects2= [];
gdjs.LoginCode.GDConnectObjects1= [];
gdjs.LoginCode.GDConnectObjects2= [];
gdjs.LoginCode.GDbuttonPlace3Objects1= [];
gdjs.LoginCode.GDbuttonPlace3Objects2= [];
gdjs.LoginCode.GDborder3Objects1= [];
gdjs.LoginCode.GDborder3Objects2= [];
gdjs.LoginCode.GDNewSprite2Objects1= [];
gdjs.LoginCode.GDNewSprite2Objects2= [];
gdjs.LoginCode.GDStObjects1= [];
gdjs.LoginCode.GDStObjects2= [];
gdjs.LoginCode.GDNewSprite3Objects1= [];
gdjs.LoginCode.GDNewSprite3Objects2= [];
gdjs.LoginCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.LoginCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.LoginCode.GDborderObjects1= [];
gdjs.LoginCode.GDborderObjects2= [];
gdjs.LoginCode.GDborder2Objects1= [];
gdjs.LoginCode.GDborder2Objects2= [];
gdjs.LoginCode.GDbuttonPlaceObjects1= [];
gdjs.LoginCode.GDbuttonPlaceObjects2= [];
gdjs.LoginCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.LoginCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.LoginCode.GDbuttonPlace2Objects1= [];
gdjs.LoginCode.GDbuttonPlace2Objects2= [];
gdjs.LoginCode.GDRastreadorObjects1= [];
gdjs.LoginCode.GDRastreadorObjects2= [];


gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546LoginCode_9546GDcriarObjects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.LoginCode.GDNewSprite2Objects1, "criar": gdjs.LoginCode.GDcriarObjects1});
gdjs.LoginCode.mapOf = Hashtable.newFrom({});
gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDCriarObjects1Objects = Hashtable.newFrom({"Criar": gdjs.LoginCode.GDCriarObjects1});
gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDConnectObjects1Objects = Hashtable.newFrom({"Connect": gdjs.LoginCode.GDConnectObjects1});
gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Rastrear-Sigiloso-Indentificador", 1, null);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "UIDselecionado", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Rastrear-Sigiloso", 1, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("Rastreador"), gdjs.LoginCode.GDRastreadorObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), false);
}
{for(var i = 0, len = gdjs.LoginCode.GDRastreadorObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDRastreadorObjects1[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "Cena", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "Xmouse", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.getField("Rastreamento", "Ymouse", runtimeScene.getScene().getVariables().getFromIndex(3), gdjs.VariablesContainer.badVariable);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).setString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LoginCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.LoginCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.LoginCode.GDcriarObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.LoginCode.GDNewSprite2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LoginCode.GDcriarObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDcriarObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LoginCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.LoginCode.GDNewText2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().get("webhookData")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "tela de quiosque");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LoginCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDNewSprite2Objects1[k] = gdjs.LoginCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E_Mail"), gdjs.LoginCode.GDE_9595MailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.LoginCode.GDSenhaObjects1);
{gdjs.evtTools.firebaseTools.auth.signInWithEmail((( gdjs.LoginCode.GDE_9595MailObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDE_9595MailObjects1[0].getBehavior("Text").getText()), (( gdjs.LoginCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDSenhaObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}
}

}


{


let isConditionTrue_0 = false;
{
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.LoginCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.LoginCode.GDcriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDNewSprite2Objects1ObjectsGDgdjs_9546LoginCode_9546GDcriarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOf, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("criar"), gdjs.LoginCode.GDcriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDcriarObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDcriarObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDcriarObjects1[k] = gdjs.LoginCode.GDcriarObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDcriarObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E_Mail"), gdjs.LoginCode.GDE_9595MailObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.LoginCode.GDSenhaObjects1);
{gdjs.VariablesContainer.badVariable.setString("Usuário " + (( gdjs.LoginCode.GDE_9595MailObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDE_9595MailObjects1[0].getText()) + " acabou de criar uma conta no Quiosque");
}
{gdjs.evtTools.firebaseTools.auth.createAccountWithEmail((( gdjs.LoginCode.GDE_9595MailObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDE_9595MailObjects1[0].getBehavior("Text").getText()), (( gdjs.LoginCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDSenhaObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProj", "0", gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "NumProjFavo", "0", gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Senha", (( gdjs.LoginCode.GDSenhaObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDSenhaObjects1[0].getBehavior("Text").getText()), gdjs.VariablesContainer.badVariable);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Criar"), gdjs.LoginCode.GDCriarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDCriarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LoginCode.GDCriarObjects1 */
{for(var i = 0, len = gdjs.LoginCode.GDCriarObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCriarObjects1[i].setCharacterSize(47);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Criar"), gdjs.LoginCode.GDCriarObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDCriarObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDCriarObjects1[i].setCharacterSize(50);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Connect"), gdjs.LoginCode.GDConnectObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDConnectObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDConnectObjects1[i].setCharacterSize(50);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Connect"), gdjs.LoginCode.GDConnectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LoginCode.mapOfGDgdjs_9546LoginCode_9546GDConnectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LoginCode.GDConnectObjects1 */
{for(var i = 0, len = gdjs.LoginCode.GDConnectObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDConnectObjects1[i].setCharacterSize(47);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "tela de quiosque");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("buttonPlace3"), gdjs.LoginCode.GDbuttonPlace3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDbuttonPlace3Objects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDbuttonPlace3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDbuttonPlace3Objects1[k] = gdjs.LoginCode.GDbuttonPlace3Objects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDbuttonPlace3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("E_Mail"), gdjs.LoginCode.GDE_9595MailObjects1);
{firebase.auth().sendPasswordResetEmail((( gdjs.LoginCode.GDE_9595MailObjects1.length === 0 ) ? "" :gdjs.LoginCode.GDE_9595MailObjects1[0].getBehavior("Text").getText()));
}
}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDE_9595MailObjects1.length = 0;
gdjs.LoginCode.GDE_9595MailObjects2.length = 0;
gdjs.LoginCode.GDSenhaObjects1.length = 0;
gdjs.LoginCode.GDSenhaObjects2.length = 0;
gdjs.LoginCode.GDNewSpriteObjects1.length = 0;
gdjs.LoginCode.GDNewSpriteObjects2.length = 0;
gdjs.LoginCode.GDNewSprite2Objects1.length = 0;
gdjs.LoginCode.GDNewSprite2Objects2.length = 0;
gdjs.LoginCode.GDNewSprite4Objects1.length = 0;
gdjs.LoginCode.GDNewSprite4Objects2.length = 0;
gdjs.LoginCode.GDcriarObjects1.length = 0;
gdjs.LoginCode.GDcriarObjects2.length = 0;
gdjs.LoginCode.GDNewText2Objects1.length = 0;
gdjs.LoginCode.GDNewText2Objects2.length = 0;
gdjs.LoginCode.GDCriarObjects1.length = 0;
gdjs.LoginCode.GDCriarObjects2.length = 0;
gdjs.LoginCode.GDConnectObjects1.length = 0;
gdjs.LoginCode.GDConnectObjects2.length = 0;
gdjs.LoginCode.GDbuttonPlace3Objects1.length = 0;
gdjs.LoginCode.GDbuttonPlace3Objects2.length = 0;
gdjs.LoginCode.GDborder3Objects1.length = 0;
gdjs.LoginCode.GDborder3Objects2.length = 0;
gdjs.LoginCode.GDNewSprite2Objects1.length = 0;
gdjs.LoginCode.GDNewSprite2Objects2.length = 0;
gdjs.LoginCode.GDStObjects1.length = 0;
gdjs.LoginCode.GDStObjects2.length = 0;
gdjs.LoginCode.GDNewSprite3Objects1.length = 0;
gdjs.LoginCode.GDNewSprite3Objects2.length = 0;
gdjs.LoginCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.LoginCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.LoginCode.GDborderObjects1.length = 0;
gdjs.LoginCode.GDborderObjects2.length = 0;
gdjs.LoginCode.GDborder2Objects1.length = 0;
gdjs.LoginCode.GDborder2Objects2.length = 0;
gdjs.LoginCode.GDbuttonPlaceObjects1.length = 0;
gdjs.LoginCode.GDbuttonPlaceObjects2.length = 0;
gdjs.LoginCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.LoginCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.LoginCode.GDbuttonPlace2Objects1.length = 0;
gdjs.LoginCode.GDbuttonPlace2Objects2.length = 0;
gdjs.LoginCode.GDRastreadorObjects1.length = 0;
gdjs.LoginCode.GDRastreadorObjects2.length = 0;

gdjs.LoginCode.eventsList0(runtimeScene);
gdjs.LoginCode.GDE_9595MailObjects1.length = 0;
gdjs.LoginCode.GDE_9595MailObjects2.length = 0;
gdjs.LoginCode.GDSenhaObjects1.length = 0;
gdjs.LoginCode.GDSenhaObjects2.length = 0;
gdjs.LoginCode.GDNewSpriteObjects1.length = 0;
gdjs.LoginCode.GDNewSpriteObjects2.length = 0;
gdjs.LoginCode.GDNewSprite2Objects1.length = 0;
gdjs.LoginCode.GDNewSprite2Objects2.length = 0;
gdjs.LoginCode.GDNewSprite4Objects1.length = 0;
gdjs.LoginCode.GDNewSprite4Objects2.length = 0;
gdjs.LoginCode.GDcriarObjects1.length = 0;
gdjs.LoginCode.GDcriarObjects2.length = 0;
gdjs.LoginCode.GDNewText2Objects1.length = 0;
gdjs.LoginCode.GDNewText2Objects2.length = 0;
gdjs.LoginCode.GDCriarObjects1.length = 0;
gdjs.LoginCode.GDCriarObjects2.length = 0;
gdjs.LoginCode.GDConnectObjects1.length = 0;
gdjs.LoginCode.GDConnectObjects2.length = 0;
gdjs.LoginCode.GDbuttonPlace3Objects1.length = 0;
gdjs.LoginCode.GDbuttonPlace3Objects2.length = 0;
gdjs.LoginCode.GDborder3Objects1.length = 0;
gdjs.LoginCode.GDborder3Objects2.length = 0;
gdjs.LoginCode.GDNewSprite2Objects1.length = 0;
gdjs.LoginCode.GDNewSprite2Objects2.length = 0;
gdjs.LoginCode.GDStObjects1.length = 0;
gdjs.LoginCode.GDStObjects2.length = 0;
gdjs.LoginCode.GDNewSprite3Objects1.length = 0;
gdjs.LoginCode.GDNewSprite3Objects2.length = 0;
gdjs.LoginCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.LoginCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.LoginCode.GDborderObjects1.length = 0;
gdjs.LoginCode.GDborderObjects2.length = 0;
gdjs.LoginCode.GDborder2Objects1.length = 0;
gdjs.LoginCode.GDborder2Objects2.length = 0;
gdjs.LoginCode.GDbuttonPlaceObjects1.length = 0;
gdjs.LoginCode.GDbuttonPlaceObjects2.length = 0;
gdjs.LoginCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.LoginCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.LoginCode.GDbuttonPlace2Objects1.length = 0;
gdjs.LoginCode.GDbuttonPlace2Objects2.length = 0;
gdjs.LoginCode.GDRastreadorObjects1.length = 0;
gdjs.LoginCode.GDRastreadorObjects2.length = 0;


return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
