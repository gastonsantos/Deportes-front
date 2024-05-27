const steppersLoging = () => {

    return (
        <section class="text-gray-600 body-font">

            <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 pb-6 w-full  rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center lg:h-screen sm:h-full w-full"
              src="./images/futbol-5.jpg"
             
            ></img>
          </div>
                <div class="flex flex-col flex-wrap lg:py-6 -mb-10 mt-14 lg:w-1/2 lg:pl-4 lg:text-left text-center">

                    <ol className="relative flex flex-col ml-40 pl-10 text-gray-700 border-l-8 border-gray-700 dark:border-gray-700 dark:text-gray-400">
                        <div className="relative flex flex-col pl-10 ml-[-4.2rem] text-gray-700 border-gray-700 dark:border-gray-700 dark:text-gray-400">
                            <li className="mb-16 ms-20 flex-grow">
                                <span className="absolute flex items-center justify-center w-20 h-20 bg-green-200 rounded-full -start-4 ring-4 ring-gray-700 dark:ring-gray-900 dark:bg-green-900">
                                    <svg className="w-6 h-6 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight pt-5">Crear eventos</h3>
                                <p className="text-sm">Puedes crear los eventos deportivos que prefieras.</p>
                            </li>
                            <li className="mb-16 ms-20 flex-grow">
                                <span className="absolute flex items-center justify-center w-20 h-20 bg-green-200 rounded-full -start-4 ring-4 ring-gray-700 dark:ring-gray-900 dark:bg-green-900">
                                    <svg className="w-6 h-6 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight pt-5">Invitar amigos</h3>
                                <p className="text-sm">Puedes invitar a tus amigos a formar parte del evento que creaste.</p>
                            </li>
                        
                            <li className=" mb-16 ms-20 flex-grow">
                                <span className="absolute flex items-center justify-center w-20 h-20 bg-green-200 rounded-full -start-4 ring-4 ring-gray-700 dark:ring-gray-900 dark:bg-green-900">
                                    <svg className="w-6 h-6 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight pt-5">Explorar eventos</h3>
                                <p className="text-sm">Puedes buscar eventos tanto por ubicación o por deporte</p>
                            </li>
                            <li className="ms-20 flex-grow">
                                <span className="absolute flex items-center justify-center w-20 h-20 bg-green-200 rounded-full -start-4 ring-4 ring-gray-700 dark:ring-gray-900 dark:bg-green-900">
                                    <svg className="w-6 h-6 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight pt-5">Unirse a eventos</h3>
                                <p className="text-sm">Puedes unirte a eventos creados por otras personas</p>
                            </li>
                        </div>
                    </ol>



                </div>
            </div>
        </section>
    );



}

export default steppersLoging;