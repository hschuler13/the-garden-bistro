'use server'

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

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Here you would typically send the reservation data to your backend service
  // For example:
  // await fetch('your-api-endpoint', {
  //   method: 'POST',
  //   body: JSON.stringify({ 
  //     name, 
  //     email, 
  //     guests: guestsNum,
  //     date: reservationDate,
  //     time,
  //     notes 
  //   }),
  // })

  return { success: true }
}

