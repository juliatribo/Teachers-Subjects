import { Schema, model, Document } from "mongoose";
import Subject, {ISubject} from "./Subject";

//el esquema es para mongoose, para la base de datos
const schema = new Schema({
    name: String,
    subjects: ['_id'],
    age: Number //la imagen estara guardada en la carpeta upload, en el schema solo guardara la direccion de la imagen
})

//la interfaz es una descripcion del objeto para que ts sepa como es el schema (el document describe una estructura tipicaa de mongodb)
export interface ITeacher extends Document {
    name: string;
    subjects: ISubject['_id'];
    age: number
}

//con <ITeacher> le pedimos que cumpla con la estructura de la interfaz en ts
export default model<ITeacher>('Teacher', schema);