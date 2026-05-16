const overlay = document.getElementById('modalOverlay');
const modalNombre = document.getElementById('modalNombre');
const modalPrecio = document.getElementById('modalPrecio');
const modalTipo = document.getElementById('modalTipo');
const btnCerrar = document.getElementById('modalCerrar');

document.querySelector('main').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-comprar');
    if (!btn) return;

    const nombre = btn.dataset.nombre;
    const precio = btn.dataset.precio;
    const esOferta = btn.dataset.oferta === 'true';

    modalNombre.textContent = nombre;
    modalPrecio.textContent = precio;
    modalTipo.textContent = esOferta ? '¡Precio de oferta aplicado!' : '';
    modalTipo.style.display = esOferta ? 'block' : 'none';

    overlay.classList.add('activo');
    document.body.style.overflow = 'hidden';
});

btnCerrar.addEventListener('click', cerrarModal);

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) cerrarModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});

function cerrarModal() {
    overlay.classList.remove('activo');
    document.body.style.overflow = '';
}
