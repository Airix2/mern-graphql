import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";

interface IGetCars {
	id: number;
	name: string;
	mileage: string;
	gearType: string;
	gas: string;
	thumbnailUrl: string;
	dailyPrice: number;
	monthlyPrice: number;
}
class CarService {
	public async getCars(): Promise<IGetCars[]> {
		try {
			const response = await apolloClient.query({ query: GET_ALL_CARS });

			if (response && response.data) return response.data as IGetCars[];
			return [] as IGetCars[];
		} catch (error) {
			console.log("error getting cars", error);
			throw new Error("errorrr");
		}
	}
}
export default new CarService();
