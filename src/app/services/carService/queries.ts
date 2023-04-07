import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
	query getCarTest {
		cartest {
			id
			name
			mileage
			gearType
			gas
			thumbnailUrl
			dailyPrice
			monthlyPrice
		}
	}
`;
