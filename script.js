function pedirApitemp(respuesta){
    fectch(10.10.10.3:3000/api/temperatura)
        then(repuesta =>respuesta.Jason())
        then(data=>{
            return data.temperatura;
        }
}
function pedirhumedad(respuesta){
      fectch(10.10.10.3:3000/api/temperatura)
        then(repuesta =>respuesta.Jason())
        then(data=>{
            return data.humedad;
        }
      
}
function pedirEstado(){
      fectch(10.10.10.3:3000/api/temperatura)
        .then(repuesta =>respuesta.Jason())
        .then(data=>{
            return data.estado;
        }
      
}
let temp=0;
let hume=0;
let estado;
let apiT= pedirApi();
document.write("Temperatura: ", apiT);
let apiH= pedirhumedad();
document.write("Humedad: ", apiH);
let apiE=pedirEstado();
document.write("Estado: ", apiE);

    
