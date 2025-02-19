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
import BranShine from "media/2d-animation/brandshine.png"
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
import Remark10 from "media/home/remark10.png"
import Remark11 from "media/home/remark11.png"
import Remark12 from "media/home/remark12.png"
import Remark13 from "media/home/remark13.png"
import Remark14 from "media/home/remark14.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "",
    "",
    "",
    "",
    "",
  ]

  const banner = {
    title: <>Forge Better Engagement with 2D Animation Solutions by Cloud Studios Inc.</>,
    para: <>Go beyond the limitations of traditional 2D animation with Cloud Studios' pioneering animation techniques. Our proprietary platform harnesses advanced volumetric data processing to imbue your visual content with unparalleled depth, dynamism, and dimensional impact.</>,
    list: lists,
    isList: false,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916116973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=77fdc5bd531e7ad88bc093f0ed7a0b34f0c4b24122d3d126758e255b1a15575a",
  }
  //==== Animations Sections =====//
  const animations = {
    title: <>Animate Your Digital Frontier </>,
    para: <>Immerse your audience in richly layered visual experiences where characters and environments exude a palpable sense of solidity, weight, and spatial realism. Our innovative workflows seamlessly integrate with your existing 2D toolsets, empowering you to uncompromisingly achieve your most ambitious design visions. Leveraging the power of our advanced 2D animation tools and techniques, our animated content significantly boosts message retention by up to 80% compared to static imagery.</>,
    subtitleOne: <>Pushing the Boundaries of 2D Storytelling</>,
    subtitleTwo: <>Your Holistic Animation Studio</>,
    subpara: <>Cloud Studios' pioneering approach to 2D animation empowers brands to exceed the medium's traditional constraints. Our solutions elevate 2D visuals with depth, fluidity, and emotional resonance by integrating cutting-edge motion capture technology and generative AI algorithms. This allows marketers to craft dynamic, immersive narratives that forge deep, lasting connections with their target audiences. With Cloud Studios leading the charge, the future of 2D animation is poised to rewrite the rules of visual engagement.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916096653/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2c1fbdcd7282fe2b314ed51948a2b8195b14b7d762295e12e88097ea4fc583e2",
  }

  // ==== Form
  const formData = {
    title: (<>🔥 Special Bundle Offers on Video Animation & So Much More! </>),
    para: (<>🌟 Bundle a motion graphics package with any animation order and save 25% off the combined price – experience the <br /> best-in-class video animation solutions today!</>),
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
    title: (<> Our Award-winning Video Animation Fort-Knox </>),
    para: (<>Experience our 2D animation and rendering portfolio and see what we have done for <br />our clients globally! </>),
    tabContents: tabContents,
    tabsInfo: true,
    tabInfo: tabInfo,
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Experience Multi-channel Success Through Video Animation!",
    subtitle: "",
    desc: "At the heart of Cloud Studios' custom 2D animation solutions lies a pioneering synthesis of cutting-edge technologies. By leveraging the real-time 3D volumetric capture, our team can directly transfer live-action performances' exact physicality and expressive movements into vivid 2D frames. This unique technique retains the organic, human-centric elements that captivate consumers on a deeper emotional level. Complemented by advanced procedural techniques that generate dynamic backgrounds and environments, the result is 2D content that defies the medium's traditional limitations, delivering dimensional depth, cinematic immersion, and brand resonance that captivates viewers while strengthening tangible business impact. ",
    branImage: BranShine,
    isBranImage: true,
    css: "w-9/12 ml-auto",
    positionCss: "",
    btnTxt: "Make An Animation     +"
  }

  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Concept Ideation and Storyboard </>,
    cardpara: <>Our creative team works closely with clients to capture their brand essence and creative vision into a cohesive narrative blueprint. Using powerful storyboarding tools, we methodically plan each scene, specifying the camera angles, character movements, and emotional beats that will serve as the foundation for the animated content. This strategic planning process ensures that the final animation is consistent with the client's goals and effectively communicates with the intended audience.</>,
    css: "w-8/12 mx-auto",
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Motion Capture and Performance Optimization</>,
    cardpara: <>We use cutting-edge motion capture technology to give our 2D animations a lifelike, human-centered quality. By precisely converting the tiny details of live-action performances into 2D keyframes, we can maintain the organic fluidity and expressive dynamism that engages viewers on a deeper emotional level. Our team then fine-tunes these digitized movements with unique animation optimization algorithms, effortlessly combining the authenticity of live action with the freedom of motion of hand-drawn animation. </>,
    css: " before:content-[''] before:h-[60%] before:w-full before:bg-[url('../../public/home/card_image-bg.png')] before:bg-cover before:bg-no-repeat before:bg-center before:absolute before:left-0 before:bottom-0 before:rounded-b-[15px] before:z-[-1] z-[999999999]",
    imageCss: 'w-full',
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Procedural Environment Generation</>,
    cardpara: <>Recognizing that spatial depth is essential for immersive 2D storytelling, we use complex procedural techniques to dynamically produce the backgrounds, environments, and atmospheric elements that frame our animated stories. This generative approach enables us to build rich cinematic backdrops that evolve spontaneously in rhythm with the characters' actions, resulting in a genuine sense of three-dimensional space that defies the usual restrictions of 2D animation.  </>,
    css: "",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Immersive Audio Integration, Adaptive Cinematography </>,
    cardpara: <>The use of rich, dramatic audio design enhances our 2D animations. By working collaboratively with award-winning composers and sound engineers, we create cinematic soundscapes that amplify the emotional impact of our animated stories. Our audio integration approach offers a genuinely immersive viewing experience, with visceral sound effects that bring the on-screen action to life and compelling musical soundtracks that accentuate the characters' internal journeys. </>,
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
    cardtitle: <>Integrative Brand Storytelling</>,
    cardpara: <>The final stage of our 2D animation production is to seamlessly integrate the client's brand identity, messaging, and creative vision into the final animated content. Our team collaborates closely with in-house branding professionals to ensure that each visual aspect, from character design to color palette, captures the essence of the client's brand. This comprehensive method yields 2D animations that engage the audience and foster deep, long-term ties between the company and its customers.
      <br /><br />
      THAT’S IT! The culmination of our innovative techniques results in a stunning 2D animation masterpiece - one that's ready to captivate your audience. Our team will deliver the final, high-definition 1080p video file in your MOV or MP4 format, providing you with a turnkey solution primed for immediate impact.
      <br /><br />
      So, Get ready to unlock the next dimension of 2D storytelling for your brand. Contact Cloud Studios today to get started on your custom animation project.
    </>,
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>How do we elevate the ordinary to the extraordinary?</>,
    para: <>At Cloud Studios, we don't settle for good enough; we strive for extraordinary outcomes. The key to our success is our unwavering determination to extract every ounce of potential from even the most arduous challenges. Our team goes above and beyond to provide excellent video animation products.</>,
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
    title: "Cutting-edge 2D Animation Services are just a tap away!",
    subtitle: "",
    desc: "",
    branImage: SaleShine,
    btnTitle: "Grab your bag of chips, and let's get the ball rolling!"
  }

  // ===== OurClient

  const ourClient = {
    title: "See what our clients have to say!",
    para: "Trust Earned is Trust Is Endured!",
    reviewContent: [
      {
        image: Client1,
        title: 'Sophia Alvarez',
        para: `Cloud Studios' 2D animation work is nothing short of awe-inspiring. The seamless integration of traditional artistry and cutting-edge technology results in breathtakingly beautiful and emotionally resonant visuals. Their creations transport the viewer to fully realized, captivating worlds.`
      },
      {
        image: Client2,
        title: 'Liam Donovan',
        para: `Cloud Studios exceeded all our expectations, delivering a masterpiece that captivated our audience from the first frame. Their team's unparalleled creativity and technical mastery are genuinely remarkable. `
      },
      {
        image: Client1,
        title: 'Isabella Gutierrez ',
        para: `Cloud Studios' 2D animations are infused with a palpable energy and emotional depth that elevates the art form. They have redefined what is possible, crafting cinematic experiences that leave a lasting impression on the viewer. Collaborating with their passionate and innovative team was an absolute privilege.`
      },
      {
        image: Client2,
        title: 'Ethan Kang',
        para: `In a saturated market of generic 2D animation, Cloud Studios stands out as true visionaries. Their work looks beautiful and tells captivating stories that forge deep, lasting connections with the audience. I have never encountered a team that combines technical brilliance with such boundless creativity.`
      }
    ]
  }


  // ===== extraOrdinary
  const extraOrdinary = {
    title: (<>Reach New Creative Heights with Cloud Studios' Dimensional 2D Animation!</>),
    para: (<>Harness the limitless potential of 2D animation services to elevate your brand's storytelling and enter the new world of artistic brilliance.</>),
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
      <OurClient content={ourClient} />
      <Extraordinary content={extraOrdinary} />
    </>
  )
}

export default page
