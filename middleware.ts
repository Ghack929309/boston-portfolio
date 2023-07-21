// import {createClient,OAuthStrategy} from '@wix/api-client'
// import { NextRequest, NextResponse } from 'next/server'

// export const middleware = async (req:NextRequest) => {
//     if(!req.cookies.get('session')){
//         const response = NextResponse.next()
//         const myWixClient = createClient({ 
//             auth:OAuthStrategy({clientId:process.env.NEXT_PUBLIC_WIX_CLIENT_ID!})
//          })
//          response.cookies.set('session',JSON.stringify(await myWixClient.auth.generateVisitorTokens()))
//          return response
//     }
// }