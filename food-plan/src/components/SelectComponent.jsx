import OptionComponent from "./OptionComponent";
function SelectComponent({
    options,
    name,
    label,
    onChange /* defaultValue */,
    value,
}) {
    const selectOptions = options.map((option, index) => (
        <OptionComponent
            key={index}
            value={option.value}
            label={option.label}
        />
    ));

    const onChangeHandler = (event) => onChange(event.target.value);

    return (
        <>
            <div className="select-wrapper">
                <label>
                    {label}
                    <select
                        name={name}
                        onChange={onChangeHandler}
                        /* defaultValue={defaultValue} */
                        value={value}
                    >
                        {selectOptions}
                    </select>
                </label>
            </div>
        </>
    );
}

export default SelectComponent;
