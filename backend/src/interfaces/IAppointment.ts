export interface IAppointment {
    id: number;
    date: string;
    time: string;
    status: "pending" | "cancelled";
    userId: number;
  }