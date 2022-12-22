import React, { useState, useEffect } from 'react';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';

const ProyectosEditar = () => {

    const navigate = useNavigate();

    const { idproyecto } = useParams();
    let arreglo = idproyecto.split('@');
    const idP = arreglo[0];
    const nombreProyecto = arreglo[1];

    const [proyecto, setProyecto] = useState({
        nombre: nombreProyecto
    });

    const { nombre } = proyecto;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const onChange = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editarProyecto();
    }

    const editarProyecto = async () => {
        let arreglo = idproyecto.split('@');
        const idProyecto = arreglo[0];

        const data = {
            nombre: proyecto.nombre,
            ipd: idP,
        }

        const response = await APIInvoke.invokePUT(`/api/proyectos/${idProyecto}`, data);
        const idProyectoEditado = response.proyecto._id;

        if (idProyectoEditado !== idProyecto) {
            const msg = "El proyecto No fue editado correctamente";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        valuue: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            navigate("/proyectos-admin");
            const msg = "El proyecto fue editado correctamente";
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        valuue: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });

        }
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Edición de proyectos"}
                    breadCrumb1={"Listado de Proyectos"}
                    breadCrumb2={"Edición"}
                    ruta1={"/proyectos-admin"}
                />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                
                            </h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className='card-body'>
                                    <div className='form-group'>
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text"
                                            className='form-control'
                                            id="nombre"
                                            name="nombre"
                                            placeholder='Ingrese el nombre del proyecto'
                                            value={nombre}
                                            onChange={onChange}
                                            required />
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <button type='submit' className='btn btn-primary'>Editar</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ProyectosEditar;