import {executeQuery} from '../../../lib/api'

export default class StaffRepository {
    
    async getStaff(account : string) {
      const re = ""
      const res = await executeQuery({
          query: 'SELECT * FROM user WHERE account = ?',
          values: [account],
      });
      return res[0];
    }
  
  }