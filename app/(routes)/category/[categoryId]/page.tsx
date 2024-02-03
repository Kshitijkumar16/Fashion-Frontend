import GetColors from "@/actions/GetColors";
import GetIndividualCategory from "@/actions/GetIndividualCategory";
import GetProducts from "@/actions/GetProducts";
import GetSizes from "@/actions/GetSizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import Filter from "./components/Filter";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilters from "./components/MobileFilters";

export const revalidate = 0;

interface CategoryPageProps {
	params: { categoryId: string };
	searchParams: {
		colorId: string;
		sizeId: string;
	};
}

const Category = async ({ params, searchParams }: CategoryPageProps) => {
	const products = await GetProducts({
		categoryId: params.categoryId,
		colorId: searchParams.colorId,
		sizeId: searchParams.sizeId,
	});

	const sizes = await GetSizes();
	const colors = await GetColors();
	const individualCategory = await GetIndividualCategory(params.categoryId);

	return (
		<div className='bg-white'>
			<Container>
				<div className='flex w-full '>
					<div className='m-4 overflow-hidden w-full sm:m-6 lg:m-8 rounded-xl space-y-10 flex flex-1 aspect-square md:aspect-[2.4/1] '>
						<Billboard data={individualCategory.billboard} />
					</div>
				</div>
				<div className='px-4 sm:px-6 lg:px-8 pb-24'>
					<div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
						<MobileFilters
							sizes={sizes}
							colors={colors}
						/>
						<div className='hidden lg:block'>
							<Filter
								valueKey='sizeId'
								name='Sizes'
								data={sizes}
							/>
							<Filter
								valueKey='colorId'
								name='Colors'
								data={colors}
							/>
						</div>
						<div className='mt-6 lg:col-span-4 lg:mt-0'>
							{products.length === 0 && <NoResults />}
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
								{products.map((item) => (
									<ProductCard
										key={item.id}
										data={item}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Category;
