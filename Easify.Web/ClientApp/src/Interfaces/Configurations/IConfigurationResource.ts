import { IUserContext } from "../Common/IUserContext";
import { IAccessRole } from "./IAccessRole";

export interface IConfigurationResource {
    Users: Array<IUserContext>;
    UserRoles: Array<IUserContext>;
    AccessRoles: Array<IAccessRole>;
}