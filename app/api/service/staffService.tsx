import StaffRepository from "../repositories/staffRepository";

const staffRepository = new StaffRepository()

interface Staff {
   name:string
}

export default class StaffServicve{

 async getStaff(account:string) {
   return staffRepository.getStaff(account)
 }
}