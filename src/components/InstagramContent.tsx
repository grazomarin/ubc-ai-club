import { Grid, Heading, Link } from "@chakra-ui/react";
import { InstagramData } from "../contexts/InstagramContext";
import ContentImage from "./ContentImage";

export default function InstagramContent({ data }: { data: InstagramData[] }) {
	return (
		<Grid
			paddingBottom="2em"
			gap="1.5em"
		>
			<Heading>Instagram</Heading>
			<Grid
				templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
				gap={{ base: "1rem", md: "2rem" }}
			>
				{data.map((post) => (
					<Link
						href={post.permalink}
						isExternal
						_hover={{ textDecoration: "none" }}
						key={post.id}
					>
						<ContentImage
							src={post.thumbnail_url ? post.thumbnail_url : post.media_url}
							showContentOnHover={window.innerWidth > 768}
						>
							<ContentImage.Text text={post.caption} />
						</ContentImage>
					</Link>
				))}
			</Grid>
		</Grid>
	);
}
