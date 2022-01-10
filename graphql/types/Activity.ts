// /graphql/types/Link.ts
import { objectType, extendType } from 'nexus'
// import { Teacher } from './Teacher'

export const Activity = objectType({
  name: 'Activity',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('description')
    t.float('price')
    t.int('spotCnt')
    t.string('startDate')
    t.string('endDate')
    // t.field('teacher', {
    //   type: Teacher,
    //   async resolve(_parent, _args, ctx) {
    //     return await ctx.prisma.activiry
    //       .findUnique({
    //         where: {
    //           id: _parent.id,
    //         },
    //       })
    //       .activities()
    //   },
    // })
  },
})

export const ActivitiesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('activities', {
      type: 'Activity',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.activity.findMany()
      },
    })
  },
})
