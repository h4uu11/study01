import {rest} from "msw"

const todos = ['바보', '멍청이']

export const handlers = [
   rest.get("/massage", (req, res, ctx) => {
      return res(
         ctx.status(200),
         ctx.json(todos),
      )
   }),
]
