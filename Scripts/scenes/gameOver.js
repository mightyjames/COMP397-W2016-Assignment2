var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INTRO SCENE
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function GameOver() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        GameOver.prototype.start = function () {
            // add Intro Image
            this._gameoverLabel = new objects.Label("GAME OVER", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameoverLabel);
            // add the LEFT_CAVE button to the MENU scene
            this._restartButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this._restartButtonButtonClick, this);
            // LEFT_CAVE Button event listener
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        GameOver.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        GameOver.prototype._restartButtonButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.GAME_OVER;
            changeScene();
        };
        return GameOver;
    })(objects.Scene);
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameOver.js.map