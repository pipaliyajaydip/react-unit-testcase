//Props example - array of objects datatype example

// this is for objects
type nameObj = {
    firstName: string,
    lastName: string,
}

//this is for array and we using above type of objects
type propsOfComponent = {
    names: nameObj[]
}

const ArrayOfObj = (props: propsOfComponent) => {
    const { names } = props;
    return (
        <>
            {names.map((name) => {
                return (
                    <li key={name.firstName}>
                        {name.firstName} {name.lastName}
                    </li>
                );
            })}
        </>
    );
}

export default ArrayOfObj;