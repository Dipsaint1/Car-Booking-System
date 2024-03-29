import { useContext, useEffect } from 'react';
import '../../sass/booking.scss';
import TicketSelect from './TicketSelect';
import { BookingContext } from '../../contexts/BookingContext';
import Modal from '../modal/Modal';
import SeatModal from '../modal/SeatModal';
import { BookingType } from '../../utilities/Types';
import Pagination from '../../utilities/Pagination';


const TicketsList = () => {
  const { bookingState:{ trips }, getTicketsList } = useContext(BookingContext);

  useEffect(() => { getTicketsList() }, []);

  return (
    <>
      <section id='bus__selection' className='py-5'>
        <div className="container-lg">
          <div className="row">
            { trips.map(( trip:BookingType ) => <TicketSelect key={trip._id} { ...trip } /> ) }
          </div>
          <Pagination />
        </div>
        
      </section>
      <Modal>
        <SeatModal />
      </Modal>      
    </>
  )
}

export default TicketsList