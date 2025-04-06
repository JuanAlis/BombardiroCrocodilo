import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Welcome = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    const mensajePorRol = {
        alumno: "Como alumno, podrás explorar actividades creadas por profesores, inscribirte, y seguir tu progreso.",
        profesor: "Como profesor, tendrás la posibilidad de crear actividades para tus alumnos y gestionar sus participaciones.",
        admin: "Eres administrador. Esta vista es solo informativa, pero puedes gestionar usuarios desde tu panel.",
    };

    return (
        <div className="container mt-4">
            {/* Banner */}
            <div className="mb-4 ">
                <img
                    src="https://as1.ftcdn.net/jpg/02/56/81/20/1000_F_256812063_SVpamVlb0Le0igRa4iB9J5oVMDM7d7Kw.jpg"
                    alt="Banner e-learning"
                    className="img-fluid rounded shadow w-100"
                />
            </div>

            {/* Título */}
            <h1 className="text-center mb-4">¡Bienvenido a la Plataforma E-Learning! 🎓</h1>

            {/* Descripción por rol */}
            {user && (
                <div className="alert alert-info">
                    <strong>Tu rol:</strong> {user.tipo.charAt(0).toUpperCase() + user.tipo.slice(1)} <br />
                    <span>{mensajePorRol[user.tipo as "alumno" | "profesor" | "admin"]}</span>
                </div>
            )}

            {/* Tips de uso */}
            <div className="card mb-4">
                <div className="card-header">Consejos para sacarle el máximo partido</div>
                <div className="card-body">
                    <ul>
                        <li>Navega por las actividades desde la sección “Activities”.</li>
                        <li>Completa tu perfil para una mejor experiencia.</li>
                        <li>Revisa regularmente nuevas actividades y mensajes.</li>
                        <li>Como profesor, planifica contenido útil y claro para los alumnos.</li>
                    </ul>
                </div>
            </div>

            {/* Políticas de respeto */}
            <div className="alert alert-warning">
                <h5>⚠️ Normas de la comunidad</h5>
                <p>
                    El respeto es fundamental. No se tolerarán mensajes ofensivos, faltas de respeto o comportamientos
                    abusivos dentro de la plataforma.
                </p>
                <p>
                    <strong>Los usuarios que incumplan estas normas podrán ser suspendidos o baneados permanentemente.</strong>
                </p>
            </div>
        </div>
    );
};

export default Welcome;
