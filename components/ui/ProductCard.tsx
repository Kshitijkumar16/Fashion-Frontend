"use client";
import { useRouter } from "next/navigation";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";

interface ProductCardProps {
	data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/product/${data?.id}`);
	};

	return (
		<div
			onClick={handleClick}
			className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'
		>
			<div className='aspect-square rounded-xl relative bg-gray-100'>
				<Image
					fill
					src={data.images?.[0]?.url}
					alt='Product Image'
					className='aspect-square object-cover rounded-md '
				/>
				<div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 '>
					<div className='flex gap-x-6 justify-center'>
						<IconButton
							className=''
							icon={
								<Expand
									size={20}
									className='text-gray-600'
								/>
							}
							onClick={() => {}}
						/>{" "}
						<IconButton
							className=''
							icon={
								<ShoppingCart
									size={20}
									className='text-gray-600'
								/>
							}
							onClick={() => {}}
						/>
					</div>
				</div>
			</div>
			<div>
				<p className='font-semibold text-lg'>{data.name}</p>
				<p className='text-sm text-gray-500'>{data.category?.name}</p>
			</div>
			<div className='flex items-center justify-between'>
				<Currency value={data?.price} />
			</div>
		</div>
	);
};

export default ProductCard;
