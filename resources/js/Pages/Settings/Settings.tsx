import Authenticated from "@/Layouts/AuthenticatedLayout"
import { useState } from "react"
// import UpdateProfileInformation from "../Profile/Partials/UpdateProfileInformationForm";
import Edit from "../Profile/Edit";
import { usePage } from "@inertiajs/react";
import Users from "./Admin/Users";
import { Gender, NivEdu, Permission, Role, User } from "@/types";

export default function Settings({users, gender, nivedu, roles, permissions}: {users: User [], gender: Gender [], nivedu: NivEdu [], roles: Role [], permissions: Permission []}){
    const [activeTab, setActivateTab] = useState("profile");
    const auth = usePage().props.auth
    const tabs = [
        {id: "profile", label:"Perfil", canaccess: [1,2,3]},
        {id: "users", label:"Usuarios", canaccess: [1]},
    ]   
    const renderTabContent = (tab_id: string) => {
        switch(tab_id){
            case "profile":
                return <Edit />
            case "users":
                return <Users gender={gender} nivedu={nivedu} users={users} roles={roles} permissions={permissions} />
        }
    }
    return (
        <Authenticated>
            <div className="w-full p-4">
                <h1 className="text-2xl font-bold mb-6">Configuración</h1>
                <div className="mb-4">
                    <nav className="p-4 rounded-lg shadow-2xl">
                        <div className="flex space-x-4">
                            {tabs.map((tab) => {
                                const {canaccess = []} = tab || {}
                                const canAccess = auth.roles.some((rol) => canaccess.includes(rol))
                                return (
                                    canAccess ? (
                                        <button key={tab.id} onClick={() => setActivateTab(tab.id)} className={`px-10 py-4 text-xl font-bold rounded-lg ${
                                            activeTab === tab.id ? "bg-black text-white" : "text-gray-700 hover:text-slate-950" 
                                        }`}>
                                            {tab.label}
                                        </button>
                                    ) : null
                                )
                            })}
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            {renderTabContent(activeTab)}
                        </div>
                    </nav>
                </div>
            </div>
        </Authenticated>
    )
}

// export function bodyPart(){
//     return (
//         <div className="py-12">
//             <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
//                 <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
//                     <UpdateProfileInformation
//                         className="max-w-xl"
//                     />
//                             </div>
        
//                             {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
//                                 <UpdatePasswordForm className="max-w-xl" />
//                             </div>
        
//                             <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
//                                 <DeleteUserForm className="max-w-xl" />
//                             </div> */}
//                         </div>
//                     </div>
//     )
// }