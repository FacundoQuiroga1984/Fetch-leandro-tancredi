const presupuestoTotal1 = (data) => {
    presupuestoTotal=data;  
    };
    function fijarFecha () {
        const DateTime= luxon.DateTime;
        const dia=DateTime.now();
        
        let fecha= document.getElementById("day");
            fecha.innerHTML=`<div>Hoy es ${dia.day}/${dia.month}/${dia.year} <hr></div> `;
                        
        let direccion=document.getElementById("direccion");
            direccion.innerHTML=`<div> Para conocer los valores de KWH y KW vigentes puede dirigirse a la página de Oceba haciendo click
            <a href="https://oceba.gba.gov.ar/nueva_web/s.php?i=17">aquí</a></div> `;
        };
function acceso() {
    
    let password= JSON.parse(localStorage.getItem("password"));
        if (password=="1234"){
        return true};
    };
   
function acceso2() { 
    
    let pass=document.getElementById("pass");
        pass.innerHTML=
       `<div class="container shadow-lg p-3 fondo rounded">    
            <div class="row align-items-center justify-content-center text-center ">
                <div class="col-12 col-sm-7 m-5">
                    <h1>Necesita autorización para utilizar el programa</h1>
                </div>
            </div>
            <div class="row align-items-center justify-content-center text-center ">
                <div class="col-12 col-sm-6 mt-5">
                    <h2>Por favor ingrese la contraseña</h2>
                </div>
            </div>
            <div class="row d-flex align-items-center justify-content-center mt-5">
            <div class="col-12 col-sm-3 ">
                <input type="password" class="form-control text-center" id="pass1" placeholder="Password">
            <div class="posicion_boton">
                <button type="submit" id="boton1" class="btn btn-primary mt-2">Ingresar</button>
            </div>
            </div>
            </div>
        </div>`;
    let boton1=document.getElementById("boton1");
        password=document.getElementById("pass1");
        boton1.addEventListener("click",pase )
};

function pase() {
   
        localStorage.setItem("password", JSON.stringify(password.value));
        let contraseña=localStorage.getItem("password");
        JSON.parse(contraseña)=="1234" ?   
                                            Swal.fire({                                             
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Accediste Presioná F5 para continuar',
                                            showConfirmButton: false,}) 
                                            :   
                                            Swal.fire({
                                            position: 'center',
                                            icon: 'error',
                                            title: 'Contraseña incorrecta, volvé a intentarlo',
                                            showConfirmButton: false,
                                            timer: 1200})

};

function clickResultado () {  
    
    let mesInicial= document.getElementById("mesInicial");
        seleccion1= mesInicial.options[mesInicial.selectedIndex].value;
            object1=inicio(seleccion1);

    let mesFinal= document.getElementById("mesFinal");
        seleccion2= mesFinal.options[mesFinal.selectedIndex].value;
            object2=fin(seleccion2);

    valorKWH= document.getElementById("valorKWH").value;
        let result= presupuestoTotal2(object1.energia,object2.energia,parseFloat(valorKWH));
    
    Swal.fire({
                title: "Desde " +(seleccion1)+ " hasta "+ (seleccion2)+" el presupuesto será de $"+(result),
                showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
            })
};
const inicio = (seleccion1) =>{
    
    let desdePeriodoKwh=seleccion1
    switch (desdePeriodoKwh) {
        case "Enero":
        return presupuestoTotal[0]    
        case "Febrero":
        return presupuestoTotal[1]          
        case "Marzo":
        return presupuestoTotal[2]       
        case "Abril":
        return presupuestoTotal[3]       
        case "Mayo":
        return presupuestoTotal[4]      
        case "Junio":
        return presupuestoTotal[5] 
    };
    };

function fin(select2){
   
     
    let hastaPeriodoKwh=seleccion2
    switch (hastaPeriodoKwh) {
        case "Enero":
        return presupuestoTotal[0]    
        case "Febrero":
        return presupuestoTotal[1]          
        case "Marzo":
        return presupuestoTotal[2]       
        case "Abril":
        return presupuestoTotal[3]       
        case "Mayo":
        return presupuestoTotal[4]      
        case "Junio":
        return presupuestoTotal[5]    
    };
    }; 

const presupuestoTotal2 =(a,b,c) => { 
    //Desestructuración//
    const { energia: e0, potencia: p0, mes: m0}= presupuestoTotal[0];
    const { energia: e1, potencia: p1, mes: m1}= presupuestoTotal[1];
    const { energia: e2, potencia: p2, mes: m2}= presupuestoTotal[2];
    const { energia: e3, potencia: p3, mes: m3}= presupuestoTotal[3];
    const { energia: e4, potencia: p4, mes: m4}= presupuestoTotal[4];
    const { energia: e5, potencia: p5, mes: m5}= presupuestoTotal[5]; 

    const mesesDeConsumoKWH=[e0,e1,e2,e3,e4,e5];
    let sumaMeses=0; 

if(object1.mes=="enero" && object2.mes=="enero"){sumaMeses=e0};

if(object1.mes=="enero" && object2.mes=="febrero"){
    for (let i = 0; i <= 1; i++) {
    sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="marzo"){
    for (let i = 0; i <= 2; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="abril"){
    for (let i = 0; i <=3; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="mayo"){
    for (let i = 0; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="enero" && object2.mes=="junio"){
    for (let i = 0; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="febrero"){sumaMeses=e1};

if(object1.mes=="febrero" && object2.mes=="marzo"){
    for (let i = 1; i <= 2; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="abril"){
    for (let i = 1; i <= 3; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="mayo"){
    for (let i = 1; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};

if(object1.mes=="febrero" && object2.mes=="junio"){
    for (let i = 1; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
}
};
if(object1.mes=="marzo" && object2.mes=="marzo"){sumaMeses=e2}

if(object1.mes=="marzo" && object2.mes=="abril"){
    for (let i = 2; i <= 3; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="marzo" && object2.mes=="mayo"){
    for (let i = 2; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="marzo" && object2.mes=="junio"){
    for (let i = 2; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="abril" && object2.mes=="abril"){sumaMeses=e3}

if(object1.mes=="abril" && object2.mes=="mayo"){
    for (let i = 3; i <= 4; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="abril" && object2.mes=="junio"){
    for (let i = 3; i <= 5; i++) {
        sumaMeses+=mesesDeConsumoKWH[i];
    }
};
if(object1.mes=="mayo" && object2.mes=="mayo"){sumaMeses=e4};

if(object1.mes=="mayo" && object2.mes=="junio"){ 
    for (let i = 4; i <= 5; i++) {
    sumaMeses+=mesesDeConsumoKWH[i];
}
};
if(object1.mes=="junio" && object2.mes=="junio"){sumaMeses=e5};

return (sumaMeses*valorKWH); 
};