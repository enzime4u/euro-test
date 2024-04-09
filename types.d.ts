type User = {
  id: string;
  name: string;
  email: string;
};

type Parc = {
  id: string;
  name: string;
  description: string;
};

type ErrorProps = {
  statusCode?: number;
  message?: string;
};

type Booking = {
  id: string;
  user: string;
  parc: string;
  bookingdate: string;
  comments: string;
}