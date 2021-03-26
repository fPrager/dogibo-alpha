import DataMock from '../mocks/dogibo.json';

const Text = () => {
    return (
        <>
        <p>Blub</p>
        <div>{ DataMock.instructions }</div>
        </>
    )
}

export default Text;