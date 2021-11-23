import { useState } from 'react';

// CSS
import './button.css'

const Button = ({ children, variant, onClick, btnColor = '#ff4654', labelColor, disabled, btnStyle, ...props }) => {
    const [isHover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!isHover);
    };

    const commonStyles = {
        backgroundColor: btnColor,
        color: labelColor || 'white'
    };

    const disabledStyle = {
        cursor: 'default',
        backgroundColor: btnColor,
        color: labelColor || 'white',
        opacity: 0.4
    };

    return (
        <div>
            <button
                style={

                    disabled ? { ...commonStyles, ...disabledStyle, ...btnStyle } :
                        { ...commonStyles, ...btnStyle }
                }
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                {...props}
                type="button"
                onClick={
                    !disabled ? onClick :
                        () => { }
                }
                className={variant === "primary" ? "btn-primary" : "btn-secondary"}
            >
                <span>{children || 'button'}</span>
            </button>
        </div>
    );
};

export default Button;