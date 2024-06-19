import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {

  constructor() {
    console.log('HousesController reporting for duty!');
    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let innerHTMLString = ``
    houses.forEach((house) => innerHTMLString += house.houseCardHTMLTemplate)
    setHTML('houseListings', innerHTMLString)
  }

}