import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: User;
  authorId: number;
}
