//Funcion basica 1

 function ej() {

    console.log(17);
    return "Que tal?";
    
    }

    const pregunta = ej();
    console.log(pregunta);

    //Funcion basica 2


    function resta(a,b = 50){

        return a - b;


    }

    const result = resta(89);

    console.log(result);

    //funcion 3(anonimas)

    const FuncionAnonima = function () {
        
      console.log(54);
      

    };

    FuncionAnonima();

   

    //funcion 4(flecha con un solo parametro)

    const FuncionAnon = d => {
        
        let re = d + 8;
        console.log("Kiubo");

        return re;
        
  
      };

      const result2 = FuncionAnon(70);

      console.log(result2);
      
    
    