const LoadingSpinner = () => {
    return (
        <div className="m-4 d-flex justify-content-center">
            <div className="spinner-border text-secondary" role="status" style={{width: "4rem", height: "4rem"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingSpinner;