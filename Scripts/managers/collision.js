// Author's name : sanketkumar vagadiya
// Student id : 300991500
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) <
                object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "PickUps":
                            var pickupSound = createjs.Sound.play("pickupSound");
                            pickupSound.volume = 0.2;
                            managers.Game.ScoreBoard.Score += config.Screen.POINTS_FOR_PICKUP;
                            managers.Game.ScoreBoard.setPickupNumber =
                                managers.Game.ScoreBoard.PickUpNumber + 1;
                            return 1;
                        case "bugEnemy":
                            var bugkillSound = createjs.Sound.play("bugkill");
                            bugkillSound.volume = 0.2;
                            managers.Game.ScoreBoard.Lives -= 1;
                            return 1;
                        case "alienEnemy":
                            var alienSound = createjs.Sound.play("alienkill");
                            alienSound.volume = 0.2;
                            managers.Game.ScoreBoard.Lives -= 1;
                            return 1;
                        case "Stone":
                            var thunderSound2 = createjs.Sound.play("thunder");
                            thunderSound2.volume = 0.2;
                            managers.Game.ScoreBoard.Lives -= 1;
                            return 1;
                        case "Bullet":
                            var thunderSound3 = createjs.Sound.play("thunder");
                            thunderSound3.volume = 0.2;
                            return 1;
                    }
                    return 0;
                }
            }
            else {
                object2.isColliding = false;
                return 0;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map