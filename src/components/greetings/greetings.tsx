//Props example - string, number, boolean datatype example
type GreetProps = {
    name: string,
    msgCnt?: number, //not mandotary field use ?
    isLoggedIn: boolean,
}

const Greet = (props: GreetProps) => {
    const { name, msgCnt = 0, isLoggedIn } = props;
    return (
        <>
            <p>
                {
                    isLoggedIn ? 
                    `Hi, ${name}! WelCome to the app, Your message count is: ${msgCnt}` :
                    `Welcome to the app`
                }
            </p>    
        </>
    );
}

export default Greet;