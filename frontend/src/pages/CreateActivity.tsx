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
				createActivity({
					titulo,
					descripcion,
					fecha_inicio: fechaInicio,
					token,
				})
			).unwrap();

			// Refrescar lista y redirigir
			dispatch(fetchActivities());
			alert("✅ Actividad creada correctamente");
			navigate("/activities");
		} catch (error: unknown) {
			// Basic error handling: show the error message
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			alert("❌ Error al crear actividad: " + errorMessage);
		}
	};

	return (
		<div className="mx-auto px-4 flex justify-center mt-12">
			<div className="bg-white rounded-lg shadow-md p-4 max-w-xl w-full">
				<h3 className="text-xl font-semibold mb-4 text-center">
					Crear Nueva Actividad
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Título
						</label>
						<input
							type="text"
							className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={titulo}
							onChange={(e) => setTitulo(e.target.value)}
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Descripción
						</label>
						<textarea
							className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							rows={4}
							value={descripcion}
							onChange={(e) => setDescripcion(e.target.value)}
							required
						></textarea>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Fecha de inicio
						</label>
						<input
							type="date"
							className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={fechaInicio}
							onChange={(e) => setFechaInicio(e.target.value)}
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full py-2 px-4 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						Crear Actividad
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateActivity;
