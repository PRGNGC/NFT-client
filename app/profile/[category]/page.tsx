// JWT AUTHENTICATION
import { Profile } from "@/pages/Profile";

export default function ProfilePage() {
	return <Profile />;
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
