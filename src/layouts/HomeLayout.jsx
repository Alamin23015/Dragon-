import React from "react";
import { Outlet } from "react-router-dom";
 import Header from '../../src/component/ Header';
 import LatestNews from '../../src/component/LatestNews';
 import NavBer from'../../src/component/NavBer';
 import Left from '../component/home/Left';
 import Right from '../component/home/Right';

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
        <main className='w-11/12 mx-auto my-3  grid grid-cols-12'>
            
           <aside className='col-span-3'>
            <Left></Left>
           </aside>
           <section className='main col-span-6'>
                <Outlet></Outlet>
                </section>
           <aside className ='col-span-3'>
            <Right></Right>
           </aside>
            
        </main>
      </div>
    );
};
export {HomeLayout};
export default HomeLayout