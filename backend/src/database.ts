import {connect} from 'mongoose';

export async function startConnection(){
    await connect('mongodb+srv://juliatribo:julia123@cluster0.uvnt0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true ,//es importante para que cuando ejecute la conexion no me de ningun error por consola
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}