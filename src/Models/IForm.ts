import { ChangeEvent, FormEvent } from 'react';

export interface IForm {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeGDPR: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}
