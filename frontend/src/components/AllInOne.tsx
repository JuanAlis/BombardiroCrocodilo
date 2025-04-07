import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { inscribirseActividad, fetchActivities } from "../redux/activitySlice";

/**
 * Displays all activities with updated card styling based on the reference image.
 */
const AllInOne = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const { activities, loading, error } = useSelector(
		(state: RootState) => state.activities
	);
	const { user, token } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		dispatch(fetchActivities());
	}, [dispatch]);

	/**
	 * Handles student enrollment in an activity.
	 */
	const handleInscribirse = useCallback(
		async (id: string) => {
			if (!token || !user)
				return alert("Debes iniciar sesión para inscribirte.");
			if (user.tipo !== "alumno")
				return alert("Solo los alumnos pueden inscribirse.");

			try {
				await dispatch(inscribirseActividad({ id, token })).unwrap();
				dispatch(fetchActivities());
				alert("✅ Te has inscrito correctamente");
			} catch (err: unknown) {
				const message = err instanceof Error ? err.message : String(err);
				alert(`❌ Error al inscribirse: ${message}`);
			}
		},
		[dispatch, token, user]
	);

	return (
		<div className="mx-auto px-4 mt-8 mb-12 max-w-7xl">
			<div className="flex justify-between items-center mb-8">
				<h2 className="text-3xl font-bold text-gray-900">
					Actividades Disponibles
				</h2>
				{user?.tipo === "profesor" && (
					<button
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md shadow transition duration-150 ease-in-out"
						onClick={() => navigate("/activities/create")}
					>
						Crear Actividad
					</button>
				)}
			</div>
			{loading && (
				<p className="text-center text-gray-500 py-10">
					Cargando actividades...
				</p>
			)}
			{error && (
				<p className="text-center text-red-600 py-10">Error: {error}</p>
			)}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{activities.map((act) => {
					const isEnrolled =
						user?.tipo === "alumno" &&
						act.alumnos_inscritos?.includes(user._id);
					return (
						<div
							key={act._id}
							className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
						>
							<div className="p-6 border-b border-gray-200">
								<h3 className="text-xl font-bold text-gray-900 mb-1">
									{act.titulo}
								</h3>
								<p className="text-sm text-gray-500">{act.descripcion}</p>
							</div>
							<div className="p-6 flex-grow">
								<div className="flex flex-wrap gap-2 mb-5">
									<span className="inline-block rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-medium">
										Profesor: {act.profesor?.nombre ?? "N/A"}
									</span>
									<span className="inline-block rounded-full bg-orange-100 text-orange-800 px-3 py-1 text-xs font-medium">
										Inicio: {new Date(act.fecha_inicio).toLocaleDateString()}
									</span>
								</div>

								{act.preguntas && act.preguntas.length > 0 && (
									<div className="mt-4 pt-4 border-t border-gray-200">
										<h6 className="text-sm font-semibold mb-3 text-gray-700">
											Comentarios:
										</h6>
										<div className="space-y-4">
											{act.preguntas.map((preg, index) => (
												<div
													key={preg._id}
													className={`text-sm ${index > 0 ? "border-t border-gray-100 pt-3 mt-3" : ""}`}
												>
													<p className="text-gray-800">
														<strong className="font-medium">
															{preg.alumno?.nombre ?? "Alumno"}:
														</strong>{" "}
														{preg.contenido}
													</p>
													{preg.respuesta_profesor && (
														<p className="mt-1 text-gray-600 pl-4">
															<strong className="font-medium">
																Respuesta:
															</strong>{" "}
															{preg.respuesta_profesor}
														</p>
													)}
												</div>
											))}
										</div>
									</div>
								)}
							</div>
							<div className="p-6 bg-gray-50 border-t border-gray-200 mt-auto">
								{user?.tipo === "alumno" && (
									<button
										className={`w-full py-2.5 px-4 rounded-md font-semibold text-white shadow-md transition duration-300 ease-in-out ${isEnrolled ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 transform hover:-translate-y-0.5"}`}
										onClick={() => !isEnrolled && handleInscribirse(act._id)}
										disabled={isEnrolled}
									>
										{isEnrolled ? "Ya Inscrito" : "Inscribirse en la Clase"}
									</button>
								)}

								{user?.tipo !== "alumno" && (
									<p className="text-xs text-center text-gray-500">
										La inscripción es solo para alumnos.
									</p>
								)}
								{!user && (
									<p className="text-xs text-center text-gray-500">
										Inicia sesión como alumno para inscribirte.
									</p>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AllInOne;
