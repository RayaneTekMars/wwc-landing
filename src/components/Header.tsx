import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/img/logo_wwc.svg"
          alt="Worldwide Connexion"
          width={240}
          height={71}
        />
      </Link>
    </header>
  );
};

export default Header;
