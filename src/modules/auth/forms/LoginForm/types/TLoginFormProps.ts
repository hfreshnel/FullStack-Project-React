import { TSigninRequest } from "../../../../../common/services/auth/types/requests/TSigninRequest";

export type TLoginFormProps = {
    handleSignin : (data:TSigninRequest) => Promise<void>
};
