import React from "react";

const NewsLetter = () => { React.useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])
  return (
    <section className="newsletter-newsection">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-xs-12">
            <div className="newsletter-inner">
              <h2> Subscribe to Newsletter</h2>
              <p>
                Get the latest information about study material, courses,
                scholarships, and exams on your email.
              </p>
              <div className="newsletter">
                <form
                  action="https://cloud.engage.allen.ac.in/newsletter_subscriptionCr"
                  method="POST"
                  name="mc-embedded-subscribe-form"
                  id="form_id"
                  className="validate footer-subsribe"
                  target="_blank"
                  novalidate=""
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="input-group">
                      <input
                        type="email"
                        value=""
                        name="email_name"
                        className="required email form-control"
                        id="mce-EMAIL"
                        placeholder="Type email for Newsletter"
                      />
                      <input type="hidden" value="Submit" name="Submit" />
                      <span className="input-group-btn">
                        <input
                          type="submit"
                          value="Go"
                          id="submit"
                          name="subscribe"
                          className="btn-u"
                          role="button"
                        />
                      </span>{" "}
                    </div>
                    <div id="mce-responses">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{display:"none"}}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{display:"none"}}
                      ></div>
                    </div>
                    <div style={{position: 'absolute', left: "-5000px"}}>
                      <input
                        type="text"
                        name="b_81319f6dd928e910d3343882a_2c9d540b20"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-xs-12">
            <div className="ecom-block">
              <div className="ecom-inner">
                <h2>ALLEN E-Com Storefronts</h2>
                <a
                  href="https://www.flipkart.com/search?q=allen+expert+faculties&amp;marketplace=FLIPKART&amp;pageUID=1645203144010"
                  target="_blank"
                  onclick="gtag('event', 'Click', {'event_category': 'ALLEN Ecommerce', 'event_label': 'Flipkart'});"
                >
                  <img
                    src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/allen-new/flipkart-btn.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.amazon.in/s?i=stripbooks&amp;rh=p_27%3AALLEN+Expert+faculties&amp;s=review-rank&amp;language=en_IN&amp;ds=v1%3A4dsQXLK5jgBKCyYzcFLz3D544O054T0JQ%2BMA8%2BhL1Sc&amp;linkCode=sl2&amp;linkId=f8e520631ff6f86b495728f61e206cb8&amp;qid=1668250082&amp;tag=allencenters-21&amp;ref=as_li_ss_tl"
                  target="_blank"
                  onclick="gtag('event', 'Click', {'event_category': 'ALLEN Ecommerce', 'event_label': 'Amazon'});"
                >
                  <img
                    src="https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/allen-new/amazon-btn.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
