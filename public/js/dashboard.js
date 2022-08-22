(function () {
    'use strict'
  
    // feather.replace({ 'aria-hidden': 'true' })

    var ctx = document.getElementById('myChart')
    // let user = document.getElementById('users').val()

    var user = document.getElementById('users').value
   
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Users'],
            datasets: [{label: 'Number of Users', data: [user]}]
        },
    })
  
  })()


