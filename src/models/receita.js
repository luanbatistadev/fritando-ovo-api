import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';

const receitaSchema = new mongoose.Schema(
    {
        titulo: { type: String, maxlength: 200, trim: true },
        tempoPreparo: { type: String, maxlength: 200, trim: true },
        porcoes: { type: String, maxlength: 200, trim: true },
        imagem: { type: String, trim: true },
    },
    { versionKey: false }
);

receitaSchema.plugin(mongoosePaginate);

const receitas = mongoose.model('receitas', receitaSchema);

export default receitas;
