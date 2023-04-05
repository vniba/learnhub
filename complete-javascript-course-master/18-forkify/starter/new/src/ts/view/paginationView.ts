import View from './view';
import icons from '../../img/icons.svg'
class Pagination extends View {
  protected parentElement = document.querySelector('.pagination')! as HTMLDivElement;

   addHandlerClick(handler:(gotoPage:number) => void): void  {
     this.parentElement.addEventListener('click', function (e){

       const btn = (e.target as Element)?.closest('.btn--inline') as HTMLButtonElement;
       if (!btn) return;
       const gotoPage = Number(btn?.dataset?.goto)
       console.log(gotoPage);
       handler(gotoPage)
      })
    }

  protected generateMarkup(): string {
    const currentPage =this.data.page
    const numPage = Math.ceil(this.data.results.length / this.data.resultsPerPage);
    console.log(numPage);




    // page 1
    if (currentPage === 1 && numPage > 1) {
      return `
       <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `
    }
    // last page
    if (currentPage === numPage && numPage > 1) {

      return `<button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`;
    }
    // other pages
    if (currentPage < numPage) {
      return `
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>

      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>`

    }
    // page 1 no page
    return ''
  }


}
export default new Pagination();
