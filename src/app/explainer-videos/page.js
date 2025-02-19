"use client"

import React from 'react'
import InnerBanner from '@/components/InnerBanner/InnerBanner'
import Animations from '@/components/Animations/Animations'
import Form from '@/components/form/Form'
import Animation from '@/components/video-animation/Animation'
import Portfolio from '@/components/portfolio/Portfolio'
import Brand from '@/components/BrandShine/Brand'
import Remarkable from '@/components/Remarkable/Remarkable'
import OurClient from '@/components/ourClient/OurClient'
import Extraordinary from '@/components/Extraordinary/Extraordinary'

// ===== Images 
import BranShine from "media/explainer-videos/brandshine.png"
import SaleShine from "media/home/salesimage.png"
import Client1 from "media/home/client1.png"
import Client2 from "media/home/client2.png"

// ==== Thumnail Image
import Thumnail1 from "media/thumbnails/2d-animation/1.jpg"
import Thumnail2 from "media/thumbnails/2d-animation/2.jpg"
import Thumnail3 from "media/thumbnails/2d-animation/3.jpg"
import Thumnail4 from "media/thumbnails/2d-animation/4.jpg"
import Thumnail5 from "media/thumbnails/2d-animation/5.jpg"
import Thumnail6 from "media/thumbnails/2d-animation/6.jpg"
import Thumnail7 from "media/thumbnails/3d-animation/1.jpg"
import Thumnail8 from "media/thumbnails/3d-animation/2.jpg"
import Thumnail9 from "media/thumbnails/3d-animation/3.jpg"
import Thumnail10 from "media/thumbnails/3d-animation/4.jpg"
import Thumnail11 from "media/thumbnails/3d-animation/5.jpg"
import Thumnail12 from "media/thumbnails/3d-animation/6.jpg"
import Thumnail13 from "media/thumbnails/whiteboard/1.jpg"
import Thumnail14 from "media/thumbnails/whiteboard/2.jpg"
import Thumnail15 from "media/thumbnails/whiteboard/3.jpg"
import Thumnail16 from "media/thumbnails/whiteboard/4.jpg"
import Thumnail17 from "media/thumbnails/whiteboard/5.jpg"
import Thumnail18 from "media/thumbnails/whiteboard/6.jpg"
import Thumnail19 from "media/thumbnails/motion-graphics/1.jpg"
import Thumnail20 from "media/thumbnails/motion-graphics/2.jpg"
import Thumnail21 from "media/thumbnails/motion-graphics/3.jpg"
import Thumnail22 from "media/thumbnails/motion-graphics/4.jpg"
import Thumnail23 from "media/thumbnails/motion-graphics/5.jpg"
import Thumnail24 from "media/thumbnails/motion-graphics/6.jpg"
import Thumnail25 from "media/thumbnails/hybrid/1.jpg"
import Thumnail26 from "media/thumbnails/hybrid/2.jpg"
import Thumnail27 from "media/thumbnails/hybrid/3.jpg"
import Thumnail28 from "media/thumbnails/hybrid/4.jpg"
import Thumnail29 from "media/thumbnails/hybrid/5.jpg"
import Thumnail30 from "media/thumbnails/hybrid/6.jpg"

// ===== Card Images
import Remark10 from "media/home/remark24.png"
import Remark11 from "media/home/remark20.png"
import Remark12 from "media/home/remark25.png"
import Remark13 from "media/home/remark26.png"
import Remark14 from "media/home/remark27.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- Specialists in converting scripts",
    "- Work with the best voice actors",
    "- Cheap animated explainer video",
    "- Video 100% customer satisfaction",
  ]

  const banner = {
    title: <>Generate More Income with 
    Immersive Explainer Videos</>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916117283/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0b2a1f2e5c0dccbe3884bea89915315936c24100893da2b2cba2ba4173fb63b0",
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>Clarify, Captivate & Convert Your Audience</>,
    para: <>An explainer video is a short video that uses a simple and engaging approach to explain or communicate how a brand, business, or service works. These videos are commonly utilized as marketing video content to illustrate the benefits of a product or service, ultimately boosting conversions. Explainer production employs videos as the modern version of a company's elevator pitch for any product or service with clear, objective, crisp, short, and laser-focused content. Successful explainer videos communicate the product's value in the quickest possible time while capturing people's attention.</>,
    subtitleOne: <>Complex Concepts Turned into Simple Videos</>,
    subtitleTwo: <>Let Us Explain What You Do In 60 Seconds</>,
    subpara: <>You might wonder how you can understand something that usually takes many pages in less than 60 seconds. The answer is simple! An explainer video's audio and visual nature of the content makes it simple to communicate the message promptly. So, if you have a lengthy list of do's and don'ts of some things, a 60-second explanatory video will do the trick for you. These videos transform lengthy guidelines into clear, engaging content using customizable templates. Our expertise in animated explainer videos ensures that intricate ideas are communicated effectively, utilizing narrative-driven characters to simplify complexity. As a premier provider, we excel in delivering high-quality, value-driven content that captivates and educates, enhancing your brand's communication strategy.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916117321/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6fef75c9a5974d33a71343c534240f0b5eea08bea8950b0ab437f72fb0d22f9a",
  }

  //=====Portfilio Fold=====// 
  const tabInfo = [
    { label: "2D Animations", index: 0 },
    { label: "3D Animation", index: 1 },
    { label: "Whiteboard", index: 2 },
    { label: "Motion Graphics", index: 3 },
    { label: "Hybrid Animation", index: 4 },
  ];
  const tabContents = [
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828567/rendition/1080p/file.mp4?loc=external&signature=2cb0c1bd0ce7278cfcc88931f949d2a4df4a28555c8e3a5dd73de49eeb9934e9",
        thumbnail: Thumnail1,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828734/rendition/1080p/file.mp4?loc=external&signature=c6da013ddb686dfc7be1b15b94eda413bc5fa963be1fd91775347155025326ee",
        thumbnail: Thumnail2,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907828816/rendition/1080p/file.mp4?loc=external&signature=0c96783fc0283d20b714fec19c63f4565bf6618cfe19a581a25783cb5f6005e1",
        thumbnail: Thumnail3,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829018/rendition/1080p/file.mp4?loc=external&signature=19f1bda07f4caacaccc0fdcf5567fb848096a95289bb8bc5310b0bb801c74380",
        thumbnail: Thumnail4,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829180/rendition/1080p/file.mp4?loc=external&signature=e2c22685eafa8501d4efe1007026a663eee3d5cac85dc8007e6c9afcfc4a9e59",
        thumbnail: Thumnail5,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907829397/rendition/1080p/file.mp4?loc=external&signature=90d3e6d4b05f56ed61129b5031be09b724259666750b41882f54bf99b3e2314e",
        thumbnail: Thumnail6,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907824980/rendition/1080p/file.mp4?loc=external&signature=6b9db8abed0b7431145313cd23ed8aca8f7abe0e8f736633fb14661d441c6f2e",
        thumbnail: Thumnail7,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825425/rendition/1080p/file.mp4?loc=external&signature=dd421a3f86dffa9fe24e3e530fa12f72239eb57b9dd1a7454c1eafdb59d79e12",
        thumbnail: Thumnail8,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907825999/rendition/1080p/file.mp4?loc=external&signature=a043a1cc2b10aa769f8e7b926feccfe1b1f67af69dc5676d5cd8ae0f116850e5",
        thumbnail: Thumnail9,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907826450/rendition/1080p/file.mp4?loc=external&signature=ca0c7a919606e10d26294b9bb3d19268eedaeeed16e8c9e63a9e352a05189969",
        thumbnail: Thumnail10,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907826670/rendition/1080p/file.mp4?loc=external&signature=f74dcc4a39df10abe19a05be96cc65177c5db653bc09f47a37e1d33ebbd4cc67",
        thumbnail: Thumnail11,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907827073/rendition/1080p/file.mp4?loc=external&signature=ea8148af25f94ab0324027eb511fcac7a08d64da2fde9e2f4a27689b175a885c",
        thumbnail: Thumnail12,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906229275/rendition/1080p/file.mp4?loc=external&signature=6cce77a47f5927d9a30e5a8c79efd00b539f963952705e6d3ee7565e9c1ccd7e",
        thumbnail: Thumnail13,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906228502/rendition/1080p/file.mp4?loc=external&signature=9bb2e9d30cb5ac4a19db0fe2e2f9d9c249e7bd369a56e789a22b1760c8934256",
        thumbnail: Thumnail14,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/906229355/rendition/1080p/file.mp4?loc=external&signature=cbc8679851a9657f782a5977b337843cdbd26c923a700441363b1dc4b1aeeb14",
        thumbnail: Thumnail15,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665845/rendition/1080p/file.mp4?loc=external&signature=2650974cdc4c9f42c2ac20e3e66899d70a45f8c1230011eafc13907cf917d5f3",
        thumbnail: Thumnail16,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665670/rendition/1080p/file.mp4?loc=external&signature=5728c74e8fb3073310fcf805a1a60b32b571c441ae437e4424e8fd9c504f6f02",
        thumbnail: Thumnail17,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907665545/rendition/1080p/file.mp4?loc=external&signature=f81498bfcf59e3783476c220552b5729fb7771036ea9666550fd770ac3f2dbbc",
        thumbnail: Thumnail18,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667394/rendition/1080p/file.mp4?loc=external&signature=34f7fe39024c0b9ce15188e07fb6d4a90238c7b9cfcddb2b7688d8541b55c1a4",
        thumbnail: Thumnail19,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667503/rendition/1080p/file.mp4?loc=external&signature=79bff3a91abee33d8e6071d0e4c642d6a6061992b1077cb006f5ca32ab5b1c51",
        thumbnail: Thumnail20,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667817/rendition/1080p/file.mp4?loc=external&signature=62f4e51f50389dad04d8d6658c50e99198503d3ca6d458ef27bac708f6bb7feb",
        thumbnail: Thumnail21,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667958/rendition/1080p/file.mp4?loc=external&signature=a3502c5e8ab318001eebdb072c17871dd6d561ebb9f922a08ef03dc6ffd35fe4",
        thumbnail: Thumnail22,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907667998/rendition/1080p/file.mp4?loc=external&signature=9547d186557ae1c6f51a43880464ed876c4bab48fca0ef0950f36b5c77079872",
        thumbnail: Thumnail23,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/907668204/rendition/1080p/file.mp4?loc=external&signature=a51872dd125be907894841af68d8262c46f584ab3dbcfad7c0f068e9556b98c8",
        thumbnail: Thumnail24,
      }
    ],
    [
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911720231/rendition/1080p/file.mp4?loc=external&signature=d9b02a0f53aa8784b0e3ed063720d29b1970b3e3b399f1d34316482874fdaa86",
        thumbnail: Thumnail25,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911726090/rendition/1080p/file.mp4?loc=external&signature=9e89bcc5fc0c0794397cf4af48ddf2c08a91de61f1595d2508f39fb7db153987",
        thumbnail: Thumnail26,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911729442/rendition/1080p/file.mp4?loc=external&signature=e16f08c552d3f87499d9225879c3819c9a220295567b993dfe101e7a1e2089c3",
        thumbnail: Thumnail27,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724561/rendition/1080p/file.mp4?loc=external&signature=efccabbedd550a6e10912f062b329c284dd086ef4babfb053151a34ea77e6466",
        thumbnail: Thumnail28,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911728642/rendition/1080p/file.mp4?loc=external&signature=44469d3d3ef50562def357cdf05ef68b8d9eb1f6c874c98d4b7a6772c4b7f173",
        thumbnail: Thumnail29,
      },
      {
        video: "https://player.vimeo.com/progressive_redirect/playback/911724677/rendition/1080p/file.mp4?loc=external&signature=32ea21fdd1dded95912051ee5fefdc0deefb2e26b2598ae835cf57397b1a87e6",
        thumbnail: Thumnail30,
      }
    ],
  ];
  const portfolio = {
    title: (<> Our Award-winning Video Animation Fort-Knox. </>),
    para: (<>Experience our video animation and rendering portfolio and see what we have done for <br />our clients globally! </>),
    tabContents: tabContents,
    tabsInfo: true,
    tabInfo: tabInfo,
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Break The Loop with Industry-Leading Explainer Videos ",
    subtitle: "",
    desc: "Build customer loyalty, drive engagement, and attract new audiences with outstanding explainer videos created by Cloud Studios Inc. Our videos effectively explain your product, increasing conversion rates and turning users into loyal customers. By making your product stand out, we enhance brand awareness and build rapport with your audience. These high-quality videos boost ROI by engagingly showcasing new products, services, or brands. Additionally, they simplify complex concepts, educate your audience, and provide clear tutorials with the power of 2D and 3D animation. Enhance your sales and marketing campaigns with expertly crafted explainer videos designed to captivate and convert.",
    branImage: BranShine,
    isBranImage: true,
    css: "mx-auto w-9/12",
    positionCss: "",
    btnTxt: "Make An Animation     +"
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Conceptualization </>,
    cardpara: <>At Cloud Studios Inc., we begin by inviting you to pitch your ideas. Our expert brainstorming team dives deep into understanding your vision and objectives. Through collaborative sessions, we refine concepts, explore creative possibilities, and strategize the best approach to bring your ideas to life. Whether you have a clear direction or need guidance, our goal is to conceptualize a solution that meets and exceeds your expectations.</>,
    css: "",
    imageCss: 'min-w-[250px] max-w-[250px] max-h-[300px] mb-[-33px]',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Writing Scripts</>,
    cardpara: <>Once your concept is solidified, our skilled writers take the reins. They meticulously craft a compelling script that effectively communicates your message. Analyzing every detail of your idea ensures clarity, engagement, and alignment with your brand's voice. Whether a narrative-driven script or a direct, informative approach, our scripts are tailored to captivate your audience and leave a lasting impression. </>,
    css: "",
    imageCss: "absolute right-0 bottom-0",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Storyboarding</>,
    cardpara: <>Storyboarding is where your animation journey takes shape. We meticulously plan every step and phase of your animation process. From defining dialogues and character designs to mapping out audio effects and visual elements, our storyboard artists create a blueprint that guides the entire production. This phase ensures that each frame contributes to a cohesive, engaging story that aligns with your vision. </>,
    css: "absolute bottom-[8px] lg:w-8/12 left-0 right-0 ",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Voice-over and Finishing Touches</>,
    cardpara: <>We seamlessly integrate all elements into a polished animation as we near completion. Our team offers professional voiceover services that complement your video's narrative. Whether you use voiceovers or opt for a script-based approach, we ensure every detail is perfected. This final phase is dedicated to adding finishing touches, refining animations, and providing a seamless flow from start to finish. </>,
    css: "w-auto mb-[-25px]",
    cardImage: Remark13,
  }
  const cardSeven = {
    cardtitle: <></>,
    cardpara: <></>,
    cardImage: "",
  }
  const cardEight = {
    cardtitle: <></>,
    cardpara: <></>,
    cardImage: "",
  }
  const cardTen = {
    cardtitle: <>Rendering and Animation</>,
    cardpara: <>Using cutting-edge tools and software, we start the animation process. Our skilled animators breathe life into your project, meticulously crafting each frame perfectly. We utilize industry-leading rendering techniques to ensure your visuals are stunning and technically flawless. This phase is where your vision transforms into a dynamic animated video ready to captivate your audience and elevate your brand's presence.
    </>,
    css: "w-8/12 mb-[-40px]",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>Our Refined Process for Brand Growth</>,
    para: <>We take the lead on your explainer video production project from the outset, ensuring that our highly talented animators manage each phase effectively and successfully.</>,
    cardOne: cardOne,
    cardTwo: cardTwo,
    cardThree: cardThree,
    cardFour: cardFour,
    cardSeven: cardSeven,
    cardEight: cardEight,
    cardTen: cardTen,
    isHomePage: false,
  }

  // ===== sales
  const sales = {
    title: "Cutting-edge Explainer Video Animation Services are just a tap away!",
    subtitle: "",
    desc: "",
    branImage: SaleShine,
    btnTitle: "Grab your bag of chips, and let's get the ball rolling!"
  }

  // ==== Form
  const formData = {
    title: (<>🔥 Bundle Up More to Save Move on Video Animation Services </>),
    para: (<>🌟 Bundle our top-tier explainer video service with dynamic 2D, immersive 3D, and captivating <br /> motion graphics to unlock a special bundled discount today!</>),
  }

    // ===== OurClient

    const ourClient = {
      title: "See what our clients have to say!",
      para: "Trust Earned is Trust Is Endured!",
      reviewContent: [
        {
          image: Client1,
          title: 'Sophie Harper',
          para: `Cloud Studios Inc. nailed it with our explainer videos! They took our complex product and made it easy to understand and fun to watch. Our engagement skyrocketed, and we're seeing more customers sticking around. Their services have been a game-changer for our brand awareness and customer loyalty. I highly recommend their services to anyone looking to elevate their brand presence! Big thumbs up from us! `
        },
        {
          image: Client2,
          title: 'Liam Collins',
          para: `Shoutout to Cloud Studios Inc. for bringing our ideas to life with awesome animated explainer videos. Their innovative approach to creating animated explainer videos truly brought our vision to life. We saw a notable increase in customer understanding and interest in our services. If you want to impress your audience, these guys are the ones to call! `
        },
        {
          image: Client1,
          title: 'Ava Mitchell',
          para: `Cloud Studios Inc. exceeded our expectations with their stunning explainer videos. The 2D and 3D animation combination was spot on and communicated our message flawlessly. Our clients loved them, too! It's super professional yet totally cool. We couldn't be happier with the results and look forward to future collaborations! I can't recommend them enough!`
        },
        {
          image: Client2,
          title: 'Noah Rodriguez',
          para: `Big props to Cloud Studios Inc. for helping us stand out with their awesome explainer videos! Our sales have increased, and the feedback on the videos has been awesome. The seamless process and fantastic results make Cloud Studios Inc. a standout choice for anyone needing high-quality animation services. It is a game-changer for us!`
        }
      ]
    }
  
  
    // ===== extraOrdinary
    const extraOrdinary = {
      title: (<>Let’s Explain Your Brand Together!</>),
      para: (<>Let your brand grow with our visually compelling explainer video services that bring your story to life and linger in the minds of your audience.</>),
    }


  return (
    <>
      <InnerBanner content={banner} />
      <Form content={formData}/>
      <Animations content={animations} />
      {/* <Portfolio content={portfolio} /> */}
      <Brand content={brands} />
      <Remarkable content={remarkable} />
      {/* <Animation /> */}
      <Brand content={sales} />
      <OurClient content={ourClient}/>
      <Extraordinary content={extraOrdinary}/>
    </>
  )
}

export default page
