import React from 'react'
import { useState } from 'react'
import { Form, Button, Table } from 'react-bootstrap'

const MainContact = () => {

    const consultas = []


    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [pedidos, setPedidos] = useState(consultas)
    console.log(pedidos)

    const handlerChange = (e) => {
        setEmail(e.target.value)
    }

    const agregarConsulta = (e) => {
        e.preventDefault()
        setPedidos([...pedidos, { id, nombre, email, descripcion }])
        e.target.reset()
    }

    const deleteConsulta = (id) => {
        const resultado = pedidos.filter(pedido => pedido.id !== id)
        setPedidos(resultado)
    }

    return (
        <>
            <div className="container">
                <div className="row my-2 p-5">
                    <div className="col-12"></div>
                    <h2>Contactame</h2>
                    <Form onSubmit={agregarConsulta} className="mb-4">
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type='text' onChange={(e) => setId(e.target.value)} required />
                            <br />
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' onChange={(e) => setNombre(e.target.value)} required />
                            <br />
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" onChange={handlerChange} required />
                            <br />
                            <Form.Label type="text">Descripcion</Form.Label>
                            <Form.Control onChange={(e) => setDescripcion(e.target.value)} required />
                            <br />
                            <Button className='btn btn-primary' type="submit">Enviar Mensaje</Button>
                        </Form.Group>
                    </Form>
                    <Table className='mx-5'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Descripcion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pedidos.map(pedido =>
                                <tr key={pedido.id}>
                                    <td>{pedido.id}</td>
                                    <td>{pedido.nombre}</td>
                                    <td>{pedido.email}</td>
                                    <td>{pedido.descripcion}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteConsulta(pedido.id)}>eliminar</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    )
}

export default MainContact;
