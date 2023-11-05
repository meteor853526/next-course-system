// Controller
import StaffService from '../service/staffService'

const staffService = new StaffService()

export async function GET(request : Request) {

}
export async function POST(request : Request) {
    const body = await request.json()
    console.log(body)
    return new Response(await staffService.getStaff(body?.account))
}
