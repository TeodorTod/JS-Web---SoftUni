

const Child = (props) => {
    const person = {
        name: 'John Doe',
        age: 999
    };

    const buttonClickHandler = () => {
        props.passData(person);
    }
    
    return <div>
        <button onClick={buttonClickHandler}>Show the info</button>
    </div>
}

export default Child;