import StudentRepository from "../repositories/studentRepository";

const studentRepository = new StudentRepository()

interface Student {
  name:string
}
export default class StudentServicve{

 async getStudent(account:string) {

    return studentRepository.getStudent(account)
 }
}