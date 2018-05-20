import express from "express";
import Cryto from "./crytoModel";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const crytos = await Cryto.find();
    return res.send(crytos);
}));

router.post('/', asyncHandler(async (req, res) => {
    const newCryto = req.body;
    if (newCryto) {
        const crypto = await Cryto.create(newCryto);
        return res.status(201).send({crypto});
    } else {
        return handleError(res, err);
    }
}));

router.put("/:id", asyncHandler(async (req, res) => {
    if (req.body._id) delete req.body._id;
    const cryto = await Cryto.update({
        _id: req.params.id,
    }, req.body, {
        upsert: false,
    });
    if (!cryto) return res.sendStatus(404);
    return res.json(200, cryto);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    const cryto = await Cryto.findById(req.params.id);
    if (!cryto) return res.send(404);
    await cryto.remove();
    return res.sendStatus(204)//.send(cryto); Need to be in there?
}));

export default router;