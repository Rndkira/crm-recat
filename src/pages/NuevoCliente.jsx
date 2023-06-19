import { useNavigate,Form,useActionData,redirect } from "react-router-dom";
import Formulario from "../components/Fomurlario";
import Error from "../components/Error";

import { agregarCliente } from "../data/clientes";


export async function action ({request}) {
   
  const formData = await request.formData()
  
  const datos = Object.fromEntries(formData)
 
  const email = formData.get('email')
   const errores = []
  
   // validaciones 
   if(Object.values(datos).includes('')){
      errores.push('todo lo campo son necesario');


   }

   // validando solo el email

   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

   if(!regex.test(email)){
    errores.push('El email no no es valido')

   }

   // retornar datos si hay errores
   
   if(Object.keys(errores).length){
    return errores
   }

   await agregarCliente(datos)


   return redirect('/')
}

const NuevoCliente = () => {



  const navigate = useNavigate();

  const errores = useActionData()

  
  
  return (
    <>
      <h1 className=" font-black text-4xl text-blue-900"> Nuevos Clientes</h1>
      <p className=" mt-3">
        Completa todo los campo para registrar un nuevo clientes
      </p>

      <div className="flex justify-end">
        <button
          className=" bg-blue-800 font-bold text-white uppercase px-3 py-0"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-whtie shadow md:w-3/4 rounded-md mx-auto px-5 py-10 mt-20 ">

        { errores?.length && errores.map((error, i) => <Error key = {i}> {error}</Error>) }
          <Form 
            method="post"
            noValidate
           
            
            >
              
              <Formulario/>

              <input type="submit" 
                    className=" mt-5 uppercase py-2 font-bold w-full bg-blue-800 text-white text-lg hover:bg-blue-950"
                    value= 'Registrar Cliente'
                    />
                    

          </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
