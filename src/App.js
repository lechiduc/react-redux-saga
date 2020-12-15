import { useSelector, useDispatch } from 'src/store';

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.posts);

  const handleFetchPosts = () => {
    dispatch({ type: 'FETCH_POSTS' });
  };

  return (
    <div>
      <button onClick={handleFetchPosts}>Click me</button>
      <pre className="App">{JSON.stringify(state, undefined, 2)}</pre>
    </div>
  );
}
