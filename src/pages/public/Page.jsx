import React, { useState } from "react";
import "./landingpage.css";
import { IoIosArrowForward } from "react-icons/io";
import Banner from "./../../components/banner/Banner";
import Content from "./../../components/heading/Content";
import Heading from "./../../components/heading/Heading";
import Footer from "./../../components/footer/Footer";

import ImgOne from "./../../assets/images/ban-tv.png";
import ImgTwo from "./../../assets/images/ban-mobile.jpg";
import ImgFive from "./../../assets/images/boxshot.png";
import ImgSix from "./../../assets/images/download-icon (1).gif";
import ImgThree from "./../../assets/images/banner-3.png";
import ImgFour from "./../../assets/images/banner-4.png";

import VideoOne from "./../../assets/videos/src_assets_videos_video-1.m4v";
import VideoTwo from "./../../assets/videos/src_assets_videos_video-2.m4v";
import Button from "./../../components/button/Button";
import Input from "./../../components/input/Input";
import Navbar from "./../../components/navbar/Navbar";
import Accordion from "./../../components/accordion/Accordion";

const LandingPage = () => {
    const [email, setEmail] = useState("");

    console.log(email);
    return (
        <>
            <div className="main-banner">
                <Navbar/>
                <div className="main-title">
                    <Heading
                        size="bold"
                        color="white"
                        title="Unlimited movies, TV shows and more"
                    />
                    <Content color="white" className="watch-anywhere" content="Watch anywhere. Cancel anytime." />
                    <Content
                        color="white"
                        className="ready-to-watch"
                        content="Ready to watch? Enter your email to create or restart your membership."
                    />
                    <div className="content-box">
                        <Input
                            bg="bg-transparent"
                            label="Email Address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Button
                            size="large"
                            rounded="rounded"
                            color="white"
                            bg="bg-2"
                            iconProp="rightarrow"
                            icon={<IoIosArrowForward />}
                            value="Get Started"
                        />
                    </div>
                </div>
            </div>
            <Banner video={VideoOne} vidSize="small-video" img={ImgOne}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Enjoy on your TV"
                />
                <Content
                    className="content"
                    color="white"
                    content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
            </Banner>
            <Banner img={ImgTwo} className="Banner-two" classname="Container-two">
            <div className="smalldiv">
                    <div className="strangerThings">
                        <img src={ImgFive} alt="img" />
                    </div>
                    <div className="strangercontent">
                        <p className="p1">Stranger Things</p>
                        <p className="p2">Downloading...</p>
                    </div>
                    <div className="strangerDownload">
                        <img src={ImgSix} alt="img" />
                    </div>
                </div>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Download your shows to watch offline"
                />
                <Content
                    className="content"
                    color="white"
                    content="Save your favourites easily and always have something to watch."
                />
            </Banner>
            <Banner video={VideoTwo} className="container-three" classname="banner-three" vidSize="large-video" img={ImgThree}>
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Watch everywhere"
                />
                <Content
                    className="content"
                    color="white"
                    content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                />
            </Banner>
            <Banner img={ImgFour} className="container-four" classname="banner-four">
                <Heading
                    align="bottom"
                    className="heading"
                    color="white"
                    size="bold"
                    title="Create profiles for kids"
                />
                <Content
                    className="content"
                    color="white"
                    content="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
                />
            </Banner>
            <div className="accordian-section">
                <Heading align="faq-heading" title="Frequently Asked Questions" />
                <Accordion />
                <Content
                    color="white"
                    className="center"
                    content="Ready to watch? Enter your email to create or restart your membership."
                />
                <div className="content-box">
                    <Input
                        bg="bg-transparent"
                        label="Email Address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button
                        size="large"
                        rounded="rounded"
                        color="white"
                        bg="bg-2"
                        iconProp="rightarrow"
                        icon={<IoIosArrowForward />}
                        value="Get Started"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;