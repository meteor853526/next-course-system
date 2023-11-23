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

        // 檢查星期和時段的條件
        const hasDayOfWeekCondition = searchConditions.dayOfWeek !== '';
        const hasTimesOfDayCondition = searchConditions.timesOfDay !== '';
        if ((hasDayOfWeekCondition && !hasTimesOfDayCondition) || (!hasDayOfWeekCondition && hasTimesOfDayCondition)) {
            // 星期和時段必須同時輸入或都不輸入
            setErrorMessage('請完整輸入星期和時段');
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
        } catch (error) {
            console.error('搜尋失敗', error);
            setErrorMessage('搜尋失敗，請稍後再試');
        }
    };

    return (
        <div className="container">
            <h1>課程檢索</h1>
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
                </label>
                <label>
                    課程名稱：
                    <input
                        type="text"
                        name="courseName"
                        value={searchConditions.courseName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    授課教師：
                    <input
                        type="text"
                        name="instructor"
                        value={searchConditions.instructor}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    星期：
                    <select
                        name="dayOfWeek"
                        value={searchConditions.dayOfWeek}
                        onChange={handleInputChange}
                    >
                        <option value="">不限</option>
                        <option value="一">星期一</option>
                        <option value="二">星期二</option>
                        <option value="三">星期三</option>
                        <option value="四">星期四</option>
                        <option value="五">星期五</option>
                        {/* 可以根據需求添加其他星期的選項 */}
                    </select>
                </label>
                <label>
                    時段：
                    <select
                        name="timesOfDay"
                        value={searchConditions.timesOfDay}
                        onChange={handleInputChange}
                    >
                        <option value="">不限</option>
                        <option value="1">1 (8:10-9:00)</option>
                        <option value="2">2 (9:10-10:00)</option>
                        <option value="3">3 (10:10-11:00)</option>
                        <option value="4">4 (11:10-12:00)</option>
                        <option value="5">5 (12:10-13:00)</option>
                        <option value="6">6 (13:10-14:00)</option>
                        <option value="7">7 (14:10-15:00)</option>
                        <option value="8">8 (15:10-16:00)</option>
                        <option value="9">8 (16:10-17:00)</option>
                        <option value="10">10 (17:10-18:00)</option>
                        <option value="11">11 (18:30-19:20)</option>
                        <option value="12">12 (19:25-20:25)</option>
                        <option value="13">13 (20:25-21:15)</option>
                        <option value="14">14 (21:20-22:10)</option>
                        {/* 可以根據需求添加其他時段的選項 */}
                    </select>
                </label>
                <label>
                    只顯示餘額：
                    <input
                        type="checkbox"
                        name="remainingSeats"
                        checked={searchConditions.remainingSeats === '1'} // Check if the value is '1'
                        onChange={handleInputChange}
                    />

                </label>

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