type parentProps = {
    component: React.ReactNode
}

const Parent = (props: parentProps) => {
    const { component } = props;
    return(
        <>
            <h1>I am from parent</h1>
            {component}
        </>
    );
}

export default Parent;