import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Header = () => (
  <div className='a'>
    <div>
      <img
        className='b'
        src='https://media-exp1.licdn.com/dms/image/C4E0BAQHDS04hGo1kRw/company-logo_200_200/0/1578330451118?e=2159024400&v=beta&t=aIQmT2LBj2pFI8vWJeUud5Sy2xupfve_uOCQeIltmKY'
        alt='logo'
      />
      <button className='btn btn-info'>Enrollments</button>
      <button className='btn btn-secondary'>Events</button>
      <button class='btn btn-secondary'>Reports</button>
    </div>
    <div>
      <div className='ac'>
        <select className='s'>
          <option>Accounts</option>
        </select>
        <p className='w'>Logout</p>
      </div>
      <p className='w'>Welcome VamsiMohan</p>
    </div>
  </div>
)

export default Header