'use client'
import React, { useState } from "react";

export default function Tabs  ()  {
  const [open, setOpen] = useState("home");

  const handleTabOpen = (tabCategory : string) => {
    setOpen(tabCategory);
  };

  return (
    <>
      <section className="top-0 left-0 w-full dark:bg-dark lg:py-[20px]">
        <div className="container">
          <div className=" mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-14 w-full">
                <div className="flex flex-col w-full flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row justify-between">
                  <a
                    onClick={() => handleTabOpen("home")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "home"
                        ? "bg-primary text-white"
                        : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    Home
                  </a>
                  <a
                    onClick={() => handleTabOpen("about")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white`}
                  >
                    About Us
                  </a>
                  <a
                    onClick={() => handleTabOpen("team")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white`}
                  >
                    Our Team
                  </a>
                  <a
                    onClick={() => handleTabOpen("company")}
                    className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white`}
                  >
                    Company Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type TabContentProps = {
  open: string;
  tabCategory: string;
  details: string;
};

const TabContent: React.FC<TabContentProps> = ({ open, tabCategory, details }) => {
  return (
    <div>
      <div
        className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {details}
      </div>
    </div>
  );
};

