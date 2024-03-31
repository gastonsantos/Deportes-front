
import axiosInstance from '@/services/interceptor/api'



const agregarEvento = async (data) =>  {
  try {
    const response = await axiosInstance.post('/evento/AgregarEvento', data);
    console.log('agregarEvento', response);
    return response;
  } catch (error) {
    throw error; // Re-throw error for handling in the calling component
  }
}



export { agregarEvento};
