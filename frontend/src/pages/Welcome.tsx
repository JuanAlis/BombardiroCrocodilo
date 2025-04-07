import { useNavigate } from "react-router-dom";

const Welcome = () => {
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<>
			<div className="bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
					<div className="md:grid md:grid-cols-2 md:gap-16 items-center">
						{/* Left Column */}
						<div className="mb-12 md:mb-0">
							{/* Top Tag */}
							<span className="inline-block bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-4 shadow-sm">
								Conocimiento Intergeneracional
							</span>

							{/* Headline */}
							<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
								Conectando Generaciones
								<br />a Través del Aprendizaje
							</h1>

							{/* Subtext */}
							<p className="text-gray-600 mb-8">
								Esta plataforma e-learning nació con el objetivo de romper la
								brecha generacional entre personas mayores y jóvenes. En Europa,
								muchas personas mayores se sienten solas o aisladas.
							</p>

							{/* CTA Button */}
							<button
								onClick={() => handleNavigate("/perfil")}
								className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-0.5"
							>
								Únete a Nosotros
							</button>
						</div>

						{/* Right Column */}
						<div className="relative">
							<div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
								<h4 className="text-xl font-semibold text-gray-800 mb-3">
									Construyendo Puentes Generacionales
								</h4>
								<p className="text-gray-600 text-sm leading-relaxed">
									Los jóvenes pueden aprender directamente de la experiencia
									vital de los mayores o acompañarles mediante el diálogo. La
									idea es construir una sociedad más unida, donde la tecnología
									no nos separe, sino que nos acerque, creando vínculos reales
									entre generaciones.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					{/* Section Tag */}
					<span className="inline-block bg-orange-50 border border-orange-200 text-orange-700 text-xs font-medium px-4 py-1.5 rounded-full shadow-sm mb-4">
						Nuestra Misión
					</span>
					{/* Section Heading */}
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Rompiendo la Brecha Generacional
					</h2>
					{/* Section Sub-heading */}
					<p className="text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16">
						Creamos una plataforma donde la tecnología acerca a las generaciones
						en lugar de separarlas, construyendo una sociedad más unida y
						comprensiva.
					</p>

					{/* Features Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
						{/* Feature Card 1: Transmisión */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
							{/* Icon Placeholder */}
							<div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-green-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Transmisión de Conocimiento
							</h4>
							<p className="text-sm text-gray-600 mb-4 leading-relaxed">
								Los adultos mayores comparten su sabiduría y experiencia de vida
								con las generaciones más jóvenes.
							</p>
							<a
								href="#"
								className="text-sm font-medium text-orange-600 hover:text-orange-700 inline-flex items-center"
							>
								Explorar Cursos
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 ml-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>

						{/* Feature Card 2: Comunidad */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
							{/* Icon Placeholder */}
							<div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-purple-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Comunidad Intergeneracional
							</h4>
							<p className="text-sm text-gray-600 mb-4 leading-relaxed">
								Creamos espacios donde personas de diferentes edades pueden
								encontrarse, aprender y crecer juntos.
							</p>
							<a
								href="#"
								className="text-sm font-medium text-orange-600 hover:text-orange-700 inline-flex items-center"
							>
								Unirse a la Comunidad
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 ml-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>

						{/* Feature Card 3: Diálogo */}
						<div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
							{/* Icon Placeholder */}
							<div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-orange-600"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
							</div>
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Diálogo y Conexión
							</h4>
							<p className="text-sm text-gray-600 mb-4 leading-relaxed">
								Facilitamos conversaciones significativas que rompen barreras
								generacionales y combaten la soledad.
							</p>
							<a
								href="#"
								className="text-sm font-medium text-orange-600 hover:text-orange-700 inline-flex items-center"
							>
								Iniciar Conversación
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 ml-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Welcome;
