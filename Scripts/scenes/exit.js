// Author's name : sanketkumar vagadiya
// Student id : 300991500   
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Exit = /** @class */ (function (_super) {
        __extends(Exit, _super);
        // constructors
        function Exit() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Exit.prototype.Start = function () {
            this._exitLabel = new objects.Label("Exit", "60px", "Consolas", "#000000", config.Screen.EXIT_LABEL_X, config.Screen.EXIT_LABEL_Y, true);
            this._backButton = new objects.Button("BackButton", config.Screen.BACKBUTTON_X, config.Screen.BACKBUTTON_Y, true);
            this._background = new objects.Background();
            this._exitButton = new objects.Button("ExitButton", config.Screen.PLAY_BUTTON_X, config.Screen.PLAY_BUTTON_Y, true);
            this.Main();
        };
        Exit.prototype.Update = function () { this._background.Update(); };
        Exit.prototype.Reset = function () { };
        Exit.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Exit.prototype.Main = function () {
            console.log("Starting - EXIT SCENE");
            // adding the background to the scene
            this.addChild(this._background);
            // adding exit lable to scene
            this.addChild(this._exitLabel);
            // adding back button to scene
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
            this.addChild(this._exitButton);
            this._exitButton.on("click", function () {
                window.close();
            }, this);
        };
        return Exit;
    }(objects.Scene));
    scenes.Exit = Exit;
})(scenes || (scenes = {}));
//# sourceMappingURL=exit.js.map