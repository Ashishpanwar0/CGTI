import React from 'react'
import CGTIlogo from "../assets/CGTIlogo.png";

function Homesidebar() {
  return (
    <>
    <h2>Computer Guru Training Institute</h2>
    <br />
    <img src={CGTIlogo} alt="Homeside" />
    <br />
    <section>
        <div>
            <i class="fa-solid fa-location-dot"></i>
        </div>
        <div>
            <h2>Main Branch:</h2>
            <p>Near Saurya Hotel, Gali No. 15, Geeta Nagar, IDPL, Virbhadra, Rishikesh, Dist. Dehradun, Uttarakhand-249202</p>

            <h2>Branch-2:</h2>
            <p>Guljar Farm, Gali No. 22, Near New Super Bakery, Hatt Road, Shyampur, Rishikesh, Dist. Dehradun, Uttarakhand-249204</p>




        </div>
    </section>
    <section>
        <div>
            <i class="fa-solid fa-at"></i>
        </div>
        <div>
            <h2>MAIL US DAILY:</h2>
            <p>
                support@computerguru.co.in
                cgtirishikesh@gmail.com
            </p>

        </div>
    </section>
    <section>
        <div>

        </div>
        <div>
            <h2>CALL US 24/7:</h2>
            <p>+91-7500679066
                +91-7455857367
            </p>

        </div>
    </section>
    <section >
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
    </section>


    </>
  )
}

export default Homesidebar