import View from './view';
import icons from '../../img/icons.svg'
import preView from './preView';
import { Recipe } from '../model';
class BookmarksView extends View {
  protected parentElement = (document.querySelector('.bookmarks__list') as HTMLUListElement)
    protected errorMsg = 'no bookmarks yet :)'
  protected message = ''


  protected generateMarkup(): string {
    return this.data.map((results: Recipe) => preView.render(results,false)).join()
  }

  }

export default new BookmarksView()
