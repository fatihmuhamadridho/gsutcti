import LayoutPage from "containers/layout";
import { useEffect } from "react";

import dummyHomepage from "./dummy";

const HomePage = () => {
  useEffect(() => {
    document.title = "GSUTCTI"
  })
  
  return (
    <LayoutPage>
      <div className="/mx-[103px]/ my-[24px] min-h-[80vh] flex space-x-[20px]">
        <div className="self-center space-y-9">
          <div className="text-[32px] font-bold">
            <h1>{dummyHomepage.title_one}</h1>
            <h1>{dummyHomepage.title_two}</h1>
          </div>
          <p>{dummyHomepage.paraghraph_one}</p>
        </div>
        <div className="flex flex-col space-y-8">
          <img
            className="mr-[80px] self-end"
            src="/images/icons/arrow_upward.png"
            alt=""
            width={100}
            height={100}
          />
          <p>{dummyHomepage.paraghraph_one}</p>
        </div>
      </div>
    </LayoutPage>
  );
};

export default HomePage;
