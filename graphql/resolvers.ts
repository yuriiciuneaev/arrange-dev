export const resolvers = {
  Query: {
    activities: (_parent, _args, ctx) => {
      // return [
      //   { 
      //     name: 'Grundkursus København 01', 
      //     // teacher: {
      //     //   name: 'Allan B. Rix', 
      //     // },
      //     spotCnt: 17, 
      //     startDate: '11-10-2021' 
      //   },
      //   { 
      //     name: 'Grundkursus København 02', 
      //     // teacher: {
      //     //   name: 'Allan B. Rix', 
      //     // },
      //     spotCnt: 17, 
      //     startDate: '11-10-2021' 
      //   },
      //   { 
      //     name: 'Grundkursus København 03',
      //     // teacher: {
      //     //   name: 'Allan B. Rix', 
      //     // },
      //     spotCnt: 17, 
      //     startDate: '11-10-2021'
      //   },
      //   { 
      //     name: 'Grundkursus København 04', 
      //     // teacher: {
      //     //   name: 'Allan B. Rix', 
      //     // },
      //     spotCnt: 17, 
      //     startDate: '11-10-2021' 
      //   },
      // ]
      
      return ctx.prisma.activity.findMany()
    },
  },
}
