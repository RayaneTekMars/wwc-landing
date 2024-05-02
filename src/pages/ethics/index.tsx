import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { IBM_Plex_Sans_Devanagari, Inter } from "next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import { Typography } from "@mui/material";

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
        <div className={`${styles.code_of_ethics}`} id="code_of_ethics">
          <div className={`${styles.ethics_container}`}>
            <h1 className={`${styles.ethics_title} ${ibm.className}`}>Code of Ethics</h1>
            <div className={`${styles.ethics_content}`}>
              <p className={`${styles.ethics_intro} ${ibm.className}`}>
                Worldwide Connexion is committed to fostering an online community that fosters the discovery, promotion, and purchase of art, while maintaining high ethical standards. This Code of Ethics establishes the fundamental principles that guide our mission and the behaviors expected of all users of the platform.
              </p>
              <ol className={`${styles.ethics_list} ${ibm.className}`}>
                <li><strong>Integrity and Honesty:</strong> <br />We are committed to maintaining the highest integrity in all our interactions with artists, galleries, buyers and visitors to the platform.
                  We do not tolerate fraud, counterfeiting, misinformation or other dishonest behavior.</li>
                <li><strong>Respect for Intellectual Property:</strong> <br />We respect the intellectual property rights of artists and galleries, and we encourage our users to do the same.
                  <br />All artwork presented on the platform must be authentic and respect copyright.</li>
                <li><strong>Confidentiality and Data Protection:</strong> <br />We protect the confidentiality of users&apos; personal information in accordance with applicable law.
                  We use user data only for the purpose of providing services and ensuring a quality user experience.</li>
                <li><strong>Mutual Respect:</strong> <br />We promote a respectful and inclusive environment where all users are treated with respect, regardless of their origin, race, religion, sexual orientation or gender identity.
                  Comments and posts should be respectful, constructive and free of harassment or hate speech.</li>
                <li><strong>Transparency and Authenticity:</strong> <br />We encourage transparency in all transactions, providing clear information about artwork, prices, fees and terms of sale.
                  Descriptions of works must be authentic, accurate and complete.
                </li>
                <li><strong>Social and Environmental Responsibility:</strong> <br />We support ethical and sustainable practices in the art world and encourage our users to do the same.
                  We are committed to minimizing our environmental impact and promoting awareness of sustainable art.</li>
                <li><strong>Reporting Abuse:</strong> <br />We encourage users to report any behavior that is inappropriate, fraudulent, or violates this code of ethics.
                  We treat reports confidentially and take appropriate action to resolve issues.</li>
                <li><strong>Consequences for violation of the Code of Ethics:</strong> <br />Violations of this code of ethics may result in disciplinary action, including suspension or termination of the user&apos;s account.
                </li>
              </ol>
              <p className={`${styles.ethics_conclusion} ${ibm.className}`}>
                This Code of Ethics is designed to ensure that our platform remains a respectful, transparent, and ethical online art space for everyone. All users are encouraged to respect these principles and contribute to the creation of a positive and enriching online artistic community.
              </p>
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
          <div className={`${styles.code_of_ethics_mobile}`} id="code_of_ethics_mobile">
            <div className={`${styles.ethics_container}`}>
              <h1 className={`${styles.ethics_title} ${ibm.className}`}>Code of Ethics</h1>
              <div className={`${styles.ethics_content}`}>
                <p className={`${styles.ethics_intro} ${ibm.className}`}>
                  Worldwide Connexion is committed to fostering an online community that fosters the discovery, promotion, and purchase of art, while maintaining high ethical standards. This Code of Ethics establishes the fundamental principles that guide our mission and the behaviors expected of all users of the platform.
                </p>
                <ol className={`${styles.ethics_list} ${ibm.className}`}>
                  <li><strong>Integrity and Honesty:</strong> <br />We are committed to maintaining the highest integrity in all our interactions with artists, galleries, buyers and visitors to the platform.
                    We do not tolerate fraud, counterfeiting, misinformation or other dishonest behavior.</li>
                  <li><strong>Respect for Intellectual Property:</strong> <br />We respect the intellectual property rights of artists and galleries, and we encourage our users to do the same.
                    <br />All artwork presented on the platform must be authentic and respect copyright.</li>
                  <li><strong>Confidentiality and Data Protection:</strong> <br />We protect the confidentiality of users&apos; personal information in accordance with applicable law.
                    We use user data only for the purpose of providing services and ensuring a quality user experience.</li>
                  <li><strong>Mutual Respect:</strong> <br />We promote a respectful and inclusive environment where all users are treated with respect, regardless of their origin, race, religion, sexual orientation or gender identity.
                    Comments and posts should be respectful, constructive and free of harassment or hate speech.</li>
                  <li><strong>Transparency and Authenticity:</strong> <br />We encourage transparency in all transactions, providing clear information about artwork, prices, fees and terms of sale.
                    Descriptions of works must be authentic, accurate and complete.
                  </li>
                  <li><strong>Social and Environmental Responsibility:</strong> <br />We support ethical and sustainable practices in the art world and encourage our users to do the same.
                    We are committed to minimizing our environmental impact and promoting awareness of sustainable art.</li>
                  <li><strong>Reporting Abuse:</strong> <br />We encourage users to report any behavior that is inappropriate, fraudulent, or violates this code of ethics.
                    We treat reports confidentially and take appropriate action to resolve issues.</li>
                  <li><strong>Consequences for violation of the Code of Ethics:</strong> <br />Violations of this code of ethics may result in disciplinary action, including suspension or termination of the user&apos;s account.
                  </li>
                </ol>
                <p className={`${styles.ethics_conclusion} ${ibm.className}`}>
                  This Code of Ethics is designed to ensure that our platform remains a respectful, transparent, and ethical online art space for everyone. All users are encouraged to respect these principles and contribute to the creation of a positive and enriching online artistic community.
                </p>
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