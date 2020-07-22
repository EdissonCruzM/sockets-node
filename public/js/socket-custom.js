var socket = io();

socket.on('connect', function() {

    console.log('conectado al servidor');
});

// Escuchar
socket.on('disconnet', function() {

    console.log('Se perdio conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Edisson',
    mensaje: 'Hola mundo'
}, function(res) {
    console.log('respuesta server: ', res);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});