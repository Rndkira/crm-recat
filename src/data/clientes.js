export async function obtenerClientes() {

    const repuesta = await fetch(
        import.meta.env.VITE_API_URL)

    const resultado = await repuesta.json()

    return resultado;

}

export async function obtenerCliente(id) {

    const repuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)

    const resultado = await repuesta.json()

    return resultado;

}

export async function actualizarCliente(id, datos) {

    try {

        const repuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'put',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await repuesta.json()
    } catch (error) {
        console.log(error);
    }

}
export async function agregarCliente(datos) {
    try {

        const repuesta = await fetch(
            import.meta.env.VITE_API_URL, {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        await repuesta.json()
    } catch (error) {
        console.log(error);
    }
}

export async function eliminarCliente(id) {
    try {

        const repuesta = await fetch(
            `${import.meta.env.VITE_API_URL}/${id}`, {
                method: 'DELETE',

            })
        await repuesta.json()
    } catch (error) {
        console.log(error);
    }
}