import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { IDog } from './IDog';
import { ISendMessage } from './ISendMessage';

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
  unMatch: (match: DocumentData | undefined) => void;
  openMessage: (match: DocumentData | undefined) => void;
  sendMessage: (props: ISendMessage) => void;
  messagesValues: DocumentSnapshot<DocumentData> | undefined;
  messagesValuesIsLoading: boolean;
}
