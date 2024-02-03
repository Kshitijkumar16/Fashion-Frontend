"use client";

import PreviewModal from "@/components/PreviewModal";
import { useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<PreviewModal />
		</>
	);
};

export default ModalProvider;
