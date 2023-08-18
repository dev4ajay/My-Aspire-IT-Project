import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
const Feedepositionmode = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <img src={require("../Assets/img/slider-1.jpg")} width="100%"></img>

        <section>
          <div class="container mt-4 mb-4">
            <div class="row">
              <div class="col-md-10 col-md-push-1">
                <div id="section-one" class="mb-50">
                  <h4>Through Net Banking / Debit Card / Credit Card/UPI:</h4>
                  <hr />
                  <p class="mb-20" align="justify">
                    {" "}
                    Fee can also be deposited at any Branch office by swiping
                    Credit Card / Debit Card/UPI. (No Extra Charges). .{" "}
                  </p>
                </div>

                <div id="section-two" class="mb-50">
                  <h4>Through Cash Deposition in Bank</h4>
                  <hr />
                  <p class="mb-20" align="justify">
                    Fee in cash can also be deposited at any Branch of ' BANK
                    LTD', Account Name -"Aspire IIT Academy", A/C No.-
                    65265463179, IFSC CODE- SBIN0051132, BANK BRANCH NAME- SBI
                    Khalini Shimla.
                    <br />
                    <br />
                    Fee in cash can also be deposited at any Branch of 'ORIENTAL
                    BANK OF COMMERCE', Account Name -"Aspire IIT Academy", A/C
                    No.- 65265463179, IFSC CODE- SBIN0051132, BANK BRANCH NAME-
                    SBI Khalini Shimla.
                  </p>
                </div>

                <div id="section-three" class="mb-50">
                  <h4>Through RTGS / NEFT</h4>
                  <hr />
                  <p align="justify">
                    Fee can be deposited by filling details in RTGS form of any
                    bank, Account Name -"Aspire IIT Academy", A/C No.-
                    65265463179, IFSC CODE- SBIN0051132, BANK BRANCH NAME- SBI
                    Khalini Shimla.{" "}
                  </p>
                </div>

                <h4>Through Demand Draft / CTS Cheque</h4>
                <hr />
                <p align="justify">
                  Fee can also be deposited through Single Crossed Demand Draft
                  / CTS Cheque of the requisite amount at any of our Branch.
                </p>

                <ul class="list theme-colored angle-double-right m-0">
                  <li>
                    Demand Draft / CTS Cheque should be in favour of "Aspire IIT
                    & Medical" from Nationalized Bank, payable at Shimla.{" "}
                  </li>
                  <li>
                    Student must write his/her Name, Form Number, and Mobile No.
                    on the back side of Demand Draft / CTS Cheque.{" "}
                  </li>
                  <li>
                    Please ensure balance in account before depositing the Fee
                    by Cheque. Cutting & overwriting is not allowed. CTS Cheque
                    should be issued from the bank account of student himself or
                    his/her father / mother only (Third party cheque is not
                    allowed).{" "}
                  </li>
                  <br />
                  BY POST: Demand Draft / CTS Cheque can be sent through post /
                  courier. Make sure that FEE must be received at our Center
                  office three days before the course commencement date. <br />
                  <br />
                  BY HAND: deposit Demand Draft / CTS Cheque by hand at our
                  office, first the student has to collect a pre-printed fee
                  challan from our any Center Office and fill it carefully
                  before depositing.
                </ul>
                <br />

                <h4>Important Points to Remember</h4>

                <hr />
                <p class="mb-20" align="justify">
                  Fee Deposition Time: 10:00 AM to 06:00 PM.
                  <br />
                  <br />
                  In case of Cheque Return, Student will not be allowed in class
                  with immediate effect & legal action will be taken under the
                  Negotiable Instrument Act. ( Demand Draft / CTS Cheque Return
                  charge 500/-){" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Feedepositionmode;
