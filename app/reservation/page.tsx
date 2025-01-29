import ReservationForm from "@/components/features/reservation-form";
import { testDatabaseConnection } from "@/components/features/actions";

export default async function Reservation() {
  const isConnected = await testDatabaseConnection();
  
  const reserveForm = {
    name: "",
    email: "",
    species: "",
    number_of_guests: 0,
    date: "",
    time: "",
    special_requests: "",
  }; 

  return (
    <>
      <div className="p-5"><ReservationForm /></div>
    </>
  );
}