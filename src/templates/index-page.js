import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
// import Image from "gatsby/image";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";

const useCarouselTransition = (ms = 500, handleChangeActiveImage = () => {}) => {
  const [outgoingImageClass, setOutgoingImageClass] = useState("u-active");
  const [incomingImageClass, setIncomingImageClass] = useState("");
  const startTransition = (dir = "left") => {
    let nextOrPrev = "next";
    if (dir !== "left") {
      nextOrPrev = "prev";
    }
    setOutgoingImageClass("u-active u-carousel-item-" + dir);
    setIncomingImageClass(
      "u-carousel-item-" + nextOrPrev + " u-carousel-item-" + dir
    );
    setTimeout(() => {
      handleChangeActiveImage();
      setOutgoingImageClass("u-active");
      setIncomingImageClass("");
    }, ms);
  };
  return [startTransition, outgoingImageClass, incomingImageClass];
};

export const IndexPageTemplate = ({
  sectionOne = [],
  sectionTwo,
  sectionThree,
  sectionFour,
  sectionFive = [],
  sectionSix = [],
  posts,
  sectionSeven,
  contactUs,
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [transition, outgoingClass, incomingClass] = useCarouselTransition(500, () =>
    setCarouselIndex(carouselIndex ? 0 : 1)
  );

  return (
    <>
      <section className="u-clearfix u-section-2" id="carousel_22a7">
        <div
          id="carousel-8d79"
          data-interval="5000"
          data-u-ride="carousel"
          className="u-carousel u-expanded-width u-slider u-slider-1"
        >
          <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-1">
            <li
              data-u-target="#carousel-8d79"
              className="u-grey-30"
              data-u-slide-to="0"
            ></li>
            <li
              data-u-target="#carousel-8d79"
              className="u-grey-30 u-active"
              data-u-slide-to="1"
            ></li>
          </ol>
          <div className="u-carousel-inner" role="listbox">
            {sectionOne.map((sec, index) => (
              <div
                key={index}
                className={`active u-align-center u-carousel-item u-container-style u-image u-slide u-image-${
                  index + 1
                } ${carouselIndex === index ? outgoingClass : incomingClass}`}
                data-image-width="1038"
                data-image-height="1080"
              >
                <div className="u-container-layout u-container-layout-1">
                  <h2 className="u-text u-text-body-alt-color u-text-default u-text-1">
                    {sec.title}
                  </h2>
                  <p className="u-text u-text-body-alt-color u-text-2">
                    {sec.subtitle}
                  </p>
                  {sec.link && (
                    <a
                      href={sec.link}
                      className="u-border-2 u-border-white u-btn u-button-style u-hover-black u-none u-text-body-alt-color u-text-hover-white u-btn-1"
                    >
                      read more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <a
            className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-spacing-10 u-text-grey-30 u-white u-carousel-control-1"
            href="#carousel-8d79"
            role="button"
            onClick={() => transition("right")}
            data-u-slide="prev"
          >
            <span aria-hidden="true">
              <svg viewBox="0 0 477.175 477.175">
                <path
                  d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                    c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
                ></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-spacing-10 u-text-grey-30 u-white u-carousel-control-2"
            href="#carousel-8d79"
            role="button"
            data-u-slide="next"
            onClick={() => transition("left")}
          >
            <span aria-hidden="true">
              <svg viewBox="0 0 477.175 477.175">
                <path
                  d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
                ></path>
              </svg>
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section className="u-clearfix u-image u-section-3" src="" id="carousel_a69b">
        <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-left-cell u-size-22 u-layout-cell-1">
                <div className="u-container-layout u-valign-middle-xl u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xs u-container-layout-1">
                  <h2 className="u-custom-font u-heading-font u-text u-text-1">
                    {sectionTwo.title}
                  </h2>
                  <p className="u-large-text u-text u-text-variant u-text-2">
                    {sectionTwo.subtitle}
                  </p>
                  <a
                    href={sectionTwo.link}
                    className="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1"
                  >
                    read more
                  </a>
                </div>
              </div>
              <div className="u-container-style u-image u-layout-cell u-right-cell u-size-38 u-image-1">
                <div className="u-container-layout u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-4" id="carousel_df09">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-image u-layout-cell u-right-cell u-size-15 u-size-30-md u-image-1">
                <div className="u-container-layout u-container-layout-1"></div>
              </div>
              <div className="u-container-style u-image u-layout-cell u-size-15 u-size-30-md u-image-2">
                <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-xl u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-container-layout-2"></div>
              </div>
              <div className="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-3">
                <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-md u-valign-bottom-sm u-valign-bottom-xs u-container-layout-3">
                  <img
                    src={
                      sectionThree.image.childImageSharp
                        ? sectionThree.image.childImageSharp.fluid.src
                        : sectionThree.image
                    }
                    alt=""
                    className="u-image u-image-default u-image-3"
                    data-image-width="422"
                    data-image-height="750"
                  />
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-layout-cell-4">
                <div className="u-container-layout u-valign-bottom u-container-layout-4">
                  <p className="u-text u-text-default u-text-1">
                    {sectionThree.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-5" id="carousel_e2c9">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-37 u-layout-cell-1">
                <div className="u-container-layout u-valign-middle u-container-layout-1">
                  <h2 className="u-text u-text-1">{sectionFour.title}</h2>
                  <p className="u-text u-text-2">{sectionFour.subtitle}</p>
                </div>
              </div>
              <div className="u-container-style u-image u-layout-cell u-right-cell u-size-23 u-image-1">
                <div className="u-container-layout u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-section-6" id="carousel_f07a">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
          <div className="u-expanded-width u-tab-links-align-justify u-tabs u-tabs-1">
            <ul
              className="u-border-1 u-border-grey-25 u-tab-list u-unstyled"
              role="tablist"
            >
              {sectionFive.map((section) => (
                <li className="u-tab-item" role="presentation">
                  <a
                    className="active u-active-white u-border-2 u-border-active-black u-border-grey-40 u-border-hover-grey-15 u-border-no-left u-border-no-right u-border-no-top u-button-style u-tab-link u-text-active-black u-text-grey-40 u-text-hover-black u-tab-link-1"
                    id="link-tab-0da5"
                    href="#tab-0da5"
                    role="tab"
                    aria-controls="tab-0da5"
                    aria-selected="true"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="u-tab-content">
              {sectionFive.map((section) => (
                <div
                  className="u-container-style u-tab-active u-tab-pane u-white u-tab-pane-1"
                  id="tab-0da5"
                  role="tabpanel"
                  aria-labelledby="link-tab-0da5"
                >
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    <img
                      alt=""
                      className="u-expanded-width-xs u-image u-image-default u-image-1"
                      data-image-width="864"
                      data-image-height="1080"
                      src={
                        section.image?.childImageSharp
                          ? section.image.childImageSharp.fluid.src
                          : section.image
                      }
                    />
                    <h4 className="u-text u-text-1">{section.title}</h4>
                    <div className="u-text u-text-grey-40 u-text-2">
                      {section.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="u-clearfix u-valign-middle u-section-7" id="carousel_cf20">
        <div
          className="u-expanded-width u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1"
          data-pswp-uid="1"
        >
          <div className="u-gallery-inner u-gallery-inner-1">
            {sectionSix.map((image) => (
              <div className="u-effect-fade u-gallery-item" data-pswp-item-id="0">
                <div className="u-back-slide">
                  <img
                    className="u-back-image u-expanded"
                    src={
                      image.image?.childImageSharp
                        ? image.image.childImageSharp.fluid.src
                        : image.image
                    }
                  />
                </div>
                <div className="u-over-slide u-shading u-over-slide-1">
                  <h3 className="u-gallery-heading">{image.title}</h3>
                  <p className="u-gallery-text">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="u-clearfix u-section-8" id="carousel_dc49">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h3 className="u-text u-text-default u-text-1">{sectionSeven.title}</h3>
          <p className="u-text u-text-2">{sectionSeven.subtitle}</p>
          <div className="u-blog u-expanded-width u-repeater u-repeater-1">
            {posts.map((post) => (
              <div className="u-container-layout u-similar-container u-valign-bottom u-container-layout-3">
                <img
                  alt=""
                  className="u-blog-control u-expanded-width u-image u-image-default u-image-3"
                  src={
                    post.node.frontmatter.featuredimage?.childImageSharp
                      ? post.node.frontmatter.featuredimage.childImageSharp.fluid.src
                      : post.node.frontmatter.featuredimage
                  }
                  data-image-width="1199"
                  data-image-height="1500"
                />
                <h4 className="u-blog-control u-text u-text-5">
                  <a className="u-post-header-link" href="#">
                    {post.title}
                  </a>
                </h4>
                <div className="u-blog-control u-metadata u-text-grey-30 u-metadata-3">
                  <span className="u-meta-date u-meta-icon">{post.date}</span>
                </div>
                <a
                  href={post.node.fields.slug}
                  className="u-blog-control u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-3"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="u-align-left u-clearfix u-image u-shading u-section-9"
        id="carousel_48db"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-align-left u-container-style u-group u-white u-group-1">
            <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-valign-top-xs u-container-layout-1">
              <h2 className="u-text u-text-1">contact us</h2>
              <div className="u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
                <form
                  action={contactUs.link}
                  method={contactUs.method}
                  className="u-clearfix u-form-spacing-13 u-form-vertical u-inner-form"
                  style={{ padding: 0 }}
                  source="email"
                  name="form"
                >
                  <input
                    type="hidden"
                    id="siteId"
                    name="siteId"
                    value="124017"
                    wfd-invisible="true"
                  />
                  <input
                    type="hidden"
                    id="pageId"
                    name="pageId"
                    value="124018"
                    wfd-invisible="true"
                  />
                  <div className="u-form-email u-form-group u-form-partition-factor-2 u-form-group-1">
                    <label htmlFor="email-f18c" className="u-label">
                      {contactUs.email.label}
                    </label>
                    <input
                      type="email"
                      placeholder={contactUs.email.placeholder}
                      id="email-f18c"
                      name="email"
                      className="u-grey-5 u-input u-input-rectangle u-input-1"
                      required=""
                      data-bcup="attached"
                      style={{
                        paddingRight: "53.6px",
                        backgroundImage:
                          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==")',
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundSize: "16px 18px",
                        backgroundPosition: "98% 50%",
                      }}
                    />
                  </div>
                  <div className="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2">
                    <label htmlFor="name-f18c" className="u-label">
                      {contactUs.name.label}
                    </label>
                    <input
                      type="text"
                      placeholder={contactUs.name.placeholder}
                      id="name-f18c"
                      name="name"
                      className="u-grey-5 u-input u-input-rectangle u-input-2"
                      required=""
                    />
                  </div>
                  <div className="u-form-group u-form-partition-factor-2 u-form-phone u-form-group-3">
                    <label
                      htmlFor="phone-cbff"
                      className="u-form-control-hidden u-label"
                      wfd-invisible="true"
                    >
                      {contactUs.phone.label}
                    </label>
                    <input
                      type="tel"
                      pattern="\+?\d{0,2}[\s\(\-]?([0-9]{3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                      placeholder={contactUs.phone.placeholder}
                      id="phone-cbff"
                      name="phone"
                      className="u-grey-5 u-input u-input-rectangle u-input-3"
                      required=""
                    />
                  </div>
                  <div className="u-form-date u-form-group u-form-partition-factor-2 u-form-group-4">
                    <label htmlFor="date-33f9" className="u-label">
                      {contactUs.date.label}
                    </label>
                    <input
                      type="date"
                      placeholder={contactUs.date.placeholder}
                      id="date-33f9"
                      name="date"
                      className="u-grey-5 u-input u-input-rectangle u-input-4"
                      required=""
                    />
                  </div>
                  <div className="u-form-group u-form-message u-form-group-5">
                    <label htmlFor="message-1015" className="u-label">
                      {contactUs.message.label}
                    </label>
                    <textarea
                      placeholder={contactUs.message.placeholder}
                      rows="4"
                      cols="50"
                      id="message-1015"
                      name="message-1"
                      className="u-grey-5 u-input u-input-rectangle u-input-5"
                      required=""
                    ></textarea>
                  </div>
                  <div className="u-align-left u-form-group u-form-submit u-form-group-6">
                    <input
                      type="submit"
                      value="Submit"
                      className="u-black u-btn u-btn-submit u-button-style u-btn-1"
                    />
                  </div>
                  <div
                    className="u-form-send-message u-form-send-success"
                    wfd-invisible="true"
                  >
                    {" "}
                    Thank you! Your message has been sent.{" "}
                  </div>
                  <div
                    className="u-form-send-error u-form-send-message"
                    wfd-invisible="true"
                  >
                    {" "}
                    Unable to send your message. Please fix errors then try again.{" "}
                  </div>
                  <input
                    type="hidden"
                    value=""
                    name="recaptchaResponse"
                    wfd-invisible="true"
                  />
                </form>
              </div>
            </div>
          </div>
          <p className="u-text u-text-default u-text-2">
            Image from{" "}
            <a
              href="https://www.freepik.com/free-photos/business"
              className="u-border-1 u-border-white u-btn u-button-style u-none u-text-body-alt-color u-btn-2"
            >
              Freepik
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  sectionOne: PropTypes.array,
  sectionTwo: PropTypes.object,
  sectionThree: PropTypes.object,
  sectionFour: PropTypes.object,
  sectionFive: PropTypes.array,
  sectionSix: PropTypes.array,
  sectionSeven: PropTypes.object,
  contactUs: PropTypes.object,
  posts: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter.sectionOne);
  if (!frontmatter.sectionOne) <div />
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        sectionOne={frontmatter.sectionOne}
        sectionTwo={frontmatter.sectionTwo}
        sectionThree={frontmatter.sectionThree}
        sectionFour={frontmatter.sectionFour}
        sectionFive={frontmatter.sectionFive}
        sectionSix={frontmatter.sectionSix}
        sectionSeven={frontmatter.sectionSeven}
        posts={data.posts.edges}
        contactUs={frontmatter.contactUs}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        sectionOne {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
          link
        }
        sectionTwo {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
        }
        sectionThree {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
        }
        sectionFour {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
        }
        sectionFive {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
        }
        sectionSix {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
        }
        sectionSeven {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          subtitle
        }
        contactUs {
          link
          method
          email {
            label
            placeholder
          }
          email {
            label
            placeholder
          }
          name {
            label
            placeholder
          }
          phone {
            label
            placeholder
          }
          date {
            label
            placeholder
          }
          message {
            label
            placeholder
          }
        }
      }
    }
  }
`;
