import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { createActivity, fetchActivities } from "../redux/activitySlice";
import { useNavigate } from "react-router-dom";

const CreateActivity = () => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.auth.token);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token) return alert("No hay token. Debes iniciar sesión.");

        try {
            await dispatch(
                createActivity({ titulo, descripcion, fecha_inicio: fechaInicio, token })
            ).unwrap();

            // Refrescar lista y redirigir
            dispatch(fetchActivities());
            alert("✅ Actividad creada correctamente");
            navigate("/activities");
        } catch (error: any) {
            alert("❌ Error al crear actividad: " + error);
        }
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card shadow p-4" style={{ maxWidth: "600px", width: "100%" }}>
                <h3 className="mb-4 text-center">Crear Nueva Actividad</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea
                            className="form-control"
                            rows={4}
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Fecha de inicio</label>
                        <input
                            type="date"
                            className="form-control"
                            value={fechaInicio}
                            onChange={(e) => setFechaInicio(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Crear Actividad
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateActivity;
