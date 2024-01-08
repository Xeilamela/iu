class validacionesatomicas{

    constructor(){

    }

    static validar_dni(id,valor=null){
        let dni = document.getElementById(id);
        let condicion = true;
        if (condicion) {
            return true;
        }
        else{
            return false;
        }
    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }
    static fecha_mayor_hoy(id)
    {
        debugger;
        let fechaActual = new Date();
        let fechaSeleccionada = document.getElementById(id).value;
         
        // Ajusta la hora de la fecha actual a medianoche
        fechaActual.setHours(0, 0, 0, 0);

        // Ajusta la hora de la fecha seleccionada a medianoche
        //fechaSeleccionada.setHours(0, 0, 0, 0);

        if (fechaSeleccionada > fechaActual){
            return false;
        }
        else{
            return true;
        }  
    }   
    
}