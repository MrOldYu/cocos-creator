// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        endTime: {
            type: cc.Label,
            default:null,
        },
        deathAudio: {
            type: cc.AudioClip,
            default:null,
        },
    },
    return_Main: function () {
        cc.director.loadScene('MainSence');
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.audioEngine.playMusic(this.deathAudio,false);
        var theEndTime = cc.sys.localStorage.getItem("endTime");
        this.endTime.string = this.endTime.string+theEndTime;
    },

    start () {

    },

    // update (dt) {},
});
