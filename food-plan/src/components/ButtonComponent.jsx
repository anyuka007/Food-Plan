function ButtonComponent({ label, onClickHandler, className }) {
    return (
        <button className={className} onClick={onClickHandler}>
            {label}
        </button>
    );
}

export default ButtonComponent;
