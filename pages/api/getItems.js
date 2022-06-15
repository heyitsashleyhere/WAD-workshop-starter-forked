import axios from "axios";
import { board_id } from "../../constants.js"

export default function handler(req, res) {
    console.log(board_id);
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.miro_access_token}`
    }

    axios.get(`https://api.miro.com/v2/boards/${board_id}/items?limit=50/?type=shape&type=sticky_notes&type=text/`, {
        headers: headers,
    }).then(function (response){
        res.json(response.data)
    }).catch(function(error){
        console.log('error :>> ', error);
    })
}
