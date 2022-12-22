import React from 'react';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import Navbar from '../componentes/Navbar';
import SidebarContainer from '../componentes/SidebarContainer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Dashboard"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />
                <section className="content">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-3 col-6'>
                                <div className='small-box bg-info'>
                                    <div class="inner">
                                        <h3>Proyectos</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className='icon'>
                                        <i className='fa fa-edit' />
                                    </div>
                                    <Link to={"/proyectos-admin"} class="small-box-footer">Ver proyectos <i class="fas fa-arrow-circle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Home;