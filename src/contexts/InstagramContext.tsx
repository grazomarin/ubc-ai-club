// InstagramContext.jsx
import { createContext, useState, useContext, useEffect } from "react";

export type InstagramData = {
	id: string;
	media_url: string;
	permalink: string;
	thumbnail_url: string;
	caption: string;
};

const InstagramContext = createContext<InstagramData[]>([]);

export function InstagramProvider({ children }: { children: React.ReactNode }) {
	const [instagramData, setInstagramData] = useState<InstagramData[]>([]);

	useEffect(() => {
		const fetchInstagram = async () => {
			if (instagramData.length > 0) return; // Prevent duplicate fetches on navigation

			try {
				const response = await fetch(
					"https://graph.instagram.com/v22.0/me/media?fields=id,caption,media_url,permalink,thumbnail_url&access_token=" +
						import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN,
					{
						method: "GET",
						headers: {
							Accept: "application/json",
						},
					}
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				let data = await response.json();
				setInstagramData(data.data || []);
			} catch (error) {
				console.error("Error fetching Instagram data:", error);
			}
		};

		fetchInstagram();
	}, []);

	return <InstagramContext.Provider value={instagramData}>{children}</InstagramContext.Provider>;
}

export const useInstagram = () => useContext(InstagramContext);
