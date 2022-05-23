import { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-anonymous-default-export
export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: "John"},
        {id: 1, name: "John2"},
        {id: 1, name: "John3"}
    ]
    return response.json(users)
}