import PropTypes from 'prop-types';


export const Filter = ({value,changeContact}) => {
    return (
        <label>
             Find contacts by name
            <input 
            type = "text"
            value = {value}
            onChange = {changeContact}
            />
        </label>
    )
}

Filter.propTypes = {
    value : PropTypes.string.isRequired,
    changeContact : PropTypes.func.isRequired,
}