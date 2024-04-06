export default function Imagenes() {
  return (
    <section className="text-black body-font w-full">
      <div
        className="w-full flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(/images/imagen-login.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%"
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center text-white ">
          <div className="flex flex-col w-full mb-2 text-center">
            <h1 className="mb-2 text-5xl font-bold tracking-tighter text-white lg:text-5xl md:text-4xl">
              <br className="" />
              Bienvenido a DeportesAPP
            </h1>
            <br />
            <p className="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3 md:text-3xl sm:text-2xl hidden sm:block">
              Somos la plataforma perfecta para organizar y disfrutar de eventos deportivos emocionantes. Con DeportesAPP, puedes crear fácilmente tus propios partidos de baloncesto, fútbol, pádel, tenis y más en segundos.
            </p>
            <div className="flex justify-center mt-6"> {/* Alineación horizontal */}
              <a href="/pages/login" className="w-32 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 hover:border-gray-500 rounded">
                Empezar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
