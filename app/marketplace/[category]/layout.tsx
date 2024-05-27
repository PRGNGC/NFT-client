"use client";
import { PreviewBlock } from "@/widgets/PreviewBlock";
import { NftNavigation } from "@/widgets/NftNavigation";
import { useParams } from "next/navigation";

interface ParamsType {
	category: string;
	nft: string;
}

interface CategoryLayoutTypes {
	children: React.ReactNode;
	params: ParamsType;
}

export default function CategoryLayout({ children }: CategoryLayoutTypes) {
	const params = useParams();
	return (
		<>
			{params?.nft === undefined && <PreviewBlock />}
			{params?.nft === undefined && <NftNavigation />}
			{children}
		</>
	);
}
