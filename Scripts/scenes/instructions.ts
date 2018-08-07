// Author's name : sanketkumar vagadiya
// Student id : 300991500   
// Last modified by:  sanketkumar vagadiya
// date modified : 30-7-2018

module scenes {
    export class Instruction extends objects.Scene {
        // member variables
        private _instructionLabel: objects.Label;
        private _rulesLabel: objects.Label;


        private _backButton: objects.Button;
        private _background: objects.Background;
    


        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._instructionLabel = new objects.Label("Instructions", "60px", "Consolas", "#000000",
            
          config.Screen.INSTRUCTION_LABEL_X,
          config.Screen.INSTRUCTION_LABEL_Y,            
            true);

            this._background = new objects.Background();
    

let rules="You will have 5 lives and you have to kill the enemies\n\ncomming to you using bullets.\n\nHere are some rules to play the game.\n\n1.You will have 5 lives.\n\n2.You will face two types of enemy and you can kill all of them.\n\n3.Space Stone will fall down and you have save your live from stone.\n\nYou cannot break stone\n\n4.You have to collect pink stones and after every 5 stones\n\nyou collect you will get one life increment";

 this._rulesLabel
= new objects.Label(rules, "20px", "Consolas", "#000000",
            
config.Screen.HALF_WIDTH,config.Screen.DISTANCE*2,            true);



            this._backButton = new objects.Button("BackButton", 
            config.Screen.BACKBUTTON_X,
            config.Screen.BACKBUTTON_Y,
            
            true);

            this.Main();
        }

        public Update(): void {this._background.Update();}

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - INSTRUCTION SCENE`);
  // adding the background to the scene
  this.addChild(this._background);
              this.addChild(this._instructionLabel);
            this.addChild(this._backButton);
this.addChild(this._rulesLabel);
            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.MENU;
            }, this);
        }
    }
}
