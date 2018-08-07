// Author's name : sanketkumar vagadiya
// Student id : 300991500   
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018

namespace scenes {
  export class NewLevel extends objects.Scene {
    // member variables
    private _endLabel: objects.Label;
    private _exitButton: objects.Button;
    private _replayButton: objects.Button;
    private _startButton: objects.Button; 
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._endLabel = new objects.Label(
        "Next Level!",
        "60px",
        "Consolas",
        "#000000",
      config.Screen.END_LABEL_X,
      config.Screen.END_LABEL_Y,
        true
      );

      this._startButton = new objects.Button(
        "StartButton",
        config.Screen.HALF_WIDTH,
        config.Screen.HALF_HEIGHT,
        true
      );

      this._exitButton = new objects.Button("ExitButton", 
config.Screen.EXIT_BUTTON_X,
config.Screen.EXIT_BUTTON_Y,      
      true);
      

      this.Main();
    }

    public Update(): void {}

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - END SCENE`);
      this.addChild(this._endLabel);
      this.addChild(this._exitButton);
      this.addChild(this._startButton);
 

      this._exitButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );

      this._startButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          // managers.Game.CurrentState = config.Scene.NEWLEVEL;
        },
        this
      );
    }
  }
}
