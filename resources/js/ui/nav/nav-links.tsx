import { HomeIcon, Settings } from "lucide-react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import {usePage} from "@inertiajs/react";
import { clsx } from "clsx";

type navlinksProps = {
    auth: {
        user: User,
        roles: number[],
        permissions: number[]
    }
}

export default function NavLinks({auth}: navlinksProps){
    const { url } = usePage()
    const links = [
        { name: 'Home', href: route('dashboard'), icon: HomeIcon, canaccess: [1,2,3], route: '/dashboard' },
        {
          name: 'Configuracion',
          href: route('settings'),
          icon: Settings,
          canaccess: [1],
          route: '/configuracion'
        },
        // { name: 'Mis tareas', href: '#', icon: ArrowsUpDownIcon, roles: [1,2,3]  },
    ];
    return (
        <>
        
        {links.map((link) => {
            const LinkIcon = link.icon;
            const {canaccess = []} = link || {}
            const canAccess = auth.roles.some((rol) => canaccess.includes(rol))
            // console.log(canAccess)
            return canAccess ? (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[40px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-white md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-500  text-white': url === link.route,
                  }
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            ) : null;
          })}
        </>
    )
}