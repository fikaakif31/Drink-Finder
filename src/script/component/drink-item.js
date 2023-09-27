class DrinkItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .fan-art-club {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .drink-info {
          padding: 24px;
        }
        .drink-info > h2 {
          font-weight: lighter;
        }
        .drink-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <div class="drink-container">
          <img class="drink-thumb" src="${this._drink.strCocktailThumb}" alt="${this._drink.strCocktail}">
          <div class="drink-info">
            <h2>${this._drink.strCocktail}</h2>
            <p>${this._drink.strCategory} - ${this._drink.strGlass}</p>
            <p>${this._drink.strInstructions}</p>
            <ul class="drink_drink-ingredients">
              ${this.generateIngredientsList()}
            </ul>
            <div class="button-container">
              <a href="${this._drink.strYoutube}" target="_blank">Watch drink_drink Video</a>
              <a href="${this._drink.strSource}" target="_blank">drink_drink Source</a>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define('drink-item', DrinkItem);
