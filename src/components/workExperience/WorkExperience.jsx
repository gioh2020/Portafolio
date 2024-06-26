import React from "react";
import styles from "./WorkExperience.module.css"

function WorkExperience(props) {
    return (
        <div className={styles.principalContainer}>
            <div className={styles.principalDiv}>
                <div className={styles.title}>
                    <h1>EXPERIEN<span>CIA</span></h1>
                    <div className={styles.figureContainer}>
                        <h1 className={styles.bar}></h1>
                        <h1 className={styles.circle}></h1>
                        <h1 className={styles.circle}></h1>
                        <h1 className={styles.bar}></h1>
                    </div>
                </div>

                <body className={styles.bodyContainer}>
                    <div className={styles.carDiv}>

                        <div className={styles.yearFunciones}>
                            <div className={styles.containerDate}>
                                <h5 className={styles.date}>Mar 2023 - Actualidad.</h5>
                            </div>
                            <div className={styles.infoExperience}>
                                <h2>Asofty - Desarrollador de software</h2>
                                <h3>Responsabilidades</h3>
                                <ul>
                                    <li>Implementación de funcionalidades de lógica y
                                        diseño en front-end utilizando Angular, TypeScript,
                                        HTML y CSS.</li>
                                    <li>Desarrollar y mantener componentes reutilizables,
                                        servicios y módulos para construir aplicaciones web
                                        escalables y eficientes.</li>
                                    <li>Participar en reuniones de planificación y revisión de
                                        código, ofreciendo ideas y soluciones técnicas para
                                        mejorar la calidad del software.</li>
                                    <li>Diseñar e implementar endpoints en servicios web de tipo REST en el backend utilizando tecnologías como .Net6
                                        con el lenguaje de programación C#.
                                    </li>
                                    <li>Liderar la capacitación de nuevos desarrolladores,
                                        con respecto a la infraestructura del proyecto y las
                                        tecnologías a utilizar.</li>
                                </ul>
                                <h3>Logros</h3>
                                <ul>
                                    <li>Hice parte del equipo desarrollador para el proyecto Asofty ERP web, con sus respectivos módulos, comercial, administrativo,
                                        contable entre otros. Desde la etapa de planeación hasta el despliegue a producción.</li>
                                    <li>Desarrollé en un 80% la funcionalidad del componente cotización, y módulo operativo para los negocios logísticos (Marítimo y Aéreo).</li>
                                    <li>En menos de dos meses adquirí el conocimiento en Angular, integrándome rápidamente al equipo FrontEnd.</li>
                                    <li>En seis meses me capacite de forma autonoma en .NET y MySQL para apoyar de manera efectiva al equipo BackEnd.</li>
                                </ul>
                                <div className={styles.tecnologiasContainer}>
                                    <h4 className={styles.tecnologias}>Angular</h4>
                                    <h4 className={styles.tecnologias}>.Net</h4>
                                    <h4 className={styles.tecnologias}>TypeScript</h4>
                                    <h4 className={styles.tecnologias}>MySql</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.carDiv}>

                        <div className={styles.yearFunciones}>
                            <div className={styles.containerDate}>
                                <h5 className={styles.date}>2018 - 2022.</h5>
                            </div>
                            <div className={styles.infoExperience}>
                                <h2>Ingeniero Mecánico</h2>
                                <ul>
                                    <li>Durante los 4 años donde ejercí como ingeniero
                                        mecánico, he desarrollado habilidades clave en
                                        lógica, trabajo en equipo, detección de oportunidades
                                        de mejora, resolución de problemas, gestión de
                                        proyectos. Estas experiencias han sido
                                        fundamentales para mi crecimiento profesional y
                                        personal.
                                    </li>
                                </ul>
                                <div className={styles.tecnologiasContainer}>
                                    <h4 className={styles.tecnologias}>Trabajo en equipo</h4>
                                    <h4 className={styles.tecnologias}>Resolución de problemas </h4>
                                    <h4 className={styles.tecnologias}>Gestión Proyectos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>

    )
}

export default WorkExperience