import PropTypes from "prop-types";
import className from 'classnames';

const finalClassName = className('px-1.5', {
    'bg-blue-500': true,
    'text-yellow-500': false,
});
console.log(finalClassName);

const Button = ({children, primary, secondary, success, warning, danger, outline, rounded, ...rest}) => {
    // console.log(rest);

    const classes = className('flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'text-blue-500': outline && primary,
    });

    return (
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: (props) => {
        console.log(props);
    },
};

export default Button;