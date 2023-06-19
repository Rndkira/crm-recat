import { useNavigate,Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";

export async function action ({params}){
 await  eliminarCliente(params.clienteId)

  return redirect('/')
}


const Cliente = ({ cliente }) => {


  const navigate = useNavigate()

  const { id, nombre, empresa, telefono, email,notas } = cliente;

  return (
    <>
    
    <tr className=" border-b">
      <td className=" p-6 space-y-2 text-center">
        <p className=" text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>

      <td className=" p-6 text-center">
        <p className=" mb-2 text-gray-600">
          <span className=" text-gray-800 uppercase font-bold">Email:</span>{" "}
          {email}{" "}
        </p>
        <p className=" text-gray-600">
          <span className=" text-gray-800 uppercase font-bold">Telefono:</span>{" "}
          {telefono}{" "}
        </p>
      </td>

      <td className=" p-6  flex gap-5   ">
        <button 
         type="button"
         className="  text-blue-600 hover:text-blue-700   font-bold uppercase mt-7 text-xs"
         onClick={() => navigate(`/clientes/${id}/editar`)}
        >
          Editar
        </button>

        <Form  
         method="post"
         action={`/clientes/${id}/eliminar`}
         onSubmit={(e) =>
         {
          if(!confirm('Deses Eliminar este Registro ?'))
           e.preventDefault()
         }
        }
        >

        <button 
            className=" text-red-600 hover:text-red-700 font-bold uppercase mt-7 text-xs"
            type="submit"
            >
          Eliminar
        </button>
        </Form>

      </td>
    </tr>

    </>
  );
};

export default Cliente;
