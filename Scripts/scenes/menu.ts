// INTRO SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startButton: objects.Button;
        private _welcomeLabel: objects.Label;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._welcomeLabel = new objects.Label("SLOT MACHINE","60px Consolas","#000000"
            ,config.Screen.CENTER_X,config.Screen.CENTER_Y);
            
            this.addChild(this._welcomeLabel);
            // add the LEFT_CAVE button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 80);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonButtonClick, this);
            // LEFT_CAVE Button event listener
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _startButtonButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.GAME_OVER;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        
    }
}