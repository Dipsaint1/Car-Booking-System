import { Link, useNavigate } from 'react-router-dom';
import '../../sass/signin.scss';
import { FormEvent, useContext, useState } from 'react';
import { Toast } from '../../utilities/Functions';
import UserService from '../../services/UserService';
import { isValidPassword } from '../../utilities/Regex';
import { AuthUserDataType, UserContext } from '../../contexts/UserContext';

export type StateType = {
  username: string,
  email: string,
  password: string,
  token?: string, 
  hasAgreedTerms?: boolean,
  confirmPassword?: string,
}

const Signup = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [toggleVisibility, setToggleVisibility] = useState({
    visiblePassword: false,
    visibleConfirmPassword: false,
  });
  const [formData, setFormData] = useState<StateType>(
    { username: "", email: "", password: "", confirmPassword: "", hasAgreedTerms: false }
  );
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(formData.password !== formData.confirmPassword){ return Toast('error', 'Passwords do not match') }
    if(formData.password.length < 8 ) { return Toast("error", "Password length cannot be less than 8 characters")}
    if(!isValidPassword(formData.password)){ return }
    
    const payload: StateType = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    }
    setIsLoading(true);
    try {
      const { data } = await UserService.Register(payload);
      if(data){
        const user : AuthUserDataType = {
          email: data.email,
          username: data.username,
        } 
        localStorage.setItem('currentUser', JSON.stringify(user));
        setCurrentUser(user);
        Toast('success', 'Registration successful');
        return navigate('/');
      }
    } catch (error) {
      return error;
    } finally{
      setIsLoading(false);
    }
  }

  return (
    <main id='registration'>
      <div className="container-lg d-flex align-items-center justify-content-center h-100 w-100">
        <form onSubmit={handleSubmit}>
          <header>
            <h4 className='text-center'>Create account</h4>
          </header>
          <div className='wrapper mt-3'>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="username">Username</label>
              <input onChange={(e) => setFormData({ ...formData, username: e.target.value})} className='d-block form-control' id='username' type="text" required />
            </div>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="email">Email</label>
              <input onChange={(e) => setFormData({ ...formData, email: e.target.value})} className='d-block form-control' id='email' type="email" required />
            </div>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="password">Password</label>
              <input onChange={(e) => setFormData({ ...formData, password: e.target.value})} className='d-block form-control' id='password' type={toggleVisibility.visiblePassword ? 'text' : 'password'} required />
              <i 
                onClick={() => !formData.password.length ? null : setToggleVisibility({ ...toggleVisibility, visiblePassword: !toggleVisibility.visiblePassword })} 
                className={`eye-icon fa-regular fa-eye${toggleVisibility.visiblePassword && formData.password.length ? '' : '-slash'}`}>
              </i>
            </div>
            <div className="form-group mb-4">
              <label className='d-block my-1' htmlFor="confirm-password">Confirm Password</label>
              <input onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value})} className='d-block form-control' id='confirm-password' type={toggleVisibility.visibleConfirmPassword ? 'text': 'password'} required />
              <i 
                onClick={() => !formData.confirmPassword?.length ? null : setToggleVisibility({...toggleVisibility, visibleConfirmPassword: !toggleVisibility.visibleConfirmPassword})} 
                className={`eye-icon fa-regular fa-eye${toggleVisibility.visibleConfirmPassword ? '' : '-slash'}`}>
              </i>
            </div>
            <div className="form-check my-4">
              <input onChange={() => setFormData({ ...formData, hasAgreedTerms: !formData.hasAgreedTerms })} type="checkbox" className="form-check-input" id="form-check-label"/>
              <label className="form-check-label" htmlFor="form-check-label">I agree to the the terms & conditions</label>
            </div>
            <button 
              disabled = { !(formData.hasAgreedTerms && formData.email.length && formData.password.length && formData.confirmPassword?.length && !isLoading && formData.username.length) } 
              type="submit" 
              className="btn w-100">
              { isLoading ? 'Loading...' : 'Submit'  }
            </button>
            <p className="my-4">Already have an account? <Link to='/login'>Sign in</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Signup;