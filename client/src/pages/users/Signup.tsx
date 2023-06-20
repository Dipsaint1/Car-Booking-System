import { Link } from 'react-router-dom';
import '../../sass/signin.scss';
import { FormEvent, useState } from 'react';
import { Toast } from '../../utilities/utils';

const Signup = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: '',
    password: "",
    confirmPassword: "",
    terms: true,
    isLoading: true,
    hasError: false
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(formData.password !== formData.confirmPassword){ return Toast('fail', 'Passwords do not match') }
    if(formData.password.length <= 6 ) { return Toast("fail", "Password length cannot be less than 6 characters")}
    


  }

  return (
    <main>
      <div className="container d-flex align-items-center justify-content-center h-100 w-100">
        <form onSubmit={handleSubmit}>
          <header>
            <h4 className='text-center'>Sign Up</h4>
          </header>

          <div className='wrapper'>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="username">Username</label>
              <input onChange={(e) => setFormData({ ...formData, username: e.target.value})} className='d-block form-control' id='username' type="text" required />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="email">Email</label>
              <input onChange={(e) => setFormData({ ...formData, email: e.target.value})} className='d-block form-control' id='email' type="email" required />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="password">Password</label>
              <input onChange={(e) => setFormData({ ...formData, password: e.target.value})} className='d-block form-control' id='password' type="password" required />
            </div>
            <div className="form-group my-4">
              <label className='d-block my-1' htmlFor="confirm-password">Confirm Password</label>
              <input onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value})} className='d-block form-control' id='confirm-password' type="password" required />
            </div>

            <div className="form-check my-4">
              <input onChange={(e) => setFormData({ ...formData, terms: !formData.terms })} type="checkbox" className="form-check-input" id="form-check-label"/>
              <label className="form-check-label" htmlFor="form-check-label">I agree to the Terms & Conditions</label>
            </div>

            <button disabled={formData.terms === true} type="submit" className="btn w-100">Submit</button>

            <p className="my-4">Already have an account? <Link to='/signin'>Sign in</Link></p>

          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup