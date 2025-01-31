import ContactForm from "@/components/features/contact-form";
import { testDatabaseConnection } from "@/components/features/actions";

export default async function Contact() {
  const isConnected = await testDatabaseConnection();
    
  return (
    <>
      <div className="p-5"><ContactForm/></div>
    </>
  );
}