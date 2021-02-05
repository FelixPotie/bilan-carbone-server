import jwt_decode from "jwt-decode";

export interface UserData {
    username: string,
    mail: string,
    department: string,
    departmentNumber: string,
    iat: number,
    exp: number
}
export class JwtCustomService {
    
    public getUserName(userToken: string): string {
        const decodedToken: UserData = jwt_decode(userToken)
        return decodedToken.username
    };
}
