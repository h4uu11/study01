import {rest} from "msw"

const boardList = [
   {
      번호: 1,
      제목: "상태관리란 무엇일까?",
      내용: "상태관리란 무엇일까?상태관리란 무엇일까? 상태관리란 무엇일까? 상태관리란 무엇일까?상태관리란 무엇일까?상태관리란 무엇일까?상태관리란 무엇일까?.",
      작성자: "조혁래",
      등록일: "2022.11.11",
      수정일: "2022.11.11",
   },
   {
      번호: 2,
      제목: "Vue3 어려울까?",
      내용: "Vue3 어려울까? Vue3 어려울까?Vue3 어려울까?Vue3 어려울까?",
      작성자: "김동인",
      등록일: "2022.11.11",
      수정일: "2022.11.11",
   },
   {
      번호: 3,
      제목: "React를 시작하자!",
      내용: "React를 시작하자! 내용React를 시작하자!React를 시작하자!React를 시작하자!.",
      작성자: "배재관",
      등록일: "2022.11.11",
      수정일: "2022.11.11",
   },
]

const userList = [
   {
      번호: 1,
      이름: "조혁래",
      아이디: "test01@dfluid.com",
      가입일: "2022.11.11",
   },
   {
      번호: 2,
      이름: "배재관",
      아이디: "test02@dfluid.com",
      가입일: "2022.11.11",
   },
   {
      번호: 3,
      이름: "김동인",
      아이디: "test03@dfluid.com",
      가입일: "2022.11.11",
   },
   {
      번호: 4,
      이름: "이유진",
      아이디: "test04@dfluid.com",
      가입일: "2022.11.11",
   },
]

export const handlers = [
   rest.get("/getBrd", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(boardList))
   }),

   rest.get("/getUser", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(userList))
   }),

   rest.post("/createBrd", (req, res, ctx) => {
      boardList.push(req.body)
      return res(ctx.status(201))
   }),
]
