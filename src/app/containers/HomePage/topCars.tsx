import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Car from "../../components/car";
import { ICar } from "../../../typings/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const TopCarsContainer = styled.div`
	${tw`
		max-w-screen-lg
		w-full
		flex
		flex-col
		items-center
		justify-center
		px-4
		md:px-0
		mb-10
	`}
`;
const Title = styled.h1`
	${tw`
		text-black
		text-2xl
		md:text-5xl
		font-extrabold
		md:font-black
		md:leading-normal
	`}
`;
const CarsContainer = styled.h1`
	${tw`
		w-full
		flex
		flex-wrap
		justify-center
		mt-7
		md:mt-10
	`}
`;

const TopCars = () => {
	const [current, setCurrent] = useState(0);
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	const testCar: ICar = {
		name: "Audi",
		mileage: "10k",
		thumbnailSrc:
			"https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
		dailyPrice: 70,
		monthlyPrice: 1600,
		gearType: "Auto",
		gas: "Petrol",
	};
	const cars = [
		<Car {...testCar} />,
		<Car {...testCar} />,
		<Car {...testCar} />,
		<Car {...testCar} />,
		<Car {...testCar} />,
	];

	return (
		<TopCarsContainer>
			<Title>Explore our TOp Deals</Title>
			<CarsContainer>
				<Carousel
					value={current}
					onChange={setCurrent}
					slides={cars}
					plugins={[
						"clickToChange",
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 3,
							},
						},
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
					}}
				/>
				<Dots
					value={current}
					onChange={setCurrent}
					number={isMobile ? cars.length : Math.ceil(cars.length / 3)}
				/>
			</CarsContainer>
		</TopCarsContainer>
	);
};

export default TopCars;
