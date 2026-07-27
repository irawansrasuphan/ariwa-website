const products = [
  {
    name: "Chyron",
    type: "broadcast",

    desc: "A global leader in live broadcast production creation, playout and real-time data visualization for television, news, sports, and more.",

    url: "https://chyron.com/",

    logo: "assets/logos/chyron.png",

    products: [
      {
        name: "PRIME CG",
        image: "assets/products/chyron/Prime-CG.png",
      },

      {
        name: "CAMIO",
        image: "assets/products/chyron/Camio.png",
      },

      {
        name: "PAINT",
        image: "assets/products/chyron/Paint.png",
      },

      {
        name: "Virtual Placement",
        image: "assets/products/chyron/Virtual-Placement.png",
      },

      {
        name: "PRIME VSAR",
        image: "assets/products/chyron/Prime-vsar.png",
      },

      {
        name: "LIVE",
        image: "assets/products/chyron/Live.png",
      },
    ],
  },

  {
    name: "wTVision",
    type: "broadcast",
    desc: "wTVision provides real-time graphics, data integration, and broadcast automation solutions for live sports and television production.",
    url: "https://www.wtvision.com",
    logo: "assets/logos/wTVision.png",

    products: [
      {
        name: "SportStats Suite",
        image: "assets/products/wTVision/Sportstats-Suite.png",
      },
      {
        name: "AR³ Football",
        image: "assets/products/wTVision/AR3-Footbal.png",
      },
      {
        name: "Studio CG",
        image: "assets/products/wTVision/Studio-CG.png",
      },
    ],
  },

  {
    name: "Vizrt",
    type: "broadcast",

    desc: "Vizrt is a global leader in real-time graphics, live production, and video production solutions. Its technology powers broadcasters, content creators, and live events worldwide.",

    url: "https://www.vizrt.com/",

    logo: "assets/logos/Vizrt.png",

    products: [
      {
        name: "TriCaster Mini X",
        image: "assets/products/Vizrt/Tricaster-minix.png",
        desc: "Compact live production system designed for professional video switching, streaming, recording, and content creation.",
      },

      {
        name: "TriCaster Mini S",
        image: "assets/products/Vizrt/Tricaster-minis.png",
        desc: "Portable live production solution with integrated switching, streaming, and video production capabilities.",
      },

      {
        name: "TriCaster 1 Pro",
        image: "assets/products/Vizrt/Tricaster-1Pro.png",
        desc: "Professional live production platform supporting advanced switching, graphics, streaming, and broadcast workflows.",
      },

      {
        name: "TriCaster TC1",
        image: "assets/products/Vizrt/Tricaster-TC1.png",
        desc: "High-performance IP-based live production system for broadcast, sports, and large-scale production environments.",
      },
    ],
  },

  {
    name: "NDI",
    type: "ip",
    desc: "connectivity technology enables thousands of products and organizations to create better multimedia experiences, more efficient setups, and unlock new AV use cases through IP.",
    url: "https://ndi.video/",
    logo: "assets/logos/NDI.png",
    video: "45au-dm3bs4",
  },

  {
    name: "Kiloview",
    type: "ip",

    desc: "A global leader in AV over IP solutions, specializing in hardware and software for encoding, decoding, and managing video streams over IP networks. They are widely used in live streaming, broadcasting, and corporate AV.",

    url: "https://www.kiloview.com/en/",

    logo: "assets/logos/Kiloview.png",

    products: [
      {
        name: "N60",
        image: "assets/products/Kiloview/N60.png",
      },

      {
        name: "N50",
        image: "assets/products/Kiloview/N50.png",
      },

      {
        name: "P3",
        image: "assets/products/Kiloview/P3.png",
      },

      {
        name: "E3",
        image: "assets/products/Kiloview/E3.png",
      },
    ],
  },

  {
    name: "Magewell",
    type: "ip",

    desc: "Designs and develops innovative hardware and software for media capture, conversion and streaming.",

    url: "https://www.magewell.com/",

    logo: "assets/logos/Magewell.png",

    magewell: true,

    products: [
      {
        name: "Pro Convert",

        subProducts: [
          {
            name: "HDMI 4K Plus",
            image: "assets/products/Magewell/pro-Convert/HDMI-4K-Plus.png",
          },

          {
            name: "HDMI Plus",
            image: "assets/products/Magewell/pro-Convert/HDMI-Plus.png",
          },

          {
            name: "HDMI TX",
            image: "assets/products/Magewell/pro-Convert/HDMI-TX.png",
          },

          {
            name: "12G SDI 4K Plus",
            image: "assets/products/Magewell/pro-Convert/12G-SDI-4K-Plus.png",
          },

          {
            name: "SDI 4K Plus",
            image: "assets/products/Magewell/pro-Convert/SDI-4K-Plus.png",
          },

          {
            name: "SDI TX",
            image: "assets/products/Magewell/pro-Convert/SDI-TX.png",
          },

          {
            name: "NDI to HDMI",
            image: "assets/products/Magewell/pro-Convert/for-NDI-to-HDMI.png",
          },

          {
            name: "NDI to HDMI 4K",
            image:
              "assets/products/Magewell/pro-Convert/for-NDI-to-HDMI-4K.png",
          },

          {
            name: "NDI to AIO",
            image: "assets/products/Magewell/pro-Convert/for-NDI-to-AIO.png",
          },

          {
            name: "NDI to SDI",
            image: "assets/products/Magewell/pro-Convert/for-NDI-to-SDI.png",
          },

          {
            name: "AES67",
            image: "assets/products/Magewell/pro-Convert/AES67.png",
          },

          {
            name: "SDI Plus",
            image: "assets/products/Magewell/pro-Convert/SDI-Plus.png",
          },

          {
            name: "Audio Dx",
            image: "assets/products/Magewell/pro-Convert/Audio-DX.png",
          },
        ],
      },

      {
        name: "Director Mini",
        image: "assets/products/Magewell/Director mini.png",
      },
    ],
  },
  {
    name: "PTZOptics",
    type: "ip",
    desc: "Professional PTZ cameras for broadcast, education and live streaming.",
    features: [] /*เอาแค่ลิงค์เว็บไซต์ */,
    url: "https://ptzoptics.com/",
    logo: "assets/logos/PTZOptics.png",
  },

  {
    name: "Telycam",
    type: "ip",
    desc: "Offers innovative PTZ cameras, video conferencing solutions, and joystick controllers for professional video production and seamless communication.",
    features: [] /*เอาแค่ลิงค์เว็บไซต์ */,
    url: "https://telycam.com/ndi-ip-ptz-camera",
    logo: "assets/logos/Telycam.png",
  },

  {
    name: "SNS",

    type: "broadcast",

    desc: "Studio Network Solutions provides EVO shared storage solutions for media workflows.",

    url: "https://www.studionetworksolutions.com/",

    logo: "assets/logos/sns.png",

    products: [
      {
        name: "EVO Shared Storage",

        subProducts: [
          {
            name: "EVO-16-Bay",
            image: "assets/products/SNS/EVO-Shared-Storage/EVO-16-Bay.png",
          },

          {
            name: "EVO-8-Bay Short Depth",
            image:
              "assets/products/SNS/EVO-Shared-Storage/EVO-8-Bay-short-depth.png",
          },

          {
            name: "EVO-8-Bay",
            image: "assets/products/SNS/EVO-Shared-Storage/EVO-8-Bay.png",
          },

          {
            name: "EVO-MOD",
            image: "assets/products/SNS/EVO-Shared-Storage/EVO-MOD.png",
          },

          {
            name: "EVO-Nearline",
            image: "assets/products/SNS/EVO-Shared-Storage/EVO-Nearline.png",
          },

          {
            name: "EVO-Prodigy-1U",
            image: "assets/products/SNS/EVO-Shared-Storage/EVO-Prodigy-1U.png",
          },
          {
            name: "EVO-Prodigy-Desktop",
            image:
              "assets/products/SNS/EVO-Shared-Storage/EVO-Prodigy-Desktop.png",
          },
        ],
      },

      {
        name: "EVO Suite",

        image: "assets/products/SNS/EVO-Suite.png",
      },
    ],
  },
  {
    name: "Step Out",
    type: "ai",

    desc: "The first online sports ecosystem that transforms sports analysis and player development.",

    url: "https://www.stepout.ai/en",

    logo: "assets/logos/stepout.png",

    products: [
      {
        name: "Network Analysis",
        image: "assets/products/Step out/Network_Analysis.png",
      },

      {
        name: "Spotlight",
        image: "assets/products/Step out/Spotlight.png",
      },

      {
        name: "Vector Map",
        image: "assets/products/Step out/Vector_Map.png",
      },

      {
        name: "Activity Map",
        image: "assets/products/Step out/Activity_Map.png",
      },
    ],
  },
  {
    name: "SponixTech",
    type: "ai",

    desc: "A technology company that provides solutions and services which helps broadcasters, TV channels and advertisers increase viewers and enhance fan.",

    url: "https://sponixtech.com/",

    logo: "assets/logos/sponixtec.png",

    videos: [
      {
        name: "SPov",
        video:
          "assets/products/Sponixtech/Rodri-Or-Vinicius-Junior-Immersive-Highlights-Final-Winners-1-1.mp4",
      },

      {
        name: "SPboard",
        video:
          "assets/products/Sponixtech/Spboard-Compare-Brazil-Vs-Morocco-Germany-Vs-Peru-2-1-1.mp4",
      },
    ],
  },

  {
    name: "Isthari",
    type: "ai",
    desc: "A revolutionary video and audio contribution platform that provides secure remote communication without any app or software installation.",
    features: [] /*เอาแค่ลิงค์เว็บไซต์ */,
    url: "https://www.isthari.com/",
    logo: "assets/logos/Isthari.png",
  },

  {
    name: "Joymechanix",
    type: "broadcast",

    desc: "Creates robotic camera motion systems, customized for you 3D cable cams, rail cams, high-speed cable cams, gimbals, jibs.",

    url: "https://joymechanix.com/",

    logo: "assets/logos/Joymechanix.png",

    products: [
      {
        name: "JM 1.3 Studio",
        image: "assets/products/Joymechanix/JM1.3-Studio.png",
      },

      {
        name: "JM 2.3 Universal",
        image: "assets/products/Joymechanix/JM2.3-Universal.png",
      },

      {
        name: "Sailfish",
        image: "assets/products/Joymechanix/Sailfish.png",
      },

      {
        name: "Fly Smarter: Customizable controls with your software co-pilot",
        video:
          "assets/products/Joymechanix/JoyMechanix Software Overview (ES_EN subtitles).mp4",
      },
    ],
  },
];
