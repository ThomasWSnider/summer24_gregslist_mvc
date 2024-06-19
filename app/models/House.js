import { generateId } from "../utils/GenerateId.js"

export class House {

  /**
   * @param {{ id: string; year: number; name: any; bedrooms: number; bathrooms: number; sqft: number; price: number; description: string; imgUrl: string; damaged: boolean }} data
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.damaged = data.damaged
  }

}