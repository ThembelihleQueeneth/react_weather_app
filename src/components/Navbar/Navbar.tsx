import logo from '../../assets/logo.png';
import { Input } from '../Search_Input/Input';
import { CiMenuBurger } from "react-icons/ci";

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-lime-400 m-10 h-20 rounded-full' >
        <div>
            <img src={logo} alt="Logo" className='w-10 ml-10 mt-5' />
        </div>
        <div>
            <Input />
        </div>
        <div>
            <CiMenuBurger className='mr-10 mt-6 w-15'/>

        </div>
    </nav>
  )
}
