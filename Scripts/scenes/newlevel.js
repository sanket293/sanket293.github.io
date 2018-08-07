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
    var NewLevel = /** @class */ (function (_super) {
        __extends(NewLevel, _super);
        // constructors
        function NewLevel() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        NewLevel.prototype.Start = function () {
            this._endLabel = new objects.Label("Next Level!", "60px", "Consolas", "#000000", config.Screen.END_LABEL_X, config.Screen.END_LABEL_Y, true);
            this._startButton = new objects.Button("StartButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._exitButton = new objects.Button("ExitButton", config.Screen.EXIT_BUTTON_X, config.Screen.EXIT_BUTTON_Y, true);
            this.Main();
        };
        NewLevel.prototype.Update = function () { };
        NewLevel.prototype.Reset = function () { };
        NewLevel.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        NewLevel.prototype.Main = function () {
            console.log("Starting - END SCENE");
            this.addChild(this._endLabel);
            this.addChild(this._exitButton);
            this.addChild(this._startButton);
            this._exitButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
            this._startButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                // managers.Game.CurrentState = config.Scene.NEWLEVEL;
            }, this);
        };
        return NewLevel;
    }(objects.Scene));
    scenes.NewLevel = NewLevel;
})(scenes || (scenes = {}));
//# sourceMappingURL=newlevel.js.map