document.addEventListener("DOMContentLoaded", function() {
    fetch(`js/datos.json`)
        .then(response => response.json())
        .then(data => {
            var infoEmpleado = '';
            data.empleados.forEach(empleado => {
                infoEmpleado += `
                <div class="col-md-4 mb-4 d-flex align-items-stretch">
                    <div class="card">
                        <img src="${empleado.imagen}" class="card-img-top" alt="${empleado.nombre}">
                        <div class="card-body">
                            <h5 class="card-title">${empleado.nombre}</h5>
                            <p class="card-text"><strong>Precio:</strong> ${empleado.precio}</p>
                            <p class="card-text"><strong>Stock:</strong> ${empleado.stock}</p>
                            <p class="card-text"><strong>Categoría:</strong> ${empleado.categoria}</p>
                            <p class="card-text">${empleado.descripcion}</p>
                            <p class="card-text"><strong>Desarrollador:</strong> ${empleado.desarrollador}</p>
                            <p class="card-text"><strong>Disponibilidad:</strong> ${empleado.disponibilidad}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>`;
            });
            document.getElementById('infoEmpleado').innerHTML = infoEmpleado;
        })
        .catch(error => console.error('Error en el código', error));
});
