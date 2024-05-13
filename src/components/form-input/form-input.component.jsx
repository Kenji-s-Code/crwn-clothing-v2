import "./form-input.style.scss";

const FormInput = ({ label, ...otherProps }) => {
	return (
		<div className='group'>
			<input className='form-input' {...otherProps} />
			{label && (
				<label
					className={`${
						otherProps.value.length ? "shrink" : ""
					} form-iput-label`}
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
