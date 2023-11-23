import SearchServicve from '../../service/searchService'

const seachServicve = new SearchServicve()


export async function POST(request: Request) {
    const body = await request.json()
    if (!body) {
        return new Response('Bad Request: No JSON data provided', { status: 400 });
    }
    const data = await seachServicve.getSearchCourse(body)

    return new Response(JSON.stringify(data))

}