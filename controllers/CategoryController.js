import category from "../models/Category.js";

export const createCategory = async (req, res) => {
    const newCategory = new category(req.body);
    const savedCategory = await newCategory.save();
    return res.json({ data: savedCategory });
};
