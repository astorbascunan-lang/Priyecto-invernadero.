<script> 
        // ¡Atención! Cambiar esta IP si la pantalla OLED del profesor muestra una distinta 
        const urlEstacion = "http://192.168.4.1/";  
        function actualizarDatos() { 
            // Hacemos la petición a la placa ESP32 
            fetch(urlEstacion) 
                .then(respuesta => respuesta.json()) // Convertimos el texto a objeto JSON 
                .then(datos => { 
                    // Inyectamos los datos recibidos en el HTML 
                    document.getElementById("dato-temp").innerText = datos.temperatura + " °C"; 
                    document.getElementById("dato-hum").innerText = datos.humedad + " %"; 
                    document.getElementById("dato-luz").innerText = datos.luz + " lx"; 
                }) 
                .catch(error => { 
                    console.error("No se pudo conectar con la estación:", error);
                }); 
        } 
        // Llamamos a la función inmediatamente al abrir la página 
        actualizarDatos(); 
        setInterval(actualizarDatos, 3000); 
</script>
