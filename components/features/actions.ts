'use server'

import client from "@/lib/mongodb";
import nodemailer from 'nodemailer';

export async function testDatabaseConnection() {
  let isConnected = false;
  try {
    const mongoClient = await client.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    ); // because this is a server action, the console.log will be outputted to your terminal not in the browser
    return !isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}

export async function submitContact(formData: FormData) {
  // Validate the form data
  const name = formData.get('name')
  const email = formData.get('email')
  const guests = formData.get('guests')
  const date = formData.get('date')
  const time = formData.get('time')
  const notes = formData.get('notes')

  if (!name || !email || !guests || !date || !time) {
    throw new Error('Please fill in all required fields')
  }

  // Validate number of guests
  const guestsNum = parseInt(guests.toString())
  if (isNaN(guestsNum) || guestsNum < 1 || guestsNum > 10) {
    throw new Error('Please enter a valid number of guests (1-10)')
  }

  // Validate date
  const reservationDate = new Date(date.toString())
  if (reservationDate < new Date()) {
    throw new Error('Please select a future date')
  }

  // Here you would typically send the reservation data to your backend service
  // For example:
  try {
    const mongoClient = await client.connect();
    const db = mongoClient.db("your_database_name"); // Replace with your actual database name
    const collection = db.collection("reservations"); // Replace with your collection name

    // Insert the reservation into MongoDB
    const result = await collection.insertOne({
      name,
      email,
      guests: guestsNum,
      date: reservationDate,
      time,
      notes,
      createdAt: new Date(),
    });

    return { success: true, insertedId: result.insertedId.toString() };
  } catch (error) {
    console.error("Database insert error:", error);
    throw new Error("Failed to save the reservation. Please try again later.");
  }
}

export async function sendConfirmationEmail(email: string, name: string, date: Date | undefined, time: string, guests: string) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Set in your environment variables
      pass: process.env.GMAIL_PASS, // Use an App Password instead of your real password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Reservation Confirmation',
    text: `Hello ${name},\n\nYour reservation has been confirmed.\n\nDetails:\n\nDate: ${date}\nTime: ${time}\nNumber of Guests: ${guests} \n\nThank you!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: (error instanceof Error ? error.message : "Something went wrong. Please try again.") };
  }
}

export async function sendContactEmail(email: string, fName: string, lName: string, message: string) {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Set in your environment variables
      pass: process.env.GMAIL_PASS, // Use an App Password instead of your real password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `${fName} ${lName} - Feedback`,
    text: `The client has stated the following message: ${message}\n\nClient email: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: (error instanceof Error ? error.message : "Something went wrong. Please try again.") };
  }
}

