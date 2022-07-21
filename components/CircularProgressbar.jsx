import React, { useEffect, useState, Component } from "react";
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Progress as CircularProgressbar } from "antd";


export default function AnimatedSkillbar({ text,  value }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= value ? value : prevProgress + 10
            );
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <CircularProgressbar
            percent={progress}
            className="testSvg"
            type="circle"
            trailColor='#252525'
            strokeColor={{
                "0%": "rgba(170, 54, 124, 1)",
                "100%": "rgba(74, 47, 189, 1)",
            }}
            width={200}
            strokeWidth={12}
            format={(t) => text}
        />
    );
}
