$('.current_lang').click(function(){
    $('.langs_list').toggle()
})

$(document).scroll(function(){
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 20)
    {
        $('.menu_top').slideUp(300)
        $('.menu_bot').css('margin-top','10px')
    }else{
        $('.menu_top').slideDown(300)
        $('.menu_bot').css('margin-top','0')
    }


    var screen = window.pageYOffset || document.documentElement.scrollTop;
    const golovna = 0;
    const about = $(".about_sec").offset().top;
    const project = $(".project_sec").offset().top;
    const help = $(".help_sec").offset().top;
    if(screen == golovna ){
        $('.link_el').removeClass('link_active')
        $('.step_1').addClass('link_active')
    }else     if(screen >= about - 100 && screen < about + 350){
        $('.link_el').removeClass('link_active')
        $('.step_2').addClass('link_active')
    }else     if(screen >= project - 100 && screen < project + 350){
        $('.link_el').removeClass('link_active')
        $('.step_3').addClass('link_active')
    }else     if(screen >= help - 100 && screen < help + 350){
        $('.link_el').removeClass('link_active')
        $('.step_4').addClass('link_active')
    }


})
$('.no_menu').click(function(){
    let elem = 'project_sec'
    let element = $(`.${elem}`).offset().top;
    if(window.innerWidth < 900){
        window.scrollTo({ top: element - 85, behavior: 'smooth'});
    }else{       
        window.scrollTo({ top: element - 85, behavior: 'smooth'});
    }
})
function scrollToElement(elem){
    let element = $(`.${elem}`).offset().top;
    if(window.innerWidth < 900)
    {
        window.scrollTo({ top: element - 85, behavior: 'smooth'});
        if($('.hamburger-lines').hasClass('mobile_open')){
            $('.hamburger-lines').toggleClass('mobile_open')
            $('.mobile_content').toggleClass('cont_open') 
        }
    }else{
        window.scrollTo({ top: element - 85 , behavior: 'smooth'});
    }
}
function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth'});
    if(window.innerWidth < 900)
    {
        if($('.hamburger-lines').hasClass('mobile_open')){
            $('.hamburger-lines').toggleClass('mobile_open')
            $('.mobile_content').toggleClass('cont_open') 
        }
    }
}

var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    zoom: true,
    slidesPerView: 3,
    lazy: true,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

$('.go_logo').click(function(){
    $('.gofund').toggleClass('go_opened')
})
$('.hamburger-lines').click(function(){
    $(this).toggleClass('mobile_open')
    $('.mobile_content').toggleClass('cont_open')
})

function translate(lang){
 if(lang.toUpperCase() == 'UA'){
    $('#text_1').html(`
    <em>БФ «Добровольчих сил»</em> співпрацює із найбільшою благодійною краудфандинговою платформою <a href="https://www.gofundme.com/c/how-it-works" target="_blank" rel="noopener noreferrer">GoFundMe</a>, на строрінці якої ви можете ознайомитись з усіма пожертвуваннями у фонд та більш детально ознайомитись із програмою фонду.
    `)
    $('.pidtr').text('ПІДТРИМАТИ')
    $('.step_1').text('Головна')
    $('.step_2').text('Про нас')
    $('.step_3').text('Благодійні програми')
    $('.step_4').text('Ваша допомога')
    $('.stepp_1').text('Головна')
    $('.stepp_2').text('Про нас')
    $('.stepp_3').text('Благодійні програми')
    $('.stepp_4').text('Ваша допомога')
    $('.ab').text('Про нас')

    $('.pozh').text('ПОЖЕРТВУВАТИ')
    $('#text_2').html(`
    Допоможи Українцям разом з<br> <em>Благодійний Фонд «Добровольчих сил»</em>
    `)
    $('#nev').text('Навіть невелике пожертвування - велика справа.')
    $('#oznai').text('Ознайомтесь з нашими благодійними програмами.')
    $('#prog').text('БЛАГОДІЙНІ ПРОГРАМИ')
    $('#kosh').text('Всі кошти від спонсорської допомоги йдуть на реалізацію благодійних проектів та допомогу людям.')
    $('#adm').text(`Операційні та адміністративні витрати фонду сплачуються з особистих коштів керівництва фонду.`)
    $('#work').text(`Робота фонду максимально прозора і відкрита, ви можете ознайомитись зі звітами про витрати та надання допомоги.`)
    $('.vol').text('Благодійний Фонд «Добровольчих сил»')
    $('#text_3').text('Фонд розпочав роботу на початку повномасштабної війни з Росією , щоб допомагати тим, хто втратив домівку та змушений був покинути її через окупацію чи розгортання бойових дій. У вересні ми відкрили штаб, в якому 2 рази на тиждень відбувається організація гуманітарної допомоги для переселенців, які знайшли присток у м. Кривий Ріг.')
    $('#big_text').html(`Саме в штабі отримали допомогу вже понад 4000 осіб. Вимушено переміщені українці мали змогу отримати речі першої необхідності від фонду, міжнародних партнерів та небайдужих українців.
    <br><br>
    Переселенці дуже потребують допомоги, адже російська війна забрала в них все – дім та безтурботне життя. БФ «Добровольчих сил» робить все можливе, щоб допомогти постраждалим українцям, які на власному досвіді відчули гіркі наслідки війни.
    <br><br>
    Тисячі українців втратили своє спокійне життя і домівки через війну. І наш фонд «Добровольчих сил» хоче допомогти кожному в такій важкій ситуації.
    <br><br>
    Ми віримо, що наша діяльність матиме великі досягнення і ми зможемо допомогати ще більшій кількості людей!
    
    Долучайтесь до добрих справ «Добровольчих сил», давайте робити добро разом!
    <br><br>
    <strong>Приєднуйтеся до нашої боротьби за свободу, підтримуйте наші проєкти!</strong>
    `)
    $('#blag').text('Благодійні програми фонду')
    $('#pyat').html('Пожертвування в розмірі <strong>5$</strong> забезпечить одну дитину водою на цілий тиждень.')
    $('#dvad').html(`Пожертвування в розмірі <strong>20$</strong> покриває вартість усіх необхідних засобів гігієни для мами з дитиною на 1 місяць.`)
    $('#pisyat').html(`Пожертвування в розмірі <strong>55$</strong> є достатнім для забезпечення однієї людини достатньою кількістю їжі та води на 1 місяць.`)
    $('#stotr').html(`Пожертвування в розмірі <strong>130$</strong> профінансує проживання однієї сім'ї з дитиною протягом 1 місяця.`)
    $('#viys').html(`Благодійна програма <br> <em>«Військова допомога»</em>`)
    $('#viys_desc').text(`Основною метою Благодійної програми є надання допомоги Збройним Силам
    України, в тому числі, Силам територіальної оборони Збройних Сил України,
    добровольчим формуванням територіальних громад та іншим утвореним відповідно до
    законів України військовим формуванням.`)
    $('#civ').html(`Благодійна програма <br> <em>«Цивільна допомога»</em>`)
    $('#civ_desc').text(`Основною метою Благодійної програми є надання допомоги вимушеним
    переселенцям, внутрішньо переміщеним особам, біженцям та будь-яким іншим особам,
    які постраждали чи можуть постраждати внаслідок військової агресії Російської Федерації
    проти України.`)
    $('#inf').html(`Благодійна програма <br> <em>«Інформаційна допомога»</em>`)
    $('#inf_desc').text(`Основною метою Благодійної програми є надання допомоги Збройним Силам
    України, військовим формуванням, органам державної влади та органам місцевого
    самоврядування, юридичним особа в інформаційній сфері.`)
    $('#some_help').html(`<em>БФ «Добровольчих сил»</em> забезпечує гуманітарною допомогою родини, які вимушено переміщені в Кривий Ріг. Щоб і надалі виконувати благодійну місію, ми потребуємо невідкладної допомоги у цьому. 
    Ваші донати – це можливість ще більше допомогти людям, які стали жертвами російської агресії. Будь-яка грошова підтримка важлива для українських переселенців, які залишилися без нічого.
    `)
    $('#ukr').text('Українцям потрібна ваша допомога')
    $('#byd').text(`Будь-яка сумма надіслана вами допомогає врятувати життя людини`)
    $('#rights').text('© 2023 Volunteer forces. Всі права захищені')
 }else{
    $('#text_1').html(`
    <em>Volunteer Force Foundation</em> cooperates with the largest charity crowdfunding platform <a href="https://www.gofundme.com/c/how-it-works" target="_blank" rel="noopener noreferrer">GoFundMe</a>, where you can find a list of all donations to the foundation and learn more about the foundation's program.
    `)
    $('.pidtr').text('SUPPORT')
    $('.step_1').text('Home')
    $('.step_2').text('About us')
    $('.step_3').text('Charity programs')
    $('.step_4').text('Your help')
    $('.stepp_1').text('Home')
    $('.stepp_2').text('About us')
    $('.stepp_3').text('Charity programs')
    $('.stepp_4').text('Your help')
    $('.ab').text('About us')

    $('.pozh').text('DONATE')
    $('#text_2').html(`
    Help Ukrainians with the <br> <em> Volunteer Forces Foundation</em>
    `)
    $('#nev').text('Even a small donation is a big deal.')
    $('#oznai').text('Check out our charity programs.')
    $('#prog').text('CHARITY PROGRAMS')
    $('#kosh').text('All proceeds from sponsorship go to implementing charitable projects and helping people.')
    $('#adm').text(`Operating and administrative expenses of the fund are paid from the personal funds of the fund's management.`)
    $('#work').text(`The foundation's work is as transparent and open as possible, and you can read reports on expenditures and assistance.`)
    $('.vol').text('Volunteer Forces Foundation')
    $('#text_3').text('The Foundation started its work at the beginning of the full-scale war with Russia to help those who lost their homes and were forced to leave them because of the occupation or the outbreak of hostilities. In September, we opened a headquarters where we organize humanitarian aid for IDPs who have found a home in Kryvyi Rih twice a week.')
    $('#big_text').html(`
    More than 4000 people have already received help at the headquarters. The internally displaced Ukrainians were able to receive basic necessities from the Foundation, international partners and concerned Ukrainians.
    <br><br>
    The IDPs are in dire need of help, as the Russian war has taken away everything from them - their homes and carefree lives. The Volunteer Forces Foundation is doing everything possible to help the affected Ukrainians who have experienced the bitter consequences of war firsthand.
    <br><br>
    Thousands of Ukrainians have lost their peaceful lives and homes because of the war. And our Volunteer Force Foundation wants to help everyone in this difficult situation.
    <br><br>
    We believe that our activities will have great achievements and we will be able to help even more people! Join the good deeds of the Volunteer Force, let's do good together!
    <br><br>
    <strong>Join our fight for freedom and support our projects!</strong>
    `)
    $('#blag').text('Charitable programs of the Foundation')
    $('#pyat').html('A donation of <strong>$5</strong> will provide one child with water for a whole week.')
    $('#dvad').html(`A donation of <strong>20$</strong> covers the cost of all the necessary hygiene products for a mother and child for 1 month.`)
    $('#pisyat').html(`A donation of <strong>55$</strong> is enough to provide one person with enough food and water for 1 month.`)
    $('#stotr').html(`A donation of <strong>130$</strong> will finance the accommodation of one family with a child for 1 month.`)
    $('#viys').html(`Charity program <br><em>"Military Assistance"</em>`)
    $('#viys_desc').text('The main purpose of the Charity Program is to provide assistance to the Armed Forces of Ukraine, including the Territorial Defense Forces of the Armed Forces of Ukraine, volunteer formations of territorial communities and other military formations formed in accordance with the laws of Ukraine.')
    $('#civ').html(`Charity program <br><em>"Civilian Assistance"</em>`)
    $('#civ_desc').text('The main goal of the Charity Program is to provide assistance to internally displaced persons, refugees and any other persons who have suffered or may suffer as a result of the military aggression of the Russian Federation against Ukraine.')
    $('#inf').html(`Charity program <br><em>"Information assistance"</em>`)
    $('#inf_desc').text('The main goal of the Charity Program is to provide assistance to the Armed Forces of Ukraine, military formations, state and local authorities, and legal entities in the information sector.')
    $('#some_help').html(`
    <em>Volunteer Forces Foundation</em> provides humanitarian aid to families who have been displaced to Kryvyi Rih. To continue to fulfill our charitable mission, we need urgent help in this regard. 
Your donations are an opportunity to further help people who have become victims of Russian aggression. Any financial support is important for Ukrainian IDPs who have been left with nothing.
    `)
    $('#ukr').text('Ukrainians need your help')
    $('#byd').text(`Any amount you send helps to save a person's life`)
    $('#rights').text('© 2023 Volunteer forces. All rights reserved')
 }
}