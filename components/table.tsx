import React from 'react';
export default function StudentTimetable({ timetableData }) {
    var timetable = []
    const regex = /\((.*?)\)(\d+)-(\d+)/;

    Object.entries(timetableData).map(([key, value]) => {
      const matches = value['上課時間'].match(regex);
      var [dayOfWeek, startTime, endTime] = matches.slice(1);
      startTime = parseInt(startTime, 10)
      endTime = parseInt(endTime, 10)
      for(;endTime-startTime >=0;endTime--) {
        timetable.push({ day: `${dayOfWeek}`, time: `${endTime}`, course: value['課程名稱'] });
      }
    })

    const daysOfWeek = ['一', '二', '三', '四', '五'];
  
    // 生成時間範圍
    const timesOfDay = [];
    for (let i = 1; i <= 14; i++) {
      timesOfDay.push(`${i}`);
    }
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Timetable</h2>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="border px-4 py-2"></th>
              {daysOfWeek.map((day, index) => (
                <th key={index} className="border px-4 py-2 text-base">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timesOfDay.map((time, timeIndex) => (
              <tr key={timeIndex}>
                <td className="border px-3 py-1">{time}</td>
                {daysOfWeek.map((day, index) => (
                  <td key={index} className="border px-4 py-2 text-sm">
                    {timetable.find(item => item.day === day && item.time === time)?.course || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

