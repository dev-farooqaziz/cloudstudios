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
import BranShine from "media/promotional-videos/brandshine.png"
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
import Remark10 from "media/home/remark28.png"
import Remark11 from "media/home/remark29.png"
import Remark12 from "media/home/remark30.png"
import Remark13 from "media/home/remark31.png"
import Remark14 from "media/home/remark32.png"


const page = () => {

  //===== Banner Section====//
  const lists = [
    "- No Limits to Creativity",
    "- No Actors or Sets Required",
    "- Easy & Quick to Make Changes",
    "- Increased Audience Engagements",
    "- Greater Return on Investments",
  ]

  const banner = {
    title: <>Excel Sales &  Marketing Practices
      with Promotional Videos </>,
    para: <></>,
    list: lists,
    isList: true,
    bannerImage: "https://player.vimeo.com/progressive_redirect/playback/916123936/rendition/2160p/file.mp4?loc=external&log_user=0&signature=24c295b2c8335f8419c5c7601315f8870ddbfdd2f5baa61704aaacbd7445a43f",
  }

  // ==== Form
  const formData = {
    title: (<>🔥 Unlock Exclusive Savings with Our Bundled Video Animation Services & More! </>),
    para: (<>🌟 Combine any promotional video order with any motion graphics or animation package to save big! Take advantage<br /> of this limited-time offer and bring your vision to life with stunning animations that tell your story. </>),
  }

  //==== Animations Sections =====//
  const animations = {
    title: <>Let The Promotional Video Do All the Talking!</>,
    para: <>Animated product promotional videos are a powerful tool to simplify complex concepts, making them easily digestible for your audience. They enhance user engagement, boost retention rates, and ultimately drive conversions. By illustrating your product’s features and benefits in a visually appealing manner, our promotional videos help build trust and credibility with your customers. Moreover, our animations are optimized for various platforms; this versatility makes it easier to reach a wider audience and enhance your marketing efforts. Whether launching a new product, explaining a service, or educating your customers, our animations provide a professional edge that sets you apart from the competition</>,
    subtitleOne: <>Pitch Your Brand’s USP with Powerful Promo Videos </>,
    subtitleTwo: <>Give Your Business A Face Value Your Customer Never Forgets</>,
    subpara: <>Reinvent your brand’s marketing campaigns, build customer loyalty, and reinforce your brand with high-quality animated product promotional videos created by Cloud Studios Inc. Our expertly designed animations capture the audience’s attention in just a blink of an eye and convey your unique selling proposition (USP) compellingly. If you want to express your brand’s value proposition interactively – Capitalize on our promotion videos and give your brand the exposure it needs. Make your investments with the right video animation company – Cloud Studios Inc., where we help elevate your marketing campaigns, foster customer loyalty, and solidify your brand presence with our top-notch animation services.</>,
    AnimationVideo: "https://player.vimeo.com/progressive_redirect/playback/916123974/rendition/1440p/file.mp4?loc=external&log_user=0&signature=9d6d78c0847109390b98e85f6664c9604c11f6f12253752ce898a64919140440",
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
    para: (<>Immerse yourself in our portfolio of high-impact promotional videos. Witness how our innovative animations<br /> drive engagement, boost conversions, and redefine brand success for our clients globally!</>),
    tabContents: tabContents,
    tabsInfo: true,
    tabInfo: tabInfo,
    bg: "bg-[#F3F3F3]"
  };

  // ==== brands Start
  const brands = {
    title: "Revolutionize Your Marketing Efforts with Promotional Content ",
    subtitle: "",
    desc: "Transform your marketing campaigns with Cloud Studios Inc.'s attention-grabbing promotional videos. Our animations are designed to increase brand exposure and reach new customers, ensuring your business stands out in a crowded market. By leveraging our tailor-made promotional animations across social media channels to engage a broad audience and maximize impact. Partner with Cloud Studios Inc. to reform your brand and achieve unparalleled marketing success.",
    branImage: BranShine,
    isBranImage: true,
    css: "mx-auto w-9/12",
    positionCss: "",
    btnTxt: "Make An Animation     +"
  }
  //==== remarkable start =====//

  const cardOne = {
    cardtitle: <>Understanding Your Concept</>,
    cardpara: <>At Cloud Studios, we begin by thoroughly understanding your requirements to ensure the final product aligns perfectly with your vision. Our highly qualified experts dive deep into understanding your desired animation style, vision, and length to deliver a tailored animation experience</>,
    css: "mb-[-52px]",
    imageCss: 'min-w-[250px] max-w-[250px] max-h-[300px] mb-[-33px]',
    cardImage: Remark10,
  }
  const cardTwo = {
    cardtitle: <>Storyboard and Sequencing</>,
    cardpara: <>The production journey starts with meticulous storyboarding. We create a detailed graphic representation of your animated video, shot by shot. Each frame is carefully illustrated, accompanied by notes that outline the narrative and actions unfolding on screen, ensuring a coherent and engaging visual story. </>,
    css: "",
    imageCss: "absolute right-0 bottom-[-17px] w-full",
    cardImage: Remark11,
  }
  const cardThree = {
    cardtitle: <>Animation</>,
    cardpara: <>Harnessing our creative expertise, we bring your storyboard to life in this phase. By integrating voice-overs, illustrations, and scripts, we craft a visually stunning and emotionally engaging animation that captivates your audience and communicates your message effectively. </>,
    css: "absolute bottom-[-1px] lg:w-full left-0 right-0 ",
    cardImage: Remark12,
  }
  const cardFour = {
    cardtitle: <>Editing and Post Production</>,
    cardpara: <>In the refining phase, we meticulously review the animation, ensuring every detail is polished to perfection. We fine-tune transitions, adjust timing, and incorporate feedback to guarantee a seamless and impactful final product that exceeds your expectations. </>,
    css: "w-full absolute bottom-0 left-0",
    cardCss: "h-full min-h-[560px]",
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
    cardtitle: <>Delivery and Feedback</>,
    cardpara: <>Upon completion, we will deliver your finalized animation and welcome your feedback. Your satisfaction is our priority, and we're committed to ensuring the animation aligns with your vision and objectives. We provide support throughout the delivery process, ensuring a smooth experience from start to finish.
      <br /><br />
      AND WE ARE DONE! The result? An attention-grabbing promotional video masterpiece that will mesmerize your audience. Your final video will be delivered in stunning high-definition 1080p quality, available in MOV or MP4 format for effortless integration into your marketing campaigns. With Cloud Studios Inc., you can expect a scalable solution poised to make an immediate and lasting impact."
    </>,
    css: "w-10/12 mb-[-40px]",
    cardImage: Remark14,
  }

  const remarkable = {
    title: <>Sneak Peek to Our 3D Animation Production Process That Drives Results!</>,
    para: <>Discover the meticulous steps behind Cloud Studios Inc.'s exceptional promo video production process, designed to deliver outstanding results.<br /> From crafting compelling scripts to creating immersive 2D/3D cartoon animation videos and adding professional voiceovers,<br /> we do it all to make your project ‘A BIG HIT.’ </>,
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
    title: "Cutting-edge promotion videos are just a tap away!",
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
        title: 'Matthew Roberts',
        para: `Cloud Studios Inc. has been an absolute pleasure to work with. Their team demonstrated absolute professionalism from the initial concept discussions to the final delivery. They took our vision and turned it into a masterpiece—a promotional video that captured our brand's essence and resonated deeply with our audience. We look forward to collaborating with Cloud Studios on future projects!`
      },
      {
        image: Client2,
        title: 'Samantha Davis',
        para: `I cannot speak highly enough of Cloud Studios Inc. Their technical expertise in creating high-definition HD promo videos is exceptional. They approached our promotional video project enthusiastically and creatively, ensuring everything—from script development to animation and post-production—was handled precisely. I loved the result; it was a visually stunning and impactful video. I would recommend them to anyone looking to elevate their brand through animation. `
      },
      {
        image: Client1,
        title: 'Daniel Evans',
        para: `Choosing Cloud Studios Inc. for our promotional video was one of our best decisions. Their team understood our vision and brought it to life in a way that surpassed all our hopes. The dedication and professionalism they displayed throughout the process were remarkable. They listened to our feedback, incorporated our ideas seamlessly, and delivered a final product that impressed us. `
      },
      {
        image: Client2,
        title: 'Victoria Lee',
        para: `Working with Cloud Studios Inc. was a transformative experience for our marketing team. They took the time to understand our brand's unique voice and audience, ensuring that every frame of our promotional video was crafted to perfection. Their creative approach and technical proficiency resulted in a video that captured our attention and effectively communicated our message. We are thrilled with the outcome and grateful for the collaborative and professional partnership we found with Cloud Studios.`
      }
    ]
  }

  // ===== extraOrdinary
  const extraOrdinary = {
    title: (<>Let’s Conceptualize and Design Your Idea with Creative Professionals!</>),
    para: (<>Let us help you kickstart your marketing campaign with eye-catching company promo videos for your business. Rise Above the Clatter with First-Class Promotional Videos!</>),
  }


  return (
    <>
      <InnerBanner content={banner} />
      <Form content={formData} />
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
