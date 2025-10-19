import React from "react";
import { Outlet } from "react-router-dom";
 import Header from '../../src/component/ Header';
 import LatestNews from '../../src/component/LatestNews';
 import NavBer from'../../src/component/NavBer';

const HomeLayout = ()=>{
    return(
      <div>
        <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <NavBer>

            </NavBer>
        

        </header>
        <main>
            
            <section classname="left_nav"></section>
            <section className= "main">
                <Outlet></Outlet>
            </section>

            <section classname = "right_nav"></section>
        </main>
      </div>
    );
};
export {HomeLayout};
export default HomeLayout