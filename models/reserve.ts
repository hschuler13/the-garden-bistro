/* import mongoose from "mongoose";

export interface Reserve extends mongoose.Document {
  name: string;
  email: string;
  number_of_guests: number;
  date: string;
  time: string;
  special_requests: string;
}

/* ReserveSchema will correspond to a collection in your MongoDB database. */
/*const ReserveSchema = new mongoose.Schema<Reserve>({
  name: {
    /* Name of person putting in a reservation */

    /*type: String,
    required: [true, "Please provide a name for the reservation."],
    maxlength: [100, "Name cannot be more than 100 characters"],
  },
  email: {
    /* Contact email to confirm reservation */

    /*type: String,
    required: [true, "Please provide an email for the reservation."],
    maxlength: [100, "Email cannot be longer that 100 characters."],
  },
  number_of_guests: {
    /* Number of guests for reservation */

    /*type: Number,
    required: [true, "Please specify the number of guests for your reservation."],
  },
  date: {
    /* Date of reservation */

    /*type: String,
    required: [true, "Please provide a date for the reservation."],
  },
  time: {
    /* Time of reservation */

    /*type: String,
    required: [true, "Please provide a time for the reservation."],
  },
  special_requests: {
    /* List of dietary needs, if applicable */

    /*type: String,
    maxlength: [300, "Request cannot be over 300 characters"],
  },
});

export default mongoose.models.Reserve || mongoose.model<Reserve>("Reserve", ReserveSchema); */