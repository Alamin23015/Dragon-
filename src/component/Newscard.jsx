import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view, tags } = news;

  return (
    <div className="card bg-base-100 shadow-md  mb-6 rounded-2xl ">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm ">{author?.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-lg underline">
          <BsBookmark className="cursor-pointer hover:text-primary" />
          <BsShare className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold px-4 hover:underline">
        {title}
      </h2>

      {/* Image */}
      <figure className="px-4 pt-2">
        <img
          src={image_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Description */}
      <div className="p-4 text-sm text-gray-600">
        {details.length > 250 ? (
          <p>
            {details.slice(0, 250)}...{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Read More
            </span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      {/* Footer */}
      <div className="divider my-0"></div>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2 text-yellow-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-700 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
