import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./MainNav";
import NavbarActions from "./NavbarActions";
import GetCategories from "@/actions/GetCategories";

const Navbar = async () => {
	const categories = await GetCategories();

	return (
		<nav className='border-b'>
			<Container>
				<div className='relative px-4 sm:px-6 lg:px-8 flex h-16  items-center'>
					<Link
						href='/'
						className='ml-4 flex lg:ml-0 gap-x-2'
					>
						<p className='font-bold text-xl lowercase'>urbn.</p>
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
