export interface IUser {
  name: string;
  age: number;
  height: number;
  profileImg?: any;
  // profileImg?: FileList[];
}

export const userStartValue = {
  name: '',
  age: 0,
  height: 0,
};
