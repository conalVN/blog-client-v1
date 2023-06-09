import { memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../store/actions";

function PostNew({ data, i }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-white w-full max-w-[45%] flex flex-col gap-2 p-8 rounded-md`}
    >
      {/* <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <img
          src={data?.thumbnail?.url}
          alt={data?.title}
          className="w-full h-60 object-cover transition-all hover:scale-110"
        />
      </div> */}
      <div className="w-full flex flex-col gap-2">
        <h2 className="font-bold text-lg line-clamp-1">{data?.title}</h2>
        <p className="line-clamp-5">{data?.description}</p>
        <Link
          to={`/posts/${data?._id}`}
          onClick={() => dispatch(actions.setCurPostId(data?._id))}
          className="flex items-center gap-2 w-max text-white bg-orange-400 px-4 py-1 rounded-full"
        >
          <span className="">Read more</span>
          <span className="material-symbols-outlined">moving</span>
        </Link>
      </div>
    </div>
  );
}

export default memo(PostNew);
