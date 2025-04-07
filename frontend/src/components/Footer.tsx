import React from "react";
import { Link } from "react-router-dom";

/**
 * Footer component for the application.
 */
const Footer: React.FC = () => {
	const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({
		href,
		children,
	}) => (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-gray-400 hover:text-white transition-colors duration-200"
		>
			{children}
		</a>
	);

	const PlaceholderFacebook = () => (
		<svg
			className="h-6 w-6"
			fill="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
				clipRule="evenodd"
			/>
		</svg>
	);
	const PlaceholderTwitter = () => (
		<svg
			className="h-6 w-6"
			fill="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
		</svg>
	);
	const PlaceholderInstagram = () => (
		<svg
			className="h-6 w-6"
			fill="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.47 2.525c.636-.247 1.363-.416 2.427-.465C8.93 2.013 9.284 2 11.715 2h.6zm-.6 3.903c-2.044 0-3.696 1.652-3.696 3.696s1.652 3.696 3.696 3.696 3.696-1.652 3.696-3.696S13.759 5.903 11.715 5.903zm0 6.162c-1.36 0-2.466-1.106-2.466-2.466s1.106-2.466 2.466-2.466 2.466 1.106 2.466 2.466S13.075 12.065 11.715 12.065zm5.116-6.948c-.765 0-1.385.62-1.385 1.385s.62 1.385 1.385 1.385 1.385-.62 1.385-1.385-.62-1.385-1.385-1.385z"
				clipRule="evenodd"
			/>
		</svg>
	);

	const PlaceholderLocation = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
				clipRule="evenodd"
			/>
		</svg>
	);
	const PlaceholderPhone = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
		</svg>
	);
	const PlaceholderEmail = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5 text-orange-400 mr-2 flex-shrink-0"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path d="M2.003 5.884L10 11.884l7.997-6M2 18h16a2 2 0 002-2V8l-8 5-8-5v8a2 2 0 002 2z" />
		</svg>
	);

	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Column 1: Logo, Desc, Social */}
					<div>
						<div className="flex items-center space-x-2 mb-4">
							{/* Placeholder SVG Icon */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7 text-orange-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 011.07.043l1.08 1.165c.27.29.414.693.404 1.098l-.017 7.44c-.005.33.17.64.46.8.29.161.647.14.913-.056l.108-.08c1.343-1.05 2.014-2.471 2.014-3.995v-4.75c0-.266.214-.48.48-.48h.04c.266 0 .48.214.48.48v4.75c0 1.524.67 2.945 2.013 3.995l.108.08a1 1 0 00.913.056c.29-.16.465-.47.46-.8l-.017-7.44a1.005 1.005 0 01.404-1.098l1.08-1.165a.999.999 0 011.07-.043L19 6.92a1 1 0 000-1.84l-7-3zM10 9a1 1 0 100-2 1 1 0 000 2z" />
							</svg>
							<span className="text-xl font-bold text-white">PathWise</span>
						</div>
						<p className="text-sm mb-4">
							Transformando la educación con tecnología innovadora y
							experiencias de aprendizaje personalizadas.
						</p>
						<div className="flex space-x-4">
							<SocialIcon href="#">
								<PlaceholderFacebook />
							</SocialIcon>
							<SocialIcon href="#">
								<PlaceholderTwitter />
							</SocialIcon>
							<SocialIcon href="#">
								<PlaceholderInstagram />
							</SocialIcon>
						</div>
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h5 className="text-lg font-semibold text-white mb-4">
							Enlaces rápidos
						</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/bienvenida"
									className="hover:text-white transition-colors duration-200"
								>
									Inicio
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Cursos
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Recursos
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="hover:text-white transition-colors duration-200"
								>
									Contacto
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Categories */}
					<div>
						<h5 className="text-lg font-semibold text-white mb-4">
							Categorías
						</h5>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Desarrollo Web
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Diseño Gráfico
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Marketing Digital
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Idiomas
								</Link>
							</li>
							<li>
								<Link
									to="#"
									className="hover:text-white transition-colors duration-200"
								>
									Negocios
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h5 className="text-lg font-semibold text-white mb-4">
							Contáctanos
						</h5>
						<ul className="space-y-3 text-sm">
							<li className="flex items-start">
								<PlaceholderLocation />
								<span>123 Calle Educación, Ciudad del Conocimiento</span>
							</li>
							<li className="flex items-start">
								<PlaceholderPhone />
								<span>+1 (234) 567-8900</span>
							</li>
							<li className="flex items-start">
								<PlaceholderEmail />
								<a
									href="mailto:info@pathwise.com"
									className="hover:text-white transition-colors duration-200"
								>
									info@pathwise.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				<hr className="border-gray-700 my-8" />

				<div className="text-center text-sm text-gray-400">
					&copy; {new Date().getFullYear()} PathWise. Todos los derechos
					reservados.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
