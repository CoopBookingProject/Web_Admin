import { Link } from 'react-router-dom';
import Tel from '../../../pic/Tel.png';
import { Input } from 'antd';

const ForgotPassword = () => {
  return (
    <>
      <Link to="/">
        <div style={{ backgroundColor: '#617A55', width: '82px', height: '82px', borderRadius: '24px', marginTop: '40px', marginLeft: '41px' }}></div>
        <div style={{ backgroundColor: '#D9D9D9', width: '15px', height: '73.08px', borderRadius: '10px', marginTop: '-76px', marginLeft: '75px', transform: 'rotate(-45deg)' }}></div>
        <div style={{ backgroundColor: '#D9D9D9', width: '15px', height: '73.08px', borderRadius: '10px', marginTop: '-73px', marginLeft: '74px', transform: 'rotate(45deg)' }}></div>
      </Link>

      <h1 style={{ marginLeft: '590px', fontSize: '56px', marginTop: '-78px' }}>ลืมรหัสผ่าน</h1>


      <div style={{ backgroundColor: '#C2D9BD', width: '306px', height: '254px', borderRadius: '56px', marginLeft: '567px', marginTop: '-20px' }}>
        <img src={Tel} style={{ width: "215px", height: "219px", marginLeft: '50px', marginTop: '17px' }} />
      </div>

      <div style={{ marginLeft: '535px', marginTop: '30px', fontSize: '16px' }}>
        ป้อนเบอร์โทรศัพท์ที่เชื่อมโยงกับบัญชีของคุณและส่งเบอร์
      </div>
      <div style={{ marginLeft: '550px', fontSize: '16px' }}>
        โทรศัพท์พร้อมคำแนะนำในการรีเซ็ตรหัสผ่านของคุณ
      </div>
      <div style={{ marginLeft: '530px', fontSize: '16px', marginTop: '20px' }}>
        เบอร์โทร
      </div>

      <div style={{ width: '387px', marginLeft: '525px', marginTop: '10px' }}>
        <Input style={{ height: '68px', borderRadius: '48px', backgroundColor: '#C2D9BD' }} placeholder="" />
      </div>

      
        <div style={{ backgroundColor: '#617A55', marginLeft: '630px', width: '184px', height: '68px', borderRadius: '48px', marginTop: '60px' }}>
        <Link to="Otp"><div style={{ marginLeft: '50px', padding: '15px', color: '#ffffff', fontSize: '24px' }}>
            บันทึก
          </div>
        </Link>
        </div>
      
    </>
  );
};

export default ForgotPassword;