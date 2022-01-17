import { IDog } from './IDog';

export interface IDatingContext {
  getDogs: () => Promise<void>;
  dog: IDog;
  randomAge: number;
  randomHeight: number;
  loading: boolean;
  randomName: string;
}
