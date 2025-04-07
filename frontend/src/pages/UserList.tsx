import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchUsers, updateUser, deleteUser } from "../redux/userSlice";

interface User {
	_id: string;
	nombre: string;
	email: string;
	tipo: "alumno" | "profesor" | "admin";
}

/**
 * Component to display and manage a list of users.
 * Allows admins to view, edit, and delete users.
 */
const UserList: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { users, loading, error } = useSelector(
		(state: RootState) => state.users
	);
	const token = useSelector((state: RootState) => state.auth.token);

	const [editingUser, setEditingUser] = useState<User | null>(null);

	useEffect(() => {
		if (token) {
			console.log("✅ useEffect ejecutado con token:", token);
			dispatch(fetchUsers());
		} else {
			console.warn("⛔ No hay token en Redux");
		}
	}, [dispatch, token]);

	/**
	 * Handles the deletion of a user.
	 * @param {string} id - The ID of the user to delete.
	 */
	const handleDelete = (id: string) => {
		if (window.confirm("Are you sure you want to delete this user?")) {
			if (token) {
				dispatch(deleteUser({ id, token }));
			}
		}
	};

	/**
	 * Handles saving the changes made to an editing user.
	 */
	const handleSave = () => {
		if (editingUser && token) {
			const { _id, ...updatedData } = editingUser;
			dispatch(updateUser({ id: _id, updatedData, token })).then(() => {
				dispatch(fetchUsers()); // Re-fetch users after update
			});
			setEditingUser(null); // Close modal
		}
	};

	if (loading) return <p className="text-center mt-4">Cargando usuarios...</p>;
	if (error)
		return <p className="text-center text-red-500 mt-4">Error: {error}</p>;

	console.log("Usuarios desde Redux:", users);

	return (
		<div className="mx-auto px-4 mt-8">
			<h2 className="text-2xl font-semibold mb-4">CRUD de Usuarios</h2>
			<div className="overflow-x-auto shadow-md rounded-lg">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-100">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Nombre
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Email
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Tipo
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
							>
								Acciones
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{users.map((user) => (
							<tr key={user._id} className="hover:bg-gray-50">
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									{user.nombre}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{user.email}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
									{user.tipo}
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button
										className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded text-xs mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
										onClick={() => setEditingUser(user)}
									>
										Editar
									</button>
									<button
										className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
										onClick={() => handleDelete(user._id)}
									>
										Eliminar
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Edit User Modal */}
			{editingUser && (
				<div
					className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
					aria-labelledby="modal-title"
					role="dialog"
					aria-modal="true"
				>
					<div className="relative mx-auto p-6 border w-full max-w-md shadow-lg rounded-md bg-white">
						{/* Modal Header */}
						<div className="flex justify-between items-center border-b pb-3 mb-4">
							<h5
								className="text-lg font-semibold text-gray-900"
								id="modal-title"
							>
								Editar Usuario
							</h5>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
								onClick={() => setEditingUser(null)}
								aria-label="Close modal"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									></path>
								</svg>
							</button>
						</div>
						{/* Modal Body */}
						<div className="mb-4">
							<label
								htmlFor="userName"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Nombre
							</label>
							<input
								id="userName"
								type="text"
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-3"
								value={editingUser.nombre}
								onChange={(e) =>
									setEditingUser({ ...editingUser, nombre: e.target.value })
								}
							/>
							<label
								htmlFor="userEmail"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email
							</label>
							<input
								id="userEmail"
								type="email"
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-3"
								value={editingUser.email}
								onChange={(e) =>
									setEditingUser({ ...editingUser, email: e.target.value })
								}
							/>
							<label
								htmlFor="userType"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Tipo
							</label>
							<select
								id="userType"
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
								value={editingUser.tipo}
								onChange={(e) =>
									setEditingUser({
										...editingUser,
										tipo: e.target.value as "alumno" | "profesor" | "admin",
									})
								}
							>
								<option value="alumno">Alumno</option>
								<option value="profesor">Profesor</option>
								<option value="admin">Admin</option>
							</select>
						</div>
						{/* Modal Footer */}
						<div className="flex justify-end space-x-2 border-t pt-4">
							<button
								className="py-2 px-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
								onClick={() => setEditingUser(null)}
							>
								Cancelar
							</button>
							<button
								className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								onClick={handleSave}
							>
								Guardar
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserList;
