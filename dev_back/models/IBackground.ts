import {User} from "../../dev_public/app/models/User";
interface IBackground {
    name: string;
    _id: string;
    source: string;
    createdBy: User;
};

export = IBackground;


