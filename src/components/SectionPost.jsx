import React from 'react'
import useFetchPost from '../hooks/UseFetchPost';
import CommentPost from './CommentPost';

function SectionPost() {
    const { recipes } = useFetchPost();

  const render = recipes.slice(0, 4);

  return (
    <div className="CommunitySection  px-24 flex flex-col items-center mt-24">
      <h2 className="font-semibold text-[4.6rem] ">From Our Community</h2>
      <div className="container flex flex-wrap justify-between w-full  ">
        {render.map((item) => (
          <CommentPost
            recepyName={item.recepyName}
            recepyDescription={item.recepyDescription}
            recepyImage={item.recepyImage}
            likes={item.likes}
            username={item.username}
            userImage={item.userImage}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionPost