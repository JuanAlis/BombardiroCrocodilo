import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Navbar updated to match the PathWise reference image style.
 */
const Navbar = () => {
	const navigate = useNavigate();
	// const user = useSelector((state: RootState) => state.auth.user);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	/**
	 * Handles clicks on the logo/brand.
	 */
	const handleLogoClick = useCallback(() => {
		// Navigate to the main welcome/home page
		navigate("/bienvenida"); // Or root "/" if that's your home
	}, [navigate]);

	/**
	 * Toggles the visibility of the mobile navigation menu.
	 */
	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen((prev) => !prev);
	}, []);

	const handleLinkClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<div
							className="flex items-center space-x-2 cursor-pointer"
							onClick={handleLogoClick}
						>
							{/* Placeholder SVG Icon (Graduation Cap) */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-7 w-7 text-orange-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 011.07.043l1.08 1.165c.27.29.414.693.404 1.098l-.017 7.44c-.005.33.17.64.46.8.29.161.647.14.913-.056l.108-.08c1.343-1.05 2.014-2.471 2.014-3.995v-4.75c0-.266.214-.48.48-.48h.04c.266 0 .48.214.48.48v4.75c0 1.524.67 2.945 2.013 3.995l.108.08a1 1 0 00.913.056c.29-.16.465-.47.46-.8l-.017-7.44a1.005 1.005 0 01.404-1.098l1.08-1.165a.999.999 0 011.07-.043L19 6.92a1 1 0 000-1.84l-7-3zM10 9a1 1 0 100-2 1 1 0 000 2z" />
							</svg>
							<span className="text-xl font-bold text-gray-800">PathWise</span>
						</div>
					</div>

					{/* Desktop Menu */}
					<div className="hidden lg:flex lg:items-center lg:space-x-8">
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
							to="/perfil"
						>
							Perfil
						</Link>
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
							to="/about"
						>
							About
						</Link>
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
							to="/activities"
						>
							Activities
						</Link>
					</div>

					<div className="-mr-2 flex lg:hidden">
						<button
							onClick={toggleMobileMenu}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500" // Orange focus ring
							aria-controls="mobile-menu"
							aria-expanded={isMobileMenuOpen}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className={`block h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							{/* Close Icon */}
							<svg
								className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div
				className={`lg:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right ${isMobileMenuOpen ? "block" : "hidden"} bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
				id="mobile-menu"
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					<Link
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
						to="/perfil"
						onClick={handleLinkClick}
					>
						Perfil
					</Link>
					<Link
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
						to="/about"
						onClick={handleLinkClick}
					>
						About
					</Link>
					<Link
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
						to="/activities"
						onClick={handleLinkClick}
					>
						Activities
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
