const About = () => {
  return (
    <div className="container mt-5">
      {/* Título */}
      <h1 className="text-center mb-4">Sobre Nosotros</h1>

      {/* Banner */}
      <div className="mb-4">
        <img
          src="https://images.unsplash.com/photo-1585421514287-27b3b57b1923?auto=format&fit=crop&w=1200&q=80"
          alt="Conexión entre generaciones"
          className="img-fluid rounded shadow"
        />
      </div>

      {/* Misión del proyecto */}
      <div className="mb-5">
        <h4>¿Qué es esta plataforma?</h4>
        <p>
          Esta plataforma e-learning nació con el objetivo de romper la brecha generacional entre personas mayores y jóvenes.
          En Europa, muchas personas mayores se sienten solas o aisladas. Esta solución busca cambiar eso mediante un espacio digital
          donde puedan compartir sus conocimientos o simplemente conversar.
        </p>
        <p>
          Los jóvenes, por su parte, pueden aprender directamente de la experiencia vital de los mayores o acompañarles mediante el diálogo.
          La idea es construir una sociedad más unida, donde la tecnología no nos separe, sino que nos acerque, creando vínculos reales entre generaciones.
        </p>
      </div>

      {/* Sobre ti */}
      <div className="mb-5">
        <h4>¿Quién está detrás de este proyecto?</h4>
        <p>
          Me llamo Juan. Soy un electricista especializado en instalaciones industriales y robótica.
          Empece programando PLCs y sistemas de automatización industrial, pero con el tiempo descubrí mi interés por el desarrollo frontend.
          Hoy estoy en plena transición profesional, centrado en crear interfaces web funcionales y accesibles que generen un impacto positivo en la sociedad.
        </p>
        <hr />
        <p className="text-end fw-bold fst-italic">Juan</p>
        <p className="text-end text-muted" style={{ marginTop: "-10px" }}>Creador del proyecto</p>
      </div>
    </div>
  );
};

export default About;
