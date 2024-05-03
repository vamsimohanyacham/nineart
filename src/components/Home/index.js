import {Component} from 'react'
import Header from '../Header'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

class Home extends Component {
  state = {
    checkin: true,
  }

  ch = () => {
    this.setState(prevState => ({
      checkin: false,
    }))
  }

  las = () => {
    this.setState(prevState => ({
      checkin: true,
    }))
  }

  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    const {checkin} = this.state
    return (
      <div>
        {checkin ? (
          <>
            <Header />
            <div className='ha'>
              <h4>Enrollment Management</h4>
              <div>
                <button className='btn btn-light mr'>Active</button>
                <button className='btn btn-info'>Completed</button>

                <button className='btn btn-transparent mr' onClick={this.ch}>
                  New Employment
                </button>
              </div>
            </div>
            <div className='hv'>
              <p>Filters: none</p>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div>
              <table border='1' className='spaced-table mr'>
                <thead>
                  <tr>
                    <th className='small-head'>Patient Name</th>
                    <th className='small-head'>Status</th>
                    <th className='small-head'>Enrollment type</th>
                    <th className='small-head'>Device ID</th>
                    <th className='small-head'>Start Date</th>
                    <th className='small-head'>End Date</th>
                    <th className='small-head'>Remaning time</th>
                    <th className='small-head'>Provider</th>
                    <th className='small-head'>Location</th>
                    <th className='small-head'>Primary Indication</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>VamsiMohan</td>
                    <td>Active</td>
                    <td>30 Dec MCT</td>
                    <td>2015468974</td>
                    <td>
                      2020/15/4 <br /> 1:30PM
                    </td>
                    <td>
                      2025/12/4 <br /> 10:30PM
                    </td>
                    <td>27 Days</td>
                    <td>Subman Gill</td>
                    <td>
                      Costal institute <br />
                      of Engineering
                    </td>
                    <td>Palipitation</td>
                  </tr>
                  <tr>
                    <td>Kondalarao</td>
                    <td>Active</td>
                    <td>45 Dec MCT</td>
                    <td>20112546974</td>
                    <td>
                      2022/11/4 <br /> 1:30PM
                    </td>
                    <td>
                      2022/12/4 <br /> 10:30PM
                    </td>
                    <td>20 Days</td>
                    <td>ViratKholi</td>
                    <td>
                      Costal institute <br />
                      of Engineering
                    </td>
                    <td>Palipitation</td>
                  </tr>
                  <tr>
                    <td>Rani</td>
                    <td>Active</td>
                    <td>10 Dec MCT</td>
                    <td>2015468974</td>
                    <td>
                      2020/10/6 <br /> 1:30PM
                    </td>
                    <td>
                      2027/14/4 <br /> 10:30PM
                    </td>
                    <td>17 Days</td>
                    <td>Dhoni</td>
                    <td>
                      Costal institute <br />
                      of Engineering
                    </td>
                    <td>Palipitation</td>
                  </tr>
                  <tr>
                    <td>Dhoni</td>
                    <td>Active</td>
                    <td>32 Dec MCT</td>
                    <td>2015468414</td>
                    <td>
                      2020/15/4 <br /> 7:30PM
                    </td>
                    <td>
                      2025/12/4 <br /> 18:30PM
                    </td>
                    <td>47 Days</td>
                    <td>Rink sing</td>
                    <td>
                      Costal institute <br />
                      of Engineering
                    </td>
                    <td>Palipitation</td>
                  </tr>
                  <tr>
                    <td>Pant</td>
                    <td>Active</td>
                    <td>37 Dec MCT</td>
                    <td>20154689125</td>
                    <td>
                      2027/15/4 <br /> 6:12PM
                    </td>
                    <td>
                      2015/17/4 <br /> 7:30PM
                    </td>
                    <td>77 Days</td>
                    <td>Subman Gill</td>
                    <td>
                      Costal institute <br />
                      of Engineering
                    </td>
                    <td>Palipitation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='tee'>
              <div className='te hve'>
                <select className='vv pl '>
                  <option>10</option>
                </select>
                <p className='pl '> Items per page.</p>
                <p>Total Pages: 10</p>
              </div>
              <div className='slider-container'>
                <Slider {...settings}>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                </Slider>
              </div>
            </div>
            <div className='aab w'>
              <div className='las'>
                <div>
                  <div>
                    <div className='aaaa'>
                      <p className='ins'>Enrollments </p>
                      <hr className='custom-hr' />
                      <p className='ins'>Events</p>
                      <hr className='custom-hr' />
                      <p className='inss'>Reports</p>
                    </div>
                    <div className='aaaa'>
                      <p className='mrr mrv'>
                        copyright @2017 ZYWIE.inc.ptd All rights reserved.
                      </p>
                      <p className='mrr'>Terms of Use</p>
                      <p className='mrr'>Privacy Policy</p>
                      <p>System Status</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p>+019874563215</p>
                  <p>Vamsimohan@gmail.com</p>
                </div>
              </div>
            </div>{' '}
          </>
        ) : (
          <div>
            <Header />
            <div className='nb'>
              <div className='na'>
                <h4>New Enrollment</h4>
                <p>* Required</p>
              </div>
              <div className='p-3 nd'>
                <div className='pb-3'>
                  <label className='nm1'>Select Clinic*</label>
                  <select placeHolder='select Clinic' className='sc'>
                    <option value='' disabled selected>
                      Select Clinic*
                    </option>
                  </select>
                </div>
                <div className='pb-3'>
                  <label className='nm2'>Select Device*</label>
                  <select placeHolder='select Clinic' className='sc'>
                    <option value='' disabled selected>
                      First select a Clinic*
                    </option>
                  </select>
                </div>
                <div>
                  <div>
                    <label>Enrollment Type*</label>
                    <select placeHolder='select Clinic' className='sc'>
                      <option value='' disabled selected>
                        Select Clinic*
                      </option>
                    </select>
                    <button className='btn btn-info bi'>+</button>
                    <p className='nmr'>Dual Modirity criteria</p>
                  </div>
                </div>
                <label className='p-3'>Enter Patient Info*</label>
                <div className='nbm'>
                  <div>
                    <label className='nm3'>Last Name*</label>
                    <input type='text' placeHolder='lastname*' />
                    <label className='m-2'>First Name*</label>
                    <input type='text' placeHolder='firstname*' />
                    <label className='m-2'>Middle*</label>
                    <input type='text' placeHolder='Middle' />
                  </div>
                  <div>
                    <label className='p-2'>Date of Birth*</label>
                    <input type='text' placeHolder='mm-dd-yyyy*' />
                  </div>
                  <div>
                    <label className='nm4'>Gender*</label>
                    <label className='m-2'>Male</label>
                    <input type='radio' name='s' />
                    <label className='m-2'>Female</label>
                    <input type='radio' name='s' />
                    <label className='mrh'>Has Pacemaker*</label>
                    <label className='m-2'>N/A</label>
                    <input type='radio' name='ss' />
                    <label className='m-2'>Yes</label>
                    <input type='radio' name='ss' />
                    <label className='m-2'>No</label>
                    <input type='radio' name='ss' />
                    <label className='mrh'>ICD*</label>
                    <label className='m-2'>N/A</label>
                    <input type='radio' name='sss' />
                    <label className='m-2'>Yes</label>
                    <input type='radio' name='sss' />
                    <label className='m-2'>No</label>
                    <input type='radio' name='sss' />
                  </div>
                  <div>
                    <label className='nm5'>Adress line1*</label>
                    <input type='text' placeHolder='adress line1' />
                  </div>
                  <div>
                    <label className='nm5'>Adress line2*</label>
                    <input type='text' placeHolder='adress line2' />
                  </div>
                  <div>
                    <label className='mrh'>City*</label>
                    <input type='text' placeHolder='lastname*' />
                    <label className='m-2'>State*</label>
                    <input type='text' placeHolder='firstname*' />
                    <label className='m-2'>Zip*</label>
                    <input type='text' placeHolder='Middle' />
                    <button>USA</button>
                  </div>
                  <div>
                    <label>Primary Phone*</label>
                    <input type='text' placeHolder='Primary phone*' />
                    <select placeHolder='select Clinic' className='scc'>
                      <option value='' disabled selected>
                        Mobile*
                      </option>
                    </select>
                    <label className='mrh'>Secondary Phone*</label>
                    <input type='text' placeHolder='Secondary phone*' />
                    <select placeHolder='select Clinic' className='scc'>
                      <option value='' disabled selected>
                        Mobile*
                      </option>
                    </select>
                  </div>
                  <div>
                    <label>Enter Emergency Contact info*</label>
                    <button className='btn btn-info bi'>+</button>
                  </div>
                </div>
              </div>
              <div className='pb-3'>
                <label className='nh2'>Ordering Provider*</label>
                <select placeHolder='select Clinic' className='sc'>
                  <option value='' disabled selected>
                    Select Clinic*
                  </option>
                </select>
              </div>
              <div className='pb-3'>
                <label className='nh3'>Reading Provider*</label>
                <select placeHolder='select Clinic' className='sc'>
                  <option value='' disabled selected>
                    First select a Clinic*
                  </option>
                </select>
                <div>
                  <label className='nh1'>Refering Provider*</label>
                  <input type='text' placeHolder='lastname*' />
                </div>
                <div className='lastk'>
                  <button className='btn btn-danger' onClick={this.las}>
                    Cancel
                  </button>
                  <button className='btn btn-primary' onClick={this.las}>
                    Verify Enrollment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home

