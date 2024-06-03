// JWT AUTHENTICATION
"use client";
import { useDispatch } from "react-redux";
import { login } from "@/app/store/loginSlice/loginSlice";
import { Profile } from "@/pages/Profile";
import { UserInfoBlock } from "@/widgets/UserInfoBlock";
import { loadUser } from "@/entities/user/queries";

export default function ProfilePage() {
	const dispatch = useDispatch();

	const { isLoading, isError, isSuccess, data, error } = loadUser();

	if (isLoading) return <p>Loading...</p>;

	if (isError) return <p>{error.message}</p>;

	if (isSuccess && data.accessToken !== undefined) {
		dispatch(login([data.accessToken, data.expiresAt]));
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
