import { Button } from "antd";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react"
import RootLayout from "../../components/layout/RootLayout";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";


const LoginPage = () => {
  const router = useRouter()

  const {callbackUrl} = router.query
  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GithubOutlined onClick={() => signIn("github", 
          {callbackUrl: callbackUrl || "http://localhost:3000"})} />
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}
