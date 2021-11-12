//operaciones tipicas de las fotos, fichero con la parte logica del fichero index de routes
import {Request, Response} from 'express';
import Subject from '../models/Subject';

export async function getSubjects(req: Request,res: Response): Promise<Response>{
    const subjects = await Subject.find(); //find me retorna todas las subjects que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(subjects);
}

export async function getSubject(req: Request,res: Response): Promise<Response>{
    const subject = await Subject.findById(req.params.id);
    return res.json(subject);
}


/* 
interface ISubject extends Document {
    name: string;
    credits: number
*/
export async function createSubject(req: Request,res: Response): Promise<Response>{

    const{name, credits} = req.body;
    const newSubject = {
        name: name,
        credits: credits
    };
    const subject = new Subject(newSubject);
    await subject.save();
    return res.json({
        message: 'Subject successfully saved',
        subject
    })
}

export async function deleteSubject(req: Request,res: Response): Promise<Response>{
    const {id} = req.params;
    const subject = await Subject.findByIdAndRemove(id);
    return res.json({
        message: 'Subject Deleted',
        subject
    });

}

export async function updateSubject(req: Request,res: Response): Promise<Response>{
    const{id} = req.params;
    const{name, credits} = req.body;
    console.log(req.body)
    const updatedSubject = await Subject.findByIdAndUpdate(id,{
        name,
        credits
    }, {new: true}); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedSubject
    });
}