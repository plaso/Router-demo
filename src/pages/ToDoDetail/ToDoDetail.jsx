import { useParams, useSearchParams } from 'react-router-dom';

const ToDoDetail = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('filter')

  const searchTest = () => {
    const URLParams = new URLSearchParams(searchParams)
    if (!URLParams.get('foo')) {
      URLParams.append('foo', 'foo')
    }
    setSearchParams(URLParams)
  }

  return (
    <div>
      <h1>ToDo: {id}</h1>
      {filter ? <p>{filter}</p> : null}
      <button onClick={searchTest}>Test</button>
    </div>
  )
}

export default ToDoDetail