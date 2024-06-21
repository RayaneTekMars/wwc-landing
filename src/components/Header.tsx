import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/img/cubartblue.png"
          alt="Cubart logo"
          width={112}
          height={112}
        />
      </Link>
    </header>
  );
};

export default Header;
