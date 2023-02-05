import { auth } from "@/utils/firebase"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"


export default function Dashboard() {

    const [user, loading] = useAuthState(auth)
    const route = useRouter()

    if (loading) return <h1>Loading...</h1>;
    if (!user) route.push("/auth/login");
    if (user)
    return (  
        <div className="text-center">
            <h1 className="text-xl">Welcome to your dashboard <span className="text-xl text-blue-600 font-bold">{user.displayName}</span></h1>
            <button onClick={() => auth.signOut()} className="py-2 px-4 bg-red-500 font-bold text-white rounded-full mt-10" >Sign Out</button>
        </div>
    )
}