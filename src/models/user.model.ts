import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;
  email: string;
  name: string;
  posts: Post[];
}
