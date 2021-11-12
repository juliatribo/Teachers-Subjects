import { Schema, model, Document } from "mongoose";


//el esquema es para mongoose, para la base de datos
const schema = new Schema({
    name: String,
    credits: Number //la imagen estara guardada en la carpeta upload, en el schema solo guardara la direccion de la imagen
})

//la interfaz es una descripcion del objeto para que ts sepa como es el schema (el document describe una estructura tipicaa de mongodb)
export interface ISubject extends Document {
    name: string;
    credits: number
}

//con <ITeacher> le pedimos que cumpla con la estructura de la interfaz en ts
export default model<ISubject>('Subject', schema);