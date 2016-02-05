// INTRO SCENE
module scenes {
    export class GameOver extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _restartButton: objects.Button;
        private _gameoverLabel: objects.Label;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add Intro Image
            this._gameoverLabel = new objects.Label("GAME OVER","60px Consolas","#000000"
            ,config.Screen.CENTER_X,config.Screen.CENTER_Y);
            
                        this.addChild(this._gameoverLabel);
            // add the LEFT_CAVE button to the MENU scene
            this._restartButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 80);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this._restartButtonButtonClick, this);
            // LEFT_CAVE Button event listener
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _restartButtonButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.GAME_OVER;
            changeScene();
        }
        
        // LEFT_CAVE Button click event handler
        
    }
}