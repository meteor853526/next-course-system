import StudentServicve from '../../service/studentService'

const studentServicve = new StudentServicve()


export async function POST(request : Request) {
    const body = await request.json()
    const data = await studentServicve.getAllCourse()
    
    return new Response(JSON.stringify(data))
}