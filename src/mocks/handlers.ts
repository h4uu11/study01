import {rest} from "msw"

const boardList = [
   {순서: 1, 제목: "상태관리란 무엇일까?", 작성자: "조혁래", 등록일: "2022.11.11", 수정일: "2022.11.11"},
   {순서: 2, 제목: "상태관리란 무엇일까?", 작성자: "조혁래", 등록일: "2022.11.11", 수정일: "2022.11.11"},
   {순서: 3, 제목: "상태관리란 무엇일까?", 작성자: "조혁래", 등록일: "2022.11.11", 수정일: "2022.11.11"},
]
const boardDtl = [
   {No: 1, brdNm: "상태관리란 무엇일까?", brdDesc: "내용입니다.", date: "2022.11.11"},
   {No: 2, brdNm: "게시글1", brdDesc: "내용입니다.", date: "2022.11.11"},
   {No: 3, brdNm: "게시글1", brdDesc: "내용입니다.", date: "2022.11.11"},
]

export const handlers = [
   rest.get("/getBrd", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardList))
   }),
   rest.get("/getBrdDtl", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardDtl))
   }),
]
