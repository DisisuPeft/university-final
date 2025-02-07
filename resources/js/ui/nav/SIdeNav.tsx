// import { PageProps } from "@/types"
import { Link } from "@inertiajs/react"
import { UserIcon } from "lucide-react"
// import {usePage} from "@inertiajs/react";
import { User } from "@/types";
import { Card } from "../cards/Card";
import NavLinks from "./nav-links";
import Logout from "@/Components/Logout";

type SideNavProps = {
    auth: {
      user: User;
    };
}
export default function SideNav({ auth }: SideNavProps){
    // console.log(auth)
    // const user = usePage().props;
    // console.log(user)
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-black">
            <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
            href="/dashboard"
            >
            <div className="text-white md:w-40">
            <div className="relative flex w-64 gap-2 p-4">
                <div className="h-12 rounded-full flex justify-center">
                <UserIcon width={40} height={40}/>
                </div>
                <div className="flex-1">
                <div className="rounded-lg bg-slate-400 text-lg">
                    <Card title={auth?.user?.username} />
                </div>
                {/* <div className="rounded-lg bg-slate-400 text-sm"></div> */}
                </div>
                {/* <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full"></div> */}
            </div>
            </div>
            {/* mb-1 h-5 w-3/5  h-5 w-[90%] */}
            {/* <div className="relative flex w-64 gap-2 p-4">
                <div className="h-12 rounded-full flex justify-center">
                <UserIcon width={40} height={40}/>
                </div>
                <div className="flex-1">
                <div className="rounded-lg bg-slate-400 text-lg">
                    <CardWrapper/>
                </div>
                <div className="rounded-lg bg-slate-400 text-sm"></div>
                </div>
                <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full"></div>
            </div> */}
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks auth={auth}/>
            <div className="hidden h-auto w-full grow rounded-md md:block"></div>
            <Logout/>
            {/* <Logout></Logout> */}
            </div>
      </div>
    )
}

