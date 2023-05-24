import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { toast } from "react-toastify";
import Head from "next/head";

import "react-toastify/dist/ReactToastify.css";

if (typeof window !== 'undefined') {
  window.addEventListener('error', function (event) {
    console.log('Caught via addEventListener', event);
    // Here you could send the error information to an error tracking service
  });
}

const Home: NextPage = () => {
  const notify = () =>
    toast("🦄 Wow so easy!");

  return (
    <>
      <Head>
        <title>Builderz xNFT Scaffold</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className="mockup-window border bg-inherit p-[1.25rem] mb-40 md:mb-0">
          <div className="flex flex-col justify-center p-2 bg-inherit gap-4">
            <div className={styles.iconContainer}>
              <a
                href="https://builderz.build"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  src="/builderz-white.svg"
                  height='160'
                  width='150'
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="builderz"
                />
              </a>
              <Image
                width={75}
                height={75}
                src="/sol.png"
                className={styles.icon}
                alt="sol"
              />
            </div>
            <h1 className={styles.h1}>Hello Solana, meet Builderz 👋</h1>
            <p className={styles.explain}>
              Explore what you can do with Builderz&rsquo; brand new{" "}
              <b>Builderz xNFT Scaffold</b>
            </p>
            <div className="flex flex-row gap-4 justify-around  items-center py-1">
              <button onClick={notify} className="btn ">
                Notify!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
