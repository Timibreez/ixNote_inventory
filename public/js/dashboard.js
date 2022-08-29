(function () {
    'use strict'
  
    // feather.replace({ 'aria-hidden': 'true' })

    const ctx = document.getElementById('myChart').getContext('2d')
    const user = document.getElementById('users').value
    const products = document.getElementById('products').value

    // for(const property in products){
    //     console.log(`${property}: ${products[property]}`);
    // }

    // products.map(product => {
    //     productArray.push(product.item)
    //     quantityArray.push(product.quantity)
    // })
    // console.log('quantityArray:', quantityArray)
    const labels = ['Users', 'Products']
    const colors = ['blue', 'red', 'green']

    const data = {
        labels: labels,
        
        datasets: [{label: 'Available Items', backgroundColor: colors, data: [user, products, 0]}]
    }

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        precision: 0
                    }
                },
                y: {
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    }

    const myChart = new Chart(
        ctx,
        config
    )
   
    // const myChart = new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Users', 'Products',],
    //         backgroundColor: ['green', 'blue'],
    //         datasets: [{label: 'Present Company Information', data: [user, product]}]
    //     },
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // })
  
  })()


