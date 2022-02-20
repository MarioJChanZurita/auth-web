export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    isActive: number;
    isVerified: number;
    isSuperuser: number;
    isStaff: number;
    dateJoined: Date;
    lastJoined: Date;
}