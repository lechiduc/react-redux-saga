### Redux Saga

- **v1**:
  - điều phối thủ công
  ```jsx
  const handleFetchPosts = () => {
    dispatch({ type: 'FETCH_POSTS' });
  };
  ```
  - Vấn đề: Phải dispatch một action khác để chạy async action fetchPosts trong postsSlice reducers.
  - **Mục tiêu**: Chỉ dispatch reducer getPosts như Redux Thunk
