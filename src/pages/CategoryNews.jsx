import React,{useEffect,useState} from 'react';
import {useLoaderData, useParams} from 'react-router';
import Newscard from '../component/Newscard';

const CategoryNews=()=>{
  const  {id} =useParams(); //string 
//   console.log(id);
  const data=useLoaderData();
  const [categoryNews,setCategoryNews]= useState([]);
//   console.log(data);
useEffect(()=>{
    if(id=="0"){
        setCategoryNews(data);
        return;

    }
    else if(id=="1"){
        const filteredNews=data.filter(news=>news.others.is_today_pick==true);
        setCategoryNews(filteredNews);
    }
    else{

        const filteredNews=data.filter(news=> news.category_id== id);
        console.log(filteredNews);
        setCategoryNews(filteredNews);
    }
},[data,id])
    return(
       <div>
        <h2 className='font-bold'>

        Total <span classname='text-secondary'>
            {categoryNews.length}
            </span>
            News Found
        </h2>
        <div className='grid grid-cols-1 gap-5'>
{
    categoryNews.map(news=> (<Newscard  key= {news.id} news={news} ></Newscard>)
)
}
        </div>
       </div>
    );
};

export default CategoryNews;