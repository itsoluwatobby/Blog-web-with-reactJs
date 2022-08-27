import { useParams, Link, useHistory } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
   const history = useHistory();
   const { id } = useParams();

   const deletePost = useStoreActions((actions) => actions.deletePost);
   const getPostById = useStoreState((state) => state.getPostById)
   const post = getPostById(id)

   const handleDelete = (id) => {
      deletePost(id);
      history.push(('/'))
   }
   
  return (
    <main className='PostPage'>
         <article className='post'>
            {post ? (
               <>
                  <h2>{post.title}</h2>
                  <p className="postDate">{post.dateTime}</p>
                  <p className="postBody">{post.body}</p>
                  <div className="buttonStyle">
                     <Link to={`/edit/${post.id}`}>
                     <button className='editButton'>
                        Edit Post
                     </button>
                     </Link>
                     <button className='deleteButton' onClick={() => handleDelete(post.id)}>
                        Delete Post
                     </button>
                  </div>
               </>) : (
                  <>
                     <h2>Post Not Found</h2>
                     <p>Well, that's disappointing.</p>
                     <p>
                        <Link to="/">Return To HomePage</Link>
                     </p>
                  </>
               )
            }
         </article>
    </main>
  );
}

export default PostPage;
