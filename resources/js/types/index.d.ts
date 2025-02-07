export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    role: Role[];
    email_verified_at?: string;
}
export interface Role {
    id: number,
    name: string,
    permission: Permission[]
}

export interface Permission {
    id: number,
    name: string
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
        permissions: number [],
        roles: number []
    };
};
