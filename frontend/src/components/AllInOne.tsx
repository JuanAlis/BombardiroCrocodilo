import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { inscribirseActividad, fetchActivities, hacerPregunta } from "../redux/activitySlice";
import { responderPregunta } from "../redux/activitySlice";



const AllInOne = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { activities, loading, error } = useSelector((state: RootState) => state.activities);
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        dispatch(fetchActivities());
    }, [dispatch]);

    const token = useSelector((state: RootState) => state.auth.token);

    const handleInscribirse = async (id: string) => {
        if (!token) return alert("Debes iniciar sesión para inscribirte.");

        try {
            await dispatch(inscribirseActividad({ id, token })).unwrap();
            dispatch(fetchActivities());
            alert("✅ Te has inscrito correctamente");
        } catch (error: any) {
            alert("❌ Error: " + error);
        }
    };

    const [preguntasTexto, setPreguntasTexto] = useState<{ [id: string]: string }>({});

    const handlePregunta = async (id: string) => {
        const contenido = preguntasTexto[id];
        if (!contenido) return;

        try {
            await dispatch(hacerPregunta({ id, contenido, token: token! })).unwrap();
            dispatch(fetchActivities());
            setPreguntasTexto((prev) => ({ ...prev, [id]: "" }));
        } catch (error: any) {
            alert("❌ Error al enviar pregunta: " + error);
        }
    };

    const [respuestasTexto, setRespuestasTexto] = useState<{ [preguntaId: string]: string }>({});

    const handleResponder = async (activityId: string, preguntaId: string) => {
        const respuesta = respuestasTexto[preguntaId];
        if (!respuesta) return;

        try {
            await dispatch(responderPregunta({ activityId, preguntaId, respuesta, token: token! })).unwrap();
            dispatch(fetchActivities());
            setRespuestasTexto((prev) => ({ ...prev, [preguntaId]: "" }));
        } catch (error: any) {
            alert("❌ Error al responder: " + error);
        }
    };



    return (
        <div className="container mt-4">
            <h2 className="mb-3">Todas las actividades</h2>

            {user?.tipo === "profesor" && (
                <div className="mb-3 text-end">
                    <button className="btn btn-primary" onClick={() => navigate("/activities/create")}>
                        Crear nueva actividad
                    </button>
                </div>
            )}

            {loading && <p>Cargando actividades...</p>}
            {error && <p className="text-danger">{error}</p>}

            <div className="row">
                {activities.map((act) => (
                    <div key={act._id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h5 className="card-title">{act.titulo}</h5>
                                <p className="card-text">{act.descripcion}</p>
                                <p className="text-muted">
                                    <strong>Profesor:</strong> {act.profesor?.nombre}
                                </p>
                                <p className="text-muted">
                                    <strong>Fecha de inicio:</strong>{" "}
                                    {new Date(act.fecha_inicio).toLocaleDateString()}
                                </p>

                                {/* ✅ Botón de inscripción */}
                                {user?.tipo === "alumno" && (
                                    <button
                                        className="btn btn-outline-success btn-sm mt-2"
                                        onClick={() => handleInscribirse(act._id)}
                                    >
                                        Inscribirse
                                    </button>
                                )}

                                {/* ✅ Comentarios */}
                                {act.preguntas && act.preguntas.length > 0 && (
                                    <div className="mt-4">
                                        <h6>Comentarios:</h6>
                                        {act.preguntas.map((preg) => (
                                            <div key={preg._id} className="mb-2">
                                                <strong>{preg.alumno?.nombre}:</strong> {preg.contenido}

                                                {preg.respuesta_profesor && (
                                                    <div className="text-muted ms-3">
                                                        <strong>Respuesta:</strong> {preg.respuesta_profesor}
                                                    </div>
                                                )}

                                                {/* ✅ Campo de respuesta si es profesor creador y aún no respondió */}
                                                {!preg.respuesta_profesor &&
                                                    user?.tipo === "profesor" &&
                                                    user._id === act.profesor?._id && (
                                                        <div className="ms-3 mt-2">
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm mb-2"
                                                                placeholder="Escribe tu respuesta..."
                                                                value={respuestasTexto[preg._id] || ""}
                                                                onChange={(e) =>
                                                                    setRespuestasTexto((prev) => ({
                                                                        ...prev,
                                                                        [preg._id]: e.target.value,
                                                                    }))
                                                                }
                                                            />
                                                            <button
                                                                className="btn btn-sm btn-outline-primary"
                                                                onClick={() => handleResponder(act._id, preg._id)}
                                                            >
                                                                Responder
                                                            </button>
                                                        </div>
                                                    )}
                                            </div>
                                        ))}
                                    </div>
                                )}


                                {/* ✅ Campo para dejar nueva pregunta */}
                                {user?.tipo === "alumno" && act.alumnos_inscritos.includes(user._id) && (
                                    <div className="mt-3">
                                        <textarea
                                            className="form-control mb-2"
                                            placeholder="Escribe tu pregunta..."
                                            value={preguntasTexto[act._id] || ""}
                                            onChange={(e) =>
                                                setPreguntasTexto((prev) => ({ ...prev, [act._id]: e.target.value }))
                                            }
                                        />
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => handlePregunta(act._id)}
                                        >
                                            Enviar pregunta
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllInOne;