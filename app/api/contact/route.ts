import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const host = process.env.SMTP_HOST || 'smtp.gmail.com'
    const port = Number(process.env.SMTP_PORT) || 587
    const user = process.env.SMTP_USER || 'huinehuorg@gmail.com'
    const pass = process.env.SMTP_PASS || 'mdqyknbqeplomwpz'

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    })

    // 1. Email sent to Admin (Hui Nehu Team)
    const adminMailOptions = {
      from: `"Hui Nehu Contact Form" <${user}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || 'jay.carpio@me.com',
      subject: `[Website Inquiry] ${subject || 'New Contact Form Submission'} from ${name}`,
      text: `
Hui Nehu Website - Contact Form Submission
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <h1 style="color: #0f172a; font-size: 20px; font-weight: bold; margin: 0 0 4px 0;">Hui Nehu Website</h1>
          <h2 style="color: #0f766e; font-size: 16px; margin: 0 0 16px 0; font-weight: normal;">New Contact Form Submission</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="margin: 8px 0; color: #334155;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0d9488; text-decoration: underline;">${email}</a></p>
          <p style="margin: 8px 0; color: #334155;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p style="margin: 8px 0; color: #334155;"><strong>Subject/Topic:</strong> ${subject || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h3 style="color: #334155; margin-bottom: 8px;">Message:</h3>
          <div style="white-space: pre-wrap; color: #475569; background-color: #f8fafc; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6;">${message}</div>
        </div>
      `,
    }

    // 2. Automated Confirmation Email sent to the User (Submitter)
    const userConfirmationMailOptions = {
      from: `"Hui Nehu" <${user}>`,
      to: email,
      subject: `Thank you for contacting Hui Nehu, ${name}!`,
      text: `Aloha ${name},\n\nThank you for reaching out to Hui Nehu! We have received your message regarding "${subject || 'General Inquiry'}". Our team will review your inquiry and get back to you soon.\n\nA copy of your message:\n${message}\n\nWarm regards,\nThe Hui Nehu Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
          <h1 style="color: #0f172a; font-size: 22px; margin-top: 0; margin-bottom: 8px;">Hui Nehu</h1>
          <p style="color: #334155; font-size: 15px; line-height: 1.6;">Aloha <strong>${name}</strong>,</p>
          <p style="color: #334155; font-size: 15px; line-height: 1.6;">Thank you for reaching out to us! We have received your inquiry regarding <strong>${subject || 'General Inquiry'}</strong>. Our team will review your message and get back to you as soon as possible.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <h4 style="color: #64748b; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">A copy of your message:</h4>
          <div style="white-space: pre-wrap; color: #475569; background-color: #f8fafc; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="color: #64748b; font-size: 13px; margin: 0;">Warm regards,<br /><strong style="color: #0f766e;">The Hui Nehu Team</strong></p>
        </div>
      `,
    }

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userConfirmationMailOptions),
    ])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to send email' },
      { status: 500 }
    )
  }
}
