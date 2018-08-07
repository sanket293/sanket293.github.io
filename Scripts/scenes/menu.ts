// Author's name : sanketkumar vagadiya
// Student id : 300991500   
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018

namespace scenes {
  export class Menu extends objects.Scene {
    // member variables
    private _welcomeLabel: objects.Label;
    private _exitButton: objects.Button;
    private _startButton: objects.Button;
    private _instructionButton: objects.Button;
    private _background: objects.Background;
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {
      this._welcomeLabel = new objects.Label(
        "Alien Shooter!",
        "60px",
        "Consolas",
        "#000000",
        config.Screen.HALF_WIDTH,
        config.Screen.TOP_SPACE * 2,
        true
      );

      this._background = new objects.Background();
     
      this._startButton = new objects.Button(
        "StartButton",
        config.Screen.HALF_WIDTH,
        config.Screen.HALF_HEIGHT,
        true
      );
      this._instructionButton = new objects.Button(
        "InstructionButton",
        config.Screen.INSTUCTION_BUTTON_X,
        config.Screen.INSTUCTION_BUTTON_Y,
        true
      );
      this._exitButton = new objects.Button(
        "ExitButton",
        config.Screen.EXIT_BUTTON_X,
        config.Screen.EXIT_BUTTON_Y,

        true
      );

      this.Main();
    }

    public Update(): void { this._background.Update();}

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - Menu SCENE`);

  // adding the background to the scene
  this.addChild(this._background);
        this.addChild(this._welcomeLabel);
      this.addChild(this._startButton);
      this.addChild(this._instructionButton);
      this.addChild(this._exitButton);




      this._startButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.START;
        },
        this
      );

      this._instructionButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.INSTRUCTION;
        },
        this
      );

      this._exitButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.EXIT;
        },
        this
      );
    }
  }
}
