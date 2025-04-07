/**
 * About page component with updated modern styling.
 */
const About = () => {
	return (
		<div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
			<h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8">
				Sobre Nosotros
			</h1>

			<div className="mb-10">
				<h2 className="text-2xl font-semibold text-gray-800 mb-3">
					¿Qué es esta plataforma?
				</h2>
				<p className="text-gray-700 leading-relaxed mb-3">
					Esta plataforma e-learning nació con el objetivo de romper la brecha
					generacional entre personas mayores y jóvenes. En Europa, muchas
					personas mayores se sienten solas o aisladas. Esta solución busca
					cambiar eso mediante un espacio digital donde puedan compartir sus
					conocimientos o simplemente conversar.
				</p>
				<p className="text-gray-700 leading-relaxed">
					Los jóvenes, por su parte, pueden aprender directamente de la
					experiencia vital de los mayores o acompañarles mediante el diálogo.
					La idea es construir una sociedad más unida, donde la tecnología no
					nos separe, sino que nos acerque, creando vínculos reales entre
					generaciones.
				</p>
			</div>

			<div>
				<h2 className="text-2xl font-semibold text-gray-800 mb-3">
					¿Quién está detrás de este proyecto?
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					Me llamo Juan. Soy un electricista especializado en instalaciones
					industriales y robótica. Empece programando PLCs y sistemas de
					automatización industrial, pero con el tiempo descubrí mi interés por
					el desarrollo frontend. Hoy estoy en plena transición profesional,
					centrado en crear interfaces web funcionales y accesibles que generen
					un impacto positivo en la sociedad.
				</p>
				<hr className="border-t border-gray-200 my-6" />
				<p className="text-right font-semibold italic text-gray-800">Juan</p>
				<p className="text-right text-sm text-gray-500">Creador del proyecto</p>
			</div>
		</div>
	);
};

export default About;
