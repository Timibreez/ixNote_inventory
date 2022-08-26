(function () {
    'use strict'
  
    // feather.replace({ 'aria-hidden': 'true' })

    const ctx = document.getElementById('myChart').getContext('2d')
    const productArray = []
    const quantityArray = []

    const user = document.getElementById('users').value
    const products = document.getElementById('products').value

    products.map(product => {
        productArray.push(product.item)
        quantityArray.push(product.quantity)
    })

    const labels = productArray
    const colors = ['blue', 'red', 'green', 'orange', 'purple']

    const data = {
        labels: labels,
        
        datasets: [{label: 'Available Items', backgroundColor: colors, data: quantityArray}]
    }

    const config = {
        type: 'bar',
        data: data,
        options: {}
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


