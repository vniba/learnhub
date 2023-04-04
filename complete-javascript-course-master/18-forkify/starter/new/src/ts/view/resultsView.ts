import View from './view';
import icons from '../../img/icons.svg'
class ResultsView extends View{
  protected parentElement = (document.querySelector('.results') as HTMLUListElement)

  protected generateMarkup(): string {
    return this.data.map(this.generateMarkupPreview).join()
  }


  protected generateMarkupPreview(result: { id: string; image: string, title: string;publisher:string }) {
    return `
     <li class="preview">
            <a class="preview__link" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>

              </div>
            </a>
          </li>
`
  }
  }

export default new ResultsView()
