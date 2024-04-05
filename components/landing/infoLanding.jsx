const InfoLanding =()=>{
    return (
        <section class="text-gray-600 body-font">
       
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
         
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                Interfaz intuitiva
                </h2>
                <p class="leading-relaxed text-lg">
                  Tenemos una navegación sencilla para que el usuario se sienta comodo. 
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                Geolocalización
                </h2>
                <p class="leading-relaxed text-lg">
                 Dependiendo en la zona que te hayas registrado te apareceran los eventos cercanos.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                  Perfiles
                </h2>
                <p class="leading-relaxed text-lg">
                 Podras crear perfiles distintos dependiendo el deporte que quieras practicar.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                Notificaciones en tiempo real.
                </h2>
                <p class="leading-relaxed text-lg">
                  Recibiras las notificaciones en tiempo real para que la experiencia sea completa y rapida.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-white text-2xl title-font font-medium mb-3">
                Integración con redes sociales
                </h2>
                <p class="leading-relaxed text-lg">
                  Podras compartir los eventos con tus amigos.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full pl-4 mb-10 spt-4 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="./images/basquet.jpg"
            ></img>
          </div>
        </div>
      </section>
    );
}

export default InfoLanding;