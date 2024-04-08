
import axiosInstance from '@/services/interceptor/api'



const agregarEvento = async (data) =>  {
  try {
    const response = await axiosInstance.post('/evento/AgregarEvento', data);
    console.log('agregarEvento', response.status);

    return response;
  } catch (error) {
    throw error; 
  }
}



export { agregarEvento};
