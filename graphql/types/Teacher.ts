import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';
import { Event } from './Event';

export const Teacher = objectType({
  name: 'Teacher',
  definition(t: any) {
    t.int('id');
    t.string('name');
    
    t.nonNull.list.nonNull.field('events', {
      type: Event,
      resolve(parent, _args, ctx) {
        return ctx.prisma.teacher.findUnique({
          where: {
            id: parent.id,
          }
        })
        .events();
      },
    });
  }
});
