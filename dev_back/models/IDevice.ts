import IUser = require("./IUser");
interface IDevice {
    _name: string;
    __id: string;
    _description:string;
    _created_by: IUser;
    _created_at: Date;
    _active_from: Date;
    _inactive_at: Date[];
};

export = IDevice;


