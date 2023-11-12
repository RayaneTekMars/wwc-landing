import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { Raleway } from "next/font/google";
import Image from "next/image";
import { IBM_Plex_Sans_Devanagari, Inter } from "next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import { Typography } from "@mui/material";

const raleway = Raleway({ subsets: ["latin"] });

const ibm = IBM_Plex_Sans_Devanagari({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Missions() {
  return (
    <div>
      <Head>
        <title>Terms of Service</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={`${styles.mission_page}`} id="mission_page">
          <h1 className={`${styles.mission_title} ${ibm.className}`}>Our Mission</h1>
          <div className={`${styles.mission_container}`}>
            <div className={`${styles.mission_content}`}>
              <p className={`${styles.mission_text} ${ibm.className}`}>
                Worldwide Connexion&apos;s mission is to connect art lovers, collectors, artists and art galleries with the aim of facilitating the discovery, promotion and purchase of works of art.
              </p>
              <div>
                <Image width={1279} height={1600} src="/img/mission.jpeg" className={`${styles.mission_image}`} alt="Descriptive text for image" />
              </div>
              <ul className={`${styles.mission_list} ${ibm.className}`}>
                <li>
                  <strong>Promotion of art and artists</strong>:<br />The platform aims to highlight the work of artists, offering them a space to exhibit their works and providing detailed information on their artistic journey and influences.
                  <br /> It also allows art galleries to promote their programming, organize online exhibitions and reach a global audience.
                </li>
                <li>
                  <strong>Discovery and accessibility</strong>:<br />Worldwide Connexion allows art lovers to discover a wide range of artwork, from painting to sculpture, photography, digital art, and much more.
                  <br />It offers an immersive experience that allows visitors to browse and explore galleries from around the world, and discover new artistic talents.
                </li>
                <li>
                  <strong>Transparency and information</strong>:<br />On Worldwide Connexion galleries can provide detailed information about each work, including descriptions, dimensions, mediums used.
                  <br />Users can also access information about upcoming exhibitions and art events.
                </li>
                <li>
                  <strong>Community and education</strong>:<br />By fostering communication between art lovers, collectors and artists, Worldwide Connexion encourages the creation of an online artistic community.
                  <br />We will also be able to offer educational resources, such as articles, videos, guides and online courses, to help visitors deepen their understanding of art and its various forms.
                </li>
                <li>
                  <strong>Facilitating international transactions</strong>:<br />By enabling art galleries and artists to reach a global audience, the platform facilitates international transactions, thereby contributing to the dissemination of art internationally.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.footer}`}>
          <div style={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Link href={"/tos"}>
              <p className={`${ibm.className}`}>Terms and conditions</p>
            </Link>
            <Link href={"/missions"}>
              <p className={`${ibm.className}`}>Missions</p>
            </Link>
            <Link href={"/ethics"}>
              <p className={`${ibm.className}`}>Code of ethics</p>
            </Link>
          </div>
          <p className={`${ibm.className}`}>
            contact us at contact@worldwideconnexion.com
          </p>
          <p className={`${ibm.className}`}>
            Copyright 2023 Worldwide Connexion
          </p>
        </div>
        <div className={`${styles.mobile_view}`}>
          <div className={`${styles.mission_page_mobile}`} id="mission_page_mobile">
            <h1 className={`${styles.mission_title} ${ibm.className}`}>Our Mission</h1>
            <div className={`${styles.mission_container}`}>
              <div className={`${styles.mission_content}`}>
                <p className={`${styles.mission_text} ${ibm.className}`}>
                  Worldwide Connexion&apos;s mission is to connect art lovers, collectors, artists and art galleries with the aim of facilitating the discovery, promotion and purchase of works of art.
                </p>
                <div>
                  <Image width={1279} height={1600} src="/img/mission.jpeg" className={`${styles.mission_image}`} alt="Descriptive text for image" />
                </div>
                <ul className={`${styles.mission_list} ${ibm.className}`}>
                  <li>
                    <strong>Promotion of art and artists</strong>:<br />The platform aims to highlight the work of artists, offering them a space to exhibit their works and providing detailed information on their artistic journey and influences.
                    <br /> It also allows art galleries to promote their programming, organize online exhibitions and reach a global audience.
                  </li>
                  <li>
                    <strong>Discovery and accessibility</strong>:<br />Worldwide Connexion allows art lovers to discover a wide range of artwork, from painting to sculpture, photography, digital art, and much more.
                    <br />It offers an immersive experience that allows visitors to browse and explore galleries from around the world, and discover new artistic talents.
                  </li>
                  <li>
                    <strong>Transparency and information</strong>:<br />On Worldwide Connexion galleries can provide detailed information about each work, including descriptions, dimensions, mediums used.
                    <br />Users can also access information about upcoming exhibitions and art events.
                  </li>
                  <li>
                    <strong>Community and education</strong>:<br />By fostering communication between art lovers, collectors and artists, Worldwide Connexion encourages the creation of an online artistic community.
                    <br />We will also be able to offer educational resources, such as articles, videos, guides and online courses, to help visitors deepen their understanding of art and its various forms.
                  </li>
                  <li>
                    <strong>Facilitating international transactions</strong>:<br />By enabling art galleries and artists to reach a global audience, the platform facilitates international transactions, thereby contributing to the dissemination of art internationally.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${styles.footer_mobile}`}>
            <Link href="/tos">
              <Typography className={`${ibm.className} ${styles.footer_text}`}>
                Terms and conditions
              </Typography>
            </Link>
            <Link href={"/missions"}>
              <Typography className={`${ibm.className} ${styles.footer_text}`}>
                Missions
              </Typography>
            </Link>
            <Link href={"/ethics"}>
              <Typography className={`${ibm.className} ${styles.footer_text}`}>
                Code of ethics
              </Typography>
            </Link>
            <Typography className={`${ibm.className} ${styles.footer_text}`}>
              contact us : contact@worldwideconnexion.com
            </Typography>
            <Typography className={`${ibm.className} ${styles.footer_text}`}>
              © 2023 Worldwide Connexion. All rights reserved.
            </Typography>
          </div>
        </div>
      </main>
    </div>
  );
}