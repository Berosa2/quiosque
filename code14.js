gdjs.Admin_95painelCode = {};
gdjs.Admin_95painelCode.localVariables = [];
gdjs.Admin_95painelCode.idToCallbackMap = new Map();
gdjs.Admin_95painelCode.GDtitleObjects1= [];
gdjs.Admin_95painelCode.GDtitleObjects2= [];
gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1= [];
gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects2= [];
gdjs.Admin_95painelCode.GDIDObjects1= [];
gdjs.Admin_95painelCode.GDIDObjects2= [];
gdjs.Admin_95painelCode.GDRastrearObjects1= [];
gdjs.Admin_95painelCode.GDRastrearObjects2= [];
gdjs.Admin_95painelCode.GDtitle2Objects1= [];
gdjs.Admin_95painelCode.GDtitle2Objects2= [];
gdjs.Admin_95painelCode.GDUIDObjects1= [];
gdjs.Admin_95painelCode.GDUIDObjects2= [];
gdjs.Admin_95painelCode.GDSeuUIDObjects1= [];
gdjs.Admin_95painelCode.GDSeuUIDObjects2= [];
gdjs.Admin_95painelCode.GDRastrear2Objects1= [];
gdjs.Admin_95painelCode.GDRastrear2Objects2= [];
gdjs.Admin_95painelCode.GDRastrear3Objects1= [];
gdjs.Admin_95painelCode.GDRastrear3Objects2= [];
gdjs.Admin_95painelCode.GDborder3Objects1= [];
gdjs.Admin_95painelCode.GDborder3Objects2= [];
gdjs.Admin_95painelCode.GDNewSprite2Objects1= [];
gdjs.Admin_95painelCode.GDNewSprite2Objects2= [];
gdjs.Admin_95painelCode.GDStObjects1= [];
gdjs.Admin_95painelCode.GDStObjects2= [];
gdjs.Admin_95painelCode.GDNewSprite3Objects1= [];
gdjs.Admin_95painelCode.GDNewSprite3Objects2= [];
gdjs.Admin_95painelCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.Admin_95painelCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.Admin_95painelCode.GDborderObjects1= [];
gdjs.Admin_95painelCode.GDborderObjects2= [];
gdjs.Admin_95painelCode.GDborder2Objects1= [];
gdjs.Admin_95painelCode.GDborder2Objects2= [];
gdjs.Admin_95painelCode.GDbuttonPlaceObjects1= [];
gdjs.Admin_95painelCode.GDbuttonPlaceObjects2= [];
gdjs.Admin_95painelCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.Admin_95painelCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.Admin_95painelCode.GDbuttonPlace2Objects1= [];
gdjs.Admin_95painelCode.GDbuttonPlace2Objects2= [];
gdjs.Admin_95painelCode.GDRastreadorObjects1= [];
gdjs.Admin_95painelCode.GDRastreadorObjects2= [];


gdjs.Admin_95painelCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Entrar_Editar_UID"), gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1.length;i<l;++i) {
    if ( gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1[k] = gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1[i];
        ++k;
    }
}
gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID"), gdjs.Admin_95painelCode.GDIDObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.Admin_95painelCode.GDIDObjects1.length === 0 ) ? "" :gdjs.Admin_95painelCode.GDIDObjects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Create");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rastrear3"), gdjs.Admin_95painelCode.GDRastrear3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Admin_95painelCode.GDRastrear3Objects1.length;i<l;++i) {
    if ( gdjs.Admin_95painelCode.GDRastrear3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Admin_95painelCode.GDRastrear3Objects1[k] = gdjs.Admin_95painelCode.GDRastrear3Objects1[i];
        ++k;
    }
}
gdjs.Admin_95painelCode.GDRastrear3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Demo");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SeuUID"), gdjs.Admin_95painelCode.GDSeuUIDObjects1);
{for(var i = 0, len = gdjs.Admin_95painelCode.GDSeuUIDObjects1.length ;i < len;++i) {
    gdjs.Admin_95painelCode.GDSeuUIDObjects1[i].getBehavior("Text").setText(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("title2"), gdjs.Admin_95painelCode.GDtitle2Objects1);
{for(var i = 0, len = gdjs.Admin_95painelCode.GDtitle2Objects1.length ;i < len;++i) {
    gdjs.Admin_95painelCode.GDtitle2Objects1[i].getBehavior("Text").setText("Essa e uma configuração de teste, ela vai rastrear a conta da pessoa, mostrando uma feature de conta UB. Ela não é boa.\n" + runtimeScene.getGame().getVariables().getFromIndex(6).getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(7).getAsString() + " " + runtimeScene.getGame().getVariables().getFromIndex(8).getAsString());
}
}
}

}


};

gdjs.Admin_95painelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Admin_95painelCode.GDtitleObjects1.length = 0;
gdjs.Admin_95painelCode.GDtitleObjects2.length = 0;
gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDRastrearObjects1.length = 0;
gdjs.Admin_95painelCode.GDRastrearObjects2.length = 0;
gdjs.Admin_95painelCode.GDtitle2Objects1.length = 0;
gdjs.Admin_95painelCode.GDtitle2Objects2.length = 0;
gdjs.Admin_95painelCode.GDUIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDUIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDSeuUIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDSeuUIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDRastrear2Objects1.length = 0;
gdjs.Admin_95painelCode.GDRastrear2Objects2.length = 0;
gdjs.Admin_95painelCode.GDRastrear3Objects1.length = 0;
gdjs.Admin_95painelCode.GDRastrear3Objects2.length = 0;
gdjs.Admin_95painelCode.GDborder3Objects1.length = 0;
gdjs.Admin_95painelCode.GDborder3Objects2.length = 0;
gdjs.Admin_95painelCode.GDNewSprite2Objects1.length = 0;
gdjs.Admin_95painelCode.GDNewSprite2Objects2.length = 0;
gdjs.Admin_95painelCode.GDStObjects1.length = 0;
gdjs.Admin_95painelCode.GDStObjects2.length = 0;
gdjs.Admin_95painelCode.GDNewSprite3Objects1.length = 0;
gdjs.Admin_95painelCode.GDNewSprite3Objects2.length = 0;
gdjs.Admin_95painelCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.Admin_95painelCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.Admin_95painelCode.GDborderObjects1.length = 0;
gdjs.Admin_95painelCode.GDborderObjects2.length = 0;
gdjs.Admin_95painelCode.GDborder2Objects1.length = 0;
gdjs.Admin_95painelCode.GDborder2Objects2.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlaceObjects1.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlaceObjects2.length = 0;
gdjs.Admin_95painelCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.Admin_95painelCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlace2Objects1.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlace2Objects2.length = 0;
gdjs.Admin_95painelCode.GDRastreadorObjects1.length = 0;
gdjs.Admin_95painelCode.GDRastreadorObjects2.length = 0;

gdjs.Admin_95painelCode.eventsList0(runtimeScene);
gdjs.Admin_95painelCode.GDtitleObjects1.length = 0;
gdjs.Admin_95painelCode.GDtitleObjects2.length = 0;
gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDEntrar_9595Editar_9595UIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDRastrearObjects1.length = 0;
gdjs.Admin_95painelCode.GDRastrearObjects2.length = 0;
gdjs.Admin_95painelCode.GDtitle2Objects1.length = 0;
gdjs.Admin_95painelCode.GDtitle2Objects2.length = 0;
gdjs.Admin_95painelCode.GDUIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDUIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDSeuUIDObjects1.length = 0;
gdjs.Admin_95painelCode.GDSeuUIDObjects2.length = 0;
gdjs.Admin_95painelCode.GDRastrear2Objects1.length = 0;
gdjs.Admin_95painelCode.GDRastrear2Objects2.length = 0;
gdjs.Admin_95painelCode.GDRastrear3Objects1.length = 0;
gdjs.Admin_95painelCode.GDRastrear3Objects2.length = 0;
gdjs.Admin_95painelCode.GDborder3Objects1.length = 0;
gdjs.Admin_95painelCode.GDborder3Objects2.length = 0;
gdjs.Admin_95painelCode.GDNewSprite2Objects1.length = 0;
gdjs.Admin_95painelCode.GDNewSprite2Objects2.length = 0;
gdjs.Admin_95painelCode.GDStObjects1.length = 0;
gdjs.Admin_95painelCode.GDStObjects2.length = 0;
gdjs.Admin_95painelCode.GDNewSprite3Objects1.length = 0;
gdjs.Admin_95painelCode.GDNewSprite3Objects2.length = 0;
gdjs.Admin_95painelCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.Admin_95painelCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.Admin_95painelCode.GDborderObjects1.length = 0;
gdjs.Admin_95painelCode.GDborderObjects2.length = 0;
gdjs.Admin_95painelCode.GDborder2Objects1.length = 0;
gdjs.Admin_95painelCode.GDborder2Objects2.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlaceObjects1.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlaceObjects2.length = 0;
gdjs.Admin_95painelCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.Admin_95painelCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlace2Objects1.length = 0;
gdjs.Admin_95painelCode.GDbuttonPlace2Objects2.length = 0;
gdjs.Admin_95painelCode.GDRastreadorObjects1.length = 0;
gdjs.Admin_95painelCode.GDRastreadorObjects2.length = 0;


return;

}

gdjs['Admin_95painelCode'] = gdjs.Admin_95painelCode;
