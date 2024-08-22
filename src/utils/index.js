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
import ShowWidgetForm from "../components/dashboard/nav/ShowWidgetForm";

import AddWidget from "../components/dashboard/widget/AddWidget";
import Widget from "../components/dashboard/widget/Widget";

import CustomStackBarChart from "../components/common/chart/CustomStackBarChart";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToPrevious = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Always navigate to Home when an undefined route is encountered
    navigate("/");
  }, [navigate]);

  return null; // This component doesn't render anything
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
};
export {
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
  ShowWidgetForm,
  AddWidget,
  Widget,
  Notification,
  Profile,
  SearchBar,
  Footer,
  CustomSplineChart,
  CustomStackBarChart
};
