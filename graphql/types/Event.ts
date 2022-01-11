// /graphql/types/Link.ts
import { objectType, extendType, intArg } from 'nexus'
import { Teacher } from './Teacher'

export const Event = objectType({
  name: 'Event',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('description')
    t.float('price')
    t.int('spotCnt')
    t.string('startDate')
    t.string('endDate')
    t.int('teacherId')
    t.boolean('published')
  },
})

// get Unique Link
export const LinkByIDQuery = extendType({
  type: 'Query',
  definition(t: any) {
    t.nonNull.field('event', {
      type: 'Event',
      args: { id: intArg() },
      resolve(_parent, args, ctx) {
        const event = ctx.prisma.event.findUnique({
          where: {
            id: args.id,
          },
        });
        return event;
      },
    });
  },
});

export const EventsQuery = extendType({
  type: 'Query',
  definition(t: any) {
    t.list.field('events', {
      type: 'Event',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.event.findMany()
      }
    })
  }
});
