export interface AuthResponse{
    accessToken:string,
    refreshToken:string,
    message?:string //this one is handled by front NOT API 
}