// Author's name : sanketkumar vagadiya
// Student id : 300991500   
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018

namespace scenes {
  export class Exit extends objects.Scene {
    // member variables
    private _exitLabel: objects.Label;
    private _backButton: objects.Button;
    private _exitButton: objects.Button;
    private _background: objects.Background;
  
    // constructors
    constructor() {
      super();

      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {

      this._exitLabel = new objects.Label(
        "Exit",
        "60px",
        "Consolas",
        "#000000",
        config.Screen.EXIT_LABEL_X,
        config.Screen.EXIT_LABEL_Y,
        true
      );
      this._backButton = new objects.Button(
        "BackButton",
        config.Screen.BACKBUTTON_X,
        config.Screen.BACKBUTTON_Y,

        true
      );

      this._background = new objects.Background();
     

      this._exitButton = new objects.Button(
        "ExitButton",
        config.Screen.PLAY_BUTTON_X,
        config.Screen.PLAY_BUTTON_Y,
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
      console.log(`Starting - EXIT SCENE`);

      
  // adding the background to the scene
  this.addChild(this._background);
      // adding exit lable to scene
      this.addChild(this._exitLabel);

      // adding back button to scene
      this.addChild(this._backButton);

      this._backButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );

      this.addChild(this._exitButton);
      this._exitButton.on(
        "click",
        function() {
          window.close();
        },
        this
      );
    }
  }
}
