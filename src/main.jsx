import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './ClientSide/Pages/HomePage/Home/Home';
import AboutUsPage from './ClientSide/Pages/AboutUsPage/AboutUsPage';
import VideoGraphy from './ClientSide/Pages/VideoGraphy/VideoGraphy';
import BrandingPage from './ClientSide/Pages/BrandingPage/BrandingPage';
import WebDesignPage from './ClientSide/Pages/WebDesignPage/WebDesignPage';
import BlogPage from './ClientSide/Pages/BlogPage/BlogPage';
import WebDesignFirst from './ClientSide/Pages/WebDesignPage/WebDesignFirst';
import BlogDetailsFirst from './ClientSide/Pages/BlogPage/BlogDetailsFirst';
import Photography from './ClientSide/Pages/PhotographyPage/Photography';
import PortFolioVideographyFirst from './ClientSide/Pages/PortFolioPages/PortFolioVideography/PortFolioVideographyFirst';
import PortFolioVideography from './ClientSide/Pages/PortFolioPages/PortFolioVideography/PortFolioVideography';
import PortFolioPhotography from './ClientSide/Pages/PortFolioPages/PortFolioPhotography/PortFolioPhotography';
import PortFolioBranding from './ClientSide/Pages/PortFolioPages/PortFolioBranding/PortFolioBranding';
import PortFolioWebDesign from './ClientSide/Pages/PortFolioPages/PortFolioWebDesign/PortFolioWebDesign';
import BlogMainPage from './ClientSide/Pages/BlogMainPage/BlogMainPage';
import SinglePortFolioBranding from './ClientSide/Pages/PortFolioPages/PortFolioBranding/SinglePortFolioBranding.jsx';
import InduvisualBrandingTwo from './ClientSide/Pages/PortFolioPages/PortFolioBranding/InduvisualBrandingTwo.jsx';
import InduvisualBrandingThree from './ClientSide/Pages/PortFolioPages/PortFolioBranding/InduvisualBrandingThree.jsx';
import PortFolioVideographySBD from './ClientSide/Pages/PortFolioPages/PortFolioVideography/PortFolioVideographySBD.jsx';
import PortFolioVideoTeo from './ClientSide/Pages/PortFolioPages/PortFolioVideography/PortFolioVideoTeo.jsx';
import PortFolioVideoaJnnah from './ClientSide/Pages/PortFolioPages/PortFolioVideography/PortFolioVideoaJnnah.jsx';
import PortFolioVideominneapolis from './ClientSide/Pages/PortFolioPages/PortFolioVideography/PortFolioVideominneapolis.jsx';
import PortFolioVideoCOFMHD from './ClientSide/Pages/PortFolioPages/PortFolioVideography/PortFolioVideoCOFMHD.jsx';
import TermsAndCondition from './ClientSide/Pages/TermsAndCondition/TermsAndCondition.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path : "/aboutUs",
    element: <AboutUsPage></AboutUsPage>
  },
  {
    path :"/photography",
    element: <Photography></Photography>
  },

  
  {
    path :"/videoGraphy",
    element: <VideoGraphy></VideoGraphy>
  },
  
  
  {
    path :"/branding",
    element: <BrandingPage></BrandingPage>
  },

  {
    path :"/webDesign",
    element: <WebDesignPage></WebDesignPage>
  },

  {
    path :"/blog",
    element: <BlogPage></BlogPage>
  },
  {
    path : "/blogs",
    element:<BlogMainPage></BlogMainPage>
  },

  // ========================= Porfolio Routes ==============

  {
    path:"/PortFolioVideoGraphy",
    element: <PortFolioVideography></PortFolioVideography>
  },

  {
    path: "/PortFolioVideoGraphyFirst",
    element : <PortFolioVideographyFirst></PortFolioVideographyFirst>
  },

  {
    path: "/PortFolioVideographySBD",
    element : <PortFolioVideographySBD></PortFolioVideographySBD>
  },
  {
    // path: "/PortFolioVideoTeo",
    path: "/PortFolioVideoShamilMirza",
    element : <PortFolioVideoTeo></PortFolioVideoTeo>
  },
  // {
  //   path: "/PortFolioVideoTeo",
  //   // path: "/PortFolioVideoShamilMirza",
  //   element : <PortFolioVideoTeo></PortFolioVideoTeo>
  // },
  {
    path: "/PortFolioVideoaJnnah",
    element : <PortFolioVideoaJnnah></PortFolioVideoaJnnah>
  },
  {
    path: "/PortFolioVideominneapolis",
    element : <PortFolioVideominneapolis></PortFolioVideominneapolis>
  },
  {
    // path: "/PortFolioVideoCOFMHD",
    path: "/PortFolioVideoIslamCollective",
    element : <PortFolioVideoCOFMHD></PortFolioVideoCOFMHD>
  },

  {
    path : "/PortFolioPhotography",
    element : <PortFolioPhotography></PortFolioPhotography>
  },

  {
      path : "/PortFolioBranding",
      element: <PortFolioBranding></PortFolioBranding>
  },
  {
      path :"/SinglePortFolioBranding",
      element : <SinglePortFolioBranding></SinglePortFolioBranding>
  } ,
  {
      path : "/PortFolioWebDesign",
      element: <PortFolioWebDesign></PortFolioWebDesign>
  },

  {
    path: "/WebDesignFirst",
    element : <WebDesignFirst></WebDesignFirst>
  },

  {
    path: "/BlogDetailsFirst",
    element : <BlogDetailsFirst></BlogDetailsFirst>
  },
  {
    path : "/InduvisualBrandingTwo",
    element : <InduvisualBrandingTwo></InduvisualBrandingTwo>
  } ,

  {
    path : "/InduvisualBrandingThree",
    element : <InduvisualBrandingThree></InduvisualBrandingThree>
  },
  {
    path : "/termsAndConditions",
    element : <TermsAndCondition/>
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
