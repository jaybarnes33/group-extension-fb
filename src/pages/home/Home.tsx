import React, { useEffect, useState } from "react";

interface Cookie {
  name: string;
  value: string;
  domain: string;
}

export default function Home(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkFacebookSession = async () => {
      const cookies = await getCookies();
      const hasFacebookSession = cookies.some((cookie) =>
        cookie.domain.includes("facebook")
      );
      console.log(hasFacebookSession);
      hasFacebookSession && setIsAuthenticated(true);
    };
    checkFacebookSession();
  }, []);

  useEffect(() => {
    isAuthenticated &&
      window.location.replace("/src/pages/dashboard/index.html");
  }, [isAuthenticated]);
  interface Cookie {
    name: string;
    value: string;
    domain: string;
  }

  const getCookies = () => {
    return new Promise<Cookie[]>((resolve) => {
      chrome.cookies.getAll({ domain: ".facebook.com" }, (cookies) => {
        console.log({ cookies });
        resolve(cookies);
      });
    });
  };

  const handleConnectFacebook = () => {
    window.location.replace("https://www.facebook.com");
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="max-w-lg">
        {isAuthenticated ? (
          <h1 className="text-xl font-bold">
            You are already connected to Facebook
          </h1>
        ) : (
          <>
            <h1 className="text-xl font-bold">
              Connect your Facebook account to continue
            </h1>
            <button
              className="flex mx-auto text-md bg-blue-400 px-3 py-2 rounded my-3 hover:bg-blue-500 text-white"
              onClick={handleConnectFacebook}
            >
              Connect to Facebook
            </button>
          </>
        )}
        <p className="max-w-sm text-md text-center">
          We do not store, transfer, or copy your session, personal and post
          information. Everything is stored and processed locally on your
          computer. Your session will no longer be valid if you log out from
          Facebook.
        </p>
      </div>
    </div>
  );
}
