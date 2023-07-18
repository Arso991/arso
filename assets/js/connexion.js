
import * as myModules from './mymodules.js';

/*========================> EYES FOR OPEN AND CLOSE PASSWORD <======================== */
/*====================> CLOSE EYES PASSWORD <================= */
let mdi_eye_off = document.querySelector('.mdi-eye-off')
let mdi_eye = document.querySelector('.mdi-eye')
let input__pwd = document.querySelector('#password')
if (mdi_eye_off) {
    mdi_eye_off.addEventListener('click', () => {
        if (!mdi_eye_off.classList.contains('active') && !mdi_eye.classList.contains('active')) {
            mdi_eye_off.classList.add('active')
            mdi_eye.classList.add('active')
            input__pwd.type = 'text'
        } else {
            mdi_eye_off.classList.remove('active')
            mdi_eye.classList.remove('active')
            input__pwd.type = 'password'
        }
    })
}
/*====================> OPEN EYES PASSWORD <================= */
if (mdi_eye) {
    mdi_eye.addEventListener('click', () => {
        if (mdi_eye.classList.contains('active') && mdi_eye.classList.contains('active')) {
            mdi_eye_off.classList.remove('active')
            mdi_eye.classList.remove('active')
            input__pwd.type = 'password'
        } else {
            mdi_eye_off.classList.add('active')
            mdi_eye.classList.add('active')
            input__pwd.type = 'text'
        }
    })
}

/*================================> CONNECTION <===================================*/
let connexionBtn = document.querySelector('#connexion')
let modalLoader = document.querySelector('.modal .connexion__modal .loader')
/* let conectionForm = document.querySelector('.connexion__modale__form')  */
/* conectionForm.classList.remove('active') */
if (connexionBtn) {
    connexionBtn.addEventListener('click', () => {
        let connexion__modal = document.querySelector('.connexion__modal')
        if (!connexion__modal.classList.contains('active')){
            connexion__modal.classList.add('active')
          /*   conectionForm.classList.add('active') */
            modalLoader.innerHTML = ''
        }
    })
}

/*=============================> FORGOT PASSWORD <================================*/
let forgotLink = document.querySelector('.connexion__modale__form__pwd__txt a')
if (forgotLink) {
    forgotLink.addEventListener('click', () => {
        let forgot__password = document.querySelector('.forgot__password')
        let connexion__modal = document.querySelector('.connexion__modal')
        if (!forgot__password.classList.contains('active')) {
           /*  conectionForm.classList.remove('active')  */
            forgot__password.classList.add('active')
            connexion__modal.classList.remove('active')
        }
    })
}

/*=============================> CANCEL FORGOT PASSWORD <================================*/
let annulerBtn = document.querySelector('#annuler')
let forgot__password = document.querySelector('.forgot__password')
let connexion__modal = document.querySelector('.connexion__modal')
if (annulerBtn) {
    annulerBtn.addEventListener('click', () => {
        forgot__password.classList.remove('active')
        connexion__modal.classList.add('active')
        /* conectionForm.classList.add('active')  */
        document.querySelector('.error_email').innerHTML = '';
    })
}

/*=============================> CLOSE CONNECTION MODAL <================================*/
let fermeBtn = document.querySelector('.connexion__modal__croix__fermer')

if (fermeBtn) {
    fermeBtn.addEventListener('click', () => {
        let error_pwd = document.querySelector('.error_pwd')
        let error_user = document.querySelector('.error_user')
        connexion__modal.classList.remove('active')
        /* conectionForm.classList.remove('active') */
        error_user.textContent = ''
        error_pwd.textContent = ''
    })
}

/*======================> REGEXP MODIFY PASSWORD <=========================*/
let btnEnvoyer = document.querySelector('#send')
if (btnEnvoyer) {
    btnEnvoyer.addEventListener('click', () => {
        let email_value = document.querySelector('#email_value').value
        if (!validateEmail(email_value)) {
            document.querySelector('.error_email').innerHTML = 'Email invalide !'
        } else {
            document.querySelector('.error_email').innerHTML = ''
            /* email() */
        }
        document.querySelector('#email_value').value = '' 
    })
}
function validateEmail(email) {
    var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    var valid = emailReg.test(email);
    if (!valid) {
        return false;
    } else {
        return true;
    }
}

/*======================> VERIFICATION IMPUT VALUE <=========================*/
let btnConnexion = document.querySelector('input[type=submit]')
if (btnConnexion) {
    document.querySelector('.modal .connexion__modal .loader').innerHTML = ''
  /*   document.querySelector('.connexion__modale__form').classList.remove('active')  */
    btnConnexion.addEventListener('click', () => {
        let username = document.querySelector('#username').value
        let password = document.querySelector('#password').value
        let error_pwd = document.querySelector('.error_pwd')
        let error_user = document.querySelector('.error_user')

        if (username == '' && password == '') {
            error_user.textContent = 'Veuillez bien remplir les champs'
            error_pwd.textContent = 'Veuillez bien remplir les champs'
        } else if (username == '' && password != '') {
            error_user.textContent = 'Veuillez bien remplir les champs'
            error_pwd.textContent = ''
        } else if (username != '' && password == '') {
            error_user.textContent = ''
            error_pwd.textContent = 'Veuillez bien remplir les champs'
        } else {
            error_pwd.textContent = ''
            error_user.textContent = ''
            
            connection()
            document.querySelector('#username').value = ''
            document.querySelector('#password').value = ''
            
        }

    })
}
/*============================> ETHEOCLE <=============================*/
async function connection() {
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value
   
    let users = myModules.getDatas('users');
    users.then(datas => {
        let tabUsers = datas
        const usernameFilter = tabUsers.filter(post => post.username === `${username}` && post.password === `${password}`)
        let timeoutId = 3000
        setTimeout(()=>{
            let errorValidity = document.querySelector('.error_pwd')
            if(usernameFilter.length !=0){
                connexion__modal.classList.remove('active')
                window.open(`/home.html`).style.transitionDelay = 'all .2s ease-out'  
                
            }else{
                errorValidity.textContent=  'Données non valides'
                modalLoader.innerHTML = ''
            } 
        },timeoutId) 

        if(setTimeout.timeoutId != 'undefined'){
            modalLoader.innerHTML = `<img src="./assets/imgs/logo/loader.gif" alt="">`
        } 
    
    });
}


/* async function email(){
    let users = myModules.getDatas('users');
    let email_value = document.querySelector('#email_value').value
    console.log(email_value);
    users.then(datas => {
        console.log(datas);
        let tabUsers = datas
        const Filter = tabUsers.filter(post => post.email === `${email_value}`)
        console.log(Filter[0].userName)
        console.log(Filter[0].password)
    })
        
}

email() */



