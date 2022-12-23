import axios from "axios"

export const getBrd = async () => {
   const res = await axios.get("/getBrd")
   return res.data
}

export const getUser = async () => {
   const res = await axios.get("/getUser")
   return res.data
}

export const createBrd = async () => {
   const res = await axios.post("/createBrd")
   return res.data
}
