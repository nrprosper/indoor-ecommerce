'use client'

import { useState, useEffect } from 'react';

const CountDown = ({ startDate, endDate }: { startDate: string, endDate: string }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    useEffect(() => {
        const calculateTimeLeft = () => {
            const start = new Date(startDate).getTime();
            const end = new Date(endDate).getTime();
            const now = new Date().getTime();

            if (now < start || now > end) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            const difference = end - now;

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, [startDate, endDate]);

    const padNumber = (num: number) => String(num).padStart(2, '0');

    return (
        <div className="mt-6 pb-6 border-b border-b-th-neutral-300">
            <p className="mb-3 text-th-neutral-500">Offer expires in:</p>
            <div className="flex items-start gap-4">
                {timeUnits.map(({ label, value }) => (
                    <div key={label} className="inline-flex flex-col">
                        <h4 className="text-4xl font-medium p-2 bg-gray-100 transition-all duration-300 ease-in-out">
                            {padNumber(value)}
                        </h4>
                        <span className="text-center text-xs text-gray-500">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountDown;