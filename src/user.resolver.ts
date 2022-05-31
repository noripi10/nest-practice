import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';

import { Post } from './models/post.model';
import { User } from './models/user.model';

@Resolver(() => Post)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [User])
  async users() {
    const list = await this.prisma.user.findMany({
      include: {
        posts: true,
        _count: true,
      },
    });
    return list;
  }
}
