import { createContext, useContext } from "react";
import { wrapPromise } from "../util/util";

export type InstagramData = {
	id: string;
	media_url: string;
	permalink: string;
	thumbnail_url: string;
	caption: string;
};

const instagramContent = wrapPromise<InstagramData[]>(
	fetch(
		"https://graph.instagram.com/v22.0/me/media?fields=id,caption,media_url,permalink,thumbnail_url&access_token=" +
			import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN,
		{
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => data.data || [])
);

const InstagramContext = createContext<{
	read: () => InstagramData[];
}>(instagramContent);

export function InstagramProvider({ children }: { children: React.ReactNode }) {
	return <InstagramContext.Provider value={instagramContent}>{children}</InstagramContext.Provider>;
}

export const useInstagramContent = () => {
	const resource = useContext(InstagramContext);
	return resource.read(); // This will throw the promise if data isn't ready.
};
