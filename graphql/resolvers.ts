export const resolvers = {
  Query: {
    events: (_parent, _args, ctx) => {
      return ctx.prisma.event.findMany()
    },
  },
}
