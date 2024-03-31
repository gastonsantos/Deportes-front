import {Deportes} from "@/model/Deportes"
const SingleDeporte = ({ deportes }: { deportes: Deportes }) => {
  const { id, nombre, imagen, } = deportes;
  return (

    <div
      className="wow fadeInUp relative overflow-hidden rounded-md bg-primary/[3%] shadow-one dark:bg-primary/10"
      data-wow-delay=".1s"
      >
      <a href="">
       <img
          className="rounded-t-lg object-cover w-full h-48"
          src={imagen}
          alt="" 
          
          />
       
      </a>
      <div className="p-6">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {nombre}
        </h5>
        
        <a href="" 
        rel="noreferrer noopener"
        target="_blank"
        className="flex items-center justify-center">
        <button
          type="button"
          className="rounded-md bg-primary m-2 py-2 px-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
          data-te-ripple-init
          data-te-ripple-color="light">
          info
        </button>
        </a>
      </div>
    </div>
  );
};

export {SingleDeporte} ;
