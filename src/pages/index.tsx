"use client";

import React from "react";
import Head from "next/head";
import { IBM_Plex_Sans_Devanagari } from "next/font/google";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { Button, FormControl, Input } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import buttonTheme from "@/styles/theme";
import { collection, addDoc } from "firebase/firestore";
import { database } from "@/config/firebase";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ibm = IBM_Plex_Sans_Devanagari({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const [state, setState] = useState({
    open: false,
    vertical: "top" as const,
    horizontal: "center" as const,
  });

  const { vertical, horizontal, open } = state;

  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    city: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleClickRegister = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(
        collection(database, "registrationLandingPage"),
        {
          companyName: formData.companyName,
          city: formData.city,
          website: formData.website,
          email: formData.email,
        }
      );
      console.log("Document written with ID: ", docRef.id);
      setState({ ...state, open: true });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setFormData({
      companyName: "",
      website: "",
      city: "",
      email: "",
    });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const isFormValid = () => {
    if (
      formData.companyName === "" ||
      formData.website === "" ||
      formData.email === "" ||
      formData.city === ""
    ) {
      return false;
    }
    return true;
  };

  const isNameValid = () => {
    const name = formData.companyName;
    const re = /^[a-zA-Z']+([ -][a-zA-Z']+)*$/;
    return re.test(name);
  };

  const isCityValid = () => {
    const city = formData.city;
    const re = /^[a-zA-Z']+([ -][a-zA-Z']+)*$/;
    return re.test(city);
  };

  const isEmailValid = () => {
    const email = formData.email;
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const isWebsiteValid = () => {
    const website = formData.website;
    const re =
      /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(website);
  };

  const isFieldEmpty = (field: string) => {
    if (field === "") {
      return true;
    }
    return false;
  };

  function handleLoginClick() {
    window.location.href = "https://pro.worldwideconnexion.com/";
  }

  function handleJoinusClick() {
    const joinus_section = document.getElementById("joinus") as HTMLElement;
    joinus_section.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollClick() {
    const scroll_section = document.getElementById(
      "second_page"
    ) as HTMLElement;
    scroll_section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <Head>
        <title>Worldwide Connexion</title>
        <meta name="description" content="Worldwide Connexion landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Parallax speed={0} style={{ zIndex: 2, backgroundColor: "#f2f2f2" }}>
          <div className={`${styles.group_container}`}>
            <div className={`${styles.container}`}>
              <div className={`${styles.container_left}`}>
                <Header />
                <div className={`${styles.title_container}`}>
                  <h1 className={`${styles.title} ${ibm.className}`}>
                    The world of art <br />
                    has never been this close
                  </h1>
                  <p className={`${styles.subtitle} ${ibm.className}`}>
                    Share any happening in your physical space with the best{" "}
                    <br />
                    community. In 3 clicks, add your exhibitions directly in{" "}
                    <br />
                    the map.
                  </p>
                </div>
                <div className={`${styles.button_container}`}>
                  <button
                    className={`${styles.button_login} ${ibm.className}`}
                    onClick={handleLoginClick}
                  >
                    Log in
                  </button>
                  <button
                    className={`${styles.button_joinus} ${ibm.className}`}
                    onClick={handleJoinusClick}
                  >
                    Join us
                  </button>
                </div>
              </div>
              <div className={`${styles.container_right}`}>
                <Image
                  src="/img/mac_iphone_crop_new.png"
                  alt="Worldwide Connexion"
                  width={1955}
                  height={1623}
                  className={`${styles.mac}`}
                />
              </div>
            </div>
            <div className={`${styles.footer_first}`}>
              <div className={`${styles.app_container}`}>
                <Link href="#">
                  <Image
                    src="/img/app_store_btn.svg"
                    alt="App Store"
                    width={180}
                    height={52}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/img/google_play_btn.svg"
                    alt="Google Play"
                    width={180}
                    height={52}
                  />
                </Link>
              </div>
              <button
                className={`${styles.button_scroll}`}
                onClick={handleScrollClick}
              >
                <Image
                  src="/img/arrow_down.png"
                  alt="Scroll down"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>
        </Parallax>
        <Parallax speed={-20} style={{ zIndex: 1 }}>
          <div className={`${styles.second_page}`} id="second_page">
            <p className={`${styles.second_page_title} ${ibm.className}`}>
              The first platform bringing together <br />
              artists and art professionals
            </p>
          </div>
        </Parallax>
        <div className={`${styles.third_page}`} id="third_page">
          <div className={`${styles.left_container}`}>
            <div className={`${styles.title_container}`}>
              <h1 className={`${styles.title} ${ibm.className}`}>
                Share with <br />
                potentials clients from <br />
                all around the world
              </h1>
              <p className={`${styles.subtitle} ${ibm.className}`}>
                To attract simple visitors or collectors, or to create a <br />
                community around your gallery <br /> <br />
                You have the choice. Allow potential clients to be aware <br />
                of any news happening in your space.
              </p>
            </div>
          </div>
          <div className={`${styles.right_container}`}>
            <Image
              src="/img/ipad_iphone.png"
              alt="Phone"
              width={726}
              height={903}
              className={`${styles.ipad}`}
            />
          </div>
        </div>
        <div className={`${styles.fourth_page}`}>
          <Image
            src="/img/background_page3.jpg"
            alt="Background"
            width={2060}
            height={1440}
            className={`${styles.background}`}
          ></Image>
        </div>
        <div className={`${styles.blackbox}`}>
          <p className={`${ibm.className} ${styles.first_title}`}>
            What users expect from our platform
          </p>
          <p className={`${ibm.className} ${styles.second_title}`}>
            “Better discover the world of art, make connections and give art
            places/events more presence online”
          </p>
        </div>
        <div className={`${styles.fifth_page}`}>
          <h1 className={`${ibm.className} ${styles.title}`}>Our mission</h1>
          <div className={`${styles.texts_container}`}>
            <p className={`${ibm.className}`}>
              Build a bridge <br />
              between art professional <br />
              and art lovers
            </p>
            <p className={`${ibm.className}`}>
              To help small, medium <br />
              and large galleries <br />
              to increase their sale
            </p>
            <p className={`${ibm.className}`}>
              To create a safe place <br />
              for artists around the world
            </p>
          </div>
          <p className={`${ibm.className} ${styles.citation}`}>
            “Ce qui rapproche, ce n’est pas la communauté des opinions, c’est la
            consanguinité des esprits”
            <br />
            Marcel Proust
          </p>
        </div>
        <div className={`${styles.sixth_page}`}>
          <Image
            src="/img/first_formule.png"
            alt="1st formule"
            width={350}
            height={527}
          />
          <Image
            src="/img/second_formule.png"
            alt="2nd formule"
            width={350}
            height={527}
          />
        </div>
        <div className={`${styles.form}`} id="joinus">
          <FormControl>
            <p className={`${ibm.className} ${styles.title}`}>Join us here:</p>
            <Input
              placeholder="Company name"
              type="text"
              name="companyName"
              value={formData.companyName}
              id="companyName"
              onChange={handleChange}
              className={
                !isNameValid() && !isFieldEmpty(formData.companyName)
                  ? styles.invalid_input
                  : styles.input
              }
              disableUnderline={true}
              inputProps={{ required: true }}
            />
            <Input
              placeholder="Website"
              type="text"
              name="website"
              value={formData.website}
              id="website"
              onChange={handleChange}
              className={
                !isWebsiteValid() && !isFieldEmpty(formData.website)
                  ? styles.invalid_input
                  : styles.input
              }
              disableUnderline={true}
              inputProps={{ required: true }}
            />
            {!isWebsiteValid() && !isFieldEmpty(formData.website) ? (
              <p className={`${styles.invalid_text} ${ibm.className}`}>
                example: https://www.example.com
              </p>
            ) : null}
            <Input
              placeholder="City"
              type="text"
              name="city"
              value={formData.city}
              id="city"
              onChange={handleChange}
              className={
                !isCityValid() && !isFieldEmpty(formData.city)
                  ? styles.invalid_input
                  : styles.input
              }
              disableUnderline={true}
              inputProps={{ required: true }}
            />
            <Input
              placeholder="Contact email"
              type="email"
              name="email"
              value={formData.email}
              id="email"
              onChange={handleChange}
              className={
                !isEmailValid() && !isFieldEmpty(formData.email)
                  ? styles.invalid_input
                  : styles.input
              }
              disableUnderline={true}
              inputProps={{ required: true }}
            />
            {!isEmailValid() && !isFieldEmpty(formData.email) ? (
              <p className={`${styles.invalid_text} ${ibm.className}`}>
                example: contact@example.com
              </p>
            ) : null}
            <ThemeProvider theme={buttonTheme}>
              <Button
                variant="contained"
                className={styles.button}
                onClick={handleClickRegister}
                disabled={
                  !isFormValid() ||
                  !isEmailValid() ||
                  !isWebsiteValid() ||
                  !isNameValid() ||
                  !isCityValid()
                }
              >
                Register
              </Button>
            </ThemeProvider>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              key={horizontal + vertical}
            >
              <Alert onClose={handleClose} severity="success">
                Your registration has been sent!
              </Alert>
            </Snackbar>
          </FormControl>
          <p className={`${ibm.className} ${styles.desc}`}>
            In order to offer a quality service to our users, your submission
            will firstly need a quick verification <br />
            before being able to access the platform, here is the process.{" "}
            <br />
            <br />
            1. Register. <br />
            2. After the verification we will contact you in the following days.{" "}
            <br />
            3. Ready for subscription
          </p>
        </div>
        <div className={`${styles.footer}`}>
          <Link href={"#"}>
            <p className={`${ibm.className}`}>Terms and conditions</p>
          </Link>
          <p className={`${ibm.className}`}>
            contact us at contact@worldwideconnexion.com
          </p>
          <p className={`${ibm.className}`}>
            Copyright 2023 Worldwide Connexion
          </p>
        </div>
        <div className={`${styles.mobile_view}`}>
          <Image
            src="/img/logo_mobile.png"
            alt="Worldwide Connexion"
            width={57}
            height={40}
            className={styles.logo}
          />
          <p className={`${ibm.className} ${styles.logo_txt}`}>
            Worldwide Connexion
          </p>
          <h1 className={`${ibm.className} ${styles.title}`}>
            The world of art <br />
            has never been this close
          </h1>
          <Image
            src="/img/mac_iphone_mobile.png"
            alt="Worldwide Connexion"
            width={280}
            height={233}
            className={styles.mac_iphone}
          />
          <p className={`${ibm.className} ${styles.desc}`}>
            Access the website on a computer
          </p>
          <div className={`${styles.app_container}`}>
            <Link href="#">
              <Image
                src="/img/app_store_btn.png"
                alt="App Store"
                width={150}
                height={43}
              />
            </Link>
            <Link href="#">
              <Image
                src="/img/google_play_btn.png"
                alt="Google Play"
                width={150}
                height={43}
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
