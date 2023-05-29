import React, { useEffect, useState } from "react";
import { Get, Post, Update, Delete } from "@service/http";
import { Col, Row } from 'antd';
import Logokenko from '../../../../pic/Logokenko.png';
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

    return (
        <>
            <h1 style={{ marginLeft: '160px',marginTop:'-10px' }}>หน้าแรก</h1>

            <div style={{ backgroundColor: '#C2D9BD',marginLeft:'160px',width:'1040px',height:'220px',borderRadius:'25px'}}>
                <>
                <img src={Logokenko} style={{ width: "750px", height: "400px", marginLeft: '140px',marginTop:'-85px' }} />
                </>
            </div>

            <div style={{ backgroundColor: '#C2D9BD',marginLeft:'160px',width:'334px',height:'90px',borderRadius:'50px',marginTop:'10px'}}>
                <>
                <div style={{ backgroundColor: '#C2D9BD',marginLeft:'355px',width:'334px',height:'90px',borderRadius:'50px',marginTop:'10px'}}>
                <>
                <div style={{ backgroundColor: '#C2D9BD',marginLeft:'355px',width:'334px',height:'90px',borderRadius:'50px',marginTop:'10px'}}>
                <>
                </>
            </div>
                </>
            </div>
                </>
            </div>

            
        </>
    );

};

export default List;