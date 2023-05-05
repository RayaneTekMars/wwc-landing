import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/img/logo.png"
          alt="Worldwide Connexion"
          width={267}
          height={89}
        />
      </Link>
    </header>
  );
};

export default Header;
