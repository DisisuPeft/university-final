import { Link } from "@inertiajs/react";
import { PowerIcon } from "lucide-react";


export default function Logout(){
    return (
        <Link href="/logout" method="post" as="button" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium bg-sky-500 text-white md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
        </Link>
    )
}