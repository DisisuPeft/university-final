// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { PageProps } from '@/types';
// import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
// PageProps<{ mustVerifyEmail: boolean; status?: string }>
export default function Edit() {
    return (
        // <AuthenticatedLayout
        // >
        //     <Head title="Profile" />

            <div className="py-12">
                <div className="mx-auto max-w-[1000px] space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            // mustVerifyEmail={mustVerifyEmail}
                            // status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        // </AuthenticatedLayout>
    );
}
