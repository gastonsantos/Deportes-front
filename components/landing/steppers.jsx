import { useState } from 'react';



const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      label: 'Futbol 5 y Futbol 11.',
      step: 1,
      title: 'Futbol',
      svg: '/images/futbolSVG.svg'

    },
    {
      label: 'Tenis Single y Tenis Dobles.',
      step: 2,
      title: 'Tenis',
      svg: '/images/tenisSVG.svg'

    },
    {
      label: 'Padel Single y Padel Dobles',
      step: 3,
      title: 'Padel',
      svg: '/images/padelSVG.svg'
    },
    {
      label: 'Basquet 5 y Basquet 2vs2',
      step: 4,
      title: 'Basquet',
      svg: '/images/basquetSvg.svg'

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
    <div className="w-full mx-auto px-4 pb-10 text-center items-center justify-center">
      <h2 className="font-medium text-4xl leading-tight pt-5">¿Que deporte te gusta más?</h2>
     
      <div className="flex justify-between mt-14 relative before:bg-slate-200 before:absolute before:h-1 before:top-1/2 before:transform-y-1/2 before:w-full before:left-0">
        {steps.map(({ step, label, title, svg }) => (
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
                <span className="text-lg text-zinc-400 font-medium">{title}</span>
              )}
            </div>
            <div className="absolute text-center mt-2">
              <span className="text-lg text-zinc-400 font-semibold">{label}</span>
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
          className="disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed bg-gray-500 hover:bg-gray-600 text-white px-8 py-1.5 rounded-md font-medium text-base"
          onClick={prevStep}
          disabled={activeStep === 0}
        >
          Prev
        </button>
        <button
          className="disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed bg-gray-500 hover:bg-gray-600 text-white px-8 py-1.5 rounded-md font-medium text-base"
          onClick={nextStep}
          disabled={activeStep === totalSteps}
        >
          Sig
        </button>
      </div>
    </div>
  );
};

export default Stepper;
