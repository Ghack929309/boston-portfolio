import { NextRequest, NextResponse } from "next/server"





export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')
        const fileKey = searchParams.get('fileKey')
        if (!id || !fileKey) return NextResponse.json({ error: 'missing id or fileKey' }, { status: 400 })
        const response = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${id}&format=png`, {
            method: 'GET',
            headers: {
                'X-Figma-Token': process.env.NEXT_PUBLIC_FIGMA_TOKEN!,
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        const imageId = id.replace('-', ':')
        const images = {
            error: data.err,
            images: data.images[imageId],
        }
        return NextResponse.json(images, { status: 200 })

    } catch (error) {
        console.log('there is an error', error)
        return NextResponse.json(error, { status: 500 })

    }

}