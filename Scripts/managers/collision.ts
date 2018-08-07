// Author's name : sanketkumar vagadiya
// Student id : 300991500
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018

namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): number {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (
        math.Vec2.Distance(P1, P2) <
        object1.halfHeight + object2.halfHeight
      ) {
        if (!object2.isColliding) {
          object2.isColliding = true;

          switch (object2.name) {
            case "PickUps":
              let pickupSound = createjs.Sound.play("pickupSound");
              pickupSound.volume = 0.2;
              managers.Game.ScoreBoard.Score += config.Screen.POINTS_FOR_PICKUP;
              managers.Game.ScoreBoard.setPickupNumber =
                managers.Game.ScoreBoard.PickUpNumber + 1;

              return 1;

            case "bugEnemy":
              let bugkillSound = createjs.Sound.play("bugkill");
              bugkillSound.volume = 0.2;

              managers.Game.ScoreBoard.Lives -= 1;

              return 1;

            case "alienEnemy":
              let alienSound = createjs.Sound.play("alienkill");
              alienSound.volume = 0.2;

              managers.Game.ScoreBoard.Lives -= 1;
              return 1;

            case "Stone":
              let thunderSound2 = createjs.Sound.play("thunder");
              thunderSound2.volume = 0.2;
              managers.Game.ScoreBoard.Lives -= 1;
              return 1;

            case "Bullet":
              let thunderSound3 = createjs.Sound.play("thunder");
              thunderSound3.volume = 0.2;

              return 1;
          }
          return 0;
        }
      } else {
        object2.isColliding = false;
        return 0;
      }
    }
  }
}
