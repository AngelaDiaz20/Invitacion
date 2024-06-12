"use client";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useCountdown from '../../scripts/useCountdown';

const Countdown = ({ targetDate }) => {
  const [isClient, setIsClient] = useState(false);
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="countdown px-3 width-container">
      <div className="countdown-item">
        <span className="countdown-time text-[35px] md:text-[70px]">{String(days).padStart(2, '0')}</span>
        <span className="countdown-label ">Días</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-time text-[35px] md:text-[70px]">{String(hours).padStart(2, '0')}</span>
        <span className="countdown-label">Horas</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-time text-[35px] md:text-[70px]">{String(minutes).padStart(2, '0')}</span>
        <span className="countdown-label">Minutos</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-time text-[35px] md:text-[70px]">{String(seconds).padStart(2, '0')}</span>
        <span className="countdown-label">Segundos</span>
      </div>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.string.isRequired,
};

export default Countdown;