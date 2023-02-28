import axios from "axios";

const useGetPlantasEmOferta = () => {
  return ( async () => {
    const promise = await axios.get<IPlanta[]>("http://localhost:3000/ofertas");
    const results = promise.data;
    return results;
  });
};

export default useGetPlantasEmOferta;