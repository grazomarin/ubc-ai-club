import { Grid, Heading, Link } from "@chakra-ui/react";
import { useInstagram } from "../contexts/InstagramContext";
import ContentImage from "./ContentImage";

export default function InstagramContent() {
	const instagramData = useInstagram();

	return (
		<Grid
			px="1.5em"
			paddingBottom="2em"
			gap="1.5em"
		>
			<Heading>Instagram</Heading>
			<Grid
				templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
				templateRows="repeat(3, 1fr)"
				gap={{ base: "1rem", md: "2rem" }}
			>
				{instagramData.map(({ id, media_url, permalink, thumbnail_url, caption }) => (
					<Link
						href={permalink}
						isExternal
						_hover={{ textDecoration: "none" }}
						key={id}
					>
						<ContentImage
							src={thumbnail_url ? thumbnail_url : media_url}
							showContentOnHover={window.innerWidth > 768}
						>
							<ContentImage.Text text={caption} />
						</ContentImage>
					</Link>
				))}
			</Grid>
		</Grid>
	);
}
