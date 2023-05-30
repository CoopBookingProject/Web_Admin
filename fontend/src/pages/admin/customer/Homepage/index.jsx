import React, { useEffect, useState } from "react";
import { Get, Post, Update, Delete } from "@service/http";
import { Col, Row, Calendar, theme } from 'antd';
import Logokenko1 from '../../../../pic/Logokenko1.png';
import Book from '../../../../pic/Book.png';
import Massage from '../../../../pic/Massage.png';
import Admin from '../../../../pic/Admin.png';

const List = () => {
    const [data, setDate] = useState("");

    const onGetData = async () => {
        let result = await Get(`user`);
        if (result.status == 200) {
            setDate(result.data);
        } else {
            console.log(result.data.error);
        }
    };

    const onPostData = async () => {
        let result = await Post(`user`, data);
        if (result.status == 201) {
            console.log("Create Complete");
        } else {
            console.log(result.data.error);
        }
    };

    const onUpdateDate = async (data, id) => {
        let result = await Update(`user/${id}`, data);
        if (result.status == 200) {
            console.log("Update Complete");
        } else {
            console.log(result.data.error);
        }
    };

    const onDeleteDate = async (data, id) => {
        let result = await Delete(`user/${id}`);
        if (result.status == 200) {
            console.log("Delete Complete");
        } else {
            console.log(result.data.error);
        }
    };

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const App = () => {
        const { token } = theme.useToken();
        const wrapperStyle = {
            width: 300,
            border: `1px solid ${token.colorBorderSecondary}`,
            borderRadius: token.borderRadiusLG,
        };

    };

    return (
        <>
            <h1 style={{ marginLeft: '160px', marginTop: '10px' }}>หน้าแรก</h1>

            <div style={{ backgroundColor: '#C2D9BD', marginLeft: '160px', width: '1040px', height: '190px', borderRadius: '25px', marginTop: '-10px' }}>
                <>
                    <img src={Logokenko1} style={{ width: "750px", height: "350px", marginLeft: '140px', marginTop: '-77px' }} />
                </>
            </div>

            <div style={{ backgroundColor: '#C2D9BD', marginLeft: '160px', width: '334px', height: '70px', borderRadius: '50px', marginTop: '20px' }}>
                <>
                    <div style={{ marginRight: '20px' }}>
                        <img src={Book} style={{ width: "50px", height: "50px", marginLeft: '50px', marginTop: '10px' }} />
                        <div style={{ marginLeft: '130px', fontSize: '30px', marginTop: '-52px' }}>
                            จองคิว
                        </div>
                    </div>
                </>
                <div style={{ backgroundColor: '#C2D9BD', marginLeft: '355px', width: '334px', height: '70px', borderRadius: '50px', marginTop: '-60px' }}>
                    <>
                        <div style={{ marginRight: '20px' }}>
                            <img src={Massage} style={{ width: "50px", height: "50px", marginLeft: '50px', marginTop: '10px' }} />
                            <div style={{ marginLeft: '130px', fontSize: '30px', marginTop: '-52px' }}>
                                ผู้นวด
                            </div>
                        </div>
                    </>
                </div>
                <div style={{ backgroundColor: '#C2D9BD', marginLeft: '710px', width: '334px', height: '70px', borderRadius: '50px', marginTop: '-70px' }}>
                    <>
                        <div style={{ marginRight: '20px' }}>
                            <img src={Admin} style={{ width: "50px", height: "50px", marginLeft: '50px', marginTop: '10px' }} />
                            <div style={{ marginLeft: '130px', fontSize: '30px', marginTop: '-52px' }}>
                                แอดมิน
                            </div>
                        </div>
                    </>
                </div>
            </div>

            <div style={{ backgroundColor: '#C2D9BD', marginLeft: '160px', width: '334px', height: '340px', borderRadius: '20px', marginTop: '20px' }}>
                <div style={{ width: '300px', marginLeft: '8px', padding: '10px' }}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
                <div style={{ backgroundColor: '#C2D9BD', marginLeft: '360px', width: '685px', height: '340px', borderRadius: '50px', marginTop: '-340px' }}>
                    <div style={{ marginLeft: '280px', paddingTop: '20px', fontSize: '20px' }}>
                        Job to done
                    </div>

                    <div style={{ backgroundColor: '#ffffff', marginLeft: '70px', width: '550px', height: '60px', borderRadius: '15px', marginTop: '30px' }}>
                        <div style={{ fontSize: '40px', color: '#5C7042', marginLeft: '40px' }}>
                            <div> ● </div>
                            <div style={{ marginTop: '-45px', marginLeft: '50px', color: '#BEBEBE', fontSize: '20px' }}>
                                ลูกค้าเข้าใช้บริการวันที่ 25 พ.ค.66
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#ffffff', marginLeft: '70px', width: '550px', height: '60px', borderRadius: '15px', marginTop: '20px' }}>
                        <div style={{ fontSize: '40px', color: '#5C7042', marginLeft: '40px' }}>
                            <div> ● </div>
                            <div style={{ marginTop: '-45px', marginLeft: '50px', color: '#BEBEBE', fontSize: '20px' }}>
                                ลูกค้าเข้าใช้บริการวันที่ 27 พ.ค.66
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#ffffff', marginLeft: '70px', width: '550px', height: '60px', borderRadius: '15px', marginTop: '20px' }}>
                        <div style={{ fontSize: '40px', color: '#5C7042', marginLeft: '40px' }}>
                            <div> ● </div>
                            <div style={{ marginTop: '-45px', marginLeft: '50px', color: '#BEBEBE', fontSize: '20px' }}>
                                ลูกค้าเข้าใช้บริการวันที่ 3 มิ.ย.66
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );

};

export default List;