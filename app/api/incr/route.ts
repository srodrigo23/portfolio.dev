import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// code IGNORED
// export const config = {
//   runtime:'edge'
// }

export async function POST(request:NextRequest):Promise<NextResponse>{
  

  const headerList = await headers()
  const ipAddress = headerList.get('x-forwarded-for')

  const body = await request.json();

  // const slug = body.slug as string | undefined
  
  // if(!slug){ return new NextResponse("Slug not found", {status: 400});}

  // const ip= request.ip; //get user/visitor ip
  // console.log(ip)
  
  // const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
  // const hash = Array.from(new Uint8Array(buf)).map((b)=> b.toString(16).padStart(2, "0")).join("");

  //define if hash is new or not
  // console.log(hash)


  return new NextResponse(null, {status:200})

}