import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./CustomerSupport.css";
import HeaderContent from "../../../../shared/components/Header/HeaderContent";
import Footer from "../../../../shared/components/Footer/Footer";
function CustomerSupport() {
  return (
    <div>
         <HeaderContent />
         <div className="customer-section">
            <div className="customer-cover-image">
                <h1>Help / FAQs</h1>
            </div>
      <div className="cg-wrap">
        <p style={{ padding: "0 0 15px 0" }} className="customer_policy_intro">
          Your customer is important to us, and so is being transparent about how
          we collect, use, and share information about you. This policy is
          intended to help you understand:
        </p>

        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
            <span className="numbers"> 1.</span>  How can I register on Sangam.com?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                All you need to do is, fill out the required information in 
                the�Registration Form�as accurately as possible and click on the 'Submit' button.�
                <br />
                <br />
               
                
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
            <span className="numbers"> 2.</span> How we use information we collect?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                We use the information collected in the following ways:
                <div className="customer_policy_inner_wrap">
                  <ul className="list_disc">
                    <li>
                      we use the information submitted by you to provide the
                      Service.
                    </li>
                    <li>manage your account</li>
                    <li>provide you with customer support;</li>
                    <li>
                      conduct research and analysis about your use of our
                      services for providing better services using AI and ML.
                    </li>
                    <li>
                      communicate with you by email, phone about services,
                      promotions or offers that may be of your interest.
                    </li>
                    <li>
                      Recommend relevant matches to you and display your profile
                      to other users.
                    </li>
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
            <span className="numbers"> 3.</span> With whom does we share your information?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                Except where you are expressly informed on the site or as
                described in this customer policy we do not sell, rent, share,
                trade, or give away any of your personal information.
                <div className="customer_policy_inner_wrap">
                  <ul className="list_disc">
                    <li>
                      <b>With other users</b>
                      <br />
                      We publish the information shared by you with other users
                      to provide the services. The information so published is
                      provided by you and be cautious about what you share with
                      other users. You can always control your customer setting
                      by visiting the “setting/customer option” page.
                    </li>
                    <li>
                      <b>With our service providers and partners</b>
                      <br />
                      We may use third-party service providers to provide
                      website and application development, hosting, maintenance,
                      backup, storage, payment processing, analysis, and other
                      services for us, which may require them to access or use
                      information about you. If a service provider needs to
                      access information about you to perform services on our
                      behalf, they do so under close instruction from us,
                      including policies and procedures designed to protect your
                      information. All of our service providers and partners
                      agree to strict confidentiality obligations and data
                      protection.
                    </li>
                    <li>
                      <b>With law enforcement agencies</b>
                      <br />
                      We will disclose your personally identifiable information
                      as required by law and when we believe that disclosure is
                      necessary to protect our rights, other members' interests
                      and protection and/or comply with a judicial proceeding,
                      court order, or legal process served on us.
                    </li>
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
            <span className="numbers"> 4.</span> How to access and/or control your information?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                You have been provided with tools to manage your information.
                You have the rights to access, rectify, and update information
                that you provided to us and that’s associated with your
                Sangam.com account directly by logging into your account.
                <br />
                <br />
                In addition to the aforesaid customer control, a member from the
                EU, UK, and California have the following rights:
                <div className="customer_policy_inner_wrap">
                  <ul className="list_disc">
                    <li>
                      Reviewing your information. Applicable customer laws may
                      give you the right to review the personal information we
                      keep about you (depending on the jurisdiction, this may be
                      called right of access, right of portability, or
                      variations of those terms). You can request a copy of your
                      personal information by putting in such a request{" "}
                      <a
                        href="/customer-relations/faq/write-to-us"
                        className="link"
                      >
                        here
                      </a>
                      .
                    </li>
                    <li>
                      If you believe that the information we hold about you is
                      no longer entitled to use and you want to delete or object
                      to its processing, please contact us{" "}
                      <a
                        href="/customer-relations/faq/write-to-us"
                        className="link"
                      >
                        here
                      </a>
                      . Please note, however, we may need to retain certain
                      information for record-keeping purposes, to complete
                      transactions, or to comply with our legal obligations and
                      applicable territorial laws.
                    </li>
                    <li>
                      If you wish to receive information relating to another
                      user, such as a copy of any messages you received from him
                      or her through our service, the other user will have to
                      contact us and provide their written consent before the
                      information is released.
                    </li>
                    <li>
                      You have the right to withdraw your consent or to opt-out
                      from sharing your information with our third-party service
                      providers from processing your information. Please note
                      that by withdrawing your consent or opting out means, its
                      deletion of your profile as we won’t be able to provide
                      service to you without the personally identifiable
                      information.
                      <br />
                      <br />
                      Also, we may not be able to accommodate certain requests
                      to object to the processing of personal information,
                      notably where such requests would not allow us to provide
                      our service to you anymore. For instance, we cannot
                      provide our service if we do not have your date of
                      birth/gender/contact details.
                    </li>
                  </ul>
                </div>
                For your protection and the protection of all our users, we may
                ask you to provide proof of identity to accommodate your
                requests.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
            <span className="numbers"> 5.</span> How we secure your information?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                While we implement safeguards designed to protect your
                information, no security system is impenetrable and due to the
                inherent nature of the Internet, we cannot guarantee that data,
                during transmission through the Internet or while stored on our
                systems or otherwise in our care, is absolutely safe from
                intrusion by others. When our registration/order process asks
                you to enter sensitive information (such as a credit card
                number), such information is encrypted and is protected with the
                best encryption software in the industry. We follow generally
                accepted industry standards to protect the personal information
                submitted to us. All your information, not just the sensitive
                information mentioned above, is restricted in our offices. Only
                employees who need the information to perform a specific job are
                granted access to personally identifiable information.
                <br />
                <br />
                If you have any questions about the security at our website,
                please{" "}
                <a href="/customer-relations/faq/write-to-us" className="link">
                  email us
                </a>
                .
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
            <span className="numbers"> 6.</span> How long we keep your information?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                We keep your personal information only as long as you use our
                service and also as permitted/required by applicable law. In
                practice, we delete or anonymize your information upon deletion
                of your account, unless the same is required to comply with
                legal obligations, fraud prevention, take actions we deem
                necessary to protect the integrity of our website or our users,
                to resolve disputes, to enforce our agreements, to support
                business operations, and to continue to develop and improve our
                Services. We retain information for better services, and we only
                use the information to analyze the use of our Services, not to
                specifically analyze personal characteristics about you.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
            <span className="numbers"> 7.</span> Cookies and other tracking Tools.
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                We and our third-party partners, such as our advertising and
                analytics partners, use various technologies to collect
                information, such as cookies and web beacons, to identify you
                and your user behavior. You may read our{" "}
                <a href="#" className="light_blue" target="_blank">
                  Cookies Policy
                </a>{" "}
                for more information as to why we use Cookies and how you can
                control their use through your browser settings and other tools.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
            <span className="numbers"> 8.</span> How we transfer information we collect Internationally?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                We collect information globally and primarily store that
                information in India and USA. We may transfer, process, and
                store your information outside of your country of residence, to
                wherever we or our third-party service providers operate for the
                purpose of providing you the Services. Information collected
                within the European Economic Area (“EEA”) may, for example, be
                transferred to countries outside of the EEA for the purposes as
                described in this policy. Whenever we transfer your information,
                we take adequate steps to protect it, and it is done with
                standard contractual data protection.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
            <span className="numbers"> 9.</span> How will I know of changes in Sangam.com customer policy?
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                If we make any change to our customer policy, we will send an
                email communication about the update so you are always aware of
                what information we collect, how we use it, and under what
                circumstances, if any, we disclose it. If at any point we decide
                to use personally identifiable information in a manner
                materially different from that stated at the time it was
                collected, we will notify you by way of an email. We will give
                you a choice as to whether or not we can use information in this
                different manner and act accordingly.
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
            <span className="numbers"> 10.</span>  Tell me how to contact Sangam.com.
            </Accordion.Header>
            <Accordion.Body>
              <div className="ans_box" style={{ display: "block" }}>
                <div className="notch"></div>
                If you have any questions about this customer statement, the
                practices of this site, or your dealings with this Web site,
                please{" "}
                <a href="/customer-relations/faq/write-to-us" className="link">
                  email us
                </a>{" "}
                or contact us at:
                <br />
                <br />
                <b>Sangam.com</b>
                <br />
                Nidhi Singh - Grievance Officer, People Interactive (I) Pvt.
                Ltd. 2(B) (ii) Ground Floor, Tardeo Annexe, Film Centre
                Building, 68, Tardeo Road, Mumbai - 400 034;
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="footer_bot_border_wrapper padding_class_footer_bot_border_wrapper" style={{ padding: '15px !important' }}>
  <div className="footer_bot_border"></div>
</div>
<div class="copyright_txt"><span>© 1996-2024 Sangam.com  - The World's No.1 Matchmaking Service™</span></div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CustomerSupport;
