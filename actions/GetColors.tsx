import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const GetColors = async (): Promise<Color[]> => {
	const res = await fetch(URL, { next: { revalidate: 0 } });
	return res.json();
};

export default GetColors;