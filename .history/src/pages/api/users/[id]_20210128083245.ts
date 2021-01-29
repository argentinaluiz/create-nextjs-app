// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import users from "../../../data/users";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  res.statusCode = 200;
  res.json(users.find(u => u.id === +id));
};
