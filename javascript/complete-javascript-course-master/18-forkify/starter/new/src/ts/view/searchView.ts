class SearchView {

  protected parentElement = document.querySelector('.search')! as HTMLFormElement

  getQuery() {
   const query =   (this.parentElement.querySelector('.search__field') as HTMLInputElement).value
    this.clearInput()
    return query
  }
  protected clearInput() {
    (this.parentElement.querySelector('.search__field') as HTMLInputElement).value = ''
  }

  addHandlerSearch(handler:()=>void):void {
    this.parentElement.addEventListener('click',function (e:Event) {
      e.preventDefault()
      handler()

    })
  }


}

export default new SearchView()
