import {rest} from "msw"

export const handlers = [
   rest.get("/massege", (req, res, ctx) => {
      return res(
         ctx.status(200),
         ctx.json({
            status: "ok",
         }),
      )
   }),
]
