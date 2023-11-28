'use client';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState, useEffect, useRef } from 'react';
import Courselist from '../../../components/courselist';
import { Item } from '@syncfusion/ej2/splitbuttons';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CoursePage() {
    const [dataFetched, setDataFetched] = useState(false);
    const [data, setData] = useState([]);
    const result = useRef(null);

    useEffect(() => {
        async function getAllCourse() {
            const apiResponse = await fetch('/api/student/courseList', {
                method: 'POST',
                body: JSON.stringify([])
            });
            const resultData = await apiResponse.json();
            if (resultData) {
                console.log('here');
                console.log(resultData);

                console.log(typeof resultData);
                console.log('Item: ' + JSON.stringify(resultData, null, 2));
                console.log(resultData[0].選課代碼);
                result.current = resultData;
                setData(resultData);
                setDataFetched(true);
            }
        }

        if (!dataFetched) {
            getAllCourse();
        }
    }, [dataFetched]);

    return (
        <div className="course">
            <h1><strong>所有課程列表</strong></h1>

            <ul>

                {data.map((course) => (

                    <li key={course.選課代碼}>
                        <ListGroup>
                        <ListGroup.Item><strong>選課代碼:</strong> {course.選課代碼}</ListGroup.Item>
                        <ListGroup.Item><strong>課程名稱:</strong> {course.課程名稱}</ListGroup.Item>
                        <ListGroup.Item><strong>學分:</strong> {course.學分}</ListGroup.Item>
                        <ListGroup.Item><strong>必選修:</strong> {course.必選修}</ListGroup.Item>
                        <ListGroup.Item><strong>上課方式:</strong> {course.上課方式}</ListGroup.Item>
                        <ListGroup.Item><strong>開課班級:</strong> {course.開課班級}</ListGroup.Item>
                        <ListGroup.Item><strong>上課時間:</strong> {course.上課時間}</ListGroup.Item>
                        <ListGroup.Item><strong>上課教室:</strong> {course.上課教室}</ListGroup.Item>
                        <ListGroup.Item><strong>授課教師:</strong> {course.授課教師}</ListGroup.Item>
                        <ListGroup.Item><strong>實收名額:</strong> {course.實收名額}</ListGroup.Item>
                        <ListGroup.Item><strong>開放名額:</strong> {course.開放名額}</ListGroup.Item><br />
                        </ListGroup>
                    </li>
                ))}
            </ul>
        </div>
    );
};
