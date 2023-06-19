import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../data/clientes";
import Cliente from "../components/Cliente";

export function loader (){  
 
   const clientes = obtenerClientes()
  

  return clientes

}

const Index = () => {

  const clientes = useLoaderData()
 

  


  return (
    <div >
       <h1 className=' font-black text-4xl text-blue-900'> Clientes</h1>
       <p className=" mt-3">administra tus Clienstes</p>

       <table className=" w-full shadow-md bg-white  mt-5">
        <thead className=" bg-blue-900 text-white " >
          <tr>
          <th>Cliente</th>
          <th>Contacto</th>
          <th>Acciones</th>
          </tr>
        </thead>
        <tbody>

          
            

           {clientes.map(cliente => (
           
            <Cliente 
               key={cliente.id} 
               cliente = {cliente} />
           ))}
        
        </tbody>
       </table>

    </div>
  )
}

export default Index