import React from 'react';
import './Panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Chart from 'react-apexcharts';

function CompactCard({ param, setExpanded }) {
    const { png: PngIcon, barValue, value, color } = param;

    return (
        <motion.div
            className="CompactCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow,
            }}
            onClick={setExpanded}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <div className="bar">
                <CircularProgressbar value={barValue} text={`${barValue}%`} />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <FontAwesomeIcon icon={PngIcon} style={{ fontSize: '1.5rem' }} />
                <span>${value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
}

function ExpandedCard({ param, setExpanded }) {
    const { png: PngIcon, barValue, value, color, series, title } = param;

    const text = {
        options: {
            chart: {
                type: 'area',
                height: 'auto',
            },
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35,
            },
            fill: {
                colors: ['#fff'],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: ['white'],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-09-19T00:00:00.000Z',
                    '2018-09-19T01:30:00.000Z',
                    '2018-09-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-09-19T04:30:00.000Z',
                    '2018-09-19T05:30:00.000Z',
                    '2018-09-19T06:30:00.000Z',
                ],
                labels: {
                    style: {
                        colors: '#fff',
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#fff',
                    },
                },
            },
        },
    };

    return (
        <motion.div
            className="expandedCard"
            style={{
                background: color.backGround,
                boxShadow: color.boxShadow,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ alignSelf: 'flex-end', color: 'white', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faTimes} onClick={setExpanded} />
            </div>
            <span>{title}</span>
            <div className="chartContainer">
                <Chart series={series} options={text.options} type='area' />
            </div>
            <span className='time'> Last 24 hours</span>
        </motion.div>
    );
}

function Panel(props) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="Panel">
            <LayoutGroup>
                <AnimatePresence>
                    {expanded ? (
                        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} key="expanded" />
                    ) : (
                        <CompactCard param={props} setExpanded={() => setExpanded(true)} key="compact" />
                    )}
                </AnimatePresence>
            </LayoutGroup>
        </div>
    );
}

export default Panel;
