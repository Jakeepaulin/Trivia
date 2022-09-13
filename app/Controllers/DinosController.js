import { dinosService } from "../Services/DinosService.js";

function drawDinos() {
  let template = "";
}

export class DinosController {
  constructor() {
    console.log("Hello from the Constructor!");
  }

  async getDinos() {
    try {
      await dinosService.getDinos();
    } catch (error) {
      error.log("Error");
    }
  }
}
