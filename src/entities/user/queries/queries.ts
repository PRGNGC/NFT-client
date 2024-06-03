"use client";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api";

export function loadUser() {
	return useQuery({
		queryKey: ["user"],
		queryFn: () => getUser()
	});
}
