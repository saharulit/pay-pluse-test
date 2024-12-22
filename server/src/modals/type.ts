export interface IUser extends Document {
  ilId: string;
  fullName: string;
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

export interface ICustomer extends Document {
  name: string;
  phone: string;
  email: string;
  birthdate?: Date;
  user: IUser;
}
