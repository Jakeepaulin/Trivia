export class Dino {
  constructor(data) {
    this.name = data.name;
    this.image = data.image;
  }

  get DinoTemplate() {
    return /*html*/ `
    <div class="col-md-3 my-3">
        <div class="card">
          <img src="${this.image}" alt="">
            <div class="card-body">
             <h4>${this.name}</h4>
          </div>
        </div>
      </div>
    `;
  }
}
