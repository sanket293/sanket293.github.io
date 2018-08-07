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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "#000000", config.Screen.END_LABEL_X, config.Screen.END_LABEL_Y, true);
            this._exitButton = new objects.Button("ExitButton", config.Screen.EXIT_BUTTON_X, config.Screen.EXIT_BUTTON_Y, true);
            this._background = new objects.Background();
            this._replayButton = new objects.Button("ReplayButton", config.Screen.RESTART_BUTTON_X, config.Screen.RESTART_BUTTON_Y, true);
            this.Main();
        };
        End.prototype.Update = function () { this._background.Update(); };
        End.prototype.Reset = function () { };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Starting - END SCENE");
            // adding the background to the scene
            this.addChild(this._background);
            this.addChild(this._endLabel);
            this.addChild(this._exitButton);
            this.addChild(this._replayButton);
            this.addChild(managers.Game.ScoreBoard.HighScoreLabel);
            this._exitButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
            this._replayButton.on("click", function () {
                managers.Game.ScoreBoard.Reset();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map