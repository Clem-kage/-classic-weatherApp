
import { weatherData } from "../models/weatherData";
const idApp: string = "5f27dc01f62cee2c4ecea268a7bfa215"

export const apiRequest  = async (arg:string) => {
    const url:string = `https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${idApp}`;
const options = {
	method: 'GET'
};

try {
	const response = await fetch(url, options);
	const result = await response.json()
	const data:weatherData = relevantDataOnly(result)
	// console.log(data);
	return data
} catch (error) {
	// console.error(error);
}
}


const relevantDataOnly = (request:any)=>{
   const dataStructure = {
	  location : request?.name,
	  temperature: Number(request?.main?.temp),
	  description: request?.weather[0].description
   } as weatherData

  return dataStructure
}
