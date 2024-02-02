import GetBillboard from "@/actions/GetBillboard";
import GetProducts from "@/actions/GetProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

const HomePage = async () => {
	const productData = await GetProducts({ isFeatured: true });
	const billboardData = await GetBillboard();

	return (
		<Container>
			<div className='pb-10 flex w-full'>
				<div className='m-4 overflow-hidden w-full sm:m-6 lg:m-8 rounded-xl space-y-10 flex flex-1 aspect-square md:aspect-[2.4/1]'>
					{billboardData.map((data, index) => (
						<Billboard
							key={index}
							data={data}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
				<ProductList
					title='Featured Products'
					items={productData}/>
			</div>
		</Container>
	);
};

export default HomePage;
