const Status = ({value }) => {
    return (
        <div className="statusMain">{value}</div>
    )
}

const Status1= ({value ,statusDotsG ,status1Main}) => {
    return (
        <div className={status1Main}>
            <div className="status1Text">
                <h3>{value}<span className={statusDotsG}>.</span></h3>
            </div>
            <div className="status1Line"> </div>
        </div>
    )
}
export {Status ,Status1};