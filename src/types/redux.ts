export interface UserDataProps {
    name: string,
    email: string,
    password: string,
    access_token: string
    profileImg: string

}
export interface AuthInterface {
    userData?: UserDataProps;
    notificationToken?: string
}
export interface MainInterface {
    notificationData?: Array<object>
    notificationCount?: string | number,
}
export interface AllReducer {
    auth?: AuthInterface;
    main?: MainInterface;
}
export type LocalStorage = "userData" | "fcmToken";
