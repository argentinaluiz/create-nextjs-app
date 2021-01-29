// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import users from "../../users"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json(users)
}
