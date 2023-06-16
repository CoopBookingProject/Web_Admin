import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import Tel from '../../../pic/Tel.png';
import { Input } from 'antd';
export default function App() {
    const [otp, setOtp] = useState('');

    return (

        <div>
            <div>
                <Link to="/Forgotpassword">
                    <div style={{ backgroundColor: '#617A55', width: '82px', height: '82px', borderRadius: '24px', marginTop: '40px', marginLeft: '41px' }}></div>
                    <div style={{ backgroundColor: '#D9D9D9', width: '15px', height: '52.84px', borderRadius: '10px', marginTop: '-55px', marginLeft: '72px', transform: 'rotate(-45deg)' }}></div>
                    <div style={{ backgroundColor: '#D9D9D9', width: '15px', height: '52.84px', borderRadius: '10px', marginTop: '-80px', marginLeft: '72px', transform: 'rotate(45deg)' }}></div>
                </Link>
            </div>

            <h1 style={{ marginLeft: '590px', fontSize: '56px', marginTop: '-52px' }}>ลืมรหัสผ่าน</h1>

            <div style={{ backgroundColor: '#C2D9BD', width: '306px', height: '254px', borderRadius: '56px', marginLeft: '567px', marginTop: '-20px' }}>
                <img src={Tel} style={{ width: "215px", height: "219px", marginLeft: '50px', marginTop: '17px' }} />
            </div>

            <div style={{ marginLeft: '440px', marginTop: '60px' }}>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{ width: '80px', height: '80px', fontSize: '36px',borderRadius:'24px',backgroundColor:'#C2D9BD',borderColor:'green'}}
                />
            </div>

            <div style={{ backgroundColor: '#617A55', marginLeft: '630px', width: '184px', height: '68px', borderRadius: '48px', marginTop: '60px' }}>
                <Link to="/Createnewpassword"><div style={{ marginLeft: '50px', padding: '15px', color: '#ffffff', fontSize: '24px' }}>
                    บันทึก
                </div>
                </Link>
            </div>

        </div>
    );
}