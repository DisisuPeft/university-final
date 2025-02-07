// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import SideNav from '@/ui/nav/SIdeNav';
export default function Authenticated({children}: PropsWithChildren) {
    const auth = usePage().props.auth;
    // console.log(auth)
    // const [showingNavigationDropdown, setShowingNavigationDropdown] =
    //     useState(false);

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
            <div className="w-full flex-none md:w-64">
                <SideNav auth={auth} />
            </div>
            <main className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</main>
        </div>
    );
}
