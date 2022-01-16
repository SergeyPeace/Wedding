const Header={
    data(){
        return{
           HeaderInner:
           `<img class="logo_website" src="resource/images/load.png" alt="Иконка сайта" width="40px" height="40px" onclick="location.href='https://sergeypeace.github.io/Wedding/index.html'">
           <nav>
               <ul>
                   <li><a href='https://sergeypeace.github.io/Wedding/index.html'>Мы</a></li>
                  <!-- <li><a>Церемония</a></li> -->
                  <!--  <li><a>Наши мастера</a></li> -->
                  <!--  <li><a>Дворец бракосочетания</a></li> -->
                  <!--  <li><a>Фотогалерея</a></li> -->
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


/*Подключаем слушателя прокрутки страницы*/
window.addEventListener("scroll", throttleScroll, false);

/*Функция по активации анимации*/
function throttleScroll(e) {

    if (window.innerWidth < 1240){
        document.querySelector(".header__contacts").style="display: none;"
    }

    if (window.innerWidth < 830){
        document.querySelector(".logo_website").style="display: none;"
    }

    if (window.innerWidth > 1240){
        document.querySelector(".header__contacts").style="display: flex;"
        document.querySelector(".logo_website").removeAttribute('style')
    }
}
