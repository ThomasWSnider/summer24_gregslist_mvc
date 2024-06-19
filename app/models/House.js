import { generateId } from "../utils/GenerateId.js"

export class House {

  /**
   * @param {{ id: string; year: number; address: string; bedrooms: number; bathrooms: number; sqft: number; price: number; description: string; imgUrl: string; damaged: boolean }} data
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.address = data.address
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.damaged = data.damaged
  }

  get houseCardHTMLTemplate() {
    return `
    <div class="col-12 house-card mb-5 shadow">
      <div class="row">
        <div class="col-12 col-md-6 px-0 ps-md-0">
          <img class="img-fluid"
            src="${this.imgUrl}"
            alt="${this.address}">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column justify-content-between">
          <div class="">
            <h2 class="fs-3 fw-bold">$${this.price}</h2>
            <h2 class="fs-3 text-end">${this.address}</h2>
            <hr>
            <h2 class="fs-4">${this.bedrooms} bed, ${this.bathrooms} bath</h2>
            <p>${this.description}</p>
            <p class="fw-bold">${this.sqft} square feet</p>
            <div>
            ${this.bugIcon}
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2 ">
            <p class="mb-0">${this.year}</p>
            <button class="btn btn-outline-danger">Delete Listing</button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get bugIcon() {
    if (this.damaged) {
      return `<i class="mdi mdi-bug-check-outline text-success display-2"></i>`
    }
    return `<i class="mdi mdi-bug-outline text-danger display-2"></i>`
  }
}