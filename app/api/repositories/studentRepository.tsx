import {executeQuery} from '../../../lib/api'

export default class StudentRepository {
    
    async getStudent(account : string) {
      const res = await executeQuery({
          query: 'SELECT * FROM user WHERE account = ?',
          values: [account],
      });
      return res[0];
    }
    


  }