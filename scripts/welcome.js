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
        startBtn: {
            type: cc.Node,
            default:null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var scaleTo1 = cc.scaleTo(0.5, 0.9);
        var scaleTo2 = cc.scaleTo(0.5, 1);
        var seq = cc.sequence(scaleTo1, scaleTo2);
        var repeat = cc.repeatForever(seq);
        this.startBtn.runAction(repeat);
        this.startBtn.on(cc.Node.EventType.TOUCH_START, function () {
            cc.director.loadScene('MainSence');
        });

    },

    start () {

    },

    // update (dt) {},
});
