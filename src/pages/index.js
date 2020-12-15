import React from "react";
import theme from "theme";
import { Theme, Link, Text, List, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, Formspree } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%" lg-height="300px">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						background="--primaryGradient"
						flex-wrap="nowrap"
						flex-direction="column"
						padding="98px 64px 98px 64px"
						lg-background="--primaryGradient"
					/>
					<Text
						as="h1"
						margin="0 0 16px 0"
						font="--headline1"
						lg-font="--headline2"
						hover-color="#ffffff"
						color="#ffffff"
					>
						Hey I'm Sidharth
					</Text>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
						color="#ffffff"
					>
						About me
					</Text>
					<Text
						as="p"
						margin="16px 0"
						font="--base"
						max-width="400px"
						color="#ffffff"
					>
						iI'm a mimimalism oriented 2nd year student pursuing Bachelor's in Information Technology. I have a Passion to build and take forward innovations that i deem worthy.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-red"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						What i do
					</Text>
					<Text
						as="h1"
						margin="0 0 16px 0"
						font="--headline1"
						lg-font="--headline2"
						hover-color="#ffffff"
					>
						Web and App development
					</Text>
					<Text as="p" margin="16px 0" font="--base" max-width="400px">
						II'm a web and App full stack developer who works on Reactjs, React native and Firebase.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-darkL2"
			display="flex"
			flex-direction="column"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--lightD2"
				margin="0px"
			>
				Eyebrow
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--light"
				max-width="850px"
			>
				Technical Skills
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%" color="#f2f2f2" />
				<StackItem width="25%" md-width="50%" sm-width="100%" />
				<StackItem width="25%" md-width="50%" sm-width="100%" />
			</Stack>
			<List color="#F7FBFF">
				<Text>
					C/C++
				</Text>
				<Text>
					JavaScript
				</Text>
				<Text>
					Reactjs
				</Text>
				<Text>
					Firebase
				</Text>
				<Text>
					React Native
				</Text>
				<Text>
					HTML/CSS
				</Text>
				<Text>
					SCSS
				</Text>
				<Text>
					JQuery
				</Text>
				<Text>
					Bootstrap
				</Text>
				<Text>
					Reactstrap
				</Text>
				<Text>
					UI/UX
				</Text>
			</List>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Contact
					</Text>
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Get in Touch for further Queries
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree endpoint="https://formspree.io/f/myybnvwy">
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button>
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<List />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});