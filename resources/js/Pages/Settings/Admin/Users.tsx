import { UserRoundPlus } from "lucide-react";

export default function Users(){
    return (
        <div className="py-12">
            <div className="mx-auto max-w-[1000px] space-y-6 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end mr-[100px]">
                    <button>
                        <UserRoundPlus size={30}/>
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombre</th>
                                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rol</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {/* {data.map((person, index) => (
                                    <tr key={person.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                        <td className="px-4 py-2 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{person.email}</div>
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{person.role}</div>
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}