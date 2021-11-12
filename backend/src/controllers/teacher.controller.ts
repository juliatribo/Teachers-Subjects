//operaciones tipicas de las fotos, fichero con la parte logica del fichero index de routes
import {Request, Response} from 'express';
import Teacher from '../models/Teacher';
import { ISubject } from '../models/Subject';

export async function getTeachers(req: Request,res: Response): Promise<Response>{
    const teachers = await Teacher.find(); //find me retorna todas las fotos que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(teachers);
}

export async function getTeacher(req: Request,res: Response): Promise<Response>{
    const teacher = await Teacher.findById(req.params.id);
    return res.json(teacher);
}


/* TEACHER
    name: string;
    subjects: ISubject['_id'];
    age: number
*/
export async function createTeacher(req: Request,res: Response): Promise<Response>{

    const{name, subjects, age} = req.body;
    const newTeacher = {
        name: name,
        subjects: subjects,
        age: age
    };
    const teacher = new Teacher(newTeacher);
    await teacher.save();
    return res.json({
        message: 'Teacher successfully saved',
        teacher
    })
}

export async function deleteTeacher(req: Request,res: Response): Promise<Response>{
    const {id} = req.params;
    const teacher = await Teacher.findByIdAndRemove(id);
    return res.json({
        message: 'Teacher Deleted',
        teacher
    });

}

export async function updateTeacher(req: Request,res: Response): Promise<Response>{
    const{id} = req.params;
    const{name, subjects, age} = req.body;
    console.log(req.body)
    const updatedTeacher = await Teacher.findByIdAndUpdate(id,{
        name,
        subjects,
        age
    }, {new: true}); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedTeacher
    });
}

//respuesta basada en una promesa cuando primero debe hacer halgo y despues yaa devolverlo (async, tb necesita el await)