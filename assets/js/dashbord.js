//variables pour stocker les données
let seles_total = document.getElementById('seles_total')
let cost_total = document.getElementById('cost_total')
let product_seles = document.getElementById('product_seles')
let available_stock = document.getElementById('available_stock')

function buildChart() {

    const barCanvas = document.getElementById('barCanvas')
    const barchart = new Chart(barCanvas, {
        type: "bar",
        data: {
            labels: [
                "Janvier", "Février", "Mars",
                "Avril", "Mai ", "Juin",
                "Juillet", "Août", "Septembre",
                "Octobre", "novembre", "Décembre"],
            datasets: [{
                label: "Total des ventes",
                data: [200, 80, 50, 105, 45, 28, 150, 45, 75, 10, 75, 20],
                backgroundColor: [
                    "#7b8bb7", "red", "#39bafc", "blueviolet", "#2b89e2", "#e2992b"],

            }],
            hoveroffset: 80
        },
        options: {
            scales: {
                y: {
                    suggestedMax: 200,
                    ticks: {
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    })


    /* @@@@@@@@@@@@ */

    const lineCanvas = document.getElementById('lineCanvas')
    const linechart = new Chart(lineCanvas, {
        type: "line",
        data: {
            labels: [
                "togo", "benin", "cote-divoir",
                "ghana", "nigéria ", "cotonou"],
            datasets: [{
                label: "Récapitulatif des achats",
                data: [200, 80, 50, 105, 45, 28],
                backgroundColor: [
                    "#7b8bb7", "red", "#39bafc", "blueviolet", "#2b89e2", "#e2992b"],

            }],
            hoveroffset: 80
        },
        options: {
            scales: {
                y: {
                    suggestedMax: 200,
                    ticks: {
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    })

    // @@@

    // Données pour le graphique
    var data = {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
        datasets: [{
            label: 'Ventes',
            data: [12, 19, 7, 15, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
    };

    // Options du graphique
    var options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Création du graphique à barres
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

buildChart()

async function recupererApi() {
    try {
        const response = await fetch('assets/JSON-API/gs-datas.json')
        if (!response.ok) {
            throw new Error("impossible de contacter gs-datas.json")
        }
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error("erreur l'extration des données de gs-datas.json")
    }
}

async function traitementDonne() {
    try {
        const donneegsDatas = await recupererApi()
        if (donneegsDatas) {
            const commandeQuantity = donneegsDatas.orders
            let tabsum = []
            commandeQuantity.forEach(item => {
                tabsum.push(item.totalQuantity)
            })
            let sumquantity = 0
            tabsum.forEach(item => {
                sumquantity = sumquantity + item
            })
            product_seles.innerHTML = sumquantity


            let tabsomme = []
            commandeQuantity.forEach(item => {
                tabsomme.push(item.totalPrice)
            })
            let sumtotalPrice = 0
            tabsomme.forEach(item => {
                sumtotalPrice = sumtotalPrice + item
                /*  console.log(sumtotalPrice) */
            })
            seles_total.innerHTML = sumtotalPrice + ' FCFA'

            let dataProducts = donneegsDatas.products
            let sumStock = 0;
            dataProducts.forEach(item => {
                sumStock = sumStock + item.stock
            })
            available_stock.innerHTML = sumStock

            const dataRequest = donneegsDatas.requests
            let sumRequestTotalAmount = 0;
            dataRequest.forEach(item => {
                sumRequestTotalAmount = sumRequestTotalAmount + item.total_amount
                cost_total.innerHTML = sumRequestTotalAmount + " FCFA "
            });


        }
    } catch (error) {
        console.error("erreur lors du traitement des données de gs-datas.json")
    }
}

traitementDonne()