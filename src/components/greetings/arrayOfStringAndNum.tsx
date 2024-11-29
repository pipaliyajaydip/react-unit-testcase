type arrOfStrAndNum = {
    emails: string[],
    postalCodes: number[]
}

const ArrOfStrAndNum = (props: arrOfStrAndNum) => {
    const { emails, postalCodes } = props;
    return (
        <>
            <div>
                {emails.map((email) => {
                    return (
                        <li key={email}>
                            {email}
                        </li>
                    );
                })}
            </div>
            <div>
                {postalCodes.map((pcode) => {
                    return (
                        <li key={pcode}>
                            {pcode}
                        </li>
                    );
                })}
            </div>
        </>
    );
}

export default ArrOfStrAndNum;