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
    t.nullable.field('teacher', {
      type: 'Teacher',
      resolve(parent, _args, ctx) {
        const teacher = ctx.prisma.event
          .findUnique({
            where: { id: parent.id,}          
          })
          .teacher()
        return teacher;
      },
    })
    t.boolean('published')
    t.field('createdAt', {type: "dateTime"})
    t.field('updatedAt', {type: "dateTime"})
  },
})

// get Unique event
export const EventByIDQuery = extendType({
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

export const PageInfo = objectType({
  name: 'PageInfo',
  definition(t) {
    t.int('totalCount')
    t.int('offset')
    t.int('limit')
  },
})

export const EventsWithPageInfo = objectType({
  name: 'EventsWithPageInfo',
  definition(t) {
    t.field('node', {type: PageInfo})
    t.list.field('edges', {
      type: Event
    })
  },
})

export const EventsQuery = extendType({
  type: 'Query',
  definition(t: any) {
    t.field('events', {
      type: 'EventsWithPageInfo',
      args: {
        offset: intArg(),
        limit: intArg()
      },
      async resolve(_parent, args, ctx) {
        
        const [totalCount, subEvents] = await Promise.all([
          ctx.prisma.event.count(),
          ctx.prisma.event.findMany({
            skip: args.offset,
            take: args.limit,
            where: {
              name: {
                // contains: 'Grund',
              },
            },
            orderBy: {
              id: 'asc',
              // id: 'desc',
              // createdAt: 'desc', 
            },
          })
        ]);
        
        return {
          node: {
            totalCount: totalCount,
            offset: args.offset,
            limit: args.limit
          },
          edges: subEvents
        };
      }
    })
  }
});
