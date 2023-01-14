import { v1 as uuidv1 } from 'uuid';

export const GenerateId = async (req, res) => {
    try {
        const id = uuidv1();

        res.json({ id })
    } catch (err) { return res.status(500).json({ msg: err.message }) }
}