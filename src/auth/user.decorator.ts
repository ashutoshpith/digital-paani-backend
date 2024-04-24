import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserRefDto } from 'src/user/user.ref';

export const UserRef = createParamDecorator(
  (data, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context).getContext();
    const userRef: UserRefDto = ctx.req.user;
    return userRef;
  },
);
