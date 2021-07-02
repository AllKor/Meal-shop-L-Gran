import React from "react";
import './Blog.scss'
import TitleGroup from "../TitleGroup/TitleGroup";
import backgroundImage from "../../assets/images/5.jpg";
import blogImage from "../../assets/images/4.png";

const Blog = () => {
  return (
    <div
      className="blog"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="blog__inner">
          <div className="blog__image">
            <img src={blogImage} alt="blogImage" />
          </div>
          <div className="blog__content">
            <TitleGroup titleText={"Качество нашей еды"} titleMod={"title-group__title--blog"} />
            <div className="blog__text">
              <p>
                Нам пришлось пройти долгий путь, чтобы придумать, продумать и наладить наш конвейер по производству блюд на правильных углях. Была проведена кропотливая работа по выявлению идеальной рецептуры приготовления и хранения полуфабрикатов. Путём множества экспериментов были найдены правильные временные показатели для приготовления каждого блюда.
              </p>
            </div>
            <h2 className="blog__subtitle">
              Удвой веселье каждую субботу <br/>
              <span>ПОЛУЧИТЕ СКИДКУ ДО 50%</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
