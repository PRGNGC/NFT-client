"use client";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api";
import { keepPreviousData } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const data = queryClient.getQueryData(["user"]);
console.log("data:", data);

export function loadUser() {
	return useQuery({
		queryKey: ["user"],
		queryFn: () => getUser()
		// placeholderData: keepPreviousData({
		// 	status: 200,
		// 	payload: {
		// 		user: {
		// 			name: "Jace Bednar",
		// 			userImg: "/images/label.png",
		// 			cover: "/images/cover.png",
		// 			userId: "123"
		// 		}
		// 	}
		// })

		// initialData: {
		// 	status: 200,
		// 	payload: {
		// 		user: {
		// 			name: "Jace Bednar",
		// 			userImg: "/images/label.png",
		// 			cover: "/images/cover.png",
		// 			userId: "1234"
		// 		}
		// 	}
		// }

		// placeholderData: keepPreviousData

		// placeholderData: (previousData, previousQuery) => previousData,
		// staleTime: 300000 // 5 minutes
	});
}
