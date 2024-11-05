import React, { useState, useEffect } from 'react';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const Calendar = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [days, setDays] = useState([]);
    const currentDate = new Date(); // Get the current date

    useEffect(() => {
        renderCalendar(currentMonth, currentYear);
    }, [currentMonth, currentYear]);

    const renderCalendar = (month, year) => {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const tempDays = [];

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            tempDays.push(null);
        }

        // Add actual days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            tempDays.push(day);
        }

        setDays(tempDays);
    };

    const handleMonthChange = (direction) => {
        if (direction === 'prev') {
            if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear((prevYear) => prevYear - 1);
            } else {
                setCurrentMonth((prevMonth) => prevMonth - 1);
            }
        } else {
            if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear((prevYear) => prevYear + 1);
            } else {
                setCurrentMonth((prevMonth) => prevMonth + 1);
            }
        }
    };

    return (
        <div className="w-80 bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => handleMonthChange('prev')}
                    className="text-gray-600 hover:text-gray-800 text-xl"
                >
                    &lt;
                </button>
                <span className="font-semibold">
                    {monthNames[currentMonth]} {currentYear}
                </span>
                <button
                    onClick={() => handleMonthChange('next')}
                    className="text-gray-600 hover:text-gray-800 text-xl"
                >
                    &gt;
                </button>
            </div>
            <div className="grid grid-cols-7 text-center font-semibold text-gray-700 mb-2">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className="grid grid-cols-7 gap-y-1">
                {days.map((day, index) => {
                    const isToday = day === currentDate.getDate() &&
                        currentMonth === currentDate.getMonth() &&
                        currentYear === currentDate.getFullYear();

                    return (
                        <div
                            key={index}
                            className={`h-10 w-full flex items-center justify-center hover:bg-slate-300 hover:text-white ${isToday ? 'bg-slate-300 text-white' : (day ? 'text-black' : 'text-transparent')
                                } rounded-full`}
                        >
                            {day || ""}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
