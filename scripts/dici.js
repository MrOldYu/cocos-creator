var tmPlayer = require("player");
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:
   
    onLoad() {
        if (this.node.y === 450) {
            this.node.destroy();
        }      
    },

    start() {

   
        var moveUp = cc.moveTo((480 - this.node.y) / 200, cc.v2(this.node.x, 480));
        this.node.runAction(moveUp);
        setTimeout(function () {
            this.node.destroy();
        }.bind(this), (480 - this.node.y) / 200*1000);
    },
    
    update(dt) {

        
    },
});
