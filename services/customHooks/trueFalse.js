//import useToggle from "@/services/customHooks/trueFalse"

import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [condicion, setCondicion] = useState(initialValue);

  const setFalse=()=>{
    setCondicion(false)
  }

  const setTrue=()=>{
    setCondicion(true)
  }
  const cambiar = () => setCondicion(prev => !prev);

  return [condicion, setFalse, setTrue, cambiar];
};

export default useToggle;
