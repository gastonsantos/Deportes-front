import Link from 'next/link';
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
           
              <br className="" />
              <h1 className=" mb-2 text-5xl font-bold tracking-tighter text-white lg:text-5xl md:text-4xl">
              Bienvenido a SportSquad
            </h1>
            <br />
            <p className="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3 md:text-3xl sm:text-2xl hidden sm:block">

              Somos la plataforma perfecta para organizar y disfrutar de eventos deportivos emocionantes. Con SportSquad, puedes crear fácilmente tus propios partidos de  <a className="underline decoration-pink-500"> baloncesto</a> ,
              <a className="underline decoration-indigo-500/30">fútbol</a>, <a className="underline decoration-violet-500">pádel</a>, <a className="underline decoration-amber-600">tenis</a> y más en segundos.
            </p>
            <div className="flex justify-center mt-6 flex item-center"> 
            <Link href="/pages/login" class="w-32 animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-purple-600 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
              
                <span class="ml-2 ">Empezar </span>
                
                <span>⚽</span>
                
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
