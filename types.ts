export interface Billboard {
	id: string;
	storeId: string;
	label: string;
	imageUrl: string;
	createdAt: string;
	updatedAt: string;
}

export interface Category {
	id: string;
	name: string;
	billboard: Billboard;
}
