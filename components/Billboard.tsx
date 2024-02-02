import { Billboard } from "@/types";

interface BillboardProps {
	data: Billboard;
}

const Billboard = ({ data }: BillboardProps) => {
	return (
		<div
			style={{
				backgroundImage: `url(${data.imageUrl})`,
			}}
			className='rounded-xl relative overflow-hidden min-w-full bg-cover '
		>
			<div className='flex flex-col items-center justify-center w-full h-full text-center gap-y-8 mix-blend-difference'>
				<div className='max-w-sm text-3xl font-bold text-white sm:text-5xl lg:text-6xl sm:max-w-xl'>
					{data.label}
				</div>
			</div>
		</div>
	);
};

export default Billboard;
