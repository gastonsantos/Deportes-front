import React, { useState } from 'react';

const Buscador = ({ setSearchTerm, searchEvent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSportSelection = (sport) => {
        setSearchTerm(sport);
        setSearchText(sport);
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setSearchText(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchText.trim() !== '') {
          searchEvent(searchText);
        }
      };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="flex">
                <label htmlFor="location-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                <button
                    id="dropdown-button-2"
                    onClick={toggleDropdown}
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                >
                    Deporte{' '}
                    <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div
                        id="dropdown-search-city"
                        className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-12"
                    >
                        <ul className="py-2  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-2">
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white`}
                                    role="menuitem"
                                    value="Futbol"
                                    onClick={() => handleSportSelection('Futbol')}
                                >
                                    <div className="inline-flex items-center">
                                        <img src="/images/futbolSVG.svg" className="h-3.5 w-3.5 rounded-full me-2" />
                                        <span>Futbol</span>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white`}
                                    role="menuitem"
                                    value="Bascket"
                                    onClick={() => handleSportSelection('Bascket')}
                                >
                                    <div className="inline-flex items-center">
                                        <img src="/images/basquetSvg.svg" className="h-3.5 w-3.5 rounded-full me-2" />
                                        <span>Bascket</span>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white`}
                                    role="menuitem"
                                    value="Tenis"
                                    onClick={() => handleSportSelection('Tenis')}
                                >
                                    <div className="inline-flex items-center">
                                        <img src="/images/tenisSVG.svg" className="h-3.5 w-3.5 rounded-full me-2" />
                                        <span>Tenis</span>
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className={`inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white`}
                                    role="menuitem"
                                    value="Padel"
                                    onClick={() => handleSportSelection('Padel')}
                                >
                                    <div className="inline-flex items-center">
                                        <img src="/images/padelSVG.svg" className="h-3.5 w-3.5 rounded-full me-2" />
                                        <span>Padel</span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
                <div className="relative w-full">
                    <input
                        type="search"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Buscá por provincia o ciudad"
                        required
                        value={searchText}
                        onChange={handleInputChange} 
                    />
                    <button
                        type="submit"
                        className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-blue-gray focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Buscar</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Buscador;
