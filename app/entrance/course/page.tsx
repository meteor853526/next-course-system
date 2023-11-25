'use client';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react';
import React from 'react';

export default function coursePage() {
    const [searchConditions, setSearchConditions] = useState({
        courseCode: '',
        instructor: '',
        courseName: '',
        dayOfWeek: '',
        timesOfDay: '',
        remainingSeats: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    //const [filteredResults, setFilteredResults] = useState(null);
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setSearchConditions((prevConditions) => ({
            ...prevConditions,
            [name]: type === 'checkbox' ? (checked ? '1' : '') : value,
        }));
    };
    // 重新設定搜尋條件為初始狀態
    const handleResetConditions = () => {
        setSearchConditions({
            courseCode: '',
            instructor: '',
            courseName: '',
            dayOfWeek: '',
            timesOfDay: '',
            remainingSeats: '',
        });

        // 清除錯誤訊息和搜尋結果
        setErrorMessage('');
        setSearchResult(null);
    };

    const handleSearch = async () => {
        // 檢查是否有任何條件輸入
        const hasAnyCondition =
            Object.values(searchConditions).some((condition) => condition !== '');

        if (!hasAnyCondition) {
            setErrorMessage('請輸入條件');
            return;
        }
        console.log('搜尋條件:', searchConditions);
        try {
            // 在這裡發送 API 請求，假設你的後端 API 路徑是 '/api/search'
            const response = await fetch('/api/student/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(searchConditions),
            });

            if (!response.ok) {
                throw new Error('搜尋失敗');
            }

            // 解析後端的回應，這裡假設後端返回 JSON 格式的搜尋結果
            const result = await response.json();

            // 清除錯誤訊息
            setErrorMessage('');
            // 設定搜尋結果
            setSearchResult(result);
            console.log('搜尋結果:', result);

        } catch (error) {
            console.error('搜尋失敗', error);
            setErrorMessage('搜尋失敗，請稍後再試');
        }
    };

    return (
        <div className="container">
            <h1 >課程檢索</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className="search-conditions">
                <label>
                    課程代碼：
                    <input
                        type="text"
                        name="courseCode"
                        value={searchConditions.courseCode}
                        onChange={handleInputChange}
                    />
                </label><br />
                <label>
                    課程名稱：
                    <input
                        type="text"
                        name="courseName"
                        value={searchConditions.courseName}
                        onChange={handleInputChange}
                    />
                </label><br />
                <label>
                    授課教師：
                    <input
                        type="text"
                        name="instructor"
                        value={searchConditions.instructor}
                        onChange={handleInputChange}
                    />
                </label><br />
                <label>
                    星期：
                    <select
                        name="dayOfWeek"
                        value={searchConditions.dayOfWeek}
                        onChange={handleInputChange}
                    >
                        <option value="">不限</option>
                        <option value="(一)">星期一</option>
                        <option value="(二)">星期二</option>
                        <option value="(三)">星期三</option>
                        <option value="(四)">星期四</option>
                        <option value="(五)">星期五</option>
                        {/* 可以根據需求添加其他星期的選項 */}
                    </select>
                </label><br />
                <label>
                    只顯示餘額：
                    <input
                        type="checkbox"
                        name="remainingSeats"
                        checked={searchConditions.remainingSeats === '1'} // Check if the value is '1'
                        onChange={handleInputChange}
                    />

                </label><br />

                {/* 其他條件輸入類似上面的方式添加 */}
            </div>
            <button onClick={handleSearch}>搜尋</button>
            <button onClick={handleResetConditions}>重新輸入條件</button>
            {/* 顯示目前輸入的條件 */}
            {searchResult && searchResult.length > 0 && (
                <div>
                    <h2>搜尋結果：</h2>
                    {searchResult.map((result, index) => (
                        <div key={index}>
                            <p>課程代碼：{result['選課代碼']}</p>
                            <p>課程名稱：{result['課程名稱']}</p>
                            <p>授課教師：{result['授課教師']}</p>
                            <p>上課時間：{result['上課時間']}</p>
                            <p>上課教室：{result['上課教室']}</p>
                            <p>學分：{result['學分']}</p>
                            <p>必選修：{result['必選修']}</p>
                            <p>開課班級：{result['開課班級']}</p>
                            <p>開放名額：{result['開放名額']}</p>
                            <p>實收名額：{result['實收名額']}</p>
                            <button >加選</button>
                            {/* Add more fields as needed */}
                            <hr /> {/* Optional: Add a horizontal line between results */}
                        </div>
                    ))}
                </div>
            )}

            {searchResult && searchResult.length === 0 && (
                <p>沒有符合條件的課程。</p>
            )}

        </div>
    );
};