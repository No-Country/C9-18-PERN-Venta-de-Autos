import React from 'react';
import svgs from '../assets/svg/svgs';

const Navbar = () => {
  return (
    <>

      <nav className='navbar' style={{ background: '#3A9EFD' }}>
        <div className='container-fluid d-flex justify-content-around'>

          <div className='row'>
            <div class="col mx-5 text-center">
              <div><h3 className='fw-bold'>AUTOSUSADOS.COM</h3></div>
            </div>

            <div class="col mx-5 text-center">
              <div>
                <input type="text" className='rounded' style={{ width: "30vw", height: "6vh", border: '2px solid #f0f0f0' }} />
              </div>
            </div>

            <div class="col mx-5 text-center ">
              <div className='my-auto d-block'>
                <h4><a>Login </a>/ <a> Register</a> </h4>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;