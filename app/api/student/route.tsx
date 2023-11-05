// Controller
import StudentServicve from '../service/studentService'

const studentServicve = new StudentServicve()

export async function GET(request : Request) {

}
export async function POST(request : Request) {
    const body = await request.json()
    console.log(body)
    return new Response(await studentServicve.getStudent(body?.account))
}
