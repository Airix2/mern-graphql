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
		2xl:justify-center
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
		height: 28em;
	}
	@media (min-width: ${SCREENS.lg}) {
		height: 30em;
	}
	@media (min-width: ${SCREENS["2xl"]}) {
		height: 35em;
		margin-left: 0;
	}
`;

const InfoContainer = styled.div`
	${tw`
		
	`}
`;
const Title = styled.div`
	${tw`
		
	`}
`;

const AboutUs = () => {
	return (
		<AboutUsContainer>
			<CarContainer>
				<img src={JeepImg} alt="" />
			</CarContainer>
			<InfoContainer>
				<Title>aa</Title>
			</InfoContainer>
		</AboutUsContainer>
	);
};

export default AboutUs;
