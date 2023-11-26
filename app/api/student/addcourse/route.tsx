import StudentServicve from '../../service/studentService'

const studentServicve = new StudentServicve()


export async function POST(request : Request) {
    const body = await request.json()
    const RESULT = await studentServicve.addStudentCourse(body?.account, body?.courseNumber,body?.courseTime,body?.coursePoint)
    
    return new Response(JSON.stringify({response: RESULT}))
}