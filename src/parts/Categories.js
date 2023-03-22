import Button from "elements/Button";
import React from "react";
import { Fade } from "react-reveal";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <Fade bottom>
        <section className="container" key={`category-${index1}`}>
          <h4 className="mb-3 fw-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${index1}-item-${index2}`}
                  >
                    <Fade bottom delay={300 * index2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular <span className="fw-light">Choice</span>
                          </div>
                        )}
                        <figure style={{ height: 180 }} className="img-wrapper">
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          />
                          <div className="meta-wrapper">
                            <Button
                              type="link"
                              href={`/properties/${item._id}`}
                              className="streached-link d-block text-gray"
                            >
                              <h5 className="h4">{item.name}</h5>
                            </Button>
                            <span className="text-gray-500">
                              {item.city}
                              {item.country}
                            </span>
                          </div>
                        </figure>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </Fade>
    );
  });
}
