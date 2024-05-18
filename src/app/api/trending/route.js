import { NextResponse } from 'next/server'
import PocketBase from 'pocketbase';

export async function GET(request) {
    try {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const records = await pb.collection('trending').getFullList({});
        return NextResponse.json(records);

    } catch(e) {
        return NextResponse.json({ status: 400, msg: 'Failed' });
    }
}