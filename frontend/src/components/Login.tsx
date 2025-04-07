import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, logout } from "../redux/authSlice";
import { RootState, AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

/**
 * Login component ensuring consistent modern styling.
 */
const Login: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { user, token, loading, error } = useSelector(
		(state: RootState) => state.auth
	);

	const [isRegistering, setIsRegistering] = useState(false);
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [tipo, setTipo] = useState<"alumno" | "profesor">("alumno");

	const navigate = useNavigate();

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault();
			try {
				if (isRegistering) {
					await dispatch(
						registerUser({ nombre, email, password, tipo })
					).unwrap();
					alert("✅ Usuario registrado correctamente");
					setIsRegistering(false);
					setNombre("");
					setEmail("");
					setPassword("");
				} else {
					await dispatch(loginUser({ email, password })).unwrap();
					navigate("/bienvenida");
				}
			} catch (rejectedValueOrSerializedError) {
				console.error("Failed operation:", rejectedValueOrSerializedError);
			}
		},
		[dispatch, navigate, isRegistering, nombre, email, password, tipo]
	);

	const handleLogout = useCallback(() => {
		dispatch(logout());
		alert("Has cerrado sesión");
		navigate("/");
	}, [dispatch, navigate]);

	if (user && token) {
		return (
			<div className="flex justify-center mt-12 px-4">
				<div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 max-w-md w-full">
					<div className="text-center">
						<img
							src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
							alt={`${user.nombre}'s avatar`}
							className="rounded-full mb-4 mx-auto border border-gray-300"
							width="100"
							height="100"
						/>
						<h3 className="text-xl font-semibold text-gray-800">
							{user.nombre}
						</h3>
						<p className="text-gray-500 text-sm">{user.email}</p>
					</div>
					<hr className="my-5 border-t border-gray-200" />
					<div className="space-y-2 text-sm text-gray-800">
						<p>
							<strong className="font-medium">Rol:</strong>{" "}
							<span className="capitalize">{user.tipo}</span>
						</p>
						<p>
							<strong className="font-medium">ID:</strong>{" "}
							<span className="text-gray-500 break-all">{user._id}</span>
						</p>
					</div>

					<div className="mt-8 space-y-4">
						{(user.tipo === "profesor" || user.tipo === "alumno") && (
							<button
								className="w-full py-2.5 px-4 rounded-md font-semibold bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
								onClick={() => navigate("/activities")}
							>
								Ir a mis actividades
							</button>
						)}
						<button
							className="w-full py-2.5 px-4 rounded-md font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-150 ease-in-out"
							onClick={handleLogout}
						>
							Cerrar sesión
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex justify-center items-center min-h-[calc(100vh-8rem)] px-4">
			<div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 max-w-sm w-full">
				<h2 className="text-center text-3xl font-bold mb-8 text-gray-900">
					{isRegistering ? "Registrarse" : "Iniciar Sesión"}
				</h2>

				{error && (
					<p className="text-red-600 text-sm mb-4 text-center">{error}</p>
				)}

				<form onSubmit={handleSubmit} className="space-y-5">
					{isRegistering && (
						<>
							<div>
								<label
									htmlFor="nombre"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Nombre
								</label>
								<input
									id="nombre"
									type="text"
									placeholder="Tu nombre completo"
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
									className="block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="tipo"
									className="block text-sm font-medium text-gray-700 mb-1"
								>
									Tipo de usuario
								</label>
								<select
									id="tipo"
									value={tipo}
									onChange={(e) =>
										setTipo(e.target.value as "alumno" | "profesor")
									}
									className="block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
								>
									<option value="alumno">Alumno</option>
									<option value="profesor">Profesor</option>
								</select>
							</div>
						</>
					)}

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							placeholder="tu@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							required
							autoComplete="email"
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Contraseña
						</label>
						<input
							id="password"
							type="password"
							placeholder="Tu contraseña"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="block w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							required
							autoComplete={isRegistering ? "new-password" : "current-password"}
						/>
					</div>

					<button
						type="submit"
						className="w-full py-2.5 px-4 rounded-md font-semibold bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-60 disabled:cursor-not-allowed transition duration-150 ease-in-out"
						disabled={loading}
					>
						{loading ? (
							<span className="flex items-center justify-center">
								<svg
									className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Cargando...
							</span>
						) : isRegistering ? (
							"Registrarse"
						) : (
							"Iniciar Sesión"
						)}
					</button>
				</form>

				<p className="text-center text-sm text-gray-600 mt-8">
					{isRegistering ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}{" "}
					<button
						className="font-medium text-orange-500 hover:text-orange-600 focus:outline-none focus:underline"
						type="button"
						onClick={() => {
							setIsRegistering(!isRegistering);
						}}
					>
						{isRegistering ? "Inicia sesión" : "Regístrate"}
					</button>
				</p>
			</div>
		</div>
	);
};

export default Login;
