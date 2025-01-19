import { useState } from 'react';

const Button = ({ text, spanText, color }) => {
  const [hover, setHover] = useState(false);

  const COLORS = {
    cyan_300: 'hsl(192 90 77)',
    cyan_600: 'hsl(192 37 48)',
    cyan_hovered: 'hsl(192 54 64)',
    purple_300: 'hsl(268 100 86)',
    purple_600: 'hsl(268 34 53)',
    purple_hovered: 'hsl(268 51 71)',
    white: 'hsl(0 0 98)',
  };

  const wrapperStyle = {
    width: 'fit-content',
    fontFamily: 'Red Hat Display',
    fontWeight: 900,
    fontSize: `${18 / 16}rem`,
    lineHeight: 1.5,
    letterSpacing: '0px',
    color: COLORS.white,
    border: 'none',
    padding: '16px 40px',
    borderRadius: '30px',
    cursor: 'pointer',
    background: '',
  };

  const spanStyle = {
    color: '',
  };

  if (color === 'blue') {
    wrapperStyle.background = COLORS.cyan_600;
    wrapperStyle.background = hover ? COLORS.cyan_hovered : COLORS.cyan_600;
    spanStyle.color = COLORS.cyan_300;
  } else if (color === 'purple') {
    wrapperStyle.background = COLORS.purple_600;
    wrapperStyle.background = hover ? COLORS.purple_hovered : COLORS.purple_600;
    spanStyle.color = COLORS.purple_300;
  } else {
    throw new Error('missing or invalid color prop in Button component');
  }

  return (
    <button style={wrapperStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <p>
        {text} <span style={spanStyle}>{spanText}</span>
      </p>
    </button>
  );
};

export default Button;
