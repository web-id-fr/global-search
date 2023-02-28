const Label = (props) => {
    const { name, color, styles = "" } = props;
    return (
        <div className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 text-white rounded-full ${styles}`}
             style={{ backgroundColor: `#${color}` }}>
            {name}
        </div>
    )
}

export default Label
