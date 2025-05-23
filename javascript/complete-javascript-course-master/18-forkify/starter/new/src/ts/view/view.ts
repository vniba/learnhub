import { Recipe as recipeInt } from '../model';
import icons from '../../img/icons.svg';

export default class View {
   protected data!: recipeInt;
 protected  parentElement: any;
 protected  errorMsg: any;
 protected message: any;

  render(d: recipeInt,render = true) {
    if (!d || (Array.isArray(d) && d.length === 0))    return this.renderError()

    this.data = d;
    const markup = this.generateMarkup();
    if(!render) return markup
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
 protected generateMarkup() {
    throw new Error('Method not implemented.');
  }

  protected clear() {
    this.parentElement.innerHTML = '';
  }
  update(data:recipeInt) {


    this.data = data;
    const newMarkup = this.generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup)
    const newElements = Array.from(newDom.querySelectorAll('*'))
    const curElements = Array.from(this.parentElement.querySelectorAll('*'))


    newElements.forEach((newEl, i) => {
      const curEl = curElements[i]! as Node
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue?.trim() !== ''){

        curEl.textContent = newEl.textContent
    }

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr=>curEl.setAttribute(attr.name,attr.value))

        }
    })

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
