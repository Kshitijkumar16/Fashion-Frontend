import GetBillboard from "@/actions/GetBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
	const billboardData = await GetBillboard(
		"17ceb00f-21fe-4410-a168-f5524f2a1b82"
	);

	return (
		<Container>
			<div className='pb-10 space-y-10'>
				<Billboard data={billboardData} />
			</div>
		</Container>
	);
};

export default HomePage;
