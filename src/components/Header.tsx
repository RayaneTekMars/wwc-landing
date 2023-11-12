import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/img/logo_wwc.png"
          alt="Worldwide Connexion"
          width={350}
          height={57}
        />
      </Link>
    </header>
  );
};

export default Header;
