import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-5 pt-5'>
       <CDBFooter className="shadow bg-secodary">
          <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: '80%' }}
          >
            <CDBBox display="flex" alignItems="center">
              <div href="/" className="d-flex align-items-center p-0 text-dark">
                <Link className='text-decoration-none text-dark' to='/'><div className='fw-semibold'><FaCode></FaCode> Skill <span className='bg-dark text-light p-1 rounded'>Nation</span></div></Link>
                  <span className="ml-4 h5 mb-0 font-weight-bold"></span>
              </div>
            </CDBBox>
            <CDBBox>
              <small className="ml-2">&copy; SkillNation, 2022. All rights reserved.</small>
            </CDBBox>
            <CDBBox display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBFooter>
    </div>
  );
};

export default Footer;