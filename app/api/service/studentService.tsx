import StudentRepository from "../repositories/studentRepository";
const _ = require('lodash');
const studentRepository = new StudentRepository()

interface Student {
  name:string
}
export default class StudentServicve{

 async getStudent(account:string) {
    return studentRepository.getStudent(account)
 }

 async getStudentCourse(account:string) {
    return studentRepository.getStudentAllCourseDetail(account)
 }
 async addStudentCourse(account:string,courseNumber:Number,courseTime:String,coursePoint:number) {
   const courseExist = await studentRepository.checkStudentCourseExist(account,courseNumber)
   console.log(courseExist)
   if (courseExist['value_exists']) {
      return '你已加選這堂課'
   }
   const studentCourses = await studentRepository.getStudentAllCourseDetail(account)
   var timetable = []
   const regex = /\((.*?)\)(\d+)-(\d+)/;
   var point = 0
   Object.entries(studentCourses).map(([key, value]) => {
     const matches = value['上課時間'].match(regex);
     point += value['學分']
     var [dayOfWeek, startTime, endTime] = matches.slice(1);
     startTime = parseInt(startTime, 10)
     endTime = parseInt(endTime, 10)
     for(;endTime-startTime >=0;endTime--) {
       timetable.push({ day: `${dayOfWeek}`, time: `${endTime}`});
     }
   })
   if (point+coursePoint > 25) {
      return '超過25學分'
   }
   const matches = courseTime.match(regex);
   var [dayOfWeek, startTime, endTime] = matches.slice(1);
   var start = parseInt(startTime, 10)
   var end = parseInt(endTime, 10)
   for(;end-start >=0;end--) {
      var foundConflict = timetable.find(dictionary => (
         dictionary.day === dayOfWeek && dictionary.time === String(end)
      ));
   }
   if(foundConflict) {
      console.log(foundConflict)
      return '衝堂'
   }

   // add
   await studentRepository.addStudentCourse(account,courseNumber)

   return '加選成功'
}

}