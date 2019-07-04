

cc.Class({
    extends: cc.Component,

    properties: {
        bgmAudio: {
            default: null,
            type: cc.AudioClip,
        },
        jumpAudio: {
            default: null,
            type: cc.AudioClip,
        },
      
        player: {
            default: null,
            type: cc.Node,
        },
        background: {
            default: null,
            type: cc.Node,
        },
        timeLable: {
            default: null,
            type: cc.Label,
        },
        PlayerJumpHeight: 30,    
        wallHeight: 80,
        dici: {
            default: null,
            type: cc.Prefab,
        },
        diciCount: 0,
        diciDuration: 3000,
        gameTime:0,
    },
    

    bornNewDici: function () {
        this.diciCount++;
        
        var newDici = cc.instantiate(this.dici);
        this.node.addChild(newDici);
        var random = Math.random();
        if (random > 0.5) {
           newDici.rotationY = 0;
        }
        else {
         newDici.rotationY = 180;
        }
        newDici.setPosition(this.newDiciPosition(random));
    },
    newDiciPosition: function (random) {
        var positionX = 0;
        var positionY = 0;
        if (random > 0.5) {
            positionX = this.node.width / 2 - this.wallHeight;
        }
        else {
             positionX =-( this.node.width / 2 - this.wallHeight);
        }
        if (this.diciCount <= 8) {
            positionY = this.node.height / 2 - this.diciDuration * this.diciCount - this.diciDuration;
        }
        else {
            positionY = this.node.height / 2 - this.diciDuration * 8 - this.diciDuration;
        }
        return cc.v2(positionX, positionY);

    },
    playerMoveRight: function () {
        var moveRight = cc.moveTo(0.2, cc.v2(this.node.width / 2 - this.wallHeight, this.player.y));
        var moveR1 = cc.moveTo(0.1, cc.v2(this.node.width / 2 - this.wallHeight - 60, this.player.y));
        var moveR2 = cc.moveTo(0.2, cc.v2(this.node.width / 2 - this.wallHeight, this.player.y));
        var mySeqR = cc.sequence(moveR1, moveR2);
        if (this.player.rotationY === 180) {
            this.player.runAction(mySeqR);
        }
        else
        {
            this.player.runAction(moveRight);
        }
        this.player.rotationY = 180;//Ïàµ±ÓÚ¾µÏñ
    },
    playerMoveLeft: function () {
        var moveLeft = cc.moveTo(0.2, cc.v2(-(this.node.width / 2 - this.wallHeight), this.player.y));
        var moveL1 = cc.moveTo(0.1, cc.v2(-(this.node.width / 2 - this.wallHeight)+60, this.player.y));
        var moveL2 = cc.moveTo(0.2, cc.v2(-(this.node.width / 2 - this.wallHeight), this.player.y));
        var mySeqL = cc.sequence(moveL1, moveL2);
        if (this.player.rotationY === 0) {
            this.player.runAction(mySeqL);
        }
        else {
            this.player.runAction(moveLeft);
            this.player.rotationY = 0;
        }
   
    },
    

  
    onTouchStart(event) {
        
        var x =event.getLocationX();
        if (x > 500 / 2) {
            this.playerMoveRight();
        }
        else {
            this.playerMoveLeft();
        }
        cc.audioEngine.playEffect(this.jumpAudio, false);
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.audioEngine.setEffectsVolume(0.2);
        cc.audioEngine.playMusic(this.bgmAudio,true);
        this.player.setPosition(-(this.node.width / 2 - this.wallHeight), this.node.height / 2 - 140);
       this.background.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        for (var i = 0; i<8; i ++) {
            this.bornNewDici();
        }
        this.schedule((function () {
            this.gameTime++;
        }), 1);
      
    },

    start () {
        
    },

    update(dt) {
        if (this.diciCount >= 8) {
            this.schedule(this.bornNewDici, this.diciDuration/200);
        }
        this.timeLable.string = this.gameTime;
        cc.sys.localStorage.setItem("endTime", this.gameTime);
    },
    
});

