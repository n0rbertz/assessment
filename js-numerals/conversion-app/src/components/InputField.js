const InputField = ({onChange}) => {
    return (
        <div className="form-control">
            <input type='text' onChange={onChange} maxLength={"15"} minLength={"1"}></input>
        </div>
    )
}

export default InputField;