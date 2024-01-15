import { FaRegHeart } from "react-icons/fa6";
import Star from "../../assets/star.svg";

export default function Book({ book, handleFavorite }) {
  const { id, bookName, publish, writer, star, thumbnail, price, favorite } =
    book;

  const arr = new Array(star).fill(0);
  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
          <img className="max-w-[144px] h-48" src={thumbnail} alt="book name" />
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-bold lg:text-xl">{bookName}</h4>
          <div className="flex justify-between">
            <p className="text-xs lg:text-sm">
              By : <span>{writer}</span>
            </p>
            <p className="text-xs lg:text-sm">
              Publish Year : <span>{publish}</span>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold lg:text-xl">${price}</h4>
            <div className="flex items-center space-x-1">
              {arr.map((s, i) => {
                return <img key={i} src={Star} alt="star" />;
              })}
              <span className="text-xs lg:text-sm">({`${star} Star`})</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-sm">
            <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Add to Cart
            </button>
            <button
              className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md  lg:py-1.5 py-1.5 transition-all ${
                favorite
                  ? "bg-[#DC2954]/[14%] text-[#DC2954] hover:bg-[#DC2954]/[24%]"
                  : "bg-[#1C4336]/[14%] text-[#1C4336] hover:bg-[#1C4336]/[24%]"
              }`}
              onClick={() => handleFavorite(id)}
            >
              <FaRegHeart />
              Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
