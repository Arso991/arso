

/*===========> IMPORTING MODULES FROM MYMODULE.JS  <============*/
//importing all methode from mymodules.js as myModules
// import * as myModules from './mymodules.js';

// Using the getDatas module to get datas from the database
//let users = myModules.getDatas('users');
//users.then(datas => console.log(datas));


// Using the postDattas module to post datas into the database
// myModules.postDatas('users', {
//   'id': 15,
//   "first-name": "olivier",
//   "last-name": "koubolou",
//   "user-name": "ozondo",
//   "email": "oliverzondo90@gmail.com",
//   "password": "1256",
//   "picture": "",
//   "role": "admin",
//   "privilege": 3
// });


// Using the putDatas module to modifiy the json file datas
// myModules.updateDatas('users', 9 , {
//   'id' : 9,
//   "first-name": "LORINE",
//   "last-name": "POPPINS",
//   "user-name": "TUUT",
//   "email": "FETHHTYTJdd0@gmail.com",
//   "password": "485963",
//   "picture": "www.doc.jpg",
//   "role": "admin",
//   "privilege": 3
// }
// );

//using deleteDatas module to delete datas from the database
// myModules.deleteDatas('users', 15,16);


/*==================================>  SIDEBAR ACTIVE <==============================================*/

let menuBtn = document.querySelector('.navbar__left')
let navbarLeft = document.querySelector('.navbar__left')
let menu = document.querySelector('.sidebar')
let sidebarLogo = document.querySelector('.sidebar__logo')
let sidebarDayDate = document.querySelector('.sidebar__day__date')
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        if (!navbarLeft.classList.contains('active')) {
            navbarLeft.classList.add('active')
            menu.classList.add('active')
            sidebarLogo.classList.add('active')
            sidebarDayDate.classList.add('active')
            contentRight.classList.add('active') 
        }
        else {
            navbarLeft.classList.remove('active')
            menu.classList.remove('active')
            sidebarLogo.classList.remove('active')
            sidebarDayDate.classList.remove('active')
            contentRight.classList.remove('active') 
        }
    })
}

/*==========================>  SIDEBAR MENU LOGO ACTIVE <================================*/
const sidebarListItem = document.querySelectorAll('.sidebar__list__item')

if (sidebarListItem) {
    sidebarListItem.forEach(item => {
        
        item.addEventListener('click', () => {
           /*  let menuActive = item.classList.add('active')
            console.log(menuActive); */
            
            const sidebarListItemActive = document.querySelector('.sidebar__list__item.active')
            const sidebarMenuLogoActive = document.querySelector('.sidebar__menu__logo.active')
            const sidebarMenuLogo = item.querySelector('.sidebar__menu__logo')
            if (!item.classList.contains('active')) {
                item.classList.add('active')
                sidebarListItemActive.classList.remove('active')
            } else {
                item.classList.remove('active')
                sidebarListItemActive.classList.add('active')
               
            } 
            if(!sidebarMenuLogo.classList.contains('active') ){
                    sidebarMenuLogo.classList.add('active')
                    sidebarMenuLogoActive.classList.remove('active')
            }else if(sidebarMenuLogo.classList.contains('active') ){
                    sidebarMenuLogo.classList.remove('active')
                    sidebarMenuLogoActive.classList.add('active')     
            }
            let menuActive = document.querySelector('.sidebar__list__item.active')

                if(menuActive){
                    const mainListItem = document.querySelectorAll('.main_content_list_item')
                    mainListItem.forEach(item =>{
                        let menuActiveId = item.id
                        console.log(menuActiveId);
                        if(menuActive.classList.contains(menuActiveId)){
                            item.classList.add('active')
                            item.style.display='block'
                            console.log(item);
                        }else{
                            item.classList.remove('active')
                            item.style.display='none'
                            console.log(item);
                        }
                    })
                }
        })
    })
}
/* const mainListItem = document.querySelectorAll('.main_content_list_item')
mainListItem.forEach(item =>{
    console.log(item);

   let mainListItemActive = mainListItem.filter(posts => posts.contains(`${menuActive}`) && posts.contains('active'))
}) */
/*==================================>  DATE AND HOURS <==============================================*/
/*=========================>  DATE  <=========================*/
let date = new Date()
let showDate = document.querySelector('.date')
let newDate = date.toLocaleString('fr-Fr', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
})
showDate.innerText = newDate

/*=========================>  HOUR  <=========================*/
async function time() {
    let date = new Date()
    let showHour = document.querySelector('.hour')
    let time = date.toLocaleString('fr-Fr', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    showHour.innerText = time
}
setInterval(time, 1)


/*=================== Deconnexion ================*/
let profilIcone=document.querySelector('.navbar__right .user')
let modalDeconnexion=document.querySelector('.navbar__right .deconnexion')
let overlay=document.querySelector('span.overlay')
if(profilIcone){
    profilIcone.addEventListener('click', ()=>{
        if(!modalDeconnexion.classList.contains('active') && !overlay.classList.contains('active')){
            modalDeconnexion.classList.add('active')
            overlay.classList.add('active')
        }else{
            modalDeconnexion.classList.remove('active')
            overlay.classList.remove('active')
        }
    })
}

if(overlay){
    overlay.addEventListener('click', ()=>{
        if(modalDeconnexion.classList.contains('active') && overlay.classList.contains('active')){
            modalDeconnexion.classList.remove('active')
            overlay.classList.remove('active')
        }
})}



