//equipe-1
//=======

let addRequest = document.querySelector('.addrequest');
let modal = document.querySelector('.main__modal');
let closeBtn = document.querySelector('.closeBtn');
if(addRequest){
    addRequest.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block'
    })
}

if(closeBtn){
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

