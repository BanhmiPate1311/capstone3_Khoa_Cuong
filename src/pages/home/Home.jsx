import { Carousel } from "antd";
import React from "react";
import { contentStyle } from "./style";

const Home = () => {
  return (
    <div className="Home container mx-auto pt-[64px]">
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_nkZD1BWDCsQpq6ijTBdWdSLQbeaA7PXmw&usqp=CAU"
              alt="..."
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_nkZD1BWDCsQpq6ijTBdWdSLQbeaA7PXmw&usqp=CAU"
              alt="..."
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_nkZD1BWDCsQpq6ijTBdWdSLQbeaA7PXmw&usqp=CAU"
              alt="..."
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_nkZD1BWDCsQpq6ijTBdWdSLQbeaA7PXmw&usqp=CAU"
              alt="..."
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
