import NavBar from "../components/nav/NavBar";
import Notification from "../components/nav/Notification";
import Profile from "../components/nav/Profile";
import SearchBar from "../components/nav/SearchBar";

import Home from "../components/home/Home";

import MenuItems from "../components/common/MenuItems";
import RightSlider from "../components/common/RightSlider";
import CustomPieChart from "../components/common/chart/CustomPieChart";
import CustomSplineChart from "../components/common/chart/CustomSplineChart";

import Dashboard from "../components/dashboard/Dashboard";

import DashNav from "../components/dashboard/nav/DashNav";
import History from "../components/dashboard/nav/History";
import MenuBtn from "../components/dashboard/nav/MenuBtn";
import PersonalizeDashboard from "../components/dashboard/nav/PersonalizeDashboard";
import Refreshbtn from "../components/dashboard/nav/Refreshbtn";
import DisplayWidgetForm from "../components/dashboard/nav/DisplayWidgetForm";

import AddWidget from "../components/dashboard/widget/AddWidget";
import Widget from "../components/dashboard/widget/Widget";
import WidgetForm from "../components/dashboard/widget/WidgetForm";

import CustomStackBarChart from "../components/common/chart/CustomStackBarChart";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WidgetDashboard from "../components/common/WidgetDashboard";

 import NotFound from "../components/common/NotFound";

const RedirectToPrevious = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return null; 
};

export default RedirectToPrevious;

import location from "/assets/location.gif";
import discordBW from "/assets/discordBW.png";
import discord from "/assets/discord.png";
import phone from "/assets/call.gif";
import github from "/assets/github.png";
import githubBW from "/assets/githubBW.png";
import linkedin from "/assets/linkedin.png";
import linkedinBW from "/assets/linkedinBW.png";
import mail from "/assets/sending-mail.gif";
import twitter from "/assets/twitter.png";
import twitterBW from "/assets/twitterBW.png";
import notFound from "/assets/notFound.png"
export {
  location,
  discord,
  discordBW,
  phone,
  github,
  githubBW,
  linkedin,
  linkedinBW,
  mail,
  twitter,
  twitterBW,
  notFound
};
export {
  NotFound,
  NavBar,
  Home,
  Dashboard,
  RightSlider,
  MenuItems,
  CustomPieChart,
  RedirectToPrevious,
  DashNav,
  History,
  MenuBtn,
  PersonalizeDashboard,
  Refreshbtn,
  DisplayWidgetForm,
  AddWidget,
  Widget,
  Notification,
  Profile,
  SearchBar,
  Footer,
  CustomSplineChart,
  CustomStackBarChart,
  WidgetForm,
WidgetDashboard
};
