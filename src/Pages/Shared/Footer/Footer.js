import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-5 fixed-bottom'>
       <CDBFooter className="shadow bg-dark">
          <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-3 flex-wrap"
            style={{ width: '80%' }}
          >
            <CDBBox display="flex" alignItems="center">
              <div href="/" className="d-flex align-items-center p-0 text-light">
                <Link className='text-decoration-none text-light' to='/'><div className='fw-semibold'><FaCode></FaCode> Skill <span className='bg-light text-dark p-1 rounded'>Nation</span></div></Link>
                  <span className="ml-4 h5 mb-0 font-weight-bold"></span>
              </div>
            </CDBBox>
            <CDBBox>
              <small className="ml-2 text-light fw-semibold">&copy; SkillNation, 2022. All rights reserved.</small>
            </CDBBox>
            <CDBBox display="flex">
              <CDBBtn flat color="light" className="p-1">
                <CDBIcon className='text-dark' fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="light" className="mx-3 p-1">
                <CDBIcon className='text-dark' fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="light" className="p-1">
                <CDBIcon className='text-dark' fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBFooter>
    </div>
  );
};

export default Footer;