import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
	${tw`
		w-full
		flex
		flex-wrap
		items-center
		justify-center
		py-4
		px-7
		md:px-0
		bg-white
	`}
`;

const CarContainer = styled.div`
	width: auto;
	height: 15em;
	margin-left: -30px;

	img {
		width: auto;
		height: 100%;
	}

	@media (min-width: ${SCREENS.md}) {
		height: 24em;
	}
	@media (min-width: ${SCREENS.lg}) {
		height: 27em;
		margin-left: -40px;
	}
`;

const InfoContainer = styled.div`
	${tw`
		md:w-1/2
		flex
		flex-col
		md:ml-6
		2xl:ml-6
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
const InfoText = styled.p`
	${tw`
		md:max-w-2xl
		text-sm
		md:text-base
		text-gray-500
		mt-4
	`}
`;

const AboutUs = () => {
	return (
		<AboutUsContainer>
			<CarContainer>
				<img src={JeepImg} alt="" />
			</CarContainer>
			<InfoContainer>
				<Title>Get The Best Experience with Our Rental Deals</Title>
				<InfoText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Reprehenderit totam facilis ex atque ipsum quaerat quia
					exercitationem reiciendis provident obcaecati aspernatur,
					architecto est ratione fugit magnam ad facere autem quam
					fugiat repudiandae tempore dolorem, odit doloribus
					recusandae. Commodi perferendis ratione ipsa, at veniam ab
					optio facilis, est modi numquam nulla fugiat repudiandae
					tempore dolorem, odit doloribus recusandae. Commodi
					perferendis ratione ipsa, at veniam ab optio facilis, est
					modi numquam nulla.
				</InfoText>
			</InfoContainer>
		</AboutUsContainer>
	);
};

export default AboutUs;
