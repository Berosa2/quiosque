gdjs.IDCode = {};
gdjs.IDCode.localVariables = [];
gdjs.IDCode.idToCallbackMap = new Map();
gdjs.IDCode.GDIDObjects1= [];
gdjs.IDCode.GDIDObjects2= [];
gdjs.IDCode.GDNomeObjects1= [];
gdjs.IDCode.GDNomeObjects2= [];
gdjs.IDCode.GDUIDObjects1= [];
gdjs.IDCode.GDUIDObjects2= [];
gdjs.IDCode.GDSenhaObjects1= [];
gdjs.IDCode.GDSenhaObjects2= [];
gdjs.IDCode.GDVoltarObjects1= [];
gdjs.IDCode.GDVoltarObjects2= [];
gdjs.IDCode.GDborder3Objects1= [];
gdjs.IDCode.GDborder3Objects2= [];
gdjs.IDCode.GDNewSprite2Objects1= [];
gdjs.IDCode.GDNewSprite2Objects2= [];
gdjs.IDCode.GDStObjects1= [];
gdjs.IDCode.GDStObjects2= [];
gdjs.IDCode.GDNewSprite3Objects1= [];
gdjs.IDCode.GDNewSprite3Objects2= [];
gdjs.IDCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.IDCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.IDCode.GDborderObjects1= [];
gdjs.IDCode.GDborderObjects2= [];
gdjs.IDCode.GDborder2Objects1= [];
gdjs.IDCode.GDborder2Objects2= [];
gdjs.IDCode.GDbuttonPlaceObjects1= [];
gdjs.IDCode.GDbuttonPlaceObjects2= [];
gdjs.IDCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.IDCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.IDCode.GDbuttonPlace2Objects1= [];
gdjs.IDCode.GDbuttonPlace2Objects2= [];
gdjs.IDCode.GDRastreadorObjects1= [];
gdjs.IDCode.GDRastreadorObjects2= [];


gdjs.IDCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.IDCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IDCode.GDVoltarObjects1.length;i<l;++i) {
    if ( gdjs.IDCode.GDVoltarObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IDCode.GDVoltarObjects1[k] = gdjs.IDCode.GDVoltarObjects1[i];
        ++k;
    }
}
gdjs.IDCode.GDVoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Demo");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.IDCode.GDNomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.IDCode.GDSenhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("UID"), gdjs.IDCode.GDUIDObjects1);
{for(var i = 0, len = gdjs.IDCode.GDSenhaObjects1.length ;i < len;++i) {
    gdjs.IDCode.GDSenhaObjects1[i].getBehavior("Text").setText(".......");
}
}
{for(var i = 0, len = gdjs.IDCode.GDNomeObjects1.length ;i < len;++i) {
    gdjs.IDCode.GDNomeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName());
}
}
{for(var i = 0, len = gdjs.IDCode.GDUIDObjects1.length ;i < len;++i) {
    gdjs.IDCode.GDUIDObjects1[i].getBehavior("Text").setText(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
}
}

}


};

gdjs.IDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IDCode.GDIDObjects1.length = 0;
gdjs.IDCode.GDIDObjects2.length = 0;
gdjs.IDCode.GDNomeObjects1.length = 0;
gdjs.IDCode.GDNomeObjects2.length = 0;
gdjs.IDCode.GDUIDObjects1.length = 0;
gdjs.IDCode.GDUIDObjects2.length = 0;
gdjs.IDCode.GDSenhaObjects1.length = 0;
gdjs.IDCode.GDSenhaObjects2.length = 0;
gdjs.IDCode.GDVoltarObjects1.length = 0;
gdjs.IDCode.GDVoltarObjects2.length = 0;
gdjs.IDCode.GDborder3Objects1.length = 0;
gdjs.IDCode.GDborder3Objects2.length = 0;
gdjs.IDCode.GDNewSprite2Objects1.length = 0;
gdjs.IDCode.GDNewSprite2Objects2.length = 0;
gdjs.IDCode.GDStObjects1.length = 0;
gdjs.IDCode.GDStObjects2.length = 0;
gdjs.IDCode.GDNewSprite3Objects1.length = 0;
gdjs.IDCode.GDNewSprite3Objects2.length = 0;
gdjs.IDCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.IDCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.IDCode.GDborderObjects1.length = 0;
gdjs.IDCode.GDborderObjects2.length = 0;
gdjs.IDCode.GDborder2Objects1.length = 0;
gdjs.IDCode.GDborder2Objects2.length = 0;
gdjs.IDCode.GDbuttonPlaceObjects1.length = 0;
gdjs.IDCode.GDbuttonPlaceObjects2.length = 0;
gdjs.IDCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.IDCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.IDCode.GDbuttonPlace2Objects1.length = 0;
gdjs.IDCode.GDbuttonPlace2Objects2.length = 0;
gdjs.IDCode.GDRastreadorObjects1.length = 0;
gdjs.IDCode.GDRastreadorObjects2.length = 0;

gdjs.IDCode.eventsList0(runtimeScene);
gdjs.IDCode.GDIDObjects1.length = 0;
gdjs.IDCode.GDIDObjects2.length = 0;
gdjs.IDCode.GDNomeObjects1.length = 0;
gdjs.IDCode.GDNomeObjects2.length = 0;
gdjs.IDCode.GDUIDObjects1.length = 0;
gdjs.IDCode.GDUIDObjects2.length = 0;
gdjs.IDCode.GDSenhaObjects1.length = 0;
gdjs.IDCode.GDSenhaObjects2.length = 0;
gdjs.IDCode.GDVoltarObjects1.length = 0;
gdjs.IDCode.GDVoltarObjects2.length = 0;
gdjs.IDCode.GDborder3Objects1.length = 0;
gdjs.IDCode.GDborder3Objects2.length = 0;
gdjs.IDCode.GDNewSprite2Objects1.length = 0;
gdjs.IDCode.GDNewSprite2Objects2.length = 0;
gdjs.IDCode.GDStObjects1.length = 0;
gdjs.IDCode.GDStObjects2.length = 0;
gdjs.IDCode.GDNewSprite3Objects1.length = 0;
gdjs.IDCode.GDNewSprite3Objects2.length = 0;
gdjs.IDCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.IDCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.IDCode.GDborderObjects1.length = 0;
gdjs.IDCode.GDborderObjects2.length = 0;
gdjs.IDCode.GDborder2Objects1.length = 0;
gdjs.IDCode.GDborder2Objects2.length = 0;
gdjs.IDCode.GDbuttonPlaceObjects1.length = 0;
gdjs.IDCode.GDbuttonPlaceObjects2.length = 0;
gdjs.IDCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.IDCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.IDCode.GDbuttonPlace2Objects1.length = 0;
gdjs.IDCode.GDbuttonPlace2Objects2.length = 0;
gdjs.IDCode.GDRastreadorObjects1.length = 0;
gdjs.IDCode.GDRastreadorObjects2.length = 0;


return;

}

gdjs['IDCode'] = gdjs.IDCode;
