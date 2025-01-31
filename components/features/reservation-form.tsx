'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContact, sendConfirmationEmail} from './actions'
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'

const ReservationForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
  
    const formData = new FormData(event.currentTarget);
  
    // Extract values from formData
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const guests = formData.get("guests") as string;
    const time = formData.get("time") as string;
    const dateString = formData.get("date") as string;
    const date = dateString ? new Date(dateString) : undefined; // Convert string back to Date
  
    const response = await submitContact(formData);
    const emailResponse = await sendConfirmationEmail(email, name, date, time, guests );
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-md pt-1 font-semibold text-alt">Make a Reservation</CardTitle>
        <CardDescription className="pt-1 text-footerBG">
          Book a table at our restaurant. We&#39;ll confirm your reservation via email.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2 pt-1 text-footerBG">
            <Label className="text-alt" htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-2 pt-1 text-footerBG">
            <Label className="text-alt" htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2 pt-1 text-footerBG">
            <Label className="text-alt" htmlFor="guests">Number of Guests</Label>
            <Input id="guests" name="guests" type="number" min="1" max="10" placeholder="Enter number of guests" required />
          </div>
          <div className="space-y-2 pt-1 text-footerBG">
            <Label className="text-alt">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date} // No changes needed here
                onSelect={setDate} // TypeScript now knows setDate expects Date | undefined
                initialFocus
                disabled={(date) => date < new Date()}
              />
              </PopoverContent>
            </Popover>
            <input type="hidden" name="date" value={date ? date.toISOString() : ''} />
          </div>
          <div className="space-y-2 pt-1 text-footerBG">
            <Label className="text-alt" htmlFor="time">Time</Label>
            <select id="time" name="time" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2" required>
              <option value="">Select a time</option>
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
              <option value="21:00">9:00 PM</option>
            </select>
          </div>
          <div className="space-y-2 pt-1 text-footerBG">
            <Label className="text-alt" htmlFor="notes">Special Requests</Label>
            <Textarea id="notes" name="notes" placeholder="Any dietary requirements or special requests?" className="min-h-[100px]" />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Reserving...' : 'Make Reservation'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ReservationForm;
