"use client";
import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
	const cart = useCart();
	const router = useRouter();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button
				onClick={() => router.push("/cart")}
				className='flex rounded-full px-4 py-2 bg-black items-center'
			>
				<ShoppingBag
					size={20}
					color='white'
				/>
				<span className='ml-2 text-sm font-medium text-white'>
					{cart.items.length}
				</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
