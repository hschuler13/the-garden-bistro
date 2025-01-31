"use client";

import { formSchema } from "@/lib/schemas";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sendContactEmail } from "@/components/features/actions";

import { z } from "zod";
import { useState } from "react";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    // Extract values from formData
    const fName = formData.get("firstName") as string;
    const lName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const emailResponse = await sendContactEmail(email, fName, lName, message);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-md pt-1 font-semibold text-alt">
          Contact Us
        </CardTitle>
        <CardDescription className="pt-1 text-footerBG">
          Fill out the form below and we&#39;ll get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 pt-1 text-footerBG">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-alt">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your first name"
                          className=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2 pt-1 text-footerBG">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-alt">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2 pt-1 text-footerBG">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-alt">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2 pt-1 text-footerBG">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" text-alt">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Type in your message here"
                        className="min-h-[120px] border-footerBG"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="ml-auto">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
