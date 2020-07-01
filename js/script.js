var searchButton = document.querySelector(".search-open-btn");
var searchForm = document.querySelector(".search-form-wrapper");



/*Открытие и закрытие формы поиска - начало*/
if (searchButton && searchForm) {
  searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle("hide-form");
  });
}
/*Открытие и закрытие формы поиска - конец*/


/*Ошибка отправки пустого поля - начало*/

