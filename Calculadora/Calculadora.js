const Pantalla = document.querySelector(".Pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton =>{
    boton.addEventListener("click" , ()=>{
        const botonApretado = boton.textContent;

         if(boton.id ==="C"){
            Pantalla.textContent = "0";
            return;
         }

         if(boton.id === "Borrar"){
            if(Pantalla.textContent.length === 1 || Pantalla.textContent === "Error"){
                Pantalla.textContent = "0";
            }else{
            Pantalla.textContent = Pantalla.textContent.slice(0, -1);
            }
            return;
         }
         if(boton.id === "igual"){
            try{
            Pantalla.textContent = eval(Pantalla.textContent);
            }catch{
                Pantalla.textContent = "Error";
            }
            return;
         }


        if(Pantalla.textContent === "0" || Pantalla.textContent === "Error"
        ){
            Pantalla.textContent = botonApretado;
        }
        else{
            Pantalla.textContent += botonApretado;
        }
        
    })
})