import type User from './user';

export type Place = {
  id: string,
  name: string,
  users: [User],
}
