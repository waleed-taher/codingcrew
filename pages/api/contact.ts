import { NextResponse, NextRequest } from "next/server";
import {transporter , mailOptions} from "../config/nodemailer"
import type { NextApiRequest, NextApiResponse } from 'next'
import { googleCalendarEventUrl } from 'google-calendar-url'
import { motion } from "framer-motion";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const data = await req.body
    const url = googleCalendarEventUrl({
        start: '20201212T100000Z',
        end: '20201212T110000Z',
        title: data.event,
        details: 'Coding Competition',
        location: 'NED University',
      });
    
    try {
        await transporter.sendMail({
            ...mailOptions,
            to:data.member1email,
            
            subject: `Your Team ${data.teamname} has been registered for  Event ${data.event}`,
            html: `
            <p>Dear ${data.member1}, We are glad to inform that you have been registered in the Koders Combat being conducted by Coderscrew under the team name ${data.teamname}.  We wish you the best of luck for the competition and hope that you will learn something from this experience.
            Happy coding</p>
            <h1>Add this event to Calendar</h1>
            <a href=${url}><button>Add to Calendar</button></a>`
            
        })

        await transporter.sendMail({
            ...mailOptions,
            to:data.member2email,
            
            subject: `Your Team ${data.teamname} has been registered for  Event${data.event}`,
            html: `
            <p>Dear ${data.member2}, we are glad to inform that you have been registered in the Koders Combat being conducted by Coderscrew under the team name ${data.teamname}.  We wish you the best of luck for the competition and hope that you will learn something from this experience.
            Happy coding</p>
            <h1>Add this event to Calendar</h1>
            <a href=${url}><button>Add to Calendar</button></a>`
            
        })
        return new NextResponse(JSON.stringify({
            "message" : "send"
        }))
    } catch (error) {
        console.log(error)
    }
}




  