import axios, { AxiosError, AxiosResponse } from 'axios';
import { Toast } from './Functions';

export default async function APICall(
  url: string, 
  method: string, 
  data: object, 
  timeout = 10000
  ): Promise<AxiosResponse> {

    const baseUrl = 'http://localhost:5000';
    const currentUser: string | null = localStorage.getItem('currentUser');
    
    if(currentUser) {
      const parsedCurrentUser = JSON.parse(currentUser);
      axios.defaults.headers.common['Authorization'] = `Bearer ${parsedCurrentUser.token}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
    }

    if(!url.startsWith('/')){
      url = '/' + url;
      url = url.trim();
    }

  axios.interceptors.response.use(
    async (response: AxiosResponse) => {
      if(response?.data){
        if(response?.data.token){
          localStorage.setItem('token', response.data.token)
        }
        return response;
      }
      return response
    },
    async (error: AxiosError) => {
      // Handle timeout error
      if(error.code ==='ECONNABORTED'){
        Toast('error', 'The request took too long to complete, please check your network connection.');
        return Promise.reject(new Error('The request took too long to complete.'))
      }
      // Handle other errors
      else if(error?.response?.status === 401){
        Toast('error', 'You are not authorized');
        localStorage.clear();
        window.location.reload();
        return Promise.reject(new Error('You are not authorized.'));
      }

      else if((error?.response?.status as number) >= 400 && (error?.response?.status as number) < 500){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Toast("error", `${(error?.response?.data as any).message as string}`);
        return Promise.reject(new Error('Sorry your request is invalid. please check your request and try again'));
      }

      else if((error?.response?.status as number) >= 500){
        Toast("error", "Sorry your request cannot be processed at this moment please try again later");
        // window.location.reload();
        Promise.reject(new Error('Sorry your request cannot be processed at this moment please try again later'))
      }
      return Promise.reject(error);
    }
  );

  const response = await axios({ 
    method, 
    url: baseUrl + url, 
    data,
    timeout 
  });

  return response;
}