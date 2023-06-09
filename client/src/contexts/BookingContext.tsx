import { createContext, ReactElement, useState } from 'react';
import UserService from '../services/UserService';

type ChildrenType = { children?: ReactElement | ReactElement[]} 

export type TicketType = {
  _id: string,
  busType: string,
  travellingFrom: string,
  travellingTo: string,
  departureDate: string,
  price: number,
  bookedSeats: number[],
  availableSeats: number[],
}; 

type BookingStateType = {
  selectedSeat: number,
  isOpenModal: boolean,
  trips: TicketType[],
  selectedBus:Pick< TicketType, 'busType' | 'bookedSeats' | 'availableSeats' | '_id'> | null
}
const initBookingState: BookingStateType = {
  isOpenModal: false,
  trips: [],
  selectedBus: null,
  selectedSeat: 0
}

type BookingContextType = {
  bookingState: BookingStateType,
  setBookingState: React.Dispatch<React.SetStateAction<BookingStateType>>
  getTicketsList: () => void,
  getSeatInfo : (id: string) => Promise<unknown>
  handleSeatSelect:(seatNo: number) => void
} 

export const BookingContext = createContext<BookingContextType>( {} as BookingContextType );

export const BookingContextProvider = ({ children }: ChildrenType) : ReactElement => {
  const [bookingState, setBookingState] = useState<BookingStateType>(initBookingState);
  
  const getTicketsList = async() => {
    try {
      const { data } = await UserService.GetAllTrips();
      setBookingState(prev => ({ ...prev, trips: [ ...data ] }))
    } catch (error) {
      return error
    } 
  }

  const getSeatInfo = async (id: string): Promise<unknown> =>  {
    try {
      return id
    } catch (error) {
      return error;
    }
  }

  const handleSeatSelect = (seatNo: number): void => {
    const availableSeats = bookingState.selectedBus?.availableSeats;
    const bookedSeats = bookingState.selectedBus?.bookedSeats;

    if(bookedSeats?.includes(seatNo)){ return }
    else if(availableSeats?.includes(seatNo)) {
      setBookingState(previousState => ({ ...previousState, selectedSeat: seatNo}));
    }
    return
  }

  const contextValue = { bookingState, setBookingState, getTicketsList, getSeatInfo, handleSeatSelect }
  
  return(
    <BookingContext.Provider value={contextValue}>
      { children }
    </BookingContext.Provider>
  )
}
