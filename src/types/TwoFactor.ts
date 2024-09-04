import { SignUpFormValues } from "./SignUp";

export interface  routeProps {
    data: SignUpFormValues;
}
export interface OTPRouteProps {
    route: {
        params: routeProps;
    };
}