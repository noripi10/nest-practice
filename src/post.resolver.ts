import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';

import { Post } from './models/post.model';

@Resolver(() => Post)
export class PostResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Post])
  async posts() {
    const list = await this.prisma.post.findMany();
    const returnList = list.map(async (e) => {
      const author = await this.prisma.user.findUnique({
        where: { id: e.authorId },
      });

      return { ...e, author };
    });

    return returnList;
  }

  @Mutation(() => Post)
  async createPost(
    @Args('title') title: string,
    @Args('content') content: string,
  ) {
    return this.prisma.post.create({
      data: {
        title,
        content,
        published: false,
        authorId: 1,
      },
    });
  }
}
