import {rest} from "msw"

const boardList = [
   {No: 1, brdNm: "게시글1"},
   {No: 2, brdNm: "게시글2"},
   {No: 2, brdNm: "게시글3"},
]
const boardDtl = [
   {No: 1, brdNm: "게시글1", brdDesc: "내용입니다.", date: "2022.11.11"},
   {No: 2, brdNm: "게시글1", brdDesc: "내용입니다.", date: "2022.11.11"},
   {No: 3, brdNm: "게시글1", brdDesc: "내용입니다.", date: "2022.11.11"},
]

export const handlers = [
   rest.get("/boardList", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardList))
   }),
   rest.get("/boardDtl", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardDtl))
   }),
]
