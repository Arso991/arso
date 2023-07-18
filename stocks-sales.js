//  equipe-1
// =======

// const search=document.querySelectorAll('.btn--active')
// const affiche=document.querySelector('.modal')
// const close = document.querySelector('.close')
// if(search){
//     search.forEach((item)=>{
//       item.addEventListener('click', (e)=>{
//         e.preventDefault()
//         if(!affiche.classList.contains('active')){
//             affiche.classList.add('active') 
//         }else{
//            /*  close.classList.remove('active'); */
//         }
//     })
//     })
// }


// /* let toto= JSON.parse(localStorage.getItem('type.value'))
// console.log("toto", toto);

// let violet = document.getElementById('violet');
// violet.textContent=toto.type;  */


//  main 
import * as myModules from './mymodules.js';

let orders = myModules.getDatas('orders');
orders.then(datas =>{
    console.log(orders)
    const elApp = document.querySelectorAll(".tb")[0];
    elApp.innerHTML = "";
    let position = 1
  
    let data = "";
    // Récupération des données
    datas.forEach((m, index) => {
        console.log(m.products)

        m.products.forEach((item, index)=>{
            elApp.insertAdjacentHTML("beforeend",
            `<tr>
            <td>${position++}</td>
            <td>${m.customerName}</td>
            <td>${item.productName}</td>
            <td>${m.trackingNumber}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>

            <td>
                <button class="edit btn btn-sm btn-outline-success" value="${index}">Vendre</button>
            </td>
            </tr>`);

            const search = document.querySelectorAll("input[type=search]")[0]
            search.addEventListener("input", function() {
                    // tbody.innerHTML = ''
                    const searchValue = search.value;
                    console.log(searchValue)
                    const filteredData = datas.filter(function(val){ 
                        return val.customerName.toLowerCase().includes(searchValue.toLowerCase());
                });

                const listElement = document.querySelectorAll(".tb")[0];
                let position=1;
                listElement.innerHTML = filteredData.map(function(m) {
                    return "beforeend",
                    `<tr>
                    <td>${position++}</td>
                    <td>${m.customerName}</td>
                    <td>${item.productName}</td>              
                    <td>${m.trackingNumber}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
            
                    <td>
                        <button class="edit btn btn-sm btn-outline-success" value="${index}">Vendre</button>
                    </td>
                    </tr>`;
                }).join("");
            });

            document.getElementById("form-save").addEventListener("click", function() {
                // Récupération des champs
                let customerNames = document.getElementById("produit").value;
                let productName = document.getElementById("categorie").value;
                let trackingNumber = document.getElementById('sku').value;
                let quantity = document.getElementById('quantite').value;
                let price = document.getElementById('prix').value

                productName = item.productName;
                // customerNames = m.customerName;
                trackingNumber = m.trackingNumber;
                quantity = item.quantity;
                price = item.price;
                console.log(customerNames)
                
              
                if (customerNames && productName) {
                  // Nouvelle ligne
                  const movie = { customerName: customerNames, productName: productName, trackingNumber:trackingNumber, quantity:quantity, price: price};
                  // const movie = { produit: 'produit', categorie: 'categorie', sku: 'sku', quantite: 'quantite', prix: 'prix' };
              
              
                  // Ajout de la nouvelle ligne
                  datas.push(movie);
                //   var json = JSON.stringify(movie);
                //   localStorage.setItem('produit.value', json)
                //   window.location.href = 'http://127.0.0.1:5500/cashier.html?#liste'
                  hideForm()
                  // Affichage du nouveau tableau
                  return "beforeend",
                  `<tr>
                  <td>${position++}</td>
                  <td>${customerNames}</td>
                  <td>${productName}</td>              
                  <td>${trackingNumber}</td>
                  <td>${quantity}</td>
                  <td>${price}</td>
          
                  <td>
                      <button class="edit btn btn-sm btn-outline-success" value="${index}">Vendre</button>
                  </td>
                  </tr>`;
                }
            });
            function hideForm() {
                elForm.style.display = "none";
                elContent.style.display = "block";
              
                document.getElementById("produit").value = "";
                document.getElementById("categorie").value = "";
                document.getElementById('sku').value = "";
                document.getElementById('quantite').value = "";
                document.getElementById('prix').value = ""
                document.getElementById("hidden").value = "";
              }

              document.getElementById("form-cancel").addEventListener("click", function() {
                hideForm();
              });
        })
    });
    
    //cacher un formulaire
    const elForm = document.getElementById("form");
    elForm.style.display = "none";
    const elContent = document.getElementById("content");
    
    //afficher
    document.getElementById("form-add").addEventListener("click", function() {
        displayForm();
    });

    function displayForm() {
        elForm.style.display = "block";
        elContent.style.display = "none";
    }
});