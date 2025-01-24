import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Reserve from "../../../models/reserve";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const reserve = await Reserve.findById(id);
        if (!reserve) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: reserve });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const reserve = await Reserve.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!reserve) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: reserve });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedReserve = await Reserve.deleteOne({ _id: id });
        if (!deletedReserve) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}