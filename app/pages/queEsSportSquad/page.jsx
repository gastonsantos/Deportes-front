
import { NavBar } from "@/components/navBar/navBar";

import Footer from "@/components/landing/footer";
export default function Inicio() {
    return (
        <div>
            <NavBar />
            <section class="text-gray-600 body-font">

                <div class="container px-5 py-24 mx-auto flex flex-wrap">

                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="flex-grow">
                                <h2 class="text-gray-700 dark:text-white text-2xl title-font font-medium mb-3">
                                    ¿Que es SportSquad?
                                </h2>
                                <p class="leading-relaxed text-lg">
                                    Somos una aplicación diseñada para que los usuarios puedan crear y gestionar sus propios eventos deportivos de manera intuitiva. Nuestra plataforma no solo permite organizar encuentros deportivos, sino también conectar con amigos y conocer nuevas personas apasionadas por el deporte.
                                </p>
                                <p class="leading-relaxed text-lg">
                                    Desde la práctica deportiva hasta la socialización, ofrecemos una amplia gama de actividades para que los usuarios disfruten al máximo. Entre los deportes más populares en Argentina, como el fútbol, tenis, pádel y básquet, nuestros usuarios pueden elegir y participar en los que más les guste
                                </p>
                                <p class="leading-relaxed text-lg">
                                Además, brindamos la oportunidad de unirse a eventos organizados por otros usuarios, ideal para aquellos que buscan nuevos desafíos o simplemente quieren ampliar su círculo deportivo. En el centro de nuestra misión está la diversión y el compañerismo entre deportistas, creando un ambiente positivo y motivador para todos los involucrados. ¡Únete a nosotros y disfruta del deporte en un entorno lleno de buena energía!
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="lg:w-1/2 w-full pl-4 mb-10 spt-4 lg:mb-0 rounded-full  overflow-hidden">
                        <img
                            alt="feature"
                            class="object-cover object-center h-full w-full"
                            src="/images/basquet.jpg"
                        ></img>
                    </div>
                </div>
            </section>
            <Footer />
        </div>


    );
}
