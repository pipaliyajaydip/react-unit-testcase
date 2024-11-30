type StatusProps = {
    status: "loading" | "success" | "error"
}

const Status = (proos: StatusProps) => {
    const { status } = proos;
    let message = "";
    if (status === "loading") {
        message = "loading";
    } else if (status === "success") {
        message = "success";
    } else if (status === "error") {
        message = "error";
    }
    return(
        <>
            <h2>Status: {message}</h2>
        </>
    );
}

export default Status;