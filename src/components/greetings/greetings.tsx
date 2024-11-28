
type GreetProps = {
    name: string
}

const Greet = (props: GreetProps) => {
    const { name } = props;
    return (
        <>
            <p>Hi, {name}! WelCome to the app</p>
        </>
    );
}

export default Greet;