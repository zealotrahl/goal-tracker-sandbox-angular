import { User } from "../users/user.interface";

export interface Comment {
  id: number;
  userId: number;
  text: string;
  user: User;
}