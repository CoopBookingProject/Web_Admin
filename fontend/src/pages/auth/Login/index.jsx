import Loginmassage from '../../../pic/Loginmassage.jpg';
import Logokenko1 from '../../../pic/Logokenko1.png';
import { Input } from 'antd';
const Login = () => {
    return (
        <>
            <div>
                <>
                    <div className="Loginmassage">
                        <div style={{ marginLeft: '230px', paddingTop: '50px' }}>
                            <div style={{ backgroundColor: '#C2D9BD', width: '480px', height: '650px', borderRadius: '30px' }}>

                                <div>
                                    <img src={Logokenko1} style={{ width: "390px", height: "170px", marginLeft: '50px', marginTop: '35px' }} />
                                </div>

                                <h6 style={{ marginLeft: '210px', fontSize: '20px', marginTop: '-20px' }}>
                                    เข้าสู่ระบบ
                                </h6>

                                <div style={{ fontSize: '13px', marginTop: '-20px', marginLeft: '75px' }}>
                                    ชื่อบัญชีผู้ใช้
                                </div>

                                <div style={{ width: '350px', borderRadius: '48px', marginLeft: '70px', marginTop: '10px' }}>
                                    <Input style={{ height: '50px', borderRadius: '48px' }} placeholder="" />
                                </div>

                                <div style={{ fontSize: '13px', marginLeft: '75px', marginTop: '15px' }}>
                                    รหัสผ่าน
                                </div>

                                <div style={{ width: '350px', borderRadius: '48px', marginLeft: '70px', marginTop: '10px' }}>
                                    <Input style={{ height: '50px', borderRadius: '48px' }} placeholder="" />
                                </div>

                                <div style={{ fontSize: '13px', marginLeft: '350px', marginTop: '20px' }}>
                                    ลืมรหัสผ่าน
                                </div>

                                <div style={{ backgroundColor: '#617A55', marginLeft: '70px', width: '350px', height: '50px', borderRadius: '48px', marginTop: '40px' }}>
                                    <div style={{ marginLeft: '130px', padding: '10px', color: '#ffffff', fontSize: '20px' }}>
                                        เข้าสู่ระบบ
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            </div>

        </>
    );
};

export default Login;

