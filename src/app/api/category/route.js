import { NextResponse } from 'next/server'
import PocketBase from 'pocketbase';



export async function GET(request) {
    try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const records = await pb.collection('category').getFullList({
            sort: '-created',
        });
        return NextResponse.json({ status: 200, result: records });

    } catch(e) {
        return NextResponse.json({ status: 400, msg: 'Failed' });
    }
}