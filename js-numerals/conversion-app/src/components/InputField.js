const InputField = ({onChange}) => {
    return (
        <div className="form-control">
            <input type='text' onChange={onChange}></input>
        </div>
    )
}

export default InputField;