function reservar(producto) {
    const telefono = "573202347602"; // Número sin "+"
    const mensaje = `¡Hola! Estoy interesado en comprar un ${producto}. ¿Está disponible?`;
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

function soporte() {
    const telefono = "573202347602"; // Número sin "+"
    const mensaje = "¡Hola! Necesito ayuda con mi pedido o con la página. ¿Me podrías ayudar?";
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
