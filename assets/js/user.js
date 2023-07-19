//Importing all from mymodules.js as myModule

import * as myModules from "./mymodules.js";

// Function to edite the user information
const editeUser = () => {};

// Function to delete the user information
const deleteUser = (id) => {
  myModules.deleteDatas("users", id);
};

// Function to see more the user information
const seeMore = () => {};

// Function to add the user information

// Initialisation of the users table content
const INITTABLE = () => {
  let users = myModules.getDatas("users");
  users.then((datas) => {
    let usersInfo = ``;
    let contentTable = document.querySelector(".content__table");

    if (datas) {
      datas.forEach((item, index) => {
        usersInfo += `
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td class = "id">${item.id} </td>
                    <td>${item.dateCreat} </td>
                    <td>${item.lastName} ${item.firstName}</td>
                    <td>${item.userName} </td>
                    <td>${item.role} </td>
                    <td>${item.status}</td>
                    <td>
                        <a href="#" class="edit">
                            <span class="mdi mdi-pencil"></span>
                        </a>
                        <a href="#" class="seemore">
                            Voir +
                        </a>
                        <a href="#" class="delete">
                            <span class="mdi mdi-delete"></span>
                        </a>
                    </td>
                </tr>
        `;
      });

      const schema = `
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Date d'ajout</th>
                            <th>Nom</th>
                            <th>Pseudo</th>
                            <th>Rôle</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${usersInfo}
                    </tbody>
                    <tfoot>
                    </tfoot>
    `;
      contentTable.innerHTML = schema;
    }

    //add listener to a element in the table
    const linkTags = document.querySelectorAll("table a");

    linkTags.forEach((item) => {
      item.addEventListener("click", (e) => {
        let rowTag = e.currentTarget.closest("tr");
        let dataId = Number(rowTag.querySelector("td.id").innerText);

        if (dataId && e.currentTarget.classList.contains("edit")) {
          editeUser();
        } else if (dataId && e.currentTarget.classList.contains("delete")) {
          deleteUser(dataId);
          console.log(dataId);
        } else if (dataId && e.currentTarget.classList.contains("seemore")) {
          seeMore();
        }
      });
    });
  });
};

window.addEventListener("load", INITTABLE());

// Function to add the user information
const addUsers = document.querySelector(".addusers");
let modal = document.querySelector(".main__modal__user");
let closeBtn = document.querySelector(".closeBtn");
if (addUsers) {
  addUsers.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

//function to generate automatic password

function generatePassword(length = 8) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const allCharacters = uppercaseLetters + lowercaseLetters + numbers;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);

    password += allCharacters[randomIndex];
  }

  return password;
}

const password = generatePassword();
console.log(password);

//function to set privilege
let privilege;
function setPrivilege(role) {

  if (role == "Administrateur") {
    privilege = 3;
  }
  if (role == "Superviseur") {
    privilege = 2;
  }
  if(role == 'Caissier'){
    privilege = 1;
  }
  return privilege;
}

let role = 'Caissier';
setPrivilege(role);
console.log(privilege);

/* valideForm = () => {
    let lastName = document.getElementById('name').value;
    let firstName = document.getElementById('lastname').value;
    let userName = document.getElementById('pseudo').value;
    let email = document.getElementById('mail').value;
    let number = document.getElementById('number').value;
    let role = document.getElementById('role').value
    if(firstName == ''){
        alert ('Vous devez entrer le nom');
        return false;
    }
    if(lastName == ''){
        alert ('Vous devez entrer le prenom');
        return false;
    }else if(userName == ''){
        alert ('Vous devez entrer un pseudo');
        return false;
    }else if(email == ''){
        alert ('Vous devez entrer le mail');
        return false;
    }else if(!email.includes('@')){
        alert('Email invalide')
        return false
    }else if(number == ''){
        alert ('Vous devez entrer le numéro de téléphone');
        return false;
    }else if(number == String){
        alert('Numéro invalide')
        return false;
    }else if(role == ''){
        alert('Vous devez attribuer un rôle')
        return false;
    }else{
        return true;
    }

}
 */
