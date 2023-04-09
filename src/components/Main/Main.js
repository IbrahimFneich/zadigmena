import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const Main = () => (
  <ScrollContainer>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <p class="md:w-auto w-screen  md:text-8xl text-4xl text-[#DFE2E1]">
          Who We Are?
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <p class="md:w-auto w-screen p-4 md:text-3xl text-xl text-[#DFE2E1]">
          A woman-led, privately owned company based in Lebanon.<br/>Our aim is to contribute to the development of society through empowering its members on cultural, educational, and professional levels.
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <p class="md:w-auto w-screen  md:text-3xl text-4xl text-[#DFE2E1]">
          Our Vision
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <p class="md:w-auto w-screen p-4 md:text-3xl text-xl text-[#DFE2E1]">
          We strongly believe that we are born on this earth to persevere towards creating a brighter future for people.<br/>As a company, we aspire to contribute to the development of society and empowering its members on the cultural, educational and professional levels so that our tomorrow will be better, brighter, and blooming.
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>

    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <p class="md:w-auto w-screen  md:text-3xl text-4xl text-[#DFE2E1]">
          Our Mission
        </p>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <span></span>
      </Animator>
    </ScrollPage>
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky())}>
        <p class="md:w-auto w-screen p-4 md:text-3xl text-xl text-[#DFE2E1]">
          Our goal is to support individuals and groups to lead their own journey of self-development by building and advancing their knowledge and skills; contributing to the planning and implementation of targeted projects locally, regionally, and globally; and benefiting from local and international experiences in the fields
        </p>
      </Animator>
    </ScrollPage>
  </ScrollContainer>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
