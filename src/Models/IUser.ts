export interface IUser {
  name?: string;
  age?: number;
  height?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gdprTerms?: boolean;
}

export const userStartValue: IUser = {
  name: '',
  age: 0,
  height: 0,
  email: '',
  password: '',
  confirmPassword: '',
  gdprTerms: false,
};
