import { DinosController } from "./Controllers/DinosController.js";

class App {
  dinoControllers = new DinosController();
}

window["app"] = new App();
