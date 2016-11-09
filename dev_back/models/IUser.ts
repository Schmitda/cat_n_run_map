interface IUser {
   _id:string;
   name:string;
   firstname:string;
   password: string;
   lastname:string;
   created_at: Date;
   password:string;
   email:string;
   color:string;
   verificationUrl: string;
   sessionPassword: string;
};

export = IUser;


