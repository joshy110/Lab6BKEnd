var update = document.getElementById('update');

update.addEventListener('click', function () {
    // Send PUT Request here
    fetch('implementos', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'id': '999',
            'nombre': 'F999',
            'talla': '10',
            'costo': '1000',
            'Descripcion': 'Prueba PUT'
        })
    }).then(res => {
        if (res.ok) return res.json()
    })
        .then(data => {
            console.log(data)
            window.location.reload(true)
        })
});