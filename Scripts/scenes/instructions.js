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
    var Instruction = /** @class */ (function (_super) {
        __extends(Instruction, _super);
        // constructors
        function Instruction() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instruction.prototype.Start = function () {
            this._instructionLabel = new objects.Label("Instructions", "60px", "Consolas", "#000000", config.Screen.INSTRUCTION_LABEL_X, config.Screen.INSTRUCTION_LABEL_Y, true);
            this._background = new objects.Background();
            var rules = "You will have 5 lives and you have to kill the enemies\n\ncomming to you using bullets.\n\nHere are some rules to play the game.\n\n1.You will have 5 lives.\n\n2.You will face two types of enemy and you can kill all of them.\n\n3.Space Stone will fall down and you have save your live from stone.\n\nYou cannot break stone\n\n4.You have to collect pink stones and after every 5 stones\n\nyou collect you will get one life increment";
            this._rulesLabel
                = new objects.Label(rules, "20px", "Consolas", "#000000", config.Screen.HALF_WIDTH, config.Screen.DISTANCE * 2, true);
            this._backButton = new objects.Button("BackButton", config.Screen.BACKBUTTON_X, config.Screen.BACKBUTTON_Y, true);
            this.Main();
        };
        Instruction.prototype.Update = function () { this._background.Update(); };
        Instruction.prototype.Reset = function () {
        };
        Instruction.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instruction.prototype.Main = function () {
            console.log("Starting - INSTRUCTION SCENE");
            // adding the background to the scene
            this.addChild(this._background);
            this.addChild(this._instructionLabel);
            this.addChild(this._backButton);
            this.addChild(this._rulesLabel);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map