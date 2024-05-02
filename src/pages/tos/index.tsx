import { Typography } from "@mui/material";
import Head from "next/head";
import styles from "../../styles/Policies.module.scss";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";

const raleway = Raleway({ subsets: ["latin"] });

export default function Policies() {
  return (
    <div>
      <Head>
        <title>Terms of Service</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.tos_title_container}>
          <Typography className={`${raleway.className} ${styles.tos_title}`}>
            Terms of Service
          </Typography>
        </div>
        <div className={styles.tos_text_container}>
          <iframe
            src="terms.html"
            width="100%"
            height="500"
            style={{ border: "none", borderRadius: "5px" }}
          />
        </div>
        <div className={styles.pol_title_container}>
          <Typography className={`${raleway.className} ${styles.tos_title}`}>
            Private policy
          </Typography>
        </div>
        <div className={styles.pol_text_container}>
          <iframe
            src="policy.html"
            width="100%"
            height="500"
            style={{ border: "none", borderRadius: "5px" }}
          />
        </div>
      </main>
    </div>
  );
}