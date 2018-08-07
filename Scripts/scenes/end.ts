// Author's name : sanketkumar vagadiya
// Student id : 300991500   
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018

namespace scenes {
  export class End extends objects.Scene {
    // member variables
    private _endLabel: objects.Label;
    private _exitButton: objects.Button;
    private _replayButton: objects.Button;
    private _background: objects.Background;
  
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._endLabel = new objects.Label(
        "Game Over!",
        "60px",
        "Consolas",
        "#000000",
      config.Screen.END_LABEL_X,
      config.Screen.END_LABEL_Y,
        true
      );
      this._exitButton = new objects.Button("ExitButton", 
config.Screen.EXIT_BUTTON_X,
config.Screen.EXIT_BUTTON_Y,      
      true);
      
      this._background = new objects.Background();
     
      this._replayButton = new objects.Button("ReplayButton",
config.Screen.RESTART_BUTTON_X,
config.Screen.RESTART_BUTTON_Y,       
       
       true);

      this.Main();
    }

  
    public Update(): void { this._background.Update();}

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - END SCENE`);
          
  // adding the background to the scene
  this.addChild(this._background);
  
      this.addChild(this._endLabel);
      this.addChild(this._exitButton);
      this.addChild(this._replayButton);
      this.addChild(managers.Game.ScoreBoard.HighScoreLabel);

      this._exitButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );

      this._replayButton.on(
        "click",
        function() {
          managers.Game.ScoreBoard.Reset();
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );
    }
  }
}
