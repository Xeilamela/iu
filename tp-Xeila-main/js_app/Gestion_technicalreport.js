class Gestion_technicalreport extends GestionEntidad{

    
    //-----------------------------------------------------------------------------
    // formularios

    static async createForm_ADD(){
    
        // resetear el formulario
        // hemos hecho una modificación de manera que cargamos el contenido del formulario desde su html cada vez que lo preparamos para una accion
        // obviamente es dependiente de la entidad y por lo tanto no esta en la superclase
        this.recargarform();
        
        // rellenar titulo formulario
        // usamos className mientras no tenemos que utilizar clases de css puesto que borra todos los class del elemento
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_ADD_technicalreport"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_technicalreport.ADD();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_technicalreport.comprobar_submit();');
        
        
        // se coloca el onblur del AUTORES y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('AutoresTR').setAttribute('onblur', 'Gestion_technicalreport.comprobar_AutoresTR()');

       
        document.getElementById('TituloTR').setAttribute('onblur', 'Gestion_technicalreport.comprobar_TituloTR()');

        document.getElementById('DepartamentoTR').setAttribute('onblur', 'Gestion_technicalreport.comprobar_DepartamentoTR()');

        document.getElementById('UniversidadTR').setAttribute('onblur','Gestion_technicalreport.comprobar_UniversidadTR()');

        //document.getElementById('FicheropdfTR').setAttribute('onblur','Gestion_technicalreport.comprobar_FicheropdfTR()');

        document.getElementById('FechaTR').setAttribute('onblur','Gestion_technicalreport.comprobar_FechaTR()');

        
    
        
        let botonadd = document.createElement('button');
        botonadd.type = 'submit';
        let imgadd = document.createElement('img');
        imgadd.src = './iconos/ADD.png';
        botonadd.append(imgadd);

        const form = document.getElementById('IU_form')

        /*
        form.addEventListener("submit", function(e) {
            //e.preventDefault();
            let data = new FormData(form);
            for (let [name,value] of data) {
              value = "aaaaaaa"
                //console.log(name, ":", value)
            }
          })
        */

        document.getElementById('IU_form').append(botonadd);        

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    static createForm_EDIT(datostupla){
        
        // resetear el formulario
        this.recargarform();
        /*
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_EDIT_persona"; 

        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_libros.EDIT();';
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_libros.comprobar_submit();');

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('cod').setAttribute('onblur', 'Gestion_libros.comprobar_dni()');
        document.getElementById('cod').value = datostupla.CodigoL;
        document.getElementById('cod').setAttribute("readonly","");

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').setAttribute('onblur', 'Gestion_libros.comprobar_nombre_persona()');
        document.getElementById('nombre_persona').value = datostupla.nombre_persona;

        document.getElementById('apellidos_persona').setAttribute('onblur', 'Gestion_libros.comprobar_apellidos_persona()');
        document.getElementById('apellidos_persona').value = datostupla.apellidos_persona;

        document.getElementById('fechaNacimiento_persona').setAttribute('onchange','Gestion_libros.comprobar_fechaNacimiento_persona()');
        document.getElementById('fechaNacimiento_persona').value = datostupla.fechaNacimiento_persona;

        document.getElementById('direccion_persona').setAttribute('onblur','Gestion_libros.comprobar_direccion_persona()');
        document.getElementById('direccion_persona').value = datostupla.direccion_persona;

        document.getElementById('telefono_persona').setAttribute('onblur','Gestion_libros.comprobar_telefono_persona()');
        document.getElementById('telefono_persona').value = datostupla.telefono_persona;

        document.getElementById('email_persona').setAttribute('onblur','Gestion_libros.comprobar_email_persona()');
        document.getElementById('email_persona').value = datostupla.email_persona;

        document.getElementById('foto_persona').value = datostupla.foto_persona;
        document.getElementById('link_foto_persona').setAttribute('href','http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+foto_persona);
        document.getElementById('foto_persona').setAttribute("readonly",true);

        document.getElementById('nuevo_foto_persona').setAttribute('onblur','Gestion_libros.comprobar_nuevo_foto_persona()');
        */

        let botonedit = document.createElement('button');
        botonedit.type = 'submit';
        let imgedit = document.createElement('img');
        imgedit.src = './iconos/EDIT.png';
        botonedit.append(imgedit);
        document.getElementById('IU_form').append(botonedit);

        // para actualizar idioma despues de incluir la imagen
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
    }

    static createForm_DELETE(datostupla){
        
        // resetear el formulario
        this.recargarform();

        /*
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_DELETE_persona";

        
        // se rellena el action del formulario
        document.getElementById('IU_form').action = 'javascript:Gestion_libros.DELETE();';

        // se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('cod').value = datostupla.dni;
        document.getElementById('cod').setAttribute('readonly',true);

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('nombre_persona').value = datostupla.nombre_persona;
        document.getElementById('nombre_persona').setAttribute('readonly',true);

        document.getElementById('apellidos_persona').value = datostupla.apellidos_persona;
        document.getElementById('apellidos_persona').setAttribute('readonly',true);

        document.getElementById('fechaNacimiento_persona').value = datostupla.fechaNacimiento_persona;
        document.getElementById('fechaNacimiento_persona').setAttribute('readonly',true);

        document.getElementById('direccion_persona').value = datostupla.direccion_persona;
        document.getElementById('direccion_persona').setAttribute('readonly',true);

        document.getElementById('telefono_persona').value = datostupla.telefono_persona;
        document.getElementById('telefono_persona').setAttribute('readonly',true);

        document.getElementById('email_persona').value = datostupla.email_persona;
        document.getElementById('email_persona').setAttribute('readonly',true);

        document.getElementById('foto_persona').value = datostupla.foto_persona;
        document.getElementById('foto_persona').setAttribute("readonly",true);
        document.getElementById("link_foto_persona").href += datostupla.foto_persona;

        document.getElementById("label_nuevo_foto_persona").style.display = 'none';
        document.getElementById("nuevo_foto_persona").style.display = 'none';
        

        let botondelete = document.createElement('button');
        botondelete.id = 'botondelete';
        botondelete.type = 'submit';
        let imgdelete = document.createElement('img');
        imgdelete.src = './iconos/DELETE.png';
        botondelete.append(imgdelete);
        document.getElementById('IU_form').append(botondelete);

        // para actualizar idioma 
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';
        */
    }

    static createForm_SHOWCURRENT(datostupla){
        
        // reutilizo la creación del delete porque me implica pocas modificaciones
        this.createForm_DELETE(datostupla);
        /*
        // rellenar titulo del formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SHOWCURRENT_persona";

        // eliminar boton delete del form DELETE
        document.getElementById('botondelete').remove();
        
        // se rellena el action del formulario
        let imgshowcurrent = document.createElement('img');
        imgshowcurrent.src = './iconos/SHOWCURRENT.png';
        imgshowcurrent.setAttribute("onclick","DOM_class.cerrar_div_formulario();")
        document.getElementById('IU_form').append(imgshowcurrent);

        // para actualizar el idioma
        setLang();
        */

    }

    static createForm_SEARCH(){
        debugger;
        document.getElementById('IU_form').action = 'javascript:Gestion_technicalreport.SEARCH();';
        // resetear el formulario
        this.recargarform_search();
        document.getElementById('IU_form').setAttribute('onsubmit', 'return Gestion_technicalreport.comprobar_submit_SEARCH();');
        
        // rellenar titulo formulario
        document.querySelector(".class_contenido_titulo_form").className = "class_contenido_titulo_form titulo_form_SEARCH_technicalreport";

        // se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('CodigoTR').setAttribute('onblur', 'Gestion_technicalreport.comprobar_CodigoTR_search()');

      
        // se coloca el onblur del autor y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
        document.getElementById('AutoresTR').setAttribute('onblur', 'Gestion_technicalreport.comprobar_AutoresTR_search()');

          
        document.getElementById('TituloTR').setAttribute('onblur', 'Gestion_technicalreport.comprobar_TituloTR_search()');
                
        document.getElementById('DepartamentoTR').setAttribute('onblur', 'Gestion_technicalreport.comprobar_DepartamentoTR_search()');

        document.getElementById('UniversidadTR').setAttribute('onblur','Gestion_technicalreport.comprobar_UniversidadTR_search()');

      //  document.getElementById('FicheropdfTR').setAttribute('onblur','Gestion_technicalreport.comprobar_ficheropdf_technicalreport_search()');

        document.getElementById('FechaTR').setAttribute('onblur','Gestion_technicalreport.comprobar_FechaTR_search()');

           

        let botonsearch = document.createElement('button');
        botonsearch.type = 'submit';
        let imgsearch = document.createElement('img');
        imgsearch.src = './iconos/SEARCH.png';
        botonsearch.append(imgsearch);
        document.getElementById('IU_form').append(botonsearch);        

        // para actualizar idioma
        setLang();

        // se muestra el formulario
        document.getElementById('div_IU_form').style.display = 'block';

    }

    //-----------------------------------------------------------------------------
    // submits

    static comprobar_submit(){
        debugger;    
        let valor = this.comprobar_AutoresTR();
        let valor1 = this.comprobar_TituloTR();
        let valor2 = this.comprobar_DepartamentoTR();
        let valor3 = this.comprobar_UniversidadTR();
       // let valor4 = this.comprobar_FicheropdfTR();
        let valor5 = this.comprobar_FechaTR();
    
        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor5 
        );
        
  
        return resultado;
        
    }

    static comprobar_submit_SEARCH(){

        
        let valor = this.comprobar_CodigoTR_search();
        let valor1 = this.comprobar_AutoresTR_search();
        let valor2 = this.comprobar_TituloTR_search();
        let valor3 = this.comprobar_DepartamentoTR_search();
        let valor4 = this.comprobar_UniversidadTR_search();
       // let valor5 = this.comprobar_FicheropdfTR_search();
        let valor6 = this.comprobar_FechaTR_search();
     
        
        
        let resultado = (
            valor &&
            valor1 &&
            valor2 &&
            valor3 &&
            valor4 &&
            valor6 
        );
        
          
        return resultado;
    }

    //-----------------------------------------------------------------------------
    // acciones a back

    static async ADD(){
        await this.peticionBackGeneral('IU_form', 'technicalreport', 'ADD')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async EDIT(){
        await this.peticionBackGeneral('IU_form', 'technicalreport', 'EDIT')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async DELETE(){
        await this.peticionBackGeneral('IU_form', 'technicalreport', 'DELETE')
        .then((respuesta) => {
            if (respuesta['ok']){
                this.recargarform();
                this.SEARCH();
            }
            else{
                DOM_class.mostrardivmensajes(respuesta['code']);
            }
        });
    }

    static async SEARCH(){
        await this.peticionBackGeneral('IU_form', 'technicalreport', 'SEARCH')
        .then((respuesta) => {
            this.recargarform();
            let technicalreport = new Gestion_technicalreport('technicalreport',respuesta['resource'],Array('CodigoTR','AutoresTR','TituloTR')); technicalreport.mostrartabla();
            if (respuesta['code'] == 'RECORDSET_VACIO'){
                document.getElementById('muestradatostabla').innerHTML = 'no hay datos coincidentes con la busqueda';
            }
        });
    }

    //-----------------------------------------------------------------------------
    //validaciones campos
    static comprobar_CodigoTR_search(){                 
        DOM_class.mostrarexitovalor('CodigoTR');
        return true; 
    }
    static comprobar_AutoresTR_search(){
        debugger;
         if (validacionesatomicas.size_maximo('AutoresTR',200)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('AutoresTR','KO_AutorTR_tam_max');
             //salir ejecucion con false
             return false;
         }
 
         DOM_class.mostrarexitovalor('AutoresTR');
         return true;
 
     }
     static comprobar_TituloTR_search(){
       
        if (validacionesatomicas.size_maximo('TituloTR',100)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('TituloTR','KO_TituloTR_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('TituloTR');
        return true;

    }
    static comprobar_DepartamentoTR_search(){        
        if (validacionesatomicas.size_maximo('DepartamentoTR',100)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('DepartamentoTR','KO_DepartamentoTR_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('DepartamentoTR');
        return true;

    }

    static comprobar_UniversidadTR_search(){        
        if (validacionesatomicas.size_maximo('UniversidadTR',40)){
        }
        else{
            //modificacion parametros texto error
            DOM_class.mostrardivmensajeserrordebajo('UniversidadTR','KO_UniversidadTR_tam_max');
            //salir ejecucion con false
            return false;
        }

        DOM_class.mostrarexitovalor('UniversidadTR');
        return true;

    }
    
    static comprobar_FechaTR_search(){                 
        DOM_class.mostrarexitovalor('FechaTR');
        return true;
    }
    static comprobar_AutoresTR(){

        if (validacionesatomicas.size_minimo('AutoresTR',6)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('AutoresTR','KO_AutorTR_tam_min');
             //salir ejecucion con false
             return false;
         }
 
         if (validacionesatomicas.size_maximo('AutoresTR',200)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('AutoresTR','KO_AutorTR_tam_max');
             //salir ejecucion con false
             return false;
         }
 
         DOM_class.mostrarexitovalor('AutoresTR');
         return true;
 
     }
     static comprobar_TituloTR(){

        if (validacionesatomicas.size_minimo('TituloTR',6)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('TituloTR','KO_TituloTR_tam_min');
             //salir ejecucion con false
             return false;
         }
 
         if (validacionesatomicas.size_maximo('TituloTR',100)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('TituloTR','KO_TituloTR_tam_max');
             //salir ejecucion con false
             return false;
         }
 
         DOM_class.mostrarexitovalor('TituloTR');
         return true;
 
     }
     static comprobar_DepartamentoTR(){

        if (validacionesatomicas.size_minimo('DepartamentoTR',6)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('DepartamentoTR','KO_DepartamentoTR_tam_min');
             //salir ejecucion con false
             return false;
         }
 
         if (validacionesatomicas.size_maximo('DepartamentoTR',100)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('DepartamentoTR','KO_DepartamentoTR_tam_max');
             //salir ejecucion con false
             return false;
         }
 
         DOM_class.mostrarexitovalor('DepartamentoTR');
         return true;
 
     }
     static comprobar_UniversidadTR(){

        if (validacionesatomicas.size_minimo('UniversidadTR',4)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('UniversidadTR','KO_UniversidadTR_tam_min');
             //salir ejecucion con false
             return false;
         }
 
         if (validacionesatomicas.size_maximo('UniversidadTR',100)){
         }
         else{
             //modificacion parametros texto error
             DOM_class.mostrardivmensajeserrordebajo('UniversidadTR','KO_UniversidadTR_tam_max');
             //salir ejecucion con false
             return false;
         }
 
         DOM_class.mostrarexitovalor('UniversidadTR');
         return true;
 
     }
     static comprobar_FechaTR(){
        DOM_class.mostrarexitovalor('FechaTR');
        return true;                 
    }
    static recargarform(){

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

     
        
        <label class="label_AutoresTR">Autor</label>
        <input type='text' id='AutoresTR' name='AutoresTR'></input>
        <div id="div_error_AutoresTR" class="errorcampo"><a id="error_AutoresTR"></a></div>
        <br>
        
        <label class="label_TituloTR">títulooo</label>
        <input type='text' id='TituloTR' name='TituloTR'></input>
        <div id="div_error_TituloTR" class="errorcampo"><a id="error_TituloTR"></a></div>
        <br>
        
        <label class="label_DepartamentoTR">Departamento</label>
        <input type='text' id='DepartamentoTR' name='DepartamentoTR'></input>
        <div id="div_error_DepartamentoTR" class="errorcampo"><a id="error_DepartamentoTR"></a></div>
        
        <br>
        <label class="label_UniversidadTR"></label>
        <input type='text' id='UniversidadTR' name='UniversidadTR'></input>
        <div id="div_error_UniversidadTR" class="errorcampo"><a id="error_UniversidadTR"></a></div>
        
        <br>
             
       
        <input type='file' id='FicheropdfTR' name='FicheropdfTR'></input>
        <div id="div_error_FicheropdfTR" class="errorcampo"><a id="error_FicheropdfTR"></a></div>
        <br>
        
        <label class="label_FechaTR"></label>
        <input type='date' id='FechaTR' name='FechaTR'></input>
        <div id="div_error_FechaTR" class="errorcampo"><a id="error_FechaTR"></a></div>        

        <br>  
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

        setLang();

       
    }
    static recargarform_search(){

        document.getElementById("IU_form").innerHTML= '';

        document.getElementById("IU_form").innerHTML=`

        <label class="label_CodigoTR">Codigo</label>
        <input type='text' id='CodigoTR' name='CodigoTR'></input>
        <div id="div_error_CodigoTR" class="errorcampo"><a id="error_CodigoTR"></a></div>
        <br>
        
        <label class="label_AutoresTR">Autor</label>
        <input type='text' id='AutoresTR' name='AutoresTR'></input>
        <div id="div_error_AutoresTR" class="errorcampo"><a id="error_AutoresTR"></a></div>
        <br>
        
        <label class="label_TituloTR">títulooo</label>
        <input type='text' id='TituloTR' name='TituloTR'></input>
        <div id="div_error_TituloTR" class="errorcampo"><a id="error_TituloTR"></a></div>
        <br>
        
        <label class="label_DepartamentoTR">Departamento</label>
        <input type='text' id='DepartamentoTR' name='DepartamentoTR'></input>
        <div id="div_error_DepartamentoTR" class="errorcampo"><a id="error_DepartamentoTR"></a></div>
        
        <br>
        <label class="label_UniversidadTR"></label>
        <input type='text' id='UniversidadTR' name='UniversidadTR'></input>
        <div id="div_error_UniversidadTR" class="errorcampo"><a id="error_UniversidadTR"></a></div>
        
        <br>
             
       
        <input type='file' id='FicheropdfTR' name='FicheropdfTR'></input>
        <div id="div_error_FicheropdfTR" class="errorcampo"><a id="error_FicheropdfTR"></a></div>
        <br>
        
        <label class="label_FechaTR"></label>
        <input type='date' id='FechaTR' name='FechaTR'></input>
        <div id="div_error_FechaTR" class="errorcampo"><a id="error_FechaTR"></a></div>        

        <br>  
        `;

        //obtener campos del formulario
        let campos = document.forms['IU_form'].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
            if (eval(document.getElementById('div_error_'+campos[i].id))){
                document.getElementById('div_error_'+campos[i].id).style.display = 'none';
            }
        }

        setLang();
    }
 
}