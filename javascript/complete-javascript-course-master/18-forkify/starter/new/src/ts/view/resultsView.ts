import View from './view';
import { Recipe } from '../model';
import preView from './preView';

class ResultsView extends View{
  protected parentElement = (document.querySelector('.results') as HTMLUListElement)
    protected errorMsg = 'no recipe found! Please try another food'
  protected message = ''


  protected generateMarkup(): string {
    return this.data.map((results: Recipe) => preView.render(results,false)).join()
  }
  }

export default new ResultsView()
