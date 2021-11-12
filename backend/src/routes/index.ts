import {Router} from 'express';

const router = Router(); //crea con express un enrutador --> es un objeto para poner dentro tus rutas o las url del servidor

import {createTeacher,getTeachers,getTeacher, deleteTeacher, updateTeacher} from '../controllers/teacher.controller'
import {createSubject,getSubjects,getSubject, deleteSubject, updateSubject} from '../controllers/subject.controller'

router.route('/teachers')
    .get(getTeachers)
    .post(createTeacher)

router.route('/teachers/:id')
    .get(getTeacher)
    .delete(deleteTeacher)
    .put(updateTeacher)

router.route('/subjects')
    .get(getSubjects)
    .post(createSubject)

router.route('/subjects/:id')
    .get(getSubject)
    .delete(deleteSubject)
    .put(updateSubject)

export default router;