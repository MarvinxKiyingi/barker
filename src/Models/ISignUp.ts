export interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
  gdprTerms: boolean;
}

export const signUpstartValues: ISignUp = {
  email: '',
  password: '',
  confirmPassword: '',
  gdprTerms: false,
};
