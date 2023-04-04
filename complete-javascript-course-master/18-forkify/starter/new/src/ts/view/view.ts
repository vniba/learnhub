import { Recipe as recipeInt } from '../model';
import icons from '../../img/icons.svg';

export default class View {
   protected data!: recipeInt;
 protected  parentElement: any;
 protected  errorMsg: any;
 protected message: any;

  render(d: recipeInt) {
    if (!d || (Array.isArray(d) && d.length === 0))    return this.renderError()

    this.data = d;
    const markup = this.generateMarkup();
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
 protected generateMarkup() {
    throw new Error('Method not implemented.');
  }

  protected clear() {
    this.parentElement.innerHTML = '';
  }

  public renderSpinner() {
    const markup = `
   <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message:string = this.errorMsg) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> `
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message:string = this.message) {
    const markup = `<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> `
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
