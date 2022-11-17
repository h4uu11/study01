import axios from "axios"

export const boardList = async () => {
   const res = await axios.get("/boardList")
   return res.data
}

export const boardDtl = async () => {
   const res = await axios.get("/boardDtl")
   return res.data
}
