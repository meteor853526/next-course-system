import {executeQuery} from '../../../lib/api'

export default class StudentRepository {
    
    async getStudent(account : string) {
      const res = await executeQuery({
          query: `SELECT * FROM user WHERE account = ?`,
          values: [account],
      });
      return res[0];
    }
    
    async getStudentAllCourseNumber(account : string) {
      const res = await executeQuery({
          query: `SELECT st_course
                  FROM user
                  WHERE account = ?`,
          values: [account],
      });
      return res[0];
    }    
    async getStudentAllCourseDetail(account : string) {
      
      const res = await executeQuery({
          query: `SELECT course.*
                  FROM course
                  JOIN user ON JSON_CONTAINS(user.st_course, CAST(course.選課代碼 AS JSON))
                  WHERE user.account = ?`,
          values: [account],
      });
  
      console.log(res)
      return res;
    }   

    async getAllCourse() {
    }  
    async checkStudentCourseExist(account : string, course : string) {
      const res = await executeQuery({
          query: `SELECT JSON_CONTAINS(user.st_course, '"?"') AS value_exists 
                  FROM user 
                  WHERE account = ?`,
          values: [course,account],
      }); // 1 -> exist, 0 -> not exist
      console.log(res);
      return res;
    }  
    
    async addStudentCourse(account : string, course : string) { // add 
      const res = await executeQuery({
          query: `UPDATE user
                  SET st_course = JSON_ARRAY_APPEND(st_course, '$', '?')
                  WHERE account = ?`,
          values: [course,account],
      });
      console.log(res);
      return null;
    } 

    async deletStudentCourse(account : string, course : string) {
      const res = await executeQuery({
          query: `UPDATE user
                  SET st_course = JSON_REMOVE(st_course, JSON_UNQUOTE(JSON_SEARCH(st_course, 'one', ?)))
                  WHERE account = ?`,
          values: [course,account],
      });
      console.log(res);
      return null;
    } 



  }