import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, logout } from "../redux/authSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const { user, token, loading, error } = useSelector((state: RootState) => state.auth);

    const [isRegistering, setIsRegistering] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tipo, setTipo] = useState<"alumno" | "profesor">("alumno");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isRegistering) {
            dispatch(registerUser({ nombre, email, password, tipo }) as any).then((res: any) => {
                if (!res.error) alert("✅ Usuario registrado correctamente");
            });
        } else {
            dispatch(loginUser({ email, password }) as any);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
        alert("Has cerrado sesión");
    };

    const navigate = useNavigate();

    if (user && token) {
        return (
            <div className="container d-flex justify-content-center mt-5">
                <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
                    <div className="text-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="avatar"
                            className="rounded-circle mb-3"
                            width="100"
                        />
                        <h3>{user.nombre}</h3>
                        <p className="text-muted">{user.email}</p>
                    </div>
                    <hr />
                    <p><strong>Rol:</strong> {user.tipo.charAt(0).toUpperCase() + user.tipo.slice(1)}</p>
                    <p><strong>ID de usuario:</strong> {user._id}</p>

                    <div className="d-grid mt-4">
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                    {(user.tipo === "profesor" || user.tipo === "alumno") && (
                        <div className="d-grid mt-3">
                            <button className="btn btn-outline-primary" onClick={() => navigate("/activities")}>
                                Ir a mis actividades
                            </button>
                        </div>
                    )}

                </div>
            </div>
        );
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">{isRegistering ? "Registrarse" : "Iniciar Sesión"}</h2>

                {error && <p className="text-danger">{error}</p>}

                <form onSubmit={handleSubmit}>
                    {isRegistering && (
                        <>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <select
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value as "alumno" | "profesor")}
                                    className="form-select"
                                >
                                    <option value="alumno">Alumno</option>
                                    <option value="profesor">Profesor</option>
                                </select>
                            </div>
                        </>
                    )}

                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? "Cargando..." : isRegistering ? "Registrarse" : "Iniciar Sesión"}
                    </button>
                </form>

                <p className="text-center mt-3">
                    {isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
                    <button className="btn btn-link" type="button" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? "Inicia sesión" : "Regístrate"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
