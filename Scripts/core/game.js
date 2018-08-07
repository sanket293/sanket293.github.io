// Author's name : sanketkumar vagadiya
// Student id : 300991500
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018
//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/play.png" },
        { id: "NextButton", src: "/Assets/images/NextButton.png" },
        { id: "BackButton", src: "/Assets/images/back.png" },
        { id: "SmallBackButton", src: "/Assets/images/backSmall.png" },
        { id: "PlayButton", src: "/Assets/images/easy.png" },
        { id: "PlayNextLevelButton", src: "/Assets/images/medium.png" },
        { id: "ExitButton", src: "/Assets/images/exit.png" },
        { id: "InstructionButton", src: "/Assets/images/instruction.png" },
        { id: "LivesImage", src: "/Assets/images/LivesImage.gif" },
        { id: "ReplayButton", src: "/Assets/images/restart.png" },
        { id: "PickUps", src: "/Assets/images/pickup.png" },
        { id: "Stone", src: "/Assets/images/stone.png" },
        { id: "Bullet", src: "/Assets/images/Bullet.png" },
        { id: "Shooter", src: "/Assets/images/Shooter.gif" },
        { id: "background", src: "/Assets/images/background.png" },
        { id: "island", src: "/Assets/images/island.png" },
        { id: "bugEnemy", src: "/Assets/images/bugEnemy.png" },
        { id: "alienEnemy", src: "/Assets/images/alianEnemy.png" },
        { id: "alienkill", src: "/Assets/audio/alienkill.wav" },
        { id: "pickupSound", src: "/Assets/audio/pickup.wav" },
        { id: "bugkill", src: "/Assets/audio/bugkill.wav" },
        { id: "yay", src: "/Assets/audio/yay.ogg" },
        { id: "thunder", src: "/Assets/audio/thunder.ogg" },
        { id: "engine", src: "/Assets/audio/engine.ogg" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.MENU;
        managers.Game.CurrentState = CurrentState;
        ScoreBoard = new managers.ScoreBoard();
        managers.Game.ScoreBoard = ScoreBoard;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.MENU:
                CurrentScene = new scenes.Menu();
                break;
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.INSTRUCTION:
                CurrentScene = new scenes.Instruction();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.PLAYNEXTLEVEL:
                CurrentScene = new scenes.PlayNextLevel();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
            case config.Scene.EXIT:
                CurrentScene = new scenes.Exit();
                break;
            // case config.Scene.NEWLEVEL:
            // CurrentScene = new scenes.NewLevel();
            // break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map