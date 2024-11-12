// InstagramContext.jsx
import { createContext, useState, useContext, useEffect } from "react";

const InstagramContext = createContext([]);

export function InstagramProvider({ children }: { children: React.ReactNode }) {
	const [instagramData, setInstagramData] = useState([]);

	useEffect(() => {
		const fetchInstagram = async () => {
			if (instagramData.length > 0) return; // Prevent duplicate fetches

			console.log("Fetching Instagram data...");
			try {
				const response = await fetch(
					"https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,thumbnail_url&access_token=" +
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
				let screenwidth = window.innerWidth;
				screenwidth < 480
					? (data.data = data.data.slice(0, 3))
					: (data.data = data.data.slice(0, 9));

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
