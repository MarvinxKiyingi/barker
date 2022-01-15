import { IDog } from './IDog';

export interface IDatingContext {
  getDogs: () => Promise<void>;
  dog: [IDog];
  generateRandomAge: () => void;
  generateRandomHeight: () => void;
  isError: boolean;
}
