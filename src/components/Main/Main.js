import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const Main = () => (
  <ScrollContainer>
    <ScrollPage>
      <Animator animation={FadeUp}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1]">
          Who Are We?
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator >
        <span></span>
      </Animator>
    </ScrollPage>

    <div class="mybg bg-[#DFE2E1]"> 
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
      <ScrollPage>
        <Animator animation={batch(FadeIn(), Sticky(50,45))}>
          <p class="md:w-auto w-screen p-4 md:text-4xl text-xl text-[#3B415F] ">
            A woman-led, privately owned company based in Lebanon.
          </p>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(),MoveOut(0,30), Sticky(50,57))}>
          <p class="md:w-auto w-screen p-4 md:text-1xl text-xl text-[#3B415F] ">
            Our aim is to contribute to the development of society through empowering its members on cultural, educational, and professional levels.
          </p>
        </Animator>
      </ScrollPage>
    </div>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage >
      <Animator animation={FadeUp}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1] ">
          Our Vision
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <div class="mybg bg-[#DFE2E1]"> 
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
      <ScrollPage>
        <Animator animation={batch(FadeIn(), Sticky(50,43))}>
          <p class="md:w-auto w-screen p-4 md:text-4xl text-xl text-[#3B415F] ">
            We strongly believe that we are born on this earth to persevere towards creating a brighter future for people.
          </p>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(),MoveOut(0,30), Sticky(50,62))}>
          <p class="md:w-auto w-screen p-4 md:text-1xl text-xl text-[#3B415F] ">
          As a company, we aspire to contribute to the development of society and empowering its members on the cultural, educational and professional levels so that our tomorrow will be better, brighter, and blooming.
          </p>
        </Animator>
      </ScrollPage>
    </div>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={FadeUp}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1]">
          Our Mission
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>
    <div class="mybg bg-[#DFE2E1]">
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <span/><span/><span/><span/><span/><span/><span/><span/><span/><span/>
    <ScrollPage>
        <Animator animation={batch(FadeIn(), Sticky(50,43))}>
          <p class="md:w-auto w-screen p-4 md:text-4xl text-xl text-[#3B415F] ">
            Support individuals and groups to lead their own journey of self-development by building and advancing their knowledge and skills.
          </p>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(),MoveOut(0,30), Sticky(50,62))}>
          <p class="md:w-auto w-screen p-4 md:text-1xl text-xl text-[#3B415F] ">
            Contributing to the planning and implementation of targeted projects locally, regionally, and globally; and benefiting from local and international experiences in the fields.
          </p>
        </Animator>
      </ScrollPage>
    </div>

    

    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="hover:-translate-y-1 hover:scale-105 flex flex-col items-center pb-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Passion
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We do what we do because we see it as a genuine contribution to elevating communities.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
        <a href="#" class="hover:-translate-y-1 hover:scale-105 flex flex-col items-center pb-10  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cooperation
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            We cherish teamwork, preserve team spirit, and value the society for which we work.
          </p>
        </a> 
      </Animator>
    </ScrollPage>



    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="hover:-translate-y-1 hover:scale-105 flex flex-col items-center pb-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transparency
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We uphold the values of transparency, honesty, and respect for the law and ethical standards throughout our relationships and at work.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="hover:-translate-y-1 hover:scale-105 flex flex-col items-center pb-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
        </svg>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Pioneering
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We innovate ideas and projects, encourage new experiences, and pursue opportunities to create value.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="hover:-translate-y-1 hover:scale-105 flex flex-col items-center pb-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Quality
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We are committed to providing high quality services and projects.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="hover:-translate-y-1 hover:scale-105 flex flex-col items-center pb-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
        </svg>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Empowerment
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We promote awareness and respect the rights of individuals, women, children, people with special needs and marginalized groups, and provide them with opportunities that cater to their needs.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="hover:-translate-y-1 hover:scale-105 flex flex-col items-center pb-10 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-50">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>

            
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Environment
        </h5>
         <p class="font-normal text-gray-700 dark:text-gray-400">
          We value the environment and practice sound behavior towards it. 
        </p>
      </a>
      </Animator>
    </ScrollPage>


    {/* <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Passion
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We do what we do because we see it as a genuine contribution to elevating communities.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Cooperation
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We cherish teamwork, preserve team spirit, and value the society for which we work.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transparency
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We uphold the values of transparency, honesty, and respect for the law and ethical standards throughout our relationships and at work.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Pioneering
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We innovate ideas and projects, encourage new experiences, and pursue opportunities to create value.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Quality
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We are committed to providing high quality services and projects.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Empowerment
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We promote awareness and respect the rights of individuals, women, children, people with special needs and marginalized groups, and provide them with opportunities that cater to their needs.
        </p>
      </a>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(),MoveOut(-800,0),Sticky())}>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Environment
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We value the environment and practice sound behavior towards it. 
        </p>
      </a>
      </Animator>
    </ScrollPage> */}




    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
      </Animator>
    </ScrollPage>

  </ScrollContainer>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
