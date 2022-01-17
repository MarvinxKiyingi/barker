import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { IDog } from './IDog';

export interface ISwipeContext {
  getDogs: () => Promise<void>;
  dog: IDog;
  randomAge: number;
  randomHeight: number;
  loading: boolean;
  randomName: string;
  matchWithDog: () => void;
  matchedValues: DocumentSnapshot<DocumentData> | undefined;
  matchedValuesIsLoading: boolean;
}
