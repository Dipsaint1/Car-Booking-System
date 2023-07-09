import '../../../sass/booking.scss';
import MinibusSeatModal from './MinibusSeatModal';
import SiennaSeatModal from './SiennaSeatModal';
import ToyotaSeatModal from './ToyotaSeatModal';

type BusType = 'toyota' | 'sienna' | 'minibus'

const SeatModal = () => {
  return (
    <section id="seat__modal">
      <div className="seat__modal-wrapper">
        <div className="close__modal ms-auto">
          <i className="fs-1 fa-solid fa-circle-xmark"></i>
        </div>
        <h3 className='my-3'>Select Seat</h3>
        <div className="container my-3">
            <div className="row ">
              <div className="col-4 d-flex align-items-center flex-column">
                <div className='available__seat seat__sample'> </div>
                <small className='text-center mt-2'>Available Seat</small>
              </div>
              <div className="col-4 d-flex align-items-center flex-column">
                <div className='selected__seat seat__sample'> </div>
                <small className='text-center mt-2'>Selected Seat</small>
              </div>
              <div className="col-4 d-flex align-items-center flex-column">
                <div className='booked__seat seat__sample'> </div>
                <small className='text-center mt-2'>Booked Seat</small>
              </div>
            </div>
        </div>

        <ToyotaSeatModal />
        {/* <SiennaSeatModal /> */}
        {/* <MinibusSeatModal /> */}

        <form className='bg-danger w-100 mt-4'>
          <button className="btn w-100">Continue</button>
        </form>
      </div>
    </section>
  )
}

export default SeatModal