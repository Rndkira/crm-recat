import { useNavigate,Form,useLoaderData,useActionData,redirect } from "react-router-dom";

import { obtenerCliente,actualizarCliente } from "../data/clientes";
import Error from "./Error";

import Formulario from "./Fomurlario";


export async function loader ({params}) {

 const cliente = await obtenerCliente(params.clienteId);
   
 if(Object.values(cliente) === 0){
  throw new Response('', {
    status: 400,
    statusText: 'EL cliente no fue encontrado'
  })
 }
  return cliente
}

export async function action ({request,params}) {
   
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

   await actualizarCliente(params.clienteId, datos)

   return redirect('/')
}

const EditarCliente = () => {

  const navigate = useNavigate()

  const cliente = useLoaderData()

  const errores = useActionData()

  
  return (
    <>
    <h1 className=" uppercase font-black text-4xl text-center text-blue-900"> Editando  Clientes</h1>
    <p className=" text-center font-bold mt-5">
        Aqui podra modificar un cliente
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
            
            <Formulario
             cliente={cliente}
            />

            <input type="submit" 
                  className=" mt-5 uppercase py-2 font-bold w-full bg-blue-800 text-white text-lg hover:bg-blue-950"
                  value= 'Guardar Cambios '
                  />
                  

        </Form>
    </div>
  </>
  )
}

export default EditarCliente