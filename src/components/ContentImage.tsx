import { Box, Heading, Text } from "@chakra-ui/react";

export default function ContentImage({
	children,
	src,
	showContentOnHover = true,
}: {
	children: React.ReactNode;
	src: string;
	showContentOnHover?: boolean;
}) {
	return (
		<Box
			bgImg={src}
			aspectRatio={1}
			bgSize="cover"
			position="relative"
			sx={{
				"&::after": {
					content: "''",
					position: "absolute",
					height: "100%",
					width: "100%",
					top: 0,
					left: 0,
					boxShadow: "inset 0px -120px 110px 0px var(--chakra-colors-purple-900)",
					opacity: showContentOnHover ? 0 : 1,
					transition: "opacity 0.3s ease-in-out",
				},
				"&:hover::after": {
					opacity: 1,
				},
				"& .content": {
					opacity: showContentOnHover ? 0 : 1,
					transition: "opacity 0.3s ease-in-out",
				},
				"&:hover .content": {
					opacity: 1,
				},
			}}
			display="flex"
			flexFlow="column"
			justifyContent="end"
			p="1rem"
		>
			<Box
				className="content"
				zIndex={2}
			>
				{children}
			</Box>
		</Box>
	);
}

ContentImage.Text = ({ text }: { text: string }) => (
	<Text
		width="100%"
		display="-webkit-box"
		overflow="hidden"
		textOverflow="ellipsis"
		sx={{
			WebkitLineClamp: 3, // Limits to 3 lines
			WebkitBoxOrient: "vertical", // Ensures it works with the line clamp
		}}
	>
		{text}
	</Text>
);
ContentImage.Heading = ({ text }: { text: string }) => (
	<Heading width="min-content">{text}</Heading>
);
