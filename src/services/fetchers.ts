import axios from "axios"

export const getBrd = async () => {
   const res = await axios.get("/getBrd")
   return res.data
}

export const getBrdDtl = async () => {
   const res = await axios.get("/getBrdDtl")
   return res.data
}
