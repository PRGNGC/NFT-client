// JWT AUTHENTICATION
"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useQuery } from "@tanstack/react-query";
import { login } from "@/app/store/loginSlice/loginSlice";
import { Profile } from "@/pages/Profile";
import { UserInfoBlock } from "@/widgets/UserInfoBlock";

export default function ProfilePage() {
	const dispatch = useDispatch();
	const accessToken = useSelector(
		(state: RootState) => state.login.accessToken
	);

	const { isLoading, isError, isSuccess, data, error } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await fetch(`http://localhost:4000/api/user`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${accessToken}`
				},
				credentials: "include"
			});
			return await res.json();
		}
	});

	if (isLoading) return <p>Loading...</p>;

	if (isError) return <p>{error.message}</p>;

	if (isSuccess && data.accessToken !== undefined) {
		dispatch(login(data.accessToken));
	}

	return (
		<div style={{ backgroundColor: "#fcfcf9" }}>
			<UserInfoBlock userInfo={data.user} />
			<Profile />
		</div>
	);
}

// SESSION AUTHENTICATION
// import { cookies } from "next/headers";

// export default async function ProfilePage() {
//   const sessionCookie = cookies().get("connect.sid");

//   const res = await fetch(`http://localhost:4000/api/user`, {
//     method: "GET",
//     headers: {
//       Cookie: `${sessionCookie?.name}=${sessionCookie?.value}`,
//     },
//     credentials: "include",
//   });

//   const data = await res.json();

//   return (
//     <div style={{ color: "white" }} className="profile">
//       <p>{data.user.name}</p>
//     </div>
//   );
// }
