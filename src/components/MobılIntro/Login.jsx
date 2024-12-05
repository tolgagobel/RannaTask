import React from 'react';
import logo from '../../images/Group.png';
import { FaUserPlus, FaKey, FaCompass, FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login_container'>
            <div style={{backgroundColor:'#fff',height:'50%', borderEndEndRadius:'120px'}}>
                <img className="login_logo" src={logo} alt="" />
                <div className='login_select'>
                    <Link to='/register'>
                    <div className='login_select_body'>
                        <div className='loginselect_icon'><FaUserPlus /></div>
                        <span>Sign Up</span>
                    </div>
                    </Link>
                    <Link to='/'>
                    <div className='login_select_body'>
                        <div className='loginselect_icon'><FaKey /></div>
                        <span>Login</span>
                    </div>
                    </Link>
                    <Link to='/'>
                    <div className='login_select_body'>
                        <div className='loginselect_icon'><FaCompass /></div>
                        <span>Browse a Guest</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='login_down_body'>
                <span>You can also connect with:</span>
                <div className='login_down_body_icons'>
                    <FaFacebook className='login_icons' />
                    <FaGoogle className='login_icons' />
                    <FaApple className='login_icons' />
                </div>
                <span style={{ fontSize: '14px', padding: '10px',marginBottom:'20px' }}>
                By continuing to use the application, I accept the
                <a href="#" style={{ color: '#00A69D', textDecoration: 'none' }}>
                <span> </span> Membership Agreement<span> </span>
                </a>
                and the use of my personal information within the scope of the
                <a href="#" style={{ color: '#00A69D', textDecoration: 'none' }}>
                <span> </span>Explicit Consent Text.
                </a>
            </span>

            </div>

        </div>
    );
}

export default Login;
