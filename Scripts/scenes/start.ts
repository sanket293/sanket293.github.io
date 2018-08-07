// Author's name : sanketkumar vagadiya
// Student id : 300991500   
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018

namespace scenes {
  export class Start extends objects.Scene {
    // member variables
    private _welcomeLabel: objects.Label;
    private _playButton: objects.Button;
    private _playNextLevelButton: objects.Button;
    private _backButton: objects.Button;
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
        "Play !",
        "60px",
        "Consolas",
        "#000000",
        config.Screen.PLAY_LABEL_X,

        config.Screen.PLAY_LABEL_Y,
        true
      );
      this._playButton = new objects.Button(
        "PlayButton",
        config.Screen.PLAY_BUTTON_X,
        config.Screen.PLAY_BUTTON_Y,
        true
      );
      this._playNextLevelButton = new objects.Button(
        "PlayNextLevelButton",
        config.Screen.PLAY_NEXTLEVEL_BUTTON_X,
        config.Screen.PLAY_NEXTLEVEL_BUTTON_Y,

        true
      );
      this._backButton = new objects.Button(
        "BackButton",
        config.Screen.BACKBUTTON_X,
        config.Screen.BACKBUTTON_Y,
        true
      );
      this._background = new objects.Background();
      
      this.Main();
    }

    public Update(): void {this._background.Update();}

    public Reset(): void {}

    public Destroy(): void {
      this.removeAllChildren();
    }

    public Main(): void {
      console.log(`Starting - START SCENE`);
        // adding the background to the scene
        this.addChild(this._background);

      this.addChild(this._welcomeLabel);
      this.addChild(this._playButton);
      this.addChild(this._playNextLevelButton);

      // simple level play button - level 1
      this._playButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAY;
        },
        this
      );

      // next level play button - level 2
      this._playNextLevelButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.PLAYNEXTLEVEL;
        },
        this
      );

      // adding back button to scene
      this.addChild(this._backButton);

      this._backButton.on(
        "click",
        function() {
          managers.Game.CurrentState = config.Scene.MENU;
        },
        this
      );
    }
  }
}
