import axios from "axios"

export const fetchMessage = function () {
   fetch("/massage")
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          fetchMessageAxios();
       });
}

export const fetchMessageAxios = async() => {
   const res = await axios.get("/massage");
   return res.data;
}