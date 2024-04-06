import { useState } from 'react';



const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      label: 'Futbol .',
      step: 1,
      title: 'Futbol',
      svg: '/images/futbolSVG.svg',
      card: '¡Reúne a tus amigos y forma el equipo imbatible que siempre has soñado! En nuestro campo de fútbol, la competencia alcanza su máximo nivel y cada jugador cuenta. ¡Demuestra tu destreza y lidera a tu equipo hacia la victoria! ¿Tienes lo necesario para llegar a la cima? ¡Forma tu equipo y prepárate para desafiar a los mejores! ¡La gloria te espera en cada partido!'

    },
    {
      label: 'Tenis .',
      step: 2,
      title: 'Tenis',
      svg: '/images/tenisSVG.svg',
      card: '¡Atención tenistas! ¡Es momento de demostrar tu destreza en la cancha! Reúne a tu equipo y prepárate para los desafíos. Cada punto cuenta en nuestra emocionante competencia. ¿Tienes lo necesario para brillar en el tenis? ¡Únete a nosotros y sé parte del juego!'

    },
    {
      label: 'Padel ',
      step: 3,
      title: 'Padel',
      svg: '/images/padelSVG.svg',
      card: '¡Atención a todos los aficionados del pádel! ¡Es hora de formar tu equipo y conquistar la pista! Reúne a tus compañeros y prepárate para la acción. Cada set es una oportunidad para mostrar tu habilidad en la cancha. ¿Estás listo para el desafío? Únete a nosotros y hazte un nombre en el mundo del pádel.'
    },
    {
      label: 'Basquet ',
      step: 4,
      title: 'Basquet',
      svg: '/images/basquetSvg.svg',
      card: '¡Escucha bien, jugadores de baloncesto! Es momento de formar tu equipo y brillar en la cancha. Reúne a tus compañeros y prepárate para los desafíos. Cada dribbling, cada pase, cada enceste cuenta en nuestra emocionante competencia. ¿Tienes lo necesario para llevar a tu equipo hacia la victoria? ¡Únete a nosotros y demuestra tu habilidad en el baloncesto!'

    },
    // Agrega más pasos si es necesario
  ];

  const nextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };




  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;




  return (
    <section class="hidden md:block text-gray-600 body-font w-10/12">
       
     
    <div className="w-full mx-auto px-4 pb-10 text-center items-center justify-center">
      <h2 className="font-medium text-4xl leading-tight pt-5">¿Que deporte te gusta más?</h2>
     
      <div className="flex justify-between mt-14 relative before:bg-slate-200 before:absolute before:h-1 before:top-1/2 before:transform-y-1/2 before:w-full before:left-0">
        {steps.map(({ step, title, svg }) => (
          <div className="relative z-10" key={step}>
            <div
              className={`size-32 rounded-full bg-gray-500 border-zinc-200 flex justify-center items-center transition-all ease-in delay-200 ${activeStep >= step ? 'border-slate-400' : ''
                }`}
            >
              {activeStep >= step ? (
                <div className=" text-2xl font-semibold text-slate-400 scale-x-100 ">
                  <div className="text-2xl font-semibold text-slate-400 scale-x-100">
                    <img src={svg} alt={title} />
                  </div>

                </div>
              ) : (
                <> </>
              )}
            </div>
           
          </div>
        ))}
        <div
          className="absolute h-1 bg-slate-400 w-full top-1/2 transform-y-1/2 transition-all ease-in delay-200 left-0"
          style={{ width: width }}
        ></div>
      </div>
      <div className="flex justify-between mt-28">
        <button
          className="disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed bg-gray-500 hover:bg-gray-600 text-white px-8 py-1.5 rounded-md font-medium text-base h-10"
          onClick={prevStep}
          disabled={activeStep === 1}
        >
          Prev
        </button>
        <div className='bg-white w-1/2 p-5 text-balance font-semibold text-xl text-black rounded-md'>
             {steps.map(({ step, card, title }) => (<>
              {activeStep == step &&  <div>
                <span className="text-black text-2xl text-center font-medium">{title}</span>

                  <p>{card}</p>
              </div>
             }
             </>
             ))}       
        </div>
        <button
          className="disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed h-10 bg-gray-500 hover:bg-gray-600 text-white px-8 py-1.5 rounded-md font-medium text-base"
          onClick={nextStep}
          disabled={activeStep === totalSteps}
        >
          Sig
        </button>
      </div>
    </div>
    </section>
  );
};

export default Stepper;
