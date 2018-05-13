import { Message } from './types';

export type MessageCreator<TPayload> = (payload: TPayload) => Message<TPayload>;

export function messageCreator<TPayload>(
  type: string
): MessageCreator<TPayload> {
  const creator: MessageCreator<TPayload> = payload => ({
    type,
    payload
  });
  creator.toString = () => type;
  return creator;
}
