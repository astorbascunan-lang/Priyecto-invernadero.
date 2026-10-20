
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
                    const temp = parseFloat(datos.temperatura);
                    const imgClima = document.getElementById("imagen-clima");
                    if(temp < 18){
                        imgClima.src="frio2.png";
                    }
                    else if(temp >18 && temp < 27){
                        imgClima.src="balance2.png";
                    }
                    else if(temp > 27){
                        imgClima.src="calor2.png";
                    }
                    const hume = parseFloat(datos.humedad);
                    const imghume = document.getElementById("imagen-humedad");
                    if(hume < 50){
                        imghume.src="hum1.png";
                    }
                    else if(hume >50 && hume < 70){
                        imghume.src="hum2.png";
                    }
                    else if(hume > 70){
                        imghume.src="hum3.png";
                    }
                    const luz = parseFloat(datos.luz);
                    const imgluz = document.getElementById("imagen-luz");
                    if(luz < 50){
                        imgluz.src="luz3.png";
                    }
                    else if(luz >50 && luz < 100){
                        imgluz.src="luz2.png";
                    }
                    else if(luz > 100){
                        imgluz.src="luz1.png";
                    }
                }) 
                .catch(error => { 
                    console.error("No se pudo conectar con la estación:", error);
                }); 
        } 
        // Llamamos a la función inmediatamente al abrir la página 
        actualizarDatos(); 
        setInterval(actualizarDatos, 3000); 
