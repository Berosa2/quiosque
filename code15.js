gdjs.ID_95DemoCode = {};
gdjs.ID_95DemoCode.localVariables = [];
gdjs.ID_95DemoCode.idToCallbackMap = new Map();
gdjs.ID_95DemoCode.GDIDObjects1= [];
gdjs.ID_95DemoCode.GDIDObjects2= [];
gdjs.ID_95DemoCode.GDNomeObjects1= [];
gdjs.ID_95DemoCode.GDNomeObjects2= [];
gdjs.ID_95DemoCode.GDUIDObjects1= [];
gdjs.ID_95DemoCode.GDUIDObjects2= [];
gdjs.ID_95DemoCode.GDSenhaObjects1= [];
gdjs.ID_95DemoCode.GDSenhaObjects2= [];
gdjs.ID_95DemoCode.GDVoltarObjects1= [];
gdjs.ID_95DemoCode.GDVoltarObjects2= [];
gdjs.ID_95DemoCode.GDNome2Objects1= [];
gdjs.ID_95DemoCode.GDNome2Objects2= [];
gdjs.ID_95DemoCode.GDborder3Objects1= [];
gdjs.ID_95DemoCode.GDborder3Objects2= [];
gdjs.ID_95DemoCode.GDNewSprite2Objects1= [];
gdjs.ID_95DemoCode.GDNewSprite2Objects2= [];
gdjs.ID_95DemoCode.GDStObjects1= [];
gdjs.ID_95DemoCode.GDStObjects2= [];
gdjs.ID_95DemoCode.GDNewSprite3Objects1= [];
gdjs.ID_95DemoCode.GDNewSprite3Objects2= [];
gdjs.ID_95DemoCode.GDIcone_9595configura_95231_95227oObjects1= [];
gdjs.ID_95DemoCode.GDIcone_9595configura_95231_95227oObjects2= [];
gdjs.ID_95DemoCode.GDborderObjects1= [];
gdjs.ID_95DemoCode.GDborderObjects2= [];
gdjs.ID_95DemoCode.GDborder2Objects1= [];
gdjs.ID_95DemoCode.GDborder2Objects2= [];
gdjs.ID_95DemoCode.GDbuttonPlaceObjects1= [];
gdjs.ID_95DemoCode.GDbuttonPlaceObjects2= [];
gdjs.ID_95DemoCode.GDGreyButtonWithShadow3Objects1= [];
gdjs.ID_95DemoCode.GDGreyButtonWithShadow3Objects2= [];
gdjs.ID_95DemoCode.GDbuttonPlace2Objects1= [];
gdjs.ID_95DemoCode.GDbuttonPlace2Objects2= [];
gdjs.ID_95DemoCode.GDRastreadorObjects1= [];
gdjs.ID_95DemoCode.GDRastreadorObjects2= [];


gdjs.ID_95DemoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voltar"), gdjs.ID_95DemoCode.GDVoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ID_95DemoCode.GDVoltarObjects1.length;i<l;++i) {
    if ( gdjs.ID_95DemoCode.GDVoltarObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ID_95DemoCode.GDVoltarObjects1[k] = gdjs.ID_95DemoCode.GDVoltarObjects1[i];
        ++k;
    }
}
gdjs.ID_95DemoCode.GDVoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Demo");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.ID_95DemoCode.GDNomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Senha"), gdjs.ID_95DemoCode.GDSenhaObjects1);
gdjs.copyArray(runtimeScene.getObjects("UID"), gdjs.ID_95DemoCode.GDUIDObjects1);
{for(var i = 0, len = gdjs.ID_95DemoCode.GDSenhaObjects1.length ;i < len;++i) {
    gdjs.ID_95DemoCode.GDSenhaObjects1[i].getBehavior("Text").setText("1234567");
}
}
{for(var i = 0, len = gdjs.ID_95DemoCode.GDNomeObjects1.length ;i < len;++i) {
    gdjs.ID_95DemoCode.GDNomeObjects1[i].getBehavior("Text").setText("Bernardo");
}
}
{for(var i = 0, len = gdjs.ID_95DemoCode.GDUIDObjects1.length ;i < len;++i) {
    gdjs.ID_95DemoCode.GDUIDObjects1[i].getBehavior("Text").setText("0000-0000-0000");
}
}
}

}


};

gdjs.ID_95DemoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ID_95DemoCode.GDIDObjects1.length = 0;
gdjs.ID_95DemoCode.GDIDObjects2.length = 0;
gdjs.ID_95DemoCode.GDNomeObjects1.length = 0;
gdjs.ID_95DemoCode.GDNomeObjects2.length = 0;
gdjs.ID_95DemoCode.GDUIDObjects1.length = 0;
gdjs.ID_95DemoCode.GDUIDObjects2.length = 0;
gdjs.ID_95DemoCode.GDSenhaObjects1.length = 0;
gdjs.ID_95DemoCode.GDSenhaObjects2.length = 0;
gdjs.ID_95DemoCode.GDVoltarObjects1.length = 0;
gdjs.ID_95DemoCode.GDVoltarObjects2.length = 0;
gdjs.ID_95DemoCode.GDNome2Objects1.length = 0;
gdjs.ID_95DemoCode.GDNome2Objects2.length = 0;
gdjs.ID_95DemoCode.GDborder3Objects1.length = 0;
gdjs.ID_95DemoCode.GDborder3Objects2.length = 0;
gdjs.ID_95DemoCode.GDNewSprite2Objects1.length = 0;
gdjs.ID_95DemoCode.GDNewSprite2Objects2.length = 0;
gdjs.ID_95DemoCode.GDStObjects1.length = 0;
gdjs.ID_95DemoCode.GDStObjects2.length = 0;
gdjs.ID_95DemoCode.GDNewSprite3Objects1.length = 0;
gdjs.ID_95DemoCode.GDNewSprite3Objects2.length = 0;
gdjs.ID_95DemoCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.ID_95DemoCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.ID_95DemoCode.GDborderObjects1.length = 0;
gdjs.ID_95DemoCode.GDborderObjects2.length = 0;
gdjs.ID_95DemoCode.GDborder2Objects1.length = 0;
gdjs.ID_95DemoCode.GDborder2Objects2.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlaceObjects1.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlaceObjects2.length = 0;
gdjs.ID_95DemoCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.ID_95DemoCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlace2Objects1.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlace2Objects2.length = 0;
gdjs.ID_95DemoCode.GDRastreadorObjects1.length = 0;
gdjs.ID_95DemoCode.GDRastreadorObjects2.length = 0;

gdjs.ID_95DemoCode.eventsList0(runtimeScene);
gdjs.ID_95DemoCode.GDIDObjects1.length = 0;
gdjs.ID_95DemoCode.GDIDObjects2.length = 0;
gdjs.ID_95DemoCode.GDNomeObjects1.length = 0;
gdjs.ID_95DemoCode.GDNomeObjects2.length = 0;
gdjs.ID_95DemoCode.GDUIDObjects1.length = 0;
gdjs.ID_95DemoCode.GDUIDObjects2.length = 0;
gdjs.ID_95DemoCode.GDSenhaObjects1.length = 0;
gdjs.ID_95DemoCode.GDSenhaObjects2.length = 0;
gdjs.ID_95DemoCode.GDVoltarObjects1.length = 0;
gdjs.ID_95DemoCode.GDVoltarObjects2.length = 0;
gdjs.ID_95DemoCode.GDNome2Objects1.length = 0;
gdjs.ID_95DemoCode.GDNome2Objects2.length = 0;
gdjs.ID_95DemoCode.GDborder3Objects1.length = 0;
gdjs.ID_95DemoCode.GDborder3Objects2.length = 0;
gdjs.ID_95DemoCode.GDNewSprite2Objects1.length = 0;
gdjs.ID_95DemoCode.GDNewSprite2Objects2.length = 0;
gdjs.ID_95DemoCode.GDStObjects1.length = 0;
gdjs.ID_95DemoCode.GDStObjects2.length = 0;
gdjs.ID_95DemoCode.GDNewSprite3Objects1.length = 0;
gdjs.ID_95DemoCode.GDNewSprite3Objects2.length = 0;
gdjs.ID_95DemoCode.GDIcone_9595configura_95231_95227oObjects1.length = 0;
gdjs.ID_95DemoCode.GDIcone_9595configura_95231_95227oObjects2.length = 0;
gdjs.ID_95DemoCode.GDborderObjects1.length = 0;
gdjs.ID_95DemoCode.GDborderObjects2.length = 0;
gdjs.ID_95DemoCode.GDborder2Objects1.length = 0;
gdjs.ID_95DemoCode.GDborder2Objects2.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlaceObjects1.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlaceObjects2.length = 0;
gdjs.ID_95DemoCode.GDGreyButtonWithShadow3Objects1.length = 0;
gdjs.ID_95DemoCode.GDGreyButtonWithShadow3Objects2.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlace2Objects1.length = 0;
gdjs.ID_95DemoCode.GDbuttonPlace2Objects2.length = 0;
gdjs.ID_95DemoCode.GDRastreadorObjects1.length = 0;
gdjs.ID_95DemoCode.GDRastreadorObjects2.length = 0;


return;

}

gdjs['ID_95DemoCode'] = gdjs.ID_95DemoCode;
