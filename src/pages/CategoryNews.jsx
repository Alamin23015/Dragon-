import React,{useEffect,useState} from 'react';
import {useLoaderData, useParams} from 'react-router';

const CategoryNews=()=>{
  const  {id} =useParams();
//   console.log(id);
  const data=useLoaderData();
  const [categoryNews,setCategoryNews]= useState([]);
//   console.log(data);
useEffect(()=>{
  const filteredNews=data.filter(news=> news.category_id== id);
  console.log(filteredNews);
  setCategoryNews(filteredNews);
},[data,id])
    return(
       <div>
        total {categoryNews.length} found
       </div>
    );
};

export default CategoryNews;