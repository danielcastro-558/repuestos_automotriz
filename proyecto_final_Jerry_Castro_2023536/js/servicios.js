const overlay = document.getElementById('modalOverlay');
const modalNombre = document.getElementById('modalNombre');
const modalPrecio = document.getElementById('modalPrecio');
const btnCerrar = document.getElementById('modalCerrar');

document.querySelector('.productos-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-comprar');
    if (!btn) return;

    const nombre = btn.dataset.nombre;
    const precio = btn.dataset.precio;

    modalNombre.textContent = nombre;
    modalPrecio.textContent = precio;

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
