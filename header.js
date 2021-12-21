const Header={
    data(){
        return{
           HeaderInner:
           `<img class="logo_website" src="resource/images/load.png" alt="Иконка сайта" width="40px" height="40px" style="float: left; margin-right: 15px; cursor: pointer;" onclick="location.href='https://sergeypeace.github.io/AntiCinema/index.html'">
           <nav>
               <ul>
                   <li><a href='https://sergeypeace.github.io/Wedding/index.html'>Главная</a></li>
                   <li><a href='https://sergeypeace.github.io/Wedding/tariff/tariff.html'>Тарифы</a></li>
                   <li><a href='https://sergeypeace.github.io/Wedding/stocks/stocks.html'>Акции</a></li>
                   <li><a href='https://sergeypeace.github.io/Wedding/reviews/reviews.html'>Отзывы</a></li>
                   <li><a href='https://sergeypeace.github.io/Wedding/photoalbums/photoalbums.html'>Фотогалерея</a></li>
                   <li><a href='https://sergeypeace.github.io/Wedding/contacts/contacts.html'>Контакты</a></li>
               </ul>
           </nav> 
           <div class="header__contacts">
              <div class="header__tel">
                <span>Серёжа</span>
                <a href="tel:+79117117782" style='font-family: "Comforter Brush", cursive; font-size: 16pt;'> +7(911)711-77-82</a>
              </div>
              <div class="header__tel">
                <span>Люда</span>
                <a href="tel:+79112623419" style='font-family: "Comforter Brush", cursive; font-size: 16pt;'> +7(911)262-34-19</a>
              </div>
            </div>`,
        }
    }
}



Vue.createApp(Header).mount('#Header')

/*Добавление логотипа с ссылкой на главную страницу*/
function logotip(){
if(String(window.location) !== 'https://sergeypeace.github.io/Wedding/index.html'){
    document.querySelector('.logo_website').src='../resource/images/load.png'
} 

else{
    document.querySelector('.logo_website').src='resource/images/load.png'
}}

logotip()

/*Подчеркивание названия страницы, на которой в данный момент находится клиент
Сравниваем ссылку внутри тега с ссылкой окна и в случае, если ссылки индентичны, то присваиваем атрибут «style»*/
for (let i = 0; i !== document.getElementsByTagName('a').length; i++){
    if (document.getElementsByTagName('a')[i].href===String(window.location)){
        document.getElementsByTagName('a')[i].style.textDecoration ="underline dotted" /*Подчеркивание ссылок в навигации*/
    }
}

