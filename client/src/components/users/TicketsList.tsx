import { useCallback, useContext, useEffect } from 'react';
import '../../sass/booking.scss';
import TicketSelect from './TicketSelect';
import { BookingContext, TicketType } from '../../contexts/BookingContext';

const TicketsList = () => {
  const { bookingState:{ trips }, getTicketsList } = useContext(BookingContext);

  const memoizedTicketLists = useCallback( () => { getTicketsList() }, [getTicketsList] );

  useEffect(() => { memoizedTicketLists() }, []);

  return (
    <section id='bus__selection' className='py-5'>
      <div className="container-lg">
        <div className="row">
          { trips.map(( trip:TicketType ) => <TicketSelect key={trip._id} { ...trip } /> ) }
        </div>
      </div>
    </section>
  )
}

export default TicketsList