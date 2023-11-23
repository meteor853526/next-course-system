// searchService.ts
import StudentRepository from "../repositories/studentRepository";

const studentRepository = new StudentRepository();

export default class SearchService {

    async getSearchCourse(searchConditions) {
        return studentRepository.getSearchCourse(searchConditions);
    }

}
