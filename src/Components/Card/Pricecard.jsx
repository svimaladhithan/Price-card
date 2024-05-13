import React from "react";
import "./Card.css";

const Pricecard = ({ data }) => {
  return (
    <div className="container" >
      <div className="row justify-content-center">
        {data.map((element, index) => {
          return (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card mx-2" >
                <div className="card-header" >
                  <div className="card-subtitle text-muted text-center">
                    {element.head}
                  </div>
                  <h3 className="card-title text-center">{element.price}</h3>
                </div>
                <div className="card-body">
                  <h5 className="card-text">
                    <i className="fa-solid fa-check"></i> {element.user}
                  </h5>
                  <h5 className="card-text">
                    <i className="fa-solid fa-check"></i> {element.storage}
                  </h5>
                  <h5 className="card-text">
                    <i className="fa-solid fa-check"></i> {element.limit}
                  </h5>
                  <h5 className="card-text">
                    <i className="fa-solid fa-check"></i> {element.access}
                  </h5>
                  <h5 className={element.project.className}>
                    <i className={element.project.icon}></i>{" "}
                    {element.project.title}
                  </h5>
                  <h5 className={element.support.className}>
                    <i className={element.support.icon}></i>{" "}
                    {element.support.title}
                  </h5>
                  <h5 className={element.subdomain.className}>
                    <i className={element.subdomain.icon}></i>{" "}
                    {element.subdomain.title}
                  </h5>
                  <h5 className={element.report.className}>
                    <i className={element.report.icon}></i>{" "}
                    {element.report.title}
                  </h5>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary btn-block">Button</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricecard;
