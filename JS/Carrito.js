const productos = document.querySelectorAll('#productos li');
const carrito = document.querySelector('#carrito');
const total = document.querySelector('#total');
const comprar = document.querySelector('#comprar');

let totalPagar = 0;

function agregarProducto(event) {
    const producto = event.target.textContent;
    const precio = event.target.dataset.precio;
  
    if (!isNaN(precio)) {
      const item = document.createElement('li');
      item.textContent = `${producto}`;
      item.dataset.precio = precio;
  
      totalPagar += Number(precio);
      total.textContent = totalPagar;
  
      carrito.appendChild(item);
    } else {
      alert('El producto seleccionado no tiene precio válido y no puede ser agregado al carrito.');
    }
  }

productos.forEach(producto => {
  producto.addEventListener('click', agregarProducto);
});

carrito.addEventListener('click', event => {
  const item = event.target;
  const precio = item.dataset.precio;
  
  if (precio) {
    totalPagar -= Number(precio);
    total.textContent = totalPagar;
    
    item.remove();
    
    alert('Artículo eliminado');
  }
});

comprar.addEventListener('click', () => {
    alert(`Total a pagar: ₡ ${totalPagar}`);
    carrito.innerHTML = '';
    totalPagar = 0;
    total.textContent = totalPagar;
  });
  
  

  