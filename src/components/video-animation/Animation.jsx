"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { Fancybox as NativeFancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// ===== Images Start
import Slide1 from "media/home/animate1.png"
import Slide2 from "media/home/animate2.png"
import Slide3 from "media/home/animate3.jpg"
import Arrow from "media/home/slide-arrow.png"
import VideoIco from "media/icons/play.png"
import { register } from "swiper/element/bundle";

const Animation = () => {

    const swiperRef = useRef(null);
    useEffect(() => {
        register();
        const params = {
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: typeof window !== 'undefined' && window.innerWidth >= 1200 ? 2 : 1,
            navigation: true,
            autoHeight: true,
            coverflowEffect: {
                rotate: -20,      
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            injectStyles: [
                `
                .swiper-3d .swiper-slide-shadow-left,
                .swiper-3d .swiper-slide-shadow-right {
                background-image: inherit !important;
                }

                .slider {
                position: relative;
                height: 100%;
                }

                .swiper-slide {
                overflow: hidden;
                }

                .swiper-slide img {
                object-fit: cover;
                }

                .arrow.arrow-left {
                left: 0;
                }

                .arrow.arrow-right {
                right: 0;
                }

                .swiper-pagination-bullets.swiper-pagination-horizontal {
                position: absolute !important;
                bottom: -60px !important;
                top: inherit !important;
                left: 50% !important;
                right: 50% !important;
                margin-left: 37px !important;
                width: 8% !important;
                /* background: black !important; */
                transform: translateX(-50%) !important;
                }

                .swiper {
                overflow: visible !important;
                }

                .swiper-pagination-bullet-active {
                background: #f5090b !important;
                width: 30px !important;
                border-radius: 30px !important;
                }

                .swiper-button-prev {
                    left: 47% !important;
                    right: inherit !important;
                }

                .swiper-button-next {
                left: inherit !important;
                right: 46% !important;
                }

                .swiper-button-prev,
                .swiper-button-next {
                top: inherit !important;
                bottom: -81px !important;
                }

                .swiper-button-prev:after {
                content: url(/icons/swiper-left-arr.png) !important;
                }

                .swiper-button-next:after {
                content: url(/icons/swiper-right-arrow.png) !important;
                }

                .swiper-slide{
                border-radius: 45px !important;
                }
              `,
            ],
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    function Fancybox(props) {
        const containerRef = useRef(null);

        useEffect(() => {
            const container = containerRef.current;

            const delegate = props.delegate || "[datafancybox]";
            const options = props.options || {};

            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        });

        return <div ref={containerRef}>{props.children}</div>;
    }
    return (
        <>
            <section className='pt-[40px] md:pt-[70px] pb-[30px] lg:pb-[175px] relative'>
                <div className="px-5 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="content">
                                <h2 className='text-[20px] md:text-[25px] lg:text-[28px] xl:text-[36px] font-sans font-bold capitalize text-center text-black mb-2 sm:mb-6'>Next-Generation Animation and Video Production Services.</h2>
                                <p className='text-black text-[13px] lg:text-[16px] font-sans text-center'>Bridge the gaps and break the boundaries with our full-service video animation agency.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider mt-4 sm:mt-7 lg:mt-12 px-4 xl:px-0 h-[200%]">
                    <swiper-container ref={swiperRef} init={false}
                        effect={'coverflow'}
                        className="videoExplainerSlider"
                    >
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=f56596bad42e22dfbb5dcf417293fe4f92f3fc7e84a9464be5c8f07f903eaa05" datafancybox="gallery">
                                        <Image src={Slide1} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Cel Animation</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We leverage traditional cel animation techniques with modern efficiency. Our process involves hand-drawing keyframes on acetate sheets, utilizing industry-standard lightboxes and specialized inking tools. We implement digital scanning and compositing to streamline post-production while maintaining the distinctive line quality and organic movement inherent to cel animation. </p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/957421481/rendition/1080p/file.mp4?loc=external&signature=2200951cfd824565a3f569c81e997b1f7c5ad0a443debd2bc4d73ff7a3b0f27b" datafancybox="gallery">
                                        <Image src={Slide2} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Architectural Visualization</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>Our team employs advanced 3D modeling software and physically-based rendering engines to create hyper-realistic architectural visualizations. Our workflow incorporates BIM data integration, parametric modeling, and custom shader development. We utilize global illumination algorithms, volumetric lighting, and accurate material simulations to achieve photorealistic results. </p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/923043536/rendition/1080p/file.mp4?loc=external&signature=65ba4de21993e2ab518a0dbad0e015b2bd960e70967b63241c8509cc1f8c5390" datafancybox="gallery">
                                        <Image src={Slide3} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Hybrid Animation</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We have pioneered our hybrid animation techniques, combining vector-based 2D animation with procedural 3D systems. Our proprietary pipeline seamlessly integrates motion capture data with hand-keyed animation, utilizing advanced rigging systems and custom scripting. We employ node-based compositing for complex visual effects integration and leverage particle systems for Hybrid animation.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link
                                        href="https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=f56596bad42e22dfbb5dcf417293fe4f92f3fc7e84a9464be5c8f07f903eaa05" datafancybox="gallery">
                                        <Image src={Slide1} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Real-Time Rendering</h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>Our rendering experts harness the power of real-time rendering using cutting-edge GPUs and optimized shading languages. Our pipeline utilizes deferred rendering techniques, dynamic global illumination, and advanced anti-aliasing methods for high-quality, instantaneous visualizations. We implement level-of-detail (LOD) systems and occlusion culling to optimize rendering performance.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/957421481/rendition/1080p/file.mp4?loc=external&signature=2200951cfd824565a3f569c81e997b1f7c5ad0a443debd2bc4d73ff7a3b0f27b" datafancybox="gallery">
                                        <Image src={Slide2} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">3D & 2D Animation </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We excel in both 3D and 2D animation, utilizing advanced software and techniques. Our process includes modeling, rigging, and rendering for 3D, and hand-drawing or vector-based art for 2D. We integrate motion capture for realistic movement in 3D and utilize tweening and frame-by-frame animation for 2D, ensuring a seamless and visually engaging final product.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/923043536/rendition/1080p/file.mp4?loc=external&signature=65ba4de21993e2ab518a0dbad0e015b2bd960e70967b63241c8509cc1f8c5390" datafancybox="gallery">
                                        <Image src={Slide3} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Motion Graphics </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>Our motion graphics services combine graphic design principles with animation techniques to create visually compelling content. We use industry-leading software to animate text, shapes, and objects, adding depth and dynamism to your videos. By incorporating kinetic typography and visual effects, we ensure your message is delivered with maximum impact.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=f56596bad42e22dfbb5dcf417293fe4f92f3fc7e84a9464be5c8f07f903eaa05" datafancybox="gallery">
                                        <Image src={Slide1} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Whiteboard </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We specialize in whiteboard animation, crafting engaging, hand-drawn visuals that simplify complex ideas. Using digital drawing tablets, we create illustrations in real time, simulating the traditional whiteboard experience. Our process includes storyboard development, voiceover synchronization, and dynamic transitions to keep viewers captivated and informed.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/957421481/rendition/1080p/file.mp4?loc=external&signature=2200951cfd824565a3f569c81e997b1f7c5ad0a443debd2bc4d73ff7a3b0f27b" datafancybox="gallery">
                                        <Image src={Slide2} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Video Editing & Compositing </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>Our video editing and compositing services enhance and refine your footage with precision. We use state-of-the-art editing software for cutting, color grading, and audio mixing. Our compositing techniques integrate CGI, green screen, and visual effects, resulting in polished and professional videos that tell your story effectively.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/923043536/rendition/1080p/file.mp4?loc=external&signature=65ba4de21993e2ab518a0dbad0e015b2bd960e70967b63241c8509cc1f8c5390" datafancybox="gallery">
                                        <Image src={Slide3} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Logo Animations </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We bring logos to life with dynamic animations that enhance brand identity. Using advanced motion design software, we animate logos with fluid movements and effects. Our process includes concept development, keyframing, and rendering, ensuring your logo animation is both memorable and visually stunning.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link
                                        href="https://player.vimeo.com/progressive_redirect/playback/947422905/rendition/1080p/file.mp4?loc=external&signature=f56596bad42e22dfbb5dcf417293fe4f92f3fc7e84a9464be5c8f07f903eaa05" datafancybox="gallery">
                                        <Image src={Slide1} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Infographics </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We create animated infographics that turn data into engaging visual stories. Using a blend of graphic design and animation software, we develop visually appealing charts, graphs, and icons. Our animations highlight vital data points, making complex information easily digestible and memorable for your audience.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/957421481/rendition/1080p/file.mp4?loc=external&signature=2200951cfd824565a3f569c81e997b1f7c5ad0a443debd2bc4d73ff7a3b0f27b" datafancybox="gallery">
                                        <Image src={Slide2} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Commercials  </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>Our commercial animations are designed to captivate and convert. We utilize high-end animation software to produce visually striking advertisements. Our process includes scripting, storyboarding, animation, and post-production, ensuring a polished final product that effectively communicates your brand message.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                        <swiper-slide className='relative pt-4'>
                            <Fancybox options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}>
                                <div>
                                    <Link href="https://player.vimeo.com/progressive_redirect/playback/923043536/rendition/1080p/file.mp4?loc=external&signature=65ba4de21993e2ab518a0dbad0e015b2bd960e70967b63241c8509cc1f8c5390" datafancybox="gallery">
                                        <Image src={Slide3} alt='Slide' className='rounded-[50px] w-full relative top-0 left-0' />
                                        <div className="absolute bottom-[2px] left-0 w-full h-full flex items-start justify-end flex-col bg-black/40 rounded-[50px] px-[40px] pb-[40px]">
                                            <h3 className="text-white text-[18px] md:text-[24px] font-sans font-[400]">Music Video Animation </h3>
                                            <p className='text-white text-[11px] sm:text-[14px] font-sans leading-[16px] lg:w-9/12'>We produce animated music videos that complement and enhance musical narratives. Using a mix of 2D and 3D animation techniques, we create visually stunning and rhythm-synchronized animations. Our services cover concept development, animation, and final editing, delivering a unique visual experience that resonates with viewers.</p>

                                            <Link href="javascript:;" className='text-white font-[600] text-[13px] md:text-[16px] poppins pt-4 flex items-center gap-x-3'>Make an Animation
                                                <Image src={Arrow} className='w-[10px] h-[10px] object-contain' alt='Arrow' width={8} height={9} />
                                            </Link>
                                            <Image src={VideoIco} alt='video-icon' className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] md:block hidden' />
                                        </div>
                                    </Link>
                                </div>
                            </Fancybox>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </section>
        </>
    )
}

export default Animation
